mobl.provides('controls.meditate');
mobl.provides('mobl');

controls.meditate.Podcast = {
  title: null,
  url: null
};

controls.meditate.QPodder = {
  search: function(query, callback) {
    var url = "" + (this.root ? this.root : "") + "http://api.twitter.com/1/trends.json";
    $.ajax({
       url: url,
       dataType: "jsonp",
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

controls.meditate.search = function(query, callback, screenCallback) {
  var root494 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.QPodder.search(query.get(), function(result__) {
    var results = mobl.ref(result__);
    
    var node125 = mobl.loadingSpan();
    root494.append(node125);
    var list44;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList44 = function() {
      var subs__ = listSubs__;
      list44 = results.get();
      list44.list(function(results292) {
        node125.empty();
        for(var i44 = 0; i44 < results292.length; i44++) {
          (function() {
            var iternode44 = $("<span>");
            node125.append(iternode44);
            var podcast;
            podcast = mobl.ref(mobl.ref(results292), i44);
            
            var tmp815 = mobl.ref(null);
            
            
            var tmp814 = mobl.ref(null);
            
            
            var tmp813 = mobl.ref(null);
            
            
            var tmp812 = mobl.ref(null);
            
            var nodes364 = $("<span>");
            iternode44.append(nodes364);
            subs__.addSub((mobl.block)(tmp812, tmp813, tmp814, tmp815, function(_, callback) {
              var root495 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp811 = mobl.ref(false);
              
              
              var tmp810 = mobl.ref(null);
              
              
              var tmp809 = mobl.ref(null);
              
              var nodes365 = $("<span>");
              root495.append(nodes365);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp809, tmp810, tmp811, function(_, callback) {
                var root496 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp806 = mobl.ref(null);
                
                
                var tmp805 = mobl.ref(null);
                
                var nodes366 = $("<span>");
                root496.append(nodes366);
                subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp805, tmp806, function(_, callback) {
                  var root497 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root497); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes366;
                  nodes366 = node.contents();
                  oldNodes.replaceWith(nodes366);
                }));
                
                var tmp808 = mobl.ref(null);
                
                
                var tmp807 = mobl.ref(null);
                
                var nodes367 = $("<span>");
                root496.append(nodes367);
                subs__.addSub((mobl.label)(mobl.ref(podcast, 'url'), tmp807, tmp808, function(_, callback) {
                  var root498 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root498); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes367;
                  nodes367 = node.contents();
                  oldNodes.replaceWith(nodes367);
                }));
                callback(root496); return subs__;
                
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes365;
                nodes365 = node.contents();
                oldNodes.replaceWith(nodes365);
              }));
              callback(root495); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes364;
              nodes364 = node.contents();
              oldNodes.replaceWith(nodes364);
            }));
            
            var oldNodes = iternode44;
            iternode44 = iternode44.contents();
            oldNodes.replaceWith(iternode44);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list44.addEventListener('change', function() { listSubs__.unsubscribe(); renderList44(true); }));
        subs__.addSub(results.addEventListener('change', function() { listSubs__.unsubscribe(); renderList44(true); }));
      });
    };
    renderList44();
    
    callback(root494); return subs__;
    
  });
  return subs__;
};

controls.meditate.meditate = function(elements, callback) {
  var root499 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var query = mobl.ref("");
  var nodes368 = $("<span>");
  root499.append(nodes368);
  subs__.addSub((ui.group)(function(_, callback) {
    var root500 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp823 = mobl.ref(false);
    
    
    var tmp822 = mobl.ref(null);
    
    
    var tmp821 = mobl.ref(null);
    
    var nodes369 = $("<span>");
    root500.append(nodes369);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp821, tmp822, tmp823, function(_, callback) {
      var root501 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp816 = mobl.ref("Search for");
      
      
      var tmp820 = mobl.ref(null);
      
      
      var tmp819 = mobl.ref(null);
      
      
      var tmp818 = mobl.ref(null);
      
      
      var tmp817 = mobl.ref(null);
      
      var nodes370 = $("<span>");
      root501.append(nodes370);
      subs__.addSub((ui.textField)(query, tmp816, tmp817, tmp818, mobl.ref(ui.textFieldStyle), mobl.ref(ui.textFieldInvalidStyle), tmp819, tmp820, function(_, callback) {
        var root502 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root502); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes370;
        nodes370 = node.contents();
        oldNodes.replaceWith(nodes370);
      }));
      callback(root501); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes369;
      nodes369 = node.contents();
      oldNodes.replaceWith(nodes369);
    }));
    
    var tmp825 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         mobl.call('controls.meditate.search', [query, mobl.ref(false), mobl.ref("slide")], function(result__) {
                         var tmp826 = result__;
                         if(callback && callback.apply) callback(); return;
                         });
                       });
    
    
    var tmp824 = mobl.ref("Search");
    
    var nodes371 = $("<span>");
    root500.append(nodes371);
    subs__.addSub((ui.button)(tmp824, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp825, function(_, callback) {
      var root503 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root503); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes371;
      nodes371 = node.contents();
      oldNodes.replaceWith(nodes371);
    }));
    callback(root500); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes368;
    nodes368 = node.contents();
    oldNodes.replaceWith(nodes368);
  }));
  callback(root499); return subs__;
  
  return subs__;
};
