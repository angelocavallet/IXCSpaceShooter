(function () {

    let game = new Game({
        target: document.getElementsByTagName("body"),
        canvas: document.createElement("canvas"),
        width: 800,
        height: 600,
    });

    let fase = new Corrida();

    game.load(fase);


    let tick = setInterval(game.update, 16);


})();
