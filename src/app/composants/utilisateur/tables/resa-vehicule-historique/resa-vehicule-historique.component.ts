import { Component, OnInit } from '@angular/core';
import { DT_OPTS } from 'src/app/app.component';

@Component({
  selector: 'app-resa-vehicule-historique',
  templateUrl: './resa-vehicule-historique.component.html',
  styleUrls: ['./resa-vehicule-historique.component.scss']
})
export class ResaVehiculeHistoriqueComponent implements OnInit {

  dtOptions :DataTables.Settings = DT_OPTS;

  constructor() { }

  ngOnInit(): void {
  }

}
