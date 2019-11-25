class Fase {

    constructor() {
        this.elementos = [];
        this.terminou = false;
    }

    addElemento(elemento) {
        this.elementos.push(elemento);
    }

    load() {
        console.error('Função "load" não implementada!');
    }

    update() {

        this.elementos = this.elementos.filter((elemento) => {

            elemento.update();

            return !elemento.terminou ? elemento : false;
        });

    }

}