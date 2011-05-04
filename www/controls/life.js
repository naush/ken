mobl.provides('controls.life');
mobl.provides('models');
mobl.provides('models.lifeevents');
mobl.provides('ui');
mobl.provides('mobl');
mobl.provides('controls.life');
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
  var root475 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp1522 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1521 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1520 = mobl.ref(result__);
  
  var nodes413 = $("<span>");
  root475.append(nodes413);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp1520, tmp1521, tmp1522, function(_, callback) {
    var root476 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node237 = mobl.loadingSpan();
    root476.append(node237);
    var list13;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList13 = function() {
      var subs__ = listSubs__;
      list13 = presets.get();
      list13.list(function(results13) {
        node237.empty();
        for(var i21 = 0; i21 < results13.length; i21++) {
          (function() {
            var iternode13 = $("<span>");
            node237.append(iternode13);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results13), i21), "_1");name = mobl.ref(mobl.ref(mobl.ref(results13), i21), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results13), i21), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results13), i21), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            var result__ = false;
            var tmp1519 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1518 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1517 = mobl.ref(result__);
            
            var nodes414 = $("<span>");
            iternode13.append(nodes414);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1517, tmp1518, tmp1519, function(_, callback) {
              var root477 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node238 = $("<span>");
              
              var ref122 = mobl.ref("item__" + event_name.get());
              if(ref122.get() !== null) {
                node238.attr('id', ref122.get());
                subs__.addSub(ref122.addEventListener('change', function(_, ref, val) {
                  node238.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node238.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref122.rebind());
              
              var result__ = function(event, callback) {
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
                                   controls.life.eventsToSave.get().list(function(coll38) {
                                     coll38 = coll38.reverse();
                                     function processOne12() {
                                       var event;
                                       event = coll38.pop();
                                       var result__ = event.name == event_name.get();
                                       if(result__) {
                                         var result__ = event;
                                         eventToRemove = result__;
                                         
                                         if(coll38.length > 0) processOne12(); else rest12();
                                         
                                       } else {
                                         {
                                           
                                           if(coll38.length > 0) processOne12(); else rest12();
                                           
                                         }
                                       }
                                     }
                                     function rest12() {
                                       var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                       if(callback && callback.apply) callback(); return;
                                     }
                                     if(coll38.length > 0) processOne12(); else rest12();
                                   });
                                   
                                 }
                               }
                             };
              var tmp1516 = mobl.ref(result__);
              
              var nodes415 = $("<span>");
              node238.append(nodes415);
              subs__.addSub((ui.checkBox)(check, name, tmp1516, function(_, callback) {
                var root478 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root478); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes415;
                nodes415 = node.contents();
                oldNodes.replaceWith(nodes415);
              }));
              root477.append(node238);
              callback(root477); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes414;
              nodes414 = node.contents();
              oldNodes.replaceWith(nodes414);
            }));
            
            var oldNodes = iternode13;
            iternode13 = iternode13.contents();
            oldNodes.replaceWith(iternode13);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list13.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
      });
    };
    renderList13();
    
    callback(root476); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes413;
    nodes413 = node.contents();
    oldNodes.replaceWith(nodes413);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  var result__ = null;
  var tmp1531 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1530 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1529 = mobl.ref(result__);
  
  var nodes416 = $("<span>");
  root475.append(nodes416);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp1529, tmp1530, tmp1531, function(_, callback) {
    var root479 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node239 = $("<span>");
    
    var val179 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val179 !== null) {
      subs__.addSub(mobl.domBind(node239, 'mousedown', val179));
    }
    
    var val180 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val180 !== null) {
      subs__.addSub(mobl.domBind(node239, 'mouseup', val180));
    }
    
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.$("#flash__Life").show();
                     var result__ = controls.life.eventsToSave.get();
                     controls.life.eventsToSave.get().list(function(coll39) {
                       coll39 = coll39.reverse();
                       function processOne13() {
                         var event;
                         event = coll39.pop();
                         var result__ = mobl.add(event);
                         
                         if(coll39.length > 0) processOne13(); else rest13();
                         
                       }
                       function rest13() {
                         var result__ = 0;
                         controls.life.eventsToSave.get().length = result__;
                         if(callback && callback.apply) callback(); return;
                       }
                       if(coll39.length > 0) processOne13(); else rest13();
                     });
                     
                   };
    var tmp1523 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1528 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1527 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1526 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1525 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1524 = mobl.ref(result__);
    
    var nodes417 = $("<span>");
    node239.append(nodes417);
    subs__.addSub((ui.image)(saveButtonImage, tmp1524, tmp1525, tmp1523, tmp1526, tmp1527, tmp1528, function(_, callback) {
      var root480 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root480); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes417;
      nodes417 = node.contents();
      oldNodes.replaceWith(nodes417);
    }));
    root479.append(node239);
    callback(root479); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes416;
    nodes416 = node.contents();
    oldNodes.replaceWith(nodes416);
  }));
  callback(root475); return subs__;
  
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root481 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = controls.life.loadPresets();
  var tmp1532 = mobl.ref(result__);
  
  var nodes418 = $("<span>");
  root481.append(nodes418);
  subs__.addSub((controls.life.lifeForm)(tmp1532, function(_, callback) {
    var root482 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root482); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes418;
    nodes418 = node.contents();
    oldNodes.replaceWith(nodes418);
  }));
  callback(root481); return subs__;
  
  return subs__;
};
