import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <h1>Posts</h1>
        <ul>
            <li><a href='/posts/comment-devenir-intelligent' data-link>Comment devenir intelligent ?</a></li>
            <li><a href='/posts/cest-quoi-la-cryptomonnaie' data-link>C\'est quoi la crypto-monnaie ?</a></li>
            <li><a href='/posts/vendre-sur-les-medias' data-link>Vendre sur les medias sociaux.</a></li>
        </ul>
        `;
    }
}