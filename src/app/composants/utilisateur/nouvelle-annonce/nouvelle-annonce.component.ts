import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouvelle-annonce',
  templateUrl: './nouvelle-annonce.component.html',
  styleUrls: ['./nouvelle-annonce.component.scss']
})
export class NouvelleAnnonceComponent implements OnInit {

  titrePage="Publier une annonces";
  libelleBtn = "Retour à la liste";
  lien = "/annonces";
  classBtn = "btn-outline-danger";

  constructor() { }

  ngOnInit(): void {
  }

}
