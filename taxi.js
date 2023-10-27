let feuRouge = 30;
let changement = 0;
let musique = ["Anissa - Wejdene", "le Générique de Pokémon", "Levitating - Dua Lipa ft. Dababy", "GODS - League of Legends ft. New Jeans", "Strangers - Kenya Grace"];

class personnage {
    constructor(prenom) {
        this.prenom = prenom;
    }
    psm = 10;
}

let kilian = new personnage("Kilian");

while (kilian.psm > 0 && feuRouge != 0) {
    let musiqueJouée = Math.floor(Math.random() * 4);
        if (parseInt(musiqueJouée) == 0){
            kilian.psm --;
            changement ++;
            console.log("La Radio passe Anissa de Wejdene, ça gonfle " + kilian.prenom + ", il change de taxi.");
        }
        else {
            console.log("La radio passe " + musique[musiqueJouée] + ", " + kilian.prenom + " se sent si bien dans ce taxi...")
        }
    feuRouge --;  
    console.log(kilian.psm);
}

if (kilian.psm == 0) {
    console.log(kilian.prenom + " vient juste d'exploser...T'es content hein? Moi non... Il était pipou... RIP.");
}

else {
    console.log(kilian.prenom + " est bien arrivé à destination sans exploser, il a changé " + changement + " fois de taxi.");
}