
class Fase {

    constructor (componentes) {

        this.componentes = componentes;
        this.terminou = false;
    }

    addComponente (componente) {
        this.componentes.push(componente);
    }

    update () {

        this.componentes = this.componentes.filter((componente) => {

            componente.update();

            return !componente.terminou ? componente : false;
        });

    }

}