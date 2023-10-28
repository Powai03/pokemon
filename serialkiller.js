let clichés = [" le poti blagueur", " le bg", " le golem", " le fan de pokémon", " le iencli"];
let pMortEtDégats = [0.5, 0.4, 0.6, 0.45, 0.55]; //pObjet pour probabilités
let pDégats = [0.5, 0.4, 0.6, 0.45, 0.55];
let blases = [" Nico", " Alain", " Camille", " André", " Alann"];
let jasonPv = 100;
let nbrSurvivants = 5;
let mortfinal = []; //tableau rempli avec les noms et clichés des futurs morts pour le message final

class survivant {

    constructor(sclichés, sMortEtDégats, sDégats, sblases, pvsurv) { //sObjet pour survivant
        this.sclichés = sclichés;
        this.sMortEtDégats = sMortEtDégats;
        this.sDégats = sDégats;
        this.sblases = sblases;
        this.pvsurv = pvsurv; // peut etre remplacé par un boolean vu que je mets la valeur 1 ou 0
    }
    
}

let creaperso = 5;
let surv1;
let surv2;
let surv3;
let surv4;
let surv5;

while (creaperso > 0 ) {

    let randomclichés = Math.floor(Math.random()* clichés.length);
    let sclichés = clichés[randomclichés];
    clichés.splice(randomclichés, 1); //on vide le tableau de la valeur utilisée pour être sûr que les personnages aient pas de valeurs communes

    let randomMortDegats = Math.floor(Math.random()* pMortEtDégats.length);
    let sMortDegats = pMortEtDégats[randomMortDegats];
    pMortEtDégats.splice(randomMortDegats, 1);

    let randomDegats = Math.floor(Math.random()* pDégats.length);
    let sDégats = pDégats[randomDegats];
    pDégats.splice(randomDegats, 1);

    let randomblases = Math.floor(Math.random()* blases.length);
    let sblases = blases[randomblases];
    blases.splice(randomblases, 1);

    creaperso--;

    if (creaperso == 4){
        surv1 = new survivant(sclichés,sMortDegats,sDégats,sblases,1);
        console.log(surv1); //je laisse ça pour voir les caractéristiques du personnage à peine créé
    }

    if (creaperso == 3){
        surv2 = new survivant(sclichés,sMortDegats,sDégats,sblases,1);
        console.log(surv2); //idem ici
    }

    if (creaperso == 2){
        surv3 = new survivant(sclichés,sMortDegats,sDégats,sblases,1);
        console.log(surv3); //idem ici
    }

    if (creaperso == 1){
        surv4 = new survivant(sclichés,sMortDegats,sDégats,sblases,1);
        console.log(surv4); //idem ici
    }

    if (creaperso == 0){
        surv5 = new survivant(sclichés,sMortDegats,sDégats,sblases,1);
        console.log(surv5); //idem ici
    }
}

