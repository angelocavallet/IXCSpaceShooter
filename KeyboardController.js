class KeyboardController {

    constructor(target) {
        this.target = target;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.atira = false;

        this.onKeyDown = (event) => {
            return this.handler(event, true);
        };

        this.onKeyUp = (event) => {
            return this.handler(event, false);
        };
    }

    bind() {
        this.target.addEventListener('keyup', this.onKeyUp);
        this.target.addEventListener('keydown', this.onKeyDown);
    }

    unbind() {
        this.target.removeEventListener('keyup', this.onKeyUp);
        this.target.removeEventListener('keydown', this.onKeyDown);
    }

    reset() {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.atira = false;
    }

    handler(event, status) {
        switch (event.key) {
            case 'ArrowDown':
                this.down = status;
                break;
            case 'ArrowRight':
                this.right = status;
                break;
            case 'ArrowLeft':
                this.left = status;
                break;
            case 'ArrowUp':
                this.up = status;
                break;
            case ' ':
                this.atira = status;
                break;
            default:
                return true;
        }

        event.preventDefault();
        return false;
    }
}