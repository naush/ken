mobl.provides('controls.moodometer');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
var root3853 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes3275 = $("<span>");
root3853.append(nodes3275);
subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
  var root3854 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root3854); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3275;
  nodes3275 = node.contents();
  oldNodes.replaceWith(nodes3275);
}));
callback(root3853); return subs__;

return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
var root3855 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3276 = $("<span>");
root3855.append(nodes3276);
subs__.addSub((ui.group)(function(_, callback) {
  var root3856 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8755 = mobl.ref(false);
  
  
  var tmp8754 = mobl.ref(null);
  
  
  var tmp8753 = mobl.ref(null);
  
  var nodes3277 = $("<span>");
  root3856.append(nodes3277);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8753, tmp8754, tmp8755, function(_, callback) {
    var root3857 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8748 = mobl.ref("Happy");
    
    
    var tmp8749 = mobl.ref(null);
    
    var nodes3278 = $("<span>");
    root3857.append(nodes3278);
    subs__.addSub((mobl.label)(tmp8748, mobl.ref(ui.emphasis), tmp8749, function(_, callback) {
      var root3858 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3858); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3278;
      nodes3278 = node.contents();
      oldNodes.replaceWith(nodes3278);
    }));
    
    var tmp8752 = mobl.ref(50);
    
    
    var tmp8751 = mobl.ref(100);
    
    
    var tmp8750 = mobl.ref(0);
    
    var nodes3279 = $("<span>");
    root3857.append(nodes3279);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp8750, tmp8751, tmp8752, function(_, callback) {
      var root3859 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3859); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3279;
      nodes3279 = node.contents();
      oldNodes.replaceWith(nodes3279);
    }));
    callback(root3857); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3277;
    nodes3277 = node.contents();
    oldNodes.replaceWith(nodes3277);
  }));
  
  var tmp8763 = mobl.ref(false);
  
  
  var tmp8762 = mobl.ref(null);
  
  
  var tmp8761 = mobl.ref(null);
  
  var nodes3280 = $("<span>");
  root3856.append(nodes3280);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8761, tmp8762, tmp8763, function(_, callback) {
    var root3860 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8756 = mobl.ref("Relaxed");
    
    
    var tmp8757 = mobl.ref(null);
    
    var nodes3281 = $("<span>");
    root3860.append(nodes3281);
    subs__.addSub((mobl.label)(tmp8756, mobl.ref(ui.emphasis), tmp8757, function(_, callback) {
      var root3861 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3861); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3281;
      nodes3281 = node.contents();
      oldNodes.replaceWith(nodes3281);
    }));
    
    var tmp8760 = mobl.ref(50);
    
    
    var tmp8759 = mobl.ref(100);
    
    
    var tmp8758 = mobl.ref(0);
    
    var nodes3282 = $("<span>");
    root3860.append(nodes3282);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp8758, tmp8759, tmp8760, function(_, callback) {
      var root3862 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3862); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3282;
      nodes3282 = node.contents();
      oldNodes.replaceWith(nodes3282);
    }));
    callback(root3860); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3280;
    nodes3280 = node.contents();
    oldNodes.replaceWith(nodes3280);
  }));
  
  var tmp8771 = mobl.ref(false);
  
  
  var tmp8770 = mobl.ref(null);
  
  
  var tmp8769 = mobl.ref(null);
  
  var nodes3283 = $("<span>");
  root3856.append(nodes3283);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8769, tmp8770, tmp8771, function(_, callback) {
    var root3863 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8764 = mobl.ref("Awake");
    
    
    var tmp8765 = mobl.ref(null);
    
    var nodes3284 = $("<span>");
    root3863.append(nodes3284);
    subs__.addSub((mobl.label)(tmp8764, mobl.ref(ui.emphasis), tmp8765, function(_, callback) {
      var root3864 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3864); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3284;
      nodes3284 = node.contents();
      oldNodes.replaceWith(nodes3284);
    }));
    
    var tmp8768 = mobl.ref(50);
    
    
    var tmp8767 = mobl.ref(100);
    
    
    var tmp8766 = mobl.ref(0);
    
    var nodes3285 = $("<span>");
    root3863.append(nodes3285);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp8766, tmp8767, tmp8768, function(_, callback) {
      var root3865 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3865); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3285;
      nodes3285 = node.contents();
      oldNodes.replaceWith(nodes3285);
    }));
    callback(root3863); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3283;
    nodes3283 = node.contents();
    oldNodes.replaceWith(nodes3283);
  }));
  
  var tmp8773 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = mood.get().happy.length == 0 || mood.get().relaxed.length == 0 || mood.get().awake.length == 0;
                       if(result__) {
                         var result__ = mobl.notify.notify("Did you forget to rate your mood?", "Notification");
                         if(callback && callback.apply) callback(); return;
                       } else {
                         {
                           var result__ = mobl.notify.notify("Your mood is saved successfully!", "Notification");
                           var result__ = mobl.add(mood.get());
                           mobl.call('controls.moodometer.moodoScreen', [mobl.ref(new models.moods.Mood({'date': mobl.now()}))], function(result__) {
                           var tmp8775 = result__;
                           if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
  
  
  var tmp8772 = mobl.ref("Save");
  
  var nodes3286 = $("<span>");
  root3856.append(nodes3286);
  subs__.addSub((ui.button)(tmp8772, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8773, function(_, callback) {
    var root3866 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3866); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3286;
    nodes3286 = node.contents();
    oldNodes.replaceWith(nodes3286);
  }));
  callback(root3856); return subs__;
  
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3276;
  nodes3276 = node.contents();
  oldNodes.replaceWith(nodes3276);
}));
callback(root3855); return subs__;

return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
var root3867 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp8774 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));

var nodes3287 = $("<span>");
root3867.append(nodes3287);
subs__.addSub((controls.moodometer.moodoForm)(tmp8774, function(_, callback) {
  var root3868 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root3868); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3287;
  nodes3287 = node.contents();
  oldNodes.replaceWith(nodes3287);
}));
callback(root3867); return subs__;

return subs__;
};
