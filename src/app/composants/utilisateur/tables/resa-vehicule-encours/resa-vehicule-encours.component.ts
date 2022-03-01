import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DT_OPTS, USER_ENCOURS_ID } from 'src/app/app.component';
import { ReservationVehicule } from 'src/app/models/reservations';
import { ReservationVehiculeService } from 'src/app/services/reservation-vehicule.service';

@Component({
  selector: 'app-resa-vehicule-encours',
  templateUrl: './resa-vehicule-encours.component.html',
  styleUrls: ['./resa-vehicule-encours.component.scss']
})
export class ResaVehiculeEncoursComponent implements OnInit {

  /**
   ***********************************************************************************************    
   * 
   *    Composant resa vehicule en cours
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la liste des réservations de véhicules en cours
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
    this.resaVehicule = this.resaVehiculeSrv.fluxResaEncours();
    this.resaVehiculeSrv.actualiserReservationEncours(USER_ENCOURS_ID);
  }
  //Affichage du détail de la réservation
  detailReservation(idReservation:number):void{

  }
  //Annulation de la réservation
  annulerReservation(idReservation:number):void{
    this.resaVehiculeSrv.annulerReservation(idReservation).subscribe({
      next: col=>{
        console.log(col);
        this.resaVehiculeSrv.actualiserReservationEncours(USER_ENCOURS_ID);
      },
      error: (err)=>{
        console.log(err);
        alert('Une erreur est survenue lors de l\'annulation de l\'annonce...');
      }
    });
  }

}
