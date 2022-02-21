export interface Vehicule {
    immatriculation : string;
    marque : string;
    modele : string;
    categorie : string;
    photo : string;
}

export interface Categorie{
    idCategorie : number;
    libelleCategorie: string;
}

export interface CreeVehicule{
    immatriculation : string;
    marque : string;
    modele : string;
    categorie : Categorie;
    nbPlace : number;
    photo : string;

}