import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appAdresseDepartArrivee]',
  providers: [{provide: NG_VALIDATORS, useExisting: AdresseDepartArriveeDirective, multi: true}]
})
export class AdresseDepartArriveeDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let dep : string = control.value.adresseDepart
    let arr : string = control.value.adresseArrivee
    if(dep && arr && dep.toLowerCase() !== arr.toLowerCase()) return null;
    return {adresseDepartArriveeIdentique: true};
  }

}
