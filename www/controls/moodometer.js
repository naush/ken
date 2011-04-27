mobl.provides('controls.moodometer');
mobl.provides('models');
mobl.provides('mobl');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
  var root19046 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes12807 = $("<span>");
  root19046.append(nodes12807);
  subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
    var root19047 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root19047); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12807;
    nodes12807 = node.contents();
    oldNodes.replaceWith(nodes12807);
  }));
  callback(root19046); return subs__;
  
  return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
  var root19048 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes12808 = $("<span>");
  root19048.append(nodes12808);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19049 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp22286 = mobl.ref(false);
    
    
    var tmp22285 = mobl.ref(null);
    
    
    var tmp22284 = mobl.ref(null);
    
    var nodes12809 = $("<span>");
    root19049.append(nodes12809);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp22284, tmp22285, tmp22286, function(_, callback) {
      var root19050 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node8954 = $("<div>");
      node8954.attr('style', "margin:0 0 10px 0; text-align: center");
      
      
      var tmp22275 = mobl.ref("Not at all");
      
      
      var tmp22276 = mobl.ref(null);
      
      var nodes12811 = $("<span>");
      node8954.append(nodes12811);
      subs__.addSub((mobl.label)(tmp22275, mobl.ref(ui.left), tmp22276, function(_, callback) {
        var root19052 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19052); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12811;
        nodes12811 = node.contents();
        oldNodes.replaceWith(nodes12811);
      }));
      
      var tmp22277 = mobl.ref("Happy");
      
      
      var tmp22278 = mobl.ref(null);
      
      var nodes12812 = $("<span>");
      node8954.append(nodes12812);
      subs__.addSub((mobl.label)(tmp22277, mobl.ref(ui.center), tmp22278, function(_, callback) {
        var root19053 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19053); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12812;
        nodes12812 = node.contents();
        oldNodes.replaceWith(nodes12812);
      }));
      
      var tmp22279 = mobl.ref("Extremely");
      
      
      var tmp22280 = mobl.ref(null);
      
      var nodes12813 = $("<span>");
      node8954.append(nodes12813);
      subs__.addSub((mobl.label)(tmp22279, mobl.ref(ui.right), tmp22280, function(_, callback) {
        var root19054 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19054); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12813;
        nodes12813 = node.contents();
        oldNodes.replaceWith(nodes12813);
      }));
      root19050.append(node8954);
      
      var tmp22283 = mobl.ref(50);
      
      
      var tmp22282 = mobl.ref(100);
      
      
      var tmp22281 = mobl.ref(0);
      
      var nodes12810 = $("<span>");
      root19050.append(nodes12810);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp22281, tmp22282, tmp22283, function(_, callback) {
        var root19051 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19051); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12810;
        nodes12810 = node.contents();
        oldNodes.replaceWith(nodes12810);
      }));
      callback(root19050); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12809;
      nodes12809 = node.contents();
      oldNodes.replaceWith(nodes12809);
    }));
    
    var tmp22298 = mobl.ref(false);
    
    
    var tmp22297 = mobl.ref(null);
    
    
    var tmp22296 = mobl.ref(null);
    
    var nodes12814 = $("<span>");
    root19049.append(nodes12814);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp22296, tmp22297, tmp22298, function(_, callback) {
      var root19055 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node8955 = $("<div>");
      node8955.attr('style', "margin:0 0 10px 0; text-align: center");
      
      
      var tmp22287 = mobl.ref("Not at all");
      
      
      var tmp22288 = mobl.ref(null);
      
      var nodes12816 = $("<span>");
      node8955.append(nodes12816);
      subs__.addSub((mobl.label)(tmp22287, mobl.ref(ui.left), tmp22288, function(_, callback) {
        var root19057 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19057); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12816;
        nodes12816 = node.contents();
        oldNodes.replaceWith(nodes12816);
      }));
      
      var tmp22289 = mobl.ref("Relaxed");
      
      
      var tmp22290 = mobl.ref(null);
      
      var nodes12817 = $("<span>");
      node8955.append(nodes12817);
      subs__.addSub((mobl.label)(tmp22289, mobl.ref(ui.center), tmp22290, function(_, callback) {
        var root19058 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19058); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12817;
        nodes12817 = node.contents();
        oldNodes.replaceWith(nodes12817);
      }));
      
      var tmp22291 = mobl.ref("Extremely");
      
      
      var tmp22292 = mobl.ref(null);
      
      var nodes12818 = $("<span>");
      node8955.append(nodes12818);
      subs__.addSub((mobl.label)(tmp22291, mobl.ref(ui.right), tmp22292, function(_, callback) {
        var root19059 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19059); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12818;
        nodes12818 = node.contents();
        oldNodes.replaceWith(nodes12818);
      }));
      root19055.append(node8955);
      
      var tmp22295 = mobl.ref(50);
      
      
      var tmp22294 = mobl.ref(100);
      
      
      var tmp22293 = mobl.ref(0);
      
      var nodes12815 = $("<span>");
      root19055.append(nodes12815);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp22293, tmp22294, tmp22295, function(_, callback) {
        var root19056 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19056); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12815;
        nodes12815 = node.contents();
        oldNodes.replaceWith(nodes12815);
      }));
      callback(root19055); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12814;
      nodes12814 = node.contents();
      oldNodes.replaceWith(nodes12814);
    }));
    
    var tmp22310 = mobl.ref(false);
    
    
    var tmp22309 = mobl.ref(null);
    
    
    var tmp22308 = mobl.ref(null);
    
    var nodes12819 = $("<span>");
    root19049.append(nodes12819);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp22308, tmp22309, tmp22310, function(_, callback) {
      var root19060 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node8956 = $("<div>");
      node8956.attr('style', "margin:0 0 10px 0; text-align: center");
      
      
      var tmp22299 = mobl.ref("Not at all");
      
      
      var tmp22300 = mobl.ref(null);
      
      var nodes12821 = $("<span>");
      node8956.append(nodes12821);
      subs__.addSub((mobl.label)(tmp22299, mobl.ref(ui.left), tmp22300, function(_, callback) {
        var root19062 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19062); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12821;
        nodes12821 = node.contents();
        oldNodes.replaceWith(nodes12821);
      }));
      
      var tmp22301 = mobl.ref("Awake");
      
      
      var tmp22302 = mobl.ref(null);
      
      var nodes12822 = $("<span>");
      node8956.append(nodes12822);
      subs__.addSub((mobl.label)(tmp22301, mobl.ref(ui.center), tmp22302, function(_, callback) {
        var root19063 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19063); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12822;
        nodes12822 = node.contents();
        oldNodes.replaceWith(nodes12822);
      }));
      
      var tmp22303 = mobl.ref("Extremely");
      
      
      var tmp22304 = mobl.ref(null);
      
      var nodes12823 = $("<span>");
      node8956.append(nodes12823);
      subs__.addSub((mobl.label)(tmp22303, mobl.ref(ui.right), tmp22304, function(_, callback) {
        var root19064 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19064); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12823;
        nodes12823 = node.contents();
        oldNodes.replaceWith(nodes12823);
      }));
      root19060.append(node8956);
      
      var tmp22307 = mobl.ref(50);
      
      
      var tmp22306 = mobl.ref(100);
      
      
      var tmp22305 = mobl.ref(0);
      
      var nodes12820 = $("<span>");
      root19060.append(nodes12820);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp22305, tmp22306, tmp22307, function(_, callback) {
        var root19061 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19061); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12820;
        nodes12820 = node.contents();
        oldNodes.replaceWith(nodes12820);
      }));
      callback(root19060); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12819;
      nodes12819 = node.contents();
      oldNodes.replaceWith(nodes12819);
    }));
    
    var tmp22312 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mood.get().happy.length == 0 || mood.get().relaxed.length == 0 || mood.get().awake.length == 0;
                         if(result__) {
                           var result__ = mobl.notify.notify("Did you forget to rate your mood?", "Notification");
                           if(callback && callback.apply) callback(); return;
                         } else {
                           {
                             var result__ = mobl.notify.notify("Your mood is saved successfully!", "Notification");
                             var result__ = mobl.add(mood.get());
                             mobl.call('controls.moodometer.moodoScreen', [mobl.ref(new models.moods.Mood({'date': mobl.now()})), mobl.ref(false), mobl.ref("slide")], function(result__) {
                             var tmp22314 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           }
                         }
                       });
    
    
    var tmp22311 = mobl.ref("Save");
    
    var nodes12824 = $("<span>");
    root19049.append(nodes12824);
    subs__.addSub((ui.button)(tmp22311, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp22312, function(_, callback) {
      var root19065 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19065); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes12824;
      nodes12824 = node.contents();
      oldNodes.replaceWith(nodes12824);
    }));
    callback(root19049); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes12808;
    nodes12808 = node.contents();
    oldNodes.replaceWith(nodes12808);
  }));
  callback(root19048); return subs__;
  
  return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
  var root19066 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp22313 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));
  
  var nodes12825 = $("<span>");
  root19066.append(nodes12825);
  subs__.addSub((controls.moodometer.moodoForm)(tmp22313, function(_, callback) {
    var root19067 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root19067); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12825;
    nodes12825 = node.contents();
    oldNodes.replaceWith(nodes12825);
  }));
  callback(root19066); return subs__;
  
  return subs__;
};
