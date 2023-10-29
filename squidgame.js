let joueur = [];
let choixperso = parseInt(prompt("Personnage? Seong Gi-Hun (10 billes, -3, +1) taper 1, Kang Sae-Byeok (15 billes -2, +2) taper 2, Cho Sang-Woo (25 billes, -1, +3) taper 3"));

while (choixperso != 1 && choixperso != 2 && choixperso != 3){

    choixperso = parseInt(prompt("Personnage? Seong Gi-Hun (10 billes, -3, +1) taper 1, Kang Sae-Byeok (15 billes -2, +2) taper 2, Cho Sang-Woo (25 billes, -1, +3) taper 3"));

}

if (choixperso == 1){

    joueur.push("Seong Gi-Hun", 10, 3, 1);

}
if (choixperso == 2){

    joueur.push("Kang Sae-Byeok", 15, 2, 2);

}
if (choixperso == 3){

    joueur.push("Cho Sang-Woo", 25, 1, 3);

} 

console.log("Vous êtes " + joueur[0] + ", vous avez " + joueur[1] + " billes, " + joueur[2] + " bille(s) de malus et " + joueur[3] + " bille(s) bonus.");

let difficulté = parseInt(prompt("Difficulté? facile = 1, moyenne = 2, difficile = 3"));
let nbrniveaux;

while (difficulté != 1 && difficulté != 2 && difficulté != 3){

    difficulté = parseInt(prompt("Difficulté? facile = 1, moyenne = 2, difficile = 3"));

}

if (difficulté == 1){

    nbrniveaux = 4;
    console.log("Difficulté facile: " + nbrniveaux + " niveaux à passer.");

}
else if (difficulté == 2){

    nbrniveaux = 12;
    console.log("Difficulté moyenne: " + nbrniveaux + " niveaux à passer.");

}
else if (difficulté == 3){

    nbrniveaux = 18;
    console.log("Difficulté difficile: " + nbrniveaux + " niveaux à passer.");

}

class adv {

    constructor(advNom, advBilles, advAge){
        this.advNom = advNom;
        this.advBilles = advBilles;
        this.advAge = advAge;
    }

}

let shawn = new adv("Shawn Frost", 20, 22);
let mark = new adv("Mark Evans", 19 , 21);
let beta = new adv("Beta", 18, 19);
let naruto = new adv("Naruto Uzumaki", 17, 16);
let itachi = new adv("Itachi Uchiha", 16, 24);
let kakashi = new adv("Kakashi Hakate", 15, 29);
let gon = new adv("Gon Freecs", 14, 11);
let kirua = new adv("Kirua Zoldick", 13, 11);
let hisoka = new adv("Hisoka Morow", 12, 25);
let hinata = new adv("Hinata Shoyo", 11, 15);
let kageyama = new adv("Kageyama tobio", 10, 15);
let nishinoya = new adv("Nishinoya Yu", 9, 16);
let inezia = new adv("Inezia", 8, 24);
let aurore = new adv("Aurore", 7, 15);
let profchen = new adv("Professeur Chen", 6, 72);
let goku = new adv("San Goku", 5, 32);
let vegeta = new adv("Vegeta", 4, 34);
let beerus = new adv("Beerus-sama", 3, 500);

let adversaire = [shawn, mark, beta, naruto, itachi, kakashi, gon, kirua, hisoka, hinata, kageyama, nishinoya, inezia, aurore, profchen, goku, vegeta, beerus];
let abuser; 
let honte = false;

