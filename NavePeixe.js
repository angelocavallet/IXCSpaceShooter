class NavePeixe extends GameComponent {

    constructor(options) {
        super(options);
        this.velocidade = options.velocidade || 0.6;
        this.controller = null;
        this.ultimoTiro = new Date();
        this.tempoEntreTiros = 2000 + Math.floor(Math.random() * 5000);
        this.img = options.img;

        this.posXinicial = this.x;
        this.margemMovimentoX = 30;
        this.vaiPraEsquerda = true;


    }

    update() {

        this.resolveControles();
        this.render();
        this.validaColisoes();

        return this.ativo;
    }

    resolveControles() {

        if (this.posXinicial -(this.x -this.velocidade) < this.margemMovimentoX && this.vaiPraEsquerda) {
            this.x -= this.velocidade;
        } else if ((this.x +this.velocidade) -this.posXinicial < this.margemMovimentoX){
            this.x += this.velocidade;
            this.vaiPraEsquerda = false;
        } else {
            this.vaiPraEsquerda = true;
        }

        this.y += this.velocidade /10;
        if (this.podeAtirar()) {
            this.atirar();
        }

    }

    podeAtirar() {
        return ((new Date()).getTime() - this.ultimoTiro.getTime()) > this.tempoEntreTiros + Math.floor(Math.random() * 3000);
    }

    atirar() {

        this.ultimoTiro = new Date();

        let tiro = new Bala({
            fase: this.fase,
            context: this.context,
            width: 5,
            height: 5,
            velocidade: 1,
            sentido: 'sul',
            tipo: 'tiroPeixe',
            x: this.centroX,
            y: this.y + (this.height)
        });

        tiro.fase = this.fase;
        this.fase.addElemento(tiro);



    }

    render() {

        this.context.drawImage(this.img, this.x, this.y, this.width, this.height);

        // this.context.strokeStyle = 'white';
        // this.context.strokeRect(this.x, this.y, this.width, this.height);
    }

    resolveColisao(outro) {
        if (outro.tipo === 'tiroBorn') {
            outro.destroy();
            this.destroy();
        }

    }

}