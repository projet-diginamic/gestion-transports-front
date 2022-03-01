import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { baseUrlBack } from '../app.component';
import { CreerReservationVehicule, ReservationVehicule, VehiculeService } from '../models/reservations';

const urlBackVehiculelocal            = baseUrlBack+"vehicule-service/"
const urlBackResaVehiculelocal        = baseUrlBack+"resa/vehicule/"
const urlBackResaVehiculeEncours      = baseUrlBack+"resa/vehicule/utilisateur-active/"
const urlBackResaVehiculeHistorique   = baseUrlBack+"resa/vehicule/utilisateur-archive-annule/"

@Injectable({
  providedIn: 'root'
})
export class ReservationVehiculeService {

   /**
 *        Service de gestion des Réservations de covoiturage 
 *        -------------------------------
 *        Mise à disposition d'un Subject listant les véhicules de service
 *        Mise à disposition de Subject listant les réservations de véhicules de service en cours et historique
 */

  private obsVehicules = new Subject<VehiculeService[]>();
  private obsVehiculeEncours = new Subject<ReservationVehicule[]>();
  private obsvehiculeHistorique = new Subject<ReservationVehicule[]>();

  constructor(private http:HttpClient) { }
  // Abonnement au flux des véhicules de service
  fluxVehiculesServices(): Observable<VehiculeService[]> {
    return this.obsVehicules.asObservable();
  }
  // Abonnement au flux des réservations en cours
  fluxResaEncours(): Observable<ReservationVehicule[]> {
    return this.obsVehiculeEncours.asObservable();
  }
  // Abonnement au flux des réservations historiques
  fluxResaHistorique(): Observable<ReservationVehicule[]> {
    return this.obsvehiculeHistorique.asObservable();
  }
  // Récupération de la liste des réservations en cours d'un utilisateur dont l'identifiant (userId) est passé en paramètre
  listerReservationsEncours(userId:number): Observable<ReservationVehicule[]>{
    return this.http.get<ReservationVehicule[]>(urlBackResaVehiculeEncours+userId);
  }
  // Récupération de la liste des réservations historiques d'un utilisateur dont l'identifiant (userId) est passé en paramètre
  listerHistoriqueReservations(userId:number): Observable<ReservationVehicule[]>{
    return this.http.get<ReservationVehicule[]>(urlBackResaVehiculeHistorique+userId);
  }
  // Récupération de la liste des véhicules de service
  listerVehiculesServices(): Observable<VehiculeService[]>{
    return this.http.get<VehiculeService[]>(urlBackVehiculelocal+"?start=0&size=50");
  }
  // Récupération de la liste des véhicules de service par marque dont la marque est passée en paramètre
  listerVehiculesServicesParMarque(marque:string): Observable<VehiculeService[]>{
    return this.http.get<VehiculeService[]>(urlBackVehiculelocal+"/marque/"+marque);
  }
  //Réserver un véhicule de service
  reserverVehiculeService(demandereservation: CreerReservationVehicule) : Observable<ReservationVehicule>{
    return this.http.post<ReservationVehicule>(urlBackResaVehiculelocal,demandereservation);
  }
  //Annuler une réservation d'un véhicule de service dont l'identifiant (id) de la réservation est passé en paramètre
  annulerReservation(id:number) : Observable<HttpResponse<string>>{
    return this.http.delete<HttpResponse<string>>(urlBackResaVehiculelocal+id);
  }
  // Actualisation de la liste des réservations en cours d'un utilisateur dont l'identifiant (user) est passé en paramètre
  actualiserReservationEncours(user:number){

    this.listerReservationsEncours(user).subscribe({
      next: liste=>{
        this.obsVehiculeEncours.next(liste.filter(l=>{
          if(new Date(l.dateHeureDepart)>new Date())return true;
          return false;
        }));
      },
      error: (err)=>{
        console.log(err);
        this.obsVehiculeEncours.next([]);
      }
    }) 

  }
  // Actualisation de la liste des réservations historiques d'un utilisateur dont l'identifiant (user) est passé en paramètre
  actualiserHistorique(user:number){

    this.listerHistoriqueReservations(user).subscribe({
      next: liste=>{
        this.obsvehiculeHistorique.next(liste);
      },
      error: (err)=>{
        console.log(err);
        this.obsvehiculeHistorique.next([]);
      }
    })

  }
  // Actualisation de la liste des véhicules
  actualiserVehiculesServices(){

    this.listerVehiculesServices().subscribe({
      next: liste=>{
        this.obsVehicules.next(liste);
      },
      error: (err)=>{
        console.log(err);
        this.obsVehicules.next([]);
      }
    })

  }
  // Actualisation de la liste des véhicules filtrées par marque
  actualiserVehiculesServicesFiltreParMarque(marque:string){

    this.listerVehiculesServicesParMarque(marque).subscribe({
      next: liste=>{
        this.obsVehicules.next(liste);
      },
      error: (err)=>{
        console.log(err);
        this.obsVehicules.next([]);
      }
    })
    
  }
}
