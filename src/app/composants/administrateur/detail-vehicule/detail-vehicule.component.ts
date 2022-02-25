import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie, DetailVehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehiculeService';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.scss']
})
export class DetailVehiculeComponent implements OnInit {

  detail!: DetailVehicule;
  @Input() idVehicule = 0;
  detailVehicule: Partial<DetailVehicule> = {}
  categorie!: Categorie[];
  nameId = "#detail"
  idName = "detail"
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

  annuler(colForm: NgForm){
    colForm.reset();
    this.vehiculeServ.rafraichirListeVehicules();
  }

  valider(colForm: NgForm) {
    this.msgOk = undefined;
    this.msgErreur = undefined;

    this.vehiculeServ.modifierVehicule(this.detailVehicule)
    .subscribe({
      next: () => {
        this.msgOk = "La voiture à bien été crée";
        this.detailVehicule = {}
        colForm.reset();
      },
      error: () => this.msgErreur = "Un problème est survenu"
    });
    this.vehiculeServ.rafraichirListeVehicules();
  }

  show(){
    this.bmodal = !this.bmodal;
  }

}
