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


controls.life.life = function(elements, callback) {
var root5729 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes4571 = $("<span>");
root5729.append(nodes4571);
subs__.addSub((ui.group)(function(_, callback) {
  var root5730 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1381 = mobl.loadingSpan();
  root5730.append(node1381);
  var list285;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList285 = function() {
    var subs__ = listSubs__;
    list285 = controls.life.defaults.get();
    list285.list(function(results321) {
      node1381.empty();
      for(var i290 = 0; i290 < results321.length; i290++) {
        (function() {
          var iternode285 = $("<span>");
          node1381.append(iternode285);
          var check;var event;
          check = mobl.ref(mobl.ref(mobl.ref(results321), i290), "_1");event = mobl.ref(mobl.ref(mobl.ref(results321), i290), "_2");
          
          var tmp10973 = mobl.ref(false);
          
          
          var tmp10972 = mobl.ref(null);
          
          
          var tmp10971 = mobl.ref(null);
          
          var nodes4572 = $("<span>");
          iternode285.append(nodes4572);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10971, tmp10972, tmp10973, function(_, callback) {
            var root5731 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp10970 = mobl.ref(controls.life.cb(check.get(), event.get()));
            subs__.addSub(check.addEventListener('change', function() {
              tmp10970.set(controls.life.cb(check.get(), event.get()));
            }));
            subs__.addSub(event.addEventListener('change', function() {
              tmp10970.set(controls.life.cb(check.get(), event.get()));
            }));
            
            var nodes4573 = $("<span>");
            root5731.append(nodes4573);
            subs__.addSub((ui.checkBox)(check, event, tmp10970, function(_, callback) {
              var root5732 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5732); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4573;
              nodes4573 = node.contents();
              oldNodes.replaceWith(nodes4573);
            }));
            callback(root5731); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4572;
            nodes4572 = node.contents();
            oldNodes.replaceWith(nodes4572);
          }));
          
          var oldNodes = iternode285;
          iternode285 = iternode285.contents();
          oldNodes.replaceWith(iternode285);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list285.addEventListener('change', function() { listSubs__.unsubscribe(); renderList285(true); }));
      subs__.addSub(controls.life.defaults.addEventListener('change', function() { listSubs__.unsubscribe(); renderList285(true); }));
    });
  };
  renderList285();
  
  
  var tmp10975 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.life.events.get();
                       controls.life.events.get().list(function(coll870) {
                         coll870 = coll870.reverse();
                         function processOne181() {
                           var event;
                           event = coll870.pop();
                           var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event, 'date': mobl.now()}));
                           
                           if(coll870.length > 0) processOne181(); else rest181();
                           
                         }
                         function rest181() {
                           var result__ = controls.life.events.get().length > 0;
                           if(result__) {
                             var result__ = mobl.notify.notify("Events saved!", "Notification");
                             var result__ = 0;
                             controls.life.events.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           } else {
                             {
                               var result__ = mobl.notify.notify("Please select at least one event.", "Notification");
                               if(callback && callback.apply) callback(); return;
                             }
                           }
                         }
                         if(coll870.length > 0) processOne181(); else rest181();
                       });
                       
                     });
  
  
  var tmp10974 = mobl.ref("Save");
  
  var nodes4574 = $("<span>");
  root5730.append(nodes4574);
  subs__.addSub((ui.button)(tmp10974, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10975, function(_, callback) {
    var root5733 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5733); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4574;
    nodes4574 = node.contents();
    oldNodes.replaceWith(nodes4574);
  }));
  callback(root5730); return subs__;
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4571;
  nodes4571 = node.contents();
  oldNodes.replaceWith(nodes4571);
}));
callback(root5729); return subs__;

return subs__;
};
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Marriage"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Divorce"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Death of a spouse"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Injury or illness"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Going back to school"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Change in residence"));
var result__ = controls.life.defaults.get().push(new mobl.Tuple(false, "Mortgage or loan"));
