mobl.provides('ken');
mobl.provides('controls');
mobl.provides('models');
ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll445 = mobl.range(0, tabs.length);
  var length26 = coll445.length;
  for(var i209 = 0; i209 < length26; i209++) {
    var index;
    index = coll445.get(i209);
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

ken.header = function(activeTabName) {
   var __this = this;
  if(activeTabName == "Reminder") {
    return "Select the activities you would like to include in your daily life.";
  } else if(activeTabName == "Life") {
    return "Select the recent changes that have occurred in your life.";
  } else if(activeTabName == "Moodometer") {
    return "How do you feel right now? Tap on the slider to rate your mood.";
  } else if(activeTabName == "Meditate") {
    return "Select a podcast to listen.";
  } else if(activeTabName == "StressGraph") {
    return "Trace your mood.";
  } else {
    
  }
  return "Ken";
};


ken.root = function(callback, screenCallback) {
  var root2771 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp6257 = mobl.ref(null);
  
  
  var tmp6256 = mobl.ref(null);
  
  
  var tmp6255 = mobl.ref(null);
  
  var nodes2193 = $("<span>");
  root2771.append(nodes2193);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp6255, tmp6256, tmp6257, function(_, callback) {
    var root2772 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var stressGraphImage = mobl.ref("resources/images/view_stressgraph_off.png");
    
    var stressGraphImageOn = mobl.ref("resources/images/view_stressgraph_on.png");
    
    var backButtonImage = mobl.ref("resources/images/back.png");
    
    var nextButtonImage = mobl.ref("resources/images/next.png");
    
    var transitionImage = mobl.ref("resources/images/transition_screen.png");
    
    var moods = mobl.ref("");
    
    var activeTabName = mobl.ref("Reminder");
    
    var lastTabName = mobl.ref("");
    
    var s = mobl.ref("");
    
    var tmp6107 = mobl.ref(ken.header(activeTabName.get()));
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6107.set(ken.header(activeTabName.get()));
    }));
    
    
    var tmp6108 = mobl.ref(null);
    
    var nodes2194 = $("<span>");
    root2772.append(nodes2194);
    subs__.addSub((ui.customHeader)(tmp6107, tmp6108, function(_, callback) {
      var root2773 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2773); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2194;
      nodes2194 = node.contents();
      oldNodes.replaceWith(nodes2194);
    }));
    
    var node1312 = $("<div>");
    node1312.attr('style', "height: 300px; margin-left: 25px;");
    
    
    var tmp6116 = mobl.ref(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6116.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6116.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6116.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6119 = mobl.ref(null);
    
    
    var tmp6118 = mobl.ref(null);
    
    
    var tmp6117 = mobl.ref(null);
    
    var nodes2211 = $("<span>");
    node1312.append(nodes2211);
    subs__.addSub((mobl.block)(tmp6116, tmp6117, tmp6118, tmp6119, function(_, callback) {
      var root2790 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2212 = $("<span>");
      root2790.append(nodes2212);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2791 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6109 = mobl.ref("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        subs__.addSub(moods.addEventListener('change', function() {
          tmp6109.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        
        var tmp6115 = mobl.ref(null);
        
        
        var tmp6114 = mobl.ref(null);
        
        
        var tmp6113 = mobl.ref(null);
        
        
        var tmp6112 = mobl.ref(null);
        
        
        var tmp6111 = mobl.ref(null);
        
        
        var tmp6110 = mobl.ref(null);
        
        var nodes2213 = $("<span>");
        root2791.append(nodes2213);
        subs__.addSub((ui.image)(tmp6109, tmp6110, tmp6111, tmp6112, tmp6113, tmp6114, tmp6115, function(_, callback) {
          var root2792 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2792); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2213;
          nodes2213 = node.contents();
          oldNodes.replaceWith(nodes2213);
        }));
        callback(root2791); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2212;
        nodes2212 = node.contents();
        oldNodes.replaceWith(nodes2212);
      }));
      callback(root2790); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2211;
      nodes2211 = node.contents();
      oldNodes.replaceWith(nodes2211);
    }));
    
    var tmp6133 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6133.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6133.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6133.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6136 = mobl.ref(null);
    
    
    var tmp6135 = mobl.ref(null);
    
    
    var tmp6134 = mobl.ref(null);
    
    var nodes2214 = $("<span>");
    node1312.append(nodes2214);
    subs__.addSub((mobl.block)(tmp6133, tmp6134, tmp6135, tmp6136, function(_, callback) {
      var root2793 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2215 = $("<span>");
      root2793.append(nodes2215);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2794 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1323 = $("<div>");
        node1323.attr('id', "flash__Reminder");
        
        var ref1009 = mobl.ref(ui.flash);
        if(ref1009.get() !== null) {
          node1323.attr('class', ref1009.get());
          subs__.addSub(ref1009.addEventListener('change', function(_, ref, val) {
            node1323.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1009.rebind());
        
        
        var tmp6121 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Reminder").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6120 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp6126 = mobl.ref(null);
        
        
        var tmp6125 = mobl.ref(null);
        
        
        var tmp6124 = mobl.ref(null);
        
        
        var tmp6123 = mobl.ref(null);
        
        
        var tmp6122 = mobl.ref(null);
        
        var nodes2217 = $("<span>");
        node1323.append(nodes2217);
        subs__.addSub((ui.image)(tmp6120, tmp6122, tmp6123, tmp6121, tmp6124, tmp6125, tmp6126, function(_, callback) {
          var root2796 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2796); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2217;
          nodes2217 = node.contents();
          oldNodes.replaceWith(nodes2217);
        }));
        
        var node1324 = $("<span>");
        
        var ref1008 = mobl.ref(ui.transition);
        if(ref1008.get() !== null) {
          node1324.attr('class', ref1008.get());
          subs__.addSub(ref1008.addEventListener('change', function(_, ref, val) {
            node1324.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1008.rebind());
        
        var val882 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val882 !== null) {
          subs__.addSub(mobl.domBind(node1324, 'mousedown', val882));
        }
        
        var val883 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val883 !== null) {
          subs__.addSub(mobl.domBind(node1324, 'mouseup', val883));
        }
        
        
        var tmp6132 = mobl.ref(null);
        
        
        var tmp6131 = mobl.ref(null);
        
        
        var tmp6130 = mobl.ref(null);
        
        
        var tmp6129 = mobl.ref(null);
        
        
        var tmp6128 = mobl.ref(null);
        
        
        var tmp6127 = mobl.ref(null);
        
        var nodes2218 = $("<span>");
        node1324.append(nodes2218);
        subs__.addSub((ui.image)(transitionImage, tmp6127, tmp6128, tmp6129, tmp6130, tmp6131, tmp6132, function(_, callback) {
          var root2797 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2797); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2218;
          nodes2218 = node.contents();
          oldNodes.replaceWith(nodes2218);
        }));
        node1323.append(node1324);
        
        var node1325 = $("<span>");
        node1325.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node1325.append("Reminders saved");
        node1323.append(node1325);
        root2794.append(node1323);
        var nodes2216 = $("<span>");
        root2794.append(nodes2216);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root2795 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2795); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2216;
          nodes2216 = node.contents();
          oldNodes.replaceWith(nodes2216);
        }));
        callback(root2794); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2215;
        nodes2215 = node.contents();
        oldNodes.replaceWith(nodes2215);
      }));
      callback(root2793); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2214;
      nodes2214 = node.contents();
      oldNodes.replaceWith(nodes2214);
    }));
    
    var tmp6150 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6150.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6150.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6150.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6153 = mobl.ref(null);
    
    
    var tmp6152 = mobl.ref(null);
    
    
    var tmp6151 = mobl.ref(null);
    
    var nodes2219 = $("<span>");
    node1312.append(nodes2219);
    subs__.addSub((mobl.block)(tmp6150, tmp6151, tmp6152, tmp6153, function(_, callback) {
      var root2798 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2220 = $("<span>");
      root2798.append(nodes2220);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2799 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1326 = $("<div>");
        node1326.attr('id', "flash__Life");
        
        var ref1011 = mobl.ref(ui.flash);
        if(ref1011.get() !== null) {
          node1326.attr('class', ref1011.get());
          subs__.addSub(ref1011.addEventListener('change', function(_, ref, val) {
            node1326.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1011.rebind());
        
        
        var tmp6138 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Life").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6137 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp6143 = mobl.ref(null);
        
        
        var tmp6142 = mobl.ref(null);
        
        
        var tmp6141 = mobl.ref(null);
        
        
        var tmp6140 = mobl.ref(null);
        
        
        var tmp6139 = mobl.ref(null);
        
        var nodes2222 = $("<span>");
        node1326.append(nodes2222);
        subs__.addSub((ui.image)(tmp6137, tmp6139, tmp6140, tmp6138, tmp6141, tmp6142, tmp6143, function(_, callback) {
          var root2801 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2801); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2222;
          nodes2222 = node.contents();
          oldNodes.replaceWith(nodes2222);
        }));
        
        var node1327 = $("<span>");
        
        var ref1010 = mobl.ref(ui.transition);
        if(ref1010.get() !== null) {
          node1327.attr('class', ref1010.get());
          subs__.addSub(ref1010.addEventListener('change', function(_, ref, val) {
            node1327.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1010.rebind());
        
        var val884 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val884 !== null) {
          subs__.addSub(mobl.domBind(node1327, 'mousedown', val884));
        }
        
        var val885 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val885 !== null) {
          subs__.addSub(mobl.domBind(node1327, 'mouseup', val885));
        }
        
        
        var tmp6149 = mobl.ref(null);
        
        
        var tmp6148 = mobl.ref(null);
        
        
        var tmp6147 = mobl.ref(null);
        
        
        var tmp6146 = mobl.ref(null);
        
        
        var tmp6145 = mobl.ref(null);
        
        
        var tmp6144 = mobl.ref(null);
        
        var nodes2223 = $("<span>");
        node1327.append(nodes2223);
        subs__.addSub((ui.image)(transitionImage, tmp6144, tmp6145, tmp6146, tmp6147, tmp6148, tmp6149, function(_, callback) {
          var root2802 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2802); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2223;
          nodes2223 = node.contents();
          oldNodes.replaceWith(nodes2223);
        }));
        node1326.append(node1327);
        
        var node1328 = $("<span>");
        node1328.attr('style', "position: absolute; color: white; margin-left: -210px; margin-top: 202px;");
        
        
        node1328.append("Events saved");
        node1326.append(node1328);
        root2799.append(node1326);
        var nodes2221 = $("<span>");
        root2799.append(nodes2221);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root2800 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2800); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2221;
          nodes2221 = node.contents();
          oldNodes.replaceWith(nodes2221);
        }));
        callback(root2799); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2220;
        nodes2220 = node.contents();
        oldNodes.replaceWith(nodes2220);
      }));
      callback(root2798); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2219;
      nodes2219 = node.contents();
      oldNodes.replaceWith(nodes2219);
    }));
    
    var tmp6167 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6167.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6167.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6167.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6170 = mobl.ref(null);
    
    
    var tmp6169 = mobl.ref(null);
    
    
    var tmp6168 = mobl.ref(null);
    
    var nodes2224 = $("<span>");
    node1312.append(nodes2224);
    subs__.addSub((mobl.block)(tmp6167, tmp6168, tmp6169, tmp6170, function(_, callback) {
      var root2803 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2225 = $("<span>");
      root2803.append(nodes2225);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2804 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1329 = $("<div>");
        node1329.attr('id', "flash__Moodometer");
        
        var ref1013 = mobl.ref(ui.flash);
        if(ref1013.get() !== null) {
          node1329.attr('class', ref1013.get());
          subs__.addSub(ref1013.addEventListener('change', function(_, ref, val) {
            node1329.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1013.rebind());
        
        
        var tmp6155 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = mobl.$("#flash__Moodometer").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6154 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp6160 = mobl.ref(null);
        
        
        var tmp6159 = mobl.ref(null);
        
        
        var tmp6158 = mobl.ref(null);
        
        
        var tmp6157 = mobl.ref(null);
        
        
        var tmp6156 = mobl.ref(null);
        
        var nodes2227 = $("<span>");
        node1329.append(nodes2227);
        subs__.addSub((ui.image)(tmp6154, tmp6156, tmp6157, tmp6155, tmp6158, tmp6159, tmp6160, function(_, callback) {
          var root2806 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2806); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2227;
          nodes2227 = node.contents();
          oldNodes.replaceWith(nodes2227);
        }));
        
        var node1330 = $("<span>");
        
        var ref1012 = mobl.ref(ui.transition);
        if(ref1012.get() !== null) {
          node1330.attr('class', ref1012.get());
          subs__.addSub(ref1012.addEventListener('change', function(_, ref, val) {
            node1330.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1012.rebind());
        
        var val886 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val886 !== null) {
          subs__.addSub(mobl.domBind(node1330, 'mousedown', val886));
        }
        
        var val887 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val887 !== null) {
          subs__.addSub(mobl.domBind(node1330, 'mouseup', val887));
        }
        
        
        var tmp6166 = mobl.ref(null);
        
        
        var tmp6165 = mobl.ref(null);
        
        
        var tmp6164 = mobl.ref(null);
        
        
        var tmp6163 = mobl.ref(null);
        
        
        var tmp6162 = mobl.ref(null);
        
        
        var tmp6161 = mobl.ref(null);
        
        var nodes2228 = $("<span>");
        node1330.append(nodes2228);
        subs__.addSub((ui.image)(transitionImage, tmp6161, tmp6162, tmp6163, tmp6164, tmp6165, tmp6166, function(_, callback) {
          var root2807 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2807); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2228;
          nodes2228 = node.contents();
          oldNodes.replaceWith(nodes2228);
        }));
        node1329.append(node1330);
        
        var node1331 = $("<span>");
        node1331.attr('style', "position: absolute; color: white; margin-left: -203px; margin-top: 202px;");
        
        
        node1331.append("Mood saved");
        node1329.append(node1331);
        root2804.append(node1329);
        var nodes2226 = $("<span>");
        root2804.append(nodes2226);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root2805 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2805); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2226;
          nodes2226 = node.contents();
          oldNodes.replaceWith(nodes2226);
        }));
        callback(root2804); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2225;
        nodes2225 = node.contents();
        oldNodes.replaceWith(nodes2225);
      }));
      callback(root2803); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2224;
      nodes2224 = node.contents();
      oldNodes.replaceWith(nodes2224);
    }));
    
    var tmp6171 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6171.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6171.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6171.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6174 = mobl.ref(null);
    
    
    var tmp6173 = mobl.ref(null);
    
    
    var tmp6172 = mobl.ref(null);
    
    var nodes2229 = $("<span>");
    node1312.append(nodes2229);
    subs__.addSub((mobl.block)(tmp6171, tmp6172, tmp6173, tmp6174, function(_, callback) {
      var root2808 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2230 = $("<span>");
      root2808.append(nodes2230);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2809 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes2231 = $("<span>");
        root2809.append(nodes2231);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root2810 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2810); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2231;
          nodes2231 = node.contents();
          oldNodes.replaceWith(nodes2231);
        }));
        callback(root2809); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2230;
        nodes2230 = node.contents();
        oldNodes.replaceWith(nodes2230);
      }));
      callback(root2808); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2229;
      nodes2229 = node.contents();
      oldNodes.replaceWith(nodes2229);
    }));
    root2772.append(node1312);
    
    var tmp6207 = mobl.ref(null);
    
    
    var tmp6206 = mobl.ref(null);
    
    
    var tmp6205 = mobl.ref(null);
    
    var nodes2195 = $("<span>");
    root2772.append(nodes2195);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp6205, tmp6206, tmp6207, function(_, callback) {
      var root2774 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1313 = $("<span>");
      node1313.attr('id', "placeholder");
      node1313.attr('style', "display: none;");
      
      
      var tmp6183 = mobl.ref(false);
      
      
      var tmp6182 = mobl.ref(null);
      
      
      var tmp6181 = mobl.ref(null);
      
      var nodes2200 = $("<span>");
      node1313.append(nodes2200);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6181, tmp6182, tmp6183, function(_, callback) {
        var root2779 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1318 = $("<span>");
        node1318.attr('style', "margin-left: 57px;");
        
        var val880 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val880 !== null) {
          subs__.addSub(mobl.domBind(node1318, 'mousedown', val880));
        }
        
        var val881 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val881 !== null) {
          subs__.addSub(mobl.domBind(node1318, 'mouseout', val881));
        }
        
        
        var tmp6175 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#placeholder").hide();
                             var result__ = mobl.$("#navigators").show();
                             var result__ = lastTabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6180 = mobl.ref(null);
        
        
        var tmp6179 = mobl.ref(null);
        
        
        var tmp6178 = mobl.ref(null);
        
        
        var tmp6177 = mobl.ref(null);
        
        
        var tmp6176 = mobl.ref(null);
        
        var nodes2201 = $("<span>");
        node1318.append(nodes2201);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp6176, tmp6177, tmp6175, tmp6178, tmp6179, tmp6180, function(_, callback) {
          var root2780 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2780); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2201;
          nodes2201 = node.contents();
          oldNodes.replaceWith(nodes2201);
        }));
        root2779.append(node1318);
        callback(root2779); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2200;
        nodes2200 = node.contents();
        oldNodes.replaceWith(nodes2200);
      }));
      root2774.append(node1313);
      
      var node1314 = $("<span>");
      node1314.attr('id', "navigators");
      
      
      var tmp6204 = mobl.ref(false);
      
      
      var tmp6203 = mobl.ref(null);
      
      
      var tmp6202 = mobl.ref(null);
      
      var nodes2196 = $("<span>");
      node1314.append(nodes2196);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6202, tmp6203, tmp6204, function(_, callback) {
        var root2775 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1315 = $("<span>");
        
        var val878 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val878 !== null) {
          subs__.addSub(mobl.domBind(node1315, 'mousedown', val878));
        }
        
        var val879 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val879 !== null) {
          subs__.addSub(mobl.domBind(node1315, 'mouseup', val879));
        }
        
        
        var tmp6184 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.prev(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6189 = mobl.ref(null);
        
        
        var tmp6188 = mobl.ref(null);
        
        
        var tmp6187 = mobl.ref(null);
        
        
        var tmp6186 = mobl.ref(null);
        
        
        var tmp6185 = mobl.ref(null);
        
        var nodes2199 = $("<span>");
        node1315.append(nodes2199);
        subs__.addSub((ui.image)(backButtonImage, tmp6185, tmp6186, tmp6184, tmp6187, tmp6188, tmp6189, function(_, callback) {
          var root2778 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2778); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2199;
          nodes2199 = node.contents();
          oldNodes.replaceWith(nodes2199);
        }));
        root2775.append(node1315);
        
        var node1316 = $("<span>");
        
        var ref1007 = mobl.ref(ui.stressGraphButton);
        if(ref1007.get() !== null) {
          node1316.attr('class', ref1007.get());
          subs__.addSub(ref1007.addEventListener('change', function(_, ref, val) {
            node1316.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1007.rebind());
        
        var val874 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val874 !== null) {
          subs__.addSub(mobl.domBind(node1316, 'mouseover', val874));
        }
        
        var val875 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val875 !== null) {
          subs__.addSub(mobl.domBind(node1316, 'mouseout', val875));
        }
        
        var val876 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val876 !== null) {
          subs__.addSub(mobl.domBind(node1316, 'mousedown', val876));
        }
        
        var val877 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val877 !== null) {
          subs__.addSub(mobl.domBind(node1316, 'mouseup', val877));
        }
        
        
        var tmp6190 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#navigators").hide();
                             var result__ = mobl.$("#placeholder").show();
                             var result__ = activeTabName.get();
                             lastTabName.set(result__);
                             var result__ = "StressGraph";
                             activeTabName.set(result__);
                             var result__ = "resources/images/view_stressgraph_on.png";
                             stressGraphImage.set(result__);
                             var result__ = "";
                             var data = result__;
                             var result__ = models.moods.Mood.all().order("date", false).limit(7).reverse();
                             models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll446) {
                               coll446 = coll446.reverse();
                               function processOne59() {
                                 var mood;
                                 mood = coll446.pop();
                                 var result__ = data + mood.happy + ",";
                                 data = result__;
                                 
                                 if(coll446.length > 0) processOne59(); else rest59();
                                 
                               }
                               function rest59() {
                                 var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                                 moods.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll446.length > 0) processOne59(); else rest59();
                             });
                             
                           });
        
        
        var tmp6195 = mobl.ref(null);
        
        
        var tmp6194 = mobl.ref(null);
        
        
        var tmp6193 = mobl.ref(null);
        
        
        var tmp6192 = mobl.ref(null);
        
        
        var tmp6191 = mobl.ref(null);
        
        var nodes2198 = $("<span>");
        node1316.append(nodes2198);
        subs__.addSub((ui.image)(stressGraphImage, tmp6191, tmp6192, tmp6190, tmp6193, tmp6194, tmp6195, function(_, callback) {
          var root2777 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2777); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2198;
          nodes2198 = node.contents();
          oldNodes.replaceWith(nodes2198);
        }));
        root2775.append(node1316);
        
        var node1317 = $("<span>");
        
        var val872 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val872 !== null) {
          subs__.addSub(mobl.domBind(node1317, 'mousedown', val872));
        }
        
        var val873 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val873 !== null) {
          subs__.addSub(mobl.domBind(node1317, 'mouseup', val873));
        }
        
        
        var tmp6196 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.next(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6201 = mobl.ref(null);
        
        
        var tmp6200 = mobl.ref(null);
        
        
        var tmp6199 = mobl.ref(null);
        
        
        var tmp6198 = mobl.ref(null);
        
        
        var tmp6197 = mobl.ref(null);
        
        var nodes2197 = $("<span>");
        node1317.append(nodes2197);
        subs__.addSub((ui.image)(nextButtonImage, tmp6197, tmp6198, tmp6196, tmp6199, tmp6200, tmp6201, function(_, callback) {
          var root2776 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2776); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2197;
          nodes2197 = node.contents();
          oldNodes.replaceWith(nodes2197);
        }));
        root2775.append(node1317);
        callback(root2775); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2196;
        nodes2196 = node.contents();
        oldNodes.replaceWith(nodes2196);
      }));
      root2774.append(node1314);
      callback(root2774); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2195;
      nodes2195 = node.contents();
      oldNodes.replaceWith(nodes2195);
    }));
    
    var tmp6254 = mobl.ref(null);
    
    
    var tmp6253 = mobl.ref(null);
    
    
    var tmp6252 = mobl.ref(null);
    
    var nodes2202 = $("<span>");
    root2772.append(nodes2202);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp6252, tmp6253, tmp6254, function(_, callback) {
      var root2781 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1319 = $("<span>");
      node1319.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      
      var tmp6216 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp6216.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp6216.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp6216.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp6215 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Reminder";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp6218 = mobl.ref(null);
      
      
      var tmp6217 = mobl.ref(null);
      
      var nodes2209 = $("<span>");
      node1319.append(nodes2209);
      subs__.addSub((mobl.span)(tmp6216, tmp6217, tmp6215, tmp6218, function(_, callback) {
        var root2788 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6208 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp6208.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        
        var tmp6214 = mobl.ref(null);
        
        
        var tmp6213 = mobl.ref(null);
        
        
        var tmp6212 = mobl.ref(null);
        
        
        var tmp6211 = mobl.ref(null);
        
        
        var tmp6210 = mobl.ref(null);
        
        
        var tmp6209 = mobl.ref(null);
        
        var nodes2210 = $("<span>");
        root2788.append(nodes2210);
        subs__.addSub((ui.image)(tmp6208, tmp6209, tmp6210, tmp6211, tmp6212, tmp6213, tmp6214, function(_, callback) {
          var root2789 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2789); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2210;
          nodes2210 = node.contents();
          oldNodes.replaceWith(nodes2210);
        }));
        callback(root2788); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2209;
        nodes2209 = node.contents();
        oldNodes.replaceWith(nodes2209);
      }));
      root2781.append(node1319);
      
      var node1320 = $("<span>");
      node1320.attr('style', "position: absolute; margin-left: 70px;");
      
      
      var tmp6227 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp6227.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp6227.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp6227.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp6226 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Life";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp6229 = mobl.ref(null);
      
      
      var tmp6228 = mobl.ref(null);
      
      var nodes2207 = $("<span>");
      node1320.append(nodes2207);
      subs__.addSub((mobl.span)(tmp6227, tmp6228, tmp6226, tmp6229, function(_, callback) {
        var root2786 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6219 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp6219.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        
        var tmp6225 = mobl.ref(null);
        
        
        var tmp6224 = mobl.ref(null);
        
        
        var tmp6223 = mobl.ref(null);
        
        
        var tmp6222 = mobl.ref(null);
        
        
        var tmp6221 = mobl.ref(null);
        
        
        var tmp6220 = mobl.ref(null);
        
        var nodes2208 = $("<span>");
        root2786.append(nodes2208);
        subs__.addSub((ui.image)(tmp6219, tmp6220, tmp6221, tmp6222, tmp6223, tmp6224, tmp6225, function(_, callback) {
          var root2787 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2787); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2208;
          nodes2208 = node.contents();
          oldNodes.replaceWith(nodes2208);
        }));
        callback(root2786); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2207;
        nodes2207 = node.contents();
        oldNodes.replaceWith(nodes2207);
      }));
      root2781.append(node1320);
      
      var node1321 = $("<span>");
      node1321.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      
      var tmp6238 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp6238.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp6238.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp6238.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp6237 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Moodometer";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp6240 = mobl.ref(null);
      
      
      var tmp6239 = mobl.ref(null);
      
      var nodes2205 = $("<span>");
      node1321.append(nodes2205);
      subs__.addSub((mobl.span)(tmp6238, tmp6239, tmp6237, tmp6240, function(_, callback) {
        var root2784 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6230 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp6230.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        
        var tmp6236 = mobl.ref(null);
        
        
        var tmp6235 = mobl.ref(null);
        
        
        var tmp6234 = mobl.ref(null);
        
        
        var tmp6233 = mobl.ref(null);
        
        
        var tmp6232 = mobl.ref(null);
        
        
        var tmp6231 = mobl.ref(null);
        
        var nodes2206 = $("<span>");
        root2784.append(nodes2206);
        subs__.addSub((ui.image)(tmp6230, tmp6231, tmp6232, tmp6233, tmp6234, tmp6235, tmp6236, function(_, callback) {
          var root2785 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2785); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2206;
          nodes2206 = node.contents();
          oldNodes.replaceWith(nodes2206);
        }));
        callback(root2784); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2205;
        nodes2205 = node.contents();
        oldNodes.replaceWith(nodes2205);
      }));
      root2781.append(node1321);
      
      var node1322 = $("<span>");
      node1322.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      
      var tmp6249 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp6249.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp6249.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp6249.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp6248 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Meditate";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp6251 = mobl.ref(null);
      
      
      var tmp6250 = mobl.ref(null);
      
      var nodes2203 = $("<span>");
      node1322.append(nodes2203);
      subs__.addSub((mobl.span)(tmp6249, tmp6250, tmp6248, tmp6251, function(_, callback) {
        var root2782 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6241 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp6241.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        
        var tmp6247 = mobl.ref(null);
        
        
        var tmp6246 = mobl.ref(null);
        
        
        var tmp6245 = mobl.ref(null);
        
        
        var tmp6244 = mobl.ref(null);
        
        
        var tmp6243 = mobl.ref(null);
        
        
        var tmp6242 = mobl.ref(null);
        
        var nodes2204 = $("<span>");
        root2782.append(nodes2204);
        subs__.addSub((ui.image)(tmp6241, tmp6242, tmp6243, tmp6244, tmp6245, tmp6246, tmp6247, function(_, callback) {
          var root2783 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2783); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2204;
          nodes2204 = node.contents();
          oldNodes.replaceWith(nodes2204);
        }));
        callback(root2782); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2203;
        nodes2203 = node.contents();
        oldNodes.replaceWith(nodes2203);
      }));
      root2781.append(node1322);
      callback(root2781); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2202;
      nodes2202 = node.contents();
      oldNodes.replaceWith(nodes2202);
    }));
    callback(root2772); return subs__;
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2193;
    nodes2193 = node.contents();
    oldNodes.replaceWith(nodes2193);
  }));
  callback(root2771); return subs__;
  
  return subs__;
};
