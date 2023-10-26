class Pokemon {

    constructor(Nom, attaque, defense, pv, luck) {
        
        this.Nom = Nom;
        this.attaque = attaque;
        this.defense = defense;
        this.pv = pv;
        this.luck = luck;
    }
        isLucky() {
        let chance = Math.floor(Math.random() * 100);
        if (chance < this.luck) {
        return true;
            }     
          else {
            return false; // tester en retirant
            }  
        }
        attaquePokemon(opponent) {
            if (this.isLucky() == true){ 
                let degats = this.attaque - opponent.defense;
                opponent.pv -= degats;
                if(opponent.pv <= 0) {
                        opponent.pv = 0;
                }
                    console.log(this.Nom + " a infligé " + degats + " à " + opponent.Nom + ", il lui reste donc " + opponent.pv + "PV(s).");
                
                if (opponent.pv <= 0) {
                    console.log(opponent.Nom + " a été mis hors combat, " + this.Nom + " a remporté le combat.");
                }
            }
            else {
                console.log(this.Nom + " a raté son attaque.");
            }        
        }
}

let Pokemon1 = new Pokemon("Moustillon", 31, 21, 130, 90);
let Pokemon2 = new Pokemon("Tiplouf", 31, 13, 110, 95);

while (Pokemon1.pv != 0 && Pokemon2.pv != 0 ) {
    Pokemon1.attaquePokemon(Pokemon2);
    if (Pokemon2.pv != 0){
    Pokemon2.attaquePokemon(Pokemon1);
    }
}

