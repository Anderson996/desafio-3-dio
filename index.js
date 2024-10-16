//Classe
class heroi {
    constructor(nome , idade , tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.atanque
    }

    //Função dentro da classe
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

//Objeto
let ataqueHeroi = new heroi("Felipão" , 25 , "ninja")

//Acionamento
ataqueHeroi.atacar()