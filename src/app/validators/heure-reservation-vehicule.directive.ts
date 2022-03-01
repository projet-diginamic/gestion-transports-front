import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appHeureReservationVehicule]',
  providers: [{provide: NG_VALIDATORS, useExisting: HeureReservationVehiculeDirective, multi: true}]
})
export class HeureReservationVehiculeDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value.heureDepart && control.value.heureRetour && parseInt(control.value.heureDepart.split(':')[0])>=7 && parseInt(control.value.heureDepart.split(':')[0]) <=21 && parseInt(control.value.heureRetour.split(':')[0])>=7 && parseInt(control.value.heureRetour.split(':')[0]) <=21 && parseInt(control.value.heureDepart.split(':')[0])<parseInt(control.value.heureRetour.split(':')[0])) return null
    return {heureInvalide: true}
  }

}
