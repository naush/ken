mobl.provides('controls.remindme');
mobl.provides('models');
mobl.provides('mobl');
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
  var root120 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes79 = $("<span>");
  root120.append(nodes79);
  subs__.addSub((ui.group)(function(_, callback) {
    var root121 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node51 = mobl.loadingSpan();
    root121.append(node51);
    var list10;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList10 = function() {
      var subs__ = listSubs__;
      list10 = presets.get();
      list10.list(function(results18) {
        node51.empty();
        for(var i10 = 0; i10 < results18.length; i10++) {
          (function() {
            var iternode10 = $("<span>");
            node51.append(iternode10);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results18), i10), "_1");name = mobl.ref(mobl.ref(mobl.ref(results18), i10), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results18), i10), "_3");
            
            var tmp142 = mobl.ref(false);
            
            
            var tmp141 = mobl.ref(null);
            
            
            var tmp139 = mobl.ref(null);
            
            var nodes80 = $("<span>");
            iternode10.append(nodes80);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp139, tmp141, tmp142, function(_, callback) {
              var root122 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp138 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.add(new models.reminders.Reminder({'name': name.get(), 'stress': stress.get(), 'date': mobl.now()}));
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       models.reminders.Reminder.all().filter("name", "=", name.get()).order("date", false).one(function(result__) {
                                         var tmp145 = result__;
                                         var result__ = tmp145;
                                         var itemToRemove = result__;
                                         var result__ = mobl.remove(itemToRemove);
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes81 = $("<span>");
              root122.append(nodes81);
              subs__.addSub((ui.checkBox)(check, name, tmp138, function(_, callback) {
                var root123 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root123); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes81;
                nodes81 = node.contents();
                oldNodes.replaceWith(nodes81);
              }));
              callback(root122); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes80;
              nodes80 = node.contents();
              oldNodes.replaceWith(nodes80);
            }));
            
            var oldNodes = iternode10;
            iternode10 = iternode10.contents();
            oldNodes.replaceWith(iternode10);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list10.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
      });
    };
    renderList10();
    
    callback(root121); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes79;
    nodes79 = node.contents();
    oldNodes.replaceWith(nodes79);
  }));
  callback(root120); return subs__;
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root124 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp143 = mobl.ref(controls.remindme.loadPresets());
  
  var nodes82 = $("<span>");
  root124.append(nodes82);
  subs__.addSub((controls.remindme.reminderForm)(tmp143, function(_, callback) {
    var root125 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root125); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes82;
    nodes82 = node.contents();
    oldNodes.replaceWith(nodes82);
  }));
  callback(root124); return subs__;
  
  return subs__;
};
