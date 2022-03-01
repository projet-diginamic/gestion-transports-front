import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appHeureReservation]',
  providers: [{provide: NG_VALIDATORS, useExisting: HeureReservationDirective, multi: true}]
})
export class HeureReservationDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {   
    // if(control.value.heure){
    //   let heure = parseInt(control.value.heure.split(':')[0])
      if(control.value.heure && parseInt(control.value.heure.split(':')[0])>=7 && parseInt(control.value.heure.split(':')[0]) <=21) return null
      return {heureInvalide: true}
    // }
    // return null
  }

}
