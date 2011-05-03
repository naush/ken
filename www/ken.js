mobl.provides('ken');
mobl.provides('controls');
mobl.provides('models');
ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll511 = mobl.range(0, tabs.length);
  var length53 = coll511.length;
  for(var i236 = 0; i236 < length53; i236++) {
    var index;
    index = coll511.get(i236);
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
  var root3896 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10537 = mobl.ref(null);
  
  
  var tmp10536 = mobl.ref(null);
  
  
  var tmp10535 = mobl.ref(null);
  
  var nodes3291 = $("<span>");
  root3896.append(nodes3291);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp10535, tmp10536, tmp10537, function(_, callback) {
    var root3897 = $("<span>");
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
    
    var tmp10373 = mobl.ref(ken.header(activeTabName.get()));
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10373.set(ken.header(activeTabName.get()));
    }));
    
    
    var tmp10374 = mobl.ref(null);
    
    var nodes3292 = $("<span>");
    root3897.append(nodes3292);
    subs__.addSub((ui.customHeader)(tmp10373, tmp10374, function(_, callback) {
      var root3898 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3898); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3292;
      nodes3292 = node.contents();
      oldNodes.replaceWith(nodes3292);
    }));
    
    var node1871 = $("<div>");
    node1871.attr('style', "height: 300px; margin-left: 25px;");
    
    
    var tmp10388 = mobl.ref(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10388.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp10388.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp10388.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp10391 = mobl.ref(null);
    
    
    var tmp10390 = mobl.ref(null);
    
    
    var tmp10389 = mobl.ref(null);
    
    var nodes3309 = $("<span>");
    node1871.append(nodes3309);
    subs__.addSub((mobl.block)(tmp10388, tmp10389, tmp10390, tmp10391, function(_, callback) {
      var root3915 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1882 = $("<span>");
      node1882.attr('style', "position: absolute; color: white; margin-left: -25px; margin-top: -61px;");
      
      
      var tmp10375 = mobl.ref("resources/images/welcome.png");
      
      
      var tmp10381 = mobl.ref(null);
      
      
      var tmp10380 = mobl.ref(null);
      
      
      var tmp10379 = mobl.ref(null);
      
      
      var tmp10378 = mobl.ref(null);
      
      
      var tmp10377 = mobl.ref(null);
      
      
      var tmp10376 = mobl.ref(null);
      
      var nodes3310 = $("<span>");
      node1882.append(nodes3310);
      subs__.addSub((ui.image)(tmp10375, tmp10376, tmp10377, tmp10378, tmp10379, tmp10380, tmp10381, function(_, callback) {
        var root3916 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3916); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3310;
        nodes3310 = node.contents();
        oldNodes.replaceWith(nodes3310);
      }));
      
      var node1883 = $("<span>");
      node1883.attr('style', "float:left; position:absolute; margin-top:286px; margin-left:-289px;");
      
      var val1322 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup_pressed.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1322 !== null) {
        subs__.addSub(mobl.domBind(node1883, 'mousedown', val1322));
      }
      
      var val1323 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1323 !== null) {
        subs__.addSub(mobl.domBind(node1883, 'mouseup', val1323));
      }
      
      
      var tmp10382 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Reminder";
                           activeTabName.set(result__);
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp10387 = mobl.ref(null);
      
      
      var tmp10386 = mobl.ref(null);
      
      
      var tmp10385 = mobl.ref(null);
      
      
      var tmp10384 = mobl.ref(null);
      
      
      var tmp10383 = mobl.ref(null);
      
      var nodes3311 = $("<span>");
      node1883.append(nodes3311);
      subs__.addSub((ui.image)(beginSetupImage, tmp10383, tmp10384, tmp10382, tmp10385, tmp10386, tmp10387, function(_, callback) {
        var root3917 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3917); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3311;
        nodes3311 = node.contents();
        oldNodes.replaceWith(nodes3311);
      }));
      node1882.append(node1883);
      root3915.append(node1882);
      callback(root3915); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3309;
      nodes3309 = node.contents();
      oldNodes.replaceWith(nodes3309);
    }));
    
    var tmp10399 = mobl.ref(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10399.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp10399.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp10399.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp10402 = mobl.ref(null);
    
    
    var tmp10401 = mobl.ref(null);
    
    
    var tmp10400 = mobl.ref(null);
    
    var nodes3312 = $("<span>");
    node1871.append(nodes3312);
    subs__.addSub((mobl.block)(tmp10399, tmp10400, tmp10401, tmp10402, function(_, callback) {
      var root3918 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3313 = $("<span>");
      root3918.append(nodes3313);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3919 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10392 = mobl.ref("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        subs__.addSub(moods.addEventListener('change', function() {
          tmp10392.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        
        var tmp10398 = mobl.ref(null);
        
        
        var tmp10397 = mobl.ref(null);
        
        
        var tmp10396 = mobl.ref(null);
        
        
        var tmp10395 = mobl.ref(null);
        
        
        var tmp10394 = mobl.ref(null);
        
        
        var tmp10393 = mobl.ref(null);
        
        var nodes3314 = $("<span>");
        root3919.append(nodes3314);
        subs__.addSub((ui.image)(tmp10392, tmp10393, tmp10394, tmp10395, tmp10396, tmp10397, tmp10398, function(_, callback) {
          var root3920 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3920); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3314;
          nodes3314 = node.contents();
          oldNodes.replaceWith(nodes3314);
        }));
        callback(root3919); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3313;
        nodes3313 = node.contents();
        oldNodes.replaceWith(nodes3313);
      }));
      callback(root3918); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3312;
      nodes3312 = node.contents();
      oldNodes.replaceWith(nodes3312);
    }));
    
    var tmp10415 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10415.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp10415.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp10415.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp10418 = mobl.ref(null);
    
    
    var tmp10417 = mobl.ref(null);
    
    
    var tmp10416 = mobl.ref(null);
    
    var nodes3315 = $("<span>");
    node1871.append(nodes3315);
    subs__.addSub((mobl.block)(tmp10415, tmp10416, tmp10417, tmp10418, function(_, callback) {
      var root3921 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3316 = $("<span>");
      root3921.append(nodes3316);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3922 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1884 = $("<div>");
        node1884.attr('id', "flash__Reminder");
        
        var ref1198 = mobl.ref(ui.flash);
        if(ref1198.get() !== null) {
          node1884.attr('class', ref1198.get());
          subs__.addSub(ref1198.addEventListener('change', function(_, ref, val) {
            node1884.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1198.rebind());
        
        
        var tmp10403 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Reminder").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10408 = mobl.ref(null);
        
        
        var tmp10407 = mobl.ref(null);
        
        
        var tmp10406 = mobl.ref(null);
        
        
        var tmp10405 = mobl.ref(null);
        
        
        var tmp10404 = mobl.ref(null);
        
        var nodes3318 = $("<span>");
        node1884.append(nodes3318);
        subs__.addSub((ui.image)(backgroundImage, tmp10404, tmp10405, tmp10403, tmp10406, tmp10407, tmp10408, function(_, callback) {
          var root3924 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3924); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3318;
          nodes3318 = node.contents();
          oldNodes.replaceWith(nodes3318);
        }));
        
        var node1885 = $("<span>");
        
        var ref1197 = mobl.ref(ui.transition);
        if(ref1197.get() !== null) {
          node1885.attr('class', ref1197.get());
          subs__.addSub(ref1197.addEventListener('change', function(_, ref, val) {
            node1885.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1197.rebind());
        
        var val1324 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1324 !== null) {
          subs__.addSub(mobl.domBind(node1885, 'mousedown', val1324));
        }
        
        var val1325 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1325 !== null) {
          subs__.addSub(mobl.domBind(node1885, 'mouseup', val1325));
        }
        
        
        var tmp10414 = mobl.ref(null);
        
        
        var tmp10413 = mobl.ref(null);
        
        
        var tmp10412 = mobl.ref(null);
        
        
        var tmp10411 = mobl.ref(null);
        
        
        var tmp10410 = mobl.ref(null);
        
        
        var tmp10409 = mobl.ref(null);
        
        var nodes3319 = $("<span>");
        node1885.append(nodes3319);
        subs__.addSub((ui.image)(transitionImage, tmp10409, tmp10410, tmp10411, tmp10412, tmp10413, tmp10414, function(_, callback) {
          var root3925 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3925); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3319;
          nodes3319 = node.contents();
          oldNodes.replaceWith(nodes3319);
        }));
        node1884.append(node1885);
        
        var node1886 = $("<span>");
        node1886.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node1886.append("Reminders saved");
        node1884.append(node1886);
        root3922.append(node1884);
        var nodes3317 = $("<span>");
        root3922.append(nodes3317);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root3923 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3923); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3317;
          nodes3317 = node.contents();
          oldNodes.replaceWith(nodes3317);
        }));
        callback(root3922); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3316;
        nodes3316 = node.contents();
        oldNodes.replaceWith(nodes3316);
      }));
      callback(root3921); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3315;
      nodes3315 = node.contents();
      oldNodes.replaceWith(nodes3315);
    }));
    
    var tmp10431 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10431.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp10431.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp10431.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp10434 = mobl.ref(null);
    
    
    var tmp10433 = mobl.ref(null);
    
    
    var tmp10432 = mobl.ref(null);
    
    var nodes3320 = $("<span>");
    node1871.append(nodes3320);
    subs__.addSub((mobl.block)(tmp10431, tmp10432, tmp10433, tmp10434, function(_, callback) {
      var root3926 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3321 = $("<span>");
      root3926.append(nodes3321);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3927 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1887 = $("<div>");
        node1887.attr('id', "flash__Life");
        
        var ref1200 = mobl.ref(ui.flash);
        if(ref1200.get() !== null) {
          node1887.attr('class', ref1200.get());
          subs__.addSub(ref1200.addEventListener('change', function(_, ref, val) {
            node1887.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1200.rebind());
        
        
        var tmp10419 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Life").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10424 = mobl.ref(null);
        
        
        var tmp10423 = mobl.ref(null);
        
        
        var tmp10422 = mobl.ref(null);
        
        
        var tmp10421 = mobl.ref(null);
        
        
        var tmp10420 = mobl.ref(null);
        
        var nodes3323 = $("<span>");
        node1887.append(nodes3323);
        subs__.addSub((ui.image)(backgroundImage, tmp10420, tmp10421, tmp10419, tmp10422, tmp10423, tmp10424, function(_, callback) {
          var root3929 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3929); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3323;
          nodes3323 = node.contents();
          oldNodes.replaceWith(nodes3323);
        }));
        
        var node1888 = $("<span>");
        
        var ref1199 = mobl.ref(ui.transition);
        if(ref1199.get() !== null) {
          node1888.attr('class', ref1199.get());
          subs__.addSub(ref1199.addEventListener('change', function(_, ref, val) {
            node1888.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1199.rebind());
        
        var val1326 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1326 !== null) {
          subs__.addSub(mobl.domBind(node1888, 'mousedown', val1326));
        }
        
        var val1327 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1327 !== null) {
          subs__.addSub(mobl.domBind(node1888, 'mouseup', val1327));
        }
        
        
        var tmp10430 = mobl.ref(null);
        
        
        var tmp10429 = mobl.ref(null);
        
        
        var tmp10428 = mobl.ref(null);
        
        
        var tmp10427 = mobl.ref(null);
        
        
        var tmp10426 = mobl.ref(null);
        
        
        var tmp10425 = mobl.ref(null);
        
        var nodes3324 = $("<span>");
        node1888.append(nodes3324);
        subs__.addSub((ui.image)(transitionImage, tmp10425, tmp10426, tmp10427, tmp10428, tmp10429, tmp10430, function(_, callback) {
          var root3930 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3930); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3324;
          nodes3324 = node.contents();
          oldNodes.replaceWith(nodes3324);
        }));
        node1887.append(node1888);
        
        var node1889 = $("<span>");
        node1889.attr('style', "position: absolute; color: white; margin-left: -210px; margin-top: 202px;");
        
        
        node1889.append("Events saved");
        node1887.append(node1889);
        root3927.append(node1887);
        var nodes3322 = $("<span>");
        root3927.append(nodes3322);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root3928 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3928); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3322;
          nodes3322 = node.contents();
          oldNodes.replaceWith(nodes3322);
        }));
        callback(root3927); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3321;
        nodes3321 = node.contents();
        oldNodes.replaceWith(nodes3321);
      }));
      callback(root3926); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3320;
      nodes3320 = node.contents();
      oldNodes.replaceWith(nodes3320);
    }));
    
    var tmp10447 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10447.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp10447.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp10447.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp10450 = mobl.ref(null);
    
    
    var tmp10449 = mobl.ref(null);
    
    
    var tmp10448 = mobl.ref(null);
    
    var nodes3325 = $("<span>");
    node1871.append(nodes3325);
    subs__.addSub((mobl.block)(tmp10447, tmp10448, tmp10449, tmp10450, function(_, callback) {
      var root3931 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3326 = $("<span>");
      root3931.append(nodes3326);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3932 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1890 = $("<div>");
        node1890.attr('id', "flash__Moodometer");
        
        var ref1202 = mobl.ref(ui.flash);
        if(ref1202.get() !== null) {
          node1890.attr('class', ref1202.get());
          subs__.addSub(ref1202.addEventListener('change', function(_, ref, val) {
            node1890.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1202.rebind());
        
        
        var tmp10435 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = mobl.$("#flash__Moodometer").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10440 = mobl.ref(null);
        
        
        var tmp10439 = mobl.ref(null);
        
        
        var tmp10438 = mobl.ref(null);
        
        
        var tmp10437 = mobl.ref(null);
        
        
        var tmp10436 = mobl.ref(null);
        
        var nodes3328 = $("<span>");
        node1890.append(nodes3328);
        subs__.addSub((ui.image)(backgroundImage, tmp10436, tmp10437, tmp10435, tmp10438, tmp10439, tmp10440, function(_, callback) {
          var root3934 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3934); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3328;
          nodes3328 = node.contents();
          oldNodes.replaceWith(nodes3328);
        }));
        
        var node1891 = $("<span>");
        
        var ref1201 = mobl.ref(ui.transition);
        if(ref1201.get() !== null) {
          node1891.attr('class', ref1201.get());
          subs__.addSub(ref1201.addEventListener('change', function(_, ref, val) {
            node1891.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1201.rebind());
        
        var val1328 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1328 !== null) {
          subs__.addSub(mobl.domBind(node1891, 'mousedown', val1328));
        }
        
        var val1329 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1329 !== null) {
          subs__.addSub(mobl.domBind(node1891, 'mouseup', val1329));
        }
        
        
        var tmp10446 = mobl.ref(null);
        
        
        var tmp10445 = mobl.ref(null);
        
        
        var tmp10444 = mobl.ref(null);
        
        
        var tmp10443 = mobl.ref(null);
        
        
        var tmp10442 = mobl.ref(null);
        
        
        var tmp10441 = mobl.ref(null);
        
        var nodes3329 = $("<span>");
        node1891.append(nodes3329);
        subs__.addSub((ui.image)(transitionImage, tmp10441, tmp10442, tmp10443, tmp10444, tmp10445, tmp10446, function(_, callback) {
          var root3935 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3935); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3329;
          nodes3329 = node.contents();
          oldNodes.replaceWith(nodes3329);
        }));
        node1890.append(node1891);
        
        var node1892 = $("<span>");
        node1892.attr('style', "position: absolute; color: white; margin-left: -203px; margin-top: 202px;");
        
        
        node1892.append("Mood saved");
        node1890.append(node1892);
        root3932.append(node1890);
        var nodes3327 = $("<span>");
        root3932.append(nodes3327);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root3933 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3933); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3327;
          nodes3327 = node.contents();
          oldNodes.replaceWith(nodes3327);
        }));
        callback(root3932); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3326;
        nodes3326 = node.contents();
        oldNodes.replaceWith(nodes3326);
      }));
      callback(root3931); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3325;
      nodes3325 = node.contents();
      oldNodes.replaceWith(nodes3325);
    }));
    
    var tmp10451 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp10451.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp10451.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp10451.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp10454 = mobl.ref(null);
    
    
    var tmp10453 = mobl.ref(null);
    
    
    var tmp10452 = mobl.ref(null);
    
    var nodes3330 = $("<span>");
    node1871.append(nodes3330);
    subs__.addSub((mobl.block)(tmp10451, tmp10452, tmp10453, tmp10454, function(_, callback) {
      var root3936 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3331 = $("<span>");
      root3936.append(nodes3331);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3937 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes3332 = $("<span>");
        root3937.append(nodes3332);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root3938 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3938); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3332;
          nodes3332 = node.contents();
          oldNodes.replaceWith(nodes3332);
        }));
        callback(root3937); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3331;
        nodes3331 = node.contents();
        oldNodes.replaceWith(nodes3331);
      }));
      callback(root3936); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3330;
      nodes3330 = node.contents();
      oldNodes.replaceWith(nodes3330);
    }));
    root3897.append(node1871);
    
    var tmp10487 = mobl.ref(null);
    
    
    var tmp10486 = mobl.ref(null);
    
    
    var tmp10485 = mobl.ref(null);
    
    var nodes3293 = $("<span>");
    root3897.append(nodes3293);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp10485, tmp10486, tmp10487, function(_, callback) {
      var root3899 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1872 = $("<span>");
      node1872.attr('id', "placeholder");
      node1872.attr('style', "display: none;");
      
      
      var tmp10463 = mobl.ref(false);
      
      
      var tmp10462 = mobl.ref(null);
      
      
      var tmp10461 = mobl.ref(null);
      
      var nodes3298 = $("<span>");
      node1872.append(nodes3298);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp10461, tmp10462, tmp10463, function(_, callback) {
        var root3904 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1877 = $("<span>");
        node1877.attr('style', "margin-left: 57px;");
        
        var val1320 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1320 !== null) {
          subs__.addSub(mobl.domBind(node1877, 'mousedown', val1320));
        }
        
        var val1321 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1321 !== null) {
          subs__.addSub(mobl.domBind(node1877, 'mouseout', val1321));
        }
        
        
        var tmp10455 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#placeholder").hide();
                             var result__ = mobl.$("#navigators").show();
                             var result__ = lastTabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10460 = mobl.ref(null);
        
        
        var tmp10459 = mobl.ref(null);
        
        
        var tmp10458 = mobl.ref(null);
        
        
        var tmp10457 = mobl.ref(null);
        
        
        var tmp10456 = mobl.ref(null);
        
        var nodes3299 = $("<span>");
        node1877.append(nodes3299);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp10456, tmp10457, tmp10455, tmp10458, tmp10459, tmp10460, function(_, callback) {
          var root3905 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3905); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3299;
          nodes3299 = node.contents();
          oldNodes.replaceWith(nodes3299);
        }));
        root3904.append(node1877);
        callback(root3904); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3298;
        nodes3298 = node.contents();
        oldNodes.replaceWith(nodes3298);
      }));
      root3899.append(node1872);
      
      var node1873 = $("<span>");
      node1873.attr('id', "navigators");
      
      
      var tmp10484 = mobl.ref(false);
      
      
      var tmp10483 = mobl.ref(null);
      
      
      var tmp10482 = mobl.ref(null);
      
      var nodes3294 = $("<span>");
      node1873.append(nodes3294);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp10482, tmp10483, tmp10484, function(_, callback) {
        var root3900 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1874 = $("<span>");
        
        var val1318 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1318 !== null) {
          subs__.addSub(mobl.domBind(node1874, 'mousedown', val1318));
        }
        
        var val1319 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1319 !== null) {
          subs__.addSub(mobl.domBind(node1874, 'mouseup', val1319));
        }
        
        
        var tmp10464 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.prev(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10469 = mobl.ref(null);
        
        
        var tmp10468 = mobl.ref(null);
        
        
        var tmp10467 = mobl.ref(null);
        
        
        var tmp10466 = mobl.ref(null);
        
        
        var tmp10465 = mobl.ref(null);
        
        var nodes3297 = $("<span>");
        node1874.append(nodes3297);
        subs__.addSub((ui.image)(backButtonImage, tmp10465, tmp10466, tmp10464, tmp10467, tmp10468, tmp10469, function(_, callback) {
          var root3903 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3903); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3297;
          nodes3297 = node.contents();
          oldNodes.replaceWith(nodes3297);
        }));
        root3900.append(node1874);
        
        var node1875 = $("<span>");
        
        var ref1196 = mobl.ref(ui.stressGraphButton);
        if(ref1196.get() !== null) {
          node1875.attr('class', ref1196.get());
          subs__.addSub(ref1196.addEventListener('change', function(_, ref, val) {
            node1875.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1196.rebind());
        
        var val1314 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1314 !== null) {
          subs__.addSub(mobl.domBind(node1875, 'mouseover', val1314));
        }
        
        var val1315 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1315 !== null) {
          subs__.addSub(mobl.domBind(node1875, 'mouseout', val1315));
        }
        
        var val1316 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1316 !== null) {
          subs__.addSub(mobl.domBind(node1875, 'mousedown', val1316));
        }
        
        var val1317 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1317 !== null) {
          subs__.addSub(mobl.domBind(node1875, 'mouseup', val1317));
        }
        
        
        var tmp10470 = mobl.ref(function(event, callback) {
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
                             models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll512) {
                               coll512 = coll512.reverse();
                               function processOne86() {
                                 var mood;
                                 mood = coll512.pop();
                                 var result__ = data + mood.happy + ",";
                                 data = result__;
                                 
                                 if(coll512.length > 0) processOne86(); else rest86();
                                 
                               }
                               function rest86() {
                                 var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                                 moods.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll512.length > 0) processOne86(); else rest86();
                             });
                             
                           });
        
        
        var tmp10475 = mobl.ref(null);
        
        
        var tmp10474 = mobl.ref(null);
        
        
        var tmp10473 = mobl.ref(null);
        
        
        var tmp10472 = mobl.ref(null);
        
        
        var tmp10471 = mobl.ref(null);
        
        var nodes3296 = $("<span>");
        node1875.append(nodes3296);
        subs__.addSub((ui.image)(stressGraphImage, tmp10471, tmp10472, tmp10470, tmp10473, tmp10474, tmp10475, function(_, callback) {
          var root3902 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3902); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3296;
          nodes3296 = node.contents();
          oldNodes.replaceWith(nodes3296);
        }));
        root3900.append(node1875);
        
        var node1876 = $("<span>");
        
        var val1312 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1312 !== null) {
          subs__.addSub(mobl.domBind(node1876, 'mousedown', val1312));
        }
        
        var val1313 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1313 !== null) {
          subs__.addSub(mobl.domBind(node1876, 'mouseup', val1313));
        }
        
        
        var tmp10476 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.next(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10481 = mobl.ref(null);
        
        
        var tmp10480 = mobl.ref(null);
        
        
        var tmp10479 = mobl.ref(null);
        
        
        var tmp10478 = mobl.ref(null);
        
        
        var tmp10477 = mobl.ref(null);
        
        var nodes3295 = $("<span>");
        node1876.append(nodes3295);
        subs__.addSub((ui.image)(nextButtonImage, tmp10477, tmp10478, tmp10476, tmp10479, tmp10480, tmp10481, function(_, callback) {
          var root3901 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3901); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3295;
          nodes3295 = node.contents();
          oldNodes.replaceWith(nodes3295);
        }));
        root3900.append(node1876);
        callback(root3900); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3294;
        nodes3294 = node.contents();
        oldNodes.replaceWith(nodes3294);
      }));
      root3899.append(node1873);
      callback(root3899); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3293;
      nodes3293 = node.contents();
      oldNodes.replaceWith(nodes3293);
    }));
    
    var tmp10534 = mobl.ref(null);
    
    
    var tmp10533 = mobl.ref(null);
    
    
    var tmp10532 = mobl.ref(null);
    
    var nodes3300 = $("<span>");
    root3897.append(nodes3300);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp10532, tmp10533, tmp10534, function(_, callback) {
      var root3906 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1878 = $("<span>");
      node1878.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      
      var tmp10496 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp10496.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp10496.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp10496.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp10495 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Reminder";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp10498 = mobl.ref(null);
      
      
      var tmp10497 = mobl.ref(null);
      
      var nodes3307 = $("<span>");
      node1878.append(nodes3307);
      subs__.addSub((mobl.span)(tmp10496, tmp10497, tmp10495, tmp10498, function(_, callback) {
        var root3913 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10488 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp10488.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        
        var tmp10494 = mobl.ref(null);
        
        
        var tmp10493 = mobl.ref(null);
        
        
        var tmp10492 = mobl.ref(null);
        
        
        var tmp10491 = mobl.ref(null);
        
        
        var tmp10490 = mobl.ref(null);
        
        
        var tmp10489 = mobl.ref(null);
        
        var nodes3308 = $("<span>");
        root3913.append(nodes3308);
        subs__.addSub((ui.image)(tmp10488, tmp10489, tmp10490, tmp10491, tmp10492, tmp10493, tmp10494, function(_, callback) {
          var root3914 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3914); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3308;
          nodes3308 = node.contents();
          oldNodes.replaceWith(nodes3308);
        }));
        callback(root3913); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3307;
        nodes3307 = node.contents();
        oldNodes.replaceWith(nodes3307);
      }));
      root3906.append(node1878);
      
      var node1879 = $("<span>");
      node1879.attr('style', "position: absolute; margin-left: 70px;");
      
      
      var tmp10507 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp10507.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp10507.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp10507.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp10506 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Life";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp10509 = mobl.ref(null);
      
      
      var tmp10508 = mobl.ref(null);
      
      var nodes3305 = $("<span>");
      node1879.append(nodes3305);
      subs__.addSub((mobl.span)(tmp10507, tmp10508, tmp10506, tmp10509, function(_, callback) {
        var root3911 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10499 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp10499.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        
        var tmp10505 = mobl.ref(null);
        
        
        var tmp10504 = mobl.ref(null);
        
        
        var tmp10503 = mobl.ref(null);
        
        
        var tmp10502 = mobl.ref(null);
        
        
        var tmp10501 = mobl.ref(null);
        
        
        var tmp10500 = mobl.ref(null);
        
        var nodes3306 = $("<span>");
        root3911.append(nodes3306);
        subs__.addSub((ui.image)(tmp10499, tmp10500, tmp10501, tmp10502, tmp10503, tmp10504, tmp10505, function(_, callback) {
          var root3912 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3912); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3306;
          nodes3306 = node.contents();
          oldNodes.replaceWith(nodes3306);
        }));
        callback(root3911); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3305;
        nodes3305 = node.contents();
        oldNodes.replaceWith(nodes3305);
      }));
      root3906.append(node1879);
      
      var node1880 = $("<span>");
      node1880.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      
      var tmp10518 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp10518.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp10518.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp10518.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp10517 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Moodometer";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp10520 = mobl.ref(null);
      
      
      var tmp10519 = mobl.ref(null);
      
      var nodes3303 = $("<span>");
      node1880.append(nodes3303);
      subs__.addSub((mobl.span)(tmp10518, tmp10519, tmp10517, tmp10520, function(_, callback) {
        var root3909 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10510 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp10510.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        
        var tmp10516 = mobl.ref(null);
        
        
        var tmp10515 = mobl.ref(null);
        
        
        var tmp10514 = mobl.ref(null);
        
        
        var tmp10513 = mobl.ref(null);
        
        
        var tmp10512 = mobl.ref(null);
        
        
        var tmp10511 = mobl.ref(null);
        
        var nodes3304 = $("<span>");
        root3909.append(nodes3304);
        subs__.addSub((ui.image)(tmp10510, tmp10511, tmp10512, tmp10513, tmp10514, tmp10515, tmp10516, function(_, callback) {
          var root3910 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3910); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3304;
          nodes3304 = node.contents();
          oldNodes.replaceWith(nodes3304);
        }));
        callback(root3909); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3303;
        nodes3303 = node.contents();
        oldNodes.replaceWith(nodes3303);
      }));
      root3906.append(node1880);
      
      var node1881 = $("<span>");
      node1881.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      
      var tmp10529 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp10529.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp10529.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp10529.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp10528 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Meditate";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp10531 = mobl.ref(null);
      
      
      var tmp10530 = mobl.ref(null);
      
      var nodes3301 = $("<span>");
      node1881.append(nodes3301);
      subs__.addSub((mobl.span)(tmp10529, tmp10530, tmp10528, tmp10531, function(_, callback) {
        var root3907 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10521 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp10521.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        
        var tmp10527 = mobl.ref(null);
        
        
        var tmp10526 = mobl.ref(null);
        
        
        var tmp10525 = mobl.ref(null);
        
        
        var tmp10524 = mobl.ref(null);
        
        
        var tmp10523 = mobl.ref(null);
        
        
        var tmp10522 = mobl.ref(null);
        
        var nodes3302 = $("<span>");
        root3907.append(nodes3302);
        subs__.addSub((ui.image)(tmp10521, tmp10522, tmp10523, tmp10524, tmp10525, tmp10526, tmp10527, function(_, callback) {
          var root3908 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3908); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3302;
          nodes3302 = node.contents();
          oldNodes.replaceWith(nodes3302);
        }));
        callback(root3907); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3301;
        nodes3301 = node.contents();
        oldNodes.replaceWith(nodes3301);
      }));
      root3906.append(node1881);
      callback(root3906); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3300;
      nodes3300 = node.contents();
      oldNodes.replaceWith(nodes3300);
    }));
    callback(root3897); return subs__;
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3291;
    nodes3291 = node.contents();
    oldNodes.replaceWith(nodes3291);
  }));
  callback(root3896); return subs__;
  
  return subs__;
};
