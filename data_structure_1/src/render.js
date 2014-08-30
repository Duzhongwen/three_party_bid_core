function transform_bids_to_view_model(activity){
    var activitys= JSON.parse(localStorage['activities'] || '[]');
    var list=_.findWhere(activitys,{'name':activity});
    return list.bids;
}

function transform_biddings_to_view_model(activity,bid_name){
    var activitys = JSON.parse(localStorage['activities'] || '[]');
    var list=_.findWhere(activitys,{'name':activity});
    var lists= _.findWhere(list.bids,{'name':bid_name});
    var sort=_.sortBy(lists.biddings,'price');
    for(var i=0;i<sort.length-1;i++){
        if(sort[i].price!=sort[i+1].price){
            return [sort[i+1]];
        }
    }
}

function render_sign_ups(activity){
    var activitys= JSON.parse(localStorage['activities'] || '[]');
    var list=_.findWhere(activitys,{'name':activity});
    return list.sign_ups;
}