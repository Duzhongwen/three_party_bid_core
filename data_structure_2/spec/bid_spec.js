describe("Bidding", function() {


    beforeEach(function() {
        init_activity_database();
        init_first_activity();
        localStorage.is_bidding = "";
    });

    afterEach(function(){
        localStorage.clear();
    })

    it("should bid successfully when it is bidding", function(){

    });

    it("should bid failed when it is not on bidding", function(){

    });

    it("should bid failed when user didn't sign up", function(){

    });

    it("should show minimum bidding", function(){

    });

    it("should show third minimum bidding as first when actual first and two is same", function(){

    });

});