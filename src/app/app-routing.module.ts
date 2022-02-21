import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVehiculeComponent } from './composants/administrateur/liste-vehicule/liste-vehicule.component';
import { EnteteAdminComponent } from './composants/template/entete-admin/entete-admin.component';
import { AnnoncesComponent } from './composants/utilisateur/annonces/annonces.component';
import { NouvelleAnnonceComponent } from './composants/utilisateur/nouvelle-annonce/nouvelle-annonce.component';
import { ReservationsCovoiturageComponent } from './composants/utilisateur/reservations-covoiturage/reservations-covoiturage.component';
import { ReservationsVehiculeComponent } from './composants/utilisateur/reservations-vehicule/reservations-vehicule.component';
import { ReserverCovoiturageComponent } from './composants/utilisateur/reserver-covoiturage/reserver-covoiturage.component';
import { ReserverVehiculeComponent } from './composants/utilisateur/reserver-vehicule/reserver-vehicule.component';
import { AnnoncesEncoursComponent } from './composants/utilisateur/tables/annonces-encours/annonces-encours.component';
import { AnnoncesHistoriqueComponent } from './composants/utilisateur/tables/annonces-historique/annonces-historique.component';
import { ResaCovoiturageEncoursComponent } from './composants/utilisateur/tables/resa-covoiturage-encours/resa-covoiturage-encours.component';
import { ResaCovoiturageHistoriqueComponent } from './composants/utilisateur/tables/resa-covoiturage-historique/resa-covoiturage-historique.component';
import { ResaVehiculeEncoursComponent } from './composants/utilisateur/tables/resa-vehicule-encours/resa-vehicule-encours.component';
import { ResaVehiculeHistoriqueComponent } from './composants/utilisateur/tables/resa-vehicule-historique/resa-vehicule-historique.component';

const routes: Routes = [
  {
      path: 'reservationsCoviturage', 
      component: ReservationsCovoiturageComponent,
      children: [
          {path: '', pathMatch: 'full', redirectTo: 'enCours'},
          {path: 'enCours', component: ResaCovoiturageEncoursComponent},
          {path: 'historique', component: ResaCovoiturageHistoriqueComponent},
      ]
  },
  {
      path: 'reservationsVehicule', 
      component: ReservationsVehiculeComponent,
      children: [
          {path: '', pathMatch: 'full', redirectTo: 'enCours'},
          {path: 'enCours', component: ResaVehiculeEncoursComponent},
          {path: 'historique', component: ResaVehiculeHistoriqueComponent},
      ]
  },
  {
      path: 'annonces', 
      component: AnnoncesComponent,
      children: [
          {path: '', pathMatch: 'full', redirectTo: 'enCours'},
          {path: 'enCours', component: AnnoncesEncoursComponent},
          {path: 'historique', component: AnnoncesHistoriqueComponent},
      ]
  },
  {path: 'reserverCovoiturage', component: ReserverCovoiturageComponent},
  {path: 'reserverVehicule', component: ReserverVehiculeComponent},
  {path: 'nouvelleAnnonce', component: NouvelleAnnonceComponent},
  {path: 'vehicules', component: EnteteAdminComponent},
  {path: '', pathMatch: 'full', redirectTo: 'reservationsCoviturage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
