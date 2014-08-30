function Activity(activity){
    this.activity=activity;
}

Activity.prototype.create=function() {
    var activitys={
        sign_ups:[],
        bids:[],
        name:this.activity
    };
    var activities=JSON.parse(localStorage['activities']||'[]');
    activities.unshift(activitys);
    localStorage.activities=JSON.stringify(activities);
    localStorage.current_activity = this.activity;
};

Activity.prototype.active=function(){

};