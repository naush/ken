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
  var root4229 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8731 = mobl.ref(null);
  
  
  var tmp8730 = mobl.ref(null);
  
  
  var tmp8729 = mobl.ref(null);
  
  var nodes3365 = $("<span>");
  root4229.append(nodes3365);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp8729, tmp8730, tmp8731, function(_, callback) {
    var root4230 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1511 = mobl.loadingSpan();
    root4230.append(node1511);
    var list267;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList267 = function() {
      var subs__ = listSubs__;
      list267 = presets.get();
      list267.list(function(results267) {
        node1511.empty();
        for(var i314 = 0; i314 < results267.length; i314++) {
          (function() {
            var iternode267 = $("<span>");
            node1511.append(iternode267);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results267), i314), "_1");name = mobl.ref(mobl.ref(mobl.ref(results267), i314), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results267), i314), "_3");
            
            var tmp8728 = mobl.ref(false);
            
            
            var tmp8727 = mobl.ref(null);
            
            
            var tmp8726 = mobl.ref(null);
            
            var nodes3366 = $("<span>");
            iternode267.append(nodes3366);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8726, tmp8727, tmp8728, function(_, callback) {
              var root4231 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp8725 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.add(new models.reminders.Reminder({'name': name.get(), 'stress': stress.get(), 'date': mobl.now()}));
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       models.reminders.Reminder.all().filter("name", "=", name.get()).order("date", false).one(function(result__) {
                                         var tmp8744 = result__;
                                         var result__ = tmp8744;
                                         var itemToRemove = result__;
                                         var result__ = mobl.remove(itemToRemove);
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes3367 = $("<span>");
              root4231.append(nodes3367);
              subs__.addSub((ui.checkBox)(check, name, tmp8725, function(_, callback) {
                var root4232 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4232); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3367;
                nodes3367 = node.contents();
                oldNodes.replaceWith(nodes3367);
              }));
              callback(root4231); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3366;
              nodes3366 = node.contents();
              oldNodes.replaceWith(nodes3366);
            }));
            
            var oldNodes = iternode267;
            iternode267 = iternode267.contents();
            oldNodes.replaceWith(iternode267);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list267.addEventListener('change', function() { listSubs__.unsubscribe(); renderList267(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList267(true); }));
      });
    };
    renderList267();
    
    callback(root4230); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3365;
    nodes3365 = node.contents();
    oldNodes.replaceWith(nodes3365);
  }));
  
  var tmp8741 = mobl.ref(null);
  
  
  var tmp8740 = mobl.ref(null);
  
  
  var tmp8739 = mobl.ref(null);
  
  var nodes3368 = $("<span>");
  root4229.append(nodes3368);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp8739, tmp8740, tmp8741, function(_, callback) {
    var root4233 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8733 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp8732 = mobl.ref("resources/images/save.png");
    
    
    var tmp8738 = mobl.ref(null);
    
    
    var tmp8737 = mobl.ref(null);
    
    
    var tmp8736 = mobl.ref(null);
    
    
    var tmp8735 = mobl.ref(null);
    
    
    var tmp8734 = mobl.ref(null);
    
    var nodes3369 = $("<span>");
    root4233.append(nodes3369);
    subs__.addSub((ui.image)(tmp8732, tmp8734, tmp8735, tmp8733, tmp8736, tmp8737, tmp8738, function(_, callback) {
      var root4234 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4234); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3369;
      nodes3369 = node.contents();
      oldNodes.replaceWith(nodes3369);
    }));
    callback(root4233); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3368;
    nodes3368 = node.contents();
    oldNodes.replaceWith(nodes3368);
  }));
  callback(root4229); return subs__;
  
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root4235 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8742 = mobl.ref(controls.remindme.loadPresets());
  
  var nodes3370 = $("<span>");
  root4235.append(nodes3370);
  subs__.addSub((controls.remindme.reminderForm)(tmp8742, function(_, callback) {
    var root4236 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4236); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3370;
    nodes3370 = node.contents();
    oldNodes.replaceWith(nodes3370);
  }));
  callback(root4235); return subs__;
  
  return subs__;
};
