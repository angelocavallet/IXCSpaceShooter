class Missao extends Fase {

    load() {

        this.player = new NaveBorn({
            context: this.game.context,
            width: 25,
            height: 50,
            tipo: 'naveBorn',
            x: this.game.canvas.width / 2,
            y: this.game.canvas.height / 2
        });

        this.player.setController(new KeyboardController(window));
        this.player.controller.bind();

        this.addElemento(this.player);
    }

    update() {
        super.update();

        this.game.context.fillStyle = `white`;
        this.game.context.fillText(`Utilize espaco para atirar e as setas para mover a Nave Born`, 10, 20);

    }


}
