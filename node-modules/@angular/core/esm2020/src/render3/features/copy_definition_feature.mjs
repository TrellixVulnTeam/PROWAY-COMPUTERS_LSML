/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isComponentDef } from '../interfaces/type_checks';
import { getSuperType } from './inherit_definition_feature';
/**
 * Fields which exist on either directive or component definitions, and need to be copied from
 * parent to child classes by the `ɵɵCopyDefinitionFeature`.
 */
const COPY_DIRECTIVE_FIELDS = [
    // The child class should use the providers of its parent.
    'providersResolver',
    // Not listed here are any fields which are handled by the `ɵɵInheritDefinitionFeature`, such
    // as inputs, outputs, and host binding functions.
];
/**
 * Fields which exist only on component definitions, and need to be copied from parent to child
 * classes by the `ɵɵCopyDefinitionFeature`.
 *
 * The type here allows any field of `ComponentDef` which is not also a property of `DirectiveDef`,
 * since those should go in `COPY_DIRECTIVE_FIELDS` above.
 */
const COPY_COMPONENT_FIELDS = [
    // The child class should use the template function of its parent, including all template
    // semantics.
    'template',
    'decls',
    'consts',
    'vars',
    'onPush',
    'ngContentSelectors',
    // The child class should use the CSS styles of its parent, including all styling semantics.
    'styles',
    'encapsulation',
    // The child class should be checked by the runtime in the same way as its parent.
    'schemas',
];
/**
 * Copies the fields not handled by the `ɵɵInheritDefinitionFeature` from the supertype of a
 * definition.
 *
 * This exists primarily to support ngcc migration of an existing View Engine pattern, where an
 * entire decorator is inherited from a parent to a child class. When ngcc detects this case, it
 * generates a skeleton definition on the child class, and applies this feature.
 *
 * The `ɵɵCopyDefinitionFeature` then copies any needed fields from the parent class' definition,
 * including things like the component template function.
 *
 * @param definition The definition of a child class which inherits from a parent class with its
 * own definition.
 *
 * @codeGenApi
 */
