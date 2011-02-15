mobl.provides('controls.moodometer');

controls.moodometer.addMood = function(mood, callback, screenCallback) {
  var root1569 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1385 = $("<span>");
  root1569.append(nodes1385);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1570 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3305 = mobl.ref(false);
    
    
    var tmp3304 = mobl.ref(null);
    
    
    var tmp3303 = mobl.ref(null);
    
    var nodes1386 = $("<span>");
    root1570.append(nodes1386);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3303, tmp3304, tmp3305, function(_, callback) {
      var root1571 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3298 = mobl.ref("Happy");
      
      
      var tmp3299 = mobl.ref(null);
      
      var nodes1387 = $("<span>");
      root1571.append(nodes1387);
      subs__.addSub((mobl.label)(tmp3298, mobl.ref(ui.emphasis), tmp3299, function(_, callback) {
        var root1572 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1572); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1387;
        nodes1387 = node.contents();
        oldNodes.replaceWith(nodes1387);
      }));
      
      var tmp3301 = mobl.ref(10);
      
      
      var tmp3300 = mobl.ref(-10);
      
      
      var tmp3302 = mobl.ref(0);
      
      var nodes1388 = $("<span>");
      root1571.append(nodes1388);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp3300, tmp3301, tmp3302, function(_, callback) {
        var root1573 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1573); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1388;
        nodes1388 = node.contents();
        oldNodes.replaceWith(nodes1388);
      }));
      callback(root1571); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1386;
      nodes1386 = node.contents();
      oldNodes.replaceWith(nodes1386);
    }));
    
    var tmp3313 = mobl.ref(false);
    
    
    var tmp3312 = mobl.ref(null);
    
    
    var tmp3311 = mobl.ref(null);
    
    var nodes1389 = $("<span>");
    root1570.append(nodes1389);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3311, tmp3312, tmp3313, function(_, callback) {
      var root1574 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3306 = mobl.ref("Relaxed");
      
      
      var tmp3307 = mobl.ref(null);
      
      var nodes1390 = $("<span>");
      root1574.append(nodes1390);
      subs__.addSub((mobl.label)(tmp3306, mobl.ref(ui.emphasis), tmp3307, function(_, callback) {
        var root1575 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1575); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1390;
        nodes1390 = node.contents();
        oldNodes.replaceWith(nodes1390);
      }));
      
      var tmp3309 = mobl.ref(10);
      
      
      var tmp3308 = mobl.ref(-10);
      
      
      var tmp3310 = mobl.ref(0);
      
      var nodes1391 = $("<span>");
      root1574.append(nodes1391);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp3308, tmp3309, tmp3310, function(_, callback) {
        var root1576 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1576); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1391;
        nodes1391 = node.contents();
        oldNodes.replaceWith(nodes1391);
      }));
      callback(root1574); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1389;
      nodes1389 = node.contents();
      oldNodes.replaceWith(nodes1389);
    }));
    
    var tmp3321 = mobl.ref(false);
    
    
    var tmp3320 = mobl.ref(null);
    
    
    var tmp3319 = mobl.ref(null);
    
    var nodes1392 = $("<span>");
    root1570.append(nodes1392);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3319, tmp3320, tmp3321, function(_, callback) {
      var root1577 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3314 = mobl.ref("Awake");
      
      
      var tmp3315 = mobl.ref(null);
      
      var nodes1393 = $("<span>");
      root1577.append(nodes1393);
      subs__.addSub((mobl.label)(tmp3314, mobl.ref(ui.emphasis), tmp3315, function(_, callback) {
        var root1578 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1578); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1393;
        nodes1393 = node.contents();
        oldNodes.replaceWith(nodes1393);
      }));
      
      var tmp3317 = mobl.ref(10);
      
      
      var tmp3316 = mobl.ref(-10);
      
      
      var tmp3318 = mobl.ref(0);
      
      var nodes1394 = $("<span>");
      root1577.append(nodes1394);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp3316, tmp3317, tmp3318, function(_, callback) {
        var root1579 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1579); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1394;
        nodes1394 = node.contents();
        oldNodes.replaceWith(nodes1394);
      }));
      callback(root1577); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1392;
      nodes1392 = node.contents();
      oldNodes.replaceWith(nodes1392);
    }));
    
    var tmp3323 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mood.get().happy.length == 0 || mood.get().relaxed.length == 0 || mood.get().awake.length == 0;
                         if(result__) {
                           var result__ = mobl.notify.notify("Did you forget to rate your mood?", "Notification");
                           if(callback && callback.apply) callback(); return;
                         } else {
                           {
                             var result__ = mobl.add(mood.get());
                             if(callback && callback.apply) callback(); return;
                           }
                         }
                       });
    
    
    var tmp3322 = mobl.ref("Save");
    
    var nodes1395 = $("<span>");
    root1570.append(nodes1395);
    subs__.addSub((ui.button)(tmp3322, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3323, function(_, callback) {
      var root1580 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1580); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1395;
      nodes1395 = node.contents();
      oldNodes.replaceWith(nodes1395);
    }));
    callback(root1570); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1385;
    nodes1385 = node.contents();
    oldNodes.replaceWith(nodes1385);
  }));
  callback(root1569); return subs__;
  
  return subs__;
};

