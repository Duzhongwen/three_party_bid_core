function notify_sms_received(sms_json){
    if(localStorage.is_bidding=="true") {
        var phones = sms_json.messages[0].phone;
        var prices = sms_json.messages[0].message.substr(2, 6);
        var activity = JSON.parse(localStorage['activities'] || '[]');
        var list=_.findWhere(activity,{'name':localStorage.current_activity});
        var message= _.findWhere(list.sign_ups,{'phone':phones});
        if(message!=undefined) {
            var names = message.name;
            var lists = _.findWhere(list.bids, {'name': localStorage.current_bid});
            var juge= _.findWhere(lists.biddings,{'phone':phones});
            if(juge==undefined) {
                lists.biddings.unshift({price: prices, phone: phones, name: names});
                localStorage.activities = JSON.stringify(activity);
            }
        }
    }

    if(localStorage.is_signing_up=="true"){
        var phones = sms_json.messages[0].phone;
        var activity = JSON.parse(localStorage['activities'] || '[]');
        var list=_.findWhere(activity,{'name':localStorage.current_activity});
        var phones = sms_json.messages[0].phone;
        var name = sms_json.messages[0].message.substr(2, 6);
        var juge= _.findWhere(list.sign_ups,{'phone':phones});
        if(juge==undefined) {
            list.sign_ups.unshift({name: name, phone: phones});
            localStorage.activities = JSON.stringify(activity);
        }
    }

    if(localStorage.is_signing_up){

    }

    if(localStorage.is_bidding){

    }
}