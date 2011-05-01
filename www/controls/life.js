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
  var root9334 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19586 = mobl.ref(null);
  
  
  var tmp19585 = mobl.ref(null);
  
  
  var tmp19584 = mobl.ref(null);
  
  var nodes7492 = $("<span>");
  root9334.append(nodes7492);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp19584, tmp19585, tmp19586, function(_, callback) {
    var root9335 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3348 = mobl.loadingSpan();
    root9335.append(node3348);
    var list570;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList570 = function() {
      var subs__ = listSubs__;
      list570 = presets.get();
      list570.list(function(results572) {
        node3348.empty();
        for(var i695 = 0; i695 < results572.length; i695++) {
          (function() {
            var iternode570 = $("<span>");
            node3348.append(iternode570);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results572), i695), "_1");name = mobl.ref(mobl.ref(mobl.ref(results572), i695), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results572), i695), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results572), i695), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp19583 = mobl.ref(false);
            
            
            var tmp19582 = mobl.ref(null);
            
            
            var tmp19581 = mobl.ref(null);
            
            var nodes7493 = $("<span>");
            iternode570.append(nodes7493);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp19581, tmp19582, tmp19583, function(_, callback) {
              var root9336 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node3349 = $("<span>");
              
              var ref2504 = mobl.ref("item__" + event_name.get());
              if(ref2504.get() !== null) {
                node3349.attr('id', ref2504.get());
                subs__.addSub(ref2504.addEventListener('change', function(_, ref, val) {
                  node3349.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node3349.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref2504.rebind());
              
              
              var tmp19580 = mobl.ref(function(event, callback) {
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
                                       controls.life.eventsToSave.get().list(function(coll1269) {
                                         coll1269 = coll1269.reverse();
                                         function processOne124() {
                                           var event;
                                           event = coll1269.pop();
                                           var result__ = event.name == event_name.get();
                                           if(result__) {
                                             var result__ = event;
                                             eventToRemove = result__;
                                             
                                             if(coll1269.length > 0) processOne124(); else rest124();
                                             
                                           } else {
                                             {
                                               
                                               if(coll1269.length > 0) processOne124(); else rest124();
                                               
                                             }
                                           }
                                         }
                                         function rest124() {
                                           var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll1269.length > 0) processOne124(); else rest124();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes7494 = $("<span>");
              node3349.append(nodes7494);
              subs__.addSub((ui.checkBox)(check, name, tmp19580, function(_, callback) {
                var root9337 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9337); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7494;
                nodes7494 = node.contents();
                oldNodes.replaceWith(nodes7494);
              }));
              root9336.append(node3349);
              callback(root9336); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7493;
              nodes7493 = node.contents();
              oldNodes.replaceWith(nodes7493);
            }));
            
            var oldNodes = iternode570;
            iternode570 = iternode570.contents();
            oldNodes.replaceWith(iternode570);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list570.addEventListener('change', function() { listSubs__.unsubscribe(); renderList570(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList570(true); }));
      });
    };
    renderList570();
    
    callback(root9335); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7492;
    nodes7492 = node.contents();
    oldNodes.replaceWith(nodes7492);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  
  var tmp19595 = mobl.ref(null);
  
  
  var tmp19594 = mobl.ref(null);
  
  
  var tmp19593 = mobl.ref(null);
  
  var nodes7495 = $("<span>");
  root9334.append(nodes7495);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp19593, tmp19594, tmp19595, function(_, callback) {
    var root9338 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3350 = $("<span>");
    
    var val1478 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1478 !== null) {
      subs__.addSub(mobl.domBind(node3350, 'mousedown', val1478));
    }
    
    var val1479 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1479 !== null) {
      subs__.addSub(mobl.domBind(node3350, 'mouseup', val1479));
    }
    
    
    var tmp19587 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = controls.life.eventsToSave.get();
                         controls.life.eventsToSave.get().list(function(coll1270) {
                           coll1270 = coll1270.reverse();
                           function processOne125() {
                             var event;
                             event = coll1270.pop();
                             var result__ = mobl.add(event);
                             
                             if(coll1270.length > 0) processOne125(); else rest125();
                             
                           }
                           function rest125() {
                             var result__ = 0;
                             controls.life.eventsToSave.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1270.length > 0) processOne125(); else rest125();
                         });
                         
                       });
    
    
    var tmp19592 = mobl.ref(null);
    
    
    var tmp19591 = mobl.ref(null);
    
    
    var tmp19590 = mobl.ref(null);
    
    
    var tmp19589 = mobl.ref(null);
    
    
    var tmp19588 = mobl.ref(null);
    
    var nodes7496 = $("<span>");
    node3350.append(nodes7496);
    subs__.addSub((ui.image)(saveButtonImage, tmp19588, tmp19589, tmp19587, tmp19590, tmp19591, tmp19592, function(_, callback) {
      var root9339 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9339); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7496;
      nodes7496 = node.contents();
      oldNodes.replaceWith(nodes7496);
    }));
    root9338.append(node3350);
    callback(root9338); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7495;
    nodes7495 = node.contents();
    oldNodes.replaceWith(nodes7495);
  }));
  callback(root9334); return subs__;
  
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root9340 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19596 = mobl.ref(controls.life.loadPresets());
  
  var nodes7497 = $("<span>");
  root9340.append(nodes7497);
  subs__.addSub((controls.life.lifeForm)(tmp19596, function(_, callback) {
    var root9341 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9341); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7497;
    nodes7497 = node.contents();
    oldNodes.replaceWith(nodes7497);
  }));
  callback(root9340); return subs__;
  
  return subs__;
};
