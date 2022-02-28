import { Adresse, AdresseArrivee, AdresseDepart } from "./adresse";
import { Chauffeur, Utilisateur, UtilisateurDto } from "./utilisateur";

export interface Categorie{
    id:number
    nom: string
}

export interface VehiculeService{
    id: number
    immatriculation: string
    marque: string
    modele:string
    categorie: string
    photo: string
}

export interface VehiculeCovoiturage{
    id: number
    immatriculation: string
    marque: string
    modele:string
}

export interface CreerVehiculeCovoiturage{
    immatriculation: string
    marque: string
    modele:string
}

export interface DemandeReservationCovoiturage{
    idCollaborateur: number
    idCovoiturage: number
}

export interface DemandeReservationVehicule{
    userId: number
    vehiculeId: number
    dateHeureDebut:Date
    dateHeureFin:Date
    avecChauffeur: boolean
}

export interface ReservationCovoiturage{
    id:number
    dateHeureDepart: Date
    adresseDepart: Adresse
    adresseDestination: Adresse    
}

export interface ReservationCovoiturageDetail{
    id:number
    dateHeureDepart: Date
    dateHeureArrivee: Date
    adresseDepart: AdresseDepart
    adresseArrivee: AdresseArrivee  
    passagers: UtilisateurDto[]
    dateDepart: string
    heureDepart: string
}

export interface ReservationVehicule{
    id: number
    passager: Utilisateur
    vehicule: VehiculeService
    chauffeur: Chauffeur
    photo:string
    dateHeureDepart: Date
    dateHeureRetour: Date
    demandeChauffeur: boolean
}

export interface CreerReservationVehicule{
    vehicule: number
    chauffeur:number
    dateHeureDepart:Date
    dateHeureRetour:Date
    passager: number
    demandeChauffeur: boolean
}

export interface FormReservationVehicule{
    dateDepart:string
    heureDepart:string
    dateRetour:string
    heureRetour:string
    demandeChauffeur:boolean
    vehicule:number
}

export interface ReservationCovoiturageEncours{
    id:number
    dateHeureDepart: Date
    adresseDepart: AdresseDepart
    adresseArrivee: AdresseArrivee    
}

export interface ReservationCovoiturageHistorique{
    id:number
    passager: Utilisateur[]
    statut: string
    annonceCovoiturage: AnnonceCovoiturage
}

export interface AnnonceCovoiturage{
    id:number
    dateHeureDepart:Date
    organisateur: Utilisateur
    passagers: Utilisateur[]
    adresseDepart: AdresseDepart
    adresseArrivee: AdresseArrivee
    vehicule: VehiculeCovoiturage
    nbPlaces: number
    nbResas: number
    statut: string
}

export interface AnnonceCovoiturageSimple{
    id:number
    dateHeureDepart:Date
    adresseDepart: AdresseDepart
    adresseArrivee: AdresseArrivee
    nbPlaces: number
}

export interface AnnonceCovoiturageDetailDto{
    id: number
    dateHeureDepart: Date
    organisateur: Utilisateur
    adresseDepart: AdresseDepart
    adresseArrivee: AdresseArrivee
    vehicule: VehiculeCovoiturage
    nbPlaces: number
    nbResas: number
    passagers: Utilisateur[]
    dateDepart: string
    heureDepart: string
}

export interface FicheAnnonceCovoiturageDetailDto{
    id: number
    dateHeureDepart: Date
    organisateur: Utilisateur
    adresseDepart: AdresseDepart
    adresseArrivee: AdresseArrivee
    vehicule: VehiculeCovoiturage
    nbPlaces: number
    nbResas: number
    passagers: Utilisateur[]
    dateDepart: string
    heureDepart: string
}

export interface FormAnnonceCovoiturage{
    id:number
    dateDepart:string
    heureDepart:string
    adresseDepart: string
    adresseArrivee: string
    immatriculation: string
    marque: string
    modele:string
    nbPlaces: number
}

export interface CreerAnnonceCovoiturage{
    dateHeureDepart:Date
    adresseDepart: AdresseDepart
    adresseArrivee: AdresseArrivee
    vehicule: CreerVehiculeCovoiturage
    organisateur: number
    nbPlaces: number
}

export interface FiltreAnnonceCovoiturage{
    dateHeureDepart:Date
    adresseDepart: Adresse
    adresseDestination: Adresse
}

export interface ParamsTitrePageComposant{
    titrePage:string
    libelleBtn: string,
    lien: string,
    classBtn: string
}

export interface ApiGouvCommune{
    nom: string
    code: string
    codeDepartement: string
    codeRegion: string
    codesPostaux: string[]
    population:number
    _score: number
}