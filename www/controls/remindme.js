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
  var root233 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp756 = mobl.ref(null);
  
  
  var tmp755 = mobl.ref(null);
  
  
  var tmp754 = mobl.ref(null);
  
  var nodes220 = $("<span>");
  root233.append(nodes220);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp754, tmp755, tmp756, function(_, callback) {
    var root234 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node72 = mobl.loadingSpan();
    root234.append(node72);
    var list3;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3 = function() {
      var subs__ = listSubs__;
      list3 = presets.get();
      list3.list(function(results3) {
        node72.empty();
        for(var i10 = 0; i10 < results3.length; i10++) {
          (function() {
            var iternode3 = $("<span>");
            node72.append(iternode3);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results3), i10), "_1");name = mobl.ref(mobl.ref(mobl.ref(results3), i10), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results3), i10), "_3");
            
            var reminder_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp753 = mobl.ref(false);
            
            
            var tmp752 = mobl.ref(null);
            
            
            var tmp751 = mobl.ref(null);
            
            var nodes221 = $("<span>");
            iternode3.append(nodes221);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp751, tmp752, tmp753, function(_, callback) {
              var root235 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node73 = $("<span>");
              
              var ref10 = mobl.ref("item__" + reminder_name.get());
              if(ref10.get() !== null) {
                node73.attr('id', ref10.get());
                subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
                  node73.attr('id', val);
                }));
                subs__.addSub(reminder_name.addEventListener('change', function() {
                  node73.attr('id', "item__" + reminder_name.get());
                }));
                
              }
              subs__.addSub(ref10.rebind());
              
              
              var tmp750 = mobl.ref(function(event, callback) {
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
                                       controls.remindme.remindersToSave.get().list(function(coll13) {
                                         coll13 = coll13.reverse();
                                         function processOne6() {
                                           var reminder;
                                           reminder = coll13.pop();
                                           var result__ = reminder.name == reminder_name.get();
                                           if(result__) {
                                             var result__ = reminder;
                                             reminderToRemove = result__;
                                             
                                             if(coll13.length > 0) processOne6(); else rest6();
                                             
                                           } else {
                                             {
                                               
                                               if(coll13.length > 0) processOne6(); else rest6();
                                               
                                             }
                                           }
                                         }
                                         function rest6() {
                                           var result__ = controls.remindme.remindersToSave.get().remove(reminderToRemove);
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll13.length > 0) processOne6(); else rest6();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes222 = $("<span>");
              node73.append(nodes222);
              subs__.addSub((ui.checkBox)(check, name, tmp750, function(_, callback) {
                var root236 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root236); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes222;
                nodes222 = node.contents();
                oldNodes.replaceWith(nodes222);
              }));
              root235.append(node73);
              callback(root235); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes221;
              nodes221 = node.contents();
              oldNodes.replaceWith(nodes221);
            }));
            
            var oldNodes = iternode3;
            iternode3 = iternode3.contents();
            oldNodes.replaceWith(iternode3);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
      });
    };
    renderList3();
    
    callback(root234); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes220;
    nodes220 = node.contents();
    oldNodes.replaceWith(nodes220);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  
  var tmp765 = mobl.ref(null);
  
  
  var tmp764 = mobl.ref(null);
  
  
  var tmp763 = mobl.ref(null);
  
  var nodes223 = $("<span>");
  root233.append(nodes223);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp763, tmp764, tmp765, function(_, callback) {
    var root237 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node74 = $("<span>");
    
    var val62 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val62 !== null) {
      subs__.addSub(mobl.domBind(node74, 'mousedown', val62));
    }
    
    var val63 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val63 !== null) {
      subs__.addSub(mobl.domBind(node74, 'mouseup', val63));
    }
    
    
    var tmp757 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash").show();
                         var result__ = controls.remindme.remindersToSave.get();
                         controls.remindme.remindersToSave.get().list(function(coll14) {
                           coll14 = coll14.reverse();
                           function processOne7() {
                             var reminder;
                             reminder = coll14.pop();
                             var result__ = mobl.add(reminder);
                             
                             if(coll14.length > 0) processOne7(); else rest7();
                             
                           }
                           function rest7() {
                             var result__ = 0;
                             controls.remindme.remindersToSave.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll14.length > 0) processOne7(); else rest7();
                         });
                         
                       });
    
    
    var tmp762 = mobl.ref(null);
    
    
    var tmp761 = mobl.ref(null);
    
    
    var tmp760 = mobl.ref(null);
    
    
    var tmp759 = mobl.ref(null);
    
    
    var tmp758 = mobl.ref(null);
    
    var nodes224 = $("<span>");
    node74.append(nodes224);
    subs__.addSub((ui.image)(saveButtonImage, tmp758, tmp759, tmp757, tmp760, tmp761, tmp762, function(_, callback) {
      var root238 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root238); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes224;
      nodes224 = node.contents();
      oldNodes.replaceWith(nodes224);
    }));
    root237.append(node74);
    callback(root237); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes223;
    nodes223 = node.contents();
    oldNodes.replaceWith(nodes223);
  }));
  callback(root233); return subs__;
  
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root239 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp766 = mobl.ref(controls.remindme.loadPresets());
  
  var nodes225 = $("<span>");
  root239.append(nodes225);
  subs__.addSub((controls.remindme.reminderForm)(tmp766, function(_, callback) {
    var root240 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root240); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes225;
    nodes225 = node.contents();
    oldNodes.replaceWith(nodes225);
  }));
  callback(root239); return subs__;
  
  return subs__;
};
