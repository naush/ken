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
  var coll92 = mobl.range(0, tabs.length);
  var length18 = coll92.length;
  for(var i41 = 0; i41 < length18; i41++) {
    var index;
    index = coll92.get(i41);
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
  var root1006 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp3570 = mobl.ref(result__);
  
  var result__ = null;
  var tmp3569 = mobl.ref(result__);
  
  var result__ = null;
  var tmp3568 = mobl.ref(result__);
  
  var nodes911 = $("<span>");
  root1006.append(nodes911);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp3568, tmp3569, tmp3570, function(_, callback) {
    var root1007 = $("<span>");
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
    var tmp3406 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp3406.set(ken.header(activeTabName.get()));
    }));
    
    var result__ = null;
    var tmp3407 = mobl.ref(result__);
    
    var nodes912 = $("<span>");
    root1007.append(nodes912);
    subs__.addSub((ui.customHeader)(tmp3406, tmp3407, function(_, callback) {
      var root1008 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1008); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes912;
      nodes912 = node.contents();
      oldNodes.replaceWith(nodes912);
    }));
    
    var node489 = $("<div>");
    node489.attr('style', "height: 300px; margin-left: 25px;");
    
    var result__ = activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp3421 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp3421.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp3421.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp3421.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp3424 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3423 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3422 = mobl.ref(result__);
    
    var nodes929 = $("<span>");
    node489.append(nodes929);
    subs__.addSub((mobl.block)(tmp3421, tmp3422, tmp3423, tmp3424, function(_, callback) {
      var root1025 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node500 = $("<span>");
      node500.attr('style', "position: absolute; color: white; margin-left: -25px; margin-top: -61px;");
      
      var result__ = "resources/images/welcome.png";
      var tmp3408 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3414 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3413 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3412 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3411 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3410 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3409 = mobl.ref(result__);
      
      var nodes930 = $("<span>");
      node500.append(nodes930);
      subs__.addSub((ui.image)(tmp3408, tmp3409, tmp3410, tmp3411, tmp3412, tmp3413, tmp3414, function(_, callback) {
        var root1026 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1026); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes930;
        nodes930 = node.contents();
        oldNodes.replaceWith(nodes930);
      }));
      
      var node501 = $("<span>");
      node501.attr('style', "float:left; position:absolute; margin-top:286px; margin-left:-289px;");
      
      var val389 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup_pressed.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val389 !== null) {
        subs__.addSub(mobl.domBind(node501, 'mousedown', val389));
      }
      
      var val390 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val390 !== null) {
        subs__.addSub(mobl.domBind(node501, 'mouseup', val390));
      }
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "Reminder";
                       activeTabName.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp3415 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3420 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3419 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3418 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3417 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3416 = mobl.ref(result__);
      
      var nodes931 = $("<span>");
      node501.append(nodes931);
      subs__.addSub((ui.image)(beginSetupImage, tmp3416, tmp3417, tmp3415, tmp3418, tmp3419, tmp3420, function(_, callback) {
        var root1027 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1027); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes931;
        nodes931 = node.contents();
        oldNodes.replaceWith(nodes931);
      }));
      node500.append(node501);
      root1025.append(node500);
      callback(root1025); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes929;
      nodes929 = node.contents();
      oldNodes.replaceWith(nodes929);
    }));
    var result__ = activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp3432 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp3432.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp3432.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp3432.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp3435 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3434 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3433 = mobl.ref(result__);
    
    var nodes932 = $("<span>");
    node489.append(nodes932);
    subs__.addSub((mobl.block)(tmp3432, tmp3433, tmp3434, tmp3435, function(_, callback) {
      var root1028 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes933 = $("<span>");
      root1028.append(nodes933);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1029 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = "http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1";
        var tmp3425 = mobl.ref(result__);
        subs__.addSub(moods.addEventListener('change', function() {
          tmp3425.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        var result__ = null;
        var tmp3431 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3430 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3429 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3428 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3427 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3426 = mobl.ref(result__);
        
        var nodes934 = $("<span>");
        root1029.append(nodes934);
        subs__.addSub((ui.image)(tmp3425, tmp3426, tmp3427, tmp3428, tmp3429, tmp3430, tmp3431, function(_, callback) {
          var root1030 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1030); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes934;
          nodes934 = node.contents();
          oldNodes.replaceWith(nodes934);
        }));
        callback(root1029); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes933;
        nodes933 = node.contents();
        oldNodes.replaceWith(nodes933);
      }));
      callback(root1028); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes932;
      nodes932 = node.contents();
      oldNodes.replaceWith(nodes932);
    }));
    var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp3448 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp3448.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp3448.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp3448.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp3451 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3450 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3449 = mobl.ref(result__);
    
    var nodes935 = $("<span>");
    node489.append(nodes935);
    subs__.addSub((mobl.block)(tmp3448, tmp3449, tmp3450, tmp3451, function(_, callback) {
      var root1031 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes936 = $("<span>");
      root1031.append(nodes936);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1032 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node502 = $("<div>");
        node502.attr('id', "flash__Reminder");
        
        var ref203 = mobl.ref(ui.flash);
        if(ref203.get() !== null) {
          node502.attr('class', ref203.get());
          subs__.addSub(ref203.addEventListener('change', function(_, ref, val) {
            node502.attr('class', val);
          }));
          
        }
        subs__.addSub(ref203.rebind());
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Reminder").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3436 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3441 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3440 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3439 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3438 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3437 = mobl.ref(result__);
        
        var nodes938 = $("<span>");
        node502.append(nodes938);
        subs__.addSub((ui.image)(backgroundImage, tmp3437, tmp3438, tmp3436, tmp3439, tmp3440, tmp3441, function(_, callback) {
          var root1034 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1034); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes938;
          nodes938 = node.contents();
          oldNodes.replaceWith(nodes938);
        }));
        
        var node503 = $("<span>");
        
        var ref202 = mobl.ref(ui.transition);
        if(ref202.get() !== null) {
          node503.attr('class', ref202.get());
          subs__.addSub(ref202.addEventListener('change', function(_, ref, val) {
            node503.attr('class', val);
          }));
          
        }
        subs__.addSub(ref202.rebind());
        
        var val391 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val391 !== null) {
          subs__.addSub(mobl.domBind(node503, 'mousedown', val391));
        }
        
        var val392 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val392 !== null) {
          subs__.addSub(mobl.domBind(node503, 'mouseup', val392));
        }
        
        var result__ = null;
        var tmp3447 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3446 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3445 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3444 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3443 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3442 = mobl.ref(result__);
        
        var nodes939 = $("<span>");
        node503.append(nodes939);
        subs__.addSub((ui.image)(transitionImage, tmp3442, tmp3443, tmp3444, tmp3445, tmp3446, tmp3447, function(_, callback) {
          var root1035 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1035); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes939;
          nodes939 = node.contents();
          oldNodes.replaceWith(nodes939);
        }));
        node502.append(node503);
        
        var node504 = $("<span>");
        node504.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node504.append("Reminders saved");
        node502.append(node504);
        root1032.append(node502);
        var nodes937 = $("<span>");
        root1032.append(nodes937);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root1033 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1033); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes937;
          nodes937 = node.contents();
          oldNodes.replaceWith(nodes937);
        }));
        callback(root1032); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes936;
        nodes936 = node.contents();
        oldNodes.replaceWith(nodes936);
      }));
      callback(root1031); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes935;
      nodes935 = node.contents();
      oldNodes.replaceWith(nodes935);
    }));
    var result__ = activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp3464 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp3464.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp3464.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp3464.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp3467 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3466 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3465 = mobl.ref(result__);
    
    var nodes940 = $("<span>");
    node489.append(nodes940);
    subs__.addSub((mobl.block)(tmp3464, tmp3465, tmp3466, tmp3467, function(_, callback) {
      var root1036 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes941 = $("<span>");
      root1036.append(nodes941);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1037 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node505 = $("<div>");
        node505.attr('id', "flash__Life");
        
        var ref205 = mobl.ref(ui.flash);
        if(ref205.get() !== null) {
          node505.attr('class', ref205.get());
          subs__.addSub(ref205.addEventListener('change', function(_, ref, val) {
            node505.attr('class', val);
          }));
          
        }
        subs__.addSub(ref205.rebind());
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Life").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3452 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3457 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3456 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3455 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3454 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3453 = mobl.ref(result__);
        
        var nodes943 = $("<span>");
        node505.append(nodes943);
        subs__.addSub((ui.image)(backgroundImage, tmp3453, tmp3454, tmp3452, tmp3455, tmp3456, tmp3457, function(_, callback) {
          var root1039 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1039); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes943;
          nodes943 = node.contents();
          oldNodes.replaceWith(nodes943);
        }));
        
        var node506 = $("<span>");
        
        var ref204 = mobl.ref(ui.transition);
        if(ref204.get() !== null) {
          node506.attr('class', ref204.get());
          subs__.addSub(ref204.addEventListener('change', function(_, ref, val) {
            node506.attr('class', val);
          }));
          
        }
        subs__.addSub(ref204.rebind());
        
        var val393 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val393 !== null) {
          subs__.addSub(mobl.domBind(node506, 'mousedown', val393));
        }
        
        var val394 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val394 !== null) {
          subs__.addSub(mobl.domBind(node506, 'mouseup', val394));
        }
        
        var result__ = null;
        var tmp3463 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3462 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3461 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3460 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3459 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3458 = mobl.ref(result__);
        
        var nodes944 = $("<span>");
        node506.append(nodes944);
        subs__.addSub((ui.image)(transitionImage, tmp3458, tmp3459, tmp3460, tmp3461, tmp3462, tmp3463, function(_, callback) {
          var root1040 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1040); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes944;
          nodes944 = node.contents();
          oldNodes.replaceWith(nodes944);
        }));
        node505.append(node506);
        
        var node507 = $("<span>");
        node507.attr('style', "position: absolute; color: white; margin-left: -210px; margin-top: 202px;");
        
        
        node507.append("Events saved");
        node505.append(node507);
        root1037.append(node505);
        var nodes942 = $("<span>");
        root1037.append(nodes942);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root1038 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1038); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes942;
          nodes942 = node.contents();
          oldNodes.replaceWith(nodes942);
        }));
        callback(root1037); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes941;
        nodes941 = node.contents();
        oldNodes.replaceWith(nodes941);
      }));
      callback(root1036); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes940;
      nodes940 = node.contents();
      oldNodes.replaceWith(nodes940);
    }));
    var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp3480 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp3480.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp3480.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp3480.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp3483 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3482 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3481 = mobl.ref(result__);
    
    var nodes945 = $("<span>");
    node489.append(nodes945);
    subs__.addSub((mobl.block)(tmp3480, tmp3481, tmp3482, tmp3483, function(_, callback) {
      var root1041 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes946 = $("<span>");
      root1041.append(nodes946);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1042 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node508 = $("<div>");
        node508.attr('id', "flash__Moodometer");
        
        var ref207 = mobl.ref(ui.flash);
        if(ref207.get() !== null) {
          node508.attr('class', ref207.get());
          subs__.addSub(ref207.addEventListener('change', function(_, ref, val) {
            node508.attr('class', val);
          }));
          
        }
        subs__.addSub(ref207.rebind());
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = mobl.$("#flash__Moodometer").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3468 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3473 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3472 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3471 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3470 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3469 = mobl.ref(result__);
        
        var nodes948 = $("<span>");
        node508.append(nodes948);
        subs__.addSub((ui.image)(backgroundImage, tmp3469, tmp3470, tmp3468, tmp3471, tmp3472, tmp3473, function(_, callback) {
          var root1044 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1044); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes948;
          nodes948 = node.contents();
          oldNodes.replaceWith(nodes948);
        }));
        
        var node509 = $("<span>");
        
        var ref206 = mobl.ref(ui.transition);
        if(ref206.get() !== null) {
          node509.attr('class', ref206.get());
          subs__.addSub(ref206.addEventListener('change', function(_, ref, val) {
            node509.attr('class', val);
          }));
          
        }
        subs__.addSub(ref206.rebind());
        
        var val395 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val395 !== null) {
          subs__.addSub(mobl.domBind(node509, 'mousedown', val395));
        }
        
        var val396 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val396 !== null) {
          subs__.addSub(mobl.domBind(node509, 'mouseup', val396));
        }
        
        var result__ = null;
        var tmp3479 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3478 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3477 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3476 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3475 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3474 = mobl.ref(result__);
        
        var nodes949 = $("<span>");
        node509.append(nodes949);
        subs__.addSub((ui.image)(transitionImage, tmp3474, tmp3475, tmp3476, tmp3477, tmp3478, tmp3479, function(_, callback) {
          var root1045 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1045); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes949;
          nodes949 = node.contents();
          oldNodes.replaceWith(nodes949);
        }));
        node508.append(node509);
        
        var node510 = $("<span>");
        node510.attr('style', "position: absolute; color: white; margin-left: -203px; margin-top: 202px;");
        
        
        node510.append("Mood saved");
        node508.append(node510);
        root1042.append(node508);
        var nodes947 = $("<span>");
        root1042.append(nodes947);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root1043 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1043); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes947;
          nodes947 = node.contents();
          oldNodes.replaceWith(nodes947);
        }));
        callback(root1042); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes946;
        nodes946 = node.contents();
        oldNodes.replaceWith(nodes946);
      }));
      callback(root1041); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes945;
      nodes945 = node.contents();
      oldNodes.replaceWith(nodes945);
    }));
    var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp3484 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp3484.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp3484.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp3484.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp3487 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3486 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3485 = mobl.ref(result__);
    
    var nodes950 = $("<span>");
    node489.append(nodes950);
    subs__.addSub((mobl.block)(tmp3484, tmp3485, tmp3486, tmp3487, function(_, callback) {
      var root1046 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes951 = $("<span>");
      root1046.append(nodes951);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1047 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes952 = $("<span>");
        root1047.append(nodes952);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root1048 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1048); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes952;
          nodes952 = node.contents();
          oldNodes.replaceWith(nodes952);
        }));
        callback(root1047); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes951;
        nodes951 = node.contents();
        oldNodes.replaceWith(nodes951);
      }));
      callback(root1046); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes950;
      nodes950 = node.contents();
      oldNodes.replaceWith(nodes950);
    }));
    root1007.append(node489);
    var result__ = null;
    var tmp3520 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3519 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3518 = mobl.ref(result__);
    
    var nodes913 = $("<span>");
    root1007.append(nodes913);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp3518, tmp3519, tmp3520, function(_, callback) {
      var root1009 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node490 = $("<span>");
      node490.attr('id', "placeholder");
      node490.attr('style', "display: none;");
      
      var result__ = false;
      var tmp3496 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3495 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3494 = mobl.ref(result__);
      
      var nodes918 = $("<span>");
      node490.append(nodes918);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp3494, tmp3495, tmp3496, function(_, callback) {
        var root1014 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node495 = $("<span>");
        node495.attr('style', "margin-left: 57px;");
        
        var val387 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val387 !== null) {
          subs__.addSub(mobl.domBind(node495, 'mousedown', val387));
        }
        
        var val388 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val388 !== null) {
          subs__.addSub(mobl.domBind(node495, 'mouseout', val388));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#placeholder").hide();
                         var result__ = mobl.$("#navigators").show();
                         var result__ = lastTabName.get();
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3488 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3493 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3492 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3491 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3490 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3489 = mobl.ref(result__);
        
        var nodes919 = $("<span>");
        node495.append(nodes919);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp3489, tmp3490, tmp3488, tmp3491, tmp3492, tmp3493, function(_, callback) {
          var root1015 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1015); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes919;
          nodes919 = node.contents();
          oldNodes.replaceWith(nodes919);
        }));
        root1014.append(node495);
        callback(root1014); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes918;
        nodes918 = node.contents();
        oldNodes.replaceWith(nodes918);
      }));
      root1009.append(node490);
      
      var node491 = $("<span>");
      node491.attr('id', "navigators");
      
      var result__ = false;
      var tmp3517 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3516 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3515 = mobl.ref(result__);
      
      var nodes914 = $("<span>");
      node491.append(nodes914);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp3515, tmp3516, tmp3517, function(_, callback) {
        var root1010 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node492 = $("<span>");
        
        var val385 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val385 !== null) {
          subs__.addSub(mobl.domBind(node492, 'mousedown', val385));
        }
        
        var val386 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val386 !== null) {
          subs__.addSub(mobl.domBind(node492, 'mouseup', val386));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.prev(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3497 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3502 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3501 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3500 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3499 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3498 = mobl.ref(result__);
        
        var nodes917 = $("<span>");
        node492.append(nodes917);
        subs__.addSub((ui.image)(backButtonImage, tmp3498, tmp3499, tmp3497, tmp3500, tmp3501, tmp3502, function(_, callback) {
          var root1013 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1013); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes917;
          nodes917 = node.contents();
          oldNodes.replaceWith(nodes917);
        }));
        root1010.append(node492);
        
        var node493 = $("<span>");
        
        var ref201 = mobl.ref(ui.stressGraphButton);
        if(ref201.get() !== null) {
          node493.attr('class', ref201.get());
          subs__.addSub(ref201.addEventListener('change', function(_, ref, val) {
            node493.attr('class', val);
          }));
          
        }
        subs__.addSub(ref201.rebind());
        
        var val381 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val381 !== null) {
          subs__.addSub(mobl.domBind(node493, 'mouseover', val381));
        }
        
        var val382 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val382 !== null) {
          subs__.addSub(mobl.domBind(node493, 'mouseout', val382));
        }
        
        var val383 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val383 !== null) {
          subs__.addSub(mobl.domBind(node493, 'mousedown', val383));
        }
        
        var val384 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val384 !== null) {
          subs__.addSub(mobl.domBind(node493, 'mouseup', val384));
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
                         models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll93) {
                           coll93 = coll93.reverse();
                           function processOne44() {
                             var mood;
                             mood = coll93.pop();
                             var result__ = data + mood.happy + ",";
                             data = result__;
                             
                             if(coll93.length > 0) processOne44(); else rest44();
                             
                           }
                           function rest44() {
                             var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                             moods.set(result__);
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll93.length > 0) processOne44(); else rest44();
                         });
                         
                       };
        var tmp3503 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3508 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3507 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3506 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3505 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3504 = mobl.ref(result__);
        
        var nodes916 = $("<span>");
        node493.append(nodes916);
        subs__.addSub((ui.image)(stressGraphImage, tmp3504, tmp3505, tmp3503, tmp3506, tmp3507, tmp3508, function(_, callback) {
          var root1012 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1012); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes916;
          nodes916 = node.contents();
          oldNodes.replaceWith(nodes916);
        }));
        root1010.append(node493);
        
        var node494 = $("<span>");
        
        var val379 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val379 !== null) {
          subs__.addSub(mobl.domBind(node494, 'mousedown', val379));
        }
        
        var val380 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val380 !== null) {
          subs__.addSub(mobl.domBind(node494, 'mouseup', val380));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3509 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3514 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3513 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3512 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3511 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3510 = mobl.ref(result__);
        
        var nodes915 = $("<span>");
        node494.append(nodes915);
        subs__.addSub((ui.image)(nextButtonImage, tmp3510, tmp3511, tmp3509, tmp3512, tmp3513, tmp3514, function(_, callback) {
          var root1011 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1011); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes915;
          nodes915 = node.contents();
          oldNodes.replaceWith(nodes915);
        }));
        root1010.append(node494);
        callback(root1010); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes914;
        nodes914 = node.contents();
        oldNodes.replaceWith(nodes914);
      }));
      root1009.append(node491);
      callback(root1009); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes913;
      nodes913 = node.contents();
      oldNodes.replaceWith(nodes913);
    }));
    var result__ = null;
    var tmp3567 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3566 = mobl.ref(result__);
    
    var result__ = null;
    var tmp3565 = mobl.ref(result__);
    
    var nodes920 = $("<span>");
    root1007.append(nodes920);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp3565, tmp3566, tmp3567, function(_, callback) {
      var root1016 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node496 = $("<span>");
      node496.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp3529 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp3529.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp3529.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp3529.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp3528 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3531 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3530 = mobl.ref(result__);
      
      var nodes927 = $("<span>");
      node496.append(nodes927);
      subs__.addSub((mobl.span)(tmp3529, tmp3530, tmp3528, tmp3531, function(_, callback) {
        var root1023 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png";
        var tmp3521 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp3521.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        var result__ = null;
        var tmp3527 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3526 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3525 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3524 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3523 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3522 = mobl.ref(result__);
        
        var nodes928 = $("<span>");
        root1023.append(nodes928);
        subs__.addSub((ui.image)(tmp3521, tmp3522, tmp3523, tmp3524, tmp3525, tmp3526, tmp3527, function(_, callback) {
          var root1024 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1024); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes928;
          nodes928 = node.contents();
          oldNodes.replaceWith(nodes928);
        }));
        callback(root1023); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes927;
        nodes927 = node.contents();
        oldNodes.replaceWith(nodes927);
      }));
      root1016.append(node496);
      
      var node497 = $("<span>");
      node497.attr('style', "position: absolute; margin-left: 70px;");
      
      var result__ = activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp3540 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp3540.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp3540.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp3540.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp3539 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3542 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3541 = mobl.ref(result__);
      
      var nodes925 = $("<span>");
      node497.append(nodes925);
      subs__.addSub((mobl.span)(tmp3540, tmp3541, tmp3539, tmp3542, function(_, callback) {
        var root1021 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png";
        var tmp3532 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp3532.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        var result__ = null;
        var tmp3538 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3537 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3536 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3535 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3534 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3533 = mobl.ref(result__);
        
        var nodes926 = $("<span>");
        root1021.append(nodes926);
        subs__.addSub((ui.image)(tmp3532, tmp3533, tmp3534, tmp3535, tmp3536, tmp3537, tmp3538, function(_, callback) {
          var root1022 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1022); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes926;
          nodes926 = node.contents();
          oldNodes.replaceWith(nodes926);
        }));
        callback(root1021); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes925;
        nodes925 = node.contents();
        oldNodes.replaceWith(nodes925);
      }));
      root1016.append(node497);
      
      var node498 = $("<span>");
      node498.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp3551 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp3551.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp3551.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp3551.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp3550 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3553 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3552 = mobl.ref(result__);
      
      var nodes923 = $("<span>");
      node498.append(nodes923);
      subs__.addSub((mobl.span)(tmp3551, tmp3552, tmp3550, tmp3553, function(_, callback) {
        var root1019 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png";
        var tmp3543 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp3543.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        var result__ = null;
        var tmp3549 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3548 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3547 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3546 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3545 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3544 = mobl.ref(result__);
        
        var nodes924 = $("<span>");
        root1019.append(nodes924);
        subs__.addSub((ui.image)(tmp3543, tmp3544, tmp3545, tmp3546, tmp3547, tmp3548, tmp3549, function(_, callback) {
          var root1020 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1020); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes924;
          nodes924 = node.contents();
          oldNodes.replaceWith(nodes924);
        }));
        callback(root1019); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes923;
        nodes923 = node.contents();
        oldNodes.replaceWith(nodes923);
      }));
      root1016.append(node498);
      
      var node499 = $("<span>");
      node499.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp3562 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp3562.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp3562.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp3562.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp3561 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3564 = mobl.ref(result__);
      
      var result__ = null;
      var tmp3563 = mobl.ref(result__);
      
      var nodes921 = $("<span>");
      node499.append(nodes921);
      subs__.addSub((mobl.span)(tmp3562, tmp3563, tmp3561, tmp3564, function(_, callback) {
        var root1017 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png";
        var tmp3554 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp3554.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        var result__ = null;
        var tmp3560 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3559 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3558 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3557 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3556 = mobl.ref(result__);
        
        var result__ = null;
        var tmp3555 = mobl.ref(result__);
        
        var nodes922 = $("<span>");
        root1017.append(nodes922);
        subs__.addSub((ui.image)(tmp3554, tmp3555, tmp3556, tmp3557, tmp3558, tmp3559, tmp3560, function(_, callback) {
          var root1018 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1018); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes922;
          nodes922 = node.contents();
          oldNodes.replaceWith(nodes922);
        }));
        callback(root1017); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes921;
        nodes921 = node.contents();
        oldNodes.replaceWith(nodes921);
      }));
      root1016.append(node499);
      callback(root1016); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes920;
      nodes920 = node.contents();
      oldNodes.replaceWith(nodes920);
    }));
    callback(root1007); return subs__;
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes911;
    nodes911 = node.contents();
    oldNodes.replaceWith(nodes911);
  }));
  callback(root1006); return subs__;
  
  return subs__;
};
