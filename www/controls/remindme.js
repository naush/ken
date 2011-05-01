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

controls.remindme.remindersToSave = mobl.ref([]);

controls.remindme.reminderForm = function(presets, elements, callback) {
  var root9374 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19678 = mobl.ref(null);
  
  
  var tmp19677 = mobl.ref(null);
  
  
  var tmp19676 = mobl.ref(null);
  
  var nodes7522 = $("<span>");
  root9374.append(nodes7522);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp19676, tmp19677, tmp19678, function(_, callback) {
    var root9375 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3363 = mobl.loadingSpan();
    root9375.append(node3363);
    var list575;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList575 = function() {
      var subs__ = listSubs__;
      list575 = presets.get();
      list575.list(function(results577) {
        node3363.empty();
        for(var i700 = 0; i700 < results577.length; i700++) {
          (function() {
            var iternode575 = $("<span>");
            node3363.append(iternode575);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results577), i700), "_1");name = mobl.ref(mobl.ref(mobl.ref(results577), i700), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results577), i700), "_3");
            
            var reminder_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp19675 = mobl.ref(false);
            
            
            var tmp19674 = mobl.ref(null);
            
            
            var tmp19673 = mobl.ref(null);
            
            var nodes7523 = $("<span>");
            iternode575.append(nodes7523);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp19673, tmp19674, tmp19675, function(_, callback) {
              var root9376 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node3364 = $("<span>");
              
              var ref2509 = mobl.ref("item__" + reminder_name.get());
              if(ref2509.get() !== null) {
                node3364.attr('id', ref2509.get());
                subs__.addSub(ref2509.addEventListener('change', function(_, ref, val) {
                  node3364.attr('id', val);
                }));
                subs__.addSub(reminder_name.addEventListener('change', function() {
                  node3364.attr('id', "item__" + reminder_name.get());
                }));
                
              }
              subs__.addSub(ref2509.rebind());
              
              
              var tmp19672 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.$("#item__" + reminder_name.get()).css("font-weight", "bold");
                                     var result__ = new models.reminders.Reminder({'name': name.get(), 'stress': stress.get(), 'date': mobl.now()});
                                     var reminder = result__;
                                     var result__ = controls.remindme.remindersToSave.get().push(reminder);
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       var result__ = mobl.$("#item__" + reminder_name.get()).css("font-weight", "normal");
                                       var result__ = null;
                                       var reminderToRemove = result__;
                                       var result__ = controls.remindme.remindersToSave.get();
                                       controls.remindme.remindersToSave.get().list(function(coll1273) {
                                         coll1273 = coll1273.reverse();
                                         function processOne128() {
                                           var reminder;
                                           reminder = coll1273.pop();
                                           var result__ = reminder.name == reminder_name.get();
                                           if(result__) {
                                             var result__ = reminder;
                                             reminderToRemove = result__;
                                             
                                             if(coll1273.length > 0) processOne128(); else rest128();
                                             
                                           } else {
                                             {
                                               
                                               if(coll1273.length > 0) processOne128(); else rest128();
                                               
                                             }
                                           }
                                         }
                                         function rest128() {
                                           var result__ = controls.remindme.remindersToSave.get().remove(reminderToRemove);
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll1273.length > 0) processOne128(); else rest128();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes7524 = $("<span>");
              node3364.append(nodes7524);
              subs__.addSub((ui.checkBox)(check, name, tmp19672, function(_, callback) {
                var root9377 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9377); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7524;
                nodes7524 = node.contents();
                oldNodes.replaceWith(nodes7524);
              }));
              root9376.append(node3364);
              callback(root9376); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7523;
              nodes7523 = node.contents();
              oldNodes.replaceWith(nodes7523);
            }));
            
            var oldNodes = iternode575;
            iternode575 = iternode575.contents();
            oldNodes.replaceWith(iternode575);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list575.addEventListener('change', function() { listSubs__.unsubscribe(); renderList575(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList575(true); }));
      });
    };
    renderList575();
    
    callback(root9375); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7522;
    nodes7522 = node.contents();
    oldNodes.replaceWith(nodes7522);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  
  var tmp19687 = mobl.ref(null);
  
  
  var tmp19686 = mobl.ref(null);
  
  
  var tmp19685 = mobl.ref(null);
  
  var nodes7525 = $("<span>");
  root9374.append(nodes7525);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp19685, tmp19686, tmp19687, function(_, callback) {
    var root9378 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3365 = $("<span>");
    
    var val1488 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1488 !== null) {
      subs__.addSub(mobl.domBind(node3365, 'mousedown', val1488));
    }
    
    var val1489 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1489 !== null) {
      subs__.addSub(mobl.domBind(node3365, 'mouseup', val1489));
    }
    
    
    var tmp19679 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = controls.remindme.remindersToSave.get();
                         controls.remindme.remindersToSave.get().list(function(coll1274) {
                           coll1274 = coll1274.reverse();
                           function processOne129() {
                             var reminder;
                             reminder = coll1274.pop();
                             var result__ = mobl.add(reminder);
                             
                             if(coll1274.length > 0) processOne129(); else rest129();
                             
                           }
                           function rest129() {
                             var result__ = 0;
                             controls.remindme.remindersToSave.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1274.length > 0) processOne129(); else rest129();
                         });
                         
                       });
    
    
    var tmp19684 = mobl.ref(null);
    
    
    var tmp19683 = mobl.ref(null);
    
    
    var tmp19682 = mobl.ref(null);
    
    
    var tmp19681 = mobl.ref(null);
    
    
    var tmp19680 = mobl.ref(null);
    
    var nodes7526 = $("<span>");
    node3365.append(nodes7526);
    subs__.addSub((ui.image)(saveButtonImage, tmp19680, tmp19681, tmp19679, tmp19682, tmp19683, tmp19684, function(_, callback) {
      var root9379 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9379); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7526;
      nodes7526 = node.contents();
      oldNodes.replaceWith(nodes7526);
    }));
    root9378.append(node3365);
    callback(root9378); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7525;
    nodes7525 = node.contents();
    oldNodes.replaceWith(nodes7525);
  }));
  callback(root9374); return subs__;
  
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root9380 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19688 = mobl.ref(controls.remindme.loadPresets());
  
  var nodes7527 = $("<span>");
  root9380.append(nodes7527);
  subs__.addSub((controls.remindme.reminderForm)(tmp19688, function(_, callback) {
    var root9381 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9381); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7527;
    nodes7527 = node.contents();
    oldNodes.replaceWith(nodes7527);
  }));
  callback(root9380); return subs__;
  
  return subs__;
};
