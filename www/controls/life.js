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


controls.life.lifeForm = function(presets, elements, callback) {
var root6564 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes5124 = $("<span>");
root6564.append(nodes5124);
subs__.addSub((ui.group)(function(_, callback) {
  var root6565 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1726 = mobl.loadingSpan();
  root6565.append(node1726);
  var list369;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList369 = function() {
    var subs__ = listSubs__;
    list369 = presets.get();
    list369.list(function(results405) {
      node1726.empty();
      for(var i374 = 0; i374 < results405.length; i374++) {
        (function() {
          var iternode369 = $("<span>");
          node1726.append(iternode369);
          var check;var name;
          check = mobl.ref(mobl.ref(mobl.ref(results405), i374), "_1");name = mobl.ref(mobl.ref(mobl.ref(results405), i374), "_2");
          
          var tmp11855 = mobl.ref(false);
          
          
          var tmp11854 = mobl.ref(null);
          
          
          var tmp11853 = mobl.ref(null);
          
          var nodes5125 = $("<span>");
          iternode369.append(nodes5125);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11853, tmp11854, tmp11855, function(_, callback) {
            var root6566 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp11852 = mobl.ref(controls.life.cb(check.get(), name.get()));
            subs__.addSub(check.addEventListener('change', function() {
              tmp11852.set(controls.life.cb(check.get(), name.get()));
            }));
            subs__.addSub(name.addEventListener('change', function() {
              tmp11852.set(controls.life.cb(check.get(), name.get()));
            }));
            
            var nodes5126 = $("<span>");
            root6566.append(nodes5126);
            subs__.addSub((ui.checkBox)(check, name, tmp11852, function(_, callback) {
              var root6567 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6567); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5126;
              nodes5126 = node.contents();
              oldNodes.replaceWith(nodes5126);
            }));
            callback(root6566); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes5125;
            nodes5125 = node.contents();
            oldNodes.replaceWith(nodes5125);
          }));
          
          var oldNodes = iternode369;
          iternode369 = iternode369.contents();
          oldNodes.replaceWith(iternode369);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list369.addEventListener('change', function() { listSubs__.unsubscribe(); renderList369(true); }));
      subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList369(true); }));
    });
  };
  renderList369();
  
  
  var tmp11857 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.life.events.get();
                       controls.life.events.get().list(function(coll1072) {
                         coll1072 = coll1072.reverse();
                         function processOne215() {
                           var event;
                           event = coll1072.pop();
                           var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event, 'date': mobl.now()}));
                           
                           if(coll1072.length > 0) processOne215(); else rest215();
                           
                         }
                         function rest215() {
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
                         if(coll1072.length > 0) processOne215(); else rest215();
                       });
                       
                     });
  
  
  var tmp11856 = mobl.ref("Save");
  
  var nodes5127 = $("<span>");
  root6565.append(nodes5127);
  subs__.addSub((ui.button)(tmp11856, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11857, function(_, callback) {
    var root6568 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6568); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5127;
    nodes5127 = node.contents();
    oldNodes.replaceWith(nodes5127);
  }));
  callback(root6565); return subs__;
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes5124;
  nodes5124 = node.contents();
  oldNodes.replaceWith(nodes5124);
}));
callback(root6564); return subs__;

return subs__;
};

controls.life.life = function(elements, callback) {
var root6569 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp11858 = mobl.ref(controls.life.loadPresets());

var nodes5128 = $("<span>");
root6569.append(nodes5128);
subs__.addSub((controls.life.lifeForm)(tmp11858, function(_, callback) {
  var root6570 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6570); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5128;
  nodes5128 = node.contents();
  oldNodes.replaceWith(nodes5128);
}));
callback(root6569); return subs__;

return subs__;
};
