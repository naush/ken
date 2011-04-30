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
  var root4260 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8805 = mobl.ref(null);
  
  
  var tmp8804 = mobl.ref(null);
  
  
  var tmp8803 = mobl.ref(null);
  
  var nodes3391 = $("<span>");
  root4260.append(nodes3391);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp8803, tmp8804, tmp8805, function(_, callback) {
    var root4261 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1515 = mobl.loadingSpan();
    root4261.append(node1515);
    var list268;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList268 = function() {
      var subs__ = listSubs__;
      list268 = presets.get();
      list268.list(function(results268) {
        node1515.empty();
        for(var i315 = 0; i315 < results268.length; i315++) {
          (function() {
            var iternode268 = $("<span>");
            node1515.append(iternode268);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results268), i315), "_1");name = mobl.ref(mobl.ref(mobl.ref(results268), i315), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results268), i315), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results268), i315), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp8802 = mobl.ref(false);
            
            
            var tmp8801 = mobl.ref(null);
            
            
            var tmp8800 = mobl.ref(null);
            
            var nodes3392 = $("<span>");
            iternode268.append(nodes3392);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8800, tmp8801, tmp8802, function(_, callback) {
              var root4262 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node1516 = $("<span>");
              
              var ref1158 = mobl.ref("item__" + event_name.get());
              if(ref1158.get() !== null) {
                node1516.attr('id', ref1158.get());
                subs__.addSub(ref1158.addEventListener('change', function(_, ref, val) {
                  node1516.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node1516.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref1158.rebind());
              
              
              var tmp8799 = mobl.ref(function(event, callback) {
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
                                       controls.life.eventsToSave.get().list(function(coll506) {
                                         coll506 = coll506.reverse();
                                         function processOne51() {
                                           var event;
                                           event = coll506.pop();
                                           var result__ = event.name == event_name.get();
                                           if(result__) {
                                             var result__ = event;
                                             eventToRemove = result__;
                                             
                                             if(coll506.length > 0) processOne51(); else rest51();
                                             
                                           } else {
                                             {
                                               
                                               if(coll506.length > 0) processOne51(); else rest51();
                                               
                                             }
                                           }
                                         }
                                         function rest51() {
                                           var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                           var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "normal");
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll506.length > 0) processOne51(); else rest51();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes3393 = $("<span>");
              node1516.append(nodes3393);
              subs__.addSub((ui.checkBox)(check, name, tmp8799, function(_, callback) {
                var root4263 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4263); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3393;
                nodes3393 = node.contents();
                oldNodes.replaceWith(nodes3393);
              }));
              root4262.append(node1516);
              callback(root4262); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3392;
              nodes3392 = node.contents();
              oldNodes.replaceWith(nodes3392);
            }));
            
            var oldNodes = iternode268;
            iternode268 = iternode268.contents();
            oldNodes.replaceWith(iternode268);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list268.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
      });
    };
    renderList268();
    
    callback(root4261); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3391;
    nodes3391 = node.contents();
    oldNodes.replaceWith(nodes3391);
  }));
  
  var tmp8815 = mobl.ref(null);
  
  
  var tmp8814 = mobl.ref(null);
  
  
  var tmp8813 = mobl.ref(null);
  
  var nodes3394 = $("<span>");
  root4260.append(nodes3394);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp8813, tmp8814, tmp8815, function(_, callback) {
    var root4264 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8807 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = controls.life.eventsToSave.get();
                         controls.life.eventsToSave.get().list(function(coll507) {
                           coll507 = coll507.reverse();
                           function processOne52() {
                             var event;
                             event = coll507.pop();
                             var result__ = mobl.add(event);
                             
                             if(coll507.length > 0) processOne52(); else rest52();
                             
                           }
                           function rest52() {
                             var result__ = 0;
                             controls.life.eventsToSave.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll507.length > 0) processOne52(); else rest52();
                         });
                         
                       });
    
    
    var tmp8806 = mobl.ref("resources/images/save.png");
    
    
    var tmp8812 = mobl.ref(null);
    
    
    var tmp8811 = mobl.ref(null);
    
    
    var tmp8810 = mobl.ref(null);
    
    
    var tmp8809 = mobl.ref(null);
    
    
    var tmp8808 = mobl.ref(null);
    
    var nodes3395 = $("<span>");
    root4264.append(nodes3395);
    subs__.addSub((ui.image)(tmp8806, tmp8808, tmp8809, tmp8807, tmp8810, tmp8811, tmp8812, function(_, callback) {
      var root4265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4265); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3395;
      nodes3395 = node.contents();
      oldNodes.replaceWith(nodes3395);
    }));
    callback(root4264); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3394;
    nodes3394 = node.contents();
    oldNodes.replaceWith(nodes3394);
  }));
  callback(root4260); return subs__;
  
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root4266 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8816 = mobl.ref(controls.life.loadPresets());
  
  var nodes3396 = $("<span>");
  root4266.append(nodes3396);
  subs__.addSub((controls.life.lifeForm)(tmp8816, function(_, callback) {
    var root4267 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4267); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3396;
    nodes3396 = node.contents();
    oldNodes.replaceWith(nodes3396);
  }));
  callback(root4266); return subs__;
  
  return subs__;
};
