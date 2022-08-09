/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export var FactoryTarget;
(function (FactoryTarget) {
    FactoryTarget[FactoryTarget["Directive"] = 0] = "Directive";
    FactoryTarget[FactoryTarget["Component"] = 1] = "Component";
    FactoryTarget[FactoryTarget["Injectable"] = 2] = "Injectable";
    FactoryTarget[FactoryTarget["Pipe"] = 3] = "Pipe";
    FactoryTarget[FactoryTarget["NgModule"] = 4] = "NgModule";
})(FactoryTarget || (FactoryTarget = {}));
export var R3TemplateDependencyKind;
(function (R3TemplateDependencyKind) {
    R3TemplateDependencyKind[R3TemplateDependencyKind["Directive"] = 0] = "Directive";
    R3TemplateDependencyKind[R3TemplateDependencyKind["Pipe"] = 1] = "Pipe";
    R3TemplateDependencyKind[R3TemplateDependencyKind["NgModule"] = 2] = "NgModule";
})(R3TemplateDependencyKind || (R3TemplateDependencyKind = {}));
export var ViewEncapsulation;
(function (ViewEncapsulation) {
    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
    // Historically the 1 value was for `Native` encapsulation which has been removed as of v11.
    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
    ViewEncapsulation[ViewEncapsulation["ShadowDom"] = 3] = "ShadowDom";
})(ViewEncapsulation || (ViewEncapsulation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjYWRlX2ludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBpbGVyL2NvbXBpbGVyX2ZhY2FkZV9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBbUZILE1BQU0sQ0FBTixJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFDdkIsMkRBQWEsQ0FBQTtJQUNiLDJEQUFhLENBQUE7SUFDYiw2REFBYyxDQUFBO0lBQ2QsaURBQVEsQ0FBQTtJQUNSLHlEQUFZLENBQUE7QUFDZCxDQUFDLEVBTlcsYUFBYSxLQUFiLGFBQWEsUUFNeEI7QUEySkQsTUFBTSxDQUFOLElBQVksd0JBSVg7QUFKRCxXQUFZLHdCQUF3QjtJQUNsQyxpRkFBYSxDQUFBO0lBQ2IsdUVBQVEsQ0FBQTtJQUNSLCtFQUFZLENBQUE7QUFDZCxDQUFDLEVBSlcsd0JBQXdCLEtBQXhCLHdCQUF3QixRQUluQztBQThCRCxNQUFNLENBQU4sSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzNCLGlFQUFZLENBQUE7SUFDWiw0RkFBNEY7SUFDNUYseURBQVEsQ0FBQTtJQUNSLG1FQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUs1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGludGVyZmFjZXMgd2hpY2ggYXJlIHNoYXJlZCBiZXR3ZWVuIGBAYW5ndWxhci9jb3JlYCBhbmQgYEBhbmd1bGFyL2NvbXBpbGVyYCB0byBhbGxvd1xuICogZm9yIGxhdGUgYmluZGluZyBvZiBgQGFuZ3VsYXIvY29tcGlsZXJgIGZvciBKSVQgcHVycG9zZXMuXG4gKlxuICogVGhpcyBmaWxlIGhhcyB0d28gY29waWVzLiBQbGVhc2UgZW5zdXJlIHRoYXQgdGhleSBhcmUgaW4gc3luYzpcbiAqICAtIHBhY2thZ2VzL2NvbXBpbGVyL3NyYy9jb21waWxlcl9mYWNhZGVfaW50ZXJmYWNlLnRzICAgICAgICAgIChtYWluKVxuICogIC0gcGFja2FnZXMvY29yZS9zcmMvY29tcGlsZXIvY29tcGlsZXJfZmFjYWRlX2ludGVyZmFjZS50cyAgICAgKHJlcGxpY2EpXG4gKlxuICogUGxlYXNlIGVuc3VyZSB0aGF0IHRoZSB0d28gZmlsZXMgYXJlIGluIHN5bmMgdXNpbmcgdGhpcyBjb21tYW5kOlxuICogYGBgXG4gKiBjcCBwYWNrYWdlcy9jb21waWxlci9zcmMvY29tcGlsZXJfZmFjYWRlX2ludGVyZmFjZS50cyBcXFxuICogICAgcGFja2FnZXMvY29yZS9zcmMvY29tcGlsZXIvY29tcGlsZXJfZmFjYWRlX2ludGVyZmFjZS50c1xuICogYGBgXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRlZENvbXBpbGVyRmFjYWRlIHtcbiAgybVjb21waWxlckZhY2FkZTogQ29tcGlsZXJGYWNhZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGlsZXJGYWNhZGUge1xuICBjb21waWxlUGlwZShhbmd1bGFyQ29yZUVudjogQ29yZUVudmlyb25tZW50LCBzb3VyY2VNYXBVcmw6IHN0cmluZywgbWV0YTogUjNQaXBlTWV0YWRhdGFGYWNhZGUpOlxuICAgICAgYW55O1xuICBjb21waWxlUGlwZURlY2xhcmF0aW9uKFxuICAgICAgYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsIGRlY2xhcmF0aW9uOiBSM0RlY2xhcmVQaXBlRmFjYWRlKTogYW55O1xuICBjb21waWxlSW5qZWN0YWJsZShcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLCBtZXRhOiBSM0luamVjdGFibGVNZXRhZGF0YUZhY2FkZSk6IGFueTtcbiAgY29tcGlsZUluamVjdGFibGVEZWNsYXJhdGlvbihcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLCBtZXRhOiBSM0RlY2xhcmVJbmplY3RhYmxlRmFjYWRlKTogYW55O1xuICBjb21waWxlSW5qZWN0b3IoXG4gICAgICBhbmd1bGFyQ29yZUVudjogQ29yZUVudmlyb25tZW50LCBzb3VyY2VNYXBVcmw6IHN0cmluZywgbWV0YTogUjNJbmplY3Rvck1ldGFkYXRhRmFjYWRlKTogYW55O1xuICBjb21waWxlSW5qZWN0b3JEZWNsYXJhdGlvbihcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLFxuICAgICAgZGVjbGFyYXRpb246IFIzRGVjbGFyZUluamVjdG9yRmFjYWRlKTogYW55O1xuICBjb21waWxlTmdNb2R1bGUoXG4gICAgICBhbmd1bGFyQ29yZUVudjogQ29yZUVudmlyb25tZW50LCBzb3VyY2VNYXBVcmw6IHN0cmluZywgbWV0YTogUjNOZ01vZHVsZU1ldGFkYXRhRmFjYWRlKTogYW55O1xuICBjb21waWxlTmdNb2R1bGVEZWNsYXJhdGlvbihcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLFxuICAgICAgZGVjbGFyYXRpb246IFIzRGVjbGFyZU5nTW9kdWxlRmFjYWRlKTogYW55O1xuICBjb21waWxlRGlyZWN0aXZlKFxuICAgICAgYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsIG1ldGE6IFIzRGlyZWN0aXZlTWV0YWRhdGFGYWNhZGUpOiBhbnk7XG4gIGNvbXBpbGVEaXJlY3RpdmVEZWNsYXJhdGlvbihcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLFxuICAgICAgZGVjbGFyYXRpb246IFIzRGVjbGFyZURpcmVjdGl2ZUZhY2FkZSk6IGFueTtcbiAgY29tcGlsZUNvbXBvbmVudChcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLCBtZXRhOiBSM0NvbXBvbmVudE1ldGFkYXRhRmFjYWRlKTogYW55O1xuICBjb21waWxlQ29tcG9uZW50RGVjbGFyYXRpb24oXG4gICAgICBhbmd1bGFyQ29yZUVudjogQ29yZUVudmlyb25tZW50LCBzb3VyY2VNYXBVcmw6IHN0cmluZyxcbiAgICAgIGRlY2xhcmF0aW9uOiBSM0RlY2xhcmVDb21wb25lbnRGYWNhZGUpOiBhbnk7XG4gIGNvbXBpbGVGYWN0b3J5KFxuICAgICAgYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsIG1ldGE6IFIzRmFjdG9yeURlZk1ldGFkYXRhRmFjYWRlKTogYW55O1xuICBjb21waWxlRmFjdG9yeURlY2xhcmF0aW9uKFxuICAgICAgYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsIG1ldGE6IFIzRGVjbGFyZUZhY3RvcnlGYWNhZGUpOiBhbnk7XG5cbiAgY3JlYXRlUGFyc2VTb3VyY2VTcGFuKGtpbmQ6IHN0cmluZywgdHlwZU5hbWU6IHN0cmluZywgc291cmNlVXJsOiBzdHJpbmcpOiBQYXJzZVNvdXJjZVNwYW47XG5cbiAgRmFjdG9yeVRhcmdldDogdHlwZW9mIEZhY3RvcnlUYXJnZXQ7XG4gIC8vIE5vdGUgdGhhdCB3ZSBkbyBub3QgdXNlIGB7bmV3KCk6IFJlc291cmNlTG9hZGVyfWAgaGVyZSBiZWNhdXNlXG4gIC8vIHRoZSByZXNvdXJjZSBsb2FkZXIgY2xhc3MgaXMgYWJzdHJhY3QgYW5kIG5vdCBjb25zdHJ1Y3RhYmxlLlxuICBSZXNvdXJjZUxvYWRlcjogRnVuY3Rpb24me3Byb3RvdHlwZTogUmVzb3VyY2VMb2FkZXJ9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvcmVFbnZpcm9ubWVudCB7XG4gIFtuYW1lOiBzdHJpbmddOiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IHR5cGUgUmVzb3VyY2VMb2FkZXIgPSB7XG4gIGdldCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPnxzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBTdHJpbmdNYXAgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFN0cmluZ01hcFdpdGhSZW5hbWUgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ3xbc3RyaW5nLCBzdHJpbmddO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvdmlkZXIgPSB1bmtub3duO1xuZXhwb3J0IHR5cGUgVHlwZSA9IEZ1bmN0aW9uO1xuZXhwb3J0IHR5cGUgT3BhcXVlVmFsdWUgPSB1bmtub3duO1xuXG5leHBvcnQgZW51bSBGYWN0b3J5VGFyZ2V0IHtcbiAgRGlyZWN0aXZlID0gMCxcbiAgQ29tcG9uZW50ID0gMSxcbiAgSW5qZWN0YWJsZSA9IDIsXG4gIFBpcGUgPSAzLFxuICBOZ01vZHVsZSA9IDQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZXBlbmRlbmN5TWV0YWRhdGFGYWNhZGUge1xuICB0b2tlbjogT3BhcXVlVmFsdWU7XG4gIGF0dHJpYnV0ZTogc3RyaW5nfG51bGw7XG4gIGhvc3Q6IGJvb2xlYW47XG4gIG9wdGlvbmFsOiBib29sZWFuO1xuICBzZWxmOiBib29sZWFuO1xuICBza2lwU2VsZjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM0RlY2xhcmVEZXBlbmRlbmN5TWV0YWRhdGFGYWNhZGUge1xuICB0b2tlbjogT3BhcXVlVmFsdWU7XG4gIGF0dHJpYnV0ZT86IGJvb2xlYW47XG4gIGhvc3Q/OiBib29sZWFuO1xuICBvcHRpb25hbD86IGJvb2xlYW47XG4gIHNlbGY/OiBib29sZWFuO1xuICBza2lwU2VsZj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNQaXBlTWV0YWRhdGFGYWNhZGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFR5cGU7XG4gIHBpcGVOYW1lOiBzdHJpbmc7XG4gIHB1cmU6IGJvb2xlYW47XG4gIGlzU3RhbmRhbG9uZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM0luamVjdGFibGVNZXRhZGF0YUZhY2FkZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogVHlwZTtcbiAgdHlwZUFyZ3VtZW50Q291bnQ6IG51bWJlcjtcbiAgcHJvdmlkZWRJbj86IFR5cGV8J3Jvb3QnfCdwbGF0Zm9ybSd8J2FueSd8bnVsbDtcbiAgdXNlQ2xhc3M/OiBPcGFxdWVWYWx1ZTtcbiAgdXNlRmFjdG9yeT86IE9wYXF1ZVZhbHVlO1xuICB1c2VFeGlzdGluZz86IE9wYXF1ZVZhbHVlO1xuICB1c2VWYWx1ZT86IE9wYXF1ZVZhbHVlO1xuICBkZXBzPzogUjNEZXBlbmRlbmN5TWV0YWRhdGFGYWNhZGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM05nTW9kdWxlTWV0YWRhdGFGYWNhZGUge1xuICB0eXBlOiBUeXBlO1xuICBib290c3RyYXA6IEZ1bmN0aW9uW107XG4gIGRlY2xhcmF0aW9uczogRnVuY3Rpb25bXTtcbiAgaW1wb3J0czogRnVuY3Rpb25bXTtcbiAgZXhwb3J0czogRnVuY3Rpb25bXTtcbiAgc2NoZW1hczoge25hbWU6IHN0cmluZ31bXXxudWxsO1xuICBpZDogc3RyaW5nfG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNJbmplY3Rvck1ldGFkYXRhRmFjYWRlIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBUeXBlO1xuICBwcm92aWRlcnM6IFByb3ZpZGVyW107XG4gIGltcG9ydHM6IE9wYXF1ZVZhbHVlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEaXJlY3RpdmVNZXRhZGF0YUZhY2FkZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogVHlwZTtcbiAgdHlwZVNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbjtcbiAgc2VsZWN0b3I6IHN0cmluZ3xudWxsO1xuICBxdWVyaWVzOiBSM1F1ZXJ5TWV0YWRhdGFGYWNhZGVbXTtcbiAgaG9zdDoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIHByb3BNZXRhZGF0YToge1trZXk6IHN0cmluZ106IE9wYXF1ZVZhbHVlW119O1xuICBsaWZlY3ljbGU6IHt1c2VzT25DaGFuZ2VzOiBib29sZWFuO307XG4gIGlucHV0czogc3RyaW5nW107XG4gIG91dHB1dHM6IHN0cmluZ1tdO1xuICB1c2VzSW5oZXJpdGFuY2U6IGJvb2xlYW47XG4gIGV4cG9ydEFzOiBzdHJpbmdbXXxudWxsO1xuICBwcm92aWRlcnM6IFByb3ZpZGVyW118bnVsbDtcbiAgdmlld1F1ZXJpZXM6IFIzUXVlcnlNZXRhZGF0YUZhY2FkZVtdO1xuICBpc1N0YW5kYWxvbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNDb21wb25lbnRNZXRhZGF0YUZhY2FkZSBleHRlbmRzIFIzRGlyZWN0aXZlTWV0YWRhdGFGYWNhZGUge1xuICB0ZW1wbGF0ZTogc3RyaW5nO1xuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBib29sZWFuO1xuICBhbmltYXRpb25zOiBPcGFxdWVWYWx1ZVtdfHVuZGVmaW5lZDtcbiAgZGVjbGFyYXRpb25zOiBSM1RlbXBsYXRlRGVwZW5kZW5jeUZhY2FkZVtdO1xuICBzdHlsZXM6IHN0cmluZ1tdO1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbjtcbiAgdmlld1Byb3ZpZGVyczogUHJvdmlkZXJbXXxudWxsO1xuICBpbnRlcnBvbGF0aW9uPzogW3N0cmluZywgc3RyaW5nXTtcbiAgY2hhbmdlRGV0ZWN0aW9uPzogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlRGlyZWN0aXZlRmFjYWRlIHtcbiAgc2VsZWN0b3I/OiBzdHJpbmc7XG4gIHR5cGU6IFR5cGU7XG4gIGlucHV0cz86IHtbY2xhc3NQcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZ3xbc3RyaW5nLCBzdHJpbmddfTtcbiAgb3V0cHV0cz86IHtbY2xhc3NQcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZ307XG4gIGhvc3Q/OiB7XG4gICAgYXR0cmlidXRlcz86IHtba2V5OiBzdHJpbmddOiBPcGFxdWVWYWx1ZX07XG4gICAgbGlzdGVuZXJzPzoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gICAgcHJvcGVydGllcz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICAgIGNsYXNzQXR0cmlidXRlPzogc3RyaW5nO1xuICAgIHN0eWxlQXR0cmlidXRlPzogc3RyaW5nO1xuICB9O1xuICBxdWVyaWVzPzogUjNEZWNsYXJlUXVlcnlNZXRhZGF0YUZhY2FkZVtdO1xuICB2aWV3UXVlcmllcz86IFIzRGVjbGFyZVF1ZXJ5TWV0YWRhdGFGYWNhZGVbXTtcbiAgcHJvdmlkZXJzPzogT3BhcXVlVmFsdWU7XG4gIGV4cG9ydEFzPzogc3RyaW5nW107XG4gIHVzZXNJbmhlcml0YW5jZT86IGJvb2xlYW47XG4gIHVzZXNPbkNoYW5nZXM/OiBib29sZWFuO1xuICBpc1N0YW5kYWxvbmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVjbGFyZUNvbXBvbmVudEZhY2FkZSBleHRlbmRzIFIzRGVjbGFyZURpcmVjdGl2ZUZhY2FkZSB7XG4gIHRlbXBsYXRlOiBzdHJpbmc7XG4gIGlzSW5saW5lPzogYm9vbGVhbjtcbiAgc3R5bGVzPzogc3RyaW5nW107XG5cbiAgLy8gUG9zdC1zdGFuZGFsb25lIGxpYnJhcmllcyB1c2UgYSB1bmlmaWVkIGRlcGVuZGVuY2llcyBmaWVsZC5cbiAgZGVwZW5kZW5jaWVzPzogUjNEZWNsYXJlVGVtcGxhdGVEZXBlbmRlbmN5RmFjYWRlW107XG5cbiAgLy8gUHJlLXN0YW5kYWxvbmUgbGlicmFyaWVzIGhhdmUgc2VwYXJhdGUgY29tcG9uZW50L2RpcmVjdGl2ZS9waXBlIGZpZWxkczpcbiAgY29tcG9uZW50cz86IFIzRGVjbGFyZURpcmVjdGl2ZURlcGVuZGVuY3lGYWNhZGVbXTtcbiAgZGlyZWN0aXZlcz86IFIzRGVjbGFyZURpcmVjdGl2ZURlcGVuZGVuY3lGYWNhZGVbXTtcbiAgcGlwZXM/OiB7W3BpcGVOYW1lOiBzdHJpbmddOiBPcGFxdWVWYWx1ZXwoKCkgPT4gT3BhcXVlVmFsdWUpfTtcblxuXG4gIHZpZXdQcm92aWRlcnM/OiBPcGFxdWVWYWx1ZTtcbiAgYW5pbWF0aW9ucz86IE9wYXF1ZVZhbHVlO1xuICBjaGFuZ2VEZXRlY3Rpb24/OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneTtcbiAgZW5jYXBzdWxhdGlvbj86IFZpZXdFbmNhcHN1bGF0aW9uO1xuICBpbnRlcnBvbGF0aW9uPzogW3N0cmluZywgc3RyaW5nXTtcbiAgcHJlc2VydmVXaGl0ZXNwYWNlcz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFIzRGVjbGFyZVRlbXBsYXRlRGVwZW5kZW5jeUZhY2FkZSA9IHtcbiAga2luZDogc3RyaW5nXG59JihSM0RlY2xhcmVEaXJlY3RpdmVEZXBlbmRlbmN5RmFjYWRlfFIzRGVjbGFyZVBpcGVEZXBlbmRlbmN5RmFjYWRlfFxuICAgUjNEZWNsYXJlTmdNb2R1bGVEZXBlbmRlbmN5RmFjYWRlKTtcblxuZXhwb3J0IGludGVyZmFjZSBSM0RlY2xhcmVEaXJlY3RpdmVEZXBlbmRlbmN5RmFjYWRlIHtcbiAga2luZD86ICdkaXJlY3RpdmUnfCdjb21wb25lbnQnO1xuICBzZWxlY3Rvcjogc3RyaW5nO1xuICB0eXBlOiBPcGFxdWVWYWx1ZXwoKCkgPT4gT3BhcXVlVmFsdWUpO1xuICBpbnB1dHM/OiBzdHJpbmdbXTtcbiAgb3V0cHV0cz86IHN0cmluZ1tdO1xuICBleHBvcnRBcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVjbGFyZVBpcGVEZXBlbmRlbmN5RmFjYWRlIHtcbiAga2luZD86ICdwaXBlJztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBPcGFxdWVWYWx1ZXwoKCkgPT4gT3BhcXVlVmFsdWUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVjbGFyZU5nTW9kdWxlRGVwZW5kZW5jeUZhY2FkZSB7XG4gIGtpbmQ6ICduZ21vZHVsZSc7XG4gIHR5cGU6IE9wYXF1ZVZhbHVlfCgoKSA9PiBPcGFxdWVWYWx1ZSk7XG59XG5cbmV4cG9ydCBlbnVtIFIzVGVtcGxhdGVEZXBlbmRlbmN5S2luZCB7XG4gIERpcmVjdGl2ZSA9IDAsXG4gIFBpcGUgPSAxLFxuICBOZ01vZHVsZSA9IDIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNUZW1wbGF0ZURlcGVuZGVuY3lGYWNhZGUge1xuICBraW5kOiBSM1RlbXBsYXRlRGVwZW5kZW5jeUtpbmQ7XG4gIHR5cGU6IE9wYXF1ZVZhbHVlfCgoKSA9PiBPcGFxdWVWYWx1ZSk7XG59XG5leHBvcnQgaW50ZXJmYWNlIFIzRmFjdG9yeURlZk1ldGFkYXRhRmFjYWRlIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBUeXBlO1xuICB0eXBlQXJndW1lbnRDb3VudDogbnVtYmVyO1xuICBkZXBzOiBSM0RlcGVuZGVuY3lNZXRhZGF0YUZhY2FkZVtdfG51bGw7XG4gIHRhcmdldDogRmFjdG9yeVRhcmdldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM0RlY2xhcmVGYWN0b3J5RmFjYWRlIHtcbiAgdHlwZTogVHlwZTtcbiAgZGVwczogUjNEZWNsYXJlRGVwZW5kZW5jeU1ldGFkYXRhRmFjYWRlW118J2ludmFsaWQnfG51bGw7XG4gIHRhcmdldDogRmFjdG9yeVRhcmdldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM0RlY2xhcmVJbmplY3RhYmxlRmFjYWRlIHtcbiAgdHlwZTogVHlwZTtcbiAgcHJvdmlkZWRJbj86IFR5cGV8J3Jvb3QnfCdwbGF0Zm9ybSd8J2FueSd8bnVsbDtcbiAgdXNlQ2xhc3M/OiBPcGFxdWVWYWx1ZTtcbiAgdXNlRmFjdG9yeT86IE9wYXF1ZVZhbHVlO1xuICB1c2VFeGlzdGluZz86IE9wYXF1ZVZhbHVlO1xuICB1c2VWYWx1ZT86IE9wYXF1ZVZhbHVlO1xuICBkZXBzPzogUjNEZWNsYXJlRGVwZW5kZW5jeU1ldGFkYXRhRmFjYWRlW107XG59XG5cbmV4cG9ydCBlbnVtIFZpZXdFbmNhcHN1bGF0aW9uIHtcbiAgRW11bGF0ZWQgPSAwLFxuICAvLyBIaXN0b3JpY2FsbHkgdGhlIDEgdmFsdWUgd2FzIGZvciBgTmF0aXZlYCBlbmNhcHN1bGF0aW9uIHdoaWNoIGhhcyBiZWVuIHJlbW92ZWQgYXMgb2YgdjExLlxuICBOb25lID0gMixcbiAgU2hhZG93RG9tID0gM1xufVxuXG5leHBvcnQgdHlwZSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSA9IG51bWJlcjtcblxuZXhwb3J0IGludGVyZmFjZSBSM1F1ZXJ5TWV0YWRhdGFGYWNhZGUge1xuICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcbiAgZmlyc3Q6IGJvb2xlYW47XG4gIHByZWRpY2F0ZTogT3BhcXVlVmFsdWV8c3RyaW5nW107XG4gIGRlc2NlbmRhbnRzOiBib29sZWFuO1xuICBlbWl0RGlzdGluY3RDaGFuZ2VzT25seTogYm9vbGVhbjtcbiAgcmVhZDogT3BhcXVlVmFsdWV8bnVsbDtcbiAgc3RhdGljOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVjbGFyZVF1ZXJ5TWV0YWRhdGFGYWNhZGUge1xuICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcbiAgZmlyc3Q/OiBib29sZWFuO1xuICBwcmVkaWNhdGU6IE9wYXF1ZVZhbHVlfHN0cmluZ1tdO1xuICBkZXNjZW5kYW50cz86IGJvb2xlYW47XG4gIHJlYWQ/OiBPcGFxdWVWYWx1ZTtcbiAgc3RhdGljPzogYm9vbGVhbjtcbiAgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVjbGFyZUluamVjdG9yRmFjYWRlIHtcbiAgdHlwZTogVHlwZTtcbiAgaW1wb3J0cz86IE9wYXF1ZVZhbHVlW107XG4gIHByb3ZpZGVycz86IE9wYXF1ZVZhbHVlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlTmdNb2R1bGVGYWNhZGUge1xuICB0eXBlOiBUeXBlO1xuICBib290c3RyYXA/OiBPcGFxdWVWYWx1ZVtdfCgoKSA9PiBPcGFxdWVWYWx1ZVtdKTtcbiAgZGVjbGFyYXRpb25zPzogT3BhcXVlVmFsdWVbXXwoKCkgPT4gT3BhcXVlVmFsdWVbXSk7XG4gIGltcG9ydHM/OiBPcGFxdWVWYWx1ZVtdfCgoKSA9PiBPcGFxdWVWYWx1ZVtdKTtcbiAgZXhwb3J0cz86IE9wYXF1ZVZhbHVlW118KCgpID0+IE9wYXF1ZVZhbHVlW10pO1xuICBzY2hlbWFzPzogT3BhcXVlVmFsdWVbXTtcbiAgaWQ/OiBPcGFxdWVWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM0RlY2xhcmVQaXBlRmFjYWRlIHtcbiAgdHlwZTogVHlwZTtcbiAgbmFtZTogc3RyaW5nO1xuICBwdXJlPzogYm9vbGVhbjtcbiAgaXNTdGFuZGFsb25lPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZVNvdXJjZVNwYW4ge1xuICBzdGFydDogYW55O1xuICBlbmQ6IGFueTtcbiAgZGV0YWlsczogYW55O1xuICBmdWxsU3RhcnQ6IGFueTtcbn1cbiJdfQ==