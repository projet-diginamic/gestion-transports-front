import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiGouvCommune } from '../models/reservations';

@Injectable({
  providedIn: 'root'
})
export class ApiGouvCommunesService {


  /**
 *        Service de récupération des communes de france via l'API geo.api.gouv.fr
 *        (fonctionnelle mais non finalisé)
 *        -------------------------------
 *        Mise à disposition d'un Subject listant les communes de france
 */

  private obsCommunes = new Subject<ApiGouvCommune[]>();
  
  constructor(private http:HttpClient) { }

  //Abonnement au flux liste des communes
  fluxCommunes(): Observable<ApiGouvCommune[]> {
    return this.obsCommunes.asObservable();
  }
  //Récupération de la liste des communes
  listerCommunes(): Observable<ApiGouvCommune[]>{
    return this.http.get<ApiGouvCommune[]>('https://geo.api.gouv.fr/communes');
  }
  //Actualisation du flux
  actualiser(){

    this.listerCommunes().subscribe({
      next: liste=>{
        this.obsCommunes.next(liste);
      },
      error: (err)=>{
        console.log(err);
        this.obsCommunes.next([]);
      }
    }) 

  }
}
