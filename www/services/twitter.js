mobl.provides('services.twitter');

services.twitter.Trend = {
name: null,
url: null
};
services.twitter.trendsMapper = function(json) {
   var __this = this;
  return json.trends;
};


services.twitter.Tweet = {
profile_image_url: null,
created_at: null,
from_user: null,
text: null
};
services.twitter.tweetsMapper = function(json) {
   var __this = this;
  return json.results;
};


services.twitter.Twitter = {
trends: function(callback) {
  var url = "" + (this.root ? this.root : "") + "/_proxy/api.twitter.com/1/trends.json";
  $.ajax({
     url: url,
     dataType: "json",
     type: "GET",
     
     error: function(_, message, error) {
       console.error(message);
       console.error(error);
       callback(null);
     },
     success: function(data) {
        var result = services.twitter.trendsMapper(data, callback);
        if(result !== undefined) {
          callback(result);
        }
     }
  });
}
,
search: function(query, callback) {
  var url = "" + (this.root ? this.root : "") + "/_proxy/search.twitter.com/search.json?q=" + mobl.escape(query);
  $.ajax({
     url: url,
     dataType: "json",
     type: "GET",
     
     error: function(_, message, error) {
       console.error(message);
       console.error(error);
       callback(null);
     },
     success: function(data) {
        var result = services.twitter.tweetsMapper(data, callback);
        if(result !== undefined) {
          callback(result);
        }
     }
  });
}

};
