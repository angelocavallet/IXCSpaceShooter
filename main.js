(function () {
    "use strict";

    let observer = new MutationObserver(function () {
        if (document.body) {

            let game = new Game({
                target: document.getElementById('gameTarget')
            });

            let fase = new Corrida();

            game.load(fase);


            let tick = setInterval(() => {
                game.update();
            }, 16);

            observer.disconnect();
        }
    });
    observer.observe(document.documentElement, {childList: true});
})();
