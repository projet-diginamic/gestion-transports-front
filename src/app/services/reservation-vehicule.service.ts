import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CreerReservationVehicule, DemandeReservationVehicule, ReservationVehicule, VehiculeService } from '../models/reservations';

const urlBackVehiculelocal = "http://localhost:8080/vehicule-service/"
const urlBackResaVehiculelocal = "http://localhost:8080/resa/vehicule/"
const urlBackResaVehiculeEncours = "http://localhost:8080/resa/vehicule/utilisateur-active/"
const urlBackResaVehiculeHistorique = "http://localhost:8080/resa/vehicule/utilisateur-archive-annule/"

@Injectable({
  providedIn: 'root'
})
export class ReservationVehiculeService {

  private obsVehicules = new Subject<VehiculeService[]>();
  private obsVehiculeEncours = new Subject<ReservationVehicule[]>();
  private obsvehiculeHistorique = new Subject<ReservationVehicule[]>();

  constructor(private http:HttpClient) { }

  fluxVehiculesServices(): Observable<VehiculeService[]> {
    return this.obsVehicules.asObservable();
  }

  fluxResaEncours(): Observable<ReservationVehicule[]> {
    return this.obsVehiculeEncours.asObservable();
  }

  fluxResaHistorique(): Observable<ReservationVehicule[]> {
    return this.obsvehiculeHistorique.asObservable();
  }

  listerReservationsEncours(userId:number): Observable<ReservationVehicule[]>{
    return this.http.get<ReservationVehicule[]>(urlBackResaVehiculeEncours+userId);
  }

  listerHistoriqueReservations(userId:number): Observable<ReservationVehicule[]>{
    return this.http.get<ReservationVehicule[]>(urlBackResaVehiculeHistorique+userId);
  }

  listerVehiculesServices(): Observable<VehiculeService[]>{
    return this.http.get<VehiculeService[]>(urlBackVehiculelocal+"?start=0&size=50");
  }

  listerVehiculesServicesParMarque(marque:string): Observable<VehiculeService[]>{
    return this.http.get<VehiculeService[]>(urlBackVehiculelocal+"/marque/"+marque);
  }

  reserverVehiculeService(demandereservation: CreerReservationVehicule) : Observable<ReservationVehicule>{
    return this.http.post<ReservationVehicule>(urlBackResaVehiculelocal,demandereservation);
  }

  annulerReservation(id:number) : Observable<HttpResponse<string>>{
    return this.http.delete<HttpResponse<string>>(urlBackResaVehiculelocal+id);
  }

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
