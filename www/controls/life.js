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


controls.life.lifeForm = function(presets, elements, callback) {
  var root5563 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4371 = $("<span>");
  root5563.append(nodes4371);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5564 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1314 = mobl.loadingSpan();
    root5564.append(node1314);
    var list377;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList377 = function() {
      var subs__ = listSubs__;
      list377 = presets.get();
      list377.list(function(results1835) {
        node1314.empty();
        for(var i377 = 0; i377 < results1835.length; i377++) {
          (function() {
            var iternode377 = $("<span>");
            node1314.append(iternode377);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results1835), i377), "_1");name = mobl.ref(mobl.ref(mobl.ref(results1835), i377), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results1835), i377), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results1835), i377), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp11681 = mobl.ref(false);
            
            
            var tmp11680 = mobl.ref(null);
            
            
            var tmp11679 = mobl.ref(null);
            
            var nodes4372 = $("<span>");
            iternode377.append(nodes4372);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11679, tmp11680, tmp11681, function(_, callback) {
              var root5565 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node1315 = $("<span>");
              
              var ref1120 = mobl.ref("item__" + event_name.get());
              if(ref1120.get() !== null) {
                node1315.attr('id', ref1120.get());
                subs__.addSub(ref1120.addEventListener('change', function(_, ref, val) {
                  node1315.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node1315.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref1120.rebind());
              
              
              var tmp11678 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = new models.lifeevents.LifeEvent({'name': event_name.get(), 'stress': stress.get(), 'date': mobl.now(), 'keywords': keywords.get()});
                                     var lifeEvent = result__;
                                     var result__ = mobl.add(lifeEvent);
                                     var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "bold");
                                     var result__ = mobl.$("#timestamp__" + event_name.get()).html(" saved on " + lifeEvent.date.toString());
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       models.lifeevents.LifeEvent.all().filter("name", "=", event_name.get()).order("date", false).one(function(result__) {
                                         var tmp11684 = result__;
                                         var result__ = tmp11684;
                                         var itemToRemove = result__;
                                         var result__ = mobl.remove(itemToRemove);
                                         var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "normal");
                                         var result__ = mobl.$("#timestamp__" + event_name.get()).html("");
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes4373 = $("<span>");
              node1315.append(nodes4373);
              subs__.addSub((ui.checkBox)(check, name, tmp11678, function(_, callback) {
                var root5566 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5566); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4373;
                nodes4373 = node.contents();
                oldNodes.replaceWith(nodes4373);
              }));
              root5565.append(node1315);
              
              var node1316 = $("<span>");
              
              var ref1119 = mobl.ref("timestamp__" + event_name.get());
              if(ref1119.get() !== null) {
                node1316.attr('id', ref1119.get());
                subs__.addSub(ref1119.addEventListener('change', function(_, ref, val) {
                  node1316.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node1316.attr('id', "timestamp__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref1119.rebind());
              
              root5565.append(node1316);
              callback(root5565); return subs__;
              
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4372;
              nodes4372 = node.contents();
              oldNodes.replaceWith(nodes4372);
            }));
            
            var oldNodes = iternode377;
            iternode377 = iternode377.contents();
            oldNodes.replaceWith(iternode377);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list377.addEventListener('change', function() { listSubs__.unsubscribe(); renderList377(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList377(true); }));
      });
    };
    renderList377();
    
    callback(root5564); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4371;
    nodes4371 = node.contents();
    oldNodes.replaceWith(nodes4371);
  }));
  callback(root5563); return subs__;
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root5567 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11682 = mobl.ref(controls.life.loadPresets());
  
  var nodes4374 = $("<span>");
  root5567.append(nodes4374);
  subs__.addSub((controls.life.lifeForm)(tmp11682, function(_, callback) {
    var root5568 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5568); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4374;
    nodes4374 = node.contents();
    oldNodes.replaceWith(nodes4374);
  }));
  callback(root5567); return subs__;
  
  return subs__;
};
