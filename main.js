(function () {
    "use strict";

    let observer = new MutationObserver(function() {
        if (document.body) {



            let editorFusoes = new EditorFusoes({
                target: document.getElementsByTagName("body")[0]
            });

            let caixa = new Caixa();

            editorFusoes.load(caixa);



            observer.disconnect();
        }
    });
    observer.observe(document.documentElement, {childList: true});
})();
