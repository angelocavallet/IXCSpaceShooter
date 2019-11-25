class Game {

    constructor(config) {
        this.target = config.target;

        this.canvas = document.createElement("canvas");
        this.target.appendChild(this.canvas);

        this.canvas.width = this.target.offsetWidth;
        this.canvas.height = this.target.offsetHeight;

        this.context = this.canvas.getContext("2d");
    }

    load(fase) {
        fase.game = this;
        this.fase = fase;
        this.fase.load();

    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    update() {
        this.clear();
        this.fase.update();

        if (this.fase.terminou) {
            this.fase = this.fase.proximaFase;

        }
    }


}
