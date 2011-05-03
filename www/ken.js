mobl.provides('ken');
mobl.provides('controls');
mobl.provides('models');
ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll447 = mobl.range(0, tabs.length);
  var length27 = coll447.length;
  for(var i210 = 0; i210 < length27; i210++) {
    var index;
    index = coll447.get(i210);
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
    return "This chart shows your stress graph over the last one week.";
  } else {
    
  }
  return "Ken";
};


ken.root = function(callback, screenCallback) {
  var root2811 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp6408 = mobl.ref(null);
  
  
  var tmp6407 = mobl.ref(null);
  
  
  var tmp6406 = mobl.ref(null);
  
  var nodes2232 = $("<span>");
  root2811.append(nodes2232);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp6406, tmp6407, tmp6408, function(_, callback) {
    var root2812 = $("<span>");
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
    
    var tmp6258 = mobl.ref(ken.header(activeTabName.get()));
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6258.set(ken.header(activeTabName.get()));
    }));
    
    
    var tmp6259 = mobl.ref(null);
    
    var nodes2233 = $("<span>");
    root2812.append(nodes2233);
    subs__.addSub((ui.customHeader)(tmp6258, tmp6259, function(_, callback) {
      var root2813 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2813); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2233;
      nodes2233 = node.contents();
      oldNodes.replaceWith(nodes2233);
    }));
    
    var node1332 = $("<div>");
    node1332.attr('style', "height: 300px; margin-left: 25px;");
    
    
    var tmp6267 = mobl.ref(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6267.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6267.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6267.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6270 = mobl.ref(null);
    
    
    var tmp6269 = mobl.ref(null);
    
    
    var tmp6268 = mobl.ref(null);
    
    var nodes2250 = $("<span>");
    node1332.append(nodes2250);
    subs__.addSub((mobl.block)(tmp6267, tmp6268, tmp6269, tmp6270, function(_, callback) {
      var root2830 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2251 = $("<span>");
      root2830.append(nodes2251);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2831 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6260 = mobl.ref("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        subs__.addSub(moods.addEventListener('change', function() {
          tmp6260.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        
        var tmp6266 = mobl.ref(null);
        
        
        var tmp6265 = mobl.ref(null);
        
        
        var tmp6264 = mobl.ref(null);
        
        
        var tmp6263 = mobl.ref(null);
        
        
        var tmp6262 = mobl.ref(null);
        
        
        var tmp6261 = mobl.ref(null);
        
        var nodes2252 = $("<span>");
        root2831.append(nodes2252);
        subs__.addSub((ui.image)(tmp6260, tmp6261, tmp6262, tmp6263, tmp6264, tmp6265, tmp6266, function(_, callback) {
          var root2832 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2832); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2252;
          nodes2252 = node.contents();
          oldNodes.replaceWith(nodes2252);
        }));
        callback(root2831); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2251;
        nodes2251 = node.contents();
        oldNodes.replaceWith(nodes2251);
      }));
      callback(root2830); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2250;
      nodes2250 = node.contents();
      oldNodes.replaceWith(nodes2250);
    }));
    
    var tmp6284 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6284.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6284.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6284.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6287 = mobl.ref(null);
    
    
    var tmp6286 = mobl.ref(null);
    
    
    var tmp6285 = mobl.ref(null);
    
    var nodes2253 = $("<span>");
    node1332.append(nodes2253);
    subs__.addSub((mobl.block)(tmp6284, tmp6285, tmp6286, tmp6287, function(_, callback) {
      var root2833 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2254 = $("<span>");
      root2833.append(nodes2254);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2834 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1343 = $("<div>");
        node1343.attr('id', "flash__Reminder");
        
        var ref1016 = mobl.ref(ui.flash);
        if(ref1016.get() !== null) {
          node1343.attr('class', ref1016.get());
          subs__.addSub(ref1016.addEventListener('change', function(_, ref, val) {
            node1343.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1016.rebind());
        
        
        var tmp6272 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Reminder").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6271 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp6277 = mobl.ref(null);
        
        
        var tmp6276 = mobl.ref(null);
        
        
        var tmp6275 = mobl.ref(null);
        
        
        var tmp6274 = mobl.ref(null);
        
        
        var tmp6273 = mobl.ref(null);
        
        var nodes2256 = $("<span>");
        node1343.append(nodes2256);
        subs__.addSub((ui.image)(tmp6271, tmp6273, tmp6274, tmp6272, tmp6275, tmp6276, tmp6277, function(_, callback) {
          var root2836 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2836); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2256;
          nodes2256 = node.contents();
          oldNodes.replaceWith(nodes2256);
        }));
        
        var node1344 = $("<span>");
        
        var ref1015 = mobl.ref(ui.transition);
        if(ref1015.get() !== null) {
          node1344.attr('class', ref1015.get());
          subs__.addSub(ref1015.addEventListener('change', function(_, ref, val) {
            node1344.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1015.rebind());
        
        var val898 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val898 !== null) {
          subs__.addSub(mobl.domBind(node1344, 'mousedown', val898));
        }
        
        var val899 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val899 !== null) {
          subs__.addSub(mobl.domBind(node1344, 'mouseup', val899));
        }
        
        
        var tmp6283 = mobl.ref(null);
        
        
        var tmp6282 = mobl.ref(null);
        
        
        var tmp6281 = mobl.ref(null);
        
        
        var tmp6280 = mobl.ref(null);
        
        
        var tmp6279 = mobl.ref(null);
        
        
        var tmp6278 = mobl.ref(null);
        
        var nodes2257 = $("<span>");
        node1344.append(nodes2257);
        subs__.addSub((ui.image)(transitionImage, tmp6278, tmp6279, tmp6280, tmp6281, tmp6282, tmp6283, function(_, callback) {
          var root2837 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2837); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2257;
          nodes2257 = node.contents();
          oldNodes.replaceWith(nodes2257);
        }));
        node1343.append(node1344);
        
        var node1345 = $("<span>");
        node1345.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node1345.append("Reminders saved");
        node1343.append(node1345);
        root2834.append(node1343);
        var nodes2255 = $("<span>");
        root2834.append(nodes2255);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root2835 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2835); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2255;
          nodes2255 = node.contents();
          oldNodes.replaceWith(nodes2255);
        }));
        callback(root2834); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2254;
        nodes2254 = node.contents();
        oldNodes.replaceWith(nodes2254);
      }));
      callback(root2833); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2253;
      nodes2253 = node.contents();
      oldNodes.replaceWith(nodes2253);
    }));
    
    var tmp6301 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6301.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6301.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6301.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6304 = mobl.ref(null);
    
    
    var tmp6303 = mobl.ref(null);
    
    
    var tmp6302 = mobl.ref(null);
    
    var nodes2258 = $("<span>");
    node1332.append(nodes2258);
    subs__.addSub((mobl.block)(tmp6301, tmp6302, tmp6303, tmp6304, function(_, callback) {
      var root2838 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2259 = $("<span>");
      root2838.append(nodes2259);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2839 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1346 = $("<div>");
        node1346.attr('id', "flash__Life");
        
        var ref1018 = mobl.ref(ui.flash);
        if(ref1018.get() !== null) {
          node1346.attr('class', ref1018.get());
          subs__.addSub(ref1018.addEventListener('change', function(_, ref, val) {
            node1346.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1018.rebind());
        
        
        var tmp6289 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Life").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6288 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp6294 = mobl.ref(null);
        
        
        var tmp6293 = mobl.ref(null);
        
        
        var tmp6292 = mobl.ref(null);
        
        
        var tmp6291 = mobl.ref(null);
        
        
        var tmp6290 = mobl.ref(null);
        
        var nodes2261 = $("<span>");
        node1346.append(nodes2261);
        subs__.addSub((ui.image)(tmp6288, tmp6290, tmp6291, tmp6289, tmp6292, tmp6293, tmp6294, function(_, callback) {
          var root2841 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2841); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2261;
          nodes2261 = node.contents();
          oldNodes.replaceWith(nodes2261);
        }));
        
        var node1347 = $("<span>");
        
        var ref1017 = mobl.ref(ui.transition);
        if(ref1017.get() !== null) {
          node1347.attr('class', ref1017.get());
          subs__.addSub(ref1017.addEventListener('change', function(_, ref, val) {
            node1347.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1017.rebind());
        
        var val900 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val900 !== null) {
          subs__.addSub(mobl.domBind(node1347, 'mousedown', val900));
        }
        
        var val901 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val901 !== null) {
          subs__.addSub(mobl.domBind(node1347, 'mouseup', val901));
        }
        
        
        var tmp6300 = mobl.ref(null);
        
        
        var tmp6299 = mobl.ref(null);
        
        
        var tmp6298 = mobl.ref(null);
        
        
        var tmp6297 = mobl.ref(null);
        
        
        var tmp6296 = mobl.ref(null);
        
        
        var tmp6295 = mobl.ref(null);
        
        var nodes2262 = $("<span>");
        node1347.append(nodes2262);
        subs__.addSub((ui.image)(transitionImage, tmp6295, tmp6296, tmp6297, tmp6298, tmp6299, tmp6300, function(_, callback) {
          var root2842 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2842); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2262;
          nodes2262 = node.contents();
          oldNodes.replaceWith(nodes2262);
        }));
        node1346.append(node1347);
        
        var node1348 = $("<span>");
        node1348.attr('style', "position: absolute; color: white; margin-left: -210px; margin-top: 202px;");
        
        
        node1348.append("Events saved");
        node1346.append(node1348);
        root2839.append(node1346);
        var nodes2260 = $("<span>");
        root2839.append(nodes2260);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root2840 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2840); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2260;
          nodes2260 = node.contents();
          oldNodes.replaceWith(nodes2260);
        }));
        callback(root2839); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2259;
        nodes2259 = node.contents();
        oldNodes.replaceWith(nodes2259);
      }));
      callback(root2838); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2258;
      nodes2258 = node.contents();
      oldNodes.replaceWith(nodes2258);
    }));
    
    var tmp6318 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6318.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6318.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6318.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6321 = mobl.ref(null);
    
    
    var tmp6320 = mobl.ref(null);
    
    
    var tmp6319 = mobl.ref(null);
    
    var nodes2263 = $("<span>");
    node1332.append(nodes2263);
    subs__.addSub((mobl.block)(tmp6318, tmp6319, tmp6320, tmp6321, function(_, callback) {
      var root2843 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2264 = $("<span>");
      root2843.append(nodes2264);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2844 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1349 = $("<div>");
        node1349.attr('id', "flash__Moodometer");
        
        var ref1020 = mobl.ref(ui.flash);
        if(ref1020.get() !== null) {
          node1349.attr('class', ref1020.get());
          subs__.addSub(ref1020.addEventListener('change', function(_, ref, val) {
            node1349.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1020.rebind());
        
        
        var tmp6306 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = mobl.$("#flash__Moodometer").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6305 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp6311 = mobl.ref(null);
        
        
        var tmp6310 = mobl.ref(null);
        
        
        var tmp6309 = mobl.ref(null);
        
        
        var tmp6308 = mobl.ref(null);
        
        
        var tmp6307 = mobl.ref(null);
        
        var nodes2266 = $("<span>");
        node1349.append(nodes2266);
        subs__.addSub((ui.image)(tmp6305, tmp6307, tmp6308, tmp6306, tmp6309, tmp6310, tmp6311, function(_, callback) {
          var root2846 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2846); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2266;
          nodes2266 = node.contents();
          oldNodes.replaceWith(nodes2266);
        }));
        
        var node1350 = $("<span>");
        
        var ref1019 = mobl.ref(ui.transition);
        if(ref1019.get() !== null) {
          node1350.attr('class', ref1019.get());
          subs__.addSub(ref1019.addEventListener('change', function(_, ref, val) {
            node1350.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1019.rebind());
        
        var val902 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val902 !== null) {
          subs__.addSub(mobl.domBind(node1350, 'mousedown', val902));
        }
        
        var val903 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val903 !== null) {
          subs__.addSub(mobl.domBind(node1350, 'mouseup', val903));
        }
        
        
        var tmp6317 = mobl.ref(null);
        
        
        var tmp6316 = mobl.ref(null);
        
        
        var tmp6315 = mobl.ref(null);
        
        
        var tmp6314 = mobl.ref(null);
        
        
        var tmp6313 = mobl.ref(null);
        
        
        var tmp6312 = mobl.ref(null);
        
        var nodes2267 = $("<span>");
        node1350.append(nodes2267);
        subs__.addSub((ui.image)(transitionImage, tmp6312, tmp6313, tmp6314, tmp6315, tmp6316, tmp6317, function(_, callback) {
          var root2847 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2847); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2267;
          nodes2267 = node.contents();
          oldNodes.replaceWith(nodes2267);
        }));
        node1349.append(node1350);
        
        var node1351 = $("<span>");
        node1351.attr('style', "position: absolute; color: white; margin-left: -203px; margin-top: 202px;");
        
        
        node1351.append("Mood saved");
        node1349.append(node1351);
        root2844.append(node1349);
        var nodes2265 = $("<span>");
        root2844.append(nodes2265);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root2845 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2845); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2265;
          nodes2265 = node.contents();
          oldNodes.replaceWith(nodes2265);
        }));
        callback(root2844); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2264;
        nodes2264 = node.contents();
        oldNodes.replaceWith(nodes2264);
      }));
      callback(root2843); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2263;
      nodes2263 = node.contents();
      oldNodes.replaceWith(nodes2263);
    }));
    
    var tmp6322 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp6322.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp6322.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp6322.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp6325 = mobl.ref(null);
    
    
    var tmp6324 = mobl.ref(null);
    
    
    var tmp6323 = mobl.ref(null);
    
    var nodes2268 = $("<span>");
    node1332.append(nodes2268);
    subs__.addSub((mobl.block)(tmp6322, tmp6323, tmp6324, tmp6325, function(_, callback) {
      var root2848 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2269 = $("<span>");
      root2848.append(nodes2269);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2849 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes2270 = $("<span>");
        root2849.append(nodes2270);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root2850 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2850); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2270;
          nodes2270 = node.contents();
          oldNodes.replaceWith(nodes2270);
        }));
        callback(root2849); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2269;
        nodes2269 = node.contents();
        oldNodes.replaceWith(nodes2269);
      }));
      callback(root2848); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2268;
      nodes2268 = node.contents();
      oldNodes.replaceWith(nodes2268);
    }));
    root2812.append(node1332);
    
    var tmp6358 = mobl.ref(null);
    
    
    var tmp6357 = mobl.ref(null);
    
    
    var tmp6356 = mobl.ref(null);
    
    var nodes2234 = $("<span>");
    root2812.append(nodes2234);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp6356, tmp6357, tmp6358, function(_, callback) {
      var root2814 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1333 = $("<span>");
      node1333.attr('id', "placeholder");
      node1333.attr('style', "display: none;");
      
      
      var tmp6334 = mobl.ref(false);
      
      
      var tmp6333 = mobl.ref(null);
      
      
      var tmp6332 = mobl.ref(null);
      
      var nodes2239 = $("<span>");
      node1333.append(nodes2239);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6332, tmp6333, tmp6334, function(_, callback) {
        var root2819 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1338 = $("<span>");
        node1338.attr('style', "margin-left: 57px;");
        
        var val896 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val896 !== null) {
          subs__.addSub(mobl.domBind(node1338, 'mousedown', val896));
        }
        
        var val897 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val897 !== null) {
          subs__.addSub(mobl.domBind(node1338, 'mouseout', val897));
        }
        
        
        var tmp6326 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#placeholder").hide();
                             var result__ = mobl.$("#navigators").show();
                             var result__ = lastTabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6331 = mobl.ref(null);
        
        
        var tmp6330 = mobl.ref(null);
        
        
        var tmp6329 = mobl.ref(null);
        
        
        var tmp6328 = mobl.ref(null);
        
        
        var tmp6327 = mobl.ref(null);
        
        var nodes2240 = $("<span>");
        node1338.append(nodes2240);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp6327, tmp6328, tmp6326, tmp6329, tmp6330, tmp6331, function(_, callback) {
          var root2820 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2820); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2240;
          nodes2240 = node.contents();
          oldNodes.replaceWith(nodes2240);
        }));
        root2819.append(node1338);
        callback(root2819); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2239;
        nodes2239 = node.contents();
        oldNodes.replaceWith(nodes2239);
      }));
      root2814.append(node1333);
      
      var node1334 = $("<span>");
      node1334.attr('id', "navigators");
      
      
      var tmp6355 = mobl.ref(false);
      
      
      var tmp6354 = mobl.ref(null);
      
      
      var tmp6353 = mobl.ref(null);
      
      var nodes2235 = $("<span>");
      node1334.append(nodes2235);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6353, tmp6354, tmp6355, function(_, callback) {
        var root2815 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1335 = $("<span>");
        
        var val894 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val894 !== null) {
          subs__.addSub(mobl.domBind(node1335, 'mousedown', val894));
        }
        
        var val895 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val895 !== null) {
          subs__.addSub(mobl.domBind(node1335, 'mouseup', val895));
        }
        
        
        var tmp6335 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.prev(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6340 = mobl.ref(null);
        
        
        var tmp6339 = mobl.ref(null);
        
        
        var tmp6338 = mobl.ref(null);
        
        
        var tmp6337 = mobl.ref(null);
        
        
        var tmp6336 = mobl.ref(null);
        
        var nodes2238 = $("<span>");
        node1335.append(nodes2238);
        subs__.addSub((ui.image)(backButtonImage, tmp6336, tmp6337, tmp6335, tmp6338, tmp6339, tmp6340, function(_, callback) {
          var root2818 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2818); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2238;
          nodes2238 = node.contents();
          oldNodes.replaceWith(nodes2238);
        }));
        root2815.append(node1335);
        
        var node1336 = $("<span>");
        
        var ref1014 = mobl.ref(ui.stressGraphButton);
        if(ref1014.get() !== null) {
          node1336.attr('class', ref1014.get());
          subs__.addSub(ref1014.addEventListener('change', function(_, ref, val) {
            node1336.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1014.rebind());
        
        var val890 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val890 !== null) {
          subs__.addSub(mobl.domBind(node1336, 'mouseover', val890));
        }
        
        var val891 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val891 !== null) {
          subs__.addSub(mobl.domBind(node1336, 'mouseout', val891));
        }
        
        var val892 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val892 !== null) {
          subs__.addSub(mobl.domBind(node1336, 'mousedown', val892));
        }
        
        var val893 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val893 !== null) {
          subs__.addSub(mobl.domBind(node1336, 'mouseup', val893));
        }
        
        
        var tmp6341 = mobl.ref(function(event, callback) {
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
                             models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll448) {
                               coll448 = coll448.reverse();
                               function processOne60() {
                                 var mood;
                                 mood = coll448.pop();
                                 var result__ = data + mood.happy + ",";
                                 data = result__;
                                 
                                 if(coll448.length > 0) processOne60(); else rest60();
                                 
                               }
                               function rest60() {
                                 var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                                 moods.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll448.length > 0) processOne60(); else rest60();
                             });
                             
                           });
        
        
        var tmp6346 = mobl.ref(null);
        
        
        var tmp6345 = mobl.ref(null);
        
        
        var tmp6344 = mobl.ref(null);
        
        
        var tmp6343 = mobl.ref(null);
        
        
        var tmp6342 = mobl.ref(null);
        
        var nodes2237 = $("<span>");
        node1336.append(nodes2237);
        subs__.addSub((ui.image)(stressGraphImage, tmp6342, tmp6343, tmp6341, tmp6344, tmp6345, tmp6346, function(_, callback) {
          var root2817 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2817); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2237;
          nodes2237 = node.contents();
          oldNodes.replaceWith(nodes2237);
        }));
        root2815.append(node1336);
        
        var node1337 = $("<span>");
        
        var val888 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val888 !== null) {
          subs__.addSub(mobl.domBind(node1337, 'mousedown', val888));
        }
        
        var val889 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val889 !== null) {
          subs__.addSub(mobl.domBind(node1337, 'mouseup', val889));
        }
        
        
        var tmp6347 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.next(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6352 = mobl.ref(null);
        
        
        var tmp6351 = mobl.ref(null);
        
        
        var tmp6350 = mobl.ref(null);
        
        
        var tmp6349 = mobl.ref(null);
        
        
        var tmp6348 = mobl.ref(null);
        
        var nodes2236 = $("<span>");
        node1337.append(nodes2236);
        subs__.addSub((ui.image)(nextButtonImage, tmp6348, tmp6349, tmp6347, tmp6350, tmp6351, tmp6352, function(_, callback) {
          var root2816 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2816); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2236;
          nodes2236 = node.contents();
          oldNodes.replaceWith(nodes2236);
        }));
        root2815.append(node1337);
        callback(root2815); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2235;
        nodes2235 = node.contents();
        oldNodes.replaceWith(nodes2235);
      }));
      root2814.append(node1334);
      callback(root2814); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2234;
      nodes2234 = node.contents();
      oldNodes.replaceWith(nodes2234);
    }));
    
    var tmp6405 = mobl.ref(null);
    
    
    var tmp6404 = mobl.ref(null);
    
    
    var tmp6403 = mobl.ref(null);
    
    var nodes2241 = $("<span>");
    root2812.append(nodes2241);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp6403, tmp6404, tmp6405, function(_, callback) {
      var root2821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1339 = $("<span>");
      node1339.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      
      var tmp6367 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp6367.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp6367.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp6367.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp6366 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Reminder";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp6369 = mobl.ref(null);
      
      
      var tmp6368 = mobl.ref(null);
      
      var nodes2248 = $("<span>");
      node1339.append(nodes2248);
      subs__.addSub((mobl.span)(tmp6367, tmp6368, tmp6366, tmp6369, function(_, callback) {
        var root2828 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6359 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp6359.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        
        var tmp6365 = mobl.ref(null);
        
        
        var tmp6364 = mobl.ref(null);
        
        
        var tmp6363 = mobl.ref(null);
        
        
        var tmp6362 = mobl.ref(null);
        
        
        var tmp6361 = mobl.ref(null);
        
        
        var tmp6360 = mobl.ref(null);
        
        var nodes2249 = $("<span>");
        root2828.append(nodes2249);
        subs__.addSub((ui.image)(tmp6359, tmp6360, tmp6361, tmp6362, tmp6363, tmp6364, tmp6365, function(_, callback) {
          var root2829 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2829); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2249;
          nodes2249 = node.contents();
          oldNodes.replaceWith(nodes2249);
        }));
        callback(root2828); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2248;
        nodes2248 = node.contents();
        oldNodes.replaceWith(nodes2248);
      }));
      root2821.append(node1339);
      
      var node1340 = $("<span>");
      node1340.attr('style', "position: absolute; margin-left: 70px;");
      
      
      var tmp6378 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp6378.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp6378.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp6378.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp6377 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Life";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp6380 = mobl.ref(null);
      
      
      var tmp6379 = mobl.ref(null);
      
      var nodes2246 = $("<span>");
      node1340.append(nodes2246);
      subs__.addSub((mobl.span)(tmp6378, tmp6379, tmp6377, tmp6380, function(_, callback) {
        var root2826 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6370 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp6370.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        
        var tmp6376 = mobl.ref(null);
        
        
        var tmp6375 = mobl.ref(null);
        
        
        var tmp6374 = mobl.ref(null);
        
        
        var tmp6373 = mobl.ref(null);
        
        
        var tmp6372 = mobl.ref(null);
        
        
        var tmp6371 = mobl.ref(null);
        
        var nodes2247 = $("<span>");
        root2826.append(nodes2247);
        subs__.addSub((ui.image)(tmp6370, tmp6371, tmp6372, tmp6373, tmp6374, tmp6375, tmp6376, function(_, callback) {
          var root2827 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2827); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2247;
          nodes2247 = node.contents();
          oldNodes.replaceWith(nodes2247);
        }));
        callback(root2826); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2246;
        nodes2246 = node.contents();
        oldNodes.replaceWith(nodes2246);
      }));
      root2821.append(node1340);
      
      var node1341 = $("<span>");
      node1341.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      
      var tmp6389 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp6389.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp6389.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp6389.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp6388 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Moodometer";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp6391 = mobl.ref(null);
      
      
      var tmp6390 = mobl.ref(null);
      
      var nodes2244 = $("<span>");
      node1341.append(nodes2244);
      subs__.addSub((mobl.span)(tmp6389, tmp6390, tmp6388, tmp6391, function(_, callback) {
        var root2824 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6381 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp6381.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        
        var tmp6387 = mobl.ref(null);
        
        
        var tmp6386 = mobl.ref(null);
        
        
        var tmp6385 = mobl.ref(null);
        
        
        var tmp6384 = mobl.ref(null);
        
        
        var tmp6383 = mobl.ref(null);
        
        
        var tmp6382 = mobl.ref(null);
        
        var nodes2245 = $("<span>");
        root2824.append(nodes2245);
        subs__.addSub((ui.image)(tmp6381, tmp6382, tmp6383, tmp6384, tmp6385, tmp6386, tmp6387, function(_, callback) {
          var root2825 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2825); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2245;
          nodes2245 = node.contents();
          oldNodes.replaceWith(nodes2245);
        }));
        callback(root2824); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2244;
        nodes2244 = node.contents();
        oldNodes.replaceWith(nodes2244);
      }));
      root2821.append(node1341);
      
      var node1342 = $("<span>");
      node1342.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      
      var tmp6400 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp6400.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp6400.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp6400.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp6399 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Meditate";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp6402 = mobl.ref(null);
      
      
      var tmp6401 = mobl.ref(null);
      
      var nodes2242 = $("<span>");
      node1342.append(nodes2242);
      subs__.addSub((mobl.span)(tmp6400, tmp6401, tmp6399, tmp6402, function(_, callback) {
        var root2822 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6392 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp6392.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        
        var tmp6398 = mobl.ref(null);
        
        
        var tmp6397 = mobl.ref(null);
        
        
        var tmp6396 = mobl.ref(null);
        
        
        var tmp6395 = mobl.ref(null);
        
        
        var tmp6394 = mobl.ref(null);
        
        
        var tmp6393 = mobl.ref(null);
        
        var nodes2243 = $("<span>");
        root2822.append(nodes2243);
        subs__.addSub((ui.image)(tmp6392, tmp6393, tmp6394, tmp6395, tmp6396, tmp6397, tmp6398, function(_, callback) {
          var root2823 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2823); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2243;
          nodes2243 = node.contents();
          oldNodes.replaceWith(nodes2243);
        }));
        callback(root2822); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2242;
        nodes2242 = node.contents();
        oldNodes.replaceWith(nodes2242);
      }));
      root2821.append(node1342);
      callback(root2821); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2241;
      nodes2241 = node.contents();
      oldNodes.replaceWith(nodes2241);
    }));
    callback(root2812); return subs__;
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2232;
    nodes2232 = node.contents();
    oldNodes.replaceWith(nodes2232);
  }));
  callback(root2811); return subs__;
  
  return subs__;
};
