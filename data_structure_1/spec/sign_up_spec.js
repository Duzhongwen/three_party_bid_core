describe("SignUp", function() {


    beforeEach(function() {
        init_activity_database();
        var activities = JSON.parse(localStorage.activities);
        var activity = {
            name: "test",
            sign_ups: [],
            bids:[]
        }
        activities.push(activity);
        localStorage.activities = activities;
        localStorage.is_signing_up = "";
    });

    afterEach(function(){
        localStorage.clear();
    })


    it("should one sms with signing up content sign up successfully when it is signing up", function(){

    });

    it("should one sms with signing up content sign up failed when user has signed", function(){

    });

    it("should one sms with biding content bid successfully when it is bidding", function(){

    });



});