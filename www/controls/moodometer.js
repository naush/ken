mobl.provides('controls.moodometer');

controls.moodometer.addMood = function(mood, callback, screenCallback) {
  var root14048 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var node7708 = $("<div>");
  node7708.attr('style', "margin:20px");
  
  
  var tmp21572 = mobl.ref("Do you feel...?");
  
  
  var tmp21573 = mobl.ref(null);
  
  var nodes10591 = $("<span>");
  node7708.append(nodes10591);
  subs__.addSub((mobl.label)(tmp21572, mobl.ref(ui.title), tmp21573, function(_, callback) {
    var root14049 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root14049); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10591;
    nodes10591 = node.contents();
    oldNodes.replaceWith(nodes10591);
  }));
  var nodes10592 = $("<span>");
  node7708.append(nodes10592);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14050 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp21581 = mobl.ref(false);
    
    
    var tmp21580 = mobl.ref(null);
    
    
    var tmp21579 = mobl.ref(null);
    
    var nodes10593 = $("<span>");
    root14050.append(nodes10593);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp21579, tmp21580, tmp21581, function(_, callback) {
      var root14051 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp21574 = mobl.ref("Happy");
      
      
      var tmp21575 = mobl.ref(null);
      
      var nodes10594 = $("<span>");
      root14051.append(nodes10594);
      subs__.addSub((mobl.label)(tmp21574, mobl.ref(ui.emphasis), tmp21575, function(_, callback) {
        var root14052 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14052); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10594;
        nodes10594 = node.contents();
        oldNodes.replaceWith(nodes10594);
      }));
      
      var tmp21577 = mobl.ref(10);
      
      
      var tmp21576 = mobl.ref(-10);
      
      
      var tmp21578 = mobl.ref(0);
      
      var nodes10595 = $("<span>");
      root14051.append(nodes10595);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp21576, tmp21577, tmp21578, function(_, callback) {
        var root14053 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14053); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10595;
        nodes10595 = node.contents();
        oldNodes.replaceWith(nodes10595);
      }));
      callback(root14051); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10593;
      nodes10593 = node.contents();
      oldNodes.replaceWith(nodes10593);
    }));
    
    var tmp21589 = mobl.ref(false);
    
    
    var tmp21588 = mobl.ref(null);
    
    
    var tmp21587 = mobl.ref(null);
    
    var nodes10596 = $("<span>");
    root14050.append(nodes10596);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp21587, tmp21588, tmp21589, function(_, callback) {
      var root14054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp21582 = mobl.ref("Relaxed");
      
      
      var tmp21583 = mobl.ref(null);
      
      var nodes10597 = $("<span>");
      root14054.append(nodes10597);
      subs__.addSub((mobl.label)(tmp21582, mobl.ref(ui.emphasis), tmp21583, function(_, callback) {
        var root14055 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14055); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10597;
        nodes10597 = node.contents();
        oldNodes.replaceWith(nodes10597);
      }));
      
      var tmp21585 = mobl.ref(10);
      
      
      var tmp21584 = mobl.ref(-10);
      
      
      var tmp21586 = mobl.ref(0);
      
      var nodes10598 = $("<span>");
      root14054.append(nodes10598);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp21584, tmp21585, tmp21586, function(_, callback) {
        var root14056 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14056); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10598;
        nodes10598 = node.contents();
        oldNodes.replaceWith(nodes10598);
      }));
      callback(root14054); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10596;
      nodes10596 = node.contents();
      oldNodes.replaceWith(nodes10596);
    }));
    
    var tmp21597 = mobl.ref(false);
    
    
    var tmp21596 = mobl.ref(null);
    
    
    var tmp21595 = mobl.ref(null);
    
    var nodes10599 = $("<span>");
    root14050.append(nodes10599);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp21595, tmp21596, tmp21597, function(_, callback) {
      var root14057 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp21590 = mobl.ref("Awake");
      
      
      var tmp21591 = mobl.ref(null);
      
      var nodes10600 = $("<span>");
      root14057.append(nodes10600);
      subs__.addSub((mobl.label)(tmp21590, mobl.ref(ui.emphasis), tmp21591, function(_, callback) {
        var root14058 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14058); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10600;
        nodes10600 = node.contents();
        oldNodes.replaceWith(nodes10600);
      }));
      
      var tmp21593 = mobl.ref(10);
      
      
      var tmp21592 = mobl.ref(-10);
      
      
      var tmp21594 = mobl.ref(0);
      
      var nodes10601 = $("<span>");
      root14057.append(nodes10601);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp21592, tmp21593, tmp21594, function(_, callback) {
        var root14059 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14059); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10601;
        nodes10601 = node.contents();
        oldNodes.replaceWith(nodes10601);
      }));
      callback(root14057); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10599;
      nodes10599 = node.contents();
      oldNodes.replaceWith(nodes10599);
    }));
    
    var tmp21599 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mood.get().happy.length == 0 || mood.get().relaxed.length == 0 || mood.get().awake.length == 0;
                         if(result__) {
                           var result__ = mobl.notify.notify("Did you forget to rate your mood?", "Notification");
                           if(callback && callback.apply) callback(); return;
                         } else {
                           {
                             var result__ = mobl.add(mood.get());
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                         }
                       });
    
    
    var tmp21598 = mobl.ref("Save");
    
    var nodes10602 = $("<span>");
    root14050.append(nodes10602);
    subs__.addSub((ui.button)(tmp21598, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp21599, function(_, callback) {
      var root14060 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14060); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10602;
      nodes10602 = node.contents();
      oldNodes.replaceWith(nodes10602);
    }));
    callback(root14050); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10592;
    nodes10592 = node.contents();
    oldNodes.replaceWith(nodes10592);
  }));
  root14048.append(node7708);
  callback(root14048); return subs__;
  
  
  
  return subs__;
};

controls.moodometer.moodometer = function(elements, callback) {
  var root14061 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp21601 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       mobl.call('controls.moodometer.addMood', [mobl.ref(new models.moods.Mood({'date': mobl.now()}))], function(result__) {
                       var tmp21602 = result__;
                       if(callback && callback.apply) callback(); return;
                       });
                     });
  
  
  var tmp21600 = mobl.ref("Add");
  
  var nodes10603 = $("<span>");
  root14061.append(nodes10603);
  subs__.addSub((ui.button)(tmp21600, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp21601, function(_, callback) {
    var root14062 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root14062); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10603;
    nodes10603 = node.contents();
    oldNodes.replaceWith(nodes10603);
  }));
  callback(root14061); return subs__;
  
  return subs__;
};
