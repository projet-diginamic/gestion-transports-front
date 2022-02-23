import { Directive } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { VehiculeService } from "../services/vehiculeService";
import { tap, map, catchError } from 'rxjs/operators';

@Directive({
    selector: '[appImmatriculationValidator]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: ImmatriculationValidatorDirective, multi: true}]
})
export class ImmatriculationValidatorDirective implements AsyncValidator {

    constructor(private vehiculeServ: VehiculeService) { }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        
        if(!control.value){
            return of(null);
        }

        return this.vehiculeServ.rechercherVehiculeParImma(control.value)
        .pipe(
            tap(col => console.log('avant le map',col)),
            map(() => ({immatriculationTrouve : true})),
            tap(col => console.log('aprés le map', col)),
            catchError(() => of(null))
        );
    }
}