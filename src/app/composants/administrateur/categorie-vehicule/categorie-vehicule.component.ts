import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/vehicule';

@Component({
  selector: 'app-categorie-vehicule',
  templateUrl: './categorie-vehicule.component.html',
  styleUrls: ['./categorie-vehicule.component.scss']
})
export class CategorieVehiculeComponent implements OnInit {

  @Input() colCategorie!: Categorie;
  
  constructor() { }

  ngOnInit(): void {
  }

}
