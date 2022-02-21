import { Component, Input, OnInit } from "@angular/core";
import { Vehicule } from "../../models/vehicule";

@Component({
    selector: 'app-vehicule-component',
    templateUrl : './vehicule-component.html',
    styleUrls: ['./vehicule-component.scss']
})

export class VehiculeComponent implements OnInit{

    @Input() colVehicule!: Vehicule;

    constructor(){

    }
    ngOnInit(): void {
        
    }
}