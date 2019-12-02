class GameOver extends Fase {

    load() {

        let reinicio = () => {
            this.game.load(new Missao());

            window.removeEventListener('keydown', reinicio);
        };

        window.addEventListener('keydown', reinicio);


    }


    update() {
        this.game.context.fillStyle = `white`;
        this.game.context.font = "normal 25pt ubuntu";
        this.game.context.fillText(`Voce bateu a nave`,
            (this.game.canvas.width * 0.5) -150, this.game.canvas.height * 0.5);
        this.game.context.font = "normal 16pt ubuntu";
        this.game.context.fillText(`Pressione qualquer tecla para tentar novamente`,
            (this.game.canvas.width * 0.5) -250, (this.game.canvas.height * 0.5) +100);

    }


}
