import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie, DetailVehicule, ModifVehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehiculeService';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.scss']
})
export class DetailVehiculeComponent implements OnInit {

  detail!: DetailVehicule;
  @Input() idVehicule = 0;
  detailVehicule: Partial<DetailVehicule> = {};
  modifVehicule: Partial<ModifVehicule> = {};
  categorie!: Categorie[];
  nameId = "#detail";
  idName = "detail";
  bmodal = false;

  msgErreur?: string;
  msgOk?: string;

  constructor(private vehiculeServ: VehiculeService) { }

  ngOnInit(): void {

    //charger liste deroulante
    this.vehiculeServ.listerCategorie()
    .subscribe(data => this.categorie = data); 
    
    //charger le vehicule
    this.vehiculeServ.detailVehiculeService(this.idVehicule).subscribe(dataDetail => 
      {this.detail = dataDetail;
      this.nameId="#detailModal"+this.detail.id;
      this.idName="detailModal"+this.detail.id;
    });


  }

  valider() {
    this.msgOk = undefined;
    this.msgErreur = undefined;
    this.detailVehicule = this.detail;

    this.modifVehicule.id = this.detailVehicule.id;
    this.modifVehicule.categorie = this.detailVehicule.categorie?.id;
    this.modifVehicule.immatriculation = this.detailVehicule.immatriculation;
    this.modifVehicule.marque = this.detailVehicule.marque;
    this.modifVehicule.modele = this.detailVehicule.modele;
    this.modifVehicule.nbPlaces = this.detailVehicule.nbPlaces;
    this.modifVehicule.photo = this.detailVehicule.photo;
    this.modifVehicule.statut = this.detailVehicule.statut;

    this.vehiculeServ.modifierVehicule(this.modifVehicule)

    .subscribe({
      next: () => {
        this.msgOk = "La voiture à bien été crée";
      },
      error: () => {
        this.msgErreur = "Un problème est survenu";
      }
    });
    this.vehiculeServ.rafraichirListeVehicules();
  }

  show(){
    this.bmodal = !this.bmodal;
  }

}
