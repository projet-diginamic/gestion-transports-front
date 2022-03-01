import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DT_OPTS, USER_ENCOURS_ID } from 'src/app/app.component';
import { ReservationVehicule } from 'src/app/models/reservations';
import { ReservationVehiculeService } from 'src/app/services/reservation-vehicule.service';

@Component({
  selector: 'app-resa-vehicule-historique',
  templateUrl: './resa-vehicule-historique.component.html',
  styleUrls: ['./resa-vehicule-historique.component.scss']
})
export class ResaVehiculeHistoriqueComponent implements OnInit {

  /**
   ***********************************************************************************************    
   * 
   *    Composant resa vehicule historique
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la liste des réservations de véhicules historiques
   *  
   * 
   *      Attribut :
   *        - dtOptions => paramètres de la datatable
   *        - resaVehicule => liste des réservations
   *        
   */

  dtOptions :DataTables.Settings = DT_OPTS;
  resaVehicule!: Observable<ReservationVehicule[]>;
  
  constructor(private resaVehiculeSrv: ReservationVehiculeService) { }
  
  //Initialisation de la liste des réservations
  ngOnInit(): void {
    this.resaVehicule = this.resaVehiculeSrv.fluxResaHistorique();
    this.resaVehiculeSrv.actualiserHistorique(USER_ENCOURS_ID);
  }
  
  //Affichage du détail de la réservation
  detailReservation(idReservation:number):void{

  }

}
