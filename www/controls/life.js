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
  presets.push(new mobl.Tuple(false, "Parents visiting", 25, ["anxiety", "assurance", "forgiveness", "meditation", "relaxation", "breathing technique"]));
  presets.push(new mobl.Tuple(false, "Many family get-togethers", 15, ["family", "confidence", "forgiveness", "joy", "relationship", "gratitude", "heart", "love", "power", "affirmations"]));
  presets.push(new mobl.Tuple(false, "Vacation", 15, ["spiritual", "awakening", "loosen", "meditation", "relax", "detox", "peace", "stillness", "balance", "cleansing"]));
  presets.push(new mobl.Tuple(false, "Change in eating habits", 15, ["food", "nourishment", "excersice", "detox", "yoga", "balance", "body", "chakra", "wellness", "immunity", "immune"]));
  presets.push(new mobl.Tuple(false, "Change in sleeping habits", 16, ["sleep", "relaxation", "anxiety", "breathing", "detox", "yoga", "balance", "body", "chakra", "wellness", "peace", "meditation"]));
  return presets;
};

controls.life.eventsToSave = mobl.ref([]);

controls.life.lifeForm = function(presets, elements, callback) {
  var root0 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp6 = mobl.ref(result__);
  
  var result__ = null;
  var tmp5 = mobl.ref(result__);
  
  var result__ = null;
  var tmp4 = mobl.ref(result__);
  
  var nodes0 = $("<span>");
  root0.append(nodes0);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp4, tmp5, tmp6, function(_, callback) {
    var root1 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node0 = mobl.loadingSpan();
    root1.append(node0);
    var list0;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList0 = function() {
      var subs__ = listSubs__;
      list0 = presets.get();
      list0.list(function(results0) {
        node0.empty();
        for(var i0 = 0; i0 < results0.length; i0++) {
          (function() {
            var iternode0 = $("<span>");
            node0.append(iternode0);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results0), i0), "_1");name = mobl.ref(mobl.ref(mobl.ref(results0), i0), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results0), i0), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results0), i0), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            var result__ = false;
            var tmp3 = mobl.ref(result__);
            
            var result__ = null;
            var tmp2 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1 = mobl.ref(result__);
            
            var nodes1 = $("<span>");
            iternode0.append(nodes1);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1, tmp2, tmp3, function(_, callback) {
              var root2 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node1 = $("<span>");
              
              var ref0 = mobl.ref("item__" + event_name.get());
              if(ref0.get() !== null) {
                node1.attr('id', ref0.get());
                subs__.addSub(ref0.addEventListener('change', function(_, ref, val) {
                  node1.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node1.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref0.rebind());
              
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
                                   controls.life.eventsToSave.get().list(function(coll0) {
                                     coll0 = coll0.reverse();
                                     function processOne0() {
                                       var event;
                                       event = coll0.pop();
                                       var result__ = event.name == event_name.get();
                                       if(result__) {
                                         var result__ = event;
                                         eventToRemove = result__;
                                         
                                         if(coll0.length > 0) processOne0(); else rest0();
                                         
                                       } else {
                                         {
                                           
                                           if(coll0.length > 0) processOne0(); else rest0();
                                           
                                         }
                                       }
                                     }
                                     function rest0() {
                                       var result__ = controls.life.eventsToSave.get().remove(eventToRemove);
                                       if(callback && callback.apply) callback(); return;
                                     }
                                     if(coll0.length > 0) processOne0(); else rest0();
                                   });
                                   
                                 }
                               }
                             };
              var tmp0 = mobl.ref(result__);
              
              var nodes2 = $("<span>");
              node1.append(nodes2);
              subs__.addSub((ui.checkBox)(check, name, tmp0, function(_, callback) {
                var root3 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2;
                nodes2 = node.contents();
                oldNodes.replaceWith(nodes2);
              }));
              root2.append(node1);
              callback(root2); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1;
              nodes1 = node.contents();
              oldNodes.replaceWith(nodes1);
            }));
            
            var oldNodes = iternode0;
            iternode0 = iternode0.contents();
            oldNodes.replaceWith(iternode0);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list0.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
      });
    };
    renderList0();
    
    callback(root1); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes0;
    nodes0 = node.contents();
    oldNodes.replaceWith(nodes0);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  var result__ = null;
  var tmp16 = mobl.ref(result__);
  
  var result__ = null;
  var tmp15 = mobl.ref(result__);
  
  var result__ = null;
  var tmp14 = mobl.ref(result__);
  
  var nodes3 = $("<span>");
  root0.append(nodes3);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp14, tmp15, tmp16, function(_, callback) {
    var root4 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2 = $("<span>");
    
    var val0 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val0 !== null) {
      subs__.addSub(mobl.domBind(node2, 'mousedown', val0));
    }
    
    var val1 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1 !== null) {
      subs__.addSub(mobl.domBind(node2, 'mouseup', val1));
    }
    
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.$("#flash__Life").show();
                     var result__ = controls.life.eventsToSave.get();
                     controls.life.eventsToSave.get().list(function(coll1) {
                       coll1 = coll1.reverse();
                       function processOne1() {
                         var event;
                         event = coll1.pop();
                         var result__ = mobl.add(event);
                         
                         if(coll1.length > 0) processOne1(); else rest1();
                         
                       }
                       function rest1() {
                         var result__ = 0;
                         controls.life.eventsToSave.get().length = result__;
                         if(callback && callback.apply) callback(); return;
                       }
                       if(coll1.length > 0) processOne1(); else rest1();
                     });
                     
                   };
    var tmp7 = mobl.ref(result__);
    
    var result__ = null;
    var tmp13 = mobl.ref(result__);
    
    var result__ = null;
    var tmp12 = mobl.ref(result__);
    
    var result__ = null;
    var tmp11 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9 = mobl.ref(result__);
    
    var result__ = null;
    var tmp8 = mobl.ref(result__);
    
    var nodes4 = $("<span>");
    node2.append(nodes4);
    subs__.addSub((ui.image)(saveButtonImage, tmp8, tmp9, tmp7, tmp11, tmp12, tmp13, function(_, callback) {
      var root5 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4;
      nodes4 = node.contents();
      oldNodes.replaceWith(nodes4);
    }));
    root4.append(node2);
    callback(root4); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3;
    nodes3 = node.contents();
    oldNodes.replaceWith(nodes3);
  }));
  callback(root0); return subs__;
  
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root6 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = controls.life.loadPresets();
  var tmp17 = mobl.ref(result__);
  
  var nodes5 = $("<span>");
  root6.append(nodes5);
  subs__.addSub((controls.life.lifeForm)(tmp17, function(_, callback) {
    var root7 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5;
    nodes5 = node.contents();
    oldNodes.replaceWith(nodes5);
  }));
  callback(root6); return subs__;
  
  return subs__;
};
