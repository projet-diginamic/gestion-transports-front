import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDateMinReservation]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateMinReservationDirective, multi: true}]
})
export class DateMinReservationDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {

    if(control.value.date){
      let dateSaisie = new Date(control.value.date);
      let min = new Date(Date.now() + ( 3600 * 1000 * 24)).toISOString().split('T')[0];
      let dateMin = new Date(min);
      if(dateSaisie>=dateMin) return null
      return {dateMinInvalide: true}
    }
    return null
  }

}
