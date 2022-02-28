import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-vehicule',
  templateUrl: './reservations-vehicule.component.html',
  styleUrls: ['./reservations-vehicule.component.scss']
})
export class ReservationsVehiculeComponent implements OnInit {

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
