export interface Vehicule {
    id : number,
    categorie : number,
    immatriculation : string,
    marque : string,
    modele : string,
    photo : string
    
}

export interface CreeVehicule{
    id : number
    categorie : number;
    immatriculation : string;
    marque : string;
    modele : string;
    nbPlaces : number;
    photo : string;

}

export interface Categorie{
    id : number;
    nom: string;
}