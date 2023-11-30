class Heroi{
    constructor(nome, idade, tipo){
        this.nome=nome;
        this.idade=idade;
        this.tipo=tipo;
    }
    atacar(){
        let ataque;
        if(this.tipo=="mago"){
            ataque="usou magia";
        }else if(this.tipo=="guerreiro"){
            ataque="usou espada";
        }else if(this.tipo=="monge "){
            ataque="usou artes marciais";
        }else if(this.tipo=="ninja"){
            ataque="usou artes shuriken";
        }
        console.log("o "+this.tipo+" atacou usando "+ataque);
    }
}
let naruto= new Heroi("Naruto", "15", "ninja");
naruto.atacar();
let merlim= new Heroi("Merlim", "1987", "mago");
merlim.atacar();