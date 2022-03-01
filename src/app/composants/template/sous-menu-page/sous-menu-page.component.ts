import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sous-menu-page-component',
  templateUrl: './sous-menu-page.component.html',
  styleUrls: ['./sous-menu-page.component.scss']
})
export class SousMenuPageComponent implements OnInit {

   /**
   ***********************************************************************************************    
   * 
   *    Composant sous menu
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion du sous-menu des pages de l'application
   * 
   *      Input :
   *        - lienEncours:string => url du composant contenant la liste des éléments en cours
   *        - lienHistorique:string => url du composant contenant la liste des éléments historiques
   *        - libelleEncours:string => libellé des éléments pour le sous-menu en cours (ex: Réservations en cours, Annonces en cours)
   * 
   */

  @Input() lienEncours:string = "";
  @Input() lienHistorique:string = "";
  @Input() libelleEncours: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
