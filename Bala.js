class Bala extends GameComponent {

    constructor(options) {
        super(options);
        this.velocidade = options.velocidade || 3;
        this.sentido = options.sentido;
        this.img = options.img;
    }

    update() {

        this.resolveControles();
        this.render();
        this.limpaForaDaTela();

        return this.ativo;
    }

    limpaForaDaTela() {

        if (this.centroX < 0 || this.centroX > this.fase.game.canvas.width ||
            this.centroY < 0 || this.centroY > this.fase.game.canvas.height) {
            this.destroy();
        }

    }

    resolveControles() {

        switch(this.sentido) {

            case 'norte':
                this.y -= this.velocidade;
                break;
            case 'sul':
                this.y += this.velocidade;
                break;
            case 'leste':
                this.x -= this.velocidade;
                break;
            case 'oeste':
                this.x += this.velocidade;
                break;
        }
    }

    render() {

        if (this.img) {
            this.context.drawImage(this.img, this.x, this.y, this.width, this.height);

        } else {
            this.context.fillStyle = 'white';
            this.context.fillRect(
                this.x,
                this.y,
                this.width,
                this.height);

        }
        // this.context.strokeStyle = 'white';
        // this.context.strokeRect(this.x, this.y, this.width, this.height);
    }

}