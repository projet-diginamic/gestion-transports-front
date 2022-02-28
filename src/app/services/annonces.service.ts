import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AnnonceCovoiturage, AnnonceCovoiturageDetailDto, AnnonceCovoiturageSimple, CreerAnnonceCovoiturage } from '../models/reservations';

const urlBackAnnonce = "http://localhost:8080/covoiturage/"
const urlBackAnnonceEncours = "http://localhost:8080/covoiturage/orga-ouvert/"
const urlBackAnnoncesHistorique = "http://localhost:8080/covoiturage/orga-archive-annule/"

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  
  private obsAnnoncesEncours = new Subject<AnnonceCovoiturageDetailDto[]>();
  private obsAnnoncesHistorique = new Subject<AnnonceCovoiturageDetailDto[]>();

  constructor(private http:HttpClient) { }

  fluxResaCovoitEncours(): Observable<AnnonceCovoiturageDetailDto[]> {
    return this.obsAnnoncesEncours.asObservable();
  }

  fluxResaCovoitHistorique(): Observable<AnnonceCovoiturageDetailDto[]> {
    return this.obsAnnoncesHistorique.asObservable();
  }

  detailAnnonceCovoiturage(id:number): Observable<AnnonceCovoiturageDetailDto>{
    return this.http.get<AnnonceCovoiturageDetailDto>(urlBackAnnonce+id);
  }

  listerAnnoncesEncours(userId:number): Observable<AnnonceCovoiturageDetailDto[]>{
    return this.http.get<AnnonceCovoiturageDetailDto[]>(urlBackAnnonceEncours+userId);
  }

  listerHistoriqueAnnonces(userId:number): Observable<AnnonceCovoiturageDetailDto[]>{
    return this.http.get<AnnonceCovoiturageDetailDto[]>(urlBackAnnoncesHistorique+userId);
  }

  creerAnnonce(annonce: Partial<CreerAnnonceCovoiturage>) : Observable<AnnonceCovoiturage>{
    return this.http.post<AnnonceCovoiturage>(urlBackAnnonce,annonce);
  }

  ModifierAnnonce(annonce: Partial<AnnonceCovoiturage>) : Observable<AnnonceCovoiturage>{
    return this.http.put<AnnonceCovoiturage>(urlBackAnnonce,annonce);
  }

  annulerAnnonce(id:number) : Observable<HttpResponse<string>>{
    return this.http.delete<HttpResponse<string>>(urlBackAnnonce+id);
  }

  actualiserReservationEncours(user:number){

    this.listerAnnoncesEncours(user).subscribe({
      next: liste=>{
        console.log(liste);
        
        this.obsAnnoncesEncours.next(liste);
      },
      error: (err)=>{
        console.log(err);
        this.obsAnnoncesEncours.next([]);
      }
    }) 

  }

  actualiserHistorique(user:number){

    this.listerHistoriqueAnnonces(user).subscribe({
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
