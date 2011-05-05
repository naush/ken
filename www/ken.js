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
  var coll104 = mobl.range(0, tabs.length);
  var length49 = coll104.length;
  for(var i49 = 0; i49 < length49; i49++) {
    var index;
    index = coll104.get(i49);
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
  var root2357 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp9767 = mobl.ref(result__);
  
  var result__ = null;
  var tmp9766 = mobl.ref(result__);
  
  var result__ = null;
  var tmp9765 = mobl.ref(result__);
  
  var nodes2283 = $("<span>");
  root2357.append(nodes2283);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp9765, tmp9766, tmp9767, function(_, callback) {
    var root2358 = $("<span>");
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
    var tmp9560 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9560.set(ken.header(activeTabName.get()));
    }));
    
    var result__ = null;
    var tmp9561 = mobl.ref(result__);
    
    var nodes2284 = $("<span>");
    root2358.append(nodes2284);
    subs__.addSub((ui.customHeader)(tmp9560, tmp9561, function(_, callback) {
      var root2359 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2359); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2284;
      nodes2284 = node.contents();
      oldNodes.replaceWith(nodes2284);
    }));
    
    var node1288 = $("<div>");
    node1288.attr('style', "height: 300px; margin-left: 25px;");
    
    var result__ = activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp9575 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9575.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp9575.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp9575.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp9578 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9577 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9576 = mobl.ref(result__);
    
    var nodes2301 = $("<span>");
    node1288.append(nodes2301);
    subs__.addSub((mobl.block)(tmp9575, tmp9576, tmp9577, tmp9578, function(_, callback) {
      var root2376 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1299 = $("<span>");
      node1299.attr('style', "position: absolute; color: white; margin-left: -25px; margin-top: -61px;");
      
      var result__ = "resources/images/welcome.png";
      var tmp9562 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9568 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9567 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9566 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9565 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9564 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9563 = mobl.ref(result__);
      
      var nodes2302 = $("<span>");
      node1299.append(nodes2302);
      subs__.addSub((ui.image)(tmp9562, tmp9563, tmp9564, tmp9565, tmp9566, tmp9567, tmp9568, function(_, callback) {
        var root2377 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2377); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2302;
        nodes2302 = node.contents();
        oldNodes.replaceWith(nodes2302);
      }));
      
      var node1300 = $("<span>");
      node1300.attr('style', "float:left; position:absolute; margin-top:286px; margin-left:-289px;");
      
      var val1064 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup_pressed.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1064 !== null) {
        subs__.addSub(mobl.domBind(node1300, 'mousedown', val1064));
      }
      
      var val1065 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1065 !== null) {
        subs__.addSub(mobl.domBind(node1300, 'mouseup', val1065));
      }
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "Reminder";
                       activeTabName.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp9569 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9574 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9573 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9572 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9571 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9570 = mobl.ref(result__);
      
      var nodes2303 = $("<span>");
      node1300.append(nodes2303);
      subs__.addSub((ui.image)(beginSetupImage, tmp9570, tmp9571, tmp9569, tmp9572, tmp9573, tmp9574, function(_, callback) {
        var root2378 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2378); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2303;
        nodes2303 = node.contents();
        oldNodes.replaceWith(nodes2303);
      }));
      node1299.append(node1300);
      root2376.append(node1299);
      callback(root2376); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2301;
      nodes2301 = node.contents();
      oldNodes.replaceWith(nodes2301);
    }));
    var result__ = activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp9586 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9586.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp9586.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp9586.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp9589 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9588 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9587 = mobl.ref(result__);
    
    var nodes2304 = $("<span>");
    node1288.append(nodes2304);
    subs__.addSub((mobl.block)(tmp9586, tmp9587, tmp9588, tmp9589, function(_, callback) {
      var root2379 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2305 = $("<span>");
      root2379.append(nodes2305);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2380 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = "http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1";
        var tmp9579 = mobl.ref(result__);
        subs__.addSub(moods.addEventListener('change', function() {
          tmp9579.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        var result__ = null;
        var tmp9585 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9584 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9583 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9582 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9581 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9580 = mobl.ref(result__);
        
        var nodes2306 = $("<span>");
        root2380.append(nodes2306);
        subs__.addSub((ui.image)(tmp9579, tmp9580, tmp9581, tmp9582, tmp9583, tmp9584, tmp9585, function(_, callback) {
          var root2381 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2381); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2306;
          nodes2306 = node.contents();
          oldNodes.replaceWith(nodes2306);
        }));
        callback(root2380); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2305;
        nodes2305 = node.contents();
        oldNodes.replaceWith(nodes2305);
      }));
      callback(root2379); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2304;
      nodes2304 = node.contents();
      oldNodes.replaceWith(nodes2304);
    }));
    var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp9616 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9616.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp9616.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp9616.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp9619 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9618 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9617 = mobl.ref(result__);
    
    var nodes2307 = $("<span>");
    node1288.append(nodes2307);
    subs__.addSub((mobl.block)(tmp9616, tmp9617, tmp9618, tmp9619, function(_, callback) {
      var root2382 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2308 = $("<span>");
      root2382.append(nodes2308);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2383 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1301 = $("<div>");
        node1301.attr('id', "flash__Reminder");
        
        var ref404 = mobl.ref(ui.flash);
        if(ref404.get() !== null) {
          node1301.attr('class', ref404.get());
          subs__.addSub(ref404.addEventListener('change', function(_, ref, val) {
            node1301.attr('class', val);
          }));
          
        }
        subs__.addSub(ref404.rebind());
        
        var result__ = null;
        var tmp9595 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9594 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9593 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9592 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9591 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9590 = mobl.ref(result__);
        
        var nodes2310 = $("<span>");
        node1301.append(nodes2310);
        subs__.addSub((ui.image)(backgroundImage, tmp9590, tmp9591, tmp9592, tmp9593, tmp9594, tmp9595, function(_, callback) {
          var root2385 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2385); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2310;
          nodes2310 = node.contents();
          oldNodes.replaceWith(nodes2310);
        }));
        
        var node1302 = $("<span>");
        
        var ref403 = mobl.ref(ui.transition);
        if(ref403.get() !== null) {
          node1302.attr('class', ref403.get());
          subs__.addSub(ref403.addEventListener('change', function(_, ref, val) {
            node1302.attr('class', val);
          }));
          
        }
        subs__.addSub(ref403.rebind());
        
        
        var node1304 = $("<span>");
        node1304.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 101px;");
        
        var val1068 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1068 !== null) {
          subs__.addSub(mobl.domBind(node1304, 'mousedown', val1068));
        }
        
        var val1069 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1069 !== null) {
          subs__.addSub(mobl.domBind(node1304, 'mouseup', val1069));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9597 = mobl.ref(result__);
        
        var result__ = "resources/images/next_trans.png";
        var tmp9596 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9602 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9601 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9600 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9599 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9598 = mobl.ref(result__);
        
        var nodes2313 = $("<span>");
        node1304.append(nodes2313);
        subs__.addSub((ui.image)(tmp9596, tmp9598, tmp9599, tmp9597, tmp9600, tmp9601, tmp9602, function(_, callback) {
          var root2388 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2388); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2313;
          nodes2313 = node.contents();
          oldNodes.replaceWith(nodes2313);
        }));
        node1302.append(node1304);
        
        var node1305 = $("<span>");
        node1305.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 20px;");
        
        var val1066 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1066 !== null) {
          subs__.addSub(mobl.domBind(node1305, 'mousedown', val1066));
        }
        
        var val1067 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1067 !== null) {
          subs__.addSub(mobl.domBind(node1305, 'mouseup', val1067));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Reminder").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9604 = mobl.ref(result__);
        
        var result__ = "resources/images/edit_trans.png";
        var tmp9603 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9609 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9608 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9607 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9606 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9605 = mobl.ref(result__);
        
        var nodes2312 = $("<span>");
        node1305.append(nodes2312);
        subs__.addSub((ui.image)(tmp9603, tmp9605, tmp9606, tmp9604, tmp9607, tmp9608, tmp9609, function(_, callback) {
          var root2387 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2387); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2312;
          nodes2312 = node.contents();
          oldNodes.replaceWith(nodes2312);
        }));
        node1302.append(node1305);
        var result__ = null;
        var tmp9615 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9614 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9613 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9612 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9611 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9610 = mobl.ref(result__);
        
        var nodes2311 = $("<span>");
        node1302.append(nodes2311);
        subs__.addSub((ui.image)(transitionImage, tmp9610, tmp9611, tmp9612, tmp9613, tmp9614, tmp9615, function(_, callback) {
          var root2386 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2386); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2311;
          nodes2311 = node.contents();
          oldNodes.replaceWith(nodes2311);
        }));
        node1301.append(node1302);
        
        var node1303 = $("<span>");
        node1303.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node1303.append("Reminders saved");
        node1301.append(node1303);
        root2383.append(node1301);
        var nodes2309 = $("<span>");
        root2383.append(nodes2309);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root2384 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2384); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2309;
          nodes2309 = node.contents();
          oldNodes.replaceWith(nodes2309);
        }));
        callback(root2383); return subs__;
        
        
        
        
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2308;
        nodes2308 = node.contents();
        oldNodes.replaceWith(nodes2308);
      }));
      callback(root2382); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2307;
      nodes2307 = node.contents();
      oldNodes.replaceWith(nodes2307);
    }));
    var result__ = activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp9646 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9646.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp9646.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp9646.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp9649 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9648 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9647 = mobl.ref(result__);
    
    var nodes2314 = $("<span>");
    node1288.append(nodes2314);
    subs__.addSub((mobl.block)(tmp9646, tmp9647, tmp9648, tmp9649, function(_, callback) {
      var root2389 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2315 = $("<span>");
      root2389.append(nodes2315);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2390 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1306 = $("<div>");
        node1306.attr('id', "flash__Life");
        
        var ref406 = mobl.ref(ui.flash);
        if(ref406.get() !== null) {
          node1306.attr('class', ref406.get());
          subs__.addSub(ref406.addEventListener('change', function(_, ref, val) {
            node1306.attr('class', val);
          }));
          
        }
        subs__.addSub(ref406.rebind());
        
        var result__ = null;
        var tmp9625 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9624 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9623 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9622 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9621 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9620 = mobl.ref(result__);
        
        var nodes2317 = $("<span>");
        node1306.append(nodes2317);
        subs__.addSub((ui.image)(backgroundImage, tmp9620, tmp9621, tmp9622, tmp9623, tmp9624, tmp9625, function(_, callback) {
          var root2392 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2392); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2317;
          nodes2317 = node.contents();
          oldNodes.replaceWith(nodes2317);
        }));
        
        var node1307 = $("<span>");
        
        var ref405 = mobl.ref(ui.transition);
        if(ref405.get() !== null) {
          node1307.attr('class', ref405.get());
          subs__.addSub(ref405.addEventListener('change', function(_, ref, val) {
            node1307.attr('class', val);
          }));
          
        }
        subs__.addSub(ref405.rebind());
        
        
        var node1309 = $("<span>");
        node1309.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 101px;");
        
        var val1072 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1072 !== null) {
          subs__.addSub(mobl.domBind(node1309, 'mousedown', val1072));
        }
        
        var val1073 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1073 !== null) {
          subs__.addSub(mobl.domBind(node1309, 'mouseup', val1073));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9627 = mobl.ref(result__);
        
        var result__ = "resources/images/next_trans.png";
        var tmp9626 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9632 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9631 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9630 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9629 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9628 = mobl.ref(result__);
        
        var nodes2320 = $("<span>");
        node1309.append(nodes2320);
        subs__.addSub((ui.image)(tmp9626, tmp9628, tmp9629, tmp9627, tmp9630, tmp9631, tmp9632, function(_, callback) {
          var root2395 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2395); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2320;
          nodes2320 = node.contents();
          oldNodes.replaceWith(nodes2320);
        }));
        node1307.append(node1309);
        
        var node1310 = $("<span>");
        node1310.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 20px;");
        
        var val1070 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1070 !== null) {
          subs__.addSub(mobl.domBind(node1310, 'mousedown', val1070));
        }
        
        var val1071 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1071 !== null) {
          subs__.addSub(mobl.domBind(node1310, 'mouseup', val1071));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Life").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9634 = mobl.ref(result__);
        
        var result__ = "resources/images/edit_trans.png";
        var tmp9633 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9639 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9638 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9637 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9636 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9635 = mobl.ref(result__);
        
        var nodes2319 = $("<span>");
        node1310.append(nodes2319);
        subs__.addSub((ui.image)(tmp9633, tmp9635, tmp9636, tmp9634, tmp9637, tmp9638, tmp9639, function(_, callback) {
          var root2394 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2394); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2319;
          nodes2319 = node.contents();
          oldNodes.replaceWith(nodes2319);
        }));
        node1307.append(node1310);
        var result__ = null;
        var tmp9645 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9644 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9643 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9642 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9641 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9640 = mobl.ref(result__);
        
        var nodes2318 = $("<span>");
        node1307.append(nodes2318);
        subs__.addSub((ui.image)(transitionImage, tmp9640, tmp9641, tmp9642, tmp9643, tmp9644, tmp9645, function(_, callback) {
          var root2393 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2393); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2318;
          nodes2318 = node.contents();
          oldNodes.replaceWith(nodes2318);
        }));
        node1306.append(node1307);
        
        var node1308 = $("<span>");
        node1308.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node1308.append("Events saved");
        node1306.append(node1308);
        root2390.append(node1306);
        var nodes2316 = $("<span>");
        root2390.append(nodes2316);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root2391 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2391); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2316;
          nodes2316 = node.contents();
          oldNodes.replaceWith(nodes2316);
        }));
        callback(root2390); return subs__;
        
        
        
        
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2315;
        nodes2315 = node.contents();
        oldNodes.replaceWith(nodes2315);
      }));
      callback(root2389); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2314;
      nodes2314 = node.contents();
      oldNodes.replaceWith(nodes2314);
    }));
    var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp9676 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9676.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp9676.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp9676.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp9679 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9678 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9677 = mobl.ref(result__);
    
    var nodes2321 = $("<span>");
    node1288.append(nodes2321);
    subs__.addSub((mobl.block)(tmp9676, tmp9677, tmp9678, tmp9679, function(_, callback) {
      var root2396 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2322 = $("<span>");
      root2396.append(nodes2322);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2397 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1311 = $("<div>");
        node1311.attr('id', "flash__Moodometer");
        
        var ref408 = mobl.ref(ui.flash);
        if(ref408.get() !== null) {
          node1311.attr('class', ref408.get());
          subs__.addSub(ref408.addEventListener('change', function(_, ref, val) {
            node1311.attr('class', val);
          }));
          
        }
        subs__.addSub(ref408.rebind());
        
        var result__ = null;
        var tmp9655 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9654 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9653 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9652 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9651 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9650 = mobl.ref(result__);
        
        var nodes2324 = $("<span>");
        node1311.append(nodes2324);
        subs__.addSub((ui.image)(backgroundImage, tmp9650, tmp9651, tmp9652, tmp9653, tmp9654, tmp9655, function(_, callback) {
          var root2399 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2399); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2324;
          nodes2324 = node.contents();
          oldNodes.replaceWith(nodes2324);
        }));
        
        var node1312 = $("<span>");
        
        var ref407 = mobl.ref(ui.transition);
        if(ref407.get() !== null) {
          node1312.attr('class', ref407.get());
          subs__.addSub(ref407.addEventListener('change', function(_, ref, val) {
            node1312.attr('class', val);
          }));
          
        }
        subs__.addSub(ref407.rebind());
        
        
        var node1314 = $("<span>");
        node1314.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 101px;");
        
        var val1076 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1076 !== null) {
          subs__.addSub(mobl.domBind(node1314, 'mousedown', val1076));
        }
        
        var val1077 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1077 !== null) {
          subs__.addSub(mobl.domBind(node1314, 'mouseup', val1077));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9657 = mobl.ref(result__);
        
        var result__ = "resources/images/next_trans.png";
        var tmp9656 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9662 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9661 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9660 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9659 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9658 = mobl.ref(result__);
        
        var nodes2327 = $("<span>");
        node1314.append(nodes2327);
        subs__.addSub((ui.image)(tmp9656, tmp9658, tmp9659, tmp9657, tmp9660, tmp9661, tmp9662, function(_, callback) {
          var root2402 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2402); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2327;
          nodes2327 = node.contents();
          oldNodes.replaceWith(nodes2327);
        }));
        node1312.append(node1314);
        
        var node1315 = $("<span>");
        node1315.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 20px;");
        
        var val1074 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1074 !== null) {
          subs__.addSub(mobl.domBind(node1315, 'mousedown', val1074));
        }
        
        var val1075 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1075 !== null) {
          subs__.addSub(mobl.domBind(node1315, 'mouseup', val1075));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = mobl.$("#flash__Moodometer").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9664 = mobl.ref(result__);
        
        var result__ = "resources/images/edit_trans.png";
        var tmp9663 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9669 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9668 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9667 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9666 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9665 = mobl.ref(result__);
        
        var nodes2326 = $("<span>");
        node1315.append(nodes2326);
        subs__.addSub((ui.image)(tmp9663, tmp9665, tmp9666, tmp9664, tmp9667, tmp9668, tmp9669, function(_, callback) {
          var root2401 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2401); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2326;
          nodes2326 = node.contents();
          oldNodes.replaceWith(nodes2326);
        }));
        node1312.append(node1315);
        var result__ = null;
        var tmp9675 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9674 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9673 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9672 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9671 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9670 = mobl.ref(result__);
        
        var nodes2325 = $("<span>");
        node1312.append(nodes2325);
        subs__.addSub((ui.image)(transitionImage, tmp9670, tmp9671, tmp9672, tmp9673, tmp9674, tmp9675, function(_, callback) {
          var root2400 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2400); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2325;
          nodes2325 = node.contents();
          oldNodes.replaceWith(nodes2325);
        }));
        node1311.append(node1312);
        
        var node1313 = $("<span>");
        node1313.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node1313.append("Mood saved");
        node1311.append(node1313);
        root2397.append(node1311);
        var nodes2323 = $("<span>");
        root2397.append(nodes2323);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root2398 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2398); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2323;
          nodes2323 = node.contents();
          oldNodes.replaceWith(nodes2323);
        }));
        callback(root2397); return subs__;
        
        
        
        
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2322;
        nodes2322 = node.contents();
        oldNodes.replaceWith(nodes2322);
      }));
      callback(root2396); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2321;
      nodes2321 = node.contents();
      oldNodes.replaceWith(nodes2321);
    }));
    var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp9680 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp9680.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp9680.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp9680.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp9683 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9682 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9681 = mobl.ref(result__);
    
    var nodes2328 = $("<span>");
    node1288.append(nodes2328);
    subs__.addSub((mobl.block)(tmp9680, tmp9681, tmp9682, tmp9683, function(_, callback) {
      var root2403 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2329 = $("<span>");
      root2403.append(nodes2329);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root2404 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes2330 = $("<span>");
        root2404.append(nodes2330);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root2405 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2405); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2330;
          nodes2330 = node.contents();
          oldNodes.replaceWith(nodes2330);
        }));
        callback(root2404); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2329;
        nodes2329 = node.contents();
        oldNodes.replaceWith(nodes2329);
      }));
      callback(root2403); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2328;
      nodes2328 = node.contents();
      oldNodes.replaceWith(nodes2328);
    }));
    root2358.append(node1288);
    var result__ = null;
    var tmp9717 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9716 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9715 = mobl.ref(result__);
    
    var nodes2285 = $("<span>");
    root2358.append(nodes2285);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp9715, tmp9716, tmp9717, function(_, callback) {
      var root2360 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1289 = $("<span>");
      node1289.attr('id', "placeholder");
      node1289.attr('style', "display: none;");
      
      var result__ = false;
      var tmp9692 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9691 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9690 = mobl.ref(result__);
      
      var nodes2290 = $("<span>");
      node1289.append(nodes2290);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp9690, tmp9691, tmp9692, function(_, callback) {
        var root2365 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1294 = $("<span>");
        node1294.attr('style', "margin-left: 57px;");
        
        var val1062 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1062 !== null) {
          subs__.addSub(mobl.domBind(node1294, 'mousedown', val1062));
        }
        
        var val1063 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1063 !== null) {
          subs__.addSub(mobl.domBind(node1294, 'mouseout', val1063));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#placeholder").hide();
                         var result__ = mobl.$("#navigators").show();
                         var result__ = lastTabName.get();
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9684 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9689 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9688 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9687 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9686 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9685 = mobl.ref(result__);
        
        var nodes2291 = $("<span>");
        node1294.append(nodes2291);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp9685, tmp9686, tmp9684, tmp9687, tmp9688, tmp9689, function(_, callback) {
          var root2366 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2366); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2291;
          nodes2291 = node.contents();
          oldNodes.replaceWith(nodes2291);
        }));
        root2365.append(node1294);
        callback(root2365); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2290;
        nodes2290 = node.contents();
        oldNodes.replaceWith(nodes2290);
      }));
      root2360.append(node1289);
      
      var node1290 = $("<span>");
      node1290.attr('id', "navigators");
      
      var result__ = false;
      var tmp9714 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9713 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9712 = mobl.ref(result__);
      
      var nodes2286 = $("<span>");
      node1290.append(nodes2286);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp9712, tmp9713, tmp9714, function(_, callback) {
        var root2361 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1291 = $("<span>");
        
        var val1060 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1060 !== null) {
          subs__.addSub(mobl.domBind(node1291, 'mousedown', val1060));
        }
        
        var val1061 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1061 !== null) {
          subs__.addSub(mobl.domBind(node1291, 'mouseup', val1061));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.prev(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9693 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9698 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9697 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9696 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9695 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9694 = mobl.ref(result__);
        
        var nodes2289 = $("<span>");
        node1291.append(nodes2289);
        subs__.addSub((ui.image)(backButtonImage, tmp9694, tmp9695, tmp9693, tmp9696, tmp9697, tmp9698, function(_, callback) {
          var root2364 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2364); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2289;
          nodes2289 = node.contents();
          oldNodes.replaceWith(nodes2289);
        }));
        root2361.append(node1291);
        
        var node1292 = $("<span>");
        
        var ref402 = mobl.ref(ui.stressGraphButton);
        if(ref402.get() !== null) {
          node1292.attr('class', ref402.get());
          subs__.addSub(ref402.addEventListener('change', function(_, ref, val) {
            node1292.attr('class', val);
          }));
          
        }
        subs__.addSub(ref402.rebind());
        
        var val1056 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1056 !== null) {
          subs__.addSub(mobl.domBind(node1292, 'mouseover', val1056));
        }
        
        var val1057 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1057 !== null) {
          subs__.addSub(mobl.domBind(node1292, 'mouseout', val1057));
        }
        
        var val1058 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1058 !== null) {
          subs__.addSub(mobl.domBind(node1292, 'mousedown', val1058));
        }
        
        var val1059 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1059 !== null) {
          subs__.addSub(mobl.domBind(node1292, 'mouseup', val1059));
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
                         models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll105) {
                           coll105 = coll105.reverse();
                           function processOne49() {
                             var mood;
                             mood = coll105.pop();
                             var result__ = data + mood.happy + ",";
                             data = result__;
                             
                             if(coll105.length > 0) processOne49(); else rest49();
                             
                           }
                           function rest49() {
                             var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                             moods.set(result__);
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll105.length > 0) processOne49(); else rest49();
                         });
                         
                       };
        var tmp9700 = mobl.ref(result__);
        
        var result__ = activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get();
        var tmp9699 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp9699.set(activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get());
        }));
        subs__.addSub(stressGraphImageOn.addEventListener('change', function() {
          tmp9699.set(activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get());
        }));
        subs__.addSub(stressGraphImage.addEventListener('change', function() {
          tmp9699.set(activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get());
        }));
        
        var result__ = null;
        var tmp9705 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9704 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9703 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9702 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9701 = mobl.ref(result__);
        
        var nodes2288 = $("<span>");
        node1292.append(nodes2288);
        subs__.addSub((ui.image)(tmp9699, tmp9701, tmp9702, tmp9700, tmp9703, tmp9704, tmp9705, function(_, callback) {
          var root2363 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2363); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2288;
          nodes2288 = node.contents();
          oldNodes.replaceWith(nodes2288);
        }));
        root2361.append(node1292);
        
        var node1293 = $("<span>");
        
        var val1054 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1054 !== null) {
          subs__.addSub(mobl.domBind(node1293, 'mousedown', val1054));
        }
        
        var val1055 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1055 !== null) {
          subs__.addSub(mobl.domBind(node1293, 'mouseup', val1055));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9706 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9711 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9710 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9709 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9708 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9707 = mobl.ref(result__);
        
        var nodes2287 = $("<span>");
        node1293.append(nodes2287);
        subs__.addSub((ui.image)(nextButtonImage, tmp9707, tmp9708, tmp9706, tmp9709, tmp9710, tmp9711, function(_, callback) {
          var root2362 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2362); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2287;
          nodes2287 = node.contents();
          oldNodes.replaceWith(nodes2287);
        }));
        root2361.append(node1293);
        callback(root2361); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2286;
        nodes2286 = node.contents();
        oldNodes.replaceWith(nodes2286);
      }));
      root2360.append(node1290);
      callback(root2360); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2285;
      nodes2285 = node.contents();
      oldNodes.replaceWith(nodes2285);
    }));
    var result__ = null;
    var tmp9764 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9763 = mobl.ref(result__);
    
    var result__ = null;
    var tmp9762 = mobl.ref(result__);
    
    var nodes2292 = $("<span>");
    root2358.append(nodes2292);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp9762, tmp9763, tmp9764, function(_, callback) {
      var root2367 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1295 = $("<span>");
      node1295.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp9726 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp9726.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp9726.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp9726.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp9725 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9728 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9727 = mobl.ref(result__);
      
      var nodes2299 = $("<span>");
      node1295.append(nodes2299);
      subs__.addSub((mobl.span)(tmp9726, tmp9727, tmp9725, tmp9728, function(_, callback) {
        var root2374 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png";
        var tmp9718 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp9718.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        var result__ = null;
        var tmp9724 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9723 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9722 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9721 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9720 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9719 = mobl.ref(result__);
        
        var nodes2300 = $("<span>");
        root2374.append(nodes2300);
        subs__.addSub((ui.image)(tmp9718, tmp9719, tmp9720, tmp9721, tmp9722, tmp9723, tmp9724, function(_, callback) {
          var root2375 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2375); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2300;
          nodes2300 = node.contents();
          oldNodes.replaceWith(nodes2300);
        }));
        callback(root2374); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2299;
        nodes2299 = node.contents();
        oldNodes.replaceWith(nodes2299);
      }));
      root2367.append(node1295);
      
      var node1296 = $("<span>");
      node1296.attr('style', "position: absolute; margin-left: 70px;");
      
      var result__ = activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp9737 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp9737.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp9737.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp9737.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp9736 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9739 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9738 = mobl.ref(result__);
      
      var nodes2297 = $("<span>");
      node1296.append(nodes2297);
      subs__.addSub((mobl.span)(tmp9737, tmp9738, tmp9736, tmp9739, function(_, callback) {
        var root2372 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png";
        var tmp9729 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp9729.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        var result__ = null;
        var tmp9735 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9734 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9733 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9732 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9731 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9730 = mobl.ref(result__);
        
        var nodes2298 = $("<span>");
        root2372.append(nodes2298);
        subs__.addSub((ui.image)(tmp9729, tmp9730, tmp9731, tmp9732, tmp9733, tmp9734, tmp9735, function(_, callback) {
          var root2373 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2373); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2298;
          nodes2298 = node.contents();
          oldNodes.replaceWith(nodes2298);
        }));
        callback(root2372); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2297;
        nodes2297 = node.contents();
        oldNodes.replaceWith(nodes2297);
      }));
      root2367.append(node1296);
      
      var node1297 = $("<span>");
      node1297.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp9748 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp9748.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp9748.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp9748.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp9747 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9750 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9749 = mobl.ref(result__);
      
      var nodes2295 = $("<span>");
      node1297.append(nodes2295);
      subs__.addSub((mobl.span)(tmp9748, tmp9749, tmp9747, tmp9750, function(_, callback) {
        var root2370 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png";
        var tmp9740 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp9740.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        var result__ = null;
        var tmp9746 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9745 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9744 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9743 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9742 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9741 = mobl.ref(result__);
        
        var nodes2296 = $("<span>");
        root2370.append(nodes2296);
        subs__.addSub((ui.image)(tmp9740, tmp9741, tmp9742, tmp9743, tmp9744, tmp9745, tmp9746, function(_, callback) {
          var root2371 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2371); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2296;
          nodes2296 = node.contents();
          oldNodes.replaceWith(nodes2296);
        }));
        callback(root2370); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2295;
        nodes2295 = node.contents();
        oldNodes.replaceWith(nodes2295);
      }));
      root2367.append(node1297);
      
      var node1298 = $("<span>");
      node1298.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp9759 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp9759.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp9759.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp9759.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp9758 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9761 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9760 = mobl.ref(result__);
      
      var nodes2293 = $("<span>");
      node1298.append(nodes2293);
      subs__.addSub((mobl.span)(tmp9759, tmp9760, tmp9758, tmp9761, function(_, callback) {
        var root2368 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png";
        var tmp9751 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp9751.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        var result__ = null;
        var tmp9757 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9756 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9755 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9754 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9753 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9752 = mobl.ref(result__);
        
        var nodes2294 = $("<span>");
        root2368.append(nodes2294);
        subs__.addSub((ui.image)(tmp9751, tmp9752, tmp9753, tmp9754, tmp9755, tmp9756, tmp9757, function(_, callback) {
          var root2369 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2369); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2294;
          nodes2294 = node.contents();
          oldNodes.replaceWith(nodes2294);
        }));
        callback(root2368); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2293;
        nodes2293 = node.contents();
        oldNodes.replaceWith(nodes2293);
      }));
      root2367.append(node1298);
      callback(root2367); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2292;
      nodes2292 = node.contents();
      oldNodes.replaceWith(nodes2292);
    }));
    callback(root2358); return subs__;
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2283;
    nodes2283 = node.contents();
    oldNodes.replaceWith(nodes2283);
  }));
  callback(root2357); return subs__;
  
  return subs__;
};
