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
var root8179 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes6212 = $("<span>");
root8179.append(nodes6212);
subs__.addSub((ui.group)(function(_, callback) {
  var root8180 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2819 = mobl.loadingSpan();
  root8180.append(node2819);
  var list545;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList545 = function() {
    var subs__ = listSubs__;
    list545 = presets.get();
    list545.list(function(results581) {
      node2819.empty();
      for(var i550 = 0; i550 < results581.length; i550++) {
        (function() {
          var iternode545 = $("<span>");
          node2819.append(iternode545);
          var check;var name;var stress;
          check = mobl.ref(mobl.ref(mobl.ref(results581), i550), "_1");name = mobl.ref(mobl.ref(mobl.ref(results581), i550), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results581), i550), "_3");
          
          var tmp13492 = mobl.ref(false);
          
          
          var tmp13491 = mobl.ref(null);
          
          
          var tmp13490 = mobl.ref(null);
          
          var nodes6213 = $("<span>");
          iternode545.append(nodes6213);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13490, tmp13491, tmp13492, function(_, callback) {
            var root8181 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp13489 = mobl.ref(controls.life.cb(check.get(), name.get(), stress.get()));
            subs__.addSub(check.addEventListener('change', function() {
              tmp13489.set(controls.life.cb(check.get(), name.get(), stress.get()));
            }));
            subs__.addSub(name.addEventListener('change', function() {
              tmp13489.set(controls.life.cb(check.get(), name.get(), stress.get()));
            }));
            subs__.addSub(stress.addEventListener('change', function() {
              tmp13489.set(controls.life.cb(check.get(), name.get(), stress.get()));
            }));
            
            var nodes6214 = $("<span>");
            root8181.append(nodes6214);
            subs__.addSub((ui.checkBox)(check, name, tmp13489, function(_, callback) {
              var root8182 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8182); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6214;
              nodes6214 = node.contents();
              oldNodes.replaceWith(nodes6214);
            }));
            callback(root8181); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6213;
            nodes6213 = node.contents();
            oldNodes.replaceWith(nodes6213);
          }));
          
          var oldNodes = iternode545;
          iternode545 = iternode545.contents();
          oldNodes.replaceWith(iternode545);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list545.addEventListener('change', function() { listSubs__.unsubscribe(); renderList545(true); }));
      subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList545(true); }));
    });
  };
  renderList545();
  
  
  var tmp13494 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.life.events.get();
                       controls.life.events.get().list(function(coll1278) {
                         coll1278 = coll1278.reverse();
                         function processOne373() {
                           var event;var stress;
                           var tmp13497 = coll1278.pop();
                           event = tmp13497._1;stress = tmp13497._2;
                           var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event, 'stress': stress, 'date': mobl.now()}));
                           
                           if(coll1278.length > 0) processOne373(); else rest373();
                           
                         }
                         function rest373() {
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
                         if(coll1278.length > 0) processOne373(); else rest373();
                       });
                       
                     });
  
  
  var tmp13493 = mobl.ref("Save");
  
  var nodes6215 = $("<span>");
  root8180.append(nodes6215);
  subs__.addSub((ui.button)(tmp13493, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp13494, function(_, callback) {
    var root8183 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8183); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6215;
    nodes6215 = node.contents();
    oldNodes.replaceWith(nodes6215);
  }));
  callback(root8180); return subs__;
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes6212;
  nodes6212 = node.contents();
  oldNodes.replaceWith(nodes6212);
}));
callback(root8179); return subs__;

return subs__;
};

controls.life.life = function(elements, callback) {
var root8184 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp13495 = mobl.ref(controls.life.loadPresets());

var nodes6216 = $("<span>");
root8184.append(nodes6216);
subs__.addSub((controls.life.lifeForm)(tmp13495, function(_, callback) {
  var root8185 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root8185); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6216;
  nodes6216 = node.contents();
  oldNodes.replaceWith(nodes6216);
}));
callback(root8184); return subs__;

return subs__;
};
