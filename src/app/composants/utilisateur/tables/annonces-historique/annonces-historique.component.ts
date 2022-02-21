import { Component, OnInit } from '@angular/core';
import { DT_OPTS } from 'src/app/app.component';

@Component({
  selector: 'app-annonces-historique',
  templateUrl: './annonces-historique.component.html',
  styleUrls: ['./annonces-historique.component.scss']
})
export class AnnoncesHistoriqueComponent implements OnInit {
  
  dtOptions :DataTables.Settings = DT_OPTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
