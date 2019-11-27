class Fase {

    constructor() {
        this.elementos = [];
        this.terminou = false;
    }

    addElemento(elemento) {
        elemento.fase = this;
        this.elementos.push(elemento);
    }

    load() {
        console.error('Função "load" não implementada!');
    }

    update() {

        // for (let i=0; i < this.elementos.length; i++) {
        //
        //     this.elementos[i].update();
        //
        // }

        this.elementos.map((elemento) => {
            elemento.update();
        });

        this.elementos = this.elementos.filter((elemento) => {
            return elemento.ativo;
        });
    }

}