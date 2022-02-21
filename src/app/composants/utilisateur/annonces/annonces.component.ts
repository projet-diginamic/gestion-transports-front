import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  titre="Vos annonces";
  libelleBtn = "Créer une nouvelle annonces";
  lien = "/nouvelleAnnonce";
  classBtn = "btn-outline-success";

  lienEncours:string = "/annonces/enCours";
  lienHistorique:string = "/annonces/historique";
  libelleEncours: string = "Annonces";

  constructor() { }

  ngOnInit(): void {
  }

}
