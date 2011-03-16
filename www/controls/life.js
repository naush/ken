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
  var root148 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes102 = $("<span>");
  root148.append(nodes102);
  subs__.addSub((ui.group)(function(_, callback) {
    var root149 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node55 = mobl.loadingSpan();
    root149.append(node55);
    var list11;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList11 = function() {
      var subs__ = listSubs__;
      list11 = presets.get();
      list11.list(function(results19) {
        node55.empty();
        for(var i11 = 0; i11 < results19.length; i11++) {
          (function() {
            var iternode11 = $("<span>");
            node55.append(iternode11);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results19), i11), "_1");name = mobl.ref(mobl.ref(mobl.ref(results19), i11), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results19), i11), "_3");
            
            var tmp194 = mobl.ref(false);
            
            
            var tmp193 = mobl.ref(null);
            
            
            var tmp192 = mobl.ref(null);
            
            var nodes103 = $("<span>");
            iternode11.append(nodes103);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp192, tmp193, tmp194, function(_, callback) {
              var root150 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var node56 = $("<div>");
              
              var ref57 = mobl.ref("item__" + name.get());
              if(ref57.get() !== null) {
                node56.attr('id', ref57.get());
                subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
                  node56.attr('id', val);
                }));
                subs__.addSub(name.addEventListener('change', function() {
                  node56.attr('id', "item__" + name.get());
                }));
                
              }
              subs__.addSub(ref57.rebind());
              
              
              var tmp191 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': name.get(), 'stress': stress.get(), 'date': mobl.now()}));
                                     var result__ = mobl.$(".life_event_status").html("Changes saved.");
                                     var result__ = mobl.$(".life_event_status").fadeIn(null);
                                     var result__ = mobl.$(".life_event_status").fadeOut(null);
                                     var result__ = mobl.$("#item__" + name.get()).css("font-weight", "bold");
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       models.lifeevents.LifeEvent.all().filter("name", "=", name.get()).order("date", false).one(function(result__) {
                                         var tmp201 = result__;
                                         var result__ = tmp201;
                                         var itemToRemove = result__;
                                         var result__ = mobl.remove(itemToRemove);
                                         var result__ = mobl.$(".life_event_status").fadeIn(null);
                                         var result__ = mobl.$(".life_event_status").fadeOut(null);
                                         var result__ = mobl.$("#item__" + name.get()).css("font-weight", "normal");
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes104 = $("<span>");
              node56.append(nodes104);
              subs__.addSub((ui.checkBox)(check, name, tmp191, function(_, callback) {
                var root151 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root151); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes104;
                nodes104 = node.contents();
                oldNodes.replaceWith(nodes104);
              }));
              root150.append(node56);
              callback(root150); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes103;
              nodes103 = node.contents();
              oldNodes.replaceWith(nodes103);
            }));
            
            var oldNodes = iternode11;
            iternode11 = iternode11.contents();
            oldNodes.replaceWith(iternode11);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list11.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
      });
    };
    renderList11();
    
    
    var tmp197 = mobl.ref(false);
    
    
    var tmp196 = mobl.ref(null);
    
    
    var tmp195 = mobl.ref(null);
    
    var nodes105 = $("<span>");
    root149.append(nodes105);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp195, tmp196, tmp197, function(_, callback) {
      var root152 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node57 = $("<div>");
      node57.attr('class', "life_event_status");
      
      
      node57.append("");
      root152.append(node57);
      callback(root152); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes105;
      nodes105 = node.contents();
      oldNodes.replaceWith(nodes105);
    }));
    callback(root149); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes102;
    nodes102 = node.contents();
    oldNodes.replaceWith(nodes102);
  }));
  callback(root148); return subs__;
  
  return subs__;
};

controls.life.life = function(elements, callback) {
  var root153 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp198 = mobl.ref(controls.life.loadPresets());
  
  var nodes106 = $("<span>");
  root153.append(nodes106);
  subs__.addSub((controls.life.lifeForm)(tmp198, function(_, callback) {
    var root154 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root154); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes106;
    nodes106 = node.contents();
    oldNodes.replaceWith(nodes106);
  }));
  callback(root153); return subs__;
  
  return subs__;
};
