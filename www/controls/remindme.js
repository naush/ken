mobl.provides('controls.remindme');
mobl.provides('models');
mobl.provides('models.reminders');
mobl.provides('ui');
mobl.provides('mobl');
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

controls.remindme.remindersToSave = mobl.ref([]);

controls.remindme.reminderForm = function(presets, elements, callback) {
  var root444 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp1452 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1451 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1450 = mobl.ref(result__);
  
  var nodes387 = $("<span>");
  root444.append(nodes387);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp1450, tmp1451, tmp1452, function(_, callback) {
    var root445 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node229 = mobl.loadingSpan();
    root445.append(node229);
    var list12;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList12 = function() {
      var subs__ = listSubs__;
      list12 = presets.get();
      list12.list(function(results12) {
        node229.empty();
        for(var i20 = 0; i20 < results12.length; i20++) {
          (function() {
            var iternode12 = $("<span>");
            node229.append(iternode12);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results12), i20), "_1");name = mobl.ref(mobl.ref(mobl.ref(results12), i20), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results12), i20), "_3");
            
            var reminder_name = mobl.ref(name.get().replace(/\s/g, "__"));
            var result__ = false;
            var tmp1449 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1448 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1447 = mobl.ref(result__);
            
            var nodes388 = $("<span>");
            iternode12.append(nodes388);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1447, tmp1448, tmp1449, function(_, callback) {
              var root446 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node230 = $("<span>");
              
              var ref121 = mobl.ref("item__" + reminder_name.get());
              if(ref121.get() !== null) {
                node230.attr('id', ref121.get());
                subs__.addSub(ref121.addEventListener('change', function(_, ref, val) {
                  node230.attr('id', val);
                }));
                subs__.addSub(reminder_name.addEventListener('change', function() {
                  node230.attr('id', "item__" + reminder_name.get());
                }));
                
              }
              subs__.addSub(ref121.rebind());
              
              var result__ = function(event, callback) {
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
                                   controls.remindme.remindersToSave.get().list(function(coll36) {
                                     coll36 = coll36.reverse();
                                     function processOne10() {
                                       var reminder;
                                       reminder = coll36.pop();
                                       var result__ = reminder.name == reminder_name.get();
                                       if(result__) {
                                         var result__ = reminder;
                                         reminderToRemove = result__;
                                         
                                         if(coll36.length > 0) processOne10(); else rest10();
                                         
                                       } else {
                                         {
                                           
                                           if(coll36.length > 0) processOne10(); else rest10();
                                           
                                         }
                                       }
                                     }
                                     function rest10() {
                                       var result__ = controls.remindme.remindersToSave.get().remove(reminderToRemove);
                                       if(callback && callback.apply) callback(); return;
                                     }
                                     if(coll36.length > 0) processOne10(); else rest10();
                                   });
                                   
                                 }
                               }
                             };
              var tmp1446 = mobl.ref(result__);
              
              var nodes389 = $("<span>");
              node230.append(nodes389);
              subs__.addSub((ui.checkBox)(check, name, tmp1446, function(_, callback) {
                var root447 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root447); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes389;
                nodes389 = node.contents();
                oldNodes.replaceWith(nodes389);
              }));
              root446.append(node230);
              callback(root446); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes388;
              nodes388 = node.contents();
              oldNodes.replaceWith(nodes388);
            }));
            
            var oldNodes = iternode12;
            iternode12 = iternode12.contents();
            oldNodes.replaceWith(iternode12);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list12.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
      });
    };
    renderList12();
    
    callback(root445); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes387;
    nodes387 = node.contents();
    oldNodes.replaceWith(nodes387);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  var result__ = null;
  var tmp1461 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1460 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1459 = mobl.ref(result__);
  
  var nodes390 = $("<span>");
  root444.append(nodes390);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp1459, tmp1460, tmp1461, function(_, callback) {
    var root448 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node231 = $("<span>");
    
    var val175 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val175 !== null) {
      subs__.addSub(mobl.domBind(node231, 'mousedown', val175));
    }
    
    var val176 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val176 !== null) {
      subs__.addSub(mobl.domBind(node231, 'mouseup', val176));
    }
    
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.$("#flash__Reminder").show();
                     var result__ = controls.remindme.remindersToSave.get();
                     controls.remindme.remindersToSave.get().list(function(coll37) {
                       coll37 = coll37.reverse();
                       function processOne11() {
                         var reminder;
                         reminder = coll37.pop();
                         var result__ = mobl.add(reminder);
                         
                         if(coll37.length > 0) processOne11(); else rest11();
                         
                       }
                       function rest11() {
                         var result__ = 0;
                         controls.remindme.remindersToSave.get().length = result__;
                         if(callback && callback.apply) callback(); return;
                       }
                       if(coll37.length > 0) processOne11(); else rest11();
                     });
                     
                   };
    var tmp1453 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1458 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1457 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1456 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1455 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1454 = mobl.ref(result__);
    
    var nodes391 = $("<span>");
    node231.append(nodes391);
    subs__.addSub((ui.image)(saveButtonImage, tmp1454, tmp1455, tmp1453, tmp1456, tmp1457, tmp1458, function(_, callback) {
      var root449 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root449); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes391;
      nodes391 = node.contents();
      oldNodes.replaceWith(nodes391);
    }));
    root448.append(node231);
    callback(root448); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes390;
    nodes390 = node.contents();
    oldNodes.replaceWith(nodes390);
  }));
  callback(root444); return subs__;
  
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root450 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = controls.remindme.loadPresets();
  var tmp1462 = mobl.ref(result__);
  
  var nodes392 = $("<span>");
  root450.append(nodes392);
  subs__.addSub((controls.remindme.reminderForm)(tmp1462, function(_, callback) {
    var root451 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root451); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes392;
    nodes392 = node.contents();
    oldNodes.replaceWith(nodes392);
  }));
  callback(root450); return subs__;
  
  return subs__;
};
