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
  var root973 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes841 = $("<span>");
  root973.append(nodes841);
  subs__.addSub((ui.group)(function(_, callback) {
    var root974 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node69 = mobl.loadingSpan();
    root974.append(node69);
    var list34;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList34 = function() {
      var subs__ = listSubs__;
      list34 = presets.get();
      list34.list(function(results828) {
        node69.empty();
        for(var i37 = 0; i37 < results828.length; i37++) {
          (function() {
            var iternode34 = $("<span>");
            node69.append(iternode34);
            var check;var name;var stress;var keywords;
            check = mobl.ref(mobl.ref(mobl.ref(results828), i37), "_1");name = mobl.ref(mobl.ref(mobl.ref(results828), i37), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results828), i37), "_3");keywords = mobl.ref(mobl.ref(mobl.ref(results828), i37), "_4");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp2595 = mobl.ref(false);
            
            
            var tmp2594 = mobl.ref(null);
            
            
            var tmp2593 = mobl.ref(null);
            
            var nodes842 = $("<span>");
            iternode34.append(nodes842);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2593, tmp2594, tmp2595, function(_, callback) {
              var root975 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node70 = $("<span>");
              
              var ref2 = mobl.ref("item__" + event_name.get());
              if(ref2.get() !== null) {
                node70.attr('id', ref2.get());
                subs__.addSub(ref2.addEventListener('change', function(_, ref, val) {
                  node70.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node70.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref2.rebind());
              
              
              var tmp2592 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event_name.get(), 'stress': stress.get(), 'date': mobl.now(), 'keywords': keywords.get()}));
                                     var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "bold");
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       models.lifeevents.LifeEvent.all().filter("name", "=", event_name.get()).order("date", false).one(function(result__) {
                                         var tmp2598 = result__;
                                         var result__ = tmp2598;
                                         var itemToRemove = result__;
                                         var result__ = mobl.remove(itemToRemove);
                                         var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "normal");
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes843 = $("<span>");
              node70.append(nodes843);
              subs__.addSub((ui.checkBox)(check, name, tmp2592, function(_, callback) {
                var root976 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root976); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes843;
                nodes843 = node.contents();
                oldNodes.replaceWith(nodes843);
              }));
              root975.append(node70);
              callback(root975); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes842;
              nodes842 = node.contents();
              oldNodes.replaceWith(nodes842);
            }));
            
            var oldNodes = iternode34;
            iternode34 = iternode34.contents();
            oldNodes.replaceWith(iternode34);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list34.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
      });
    };
    renderList34();
    
    callback(root974); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes841;
    nodes841 = node.contents();
    oldNodes.replaceWith(nodes841);
  }));
  callback(root973); return subs__;
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root977 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2596 = mobl.ref(controls.life.loadPresets());
  
  var nodes844 = $("<span>");
  root977.append(nodes844);
  subs__.addSub((controls.life.lifeForm)(tmp2596, function(_, callback) {
    var root978 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root978); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes844;
    nodes844 = node.contents();
    oldNodes.replaceWith(nodes844);
  }));
  callback(root977); return subs__;
  
  return subs__;
};
