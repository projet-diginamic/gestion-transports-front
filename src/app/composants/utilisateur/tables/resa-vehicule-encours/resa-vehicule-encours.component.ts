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

  dtOptions :DataTables.Settings = DT_OPTS;
  resaVehicule!: Observable<ReservationVehicule[]>;
  
  constructor(private resaVehiculeSrv: ReservationVehiculeService) { }

  ngOnInit(): void {
    this.resaVehicule = this.resaVehiculeSrv.fluxResaEncours();
    this.resaVehiculeSrv.actualiserReservationEncours(USER_ENCOURS_ID);
  }

  detailReservation(idReservation:number):void{

  }

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
