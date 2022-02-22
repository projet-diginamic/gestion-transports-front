import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculeComponent } from './composants/administrateur/vehicule/vehicule-component';
import { ListeVehiculeComponent } from './composants/administrateur/liste-vehicule/liste-vehicule.component';
import { DetailVehiculeComponent } from './composants/administrateur/detail-vehicule/detail-vehicule.component';
import { NouveauVehiculeComponent } from './composants/administrateur/nouveau-vehicule/nouveau-vehicule.component';
import { FiltreVehiculeComponent } from './composants/administrateur/filtre-vehicule/filtre-vehicule.component';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';
import { CategorieVehiculeComponent } from './composants/administrateur/categorie-vehicule/categorie-vehicule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EnteteAdminComponent } from './composants/template/entete-admin/entete-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    ListeVehiculeComponent,
    DetailVehiculeComponent,
    NouveauVehiculeComponent,
    FiltreVehiculeComponent,
    NavigationGeneraleComponent,
    TitrePageComponent,
    CorpsPageComponent,
    EnteteCorpsComponent,
    SousMenuPageComponent,
    ContenuPageComponent,
    ContenuPageComponent,
    CategorieVehiculeComponent,
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
    EnteteAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
