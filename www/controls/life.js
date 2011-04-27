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
  var root26915 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes18160 = $("<span>");
  root26915.append(nodes18160);
  subs__.addSub((ui.group)(function(_, callback) {
    var root26916 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12578 = mobl.loadingSpan();
    root26916.append(node12578);
    var list2840;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2840 = function() {
      var subs__ = listSubs__;
      list2840 = presets.get();
      list2840.list(function(results3040) {
        node12578.empty();
        for(var i2840 = 0; i2840 < results3040.length; i2840++) {
          (function() {
            var iternode2840 = $("<span>");
            node12578.append(iternode2840);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results3040), i2840), "_1");name = mobl.ref(mobl.ref(mobl.ref(results3040), i2840), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results3040), i2840), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results3040), i2840), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp32003 = mobl.ref(false);
            
            
            var tmp32002 = mobl.ref(null);
            
            
            var tmp32001 = mobl.ref(null);
            
            var nodes18161 = $("<span>");
            iternode2840.append(nodes18161);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32001, tmp32002, tmp32003, function(_, callback) {
              var root26917 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node12579 = $("<span>");
              
              var ref13482 = mobl.ref("item__" + event_name.get());
              if(ref13482.get() !== null) {
                node12579.attr('id', ref13482.get());
                subs__.addSub(ref13482.addEventListener('change', function(_, ref, val) {
                  node12579.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node12579.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref13482.rebind());
              
              
              var tmp32000 = mobl.ref(function(event, callback) {
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
                                       controls.life.eventsToSave.get().list(function(coll5009) {
                                         coll5009 = coll5009.reverse();
                                         function processOne629() {
                                           var event;
                                           event = coll5009.pop();
                                           var result__ = event.name == event_name.get();
                                           if(result__) {
                                             var result__ = event;
                                             eventToRemove = result__;
                                             
                                             if(coll5009.length > 0) processOne629(); else rest629();
                                             
                                           } else {
                                             {
                                               
                                               if(coll5009.length > 0) processOne629(); else rest629();
                                               
                                             }
                                           }
                                         }
                                         function rest629() {
                                           var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                           var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "normal");
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll5009.length > 0) processOne629(); else rest629();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes18162 = $("<span>");
              node12579.append(nodes18162);
              subs__.addSub((ui.checkBox)(check, name, tmp32000, function(_, callback) {
                var root26918 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root26918); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes18162;
                nodes18162 = node.contents();
                oldNodes.replaceWith(nodes18162);
              }));
              root26917.append(node12579);
              
              var node12580 = $("<span>");
              
              var ref13481 = mobl.ref("timestamp__" + event_name.get());
              if(ref13481.get() !== null) {
                node12580.attr('id', ref13481.get());
                subs__.addSub(ref13481.addEventListener('change', function(_, ref, val) {
                  node12580.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node12580.attr('id', "timestamp__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref13481.rebind());
              
              root26917.append(node12580);
              callback(root26917); return subs__;
              
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18161;
              nodes18161 = node.contents();
              oldNodes.replaceWith(nodes18161);
            }));
            
            var oldNodes = iternode2840;
            iternode2840 = iternode2840.contents();
            oldNodes.replaceWith(iternode2840);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2840.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2840(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2840(true); }));
      });
    };
    renderList2840();
    
    
    var tmp32005 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = controls.life.eventsToSave.get();
                         controls.life.eventsToSave.get().list(function(coll5010) {
                           coll5010 = coll5010.reverse();
                           function processOne630() {
                             var event;
                             event = coll5010.pop();
                             var result__ = mobl.add(event);
                             
                             if(coll5010.length > 0) processOne630(); else rest630();
                             
                           }
                           function rest630() {
                             var result__ = 0;
                             controls.life.eventsToSave.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll5010.length > 0) processOne630(); else rest630();
                         });
                         
                       });
    
    
    var tmp32004 = mobl.ref("Update");
    
    var nodes18163 = $("<span>");
    root26916.append(nodes18163);
    subs__.addSub((ui.button)(tmp32004, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp32005, function(_, callback) {
      var root26919 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26919); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18163;
      nodes18163 = node.contents();
      oldNodes.replaceWith(nodes18163);
    }));
    callback(root26916); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18160;
    nodes18160 = node.contents();
    oldNodes.replaceWith(nodes18160);
  }));
  callback(root26915); return subs__;
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root26920 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp32006 = mobl.ref(controls.life.loadPresets());
  
  var nodes18164 = $("<span>");
  root26920.append(nodes18164);
  subs__.addSub((controls.life.lifeForm)(tmp32006, function(_, callback) {
    var root26921 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26921); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18164;
    nodes18164 = node.contents();
    oldNodes.replaceWith(nodes18164);
  }));
  callback(root26920); return subs__;
  
  return subs__;
};
