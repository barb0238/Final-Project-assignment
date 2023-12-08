import AbstractView from "./AbstractView";

export default class  extends AbstractView {
    constructor() {
        super();
        this.setTitle("Schedule A Call");
    }

    async getHtml() {
        return `
            <h1>Schedule A Call</h1>
            <div class="rightimage">
              <img src="../static/images/scheduleacall.png" height="150" alt="Scheduling a call"></a>
            </div>
            <p>
                At Empower Ability Labs, we are dedicated to cultivating empathy and driving positive change through immersive experiences.  Fill out the form below and we’ll get back to you as soon as we can to schedule a call with our sales team!
            </p>

            <div role="alert" id="submitMessageArea">

            </div>
            
            <h1>Insert form here</h1>
            <button id="scheduleCallButton">Schedule a call</button>
        `;
    }

    afterRender(){
        const submitArea = document.getElementById("submitMessageArea");
        const scheduleButton = document.getElementById("scheduleCallButton");

        scheduleButton.addEventListener("click", () => {
            submitArea.innerHTML = "testing";
        });
    }
}