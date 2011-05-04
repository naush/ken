mobl.provides('ken');
mobl.provides('controls');
mobl.provides('models');
mobl.provides('controls.remindme');
mobl.provides('controls.life');
mobl.provides('controls.moodometer');
mobl.provides('controls.meditate');
mobl.provides('models.moods');
mobl.provides('ken');
mobl.provides('mobl');
mobl.provides('ui');
persistence.debug = false;ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll64 = mobl.range(0, tabs.length);
  var length12 = coll64.length;
  for(var i27 = 0; i27 < length12; i27++) {
    var index;
    index = coll64.get(i27);
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
  var root682 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp2436 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2435 = mobl.ref(result__);
  
  var result__ = null;
  var tmp2434 = mobl.ref(result__);
  
  var nodes610 = $("<span>");
  root682.append(nodes610);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp2434, tmp2435, tmp2436, function(_, callback) {
    var root683 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var stressGraphImage = mobl.ref("resources/images/view_stressgraph_off.png");
    
    var stressGraphImageOn = mobl.ref("resources/images/view_stressgraph_on.png");
    
    var backButtonImage = mobl.ref("resources/images/back.png");
    
    var nextButtonImage = mobl.ref("resources/images/next.png");
    
    var transitionImage = mobl.ref("resources/images/transition_screen.png");
    
    var moods = mobl.ref("");
    
    var backgroundImage = mobl.ref("resources/images/background_lastscreen.png");
    
    var beginSetupImage = mobl.ref("resources/images/begin_setup.png");
    
    var activeTabName = mobl.ref("Welcome");
    
    var lastTabName = mobl.ref("");
    
    var s = mobl.ref("");
    var result__ = ken.header(activeTabName.get());
    var tmp2272 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp2272.set(ken.header(activeTabName.get()));
    }));
    
    var result__ = null;
    var tmp2273 = mobl.ref(result__);
    
    var nodes611 = $("<span>");
    root683.append(nodes611);
    subs__.addSub((ui.customHeader)(tmp2272, tmp2273, function(_, callback) {
      var root684 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root684); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes611;
      nodes611 = node.contents();
      oldNodes.replaceWith(nodes611);
    }));
    
    var node333 = $("<div>");
    node333.attr('style', "height: 300px; margin-left: 25px;");
    
    var result__ = activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp2287 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp2287.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp2287.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp2287.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp2290 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2289 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2288 = mobl.ref(result__);
    
    var nodes628 = $("<span>");
    node333.append(nodes628);
    subs__.addSub((mobl.block)(tmp2287, tmp2288, tmp2289, tmp2290, function(_, callback) {
      var root701 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node344 = $("<span>");
      node344.attr('style', "position: absolute; color: white; margin-left: -25px; margin-top: -61px;");
      
      var result__ = "resources/images/welcome.png";
      var tmp2274 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2280 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2279 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2278 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2277 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2276 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2275 = mobl.ref(result__);
      
      var nodes629 = $("<span>");
      node344.append(nodes629);
      subs__.addSub((ui.image)(tmp2274, tmp2275, tmp2276, tmp2277, tmp2278, tmp2279, tmp2280, function(_, callback) {
        var root702 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root702); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes629;
        nodes629 = node.contents();
        oldNodes.replaceWith(nodes629);
      }));
      
      var node345 = $("<span>");
      node345.attr('style', "float:left; position:absolute; margin-top:286px; margin-left:-289px;");
      
      var val265 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup_pressed.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val265 !== null) {
        subs__.addSub(mobl.domBind(node345, 'mousedown', val265));
      }
      
      var val266 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val266 !== null) {
        subs__.addSub(mobl.domBind(node345, 'mouseup', val266));
      }
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "Reminder";
                       activeTabName.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2281 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2286 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2285 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2284 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2283 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2282 = mobl.ref(result__);
      
      var nodes630 = $("<span>");
      node345.append(nodes630);
      subs__.addSub((ui.image)(beginSetupImage, tmp2282, tmp2283, tmp2281, tmp2284, tmp2285, tmp2286, function(_, callback) {
        var root703 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root703); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes630;
        nodes630 = node.contents();
        oldNodes.replaceWith(nodes630);
      }));
      node344.append(node345);
      root701.append(node344);
      callback(root701); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes628;
      nodes628 = node.contents();
      oldNodes.replaceWith(nodes628);
    }));
    var result__ = activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp2298 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp2298.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp2298.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp2298.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp2301 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2300 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2299 = mobl.ref(result__);
    
    var nodes631 = $("<span>");
    node333.append(nodes631);
    subs__.addSub((mobl.block)(tmp2298, tmp2299, tmp2300, tmp2301, function(_, callback) {
      var root704 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes632 = $("<span>");
      root704.append(nodes632);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root705 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = "http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1";
        var tmp2291 = mobl.ref(result__);
        subs__.addSub(moods.addEventListener('change', function() {
          tmp2291.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        var result__ = null;
        var tmp2297 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2296 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2295 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2294 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2293 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2292 = mobl.ref(result__);
        
        var nodes633 = $("<span>");
        root705.append(nodes633);
        subs__.addSub((ui.image)(tmp2291, tmp2292, tmp2293, tmp2294, tmp2295, tmp2296, tmp2297, function(_, callback) {
          var root706 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root706); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes633;
          nodes633 = node.contents();
          oldNodes.replaceWith(nodes633);
        }));
        callback(root705); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes632;
        nodes632 = node.contents();
        oldNodes.replaceWith(nodes632);
      }));
      callback(root704); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes631;
      nodes631 = node.contents();
      oldNodes.replaceWith(nodes631);
    }));
    var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp2314 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp2314.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp2314.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp2314.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp2317 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2316 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2315 = mobl.ref(result__);
    
    var nodes634 = $("<span>");
    node333.append(nodes634);
    subs__.addSub((mobl.block)(tmp2314, tmp2315, tmp2316, tmp2317, function(_, callback) {
      var root707 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes635 = $("<span>");
      root707.append(nodes635);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root708 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node346 = $("<div>");
        node346.attr('id', "flash__Reminder");
        
        var ref153 = mobl.ref(ui.flash);
        if(ref153.get() !== null) {
          node346.attr('class', ref153.get());
          subs__.addSub(ref153.addEventListener('change', function(_, ref, val) {
            node346.attr('class', val);
          }));
          
        }
        subs__.addSub(ref153.rebind());
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Reminder").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2302 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2307 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2306 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2305 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2304 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2303 = mobl.ref(result__);
        
        var nodes637 = $("<span>");
        node346.append(nodes637);
        subs__.addSub((ui.image)(backgroundImage, tmp2303, tmp2304, tmp2302, tmp2305, tmp2306, tmp2307, function(_, callback) {
          var root710 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root710); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes637;
          nodes637 = node.contents();
          oldNodes.replaceWith(nodes637);
        }));
        
        var node347 = $("<span>");
        
        var ref152 = mobl.ref(ui.transition);
        if(ref152.get() !== null) {
          node347.attr('class', ref152.get());
          subs__.addSub(ref152.addEventListener('change', function(_, ref, val) {
            node347.attr('class', val);
          }));
          
        }
        subs__.addSub(ref152.rebind());
        
        var val267 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val267 !== null) {
          subs__.addSub(mobl.domBind(node347, 'mousedown', val267));
        }
        
        var val268 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val268 !== null) {
          subs__.addSub(mobl.domBind(node347, 'mouseup', val268));
        }
        
        var result__ = null;
        var tmp2313 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2312 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2311 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2310 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2309 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2308 = mobl.ref(result__);
        
        var nodes638 = $("<span>");
        node347.append(nodes638);
        subs__.addSub((ui.image)(transitionImage, tmp2308, tmp2309, tmp2310, tmp2311, tmp2312, tmp2313, function(_, callback) {
          var root711 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root711); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes638;
          nodes638 = node.contents();
          oldNodes.replaceWith(nodes638);
        }));
        node346.append(node347);
        
        var node348 = $("<span>");
        node348.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node348.append("Reminders saved");
        node346.append(node348);
        root708.append(node346);
        var nodes636 = $("<span>");
        root708.append(nodes636);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root709 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root709); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes636;
          nodes636 = node.contents();
          oldNodes.replaceWith(nodes636);
        }));
        callback(root708); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes635;
        nodes635 = node.contents();
        oldNodes.replaceWith(nodes635);
      }));
      callback(root707); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes634;
      nodes634 = node.contents();
      oldNodes.replaceWith(nodes634);
    }));
    var result__ = activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp2330 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp2330.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp2330.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp2330.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp2333 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2332 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2331 = mobl.ref(result__);
    
    var nodes639 = $("<span>");
    node333.append(nodes639);
    subs__.addSub((mobl.block)(tmp2330, tmp2331, tmp2332, tmp2333, function(_, callback) {
      var root712 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes640 = $("<span>");
      root712.append(nodes640);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root713 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node349 = $("<div>");
        node349.attr('id', "flash__Life");
        
        var ref155 = mobl.ref(ui.flash);
        if(ref155.get() !== null) {
          node349.attr('class', ref155.get());
          subs__.addSub(ref155.addEventListener('change', function(_, ref, val) {
            node349.attr('class', val);
          }));
          
        }
        subs__.addSub(ref155.rebind());
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Life").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2318 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2323 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2322 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2321 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2320 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2319 = mobl.ref(result__);
        
        var nodes642 = $("<span>");
        node349.append(nodes642);
        subs__.addSub((ui.image)(backgroundImage, tmp2319, tmp2320, tmp2318, tmp2321, tmp2322, tmp2323, function(_, callback) {
          var root715 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root715); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes642;
          nodes642 = node.contents();
          oldNodes.replaceWith(nodes642);
        }));
        
        var node350 = $("<span>");
        
        var ref154 = mobl.ref(ui.transition);
        if(ref154.get() !== null) {
          node350.attr('class', ref154.get());
          subs__.addSub(ref154.addEventListener('change', function(_, ref, val) {
            node350.attr('class', val);
          }));
          
        }
        subs__.addSub(ref154.rebind());
        
        var val269 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val269 !== null) {
          subs__.addSub(mobl.domBind(node350, 'mousedown', val269));
        }
        
        var val270 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val270 !== null) {
          subs__.addSub(mobl.domBind(node350, 'mouseup', val270));
        }
        
        var result__ = null;
        var tmp2329 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2328 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2327 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2326 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2325 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2324 = mobl.ref(result__);
        
        var nodes643 = $("<span>");
        node350.append(nodes643);
        subs__.addSub((ui.image)(transitionImage, tmp2324, tmp2325, tmp2326, tmp2327, tmp2328, tmp2329, function(_, callback) {
          var root716 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root716); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes643;
          nodes643 = node.contents();
          oldNodes.replaceWith(nodes643);
        }));
        node349.append(node350);
        
        var node351 = $("<span>");
        node351.attr('style', "position: absolute; color: white; margin-left: -210px; margin-top: 202px;");
        
        
        node351.append("Events saved");
        node349.append(node351);
        root713.append(node349);
        var nodes641 = $("<span>");
        root713.append(nodes641);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root714 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root714); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes641;
          nodes641 = node.contents();
          oldNodes.replaceWith(nodes641);
        }));
        callback(root713); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes640;
        nodes640 = node.contents();
        oldNodes.replaceWith(nodes640);
      }));
      callback(root712); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes639;
      nodes639 = node.contents();
      oldNodes.replaceWith(nodes639);
    }));
    var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp2346 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp2346.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp2346.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp2346.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp2349 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2348 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2347 = mobl.ref(result__);
    
    var nodes644 = $("<span>");
    node333.append(nodes644);
    subs__.addSub((mobl.block)(tmp2346, tmp2347, tmp2348, tmp2349, function(_, callback) {
      var root717 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes645 = $("<span>");
      root717.append(nodes645);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root718 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node352 = $("<div>");
        node352.attr('id', "flash__Moodometer");
        
        var ref157 = mobl.ref(ui.flash);
        if(ref157.get() !== null) {
          node352.attr('class', ref157.get());
          subs__.addSub(ref157.addEventListener('change', function(_, ref, val) {
            node352.attr('class', val);
          }));
          
        }
        subs__.addSub(ref157.rebind());
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = mobl.$("#flash__Moodometer").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2334 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2339 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2338 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2337 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2336 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2335 = mobl.ref(result__);
        
        var nodes647 = $("<span>");
        node352.append(nodes647);
        subs__.addSub((ui.image)(backgroundImage, tmp2335, tmp2336, tmp2334, tmp2337, tmp2338, tmp2339, function(_, callback) {
          var root720 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root720); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes647;
          nodes647 = node.contents();
          oldNodes.replaceWith(nodes647);
        }));
        
        var node353 = $("<span>");
        
        var ref156 = mobl.ref(ui.transition);
        if(ref156.get() !== null) {
          node353.attr('class', ref156.get());
          subs__.addSub(ref156.addEventListener('change', function(_, ref, val) {
            node353.attr('class', val);
          }));
          
        }
        subs__.addSub(ref156.rebind());
        
        var val271 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val271 !== null) {
          subs__.addSub(mobl.domBind(node353, 'mousedown', val271));
        }
        
        var val272 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val272 !== null) {
          subs__.addSub(mobl.domBind(node353, 'mouseup', val272));
        }
        
        var result__ = null;
        var tmp2345 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2344 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2343 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2342 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2341 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2340 = mobl.ref(result__);
        
        var nodes648 = $("<span>");
        node353.append(nodes648);
        subs__.addSub((ui.image)(transitionImage, tmp2340, tmp2341, tmp2342, tmp2343, tmp2344, tmp2345, function(_, callback) {
          var root721 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root721); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes648;
          nodes648 = node.contents();
          oldNodes.replaceWith(nodes648);
        }));
        node352.append(node353);
        
        var node354 = $("<span>");
        node354.attr('style', "position: absolute; color: white; margin-left: -203px; margin-top: 202px;");
        
        
        node354.append("Mood saved");
        node352.append(node354);
        root718.append(node352);
        var nodes646 = $("<span>");
        root718.append(nodes646);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root719 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root719); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes646;
          nodes646 = node.contents();
          oldNodes.replaceWith(nodes646);
        }));
        callback(root718); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes645;
        nodes645 = node.contents();
        oldNodes.replaceWith(nodes645);
      }));
      callback(root717); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes644;
      nodes644 = node.contents();
      oldNodes.replaceWith(nodes644);
    }));
    var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp2350 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp2350.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp2350.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp2350.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp2353 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2352 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2351 = mobl.ref(result__);
    
    var nodes649 = $("<span>");
    node333.append(nodes649);
    subs__.addSub((mobl.block)(tmp2350, tmp2351, tmp2352, tmp2353, function(_, callback) {
      var root722 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes650 = $("<span>");
      root722.append(nodes650);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root723 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes651 = $("<span>");
        root723.append(nodes651);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root724 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root724); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes651;
          nodes651 = node.contents();
          oldNodes.replaceWith(nodes651);
        }));
        callback(root723); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes650;
        nodes650 = node.contents();
        oldNodes.replaceWith(nodes650);
      }));
      callback(root722); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes649;
      nodes649 = node.contents();
      oldNodes.replaceWith(nodes649);
    }));
    root683.append(node333);
    var result__ = null;
    var tmp2386 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2385 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2384 = mobl.ref(result__);
    
    var nodes612 = $("<span>");
    root683.append(nodes612);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp2384, tmp2385, tmp2386, function(_, callback) {
      var root685 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node334 = $("<span>");
      node334.attr('id', "placeholder");
      node334.attr('style', "display: none;");
      
      var result__ = false;
      var tmp2362 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2361 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2360 = mobl.ref(result__);
      
      var nodes617 = $("<span>");
      node334.append(nodes617);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp2360, tmp2361, tmp2362, function(_, callback) {
        var root690 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node339 = $("<span>");
        node339.attr('style', "margin-left: 57px;");
        
        var val263 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val263 !== null) {
          subs__.addSub(mobl.domBind(node339, 'mousedown', val263));
        }
        
        var val264 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val264 !== null) {
          subs__.addSub(mobl.domBind(node339, 'mouseout', val264));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#placeholder").hide();
                         var result__ = mobl.$("#navigators").show();
                         var result__ = lastTabName.get();
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2354 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2359 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2358 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2357 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2356 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2355 = mobl.ref(result__);
        
        var nodes618 = $("<span>");
        node339.append(nodes618);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp2355, tmp2356, tmp2354, tmp2357, tmp2358, tmp2359, function(_, callback) {
          var root691 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root691); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes618;
          nodes618 = node.contents();
          oldNodes.replaceWith(nodes618);
        }));
        root690.append(node339);
        callback(root690); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes617;
        nodes617 = node.contents();
        oldNodes.replaceWith(nodes617);
      }));
      root685.append(node334);
      
      var node335 = $("<span>");
      node335.attr('id', "navigators");
      
      var result__ = false;
      var tmp2383 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2382 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2381 = mobl.ref(result__);
      
      var nodes613 = $("<span>");
      node335.append(nodes613);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp2381, tmp2382, tmp2383, function(_, callback) {
        var root686 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node336 = $("<span>");
        
        var val261 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val261 !== null) {
          subs__.addSub(mobl.domBind(node336, 'mousedown', val261));
        }
        
        var val262 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val262 !== null) {
          subs__.addSub(mobl.domBind(node336, 'mouseup', val262));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.prev(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2363 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2368 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2367 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2366 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2365 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2364 = mobl.ref(result__);
        
        var nodes616 = $("<span>");
        node336.append(nodes616);
        subs__.addSub((ui.image)(backButtonImage, tmp2364, tmp2365, tmp2363, tmp2366, tmp2367, tmp2368, function(_, callback) {
          var root689 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root689); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes616;
          nodes616 = node.contents();
          oldNodes.replaceWith(nodes616);
        }));
        root686.append(node336);
        
        var node337 = $("<span>");
        
        var ref151 = mobl.ref(ui.stressGraphButton);
        if(ref151.get() !== null) {
          node337.attr('class', ref151.get());
          subs__.addSub(ref151.addEventListener('change', function(_, ref, val) {
            node337.attr('class', val);
          }));
          
        }
        subs__.addSub(ref151.rebind());
        
        var val257 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val257 !== null) {
          subs__.addSub(mobl.domBind(node337, 'mouseover', val257));
        }
        
        var val258 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val258 !== null) {
          subs__.addSub(mobl.domBind(node337, 'mouseout', val258));
        }
        
        var val259 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val259 !== null) {
          subs__.addSub(mobl.domBind(node337, 'mousedown', val259));
        }
        
        var val260 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val260 !== null) {
          subs__.addSub(mobl.domBind(node337, 'mouseup', val260));
        }
        
        var result__ = function(event, callback) {
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
                         models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll65) {
                           coll65 = coll65.reverse();
                           function processOne22() {
                             var mood;
                             mood = coll65.pop();
                             var result__ = data + mood.happy + ",";
                             data = result__;
                             
                             if(coll65.length > 0) processOne22(); else rest22();
                             
                           }
                           function rest22() {
                             var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                             moods.set(result__);
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll65.length > 0) processOne22(); else rest22();
                         });
                         
                       };
        var tmp2369 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2374 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2373 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2372 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2371 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2370 = mobl.ref(result__);
        
        var nodes615 = $("<span>");
        node337.append(nodes615);
        subs__.addSub((ui.image)(stressGraphImage, tmp2370, tmp2371, tmp2369, tmp2372, tmp2373, tmp2374, function(_, callback) {
          var root688 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root688); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes615;
          nodes615 = node.contents();
          oldNodes.replaceWith(nodes615);
        }));
        root686.append(node337);
        
        var node338 = $("<span>");
        
        var val255 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val255 !== null) {
          subs__.addSub(mobl.domBind(node338, 'mousedown', val255));
        }
        
        var val256 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val256 !== null) {
          subs__.addSub(mobl.domBind(node338, 'mouseup', val256));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2375 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2380 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2379 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2378 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2377 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2376 = mobl.ref(result__);
        
        var nodes614 = $("<span>");
        node338.append(nodes614);
        subs__.addSub((ui.image)(nextButtonImage, tmp2376, tmp2377, tmp2375, tmp2378, tmp2379, tmp2380, function(_, callback) {
          var root687 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root687); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes614;
          nodes614 = node.contents();
          oldNodes.replaceWith(nodes614);
        }));
        root686.append(node338);
        callback(root686); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes613;
        nodes613 = node.contents();
        oldNodes.replaceWith(nodes613);
      }));
      root685.append(node335);
      callback(root685); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes612;
      nodes612 = node.contents();
      oldNodes.replaceWith(nodes612);
    }));
    var result__ = null;
    var tmp2433 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2432 = mobl.ref(result__);
    
    var result__ = null;
    var tmp2431 = mobl.ref(result__);
    
    var nodes619 = $("<span>");
    root683.append(nodes619);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp2431, tmp2432, tmp2433, function(_, callback) {
      var root692 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node340 = $("<span>");
      node340.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp2395 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp2395.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp2395.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp2395.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "Reminder";
                       activeTabName.set(result__);
                       var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                       var result__ = mobl.$("#sliders").show();
                       var result__ = mobl.$("#placeholder").hide();
                       var result__ = mobl.$("#navigators").show();
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2394 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2397 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2396 = mobl.ref(result__);
      
      var nodes626 = $("<span>");
      node340.append(nodes626);
      subs__.addSub((mobl.span)(tmp2395, tmp2396, tmp2394, tmp2397, function(_, callback) {
        var root699 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png";
        var tmp2387 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp2387.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        var result__ = null;
        var tmp2393 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2392 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2391 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2390 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2389 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2388 = mobl.ref(result__);
        
        var nodes627 = $("<span>");
        root699.append(nodes627);
        subs__.addSub((ui.image)(tmp2387, tmp2388, tmp2389, tmp2390, tmp2391, tmp2392, tmp2393, function(_, callback) {
          var root700 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root700); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes627;
          nodes627 = node.contents();
          oldNodes.replaceWith(nodes627);
        }));
        callback(root699); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes626;
        nodes626 = node.contents();
        oldNodes.replaceWith(nodes626);
      }));
      root692.append(node340);
      
      var node341 = $("<span>");
      node341.attr('style', "position: absolute; margin-left: 70px;");
      
      var result__ = activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp2406 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp2406.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp2406.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp2406.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "Life";
                       activeTabName.set(result__);
                       var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                       var result__ = mobl.$("#sliders").show();
                       var result__ = mobl.$("#placeholder").hide();
                       var result__ = mobl.$("#navigators").show();
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2405 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2408 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2407 = mobl.ref(result__);
      
      var nodes624 = $("<span>");
      node341.append(nodes624);
      subs__.addSub((mobl.span)(tmp2406, tmp2407, tmp2405, tmp2408, function(_, callback) {
        var root697 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png";
        var tmp2398 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp2398.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        var result__ = null;
        var tmp2404 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2403 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2402 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2401 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2400 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2399 = mobl.ref(result__);
        
        var nodes625 = $("<span>");
        root697.append(nodes625);
        subs__.addSub((ui.image)(tmp2398, tmp2399, tmp2400, tmp2401, tmp2402, tmp2403, tmp2404, function(_, callback) {
          var root698 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root698); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes625;
          nodes625 = node.contents();
          oldNodes.replaceWith(nodes625);
        }));
        callback(root697); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes624;
        nodes624 = node.contents();
        oldNodes.replaceWith(nodes624);
      }));
      root692.append(node341);
      
      var node342 = $("<span>");
      node342.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp2417 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp2417.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp2417.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp2417.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "Moodometer";
                       activeTabName.set(result__);
                       var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                       var result__ = mobl.$("#sliders").show();
                       var result__ = mobl.$("#placeholder").hide();
                       var result__ = mobl.$("#navigators").show();
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2416 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2419 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2418 = mobl.ref(result__);
      
      var nodes622 = $("<span>");
      node342.append(nodes622);
      subs__.addSub((mobl.span)(tmp2417, tmp2418, tmp2416, tmp2419, function(_, callback) {
        var root695 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png";
        var tmp2409 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp2409.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        var result__ = null;
        var tmp2415 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2414 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2413 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2412 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2411 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2410 = mobl.ref(result__);
        
        var nodes623 = $("<span>");
        root695.append(nodes623);
        subs__.addSub((ui.image)(tmp2409, tmp2410, tmp2411, tmp2412, tmp2413, tmp2414, tmp2415, function(_, callback) {
          var root696 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root696); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes623;
          nodes623 = node.contents();
          oldNodes.replaceWith(nodes623);
        }));
        callback(root695); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes622;
        nodes622 = node.contents();
        oldNodes.replaceWith(nodes622);
      }));
      root692.append(node342);
      
      var node343 = $("<span>");
      node343.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp2428 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp2428.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp2428.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp2428.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "Meditate";
                       activeTabName.set(result__);
                       var result__ = mobl.$("#sliders").show();
                       var result__ = mobl.$("#placeholder").hide();
                       var result__ = mobl.$("#navigators").show();
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2427 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2430 = mobl.ref(result__);
      
      var result__ = null;
      var tmp2429 = mobl.ref(result__);
      
      var nodes620 = $("<span>");
      node343.append(nodes620);
      subs__.addSub((mobl.span)(tmp2428, tmp2429, tmp2427, tmp2430, function(_, callback) {
        var root693 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png";
        var tmp2420 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp2420.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        var result__ = null;
        var tmp2426 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2425 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2424 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2423 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2422 = mobl.ref(result__);
        
        var result__ = null;
        var tmp2421 = mobl.ref(result__);
        
        var nodes621 = $("<span>");
        root693.append(nodes621);
        subs__.addSub((ui.image)(tmp2420, tmp2421, tmp2422, tmp2423, tmp2424, tmp2425, tmp2426, function(_, callback) {
          var root694 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root694); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes621;
          nodes621 = node.contents();
          oldNodes.replaceWith(nodes621);
        }));
        callback(root693); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes620;
        nodes620 = node.contents();
        oldNodes.replaceWith(nodes620);
      }));
      root692.append(node343);
      callback(root692); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes619;
      nodes619 = node.contents();
      oldNodes.replaceWith(nodes619);
    }));
    callback(root683); return subs__;
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes610;
    nodes610 = node.contents();
    oldNodes.replaceWith(nodes610);
  }));
  callback(root682); return subs__;
  
  return subs__;
};
