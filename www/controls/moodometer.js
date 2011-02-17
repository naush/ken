mobl.provides('controls.moodometer');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
var root6226 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes4091 = $("<span>");
root6226.append(nodes4091);
subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
  var root6227 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6227); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4091;
  nodes4091 = node.contents();
  oldNodes.replaceWith(nodes4091);
}));
callback(root6226); return subs__;

return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
var root6228 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes4092 = $("<span>");
root6228.append(nodes4092);
subs__.addSub((ui.group)(function(_, callback) {
  var root6229 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp6064 = mobl.ref(false);
  
  
  var tmp6063 = mobl.ref(null);
  
  
  var tmp6062 = mobl.ref(null);
  
  var nodes4093 = $("<span>");
  root6229.append(nodes4093);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6062, tmp6063, tmp6064, function(_, callback) {
    var root6230 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp6057 = mobl.ref("Happy");
    
    
    var tmp6058 = mobl.ref(null);
    
    var nodes4094 = $("<span>");
    root6230.append(nodes4094);
    subs__.addSub((mobl.label)(tmp6057, mobl.ref(ui.emphasis), tmp6058, function(_, callback) {
      var root6231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6231); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4094;
      nodes4094 = node.contents();
      oldNodes.replaceWith(nodes4094);
    }));
    
    var tmp6061 = mobl.ref(50);
    
    
    var tmp6060 = mobl.ref(100);
    
    
    var tmp6059 = mobl.ref(0);
    
    var nodes4095 = $("<span>");
    root6230.append(nodes4095);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp6059, tmp6060, tmp6061, function(_, callback) {
      var root6232 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6232); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4095;
      nodes4095 = node.contents();
      oldNodes.replaceWith(nodes4095);
    }));
    callback(root6230); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4093;
    nodes4093 = node.contents();
    oldNodes.replaceWith(nodes4093);
  }));
  
  var tmp6072 = mobl.ref(false);
  
  
  var tmp6071 = mobl.ref(null);
  
  
  var tmp6070 = mobl.ref(null);
  
  var nodes4096 = $("<span>");
  root6229.append(nodes4096);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6070, tmp6071, tmp6072, function(_, callback) {
    var root6233 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp6065 = mobl.ref("Relaxed");
    
    
    var tmp6066 = mobl.ref(null);
    
    var nodes4097 = $("<span>");
    root6233.append(nodes4097);
    subs__.addSub((mobl.label)(tmp6065, mobl.ref(ui.emphasis), tmp6066, function(_, callback) {
      var root6234 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6234); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4097;
      nodes4097 = node.contents();
      oldNodes.replaceWith(nodes4097);
    }));
    
    var tmp6069 = mobl.ref(50);
    
    
    var tmp6068 = mobl.ref(100);
    
    
    var tmp6067 = mobl.ref(0);
    
    var nodes4098 = $("<span>");
    root6233.append(nodes4098);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp6067, tmp6068, tmp6069, function(_, callback) {
      var root6235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6235); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4098;
      nodes4098 = node.contents();
      oldNodes.replaceWith(nodes4098);
    }));
    callback(root6233); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4096;
    nodes4096 = node.contents();
    oldNodes.replaceWith(nodes4096);
  }));
  
  var tmp6080 = mobl.ref(false);
  
  
  var tmp6079 = mobl.ref(null);
  
  
  var tmp6078 = mobl.ref(null);
  
  var nodes4099 = $("<span>");
  root6229.append(nodes4099);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6078, tmp6079, tmp6080, function(_, callback) {
    var root6236 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp6073 = mobl.ref("Awake");
    
    
    var tmp6074 = mobl.ref(null);
    
    var nodes4100 = $("<span>");
    root6236.append(nodes4100);
    subs__.addSub((mobl.label)(tmp6073, mobl.ref(ui.emphasis), tmp6074, function(_, callback) {
      var root6237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6237); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4100;
      nodes4100 = node.contents();
      oldNodes.replaceWith(nodes4100);
    }));
    
    var tmp6077 = mobl.ref(50);
    
    
    var tmp6076 = mobl.ref(100);
    
    
    var tmp6075 = mobl.ref(0);
    
    var nodes4101 = $("<span>");
    root6236.append(nodes4101);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp6075, tmp6076, tmp6077, function(_, callback) {
      var root6238 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6238); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4101;
      nodes4101 = node.contents();
      oldNodes.replaceWith(nodes4101);
    }));
    callback(root6236); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4099;
    nodes4099 = node.contents();
    oldNodes.replaceWith(nodes4099);
  }));
  
  var tmp6082 = mobl.ref(function(event, callback) {
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
                           var tmp6084 = result__;
                           if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
  
  
  var tmp6081 = mobl.ref("Save");
  
  var nodes4102 = $("<span>");
  root6229.append(nodes4102);
  subs__.addSub((ui.button)(tmp6081, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6082, function(_, callback) {
    var root6239 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6239); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4102;
    nodes4102 = node.contents();
    oldNodes.replaceWith(nodes4102);
  }));
  callback(root6229); return subs__;
  
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4092;
  nodes4092 = node.contents();
  oldNodes.replaceWith(nodes4092);
}));
callback(root6228); return subs__;

return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
var root6240 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp6083 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));

var nodes4103 = $("<span>");
root6240.append(nodes4103);
subs__.addSub((controls.moodometer.moodoForm)(tmp6083, function(_, callback) {
  var root6241 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6241); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4103;
  nodes4103 = node.contents();
  oldNodes.replaceWith(nodes4103);
}));
callback(root6240); return subs__;

return subs__;
};
