import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDateReservationVehicule]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateReservationVehiculeDirective, multi: true}]
})
export class DateReservationVehiculeDirective implements Validator  {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let dateDepart = new Date(control.value.dateDepart);
    let dateRetour = new Date(control.value.dateRetour);
    if(dateDepart<=dateRetour) return null
    return {dateRetourInvalide: true}
  }

}
