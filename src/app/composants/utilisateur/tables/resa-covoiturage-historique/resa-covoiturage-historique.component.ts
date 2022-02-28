import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DT_OPTS, USER_ENCOURS_ID } from 'src/app/app.component';
import { ReservationCovoiturageDetail, ReservationCovoiturageHistorique } from 'src/app/models/reservations';
import { ReservationCovoiturageService } from 'src/app/services/reservation-covoiturage.service';

@Component({
  selector: 'app-resa-covoiturage-historique',
  templateUrl: './resa-covoiturage-historique.component.html',
  styleUrls: ['./resa-covoiturage-historique.component.scss']
})
export class ResaCovoiturageHistoriqueComponent implements OnInit {

  dtOptions :DataTables.Settings = DT_OPTS;
  
  resaCovoiturage!: Observable<ReservationCovoiturageHistorique[]>;
  detailCovoiturage:ReservationCovoiturageDetail = {
    id:0,
    dateHeureDepart:new Date, 
    dateHeureArrivee: new Date(),
    adresseDepart: {id:0, adresse: { numeroRue: '', rue: '', ville: ''}},
    adresseArrivee: {id:0, adresse: { numeroRue: '', rue: '', ville: ''}},  
    passagers: [{nom:'', prenom:''}],
    dateDepart: '',
    heureDepart: ''
  }
  constructor(private resaCovoiturageSrv: ReservationCovoiturageService) { }

  ngOnInit(): void {
    this.resaCovoiturage = this.resaCovoiturageSrv.fluxResaCovoitHistorique();
    this.resaCovoiturageSrv.actualiserHistorique(USER_ENCOURS_ID);
  }

  detailReservation(idReservation:number) : void{
    this.resaCovoiturageSrv.detailCovoiturage(idReservation).subscribe({
      next: col=>{
        console.log(col);
        this.detailCovoiturage = col;
        this.detailCovoiturage.dateDepart = col.dateHeureDepart.toString().split('T')[0]
        this.detailCovoiturage.heureDepart = col.dateHeureDepart.toString().split('T')[1]
        
      },
      error: (err)=>{
        console.log(err);
        
        alert('Une erreur est survenue lors de la récupération du détail de la réservation...');
      }
    })
  }

}
