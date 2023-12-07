import AbstractView from "./AbstractView";

export default class  extends AbstractView {
    constructor() {
        super();
        this.setTitle("Services");
    }

    async getHtml() {
        return `
            <h1>Services</h1>
            <p>
             Dedicated space or programs designed to cultivate empathy and understanding among individuals towards the challenges faced by people with disabilities in using technology and interacting with various environments
            </p>
            <h2>Empathy Lab days and workshops </h2>
            <p>
                The lab days and workshops typically provide hands-on experiences, simulations, and interactions with assistive technologies, tools, and scenarios that replicate the obstacles individuals with disabilities encounter daily.
            </p>
            <h2>Inspirational speakers</h2>
            <p>
            Invite a speaker with disabilities to take share their unique journey. This captivating addition to your upcoming event will offer insights that resonate, inspire, educate, and enrich your team collective understanding of inclusion. 
            </p>
        `;
    }
}