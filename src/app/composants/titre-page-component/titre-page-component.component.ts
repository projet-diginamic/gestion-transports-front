import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-titre-page-component',
  templateUrl: './titre-page-component.component.html',
  styleUrls: ['./titre-page-component.component.scss']
})
export class TitrePageComponentComponent implements OnInit {
  
  /**
   ***********************************************************************************************    
   * 
   *    Composant titre page
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de l'affichage du titre
   *      - Gestion du bouton d'action associé 
   * 
   *      Input :
   *        - titrePage:string => titre de la page
   *        - classBtn:string => class bootstrap que l'on souhaite associer au bouton
   *        - libelleBtn:string => Libellé du bouton
   *        - btnClickReturn:string => message attendu lors de l'évènement click
   * 
   */

  @Input() titrePage:string = "Titre de la page";
  @Input() libelleBtn:string = "Libellé du bouton";
  @Input() btnClickReturn:string = "event";
  @Input() classBtn:string = "btn-outline-success";
  @Output() action:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  executerAction(){
    this.action.emit(this.btnClickReturn);
  }

  ajouterStyleBtn(){
    return this.classBtn;
  }

}
