import { Component, OnInit } from '@angular/core';
import { DT_OPTS } from 'src/app/app.component';

@Component({
  selector: 'app-resa-covoiturage-historique',
  templateUrl: './resa-covoiturage-historique.component.html',
  styleUrls: ['./resa-covoiturage-historique.component.scss']
})
export class ResaCovoiturageHistoriqueComponent implements OnInit {

  dtOptions :DataTables.Settings = DT_OPTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
