
// fichier classes de la pizzeria
// fait par Heri Ezekiya && Nunsseu Elise Man


// classe aliment
class aliment{
    constructor(nom,poids){
        this.nom = nom;
        this.poids= poids;
    }
}

//classe croute
class croute extends aliment{
    constructor (prix,taille){
        this.prix = prix;
        this.taille = taille;

    }
}

// classe fromage
class fromage extends croute{
    constructor (prix){
        this.prix = prix;
    }
}

// classe Garniture
class Garniture extends fromage{
    constructor (prix){
    this.prix = prix;

    }
}

// classe epices
class epices extends aliment{
    constructor (Epice){

        this.eEpice = Epice;
    }
}

//classes pizza
class pizza {
    constructor (numeroPizza,taille,croute,fromage,Garniture,prixComplet,tempsCuisson){
        this.numeroPizza = numeroPizza;
        this.taille = taille;
        this.croute = croute;
        this.fromage = fromage;
        this.Garniture = Garniture;
        this.prixComplet = prixComplet;
        this.tempsCuisson = tempsCuisson;
    }
}

// classe commande
class commande {
    constructor (numeroComande,date,heure,pizza,montantTotal){
        this.numeroComande = numeroComande;
        this.dateCommande = date;
        this.heure = heure;
        this.pizza = pizza;
        this.montantTotal= montantTotal;
    }
}

// classe client
class client {
    constructor(nom, prenom,telephone,courriel,commandeClient){
        this.nom = nom;
        this.prenom = prenom;
        this.telephone=telephone;
        this.courriel =courriel;
        this.commandeClient = commandeClient;
    }
}
