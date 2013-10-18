
describe("Bid", function() {


    beforeEach(function() {
        init_activity_database();
        var activities = JSON.parse(localStorage.activities);
        var activity = {
            name: "first activity",
            sign_ups: [],
            bids: [],
            biddings: {}
        };
        activities.push(activity);
        localStorage.activities = JSON.stringify(activities);
        localStorage.current_activity = "first activity";
        localStorage.is_bidding = "";
    });

    afterEach(function(){
        localStorage.clear();
    })

    it("should create new bid", function(){
        create_new_bid("1");

        var activities = JSON.parse(localStorage.activities);
        expect(activities["1"].bids.length).toBe(1);
        expect(JSON.stringify(activities["1"].biddings["竞价1"])).toBe("[]");
    });



});