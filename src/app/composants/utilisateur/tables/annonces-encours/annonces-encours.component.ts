import { Component, OnInit } from '@angular/core';
import { DT_OPTS } from 'src/app/app.component';

@Component({
  selector: 'app-annonces-encours',
  templateUrl: './annonces-encours.component.html',
  styleUrls: ['./annonces-encours.component.scss']
})
export class AnnoncesEncoursComponent implements OnInit {

  dtOptions :DataTables.Settings = DT_OPTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
