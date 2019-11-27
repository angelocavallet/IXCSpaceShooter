class Bala extends GameComponent {

    constructor(options) {
        super(options);
        this.velocidade = options.velocidade || 10;
        this.sentido = options.sentido;
    }

    update() {

        this.resolveControles();
        this.render();

        return this.ativo;
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

        this.context.fillStyle = 'white';
        //renderizando bala
        this.context.fillRect(
            this.x,
            this.y,
            this.width,
            this.height);
    }

}