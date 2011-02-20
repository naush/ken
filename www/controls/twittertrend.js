mobl.provides('controls.twittertrend');

controls.twittertrend.search = function(query, callback, screenCallback) {
var root230 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp319 = mobl.ref(null);

var nodes163 = $("<span>");
root230.append(nodes163);
subs__.addSub((ui.header)(query, tmp319, function(_, callback) {
  var root231 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp318 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp317 = mobl.ref("Back");
  
  var nodes164 = $("<span>");
  root231.append(nodes164);
  subs__.addSub((ui.backButton)(tmp317, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp318, function(_, callback) {
    var root232 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root232); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes164;
    nodes164 = node.contents();
    oldNodes.replaceWith(nodes164);
  }));
  callback(root231); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes163;
  nodes163 = node.contents();
  oldNodes.replaceWith(nodes163);
}));

var results = mobl.ref(null);

services.twitter.Twitter.search(query.get(), function(result__) {
  var tmp338 = result__;
  var result__ = tmp338;
  results.set(result__);
  
});
var nodes165 = $("<span>");
root230.append(nodes165);
subs__.addSub((ui.whenLoaded)(results, function(_, callback) {
  var root233 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node60 = mobl.loadingSpan();
  root233.append(node60);
  var list20;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList20 = function() {
    var subs__ = listSubs__;
    list20 = results.get();
    list20.list(function(results42) {
      node60.empty();
      for(var i20 = 0; i20 < results42.length; i20++) {
        (function() {
          var iternode20 = $("<span>");
          node60.append(iternode20);
          var tweet;
          tweet = mobl.ref(mobl.ref(results42), i20);
          
          var tmp332 = mobl.ref(null);
          
          
          var tmp331 = mobl.ref(null);
          
          var nodes166 = $("<span>");
          iternode20.append(nodes166);
          subs__.addSub((ui.block)(mobl.ref(ui.tweetStyle), tmp331, tmp332, function(_, callback) {
            var root234 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp325 = mobl.ref(null);
            
            
            var tmp324 = mobl.ref(null);
            
            
            var tmp323 = mobl.ref(null);
            
            
            var tmp322 = mobl.ref(null);
            
            
            var tmp321 = mobl.ref(null);
            
            var nodes167 = $("<span>");
            root234.append(nodes167);
            subs__.addSub((ui.image)(mobl.ref(tweet, 'profile_image_url'), tmp321, tmp322, tmp323, mobl.ref(ui.tweetIconStyle), tmp324, tmp325, function(_, callback) {
              var root235 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root235); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes167;
              nodes167 = node.contents();
              oldNodes.replaceWith(nodes167);
            }));
            
            var node61 = $("<b>");
            
            
            var tmp327 = mobl.ref(null);
            
            
            var tmp326 = mobl.ref(null);
            
            var nodes169 = $("<span>");
            node61.append(nodes169);
            subs__.addSub((mobl.label)(mobl.ref(tweet, 'from_user'), tmp326, tmp327, function(_, callback) {
              var root237 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root237); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes169;
              nodes169 = node.contents();
              oldNodes.replaceWith(nodes169);
            }));
            
            node61.append(": ");
            root234.append(node61);
            
            var tmp329 = mobl.ref(null);
            
            
            var tmp328 = mobl.ref(null);
            
            var nodes168 = $("<span>");
            root234.append(nodes168);
            subs__.addSub((mobl.label)(mobl.ref(tweet, 'text'), tmp328, tmp329, function(_, callback) {
              var root236 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root236); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes168;
              nodes168 = node.contents();
              oldNodes.replaceWith(nodes168);
            }));
            callback(root234); return subs__;
            
            
            
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes166;
            nodes166 = node.contents();
            oldNodes.replaceWith(nodes166);
          }));
          
          var oldNodes = iternode20;
          iternode20 = iternode20.contents();
          oldNodes.replaceWith(iternode20);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list20.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
      subs__.addSub(results.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
    });
  };
  renderList20();
  
  callback(root233); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes165;
  nodes165 = node.contents();
  oldNodes.replaceWith(nodes165);
}));
callback(root230); return subs__;



return subs__;
};

controls.twittertrend.twitterTrend = function(elements, callback) {
var root238 = $("<span>");
var subs__ = new mobl.CompSubscription();

var trends = mobl.ref(null);

services.twitter.Twitter.trends(function(result__) {
  var tmp339 = result__;
  var result__ = tmp339;
  trends.set(result__);
  
});
var nodes170 = $("<span>");
root238.append(nodes170);
subs__.addSub((ui.whenLoaded)(trends, function(_, callback) {
  var root239 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes171 = $("<span>");
  root239.append(nodes171);
  subs__.addSub((ui.group)(function(_, callback) {
    var root240 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node62 = mobl.loadingSpan();
    root240.append(node62);
    var list21;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList21 = function() {
      var subs__ = listSubs__;
      list21 = trends.get();
      list21.list(function(results43) {
        node62.empty();
        for(var i21 = 0; i21 < results43.length; i21++) {
          (function() {
            var iternode21 = $("<span>");
            node62.append(iternode21);
            var topic;
            topic = mobl.ref(mobl.ref(results43), i21);
            
            var tmp335 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('controls.twittertrend.search', [mobl.ref(topic, 'name')], function(result__) {
                                 var tmp340 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp337 = mobl.ref(false);
            
            
            var tmp336 = mobl.ref(null);
            
            var nodes172 = $("<span>");
            iternode21.append(nodes172);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp335, tmp336, tmp337, function(_, callback) {
              var root241 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp334 = mobl.ref(null);
              
              
              var tmp333 = mobl.ref(null);
              
              var nodes173 = $("<span>");
              root241.append(nodes173);
              subs__.addSub((mobl.label)(mobl.ref(topic, 'name'), tmp333, tmp334, function(_, callback) {
                var root242 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root242); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes173;
                nodes173 = node.contents();
                oldNodes.replaceWith(nodes173);
              }));
              callback(root241); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes172;
              nodes172 = node.contents();
              oldNodes.replaceWith(nodes172);
            }));
            
            var oldNodes = iternode21;
            iternode21 = iternode21.contents();
            oldNodes.replaceWith(iternode21);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list21.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
        subs__.addSub(trends.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
      });
    };
    renderList21();
    
    callback(root240); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes171;
    nodes171 = node.contents();
    oldNodes.replaceWith(nodes171);
  }));
  callback(root239); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes170;
  nodes170 = node.contents();
  oldNodes.replaceWith(nodes170);
}));
callback(root238); return subs__;


return subs__;
};
