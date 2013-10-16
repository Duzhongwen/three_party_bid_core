function init_activity_database(){
    localStorage.activity_id_generator = "0";
    localStorage.current_activity = "";
    localStorage.actity_ids = [];
    localStorage.activities = {};
}


function init_first_activity() {
    localStorage.activity_id_generator = 1;
    var activities = JSON.parse(localStorage.activities);
    var activity_ids = JSON.parse(localStorage.actity_ids);
    var activity = {
        id: "1",
        name: "test",
        sign_ups:[],
        bids:[]

    }
    activities["1"] = activity;
    activity_ids.push(activity_ids);
    localStorage.activities = activities;
}


function init_biddings(){
    localStorage.biddings = {};
}