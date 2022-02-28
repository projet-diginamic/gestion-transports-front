import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_ENCOURS_ID } from '../app.component';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  constructor(private http:HttpClient) { }

  getUser(): Observable<Utilisateur>{
    return this.http.get<Utilisateur>("http://localhost:8080/collaborateur/"+USER_ENCOURS_ID);
  }


}
