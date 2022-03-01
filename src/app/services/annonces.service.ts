import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { baseUrlBack } from '../app.component';
import { AnnonceCovoiturage, AnnonceCovoiturageDetailDto, AnnonceCovoiturageSimple, CreerAnnonceCovoiturage } from '../models/reservations';

const urlBackAnnonce              = baseUrlBack+"covoiturage/"
const urlBackAnnonceEncours       = baseUrlBack+"covoiturage/orga-ouvert/"
const urlBackAnnoncesHistorique   = baseUrlBack+"covoiturage/orga-archive-annule/"

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  
/**
 *        Service de gestion des annonces 
 *        -------------------------------
 *        Mise à disposition de Subject listant les annonces de covoiturage en cours et historique d'un utilisateur
 */

  private obsAnnoncesEncours = new Subject<AnnonceCovoiturageDetailDto[]>();
  private obsAnnoncesHistorique = new Subject<AnnonceCovoiturageDetailDto[]>();

  constructor(private http:HttpClient) { }

  // Abonnement au flux des annonces de covoiturage en cours
  fluxResaCovoitEncours(): Observable<AnnonceCovoiturageDetailDto[]> {
    return this.obsAnnoncesEncours.asObservable();
  }

  // Abonnement au flux des annonces de covoiturage histotique
  fluxResaCovoitHistorique(): Observable<AnnonceCovoiturageDetailDto[]> {
    return this.obsAnnoncesHistorique.asObservable();
  }

  // Récupération du détail d'une annonce de covoiturage
  detailAnnonceCovoiturage(id:number): Observable<AnnonceCovoiturageDetailDto>{
    return this.http.get<AnnonceCovoiturageDetailDto>(urlBackAnnonce+id);
  }

  // Récupération la liste des annonces de covoiturage en cours d'un utilisateur dont l'identifiant est passé en paramètre
  listerAnnoncesEncours(userId:number): Observable<AnnonceCovoiturageDetailDto[]>{
    return this.http.get<AnnonceCovoiturageDetailDto[]>(urlBackAnnonceEncours+userId);
  }

  // Récupération la liste des annonces de covoiturage historique d'un utilisateur dont l'identifiant est passé en paramètre
  listerHistoriqueAnnonces(userId:number): Observable<AnnonceCovoiturageDetailDto[]>{
    return this.http.get<AnnonceCovoiturageDetailDto[]>(urlBackAnnoncesHistorique+userId);
  }

  // Création d'une annonce de covoiturage passée en paramètre (annonce)
  creerAnnonce(annonce: Partial<CreerAnnonceCovoiturage>) : Observable<AnnonceCovoiturage>{
    return this.http.post<AnnonceCovoiturage>(urlBackAnnonce,annonce);
  }

  // Modification d'une annonce de covoiturage passée en paramètre (annonce)
  ModifierAnnonce(annonce: Partial<AnnonceCovoiturage>) : Observable<AnnonceCovoiturage>{
    return this.http.put<AnnonceCovoiturage>(urlBackAnnonce,annonce);
  }

  // Annulation d'une annonce de covoiturage dont l'identifiant est passé en paramètre
  annulerAnnonce(id:number) : Observable<HttpResponse<string>>{
    return this.http.delete<HttpResponse<string>>(urlBackAnnonce+id);
  }

  // Actualisation de la liste des annonces de covoiturage en cours d'un utilisateur dont l'identifiant (idUser) est passé en paramètre
  actualiserReservationEncours(idUser:number){

    this.listerAnnoncesEncours(idUser).subscribe({
      next: liste=>{
        this.obsAnnoncesEncours.next(liste);
      },
      error: (err)=>{
        console.log(err);
        this.obsAnnoncesEncours.next([]);
      }
    }) 

  }

  // Actualisation de la liste des annonces de covoiturage historique d'un utilisateur dont l'identifiant (idUser) est passé en paramètre
  actualiserHistorique(idUser:number){

    this.listerHistoriqueAnnonces(idUser).subscribe({
      next: liste=>{
        this.obsAnnoncesHistorique.next(liste);
      },
      error: (err)=>{
        console.log(err);
        this.obsAnnoncesHistorique.next([]);
      }
    })
    
  }

}
