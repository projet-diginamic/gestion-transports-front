import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { USER_ENCOURS_ID } from 'src/app/app.component';
import { CreerReservationVehicule, FormReservationVehicule, VehiculeService } from 'src/app/models/reservations';
import { ReservationVehiculeService } from 'src/app/services/reservation-vehicule.service';

@Component({
  selector: 'app-reserver-vehicule',
  templateUrl: './reserver-vehicule.component.html',
  styleUrls: ['./reserver-vehicule.component.scss']
})
export class ReserverVehiculeComponent implements OnInit {

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
   *        
   */

  titrePage="Réserver un véhicule";
  libelleBtn = "Retour à la liste";
  lien = "/reservationsVehicule";
  classBtn = "btn-outline-danger";

  vehiculeSelectionne = "";
  dateMin: string = new Date(Date.now() + ( 3600 * 1000 * 24)).toISOString().split('T')[0];
  dateMinMsg : string = new Date(Date.now() + ( 3600 * 1000 * 24)).toLocaleDateString()
  vehicules!: VehiculeService[];
  reservation: Partial<FormReservationVehicule> = {};
  constructor(private resaVehiculeSrv: ReservationVehiculeService, private router: Router) { 
    this.reservation.demandeChauffeur = false;
    this.resaVehiculeSrv.listerVehiculesServices().subscribe(liste=>{
      this.vehicules = liste;      
    })
  }

  ngOnInit(): void {
    
  }

  selectionVehicule(id:string){
    this.vehiculeSelectionne = id;
    this.reservation.vehicule = parseInt(id);
  }


  valider(forms:NgForm){

    if(forms.invalid){
      alert("error !")
    }else{
      let demandeResa = this.mapperCreerReservationVehicule(forms.form.value);
      console.log(demandeResa);
      
      this.resaVehiculeSrv.reserverVehiculeService(demandeResa).subscribe({
        next: col=>{
          this.router.navigate(['/reservationsVehicule'])
        },
        error: (err)=>{
          console.log(err);
          alert('Une erreur est survenue lors de l\'enregistrement de la réservation de véhicule...');
        }
      })
    }
  }

  mapperCreerReservationVehicule(val:any):CreerReservationVehicule{
    return {
      vehicule: val.vehicule,
      chauffeur:0,
      dateHeureDepart: new Date(val.dateDepart+"T"+val.heureDepart),
      dateHeureRetour: new Date(val.dateRetour+"T"+val.heureRetour),
      passager: USER_ENCOURS_ID,
      demandeChauffeur: val.demandeChauffeur
    }
  }
}
