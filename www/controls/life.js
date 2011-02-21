mobl.provides('controls.life');
controls.life.events = mobl.ref([]);
controls.life.defaults = mobl.ref([]);
controls.life.cb = function(check, name) {
   var __this = this;
  return function(event, callback) {
           if(event && event.stopPropagation) event.stopPropagation();
           var result__ = check;
           if(result__) {
             var result__ = controls.life.events.get().push(name);
             if(callback && callback.apply) callback(); return;
           } else {
             {
               var result__ = controls.life.events.get().remove(name);
               if(callback && callback.apply) callback(); return;
             }
           }
         };
};


controls.life.lifeScreen = function(callback, screenCallback) {
var root6429 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes5034 = $("<span>");
root6429.append(nodes5034);
subs__.addSub((controls.life.lifeForm)(function(_, callback) {
  var root6430 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6430); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5034;
  nodes5034 = node.contents();
  oldNodes.replaceWith(nodes5034);
}));
callback(root6429); return subs__;

return subs__;
};

controls.life.lifeForm = function(elements, callback) {
var root6431 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes5035 = $("<span>");
root6431.append(nodes5035);
subs__.addSub((ui.group)(function(_, callback) {
  var root6432 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1712 = mobl.loadingSpan();
  root6432.append(node1712);
  var list355;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList355 = function() {
    var subs__ = listSubs__;
    list355 = controls.life.defaults.get();
    list355.list(function(results391) {
      node1712.empty();
      for(var i360 = 0; i360 < results391.length; i360++) {
        (function() {
          var iternode355 = $("<span>");
          node1712.append(iternode355);
          var check;var event;
          check = mobl.ref(mobl.ref(mobl.ref(results391), i360), "_1");event = mobl.ref(mobl.ref(mobl.ref(results391), i360), "_2");
          
          var tmp11712 = mobl.ref(false);
          
          
          var tmp11711 = mobl.ref(null);
          
          
          var tmp11710 = mobl.ref(null);
          
          var nodes5036 = $("<span>");
          iternode355.append(nodes5036);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11710, tmp11711, tmp11712, function(_, callback) {
            var root6433 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp11709 = mobl.ref(controls.life.cb(check.get(), event.get()));
            subs__.addSub(check.addEventListener('change', function() {
              tmp11709.set(controls.life.cb(check.get(), event.get()));
            }));
            subs__.addSub(event.addEventListener('change', function() {
              tmp11709.set(controls.life.cb(check.get(), event.get()));
            }));
            
            var nodes5037 = $("<span>");
            root6433.append(nodes5037);
            subs__.addSub((ui.checkBox)(check, event, tmp11709, function(_, callback) {
              var root6434 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6434); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5037;
              nodes5037 = node.contents();
              oldNodes.replaceWith(nodes5037);
            }));
            callback(root6433); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes5036;
            nodes5036 = node.contents();
            oldNodes.replaceWith(nodes5036);
          }));
          
          var oldNodes = iternode355;
          iternode355 = iternode355.contents();
          oldNodes.replaceWith(iternode355);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list355.addEventListener('change', function() { listSubs__.unsubscribe(); renderList355(true); }));
      subs__.addSub(controls.life.defaults.addEventListener('change', function() { listSubs__.unsubscribe(); renderList355(true); }));
    });
  };
  renderList355();
  
  
  var tmp11714 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.life.events.get();
                       controls.life.events.get().list(function(coll1058) {
                         coll1058 = coll1058.reverse();
                         function processOne201() {
                           var event;
                           event = coll1058.pop();
                           var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event, 'date': mobl.now()}));
                           
                           if(coll1058.length > 0) processOne201(); else rest201();
                           
                         }
                         function rest201() {
                           var result__ = controls.life.events.get().length > 0;
                           if(result__) {
                             var result__ = mobl.notify.notify("Events saved!", "Notification");
                             var result__ = 0;
                             controls.life.events.get().length = result__;
                             mobl.call('controls.life.lifeScreen', [], function(result__) {
                             var tmp11716 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           } else {
                             {
                               var result__ = mobl.notify.notify("Please select at least one event.", "Notification");
                               if(callback && callback.apply) callback(); return;
                             }
                           }
                         }
                         if(coll1058.length > 0) processOne201(); else rest201();
                       });
                       
                     });
  
  
  var tmp11713 = mobl.ref("Save");
  
  var nodes5038 = $("<span>");
  root6432.append(nodes5038);
  subs__.addSub((ui.button)(tmp11713, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11714, function(_, callback) {
    var root6435 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6435); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5038;
    nodes5038 = node.contents();
    oldNodes.replaceWith(nodes5038);
  }));
  callback(root6432); return subs__;
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes5035;
  nodes5035 = node.contents();
  oldNodes.replaceWith(nodes5035);
}));
callback(root6431); return subs__;

return subs__;
};

controls.life.life = function(elements, callback) {
var root6436 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes5039 = $("<span>");
root6436.append(nodes5039);
subs__.addSub((controls.life.lifeForm)(function(_, callback) {
  var root6437 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6437); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5039;
  nodes5039 = node.contents();
  oldNodes.replaceWith(nodes5039);
}));
callback(root6436); return subs__;

return subs__;
};
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Marriage"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Divorce"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Death of a spouse"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Injury or illness"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Going back to school"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Change in residence"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Mortgage or loan"));