export function ɵɵCopyDefinitionFeature(definition) {
    let superType = getSuperType(definition.type);
    let superDef = undefined;
    if (isComponentDef(definition)) {
        // Don't use getComponentDef/getDirectiveDef. This logic relies on inheritance.
        superDef = superType.ɵcmp;
    }
    else {
        // Don't use getComponentDef/getDirectiveDef. This logic relies on inheritance.
        superDef = superType.ɵdir;
    }
    // Needed because `definition` fields are readonly.
    const defAny = definition;
    // Copy over any fields that apply to either directives or components.
    for (const field of COPY_DIRECTIVE_FIELDS) {
        defAny[field] = superDef[field];
    }
    if (isComponentDef(superDef)) {
        // Copy over any component-specific fields.
        for (const field of COPY_COMPONENT_FIELDS) {
            defAny[field] = superDef[field];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weV9kZWZpbml0aW9uX2ZlYXR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ZlYXR1cmVzL2NvcHlfZGVmaW5pdGlvbl9mZWF0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFFMUQ7OztHQUdHO0FBQ0gsTUFBTSxxQkFBcUIsR0FBb0M7SUFDN0QsMERBQTBEO0lBQzFELG1CQUFtQjtJQUVuQiw2RkFBNkY7SUFDN0Ysa0RBQWtEO0NBQ25ELENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSCxNQUFNLHFCQUFxQixHQUF3RTtJQUNqRyx5RkFBeUY7SUFDekYsYUFBYTtJQUNiLFVBQVU7SUFDVixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1Isb0JBQW9CO0lBRXBCLDRGQUE0RjtJQUM1RixRQUFRO0lBQ1IsZUFBZTtJQUVmLGtGQUFrRjtJQUNsRixTQUFTO0NBQ1YsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxVQUErQztJQUNyRixJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBRS9DLElBQUksUUFBUSxHQUFrRCxTQUFTLENBQUM7SUFDeEUsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDOUIsK0VBQStFO1FBQy9FLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSyxDQUFDO0tBQzVCO1NBQU07UUFDTCwrRUFBK0U7UUFDL0UsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFLLENBQUM7S0FDNUI7SUFFRCxtREFBbUQ7SUFDbkQsTUFBTSxNQUFNLEdBQUksVUFBa0IsQ0FBQztJQUVuQyxzRUFBc0U7SUFDdEUsS0FBSyxNQUFNLEtBQUssSUFBSSxxQkFBcUIsRUFBRTtRQUN6QyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDNUIsMkNBQTJDO1FBQzNDLEtBQUssTUFBTSxLQUFLLElBQUkscUJBQXFCLEVBQUU7WUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudERlZiwgRGlyZWN0aXZlRGVmfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RlZmluaXRpb24nO1xuaW1wb3J0IHtpc0NvbXBvbmVudERlZn0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBlX2NoZWNrcyc7XG5cbmltcG9ydCB7Z2V0U3VwZXJUeXBlfSBmcm9tICcuL2luaGVyaXRfZGVmaW5pdGlvbl9mZWF0dXJlJztcblxuLyoqXG4gKiBGaWVsZHMgd2hpY2ggZXhpc3Qgb24gZWl0aGVyIGRpcmVjdGl2ZSBvciBjb21wb25lbnQgZGVmaW5pdGlvbnMsIGFuZCBuZWVkIHRvIGJlIGNvcGllZCBmcm9tXG4gKiBwYXJlbnQgdG8gY2hpbGQgY2xhc3NlcyBieSB0aGUgYMm1ybVDb3B5RGVmaW5pdGlvbkZlYXR1cmVgLlxuICovXG5jb25zdCBDT1BZX0RJUkVDVElWRV9GSUVMRFM6IChrZXlvZiBEaXJlY3RpdmVEZWY8dW5rbm93bj4pW10gPSBbXG4gIC8vIFRoZSBjaGlsZCBjbGFzcyBzaG91bGQgdXNlIHRoZSBwcm92aWRlcnMgb2YgaXRzIHBhcmVudC5cbiAgJ3Byb3ZpZGVyc1Jlc29sdmVyJyxcblxuICAvLyBOb3QgbGlzdGVkIGhlcmUgYXJlIGFueSBmaWVsZHMgd2hpY2ggYXJlIGhhbmRsZWQgYnkgdGhlIGDJtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlYCwgc3VjaFxuICAvLyBhcyBpbnB1dHMsIG91dHB1dHMsIGFuZCBob3N0IGJpbmRpbmcgZnVuY3Rpb25zLlxuXTtcblxuLyoqXG4gKiBGaWVsZHMgd2hpY2ggZXhpc3Qgb25seSBvbiBjb21wb25lbnQgZGVmaW5pdGlvbnMsIGFuZCBuZWVkIHRvIGJlIGNvcGllZCBmcm9tIHBhcmVudCB0byBjaGlsZFxuICogY2xhc3NlcyBieSB0aGUgYMm1ybVDb3B5RGVmaW5pdGlvbkZlYXR1cmVgLlxuICpcbiAqIFRoZSB0eXBlIGhlcmUgYWxsb3dzIGFueSBmaWVsZCBvZiBgQ29tcG9uZW50RGVmYCB3aGljaCBpcyBub3QgYWxzbyBhIHByb3BlcnR5IG9mIGBEaXJlY3RpdmVEZWZgLFxuICogc2luY2UgdGhvc2Ugc2hvdWxkIGdvIGluIGBDT1BZX0RJUkVDVElWRV9GSUVMRFNgIGFib3ZlLlxuICovXG5jb25zdCBDT1BZX0NPTVBPTkVOVF9GSUVMRFM6IEV4Y2x1ZGU8a2V5b2YgQ29tcG9uZW50RGVmPHVua25vd24+LCBrZXlvZiBEaXJlY3RpdmVEZWY8dW5rbm93bj4+W10gPSBbXG4gIC8vIFRoZSBjaGlsZCBjbGFzcyBzaG91bGQgdXNlIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBvZiBpdHMgcGFyZW50LCBpbmNsdWRpbmcgYWxsIHRlbXBsYXRlXG4gIC8vIHNlbWFudGljcy5cbiAgJ3RlbXBsYXRlJyxcbiAgJ2RlY2xzJyxcbiAgJ2NvbnN0cycsXG4gICd2YXJzJyxcbiAgJ29uUHVzaCcsXG4gICduZ0NvbnRlbnRTZWxlY3RvcnMnLFxuXG4gIC8vIFRoZSBjaGlsZCBjbGFzcyBzaG91bGQgdXNlIHRoZSBDU1Mgc3R5bGVzIG9mIGl0cyBwYXJlbnQsIGluY2x1ZGluZyBhbGwgc3R5bGluZyBzZW1hbnRpY3MuXG4gICdzdHlsZXMnLFxuICAnZW5jYXBzdWxhdGlvbicsXG5cbiAgLy8gVGhlIGNoaWxkIGNsYXNzIHNob3VsZCBiZSBjaGVja2VkIGJ5IHRoZSBydW50aW1lIGluIHRoZSBzYW1lIHdheSBhcyBpdHMgcGFyZW50LlxuICAnc2NoZW1hcycsXG5dO1xuXG4vKipcbiAqIENvcGllcyB0aGUgZmllbGRzIG5vdCBoYW5kbGVkIGJ5IHRoZSBgybXJtUluaGVyaXREZWZpbml0aW9uRmVhdHVyZWAgZnJvbSB0aGUgc3VwZXJ0eXBlIG9mIGFcbiAqIGRlZmluaXRpb24uXG4gKlxuICogVGhpcyBleGlzdHMgcHJpbWFyaWx5IHRvIHN1cHBvcnQgbmdjYyBtaWdyYXRpb24gb2YgYW4gZXhpc3RpbmcgVmlldyBFbmdpbmUgcGF0dGVybiwgd2hlcmUgYW5cbiAqIGVudGlyZSBkZWNvcmF0b3IgaXMgaW5oZXJpdGVkIGZyb20gYSBwYXJlbnQgdG8gYSBjaGlsZCBjbGFzcy4gV2hlbiBuZ2NjIGRldGVjdHMgdGhpcyBjYXNlLCBpdFxuICogZ2VuZXJhdGVzIGEgc2tlbGV0b24gZGVmaW5pdGlvbiBvbiB0aGUgY2hpbGQgY2xhc3MsIGFuZCBhcHBsaWVzIHRoaXMgZmVhdHVyZS5cbiAqXG4gKiBUaGUgYMm1ybVDb3B5RGVmaW5pdGlvbkZlYXR1cmVgIHRoZW4gY29waWVzIGFueSBuZWVkZWQgZmllbGRzIGZyb20gdGhlIHBhcmVudCBjbGFzcycgZGVmaW5pdGlvbixcbiAqIGluY2x1ZGluZyB0aGluZ3MgbGlrZSB0aGUgY29tcG9uZW50IHRlbXBsYXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSBkZWZpbml0aW9uIFRoZSBkZWZpbml0aW9uIG9mIGEgY2hpbGQgY2xhc3Mgd2hpY2ggaW5oZXJpdHMgZnJvbSBhIHBhcmVudCBjbGFzcyB3aXRoIGl0c1xuICogb3duIGRlZmluaXRpb24uXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVDb3B5RGVmaW5pdGlvbkZlYXR1cmUoZGVmaW5pdGlvbjogRGlyZWN0aXZlRGVmPGFueT58Q29tcG9uZW50RGVmPGFueT4pOiB2b2lkIHtcbiAgbGV0IHN1cGVyVHlwZSA9IGdldFN1cGVyVHlwZShkZWZpbml0aW9uLnR5cGUpITtcblxuICBsZXQgc3VwZXJEZWY6IERpcmVjdGl2ZURlZjxhbnk+fENvbXBvbmVudERlZjxhbnk+fHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgaWYgKGlzQ29tcG9uZW50RGVmKGRlZmluaXRpb24pKSB7XG4gICAgLy8gRG9uJ3QgdXNlIGdldENvbXBvbmVudERlZi9nZXREaXJlY3RpdmVEZWYuIFRoaXMgbG9naWMgcmVsaWVzIG9uIGluaGVyaXRhbmNlLlxuICAgIHN1cGVyRGVmID0gc3VwZXJUeXBlLsm1Y21wITtcbiAgfSBlbHNlIHtcbiAgICAvLyBEb24ndCB1c2UgZ2V0Q29tcG9uZW50RGVmL2dldERpcmVjdGl2ZURlZi4gVGhpcyBsb2dpYyByZWxpZXMgb24gaW5oZXJpdGFuY2UuXG4gICAgc3VwZXJEZWYgPSBzdXBlclR5cGUuybVkaXIhO1xuICB9XG5cbiAgLy8gTmVlZGVkIGJlY2F1c2UgYGRlZmluaXRpb25gIGZpZWxkcyBhcmUgcmVhZG9ubHkuXG4gIGNvbnN0IGRlZkFueSA9IChkZWZpbml0aW9uIGFzIGFueSk7XG5cbiAgLy8gQ29weSBvdmVyIGFueSBmaWVsZHMgdGhhdCBhcHBseSB0byBlaXRoZXIgZGlyZWN0aXZlcyBvciBjb21wb25lbnRzLlxuICBmb3IgKGNvbnN0IGZpZWxkIG9mIENPUFlfRElSRUNUSVZFX0ZJRUxEUykge1xuICAgIGRlZkFueVtmaWVsZF0gPSBzdXBlckRlZltmaWVsZF07XG4gIH1cblxuICBpZiAoaXNDb21wb25lbnREZWYoc3VwZXJEZWYpKSB7XG4gICAgLy8gQ29weSBvdmVyIGFueSBjb21wb25lbnQtc3BlY2lmaWMgZmllbGRzLlxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgQ09QWV9DT01QT05FTlRfRklFTERTKSB7XG4gICAgICBkZWZBbnlbZmllbGRdID0gc3VwZXJEZWZbZmllbGRdO1xuICAgIH1cbiAgfVxufVxuIl19