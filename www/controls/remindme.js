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
  var root2361 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5214 = mobl.ref(null);
  
  
  var tmp5213 = mobl.ref(null);
  
  
  var tmp5212 = mobl.ref(null);
  
  var nodes1914 = $("<span>");
  root2361.append(nodes1914);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp5212, tmp5213, tmp5214, function(_, callback) {
    var root2362 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node899 = mobl.loadingSpan();
    root2362.append(node899);
    var list140;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList140 = function() {
      var subs__ = listSubs__;
      list140 = presets.get();
      list140.list(function(results140) {
        node899.empty();
        for(var i172 = 0; i172 < results140.length; i172++) {
          (function() {
            var iternode140 = $("<span>");
            node899.append(iternode140);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results140), i172), "_1");name = mobl.ref(mobl.ref(mobl.ref(results140), i172), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results140), i172), "_3");
            
            var reminder_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp5211 = mobl.ref(false);
            
            
            var tmp5210 = mobl.ref(null);
            
            
            var tmp5209 = mobl.ref(null);
            
            var nodes1915 = $("<span>");
            iternode140.append(nodes1915);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp5209, tmp5210, tmp5211, function(_, callback) {
              var root2363 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node900 = $("<span>");
              
              var ref632 = mobl.ref("item__" + reminder_name.get());
              if(ref632.get() !== null) {
                node900.attr('id', ref632.get());
                subs__.addSub(ref632.addEventListener('change', function(_, ref, val) {
                  node900.attr('id', val);
                }));
                subs__.addSub(reminder_name.addEventListener('change', function() {
                  node900.attr('id', "item__" + reminder_name.get());
                }));
                
              }
              subs__.addSub(ref632.rebind());
              
              
              var tmp5208 = mobl.ref(function(event, callback) {
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
                                       controls.remindme.remindersToSave.get().list(function(coll371) {
                                         coll371 = coll371.reverse();
                                         function processOne57() {
                                           var reminder;
                                           reminder = coll371.pop();
                                           var result__ = reminder.name == reminder_name.get();
                                           if(result__) {
                                             var result__ = reminder;
                                             reminderToRemove = result__;
                                             
                                             if(coll371.length > 0) processOne57(); else rest57();
                                             
                                           } else {
                                             {
                                               
                                               if(coll371.length > 0) processOne57(); else rest57();
                                               
                                             }
                                           }
                                         }
                                         function rest57() {
                                           var result__ = controls.remindme.remindersToSave.get().remove(reminderToRemove);
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll371.length > 0) processOne57(); else rest57();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes1916 = $("<span>");
              node900.append(nodes1916);
              subs__.addSub((ui.checkBox)(check, name, tmp5208, function(_, callback) {
                var root2364 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2364); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1916;
                nodes1916 = node.contents();
                oldNodes.replaceWith(nodes1916);
              }));
              root2363.append(node900);
              callback(root2363); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1915;
              nodes1915 = node.contents();
              oldNodes.replaceWith(nodes1915);
            }));
            
            var oldNodes = iternode140;
            iternode140 = iternode140.contents();
            oldNodes.replaceWith(iternode140);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list140.addEventListener('change', function() { listSubs__.unsubscribe(); renderList140(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList140(true); }));
      });
    };
    renderList140();
    
    callback(root2362); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1914;
    nodes1914 = node.contents();
    oldNodes.replaceWith(nodes1914);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  
  var tmp5223 = mobl.ref(null);
  
  
  var tmp5222 = mobl.ref(null);
  
  
  var tmp5221 = mobl.ref(null);
  
  var nodes1917 = $("<span>");
  root2361.append(nodes1917);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp5221, tmp5222, tmp5223, function(_, callback) {
    var root2365 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node901 = $("<span>");
    
    var val602 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val602 !== null) {
      subs__.addSub(mobl.domBind(node901, 'mousedown', val602));
    }
    
    var val603 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val603 !== null) {
      subs__.addSub(mobl.domBind(node901, 'mouseup', val603));
    }
    
    
    var tmp5215 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Reminder").show();
                         var result__ = controls.remindme.remindersToSave.get();
                         controls.remindme.remindersToSave.get().list(function(coll372) {
                           coll372 = coll372.reverse();
                           function processOne58() {
                             var reminder;
                             reminder = coll372.pop();
                             var result__ = mobl.add(reminder);
                             
                             if(coll372.length > 0) processOne58(); else rest58();
                             
                           }
                           function rest58() {
                             var result__ = 0;
                             controls.remindme.remindersToSave.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll372.length > 0) processOne58(); else rest58();
                         });
                         
                       });
    
    
    var tmp5220 = mobl.ref(null);
    
    
    var tmp5219 = mobl.ref(null);
    
    
    var tmp5218 = mobl.ref(null);
    
    
    var tmp5217 = mobl.ref(null);
    
    
    var tmp5216 = mobl.ref(null);
    
    var nodes1918 = $("<span>");
    node901.append(nodes1918);
    subs__.addSub((ui.image)(saveButtonImage, tmp5216, tmp5217, tmp5215, tmp5218, tmp5219, tmp5220, function(_, callback) {
      var root2366 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2366); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1918;
      nodes1918 = node.contents();
      oldNodes.replaceWith(nodes1918);
    }));
    root2365.append(node901);
    callback(root2365); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1917;
    nodes1917 = node.contents();
    oldNodes.replaceWith(nodes1917);
  }));
  callback(root2361); return subs__;
  
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root2367 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5224 = mobl.ref(controls.remindme.loadPresets());
  
  var nodes1919 = $("<span>");
  root2367.append(nodes1919);
  subs__.addSub((controls.remindme.reminderForm)(tmp5224, function(_, callback) {
    var root2368 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2368); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1919;
    nodes1919 = node.contents();
    oldNodes.replaceWith(nodes1919);
  }));
  callback(root2367); return subs__;
  
  return subs__;
};
