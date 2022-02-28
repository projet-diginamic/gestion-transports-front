import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { USER_ENCOURS_ID } from 'src/app/app.component';
import { CreerAnnonceCovoiturage, FormAnnonceCovoiturage } from 'src/app/models/reservations';
import { AnnoncesService } from 'src/app/services/annonces.service';

@Component({
  selector: 'app-nouvelle-annonce',
  templateUrl: './nouvelle-annonce.component.html',
  styleUrls: ['./nouvelle-annonce.component.scss']
})
export class NouvelleAnnonceComponent implements OnInit {
  
  titrePage="Publier une annonce";
  libelleBtn = "Retour à la liste";
  lien = "/annonces";
  classBtn = "btn-outline-danger";
 
  maintenant: string = new Date(Date.now() + ( 3600 * 1000 * 24)).toISOString().split('T')[0];

  annonce: Partial<FormAnnonceCovoiturage> = {};

  constructor(private annoncesSrv:AnnoncesService, private router: Router) { 
  }

  ngOnInit(): void {
    
  }

  valider(forms:NgForm){
    if(forms.invalid){
      alert("error !")
    }else{
      let annonce: CreerAnnonceCovoiturage = this.mapperCreerAnnonceCovoiturage(forms.form.value)
      this.annoncesSrv.creerAnnonce(annonce).subscribe({
        next: col=>{
          this.router.navigate(['/annonces'])
        },
        error: (err)=>{
          console.log(err);
          alert('Une erreur est survenue lors de l\'enregistrement de l\'annonce...');
        }
      })
    }
  }

  mapperCreerAnnonceCovoiturage(val:any) : CreerAnnonceCovoiturage{
    return {
      dateHeureDepart: new Date(val.date+"T"+val.heure+":00"),
      adresseDepart: {
        id:0,
        adresse: {
          numeroRue: "",
          rue: "",
          ville: val.adresseDepart
        }
      },
      adresseArrivee: {
        id: 0,
        adresse: {
          numeroRue: "",
          rue: "",
          ville: val.adresseArrivee
        }
      },
      vehicule: {
        immatriculation: val.immatriculation,
        marque: val.marque,
        modele: val.modele
      },
      organisateur: USER_ENCOURS_ID,
      nbPlaces: val.nbPlaces
    }
  }

}
