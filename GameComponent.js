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

            //ta muito errado ainda kkkk
            //se for inativo ja sai fora
            if (this.fase.elementos[i].ativo &&
                //canto noroeste do objeto
                ((this.x > this.fase.elementos[i].x && this.x < this.fase.elementos[i].x + this.fase.elementos[i].width &&
                        this.y > this.fase.elementos[i].y && this.y < this.fase.elementos[i].y + this.fase.elementos[i].height) ||

                //canto nordeste
                (this.x + this.width > this.fase.elementos[i].x && this.x + this.width < this.fase.elementos[i].x + this.fase.elementos[i].width &&
                    this.y > this.fase.elementos[i].y && this.y < this.fase.elementos[i].y + this.fase.elementos[i].height) ||

                //canto sudeste
                (this.x + this.width > this.fase.elementos[i].x && this.x + this.width < this.fase.elementos[i].x + this.fase.elementos[i].width &&
                    this.y + this.height > this.fase.elementos[i].y && this.y + this.height < this.fase.elementos[i].y + this.fase.elementos[i].height) ||

                //canto sudoeste
                (this.x > this.fase.elementos[i].x && this.x < this.fase.elementos[i].x + this.fase.elementos[i].width &&
                    this.y + this.height > this.fase.elementos[i].y && this.y + this.height < this.fase.elementos[i].y + this.fase.elementos[i].height))) {

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