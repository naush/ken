mobl.provides('controls.life');
mobl.provides('models');
mobl.provides('models.lifeevents');
mobl.provides('ui');
mobl.provides('mobl');
mobl.provides('controls.life');
controls.life.loadPresets = function() {
   var __this = this;
  var presets = [];
  
  presets.push(new mobl.Tuple(false, "Holidays", 12, ["confidence", "forgiveness", "joy", "relationship", "gratitude", "heart", "love", "power", "affirmations", "anxiety", "breathing"]));
  presets.push(new mobl.Tuple(false, "Parents visiting", 11, ["anxiety", "mindfulness", "loosen", "obsessive thinking"]));
  presets.push(new mobl.Tuple(false, "Many family get-togethers", 15, ["family", "confidence", "forgiveness", "joy", "relationship", "gratitude", "heart", "love", "power", "affirmations"]));
  presets.push(new mobl.Tuple(false, "Vacation", 15, ["spiritual", "awakening", "loosen", "meditation", "relax", "detox", "peace", "stillness", "balance", "cleansing"]));
  presets.push(new mobl.Tuple(false, "Change in eating habits", 15, ["food", "nourishment", "excersice", "detox", "yoga", "balance", "body", "chakra", "wellness", "immunity", "immune"]));
  presets.push(new mobl.Tuple(false, "Change in sleeping habits", 16, ["sleep", "relaxation", "anxiety", "breathing", "detox", "yoga", "balance", "body", "chakra", "wellness", "peace", "meditation"]));
  return presets;
};

controls.life.eventsToSave = mobl.ref([]);

controls.life.lifeForm = function(presets, elements, callback) {
  var root781 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp2569 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2568 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2567 = mobl.ref(result__);
  
  var nodes695 = $("<span>");
  root781.append(nodes695);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp2567, tmp2568, tmp2569, function(_, callback) {
    var root782 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node376 = mobl.loadingSpan();
    root782.append(node376);
    var list22;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList22 = function() {
      var subs__ = listSubs__;
      list22 = presets.get();
      list22.list(function(results25) {
        node376.empty();
        for(var i35 = 0; i35 < results25.length; i35++) {
          (function() {
            var iternode22 = $("<span>");
            node376.append(iternode22);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results25), i35), "_1");name = mobl.ref(mobl.ref(mobl.ref(results25), i35), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results25), i35), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results25), i35), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            var result__ = false;
            var tmp2566 = mobl.ref(result__);
            
            var result__ = null;
            var tmp2565 = mobl.ref(result__);
            
            var result__ = null;
            var tmp2564 = mobl.ref(result__);
            
            var nodes696 = $("<span>");
            iternode22.append(nodes696);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp2564, tmp2565, tmp2566, function(_, callback) {
              var root783 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node377 = $("<span>");
              
              var ref165 = mobl.ref("item__" + event_name.get());
              if(ref165.get() !== null) {
                node377.attr('id', ref165.get());
                subs__.addSub(ref165.addEventListener('change', function(_, ref, val) {
                  node377.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node377.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref165.rebind());
              
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
                                   controls.life.eventsToSave.get().list(function(coll80) {
                                     coll80 = coll80.reverse();
                                     function processOne37() {
                                       var event;
                                       event = coll80.pop();
                                       var result__ = event.name == event_name.get();
                                       if(result__) {
                                         var result__ = event;
                                         eventToRemove = result__;
                                         
                                         if(coll80.length > 0) processOne37(); else rest37();
                                         
                                       } else {
                                         {
                                           
                                           if(coll80.length > 0) processOne37(); else rest37();
                                           
                                         }
                                       }
                                     }
                                     function rest37() {
                                       var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                       if(callback && callback.apply) callback(); return;
                                     }
                                     if(coll80.length > 0) processOne37(); else rest37();
                                   });
                                   
                                 }
                               }
                             };
              var tmp2563 = mobl.ref(result__);
              
              var nodes697 = $("<span>");
              node377.append(nodes697);
              subs__.addSub((ui.checkBox)(check, name, tmp2563, function(_, callback) {
                var root784 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root784); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes697;
                nodes697 = node.contents();
                oldNodes.replaceWith(nodes697);
              }));
              root783.append(node377);
              callback(root783); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes696;
              nodes696 = node.contents();
              oldNodes.replaceWith(nodes696);
            }));
            
            var oldNodes = iternode22;
            iternode22 = iternode22.contents();
            oldNodes.replaceWith(iternode22);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list22.addEventListener('change', function() { listSubs__.unsubscribe(); renderList22(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList22(true); }));
      });
    };
    renderList22();
    
    callback(root782); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes695;
    nodes695 = node.contents();
    oldNodes.replaceWith(nodes695);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  var result__ = null;
  var tmp2578 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2577 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2576 = mobl.ref(result__);
  
  var nodes698 = $("<span>");
  root781.append(nodes698);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp2576, tmp2577, tmp2578, function(_, callback) {
    var root785 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node378 = $("<span>");
    
    var val287 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val287 !== null) {
      subs__.addSub(mobl.domBind(node378, 'mousedown', val287));
    }
    
    var val288 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val288 !== null) {
      subs__.addSub(mobl.domBind(node378, 'mouseup', val288));
    }
    
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.$("#flash__Life").show();
                     var result__ = controls.life.eventsToSave.get();
                     controls.life.eventsToSave.get().list(function(coll81) {
                       coll81 = coll81.reverse();
                       function processOne38() {
                         var event;
                         event = coll81.pop();
                         var result__ = mobl.add(event);
                         
                         if(coll81.length > 0) processOne38(); else rest38();
                         
                       }
                       function rest38() {
                         var result__ = 0;
                         controls.life.eventsToSave.get().length = result__;
                         if(callback && callback.apply) callback(); return;
                       }
                       if(coll81.length > 0) processOne38(); else rest38();
                     });
                     
                   };
    var tmp2570 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2575 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2574 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2573 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2572 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2571 = mobl.ref(result__);
    
    var nodes699 = $("<span>");
    node378.append(nodes699);
    subs__.addSub((ui.image)(saveButtonImage, tmp2571, tmp2572, tmp2570, tmp2573, tmp2574, tmp2575, function(_, callback) {
      var root786 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root786); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes699;
      nodes699 = node.contents();
      oldNodes.replaceWith(nodes699);
    }));
    root785.append(node378);
    callback(root785); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes698;
    nodes698 = node.contents();
    oldNodes.replaceWith(nodes698);
  }));
  callback(root781); return subs__;
  
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root787 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = controls.life.loadPresets();
  var tmp2579 = mobl.ref(result__);
  
  var nodes700 = $("<span>");
  root787.append(nodes700);
  subs__.addSub((controls.life.lifeForm)(tmp2579, function(_, callback) {
    var root788 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root788); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes700;
    nodes700 = node.contents();
    oldNodes.replaceWith(nodes700);
  }));
  callback(root787); return subs__;
  
  return subs__;
};
