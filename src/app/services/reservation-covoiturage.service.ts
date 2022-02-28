import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AnnonceCovoiturage, DemandeReservationCovoiturage, FiltreAnnonceCovoiturage, ReservationCovoiturage, ReservationCovoiturageDetail, ReservationCovoiturageEncours, ReservationCovoiturageHistorique } from '../models/reservations';

// const baseUrl = "http://localhost:3000/resaCovoitEncours";
// const baseUrl2 = "http://localhost:3000/resaCovoitHistorique";
// const baseUrl3 = "http://localhost:3000/annonces";
const urlBackAnnonceLocal = "http://localhost:8080/covoiturage"
const urlBackCovoitLocal = "http://localhost:8080/resa/covoiturage"
const urlBackCovitEncours = "http://localhost:8080/resa/covoiturage/passager-active/"
const urlBackHistoriqueEncours = "http://localhost:8080/resa/covoiturage/passager-archive-annule/"
@Injectable({
  providedIn: 'root'
})
export class ReservationCovoiturageService {

  private obsAnnonces = new Subject<AnnonceCovoiturage[]>();
  private obsResaCovoitEncours = new Subject<ReservationCovoiturageEncours[]>();
  private obsResaCovoitHistorique = new Subject<ReservationCovoiturageHistorique[]>();

  constructor(private http:HttpClient) { }

  fluxAnnonces(): Observable<AnnonceCovoiturage[]> {
    return this.obsAnnonces.asObservable();
  }

  fluxResaCovoitEncours(): Observable<ReservationCovoiturageEncours[]> {
    return this.obsResaCovoitEncours.asObservable();
  }

  fluxResaCovoitHistorique(): Observable<ReservationCovoiturageHistorique[]> {
    return this.obsResaCovoitHistorique.asObservable();
  }

  detailCovoiturage(id:number): Observable<ReservationCovoiturageDetail>{
    return this.http.get<ReservationCovoiturageDetail>(urlBackCovoitLocal+'/'+id+'/');
  }

  listerCovoiturageEncours(userId:number): Observable<ReservationCovoiturageEncours[]>{
    return this.http.get<ReservationCovoiturageEncours[]>(urlBackCovitEncours+userId);
  }

  listerHistoriqueCovoiturage(userId:number): Observable<ReservationCovoiturageHistorique[]>{
    return this.http.get<ReservationCovoiturageHistorique[]>(urlBackHistoriqueEncours+userId);
  }

  listerAnnoncesAll() : Observable<AnnonceCovoiturage[]>{
    return this.http.get<AnnonceCovoiturage[]>(urlBackAnnonceLocal+"/all-ouvert");
  }

  listerAnnonces(filtre:Partial<FiltreAnnonceCovoiturage>) : Observable<AnnonceCovoiturage[]>{
    let paramsUrl = "";

    if(filtre.adresseDepart || filtre.adresseDestination || filtre.dateHeureDepart) {
  
      if(filtre.adresseDepart){
        paramsUrl.includes("?") ? paramsUrl += "&" : paramsUrl += "?" 
        paramsUrl += "dep="+filtre.adresseDepart.ville
      }
         
      if(filtre.adresseDestination){
        paramsUrl.includes("?") ? paramsUrl += "&" : paramsUrl += "?" 
        paramsUrl += "arr="+filtre.adresseDestination.ville
      }

      if(filtre.dateHeureDepart){
        paramsUrl.includes("?") ? paramsUrl += "&" : paramsUrl += "?" 
        paramsUrl += "date="+filtre.dateHeureDepart
      }
    }
    
    console.log(paramsUrl);
    
    return this.http.get<AnnonceCovoiturage[]>(urlBackAnnonceLocal+"/rechercher"+paramsUrl);

  }

  reserverCovoiturage(demandereservation: DemandeReservationCovoiturage) : Observable<ReservationCovoiturage>{
    return this.http.post<ReservationCovoiturage>(urlBackCovoitLocal,demandereservation);
  }

  annulerReservation(id:number) : Observable<HttpResponse<string>>{
    return this.http.delete<HttpResponse<string>>(urlBackCovoitLocal+"/"+id);
  }

  actualiserReservationEncours(user:number): void{

    this.listerCovoiturageEncours(user).subscribe({
      next: liste=>{
        this.obsResaCovoitEncours.next(liste);
      },
      error: (err)=>{
        console.log(err);
        this.obsResaCovoitEncours.next([]);
      }
    }) 

  }

  actualiserHistorique(user:number): void{

    this.listerHistoriqueCovoiturage(user).subscribe({
      next: liste=>{
        this.obsResaCovoitHistorique.next(liste);
      },
      error: (err)=>{
        console.log(err);
        this.obsResaCovoitHistorique.next([]);
      }
    })

  }

  actualiserAnnonces() : void{

    this.listerAnnoncesAll().subscribe({
      next: liste=>{
        console.log(liste);
        //Ajout d'un filtre afin d'afficher uniquement les annonces avec des places disponibles
        this.obsAnnonces.next(liste.filter(c=>(c.nbPlaces-c.nbResas)>0));
      },
      error: (err)=>{
        console.log(err);
        this.obsAnnonces.next([]);
      }
    })

  }

  actualiserAnnoncesFiltre(filtre:Partial<FiltreAnnonceCovoiturage>) : void{

    this.listerAnnonces(filtre).subscribe({
      next: liste=>{
        console.log(liste);
        
        this.obsAnnonces.next(liste.filter(c=>(c.nbPlaces-c.nbResas)>0));
      },
      error: (err)=>{
        console.log(err);
        this.obsAnnonces.next([]);
      }
    })

  }

}
