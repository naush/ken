mobl.provides('ken');
mobl.provides('controls');
ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll604 = mobl.range(0, tabs.length);
  var length52 = coll604.length;
  for(var i394 = 0; i394 < length52; i394++) {
    var index;
    index = coll604.get(i394);
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
  var root5094 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var node1867 = $("<div>");
  node1867.attr('style', "background-image: url(\"resources/images/background_test2.png\"); background-repeat: no-repeat; height: 500px; width: 315px; position: absolute;");
  
  
  var tmp10096 = mobl.ref("Ken");
  
  
  var tmp10097 = mobl.ref(null);
  
  var nodes3998 = $("<span>");
  node1867.append(nodes3998);
  subs__.addSub((ui.customHeader)(tmp10096, tmp10097, function(_, callback) {
    var root5095 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5095); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3998;
    nodes3998 = node.contents();
    oldNodes.replaceWith(nodes3998);
  }));
  
  var activeTabName = mobl.ref("Reminder");
  
  var s = mobl.ref("");
  
  var node1868 = $("<div>");
  node1868.attr('style', "height: 284px; margin-left: 25px; margin-top: 10px");
  
  
  var tmp10098 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp10098.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp10098.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp10098.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp10101 = mobl.ref(null);
  
  
  var tmp10100 = mobl.ref(null);
  
  
  var tmp10099 = mobl.ref(null);
  
  var nodes4013 = $("<span>");
  node1868.append(nodes4013);
  subs__.addSub((mobl.block)(tmp10098, tmp10099, tmp10100, tmp10101, function(_, callback) {
    var root5110 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes4014 = $("<span>");
    root5110.append(nodes4014);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root5111 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4015 = $("<span>");
      root5111.append(nodes4015);
      subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
        var root5112 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5112); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4015;
        nodes4015 = node.contents();
        oldNodes.replaceWith(nodes4015);
      }));
      callback(root5111); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4014;
      nodes4014 = node.contents();
      oldNodes.replaceWith(nodes4014);
    }));
    callback(root5110); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4013;
    nodes4013 = node.contents();
    oldNodes.replaceWith(nodes4013);
  }));
  
  var tmp10102 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp10102.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp10102.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp10102.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp10105 = mobl.ref(null);
  
  
  var tmp10104 = mobl.ref(null);
  
  
  var tmp10103 = mobl.ref(null);
  
  var nodes4016 = $("<span>");
  node1868.append(nodes4016);
  subs__.addSub((mobl.block)(tmp10102, tmp10103, tmp10104, tmp10105, function(_, callback) {
    var root5113 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes4017 = $("<span>");
    root5113.append(nodes4017);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root5114 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4018 = $("<span>");
      root5114.append(nodes4018);
      subs__.addSub((controls.life.life)(function(_, callback) {
        var root5115 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5115); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4018;
        nodes4018 = node.contents();
        oldNodes.replaceWith(nodes4018);
      }));
      callback(root5114); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4017;
      nodes4017 = node.contents();
      oldNodes.replaceWith(nodes4017);
    }));
    callback(root5113); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4016;
    nodes4016 = node.contents();
    oldNodes.replaceWith(nodes4016);
  }));
  
  var tmp10106 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp10106.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp10106.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp10106.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp10109 = mobl.ref(null);
  
  
  var tmp10108 = mobl.ref(null);
  
  
  var tmp10107 = mobl.ref(null);
  
  var nodes4019 = $("<span>");
  node1868.append(nodes4019);
  subs__.addSub((mobl.block)(tmp10106, tmp10107, tmp10108, tmp10109, function(_, callback) {
    var root5116 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes4020 = $("<span>");
    root5116.append(nodes4020);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root5117 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4021 = $("<span>");
      root5117.append(nodes4021);
      subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
        var root5118 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5118); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4021;
        nodes4021 = node.contents();
        oldNodes.replaceWith(nodes4021);
      }));
      callback(root5117); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4020;
      nodes4020 = node.contents();
      oldNodes.replaceWith(nodes4020);
    }));
    callback(root5116); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4019;
    nodes4019 = node.contents();
    oldNodes.replaceWith(nodes4019);
  }));
  
  var tmp10110 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp10110.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp10110.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp10110.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp10113 = mobl.ref(null);
  
  
  var tmp10112 = mobl.ref(null);
  
  
  var tmp10111 = mobl.ref(null);
  
  var nodes4022 = $("<span>");
  node1868.append(nodes4022);
  subs__.addSub((mobl.block)(tmp10110, tmp10111, tmp10112, tmp10113, function(_, callback) {
    var root5119 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes4023 = $("<span>");
    root5119.append(nodes4023);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root5120 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4024 = $("<span>");
      root5120.append(nodes4024);
      subs__.addSub((controls.meditate.meditate)(function(_, callback) {
        var root5121 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5121); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4024;
        nodes4024 = node.contents();
        oldNodes.replaceWith(nodes4024);
      }));
      callback(root5120); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4023;
      nodes4023 = node.contents();
      oldNodes.replaceWith(nodes4023);
    }));
    callback(root5119); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4022;
    nodes4022 = node.contents();
    oldNodes.replaceWith(nodes4022);
  }));
  node1867.append(node1868);
  
  var tmp10140 = mobl.ref(null);
  
  
  var tmp10139 = mobl.ref(null);
  
  
  var tmp10138 = mobl.ref(null);
  
  var nodes3999 = $("<span>");
  node1867.append(nodes3999);
  subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp10138, tmp10139, tmp10140, function(_, callback) {
    var root5096 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp10137 = mobl.ref(false);
    
    
    var tmp10136 = mobl.ref(null);
    
    
    var tmp10135 = mobl.ref(null);
    
    var nodes4000 = $("<span>");
    root5096.append(nodes4000);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp10135, tmp10136, tmp10137, function(_, callback) {
      var root5097 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10115 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = ken.prev(activeTabName.get());
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp10114 = mobl.ref("resources/images/back.png");
      
      
      var tmp10120 = mobl.ref(null);
      
      
      var tmp10119 = mobl.ref(null);
      
      
      var tmp10118 = mobl.ref(null);
      
      
      var tmp10117 = mobl.ref(null);
      
      
      var tmp10116 = mobl.ref(null);
      
      var nodes4001 = $("<span>");
      root5097.append(nodes4001);
      subs__.addSub((ui.image)(tmp10114, tmp10116, tmp10117, tmp10115, tmp10118, tmp10119, tmp10120, function(_, callback) {
        var root5098 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5098); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4001;
        nodes4001 = node.contents();
        oldNodes.replaceWith(nodes4001);
      }));
      
      var node1869 = $("<span>");
      node1869.attr('style', "margin-left: 5px; margin-right: 5px;");
      
      
      var tmp10122 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp10121 = mobl.ref("resources/images/view_stressgraph_off.png");
      
      
      var tmp10127 = mobl.ref(null);
      
      
      var tmp10126 = mobl.ref(null);
      
      
      var tmp10125 = mobl.ref(null);
      
      
      var tmp10124 = mobl.ref(null);
      
      
      var tmp10123 = mobl.ref(null);
      
      var nodes4003 = $("<span>");
      node1869.append(nodes4003);
      subs__.addSub((ui.image)(tmp10121, tmp10123, tmp10124, tmp10122, tmp10125, tmp10126, tmp10127, function(_, callback) {
        var root5100 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5100); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4003;
        nodes4003 = node.contents();
        oldNodes.replaceWith(nodes4003);
      }));
      root5097.append(node1869);
      
      var tmp10129 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = ken.next(activeTabName.get());
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp10128 = mobl.ref("resources/images/next.png");
      
      
      var tmp10134 = mobl.ref(null);
      
      
      var tmp10133 = mobl.ref(null);
      
      
      var tmp10132 = mobl.ref(null);
      
      
      var tmp10131 = mobl.ref(null);
      
      
      var tmp10130 = mobl.ref(null);
      
      var nodes4002 = $("<span>");
      root5097.append(nodes4002);
      subs__.addSub((ui.image)(tmp10128, tmp10130, tmp10131, tmp10129, tmp10132, tmp10133, tmp10134, function(_, callback) {
        var root5099 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5099); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4002;
        nodes4002 = node.contents();
        oldNodes.replaceWith(nodes4002);
      }));
      callback(root5097); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4000;
      nodes4000 = node.contents();
      oldNodes.replaceWith(nodes4000);
    }));
    callback(root5096); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3999;
    nodes3999 = node.contents();
    oldNodes.replaceWith(nodes3999);
  }));
  
  var tmp10187 = mobl.ref(null);
  
  
  var tmp10186 = mobl.ref(null);
  
  
  var tmp10185 = mobl.ref(null);
  
  var nodes4004 = $("<span>");
  node1867.append(nodes4004);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp10185, tmp10186, tmp10187, function(_, callback) {
    var root5101 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1870 = $("<span>");
    node1870.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
    
    
    var tmp10149 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10149.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp10149.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp10149.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp10148 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Reminder";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp10151 = mobl.ref(null);
    
    
    var tmp10150 = mobl.ref(null);
    
    var nodes4011 = $("<span>");
    node1870.append(nodes4011);
    subs__.addSub((mobl.span)(tmp10149, tmp10150, tmp10148, tmp10151, function(_, callback) {
      var root5108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10141 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp10141.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
      }));
      
      
      var tmp10147 = mobl.ref(null);
      
      
      var tmp10146 = mobl.ref(null);
      
      
      var tmp10145 = mobl.ref(null);
      
      
      var tmp10144 = mobl.ref(null);
      
      
      var tmp10143 = mobl.ref(null);
      
      
      var tmp10142 = mobl.ref(null);
      
      var nodes4012 = $("<span>");
      root5108.append(nodes4012);
      subs__.addSub((ui.image)(tmp10141, tmp10142, tmp10143, tmp10144, tmp10145, tmp10146, tmp10147, function(_, callback) {
        var root5109 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5109); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4012;
        nodes4012 = node.contents();
        oldNodes.replaceWith(nodes4012);
      }));
      callback(root5108); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4011;
      nodes4011 = node.contents();
      oldNodes.replaceWith(nodes4011);
    }));
    root5101.append(node1870);
    
    var node1871 = $("<span>");
    node1871.attr('style', "position: absolute; margin-left: 70px;");
    
    
    var tmp10160 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10160.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp10160.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp10160.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp10159 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Life";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp10162 = mobl.ref(null);
    
    
    var tmp10161 = mobl.ref(null);
    
    var nodes4009 = $("<span>");
    node1871.append(nodes4009);
    subs__.addSub((mobl.span)(tmp10160, tmp10161, tmp10159, tmp10162, function(_, callback) {
      var root5106 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10152 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp10152.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
      }));
      
      
      var tmp10158 = mobl.ref(null);
      
      
      var tmp10157 = mobl.ref(null);
      
      
      var tmp10156 = mobl.ref(null);
      
      
      var tmp10155 = mobl.ref(null);
      
      
      var tmp10154 = mobl.ref(null);
      
      
      var tmp10153 = mobl.ref(null);
      
      var nodes4010 = $("<span>");
      root5106.append(nodes4010);
      subs__.addSub((ui.image)(tmp10152, tmp10153, tmp10154, tmp10155, tmp10156, tmp10157, tmp10158, function(_, callback) {
        var root5107 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5107); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4010;
        nodes4010 = node.contents();
        oldNodes.replaceWith(nodes4010);
      }));
      callback(root5106); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4009;
      nodes4009 = node.contents();
      oldNodes.replaceWith(nodes4009);
    }));
    root5101.append(node1871);
    
    var node1872 = $("<span>");
    node1872.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
    
    
    var tmp10171 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10171.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp10171.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp10171.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp10170 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Moodometer";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp10173 = mobl.ref(null);
    
    
    var tmp10172 = mobl.ref(null);
    
    var nodes4007 = $("<span>");
    node1872.append(nodes4007);
    subs__.addSub((mobl.span)(tmp10171, tmp10172, tmp10170, tmp10173, function(_, callback) {
      var root5104 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10163 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp10163.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
      }));
      
      
      var tmp10169 = mobl.ref(null);
      
      
      var tmp10168 = mobl.ref(null);
      
      
      var tmp10167 = mobl.ref(null);
      
      
      var tmp10166 = mobl.ref(null);
      
      
      var tmp10165 = mobl.ref(null);
      
      
      var tmp10164 = mobl.ref(null);
      
      var nodes4008 = $("<span>");
      root5104.append(nodes4008);
      subs__.addSub((ui.image)(tmp10163, tmp10164, tmp10165, tmp10166, tmp10167, tmp10168, tmp10169, function(_, callback) {
        var root5105 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5105); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4008;
        nodes4008 = node.contents();
        oldNodes.replaceWith(nodes4008);
      }));
      callback(root5104); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4007;
      nodes4007 = node.contents();
      oldNodes.replaceWith(nodes4007);
    }));
    root5101.append(node1872);
    
    var node1873 = $("<span>");
    node1873.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
    
    
    var tmp10182 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10182.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp10182.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp10182.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp10181 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Meditate";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp10184 = mobl.ref(null);
    
    
    var tmp10183 = mobl.ref(null);
    
    var nodes4005 = $("<span>");
    node1873.append(nodes4005);
    subs__.addSub((mobl.span)(tmp10182, tmp10183, tmp10181, tmp10184, function(_, callback) {
      var root5102 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10174 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp10174.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
      }));
      
      
      var tmp10180 = mobl.ref(null);
      
      
      var tmp10179 = mobl.ref(null);
      
      
      var tmp10178 = mobl.ref(null);
      
      
      var tmp10177 = mobl.ref(null);
      
      
      var tmp10176 = mobl.ref(null);
      
      
      var tmp10175 = mobl.ref(null);
      
      var nodes4006 = $("<span>");
      root5102.append(nodes4006);
      subs__.addSub((ui.image)(tmp10174, tmp10175, tmp10176, tmp10177, tmp10178, tmp10179, tmp10180, function(_, callback) {
        var root5103 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5103); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4006;
        nodes4006 = node.contents();
        oldNodes.replaceWith(nodes4006);
      }));
      callback(root5102); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4005;
      nodes4005 = node.contents();
      oldNodes.replaceWith(nodes4005);
    }));
    root5101.append(node1873);
    callback(root5101); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4004;
    nodes4004 = node.contents();
    oldNodes.replaceWith(nodes4004);
  }));
  root5094.append(node1867);
  callback(root5094); return subs__;
  
  
  
  
  
  
  
  
  
  return subs__;
};
