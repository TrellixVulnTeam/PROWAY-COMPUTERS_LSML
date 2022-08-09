/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import '../util/ng_dev_mode';
import { RuntimeError } from '../errors';
import { stringify } from '../util/stringify';
import { resolveForwardRef } from './forward_ref';
import { getInjectImplementation, injectRootLimpMode } from './inject_switch';
import { InjectFlags } from './interface/injector';
const _THROW_IF_NOT_FOUND = {};
export const THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
/*
 * Name of a property (that we patch onto DI decorator), which is used as an annotation of which
 * InjectFlag this decorator represents. This allows to avoid direct references to the DI decorators
 * in the code, thus making them tree-shakable.
 */
const DI_DECORATOR_FLAG = '__NG_DI_FLAG__';
export const NG_TEMP_TOKEN_PATH = 'ngTempTokenPath';
const NG_TOKEN_PATH = 'ngTokenPath';
const NEW_LINE = /\n/gm;
const NO_NEW_LINE = 'ɵ';
export const SOURCE = '__source';
/**
 * Current injector value used by `inject`.
 * - `undefined`: it is an error to call `inject`
 * - `null`: `inject` can be called but there is no injector (limp-mode).
 * - Injector instance: Use the injector for resolution.
 */
let _currentInjector = undefined;
export function setCurrentInjector(injector) {
    const former = _currentInjector;
    _currentInjector = injector;
    return former;
}
export function injectInjectorOnly(token, flags = InjectFlags.Default) {
    if (_currentInjector === undefined) {
        throw new RuntimeError(-203 /* RuntimeErrorCode.MISSING_INJECTION_CONTEXT */, ngDevMode &&
            `inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with \`EnvironmentInjector#runInContext\`.`);
    }
    else if (_currentInjector === null) {
        return injectRootLimpMode(token, undefined, flags);
    }
    else {
        return _currentInjector.get(token, flags & InjectFlags.Optional ? null : undefined, flags);
    }
}
export function ɵɵinject(token, flags = InjectFlags.Default) {
    return (getInjectImplementation() || injectInjectorOnly)(resolveForwardRef(token), flags);
}
/**
 * Throws an error indicating that a factory function could not be generated by the compiler for a
 * particular class.
 *
 * The name of the class is not mentioned here, but will be in the generated factory function name
 * and thus in the stack trace.
 *
 * @codeGenApi
 */
export function ɵɵinvalidFactoryDep(index) {
    throw new RuntimeError(202 /* RuntimeErrorCode.INVALID_FACTORY_DEPENDENCY */, ngDevMode &&
        `This constructor is not compatible with Angular Dependency Injection because its dependency at index ${index} of the parameter list is invalid.
This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.

Please check that 1) the type for the parameter at index ${index} is correct and 2) the correct Angular decorators are defined for this class and its ancestors.`);
}
/**
 * Injects a token from the currently active injector.
 * `inject` is only supported during instantiation of a dependency by the DI system. It can be used
 * during:
 * - Construction (via the `constructor`) of a class being instantiated by the DI system, such
 * as an `@Injectable` or `@Component`.
 * - In the initializer for fields of such classes.
 * - In the factory function specified for `useFactory` of a `Provider` or an `@Injectable`.
 * - In the `factory` function specified for an `InjectionToken`.
 *
 * @param token A token that represents a dependency that should be injected.
 * @param flags Optional flags that control how injection is executed.
 * The flags correspond to injection strategies that can be specified with
 * parameter decorators `@Host`, `@Self`, `@SkipSef`, and `@Optional`.
 * @returns the injected value if operation is successful, `null` otherwise.
 * @throws if called outside of a supported context.
 *
 * @usageNotes
 * In practice the `inject()` calls are allowed in a constructor, a constructor parameter and a
 * field initializer:
 *
 * ```typescript
 * @Injectable({providedIn: 'root'})
 * export class Car {
 *   radio: Radio|undefined;
 *   // OK: field initializer
 *   spareTyre = inject(Tyre);
 *
 *   constructor() {
 *     // OK: constructor body
 *     this.radio = inject(Radio);
 *   }
 * }
 * ```
 *
 * It is also legal to call `inject` from a provider's factory:
 *
 * ```typescript
 * providers: [
 *   {provide: Car, useFactory: () => {
 *     // OK: a class factory
 *     const engine = inject(Engine);
 *     return new Car(engine);
 *   }}
 * ]
 * ```
 *
 * Calls to the `inject()` function outside of the class creation context will result in error. Most
 * notably, calls to `inject()` are disallowed after a class instance was created, in methods
 * (including lifecycle hooks):
 *
 * ```typescript
 * @Component({ ... })
 * export class CarComponent {
 *   ngOnInit() {
 *     // ERROR: too late, the component instance was already created
 *     const engine = inject(Engine);
 *     engine.start();
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export function inject(token, flags = InjectFlags.Default) {
    if (typeof flags !== 'number') {
        // While TypeScript doesn't accept it without a cast, bitwise OR with false-y values in
        // JavaScript is a no-op. We can use that for a very codesize-efficient conversion from
        // `InjectOptions` to `InjectFlags`.
        flags = (0 /* InternalInjectFlags.Default */ | // comment to force a line break in the formatter
            (flags.optional && 8 /* InternalInjectFlags.Optional */) |
            (flags.host && 1 /* InternalInjectFlags.Host */) |
            (flags.self && 2 /* InternalInjectFlags.Self */) |
            (flags.skipSelf && 4 /* InternalInjectFlags.SkipSelf */));
    }
    return ɵɵinject(token, flags);
}
export function injectArgs(types) {
    const args = [];
    for (let i = 0; i < types.length; i++) {
        const arg = resolveForwardRef(types[i]);
        if (Array.isArray(arg)) {
            if (arg.length === 0) {
                throw new RuntimeError(900 /* RuntimeErrorCode.INVALID_DIFFER_INPUT */, ngDevMode && 'Arguments array must have arguments.');
            }
            let type = undefined;
            let flags = InjectFlags.Default;
            for (let j = 0; j < arg.length; j++) {
                const meta = arg[j];
                const flag = getInjectFlag(meta);
                if (typeof flag === 'number') {
                    // Special case when we handle @Inject decorator.
                    if (flag === -1 /* DecoratorFlags.Inject */) {
                        type = meta.token;
                    }
                    else {
                        flags |= flag;
                    }
                }
                else {
                    type = meta;
                }
            }
            args.push(ɵɵinject(type, flags));
        }
        else {
            args.push(ɵɵinject(arg));
        }
    }
    return args;
}
/**
 * Attaches a given InjectFlag to a given decorator using monkey-patching.
 * Since DI decorators can be used in providers `deps` array (when provider is configured using
 * `useFactory`) without initialization (e.g. `Host`) and as an instance (e.g. `new Host()`), we
 * attach the flag to make it available both as a static property and as a field on decorator
 * instance.
 *
 * @param decorator Provided DI decorator.
 * @param flag InjectFlag that should be applied.
 */
