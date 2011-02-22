mobl.provides('controls.moodometer');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
var root11818 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes8713 = $("<span>");
root11818.append(nodes8713);
subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
  var root11819 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root11819); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes8713;
  nodes8713 = node.contents();
  oldNodes.replaceWith(nodes8713);
}));
callback(root11818); return subs__;

return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
var root11820 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes8714 = $("<span>");
root11820.append(nodes8714);
subs__.addSub((ui.group)(function(_, callback) {
  var root11821 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp17606 = mobl.ref(false);
  
  
  var tmp17605 = mobl.ref(null);
  
  
  var tmp17604 = mobl.ref(null);
  
  var nodes8715 = $("<span>");
  root11821.append(nodes8715);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17604, tmp17605, tmp17606, function(_, callback) {
    var root11822 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node4321 = $("<div>");
    node4321.attr('style', "margin:0 0 10px 0; text-align: center");
    
    
    var tmp17595 = mobl.ref("Not at all");
    
    
    var tmp17596 = mobl.ref(null);
    
    var nodes8717 = $("<span>");
    node4321.append(nodes8717);
    subs__.addSub((mobl.label)(tmp17595, mobl.ref(ui.left), tmp17596, function(_, callback) {
      var root11824 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11824); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8717;
      nodes8717 = node.contents();
      oldNodes.replaceWith(nodes8717);
    }));
    
    var tmp17597 = mobl.ref("Happy");
    
    
    var tmp17598 = mobl.ref(null);
    
    var nodes8718 = $("<span>");
    node4321.append(nodes8718);
    subs__.addSub((mobl.label)(tmp17597, mobl.ref(ui.center), tmp17598, function(_, callback) {
      var root11825 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11825); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8718;
      nodes8718 = node.contents();
      oldNodes.replaceWith(nodes8718);
    }));
    
    var tmp17599 = mobl.ref("Extremely");
    
    
    var tmp17600 = mobl.ref(null);
    
    var nodes8719 = $("<span>");
    node4321.append(nodes8719);
    subs__.addSub((mobl.label)(tmp17599, mobl.ref(ui.right), tmp17600, function(_, callback) {
      var root11826 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11826); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8719;
      nodes8719 = node.contents();
      oldNodes.replaceWith(nodes8719);
    }));
    root11822.append(node4321);
    
    var tmp17603 = mobl.ref(50);
    
    
    var tmp17602 = mobl.ref(100);
    
    
    var tmp17601 = mobl.ref(0);
    
    var nodes8716 = $("<span>");
    root11822.append(nodes8716);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp17601, tmp17602, tmp17603, function(_, callback) {
      var root11823 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11823); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8716;
      nodes8716 = node.contents();
      oldNodes.replaceWith(nodes8716);
    }));
    callback(root11822); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8715;
    nodes8715 = node.contents();
    oldNodes.replaceWith(nodes8715);
  }));
  
  var tmp17618 = mobl.ref(false);
  
  
  var tmp17617 = mobl.ref(null);
  
  
  var tmp17616 = mobl.ref(null);
  
  var nodes8720 = $("<span>");
  root11821.append(nodes8720);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17616, tmp17617, tmp17618, function(_, callback) {
    var root11827 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node4322 = $("<div>");
    node4322.attr('style', "margin:0 0 10px 0; text-align: center");
    
    
    var tmp17607 = mobl.ref("Not at all");
    
    
    var tmp17608 = mobl.ref(null);
    
    var nodes8722 = $("<span>");
    node4322.append(nodes8722);
    subs__.addSub((mobl.label)(tmp17607, mobl.ref(ui.left), tmp17608, function(_, callback) {
      var root11829 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11829); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8722;
      nodes8722 = node.contents();
      oldNodes.replaceWith(nodes8722);
    }));
    
    var tmp17609 = mobl.ref("Relaxed");
    
    
    var tmp17610 = mobl.ref(null);
    
    var nodes8723 = $("<span>");
    node4322.append(nodes8723);
    subs__.addSub((mobl.label)(tmp17609, mobl.ref(ui.center), tmp17610, function(_, callback) {
      var root11830 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11830); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8723;
      nodes8723 = node.contents();
      oldNodes.replaceWith(nodes8723);
    }));
    
    var tmp17611 = mobl.ref("Extremely");
    
    
    var tmp17612 = mobl.ref(null);
    
    var nodes8724 = $("<span>");
    node4322.append(nodes8724);
    subs__.addSub((mobl.label)(tmp17611, mobl.ref(ui.right), tmp17612, function(_, callback) {
      var root11831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11831); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8724;
      nodes8724 = node.contents();
      oldNodes.replaceWith(nodes8724);
    }));
    root11827.append(node4322);
    
    var tmp17615 = mobl.ref(50);
    
    
    var tmp17614 = mobl.ref(100);
    
    
    var tmp17613 = mobl.ref(0);
    
    var nodes8721 = $("<span>");
    root11827.append(nodes8721);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp17613, tmp17614, tmp17615, function(_, callback) {
      var root11828 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11828); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8721;
      nodes8721 = node.contents();
      oldNodes.replaceWith(nodes8721);
    }));
    callback(root11827); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8720;
    nodes8720 = node.contents();
    oldNodes.replaceWith(nodes8720);
  }));
  
  var tmp17630 = mobl.ref(false);
  
  
  var tmp17629 = mobl.ref(null);
  
  
  var tmp17628 = mobl.ref(null);
  
  var nodes8725 = $("<span>");
  root11821.append(nodes8725);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17628, tmp17629, tmp17630, function(_, callback) {
    var root11832 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node4323 = $("<div>");
    node4323.attr('style', "margin:0 0 10px 0; text-align: center");
    
    
    var tmp17619 = mobl.ref("Not at all");
    
    
    var tmp17620 = mobl.ref(null);
    
    var nodes8727 = $("<span>");
    node4323.append(nodes8727);
    subs__.addSub((mobl.label)(tmp17619, mobl.ref(ui.left), tmp17620, function(_, callback) {
      var root11834 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11834); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8727;
      nodes8727 = node.contents();
      oldNodes.replaceWith(nodes8727);
    }));
    
    var tmp17621 = mobl.ref("Awake");
    
    
    var tmp17622 = mobl.ref(null);
    
    var nodes8728 = $("<span>");
    node4323.append(nodes8728);
    subs__.addSub((mobl.label)(tmp17621, mobl.ref(ui.center), tmp17622, function(_, callback) {
      var root11835 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11835); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8728;
      nodes8728 = node.contents();
      oldNodes.replaceWith(nodes8728);
    }));
    
    var tmp17623 = mobl.ref("Extremely");
    
    
    var tmp17624 = mobl.ref(null);
    
    var nodes8729 = $("<span>");
    node4323.append(nodes8729);
    subs__.addSub((mobl.label)(tmp17623, mobl.ref(ui.right), tmp17624, function(_, callback) {
      var root11836 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11836); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8729;
      nodes8729 = node.contents();
      oldNodes.replaceWith(nodes8729);
    }));
    root11832.append(node4323);
    
    var tmp17627 = mobl.ref(50);
    
    
    var tmp17626 = mobl.ref(100);
    
    
    var tmp17625 = mobl.ref(0);
    
    var nodes8726 = $("<span>");
    root11832.append(nodes8726);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp17625, tmp17626, tmp17627, function(_, callback) {
      var root11833 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11833); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8726;
      nodes8726 = node.contents();
      oldNodes.replaceWith(nodes8726);
    }));
    callback(root11832); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8725;
    nodes8725 = node.contents();
    oldNodes.replaceWith(nodes8725);
  }));
  
  var tmp17632 = mobl.ref(function(event, callback) {
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
                           var tmp17634 = result__;
                           if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
  
  
  var tmp17631 = mobl.ref("Save");
  
  var nodes8730 = $("<span>");
  root11821.append(nodes8730);
  subs__.addSub((ui.button)(tmp17631, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp17632, function(_, callback) {
    var root11837 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11837); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8730;
    nodes8730 = node.contents();
    oldNodes.replaceWith(nodes8730);
  }));
  callback(root11821); return subs__;
  
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes8714;
  nodes8714 = node.contents();
  oldNodes.replaceWith(nodes8714);
}));
callback(root11820); return subs__;

return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
var root11838 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp17633 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));

var nodes8731 = $("<span>");
root11838.append(nodes8731);
subs__.addSub((controls.moodometer.moodoForm)(tmp17633, function(_, callback) {
  var root11839 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root11839); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes8731;
  nodes8731 = node.contents();
  oldNodes.replaceWith(nodes8731);
}));
callback(root11838); return subs__;

return subs__;
};
