
class Corrida extends Fase {

    constructor (componentes) {
        super(componentes);

        this.player = new Carro();

        this.addComponente(player);


    }

    update () {
        super.update();

    }


}
