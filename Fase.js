
class Fase {

    constructor () {
        this.terminou = false;
    }

    addElemento (elemento) {
        this.elementos.push(elemento);
    }

    update () {

        this.elementos = this.elementos.filter((elemento) => {

            elemento.update();

            return !elemento.terminou ? elemento : false;
        });

    }

}