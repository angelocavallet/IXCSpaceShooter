class GameComponent {

    constructor(options) {
        this.context = options.context;
        this.width = options.width;
        this.height = options.height;
        this.x = options.x;
        this.y = options.y;
        this.tipo = options.tipo;
        this.ativo = true;
    }

    get centroX() {
        return (this.x +(this.width/2));
    }

    get centroY() {
        return (this.y +(this.height/2));
    }

    update() {

        return this.ativo;
    }

}