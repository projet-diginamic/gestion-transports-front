import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_ACTIF, USER_ENCOURS_ID } from 'src/app/app.component';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-navigation-generale-component',
  templateUrl: './navigation-generale.component.html',
  styleUrls: ['./navigation-generale.component.scss']
})
export class NavigationGeneraleComponent implements OnInit {

  /**
   ***********************************************************************************************    
   * 
   *    Composant navigation générale
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la navigation générale de l'application
   *      - Gestion de l'utilisateur en cours
   * 
   *      Attribut :
   *        - utilisateurActif:Utilisateur => Informations de l'utilisateur récupérées en base
   * 
   */


  utilisateurActif: Utilisateur = {
    id: USER_ENCOURS_ID,
    nom: "",
    prenom: "",
    email: "",
    isAdmin : true,
    password: ""
  };
  classActive = ""
  constructor(private utilisateurSrv: UtilisateurService, private router: Router) {
    //Récupération de l'utilisateur
    utilisateurSrv.getUser(USER_ENCOURS_ID).subscribe({
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

    router.events.subscribe((val) => {
      this.gereClassActive()
    });
   
  }

  ngOnInit(): void {
    this.gereClassActive()
  }

  gereClassActive(){
    (window.location.href.includes('reservationsCoviturage') || window.location.href.includes('reservationsVehicule')) ? this.classActive = "active" : this.classActive = ""
  }

}


