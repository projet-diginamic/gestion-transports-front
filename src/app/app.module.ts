import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { VehiculeComponent } from './vehicule/vehicule-component';
import { ListeVehiculeComponent } from './composants/liste-vehicule/liste-vehicule.component';
import { DetailVehiculeComponent } from './composants/detail-vehicule/detail-vehicule.component';
import { NouveauVehiculeComponent } from './composants/nouveau-vehicule/nouveau-vehicule.component';
import { FiltreVehiculeComponent } from './composants/filtre-vehicule/filtre-vehicule.component';
=======
import { DataTablesModule } from "angular-datatables";
import { NavigationGeneraleComponentComponent } from './composants/navigation-generale-component/navigation-generale-component.component';
import { CorpsPageComponentComponent } from './composants/corps-page-component/corps-page-component.component';
import { EnteteCorpsComponentComponent } from './composants/entete-corps-component/entete-corps-component.component';
import { SousMenuPageComponentComponent } from './composants/sous-menu-page-component/sous-menu-page-component.component';
import { TitrePageComponentComponent } from './composants/titre-page-component/titre-page-component.component';
import { ContenuPageComponentComponent } from './composants/contenu-page-component/contenu-page-component.component';
>>>>>>> a348310d53f055f4130c4d26305eecf4b70e3f3e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    VehiculeComponent,
    ListeVehiculeComponent,
    DetailVehiculeComponent,
    NouveauVehiculeComponent,
    FiltreVehiculeComponent
=======
    NavigationGeneraleComponentComponent,
    CorpsPageComponentComponent,
    EnteteCorpsComponentComponent,
    SousMenuPageComponentComponent,
    TitrePageComponentComponent,
    ContenuPageComponentComponent
>>>>>>> a348310d53f055f4130c4d26305eecf4b70e3f3e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
