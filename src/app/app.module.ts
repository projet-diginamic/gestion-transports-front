import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculeComponent } from './vehicule/vehicule-component';
import { ListeVehiculeComponent } from './composants/liste-vehicule/liste-vehicule.component';
import { DetailVehiculeComponent } from './composants/detail-vehicule/detail-vehicule.component';
import { NouveauVehiculeComponent } from './composants/nouveau-vehicule/nouveau-vehicule.component';
import { FiltreVehiculeComponent } from './composants/filtre-vehicule/filtre-vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    ListeVehiculeComponent,
    DetailVehiculeComponent,
    NouveauVehiculeComponent,
    FiltreVehiculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
