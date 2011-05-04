mobl.provides('controls.moodometer');
mobl.provides('models');
mobl.provides('ui');
mobl.provides('controls.moodometer');
mobl.provides('models.moods');
mobl.provides('mobl');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
  var root452 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes393 = $("<span>");
  root452.append(nodes393);
  subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
    var root453 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root453); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes393;
    nodes393 = node.contents();
    oldNodes.replaceWith(nodes393);
  }));
  callback(root452); return subs__;
  
  return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
  var root454 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp1505 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1504 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1503 = mobl.ref(result__);
  
  var nodes394 = $("<span>");
  root454.append(nodes394);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp1503, tmp1504, tmp1505, function(_, callback) {
    var root455 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node232 = $("<span>");
    node232.attr('id', "sliders");
    
    var result__ = false;
    var tmp1476 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1475 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1474 = mobl.ref(result__);
    
    var nodes395 = $("<span>");
    node232.append(nodes395);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1474, tmp1475, tmp1476, function(_, callback) {
      var root456 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node233 = $("<div>");
      node233.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      var result__ = "Not at all";
      var tmp1464 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1465 = mobl.ref(result__);
      
      var nodes397 = $("<span>");
      node233.append(nodes397);
      subs__.addSub((mobl.label)(tmp1464, mobl.ref(ui.left), tmp1465, function(_, callback) {
        var root458 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root458); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes397;
        nodes397 = node.contents();
        oldNodes.replaceWith(nodes397);
      }));
      var result__ = "Happy";
      var tmp1466 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1467 = mobl.ref(result__);
      
      var nodes398 = $("<span>");
      node233.append(nodes398);
      subs__.addSub((mobl.label)(tmp1466, mobl.ref(ui.center), tmp1467, function(_, callback) {
        var root459 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root459); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes398;
        nodes398 = node.contents();
        oldNodes.replaceWith(nodes398);
      }));
      var result__ = "Extremely";
      var tmp1468 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1469 = mobl.ref(result__);
      
      var nodes399 = $("<span>");
      node233.append(nodes399);
      subs__.addSub((mobl.label)(tmp1468, mobl.ref(ui.right), tmp1469, function(_, callback) {
        var root460 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root460); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes399;
        nodes399 = node.contents();
        oldNodes.replaceWith(nodes399);
      }));
      root456.append(node233);
      var result__ = 50;
      var tmp1472 = mobl.ref(result__);
      
      var result__ = 100;
      var tmp1471 = mobl.ref(result__);
      
      var result__ = 0;
      var tmp1470 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1473 = mobl.ref(result__);
      
      var nodes396 = $("<span>");
      root456.append(nodes396);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), tmp1473, tmp1470, tmp1471, tmp1472, function(_, callback) {
        var root457 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root457); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes396;
        nodes396 = node.contents();
        oldNodes.replaceWith(nodes396);
      }));
      callback(root456); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes395;
      nodes395 = node.contents();
      oldNodes.replaceWith(nodes395);
    }));
    var result__ = false;
    var tmp1489 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1488 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1487 = mobl.ref(result__);
    
    var nodes400 = $("<span>");
    node232.append(nodes400);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1487, tmp1488, tmp1489, function(_, callback) {
      var root461 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node234 = $("<div>");
      node234.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      var result__ = "Not at all";
      var tmp1477 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1478 = mobl.ref(result__);
      
      var nodes402 = $("<span>");
      node234.append(nodes402);
      subs__.addSub((mobl.label)(tmp1477, mobl.ref(ui.left), tmp1478, function(_, callback) {
        var root463 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root463); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes402;
        nodes402 = node.contents();
        oldNodes.replaceWith(nodes402);
      }));
      var result__ = "Relaxed";
      var tmp1479 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1480 = mobl.ref(result__);
      
      var nodes403 = $("<span>");
      node234.append(nodes403);
      subs__.addSub((mobl.label)(tmp1479, mobl.ref(ui.center), tmp1480, function(_, callback) {
        var root464 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root464); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes403;
        nodes403 = node.contents();
        oldNodes.replaceWith(nodes403);
      }));
      var result__ = "Extremely";
      var tmp1481 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1482 = mobl.ref(result__);
      
      var nodes404 = $("<span>");
      node234.append(nodes404);
      subs__.addSub((mobl.label)(tmp1481, mobl.ref(ui.right), tmp1482, function(_, callback) {
        var root465 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root465); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes404;
        nodes404 = node.contents();
        oldNodes.replaceWith(nodes404);
      }));
      root461.append(node234);
      var result__ = 50;
      var tmp1485 = mobl.ref(result__);
      
      var result__ = 100;
      var tmp1484 = mobl.ref(result__);
      
      var result__ = 0;
      var tmp1483 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1486 = mobl.ref(result__);
      
      var nodes401 = $("<span>");
      root461.append(nodes401);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), tmp1486, tmp1483, tmp1484, tmp1485, function(_, callback) {
        var root462 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root462); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes401;
        nodes401 = node.contents();
        oldNodes.replaceWith(nodes401);
      }));
      callback(root461); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes400;
      nodes400 = node.contents();
      oldNodes.replaceWith(nodes400);
    }));
    var result__ = false;
    var tmp1502 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1501 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1500 = mobl.ref(result__);
    
    var nodes405 = $("<span>");
    node232.append(nodes405);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1500, tmp1501, tmp1502, function(_, callback) {
      var root466 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node235 = $("<div>");
      node235.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      var result__ = "Not at all";
      var tmp1490 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1491 = mobl.ref(result__);
      
      var nodes407 = $("<span>");
      node235.append(nodes407);
      subs__.addSub((mobl.label)(tmp1490, mobl.ref(ui.left), tmp1491, function(_, callback) {
        var root468 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root468); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes407;
        nodes407 = node.contents();
        oldNodes.replaceWith(nodes407);
      }));
      var result__ = "Awake";
      var tmp1492 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1493 = mobl.ref(result__);
      
      var nodes408 = $("<span>");
      node235.append(nodes408);
      subs__.addSub((mobl.label)(tmp1492, mobl.ref(ui.center), tmp1493, function(_, callback) {
        var root469 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root469); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes408;
        nodes408 = node.contents();
        oldNodes.replaceWith(nodes408);
      }));
      var result__ = "Extremely";
      var tmp1494 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1495 = mobl.ref(result__);
      
      var nodes409 = $("<span>");
      node235.append(nodes409);
      subs__.addSub((mobl.label)(tmp1494, mobl.ref(ui.right), tmp1495, function(_, callback) {
        var root470 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root470); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes409;
        nodes409 = node.contents();
        oldNodes.replaceWith(nodes409);
      }));
      root466.append(node235);
      var result__ = 50;
      var tmp1498 = mobl.ref(result__);
      
      var result__ = 100;
      var tmp1497 = mobl.ref(result__);
      
      var result__ = 0;
      var tmp1496 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1499 = mobl.ref(result__);
      
      var nodes406 = $("<span>");
      root466.append(nodes406);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), tmp1499, tmp1496, tmp1497, tmp1498, function(_, callback) {
        var root467 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root467); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes406;
        nodes406 = node.contents();
        oldNodes.replaceWith(nodes406);
      }));
      callback(root466); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes405;
      nodes405 = node.contents();
      oldNodes.replaceWith(nodes405);
    }));
    root455.append(node232);
    callback(root455); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes394;
    nodes394 = node.contents();
    oldNodes.replaceWith(nodes394);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  var result__ = null;
  var tmp1514 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1513 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1512 = mobl.ref(result__);
  
  var nodes410 = $("<span>");
  root454.append(nodes410);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp1512, tmp1513, tmp1514, function(_, callback) {
    var root471 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node236 = $("<span>");
    
    var val177 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val177 !== null) {
      subs__.addSub(mobl.domBind(node236, 'mousedown', val177));
    }
    
    var val178 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val178 !== null) {
      subs__.addSub(mobl.domBind(node236, 'mouseup', val178));
    }
    
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.$("#sliders").hide();
                     var result__ = mobl.$("#flash__Moodometer").show();
                     var result__ = mood.get().happy == "" ? "50" : mood.get().happy;
                     mood.get().happy = result__;
                     var result__ = mood.get().relaxed == "" ? "50" : mood.get().relaxed;
                     mood.get().relaxed = result__;
                     var result__ = mood.get().awake == "" ? "50" : mood.get().awake;
                     mood.get().awake = result__;
                     var result__ = mobl.add(mood.get());
                     var result__ = new models.moods.Mood({'date': mobl.now()});
                     mood.set(result__);
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1506 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1511 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1510 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1509 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1508 = mobl.ref(result__);
    
    var result__ = null;
    var tmp1507 = mobl.ref(result__);
    
    var nodes411 = $("<span>");
    node236.append(nodes411);
    subs__.addSub((ui.image)(saveButtonImage, tmp1507, tmp1508, tmp1506, tmp1509, tmp1510, tmp1511, function(_, callback) {
      var root472 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root472); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes411;
      nodes411 = node.contents();
      oldNodes.replaceWith(nodes411);
    }));
    root471.append(node236);
    callback(root471); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes410;
    nodes410 = node.contents();
    oldNodes.replaceWith(nodes410);
  }));
  callback(root454); return subs__;
  
  
  return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
  var root473 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = new models.moods.Mood({'date': mobl.now()});
  var tmp1515 = mobl.ref(result__);
  
  var nodes412 = $("<span>");
  root473.append(nodes412);
  subs__.addSub((controls.moodometer.moodoForm)(tmp1515, function(_, callback) {
    var root474 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root474); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes412;
    nodes412 = node.contents();
    oldNodes.replaceWith(nodes412);
  }));
  callback(root473); return subs__;
  
  return subs__;
};
