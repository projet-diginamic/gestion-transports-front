import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-vehicule',
  templateUrl: './reservations-vehicule.component.html',
  styleUrls: ['./reservations-vehicule.component.scss']
})
export class ReservationsVehiculeComponent implements OnInit {

  /**
   ***********************************************************************************************    
   * 
   *    Composant réservations véhicules 
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la liste des réservations de véhicules de service en cours - historique
   *      - Redirection vers la page de réservation d'un véhicule
   * 
   *      Attribut :
   *        - titre, libelleBtn, lien, classBtn => paramètres du composant titre page
   *        - lienEncours, lienHistorique, libelleEncours => paramètres du composant sous menu
   */

  titre="Vos réservations de véhicule de service";
  libelleBtn = "Réserver un vehicule de service";
  lien = "/reserverVehicule";
  classBtn = "btn-outline-success";

  lienEncours:string = "/reservationsVehicule/enCours";
  lienHistorique:string = "/reservationsVehicule/historique";
  libelleEncours: string = "Réservations";

  constructor() { }

  ngOnInit(): void {
  }

}
