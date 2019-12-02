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

        // let elementosAtivos = [];
        // for (let i=0; i < this.elementos.length; i++) {
        //
        //     let elemento = this.elementos[i];
        //     elemento.update();
        //
        //     if (elemento.ativo) {
        //         elementosAtivos.push(elemento);
        //     }
        // }
        //
        // this.elementos = elementosAtivos;

        this.elementos.map((elemento) => {
            elemento.update();
        });

        this.elementos = this.elementos.filter((elemento) => {
            return elemento.ativo;
        });
    }

}