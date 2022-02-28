import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";
import { NavigationGeneraleComponent } from './composants/template/navigation-generale/navigation-generale.component';
import { CorpsPageComponent } from './composants/template/corps-page/corps-page.component';
import { EnteteCorpsComponent } from './composants/template/entete-corps/entete-corps.component';
import { SousMenuPageComponent } from './composants/template/sous-menu-page/sous-menu-page.component';
import { TitrePageComponent } from './composants/template/titre-page/titre-page.component';
import { ContenuPageComponent } from './composants/template/contenu-page/contenu-page.component';
import { ReservationsCovoiturageComponent } from './composants/utilisateur/reservations-covoiturage/reservations-covoiturage.component';
import { ReservationsVehiculeComponent } from './composants/utilisateur/reservations-vehicule/reservations-vehicule.component';
import { AnnoncesComponent } from './composants/utilisateur/annonces/annonces.component';
import { ReserverCovoiturageComponent } from './composants/utilisateur/reserver-covoiturage/reserver-covoiturage.component';
import { ReserverVehiculeComponent } from './composants/utilisateur/reserver-vehicule/reserver-vehicule.component';
import { NouvelleAnnonceComponent } from './composants/utilisateur/nouvelle-annonce/nouvelle-annonce.component';
import { ResaCovoiturageEncoursComponent } from './composants/utilisateur/tables/resa-covoiturage-encours/resa-covoiturage-encours.component';
import { ResaCovoiturageHistoriqueComponent } from './composants/utilisateur/tables/resa-covoiturage-historique/resa-covoiturage-historique.component';
import { ResaVehiculeEncoursComponent } from './composants/utilisateur/tables/resa-vehicule-encours/resa-vehicule-encours.component';
import { ResaVehiculeHistoriqueComponent } from './composants/utilisateur/tables/resa-vehicule-historique/resa-vehicule-historique.component';
import { AnnoncesEncoursComponent } from './composants/utilisateur/tables/annonces-encours/annonces-encours.component';
import { AnnoncesHistoriqueComponent } from './composants/utilisateur/tables/annonces-historique/annonces-historique.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdresseDepartArriveeDirective } from './validators/adresse-depart-arrivee.directive';
import { ListeCommunesFranceComponent } from './composants/utils/liste-communes-france/liste-communes-france.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationGeneraleComponent,
    CorpsPageComponent,
    EnteteCorpsComponent,
    SousMenuPageComponent,
    TitrePageComponent,
    ContenuPageComponent,
    ReservationsCovoiturageComponent,
    ReservationsVehiculeComponent,
    AnnoncesComponent,
    ReserverCovoiturageComponent,
    ReserverVehiculeComponent,
    NouvelleAnnonceComponent,
    ResaCovoiturageEncoursComponent,
    ResaCovoiturageHistoriqueComponent,
    ResaVehiculeEncoursComponent,
    ResaVehiculeHistoriqueComponent,
    AnnoncesEncoursComponent,
    AnnoncesHistoriqueComponent,
    AdresseDepartArriveeDirective,
    ListeCommunesFranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
