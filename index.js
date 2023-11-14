class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque indefinido';
        }

        console.log("O " + this.tipo + " atacou usando " + ataque + ".");
    }
}

// Exemplo de uso da classe
const heroi1 = new Heroi('Herói 1', 25, 'mago');
heroi1.atacar();

const heroi2 = new Heroi('Herói 2', 30, 'guerreiro');
heroi2.atacar();

const heroi3 = new Heroi('Herói 3', 22, 'monge');
heroi3.atacar();

const heroi4 = new Heroi('Herói 4', 28, 'ninja');
heroi4.atacar();
