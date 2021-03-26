import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1>Parametres</h1>
        <p>
            Contactez l'administrateur pour toutes modifications liees a votre compte
        </p>
        <p>
            <a href="/" data-link>Retour</a>.
        </p>
        `;
    }
}