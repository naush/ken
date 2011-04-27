mobl.provides('controls.life');
mobl.provides('models');
mobl.provides('mobl');
controls.life.loadPresets = function() {
   var __this = this;
  var presets = [];
  
  presets.push(new mobl.Tuple(false, "Traffic Tickets", 11, ["anxiety", "mindfulness", "loosen", "obsessive thinking"]));
  presets.push(new mobl.Tuple(false, "Holidays", 12, ["confidence", "forgiveness", "joy", "relationship", "gratitude", "heart", "love", "power", "affirmations", "anxiety", "breathing"]));
  presets.push(new mobl.Tuple(false, "Family get-togethers", 15, ["family", "confidence", "forgiveness", "joy", "relationship", "gratitude", "heart", "love", "power", "affirmations"]));
  presets.push(new mobl.Tuple(false, "Vacation", 15, ["spiritual", "awakening", "loosen", "meditation", "relax", "detox", "peace", "stillness", "balance", "cleansing"]));
  presets.push(new mobl.Tuple(false, "Change in eating habits", 15, ["food", "nourishment", "excersice", "detox", "yoga", "balance", "body", "chakra", "wellness", "immunity", "immune"]));
  presets.push(new mobl.Tuple(false, "Change in sleeping habits", 16, ["sleep", "relaxation", "anxiety", "breathing", "detox", "yoga", "balance", "body", "chakra", "wellness", "peace", "meditation"]));
  return presets;
};

controls.life.eventsToSave = mobl.ref([]);

controls.life.lifeForm = function(presets, elements, callback) {
  var root27032 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes18239 = $("<span>");
  root27032.append(nodes18239);
  subs__.addSub((ui.group)(function(_, callback) {
    var root27033 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12632 = mobl.loadingSpan();
    root27033.append(node12632);
    var list2853;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2853 = function() {
      var subs__ = listSubs__;
      list2853 = presets.get();
      list2853.list(function(results3055) {
        node12632.empty();
        for(var i2853 = 0; i2853 < results3055.length; i2853++) {
          (function() {
            var iternode2853 = $("<span>");
            node12632.append(iternode2853);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results3055), i2853), "_1");name = mobl.ref(mobl.ref(mobl.ref(results3055), i2853), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results3055), i2853), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results3055), i2853), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp32136 = mobl.ref(false);
            
            
            var tmp32135 = mobl.ref(null);
            
            
            var tmp32134 = mobl.ref(null);
            
            var nodes18240 = $("<span>");
            iternode2853.append(nodes18240);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32134, tmp32135, tmp32136, function(_, callback) {
              var root27034 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node12633 = $("<span>");
              
              var ref13539 = mobl.ref("item__" + event_name.get());
              if(ref13539.get() !== null) {
                node12633.attr('id', ref13539.get());
                subs__.addSub(ref13539.addEventListener('change', function(_, ref, val) {
                  node12633.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node12633.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref13539.rebind());
              
              
              var tmp32133 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = new models.lifeevents.LifeEvent({'name': event_name.get(), 'stress': stress.get(), 'date': mobl.now(), 'keywords': keywords.get()});
                                     var lifeEvent = result__;
                                     var result__ = controls.life.eventsToSave.get().push(lifeEvent);
                                     var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "bold");
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       var result__ = null;
                                       var eventToRemove = result__;
                                       var result__ = controls.life.eventsToSave.get();
                                       controls.life.eventsToSave.get().list(function(coll5031) {
                                         coll5031 = coll5031.reverse();
                                         function processOne633() {
                                           var event;
                                           event = coll5031.pop();
                                           var result__ = event.name == event_name.get();
                                           if(result__) {
                                             var result__ = event;
                                             eventToRemove = result__;
                                             
                                             if(coll5031.length > 0) processOne633(); else rest633();
                                             
                                           } else {
                                             {
                                               
                                               if(coll5031.length > 0) processOne633(); else rest633();
                                               
                                             }
                                           }
                                         }
                                         function rest633() {
                                           var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                           var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "normal");
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll5031.length > 0) processOne633(); else rest633();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes18241 = $("<span>");
              node12633.append(nodes18241);
              subs__.addSub((ui.checkBox)(check, name, tmp32133, function(_, callback) {
                var root27035 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root27035); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes18241;
                nodes18241 = node.contents();
                oldNodes.replaceWith(nodes18241);
              }));
              root27034.append(node12633);
              
              var node12634 = $("<span>");
              
              var ref13538 = mobl.ref("timestamp__" + event_name.get());
              if(ref13538.get() !== null) {
                node12634.attr('id', ref13538.get());
                subs__.addSub(ref13538.addEventListener('change', function(_, ref, val) {
                  node12634.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node12634.attr('id', "timestamp__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref13538.rebind());
              
              root27034.append(node12634);
              callback(root27034); return subs__;
              
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18240;
              nodes18240 = node.contents();
              oldNodes.replaceWith(nodes18240);
            }));
            
            var oldNodes = iternode2853;
            iternode2853 = iternode2853.contents();
            oldNodes.replaceWith(iternode2853);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2853.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2853(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2853(true); }));
      });
    };
    renderList2853();
    
    
    var tmp32138 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = controls.life.eventsToSave.get();
                         controls.life.eventsToSave.get().list(function(coll5032) {
                           coll5032 = coll5032.reverse();
                           function processOne634() {
                             var event;
                             event = coll5032.pop();
                             var result__ = mobl.add(event);
                             
                             if(coll5032.length > 0) processOne634(); else rest634();
                             
                           }
                           function rest634() {
                             var result__ = 0;
                             controls.life.eventsToSave.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll5032.length > 0) processOne634(); else rest634();
                         });
                         
                       });
    
    
    var tmp32137 = mobl.ref("Update");
    
    var nodes18242 = $("<span>");
    root27033.append(nodes18242);
    subs__.addSub((ui.button)(tmp32137, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp32138, function(_, callback) {
      var root27036 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27036); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18242;
      nodes18242 = node.contents();
      oldNodes.replaceWith(nodes18242);
    }));
    callback(root27033); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18239;
    nodes18239 = node.contents();
    oldNodes.replaceWith(nodes18239);
  }));
  callback(root27032); return subs__;
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root27037 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp32139 = mobl.ref(controls.life.loadPresets());
  
  var nodes18243 = $("<span>");
  root27037.append(nodes18243);
  subs__.addSub((controls.life.lifeForm)(tmp32139, function(_, callback) {
    var root27038 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root27038); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18243;
    nodes18243 = node.contents();
    oldNodes.replaceWith(nodes18243);
  }));
  callback(root27037); return subs__;
  
  return subs__;
};
