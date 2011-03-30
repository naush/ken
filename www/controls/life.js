mobl.provides('controls.life');
mobl.provides('models');
mobl.provides('mobl');
controls.life.loadPresets = function() {
   var __this = this;
  var presets = [];
  
  presets.push(new mobl.Tuple(false, "Christmas", 12));
  presets.push(new mobl.Tuple(false, "Vacation", 15));
  presets.push(new mobl.Tuple(false, "Change in eating habits", 15));
  presets.push(new mobl.Tuple(false, "Change in sleeping habits", 16));
  presets.push(new mobl.Tuple(false, "Change in residence", 20));
  return presets;
};


controls.life.lifeForm = function(presets, elements, callback) {
  var root1750 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1500 = $("<span>");
  root1750.append(nodes1500);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1751 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node185 = mobl.loadingSpan();
    root1751.append(node185);
    var list72;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList72 = function() {
      var subs__ = listSubs__;
      list72 = presets.get();
      list72.list(function(results1123) {
        node185.empty();
        for(var i72 = 0; i72 < results1123.length; i72++) {
          (function() {
            var iternode72 = $("<span>");
            node185.append(iternode72);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results1123), i72), "_1");name = mobl.ref(mobl.ref(mobl.ref(results1123), i72), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results1123), i72), "_3");
            
            var event_name = mobl.ref(name.get().replace(/\s/g, "__"));
            
            var tmp4591 = mobl.ref(false);
            
            
            var tmp4590 = mobl.ref(null);
            
            
            var tmp4589 = mobl.ref(null);
            
            var nodes1501 = $("<span>");
            iternode72.append(nodes1501);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4589, tmp4590, tmp4591, function(_, callback) {
              var root1752 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node186 = $("<span>");
              
              var ref64 = mobl.ref("item__" + event_name.get());
              if(ref64.get() !== null) {
                node186.attr('id', ref64.get());
                subs__.addSub(ref64.addEventListener('change', function(_, ref, val) {
                  node186.attr('id', val);
                }));
                subs__.addSub(event_name.addEventListener('change', function() {
                  node186.attr('id', "item__" + event_name.get());
                }));
                
              }
              subs__.addSub(ref64.rebind());
              
              
              var tmp4588 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = mobl.$(".life_event_status_bar").fadeOut(null);
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event_name.get(), 'stress': stress.get(), 'date': mobl.now()}));
                                     var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "bold");
                                     var result__ = mobl.$(".life_event_status_bar").html("Changes saved.");
                                     var result__ = mobl.$(".life_event_status_bar").fadeIn(null);
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       models.lifeevents.LifeEvent.all().filter("name", "=", event_name.get()).order("date", false).one(function(result__) {
                                         var tmp4597 = result__;
                                         var result__ = tmp4597;
                                         var itemToRemove = result__;
                                         var result__ = mobl.remove(itemToRemove);
                                         var result__ = mobl.$("#item__" + event_name.get()).css("font-weight", "normal");
                                         var result__ = mobl.$(".life_event_status_bar").fadeIn(null);
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes1502 = $("<span>");
              node186.append(nodes1502);
              subs__.addSub((ui.checkBox)(check, name, tmp4588, function(_, callback) {
                var root1753 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1753); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1502;
                nodes1502 = node.contents();
                oldNodes.replaceWith(nodes1502);
              }));
              root1752.append(node186);
              callback(root1752); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1501;
              nodes1501 = node.contents();
              oldNodes.replaceWith(nodes1501);
            }));
            
            var oldNodes = iternode72;
            iternode72 = iternode72.contents();
            oldNodes.replaceWith(iternode72);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list72.addEventListener('change', function() { listSubs__.unsubscribe(); renderList72(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList72(true); }));
      });
    };
    renderList72();
    
    
    var tmp4594 = mobl.ref(false);
    
    
    var tmp4593 = mobl.ref(null);
    
    
    var tmp4592 = mobl.ref(null);
    
    var nodes1503 = $("<span>");
    root1751.append(nodes1503);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4592, tmp4593, tmp4594, function(_, callback) {
      var root1754 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node187 = $("<span>");
      node187.attr('class', "life_event_status_bar");
      
      
      node187.append("&nbsp;");
      root1754.append(node187);
      callback(root1754); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1503;
      nodes1503 = node.contents();
      oldNodes.replaceWith(nodes1503);
    }));
    callback(root1751); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1500;
    nodes1500 = node.contents();
    oldNodes.replaceWith(nodes1500);
  }));
  callback(root1750); return subs__;
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root1755 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp4595 = mobl.ref(controls.life.loadPresets());
  
  var nodes1504 = $("<span>");
  root1755.append(nodes1504);
  subs__.addSub((controls.life.lifeForm)(tmp4595, function(_, callback) {
    var root1756 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1756); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1504;
    nodes1504 = node.contents();
    oldNodes.replaceWith(nodes1504);
  }));
  callback(root1755); return subs__;
  
  return subs__;
};
