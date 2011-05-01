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
  var root8990 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18633 = mobl.ref(null);
  
  
  var tmp18632 = mobl.ref(null);
  
  
  var tmp18631 = mobl.ref(null);
  
  var nodes7191 = $("<span>");
  root8990.append(nodes7191);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp18631, tmp18632, tmp18633, function(_, callback) {
    var root8991 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3248 = mobl.loadingSpan();
    root8991.append(node3248);
    var list554;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList554 = function() {
      var subs__ = listSubs__;
      list554 = presets.get();
      list554.list(function(results556) {
        node3248.empty();
        for(var i673 = 0; i673 < results556.length; i673++) {
          (function() {
            var iternode554 = $("<span>");
            node3248.append(iternode554);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results556), i673), "_1");name = mobl.ref(mobl.ref(mobl.ref(results556), i673), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results556), i673), "_3");
            
            var tmp18630 = mobl.ref(false);
            
            
            var tmp18629 = mobl.ref(null);
            
            
            var tmp18628 = mobl.ref(null);
            
            var nodes7192 = $("<span>");
            iternode554.append(nodes7192);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18628, tmp18629, tmp18630, function(_, callback) {
              var root8992 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp18627 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.add(new models.reminders.Reminder({'name': name.get(), 'stress': stress.get(), 'date': mobl.now()}));
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       models.reminders.Reminder.all().filter("name", "=", name.get()).order("date", false).one(function(result__) {
                                         var tmp18645 = result__;
                                         var result__ = tmp18645;
                                         var itemToRemove = result__;
                                         var result__ = mobl.remove(itemToRemove);
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes7193 = $("<span>");
              root8992.append(nodes7193);
              subs__.addSub((ui.checkBox)(check, name, tmp18627, function(_, callback) {
                var root8993 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8993); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7193;
                nodes7193 = node.contents();
                oldNodes.replaceWith(nodes7193);
              }));
              callback(root8992); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7192;
              nodes7192 = node.contents();
              oldNodes.replaceWith(nodes7192);
            }));
            
            var oldNodes = iternode554;
            iternode554 = iternode554.contents();
            oldNodes.replaceWith(iternode554);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list554.addEventListener('change', function() { listSubs__.unsubscribe(); renderList554(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList554(true); }));
      });
    };
    renderList554();
    
    callback(root8991); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7191;
    nodes7191 = node.contents();
    oldNodes.replaceWith(nodes7191);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  
  var tmp18642 = mobl.ref(null);
  
  
  var tmp18641 = mobl.ref(null);
  
  
  var tmp18640 = mobl.ref(null);
  
  var nodes7194 = $("<span>");
  root8990.append(nodes7194);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp18640, tmp18641, tmp18642, function(_, callback) {
    var root8994 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3249 = $("<span>");
    
    var val1396 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1396 !== null) {
      subs__.addSub(mobl.domBind(node3249, 'mousedown', val1396));
    }
    
    var val1397 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1397 !== null) {
      subs__.addSub(mobl.domBind(node3249, 'mouseup', val1397));
    }
    
    
    var tmp18634 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp18639 = mobl.ref(null);
    
    
    var tmp18638 = mobl.ref(null);
    
    
    var tmp18637 = mobl.ref(null);
    
    
    var tmp18636 = mobl.ref(null);
    
    
    var tmp18635 = mobl.ref(null);
    
    var nodes7195 = $("<span>");
    node3249.append(nodes7195);
    subs__.addSub((ui.image)(saveButtonImage, tmp18635, tmp18636, tmp18634, tmp18637, tmp18638, tmp18639, function(_, callback) {
      var root8995 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8995); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7195;
      nodes7195 = node.contents();
      oldNodes.replaceWith(nodes7195);
    }));
    root8994.append(node3249);
    callback(root8994); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7194;
    nodes7194 = node.contents();
    oldNodes.replaceWith(nodes7194);
  }));
  callback(root8990); return subs__;
  
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root8996 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18643 = mobl.ref(controls.remindme.loadPresets());
  
  var nodes7196 = $("<span>");
  root8996.append(nodes7196);
  subs__.addSub((controls.remindme.reminderForm)(tmp18643, function(_, callback) {
    var root8997 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8997); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7196;
    nodes7196 = node.contents();
    oldNodes.replaceWith(nodes7196);
  }));
  callback(root8996); return subs__;
  
  return subs__;
};
