mobl.provides('controls.life');
controls.life.events = mobl.ref([]);
controls.life.loadPresets = function() {
   var __this = this;
  var presets = [];
  
  presets.push(new mobl.Tuple(false, "Christmas", 12));
  presets.push(new mobl.Tuple(false, "Vacation", 15));
  presets.push(new mobl.Tuple(false, "Change in eating habits", 15));
  presets.push(new mobl.Tuple(false, "Change in sleeping habits", 16));
  presets.push(new mobl.Tuple(false, "Change in residence", 20));
  return presets;
};

controls.life.cb = function(check, name, stress) {
   var __this = this;
  return function(event, callback) {
           if(event && event.stopPropagation) event.stopPropagation();
           var result__ = check ? controls.life.events.get().push(new mobl.Tuple(name, stress)) : controls.life.events.get().remove(new mobl.Tuple(name, stress));
           if(callback && callback.apply) callback(); return;
         };
};


controls.life.lifeForm = function(presets, elements, callback) {
var root8014 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes6105 = $("<span>");
root8014.append(nodes6105);
subs__.addSub((ui.group)(function(_, callback) {
  var root8015 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2798 = mobl.loadingSpan();
  root8015.append(node2798);
  var list524;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList524 = function() {
    var subs__ = listSubs__;
    list524 = presets.get();
    list524.list(function(results560) {
      node2798.empty();
      for(var i529 = 0; i529 < results560.length; i529++) {
        (function() {
          var iternode524 = $("<span>");
          node2798.append(iternode524);
          var check;var name;var stress;
          check = mobl.ref(mobl.ref(mobl.ref(results560), i529), "_1");name = mobl.ref(mobl.ref(mobl.ref(results560), i529), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results560), i529), "_3");
          
          var tmp13308 = mobl.ref(false);
          
          
          var tmp13307 = mobl.ref(null);
          
          
          var tmp13306 = mobl.ref(null);
          
          var nodes6106 = $("<span>");
          iternode524.append(nodes6106);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13306, tmp13307, tmp13308, function(_, callback) {
            var root8016 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp13305 = mobl.ref(controls.life.cb(check.get(), name.get(), stress.get()));
            subs__.addSub(check.addEventListener('change', function() {
              tmp13305.set(controls.life.cb(check.get(), name.get(), stress.get()));
            }));
            subs__.addSub(name.addEventListener('change', function() {
              tmp13305.set(controls.life.cb(check.get(), name.get(), stress.get()));
            }));
            subs__.addSub(stress.addEventListener('change', function() {
              tmp13305.set(controls.life.cb(check.get(), name.get(), stress.get()));
            }));
            
            var nodes6107 = $("<span>");
            root8016.append(nodes6107);
            subs__.addSub((ui.checkBox)(check, name, tmp13305, function(_, callback) {
              var root8017 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8017); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6107;
              nodes6107 = node.contents();
              oldNodes.replaceWith(nodes6107);
            }));
            callback(root8016); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6106;
            nodes6106 = node.contents();
            oldNodes.replaceWith(nodes6106);
          }));
          
          var oldNodes = iternode524;
          iternode524 = iternode524.contents();
          oldNodes.replaceWith(iternode524);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list524.addEventListener('change', function() { listSubs__.unsubscribe(); renderList524(true); }));
      subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList524(true); }));
    });
  };
  renderList524();
  
  
  var tmp13310 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.life.events.get();
                       controls.life.events.get().list(function(coll1257) {
                         coll1257 = coll1257.reverse();
                         function processOne352() {
                           var event;
                           event = coll1257.pop();
                           var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event, 'date': mobl.now()}));
                           
                           if(coll1257.length > 0) processOne352(); else rest352();
                           
                         }
                         function rest352() {
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
                         if(coll1257.length > 0) processOne352(); else rest352();
                       });
                       
                     });
  
  
  var tmp13309 = mobl.ref("Save");
  
  var nodes6108 = $("<span>");
  root8015.append(nodes6108);
  subs__.addSub((ui.button)(tmp13309, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp13310, function(_, callback) {
    var root8018 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8018); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6108;
    nodes6108 = node.contents();
    oldNodes.replaceWith(nodes6108);
  }));
  callback(root8015); return subs__;
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes6105;
  nodes6105 = node.contents();
  oldNodes.replaceWith(nodes6105);
}));
callback(root8014); return subs__;

return subs__;
};

controls.life.life = function(elements, callback) {
var root8019 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp13311 = mobl.ref(controls.life.loadPresets());

var nodes6109 = $("<span>");
root8019.append(nodes6109);
subs__.addSub((controls.life.lifeForm)(tmp13311, function(_, callback) {
  var root8020 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root8020); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6109;
  nodes6109 = node.contents();
  oldNodes.replaceWith(nodes6109);
}));
callback(root8019); return subs__;

return subs__;
};
