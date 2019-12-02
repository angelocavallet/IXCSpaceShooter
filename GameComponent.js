class GameComponent {

    constructor(options) {
        this.fase = options.fase;
        this.context = options.context;
        this.width = options.width;
        this.height = options.height;
        this.x = options.x;
        this.y = options.y;
        this.tipo = options.tipo;
        this.ativo = true;
    }

    get centroX() {
        return (this.x + (this.width / 2));
    }

    get centroY() {
        return (this.y + (this.height / 2));
    }

    destroy() {
        this.ativo = false;
    }

    validaColisoes() {

        for (let i = 0; i < this.fase.elementos.length; i++) {

            let minAx = this.x;
            let maxAx = this.x + this.width;
            let minAy = this.y;
            let maxAy = this.y + this.height;

            let minBx = this.fase.elementos[i].x;
            let maxBx = this.fase.elementos[i].x + this.fase.elementos[i].width;
            let minBy = this.fase.elementos[i].y;
            let maxBy = this.fase.elementos[i].y + this.fase.elementos[i].height;

            if (this.fase.elementos[i].ativo &&
                maxAx >= minBx && minAx <= maxBx && minAy <= maxBy && maxAy >= minBy) {
                this.resolveColisao(this.fase.elementos[i]);
            }
        }

    }

    resolveColisao() {
        console.error('Função "load" não implementada!');
    }

    update() {

        return this.ativo;
    }

}