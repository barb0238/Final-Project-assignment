import Home from "./Home.js";
import Services from "./Services.js";


const router = async () => {
    const routes =[
        {path: "/", view: Home},
        {path: "/services", view: Services},
        {path: "/scheduleacall", view:  () => console.log("schedule")}
    ];

    // Testing each route until it finds a match
    const testMatches = routes.map(route => {
        return{
            route: route,
            result: location.pathname === route.path
        };
    });

    let match = testMatches.find(testMatch => testMatch.result);

    if (!match) {
        match = {
            route: { path: "/", view: Home },
            result: true
        };
    }

    const view = new match.route.view();
    
    document.querySelector("#app").innerHTML = await view.getHtml();
}


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

//ensures router() is called when there is a change in browser history,
//allows app to update its state and content based on URL, prevents a full page reload
window.addEventListener("popstate", router);

// waits for the doc to be loaded then executes callback function
document.addEventListener("DOMContentLoaded", () =>{
    document.body.addEventListener("click", event =>{
        //checks if the clicked element has data-link attrib, if yes, means 
        //its a link that will be handled by the client side routing (necessary for SPA)
        if (event.target.matches("[data-link]")) {
            //prevents the default action (clicked link navigating to new page)
            event.preventDefault();
            //updates the URL using history API and triggers client side routing
            navigateTo(event.target.href);
        }
    });

    //this router call initializes app based on current URL
    router();
})