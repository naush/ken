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
  var coll102 = mobl.range(0, tabs.length);
  var length23 = coll102.length;
  for(var i46 = 0; i46 < length23; i46++) {
    var index;
    index = coll102.get(i46);
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
  var root1221 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp4398 = mobl.ref(result__);
  
  var result__ = null;
  var tmp4397 = mobl.ref(result__);
  
  var result__ = null;
  var tmp4396 = mobl.ref(result__);
  
  var nodes1121 = $("<span>");
  root1221.append(nodes1121);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp4396, tmp4397, tmp4398, function(_, callback) {
    var root1222 = $("<span>");
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
    var tmp4233 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp4233.set(ken.header(activeTabName.get()));
    }));
    
    var result__ = null;
    var tmp4234 = mobl.ref(result__);
    
    var nodes1122 = $("<span>");
    root1222.append(nodes1122);
    subs__.addSub((ui.customHeader)(tmp4233, tmp4234, function(_, callback) {
      var root1223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1223); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1122;
      nodes1122 = node.contents();
      oldNodes.replaceWith(nodes1122);
    }));
    
    var node599 = $("<div>");
    node599.attr('style', "height: 300px; margin-left: 25px;");
    
    var result__ = activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp4248 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp4248.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp4248.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp4248.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp4251 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4250 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4249 = mobl.ref(result__);
    
    var nodes1139 = $("<span>");
    node599.append(nodes1139);
    subs__.addSub((mobl.block)(tmp4248, tmp4249, tmp4250, tmp4251, function(_, callback) {
      var root1240 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node610 = $("<span>");
      node610.attr('style', "position: absolute; color: white; margin-left: -25px; margin-top: -61px;");
      
      var result__ = "resources/images/welcome.png";
      var tmp4235 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4241 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4240 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4239 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4238 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4237 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4236 = mobl.ref(result__);
      
      var nodes1140 = $("<span>");
      node610.append(nodes1140);
      subs__.addSub((ui.image)(tmp4235, tmp4236, tmp4237, tmp4238, tmp4239, tmp4240, tmp4241, function(_, callback) {
        var root1241 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1241); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1140;
        nodes1140 = node.contents();
        oldNodes.replaceWith(nodes1140);
      }));
      
      var node611 = $("<span>");
      node611.attr('style', "float:left; position:absolute; margin-top:286px; margin-left:-289px;");
      
      var val479 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup_pressed.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val479 !== null) {
        subs__.addSub(mobl.domBind(node611, 'mousedown', val479));
      }
      
      var val480 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val480 !== null) {
        subs__.addSub(mobl.domBind(node611, 'mouseup', val480));
      }
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "Reminder";
                       activeTabName.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp4242 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4247 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4246 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4245 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4244 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4243 = mobl.ref(result__);
      
      var nodes1141 = $("<span>");
      node611.append(nodes1141);
      subs__.addSub((ui.image)(beginSetupImage, tmp4243, tmp4244, tmp4242, tmp4245, tmp4246, tmp4247, function(_, callback) {
        var root1242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1141;
        nodes1141 = node.contents();
        oldNodes.replaceWith(nodes1141);
      }));
      node610.append(node611);
      root1240.append(node610);
      callback(root1240); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1139;
      nodes1139 = node.contents();
      oldNodes.replaceWith(nodes1139);
    }));
    var result__ = activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp4259 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp4259.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp4259.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp4259.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp4262 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4261 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4260 = mobl.ref(result__);
    
    var nodes1142 = $("<span>");
    node599.append(nodes1142);
    subs__.addSub((mobl.block)(tmp4259, tmp4260, tmp4261, tmp4262, function(_, callback) {
      var root1243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1143 = $("<span>");
      root1243.append(nodes1143);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = "http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1";
        var tmp4252 = mobl.ref(result__);
        subs__.addSub(moods.addEventListener('change', function() {
          tmp4252.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        var result__ = null;
        var tmp4258 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4257 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4256 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4255 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4254 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4253 = mobl.ref(result__);
        
        var nodes1144 = $("<span>");
        root1244.append(nodes1144);
        subs__.addSub((ui.image)(tmp4252, tmp4253, tmp4254, tmp4255, tmp4256, tmp4257, tmp4258, function(_, callback) {
          var root1245 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1245); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1144;
          nodes1144 = node.contents();
          oldNodes.replaceWith(nodes1144);
        }));
        callback(root1244); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1143;
        nodes1143 = node.contents();
        oldNodes.replaceWith(nodes1143);
      }));
      callback(root1243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1142;
      nodes1142 = node.contents();
      oldNodes.replaceWith(nodes1142);
    }));
    var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp4275 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp4275.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp4275.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp4275.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp4278 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4277 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4276 = mobl.ref(result__);
    
    var nodes1145 = $("<span>");
    node599.append(nodes1145);
    subs__.addSub((mobl.block)(tmp4275, tmp4276, tmp4277, tmp4278, function(_, callback) {
      var root1246 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1146 = $("<span>");
      root1246.append(nodes1146);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1247 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node612 = $("<div>");
        node612.attr('id', "flash__Reminder");
        
        var ref238 = mobl.ref(ui.flash);
        if(ref238.get() !== null) {
          node612.attr('class', ref238.get());
          subs__.addSub(ref238.addEventListener('change', function(_, ref, val) {
            node612.attr('class', val);
          }));
          
        }
        subs__.addSub(ref238.rebind());
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Reminder").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4263 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4268 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4267 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4266 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4265 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4264 = mobl.ref(result__);
        
        var nodes1148 = $("<span>");
        node612.append(nodes1148);
        subs__.addSub((ui.image)(backgroundImage, tmp4264, tmp4265, tmp4263, tmp4266, tmp4267, tmp4268, function(_, callback) {
          var root1249 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1249); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1148;
          nodes1148 = node.contents();
          oldNodes.replaceWith(nodes1148);
        }));
        
        var node613 = $("<span>");
        
        var ref237 = mobl.ref(ui.transition);
        if(ref237.get() !== null) {
          node613.attr('class', ref237.get());
          subs__.addSub(ref237.addEventListener('change', function(_, ref, val) {
            node613.attr('class', val);
          }));
          
        }
        subs__.addSub(ref237.rebind());
        
        var val481 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val481 !== null) {
          subs__.addSub(mobl.domBind(node613, 'mousedown', val481));
        }
        
        var val482 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val482 !== null) {
          subs__.addSub(mobl.domBind(node613, 'mouseup', val482));
        }
        
        var result__ = null;
        var tmp4274 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4273 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4272 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4271 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4270 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4269 = mobl.ref(result__);
        
        var nodes1149 = $("<span>");
        node613.append(nodes1149);
        subs__.addSub((ui.image)(transitionImage, tmp4269, tmp4270, tmp4271, tmp4272, tmp4273, tmp4274, function(_, callback) {
          var root1250 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1250); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1149;
          nodes1149 = node.contents();
          oldNodes.replaceWith(nodes1149);
        }));
        node612.append(node613);
        
        var node614 = $("<span>");
        node614.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node614.append("Reminders saved");
        node612.append(node614);
        root1247.append(node612);
        var nodes1147 = $("<span>");
        root1247.append(nodes1147);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root1248 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1248); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1147;
          nodes1147 = node.contents();
          oldNodes.replaceWith(nodes1147);
        }));
        callback(root1247); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1146;
        nodes1146 = node.contents();
        oldNodes.replaceWith(nodes1146);
      }));
      callback(root1246); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1145;
      nodes1145 = node.contents();
      oldNodes.replaceWith(nodes1145);
    }));
    var result__ = activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp4291 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp4291.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp4291.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp4291.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp4294 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4293 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4292 = mobl.ref(result__);
    
    var nodes1150 = $("<span>");
    node599.append(nodes1150);
    subs__.addSub((mobl.block)(tmp4291, tmp4292, tmp4293, tmp4294, function(_, callback) {
      var root1251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1151 = $("<span>");
      root1251.append(nodes1151);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node615 = $("<div>");
        node615.attr('id', "flash__Life");
        
        var ref240 = mobl.ref(ui.flash);
        if(ref240.get() !== null) {
          node615.attr('class', ref240.get());
          subs__.addSub(ref240.addEventListener('change', function(_, ref, val) {
            node615.attr('class', val);
          }));
          
        }
        subs__.addSub(ref240.rebind());
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Life").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4279 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4284 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4283 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4282 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4281 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4280 = mobl.ref(result__);
        
        var nodes1153 = $("<span>");
        node615.append(nodes1153);
        subs__.addSub((ui.image)(backgroundImage, tmp4280, tmp4281, tmp4279, tmp4282, tmp4283, tmp4284, function(_, callback) {
          var root1254 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1254); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1153;
          nodes1153 = node.contents();
          oldNodes.replaceWith(nodes1153);
        }));
        
        var node616 = $("<span>");
        
        var ref239 = mobl.ref(ui.transition);
        if(ref239.get() !== null) {
          node616.attr('class', ref239.get());
          subs__.addSub(ref239.addEventListener('change', function(_, ref, val) {
            node616.attr('class', val);
          }));
          
        }
        subs__.addSub(ref239.rebind());
        
        var val483 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val483 !== null) {
          subs__.addSub(mobl.domBind(node616, 'mousedown', val483));
        }
        
        var val484 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val484 !== null) {
          subs__.addSub(mobl.domBind(node616, 'mouseup', val484));
        }
        
        var result__ = null;
        var tmp4290 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4289 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4288 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4287 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4286 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4285 = mobl.ref(result__);
        
        var nodes1154 = $("<span>");
        node616.append(nodes1154);
        subs__.addSub((ui.image)(transitionImage, tmp4285, tmp4286, tmp4287, tmp4288, tmp4289, tmp4290, function(_, callback) {
          var root1255 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1255); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1154;
          nodes1154 = node.contents();
          oldNodes.replaceWith(nodes1154);
        }));
        node615.append(node616);
        
        var node617 = $("<span>");
        node617.attr('style', "position: absolute; color: white; margin-left: -210px; margin-top: 202px;");
        
        
        node617.append("Events saved");
        node615.append(node617);
        root1252.append(node615);
        var nodes1152 = $("<span>");
        root1252.append(nodes1152);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root1253 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1253); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1152;
          nodes1152 = node.contents();
          oldNodes.replaceWith(nodes1152);
        }));
        callback(root1252); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1151;
        nodes1151 = node.contents();
        oldNodes.replaceWith(nodes1151);
      }));
      callback(root1251); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1150;
      nodes1150 = node.contents();
      oldNodes.replaceWith(nodes1150);
    }));
    var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp4307 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp4307.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp4307.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp4307.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp4310 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4309 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4308 = mobl.ref(result__);
    
    var nodes1155 = $("<span>");
    node599.append(nodes1155);
    subs__.addSub((mobl.block)(tmp4307, tmp4308, tmp4309, tmp4310, function(_, callback) {
      var root1256 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1156 = $("<span>");
      root1256.append(nodes1156);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1257 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node618 = $("<div>");
        node618.attr('id', "flash__Moodometer");
        
        var ref242 = mobl.ref(ui.flash);
        if(ref242.get() !== null) {
          node618.attr('class', ref242.get());
          subs__.addSub(ref242.addEventListener('change', function(_, ref, val) {
            node618.attr('class', val);
          }));
          
        }
        subs__.addSub(ref242.rebind());
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = mobl.$("#flash__Moodometer").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4295 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4300 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4299 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4298 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4297 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4296 = mobl.ref(result__);
        
        var nodes1158 = $("<span>");
        node618.append(nodes1158);
        subs__.addSub((ui.image)(backgroundImage, tmp4296, tmp4297, tmp4295, tmp4298, tmp4299, tmp4300, function(_, callback) {
          var root1259 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1259); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1158;
          nodes1158 = node.contents();
          oldNodes.replaceWith(nodes1158);
        }));
        
        var node619 = $("<span>");
        
        var ref241 = mobl.ref(ui.transition);
        if(ref241.get() !== null) {
          node619.attr('class', ref241.get());
          subs__.addSub(ref241.addEventListener('change', function(_, ref, val) {
            node619.attr('class', val);
          }));
          
        }
        subs__.addSub(ref241.rebind());
        
        var val485 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val485 !== null) {
          subs__.addSub(mobl.domBind(node619, 'mousedown', val485));
        }
        
        var val486 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val486 !== null) {
          subs__.addSub(mobl.domBind(node619, 'mouseup', val486));
        }
        
        var result__ = null;
        var tmp4306 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4305 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4304 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4303 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4302 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4301 = mobl.ref(result__);
        
        var nodes1159 = $("<span>");
        node619.append(nodes1159);
        subs__.addSub((ui.image)(transitionImage, tmp4301, tmp4302, tmp4303, tmp4304, tmp4305, tmp4306, function(_, callback) {
          var root1260 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1260); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1159;
          nodes1159 = node.contents();
          oldNodes.replaceWith(nodes1159);
        }));
        node618.append(node619);
        
        var node620 = $("<span>");
        node620.attr('style', "position: absolute; color: white; margin-left: -203px; margin-top: 202px;");
        
        
        node620.append("Mood saved");
        node618.append(node620);
        root1257.append(node618);
        var nodes1157 = $("<span>");
        root1257.append(nodes1157);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root1258 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1258); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1157;
          nodes1157 = node.contents();
          oldNodes.replaceWith(nodes1157);
        }));
        callback(root1257); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1156;
        nodes1156 = node.contents();
        oldNodes.replaceWith(nodes1156);
      }));
      callback(root1256); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1155;
      nodes1155 = node.contents();
      oldNodes.replaceWith(nodes1155);
    }));
    var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp4311 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp4311.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp4311.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp4311.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp4314 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4313 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4312 = mobl.ref(result__);
    
    var nodes1160 = $("<span>");
    node599.append(nodes1160);
    subs__.addSub((mobl.block)(tmp4311, tmp4312, tmp4313, tmp4314, function(_, callback) {
      var root1261 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1161 = $("<span>");
      root1261.append(nodes1161);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root1262 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1162 = $("<span>");
        root1262.append(nodes1162);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root1263 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1263); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1162;
          nodes1162 = node.contents();
          oldNodes.replaceWith(nodes1162);
        }));
        callback(root1262); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1161;
        nodes1161 = node.contents();
        oldNodes.replaceWith(nodes1161);
      }));
      callback(root1261); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1160;
      nodes1160 = node.contents();
      oldNodes.replaceWith(nodes1160);
    }));
    root1222.append(node599);
    var result__ = null;
    var tmp4348 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4347 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4346 = mobl.ref(result__);
    
    var nodes1123 = $("<span>");
    root1222.append(nodes1123);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp4346, tmp4347, tmp4348, function(_, callback) {
      var root1224 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node600 = $("<span>");
      node600.attr('id', "placeholder");
      node600.attr('style', "display: none;");
      
      var result__ = false;
      var tmp4323 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4322 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4321 = mobl.ref(result__);
      
      var nodes1128 = $("<span>");
      node600.append(nodes1128);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp4321, tmp4322, tmp4323, function(_, callback) {
        var root1229 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node605 = $("<span>");
        node605.attr('style', "margin-left: 57px;");
        
        var val477 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val477 !== null) {
          subs__.addSub(mobl.domBind(node605, 'mousedown', val477));
        }
        
        var val478 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val478 !== null) {
          subs__.addSub(mobl.domBind(node605, 'mouseout', val478));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#placeholder").hide();
                         var result__ = mobl.$("#navigators").show();
                         var result__ = lastTabName.get();
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4315 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4320 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4319 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4318 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4317 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4316 = mobl.ref(result__);
        
        var nodes1129 = $("<span>");
        node605.append(nodes1129);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp4316, tmp4317, tmp4315, tmp4318, tmp4319, tmp4320, function(_, callback) {
          var root1230 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1230); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1129;
          nodes1129 = node.contents();
          oldNodes.replaceWith(nodes1129);
        }));
        root1229.append(node605);
        callback(root1229); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1128;
        nodes1128 = node.contents();
        oldNodes.replaceWith(nodes1128);
      }));
      root1224.append(node600);
      
      var node601 = $("<span>");
      node601.attr('id', "navigators");
      
      var result__ = false;
      var tmp4345 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4344 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4343 = mobl.ref(result__);
      
      var nodes1124 = $("<span>");
      node601.append(nodes1124);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp4343, tmp4344, tmp4345, function(_, callback) {
        var root1225 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node602 = $("<span>");
        
        var val475 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val475 !== null) {
          subs__.addSub(mobl.domBind(node602, 'mousedown', val475));
        }
        
        var val476 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val476 !== null) {
          subs__.addSub(mobl.domBind(node602, 'mouseup', val476));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.prev(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4324 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4329 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4328 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4327 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4326 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4325 = mobl.ref(result__);
        
        var nodes1127 = $("<span>");
        node602.append(nodes1127);
        subs__.addSub((ui.image)(backButtonImage, tmp4325, tmp4326, tmp4324, tmp4327, tmp4328, tmp4329, function(_, callback) {
          var root1228 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1228); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1127;
          nodes1127 = node.contents();
          oldNodes.replaceWith(nodes1127);
        }));
        root1225.append(node602);
        
        var node603 = $("<span>");
        
        var ref236 = mobl.ref(ui.stressGraphButton);
        if(ref236.get() !== null) {
          node603.attr('class', ref236.get());
          subs__.addSub(ref236.addEventListener('change', function(_, ref, val) {
            node603.attr('class', val);
          }));
          
        }
        subs__.addSub(ref236.rebind());
        
        var val471 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val471 !== null) {
          subs__.addSub(mobl.domBind(node603, 'mouseover', val471));
        }
        
        var val472 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val472 !== null) {
          subs__.addSub(mobl.domBind(node603, 'mouseout', val472));
        }
        
        var val473 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val473 !== null) {
          subs__.addSub(mobl.domBind(node603, 'mousedown', val473));
        }
        
        var val474 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val474 !== null) {
          subs__.addSub(mobl.domBind(node603, 'mouseup', val474));
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
                         models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll103) {
                           coll103 = coll103.reverse();
                           function processOne49() {
                             var mood;
                             mood = coll103.pop();
                             var result__ = data + mood.happy + ",";
                             data = result__;
                             
                             if(coll103.length > 0) processOne49(); else rest49();
                             
                           }
                           function rest49() {
                             var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                             moods.set(result__);
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll103.length > 0) processOne49(); else rest49();
                         });
                         
                       };
        var tmp4331 = mobl.ref(result__);
        
        var result__ = activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get();
        var tmp4330 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp4330.set(activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get());
        }));
        subs__.addSub(stressGraphImageOn.addEventListener('change', function() {
          tmp4330.set(activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get());
        }));
        subs__.addSub(stressGraphImage.addEventListener('change', function() {
          tmp4330.set(activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get());
        }));
        
        var result__ = null;
        var tmp4336 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4335 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4334 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4333 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4332 = mobl.ref(result__);
        
        var nodes1126 = $("<span>");
        node603.append(nodes1126);
        subs__.addSub((ui.image)(tmp4330, tmp4332, tmp4333, tmp4331, tmp4334, tmp4335, tmp4336, function(_, callback) {
          var root1227 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1227); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1126;
          nodes1126 = node.contents();
          oldNodes.replaceWith(nodes1126);
        }));
        root1225.append(node603);
        
        var node604 = $("<span>");
        
        var val469 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val469 !== null) {
          subs__.addSub(mobl.domBind(node604, 'mousedown', val469));
        }
        
        var val470 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val470 !== null) {
          subs__.addSub(mobl.domBind(node604, 'mouseup', val470));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4337 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4342 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4341 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4340 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4339 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4338 = mobl.ref(result__);
        
        var nodes1125 = $("<span>");
        node604.append(nodes1125);
        subs__.addSub((ui.image)(nextButtonImage, tmp4338, tmp4339, tmp4337, tmp4340, tmp4341, tmp4342, function(_, callback) {
          var root1226 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1226); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1125;
          nodes1125 = node.contents();
          oldNodes.replaceWith(nodes1125);
        }));
        root1225.append(node604);
        callback(root1225); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1124;
        nodes1124 = node.contents();
        oldNodes.replaceWith(nodes1124);
      }));
      root1224.append(node601);
      callback(root1224); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1123;
      nodes1123 = node.contents();
      oldNodes.replaceWith(nodes1123);
    }));
    var result__ = null;
    var tmp4395 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4394 = mobl.ref(result__);
    
    var result__ = null;
    var tmp4393 = mobl.ref(result__);
    
    var nodes1130 = $("<span>");
    root1222.append(nodes1130);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp4393, tmp4394, tmp4395, function(_, callback) {
      var root1231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node606 = $("<span>");
      node606.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp4357 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp4357.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp4357.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp4357.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp4356 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4359 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4358 = mobl.ref(result__);
      
      var nodes1137 = $("<span>");
      node606.append(nodes1137);
      subs__.addSub((mobl.span)(tmp4357, tmp4358, tmp4356, tmp4359, function(_, callback) {
        var root1238 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png";
        var tmp4349 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp4349.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        var result__ = null;
        var tmp4355 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4354 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4353 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4352 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4351 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4350 = mobl.ref(result__);
        
        var nodes1138 = $("<span>");
        root1238.append(nodes1138);
        subs__.addSub((ui.image)(tmp4349, tmp4350, tmp4351, tmp4352, tmp4353, tmp4354, tmp4355, function(_, callback) {
          var root1239 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1239); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1138;
          nodes1138 = node.contents();
          oldNodes.replaceWith(nodes1138);
        }));
        callback(root1238); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1137;
        nodes1137 = node.contents();
        oldNodes.replaceWith(nodes1137);
      }));
      root1231.append(node606);
      
      var node607 = $("<span>");
      node607.attr('style', "position: absolute; margin-left: 70px;");
      
      var result__ = activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp4368 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp4368.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp4368.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp4368.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp4367 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4370 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4369 = mobl.ref(result__);
      
      var nodes1135 = $("<span>");
      node607.append(nodes1135);
      subs__.addSub((mobl.span)(tmp4368, tmp4369, tmp4367, tmp4370, function(_, callback) {
        var root1236 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png";
        var tmp4360 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp4360.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        var result__ = null;
        var tmp4366 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4365 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4364 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4363 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4362 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4361 = mobl.ref(result__);
        
        var nodes1136 = $("<span>");
        root1236.append(nodes1136);
        subs__.addSub((ui.image)(tmp4360, tmp4361, tmp4362, tmp4363, tmp4364, tmp4365, tmp4366, function(_, callback) {
          var root1237 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1237); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1136;
          nodes1136 = node.contents();
          oldNodes.replaceWith(nodes1136);
        }));
        callback(root1236); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1135;
        nodes1135 = node.contents();
        oldNodes.replaceWith(nodes1135);
      }));
      root1231.append(node607);
      
      var node608 = $("<span>");
      node608.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp4379 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp4379.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp4379.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp4379.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp4378 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4381 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4380 = mobl.ref(result__);
      
      var nodes1133 = $("<span>");
      node608.append(nodes1133);
      subs__.addSub((mobl.span)(tmp4379, tmp4380, tmp4378, tmp4381, function(_, callback) {
        var root1234 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png";
        var tmp4371 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp4371.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        var result__ = null;
        var tmp4377 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4376 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4375 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4374 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4373 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4372 = mobl.ref(result__);
        
        var nodes1134 = $("<span>");
        root1234.append(nodes1134);
        subs__.addSub((ui.image)(tmp4371, tmp4372, tmp4373, tmp4374, tmp4375, tmp4376, tmp4377, function(_, callback) {
          var root1235 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1235); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1134;
          nodes1134 = node.contents();
          oldNodes.replaceWith(nodes1134);
        }));
        callback(root1234); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1133;
        nodes1133 = node.contents();
        oldNodes.replaceWith(nodes1133);
      }));
      root1231.append(node608);
      
      var node609 = $("<span>");
      node609.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp4390 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp4390.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp4390.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp4390.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp4389 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4392 = mobl.ref(result__);
      
      var result__ = null;
      var tmp4391 = mobl.ref(result__);
      
      var nodes1131 = $("<span>");
      node609.append(nodes1131);
      subs__.addSub((mobl.span)(tmp4390, tmp4391, tmp4389, tmp4392, function(_, callback) {
        var root1232 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png";
        var tmp4382 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp4382.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        var result__ = null;
        var tmp4388 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4387 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4386 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4385 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4384 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4383 = mobl.ref(result__);
        
        var nodes1132 = $("<span>");
        root1232.append(nodes1132);
        subs__.addSub((ui.image)(tmp4382, tmp4383, tmp4384, tmp4385, tmp4386, tmp4387, tmp4388, function(_, callback) {
          var root1233 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1233); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1132;
          nodes1132 = node.contents();
          oldNodes.replaceWith(nodes1132);
        }));
        callback(root1232); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1131;
        nodes1131 = node.contents();
        oldNodes.replaceWith(nodes1131);
      }));
      root1231.append(node609);
      callback(root1231); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1130;
      nodes1130 = node.contents();
      oldNodes.replaceWith(nodes1130);
    }));
    callback(root1222); return subs__;
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1121;
    nodes1121 = node.contents();
    oldNodes.replaceWith(nodes1121);
  }));
  callback(root1221); return subs__;
  
  return subs__;
};
