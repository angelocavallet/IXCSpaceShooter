
class Corrida extends Fase {

    constructor () {
        super();

        this.player = new Carro({
            context: this.game.context,
            width: 5,
            height: 10,
            color: 'red',
            x: this.game.canvas.width / 2,
            y: this.game.canvas.height / 2
        });

        this.addElemento(this.player);

    }

    update () {
        super.update();

    }


}
