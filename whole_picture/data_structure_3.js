activity_id_generator = "1"
current_activity_id = "1";
is_bidding = "true";
is_signing_up = "false";
current_bid = "竞价2";
activities = [
    {
        id:"0",
        name: "first activity"
    },
    {
        id:"1",
        name: "second activity"
    }
];

sign_ups = [
    {
        name:"仝键",
        phone:"13600000000",
        activity_id:"0"
    },
    {
        name:"于硕",
        phone:"15600000000",
        activity_id:"0"
    },
    {
        name:"吴京川",
        phone:"13800000000",
        activity_id:"0"
    },
    {
        name:"仝",
        phone:"13600000000",
        activity_id:"1"
    },
    {
        name:"于",
        phone:"15600000000",
        activity_id:"1"
    },
    {
        name:"吴",
        phone:"13800000000",
        activity_id:"1"
    }
]

bids = [
    {
        name: "竞价1",
        activity_id:"0",
        biddings:[
            {
                name: "仝键",
                price: "9"

            },
            {
                name: "于硕",
                price: "10"
            }
        ]
    },
    {
        name: "竞价1",
        activity_id:"1",
        biddings:[
            {
                name: "仝",
                price: "12"

            },
            {
                name: "于",
                price: "10"
            }
        ]

    },
    {
        name: "竞价2",
        activity_id:"1",
        biddings:[
            {
                name: "仝",
                price: "10"

            },
            {
                name: "于",
                price: "12"
            },
            {
                name: "吴",
                price: "10"
            }
        ]

    }
];