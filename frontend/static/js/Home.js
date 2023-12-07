import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Welcome to Empower Ability Labs! </h1>
            <p>
            Empower Ability Labs is a hub for learning and empathy-building.  We are on a mission to foster understanding and promote inclusive digital experiences for all. We offer a range of services designed to promote accessibility awareness, drive inclusivity, and enhance the user experience. And help you find answers on How do people with disabilities use technology and navigate the digital world? What tools do they employ?
            </p>
            <p>
            Meet the Empower Community! 
            Instruction for “Meet the Empower Community!”: 
            When activated, the Lightbox/Modal content appears
            
            </p>
        `;
    }
}