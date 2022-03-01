import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  /**
   ***********************************************************************************************    
   * 
   *    Composant Anonces
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la liste des annonces en cours - historique
   *      - Redirection vers la fiche de création d'une annonce
   * 
   *      Attribut :
   *        - titre, libelleBtn, lien, classBtn => paramètres du composant titre page
   *        - lienEncours, lienHistorique, libelleEncours => paramètres du composant sous menu
   */

  titre="Vos annonces";
  libelleBtn = "Créer une nouvelle annonce";
  lien = "/nouvelleAnnonce";
  classBtn = "btn-outline-success";

  lienEncours = "/annonces/enCours";
  lienHistorique = "/annonces/historique";
  libelleEncours = "Annonces";

  constructor() { }

  ngOnInit(): void {
  }

}
