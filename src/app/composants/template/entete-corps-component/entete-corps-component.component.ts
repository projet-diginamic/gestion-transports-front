import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entete-corps-component',
  templateUrl: './entete-corps-component.component.html',
  styleUrls: ['./entete-corps-component.component.scss']
})
export class EnteteCorpsComponentComponent implements OnInit {

  titre="Vos réservations de covoiturage";

  constructor() { }

  ngOnInit(): void {
  }

  action(texte:string){
    alert(texte);
  }

}
