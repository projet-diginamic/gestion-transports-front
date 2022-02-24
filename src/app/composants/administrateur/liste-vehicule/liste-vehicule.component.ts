import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehiculeService';

@Component({
  selector: 'app-liste-vehicule',
  templateUrl: './liste-vehicule.component.html',
  styleUrls: ['./liste-vehicule.component.scss']
})
export class ListeVehiculeComponent implements OnInit {

  vehicules: Vehicule[] = [];

  constructor(private vehiculeServ: VehiculeService) {
   }

  ngOnInit(): void {
    this.vehiculeServ.listerVehicules()
    .subscribe(
      data => {this.vehicules = data}

    )
  }

}
