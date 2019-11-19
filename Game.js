
class Game {

    constructor (config) {
        this.canvas = config.canvas;
        this.canvas.width = config.width;
        this.canvas.height = config.height;
        this.context = this.canvas.getContext("2d");

        this.target = config.target;
        this.target.appendChild(this.canvas);
    }

    load (fase) {
        this.fase = fase;

    }

    clear () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    update () {
        this.clear();
        this.fase.update();

        if (this.fase.terminou) {
            this.fase = this.fase.proximaFase;

        }
    }


}
