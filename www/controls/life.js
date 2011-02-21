mobl.provides('controls.life');
controls.life.events = mobl.ref([]);
controls.life.loadPresets = function() {
   var __this = this;
  var presets = [];
  
  presets.push(new mobl.Tuple(false, "Marriage"));
  presets.push(new mobl.Tuple(false, "Divorce"));
  presets.push(new mobl.Tuple(false, "Death of a spouse"));
  presets.push(new mobl.Tuple(false, "Injury or illness"));
  presets.push(new mobl.Tuple(false, "Going back to school"));
  presets.push(new mobl.Tuple(false, "Change in residence"));
  presets.push(new mobl.Tuple(false, "Mortgage or loan"));
  return presets;
};

controls.life.cb = function(check, name) {
   var __this = this;
  return function(event, callback) {
           if(event && event.stopPropagation) event.stopPropagation();
           var result__ = check ? controls.life.events.get().push(name) : controls.life.events.get().remove(name);
           if(callback && callback.apply) callback(); return;
         };
};


controls.life.lifeScreen = function(callback, screenCallback) {
var root6555 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp11842 = mobl.ref(controls.life.loadPresets());

var nodes5118 = $("<span>");
root6555.append(nodes5118);
subs__.addSub((controls.life.lifeForm)(tmp11842, function(_, callback) {
  var root6556 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6556); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5118;
  nodes5118 = node.contents();
  oldNodes.replaceWith(nodes5118);
}));
callback(root6555); return subs__;

return subs__;
};

controls.life.lifeForm = function(presets, elements, callback) {
var root6557 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes5119 = $("<span>");
root6557.append(nodes5119);
subs__.addSub((ui.group)(function(_, callback) {
  var root6558 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1725 = mobl.loadingSpan();
  root6558.append(node1725);
  var list368;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList368 = function() {
    var subs__ = listSubs__;
    list368 = presets.get();
    list368.list(function(results404) {
      node1725.empty();
      for(var i373 = 0; i373 < results404.length; i373++) {
        (function() {
          var iternode368 = $("<span>");
          node1725.append(iternode368);
          var check;var name;
          check = mobl.ref(mobl.ref(mobl.ref(results404), i373), "_1");name = mobl.ref(mobl.ref(mobl.ref(results404), i373), "_2");
          
          var tmp11846 = mobl.ref(false);
          
          
          var tmp11845 = mobl.ref(null);
          
          
          var tmp11844 = mobl.ref(null);
          
          var nodes5120 = $("<span>");
          iternode368.append(nodes5120);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11844, tmp11845, tmp11846, function(_, callback) {
            var root6559 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp11843 = mobl.ref(controls.life.cb(check.get(), name.get()));
            subs__.addSub(check.addEventListener('change', function() {
              tmp11843.set(controls.life.cb(check.get(), name.get()));
            }));
            subs__.addSub(name.addEventListener('change', function() {
              tmp11843.set(controls.life.cb(check.get(), name.get()));
            }));
            
            var nodes5121 = $("<span>");
            root6559.append(nodes5121);
            subs__.addSub((ui.checkBox)(check, name, tmp11843, function(_, callback) {
              var root6560 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6560); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5121;
              nodes5121 = node.contents();
              oldNodes.replaceWith(nodes5121);
            }));
            callback(root6559); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes5120;
            nodes5120 = node.contents();
            oldNodes.replaceWith(nodes5120);
          }));
          
          var oldNodes = iternode368;
          iternode368 = iternode368.contents();
          oldNodes.replaceWith(iternode368);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list368.addEventListener('change', function() { listSubs__.unsubscribe(); renderList368(true); }));
      subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList368(true); }));
    });
  };
  renderList368();
  
  
  var tmp11848 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.life.events.get();
                       controls.life.events.get().list(function(coll1071) {
                         coll1071 = coll1071.reverse();
                         function processOne214() {
                           var event;
                           event = coll1071.pop();
                           var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event, 'date': mobl.now()}));
                           
                           if(coll1071.length > 0) processOne214(); else rest214();
                           
                         }
                         function rest214() {
                           var result__ = controls.life.events.get().length > 0;
                           if(result__) {
                             var result__ = mobl.notify.notify("Events saved!", "Notification");
                             var result__ = 0;
                             controls.life.events.get().length = result__;
                             mobl.call('controls.life.lifeScreen', [], function(result__) {
                             var tmp11851 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           } else {
                             {
                               var result__ = mobl.notify.notify("Please select at least one event.", "Notification");
                               if(callback && callback.apply) callback(); return;
                             }
                           }
                         }
                         if(coll1071.length > 0) processOne214(); else rest214();
                       });
                       
                     });
  
  
  var tmp11847 = mobl.ref("Save");
  
  var nodes5122 = $("<span>");
  root6558.append(nodes5122);
  subs__.addSub((ui.button)(tmp11847, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11848, function(_, callback) {
    var root6561 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6561); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5122;
    nodes5122 = node.contents();
    oldNodes.replaceWith(nodes5122);
  }));
  callback(root6558); return subs__;
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes5119;
  nodes5119 = node.contents();
  oldNodes.replaceWith(nodes5119);
}));
callback(root6557); return subs__;

return subs__;
};

controls.life.life = function(elements, callback) {
var root6562 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp11849 = mobl.ref(controls.life.loadPresets());

var nodes5123 = $("<span>");
root6562.append(nodes5123);
subs__.addSub((controls.life.lifeForm)(tmp11849, function(_, callback) {
  var root6563 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6563); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5123;
  nodes5123 = node.contents();
  oldNodes.replaceWith(nodes5123);
}));
callback(root6562); return subs__;

return subs__;
};
