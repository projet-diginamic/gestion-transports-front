export interface Vehicule {
    idVehicule : number;
    idCategorie : number;
    immatriculation : string;
    marque : string;
    modele : string;
    photo : string;
}

export interface CreeVehicule{
    immatriculation : string;
    marque : string;
    modele : string;
    idCategorie : number;
    nbPlace : number;
    photo : string;

}

export interface Categorie{
    idCategorie : number;
    libelleCategorie: string;
}