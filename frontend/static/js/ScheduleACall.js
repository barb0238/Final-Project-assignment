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

            <input id="toggleSwitch" type="image" src="../static/images/yestoggle.png" height="50" alt="toggle switch"><br>
            <a href="https://www.freepik.com/free-vector/realistic-buttons-pack_15365518.htm#query=switch%20button&position=0&from_view=keyword&track=ais&uuid=29d71e9c-a075-46b4-be03-accc0baded87">Image by coolvector</a> on Freepik <br><br>
            <button id="scheduleCallButton">Schedule a call</button>
        `;
    }

    afterRender(){
        const submitArea = document.getElementById("submitMessageArea");
        const scheduleButton = document.getElementById("scheduleCallButton");

        scheduleButton.addEventListener("click", () => {
            submitArea.innerHTML = "Thank you for scheduling a call!";
        });

        const toggleSwitch = document.getElementById('toggleSwitch');
        const yesToggleImage = "../static/images/yestoggle.png";
        const noToggleImage = "../static/images/notoggle.png";
        let yesToggled = true;

        toggleSwitch.addEventListener('click', () => {
            if(yesToggled){
                toggleSwitch.src = noToggleImage;
            } else {
                toggleSwitch.src = yesToggleImage;
            }
            yesToggled = !yesToggled;
        })
        
    }
}