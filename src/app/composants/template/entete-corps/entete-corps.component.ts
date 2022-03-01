import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entete-corps-component',
  templateUrl: './entete-corps.component.html',
  styleUrls: ['./entete-corps.component.scss']
})
export class EnteteCorpsComponent implements OnInit {

  /**
   *  TEMPLATE  - Corps de la page 
   *  ----------------------------
   *  affichage du composant entete-corps et du coposant contenu-page
   */

  @Input() titrePage="";
  @Input() libelleBtn = "";
  @Input() lien = "";
  @Input() classBtn = "";

  @Input() lienEncours = "";
  @Input() lienHistorique = "";
  @Input() libelleEncours = "";

  constructor() { }

  ngOnInit(): void {
    let test = "";
  }

  action(texte:string){
    alert(texte);
  }

}
