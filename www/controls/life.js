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
  var root2392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5285 = mobl.ref(null);
  
  
  var tmp5284 = mobl.ref(null);
  
  
  var tmp5283 = mobl.ref(null);
  
  var nodes1940 = $("<span>");
  root2392.append(nodes1940);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp5283, tmp5284, tmp5285, function(_, callback) {
    var root2393 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node906 = mobl.loadingSpan();
    root2393.append(node906);
    var list141;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList141 = function() {
      var subs__ = listSubs__;
      list141 = presets.get();
      list141.list(function(results141) {
        node906.empty();
        for(var i173 = 0; i173 < results141.length; i173++) {
          (function() {
            var iternode141 = $("<span>");
            node906.append(iternode141);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results141), i173), "_1");name = mobl.ref(mobl.ref(mobl.ref(results141), i173), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results141), i173), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results141), i173), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp5282 = mobl.ref(false);
            
            
            var tmp5281 = mobl.ref(null);
            
            
            var tmp5280 = mobl.ref(null);
            
            var nodes1941 = $("<span>");
            iternode141.append(nodes1941);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp5280, tmp5281, tmp5282, function(_, callback) {
              var root2394 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node907 = $("<span>");
              
              var ref633 = mobl.ref("item__" + event_name.get());
              if(ref633.get() !== null) {
                node907.attr('id', ref633.get());
                subs__.addSub(ref633.addEventListener('change', function(_, ref, val) {
                  node907.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node907.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref633.rebind());
              
              
              var tmp5279 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "bold");
                                     var result__ = new models.lifeevents.LifeEvent({'name': event_name.get(), 'stress': stress.get(), 'date': mobl.now(), 'keywords': keywords.get()});
                                     var lifeEvent = result__;
                                     var result__ = controls.life.eventsToSave.get().push(lifeEvent);
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "normal");
                                       var result__ = null;
                                       var eventToRemove = result__;
                                       var result__ = controls.life.eventsToSave.get();
                                       controls.life.eventsToSave.get().list(function(coll373) {
                                         coll373 = coll373.reverse();
                                         function processOne59() {
                                           var event;
                                           event = coll373.pop();
                                           var result__ = event.name == event_name.get();
                                           if(result__) {
                                             var result__ = event;
                                             eventToRemove = result__;
                                             
                                             if(coll373.length > 0) processOne59(); else rest59();
                                             
                                           } else {
                                             {
                                               
                                               if(coll373.length > 0) processOne59(); else rest59();
                                               
                                             }
                                           }
                                         }
                                         function rest59() {
                                           var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll373.length > 0) processOne59(); else rest59();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes1942 = $("<span>");
              node907.append(nodes1942);
              subs__.addSub((ui.checkBox)(check, name, tmp5279, function(_, callback) {
                var root2395 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2395); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1942;
                nodes1942 = node.contents();
                oldNodes.replaceWith(nodes1942);
              }));
              root2394.append(node907);
              callback(root2394); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1941;
              nodes1941 = node.contents();
              oldNodes.replaceWith(nodes1941);
            }));
            
            var oldNodes = iternode141;
            iternode141 = iternode141.contents();
            oldNodes.replaceWith(iternode141);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list141.addEventListener('change', function() { listSubs__.unsubscribe(); renderList141(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList141(true); }));
      });
    };
    renderList141();
    
    callback(root2393); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1940;
    nodes1940 = node.contents();
    oldNodes.replaceWith(nodes1940);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  
  var tmp5294 = mobl.ref(null);
  
  
  var tmp5293 = mobl.ref(null);
  
  
  var tmp5292 = mobl.ref(null);
  
  var nodes1943 = $("<span>");
  root2392.append(nodes1943);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp5292, tmp5293, tmp5294, function(_, callback) {
    var root2396 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node908 = $("<span>");
    
    var val606 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val606 !== null) {
      subs__.addSub(mobl.domBind(node908, 'mousedown', val606));
    }
    
    var val607 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val607 !== null) {
      subs__.addSub(mobl.domBind(node908, 'mouseup', val607));
    }
    
    
    var tmp5286 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Life").show();
                         var result__ = controls.life.eventsToSave.get();
                         controls.life.eventsToSave.get().list(function(coll374) {
                           coll374 = coll374.reverse();
                           function processOne60() {
                             var event;
                             event = coll374.pop();
                             var result__ = mobl.add(event);
                             
                             if(coll374.length > 0) processOne60(); else rest60();
                             
                           }
                           function rest60() {
                             var result__ = 0;
                             controls.life.eventsToSave.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll374.length > 0) processOne60(); else rest60();
                         });
                         
                       });
    
    
    var tmp5291 = mobl.ref(null);
    
    
    var tmp5290 = mobl.ref(null);
    
    
    var tmp5289 = mobl.ref(null);
    
    
    var tmp5288 = mobl.ref(null);
    
    
    var tmp5287 = mobl.ref(null);
    
    var nodes1944 = $("<span>");
    node908.append(nodes1944);
    subs__.addSub((ui.image)(saveButtonImage, tmp5287, tmp5288, tmp5286, tmp5289, tmp5290, tmp5291, function(_, callback) {
      var root2397 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2397); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1944;
      nodes1944 = node.contents();
      oldNodes.replaceWith(nodes1944);
    }));
    root2396.append(node908);
    callback(root2396); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1943;
    nodes1943 = node.contents();
    oldNodes.replaceWith(nodes1943);
  }));
  callback(root2392); return subs__;
  
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root2398 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5295 = mobl.ref(controls.life.loadPresets());
  
  var nodes1945 = $("<span>");
  root2398.append(nodes1945);
  subs__.addSub((controls.life.lifeForm)(tmp5295, function(_, callback) {
    var root2399 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2399); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1945;
    nodes1945 = node.contents();
    oldNodes.replaceWith(nodes1945);
  }));
  callback(root2398); return subs__;
  
  return subs__;
};
