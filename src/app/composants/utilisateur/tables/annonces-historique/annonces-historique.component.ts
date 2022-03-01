import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DT_OPTS, USER_ENCOURS_ID } from 'src/app/app.component';
import { AnnonceCovoiturageDetailDto, AnnonceCovoiturageSimple } from 'src/app/models/reservations';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AnnoncesService } from 'src/app/services/annonces.service';

@Component({
  selector: 'app-annonces-historique',
  templateUrl: './annonces-historique.component.html',
  styleUrls: ['./annonces-historique.component.scss']
})
export class AnnoncesHistoriqueComponent implements OnInit {
   /**
   ***********************************************************************************************    
   * 
   *    Composant annonces en cours 
   * 
   *********************************************************************************************** 
   *    Fonction du composant :
   *      - Gestion de la liste des annonces historiques
   *  
   * 
   *      Attribut :
   *        - dtOptions => paramètres de la datatable
   *        - annonces => liste des annonces
   *        - detailCovoiturage => détail de l'annonce
   *        
   */

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
  
  constructor(private annoncesSrv: AnnoncesService) { }

  ngOnInit(): void {
    this.annonces = this.annoncesSrv.fluxResaCovoitHistorique();
    this.annoncesSrv.actualiserHistorique(USER_ENCOURS_ID);
  }
  //Affichage du détail de l'annonce
  detailReservation(idReservation:number,passagers:Utilisateur[]) : void{
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
}
