import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DT_OPTS, USER_ENCOURS_ID } from 'src/app/app.component';
import { Adresse, AdresseCreation } from 'src/app/models/adresse';
import { AnnonceCovoiturage, FiltreAnnonceCovoiturage, ParamsTitrePageComposant } from 'src/app/models/reservations';
import { ReservationCovoiturageService } from 'src/app/services/reservation-covoiturage.service';

@Component({
  selector: 'app-reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.scss']
})
export class ReserverCovoiturageComponent implements OnInit {

  /**
   ***********************************************************************************************    
   * 
   *    Composant réservations véhicules 
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la réservation d'un covoiturage
   *      - Gestion de la liste des annonces de covoiturage actif
   * 
   *      Attribut :
   *        - titre, libelleBtn, lien, classBtn => paramètres du composant titre page
   *        - lienEncours, lienHistorique, libelleEncours => paramètres du composant sous menu
   *        - rechercheAdresseDepart, rechercheAdresseDestination, rechercheDateDepart => champs de saisie des filtres
   */

  titrePage="Réserver un covoiturage";
  libelleBtn = "Retour à la liste";
  lien = "/reservationsCoviturage";
  classBtn = "btn-outline-danger";

  rechercheAdresseDepart: FormControl = new FormControl('');
  rechercheAdresseDestination: FormControl = new FormControl('');
  rechercheDateDepart: FormControl = new FormControl('');
  
  dtOptions :DataTables.Settings = DT_OPTS;
  annonces!: Observable<AnnonceCovoiturage[]>;
  filtre:Partial<FiltreAnnonceCovoiturage> = {};

  constructor(private resaCovoitSrv: ReservationCovoiturageService) {
    this.annonces = this.resaCovoitSrv.fluxAnnonces();
    this.resaCovoitSrv.actualiserAnnonces();
   }
  
  // Abonnement à l'évènement valueChanges des champs de saisie
  ngOnInit(): void {
    this.rechercheAdresseDepart.valueChanges.subscribe(saisie => {
      (saisie) ? saisie = {id: 0, numeroRue: "", rue: "", ville: saisie } : saisie = undefined;
      this.filtre.adresseDepart = saisie;
      this.resaCovoitSrv.actualiserAnnoncesFiltre(this.filtre);
    });

    this.rechercheAdresseDestination.valueChanges.subscribe(saisie => {
      (saisie) ? saisie = {id: 0, numeroRue: "", rue: "", ville: saisie } : saisie = undefined;
      this.filtre.adresseDestination = saisie;
      this.resaCovoitSrv.actualiserAnnoncesFiltre(this.filtre);
    });

    this.rechercheDateDepart.valueChanges.subscribe(saisie => {
      if(!saisie) saisie = undefined;
      this.filtre.dateHeureDepart = saisie
      this.resaCovoitSrv.actualiserAnnoncesFiltre(this.filtre);
    });
  }

  reserverCovoiturage(id:number){
    this.resaCovoitSrv.reserverCovoiturage({idCollaborateur: USER_ENCOURS_ID, idCovoiturage: id}).subscribe(
      {
        next: reponse=>{
          console.log(reponse);
          if(this.filtre.adresseDepart?.ville || this.filtre.adresseDestination?.ville || this.filtre.dateHeureDepart){
            this.resaCovoitSrv.actualiserAnnoncesFiltre(this.filtre);
          }else{
            this.resaCovoitSrv.actualiserAnnonces();
          }
          
        },
        error: (err)=>{
          console.log(err);
          alert('Une erreur est survenue lors de la reservation... \n'+err.error);
        }
      }
    )
  }

}
