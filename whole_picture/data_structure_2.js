activity_id_generator = "1"
current_activity_id = "1";
is_bidding = "true";
is_signing_up = "false";
current_bid = "竞价2";
localStorage.actity_ids = ["0","1"];
activities = {
    "0":{
      name: "first activity",
      sign_ups:[],
      bids:[],
      biddings:{}
    },
    "1": {
        name: "second activity",
        sign_ups: [
            {
                name:"仝键",
                phone:"13600000000"
            },
            {
                name:"于硕",
                phone:"15600000000"
            },
            {
                name:"吴京川",
                phone:"13800000000"
            }
        ],
        bids:["竞价1","竞价2"],
        biddings:{
           "竞价1":[
                   {
                       name: "仝键",
                       price: "12"

                   },
                   {
                       name: "于硕",
                       price: "10"
                   }
           ],
           "竞价2": [
                {
                    name: "仝键",
                    price: "10"

                },
                {
                    name: "于硕",
                    price: "12"
                },
                {
                    name: "吴京川",
                    price: "10"
                }
           ]
        }
    }
};

