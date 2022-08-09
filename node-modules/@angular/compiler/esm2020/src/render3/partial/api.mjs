export var FactoryTarget;
(function (FactoryTarget) {
    FactoryTarget[FactoryTarget["Directive"] = 0] = "Directive";
    FactoryTarget[FactoryTarget["Component"] = 1] = "Component";
    FactoryTarget[FactoryTarget["Injectable"] = 2] = "Injectable";
    FactoryTarget[FactoryTarget["Pipe"] = 3] = "Pipe";
    FactoryTarget[FactoryTarget["NgModule"] = 4] = "NgModule";
})(FactoryTarget || (FactoryTarget = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvcGFydGlhbC9hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVpBLE1BQU0sQ0FBTixJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFDdkIsMkRBQWEsQ0FBQTtJQUNiLDJEQUFhLENBQUE7SUFDYiw2REFBYyxDQUFBO0lBQ2QsaURBQVEsQ0FBQTtJQUNSLHlEQUFZLENBQUE7QUFDZCxDQUFDLEVBTlcsYUFBYSxLQUFiLGFBQWEsUUFNeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFIzUGFydGlhbERlY2xhcmF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIHZlcnNpb24gb2YgdGhlIGNvbXBpbGVyIHRoYXQgY2FuIHByb2Nlc3MgdGhpcyBwYXJ0aWFsIGRlY2xhcmF0aW9uLlxuICAgKi9cbiAgbWluVmVyc2lvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWZXJzaW9uIG51bWJlciBvZiB0aGUgQW5ndWxhciBjb21waWxlciB0aGF0IHdhcyB1c2VkIHRvIGNvbXBpbGUgdGhpcyBkZWNsYXJhdGlvbi4gVGhlIGxpbmtlclxuICAgKiB3aWxsIGJlIGFibGUgdG8gZGV0ZWN0IHdoaWNoIHZlcnNpb24gYSBsaWJyYXJ5IGlzIHVzaW5nIGFuZCBpbnRlcnByZXQgaXRzIG1ldGFkYXRhIGFjY29yZGluZ2x5LlxuICAgKi9cbiAgdmVyc2lvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgYEBhbmd1bGFyL2NvcmVgIEVTIG1vZHVsZSwgd2hpY2ggYWxsb3dzIGFjY2Vzc1xuICAgKiB0byBhbGwgQW5ndWxhciBleHBvcnRzLCBpbmNsdWRpbmcgSXZ5IGluc3RydWN0aW9ucy5cbiAgICovXG4gIG5nSW1wb3J0OiBvLkV4cHJlc3Npb247XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgZGVjb3JhdGVkIGNsYXNzLCB3aGljaCBpcyBzdWJqZWN0IHRvIHRoaXMgcGFydGlhbCBkZWNsYXJhdGlvbi5cbiAgICovXG4gIHR5cGU6IG8uRXhwcmVzc2lvbjtcbn1cblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIHNoYXBlIG9mIHRoZSBvYmplY3QgdGhhdCB0aGUgYMm1ybVuZ0RlY2xhcmVEaXJlY3RpdmUoKWAgZnVuY3Rpb24gYWNjZXB0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSM0RlY2xhcmVEaXJlY3RpdmVNZXRhZGF0YSBleHRlbmRzIFIzUGFydGlhbERlY2xhcmF0aW9uIHtcbiAgLyoqXG4gICAqIFVucGFyc2VkIHNlbGVjdG9yIG9mIHRoZSBkaXJlY3RpdmUuXG4gICAqL1xuICBzZWxlY3Rvcj86IHN0cmluZztcblxuICAvKipcbiAgICogQSBtYXBwaW5nIG9mIGlucHV0cyBmcm9tIGNsYXNzIHByb3BlcnR5IG5hbWVzIHRvIGJpbmRpbmcgcHJvcGVydHkgbmFtZXMsIG9yIHRvIGEgdHVwbGUgb2ZcbiAgICogYmluZGluZyBwcm9wZXJ0eSBuYW1lIGFuZCBjbGFzcyBwcm9wZXJ0eSBuYW1lIGlmIHRoZSBuYW1lcyBhcmUgZGlmZmVyZW50LlxuICAgKi9cbiAgaW5wdXRzPzoge1tjbGFzc1Byb3BlcnR5TmFtZTogc3RyaW5nXTogc3RyaW5nfFtzdHJpbmcsIHN0cmluZ119O1xuXG4gIC8qKlxuICAgKiBBIG1hcHBpbmcgb2Ygb3V0cHV0cyBmcm9tIGNsYXNzIHByb3BlcnR5IG5hbWVzIHRvIGJpbmRpbmcgcHJvcGVydHkgbmFtZXMuXG4gICAqL1xuICBvdXRwdXRzPzoge1tjbGFzc1Byb3BlcnR5TmFtZTogc3RyaW5nXTogc3RyaW5nfTtcblxuICAvKipcbiAgICogSW5mb3JtYXRpb24gYWJvdXQgaG9zdCBiaW5kaW5ncyBwcmVzZW50IG9uIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBob3N0Pzoge1xuICAgIC8qKlxuICAgICAqIEEgbWFwcGluZyBvZiBhdHRyaWJ1dGUgbmFtZXMgdG8gdGhlaXIgdmFsdWUgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVzPzoge1trZXk6IHN0cmluZ106IG8uRXhwcmVzc2lvbn07XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcHBpbmcgb2YgZXZlbnQgbmFtZXMgdG8gdGhlaXIgdW5wYXJzZWQgZXZlbnQgaGFuZGxlciBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIGxpc3RlbmVyczoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcHBpbmcgb2YgYm91bmQgcHJvcGVydGllcyB0byB0aGVpciB1bnBhcnNlZCBiaW5kaW5nIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgcHJvcGVydGllcz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBjbGFzcyBhdHRyaWJ1dGUsIGlmIHByZXNlbnQuIFRoaXMgaXMgc3RvcmVkIG91dHNpZGUgb2YgYGF0dHJpYnV0ZXNgIGFzIGl0c1xuICAgICAqIHN0cmluZyB2YWx1ZSBtdXN0IGJlIGtub3duIHN0YXRpY2FsbHkuXG4gICAgICovXG4gICAgY2xhc3NBdHRyaWJ1dGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIHN0eWxlIGF0dHJpYnV0ZSwgaWYgcHJlc2VudC4gVGhpcyBpcyBzdG9yZWQgb3V0c2lkZSBvZiBgYXR0cmlidXRlc2AgYXMgaXRzXG4gICAgICogc3RyaW5nIHZhbHVlIG11c3QgYmUga25vd24gc3RhdGljYWxseS5cbiAgICAgKi9cbiAgICBzdHlsZUF0dHJpYnV0ZT86IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbnRlbnQgcXVlcmllcyBtYWRlIGJ5IHRoZSBkaXJlY3RpdmUuXG4gICAqL1xuICBxdWVyaWVzPzogUjNEZWNsYXJlUXVlcnlNZXRhZGF0YVtdO1xuXG4gIC8qKlxuICAgKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgdmlldyBxdWVyaWVzIG1hZGUgYnkgdGhlIGRpcmVjdGl2ZS5cbiAgICovXG4gIHZpZXdRdWVyaWVzPzogUjNEZWNsYXJlUXVlcnlNZXRhZGF0YVtdO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBwcm92aWRlcnMgcHJvdmlkZWQgYnkgdGhlIGRpcmVjdGl2ZS5cbiAgICovXG4gIHByb3ZpZGVycz86IG8uRXhwcmVzc2lvbjtcblxuICAvKipcbiAgICogVGhlIG5hbWVzIGJ5IHdoaWNoIHRoZSBkaXJlY3RpdmUgaXMgZXhwb3J0ZWQuXG4gICAqL1xuICBleHBvcnRBcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkaXJlY3RpdmUgaGFzIGFuIGluaGVyaXRhbmNlIGNsYXVzZS4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICB1c2VzSW5oZXJpdGFuY2U/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkaXJlY3RpdmUgaW1wbGVtZW50cyB0aGUgYG5nT25DaGFuZ2VzYCBob29rLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIHVzZXNPbkNoYW5nZXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkaXJlY3RpdmUgaXMgc3RhbmRhbG9uZS4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBpc1N0YW5kYWxvbmU/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIERlc2NyaWJlcyB0aGUgc2hhcGUgb2YgdGhlIG9iamVjdCB0aGF0IHRoZSBgybXJtW5nRGVjbGFyZUNvbXBvbmVudCgpYCBmdW5jdGlvbiBhY2NlcHRzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVjbGFyZUNvbXBvbmVudE1ldGFkYXRhIGV4dGVuZHMgUjNEZWNsYXJlRGlyZWN0aXZlTWV0YWRhdGEge1xuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCdzIHVucGFyc2VkIHRlbXBsYXRlIHN0cmluZyBhcyBvcGFxdWUgZXhwcmVzc2lvbi4gVGhlIHRlbXBsYXRlIGlzIHJlcHJlc2VudGVkXG4gICAqIHVzaW5nIGVpdGhlciBhIHN0cmluZyBsaXRlcmFsIG9yIHRlbXBsYXRlIGxpdGVyYWwgd2l0aG91dCBzdWJzdGl0dXRpb25zLCBidXQgaXRzIHZhbHVlIGlzXG4gICAqIG5vdCByZWFkIGRpcmVjdGx5LiBJbnN0ZWFkLCB0aGUgdGVtcGxhdGUgcGFyc2VyIGlzIGdpdmVuIHRoZSBmdWxsIHNvdXJjZSBmaWxlJ3MgdGV4dCBhbmRcbiAgICogdGhlIHJhbmdlIG9mIHRoaXMgZXhwcmVzc2lvbiB0byBwYXJzZSBkaXJlY3RseSBmcm9tIHNvdXJjZS5cbiAgICovXG4gIHRlbXBsYXRlOiBvLkV4cHJlc3Npb247XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHRlbXBsYXRlIHdhcyBpbmxpbmUgKHVzaW5nIGB0ZW1wbGF0ZWApIG9yIGV4dGVybmFsICh1c2luZyBgdGVtcGxhdGVVcmxgKS5cbiAgICogRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBpc0lubGluZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENTUyBmcm9tIGlubGluZSBzdHlsZXMgYW5kIGluY2x1ZGVkIHN0eWxlVXJscy5cbiAgICovXG4gIHN0eWxlcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggbWF0Y2hlZCBpbiB0aGUgdGVtcGxhdGUsIGluY2x1ZGluZyBzdWZmaWNpZW50XG4gICAqIG1ldGFkYXRhIGZvciBlYWNoIGRpcmVjdGl2ZSB0byBhdHRyaWJ1dGUgYmluZGluZ3MgYW5kIHJlZmVyZW5jZXMgd2l0aGluXG4gICAqIHRoZSB0ZW1wbGF0ZSB0byBlYWNoIGRpcmVjdGl2ZSBzcGVjaWZpY2FsbHksIGlmIHRoZSBydW50aW1lIGluc3RydWN0aW9uc1xuICAgKiBzdXBwb3J0IHRoaXMuXG4gICAqL1xuICBjb21wb25lbnRzPzogUjNEZWNsYXJlRGlyZWN0aXZlRGVwZW5kZW5jeU1ldGFkYXRhW107XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgZGlyZWN0aXZlcyB3aGljaCBtYXRjaGVkIGluIHRoZSB0ZW1wbGF0ZSwgaW5jbHVkaW5nIHN1ZmZpY2llbnRcbiAgICogbWV0YWRhdGEgZm9yIGVhY2ggZGlyZWN0aXZlIHRvIGF0dHJpYnV0ZSBiaW5kaW5ncyBhbmQgcmVmZXJlbmNlcyB3aXRoaW5cbiAgICogdGhlIHRlbXBsYXRlIHRvIGVhY2ggZGlyZWN0aXZlIHNwZWNpZmljYWxseSwgaWYgdGhlIHJ1bnRpbWUgaW5zdHJ1Y3Rpb25zXG4gICAqIHN1cHBvcnQgdGhpcy5cbiAgICovXG4gIGRpcmVjdGl2ZXM/OiBSM0RlY2xhcmVEaXJlY3RpdmVEZXBlbmRlbmN5TWV0YWRhdGFbXTtcblxuICAvKipcbiAgICogTGlzdCBvZiBkZXBlbmRlbmNpZXMgd2hpY2ggbWF0Y2hlZCBpbiB0aGUgdGVtcGxhdGUsIGluY2x1ZGluZyBzdWZmaWNpZW50XG4gICAqIG1ldGFkYXRhIGZvciBlYWNoIGRpcmVjdGl2ZS9waXBlIHRvIGF0dHJpYnV0ZSBiaW5kaW5ncyBhbmQgcmVmZXJlbmNlcyB3aXRoaW5cbiAgICogdGhlIHRlbXBsYXRlIHRvIGVhY2ggZGlyZWN0aXZlIHNwZWNpZmljYWxseSwgaWYgdGhlIHJ1bnRpbWUgaW5zdHJ1Y3Rpb25zXG4gICAqIHN1cHBvcnQgdGhpcy5cbiAgICovXG4gIGRlcGVuZGVuY2llcz86IFIzRGVjbGFyZVRlbXBsYXRlRGVwZW5kZW5jeU1ldGFkYXRhW107XG5cbiAgLyoqXG4gICAqIEEgbWFwIG9mIHBpcGUgbmFtZXMgdG8gYW4gZXhwcmVzc2lvbiByZWZlcmVuY2luZyB0aGUgcGlwZSB0eXBlIChwb3NzaWJseSBhIGZvcndhcmQgcmVmZXJlbmNlXG4gICAqIHdyYXBwZWQgaW4gYSBgZm9yd2FyZFJlZmAgaW52b2NhdGlvbikgd2hpY2ggYXJlIHVzZWQgaW4gdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgcGlwZXM/OiB7W3BpcGVOYW1lOiBzdHJpbmddOiBvLkV4cHJlc3Npb258KCgpID0+IG8uRXhwcmVzc2lvbil9O1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiB2aWV3IHByb3ZpZGVycyBkZWZpbmVkIGluIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICB2aWV3UHJvdmlkZXJzPzogby5FeHByZXNzaW9uO1xuXG4gIC8qKlxuICAgKiBBIGNvbGxlY3Rpb24gb2YgYW5pbWF0aW9uIHRyaWdnZXJzIHRoYXQgd2lsbCBiZSB1c2VkIGluIHRoZSBjb21wb25lbnQgdGVtcGxhdGUuXG4gICAqL1xuICBhbmltYXRpb25zPzogby5FeHByZXNzaW9uO1xuXG4gIC8qKlxuICAgKiBTdHJhdGVneSB1c2VkIGZvciBkZXRlY3RpbmcgY2hhbmdlcyBpbiB0aGUgY29tcG9uZW50LlxuICAgKiBEZWZhdWx0cyB0byBgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdGAuXG4gICAqL1xuICBjaGFuZ2VEZXRlY3Rpb24/OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneTtcblxuICAvKipcbiAgICogQW4gZW5jYXBzdWxhdGlvbiBwb2xpY3kgZm9yIHRoZSBjb21wb25lbnQncyBzdHlsaW5nLlxuICAgKiBEZWZhdWx0cyB0byBgVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWRgLlxuICAgKi9cbiAgZW5jYXBzdWxhdGlvbj86IFZpZXdFbmNhcHN1bGF0aW9uO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgaW50ZXJwb2xhdGlvbiBzdGFydCBhbmQgZW5kIGRlbGltaXRlcnMuIERlZmF1bHRzIHRvIHt7IGFuZCB9fS5cbiAgICovXG4gIGludGVycG9sYXRpb24/OiBbc3RyaW5nLCBzdHJpbmddO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHdoaXRlc3BhY2UgaW4gdGhlIHRlbXBsYXRlIHNob3VsZCBiZSBwcmVzZXJ2ZWQuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgcHJlc2VydmVXaGl0ZXNwYWNlcz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFIzRGVjbGFyZVRlbXBsYXRlRGVwZW5kZW5jeU1ldGFkYXRhID0gUjNEZWNsYXJlRGlyZWN0aXZlRGVwZW5kZW5jeU1ldGFkYXRhfFxuICAgIFIzRGVjbGFyZVBpcGVEZXBlbmRlbmN5TWV0YWRhdGF8UjNEZWNsYXJlTmdNb2R1bGVEZXBlbmRlbmN5TWV0YWRhdGE7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlRGlyZWN0aXZlRGVwZW5kZW5jeU1ldGFkYXRhIHtcbiAga2luZDogJ2RpcmVjdGl2ZSd8J2NvbXBvbmVudCc7XG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIG9mIHRoZSBkaXJlY3RpdmUuXG4gICAqL1xuICBzZWxlY3Rvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIGRpcmVjdGl2ZSBjbGFzcyAocG9zc2libHkgYSBmb3J3YXJkIHJlZmVyZW5jZSB3cmFwcGVkIGluIGEgYGZvcndhcmRSZWZgXG4gICAqIGludm9jYXRpb24pLlxuICAgKi9cbiAgdHlwZTogby5FeHByZXNzaW9ufCgoKSA9PiBvLkV4cHJlc3Npb24pO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSBuYW1lcyBvZiB0aGUgZGlyZWN0aXZlJ3MgaW5wdXRzLlxuICAgKi9cbiAgaW5wdXRzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEV2ZW50IG5hbWVzIG9mIHRoZSBkaXJlY3RpdmUncyBvdXRwdXRzLlxuICAgKi9cbiAgb3V0cHV0cz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBOYW1lcyBieSB3aGljaCB0aGlzIGRpcmVjdGl2ZSBleHBvcnRzIGl0c2VsZiBmb3IgcmVmZXJlbmNlcy5cbiAgICovXG4gIGV4cG9ydEFzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlUGlwZURlcGVuZGVuY3lNZXRhZGF0YSB7XG4gIGtpbmQ6ICdwaXBlJztcblxuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgcGlwZSBjbGFzcyAocG9zc2libHkgYSBmb3J3YXJkIHJlZmVyZW5jZSB3cmFwcGVkIGluIGEgYGZvcndhcmRSZWZgXG4gICAqIGludm9jYXRpb24pLlxuICAgKi9cbiAgdHlwZTogby5FeHByZXNzaW9ufCgoKSA9PiBvLkV4cHJlc3Npb24pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVjbGFyZU5nTW9kdWxlRGVwZW5kZW5jeU1ldGFkYXRhIHtcbiAga2luZDogJ25nbW9kdWxlJztcblxuICB0eXBlOiBvLkV4cHJlc3Npb258KCgpID0+IG8uRXhwcmVzc2lvbik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlUXVlcnlNZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvbiB0aGUgY2xhc3MgdG8gdXBkYXRlIHdpdGggcXVlcnkgcmVzdWx0cy5cbiAgICovXG4gIHByb3BlcnR5TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlYWQgb25seSB0aGUgZmlyc3QgbWF0Y2hpbmcgcmVzdWx0LCBvciBhbiBhcnJheSBvZiByZXN1bHRzLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIGZpcnN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRWl0aGVyIGFuIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIGEgdHlwZSAocG9zc2libHkgd3JhcHBlZCBpbiBhIGBmb3J3YXJkUmVmKClgKSBvclxuICAgKiBgSW5qZWN0aW9uVG9rZW5gIGZvciB0aGUgcXVlcnkgcHJlZGljYXRlLCBvciBhIHNldCBvZiBzdHJpbmcgc2VsZWN0b3JzLlxuICAgKi9cbiAgcHJlZGljYXRlOiBvLkV4cHJlc3Npb258c3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gaW5jbHVkZSBvbmx5IGRpcmVjdCBjaGlsZHJlbiBvciBhbGwgZGVzY2VuZGFudHMuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgZGVzY2VuZGFudHM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUcnVlIHRvIG9ubHkgZmlyZSBjaGFuZ2VzIGlmIHRoZXJlIGFyZSB1bmRlcmx5aW5nIGNoYW5nZXMgdG8gdGhlIHF1ZXJ5LlxuICAgKi9cbiAgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbiBleHByZXNzaW9uIHJlcHJlc2VudGluZyBhIHR5cGUgdG8gcmVhZCBmcm9tIGVhY2ggbWF0Y2hlZCBub2RlLCBvciBudWxsIGlmIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAqIGZvciBhIGdpdmVuIG5vZGUgaXMgdG8gYmUgcmV0dXJuZWQuXG4gICAqL1xuICByZWFkPzogby5FeHByZXNzaW9uO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGlzIHF1ZXJ5IHNob3VsZCBjb2xsZWN0IG9ubHkgc3RhdGljIHJlc3VsdHMuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKlxuICAgKiBJZiBzdGF0aWMgaXMgdHJ1ZSwgdGhlIHF1ZXJ5J3MgcmVzdWx0cyB3aWxsIGJlIHNldCBvbiB0aGUgY29tcG9uZW50IGFmdGVyIG5vZGVzIGFyZSBjcmVhdGVkLFxuICAgKiBidXQgYmVmb3JlIGNoYW5nZSBkZXRlY3Rpb24gcnVucy4gVGhpcyBtZWFucyB0aGF0IGFueSByZXN1bHRzIHRoYXQgcmVsaWVkIHVwb24gY2hhbmdlIGRldGVjdGlvblxuICAgKiB0byBydW4gKGUuZy4gcmVzdWx0cyBpbnNpZGUgKm5nSWYgb3IgKm5nRm9yIHZpZXdzKSB3aWxsIG5vdCBiZSBjb2xsZWN0ZWQuIFF1ZXJ5IHJlc3VsdHMgYXJlXG4gICAqIGF2YWlsYWJsZSBpbiB0aGUgbmdPbkluaXQgaG9vay5cbiAgICpcbiAgICogSWYgc3RhdGljIGlzIGZhbHNlLCB0aGUgcXVlcnkncyByZXN1bHRzIHdpbGwgYmUgc2V0IG9uIHRoZSBjb21wb25lbnQgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvblxuICAgKiBydW5zLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHF1ZXJ5IHJlc3VsdHMgY2FuIGNvbnRhaW4gbm9kZXMgaW5zaWRlICpuZ0lmIG9yICpuZ0ZvciB2aWV3cywgYnV0XG4gICAqIHRoZSByZXN1bHRzIHdpbGwgbm90IGJlIGF2YWlsYWJsZSBpbiB0aGUgbmdPbkluaXQgaG9vayAob25seSBpbiB0aGUgbmdBZnRlckNvbnRlbnRJbml0IGZvclxuICAgKiBjb250ZW50IGhvb2tzIGFuZCBuZ0FmdGVyVmlld0luaXQgZm9yIHZpZXcgaG9va3MpLlxuICAgKi9cbiAgc3RhdGljPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIHNoYXBlIG9mIHRoZSBvYmplY3RzIHRoYXQgdGhlIGDJtcm1bmdEZWNsYXJlTmdNb2R1bGUoKWAgYWNjZXB0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSM0RlY2xhcmVOZ01vZHVsZU1ldGFkYXRhIGV4dGVuZHMgUjNQYXJ0aWFsRGVjbGFyYXRpb24ge1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXhwcmVzc2lvbnMgcmVwcmVzZW50aW5nIHRoZSBib290c3RyYXAgY29tcG9uZW50cyBzcGVjaWZpZWQgYnkgdGhlIG1vZHVsZS5cbiAgICovXG4gIGJvb3RzdHJhcD86IG8uRXhwcmVzc2lvbltdO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBleHByZXNzaW9ucyByZXByZXNlbnRpbmcgdGhlIGRpcmVjdGl2ZXMgYW5kIHBpcGVzIGRlY2xhcmVkIGJ5IHRoZSBtb2R1bGUuXG4gICAqL1xuICBkZWNsYXJhdGlvbnM/OiBvLkV4cHJlc3Npb25bXTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXhwcmVzc2lvbnMgcmVwcmVzZW50aW5nIHRoZSBpbXBvcnRzIG9mIHRoZSBtb2R1bGUuXG4gICAqL1xuICBpbXBvcnRzPzogby5FeHByZXNzaW9uW107XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGV4cHJlc3Npb25zIHJlcHJlc2VudGluZyB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlLlxuICAgKi9cbiAgZXhwb3J0cz86IG8uRXhwcmVzc2lvbltdO1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIHNjaGVtYXMgdGhhdCBkZWNsYXJlIGVsZW1lbnRzIHRvIGJlIGFsbG93ZWQgaW4gdGhlIE5nTW9kdWxlLlxuICAgKi9cbiAgc2NoZW1hcz86IG8uRXhwcmVzc2lvbltdO1xuXG4gIC8qKiBVbmlxdWUgSUQgb3IgZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgdGhlIHVuaXF1ZSBJRCBvZiBhbiBOZ01vZHVsZS4gKi9cbiAgaWQ/OiBvLkV4cHJlc3Npb247XG59XG5cbi8qKlxuICogRGVzY3JpYmVzIHRoZSBzaGFwZSBvZiB0aGUgb2JqZWN0cyB0aGF0IHRoZSBgybXJtW5nRGVjbGFyZUluamVjdG9yKClgIGFjY2VwdHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlSW5qZWN0b3JNZXRhZGF0YSBleHRlbmRzIFIzUGFydGlhbERlY2xhcmF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHByb3ZpZGVycyBwcm92aWRlZCBieSB0aGUgaW5qZWN0b3IuXG4gICAqL1xuICBwcm92aWRlcnM/OiBvLkV4cHJlc3Npb247XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBpbXBvcnRzIGludG8gdGhlIGluamVjdG9yLlxuICAgKi9cbiAgaW1wb3J0cz86IG8uRXhwcmVzc2lvbltdO1xufVxuXG4vKipcbiAqIERlc2NyaWJlcyB0aGUgc2hhcGUgb2YgdGhlIG9iamVjdCB0aGF0IHRoZSBgybXJtW5nRGVjbGFyZVBpcGUoKWAgZnVuY3Rpb24gYWNjZXB0cy5cbiAqXG4gKiBUaGlzIGludGVyZmFjZSBzZXJ2ZXMgcHJpbWFyaWx5IGFzIGRvY3VtZW50YXRpb24sIGFzIGNvbmZvcm1hbmNlIHRvIHRoaXMgaW50ZXJmYWNlIGlzIG5vdFxuICogZW5mb3JjZWQgZHVyaW5nIGxpbmtpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlUGlwZU1ldGFkYXRhIGV4dGVuZHMgUjNQYXJ0aWFsRGVjbGFyYXRpb24ge1xuICAvKipcbiAgICogVGhlIG5hbWUgdG8gdXNlIGluIHRlbXBsYXRlcyB0byByZWZlciB0byB0aGlzIHBpcGUuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyBwaXBlIGlzIFwicHVyZVwiLlxuICAgKlxuICAgKiBBIHB1cmUgcGlwZSdzIGB0cmFuc2Zvcm0oKWAgbWV0aG9kIGlzIG9ubHkgaW52b2tlZCB3aGVuIGl0cyBpbnB1dCBhcmd1bWVudHMgY2hhbmdlLlxuICAgKlxuICAgKiBEZWZhdWx0OiB0cnVlLlxuICAgKi9cbiAgcHVyZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHBpcGUgaXMgc3RhbmRhbG9uZS5cbiAgICpcbiAgICogRGVmYXVsdDogZmFsc2UuXG4gICAqL1xuICBpc1N0YW5kYWxvbmU/OiBib29sZWFuO1xufVxuXG5cbi8qKlxuICogRGVzY3JpYmVzIHRoZSBzaGFwZSBvZiB0aGUgb2JqZWN0IHRoYXQgdGhlIGDJtcm1bmdEZWNsYXJlRmFjdG9yeSgpYCBmdW5jdGlvbiBhY2NlcHRzLlxuICpcbiAqIFRoaXMgaW50ZXJmYWNlIHNlcnZlcyBwcmltYXJpbHkgYXMgZG9jdW1lbnRhdGlvbiwgYXMgY29uZm9ybWFuY2UgdG8gdGhpcyBpbnRlcmZhY2UgaXMgbm90XG4gKiBlbmZvcmNlZCBkdXJpbmcgbGlua2luZy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSM0RlY2xhcmVGYWN0b3J5TWV0YWRhdGEgZXh0ZW5kcyBSM1BhcnRpYWxEZWNsYXJhdGlvbiB7XG4gIC8qKlxuICAgKiBBIGNvbGxlY3Rpb24gb2YgZGVwZW5kZW5jaWVzIHRoYXQgdGhpcyBmYWN0b3J5IHJlbGllcyB1cG9uLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIGBudWxsYCwgdGhlbiB0aGUgdHlwZSdzIGNvbnN0cnVjdG9yIGlzIG5vbmV4aXN0ZW50IGFuZCB3aWxsIGJlIGluaGVyaXRlZCBmcm9tIGFuXG4gICAqIGFuY2VzdG9yIG9mIHRoZSB0eXBlLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIGAnaW52YWxpZCdgLCB0aGVuIG9uZSBvciBtb3JlIG9mIHRoZSBwYXJhbWV0ZXJzIHdhc24ndCByZXNvbHZhYmxlIGFuZCBhbnkgYXR0ZW1wdCB0b1xuICAgKiB1c2UgdGhlc2UgZGVwcyB3aWxsIHJlc3VsdCBpbiBhIHJ1bnRpbWUgZXJyb3IuXG4gICAqL1xuICBkZXBzOiBSM0RlY2xhcmVEZXBlbmRlbmN5TWV0YWRhdGFbXXwnaW52YWxpZCd8bnVsbDtcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgdGFyZ2V0IGJlaW5nIGNyZWF0ZWQgYnkgdGhlIGZhY3RvcnkuXG4gICAqL1xuICB0YXJnZXQ6IEZhY3RvcnlUYXJnZXQ7XG59XG5cbmV4cG9ydCBlbnVtIEZhY3RvcnlUYXJnZXQge1xuICBEaXJlY3RpdmUgPSAwLFxuICBDb21wb25lbnQgPSAxLFxuICBJbmplY3RhYmxlID0gMixcbiAgUGlwZSA9IDMsXG4gIE5nTW9kdWxlID0gNCxcbn1cblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIHNoYXBlIG9mIHRoZSBvYmplY3QgdGhhdCB0aGUgYMm1ybVuZ0RlY2xhcmVJbmplY3RhYmxlKClgIGZ1bmN0aW9uIGFjY2VwdHMuXG4gKlxuICogVGhpcyBpbnRlcmZhY2Ugc2VydmVzIHByaW1hcmlseSBhcyBkb2N1bWVudGF0aW9uLCBhcyBjb25mb3JtYW5jZSB0byB0aGlzIGludGVyZmFjZSBpcyBub3RcbiAqIGVuZm9yY2VkIGR1cmluZyBsaW5raW5nLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVjbGFyZUluamVjdGFibGVNZXRhZGF0YSBleHRlbmRzIFIzUGFydGlhbERlY2xhcmF0aW9uIHtcbiAgLyoqXG4gICAqIElmIHByb3ZpZGVkLCBzcGVjaWZpZXMgdGhhdCB0aGUgZGVjbGFyZWQgaW5qZWN0YWJsZSBiZWxvbmdzIHRvIGEgcGFydGljdWxhciBpbmplY3RvcjpcbiAgICogLSBgSW5qZWN0b3JUeXBlYCBzdWNoIGFzIGBOZ01vZHVsZWAsXG4gICAqIC0gYCdyb290J2AgdGhlIHJvb3QgaW5qZWN0b3JcbiAgICogLSBgJ2FueSdgIGFsbCBpbmplY3RvcnMuXG4gICAqIElmIG5vdCBwcm92aWRlZCwgdGhlbiBpdCBkb2VzIG5vdCBiZWxvbmcgdG8gYW55IGluamVjdG9yLiBNdXN0IGJlIGV4cGxpY2l0bHkgbGlzdGVkIGluIHRoZVxuICAgKiBwcm92aWRlcnMgb2YgYW4gaW5qZWN0b3IuXG4gICAqL1xuICBwcm92aWRlZEluPzogby5FeHByZXNzaW9uO1xuXG4gIC8qKlxuICAgKiBJZiBwcm92aWRlZCwgYW4gZXhwcmVzc2lvbiB0aGF0IGV2YWx1YXRlcyB0byBhIGNsYXNzIHRvIHVzZSB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIHRoaXNcbiAgICogaW5qZWN0YWJsZS5cbiAgICovXG4gIHVzZUNsYXNzPzogby5FeHByZXNzaW9uO1xuXG4gIC8qKlxuICAgKiBJZiBwcm92aWRlZCwgYW4gZXhwcmVzc2lvbiB0aGF0IGV2YWx1YXRlcyB0byBhIGZ1bmN0aW9uIHRvIHVzZSB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mXG4gICAqIHRoaXMgaW5qZWN0YWJsZS5cbiAgICovXG4gIHVzZUZhY3Rvcnk/OiBvLkV4cHJlc3Npb247XG5cbiAgLyoqXG4gICAqIElmIHByb3ZpZGVkLCBhbiBleHByZXNzaW9uIHRoYXQgZXZhbHVhdGVzIHRvIGEgdG9rZW4gb2YgYW5vdGhlciBpbmplY3RhYmxlIHRoYXQgdGhpcyBpbmplY3RhYmxlXG4gICAqIGFsaWFzZXMuXG4gICAqL1xuICB1c2VFeGlzdGluZz86IG8uRXhwcmVzc2lvbjtcblxuICAvKipcbiAgICogSWYgcHJvdmlkZWQsIGFuIGV4cHJlc3Npb24gdGhhdCBldmFsdWF0ZXMgdG8gdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBvZiB0aGlzIGluamVjdGFibGUuXG4gICAqL1xuICB1c2VWYWx1ZT86IG8uRXhwcmVzc2lvbjtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZGVwZW5kZW5jaWVzIHRvIHN1cHBvcnQgaW5zdGFudGlhdGluZyB0aGlzIGluamVjdGFibGUgdmlhIGB1c2VDbGFzc2Agb3JcbiAgICogYHVzZUZhY3RvcnlgLlxuICAgKi9cbiAgZGVwcz86IFIzRGVjbGFyZURlcGVuZGVuY3lNZXRhZGF0YVtdO1xufVxuXG4vKipcbiAqIE1ldGFkYXRhIGluZGljYXRpbmcgaG93IGEgZGVwZW5kZW5jeSBzaG91bGQgYmUgaW5qZWN0ZWQgaW50byBhIGZhY3RvcnkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlRGVwZW5kZW5jeU1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIEFuIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSB0b2tlbiBvciB2YWx1ZSB0byBiZSBpbmplY3RlZCwgb3IgYG51bGxgIGlmIHRoZSBkZXBlbmRlbmN5IGlzXG4gICAqIG5vdCB2YWxpZC5cbiAgICpcbiAgICogSWYgdGhpcyBkZXBlbmRlbmN5IGlzIGR1ZSB0byB0aGUgYEBBdHRyaWJ1dGUoKWAgZGVjb3JhdG9yLCB0aGVuIHRoaXMgaXMgYW4gZXhwcmVzc2lvblxuICAgKiBldmFsdWF0aW5nIHRvIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUuXG4gICAqL1xuICB0b2tlbjogby5FeHByZXNzaW9ufG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGRlcGVuZGVuY3kgaXMgaW5qZWN0aW5nIGFuIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICogRGVmYXVsdDogZmFsc2UuXG4gICAqL1xuICBhdHRyaWJ1dGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkZXBlbmRlbmN5IGhhcyBhbiBASG9zdCBxdWFsaWZpZXIuXG4gICAqIERlZmF1bHQ6IGZhbHNlLFxuICAgKi9cbiAgaG9zdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGRlcGVuZGVuY3kgaGFzIGFuIEBPcHRpb25hbCBxdWFsaWZpZXIuXG4gICAqIERlZmF1bHQ6IGZhbHNlLFxuICAgKi9cbiAgb3B0aW9uYWw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkZXBlbmRlbmN5IGhhcyBhbiBAU2VsZiBxdWFsaWZpZXIuXG4gICAqIERlZmF1bHQ6IGZhbHNlLFxuICAgKi9cbiAgc2VsZj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGRlcGVuZGVuY3kgaGFzIGFuIEBTa2lwU2VsZiBxdWFsaWZpZXIuXG4gICAqIERlZmF1bHQ6IGZhbHNlLFxuICAgKi9cbiAgc2tpcFNlbGY/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIERlc2NyaWJlcyB0aGUgc2hhcGUgb2YgdGhlIG9iamVjdCB0aGF0IHRoZSBgybXJtW5nRGVjbGFyZUNsYXNzTWV0YWRhdGEoKWAgZnVuY3Rpb24gYWNjZXB0cy5cbiAqXG4gKiBUaGlzIGludGVyZmFjZSBzZXJ2ZXMgcHJpbWFyaWx5IGFzIGRvY3VtZW50YXRpb24sIGFzIGNvbmZvcm1hbmNlIHRvIHRoaXMgaW50ZXJmYWNlIGlzIG5vdFxuICogZW5mb3JjZWQgZHVyaW5nIGxpbmtpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlQ2xhc3NNZXRhZGF0YSBleHRlbmRzIFIzUGFydGlhbERlY2xhcmF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBBbmd1bGFyIGRlY29yYXRvcnMgb2YgdGhlIGNsYXNzLlxuICAgKi9cbiAgZGVjb3JhdG9yczogby5FeHByZXNzaW9uO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbGx5IHNwZWNpZmllcyB0aGUgY29uc3RydWN0b3IgcGFyYW1ldGVycywgdGhlaXIgdHlwZXMgYW5kIHRoZSBBbmd1bGFyIGRlY29yYXRvcnMgb2YgZWFjaFxuICAgKiBwYXJhbWV0ZXIuIFRoaXMgcHJvcGVydHkgaXMgb21pdHRlZCBpZiB0aGUgY2xhc3MgZG9lcyBub3QgaGF2ZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgY3RvclBhcmFtZXRlcnM/OiBvLkV4cHJlc3Npb247XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsbHkgc3BlY2lmaWVzIHRoZSBBbmd1bGFyIGRlY29yYXRvcnMgYXBwbGllZCB0byB0aGUgY2xhc3MgcHJvcGVydGllcy4gVGhpcyBwcm9wZXJ0eSBpc1xuICAgKiBvbWl0dGVkIGlmIG5vIHByb3BlcnRpZXMgaGF2ZSBhbnkgZGVjb3JhdG9ycy5cbiAgICovXG4gIHByb3BEZWNvcmF0b3JzPzogby5FeHByZXNzaW9uO1xufVxuIl19