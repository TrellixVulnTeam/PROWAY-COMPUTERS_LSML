/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { concat, defer, from, of, pipe } from 'rxjs';
import { concatMap, first, map, mergeMap, tap } from 'rxjs/operators';
import { ActivationStart, ChildActivationStart } from '../events';
import { redirectingNavigationError } from '../navigation_canceling_error';
import { isUrlTree } from '../url_tree';
import { wrapIntoObservable } from '../utils/collection';
import { getCanActivateChild, getToken } from '../utils/preactivation';
import { isBoolean, isCanActivate, isCanActivateChild, isCanDeactivate, isCanLoad, isCanMatch } from '../utils/type_guards';
import { prioritizedGuardValue } from './prioritized_guard_value';
export function checkGuards(moduleInjector, forwardEvent) {
    return mergeMap(t => {
        const { targetSnapshot, currentSnapshot, guards: { canActivateChecks, canDeactivateChecks } } = t;
        if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
            return of({ ...t, guardsResult: true });
        }
        return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, moduleInjector)
            .pipe(mergeMap(canDeactivate => {
            return canDeactivate && isBoolean(canDeactivate) ?
                runCanActivateChecks(targetSnapshot, canActivateChecks, moduleInjector, forwardEvent) :
                of(canDeactivate);
        }), map(guardsResult => ({ ...t, guardsResult })));
    });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, moduleInjector) {
    return from(checks).pipe(mergeMap(check => runCanDeactivate(check.component, check.route, currRSS, futureRSS, moduleInjector)), first(result => {
        return result !== true;
    }, true));
}
function runCanActivateChecks(futureSnapshot, checks, moduleInjector, forwardEvent) {
    return from(checks).pipe(concatMap((check) => {
        return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, moduleInjector), runCanActivate(futureSnapshot, check.route, moduleInjector));
    }), first(result => {
        return result !== true;
    }, true));
}
/**
 * This should fire off `ActivationStart` events for each route being activated at this
 * level.
 * In other words, if you're activating `a` and `b` below, `path` will contain the
 * `ActivatedRouteSnapshot`s for both and we will fire `ActivationStart` for both. Always
 * return
 * `true` so checks continue to run.
 */
function fireActivationStart(snapshot, forwardEvent) {
    if (snapshot !== null && forwardEvent) {
        forwardEvent(new ActivationStart(snapshot));
    }
    return of(true);
}
/**
 * This should fire off `ChildActivationStart` events for each route being activated at this
 * level.
 * In other words, if you're activating `a` and `b` below, `path` will contain the
 * `ActivatedRouteSnapshot`s for both and we will fire `ChildActivationStart` for both. Always
 * return
 * `true` so checks continue to run.
 */
