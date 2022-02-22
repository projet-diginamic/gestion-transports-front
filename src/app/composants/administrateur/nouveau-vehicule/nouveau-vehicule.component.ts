import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie, CreeVehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehiculeService';


@Component({
  selector: 'app-nouveau-vehicule',
  templateUrl: './nouveau-vehicule.component.html',
  styleUrls: ['./nouveau-vehicule.component.scss']
})
export class NouveauVehiculeComponent implements OnInit {

  categorie!: Categorie[];
  nouveauVehicule: Partial<CreeVehicule> = {}

  msgErreur?: string;
  msgOk?: string;
  
  constructor(private vehiculeServ: VehiculeService, private router: Router) { 
  }

  ngOnInit(): void {

    this.vehiculeServ.listerCategorie()
    .subscribe(data => this.categorie = data);  
  }

  valider(colForm: NgForm) {
    this.msgOk = undefined;
    this.msgErreur = undefined;

    this.vehiculeServ.creerVehicule(this.nouveauVehicule)
    .subscribe({
      next: () => {
        this.msgOk = "La voiture à bien été crée";
        colForm.reset();
        this.nouveauVehicule = {}
        this.router.navigateByUrl('/vehicules');
      },
      error: () => this.msgErreur = "Un problème est survenu"
    });
  }
}
