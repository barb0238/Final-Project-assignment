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
            
            <br>Fill out the form below and we will get back to you as soon as
            <br>we can to schedule a call with our sales team!
        </p>

        <form id="scheduleCallForm">
            <label for="businessName">Business Name:</label>
            <input type="text" id="businessName" name="businessName">
            <br>
            <label for="phoneNumber">Phone number 613-123-1234:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
            <br>
            <label for="email">Email (required):</label>
            <input type="email" id="email" name="email" required>
            <br>
            <br>

            <fieldset class="classborder">

                <legend class="legend"><h2>What would you like to talk about</h2></legend>
                <input type="checkbox" id="awarenessLab" name="talkAbout" value="awarenessLab">
                <label for="awarenessLab">Awareness lab days and workshops</label><br>
                <input type="checkbox" id="inviteSpeaker" name="talkAbout" value="inviteSpeaker">
                <label for="inviteSpeaker">Invite a speaker with disabilities to your event</label><br>
                <input type="checkbox" id="usabilityTesting" name="talkAbout" value="usabilityTesting">
                <label for="usabilityTesting">Usability testing</label>
            </fieldset>
            <br>

            <div id="eventDescTextArea" style="display: none;">
                    <label for="eventDescription">Please tell us about your event</label>
                    <br>
                    <textarea id="eventDescription" name="eventDescription" placeholder="text area"></textarea>
                    <br>
                </div>
            <br>
            <label for="toggleSwitch">Receive emails about updates and services:</label>
            <input id="toggleSwitch" name="toggleSwitch" type="image" src="../static/images/yestoggle.png" height="35" alt="toggle switch to recieve emails"><br>
            <a href="https://www.freepik.com/free-vector/realistic-buttons-pack_15365518.htm#query=switch%20button&position=0&from_view=keyword&track=ais&uuid=29d71e9c-a075-46b4-be03-accc0baded87">Image by coolvector</a> on Freepik <br><br>
            <br>
            <br>
            <input type="submit" id="scheduleCallButton" value="Schedule a call">
        </form>


            
        `;
    }

    afterRender(){
        
        const submitArea = document.getElementById("submitMessageArea");
        //handles the text area popup when "invite a speaker to your event" is checked
        const form = document.getElementById("scheduleCallForm");

        //prevents form submission
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            //handles the schedule a call message popup
            submitArea.innerHTML = "<h2>Thank you for scheduling a call!</h2>";
        })

        //image toggle switch functionality
        const toggleSwitch = document.getElementById('toggleSwitch');
        const yesToggleImage = "../static/images/yestoggle.png";
        const noToggleImage = "../static/images/notoggle.png";
        let yesToggled = true;

        toggleSwitch.addEventListener('click', () => {
            //when clicked, if its toggled yes, it switches image to the "no" toggle
            if(yesToggled){
                toggleSwitch.src = noToggleImage;
            } else {
                toggleSwitch.src = yesToggleImage;
            }
            yesToggled = !yesToggled;
        })

        //shows text area when invite speaker is checked
        const inviteSpeakerCheckbox = document.getElementById("inviteSpeaker");
        inviteSpeakerCheckbox.addEventListener('change', () => {
            const eventDescTextArea = document.getElementById("eventDescTextArea");
            //targets the event desc text area by manipulating the display attribute of the text area
            if (inviteSpeakerCheckbox.checked) {
                eventDescTextArea.style.display = 'block';
            } else {
                eventDescTextArea.style.display = 'none';
            }
        });
    
        
    }
}