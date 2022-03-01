import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DT_OPTS, USER_ENCOURS_ID } from 'src/app/app.component';
import { ReservationCovoiturageDetail, ReservationCovoiturageEncours } from 'src/app/models/reservations';
import { ReservationCovoiturageService } from 'src/app/services/reservation-covoiturage.service';

@Component({
  selector: 'app-resa-covoiturage-encours',
  templateUrl: './resa-covoiturage-encours.component.html',
  styleUrls: ['./resa-covoiturage-encours.component.scss']
})
export class ResaCovoiturageEncoursComponent implements OnInit {
   /**
   ***********************************************************************************************    
   * 
   *    Composant resa covoiturage en cours
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la liste des réservations de covoiturage en cours
   *  
   * 
   *      Attribut :
   *        - dtOptions => paramètres de la datatable
   *        - resaCovoiturage => liste des réservations
   *        - detailCovoiturage => détail de l'annonce
   *        
   */

  dtOptions :DataTables.Settings = DT_OPTS;
  resaCovoiturage!: Observable<ReservationCovoiturageEncours[]>;
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
    this.resaCovoiturage = this.resaCovoiturageSrv.fluxResaCovoitEncours();
    this.resaCovoiturageSrv.actualiserReservationEncours(USER_ENCOURS_ID);
  }
  //affichage du détail d'une réservation
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
  //Annulation d'une réservation
  annulerReservation(idReservation:number):void{
    
    this.resaCovoiturageSrv.annulerReservation(idReservation).subscribe({
      next: col=>{
        console.log(col);
        this.resaCovoiturageSrv.actualiserReservationEncours(USER_ENCOURS_ID);
      },
      error: (err)=>{
        console.log(err);
        alert('Une erreur est survenue lors de l\'annulation de l\'annonce...');
      }
    });
  }

}
