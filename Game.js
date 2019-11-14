
class Game {

    constructor (config) {
        this.target = config.target;
        this.canvas = config.canvas;
        this.width = config.width;
        this.height = config.height;
    }

    load () {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext("2d");

        this.target.appendChild(this.canvas);
    }

    clear () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


}
