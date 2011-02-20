mobl.provides('twitter');

twitter.Twitter = {
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
        var result = mobl.dummyMapper(data, callback);
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
        var result = mobl.dummyMapper(data, callback);
        if(result !== undefined) {
          callback(result);
        }
     }
  });
}

};
