mobl.provides('controls.moodometer');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
var root4494 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes2942 = $("<span>");
root4494.append(nodes2942);
subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
  var root4495 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root4495); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes2942;
  nodes2942 = node.contents();
  oldNodes.replaceWith(nodes2942);
}));
callback(root4494); return subs__;

return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
var root4496 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes2943 = $("<span>");
root4496.append(nodes2943);
subs__.addSub((ui.group)(function(_, callback) {
  var root4497 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp4332 = mobl.ref(false);
  
  
  var tmp4331 = mobl.ref(null);
  
  
  var tmp4330 = mobl.ref(null);
  
  var nodes2944 = $("<span>");
  root4497.append(nodes2944);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4330, tmp4331, tmp4332, function(_, callback) {
    var root4498 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp4325 = mobl.ref("Happy");
    
    
    var tmp4326 = mobl.ref(null);
    
    var nodes2945 = $("<span>");
    root4498.append(nodes2945);
    subs__.addSub((mobl.label)(tmp4325, mobl.ref(ui.emphasis), tmp4326, function(_, callback) {
      var root4499 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4499); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2945;
      nodes2945 = node.contents();
      oldNodes.replaceWith(nodes2945);
    }));
    
    var tmp4329 = mobl.ref(50);
    
    
    var tmp4328 = mobl.ref(100);
    
    
    var tmp4327 = mobl.ref(0);
    
    var nodes2946 = $("<span>");
    root4498.append(nodes2946);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp4327, tmp4328, tmp4329, function(_, callback) {
      var root4500 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4500); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2946;
      nodes2946 = node.contents();
      oldNodes.replaceWith(nodes2946);
    }));
    callback(root4498); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2944;
    nodes2944 = node.contents();
    oldNodes.replaceWith(nodes2944);
  }));
  
  var tmp4340 = mobl.ref(false);
  
  
  var tmp4339 = mobl.ref(null);
  
  
  var tmp4338 = mobl.ref(null);
  
  var nodes2947 = $("<span>");
  root4497.append(nodes2947);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4338, tmp4339, tmp4340, function(_, callback) {
    var root4501 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp4333 = mobl.ref("Relaxed");
    
    
    var tmp4334 = mobl.ref(null);
    
    var nodes2948 = $("<span>");
    root4501.append(nodes2948);
    subs__.addSub((mobl.label)(tmp4333, mobl.ref(ui.emphasis), tmp4334, function(_, callback) {
      var root4502 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4502); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2948;
      nodes2948 = node.contents();
      oldNodes.replaceWith(nodes2948);
    }));
    
    var tmp4337 = mobl.ref(50);
    
    
    var tmp4336 = mobl.ref(100);
    
    
    var tmp4335 = mobl.ref(0);
    
    var nodes2949 = $("<span>");
    root4501.append(nodes2949);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp4335, tmp4336, tmp4337, function(_, callback) {
      var root4503 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4503); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2949;
      nodes2949 = node.contents();
      oldNodes.replaceWith(nodes2949);
    }));
    callback(root4501); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2947;
    nodes2947 = node.contents();
    oldNodes.replaceWith(nodes2947);
  }));
  
  var tmp4348 = mobl.ref(false);
  
  
  var tmp4347 = mobl.ref(null);
  
  
  var tmp4346 = mobl.ref(null);
  
  var nodes2950 = $("<span>");
  root4497.append(nodes2950);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4346, tmp4347, tmp4348, function(_, callback) {
    var root4504 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp4341 = mobl.ref("Awake");
    
    
    var tmp4342 = mobl.ref(null);
    
    var nodes2951 = $("<span>");
    root4504.append(nodes2951);
    subs__.addSub((mobl.label)(tmp4341, mobl.ref(ui.emphasis), tmp4342, function(_, callback) {
      var root4505 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4505); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2951;
      nodes2951 = node.contents();
      oldNodes.replaceWith(nodes2951);
    }));
    
    var tmp4345 = mobl.ref(50);
    
    
    var tmp4344 = mobl.ref(100);
    
    
    var tmp4343 = mobl.ref(0);
    
    var nodes2952 = $("<span>");
    root4504.append(nodes2952);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp4343, tmp4344, tmp4345, function(_, callback) {
      var root4506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4506); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2952;
      nodes2952 = node.contents();
      oldNodes.replaceWith(nodes2952);
    }));
    callback(root4504); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2950;
    nodes2950 = node.contents();
    oldNodes.replaceWith(nodes2950);
  }));
  
  var tmp4350 = mobl.ref(function(event, callback) {
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
                           var tmp4352 = result__;
                           if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
  
  
  var tmp4349 = mobl.ref("Save");
  
  var nodes2953 = $("<span>");
  root4497.append(nodes2953);
  subs__.addSub((ui.button)(tmp4349, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4350, function(_, callback) {
    var root4507 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4507); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2953;
    nodes2953 = node.contents();
    oldNodes.replaceWith(nodes2953);
  }));
  callback(root4497); return subs__;
  
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes2943;
  nodes2943 = node.contents();
  oldNodes.replaceWith(nodes2943);
}));
callback(root4496); return subs__;

return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
var root4508 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp4351 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));

var nodes2954 = $("<span>");
root4508.append(nodes2954);
subs__.addSub((controls.moodometer.moodoForm)(tmp4351, function(_, callback) {
  var root4509 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root4509); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes2954;
  nodes2954 = node.contents();
  oldNodes.replaceWith(nodes2954);
}));
callback(root4508); return subs__;

return subs__;
};
