class Caixa extends Container {

    constructor(config) {
        super(config);
    }


    load() {

        Ajax.loadJSON(
            'data/CaixaTeste.json',
            (json) => {
                console.log(json);
                this.render();
            },
            (request) => {
                console.log(request);
            }
        );


    }

    render() {

    }


}
