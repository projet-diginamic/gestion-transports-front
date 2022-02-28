import { Component, OnInit } from '@angular/core';
import { USER_ACTIF, USER_ENCOURS_ID } from 'src/app/app.component';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-navigation-generale-component',
  templateUrl: './navigation-generale.component.html',
  styleUrls: ['./navigation-generale.component.scss']
})
export class NavigationGeneraleComponent implements OnInit {

  utilisateurActif: Utilisateur = {
    id: USER_ENCOURS_ID,
    nom: "",
    prenom: "",
    email: "",
    isAdmin : true,
    password: ""
  };

  constructor(private utilisateurSrv: UtilisateurService) {

    utilisateurSrv.getUser().subscribe({
      next: user=>{
        this.utilisateurActif.id = user.id
        this.utilisateurActif.nom = user.nom
        this.utilisateurActif.prenom = user.prenom
        this.utilisateurActif.email = user.email
        this.utilisateurActif.isAdmin = user.isAdmin
      },
      error: (err)=>{
        console.log(err);
        this.utilisateurActif.nom = "ANTOINETTE"
        this.utilisateurActif.prenom = "Fertus"
      }
    })
  
  }

  ngOnInit(): void {
  }

}
