import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGouvCommune } from 'src/app/models/reservations';
import { ApiGouvCommunesService } from 'src/app/services/api-gouv-communes.service';

@Component({
  selector: 'app-liste-communes-france',
  templateUrl: './liste-communes-france.component.html',
  styleUrls: ['./liste-communes-france.component.scss']
})
export class ListeCommunesFranceComponent implements OnInit {

  /**
   ***********************************************************************************************    
   * 
   *    Composant liste communes france
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la liste des communes de france
   *  
   * 
   *      Attribut :
   *        - communes => liste des communes
   *        
   */

  communes!:Observable<ApiGouvCommune[]>;

  constructor(private apiGouvCommunes:ApiGouvCommunesService) { }

  ngOnInit(): void {
    this.communes = this.apiGouvCommunes.fluxCommunes();
    this.apiGouvCommunes.actualiser();
  }

}
