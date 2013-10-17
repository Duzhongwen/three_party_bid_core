function init_activity_database(){
    localStorage.current_activity = "";
    localStorage.activities = [];
}

function init_two_activity() {
    var activities = JSON.parse(localStorage.activities);
    var two_activities = [{
        name: "first activity",
        sign_ups: [],
        bids: []
    }, {
        name: "second activity",
        sign_ups: [],
        bids: []
    }];
    activities.push(two_activities);
    localStorage.activities = JSON.stringify(activities);
    localStorage.current_activity = "second activity";
}



