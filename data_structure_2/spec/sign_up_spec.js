describe("SignUp", function() {


    beforeEach(function() {
        init_activity_database();
        init_first_activity();
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