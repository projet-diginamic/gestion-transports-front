import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { baseUrlBack } from '../app.component';
import { AnnonceCovoiturage, DemandeReservationCovoiturage, FiltreAnnonceCovoiturage, ReservationCovoiturage, ReservationCovoiturageDetail, ReservationCovoiturageEncours, ReservationCovoiturageHistorique } from '../models/reservations';


const urlBackAnnonceLocal       = baseUrlBack+"covoiturage"
const urlBackCovoitLocal        = baseUrlBack+"resa/covoiturage"
const urlBackCovitEncours       = baseUrlBack+"resa/covoiturage/passager-active/"
const urlBackHistoriqueEncours  = baseUrlBack+"resa/covoiturage/passager-archive-annule/"
@Injectable({
  providedIn: 'root'
})
export class ReservationCovoiturageService {

  /**
 *        Service de gestion des Réservations de covoiturage 
 *        -------------------------------
 *        Mise à disposition d'un Subject listant les annonces de covoiturage à venir
 *        Mise à disposition de Subject listant les réservations de covoiturage en cours et historique
 */

  private obsAnnonces = new Subject<AnnonceCovoiturage[]>();
  private obsResaCovoitEncours = new Subject<ReservationCovoiturageEncours[]>();
  private obsResaCovoitHistorique = new Subject<ReservationCovoiturageHistorique[]>();

  constructor(private http:HttpClient) { }

  // Abonnement au flux des annonces de covoiturage 
  fluxAnnonces(): Observable<AnnonceCovoiturage[]> {
    return this.obsAnnonces.asObservable();
  }
  // Abonnement au flux des réservation de covoiturage en cours
  fluxResaCovoitEncours(): Observable<ReservationCovoiturageEncours[]> {
    return this.obsResaCovoitEncours.asObservable();
  }
  // Abonnement au flux des réservation de covoiturage historique
  fluxResaCovoitHistorique(): Observable<ReservationCovoiturageHistorique[]> {
    return this.obsResaCovoitHistorique.asObservable();
  }
  // Récupération du détail d'une réservation dont l'identifiant (id) est passé en paramètre
  detailCovoiturage(id:number): Observable<ReservationCovoiturageDetail>{
    return this.http.get<ReservationCovoiturageDetail>(urlBackCovoitLocal+'/'+id+'/');
  }
  // Récupération de la liste des réservations en cours d'un utilisateur dont l'identifiant (userId) est passé en paramètre
  listerCovoiturageEncours(userId:number): Observable<ReservationCovoiturageEncours[]>{
    return this.http.get<ReservationCovoiturageEncours[]>(urlBackCovitEncours+userId);
  }
  // Récupération de la liste des réservations historique d'un utilisateur dont l'identifiant (userId) est passé en paramètre
  listerHistoriqueCovoiturage(userId:number): Observable<ReservationCovoiturageHistorique[]>{
    return this.http.get<ReservationCovoiturageHistorique[]>(urlBackHistoriqueEncours+userId);
  }
  // Récupération de la liste des annonces ouvertes 
  listerAnnoncesAll() : Observable<AnnonceCovoiturage[]>{
    return this.http.get<AnnonceCovoiturage[]>(urlBackAnnonceLocal+"/all-ouvert");
  }
  // Récupération de la liste des annonces ouvertes filtrées dont le filtre est passée en paramètre
  listerAnnonces(filtre:Partial<FiltreAnnonceCovoiturage>) : Observable<AnnonceCovoiturage[]>{
    let paramsUrl = "";
    //Si un filtre est disponible il est ajouté en paramètre de l'url
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

    return this.http.get<AnnonceCovoiturage[]>(urlBackAnnonceLocal+"/rechercher"+paramsUrl);
  }
  //Réserver un place d'une annonces 
  reserverCovoiturage(demandereservation: DemandeReservationCovoiturage) : Observable<ReservationCovoiturage>{
    return this.http.post<ReservationCovoiturage>(urlBackCovoitLocal,demandereservation);
  }
  //Annuler une réservation dont l'identifiant (id) est passé en paramètre
  annulerReservation(id:number) : Observable<HttpResponse<string>>{
    return this.http.delete<HttpResponse<string>>(urlBackCovoitLocal+"/"+id);
  }
  // Actualisation de la liste des réservations en cours d'un utilisateur dont l'identifiant (user) est passé en paramètre
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
  // Actualisation de la liste des réservations historique d'un utilisateur dont l'identifiant (user) est passé en paramètre
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
  // Actualisation de la liste des annonces
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
  // Actualisation de la liste des annonces filtrées
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
