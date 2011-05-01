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
  var root9021 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18705 = mobl.ref(null);
  
  
  var tmp18704 = mobl.ref(null);
  
  
  var tmp18703 = mobl.ref(null);
  
  var nodes7217 = $("<span>");
  root9021.append(nodes7217);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp18703, tmp18704, tmp18705, function(_, callback) {
    var root9022 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3254 = mobl.loadingSpan();
    root9022.append(node3254);
    var list555;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList555 = function() {
      var subs__ = listSubs__;
      list555 = presets.get();
      list555.list(function(results557) {
        node3254.empty();
        for(var i674 = 0; i674 < results557.length; i674++) {
          (function() {
            var iternode555 = $("<span>");
            node3254.append(iternode555);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results557), i674), "_1");name = mobl.ref(mobl.ref(mobl.ref(results557), i674), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results557), i674), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results557), i674), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp18702 = mobl.ref(false);
            
            
            var tmp18701 = mobl.ref(null);
            
            
            var tmp18700 = mobl.ref(null);
            
            var nodes7218 = $("<span>");
            iternode555.append(nodes7218);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18700, tmp18701, tmp18702, function(_, callback) {
              var root9023 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node3255 = $("<span>");
              
              var ref2484 = mobl.ref("item__" + event_name.get());
              if(ref2484.get() !== null) {
                node3255.attr('id', ref2484.get());
                subs__.addSub(ref2484.addEventListener('change', function(_, ref, val) {
                  node3255.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node3255.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref2484.rebind());
              
              
              var tmp18699 = mobl.ref(function(event, callback) {
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
                                       controls.life.eventsToSave.get().list(function(coll1248) {
                                         coll1248 = coll1248.reverse();
                                         function processOne109() {
                                           var event;
                                           event = coll1248.pop();
                                           var result__ = event.name == event_name.get();
                                           if(result__) {
                                             var result__ = event;
                                             eventToRemove = result__;
                                             
                                             if(coll1248.length > 0) processOne109(); else rest109();
                                             
                                           } else {
                                             {
                                               
                                               if(coll1248.length > 0) processOne109(); else rest109();
                                               
                                             }
                                           }
                                         }
                                         function rest109() {
                                           var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                           var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "normal");
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll1248.length > 0) processOne109(); else rest109();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes7219 = $("<span>");
              node3255.append(nodes7219);
              subs__.addSub((ui.checkBox)(check, name, tmp18699, function(_, callback) {
                var root9024 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9024); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7219;
                nodes7219 = node.contents();
                oldNodes.replaceWith(nodes7219);
              }));
              root9023.append(node3255);
              callback(root9023); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7218;
              nodes7218 = node.contents();
              oldNodes.replaceWith(nodes7218);
            }));
            
            var oldNodes = iternode555;
            iternode555 = iternode555.contents();
            oldNodes.replaceWith(iternode555);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list555.addEventListener('change', function() { listSubs__.unsubscribe(); renderList555(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList555(true); }));
      });
    };
    renderList555();
    
    callback(root9022); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7217;
    nodes7217 = node.contents();
    oldNodes.replaceWith(nodes7217);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  
  var tmp18714 = mobl.ref(null);
  
  
  var tmp18713 = mobl.ref(null);
  
  
  var tmp18712 = mobl.ref(null);
  
  var nodes7220 = $("<span>");
  root9021.append(nodes7220);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp18712, tmp18713, tmp18714, function(_, callback) {
    var root9025 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3256 = $("<span>");
    
    var val1400 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1400 !== null) {
      subs__.addSub(mobl.domBind(node3256, 'mousedown', val1400));
    }
    
    var val1401 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1401 !== null) {
      subs__.addSub(mobl.domBind(node3256, 'mouseup', val1401));
    }
    
    
    var tmp18706 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = controls.life.eventsToSave.get();
                         controls.life.eventsToSave.get().list(function(coll1249) {
                           coll1249 = coll1249.reverse();
                           function processOne110() {
                             var event;
                             event = coll1249.pop();
                             var result__ = mobl.add(event);
                             
                             if(coll1249.length > 0) processOne110(); else rest110();
                             
                           }
                           function rest110() {
                             var result__ = 0;
                             controls.life.eventsToSave.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1249.length > 0) processOne110(); else rest110();
                         });
                         
                       });
    
    
    var tmp18711 = mobl.ref(null);
    
    
    var tmp18710 = mobl.ref(null);
    
    
    var tmp18709 = mobl.ref(null);
    
    
    var tmp18708 = mobl.ref(null);
    
    
    var tmp18707 = mobl.ref(null);
    
    var nodes7221 = $("<span>");
    node3256.append(nodes7221);
    subs__.addSub((ui.image)(saveButtonImage, tmp18707, tmp18708, tmp18706, tmp18709, tmp18710, tmp18711, function(_, callback) {
      var root9026 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9026); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7221;
      nodes7221 = node.contents();
      oldNodes.replaceWith(nodes7221);
    }));
    root9025.append(node3256);
    callback(root9025); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7220;
    nodes7220 = node.contents();
    oldNodes.replaceWith(nodes7220);
  }));
  callback(root9021); return subs__;
  
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root9027 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18715 = mobl.ref(controls.life.loadPresets());
  
  var nodes7222 = $("<span>");
  root9027.append(nodes7222);
  subs__.addSub((controls.life.lifeForm)(tmp18715, function(_, callback) {
    var root9028 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9028); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7222;
    nodes7222 = node.contents();
    oldNodes.replaceWith(nodes7222);
  }));
  callback(root9027); return subs__;
  
  return subs__;
};
