class Carro extends GameComponent {

    constructor (options) {
        super(options);
        this.velocidade = options.velocidade || 10;
        this.controller = null;
    }

    setController(controller) {
        this.controller = controller;
    }

    update() {

        //Controlando a movimentação do carro
        if (this.controller.up) {
            this.y -= this.velocidade;
        }
        if (this.controller.down) {
            this.y += this.velocidade;
        }
        if (this.controller.left) {
            this.x -= this.velocidade;
        }
        if (this.controller.right) {
            this.x += this.velocidade;
        }

        //Desenha o corpo do carro
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);

        return this.ativo;
    }

}