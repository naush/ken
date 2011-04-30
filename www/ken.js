mobl.provides('ken');
mobl.provides('controls');
ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll511 = mobl.range(0, tabs.length);
  var length49 = coll511.length;
  for(var i319 = 0; i319 < length49; i319++) {
    var index;
    index = coll511.get(i319);
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
  var root4350 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var node1534 = $("<div>");
  node1534.attr('style', "background-image: url(\"resources/images/background.png\"); background-repeat: no-repeat; height: 500px; width: 315px; position: absolute;");
  
  
  var tmp9070 = mobl.ref("Ken");
  
  
  var tmp9071 = mobl.ref(null);
  
  var nodes3473 = $("<span>");
  node1534.append(nodes3473);
  subs__.addSub((ui.customHeader)(tmp9070, tmp9071, function(_, callback) {
    var root4351 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4351); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3473;
    nodes3473 = node.contents();
    oldNodes.replaceWith(nodes3473);
  }));
  
  var activeTabName = mobl.ref("Reminder");
  
  var s = mobl.ref("");
  
  var node1535 = $("<div>");
  node1535.attr('style', "height: 292px; margin-left: 25px; margin-top: 10px");
  
  
  var tmp9072 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp9072.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp9072.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp9072.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp9075 = mobl.ref(null);
  
  
  var tmp9074 = mobl.ref(null);
  
  
  var tmp9073 = mobl.ref(null);
  
  var nodes3488 = $("<span>");
  node1535.append(nodes3488);
  subs__.addSub((mobl.block)(tmp9072, tmp9073, tmp9074, tmp9075, function(_, callback) {
    var root4366 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes3489 = $("<span>");
    root4366.append(nodes3489);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root4367 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3490 = $("<span>");
      root4367.append(nodes3490);
      subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
        var root4368 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4368); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3490;
        nodes3490 = node.contents();
        oldNodes.replaceWith(nodes3490);
      }));
      callback(root4367); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3489;
      nodes3489 = node.contents();
      oldNodes.replaceWith(nodes3489);
    }));
    callback(root4366); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3488;
    nodes3488 = node.contents();
    oldNodes.replaceWith(nodes3488);
  }));
  
  var tmp9076 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp9076.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp9076.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp9076.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp9079 = mobl.ref(null);
  
  
  var tmp9078 = mobl.ref(null);
  
  
  var tmp9077 = mobl.ref(null);
  
  var nodes3491 = $("<span>");
  node1535.append(nodes3491);
  subs__.addSub((mobl.block)(tmp9076, tmp9077, tmp9078, tmp9079, function(_, callback) {
    var root4369 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes3492 = $("<span>");
    root4369.append(nodes3492);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root4370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3493 = $("<span>");
      root4370.append(nodes3493);
      subs__.addSub((controls.life.life)(function(_, callback) {
        var root4371 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4371); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3493;
        nodes3493 = node.contents();
        oldNodes.replaceWith(nodes3493);
      }));
      callback(root4370); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3492;
      nodes3492 = node.contents();
      oldNodes.replaceWith(nodes3492);
    }));
    callback(root4369); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3491;
    nodes3491 = node.contents();
    oldNodes.replaceWith(nodes3491);
  }));
  
  var tmp9080 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp9080.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp9080.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp9080.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp9083 = mobl.ref(null);
  
  
  var tmp9082 = mobl.ref(null);
  
  
  var tmp9081 = mobl.ref(null);
  
  var nodes3494 = $("<span>");
  node1535.append(nodes3494);
  subs__.addSub((mobl.block)(tmp9080, tmp9081, tmp9082, tmp9083, function(_, callback) {
    var root4372 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes3495 = $("<span>");
    root4372.append(nodes3495);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root4373 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3496 = $("<span>");
      root4373.append(nodes3496);
      subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
        var root4374 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4374); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3496;
        nodes3496 = node.contents();
        oldNodes.replaceWith(nodes3496);
      }));
      callback(root4373); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3495;
      nodes3495 = node.contents();
      oldNodes.replaceWith(nodes3495);
    }));
    callback(root4372); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3494;
    nodes3494 = node.contents();
    oldNodes.replaceWith(nodes3494);
  }));
  
  var tmp9084 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp9084.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp9084.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp9084.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp9087 = mobl.ref(null);
  
  
  var tmp9086 = mobl.ref(null);
  
  
  var tmp9085 = mobl.ref(null);
  
  var nodes3497 = $("<span>");
  node1535.append(nodes3497);
  subs__.addSub((mobl.block)(tmp9084, tmp9085, tmp9086, tmp9087, function(_, callback) {
    var root4375 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes3498 = $("<span>");
    root4375.append(nodes3498);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root4376 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3499 = $("<span>");
      root4376.append(nodes3499);
      subs__.addSub((controls.meditate.meditate)(function(_, callback) {
        var root4377 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4377); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3499;
        nodes3499 = node.contents();
        oldNodes.replaceWith(nodes3499);
      }));
      callback(root4376); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3498;
      nodes3498 = node.contents();
      oldNodes.replaceWith(nodes3498);
    }));
    callback(root4375); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3497;
    nodes3497 = node.contents();
    oldNodes.replaceWith(nodes3497);
  }));
  node1534.append(node1535);
  
  var tmp9114 = mobl.ref(null);
  
  
  var tmp9113 = mobl.ref(null);
  
  
  var tmp9112 = mobl.ref(null);
  
  var nodes3474 = $("<span>");
  node1534.append(nodes3474);
  subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp9112, tmp9113, tmp9114, function(_, callback) {
    var root4352 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp9111 = mobl.ref(false);
    
    
    var tmp9110 = mobl.ref(null);
    
    
    var tmp9109 = mobl.ref(null);
    
    var nodes3475 = $("<span>");
    root4352.append(nodes3475);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp9109, tmp9110, tmp9111, function(_, callback) {
      var root4353 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp9089 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = ken.prev(activeTabName.get());
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp9088 = mobl.ref("resources/images/back.png");
      
      
      var tmp9094 = mobl.ref(null);
      
      
      var tmp9093 = mobl.ref(null);
      
      
      var tmp9092 = mobl.ref(null);
      
      
      var tmp9091 = mobl.ref(null);
      
      
      var tmp9090 = mobl.ref(null);
      
      var nodes3476 = $("<span>");
      root4353.append(nodes3476);
      subs__.addSub((ui.image)(tmp9088, tmp9090, tmp9091, tmp9089, tmp9092, tmp9093, tmp9094, function(_, callback) {
        var root4354 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4354); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3476;
        nodes3476 = node.contents();
        oldNodes.replaceWith(nodes3476);
      }));
      
      var node1536 = $("<span>");
      node1536.attr('style', "margin-left: 5px; margin-right: 5px;");
      
      
      var tmp9096 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp9095 = mobl.ref("resources/images/view_stressgraph_off.png");
      
      
      var tmp9101 = mobl.ref(null);
      
      
      var tmp9100 = mobl.ref(null);
      
      
      var tmp9099 = mobl.ref(null);
      
      
      var tmp9098 = mobl.ref(null);
      
      
      var tmp9097 = mobl.ref(null);
      
      var nodes3478 = $("<span>");
      node1536.append(nodes3478);
      subs__.addSub((ui.image)(tmp9095, tmp9097, tmp9098, tmp9096, tmp9099, tmp9100, tmp9101, function(_, callback) {
        var root4356 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4356); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3478;
        nodes3478 = node.contents();
        oldNodes.replaceWith(nodes3478);
      }));
      root4353.append(node1536);
      
      var tmp9103 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = ken.next(activeTabName.get());
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp9102 = mobl.ref("resources/images/next.png");
      
      
      var tmp9108 = mobl.ref(null);
      
      
      var tmp9107 = mobl.ref(null);
      
      
      var tmp9106 = mobl.ref(null);
      
      
      var tmp9105 = mobl.ref(null);
      
      
      var tmp9104 = mobl.ref(null);
      
      var nodes3477 = $("<span>");
      root4353.append(nodes3477);
      subs__.addSub((ui.image)(tmp9102, tmp9104, tmp9105, tmp9103, tmp9106, tmp9107, tmp9108, function(_, callback) {
        var root4355 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4355); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3477;
        nodes3477 = node.contents();
        oldNodes.replaceWith(nodes3477);
      }));
      callback(root4353); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3475;
      nodes3475 = node.contents();
      oldNodes.replaceWith(nodes3475);
    }));
    callback(root4352); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3474;
    nodes3474 = node.contents();
    oldNodes.replaceWith(nodes3474);
  }));
  
  var tmp9161 = mobl.ref(null);
  
  
  var tmp9160 = mobl.ref(null);
  
  
  var tmp9159 = mobl.ref(null);
  
  var nodes3479 = $("<span>");
  node1534.append(nodes3479);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp9159, tmp9160, tmp9161, function(_, callback) {
    var root4357 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1537 = $("<span>");
    node1537.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
    
    
    var tmp9123 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9123.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp9123.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp9123.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp9122 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Reminder";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp9125 = mobl.ref(null);
    
    
    var tmp9124 = mobl.ref(null);
    
    var nodes3486 = $("<span>");
    node1537.append(nodes3486);
    subs__.addSub((mobl.span)(tmp9123, tmp9124, tmp9122, tmp9125, function(_, callback) {
      var root4364 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp9115 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp9115.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
      }));
      
      
      var tmp9121 = mobl.ref(null);
      
      
      var tmp9120 = mobl.ref(null);
      
      
      var tmp9119 = mobl.ref(null);
      
      
      var tmp9118 = mobl.ref(null);
      
      
      var tmp9117 = mobl.ref(null);
      
      
      var tmp9116 = mobl.ref(null);
      
      var nodes3487 = $("<span>");
      root4364.append(nodes3487);
      subs__.addSub((ui.image)(tmp9115, tmp9116, tmp9117, tmp9118, tmp9119, tmp9120, tmp9121, function(_, callback) {
        var root4365 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4365); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3487;
        nodes3487 = node.contents();
        oldNodes.replaceWith(nodes3487);
      }));
      callback(root4364); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3486;
      nodes3486 = node.contents();
      oldNodes.replaceWith(nodes3486);
    }));
    root4357.append(node1537);
    
    var node1538 = $("<span>");
    node1538.attr('style', "position: absolute; margin-left: 70px;");
    
    
    var tmp9134 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9134.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp9134.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp9134.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp9133 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Life";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp9136 = mobl.ref(null);
    
    
    var tmp9135 = mobl.ref(null);
    
    var nodes3484 = $("<span>");
    node1538.append(nodes3484);
    subs__.addSub((mobl.span)(tmp9134, tmp9135, tmp9133, tmp9136, function(_, callback) {
      var root4362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp9126 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp9126.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
      }));
      
      
      var tmp9132 = mobl.ref(null);
      
      
      var tmp9131 = mobl.ref(null);
      
      
      var tmp9130 = mobl.ref(null);
      
      
      var tmp9129 = mobl.ref(null);
      
      
      var tmp9128 = mobl.ref(null);
      
      
      var tmp9127 = mobl.ref(null);
      
      var nodes3485 = $("<span>");
      root4362.append(nodes3485);
      subs__.addSub((ui.image)(tmp9126, tmp9127, tmp9128, tmp9129, tmp9130, tmp9131, tmp9132, function(_, callback) {
        var root4363 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4363); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3485;
        nodes3485 = node.contents();
        oldNodes.replaceWith(nodes3485);
      }));
      callback(root4362); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3484;
      nodes3484 = node.contents();
      oldNodes.replaceWith(nodes3484);
    }));
    root4357.append(node1538);
    
    var node1539 = $("<span>");
    node1539.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
    
    
    var tmp9145 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9145.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp9145.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp9145.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp9144 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Moodometer";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp9147 = mobl.ref(null);
    
    
    var tmp9146 = mobl.ref(null);
    
    var nodes3482 = $("<span>");
    node1539.append(nodes3482);
    subs__.addSub((mobl.span)(tmp9145, tmp9146, tmp9144, tmp9147, function(_, callback) {
      var root4360 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp9137 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp9137.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
      }));
      
      
      var tmp9143 = mobl.ref(null);
      
      
      var tmp9142 = mobl.ref(null);
      
      
      var tmp9141 = mobl.ref(null);
      
      
      var tmp9140 = mobl.ref(null);
      
      
      var tmp9139 = mobl.ref(null);
      
      
      var tmp9138 = mobl.ref(null);
      
      var nodes3483 = $("<span>");
      root4360.append(nodes3483);
      subs__.addSub((ui.image)(tmp9137, tmp9138, tmp9139, tmp9140, tmp9141, tmp9142, tmp9143, function(_, callback) {
        var root4361 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4361); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3483;
        nodes3483 = node.contents();
        oldNodes.replaceWith(nodes3483);
      }));
      callback(root4360); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3482;
      nodes3482 = node.contents();
      oldNodes.replaceWith(nodes3482);
    }));
    root4357.append(node1539);
    
    var node1540 = $("<span>");
    node1540.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
    
    
    var tmp9156 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9156.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp9156.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp9156.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp9155 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Meditate";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp9158 = mobl.ref(null);
    
    
    var tmp9157 = mobl.ref(null);
    
    var nodes3480 = $("<span>");
    node1540.append(nodes3480);
    subs__.addSub((mobl.span)(tmp9156, tmp9157, tmp9155, tmp9158, function(_, callback) {
      var root4358 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp9148 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp9148.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
      }));
      
      
      var tmp9154 = mobl.ref(null);
      
      
      var tmp9153 = mobl.ref(null);
      
      
      var tmp9152 = mobl.ref(null);
      
      
      var tmp9151 = mobl.ref(null);
      
      
      var tmp9150 = mobl.ref(null);
      
      
      var tmp9149 = mobl.ref(null);
      
      var nodes3481 = $("<span>");
      root4358.append(nodes3481);
      subs__.addSub((ui.image)(tmp9148, tmp9149, tmp9150, tmp9151, tmp9152, tmp9153, tmp9154, function(_, callback) {
        var root4359 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4359); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3481;
        nodes3481 = node.contents();
        oldNodes.replaceWith(nodes3481);
      }));
      callback(root4358); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3480;
      nodes3480 = node.contents();
      oldNodes.replaceWith(nodes3480);
    }));
    root4357.append(node1540);
    callback(root4357); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3479;
    nodes3479 = node.contents();
    oldNodes.replaceWith(nodes3479);
  }));
  root4350.append(node1534);
  callback(root4350); return subs__;
  
  
  
  
  
  
  
  
  
  return subs__;
};