while (jasonPv > 0 && nbrSurvivants != 0) {

    if (surv1.pvsurv == 1) {
        let randomD1 = Math.random();
        let randomDM1 = Math.random();
        if(randomD1 < surv1.sDégats){
            jasonPv -= 10;
            console.log(surv1.sblases + surv1.sclichés + " a esquivé l'attaque de Jason et lui a infligé 10 dégats.");
        }
        else if(randomDM1 < surv1.sMortEtDégats){
            jasonPv -= 15;
            surv1.pvsurv --;
            mortfinal.push(surv1.sblases + surv1.sclichés);
            nbrSurvivants --;
            console.log(surv1.sblases + surv1.sclichés + " a infligé 15 dégats à Jason avant de se faire couper en 2 par ce dernier...RIP.");
        }
        else {
            surv1.pvsurv --;
            mortfinal.push(surv1.sblases + surv1.sclichés);
            nbrSurvivants --;
            console.log("Jason a tué" + surv1.sblases + surv1.sclichés + ".");
        }
    }

    if (jasonPv <= 0 || nbrSurvivants == 0){ //sortir du while si une des conditions de fin sont respectées
        break;
    }

    if (surv2.pvsurv == 1) {
        let randomD2 = Math.random();
        let randomDM2 = Math.random();
        if(randomD2 < surv2.sDégats){
            jasonPv -= 10;
            console.log(surv2.sblases + surv2.sclichés + " a esquivé l'attaque de Jason et lui a infligé 10 dégats.");
        }
        else if(randomDM2 < surv2.sMortEtDégats){
            jasonPv -= 15;
            surv2.pvsurv --;
            mortfinal.push(surv2.sblases + surv2.sclichés);
            nbrSurvivants --;
            console.log(surv2.sblases + surv2.sclichés + " a infligé 15 dégats à Jason avant de se faire couper en 2 par ce dernier...RIP.");
        }
        else {
            surv2.pvsurv --;
            mortfinal.push(surv2.sblases + surv2.sclichés);
            nbrSurvivants --;
            console.log("Jason a tué" + surv2.sblases + surv2.sclichés + ".");
        }
    }

    if (jasonPv <= 0 || nbrSurvivants == 0){
        break;
    }

    if (surv3.pvsurv == 1) {
        let randomD3 = Math.random();
        let randomDM3 = Math.random();
        if(randomD3 < surv3.sDégats){
            jasonPv -= 10;
            console.log(surv3.sblases + surv3.sclichés + " a esquivé l'attaque de Jason et lui a infligé 10 dégats.");
        }
        else if(randomDM3 < surv3.sMortEtDégats){
            jasonPv -= 15;
            surv3.pvsurv --;
            mortfinal.push(surv3.sblases + surv3.sclichés);
            nbrSurvivants --;
            console.log(surv3.sblases + surv3.sclichés + " a infligé 15 dégats à Jason avant de se faire couper en 2 par ce dernier...RIP.");
        }
        else {
            surv3.pvsurv --;
            mortfinal.push(surv3.sblases + surv3.sclichés);
            nbrSurvivants --;
            console.log("Jason a tué" + surv3.sblases + surv3.sclichés + ".");
        }
    }

    if (jasonPv <= 0 || nbrSurvivants == 0){
        break;
    }

    if (surv4.pvsurv == 1) {
        let randomD4 = Math.random();
        let randomDM4 = Math.random();
        if(randomD4 < surv4.sDégats){
            jasonPv -= 10;
            console.log(surv4.sblases + surv4.sclichés + " a esquivé l'attaque de Jason et lui a infligé 10 dégats.");
        }
        else if(randomDM4 < surv4.sMortEtDégats){
            jasonPv -= 15;
            surv4.pvsurv --;
            mortfinal.push(surv4.sblases + surv4.sclichés);
            nbrSurvivants --;
            console.log(surv4.sblases + surv4.sclichés + " a infligé 15 dégats à Jason avant de se faire couper en 2 par ce dernier...RIP.");
        }
        else {
            surv4.pvsurv --;
            mortfinal.push(surv4.sblases + surv4.sclichés);
            nbrSurvivants --;
            console.log("Jason a tué" + surv4.sblases + surv4.sclichés + ".");
        }
    }

    if (jasonPv <= 0 || nbrSurvivants == 0){
        break;
    }

    if (surv5.pvsurv == 1) {
        let randomD5 = Math.random();
        let randomDM5 = Math.random();
        if(randomD5 < surv5.sDégats){
            jasonPv -= 10;
            console.log(surv5.sblases + surv5.sclichés + " a esquivé l'attaque de Jason et lui a infligé 10 dégats.");
        }
        else if(randomDM5 < surv5.sMortEtDégats){
            jasonPv -= 15;
            surv5.pvsurv --;
            mortfinal.push(surv5.sblases + surv5.sclichés);
            nbrSurvivants --;
            console.log(surv5.sblases + surv5.sclichés + " a infligé 15 dégats à Jason avant de se faire couper en 2 par ce dernier...RIP.");
        }
        else {
            surv5.pvsurv --;
            mortfinal.push(surv5.sblases + surv5.sclichés);
            nbrSurvivants --;
            console.log("Jason a tué" + surv5.sblases + surv5.sclichés + ".");
        }
    }

    if (jasonPv <= 0 || nbrSurvivants == 0){
        break;
    }
}

if (nbrSurvivants == 0 && jasonPv > 0){ //jason a plié un classique de meurtre en série gg
    console.log("Jason a réussi à tuer tout le monde, encore un classique de plié ça je reconnais.");
}

//console.log(jasonPv); //pour vérifier les pv de jason à la fin

if (jasonPv <= 0 && nbrSurvivants !=0 && nbrSurvivants < 5){ //jason meurt apres avoir tué des gens
    console.log("Jason est mort. Tout comme" + mortfinal + ".");
}

if(jasonPv<= 0 && nbrSurvivants == 0) { // en faisant tourner le code des fois ils s'entretuaient entre jason et le dernier survivant donc j'ai rajouté une fin supplémentaire
    console.log("En tuant le dernier survivant, Jason a pris des ultimes dégats... Résultat : tout le monde est mort, c'est pathétique, aucun gagnant, rien du tout...");
}

if (jasonPv <= 0 && nbrSurvivants == 5){ // cas extremement rare où jason meurt sans avoir tué personne je suis pas encore tombé sur ce cas mais il doit surement exister donc j'ai crée une derniere fin au cas où
    console.log("Jason est mort, et il a tué personne... Trop la honte... - Oui gngngngngngn je suis un tueur en série - Tueur de rien du tout ouais, bref je rentre, cette histoire m'a fatigué.");
}