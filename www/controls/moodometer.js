mobl.provides('controls.moodometer');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
var root15754 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes11434 = $("<span>");
root15754.append(nodes11434);
subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
  var root15755 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root15755); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes11434;
  nodes11434 = node.contents();
  oldNodes.replaceWith(nodes11434);
}));
callback(root15754); return subs__;

return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
var root15756 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes11435 = $("<span>");
root15756.append(nodes11435);
subs__.addSub((ui.group)(function(_, callback) {
  var root15757 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp26065 = mobl.ref(false);
  
  
  var tmp26064 = mobl.ref(null);
  
  
  var tmp26063 = mobl.ref(null);
  
  var nodes11436 = $("<span>");
  root15757.append(nodes11436);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp26063, tmp26064, tmp26065, function(_, callback) {
    var root15758 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node5801 = $("<div>");
    node5801.attr('style', "margin:0 0 10px 0; text-align: center");
    
    
    var tmp26054 = mobl.ref("Not at all");
    
    
    var tmp26055 = mobl.ref(null);
    
    var nodes11438 = $("<span>");
    node5801.append(nodes11438);
    subs__.addSub((mobl.label)(tmp26054, mobl.ref(ui.left), tmp26055, function(_, callback) {
      var root15760 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15760); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11438;
      nodes11438 = node.contents();
      oldNodes.replaceWith(nodes11438);
    }));
    
    var tmp26056 = mobl.ref("Happy");
    
    
    var tmp26057 = mobl.ref(null);
    
    var nodes11439 = $("<span>");
    node5801.append(nodes11439);
    subs__.addSub((mobl.label)(tmp26056, mobl.ref(ui.center), tmp26057, function(_, callback) {
      var root15761 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15761); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11439;
      nodes11439 = node.contents();
      oldNodes.replaceWith(nodes11439);
    }));
    
    var tmp26058 = mobl.ref("Extremely");
    
    
    var tmp26059 = mobl.ref(null);
    
    var nodes11440 = $("<span>");
    node5801.append(nodes11440);
    subs__.addSub((mobl.label)(tmp26058, mobl.ref(ui.right), tmp26059, function(_, callback) {
      var root15762 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15762); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11440;
      nodes11440 = node.contents();
      oldNodes.replaceWith(nodes11440);
    }));
    root15758.append(node5801);
    
    var tmp26062 = mobl.ref(50);
    
    
    var tmp26061 = mobl.ref(100);
    
    
    var tmp26060 = mobl.ref(0);
    
    var nodes11437 = $("<span>");
    root15758.append(nodes11437);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp26060, tmp26061, tmp26062, function(_, callback) {
      var root15759 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15759); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11437;
      nodes11437 = node.contents();
      oldNodes.replaceWith(nodes11437);
    }));
    callback(root15758); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes11436;
    nodes11436 = node.contents();
    oldNodes.replaceWith(nodes11436);
  }));
  
  var tmp26077 = mobl.ref(false);
  
  
  var tmp26076 = mobl.ref(null);
  
  
  var tmp26075 = mobl.ref(null);
  
  var nodes11441 = $("<span>");
  root15757.append(nodes11441);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp26075, tmp26076, tmp26077, function(_, callback) {
    var root15763 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node5802 = $("<div>");
    node5802.attr('style', "margin:0 0 10px 0; text-align: center");
    
    
    var tmp26066 = mobl.ref("Not at all");
    
    
    var tmp26067 = mobl.ref(null);
    
    var nodes11443 = $("<span>");
    node5802.append(nodes11443);
    subs__.addSub((mobl.label)(tmp26066, mobl.ref(ui.left), tmp26067, function(_, callback) {
      var root15765 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15765); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11443;
      nodes11443 = node.contents();
      oldNodes.replaceWith(nodes11443);
    }));
    
    var tmp26068 = mobl.ref("Relaxed");
    
    
    var tmp26069 = mobl.ref(null);
    
    var nodes11444 = $("<span>");
    node5802.append(nodes11444);
    subs__.addSub((mobl.label)(tmp26068, mobl.ref(ui.center), tmp26069, function(_, callback) {
      var root15766 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15766); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11444;
      nodes11444 = node.contents();
      oldNodes.replaceWith(nodes11444);
    }));
    
    var tmp26070 = mobl.ref("Extremely");
    
    
    var tmp26071 = mobl.ref(null);
    
    var nodes11445 = $("<span>");
    node5802.append(nodes11445);
    subs__.addSub((mobl.label)(tmp26070, mobl.ref(ui.right), tmp26071, function(_, callback) {
      var root15767 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15767); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11445;
      nodes11445 = node.contents();
      oldNodes.replaceWith(nodes11445);
    }));
    root15763.append(node5802);
    
    var tmp26074 = mobl.ref(50);
    
    
    var tmp26073 = mobl.ref(100);
    
    
    var tmp26072 = mobl.ref(0);
    
    var nodes11442 = $("<span>");
    root15763.append(nodes11442);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp26072, tmp26073, tmp26074, function(_, callback) {
      var root15764 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15764); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11442;
      nodes11442 = node.contents();
      oldNodes.replaceWith(nodes11442);
    }));
    callback(root15763); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes11441;
    nodes11441 = node.contents();
    oldNodes.replaceWith(nodes11441);
  }));
  
  var tmp26089 = mobl.ref(false);
  
  
  var tmp26088 = mobl.ref(null);
  
  
  var tmp26087 = mobl.ref(null);
  
  var nodes11446 = $("<span>");
  root15757.append(nodes11446);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp26087, tmp26088, tmp26089, function(_, callback) {
    var root15768 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node5803 = $("<div>");
    node5803.attr('style', "margin:0 0 10px 0; text-align: center");
    
    
    var tmp26078 = mobl.ref("Not at all");
    
    
    var tmp26079 = mobl.ref(null);
    
    var nodes11448 = $("<span>");
    node5803.append(nodes11448);
    subs__.addSub((mobl.label)(tmp26078, mobl.ref(ui.left), tmp26079, function(_, callback) {
      var root15770 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15770); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11448;
      nodes11448 = node.contents();
      oldNodes.replaceWith(nodes11448);
    }));
    
    var tmp26080 = mobl.ref("Awake");
    
    
    var tmp26081 = mobl.ref(null);
    
    var nodes11449 = $("<span>");
    node5803.append(nodes11449);
    subs__.addSub((mobl.label)(tmp26080, mobl.ref(ui.center), tmp26081, function(_, callback) {
      var root15771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15771); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11449;
      nodes11449 = node.contents();
      oldNodes.replaceWith(nodes11449);
    }));
    
    var tmp26082 = mobl.ref("Extremely");
    
    
    var tmp26083 = mobl.ref(null);
    
    var nodes11450 = $("<span>");
    node5803.append(nodes11450);
    subs__.addSub((mobl.label)(tmp26082, mobl.ref(ui.right), tmp26083, function(_, callback) {
      var root15772 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15772); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11450;
      nodes11450 = node.contents();
      oldNodes.replaceWith(nodes11450);
    }));
    root15768.append(node5803);
    
    var tmp26086 = mobl.ref(50);
    
    
    var tmp26085 = mobl.ref(100);
    
    
    var tmp26084 = mobl.ref(0);
    
    var nodes11447 = $("<span>");
    root15768.append(nodes11447);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp26084, tmp26085, tmp26086, function(_, callback) {
      var root15769 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15769); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11447;
      nodes11447 = node.contents();
      oldNodes.replaceWith(nodes11447);
    }));
    callback(root15768); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes11446;
    nodes11446 = node.contents();
    oldNodes.replaceWith(nodes11446);
  }));
  
  var tmp26091 = mobl.ref(function(event, callback) {
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
                           var tmp26093 = result__;
                           if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
  
  
  var tmp26090 = mobl.ref("Save");
  
  var nodes11451 = $("<span>");
  root15757.append(nodes11451);
  subs__.addSub((ui.button)(tmp26090, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp26091, function(_, callback) {
    var root15773 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15773); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes11451;
    nodes11451 = node.contents();
    oldNodes.replaceWith(nodes11451);
  }));
  callback(root15757); return subs__;
  
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes11435;
  nodes11435 = node.contents();
  oldNodes.replaceWith(nodes11435);
}));
callback(root15756); return subs__;

return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
var root15774 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp26092 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));

var nodes11452 = $("<span>");
root15774.append(nodes11452);
subs__.addSub((controls.moodometer.moodoForm)(tmp26092, function(_, callback) {
  var root15775 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root15775); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes11452;
  nodes11452 = node.contents();
  oldNodes.replaceWith(nodes11452);
}));
callback(root15774); return subs__;

return subs__;
};
