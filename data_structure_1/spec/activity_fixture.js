function init_activity_database(){
    localStorage.current_activity = "";
    localStorage.activities = [];
}

function init_first_activity() {
    var activities = JSON.parse(localStorage.activities);
    var activity = {
        name: "test",
        sign_ups: [],
        bids: []
    }
    activities.push(activity);
    localStorage.activities = JSON.stringify(activities);
}



