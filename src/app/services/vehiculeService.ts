import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Categorie, CreeVehicule, Vehicule } from "../models/vehicule";
import { HttpClient } from '@angular/common/http';

const url = `http://localhost:3000/vehicules`;
const urlCategorie = 'http://localhost:3000/categorie';
@Injectable({
    providedIn: 'root'
})

export class VehiculeService {

    private busTabVehicules = new Subject<Vehicule[]>();
    constructor(private http: HttpClient) {

    }
    //Gestion des problèmatiques de l'observable
    abonnerFluxTabVehicule(): Observable<Vehicule[]> {
        return this.busTabVehicules.asObservable();
      }

    //Liste tout les vehicules de service
    listerVehicules(): Observable<Vehicule[]> {
        return this.http.get<Vehicule[]>(url);
    }

    //Filtre la liste des vehicules en fonction de l'immatriculation
    filtrerVehiculeParImma(immatriculation : string) : Observable<Vehicule[]>{
        const urlFiltreImma = `http://localhost:3000/vehicules?immatriculation=${immatriculation}`;
        return this.http.get<Vehicule[]>(urlFiltreImma) ;
    }

    //Filtre la liste des vehicules en fonction de la marque
    filtrerVehiculeParMarque(marque: string) : Observable<Vehicule[]>{
        const urlFiltreMarque = `http://localhost:3000/vehicules?marque=${marque}`;
        return this.http.get<Vehicule[]>(urlFiltreMarque) ;
    }

    //Rafraichis la liste des vehicules
    rafraichirListeVehicules(){
        const rafraichir = this.listerVehicules()
        .subscribe(
            colsServeur => this.busTabVehicules.next(colsServeur)
        );
        rafraichir.unsubscribe();
    }

    //Liste des catégorie de vehicule
    listerCategorie(){
        return this.http.get<Categorie[]>(urlCategorie);
    }

    //Ajouter un nouveau Vehicule
    creerVehicule(vehicule: Partial<CreeVehicule>){
        return this.http.post<Vehicule>(url,vehicule)
    }
}