import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-covoiturage',
  templateUrl: './reservations-covoiturage.component.html',
  styleUrls: ['./reservations-covoiturage.component.scss']
})
export class ReservationsCovoiturageComponent implements OnInit {

  /**
   ***********************************************************************************************    
   * 
   *    Composant réservations covoiturage
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la liste des réservations de covoiturage en cours - historique
   *      - Redirection vers la page de réservation d'un covoiturage
   * 
   *      Attribut :
   *        - titre, libelleBtn, lien, classBtn => paramètres du composant titre page
   *        - lienEncours, lienHistorique, libelleEncours => paramètres du composant sous menu
   */

  titre="Vos réservations de covoiturage";
  libelleBtn = "Réserver un covoiturage";
  lien = "/reserverCovoiturage";
  classBtn = "btn-outline-success";

  lienEncours = "/reservationsCoviturage/enCours";
  lienHistorique = "/reservationsCoviturage/historique";
  libelleEncours = "Réservations";

  constructor() { }

  ngOnInit(): void {
  }

}
