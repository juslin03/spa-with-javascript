import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Oops!");
    }

    async getHtml() {
        return `
        <h1>Désolé, contenu introuvable</h1>
        <p>Cliquez <a href='/' data-link>ici</a> pour aller a la page d'accueil</p>
        `;
    }
}