controls.moodometer.moodometer = function(elements, callback) {
  var root1581 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var mood = mobl.ref(new models.moods.Mood({'date': mobl.now()}));
  
  var nodes1396 = $("<span>");
  root1581.append(nodes1396);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1582 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp3331 = mobl.ref(false);
    
    
    var tmp3330 = mobl.ref(null);
    
    
    var tmp3329 = mobl.ref(null);
    
    var nodes1397 = $("<span>");
    root1582.append(nodes1397);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3329, tmp3330, tmp3331, function(_, callback) {
      var root1583 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3324 = mobl.ref("Happy");
      
      
      var tmp3325 = mobl.ref(null);
      
      var nodes1398 = $("<span>");
      root1583.append(nodes1398);
      subs__.addSub((mobl.label)(tmp3324, mobl.ref(ui.emphasis), tmp3325, function(_, callback) {
        var root1584 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1584); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1398;
        nodes1398 = node.contents();
        oldNodes.replaceWith(nodes1398);
      }));
      
      var tmp3327 = mobl.ref(10);
      
      
      var tmp3326 = mobl.ref(-10);
      
      
      var tmp3328 = mobl.ref(0);
      
      var nodes1399 = $("<span>");
      root1583.append(nodes1399);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp3326, tmp3327, tmp3328, function(_, callback) {
        var root1585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1585); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1399;
        nodes1399 = node.contents();
        oldNodes.replaceWith(nodes1399);
      }));
      callback(root1583); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1397;
      nodes1397 = node.contents();
      oldNodes.replaceWith(nodes1397);
    }));
    
    var tmp3339 = mobl.ref(false);
    
    
    var tmp3338 = mobl.ref(null);
    
    
    var tmp3337 = mobl.ref(null);
    
    var nodes1400 = $("<span>");
    root1582.append(nodes1400);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3337, tmp3338, tmp3339, function(_, callback) {
      var root1586 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3332 = mobl.ref("Relaxed");
      
      
      var tmp3333 = mobl.ref(null);
      
      var nodes1401 = $("<span>");
      root1586.append(nodes1401);
      subs__.addSub((mobl.label)(tmp3332, mobl.ref(ui.emphasis), tmp3333, function(_, callback) {
        var root1587 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1587); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1401;
        nodes1401 = node.contents();
        oldNodes.replaceWith(nodes1401);
      }));
      
      var tmp3335 = mobl.ref(10);
      
      
      var tmp3334 = mobl.ref(-10);
      
      
      var tmp3336 = mobl.ref(0);
      
      var nodes1402 = $("<span>");
      root1586.append(nodes1402);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp3334, tmp3335, tmp3336, function(_, callback) {
        var root1588 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1588); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1402;
        nodes1402 = node.contents();
        oldNodes.replaceWith(nodes1402);
      }));
      callback(root1586); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1400;
      nodes1400 = node.contents();
      oldNodes.replaceWith(nodes1400);
    }));
    
    var tmp3347 = mobl.ref(false);
    
    
    var tmp3346 = mobl.ref(null);
    
    
    var tmp3345 = mobl.ref(null);
    
    var nodes1403 = $("<span>");
    root1582.append(nodes1403);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3345, tmp3346, tmp3347, function(_, callback) {
      var root1589 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp3340 = mobl.ref("Awake");
      
      
      var tmp3341 = mobl.ref(null);
      
      var nodes1404 = $("<span>");
      root1589.append(nodes1404);
      subs__.addSub((mobl.label)(tmp3340, mobl.ref(ui.emphasis), tmp3341, function(_, callback) {
        var root1590 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1590); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1404;
        nodes1404 = node.contents();
        oldNodes.replaceWith(nodes1404);
      }));
      
      var tmp3343 = mobl.ref(10);
      
      
      var tmp3342 = mobl.ref(-10);
      
      
      var tmp3344 = mobl.ref(0);
      
      var nodes1405 = $("<span>");
      root1589.append(nodes1405);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp3342, tmp3343, tmp3344, function(_, callback) {
        var root1591 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1591); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1405;
        nodes1405 = node.contents();
        oldNodes.replaceWith(nodes1405);
      }));
      callback(root1589); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1403;
      nodes1403 = node.contents();
      oldNodes.replaceWith(nodes1403);
    }));
    
    var tmp3349 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mood.get().happy.length == 0 || mood.get().relaxed.length == 0 || mood.get().awake.length == 0;
                         if(result__) {
                           var result__ = mobl.notify.notify("Did you forget to rate your mood?", "Notification");
                           if(callback && callback.apply) callback(); return;
                         } else {
                           {
                             var result__ = mobl.notify.notify("Your mood is saved successfully!", "Notification");
                             var result__ = mobl.add(mood.get());
                             mobl.call('controls.moodometer.addMood', [mobl.ref(new models.moods.Mood({'date': mobl.now()}))], function(result__) {
                             var tmp3350 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           }
                         }
                       });
    
    
    var tmp3348 = mobl.ref("Save");
    
    var nodes1406 = $("<span>");
    root1582.append(nodes1406);
    subs__.addSub((ui.button)(tmp3348, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3349, function(_, callback) {
      var root1592 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1592); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1406;
      nodes1406 = node.contents();
      oldNodes.replaceWith(nodes1406);
    }));
    callback(root1582); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1396;
    nodes1396 = node.contents();
    oldNodes.replaceWith(nodes1396);
  }));
  callback(root1581); return subs__;
  
  return subs__;
};
