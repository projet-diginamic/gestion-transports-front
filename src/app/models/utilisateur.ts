export interface Utilisateur{
    id: number
    nom:string
    prenom:string
    email:string
    password: string
    isAdmin: boolean
}

export interface Chauffeur{
    id: number
    nom:string
    prenom:string
    email:string
    password: string
}

export interface UtilisateurDto{
    nom:string
    prenom:string
}