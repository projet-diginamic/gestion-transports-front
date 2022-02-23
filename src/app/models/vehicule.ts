export interface Vehicule {
    idVehicule : number;
    idCategorie : number;
    immatriculation : string;
    marque : string;
    modele : string;
    photo : string;
}

export interface CreeVehicule{
    id : number
    idCategorie : number;
    immatriculation : string;
    marque : string;
    modele : string;
    nbPlace : number;
    photo : string;

}

export interface Categorie{
    id : number;
    libelleCategorie: string;
}