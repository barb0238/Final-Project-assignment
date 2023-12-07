import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <style>
            body {font-family: Arial, Helvetica, sans-serif;}

            /* The Modal (background) */
            .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            }

            /* Modal Content */
            .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            }

            /* The Close Button */
            .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            }

            .close:hover,
            .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
            }
            </style>

            <h1>Welcome to Empower Ability Labs!</h1>
            <p>Empower Ability Labs is a hub for learning and empathy-building. We are on a mission to foster understanding and promote inclusive digital experiences for all. We offer a range of services designed to promote accessibility awareness, drive inclusivity, and enhance the user experience. And help you find answers on how do people with disabilities use technology and navigate the digital world? What tools do they employ?</p>
            
            <!-- Trigger/Open The Modal -->
            <button id="myBtn" type="button" onclick="afterRender()">Meet The Empower Community!</button>

            <!-- The Modal -->
            <div id="myModal" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>
                        We get an aha! moments from product managers who try our services for the first time. We offered many lab days, workshops and offered usability testing services to many companies and organizations including:
                    </p>
                    <div>
                    •	McGill University <br>
                    •	Walmart.ca          <br>
                    •	Apple.ca <br>
                    •	Google.ca <br>
                    •	Government of Canada <br>                
                    </div>
                </div>
            </div>
        `;

    }

    // Call this method after rendering the HTML content
    afterRender() {
        console.log('test')
        this.initModal();
    }

    initModal() {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
};
