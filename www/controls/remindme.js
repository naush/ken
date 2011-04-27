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
  var root21901 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14730 = $("<span>");
  root21901.append(nodes14730);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21902 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node10316 = mobl.loadingSpan();
    root21902.append(node10316);
    var list2332;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2332 = function() {
      var subs__ = listSubs__;
      list2332 = presets.get();
      list2332.list(function(results2374) {
        node10316.empty();
        for(var i2332 = 0; i2332 < results2374.length; i2332++) {
          (function() {
            var iternode2332 = $("<span>");
            node10316.append(iternode2332);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results2374), i2332), "_1");name = mobl.ref(mobl.ref(mobl.ref(results2374), i2332), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results2374), i2332), "_3");
            
            var tmp25640 = mobl.ref(false);
            
            
            var tmp25639 = mobl.ref(null);
            
            
            var tmp25638 = mobl.ref(null);
            
            var nodes14731 = $("<span>");
            iternode2332.append(nodes14731);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp25638, tmp25639, tmp25640, function(_, callback) {
              var root21903 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp25637 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.add(new models.reminders.Reminder({'name': name.get(), 'stress': stress.get(), 'date': mobl.now()}));
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       models.reminders.Reminder.all().filter("name", "=", name.get()).order("date", false).one(function(result__) {
                                         var tmp25643 = result__;
                                         var result__ = tmp25643;
                                         var itemToRemove = result__;
                                         var result__ = mobl.remove(itemToRemove);
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes14732 = $("<span>");
              root21903.append(nodes14732);
              subs__.addSub((ui.checkBox)(check, name, tmp25637, function(_, callback) {
                var root21904 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root21904); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14732;
                nodes14732 = node.contents();
                oldNodes.replaceWith(nodes14732);
              }));
              callback(root21903); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes14731;
              nodes14731 = node.contents();
              oldNodes.replaceWith(nodes14731);
            }));
            
            var oldNodes = iternode2332;
            iternode2332 = iternode2332.contents();
            oldNodes.replaceWith(iternode2332);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2332.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2332(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2332(true); }));
      });
    };
    renderList2332();
    
    callback(root21902); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14730;
    nodes14730 = node.contents();
    oldNodes.replaceWith(nodes14730);
  }));
  callback(root21901); return subs__;
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root21905 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp25641 = mobl.ref(controls.remindme.loadPresets());
  
  var nodes14733 = $("<span>");
  root21905.append(nodes14733);
  subs__.addSub((controls.remindme.reminderForm)(tmp25641, function(_, callback) {
    var root21906 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root21906); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14733;
    nodes14733 = node.contents();
    oldNodes.replaceWith(nodes14733);
  }));
  callback(root21905); return subs__;
  
  return subs__;
};
