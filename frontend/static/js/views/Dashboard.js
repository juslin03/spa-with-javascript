import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back, Juslin</h1>
        <p>
            Faites comme chez vous ici.
        </p>
        <p>
            <a href="/posts" data-link>Voir les posts recemment ajoutés.</a>.
        </p>
        `;
    }
}