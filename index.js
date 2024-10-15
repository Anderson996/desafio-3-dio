//Classe
class heroi {
    constructor(nome , idade , tipo){
    this.nome = nome
    this.dade = idade
    this.tipo = tipo
    this.atanque
    }

    atacar(){
        if(this.tipo === "mago"){
            this.ataque = "magia"
            console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
        }else if(this.tipo === "guerreiro"){
            this.ataque = "espada"
            console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
        }else if(this.tipo === "monge"){
            this.ataque = "artes marciais"
            console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
        }else if(this.tipo === "ninja"){
            this.ataque = "shuriken"
            console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
        }
    }
}

let ataqueHeroi = new heroi("Felipão" , 25 , "ninja")

ataqueHeroi.atacar()