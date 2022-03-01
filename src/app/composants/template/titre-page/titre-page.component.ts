import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-titre-page-component',
  templateUrl: './titre-page.component.html',
  styleUrls: ['./titre-page.component.scss']
})
export class TitrePageComponent implements OnInit {
  
  /**
   ***********************************************************************************************    
   * 
   *    Composant titre page
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de l'affichage du titre
   *      - Gestion du bouton de redirection associé 
   * 
   *      Input :
   *        - titrePage:string => titre de la page
   *        - classBtn:string => class bootstrap que l'on souhaite associer au bouton
   *        - libelleBtn:string => Libellé du bouton
   *        - lien:string => url de destination suite au clique sur le bouton
   * 
   */

  @Input() titrePage:string = "Titre de la page";
  @Input() libelleBtn:string = "Libellé du bouton";
  @Input() lien:string = "";
  @Input() classBtn:string = "btn-outline-success";

  constructor() { }

  ngOnInit(): void {
  }

}
