import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-covoiturage',
  templateUrl: './reservations-covoiturage.component.html',
  styleUrls: ['./reservations-covoiturage.component.scss']
})
export class ReservationsCovoiturageComponent implements OnInit {

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
