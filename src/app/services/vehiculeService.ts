import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Categorie, CreeVehicule, DetailVehicule, Vehicule } from "../models/vehicule";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class VehiculeService {
     url = `http://localhost:8085/vehicule-service?start=0&size=9`;
     urlCategorie = 'http://localhost:8085/categorie';

    private busTabVehicules = new Subject<Vehicule[]>();
    constructor(private http: HttpClient) {

    }
    //Gestion des problèmatiques de l'observable
    abonnerFluxTabVehicule(): Observable<Vehicule[]> {
        return this.busTabVehicules.asObservable();
      }

    //Liste tout les vehicules de service
    listerVehicules(): Observable<Vehicule[]> {
        return this.http.get<Vehicule[]>(this.url);
    }

    //Filtre la liste des vehicules en fonction de l'immatriculation
    filtrerVehiculeParImma(immatriculation : string) : Observable<Vehicule[]>{
        const urlFiltreImma = this.url + `/immatriculation/${immatriculation}`;
        return this.http.get<Vehicule[]>(urlFiltreImma);
    }

    //Filtre la liste des vehicules en fonction de la marque
    filtrerVehiculeParMarque(marque: string) : Observable<Vehicule[]>{
        const urlFiltreMarque = this.url + `/marque/${marque}`;
        return this.http.get<Vehicule[]>(urlFiltreMarque);
    }

    //Rafraichis la liste des vehicules
    rafraichirListeVehicules(){
        this.listerVehicules()
        .subscribe(
            colsServeur => this.busTabVehicules.next(colsServeur)
        );
    }

    //Liste des catégorie de vehicule
    listerCategorie(){
        return this.http.get<Categorie[]>(this.urlCategorie);
    }

    //Ajouter un nouveau Vehicule
    creerVehicule(vehicule: Partial<CreeVehicule>){
        return this.http.post<Vehicule>(this.url,vehicule);
    }

    //Modifier un vehicule
    modifierVehicule(vehicule: Partial<DetailVehicule>){
        return this.http.put<Vehicule>(this.url,vehicule);
    }

    //Verifier en base si l'immatriculation existe
    rechercherImmatriculation(immatriculation : string) : Observable<Vehicule>{
        const urlSearchImma = this.url+ `/immatriculation/${immatriculation}`;
        return this.http.get<Vehicule>(urlSearchImma);
    }

    //Affiche le detail du vehicule selectionné
    detailVehiculeService(id : number) : Observable<DetailVehicule>{
        const urlDetailVehicule = `http://localhost:8085/vehicule-service/${id}`;
        return this.http.get<DetailVehicule>(urlDetailVehicule);
    }
}