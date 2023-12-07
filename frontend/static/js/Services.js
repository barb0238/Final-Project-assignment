import AbstractView from "./AbstractView";

export default class  extends AbstractView {
    constructor() {
        super();
        this.setTitle("Services");
    }

    async getHtml() {
        return `
            <h1>Services</h1>
            <div class="rightimage">
              <img src="../static/images/services.png" height="150" alt="Thumbs up"></a>
            </div>
            <p>
             Dedicated space or programs designed to cultivate empathy and understanding among individuals towards the challenges 
             faced by people with disabilities in using technology and interacting with various environments
            </p>
            
            <h2>Empathy Lab days and workshops </h2>
            <p>
                The lab days and workshops typically provide hands-on experiences, simulations, and interactions with assistive technologies, tools, and scenarios that replicate the obstacles individuals with disabilities encounter daily.
            </p>
            <h2>Inspirational speakers</h2>
            <p>
                Invite a speaker with disabilities to take share their unique journey. This captivating addition to your upcoming event will offer insights that resonate, inspire, educate, and enrich your team collective understanding of inclusion. 
            </p>
            <h2>Usability testing</h2>
            <p>
                Go beyond WCAG! Involve individuals with disabilities in usability testing to gather valuable insights for refining product strategy and identifying accessibility concerns at an early stage when solutions are more feasible and cost-effective. You have access to a diverse community of people with disabilities, who use various assistive technologies. With technical expertise ranging from novice to expert, our community can support your product lifecycle from user research, to design, to QA.
            </p>
        `;
    }
}