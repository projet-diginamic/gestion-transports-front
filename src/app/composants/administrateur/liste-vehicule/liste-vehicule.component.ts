import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehiculeService';

@Component({
  selector: 'app-liste-vehicule',
  templateUrl: './liste-vehicule.component.html',
  styleUrls: ['./liste-vehicule.component.scss']
})
export class ListeVehiculeComponent implements OnInit {

  vehicules!: Observable<Vehicule[]>;

  constructor(private vehiculeServ: VehiculeService) {
   }

  ngOnInit(): void {
    this.vehicules = this.vehiculeServ.listerVehicules();
  }

}
