import { Component } from '@angular/core';
import { Utilisateur } from './models/utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion-transports-front';
}

export const DT_OPTS = {
    language: {
      processing:     "Traitement en cours...",
      search:         "Rechercher&nbsp;:",
      lengthMenu:    "Afficher _MENU_ &eacute;l&eacute;ments",
      info:           "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
      infoEmpty:      "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
      infoFiltered:   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
      infoPostFix:    "",
      loadingRecords: "Chargement en cours...",
      zeroRecords:    "Aucun &eacute;l&eacute;ment &agrave; afficher",
      emptyTable:     "Aucune donnée disponible dans le tableau",
      paginate: {
          first:      "Premier",
          previous:   "Pr&eacute;c&eacute;dent",
          next:       "Suivant",
          last:       "Dernier"
      },
      aria: {
          sortAscending:  ": activer pour trier la colonne par ordre croissant",
          sortDescending: ": activer pour trier la colonne par ordre décroissant"
      }
  }
};

export const USER_ENCOURS_ID = 1

export const baseUrlBack = "http://localhost:8080/"

export const USER_ACTIF : Utilisateur = {
    id: 0,
    nom:'',
    prenom:'',
    email:'',
    password:'',
    isAdmin: false
}