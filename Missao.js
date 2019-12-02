class Missao extends Fase {

    load(nivel) {

        this.player = new NaveBorn({
            fase: this,
            context: this.game.context,
            width: 100,
            height: 100,
            tipo: 'naveBorn',
            img: document.getElementById('bornImg'),
            x: this.game.canvas.width / 2,
            y: this.game.canvas.height / 1.4
        });

        this.player.setController(new KeyboardController(window));
        this.player.controller.bind();

        this.addElemento(this.player);

        this.inimigos = [];
        this.inimigos.push( document.getElementById('doryImg'));

        this.criaOnda(nivel);
    }

    criaOnda(nivel) {

        let qtdInimigos = Math.ceil(nivel + (nivel * 1.5));
        let altura = 100;
        let largura = 100;
        for (let i=0; i < qtdInimigos; i++) {

            let pos = this.getMelhorPosicao(qtdInimigos, i, largura, altura);

            let inimigo = new NavePeixe({
                fase: this,
                context: this.game.context,
                width: largura,
                height: altura,
                tipo: 'navePeixe',
                img: this.inimigos[0],
                x: pos.x,
                y: pos.y
            });

            this.addElemento(inimigo);
        }
    }

    getMelhorPosicao(qtdInimigos, i, largura, altura) {

        let margem = 10;
        let largMax = this.game.canvas.width;
        // let altMax = this.game.canvas.height - this.player.height - margem;

        let qtdMaxColuna = Math.floor(largMax / (largura + margem));
        // let qtdMaxLinha = Math.floor(altMax / (altura + margem));

        let minhaLinha = Math.floor(i / qtdMaxColuna);
        let minhaColuna = Math.abs((minhaLinha * qtdMaxColuna) - i);

        let ultimaLinha = Math.floor(qtdInimigos/ qtdMaxColuna);

        let offsetX = 0;

        if(minhaLinha >= ultimaLinha) {
            offsetX = Math.abs(Math.abs(((ultimaLinha * qtdMaxColuna) - qtdInimigos) * (largura + margem)) - largMax) / 2;

        } else {
            offsetX = Math.abs((qtdMaxColuna * (largura + margem)) - largMax) / 2;
        }



        return {
            x: ((largura + margem) * minhaColuna) + offsetX,
            y: (altura + margem) * -minhaLinha
        }
    }

    update() {
        super.update();

        this.game.context.fillStyle = `white`;

        this.game.context.font = "normal 14pt ubuntu";
        this.game.context.fillText(`Utilize espaco para atirar e as setas para mover a Nave Born`,
            10, this.game.canvas.height - 10);

    }


}
