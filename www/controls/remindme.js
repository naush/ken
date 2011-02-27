mobl.provides('controls.remindme');
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
var root13817 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes10016 = $("<span>");
root13817.append(nodes10016);
subs__.addSub((ui.group)(function(_, callback) {
  var root13818 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node5130 = mobl.loadingSpan();
  root13818.append(node5130);
  var list1025;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1025 = function() {
    var subs__ = listSubs__;
    list1025 = presets.get();
    list1025.list(function(results1061) {
      node5130.empty();
      for(var i1030 = 0; i1030 < results1061.length; i1030++) {
        (function() {
          var iternode1025 = $("<span>");
          node5130.append(iternode1025);
          var check;var name;var stress;
          check = mobl.ref(mobl.ref(mobl.ref(results1061), i1030), "_1");name = mobl.ref(mobl.ref(mobl.ref(results1061), i1030), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results1061), i1030), "_3");
          
          var tmp19537 = mobl.ref(false);
          
          
          var tmp19536 = mobl.ref(null);
          
          
          var tmp19535 = mobl.ref(null);
          
          var nodes10017 = $("<span>");
          iternode1025.append(nodes10017);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19535, tmp19536, tmp19537, function(_, callback) {
            var root13819 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp19534 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = check.get();
                                 if(result__) {
                                   var result__ = mobl.add(new models.reminders.Reminder({'name': name.get(), 'stress': stress.get(), 'date': mobl.now()}));
                                   if(callback && callback.apply) callback(); return;
                                 } else {
                                   {
                                     models.reminders.Reminder.all().filter("name", "=", name.get()).order("date", false).one(function(result__) {
                                       var tmp19540 = result__;
                                       var result__ = tmp19540;
                                       var itemToRemove = result__;
                                       var result__ = mobl.remove(itemToRemove);
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   }
                                 }
                               });
            
            var nodes10018 = $("<span>");
            root13819.append(nodes10018);
            subs__.addSub((ui.checkBox)(check, name, tmp19534, function(_, callback) {
              var root13820 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root13820); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10018;
              nodes10018 = node.contents();
              oldNodes.replaceWith(nodes10018);
            }));
            callback(root13819); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes10017;
            nodes10017 = node.contents();
            oldNodes.replaceWith(nodes10017);
          }));
          
          var oldNodes = iternode1025;
          iternode1025 = iternode1025.contents();
          oldNodes.replaceWith(iternode1025);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1025.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1025(true); }));
      subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1025(true); }));
    });
  };
  renderList1025();
  
  callback(root13818); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes10016;
  nodes10016 = node.contents();
  oldNodes.replaceWith(nodes10016);
}));
callback(root13817); return subs__;

return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
var root13821 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp19538 = mobl.ref(controls.remindme.loadPresets());

var nodes10019 = $("<span>");
root13821.append(nodes10019);
subs__.addSub((controls.remindme.reminderForm)(tmp19538, function(_, callback) {
  var root13822 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root13822); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes10019;
  nodes10019 = node.contents();
  oldNodes.replaceWith(nodes10019);
}));
callback(root13821); return subs__;

return subs__;
};
