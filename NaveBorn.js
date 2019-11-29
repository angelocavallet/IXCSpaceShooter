class NaveBorn extends GameComponent {

    constructor(options) {
        super(options);
        this.velocidade = options.velocidade || 5;
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

        let posGrdSombreadoX = this.centroX + (this.width * 0.06);
        let posGrdSombreadoY = this.centroY - (this.height * 0.06);

        //renderizando corpo
        let grdCorpo = this.context.createRadialGradient(
            posGrdSombreadoX,
            posGrdSombreadoY,
            (this.width * 0.5),
            posGrdSombreadoX,
            posGrdSombreadoY,
            (this.width * 0.9));
        grdCorpo.addColorStop(0,'#7c7977');
        grdCorpo.addColorStop(0.5,'#5e5b59');
        grdCorpo.addColorStop(1,'#343434');
        this.context.fillStyle = grdCorpo;
        this.context.beginPath();
        this.context.arc(this.centroX, this.centroY, this.width,0, 2 * Math.PI);
        this.context.fill();


        //renderizando corpo
        let grdCabine = this.context.createRadialGradient(
            posGrdSombreadoX,
            posGrdSombreadoY,
            (this.width * 0.2),
            posGrdSombreadoX,
            posGrdSombreadoY,
            (this.width * 0.4));
        grdCabine.addColorStop(0,'#00c2ff');
        grdCabine.addColorStop(0.5,'#0071bc');
        grdCabine.addColorStop(1,'#001985');
        this.context.fillStyle = grdCabine;
        this.context.beginPath();
        this.context.arc(this.centroX, this.centroY, (this.width * 0.5),0, 2 * Math.PI);
        this.context.fill();
    }

}