export function attachInjectFlag(decorator, flag) {
    decorator[DI_DECORATOR_FLAG] = flag;
    decorator.prototype[DI_DECORATOR_FLAG] = flag;
    return decorator;
}
/**
 * Reads monkey-patched property that contains InjectFlag attached to a decorator.
 *
 * @param token Token that may contain monkey-patched DI flags property.
 */
export function getInjectFlag(token) {
    return token[DI_DECORATOR_FLAG];
}
export function catchInjectorError(e, token, injectorErrorName, source) {
    const tokenPath = e[NG_TEMP_TOKEN_PATH];
    if (token[SOURCE]) {
        tokenPath.unshift(token[SOURCE]);
    }
    e.message = formatError('\n' + e.message, tokenPath, injectorErrorName, source);
    e[NG_TOKEN_PATH] = tokenPath;
    e[NG_TEMP_TOKEN_PATH] = null;
    throw e;
}
export function formatError(text, obj, injectorErrorName, source = null) {
    text = text && text.charAt(0) === '\n' && text.charAt(1) == NO_NEW_LINE ? text.slice(2) : text;
    let context = stringify(obj);
    if (Array.isArray(obj)) {
        context = obj.map(stringify).join(' -> ');
    }
    else if (typeof obj === 'object') {
        let parts = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let value = obj[key];
                parts.push(key + ':' + (typeof value === 'string' ? JSON.stringify(value) : stringify(value)));
            }
        }
        context = `{${parts.join(', ')}}`;
    }
    return `${injectorErrorName}${source ? '(' + source + ')' : ''}[${context}]: ${text.replace(NEW_LINE, '\n  ')}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3JfY29tcGF0aWJpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2luamVjdG9yX2NvbXBhdGliaWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQUMsWUFBWSxFQUFtQixNQUFNLFdBQVcsQ0FBQztBQUV6RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTVFLE9BQU8sRUFBaUIsV0FBVyxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBSXRGLE1BQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0FBQy9CLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDO0FBRXREOzs7O0dBSUc7QUFDSCxNQUFNLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO0FBQ3BELE1BQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNwQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDeEIsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUM7QUFFakM7Ozs7O0dBS0c7QUFDSCxJQUFJLGdCQUFnQixHQUE0QixTQUFTLENBQUM7QUFFMUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFFBQWlDO0lBQ2xFLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztJQUM1QixPQUFPLE1BQU0s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QUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekY7U0FDRjtRQUNELE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUNuQztJQUNELE9BQU8sR0FBRyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBTyxNQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICcuLi91dGlsL25nX2Rldl9tb2RlJztcblxuaW1wb3J0IHtSdW50aW1lRXJyb3IsIFJ1bnRpbWVFcnJvckNvZGV9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICcuLi91dGlsL3N0cmluZ2lmeSc7XG5cbmltcG9ydCB7cmVzb2x2ZUZvcndhcmRSZWZ9IGZyb20gJy4vZm9yd2FyZF9yZWYnO1xuaW1wb3J0IHtnZXRJbmplY3RJbXBsZW1lbnRhdGlvbiwgaW5qZWN0Um9vdExpbXBNb2RlfSBmcm9tICcuL2luamVjdF9zd2l0Y2gnO1xuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQge0RlY29yYXRvckZsYWdzLCBJbmplY3RGbGFncywgSW50ZXJuYWxJbmplY3RGbGFnc30gZnJvbSAnLi9pbnRlcmZhY2UvaW5qZWN0b3InO1xuaW1wb3J0IHtQcm92aWRlclRva2VufSBmcm9tICcuL3Byb3ZpZGVyX3Rva2VuJztcblxuXG5jb25zdCBfVEhST1dfSUZfTk9UX0ZPVU5EID0ge307XG5leHBvcnQgY29uc3QgVEhST1dfSUZfTk9UX0ZPVU5EID0gX1RIUk9XX0lGX05PVF9GT1VORDtcblxuLypcbiAqIE5hbWUgb2YgYSBwcm9wZXJ0eSAodGhhdCB3ZSBwYXRjaCBvbnRvIERJIGRlY29yYXRvciksIHdoaWNoIGlzIHVzZWQgYXMgYW4gYW5ub3RhdGlvbiBvZiB3aGljaFxuICogSW5qZWN0RmxhZyB0aGlzIGRlY29yYXRvciByZXByZXNlbnRzLiBUaGlzIGFsbG93cyB0byBhdm9pZCBkaXJlY3QgcmVmZXJlbmNlcyB0byB0aGUgREkgZGVjb3JhdG9yc1xuICogaW4gdGhlIGNvZGUsIHRodXMgbWFraW5nIHRoZW0gdHJlZS1zaGFrYWJsZS5cbiAqL1xuY29uc3QgRElfREVDT1JBVE9SX0ZMQUcgPSAnX19OR19ESV9GTEFHX18nO1xuXG5leHBvcnQgY29uc3QgTkdfVEVNUF9UT0tFTl9QQVRIID0gJ25nVGVtcFRva2VuUGF0aCc7XG5jb25zdCBOR19UT0tFTl9QQVRIID0gJ25nVG9rZW5QYXRoJztcbmNvbnN0IE5FV19MSU5FID0gL1xcbi9nbTtcbmNvbnN0IE5PX05FV19MSU5FID0gJ8m1JztcbmV4cG9ydCBjb25zdCBTT1VSQ0UgPSAnX19zb3VyY2UnO1xuXG4vKipcbiAqIEN1cnJlbnQgaW5qZWN0b3IgdmFsdWUgdXNlZCBieSBgaW5qZWN0YC5cbiAqIC0gYHVuZGVmaW5lZGA6IGl0IGlzIGFuIGVycm9yIHRvIGNhbGwgYGluamVjdGBcbiAqIC0gYG51bGxgOiBgaW5qZWN0YCBjYW4gYmUgY2FsbGVkIGJ1dCB0aGVyZSBpcyBubyBpbmplY3RvciAobGltcC1tb2RlKS5cbiAqIC0gSW5qZWN0b3IgaW5zdGFuY2U6IFVzZSB0aGUgaW5qZWN0b3IgZm9yIHJlc29sdXRpb24uXG4gKi9cbmxldCBfY3VycmVudEluamVjdG9yOiBJbmplY3Rvcnx1bmRlZmluZWR8bnVsbCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRJbmplY3RvcihpbmplY3RvcjogSW5qZWN0b3J8bnVsbHx1bmRlZmluZWQpOiBJbmplY3Rvcnx1bmRlZmluZWR8bnVsbCB7XG4gIGNvbnN0IGZvcm1lciA9IF9jdXJyZW50SW5qZWN0b3I7XG4gIF9jdXJyZW50SW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgcmV0dXJuIGZvcm1lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdEluamVjdG9yT25seTxUPih0b2tlbjogUHJvdmlkZXJUb2tlbjxUPik6IFQ7XG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0SW5qZWN0b3JPbmx5PFQ+KHRva2VuOiBQcm92aWRlclRva2VuPFQ+LCBmbGFncz86IEluamVjdEZsYWdzKTogVHxudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGluamVjdEluamVjdG9yT25seTxUPih0b2tlbjogUHJvdmlkZXJUb2tlbjxUPiwgZmxhZ3MgPSBJbmplY3RGbGFncy5EZWZhdWx0KTogVHxcbiAgICBudWxsIHtcbiAgaWYgKF9jdXJyZW50SW5qZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgIFJ1bnRpbWVFcnJvckNvZGUuTUlTU0lOR19JTkpFQ1RJT05fQ09OVEVYVCxcbiAgICAgICAgbmdEZXZNb2RlICYmXG4gICAgICAgICAgICBgaW5qZWN0KCkgbXVzdCBiZSBjYWxsZWQgZnJvbSBhbiBpbmplY3Rpb24gY29udGV4dCBzdWNoIGFzIGEgY29uc3RydWN0b3IsIGEgZmFjdG9yeSBmdW5jdGlvbiwgYSBmaWVsZCBpbml0aWFsaXplciwgb3IgYSBmdW5jdGlvbiB1c2VkIHdpdGggXFxgRW52aXJvbm1lbnRJbmplY3RvciNydW5JbkNvbnRleHRcXGAuYCk7XG4gIH0gZWxzZSBpZiAoX2N1cnJlbnRJbmplY3RvciA9PT0gbnVsbCkge1xuICAgIHJldHVybiBpbmplY3RSb290TGltcE1vZGUodG9rZW4sIHVuZGVmaW5lZCwgZmxhZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfY3VycmVudEluamVjdG9yLmdldCh0b2tlbiwgZmxhZ3MgJiBJbmplY3RGbGFncy5PcHRpb25hbCA/IG51bGwgOiB1bmRlZmluZWQsIGZsYWdzKTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlZCBpbnN0cnVjdGlvbjogaW5qZWN0cyBhIHRva2VuIGZyb20gdGhlIGN1cnJlbnRseSBhY3RpdmUgaW5qZWN0b3IuXG4gKlxuICogKEFkZGl0aW9uYWwgZG9jdW1lbnRhdGlvbiBtb3ZlZCB0byBgaW5qZWN0YCwgYXMgaXQgaXMgdGhlIHB1YmxpYyBBUEksIGFuZCBhbiBhbGlhcyBmb3IgdGhpc1xuICogaW5zdHJ1Y3Rpb24pXG4gKlxuICogQHNlZSBpbmplY3RcbiAqIEBjb2RlR2VuQXBpXG4gKiBAcHVibGljQXBpIFRoaXMgaW5zdHJ1Y3Rpb24gaGFzIGJlZW4gZW1pdHRlZCBieSBWaWV3RW5naW5lIGZvciBzb21lIHRpbWUgYW5kIGlzIGRlcGxveWVkIHRvIG5wbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVpbmplY3Q8VD4odG9rZW46IFByb3ZpZGVyVG9rZW48VD4pOiBUO1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVpbmplY3Q8VD4odG9rZW46IFByb3ZpZGVyVG9rZW48VD4sIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUfG51bGw7XG5leHBvcnQgZnVuY3Rpb24gybXJtWluamVjdDxUPih0b2tlbjogUHJvdmlkZXJUb2tlbjxUPiwgZmxhZ3MgPSBJbmplY3RGbGFncy5EZWZhdWx0KTogVHxudWxsIHtcbiAgcmV0dXJuIChnZXRJbmplY3RJbXBsZW1lbnRhdGlvbigpIHx8IGluamVjdEluamVjdG9yT25seSkocmVzb2x2ZUZvcndhcmRSZWYodG9rZW4pLCBmbGFncyk7XG59XG5cbi8qKlxuICogVGhyb3dzIGFuIGVycm9yIGluZGljYXRpbmcgdGhhdCBhIGZhY3RvcnkgZnVuY3Rpb24gY291bGQgbm90IGJlIGdlbmVyYXRlZCBieSB0aGUgY29tcGlsZXIgZm9yIGFcbiAqIHBhcnRpY3VsYXIgY2xhc3MuXG4gKlxuICogVGhlIG5hbWUgb2YgdGhlIGNsYXNzIGlzIG5vdCBtZW50aW9uZWQgaGVyZSwgYnV0IHdpbGwgYmUgaW4gdGhlIGdlbmVyYXRlZCBmYWN0b3J5IGZ1bmN0aW9uIG5hbWVcbiAqIGFuZCB0aHVzIGluIHRoZSBzdGFjayB0cmFjZS5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtWludmFsaWRGYWN0b3J5RGVwKGluZGV4OiBudW1iZXIpOiBuZXZlciB7XG4gIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICBSdW50aW1lRXJyb3JDb2RlLklOVkFMSURfRkFDVE9SWV9ERVBFTkRFTkNZLFxuICAgICAgbmdEZXZNb2RlICYmXG4gICAgICAgICAgYFRoaXMgY29uc3RydWN0b3IgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBBbmd1bGFyIERlcGVuZGVuY3kgSW5qZWN0aW9uIGJlY2F1c2UgaXRzIGRlcGVuZGVuY3kgYXQgaW5kZXggJHtcbiAgICAgICAgICAgICAgaW5kZXh9IG9mIHRoZSBwYXJhbWV0ZXIgbGlzdCBpcyBpbnZhbGlkLlxuVGhpcyBjYW4gaGFwcGVuIGlmIHRoZSBkZXBlbmRlbmN5IHR5cGUgaXMgYSBwcmltaXRpdmUgbGlrZSBhIHN0cmluZyBvciBpZiBhbiBhbmNlc3RvciBvZiB0aGlzIGNsYXNzIGlzIG1pc3NpbmcgYW4gQW5ndWxhciBkZWNvcmF0b3IuXG5cblBsZWFzZSBjaGVjayB0aGF0IDEpIHRoZSB0eXBlIGZvciB0aGUgcGFyYW1ldGVyIGF0IGluZGV4ICR7XG4gICAgICAgICAgICAgIGluZGV4fSBpcyBjb3JyZWN0IGFuZCAyKSB0aGUgY29ycmVjdCBBbmd1bGFyIGRlY29yYXRvcnMgYXJlIGRlZmluZWQgZm9yIHRoaXMgY2xhc3MgYW5kIGl0cyBhbmNlc3RvcnMuYCk7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgb3B0aW9ucyBhcmd1bWVudCB0byBgaW5qZWN0YC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBVc2Ugb3B0aW9uYWwgaW5qZWN0aW9uLCBhbmQgcmV0dXJuIGBudWxsYCBpZiB0aGUgcmVxdWVzdGVkIHRva2VuIGlzIG5vdCBmb3VuZC5cbiAgICovXG4gIG9wdGlvbmFsPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3RhcnQgaW5qZWN0aW9uIGF0IHRoZSBwYXJlbnQgb2YgdGhlIGN1cnJlbnQgaW5qZWN0b3IuXG4gICAqL1xuICBza2lwU2VsZj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE9ubHkgcXVlcnkgdGhlIGN1cnJlbnQgaW5qZWN0b3IgZm9yIHRoZSB0b2tlbiwgYW5kIGRvbid0IGZhbGwgYmFjayB0byB0aGUgcGFyZW50IGluamVjdG9yIGlmXG4gICAqIGl0J3Mgbm90IGZvdW5kLlxuICAgKi9cbiAgc2VsZj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFN0b3AgaW5qZWN0aW9uIGF0IHRoZSBob3N0IGNvbXBvbmVudCdzIGluamVjdG9yLiBPbmx5IHJlbGV2YW50IHdoZW4gaW5qZWN0aW5nIGZyb20gYW4gZWxlbWVudFxuICAgKiBpbmplY3RvciwgYW5kIGEgbm8tb3AgZm9yIGVudmlyb25tZW50IGluamVjdG9ycy5cbiAgICovXG4gIGhvc3Q/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBwYXJhbSB0b2tlbiBBIHRva2VuIHRoYXQgcmVwcmVzZW50cyBhIGRlcGVuZGVuY3kgdGhhdCBzaG91bGQgYmUgaW5qZWN0ZWQuXG4gKiBAcmV0dXJucyB0aGUgaW5qZWN0ZWQgdmFsdWUgaWYgb3BlcmF0aW9uIGlzIHN1Y2Nlc3NmdWwsIGBudWxsYCBvdGhlcndpc2UuXG4gKiBAdGhyb3dzIGlmIGNhbGxlZCBvdXRzaWRlIG9mIGEgc3VwcG9ydGVkIGNvbnRleHQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0PFQ+KHRva2VuOiBQcm92aWRlclRva2VuPFQ+KTogVDtcbi8qKlxuICogQHBhcmFtIHRva2VuIEEgdG9rZW4gdGhhdCByZXByZXNlbnRzIGEgZGVwZW5kZW5jeSB0aGF0IHNob3VsZCBiZSBpbmplY3RlZC5cbiAqIEBwYXJhbSBmbGFncyBDb250cm9sIGhvdyBpbmplY3Rpb24gaXMgZXhlY3V0ZWQuIFRoZSBmbGFncyBjb3JyZXNwb25kIHRvIGluamVjdGlvbiBzdHJhdGVnaWVzIHRoYXRcbiAqICAgICBjYW4gYmUgc3BlY2lmaWVkIHdpdGggcGFyYW1ldGVyIGRlY29yYXRvcnMgYEBIb3N0YCwgYEBTZWxmYCwgYEBTa2lwU2VsZmAsIGFuZCBgQE9wdGlvbmFsYC5cbiAqIEByZXR1cm5zIHRoZSBpbmplY3RlZCB2YWx1ZSBpZiBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bCwgYG51bGxgIG90aGVyd2lzZS5cbiAqIEB0aHJvd3MgaWYgY2FsbGVkIG91dHNpZGUgb2YgYSBzdXBwb3J0ZWQgY29udGV4dC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVwcmVjYXRlZCBwcmVmZXIgYW4gb3B0aW9ucyBvYmplY3QgaW5zdGVhZCBvZiBgSW5qZWN0RmxhZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3Q8VD4odG9rZW46IFByb3ZpZGVyVG9rZW48VD4sIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUfG51bGw7XG4vKipcbiAqIEBwYXJhbSB0b2tlbiBBIHRva2VuIHRoYXQgcmVwcmVzZW50cyBhIGRlcGVuZGVuY3kgdGhhdCBzaG91bGQgYmUgaW5qZWN0ZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBDb250cm9sIGhvdyBpbmplY3Rpb24gaXMgZXhlY3V0ZWQuIE9wdGlvbnMgY29ycmVzcG9uZCB0byBpbmplY3Rpb24gc3RyYXRlZ2llc1xuICogICAgIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRoIHBhcmFtZXRlciBkZWNvcmF0b3JzIGBASG9zdGAsIGBAU2VsZmAsIGBAU2tpcFNlbGZgLCBhbmRcbiAqICAgICBgQE9wdGlvbmFsYC5cbiAqIEByZXR1cm5zIHRoZSBpbmplY3RlZCB2YWx1ZSBpZiBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bC5cbiAqIEB0aHJvd3MgaWYgY2FsbGVkIG91dHNpZGUgb2YgYSBzdXBwb3J0ZWQgY29udGV4dCwgb3IgaWYgdGhlIHRva2VuIGlzIG5vdCBmb3VuZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3Q8VD4odG9rZW46IFByb3ZpZGVyVG9rZW48VD4sIG9wdGlvbnM6IEluamVjdE9wdGlvbnMme29wdGlvbmFsPzogZmFsc2V9KTogVDtcbi8qKlxuICogQHBhcmFtIHRva2VuIEEgdG9rZW4gdGhhdCByZXByZXNlbnRzIGEgZGVwZW5kZW5jeSB0aGF0IHNob3VsZCBiZSBpbmplY3RlZC5cbiAqIEBwYXJhbSBvcHRpb25zIENvbnRyb2wgaG93IGluamVjdGlvbiBpcyBleGVjdXRlZC4gT3B0aW9ucyBjb3JyZXNwb25kIHRvIGluamVjdGlvbiBzdHJhdGVnaWVzXG4gKiAgICAgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIHdpdGggcGFyYW1ldGVyIGRlY29yYXRvcnMgYEBIb3N0YCwgYEBTZWxmYCwgYEBTa2lwU2VsZmAsIGFuZFxuICogICAgIGBAT3B0aW9uYWxgLlxuICogQHJldHVybnMgdGhlIGluamVjdGVkIHZhbHVlIGlmIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsLCAgYG51bGxgIGlmIHRoZSB0b2tlbiBpcyBub3RcbiAqICAgICBmb3VuZCBhbmQgb3B0aW9uYWwgaW5qZWN0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqIEB0aHJvd3MgaWYgY2FsbGVkIG91dHNpZGUgb2YgYSBzdXBwb3J0ZWQgY29udGV4dCwgb3IgaWYgdGhlIHRva2VuIGlzIG5vdCBmb3VuZCBhbmQgb3B0aW9uYWxcbiAqICAgICBpbmplY3Rpb24gd2FzIG5vdCByZXF1ZXN0ZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0PFQ+KHRva2VuOiBQcm92aWRlclRva2VuPFQ+LCBvcHRpb25zOiBJbmplY3RPcHRpb25zKTogVHxudWxsO1xuLyoqXG4gKiBJbmplY3RzIGEgdG9rZW4gZnJvbSB0aGUgY3VycmVudGx5IGFjdGl2ZSBpbmplY3Rvci5cbiAqIGBpbmplY3RgIGlzIG9ubHkgc3VwcG9ydGVkIGR1cmluZyBpbnN0YW50aWF0aW9uIG9mIGEgZGVwZW5kZW5jeSBieSB0aGUgREkgc3lzdGVtLiBJdCBjYW4gYmUgdXNlZFxuICogZHVyaW5nOlxuICogLSBDb25zdHJ1Y3Rpb24gKHZpYSB0aGUgYGNvbnN0cnVjdG9yYCkgb2YgYSBjbGFzcyBiZWluZyBpbnN0YW50aWF0ZWQgYnkgdGhlIERJIHN5c3RlbSwgc3VjaFxuICogYXMgYW4gYEBJbmplY3RhYmxlYCBvciBgQENvbXBvbmVudGAuXG4gKiAtIEluIHRoZSBpbml0aWFsaXplciBmb3IgZmllbGRzIG9mIHN1Y2ggY2xhc3Nlcy5cbiAqIC0gSW4gdGhlIGZhY3RvcnkgZnVuY3Rpb24gc3BlY2lmaWVkIGZvciBgdXNlRmFjdG9yeWAgb2YgYSBgUHJvdmlkZXJgIG9yIGFuIGBASW5qZWN0YWJsZWAuXG4gKiAtIEluIHRoZSBgZmFjdG9yeWAgZnVuY3Rpb24gc3BlY2lmaWVkIGZvciBhbiBgSW5qZWN0aW9uVG9rZW5gLlxuICpcbiAqIEBwYXJhbSB0b2tlbiBBIHRva2VuIHRoYXQgcmVwcmVzZW50cyBhIGRlcGVuZGVuY3kgdGhhdCBzaG91bGQgYmUgaW5qZWN0ZWQuXG4gKiBAcGFyYW0gZmxhZ3MgT3B0aW9uYWwgZmxhZ3MgdGhhdCBjb250cm9sIGhvdyBpbmplY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKiBUaGUgZmxhZ3MgY29ycmVzcG9uZCB0byBpbmplY3Rpb24gc3RyYXRlZ2llcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgd2l0aFxuICogcGFyYW1ldGVyIGRlY29yYXRvcnMgYEBIb3N0YCwgYEBTZWxmYCwgYEBTa2lwU2VmYCwgYW5kIGBAT3B0aW9uYWxgLlxuICogQHJldHVybnMgdGhlIGluamVjdGVkIHZhbHVlIGlmIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsLCBgbnVsbGAgb3RoZXJ3aXNlLlxuICogQHRocm93cyBpZiBjYWxsZWQgb3V0c2lkZSBvZiBhIHN1cHBvcnRlZCBjb250ZXh0LlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBJbiBwcmFjdGljZSB0aGUgYGluamVjdCgpYCBjYWxscyBhcmUgYWxsb3dlZCBpbiBhIGNvbnN0cnVjdG9yLCBhIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBhbmQgYVxuICogZmllbGQgaW5pdGlhbGl6ZXI6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG4gKiBleHBvcnQgY2xhc3MgQ2FyIHtcbiAqICAgcmFkaW86IFJhZGlvfHVuZGVmaW5lZDtcbiAqICAgLy8gT0s6IGZpZWxkIGluaXRpYWxpemVyXG4gKiAgIHNwYXJlVHlyZSA9IGluamVjdChUeXJlKTtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIC8vIE9LOiBjb25zdHJ1Y3RvciBib2R5XG4gKiAgICAgdGhpcy5yYWRpbyA9IGluamVjdChSYWRpbyk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEl0IGlzIGFsc28gbGVnYWwgdG8gY2FsbCBgaW5qZWN0YCBmcm9tIGEgcHJvdmlkZXIncyBmYWN0b3J5OlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHByb3ZpZGVyczogW1xuICogICB7cHJvdmlkZTogQ2FyLCB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gKiAgICAgLy8gT0s6IGEgY2xhc3MgZmFjdG9yeVxuICogICAgIGNvbnN0IGVuZ2luZSA9IGluamVjdChFbmdpbmUpO1xuICogICAgIHJldHVybiBuZXcgQ2FyKGVuZ2luZSk7XG4gKiAgIH19XG4gKiBdXG4gKiBgYGBcbiAqXG4gKiBDYWxscyB0byB0aGUgYGluamVjdCgpYCBmdW5jdGlvbiBvdXRzaWRlIG9mIHRoZSBjbGFzcyBjcmVhdGlvbiBjb250ZXh0IHdpbGwgcmVzdWx0IGluIGVycm9yLiBNb3N0XG4gKiBub3RhYmx5LCBjYWxscyB0byBgaW5qZWN0KClgIGFyZSBkaXNhbGxvd2VkIGFmdGVyIGEgY2xhc3MgaW5zdGFuY2Ugd2FzIGNyZWF0ZWQsIGluIG1ldGhvZHNcbiAqIChpbmNsdWRpbmcgbGlmZWN5Y2xlIGhvb2tzKTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHsgLi4uIH0pXG4gKiBleHBvcnQgY2xhc3MgQ2FyQ29tcG9uZW50IHtcbiAqICAgbmdPbkluaXQoKSB7XG4gKiAgICAgLy8gRVJST1I6IHRvbyBsYXRlLCB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdhcyBhbHJlYWR5IGNyZWF0ZWRcbiAqICAgICBjb25zdCBlbmdpbmUgPSBpbmplY3QoRW5naW5lKTtcbiAqICAgICBlbmdpbmUuc3RhcnQoKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0PFQ+KFxuICAgIHRva2VuOiBQcm92aWRlclRva2VuPFQ+LCBmbGFnczogSW5qZWN0RmxhZ3N8SW5qZWN0T3B0aW9ucyA9IEluamVjdEZsYWdzLkRlZmF1bHQpOiBUfG51bGwge1xuICBpZiAodHlwZW9mIGZsYWdzICE9PSAnbnVtYmVyJykge1xuICAgIC8vIFdoaWxlIFR5cGVTY3JpcHQgZG9lc24ndCBhY2NlcHQgaXQgd2l0aG91dCBhIGNhc3QsIGJpdHdpc2UgT1Igd2l0aCBmYWxzZS15IHZhbHVlcyBpblxuICAgIC8vIEphdmFTY3JpcHQgaXMgYSBuby1vcC4gV2UgY2FuIHVzZSB0aGF0IGZvciBhIHZlcnkgY29kZXNpemUtZWZmaWNpZW50IGNvbnZlcnNpb24gZnJvbVxuICAgIC8vIGBJbmplY3RPcHRpb25zYCB0byBgSW5qZWN0RmxhZ3NgLlxuICAgIGZsYWdzID0gKEludGVybmFsSW5qZWN0RmxhZ3MuRGVmYXVsdCB8ICAvLyBjb21tZW50IHRvIGZvcmNlIGEgbGluZSBicmVhayBpbiB0aGUgZm9ybWF0dGVyXG4gICAgICAgICAgICAgKChmbGFncy5vcHRpb25hbCAmJiBJbnRlcm5hbEluamVjdEZsYWdzLk9wdGlvbmFsKSBhcyBudW1iZXIpIHxcbiAgICAgICAgICAgICAoKGZsYWdzLmhvc3QgJiYgSW50ZXJuYWxJbmplY3RGbGFncy5Ib3N0KSBhcyBudW1iZXIpIHxcbiAgICAgICAgICAgICAoKGZsYWdzLnNlbGYgJiYgSW50ZXJuYWxJbmplY3RGbGFncy5TZWxmKSBhcyBudW1iZXIpIHxcbiAgICAgICAgICAgICAoKGZsYWdzLnNraXBTZWxmICYmIEludGVybmFsSW5qZWN0RmxhZ3MuU2tpcFNlbGYpIGFzIG51bWJlcikpIGFzIEluamVjdEZsYWdzO1xuICB9XG4gIHJldHVybiDJtcm1aW5qZWN0KHRva2VuLCBmbGFncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RBcmdzKHR5cGVzOiAoUHJvdmlkZXJUb2tlbjxhbnk+fGFueVtdKVtdKTogYW55W10ge1xuICBjb25zdCBhcmdzOiBhbnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJnID0gcmVzb2x2ZUZvcndhcmRSZWYodHlwZXNbaV0pO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgIGlmIChhcmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgICAgICBSdW50aW1lRXJyb3JDb2RlLklOVkFMSURfRElGRkVSX0lOUFVULFxuICAgICAgICAgICAgbmdEZXZNb2RlICYmICdBcmd1bWVudHMgYXJyYXkgbXVzdCBoYXZlIGFyZ3VtZW50cy4nKTtcbiAgICAgIH1cbiAgICAgIGxldCB0eXBlOiBUeXBlPGFueT58dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgICAgbGV0IGZsYWdzOiBJbmplY3RGbGFncyA9IEluamVjdEZsYWdzLkRlZmF1bHQ7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBhcmdbal07XG4gICAgICAgIGNvbnN0IGZsYWcgPSBnZXRJbmplY3RGbGFnKG1ldGEpO1xuICAgICAgICBpZiAodHlwZW9mIGZsYWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIHdoZW4gd2UgaGFuZGxlIEBJbmplY3QgZGVjb3JhdG9yLlxuICAgICAgICAgIGlmIChmbGFnID09PSBEZWNvcmF0b3JGbGFncy5JbmplY3QpIHtcbiAgICAgICAgICAgIHR5cGUgPSBtZXRhLnRva2VuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmbGFncyB8PSBmbGFnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gbWV0YTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcmdzLnB1c2goybXJtWluamVjdCh0eXBlISwgZmxhZ3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJncy5wdXNoKMm1ybVpbmplY3QoYXJnKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzO1xufVxuXG4vKipcbiAqIEF0dGFjaGVzIGEgZ2l2ZW4gSW5qZWN0RmxhZyB0byBhIGdpdmVuIGRlY29yYXRvciB1c2luZyBtb25rZXktcGF0Y2hpbmcuXG4gKiBTaW5jZSBESSBkZWNvcmF0b3JzIGNhbiBiZSB1c2VkIGluIHByb3ZpZGVycyBgZGVwc2AgYXJyYXkgKHdoZW4gcHJvdmlkZXIgaXMgY29uZmlndXJlZCB1c2luZ1xuICogYHVzZUZhY3RvcnlgKSB3aXRob3V0IGluaXRpYWxpemF0aW9uIChlLmcuIGBIb3N0YCkgYW5kIGFzIGFuIGluc3RhbmNlIChlLmcuIGBuZXcgSG9zdCgpYCksIHdlXG4gKiBhdHRhY2ggdGhlIGZsYWcgdG8gbWFrZSBpdCBhdmFpbGFibGUgYm90aCBhcyBhIHN0YXRpYyBwcm9wZXJ0eSBhbmQgYXMgYSBmaWVsZCBvbiBkZWNvcmF0b3JcbiAqIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSBkZWNvcmF0b3IgUHJvdmlkZWQgREkgZGVjb3JhdG9yLlxuICogQHBhcmFtIGZsYWcgSW5qZWN0RmxhZyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoSW5qZWN0RmxhZyhkZWNvcmF0b3I6IGFueSwgZmxhZzogSW50ZXJuYWxJbmplY3RGbGFnc3xEZWNvcmF0b3JGbGFncyk6IGFueSB7XG4gIGRlY29yYXRvcltESV9ERUNPUkFUT1JfRkxBR10gPSBmbGFnO1xuICBkZWNvcmF0b3IucHJvdG90eXBlW0RJX0RFQ09SQVRPUl9GTEFHXSA9IGZsYWc7XG4gIHJldHVybiBkZWNvcmF0b3I7XG59XG5cbi8qKlxuICogUmVhZHMgbW9ua2V5LXBhdGNoZWQgcHJvcGVydHkgdGhhdCBjb250YWlucyBJbmplY3RGbGFnIGF0dGFjaGVkIHRvIGEgZGVjb3JhdG9yLlxuICpcbiAqIEBwYXJhbSB0b2tlbiBUb2tlbiB0aGF0IG1heSBjb250YWluIG1vbmtleS1wYXRjaGVkIERJIGZsYWdzIHByb3BlcnR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5qZWN0RmxhZyh0b2tlbjogYW55KTogbnVtYmVyfHVuZGVmaW5lZCB7XG4gIHJldHVybiB0b2tlbltESV9ERUNPUkFUT1JfRkxBR107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXRjaEluamVjdG9yRXJyb3IoXG4gICAgZTogYW55LCB0b2tlbjogYW55LCBpbmplY3RvckVycm9yTmFtZTogc3RyaW5nLCBzb3VyY2U6IHN0cmluZ3xudWxsKTogbmV2ZXIge1xuICBjb25zdCB0b2tlblBhdGg6IGFueVtdID0gZVtOR19URU1QX1RPS0VOX1BBVEhdO1xuICBpZiAodG9rZW5bU09VUkNFXSkge1xuICAgIHRva2VuUGF0aC51bnNoaWZ0KHRva2VuW1NPVVJDRV0pO1xuICB9XG4gIGUubWVzc2FnZSA9IGZvcm1hdEVycm9yKCdcXG4nICsgZS5tZXNzYWdlLCB0b2tlblBhdGgsIGluamVjdG9yRXJyb3JOYW1lLCBzb3VyY2UpO1xuICBlW05HX1RPS0VOX1BBVEhdID0gdG9rZW5QYXRoO1xuICBlW05HX1RFTVBfVE9LRU5fUEFUSF0gPSBudWxsO1xuICB0aHJvdyBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3IoXG4gICAgdGV4dDogc3RyaW5nLCBvYmo6IGFueSwgaW5qZWN0b3JFcnJvck5hbWU6IHN0cmluZywgc291cmNlOiBzdHJpbmd8bnVsbCA9IG51bGwpOiBzdHJpbmcge1xuICB0ZXh0ID0gdGV4dCAmJiB0ZXh0LmNoYXJBdCgwKSA9PT0gJ1xcbicgJiYgdGV4dC5jaGFyQXQoMSkgPT0gTk9fTkVXX0xJTkUgPyB0ZXh0LnNsaWNlKDIpIDogdGV4dDtcbiAgbGV0IGNvbnRleHQgPSBzdHJpbmdpZnkob2JqKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGNvbnRleHQgPSBvYmoubWFwKHN0cmluZ2lmeSkuam9pbignIC0+ICcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgbGV0IHBhcnRzID0gPHN0cmluZ1tdPltdO1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgcGFydHMucHVzaChcbiAgICAgICAgICAgIGtleSArICc6JyArICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogc3RyaW5naWZ5KHZhbHVlKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0ID0gYHske3BhcnRzLmpvaW4oJywgJyl9fWA7XG4gIH1cbiAgcmV0dXJuIGAke2luamVjdG9yRXJyb3JOYW1lfSR7c291cmNlID8gJygnICsgc291cmNlICsgJyknIDogJyd9WyR7Y29udGV4dH1dOiAke1xuICAgICAgdGV4dC5yZXBsYWNlKE5FV19MSU5FLCAnXFxuICAnKX1gO1xufVxuIl19