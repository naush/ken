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
  presets.push(new mobl.Tuple(false, "Relax shoulders", 0));
  presets.push(new mobl.Tuple(false, "Close eyes and count till 20", 0));
  presets.push(new mobl.Tuple(false, "Stretch", 0));
  return presets;
};

controls.remindme.remindersToSave = mobl.ref([]);

controls.remindme.reminderForm = function(presets, elements, callback) {
  var root725 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp2443 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2442 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2441 = mobl.ref(result__);
  
  var nodes652 = $("<span>");
  root725.append(nodes652);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp2441, tmp2442, tmp2443, function(_, callback) {
    var root726 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node355 = mobl.loadingSpan();
    root726.append(node355);
    var list15;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList15 = function() {
      var subs__ = listSubs__;
      list15 = presets.get();
      list15.list(function(results18) {
        node355.empty();
        for(var i28 = 0; i28 < results18.length; i28++) {
          (function() {
            var iternode15 = $("<span>");
            node355.append(iternode15);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results18), i28), "_1");name = mobl.ref(mobl.ref(mobl.ref(results18), i28), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results18), i28), "_3");
            
            var reminder_name = mobl.ref(name.get().replace(/\s/g, "__"));
            var result__ = false;
            var tmp2440 = mobl.ref(result__);
            
            var result__ = null;
            var tmp2439 = mobl.ref(result__);
            
            var result__ = null;
            var tmp2438 = mobl.ref(result__);
            
            var nodes653 = $("<span>");
            iternode15.append(nodes653);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp2438, tmp2439, tmp2440, function(_, callback) {
              var root727 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node356 = $("<span>");
              
              var ref158 = mobl.ref("item__" + reminder_name.get());
              if(ref158.get() !== null) {
                node356.attr('id', ref158.get());
                subs__.addSub(ref158.addEventListener('change', function(_, ref, val) {
                  node356.attr('id', val);
                }));
                subs__.addSub(reminder_name.addEventListener('change', function() {
                  node356.attr('id', "item__" + reminder_name.get());
                }));
                
              }
              subs__.addSub(ref158.rebind());
              
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
                                   controls.remindme.remindersToSave.get().list(function(coll66) {
                                     coll66 = coll66.reverse();
                                     function processOne23() {
                                       var reminder;
                                       reminder = coll66.pop();
                                       var result__ = reminder.name == reminder_name.get();
                                       if(result__) {
                                         var result__ = reminder;
                                         reminderToRemove = result__;
                                         
                                         if(coll66.length > 0) processOne23(); else rest23();
                                         
                                       } else {
                                         {
                                           
                                           if(coll66.length > 0) processOne23(); else rest23();
                                           
                                         }
                                       }
                                     }
                                     function rest23() {
                                       var result__ = controls.remindme.remindersToSave.get().remove(reminderToRemove);
                                       if(callback && callback.apply) callback(); return;
                                     }
                                     if(coll66.length > 0) processOne23(); else rest23();
                                   });
                                   
                                 }
                               }
                             };
              var tmp2437 = mobl.ref(result__);
              
              var nodes654 = $("<span>");
              node356.append(nodes654);
              subs__.addSub((ui.checkBox)(check, name, tmp2437, function(_, callback) {
                var root728 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root728); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes654;
                nodes654 = node.contents();
                oldNodes.replaceWith(nodes654);
              }));
              root727.append(node356);
              callback(root727); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes653;
              nodes653 = node.contents();
              oldNodes.replaceWith(nodes653);
            }));
            
            var oldNodes = iternode15;
            iternode15 = iternode15.contents();
            oldNodes.replaceWith(iternode15);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list15.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
      });
    };
    renderList15();
    
    callback(root726); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes652;
    nodes652 = node.contents();
    oldNodes.replaceWith(nodes652);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  var result__ = null;
  var tmp2452 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2451 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2450 = mobl.ref(result__);
  
  var nodes655 = $("<span>");
  root725.append(nodes655);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp2450, tmp2451, tmp2452, function(_, callback) {
    var root729 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node357 = $("<span>");
    
    var val273 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val273 !== null) {
      subs__.addSub(mobl.domBind(node357, 'mousedown', val273));
    }
    
    var val274 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val274 !== null) {
      subs__.addSub(mobl.domBind(node357, 'mouseup', val274));
    }
    
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.$("#flash__Reminder").show();
                     var result__ = controls.remindme.remindersToSave.get();
                     controls.remindme.remindersToSave.get().list(function(coll67) {
                       coll67 = coll67.reverse();
                       function processOne24() {
                         var reminder;
                         reminder = coll67.pop();
                         var result__ = mobl.add(reminder);
                         
                         if(coll67.length > 0) processOne24(); else rest24();
                         
                       }
                       function rest24() {
                         var result__ = 0;
                         controls.remindme.remindersToSave.get().length = result__;
                         if(callback && callback.apply) callback(); return;
                       }
                       if(coll67.length > 0) processOne24(); else rest24();
                     });
                     
                   };
    var tmp2444 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2449 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2448 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2447 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2446 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2445 = mobl.ref(result__);
    
    var nodes656 = $("<span>");
    node357.append(nodes656);
    subs__.addSub((ui.image)(saveButtonImage, tmp2445, tmp2446, tmp2444, tmp2447, tmp2448, tmp2449, function(_, callback) {
      var root730 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root730); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes656;
      nodes656 = node.contents();
      oldNodes.replaceWith(nodes656);
    }));
    root729.append(node357);
    callback(root729); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes655;
    nodes655 = node.contents();
    oldNodes.replaceWith(nodes655);
  }));
  callback(root725); return subs__;
  
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root731 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = controls.remindme.loadPresets();
  var tmp2453 = mobl.ref(result__);
  
  var nodes657 = $("<span>");
  root731.append(nodes657);
  subs__.addSub((controls.remindme.reminderForm)(tmp2453, function(_, callback) {
    var root732 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root732); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes657;
    nodes657 = node.contents();
    oldNodes.replaceWith(nodes657);
  }));
  callback(root731); return subs__;
  
  return subs__;
};
