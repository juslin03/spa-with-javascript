import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Post View");
    }

    async getHtml() {
        console.log(this.params.id)
        return `
        <h1>Post Viewing</h1>
        <p>This is post view</p>
        `;
    }
}