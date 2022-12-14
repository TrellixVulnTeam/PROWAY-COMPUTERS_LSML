/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
export * from './metadata';
export { InjectFlags } from './interface/injector';
export { ɵɵdefineInjectable, defineInjectable, ɵɵdefineInjector } from './interface/defs';
export { forwardRef, resolveForwardRef } from './forward_ref';
export { Injectable } from './injectable';
export { Injector } from './injector';
export { EnvironmentInjector } from './r3_injector';
export { importProvidersFrom } from './provider_collection';
export { ENVIRONMENT_INITIALIZER } from './initializer_token';
export { ɵɵinject, inject, ɵɵinvalidFactoryDep } from './injector_compatibility';
export { INJECTOR } from './injector_token';
export { ReflectiveInjector } from './reflective_injector';
export { ResolvedReflectiveFactory } from './reflective_provider';
export { ReflectiveKey } from './reflective_key';
export { InjectionToken } from './injection_token';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kaS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7OztHQUlHO0FBRUgsY0FBYyxZQUFZLENBQUM7QUFDM0IsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBK0IsTUFBTSxrQkFBa0IsQ0FBQztBQUN0SCxPQUFPLEVBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBQyxVQUFVLEVBQTBDLE1BQU0sY0FBYyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxtQkFBbUIsRUFBd0IsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUU1RCxPQUFPLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBaUIsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFekQsT0FBTyxFQUFDLHlCQUF5QixFQUE2QixNQUFNLHVCQUF1QixDQUFDO0FBQzVGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBgZGlgIG1vZHVsZSBwcm92aWRlcyBkZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgc2VydmljZXMuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9tZXRhZGF0YSc7XG5leHBvcnQge0luamVjdEZsYWdzfSBmcm9tICcuL2ludGVyZmFjZS9pbmplY3Rvcic7XG5leHBvcnQge8m1ybVkZWZpbmVJbmplY3RhYmxlLCBkZWZpbmVJbmplY3RhYmxlLCDJtcm1ZGVmaW5lSW5qZWN0b3IsIEluamVjdGFibGVUeXBlLCBJbmplY3RvclR5cGV9IGZyb20gJy4vaW50ZXJmYWNlL2RlZnMnO1xuZXhwb3J0IHtmb3J3YXJkUmVmLCByZXNvbHZlRm9yd2FyZFJlZiwgRm9yd2FyZFJlZkZufSBmcm9tICcuL2ZvcndhcmRfcmVmJztcbmV4cG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0YWJsZURlY29yYXRvciwgSW5qZWN0YWJsZVByb3ZpZGVyfSBmcm9tICcuL2luamVjdGFibGUnO1xuZXhwb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XG5leHBvcnQge0Vudmlyb25tZW50SW5qZWN0b3J9IGZyb20gJy4vcjNfaW5qZWN0b3InO1xuZXhwb3J0IHtpbXBvcnRQcm92aWRlcnNGcm9tLCBJbXBvcnRQcm92aWRlcnNTb3VyY2V9IGZyb20gJy4vcHJvdmlkZXJfY29sbGVjdGlvbic7XG5leHBvcnQge0VOVklST05NRU5UX0lOSVRJQUxJWkVSfSBmcm9tICcuL2luaXRpYWxpemVyX3Rva2VuJztcbmV4cG9ydCB7UHJvdmlkZXJUb2tlbn0gZnJvbSAnLi9wcm92aWRlcl90b2tlbic7XG5leHBvcnQge8m1ybVpbmplY3QsIGluamVjdCwgSW5qZWN0T3B0aW9ucywgybXJtWludmFsaWRGYWN0b3J5RGVwfSBmcm9tICcuL2luamVjdG9yX2NvbXBhdGliaWxpdHknO1xuZXhwb3J0IHtJTkpFQ1RPUn0gZnJvbSAnLi9pbmplY3Rvcl90b2tlbic7XG5leHBvcnQge1JlZmxlY3RpdmVJbmplY3Rvcn0gZnJvbSAnLi9yZWZsZWN0aXZlX2luamVjdG9yJztcbmV4cG9ydCB7Q2xhc3NQcm92aWRlciwgTW9kdWxlV2l0aFByb3ZpZGVycywgQ2xhc3NTYW5zUHJvdmlkZXIsIEltcG9ydGVkTmdNb2R1bGVQcm92aWRlcnMsIENvbnN0cnVjdG9yUHJvdmlkZXIsIENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyLCBFeGlzdGluZ1Byb3ZpZGVyLCBFeGlzdGluZ1NhbnNQcm92aWRlciwgRmFjdG9yeVByb3ZpZGVyLCBGYWN0b3J5U2Fuc1Byb3ZpZGVyLCBQcm92aWRlciwgU3RhdGljQ2xhc3NQcm92aWRlciwgU3RhdGljQ2xhc3NTYW5zUHJvdmlkZXIsIFN0YXRpY1Byb3ZpZGVyLCBUeXBlUHJvdmlkZXIsIFZhbHVlUHJvdmlkZXIsIFZhbHVlU2Fuc1Byb3ZpZGVyfSBmcm9tICcuL2ludGVyZmFjZS9wcm92aWRlcic7XG5leHBvcnQge1Jlc29sdmVkUmVmbGVjdGl2ZUZhY3RvcnksIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyfSBmcm9tICcuL3JlZmxlY3RpdmVfcHJvdmlkZXInO1xuZXhwb3J0IHtSZWZsZWN0aXZlS2V5fSBmcm9tICcuL3JlZmxlY3RpdmVfa2V5JztcbmV4cG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJy4vaW5qZWN0aW9uX3Rva2VuJztcbiJdfQ==