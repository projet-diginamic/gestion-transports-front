import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculeComponent } from './composants/administrateur/vehicule/vehicule-component';
import { ListeVehiculeComponent } from './composants/administrateur/liste-vehicule/liste-vehicule.component';
import { DetailVehiculeComponent } from './composants/administrateur/detail-vehicule/detail-vehicule.component';
import { NouveauVehiculeComponent } from './composants/administrateur/nouveau-vehicule/nouveau-vehicule.component';
import { FiltreVehiculeComponent } from './composants/administrateur/filtre-vehicule/filtre-vehicule.component';
import { ContenuPageComponentComponent } from './composants/template/contenu-page-component/contenu-page-component.component';
import { CorpsPageComponentComponent } from './composants/template/corps-page-component/corps-page-component.component';
import { EnteteCorpsComponentComponent } from './composants/template/entete-corps-component/entete-corps-component.component';
import { SousMenuPageComponentComponent } from './composants/template/sous-menu-page-component/sous-menu-page-component.component';
import { DataTablesModule } from "angular-datatables";
import { NavigationGeneraleComponentComponent } from './composants/template/navigation-generale-component/navigation-generale-component.component';
import { TitrePageComponentComponent } from './composants/template/titre-page-component/titre-page-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieVehiculeComponent } from './composants/administrateur/categorie-vehicule/categorie-vehicule.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    ListeVehiculeComponent,
    DetailVehiculeComponent,
    NouveauVehiculeComponent,
    FiltreVehiculeComponent,
    NavigationGeneraleComponentComponent,
    TitrePageComponentComponent,
    CorpsPageComponentComponent,
    EnteteCorpsComponentComponent,
    SousMenuPageComponentComponent,
    ContenuPageComponentComponent,
    ContenuPageComponentComponent,
    CategorieVehiculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
