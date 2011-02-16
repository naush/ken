mobl.provides('controls.moodometer');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
var root768 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes679 = $("<span>");
root768.append(nodes679);
subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
  var root769 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root769); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes679;
  nodes679 = node.contents();
  oldNodes.replaceWith(nodes679);
}));
callback(root768); return subs__;

return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
var root770 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes680 = $("<span>");
root770.append(nodes680);
subs__.addSub((ui.group)(function(_, callback) {
  var root771 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1579 = mobl.ref(false);
  
  
  var tmp1578 = mobl.ref(null);
  
  
  var tmp1577 = mobl.ref(null);
  
  var nodes682 = $("<span>");
  root771.append(nodes682);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1577, tmp1578, tmp1579, function(_, callback) {
    var root772 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp1572 = mobl.ref("Happy");
    
    
    var tmp1573 = mobl.ref(null);
    
    var nodes683 = $("<span>");
    root772.append(nodes683);
    subs__.addSub((mobl.label)(tmp1572, mobl.ref(ui.emphasis), tmp1573, function(_, callback) {
      var root773 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root773); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes683;
      nodes683 = node.contents();
      oldNodes.replaceWith(nodes683);
    }));
    
    var tmp1575 = mobl.ref(10);
    
    
    var tmp1574 = mobl.ref(-10);
    
    
    var tmp1576 = mobl.ref(0);
    
    var nodes684 = $("<span>");
    root772.append(nodes684);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp1574, tmp1575, tmp1576, function(_, callback) {
      var root774 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root774); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes684;
      nodes684 = node.contents();
      oldNodes.replaceWith(nodes684);
    }));
    callback(root772); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes682;
    nodes682 = node.contents();
    oldNodes.replaceWith(nodes682);
  }));
  
  var tmp1587 = mobl.ref(false);
  
  
  var tmp1586 = mobl.ref(null);
  
  
  var tmp1585 = mobl.ref(null);
  
  var nodes685 = $("<span>");
  root771.append(nodes685);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1585, tmp1586, tmp1587, function(_, callback) {
    var root775 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp1580 = mobl.ref("Relaxed");
    
    
    var tmp1581 = mobl.ref(null);
    
    var nodes686 = $("<span>");
    root775.append(nodes686);
    subs__.addSub((mobl.label)(tmp1580, mobl.ref(ui.emphasis), tmp1581, function(_, callback) {
      var root776 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root776); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes686;
      nodes686 = node.contents();
      oldNodes.replaceWith(nodes686);
    }));
    
    var tmp1583 = mobl.ref(10);
    
    
    var tmp1582 = mobl.ref(-10);
    
    
    var tmp1584 = mobl.ref(0);
    
    var nodes687 = $("<span>");
    root775.append(nodes687);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp1582, tmp1583, tmp1584, function(_, callback) {
      var root777 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root777); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes687;
      nodes687 = node.contents();
      oldNodes.replaceWith(nodes687);
    }));
    callback(root775); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes685;
    nodes685 = node.contents();
    oldNodes.replaceWith(nodes685);
  }));
  
  var tmp1595 = mobl.ref(false);
  
  
  var tmp1594 = mobl.ref(null);
  
  
  var tmp1593 = mobl.ref(null);
  
  var nodes688 = $("<span>");
  root771.append(nodes688);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1593, tmp1594, tmp1595, function(_, callback) {
    var root778 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp1588 = mobl.ref("Awake");
    
    
    var tmp1589 = mobl.ref(null);
    
    var nodes689 = $("<span>");
    root778.append(nodes689);
    subs__.addSub((mobl.label)(tmp1588, mobl.ref(ui.emphasis), tmp1589, function(_, callback) {
      var root779 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root779); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes689;
      nodes689 = node.contents();
      oldNodes.replaceWith(nodes689);
    }));
    
    var tmp1591 = mobl.ref(10);
    
    
    var tmp1590 = mobl.ref(-10);
    
    
    var tmp1592 = mobl.ref(0);
    
    var nodes690 = $("<span>");
    root778.append(nodes690);
    subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp1590, tmp1591, tmp1592, function(_, callback) {
      var root780 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root780); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes690;
      nodes690 = node.contents();
      oldNodes.replaceWith(nodes690);
    }));
    callback(root778); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes688;
    nodes688 = node.contents();
    oldNodes.replaceWith(nodes688);
  }));
  
  var tmp1597 = mobl.ref(function(event, callback) {
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
                           var tmp1599 = result__;
                           if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
  
  
  var tmp1596 = mobl.ref("Save");
  
  var nodes691 = $("<span>");
  root771.append(nodes691);
  subs__.addSub((ui.button)(tmp1596, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1597, function(_, callback) {
    var root781 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root781); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes691;
    nodes691 = node.contents();
    oldNodes.replaceWith(nodes691);
  }));
  callback(root771); return subs__;
  
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes680;
  nodes680 = node.contents();
  oldNodes.replaceWith(nodes680);
}));
callback(root770); return subs__;

return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
var root782 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp1598 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));

var nodes692 = $("<span>");
root782.append(nodes692);
subs__.addSub((controls.moodometer.moodoForm)(tmp1598, function(_, callback) {
  var root783 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root783); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes692;
  nodes692 = node.contents();
  oldNodes.replaceWith(nodes692);
}));
callback(root782); return subs__;

return subs__;
};