function fireChildActivationStart(snapshot, forwardEvent) {
    if (snapshot !== null && forwardEvent) {
        forwardEvent(new ChildActivationStart(snapshot));
    }
    return of(true);
}
function runCanActivate(futureRSS, futureARS, moduleInjector) {
    const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
    if (!canActivate || canActivate.length === 0)
        return of(true);
    const canActivateObservables = canActivate.map((c) => {
        return defer(() => {
            const guard = getToken(c, futureARS, moduleInjector);
            const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) :
                guard(futureARS, futureRSS);
            return wrapIntoObservable(guardVal).pipe(first());
        });
    });
    return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, moduleInjector) {
    const futureARS = path[path.length - 1];
    const canActivateChildGuards = path.slice(0, path.length - 1)
        .reverse()
        .map(p => getCanActivateChild(p))
        .filter(_ => _ !== null);
    const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
        return defer(() => {
            const guardsMapped = d.guards.map((c) => {
                const guard = getToken(c, d.node, moduleInjector);
                const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) :
                    guard(futureARS, futureRSS);
                return wrapIntoObservable(guardVal).pipe(first());
            });
            return of(guardsMapped).pipe(prioritizedGuardValue());
        });
    });
    return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, moduleInjector) {
    const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
    if (!canDeactivate || canDeactivate.length === 0)
        return of(true);
    const canDeactivateObservables = canDeactivate.map((c) => {
        const guard = getToken(c, currARS, moduleInjector);
        const guardVal = isCanDeactivate(guard) ?
            guard.canDeactivate(component, currARS, currRSS, futureRSS) :
            guard(component, currARS, currRSS, futureRSS);
        return wrapIntoObservable(guardVal).pipe(first());
    });
    return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
export function runCanLoadGuards(injector, route, segments, urlSerializer) {
    const canLoad = route.canLoad;
    if (canLoad === undefined || canLoad.length === 0) {
        return of(true);
    }
    const canLoadObservables = canLoad.map((injectionToken) => {
        const guard = injector.get(injectionToken);
        const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : guard(route, segments);
        return wrapIntoObservable(guardVal);
    });
    return of(canLoadObservables)
        .pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
    return pipe(tap((result) => {
        if (!isUrlTree(result))
            return;
        throw redirectingNavigationError(urlSerializer, result);
    }), map(result => result === true));
}
export function runCanMatchGuards(injector, route, segments, urlSerializer) {
    const canMatch = route.canMatch;
    if (!canMatch || canMatch.length === 0)
        return of(true);
    const canMatchObservables = canMatch.map(injectionToken => {
        const guard = injector.get(injectionToken);
        const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : guard(route, segments);
        return wrapIntoObservable(guardVal);
    });
    return of(canMatchObservables)
        .pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tfZ3VhcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9vcGVyYXRvcnMvY2hlY2tfZ3VhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBd0MsRUFBRSxFQUFvQixJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0csT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUMsZUFBZSxFQUFFLG9CQUFvQixFQUFRLE1BQU0sV0FBVyxDQUFDO0FBRXZFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBR3pFLE9BQU8sRUFBQyxTQUFTLEVBQXFDLE1BQU0sYUFBYSxDQUFDO0FBQzFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBNkIsbUJBQW1CLEVBQUUsUUFBUSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDakcsT0FBTyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUUxSCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUVoRSxNQUFNLFVBQVUsV0FBVyxDQUFDLGNBQXdCLEVBQUUsWUFBbUM7SUFFdkYsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbEIsTUFBTSxFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEVBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUM5RixJ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QUFDO0lBRXhELE1BQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUN4RCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFzQixjQUFjLENBQUMsQ0FBQztRQUNoRSxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlGLE9BQU8sa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUN6QixJQUFJLENBQ0QscUJBQXFCLEVBQUUsRUFDdkIsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQ25DLENBQUM7QUFDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RW52aXJvbm1lbnRJbmplY3RvciwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb25jYXQsIGRlZmVyLCBmcm9tLCBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmFibGUsIG9mLCBPcGVyYXRvckZ1bmN0aW9uLCBwaXBlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y29uY2F0TWFwLCBmaXJzdCwgbWFwLCBtZXJnZU1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7QWN0aXZhdGlvblN0YXJ0LCBDaGlsZEFjdGl2YXRpb25TdGFydCwgRXZlbnR9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQge0NhbkxvYWQsIENhbkxvYWRGbiwgQ2FuTWF0Y2gsIENhbk1hdGNoRm4sIFJvdXRlfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtyZWRpcmVjdGluZ05hdmlnYXRpb25FcnJvcn0gZnJvbSAnLi4vbmF2aWdhdGlvbl9jYW5jZWxpbmdfZXJyb3InO1xuaW1wb3J0IHtOYXZpZ2F0aW9uVHJhbnNpdGlvbn0gZnJvbSAnLi4vcm91dGVyJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdH0gZnJvbSAnLi4vcm91dGVyX3N0YXRlJztcbmltcG9ydCB7aXNVcmxUcmVlLCBVcmxTZWdtZW50LCBVcmxTZXJpYWxpemVyLCBVcmxUcmVlfSBmcm9tICcuLi91cmxfdHJlZSc7XG5pbXBvcnQge3dyYXBJbnRvT2JzZXJ2YWJsZX0gZnJvbSAnLi4vdXRpbHMvY29sbGVjdGlvbic7XG5pbXBvcnQge0NhbkFjdGl2YXRlLCBDYW5EZWFjdGl2YXRlLCBnZXRDYW5BY3RpdmF0ZUNoaWxkLCBnZXRUb2tlbn0gZnJvbSAnLi4vdXRpbHMvcHJlYWN0aXZhdGlvbic7XG5pbXBvcnQge2lzQm9vbGVhbiwgaXNDYW5BY3RpdmF0ZSwgaXNDYW5BY3RpdmF0ZUNoaWxkLCBpc0NhbkRlYWN0aXZhdGUsIGlzQ2FuTG9hZCwgaXNDYW5NYXRjaH0gZnJvbSAnLi4vdXRpbHMvdHlwZV9ndWFyZHMnO1xuXG5pbXBvcnQge3ByaW9yaXRpemVkR3VhcmRWYWx1ZX0gZnJvbSAnLi9wcmlvcml0aXplZF9ndWFyZF92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0d1YXJkcyhtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IsIGZvcndhcmRFdmVudD86IChldnQ6IEV2ZW50KSA9PiB2b2lkKTpcbiAgICBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248TmF2aWdhdGlvblRyYW5zaXRpb24+IHtcbiAgcmV0dXJuIG1lcmdlTWFwKHQgPT4ge1xuICAgIGNvbnN0IHt0YXJnZXRTbmFwc2hvdCwgY3VycmVudFNuYXBzaG90LCBndWFyZHM6IHtjYW5BY3RpdmF0ZUNoZWNrcywgY2FuRGVhY3RpdmF0ZUNoZWNrc319ID0gdDtcbiAgICBpZiAoY2FuRGVhY3RpdmF0ZUNoZWNrcy5sZW5ndGggPT09IDAgJiYgY2FuQWN0aXZhdGVDaGVja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gb2Yoey4uLnQsIGd1YXJkc1Jlc3VsdDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHJldHVybiBydW5DYW5EZWFjdGl2YXRlQ2hlY2tzKFxuICAgICAgICAgICAgICAgY2FuRGVhY3RpdmF0ZUNoZWNrcywgdGFyZ2V0U25hcHNob3QhLCBjdXJyZW50U25hcHNob3QsIG1vZHVsZUluamVjdG9yKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1lcmdlTWFwKGNhbkRlYWN0aXZhdGUgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY2FuRGVhY3RpdmF0ZSAmJiBpc0Jvb2xlYW4oY2FuRGVhY3RpdmF0ZSkgP1xuICAgICAgICAgICAgICAgICAgcnVuQ2FuQWN0aXZhdGVDaGVja3MoXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U25hcHNob3QhLCBjYW5BY3RpdmF0ZUNoZWNrcywgbW9kdWxlSW5qZWN0b3IsIGZvcndhcmRFdmVudCkgOlxuICAgICAgICAgICAgICAgICAgb2YoY2FuRGVhY3RpdmF0ZSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcChndWFyZHNSZXN1bHQgPT4gKHsuLi50LCBndWFyZHNSZXN1bHR9KSkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcnVuQ2FuRGVhY3RpdmF0ZUNoZWNrcyhcbiAgICBjaGVja3M6IENhbkRlYWN0aXZhdGVbXSwgZnV0dXJlUlNTOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBjdXJyUlNTOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICAgIG1vZHVsZUluamVjdG9yOiBJbmplY3Rvcikge1xuICByZXR1cm4gZnJvbShjaGVja3MpLnBpcGUoXG4gICAgICBtZXJnZU1hcChcbiAgICAgICAgICBjaGVjayA9PlxuICAgICAgICAgICAgICBydW5DYW5EZWFjdGl2YXRlKGNoZWNrLmNvbXBvbmVudCwgY2hlY2sucm91dGUsIGN1cnJSU1MsIGZ1dHVyZVJTUywgbW9kdWxlSW5qZWN0b3IpKSxcbiAgICAgIGZpcnN0KHJlc3VsdCA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHQgIT09IHRydWU7XG4gICAgICB9LCB0cnVlIGFzIGJvb2xlYW4gfCBVcmxUcmVlKSk7XG59XG5cbmZ1bmN0aW9uIHJ1bkNhbkFjdGl2YXRlQ2hlY2tzKFxuICAgIGZ1dHVyZVNuYXBzaG90OiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBjaGVja3M6IENhbkFjdGl2YXRlW10sIG1vZHVsZUluamVjdG9yOiBJbmplY3RvcixcbiAgICBmb3J3YXJkRXZlbnQ/OiAoZXZ0OiBFdmVudCkgPT4gdm9pZCkge1xuICByZXR1cm4gZnJvbShjaGVja3MpLnBpcGUoXG4gICAgICBjb25jYXRNYXAoKGNoZWNrOiBDYW5BY3RpdmF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gY29uY2F0KFxuICAgICAgICAgICAgZmlyZUNoaWxkQWN0aXZhdGlvblN0YXJ0KGNoZWNrLnJvdXRlLnBhcmVudCwgZm9yd2FyZEV2ZW50KSxcbiAgICAgICAgICAgIGZpcmVBY3RpdmF0aW9uU3RhcnQoY2hlY2sucm91dGUsIGZvcndhcmRFdmVudCksXG4gICAgICAgICAgICBydW5DYW5BY3RpdmF0ZUNoaWxkKGZ1dHVyZVNuYXBzaG90LCBjaGVjay5wYXRoLCBtb2R1bGVJbmplY3RvciksXG4gICAgICAgICAgICBydW5DYW5BY3RpdmF0ZShmdXR1cmVTbmFwc2hvdCwgY2hlY2sucm91dGUsIG1vZHVsZUluamVjdG9yKSk7XG4gICAgICB9KSxcbiAgICAgIGZpcnN0KHJlc3VsdCA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHQgIT09IHRydWU7XG4gICAgICB9LCB0cnVlIGFzIGJvb2xlYW4gfCBVcmxUcmVlKSk7XG59XG5cbi8qKlxuICogVGhpcyBzaG91bGQgZmlyZSBvZmYgYEFjdGl2YXRpb25TdGFydGAgZXZlbnRzIGZvciBlYWNoIHJvdXRlIGJlaW5nIGFjdGl2YXRlZCBhdCB0aGlzXG4gKiBsZXZlbC5cbiAqIEluIG90aGVyIHdvcmRzLCBpZiB5b3UncmUgYWN0aXZhdGluZyBgYWAgYW5kIGBiYCBiZWxvdywgYHBhdGhgIHdpbGwgY29udGFpbiB0aGVcbiAqIGBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90YHMgZm9yIGJvdGggYW5kIHdlIHdpbGwgZmlyZSBgQWN0aXZhdGlvblN0YXJ0YCBmb3IgYm90aC4gQWx3YXlzXG4gKiByZXR1cm5cbiAqIGB0cnVlYCBzbyBjaGVja3MgY29udGludWUgdG8gcnVuLlxuICovXG5mdW5jdGlvbiBmaXJlQWN0aXZhdGlvblN0YXJ0KFxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fG51bGwsXG4gICAgZm9yd2FyZEV2ZW50PzogKGV2dDogRXZlbnQpID0+IHZvaWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgaWYgKHNuYXBzaG90ICE9PSBudWxsICYmIGZvcndhcmRFdmVudCkge1xuICAgIGZvcndhcmRFdmVudChuZXcgQWN0aXZhdGlvblN0YXJ0KHNuYXBzaG90KSk7XG4gIH1cbiAgcmV0dXJuIG9mKHRydWUpO1xufVxuXG4vKipcbiAqIFRoaXMgc2hvdWxkIGZpcmUgb2ZmIGBDaGlsZEFjdGl2YXRpb25TdGFydGAgZXZlbnRzIGZvciBlYWNoIHJvdXRlIGJlaW5nIGFjdGl2YXRlZCBhdCB0aGlzXG4gKiBsZXZlbC5cbiAqIEluIG90aGVyIHdvcmRzLCBpZiB5b3UncmUgYWN0aXZhdGluZyBgYWAgYW5kIGBiYCBiZWxvdywgYHBhdGhgIHdpbGwgY29udGFpbiB0aGVcbiAqIGBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90YHMgZm9yIGJvdGggYW5kIHdlIHdpbGwgZmlyZSBgQ2hpbGRBY3RpdmF0aW9uU3RhcnRgIGZvciBib3RoLiBBbHdheXNcbiAqIHJldHVyblxuICogYHRydWVgIHNvIGNoZWNrcyBjb250aW51ZSB0byBydW4uXG4gKi9cbmZ1bmN0aW9uIGZpcmVDaGlsZEFjdGl2YXRpb25TdGFydChcbiAgICBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdHxudWxsLFxuICAgIGZvcndhcmRFdmVudD86IChldnQ6IEV2ZW50KSA9PiB2b2lkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gIGlmIChzbmFwc2hvdCAhPT0gbnVsbCAmJiBmb3J3YXJkRXZlbnQpIHtcbiAgICBmb3J3YXJkRXZlbnQobmV3IENoaWxkQWN0aXZhdGlvblN0YXJ0KHNuYXBzaG90KSk7XG4gIH1cbiAgcmV0dXJuIG9mKHRydWUpO1xufVxuXG5mdW5jdGlvbiBydW5DYW5BY3RpdmF0ZShcbiAgICBmdXR1cmVSU1M6IFJvdXRlclN0YXRlU25hcHNob3QsIGZ1dHVyZUFSUzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBtb2R1bGVJbmplY3RvcjogSW5qZWN0b3IpOiBPYnNlcnZhYmxlPGJvb2xlYW58VXJsVHJlZT4ge1xuICBjb25zdCBjYW5BY3RpdmF0ZSA9IGZ1dHVyZUFSUy5yb3V0ZUNvbmZpZyA/IGZ1dHVyZUFSUy5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZSA6IG51bGw7XG4gIGlmICghY2FuQWN0aXZhdGUgfHwgY2FuQWN0aXZhdGUubGVuZ3RoID09PSAwKSByZXR1cm4gb2YodHJ1ZSk7XG5cbiAgY29uc3QgY2FuQWN0aXZhdGVPYnNlcnZhYmxlcyA9IGNhbkFjdGl2YXRlLm1hcCgoYzogYW55KSA9PiB7XG4gICAgcmV0dXJuIGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGd1YXJkID0gZ2V0VG9rZW4oYywgZnV0dXJlQVJTLCBtb2R1bGVJbmplY3Rvcik7XG4gICAgICBjb25zdCBndWFyZFZhbCA9IGlzQ2FuQWN0aXZhdGUoZ3VhcmQpID8gZ3VhcmQuY2FuQWN0aXZhdGUoZnV0dXJlQVJTLCBmdXR1cmVSU1MpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWFyZChmdXR1cmVBUlMsIGZ1dHVyZVJTUyk7XG4gICAgICByZXR1cm4gd3JhcEludG9PYnNlcnZhYmxlKGd1YXJkVmFsKS5waXBlKGZpcnN0KCkpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mKGNhbkFjdGl2YXRlT2JzZXJ2YWJsZXMpLnBpcGUocHJpb3JpdGl6ZWRHdWFyZFZhbHVlKCkpO1xufVxuXG5mdW5jdGlvbiBydW5DYW5BY3RpdmF0ZUNoaWxkKFxuICAgIGZ1dHVyZVJTUzogUm91dGVyU3RhdGVTbmFwc2hvdCwgcGF0aDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdFtdLFxuICAgIG1vZHVsZUluamVjdG9yOiBJbmplY3Rvcik6IE9ic2VydmFibGU8Ym9vbGVhbnxVcmxUcmVlPiB7XG4gIGNvbnN0IGZ1dHVyZUFSUyA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcblxuICBjb25zdCBjYW5BY3RpdmF0ZUNoaWxkR3VhcmRzID0gcGF0aC5zbGljZSgwLCBwYXRoLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocCA9PiBnZXRDYW5BY3RpdmF0ZUNoaWxkKHApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXyA9PiBfICE9PSBudWxsKTtcblxuICBjb25zdCBjYW5BY3RpdmF0ZUNoaWxkR3VhcmRzTWFwcGVkID0gY2FuQWN0aXZhdGVDaGlsZEd1YXJkcy5tYXAoKGQ6IGFueSkgPT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBndWFyZHNNYXBwZWQgPSBkLmd1YXJkcy5tYXAoKGM6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBndWFyZCA9IGdldFRva2VuKGMsIGQubm9kZSwgbW9kdWxlSW5qZWN0b3IpO1xuICAgICAgICBjb25zdCBndWFyZFZhbCA9IGlzQ2FuQWN0aXZhdGVDaGlsZChndWFyZCkgPyBndWFyZC5jYW5BY3RpdmF0ZUNoaWxkKGZ1dHVyZUFSUywgZnV0dXJlUlNTKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1YXJkKGZ1dHVyZUFSUywgZnV0dXJlUlNTKTtcbiAgICAgICAgcmV0dXJuIHdyYXBJbnRvT2JzZXJ2YWJsZShndWFyZFZhbCkucGlwZShmaXJzdCgpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9mKGd1YXJkc01hcHBlZCkucGlwZShwcmlvcml0aXplZEd1YXJkVmFsdWUoKSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2YoY2FuQWN0aXZhdGVDaGlsZEd1YXJkc01hcHBlZCkucGlwZShwcmlvcml0aXplZEd1YXJkVmFsdWUoKSk7XG59XG5cbmZ1bmN0aW9uIHJ1bkNhbkRlYWN0aXZhdGUoXG4gICAgY29tcG9uZW50OiBPYmplY3R8bnVsbCwgY3VyckFSUzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VyclJTUzogUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgICBmdXR1cmVSU1M6IFJvdXRlclN0YXRlU25hcHNob3QsIG1vZHVsZUluamVjdG9yOiBJbmplY3Rvcik6IE9ic2VydmFibGU8Ym9vbGVhbnxVcmxUcmVlPiB7XG4gIGNvbnN0IGNhbkRlYWN0aXZhdGUgPSBjdXJyQVJTICYmIGN1cnJBUlMucm91dGVDb25maWcgPyBjdXJyQVJTLnJvdXRlQ29uZmlnLmNhbkRlYWN0aXZhdGUgOiBudWxsO1xuICBpZiAoIWNhbkRlYWN0aXZhdGUgfHwgY2FuRGVhY3RpdmF0ZS5sZW5ndGggPT09IDApIHJldHVybiBvZih0cnVlKTtcbiAgY29uc3QgY2FuRGVhY3RpdmF0ZU9ic2VydmFibGVzID0gY2FuRGVhY3RpdmF0ZS5tYXAoKGM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGd1YXJkID0gZ2V0VG9rZW4oYywgY3VyckFSUywgbW9kdWxlSW5qZWN0b3IpO1xuICAgIGNvbnN0IGd1YXJkVmFsID0gaXNDYW5EZWFjdGl2YXRlKGd1YXJkKSA/XG4gICAgICAgIGd1YXJkLmNhbkRlYWN0aXZhdGUoY29tcG9uZW50ISwgY3VyckFSUywgY3VyclJTUywgZnV0dXJlUlNTKSA6XG4gICAgICAgIGd1YXJkKGNvbXBvbmVudCwgY3VyckFSUywgY3VyclJTUywgZnV0dXJlUlNTKTtcbiAgICByZXR1cm4gd3JhcEludG9PYnNlcnZhYmxlKGd1YXJkVmFsKS5waXBlKGZpcnN0KCkpO1xuICB9KTtcbiAgcmV0dXJuIG9mKGNhbkRlYWN0aXZhdGVPYnNlcnZhYmxlcykucGlwZShwcmlvcml0aXplZEd1YXJkVmFsdWUoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5DYW5Mb2FkR3VhcmRzKFxuICAgIGluamVjdG9yOiBFbnZpcm9ubWVudEluamVjdG9yLCByb3V0ZTogUm91dGUsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplcik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICBjb25zdCBjYW5Mb2FkID0gcm91dGUuY2FuTG9hZDtcbiAgaWYgKGNhbkxvYWQgPT09IHVuZGVmaW5lZCB8fCBjYW5Mb2FkLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IGNhbkxvYWRPYnNlcnZhYmxlcyA9IGNhbkxvYWQubWFwKChpbmplY3Rpb25Ub2tlbjogYW55KSA9PiB7XG4gICAgY29uc3QgZ3VhcmQgPSBpbmplY3Rvci5nZXQ8Q2FuTG9hZHxDYW5Mb2FkRm4+KGluamVjdGlvblRva2VuKTtcbiAgICBjb25zdCBndWFyZFZhbCA9IGlzQ2FuTG9hZChndWFyZCkgPyBndWFyZC5jYW5Mb2FkKHJvdXRlLCBzZWdtZW50cykgOiBndWFyZChyb3V0ZSwgc2VnbWVudHMpO1xuICAgIHJldHVybiB3cmFwSW50b09ic2VydmFibGUoZ3VhcmRWYWwpO1xuICB9KTtcblxuICByZXR1cm4gb2YoY2FuTG9hZE9ic2VydmFibGVzKVxuICAgICAgLnBpcGUoXG4gICAgICAgICAgcHJpb3JpdGl6ZWRHdWFyZFZhbHVlKCksXG4gICAgICAgICAgcmVkaXJlY3RJZlVybFRyZWUodXJsU2VyaWFsaXplciksXG4gICAgICApO1xufVxuXG5mdW5jdGlvbiByZWRpcmVjdElmVXJsVHJlZSh1cmxTZXJpYWxpemVyOiBVcmxTZXJpYWxpemVyKTpcbiAgICBPcGVyYXRvckZ1bmN0aW9uPFVybFRyZWV8Ym9vbGVhbiwgYm9vbGVhbj4ge1xuICByZXR1cm4gcGlwZShcbiAgICAgIHRhcCgocmVzdWx0OiBVcmxUcmVlfGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKCFpc1VybFRyZWUocmVzdWx0KSkgcmV0dXJuO1xuXG4gICAgICAgIHRocm93IHJlZGlyZWN0aW5nTmF2aWdhdGlvbkVycm9yKHVybFNlcmlhbGl6ZXIsIHJlc3VsdCk7XG4gICAgICB9KSxcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0ID09PSB0cnVlKSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkNhbk1hdGNoR3VhcmRzKFxuICAgIGluamVjdG9yOiBJbmplY3Rvciwgcm91dGU6IFJvdXRlLCBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICAgIHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgY29uc3QgY2FuTWF0Y2ggPSByb3V0ZS5jYW5NYXRjaDtcbiAgaWYgKCFjYW5NYXRjaCB8fCBjYW5NYXRjaC5sZW5ndGggPT09IDApIHJldHVybiBvZih0cnVlKTtcblxuICBjb25zdCBjYW5NYXRjaE9ic2VydmFibGVzID0gY2FuTWF0Y2gubWFwKGluamVjdGlvblRva2VuID0+IHtcbiAgICBjb25zdCBndWFyZCA9IGluamVjdG9yLmdldDxDYW5NYXRjaHxDYW5NYXRjaEZuPihpbmplY3Rpb25Ub2tlbik7XG4gICAgY29uc3QgZ3VhcmRWYWwgPSBpc0Nhbk1hdGNoKGd1YXJkKSA/IGd1YXJkLmNhbk1hdGNoKHJvdXRlLCBzZWdtZW50cykgOiBndWFyZChyb3V0ZSwgc2VnbWVudHMpO1xuICAgIHJldHVybiB3cmFwSW50b09ic2VydmFibGUoZ3VhcmRWYWwpO1xuICB9KTtcblxuICByZXR1cm4gb2YoY2FuTWF0Y2hPYnNlcnZhYmxlcylcbiAgICAgIC5waXBlKFxuICAgICAgICAgIHByaW9yaXRpemVkR3VhcmRWYWx1ZSgpLFxuICAgICAgICAgIHJlZGlyZWN0SWZVcmxUcmVlKHVybFNlcmlhbGl6ZXIpLFxuICAgICAgKTtcbn1cbiJdfQ==