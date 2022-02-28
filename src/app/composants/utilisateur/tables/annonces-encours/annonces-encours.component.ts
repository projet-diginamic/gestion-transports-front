import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DT_OPTS, USER_ENCOURS_ID } from 'src/app/app.component';
import { AnnonceCovoiturage, AnnonceCovoiturageDetailDto, AnnonceCovoiturageSimple, ReservationCovoiturageDetail } from 'src/app/models/reservations';
import { Utilisateur, UtilisateurDto } from 'src/app/models/utilisateur';
import { AnnoncesService } from 'src/app/services/annonces.service';

@Component({
  selector: 'app-annonces-encours',
  templateUrl: './annonces-encours.component.html',
  styleUrls: ['./annonces-encours.component.scss']
})
export class AnnoncesEncoursComponent implements OnInit {

  dtOptions :DataTables.Settings = DT_OPTS;
  annonces!: Observable<AnnonceCovoiturageDetailDto[]>;
  detailCovoiturage:AnnonceCovoiturageDetailDto = {
    id:0,
    dateHeureDepart:new Date, 
    adresseDepart: {id:0, adresse: { numeroRue: '', rue: '', ville: ''}},
    adresseArrivee: {id:0, adresse: { numeroRue: '', rue: '', ville: ''}},  
    passagers: [{id:0, nom:'', prenom:'',email:'',password:'',isAdmin:false}],
    organisateur: {id:0, nom:'', prenom:'',email:'',password:'',isAdmin:false},
    vehicule: { id: 0, immatriculation: '', marque: '', modele: ''  },
    nbPlaces: 0,
    nbResas: 0,
    dateDepart: '',
    heureDepart: ''
  }
  
  constructor(private annoncesSrv: AnnoncesService, private router: Router) { }

  ngOnInit(): void {
    this.annonces = this.annoncesSrv.fluxResaCovoitEncours();
    this.annoncesSrv.actualiserReservationEncours(USER_ENCOURS_ID);
  }

  detailReservation(idReservation:number, passagers:Utilisateur[]) : void{
    

    this.annoncesSrv.detailAnnonceCovoiturage(idReservation).subscribe({
      next: col=>{
        console.log(col);
        this.detailCovoiturage = col;
        this.detailCovoiturage.passagers = passagers;
        this.detailCovoiturage.dateDepart = col.dateHeureDepart.toString().split('T')[0]
        this.detailCovoiturage.heureDepart = col.dateHeureDepart.toString().split('T')[1]
      },
      error: (err)=>{
        console.log(err);
        
        alert('Une erreur est survenue lors de la récupération du détail de l\'annonce...');
      }
    })

  }

  modifierReservation():void{
    let nouvelleAnnonce : AnnonceCovoiturage = {
      id:this.detailCovoiturage.id,
      dateHeureDepart: new Date(this.detailCovoiturage.dateDepart+"T"+this.detailCovoiturage.heureDepart),
      organisateur: this.detailCovoiturage.organisateur,
      passagers: this.detailCovoiturage.passagers,
      adresseDepart: this.detailCovoiturage.adresseDepart,
      adresseArrivee: this.detailCovoiturage.adresseArrivee,
      vehicule: this.detailCovoiturage.vehicule,
      nbPlaces: this.detailCovoiturage.nbPlaces,
      nbResas: this.detailCovoiturage.nbResas,
      statut: "OUVERT"
    }
    console.log(nouvelleAnnonce);
    
    this.annoncesSrv.ModifierAnnonce(nouvelleAnnonce).subscribe({
      next: col=>{
     
        alert('modification effectuée');
        
      },
      error: (err)=>{
        console.log(err);
        
        alert('Une erreur est survenue lors de l\'annulation de l\'annonce...');
      }
    })
  }

  annulerReservation(idReservation:number):void{
    this.annoncesSrv.annulerAnnonce(idReservation).subscribe({
      next: col=>{
        console.log(col);
        
        this.annoncesSrv.actualiserReservationEncours(USER_ENCOURS_ID)
      },
      error: (err)=>{
        console.log(err);
        
        alert('Une erreur est survenue lors de l\'annulation de l\'annonce...');
      }
    });
  }

}
