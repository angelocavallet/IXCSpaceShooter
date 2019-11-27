window.onload = function () {

    let game = new Game({
        target: document.getElementById('gameTarget'),
        fps: 60
    });

    let fase = new Missao();

    game.load(fase);

    game.start();

};
