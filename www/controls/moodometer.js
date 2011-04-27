mobl.provides('controls.moodometer');
mobl.provides('models');
mobl.provides('mobl');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
  var root28484 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes19237 = $("<span>");
  root28484.append(nodes19237);
  subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
    var root28485 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28485); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19237;
    nodes19237 = node.contents();
    oldNodes.replaceWith(nodes19237);
  }));
  callback(root28484); return subs__;
  
  return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
  var root28486 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes19238 = $("<span>");
  root28486.append(nodes19238);
  subs__.addSub((ui.group)(function(_, callback) {
    var root28487 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp33891 = mobl.ref(false);
    
    
    var tmp33890 = mobl.ref(null);
    
    
    var tmp33889 = mobl.ref(null);
    
    var nodes19239 = $("<span>");
    root28487.append(nodes19239);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp33889, tmp33890, tmp33891, function(_, callback) {
      var root28488 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node13273 = $("<div>");
      node13273.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp33879 = mobl.ref("Not at all");
      
      
      var tmp33880 = mobl.ref(null);
      
      var nodes19241 = $("<span>");
      node13273.append(nodes19241);
      subs__.addSub((mobl.label)(tmp33879, mobl.ref(ui.left), tmp33880, function(_, callback) {
        var root28490 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28490); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19241;
        nodes19241 = node.contents();
        oldNodes.replaceWith(nodes19241);
      }));
      
      var tmp33881 = mobl.ref("Happy");
      
      
      var tmp33882 = mobl.ref(null);
      
      var nodes19242 = $("<span>");
      node13273.append(nodes19242);
      subs__.addSub((mobl.label)(tmp33881, mobl.ref(ui.center), tmp33882, function(_, callback) {
        var root28491 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28491); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19242;
        nodes19242 = node.contents();
        oldNodes.replaceWith(nodes19242);
      }));
      
      var tmp33883 = mobl.ref("Extremely");
      
      
      var tmp33884 = mobl.ref(null);
      
      var nodes19243 = $("<span>");
      node13273.append(nodes19243);
      subs__.addSub((mobl.label)(tmp33883, mobl.ref(ui.right), tmp33884, function(_, callback) {
        var root28492 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28492); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19243;
        nodes19243 = node.contents();
        oldNodes.replaceWith(nodes19243);
      }));
      root28488.append(node13273);
      
      var tmp33887 = mobl.ref(50);
      
      
      var tmp33886 = mobl.ref(100);
      
      
      var tmp33885 = mobl.ref(0);
      
      
      var tmp33888 = mobl.ref(null);
      
      var nodes19240 = $("<span>");
      root28488.append(nodes19240);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), tmp33888, tmp33885, tmp33886, tmp33887, function(_, callback) {
        var root28489 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28489); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19240;
        nodes19240 = node.contents();
        oldNodes.replaceWith(nodes19240);
      }));
      callback(root28488); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19239;
      nodes19239 = node.contents();
      oldNodes.replaceWith(nodes19239);
    }));
    
    var tmp33904 = mobl.ref(false);
    
    
    var tmp33903 = mobl.ref(null);
    
    
    var tmp33902 = mobl.ref(null);
    
    var nodes19244 = $("<span>");
    root28487.append(nodes19244);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp33902, tmp33903, tmp33904, function(_, callback) {
      var root28493 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node13274 = $("<div>");
      node13274.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp33892 = mobl.ref("Not at all");
      
      
      var tmp33893 = mobl.ref(null);
      
      var nodes19246 = $("<span>");
      node13274.append(nodes19246);
      subs__.addSub((mobl.label)(tmp33892, mobl.ref(ui.left), tmp33893, function(_, callback) {
        var root28495 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28495); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19246;
        nodes19246 = node.contents();
        oldNodes.replaceWith(nodes19246);
      }));
      
      var tmp33894 = mobl.ref("Relaxed");
      
      
      var tmp33895 = mobl.ref(null);
      
      var nodes19247 = $("<span>");
      node13274.append(nodes19247);
      subs__.addSub((mobl.label)(tmp33894, mobl.ref(ui.center), tmp33895, function(_, callback) {
        var root28496 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28496); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19247;
        nodes19247 = node.contents();
        oldNodes.replaceWith(nodes19247);
      }));
      
      var tmp33896 = mobl.ref("Extremely");
      
      
      var tmp33897 = mobl.ref(null);
      
      var nodes19248 = $("<span>");
      node13274.append(nodes19248);
      subs__.addSub((mobl.label)(tmp33896, mobl.ref(ui.right), tmp33897, function(_, callback) {
        var root28497 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28497); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19248;
        nodes19248 = node.contents();
        oldNodes.replaceWith(nodes19248);
      }));
      root28493.append(node13274);
      
      var tmp33900 = mobl.ref(50);
      
      
      var tmp33899 = mobl.ref(100);
      
      
      var tmp33898 = mobl.ref(0);
      
      
      var tmp33901 = mobl.ref(null);
      
      var nodes19245 = $("<span>");
      root28493.append(nodes19245);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), tmp33901, tmp33898, tmp33899, tmp33900, function(_, callback) {
        var root28494 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28494); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19245;
        nodes19245 = node.contents();
        oldNodes.replaceWith(nodes19245);
      }));
      callback(root28493); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19244;
      nodes19244 = node.contents();
      oldNodes.replaceWith(nodes19244);
    }));
    
    var tmp33917 = mobl.ref(false);
    
    
    var tmp33916 = mobl.ref(null);
    
    
    var tmp33915 = mobl.ref(null);
    
    var nodes19249 = $("<span>");
    root28487.append(nodes19249);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp33915, tmp33916, tmp33917, function(_, callback) {
      var root28498 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node13275 = $("<div>");
      node13275.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp33905 = mobl.ref("Not at all");
      
      
      var tmp33906 = mobl.ref(null);
      
      var nodes19251 = $("<span>");
      node13275.append(nodes19251);
      subs__.addSub((mobl.label)(tmp33905, mobl.ref(ui.left), tmp33906, function(_, callback) {
        var root28500 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28500); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19251;
        nodes19251 = node.contents();
        oldNodes.replaceWith(nodes19251);
      }));
      
      var tmp33907 = mobl.ref("Awake");
      
      
      var tmp33908 = mobl.ref(null);
      
      var nodes19252 = $("<span>");
      node13275.append(nodes19252);
      subs__.addSub((mobl.label)(tmp33907, mobl.ref(ui.center), tmp33908, function(_, callback) {
        var root28501 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28501); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19252;
        nodes19252 = node.contents();
        oldNodes.replaceWith(nodes19252);
      }));
      
      var tmp33909 = mobl.ref("Extremely");
      
      
      var tmp33910 = mobl.ref(null);
      
      var nodes19253 = $("<span>");
      node13275.append(nodes19253);
      subs__.addSub((mobl.label)(tmp33909, mobl.ref(ui.right), tmp33910, function(_, callback) {
        var root28502 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28502); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19253;
        nodes19253 = node.contents();
        oldNodes.replaceWith(nodes19253);
      }));
      root28498.append(node13275);
      
      var tmp33913 = mobl.ref(50);
      
      
      var tmp33912 = mobl.ref(100);
      
      
      var tmp33911 = mobl.ref(0);
      
      
      var tmp33914 = mobl.ref(null);
      
      var nodes19250 = $("<span>");
      root28498.append(nodes19250);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), tmp33914, tmp33911, tmp33912, tmp33913, function(_, callback) {
        var root28499 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root28499); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19250;
        nodes19250 = node.contents();
        oldNodes.replaceWith(nodes19250);
      }));
      callback(root28498); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19249;
      nodes19249 = node.contents();
      oldNodes.replaceWith(nodes19249);
    }));
    
    var tmp33919 = mobl.ref(function(event, callback) {
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
                             var tmp33921 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           }
                         }
                       });
    
    
    var tmp33918 = mobl.ref("Save");
    
    var nodes19254 = $("<span>");
    root28487.append(nodes19254);
    subs__.addSub((ui.button)(tmp33918, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp33919, function(_, callback) {
      var root28503 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root28503); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19254;
      nodes19254 = node.contents();
      oldNodes.replaceWith(nodes19254);
    }));
    callback(root28487); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19238;
    nodes19238 = node.contents();
    oldNodes.replaceWith(nodes19238);
  }));
  callback(root28486); return subs__;
  
  return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
  var root28504 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp33920 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));
  
  var nodes19255 = $("<span>");
  root28504.append(nodes19255);
  subs__.addSub((controls.moodometer.moodoForm)(tmp33920, function(_, callback) {
    var root28505 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28505); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19255;
    nodes19255 = node.contents();
    oldNodes.replaceWith(nodes19255);
  }));
  callback(root28504); return subs__;
  
  return subs__;
};
