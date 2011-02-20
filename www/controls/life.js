mobl.provides('controls.life');
controls.life.events = mobl.ref([]);
controls.life.marriage = mobl.ref(false);
controls.life.cb = function(check, name) {
   var __this = this;
  return function(event, callback) {
           if(event && event.stopPropagation) event.stopPropagation();
           var result__ = check;
           if(result__) {
             var result__ = controls.life.events.get().push(name);
             if(callback && callback.apply) callback(); return;
           } else {
             {
               var result__ = controls.life.events.get().remove(name);
               if(callback && callback.apply) callback(); return;
             }
           }
         };
};


controls.life.life = function(elements, callback) {
var root2464 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes2181 = $("<span>");
root2464.append(nodes2181);
subs__.addSub((ui.group)(function(_, callback) {
  var root2465 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5659 = mobl.ref(false);
  
  
  var tmp5658 = mobl.ref(null);
  
  
  var tmp5657 = mobl.ref(null);
  
  var nodes2182 = $("<span>");
  root2465.append(nodes2182);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5657, tmp5658, tmp5659, function(_, callback) {
    var root2466 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5656 = mobl.ref(controls.life.cb(controls.life.marriage.get(), "Marriage"));
    subs__.addSub(controls.life.marriage.addEventListener('change', function() {
      tmp5656.set(controls.life.cb(controls.life.marriage.get(), "Marriage"));
    }));
    
    
    var tmp5655 = mobl.ref("Marriage");
    
    var nodes2183 = $("<span>");
    root2466.append(nodes2183);
    subs__.addSub((ui.checkBox)(controls.life.marriage, tmp5655, tmp5656, function(_, callback) {
      var root2467 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2467); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2183;
      nodes2183 = node.contents();
      oldNodes.replaceWith(nodes2183);
    }));
    callback(root2466); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2182;
    nodes2182 = node.contents();
    oldNodes.replaceWith(nodes2182);
  }));
  
  var tmp5665 = mobl.ref(false);
  
  
  var tmp5664 = mobl.ref(null);
  
  
  var tmp5663 = mobl.ref(null);
  
  var nodes2184 = $("<span>");
  root2465.append(nodes2184);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5663, tmp5664, tmp5665, function(_, callback) {
    var root2468 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5661 = mobl.ref("Divorce");
    
    
    var tmp5660 = mobl.ref(false);
    
    
    var tmp5662 = mobl.ref(null);
    
    var nodes2185 = $("<span>");
    root2468.append(nodes2185);
    subs__.addSub((ui.checkBox)(tmp5660, tmp5661, tmp5662, function(_, callback) {
      var root2469 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2469); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2185;
      nodes2185 = node.contents();
      oldNodes.replaceWith(nodes2185);
    }));
    callback(root2468); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2184;
    nodes2184 = node.contents();
    oldNodes.replaceWith(nodes2184);
  }));
  
  var tmp5671 = mobl.ref(false);
  
  
  var tmp5670 = mobl.ref(null);
  
  
  var tmp5669 = mobl.ref(null);
  
  var nodes2186 = $("<span>");
  root2465.append(nodes2186);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5669, tmp5670, tmp5671, function(_, callback) {
    var root2470 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5667 = mobl.ref("Death of a spouse");
    
    
    var tmp5666 = mobl.ref(false);
    
    
    var tmp5668 = mobl.ref(null);
    
    var nodes2187 = $("<span>");
    root2470.append(nodes2187);
    subs__.addSub((ui.checkBox)(tmp5666, tmp5667, tmp5668, function(_, callback) {
      var root2471 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2471); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2187;
      nodes2187 = node.contents();
      oldNodes.replaceWith(nodes2187);
    }));
    callback(root2470); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2186;
    nodes2186 = node.contents();
    oldNodes.replaceWith(nodes2186);
  }));
  
  var tmp5677 = mobl.ref(false);
  
  
  var tmp5676 = mobl.ref(null);
  
  
  var tmp5675 = mobl.ref(null);
  
  var nodes2188 = $("<span>");
  root2465.append(nodes2188);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5675, tmp5676, tmp5677, function(_, callback) {
    var root2472 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5673 = mobl.ref("Injury or illness");
    
    
    var tmp5672 = mobl.ref(false);
    
    
    var tmp5674 = mobl.ref(null);
    
    var nodes2189 = $("<span>");
    root2472.append(nodes2189);
    subs__.addSub((ui.checkBox)(tmp5672, tmp5673, tmp5674, function(_, callback) {
      var root2473 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2473); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2189;
      nodes2189 = node.contents();
      oldNodes.replaceWith(nodes2189);
    }));
    callback(root2472); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2188;
    nodes2188 = node.contents();
    oldNodes.replaceWith(nodes2188);
  }));
  
  var tmp5683 = mobl.ref(false);
  
  
  var tmp5682 = mobl.ref(null);
  
  
  var tmp5681 = mobl.ref(null);
  
  var nodes2190 = $("<span>");
  root2465.append(nodes2190);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5681, tmp5682, tmp5683, function(_, callback) {
    var root2474 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5679 = mobl.ref("Going back to school");
    
    
    var tmp5678 = mobl.ref(false);
    
    
    var tmp5680 = mobl.ref(null);
    
    var nodes2191 = $("<span>");
    root2474.append(nodes2191);
    subs__.addSub((ui.checkBox)(tmp5678, tmp5679, tmp5680, function(_, callback) {
      var root2475 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2475); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2191;
      nodes2191 = node.contents();
      oldNodes.replaceWith(nodes2191);
    }));
    callback(root2474); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2190;
    nodes2190 = node.contents();
    oldNodes.replaceWith(nodes2190);
  }));
  
  var tmp5689 = mobl.ref(false);
  
  
  var tmp5688 = mobl.ref(null);
  
  
  var tmp5687 = mobl.ref(null);
  
  var nodes2192 = $("<span>");
  root2465.append(nodes2192);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5687, tmp5688, tmp5689, function(_, callback) {
    var root2476 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5685 = mobl.ref("Change in residence");
    
    
    var tmp5684 = mobl.ref(false);
    
    
    var tmp5686 = mobl.ref(null);
    
    var nodes2193 = $("<span>");
    root2476.append(nodes2193);
    subs__.addSub((ui.checkBox)(tmp5684, tmp5685, tmp5686, function(_, callback) {
      var root2477 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2477); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2193;
      nodes2193 = node.contents();
      oldNodes.replaceWith(nodes2193);
    }));
    callback(root2476); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2192;
    nodes2192 = node.contents();
    oldNodes.replaceWith(nodes2192);
  }));
  
  var tmp5695 = mobl.ref(false);
  
  
  var tmp5694 = mobl.ref(null);
  
  
  var tmp5693 = mobl.ref(null);
  
  var nodes2194 = $("<span>");
  root2465.append(nodes2194);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5693, tmp5694, tmp5695, function(_, callback) {
    var root2478 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5691 = mobl.ref("Mortgage or loan");
    
    
    var tmp5690 = mobl.ref(false);
    
    
    var tmp5692 = mobl.ref(null);
    
    var nodes2195 = $("<span>");
    root2478.append(nodes2195);
    subs__.addSub((ui.checkBox)(tmp5690, tmp5691, tmp5692, function(_, callback) {
      var root2479 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2479); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2195;
      nodes2195 = node.contents();
      oldNodes.replaceWith(nodes2195);
    }));
    callback(root2478); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2194;
    nodes2194 = node.contents();
    oldNodes.replaceWith(nodes2194);
  }));
  
  var tmp5697 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.life.events.get();
                       controls.life.events.get().list(function(coll188) {
                         coll188 = coll188.reverse();
                         function processOne74() {
                           var event;
                           event = coll188.pop();
                           var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event, 'date': mobl.now()}));
                           
                           if(coll188.length > 0) processOne74(); else rest74();
                           
                         }
                         function rest74() {
                           var result__ = 0;
                           controls.life.events.get().length = result__;
                           if(callback && callback.apply) callback(); return;
                         }
                         if(coll188.length > 0) processOne74(); else rest74();
                       });
                       
                     });
  
  
  var tmp5696 = mobl.ref("Save");
  
  var nodes2196 = $("<span>");
  root2465.append(nodes2196);
  subs__.addSub((ui.button)(tmp5696, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp5697, function(_, callback) {
    var root2480 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2480); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2196;
    nodes2196 = node.contents();
    oldNodes.replaceWith(nodes2196);
  }));
  callback(root2465); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes2181;
  nodes2181 = node.contents();
  oldNodes.replaceWith(nodes2181);
}));
callback(root2464); return subs__;

return subs__;
};
