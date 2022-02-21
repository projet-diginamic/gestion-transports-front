import { Component, OnInit } from '@angular/core';
import { DT_OPTS } from 'src/app/app.component';

@Component({
  selector: 'app-resa-vehicule-encours',
  templateUrl: './resa-vehicule-encours.component.html',
  styleUrls: ['./resa-vehicule-encours.component.scss']
})
export class ResaVehiculeEncoursComponent implements OnInit {

  dtOptions :DataTables.Settings = DT_OPTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
