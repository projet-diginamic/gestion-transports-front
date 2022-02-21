import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehiculeService';

@Component({
  selector: 'app-nouveau-vehicule',
  templateUrl: './nouveau-vehicule.component.html',
  styleUrls: ['./nouveau-vehicule.component.scss']
})
export class NouveauVehiculeComponent implements OnInit {

  categorie!: Observable<Categorie[]>;

  constructor(private vehiculeServ: VehiculeService) { }

  ngOnInit(): void {
    this.categorie = this.vehiculeServ.listerCategorie();
  }

}
