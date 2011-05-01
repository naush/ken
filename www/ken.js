mobl.provides('ken');
mobl.provides('controls');
ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll20 = mobl.range(0, tabs.length);
  var length12 = coll20.length;
  for(var i16 = 0; i16 < length12; i16++) {
    var index;
    index = coll20.get(i16);
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
  var root388 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1340 = mobl.ref(null);
  
  
  var tmp1339 = mobl.ref(null);
  
  
  var tmp1338 = mobl.ref(null);
  
  var nodes368 = $("<span>");
  root388.append(nodes368);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp1338, tmp1339, tmp1340, function(_, callback) {
    var root389 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node117 = $("<div>");
    node117.attr('id', "flash");
    node117.attr('style', "display:none; float:left; clear:both; position:absolute; margin-left:66px; margin-top:193px;");
    
    
    var tmp1242 = mobl.ref("resources/images/transition_screen.png");
    
    
    var tmp1248 = mobl.ref(null);
    
    
    var tmp1247 = mobl.ref(null);
    
    
    var tmp1246 = mobl.ref(null);
    
    
    var tmp1245 = mobl.ref(null);
    
    
    var tmp1244 = mobl.ref(null);
    
    
    var tmp1243 = mobl.ref(null);
    
    var nodes396 = $("<span>");
    node117.append(nodes396);
    subs__.addSub((ui.image)(tmp1242, tmp1243, tmp1244, tmp1245, tmp1246, tmp1247, tmp1248, function(_, callback) {
      var root417 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root417); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes396;
      nodes396 = node.contents();
      oldNodes.replaceWith(nodes396);
    }));
    root389.append(node117);
    
    var tmp1249 = mobl.ref("Ken");
    
    
    var tmp1250 = mobl.ref(null);
    
    var nodes369 = $("<span>");
    root389.append(nodes369);
    subs__.addSub((ui.customHeader)(tmp1249, tmp1250, function(_, callback) {
      var root390 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root390); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes369;
      nodes369 = node.contents();
      oldNodes.replaceWith(nodes369);
    }));
    
    var activeTabName = mobl.ref("Reminder");
    
    var s = mobl.ref("");
    
    var node118 = $("<div>");
    node118.attr('style', "height: 284px; margin-left: 25px; margin-top: 10px");
    
    
    var tmp1251 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp1251.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp1251.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp1251.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp1254 = mobl.ref(null);
    
    
    var tmp1253 = mobl.ref(null);
    
    
    var tmp1252 = mobl.ref(null);
    
    var nodes384 = $("<span>");
    node118.append(nodes384);
    subs__.addSub((mobl.block)(tmp1251, tmp1252, tmp1253, tmp1254, function(_, callback) {
      var root405 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes385 = $("<span>");
      root405.append(nodes385);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root406 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes386 = $("<span>");
        root406.append(nodes386);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root407 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root407); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes386;
          nodes386 = node.contents();
          oldNodes.replaceWith(nodes386);
        }));
        callback(root406); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes385;
        nodes385 = node.contents();
        oldNodes.replaceWith(nodes385);
      }));
      callback(root405); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes384;
      nodes384 = node.contents();
      oldNodes.replaceWith(nodes384);
    }));
    
    var tmp1255 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp1255.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp1255.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp1255.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp1258 = mobl.ref(null);
    
    
    var tmp1257 = mobl.ref(null);
    
    
    var tmp1256 = mobl.ref(null);
    
    var nodes387 = $("<span>");
    node118.append(nodes387);
    subs__.addSub((mobl.block)(tmp1255, tmp1256, tmp1257, tmp1258, function(_, callback) {
      var root408 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes388 = $("<span>");
      root408.append(nodes388);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root409 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes389 = $("<span>");
        root409.append(nodes389);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root410 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root410); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes389;
          nodes389 = node.contents();
          oldNodes.replaceWith(nodes389);
        }));
        callback(root409); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes388;
        nodes388 = node.contents();
        oldNodes.replaceWith(nodes388);
      }));
      callback(root408); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes387;
      nodes387 = node.contents();
      oldNodes.replaceWith(nodes387);
    }));
    
    var tmp1259 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp1259.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp1259.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp1259.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp1262 = mobl.ref(null);
    
    
    var tmp1261 = mobl.ref(null);
    
    
    var tmp1260 = mobl.ref(null);
    
    var nodes390 = $("<span>");
    node118.append(nodes390);
    subs__.addSub((mobl.block)(tmp1259, tmp1260, tmp1261, tmp1262, function(_, callback) {
      var root411 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes391 = $("<span>");
      root411.append(nodes391);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root412 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes392 = $("<span>");
        root412.append(nodes392);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root413 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root413); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes392;
          nodes392 = node.contents();
          oldNodes.replaceWith(nodes392);
        }));
        callback(root412); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes391;
        nodes391 = node.contents();
        oldNodes.replaceWith(nodes391);
      }));
      callback(root411); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes390;
      nodes390 = node.contents();
      oldNodes.replaceWith(nodes390);
    }));
    
    var tmp1263 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp1263.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp1263.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp1263.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp1266 = mobl.ref(null);
    
    
    var tmp1265 = mobl.ref(null);
    
    
    var tmp1264 = mobl.ref(null);
    
    var nodes393 = $("<span>");
    node118.append(nodes393);
    subs__.addSub((mobl.block)(tmp1263, tmp1264, tmp1265, tmp1266, function(_, callback) {
      var root414 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes394 = $("<span>");
      root414.append(nodes394);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root415 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes395 = $("<span>");
        root415.append(nodes395);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root416 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root416); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes395;
          nodes395 = node.contents();
          oldNodes.replaceWith(nodes395);
        }));
        callback(root415); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes394;
        nodes394 = node.contents();
        oldNodes.replaceWith(nodes394);
      }));
      callback(root414); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes393;
      nodes393 = node.contents();
      oldNodes.replaceWith(nodes393);
    }));
    root389.append(node118);
    
    var stressGraphImage = mobl.ref("resources/images/view_stressgraph_off.png");
    
    var backButtonImage = mobl.ref("resources/images/back.png");
    
    var nextButtonImage = mobl.ref("resources/images/next.png");
    
    var tmp1290 = mobl.ref(null);
    
    
    var tmp1289 = mobl.ref(null);
    
    
    var tmp1288 = mobl.ref(null);
    
    var nodes370 = $("<span>");
    root389.append(nodes370);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp1288, tmp1289, tmp1290, function(_, callback) {
      var root391 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp1287 = mobl.ref(false);
      
      
      var tmp1286 = mobl.ref(null);
      
      
      var tmp1285 = mobl.ref(null);
      
      var nodes371 = $("<span>");
      root391.append(nodes371);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1285, tmp1286, tmp1287, function(_, callback) {
        var root392 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node119 = $("<span>");
        
        var val110 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val110 !== null) {
          subs__.addSub(mobl.domBind(node119, 'mousedown', val110));
        }
        
        var val111 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val111 !== null) {
          subs__.addSub(mobl.domBind(node119, 'mouseup', val111));
        }
        
        
        var tmp1267 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = ken.prev(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp1272 = mobl.ref(null);
        
        
        var tmp1271 = mobl.ref(null);
        
        
        var tmp1270 = mobl.ref(null);
        
        
        var tmp1269 = mobl.ref(null);
        
        
        var tmp1268 = mobl.ref(null);
        
        var nodes374 = $("<span>");
        node119.append(nodes374);
        subs__.addSub((ui.image)(backButtonImage, tmp1268, tmp1269, tmp1267, tmp1270, tmp1271, tmp1272, function(_, callback) {
          var root395 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root395); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes374;
          nodes374 = node.contents();
          oldNodes.replaceWith(nodes374);
        }));
        root392.append(node119);
        
        var node120 = $("<span>");
        
        var ref16 = mobl.ref(ui.stressGraphButton);
        if(ref16.get() !== null) {
          node120.attr('class', ref16.get());
          subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
            node120.attr('class', val);
          }));
          
        }
        subs__.addSub(ref16.rebind());
        
        var val106 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val106 !== null) {
          subs__.addSub(mobl.domBind(node120, 'mouseover', val106));
        }
        
        var val107 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val107 !== null) {
          subs__.addSub(mobl.domBind(node120, 'mouseout', val107));
        }
        
        var val108 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val108 !== null) {
          subs__.addSub(mobl.domBind(node120, 'mousedown', val108));
        }
        
        var val109 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val109 !== null) {
          subs__.addSub(mobl.domBind(node120, 'mouseup', val109));
        }
        
        
        var tmp1278 = mobl.ref(null);
        
        
        var tmp1277 = mobl.ref(null);
        
        
        var tmp1276 = mobl.ref(null);
        
        
        var tmp1275 = mobl.ref(null);
        
        
        var tmp1274 = mobl.ref(null);
        
        
        var tmp1273 = mobl.ref(null);
        
        var nodes373 = $("<span>");
        node120.append(nodes373);
        subs__.addSub((ui.image)(stressGraphImage, tmp1273, tmp1274, tmp1275, tmp1276, tmp1277, tmp1278, function(_, callback) {
          var root394 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root394); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes373;
          nodes373 = node.contents();
          oldNodes.replaceWith(nodes373);
        }));
        root392.append(node120);
        
        var node121 = $("<span>");
        
        var val104 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val104 !== null) {
          subs__.addSub(mobl.domBind(node121, 'mousedown', val104));
        }
        
        var val105 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val105 !== null) {
          subs__.addSub(mobl.domBind(node121, 'mouseup', val105));
        }
        
        
        var tmp1279 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = ken.next(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp1284 = mobl.ref(null);
        
        
        var tmp1283 = mobl.ref(null);
        
        
        var tmp1282 = mobl.ref(null);
        
        
        var tmp1281 = mobl.ref(null);
        
        
        var tmp1280 = mobl.ref(null);
        
        var nodes372 = $("<span>");
        node121.append(nodes372);
        subs__.addSub((ui.image)(nextButtonImage, tmp1280, tmp1281, tmp1279, tmp1282, tmp1283, tmp1284, function(_, callback) {
          var root393 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root393); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes372;
          nodes372 = node.contents();
          oldNodes.replaceWith(nodes372);
        }));
        root392.append(node121);
        callback(root392); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes371;
        nodes371 = node.contents();
        oldNodes.replaceWith(nodes371);
      }));
      callback(root391); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes370;
      nodes370 = node.contents();
      oldNodes.replaceWith(nodes370);
    }));
    
    var tmp1337 = mobl.ref(null);
    
    
    var tmp1336 = mobl.ref(null);
    
    
    var tmp1335 = mobl.ref(null);
    
    var nodes375 = $("<span>");
    root389.append(nodes375);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp1335, tmp1336, tmp1337, function(_, callback) {
      var root396 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node122 = $("<span>");
      node122.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      
      var tmp1299 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp1299.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp1299.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp1299.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp1298 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Reminder";
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp1301 = mobl.ref(null);
      
      
      var tmp1300 = mobl.ref(null);
      
      var nodes382 = $("<span>");
      node122.append(nodes382);
      subs__.addSub((mobl.span)(tmp1299, tmp1300, tmp1298, tmp1301, function(_, callback) {
        var root403 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1291 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp1291.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        
        var tmp1297 = mobl.ref(null);
        
        
        var tmp1296 = mobl.ref(null);
        
        
        var tmp1295 = mobl.ref(null);
        
        
        var tmp1294 = mobl.ref(null);
        
        
        var tmp1293 = mobl.ref(null);
        
        
        var tmp1292 = mobl.ref(null);
        
        var nodes383 = $("<span>");
        root403.append(nodes383);
        subs__.addSub((ui.image)(tmp1291, tmp1292, tmp1293, tmp1294, tmp1295, tmp1296, tmp1297, function(_, callback) {
          var root404 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root404); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes383;
          nodes383 = node.contents();
          oldNodes.replaceWith(nodes383);
        }));
        callback(root403); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes382;
        nodes382 = node.contents();
        oldNodes.replaceWith(nodes382);
      }));
      root396.append(node122);
      
      var node123 = $("<span>");
      node123.attr('style', "position: absolute; margin-left: 70px;");
      
      
      var tmp1310 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp1310.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp1310.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp1310.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp1309 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Life";
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp1312 = mobl.ref(null);
      
      
      var tmp1311 = mobl.ref(null);
      
      var nodes380 = $("<span>");
      node123.append(nodes380);
      subs__.addSub((mobl.span)(tmp1310, tmp1311, tmp1309, tmp1312, function(_, callback) {
        var root401 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1302 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp1302.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        
        var tmp1308 = mobl.ref(null);
        
        
        var tmp1307 = mobl.ref(null);
        
        
        var tmp1306 = mobl.ref(null);
        
        
        var tmp1305 = mobl.ref(null);
        
        
        var tmp1304 = mobl.ref(null);
        
        
        var tmp1303 = mobl.ref(null);
        
        var nodes381 = $("<span>");
        root401.append(nodes381);
        subs__.addSub((ui.image)(tmp1302, tmp1303, tmp1304, tmp1305, tmp1306, tmp1307, tmp1308, function(_, callback) {
          var root402 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root402); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes381;
          nodes381 = node.contents();
          oldNodes.replaceWith(nodes381);
        }));
        callback(root401); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes380;
        nodes380 = node.contents();
        oldNodes.replaceWith(nodes380);
      }));
      root396.append(node123);
      
      var node124 = $("<span>");
      node124.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      
      var tmp1321 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp1321.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp1321.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp1321.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp1320 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Moodometer";
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp1323 = mobl.ref(null);
      
      
      var tmp1322 = mobl.ref(null);
      
      var nodes378 = $("<span>");
      node124.append(nodes378);
      subs__.addSub((mobl.span)(tmp1321, tmp1322, tmp1320, tmp1323, function(_, callback) {
        var root399 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1313 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp1313.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        
        var tmp1319 = mobl.ref(null);
        
        
        var tmp1318 = mobl.ref(null);
        
        
        var tmp1317 = mobl.ref(null);
        
        
        var tmp1316 = mobl.ref(null);
        
        
        var tmp1315 = mobl.ref(null);
        
        
        var tmp1314 = mobl.ref(null);
        
        var nodes379 = $("<span>");
        root399.append(nodes379);
        subs__.addSub((ui.image)(tmp1313, tmp1314, tmp1315, tmp1316, tmp1317, tmp1318, tmp1319, function(_, callback) {
          var root400 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root400); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes379;
          nodes379 = node.contents();
          oldNodes.replaceWith(nodes379);
        }));
        callback(root399); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes378;
        nodes378 = node.contents();
        oldNodes.replaceWith(nodes378);
      }));
      root396.append(node124);
      
      var node125 = $("<span>");
      node125.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      
      var tmp1332 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp1332.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp1332.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp1332.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp1331 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Meditate";
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp1334 = mobl.ref(null);
      
      
      var tmp1333 = mobl.ref(null);
      
      var nodes376 = $("<span>");
      node125.append(nodes376);
      subs__.addSub((mobl.span)(tmp1332, tmp1333, tmp1331, tmp1334, function(_, callback) {
        var root397 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1324 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp1324.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        
        var tmp1330 = mobl.ref(null);
        
        
        var tmp1329 = mobl.ref(null);
        
        
        var tmp1328 = mobl.ref(null);
        
        
        var tmp1327 = mobl.ref(null);
        
        
        var tmp1326 = mobl.ref(null);
        
        
        var tmp1325 = mobl.ref(null);
        
        var nodes377 = $("<span>");
        root397.append(nodes377);
        subs__.addSub((ui.image)(tmp1324, tmp1325, tmp1326, tmp1327, tmp1328, tmp1329, tmp1330, function(_, callback) {
          var root398 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root398); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes377;
          nodes377 = node.contents();
          oldNodes.replaceWith(nodes377);
        }));
        callback(root397); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes376;
        nodes376 = node.contents();
        oldNodes.replaceWith(nodes376);
      }));
      root396.append(node125);
      callback(root396); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes375;
      nodes375 = node.contents();
      oldNodes.replaceWith(nodes375);
    }));
    callback(root389); return subs__;
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes368;
    nodes368 = node.contents();
    oldNodes.replaceWith(nodes368);
  }));
  callback(root388); return subs__;
  
  return subs__;
};
