
class EditorFusoes {

    constructor (config) {
        this.target = config.target;

        this.canvas = document.createElement("canvas");
        this.target.appendChild(this.canvas);

        this.canvas.width = this.target.offsetWidth;
        this.canvas.height = this.target.offsetHeight;

        this.context = this.canvas.getContext("2d");
    }

    load (container) {
        this.container = container;
        this.container.editorFusoes = this;
        this.container.load();
    }

    clear () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}
