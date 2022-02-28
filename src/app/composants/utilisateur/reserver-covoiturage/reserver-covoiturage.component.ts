import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.scss']
})
export class ReserverCovoiturageComponent implements OnInit {

  titrePage="Réserver un covoiturage";
  libelleBtn = "Retour à la liste";
  lien = "/reservationsCoviturage";
  classBtn = "btn-outline-danger";

  constructor() { }

  ngOnInit(): void {
  }

}
