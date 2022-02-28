import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiGouvCommune } from '../models/reservations';

@Injectable({
  providedIn: 'root'
})
export class ApiGouvCommunesService {

  private obsCommunes = new Subject<ApiGouvCommune[]>();
  
  constructor(private http:HttpClient) { }

  fluxCommunes(): Observable<ApiGouvCommune[]> {
    return this.obsCommunes.asObservable();
  }

  listerCommunes(): Observable<ApiGouvCommune[]>{
    return this.http.get<ApiGouvCommune[]>('https://geo.api.gouv.fr/communes');
  }

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
