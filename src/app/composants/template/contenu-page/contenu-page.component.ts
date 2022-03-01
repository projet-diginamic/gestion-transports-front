import { Component, OnInit } from '@angular/core';
import { DT_OPTS } from 'src/app/app.component';

@Component({
  selector: 'app-contenu-page-component',
  templateUrl: './contenu-page.component.html',
  styleUrls: ['./contenu-page.component.scss']
})
export class ContenuPageComponent implements OnInit {
  /**
   *  TEMPLATE : Composant d'exemple qui contient une datatable
   */
  dtOptions :DataTables.Settings = DT_OPTS;

  constructor() { }

  ngOnInit(): void {
  }

}
