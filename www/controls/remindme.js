mobl.provides('controls.remindme');
controls.remindme.reminders = mobl.ref([]);
controls.remindme.loadPresets = function() {
   var __this = this;
  var presets = [];
  
  presets.push(new mobl.Tuple(false, "Drink water", 0));
  presets.push(new mobl.Tuple(false, "Stop frowning", 0));
  presets.push(new mobl.Tuple(false, "Take few deep breaths", 0));
  presets.push(new mobl.Tuple(false, "Relax shoulders by rotating them", 0));
  presets.push(new mobl.Tuple(false, "Close eyes and count till 20", 0));
  presets.push(new mobl.Tuple(false, "Stretch", 0));
  return presets;
};


controls.remindme.reminderForm = function(presets, elements, callback) {
var root8172 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes6207 = $("<span>");
root8172.append(nodes6207);
subs__.addSub((ui.group)(function(_, callback) {
  var root8173 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2818 = mobl.loadingSpan();
  root8173.append(node2818);
  var list544;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList544 = function() {
    var subs__ = listSubs__;
    list544 = presets.get();
    list544.list(function(results580) {
      node2818.empty();
      for(var i549 = 0; i549 < results580.length; i549++) {
        (function() {
          var iternode544 = $("<span>");
          node2818.append(iternode544);
          var check;var name;var stress;
          check = mobl.ref(mobl.ref(mobl.ref(results580), i549), "_1");name = mobl.ref(mobl.ref(mobl.ref(results580), i549), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results580), i549), "_3");
          
          var tmp13483 = mobl.ref(false);
          
          
          var tmp13482 = mobl.ref(null);
          
          
          var tmp13481 = mobl.ref(null);
          
          var nodes6208 = $("<span>");
          iternode544.append(nodes6208);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13481, tmp13482, tmp13483, function(_, callback) {
            var root8174 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp13480 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = check.get() ? controls.remindme.reminders.get().push(new mobl.Tuple(name.get(), stress.get())) : controls.remindme.reminders.get().remove(new mobl.Tuple(name.get(), stress.get()));
                                 if(callback && callback.apply) callback(); return;
                               });
            
            var nodes6209 = $("<span>");
            root8174.append(nodes6209);
            subs__.addSub((ui.checkBox)(check, name, tmp13480, function(_, callback) {
              var root8175 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8175); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6209;
              nodes6209 = node.contents();
              oldNodes.replaceWith(nodes6209);
            }));
            callback(root8174); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6208;
            nodes6208 = node.contents();
            oldNodes.replaceWith(nodes6208);
          }));
          
          var oldNodes = iternode544;
          iternode544 = iternode544.contents();
          oldNodes.replaceWith(iternode544);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list544.addEventListener('change', function() { listSubs__.unsubscribe(); renderList544(true); }));
      subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList544(true); }));
    });
  };
  renderList544();
  
  
  var tmp13485 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.remindme.reminders.get();
                       controls.remindme.reminders.get().list(function(coll1277) {
                         coll1277 = coll1277.reverse();
                         function processOne372() {
                           var reminder;var stress;
                           var tmp13488 = coll1277.pop();
                           reminder = tmp13488._1;stress = tmp13488._2;
                           var result__ = mobl.add(new models.reminders.Reminder({'name': reminder, 'stress': stress, 'date': mobl.now()}));
                           
                           if(coll1277.length > 0) processOne372(); else rest372();
                           
                         }
                         function rest372() {
                           var result__ = controls.remindme.reminders.get().length > 0;
                           if(result__) {
                             var result__ = mobl.notify.notify("Reminders saved!", "Notification");
                             var result__ = 0;
                             controls.remindme.reminders.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           } else {
                             {
                               var result__ = mobl.notify.notify("Please select at least one reminder.", "Notification");
                               if(callback && callback.apply) callback(); return;
                             }
                           }
                         }
                         if(coll1277.length > 0) processOne372(); else rest372();
                       });
                       
                     });
  
  
  var tmp13484 = mobl.ref("Save");
  
  var nodes6210 = $("<span>");
  root8173.append(nodes6210);
  subs__.addSub((ui.button)(tmp13484, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp13485, function(_, callback) {
    var root8176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8176); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6210;
    nodes6210 = node.contents();
    oldNodes.replaceWith(nodes6210);
  }));
  callback(root8173); return subs__;
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes6207;
  nodes6207 = node.contents();
  oldNodes.replaceWith(nodes6207);
}));
callback(root8172); return subs__;

return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
var root8177 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp13486 = mobl.ref(controls.remindme.loadPresets());

var nodes6211 = $("<span>");
root8177.append(nodes6211);
subs__.addSub((controls.remindme.reminderForm)(tmp13486, function(_, callback) {
  var root8178 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root8178); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6211;
  nodes6211 = node.contents();
  oldNodes.replaceWith(nodes6211);
}));
callback(root8177); return subs__;

return subs__;
};
