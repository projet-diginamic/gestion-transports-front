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

  dtOptions :DataTables.Settings = DT_OPTS;
  resaVehicule!: Observable<ReservationVehicule[]>;
  
  constructor(private resaVehiculeSrv: ReservationVehiculeService) { }

  ngOnInit(): void {
    this.resaVehicule = this.resaVehiculeSrv.fluxResaHistorique();
    this.resaVehiculeSrv.actualiserHistorique(USER_ENCOURS_ID);
  }

  detailReservation(idReservation:number):void{

  }

}
