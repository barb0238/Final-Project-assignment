import AbstractView from "./AbstractView";

export default class  extends AbstractView {
    constructor() {
        super();
        this.setTitle("Scheule A Call");
    }

    async getHtml() {
        return `
            <h1>Schedule A Call</h1>
            <p>
                At Empower Ability Labs, we are dedicated to cultivating empathy and driving positive change through immersive experiences.  Fill out the form below and we’ll get back to you as soon as we can to schedule a call with our sales team!
            </p>
            <h1>Insert form here</h1>>
        `;
    }
}