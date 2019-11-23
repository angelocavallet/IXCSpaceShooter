class Container {

    constructor(config) {
    }

    setComponente(componente) {
        componente.container = this;
        this.componentes.push(componente);
    }

    load() {
        console.error('Método "load" não implementado');
    }

    render() {

        for (let x = 0; x < this.componentes.length; x++) {
            this.componentes[x].render();
        }
    }

    removeComponente(atributo, valor) {

        this.componentes = this.componentes.filter((componente) => {
            return componente[atributo] !== valor;
        });
    }

}