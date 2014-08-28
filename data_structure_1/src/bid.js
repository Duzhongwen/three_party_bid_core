function create_new_bid(activity){
    var activitys={
        bids:[{
            name: "竞价1",
            biddings: []
        }]
    };
    var activities=JSON.parse(localStorage['activities']||'[]');
    activities.unshift(activitys);
    localStorage.activities=JSON.stringify(activities);
}