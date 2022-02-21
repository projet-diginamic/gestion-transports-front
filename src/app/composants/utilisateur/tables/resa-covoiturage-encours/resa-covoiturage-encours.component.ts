import { Component, OnInit } from '@angular/core';
import { DT_OPTS } from 'src/app/app.component';

@Component({
  selector: 'app-resa-covoiturage-encours',
  templateUrl: './resa-covoiturage-encours.component.html',
  styleUrls: ['./resa-covoiturage-encours.component.scss']
})
export class ResaCovoiturageEncoursComponent implements OnInit {

  dtOptions :DataTables.Settings = DT_OPTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
