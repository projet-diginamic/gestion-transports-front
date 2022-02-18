import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vehicule } from "../models/vehicule";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class VehiculeService {

    constructor(private http: HttpClient) {

    }

    afficherVehicule(): Observable<Vehicule> {
        return this.http.get<Vehicule>('');
    }

    listerVehicules(): Observable<Vehicule[]> {
        return this.http.get<Vehicule[]>('');
    }
}