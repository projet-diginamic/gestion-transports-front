export interface Adresse{
    numeroRue: string
    rue: string
    ville: string
}

export interface AdresseCreation{
    numeroRue: string
    rue: string
    ville: string
}

export interface AdresseDepart{
    id: number
    adresse: Adresse
}

export interface AdresseArrivee{
    id: number
    adresse: Adresse
}