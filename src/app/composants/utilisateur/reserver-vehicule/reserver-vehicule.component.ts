import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserver-vehicule',
  templateUrl: './reserver-vehicule.component.html',
  styleUrls: ['./reserver-vehicule.component.scss']
})
export class ReserverVehiculeComponent implements OnInit {

  titrePage="Réserver un véhicule";
  libelleBtn = "Retour à la liste";
  lien = "/reservationsVehicule";
  classBtn = "btn-outline-danger";

  constructor() { }

  ngOnInit(): void {
  }

}
