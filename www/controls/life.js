mobl.provides('controls.life');
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
var root13823 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes10020 = $("<span>");
root13823.append(nodes10020);
subs__.addSub((ui.group)(function(_, callback) {
  var root13824 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node5131 = mobl.loadingSpan();
  root13824.append(node5131);
  var list1026;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1026 = function() {
    var subs__ = listSubs__;
    list1026 = presets.get();
    list1026.list(function(results1062) {
      node5131.empty();
      for(var i1031 = 0; i1031 < results1062.length; i1031++) {
        (function() {
          var iternode1026 = $("<span>");
          node5131.append(iternode1026);
          var check;var name;var stress;
          check = mobl.ref(mobl.ref(mobl.ref(results1062), i1031), "_1");name = mobl.ref(mobl.ref(mobl.ref(results1062), i1031), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results1062), i1031), "_3");
          
          var tmp19544 = mobl.ref(false);
          
          
          var tmp19543 = mobl.ref(null);
          
          
          var tmp19542 = mobl.ref(null);
          
          var nodes10021 = $("<span>");
          iternode1026.append(nodes10021);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19542, tmp19543, tmp19544, function(_, callback) {
            var root13825 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp19541 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = check.get();
                                 if(result__) {
                                   var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': name.get(), 'stress': stress.get(), 'date': mobl.now()}));
                                   if(callback && callback.apply) callback(); return;
                                 } else {
                                   {
                                     models.lifeevents.LifeEvent.all().filter("name", "=", name.get()).order("date", false).one(function(result__) {
                                       var tmp19547 = result__;
                                       var result__ = tmp19547;
                                       var itemToRemove = result__;
                                       var result__ = mobl.remove(itemToRemove);
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   }
                                 }
                               });
            
            var nodes10022 = $("<span>");
            root13825.append(nodes10022);
            subs__.addSub((ui.checkBox)(check, name, tmp19541, function(_, callback) {
              var root13826 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root13826); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10022;
              nodes10022 = node.contents();
              oldNodes.replaceWith(nodes10022);
            }));
            callback(root13825); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes10021;
            nodes10021 = node.contents();
            oldNodes.replaceWith(nodes10021);
          }));
          
          var oldNodes = iternode1026;
          iternode1026 = iternode1026.contents();
          oldNodes.replaceWith(iternode1026);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1026.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1026(true); }));
      subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1026(true); }));
    });
  };
  renderList1026();
  
  callback(root13824); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes10020;
  nodes10020 = node.contents();
  oldNodes.replaceWith(nodes10020);
}));
callback(root13823); return subs__;

return subs__;
};

controls.life.life = function(elements, callback) {
var root13827 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp19545 = mobl.ref(controls.life.loadPresets());

var nodes10023 = $("<span>");
root13827.append(nodes10023);
subs__.addSub((controls.life.lifeForm)(tmp19545, function(_, callback) {
  var root13828 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root13828); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes10023;
  nodes10023 = node.contents();
  oldNodes.replaceWith(nodes10023);
}));
callback(root13827); return subs__;

return subs__;
};
