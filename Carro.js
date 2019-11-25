class Carro extends GameComponent {

    constructor () {
        super();
        this.controller = null;
    }

    setController(controller) {
        this.controller = controller;
    }

    update() {

        //Desenha o corpo do carro
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);

        return this.ativo;
    }

}