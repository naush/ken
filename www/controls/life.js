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
  var root19068 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes12826 = $("<span>");
  root19068.append(nodes12826);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19069 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node8957 = mobl.loadingSpan();
    root19069.append(node8957);
    var list2031;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2031 = function() {
      var subs__ = listSubs__;
      list2031 = presets.get();
      list2031.list(function(results2070) {
        node8957.empty();
        for(var i2031 = 0; i2031 < results2070.length; i2031++) {
          (function() {
            var iternode2031 = $("<span>");
            node8957.append(iternode2031);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results2070), i2031), "_1");name = mobl.ref(mobl.ref(mobl.ref(results2070), i2031), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results2070), i2031), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results2070), i2031), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp22318 = mobl.ref(false);
            
            
            var tmp22317 = mobl.ref(null);
            
            
            var tmp22316 = mobl.ref(null);
            
            var nodes12827 = $("<span>");
            iternode2031.append(nodes12827);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp22316, tmp22317, tmp22318, function(_, callback) {
              var root19070 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node8958 = $("<span>");
              
              var ref9575 = mobl.ref("item__" + event_name.get());
              if(ref9575.get() !== null) {
                node8958.attr('id', ref9575.get());
                subs__.addSub(ref9575.addEventListener('change', function(_, ref, val) {
                  node8958.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node8958.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref9575.rebind());
              
              
              var tmp22315 = mobl.ref(function(event, callback) {
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
                                       controls.life.eventsToSave.get().list(function(coll3521) {
                                         coll3521 = coll3521.reverse();
                                         function processOne425() {
                                           var event;
                                           event = coll3521.pop();
                                           var result__ = event.name == event_name.get();
                                           if(result__) {
                                             var result__ = event;
                                             eventToRemove = result__;
                                             
                                             if(coll3521.length > 0) processOne425(); else rest425();
                                             
                                           } else {
                                             {
                                               
                                               if(coll3521.length > 0) processOne425(); else rest425();
                                               
                                             }
                                           }
                                         }
                                         function rest425() {
                                           var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                           var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "normal");
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         if(coll3521.length > 0) processOne425(); else rest425();
                                       });
                                       
                                     }
                                   }
                                 });
              
              var nodes12828 = $("<span>");
              node8958.append(nodes12828);
              subs__.addSub((ui.checkBox)(check, name, tmp22315, function(_, callback) {
                var root19071 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root19071); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes12828;
                nodes12828 = node.contents();
                oldNodes.replaceWith(nodes12828);
              }));
              root19070.append(node8958);
              
              var node8959 = $("<span>");
              
              var ref9574 = mobl.ref("timestamp__" + event_name.get());
              if(ref9574.get() !== null) {
                node8959.attr('id', ref9574.get());
                subs__.addSub(ref9574.addEventListener('change', function(_, ref, val) {
                  node8959.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node8959.attr('id', "timestamp__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref9574.rebind());
              
              root19070.append(node8959);
              callback(root19070); return subs__;
              
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes12827;
              nodes12827 = node.contents();
              oldNodes.replaceWith(nodes12827);
            }));
            
            var oldNodes = iternode2031;
            iternode2031 = iternode2031.contents();
            oldNodes.replaceWith(iternode2031);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2031.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2031(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2031(true); }));
      });
    };
    renderList2031();
    
    
    var tmp22323 = mobl.ref(false);
    
    
    var tmp22322 = mobl.ref(null);
    
    
    var tmp22321 = mobl.ref(null);
    
    var nodes12829 = $("<span>");
    root19069.append(nodes12829);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp22321, tmp22322, tmp22323, function(_, callback) {
      var root19072 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp22320 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = controls.life.eventsToSave.get();
                           controls.life.eventsToSave.get().list(function(coll3522) {
                             coll3522 = coll3522.reverse();
                             function processOne426() {
                               var event;
                               event = coll3522.pop();
                               var result__ = mobl.add(event);
                               
                               if(coll3522.length > 0) processOne426(); else rest426();
                               
                             }
                             function rest426() {
                               var result__ = 0;
                               controls.life.eventsToSave.get().length = result__;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll3522.length > 0) processOne426(); else rest426();
                           });
                           
                         });
      
      
      var tmp22319 = mobl.ref("Update");
      
      var nodes12830 = $("<span>");
      root19072.append(nodes12830);
      subs__.addSub((ui.button)(tmp22319, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp22320, function(_, callback) {
        var root19073 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19073); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12830;
        nodes12830 = node.contents();
        oldNodes.replaceWith(nodes12830);
      }));
      callback(root19072); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12829;
      nodes12829 = node.contents();
      oldNodes.replaceWith(nodes12829);
    }));
    callback(root19069); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes12826;
    nodes12826 = node.contents();
    oldNodes.replaceWith(nodes12826);
  }));
  callback(root19068); return subs__;
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root19074 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp22324 = mobl.ref(controls.life.loadPresets());
  
  var nodes12831 = $("<span>");
  root19074.append(nodes12831);
  subs__.addSub((controls.life.lifeForm)(tmp22324, function(_, callback) {
    var root19075 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root19075); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12831;
    nodes12831 = node.contents();
    oldNodes.replaceWith(nodes12831);
  }));
  callback(root19074); return subs__;
  
  return subs__;
};
