mobl.provides('controls.moodometer');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
var root197 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes140 = $("<span>");
root197.append(nodes140);
subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
  var root198 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root198); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes140;
  nodes140 = node.contents();
  oldNodes.replaceWith(nodes140);
}));
callback(root197); return subs__;

return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
var root199 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes141 = $("<span>");
root199.append(nodes141);
subs__.addSub((ui.group)(function(_, callback) {
  var root200 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp279 = mobl.ref(false);
  
  
  var tmp278 = mobl.ref(null);
  
  
  var tmp277 = mobl.ref(null);
  
  var nodes142 = $("<span>");
  root200.append(nodes142);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp277, tmp278, tmp279, function(_, callback) {
    var root201 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp272 = mobl.ref("Happy");
    
    
    var tmp273 = mobl.ref(null);
    
    var nodes143 = $("<span>");
    root201.append(nodes143);
    subs__.addSub((mobl.label)(tmp272, mobl.ref(ui.emphasis), tmp273, function(_, callback) {
      var root202 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root202); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes143;
      nodes143 = node.contents();
      oldNodes.replaceWith(nodes143);
    }));
    
    var tmp276 = mobl.ref(50);
    
    
    var tmp275 = mobl.ref(100);
    
    
    var tmp274 = mobl.ref(0);
    
    var nodes144 = $("<span>");
    root201.append(nodes144);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp274, tmp275, tmp276, function(_, callback) {
      var root203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root203); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes144;
      nodes144 = node.contents();
      oldNodes.replaceWith(nodes144);
    }));
    callback(root201); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes142;
    nodes142 = node.contents();
    oldNodes.replaceWith(nodes142);
  }));
  
  var tmp288 = mobl.ref(false);
  
  
  var tmp287 = mobl.ref(null);
  
  
  var tmp286 = mobl.ref(null);
  
  var nodes145 = $("<span>");
  root200.append(nodes145);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp286, tmp287, tmp288, function(_, callback) {
    var root204 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp281 = mobl.ref("Relaxed");
    
    
    var tmp282 = mobl.ref(null);
    
    var nodes146 = $("<span>");
    root204.append(nodes146);
    subs__.addSub((mobl.label)(tmp281, mobl.ref(ui.emphasis), tmp282, function(_, callback) {
      var root205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root205); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes146;
      nodes146 = node.contents();
      oldNodes.replaceWith(nodes146);
    }));
    
    var tmp285 = mobl.ref(50);
    
    
    var tmp284 = mobl.ref(100);
    
    
    var tmp283 = mobl.ref(0);
    
    var nodes147 = $("<span>");
    root204.append(nodes147);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp283, tmp284, tmp285, function(_, callback) {
      var root206 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root206); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes147;
      nodes147 = node.contents();
      oldNodes.replaceWith(nodes147);
    }));
    callback(root204); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes145;
    nodes145 = node.contents();
    oldNodes.replaceWith(nodes145);
  }));
  
  var tmp296 = mobl.ref(false);
  
  
  var tmp295 = mobl.ref(null);
  
  
  var tmp294 = mobl.ref(null);
  
  var nodes148 = $("<span>");
  root200.append(nodes148);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp294, tmp295, tmp296, function(_, callback) {
    var root207 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp289 = mobl.ref("Awake");
    
    
    var tmp290 = mobl.ref(null);
    
    var nodes149 = $("<span>");
    root207.append(nodes149);
    subs__.addSub((mobl.label)(tmp289, mobl.ref(ui.emphasis), tmp290, function(_, callback) {
      var root208 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root208); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes149;
      nodes149 = node.contents();
      oldNodes.replaceWith(nodes149);
    }));
    
    var tmp293 = mobl.ref(50);
    
    
    var tmp292 = mobl.ref(100);
    
    
    var tmp291 = mobl.ref(0);
    
    var nodes150 = $("<span>");
    root207.append(nodes150);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp291, tmp292, tmp293, function(_, callback) {
      var root209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root209); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes150;
      nodes150 = node.contents();
      oldNodes.replaceWith(nodes150);
    }));
    callback(root207); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes148;
    nodes148 = node.contents();
    oldNodes.replaceWith(nodes148);
  }));
  
  var tmp298 = mobl.ref(function(event, callback) {
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
                           var tmp300 = result__;
                           if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
  
  
  var tmp297 = mobl.ref("Save");
  
  var nodes151 = $("<span>");
  root200.append(nodes151);
  subs__.addSub((ui.button)(tmp297, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp298, function(_, callback) {
    var root210 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root210); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes151;
    nodes151 = node.contents();
    oldNodes.replaceWith(nodes151);
  }));
  callback(root200); return subs__;
  
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes141;
  nodes141 = node.contents();
  oldNodes.replaceWith(nodes141);
}));
callback(root199); return subs__;

return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
var root211 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp299 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));

var nodes152 = $("<span>");
root211.append(nodes152);
subs__.addSub((controls.moodometer.moodoForm)(tmp299, function(_, callback) {
  var root212 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root212); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes152;
  nodes152 = node.contents();
  oldNodes.replaceWith(nodes152);
}));
callback(root211); return subs__;

return subs__;
};
