import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDateMinReservationVehicule]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateMinReservationVehiculeDirective, multi: true}]
})
export class DateMinReservationVehiculeDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let dateDepart = new Date(control.value.dateDepart);
    let dateRetour = new Date(control.value.dateRetour);
    let min = new Date(Date.now() + ( 3600 * 1000 * 24)).toISOString().split('T')[0];
    let dateMin = new Date(min);
    if(dateDepart>=dateMin && dateRetour>=dateMin) return null
    return {dateMinInvalide: true}
  }

}
