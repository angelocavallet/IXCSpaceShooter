class Corrida extends Fase {

    load() {

        this.player = new Carro({
            context: this.game.context,
            width: 50,
            height: 100,
            color: 'red',
            x: this.game.canvas.width / 2,
            y: this.game.canvas.height / 2
        });

        this.player.setController(new KeyboardController(window));
        this.player.controller.bind();

        this.addElemento(this.player);
    }

    update() {
        super.update();

    }


}
