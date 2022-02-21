import { Component, OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/services/vehiculeService';

@Component({
  selector: 'app-filtre-vehicule',
  templateUrl: './filtre-vehicule.component.html',
  styleUrls: ['./filtre-vehicule.component.scss']
})
export class FiltreVehiculeComponent implements OnInit {

  constructor(private vehiculeServ : VehiculeService) { }

  ngOnInit(): void {

  }

  rafraichir(){
    this.vehiculeServ.rafraichirListeVehicules();
  }

  // filtrerParImma(immavehicule){
  //   this.vehiculeServ.filtrerVehiculeParImma(immavehicule)
  // }
  // filterParMarque(marqueVehicule){
  //   this.vehiculeServ.filtrerVehiculeParMarque(marqueVehicule);
  // }

  filtrerListe(){
    
    
  }
}
