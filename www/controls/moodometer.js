mobl.provides('controls.moodometer');
mobl.provides('models');
mobl.provides('mobl');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
  var root4237 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3371 = $("<span>");
  root4237.append(nodes3371);
  subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
    var root4238 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4238); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3371;
    nodes3371 = node.contents();
    oldNodes.replaceWith(nodes3371);
  }));
  callback(root4237); return subs__;
  
  return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
  var root4239 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8786 = mobl.ref(null);
  
  
  var tmp8785 = mobl.ref(null);
  
  
  var tmp8784 = mobl.ref(null);
  
  var nodes3372 = $("<span>");
  root4239.append(nodes3372);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp8784, tmp8785, tmp8786, function(_, callback) {
    var root4240 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8757 = mobl.ref(false);
    
    
    var tmp8756 = mobl.ref(null);
    
    
    var tmp8755 = mobl.ref(null);
    
    var nodes3373 = $("<span>");
    root4240.append(nodes3373);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8755, tmp8756, tmp8757, function(_, callback) {
      var root4241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1512 = $("<div>");
      node1512.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp8745 = mobl.ref("Not at all");
      
      
      var tmp8746 = mobl.ref(null);
      
      var nodes3375 = $("<span>");
      node1512.append(nodes3375);
      subs__.addSub((mobl.label)(tmp8745, mobl.ref(ui.left), tmp8746, function(_, callback) {
        var root4243 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4243); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3375;
        nodes3375 = node.contents();
        oldNodes.replaceWith(nodes3375);
      }));
      
      var tmp8747 = mobl.ref("Happy");
      
      
      var tmp8748 = mobl.ref(null);
      
      var nodes3376 = $("<span>");
      node1512.append(nodes3376);
      subs__.addSub((mobl.label)(tmp8747, mobl.ref(ui.center), tmp8748, function(_, callback) {
        var root4244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3376;
        nodes3376 = node.contents();
        oldNodes.replaceWith(nodes3376);
      }));
      
      var tmp8749 = mobl.ref("Extremely");
      
      
      var tmp8750 = mobl.ref(null);
      
      var nodes3377 = $("<span>");
      node1512.append(nodes3377);
      subs__.addSub((mobl.label)(tmp8749, mobl.ref(ui.right), tmp8750, function(_, callback) {
        var root4245 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4245); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3377;
        nodes3377 = node.contents();
        oldNodes.replaceWith(nodes3377);
      }));
      root4241.append(node1512);
      
      var tmp8753 = mobl.ref(50);
      
      
      var tmp8752 = mobl.ref(100);
      
      
      var tmp8751 = mobl.ref(0);
      
      
      var tmp8754 = mobl.ref(null);
      
      var nodes3374 = $("<span>");
      root4241.append(nodes3374);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), tmp8754, tmp8751, tmp8752, tmp8753, function(_, callback) {
        var root4242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3374;
        nodes3374 = node.contents();
        oldNodes.replaceWith(nodes3374);
      }));
      callback(root4241); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3373;
      nodes3373 = node.contents();
      oldNodes.replaceWith(nodes3373);
    }));
    
    var tmp8770 = mobl.ref(false);
    
    
    var tmp8769 = mobl.ref(null);
    
    
    var tmp8768 = mobl.ref(null);
    
    var nodes3378 = $("<span>");
    root4240.append(nodes3378);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8768, tmp8769, tmp8770, function(_, callback) {
      var root4246 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1513 = $("<div>");
      node1513.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp8758 = mobl.ref("Not at all");
      
      
      var tmp8759 = mobl.ref(null);
      
      var nodes3380 = $("<span>");
      node1513.append(nodes3380);
      subs__.addSub((mobl.label)(tmp8758, mobl.ref(ui.left), tmp8759, function(_, callback) {
        var root4248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3380;
        nodes3380 = node.contents();
        oldNodes.replaceWith(nodes3380);
      }));
      
      var tmp8760 = mobl.ref("Relaxed");
      
      
      var tmp8761 = mobl.ref(null);
      
      var nodes3381 = $("<span>");
      node1513.append(nodes3381);
      subs__.addSub((mobl.label)(tmp8760, mobl.ref(ui.center), tmp8761, function(_, callback) {
        var root4249 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4249); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3381;
        nodes3381 = node.contents();
        oldNodes.replaceWith(nodes3381);
      }));
      
      var tmp8762 = mobl.ref("Extremely");
      
      
      var tmp8763 = mobl.ref(null);
      
      var nodes3382 = $("<span>");
      node1513.append(nodes3382);
      subs__.addSub((mobl.label)(tmp8762, mobl.ref(ui.right), tmp8763, function(_, callback) {
        var root4250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4250); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3382;
        nodes3382 = node.contents();
        oldNodes.replaceWith(nodes3382);
      }));
      root4246.append(node1513);
      
      var tmp8766 = mobl.ref(50);
      
      
      var tmp8765 = mobl.ref(100);
      
      
      var tmp8764 = mobl.ref(0);
      
      
      var tmp8767 = mobl.ref(null);
      
      var nodes3379 = $("<span>");
      root4246.append(nodes3379);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), tmp8767, tmp8764, tmp8765, tmp8766, function(_, callback) {
        var root4247 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4247); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3379;
        nodes3379 = node.contents();
        oldNodes.replaceWith(nodes3379);
      }));
      callback(root4246); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3378;
      nodes3378 = node.contents();
      oldNodes.replaceWith(nodes3378);
    }));
    
    var tmp8783 = mobl.ref(false);
    
    
    var tmp8782 = mobl.ref(null);
    
    
    var tmp8781 = mobl.ref(null);
    
    var nodes3383 = $("<span>");
    root4240.append(nodes3383);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8781, tmp8782, tmp8783, function(_, callback) {
      var root4251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1514 = $("<div>");
      node1514.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp8771 = mobl.ref("Not at all");
      
      
      var tmp8772 = mobl.ref(null);
      
      var nodes3385 = $("<span>");
      node1514.append(nodes3385);
      subs__.addSub((mobl.label)(tmp8771, mobl.ref(ui.left), tmp8772, function(_, callback) {
        var root4253 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4253); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3385;
        nodes3385 = node.contents();
        oldNodes.replaceWith(nodes3385);
      }));
      
      var tmp8773 = mobl.ref("Awake");
      
      
      var tmp8774 = mobl.ref(null);
      
      var nodes3386 = $("<span>");
      node1514.append(nodes3386);
      subs__.addSub((mobl.label)(tmp8773, mobl.ref(ui.center), tmp8774, function(_, callback) {
        var root4254 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4254); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3386;
        nodes3386 = node.contents();
        oldNodes.replaceWith(nodes3386);
      }));
      
      var tmp8775 = mobl.ref("Extremely");
      
      
      var tmp8776 = mobl.ref(null);
      
      var nodes3387 = $("<span>");
      node1514.append(nodes3387);
      subs__.addSub((mobl.label)(tmp8775, mobl.ref(ui.right), tmp8776, function(_, callback) {
        var root4255 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4255); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3387;
        nodes3387 = node.contents();
        oldNodes.replaceWith(nodes3387);
      }));
      root4251.append(node1514);
      
      var tmp8779 = mobl.ref(50);
      
      
      var tmp8778 = mobl.ref(100);
      
      
      var tmp8777 = mobl.ref(0);
      
      
      var tmp8780 = mobl.ref(null);
      
      var nodes3384 = $("<span>");
      root4251.append(nodes3384);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), tmp8780, tmp8777, tmp8778, tmp8779, function(_, callback) {
        var root4252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4252); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3384;
        nodes3384 = node.contents();
        oldNodes.replaceWith(nodes3384);
      }));
      callback(root4251); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3383;
      nodes3383 = node.contents();
      oldNodes.replaceWith(nodes3383);
    }));
    callback(root4240); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3372;
    nodes3372 = node.contents();
    oldNodes.replaceWith(nodes3372);
  }));
  
  var tmp8796 = mobl.ref(null);
  
  
  var tmp8795 = mobl.ref(null);
  
  
  var tmp8794 = mobl.ref(null);
  
  var nodes3388 = $("<span>");
  root4239.append(nodes3388);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp8794, tmp8795, tmp8796, function(_, callback) {
    var root4256 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8788 = mobl.ref(function(event, callback) {
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
                             var tmp8798 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           }
                         }
                       });
    
    
    var tmp8787 = mobl.ref("resources/images/save.png");
    
    
    var tmp8793 = mobl.ref(null);
    
    
    var tmp8792 = mobl.ref(null);
    
    
    var tmp8791 = mobl.ref(null);
    
    
    var tmp8790 = mobl.ref(null);
    
    
    var tmp8789 = mobl.ref(null);
    
    var nodes3389 = $("<span>");
    root4256.append(nodes3389);
    subs__.addSub((ui.image)(tmp8787, tmp8789, tmp8790, tmp8788, tmp8791, tmp8792, tmp8793, function(_, callback) {
      var root4257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4257); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3389;
      nodes3389 = node.contents();
      oldNodes.replaceWith(nodes3389);
    }));
    callback(root4256); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3388;
    nodes3388 = node.contents();
    oldNodes.replaceWith(nodes3388);
  }));
  callback(root4239); return subs__;
  
  
  return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
  var root4258 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8797 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));
  
  var nodes3390 = $("<span>");
  root4258.append(nodes3390);
  subs__.addSub((controls.moodometer.moodoForm)(tmp8797, function(_, callback) {
    var root4259 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4259); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3390;
    nodes3390 = node.contents();
    oldNodes.replaceWith(nodes3390);
  }));
  callback(root4258); return subs__;
  
  return subs__;
};
