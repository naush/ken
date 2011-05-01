mobl.provides('ken');
mobl.provides('controls');
ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll1256 = mobl.range(0, tabs.length);
  var length124 = coll1256.length;
  for(var i681 = 0; i681 < length124; i681++) {
    var index;
    index = coll1256.get(i681);
    if(tabs.get(index) == currentTab) {
      return tabs.get(index + 1);
    } else {
      
    }
  }
};

ken.next = function(currentTab) {
   var __this = this;
  return ken.navigateTab(currentTab, ken.nextTabs.get());
};

ken.prev = function(currentTab) {
   var __this = this;
  return ken.navigateTab(currentTab, ken.prevTabs.get());
};


ken.root = function(callback, screenCallback) {
  var root9201 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19338 = mobl.ref(null);
  
  
  var tmp19337 = mobl.ref(null);
  
  
  var tmp19336 = mobl.ref(null);
  
  var nodes7386 = $("<span>");
  root9201.append(nodes7386);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp19336, tmp19337, tmp19338, function(_, callback) {
    var root9202 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp19247 = mobl.ref("Ken");
    
    
    var tmp19248 = mobl.ref(null);
    
    var nodes7387 = $("<span>");
    root9202.append(nodes7387);
    subs__.addSub((ui.customHeader)(tmp19247, tmp19248, function(_, callback) {
      var root9203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9203); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7387;
      nodes7387 = node.contents();
      oldNodes.replaceWith(nodes7387);
    }));
    
    var activeTabName = mobl.ref("Reminder");
    
    var s = mobl.ref("");
    
    var node3301 = $("<div>");
    node3301.attr('style', "height: 284px; margin-left: 25px; margin-top: 10px");
    
    
    var tmp19249 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp19249.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp19249.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp19249.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp19252 = mobl.ref(null);
    
    
    var tmp19251 = mobl.ref(null);
    
    
    var tmp19250 = mobl.ref(null);
    
    var nodes7402 = $("<span>");
    node3301.append(nodes7402);
    subs__.addSub((mobl.block)(tmp19249, tmp19250, tmp19251, tmp19252, function(_, callback) {
      var root9218 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7403 = $("<span>");
      root9218.append(nodes7403);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root9219 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7404 = $("<span>");
        root9219.append(nodes7404);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root9220 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9220); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7404;
          nodes7404 = node.contents();
          oldNodes.replaceWith(nodes7404);
        }));
        callback(root9219); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7403;
        nodes7403 = node.contents();
        oldNodes.replaceWith(nodes7403);
      }));
      callback(root9218); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7402;
      nodes7402 = node.contents();
      oldNodes.replaceWith(nodes7402);
    }));
    
    var tmp19253 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp19253.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp19253.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp19253.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp19256 = mobl.ref(null);
    
    
    var tmp19255 = mobl.ref(null);
    
    
    var tmp19254 = mobl.ref(null);
    
    var nodes7405 = $("<span>");
    node3301.append(nodes7405);
    subs__.addSub((mobl.block)(tmp19253, tmp19254, tmp19255, tmp19256, function(_, callback) {
      var root9221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7406 = $("<span>");
      root9221.append(nodes7406);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root9222 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7407 = $("<span>");
        root9222.append(nodes7407);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root9223 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9223); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7407;
          nodes7407 = node.contents();
          oldNodes.replaceWith(nodes7407);
        }));
        callback(root9222); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7406;
        nodes7406 = node.contents();
        oldNodes.replaceWith(nodes7406);
      }));
      callback(root9221); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7405;
      nodes7405 = node.contents();
      oldNodes.replaceWith(nodes7405);
    }));
    
    var tmp19257 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp19257.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp19257.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp19257.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp19260 = mobl.ref(null);
    
    
    var tmp19259 = mobl.ref(null);
    
    
    var tmp19258 = mobl.ref(null);
    
    var nodes7408 = $("<span>");
    node3301.append(nodes7408);
    subs__.addSub((mobl.block)(tmp19257, tmp19258, tmp19259, tmp19260, function(_, callback) {
      var root9224 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7409 = $("<span>");
      root9224.append(nodes7409);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root9225 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7410 = $("<span>");
        root9225.append(nodes7410);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root9226 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9226); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7410;
          nodes7410 = node.contents();
          oldNodes.replaceWith(nodes7410);
        }));
        callback(root9225); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7409;
        nodes7409 = node.contents();
        oldNodes.replaceWith(nodes7409);
      }));
      callback(root9224); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7408;
      nodes7408 = node.contents();
      oldNodes.replaceWith(nodes7408);
    }));
    
    var tmp19261 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp19261.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp19261.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp19261.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp19264 = mobl.ref(null);
    
    
    var tmp19263 = mobl.ref(null);
    
    
    var tmp19262 = mobl.ref(null);
    
    var nodes7411 = $("<span>");
    node3301.append(nodes7411);
    subs__.addSub((mobl.block)(tmp19261, tmp19262, tmp19263, tmp19264, function(_, callback) {
      var root9227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7412 = $("<span>");
      root9227.append(nodes7412);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root9228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7413 = $("<span>");
        root9228.append(nodes7413);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root9229 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9229); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7413;
          nodes7413 = node.contents();
          oldNodes.replaceWith(nodes7413);
        }));
        callback(root9228); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7412;
        nodes7412 = node.contents();
        oldNodes.replaceWith(nodes7412);
      }));
      callback(root9227); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7411;
      nodes7411 = node.contents();
      oldNodes.replaceWith(nodes7411);
    }));
    root9202.append(node3301);
    
    var stressGraphImage = mobl.ref("resources/images/view_stressgraph_off.png");
    
    var backButtonImage = mobl.ref("resources/images/back.png");
    
    var nextButtonImage = mobl.ref("resources/images/next.png");
    
    var tmp19288 = mobl.ref(null);
    
    
    var tmp19287 = mobl.ref(null);
    
    
    var tmp19286 = mobl.ref(null);
    
    var nodes7388 = $("<span>");
    root9202.append(nodes7388);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp19286, tmp19287, tmp19288, function(_, callback) {
      var root9204 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp19285 = mobl.ref(false);
      
      
      var tmp19284 = mobl.ref(null);
      
      
      var tmp19283 = mobl.ref(null);
      
      var nodes7389 = $("<span>");
      root9204.append(nodes7389);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp19283, tmp19284, tmp19285, function(_, callback) {
        var root9205 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3302 = $("<span>");
        
        var val1450 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1450 !== null) {
          subs__.addSub(mobl.domBind(node3302, 'mousedown', val1450));
        }
        
        var val1451 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1451 !== null) {
          subs__.addSub(mobl.domBind(node3302, 'mouseup', val1451));
        }
        
        
        var tmp19265 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = ken.prev(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp19270 = mobl.ref(null);
        
        
        var tmp19269 = mobl.ref(null);
        
        
        var tmp19268 = mobl.ref(null);
        
        
        var tmp19267 = mobl.ref(null);
        
        
        var tmp19266 = mobl.ref(null);
        
        var nodes7392 = $("<span>");
        node3302.append(nodes7392);
        subs__.addSub((ui.image)(backButtonImage, tmp19266, tmp19267, tmp19265, tmp19268, tmp19269, tmp19270, function(_, callback) {
          var root9208 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9208); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7392;
          nodes7392 = node.contents();
          oldNodes.replaceWith(nodes7392);
        }));
        root9205.append(node3302);
        
        var node3303 = $("<span>");
        
        var ref2490 = mobl.ref(ui.stressGraphButton);
        if(ref2490.get() !== null) {
          node3303.attr('class', ref2490.get());
          subs__.addSub(ref2490.addEventListener('change', function(_, ref, val) {
            node3303.attr('class', val);
          }));
          
        }
        subs__.addSub(ref2490.rebind());
        
        var val1446 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1446 !== null) {
          subs__.addSub(mobl.domBind(node3303, 'mouseover', val1446));
        }
        
        var val1447 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1447 !== null) {
          subs__.addSub(mobl.domBind(node3303, 'mouseout', val1447));
        }
        
        var val1448 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1448 !== null) {
          subs__.addSub(mobl.domBind(node3303, 'mousedown', val1448));
        }
        
        var val1449 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1449 !== null) {
          subs__.addSub(mobl.domBind(node3303, 'mouseup', val1449));
        }
        
        
        var tmp19276 = mobl.ref(null);
        
        
        var tmp19275 = mobl.ref(null);
        
        
        var tmp19274 = mobl.ref(null);
        
        
        var tmp19273 = mobl.ref(null);
        
        
        var tmp19272 = mobl.ref(null);
        
        
        var tmp19271 = mobl.ref(null);
        
        var nodes7391 = $("<span>");
        node3303.append(nodes7391);
        subs__.addSub((ui.image)(stressGraphImage, tmp19271, tmp19272, tmp19273, tmp19274, tmp19275, tmp19276, function(_, callback) {
          var root9207 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9207); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7391;
          nodes7391 = node.contents();
          oldNodes.replaceWith(nodes7391);
        }));
        root9205.append(node3303);
        
        var node3304 = $("<span>");
        
        var val1444 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1444 !== null) {
          subs__.addSub(mobl.domBind(node3304, 'mousedown', val1444));
        }
        
        var val1445 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1445 !== null) {
          subs__.addSub(mobl.domBind(node3304, 'mouseup', val1445));
        }
        
        
        var tmp19277 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = ken.next(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp19282 = mobl.ref(null);
        
        
        var tmp19281 = mobl.ref(null);
        
        
        var tmp19280 = mobl.ref(null);
        
        
        var tmp19279 = mobl.ref(null);
        
        
        var tmp19278 = mobl.ref(null);
        
        var nodes7390 = $("<span>");
        node3304.append(nodes7390);
        subs__.addSub((ui.image)(nextButtonImage, tmp19278, tmp19279, tmp19277, tmp19280, tmp19281, tmp19282, function(_, callback) {
          var root9206 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9206); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7390;
          nodes7390 = node.contents();
          oldNodes.replaceWith(nodes7390);
        }));
        root9205.append(node3304);
        callback(root9205); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7389;
        nodes7389 = node.contents();
        oldNodes.replaceWith(nodes7389);
      }));
      callback(root9204); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7388;
      nodes7388 = node.contents();
      oldNodes.replaceWith(nodes7388);
    }));
    
    var tmp19335 = mobl.ref(null);
    
    
    var tmp19334 = mobl.ref(null);
    
    
    var tmp19333 = mobl.ref(null);
    
    var nodes7393 = $("<span>");
    root9202.append(nodes7393);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp19333, tmp19334, tmp19335, function(_, callback) {
      var root9209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3305 = $("<span>");
      node3305.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      
      var tmp19297 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp19297.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp19297.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp19297.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp19296 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Reminder";
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp19299 = mobl.ref(null);
      
      
      var tmp19298 = mobl.ref(null);
      
      var nodes7400 = $("<span>");
      node3305.append(nodes7400);
      subs__.addSub((mobl.span)(tmp19297, tmp19298, tmp19296, tmp19299, function(_, callback) {
        var root9216 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp19289 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp19289.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        
        var tmp19295 = mobl.ref(null);
        
        
        var tmp19294 = mobl.ref(null);
        
        
        var tmp19293 = mobl.ref(null);
        
        
        var tmp19292 = mobl.ref(null);
        
        
        var tmp19291 = mobl.ref(null);
        
        
        var tmp19290 = mobl.ref(null);
        
        var nodes7401 = $("<span>");
        root9216.append(nodes7401);
        subs__.addSub((ui.image)(tmp19289, tmp19290, tmp19291, tmp19292, tmp19293, tmp19294, tmp19295, function(_, callback) {
          var root9217 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9217); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7401;
          nodes7401 = node.contents();
          oldNodes.replaceWith(nodes7401);
        }));
        callback(root9216); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7400;
        nodes7400 = node.contents();
        oldNodes.replaceWith(nodes7400);
      }));
      root9209.append(node3305);
      
      var node3306 = $("<span>");
      node3306.attr('style', "position: absolute; margin-left: 70px;");
      
      
      var tmp19308 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp19308.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp19308.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp19308.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp19307 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Life";
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp19310 = mobl.ref(null);
      
      
      var tmp19309 = mobl.ref(null);
      
      var nodes7398 = $("<span>");
      node3306.append(nodes7398);
      subs__.addSub((mobl.span)(tmp19308, tmp19309, tmp19307, tmp19310, function(_, callback) {
        var root9214 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp19300 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp19300.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        
        var tmp19306 = mobl.ref(null);
        
        
        var tmp19305 = mobl.ref(null);
        
        
        var tmp19304 = mobl.ref(null);
        
        
        var tmp19303 = mobl.ref(null);
        
        
        var tmp19302 = mobl.ref(null);
        
        
        var tmp19301 = mobl.ref(null);
        
        var nodes7399 = $("<span>");
        root9214.append(nodes7399);
        subs__.addSub((ui.image)(tmp19300, tmp19301, tmp19302, tmp19303, tmp19304, tmp19305, tmp19306, function(_, callback) {
          var root9215 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9215); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7399;
          nodes7399 = node.contents();
          oldNodes.replaceWith(nodes7399);
        }));
        callback(root9214); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7398;
        nodes7398 = node.contents();
        oldNodes.replaceWith(nodes7398);
      }));
      root9209.append(node3306);
      
      var node3307 = $("<span>");
      node3307.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      
      var tmp19319 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp19319.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp19319.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp19319.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp19318 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Moodometer";
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp19321 = mobl.ref(null);
      
      
      var tmp19320 = mobl.ref(null);
      
      var nodes7396 = $("<span>");
      node3307.append(nodes7396);
      subs__.addSub((mobl.span)(tmp19319, tmp19320, tmp19318, tmp19321, function(_, callback) {
        var root9212 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp19311 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp19311.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        
        var tmp19317 = mobl.ref(null);
        
        
        var tmp19316 = mobl.ref(null);
        
        
        var tmp19315 = mobl.ref(null);
        
        
        var tmp19314 = mobl.ref(null);
        
        
        var tmp19313 = mobl.ref(null);
        
        
        var tmp19312 = mobl.ref(null);
        
        var nodes7397 = $("<span>");
        root9212.append(nodes7397);
        subs__.addSub((ui.image)(tmp19311, tmp19312, tmp19313, tmp19314, tmp19315, tmp19316, tmp19317, function(_, callback) {
          var root9213 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9213); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7397;
          nodes7397 = node.contents();
          oldNodes.replaceWith(nodes7397);
        }));
        callback(root9212); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7396;
        nodes7396 = node.contents();
        oldNodes.replaceWith(nodes7396);
      }));
      root9209.append(node3307);
      
      var node3308 = $("<span>");
      node3308.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      
      var tmp19330 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp19330.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp19330.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp19330.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp19329 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Meditate";
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp19332 = mobl.ref(null);
      
      
      var tmp19331 = mobl.ref(null);
      
      var nodes7394 = $("<span>");
      node3308.append(nodes7394);
      subs__.addSub((mobl.span)(tmp19330, tmp19331, tmp19329, tmp19332, function(_, callback) {
        var root9210 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp19322 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp19322.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        
        var tmp19328 = mobl.ref(null);
        
        
        var tmp19327 = mobl.ref(null);
        
        
        var tmp19326 = mobl.ref(null);
        
        
        var tmp19325 = mobl.ref(null);
        
        
        var tmp19324 = mobl.ref(null);
        
        
        var tmp19323 = mobl.ref(null);
        
        var nodes7395 = $("<span>");
        root9210.append(nodes7395);
        subs__.addSub((ui.image)(tmp19322, tmp19323, tmp19324, tmp19325, tmp19326, tmp19327, tmp19328, function(_, callback) {
          var root9211 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9211); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7395;
          nodes7395 = node.contents();
          oldNodes.replaceWith(nodes7395);
        }));
        callback(root9210); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7394;
        nodes7394 = node.contents();
        oldNodes.replaceWith(nodes7394);
      }));
      root9209.append(node3308);
      callback(root9209); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7393;
      nodes7393 = node.contents();
      oldNodes.replaceWith(nodes7393);
    }));
    callback(root9202); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7386;
    nodes7386 = node.contents();
    oldNodes.replaceWith(nodes7386);
  }));
  callback(root9201); return subs__;
  
  return subs__;
};