while (joueur[1] > 0 && adversaire.length > 0 && nbrniveaux != 0 ) { //regarder si ca marche sinon c'est >=

    let choixAdv = Math.floor(Math.random()* adversaire.length);
    let adv2 = adversaire[choixAdv];

    if (adv2.advAge > 70){

        abuser = confirm("Vous affrontez " + adv2.advNom + ". Voulez-vous abuser de la vieillesse de " + adv2.advNom + " et lui prendre ses billes sans jouer?");
    
    }

    if(abuser == true) {

        joueur[1] += adv2.advBilles;
        adversaire.splice(choixAdv, 1);
        console.log("Décision répugnante... Ce pauvre vieillard est mort à cause de votre cupidité.");
        honte = true;

    }

    else {

        let pairImpair = confirm("Vous affrontez " + adv2.advNom + ", a-t'il ou elle un nombre de billes pair ou impair? OK pour pair et Annuler pour impair.");
        
        if (pairImpair == true && adv2.advBilles % 2 == 0){ // dire pair et avoir raison

            joueur[1] += adv2.advBilles; // prendre billes
            joueur[1] += joueur[3]; // le joueur gagne son bonus
            adversaire.splice(choixAdv, 1); //eliminer l'adversaire
            console.log("Gagné! " + adv2.advNom + " est éliminé(e) et vous lui prenez ses billes. Vous en gagnez " + joueur[3] + " en plus.");

        }

        if (pairImpair == true && adv2.advBilles % 2 == 1){ // dire pair et avoir tord

            joueur[1] -= adv2.advBilles; //donner billes
            joueur[1] -= joueur[2]; //le joueur perd son malus
            console.log("Perdu! Vous donnez " + adv2.advBilles + " billes à votre adversaire. Vous en perdez aussi " + joueur[2] + ".");
            adv2.advBilles = adv2.advBilles * 2;

        }

        if (pairImpair == false && adv2.advBilles % 2 == 0){ // dire impair et avoir tord

            joueur[1] -= adv2.advBilles; //donner billes
            joueur[1] -= joueur[2]; //le joueur perd son malus
            console.log("Perdu! Vous donnez " + adv2.advBilles + " billes à votre adversaire. Vous en perdez aussi " + joueur[2] + ".");
            adv2.advBilles = adv2.advBilles * 2; // donner ses billes mais comme la valeur vient d'etre modif on divise par deux pour éviter de donner 2 fois
        }

        if (pairImpair == false && adv2.advBilles % 2 == 1){ // dire impair et avoir raison

            joueur[1] += adv2.advBilles; // prendre billes
            joueur[1] += joueur[3]; // le joueur gagne son bonus
            adversaire.splice(choixAdv, 1); //eliminer l'adversaire
            console.log("Gagné! " + adv2.advNom + " est éliminé(e) et vous lui prenez ses billes. Vous en gagnez " + joueur[3] + " en plus.");

        }
    }

    if (joueur[1] < 0 ){
        joueur[1] = 0;
    }

    console.log("Vous avez désormais " + joueur[1] + " bille(s).");
    nbrniveaux --;
    console.log("Encore " + nbrniveaux + " adversaires à affronter.");
    abuser = false;

}

if (joueur[1] > 0 ) {

    console.log("Il vous reste au moins une bille, bien joué! Vous avez gagné 45,6 milliards de Won sud-coréens, ça fait un paquet de BBQ coréen ça...");

    if (honte == true ) { //fin supplémentaire si le joueur a abusé d'un vieux
        console.log("Mais cet argent ne vous permettra pas de vous racheter une conscience ou de la vertu, vivez avec la honte sur vous d'avoir abusé de la sénilité d'une personne.");
    }

    if (difficulté == 1) {
        console.log("Essayez maintenant la difficulté moyenne ^^.");
    }

    if (difficulté == 2) {
        console.log("Essayez maintenant la difficulté difficile ^^.");
    }

    if (difficulté == 3) {
        console.log("Désolé, nous n'avons pas de difficulté plus élévée. Mais vous pouvez toujours réessayer le mode difficile ^^.");
    }

}

if (joueur[1] <= 0 ) {

    console.log("Il ne vous reste plus aucune bille, vous avez perdu le jeu.");
    console.log("Une dernière volonté? MENFOU *PAN*");
    console.log("Vous êtes mort.");

} 

