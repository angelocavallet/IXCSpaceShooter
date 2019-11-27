class NaveBorn extends GameComponent {

    constructor(options) {
        super(options);
        this.velocidade = options.velocidade || 10;
        this.controller = null;
        this.ultimoTiro = new Date();
        this.tempoEntreTiros = 300;
    }

    setController(controller) {
        this.controller = controller;
    }

    update() {

        this.resolveControles();
        this.render();

        return this.ativo;
    }

    resolveControles() {

        if (this.controller.up && (this.centroY -this.velocidade > 0)) {
            this.y -= this.velocidade;
        }
        if (this.controller.down && (this.centroY +this.velocidade < this.fase.game.canvas.height)) {
            this.y += this.velocidade;
        }
        if (this.controller.left && (this.centroX -this.velocidade > 0)) {
            this.x -= this.velocidade;
        }
        if (this.controller.right && (this.centroX +this.velocidade < this.fase.game.canvas.width)) {
            this.x += this.velocidade;
        }
        if (this.controller.atira && this.podeAtirar()) {
            this.atirar();
        }

    }

    podeAtirar() {
        return ((new Date()).getTime() - this.ultimoTiro.getTime()) > this.tempoEntreTiros;
    }

    atirar() {

        this.ultimoTiro = new Date();

        let tiro = new Bala({
            context: this.context,
            width: 5,
            height: 5,
            sentido: 'norte',
            tipo: 'tiroBorn',
            x: this.centroX,
            y: this.y
        });

        this.fase.addElemento(tiro);



    }

    render() {

        this.context.fillStyle = 'yellow';
        //renderizando ponta da nave Borne
        this.context.beginPath();
        this.context.lineTo(this.centroX, this.y);
        this.context.lineTo(this.centroX + (this.width * 0.3), this.y + (this.height * 0.4));
        this.context.lineTo(this.centroX - (this.width * 0.3), this.y + (this.height * 0.4));
        this.context.closePath();
        this.context.fill();


        this.context.fillStyle = 'red';
        //renderizando corpo
        this.context.fillRect(
            this.centroX - (this.width * 0.3),
            this.y + (this.height * 0.4),
            this.width * 0.6,
            this.height * 0.8);


        this.context.fillStyle = 'green';
        //renderizando braco esquerdo
        this.context.fillRect(
            this.centroX - (this.width * 0.6),
            this.centroY + (this.height * 0.4),
            this.width * 0.3,
            this.height * 0.2);

        //renderizando braco direito
        this.context.fillRect(
            this.centroX + (this.width * 0.3),
            this.centroY + (this.height * 0.4),
            this.width * 0.3,
            this.height * 0.2);

        this.context.fillStyle = 'red';
        //renderizando arma esquerda
        this.context.fillRect(
            this.centroX -this.width,
            this.centroY +(this.height * 0.3),
            this.width * 0.4,
            this.height * 0.5);

        //renderizando arma direita
        this.context.fillRect(
            this.centroX + (this.width * 0.6),
            this.centroY +(this.height * 0.3),
            this.width * 0.4,
            this.height * 0.5);

    }

}