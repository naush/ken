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
  var coll238 = mobl.range(0, tabs.length);
  var length71 = coll238.length;
  for(var i96 = 0; i96 < length71; i96++) {
    var index;
    index = coll238.get(i96);
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
  var root3857 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp16532 = mobl.ref(result__);
  
  var result__ = null;
  var tmp16531 = mobl.ref(result__);
  
  var result__ = null;
  var tmp16530 = mobl.ref(result__);
  
  var nodes3712 = $("<span>");
  root3857.append(nodes3712);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp16530, tmp16531, tmp16532, function(_, callback) {
    var root3858 = $("<span>");
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
    var tmp16300 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp16300.set(ken.header(activeTabName.get()));
    }));
    
    var result__ = null;
    var tmp16301 = mobl.ref(result__);
    
    var nodes3713 = $("<span>");
    root3858.append(nodes3713);
    subs__.addSub((ui.customHeader)(tmp16300, tmp16301, function(_, callback) {
      var root3859 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3859); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3713;
      nodes3713 = node.contents();
      oldNodes.replaceWith(nodes3713);
    }));
    
    var node2232 = $("<div>");
    node2232.attr('style', "height: 300px; margin-left: 25px;");
    
    var result__ = activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp16315 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp16315.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp16315.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp16315.set(activeTabName.get() == "Welcome" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp16318 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16317 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16316 = mobl.ref(result__);
    
    var nodes3732 = $("<span>");
    node2232.append(nodes3732);
    subs__.addSub((mobl.block)(tmp16315, tmp16316, tmp16317, tmp16318, function(_, callback) {
      var root3878 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2245 = $("<span>");
      node2245.attr('style', "position: absolute; color: white; margin-left: -25px; margin-top: -61px;");
      
      var result__ = "resources/images/welcome.png";
      var tmp16302 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16308 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16307 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16306 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16305 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16304 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16303 = mobl.ref(result__);
      
      var nodes3733 = $("<span>");
      node2245.append(nodes3733);
      subs__.addSub((ui.image)(tmp16302, tmp16303, tmp16304, tmp16305, tmp16306, tmp16307, tmp16308, function(_, callback) {
        var root3879 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3879); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3733;
        nodes3733 = node.contents();
        oldNodes.replaceWith(nodes3733);
      }));
      
      var node2246 = $("<span>");
      node2246.attr('style', "float:left; position:absolute; margin-top:286px; margin-left:-289px;");
      
      var val1774 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup_pressed.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1774 !== null) {
        subs__.addSub(mobl.domBind(node2246, 'mousedown', val1774));
      }
      
      var val1775 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/begin_setup.png";
                    beginSetupImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1775 !== null) {
        subs__.addSub(mobl.domBind(node2246, 'mouseup', val1775));
      }
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "Reminder";
                       activeTabName.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp16309 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16314 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16313 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16312 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16311 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16310 = mobl.ref(result__);
      
      var nodes3734 = $("<span>");
      node2246.append(nodes3734);
      subs__.addSub((ui.image)(beginSetupImage, tmp16310, tmp16311, tmp16309, tmp16312, tmp16313, tmp16314, function(_, callback) {
        var root3880 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3880); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3734;
        nodes3734 = node.contents();
        oldNodes.replaceWith(nodes3734);
      }));
      node2245.append(node2246);
      root3878.append(node2245);
      callback(root3878); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3732;
      nodes3732 = node.contents();
      oldNodes.replaceWith(nodes3732);
    }));
    var result__ = activeTabName.get() == "Settings" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp16326 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp16326.set(activeTabName.get() == "Settings" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp16326.set(activeTabName.get() == "Settings" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp16326.set(activeTabName.get() == "Settings" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp16329 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16328 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16327 = mobl.ref(result__);
    
    var nodes3735 = $("<span>");
    node2232.append(nodes3735);
    subs__.addSub((mobl.block)(tmp16326, tmp16327, tmp16328, tmp16329, function(_, callback) {
      var root3881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2247 = $("<span>");
      node2247.attr('style', "position: absolute; float: left; margin-top: -56px; margin-left: -24px; z-index: 1;");
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = lastTabName.get();
                       activeTabName.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp16320 = mobl.ref(result__);
      
      var result__ = "resources/images/settings_demo.png";
      var tmp16319 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16325 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16324 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16323 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16322 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16321 = mobl.ref(result__);
      
      var nodes3736 = $("<span>");
      node2247.append(nodes3736);
      subs__.addSub((ui.image)(tmp16319, tmp16321, tmp16322, tmp16320, tmp16323, tmp16324, tmp16325, function(_, callback) {
        var root3882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3882); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3736;
        nodes3736 = node.contents();
        oldNodes.replaceWith(nodes3736);
      }));
      root3881.append(node2247);
      callback(root3881); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3735;
      nodes3735 = node.contents();
      oldNodes.replaceWith(nodes3735);
    }));
    var result__ = activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp16337 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp16337.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp16337.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp16337.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp16340 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16339 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16338 = mobl.ref(result__);
    
    var nodes3737 = $("<span>");
    node2232.append(nodes3737);
    subs__.addSub((mobl.block)(tmp16337, tmp16338, tmp16339, tmp16340, function(_, callback) {
      var root3883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3738 = $("<span>");
      root3883.append(nodes3738);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2248 = $("<span>");
        node2248.attr('style', "");
        
        var result__ = "http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1";
        var tmp16330 = mobl.ref(result__);
        subs__.addSub(moods.addEventListener('change', function() {
          tmp16330.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        var result__ = null;
        var tmp16336 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16335 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16334 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16333 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16332 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16331 = mobl.ref(result__);
        
        var nodes3739 = $("<span>");
        node2248.append(nodes3739);
        subs__.addSub((ui.image)(tmp16330, tmp16331, tmp16332, tmp16333, tmp16334, tmp16335, tmp16336, function(_, callback) {
          var root3885 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3885); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3739;
          nodes3739 = node.contents();
          oldNodes.replaceWith(nodes3739);
        }));
        root3884.append(node2248);
        callback(root3884); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3738;
        nodes3738 = node.contents();
        oldNodes.replaceWith(nodes3738);
      }));
      callback(root3883); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3737;
      nodes3737 = node.contents();
      oldNodes.replaceWith(nodes3737);
    }));
    var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp16367 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp16367.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp16367.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp16367.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp16370 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16369 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16368 = mobl.ref(result__);
    
    var nodes3740 = $("<span>");
    node2232.append(nodes3740);
    subs__.addSub((mobl.block)(tmp16367, tmp16368, tmp16369, tmp16370, function(_, callback) {
      var root3886 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3741 = $("<span>");
      root3886.append(nodes3741);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3887 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2249 = $("<div>");
        node2249.attr('id', "flash__Reminder");
        
        var ref609 = mobl.ref(ui.flash);
        if(ref609.get() !== null) {
          node2249.attr('class', ref609.get());
          subs__.addSub(ref609.addEventListener('change', function(_, ref, val) {
            node2249.attr('class', val);
          }));
          
        }
        subs__.addSub(ref609.rebind());
        
        var result__ = null;
        var tmp16346 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16345 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16344 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16343 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16342 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16341 = mobl.ref(result__);
        
        var nodes3743 = $("<span>");
        node2249.append(nodes3743);
        subs__.addSub((ui.image)(backgroundImage, tmp16341, tmp16342, tmp16343, tmp16344, tmp16345, tmp16346, function(_, callback) {
          var root3889 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3889); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3743;
          nodes3743 = node.contents();
          oldNodes.replaceWith(nodes3743);
        }));
        
        var node2250 = $("<span>");
        
        var ref608 = mobl.ref(ui.transition);
        if(ref608.get() !== null) {
          node2250.attr('class', ref608.get());
          subs__.addSub(ref608.addEventListener('change', function(_, ref, val) {
            node2250.attr('class', val);
          }));
          
        }
        subs__.addSub(ref608.rebind());
        
        
        var node2252 = $("<span>");
        node2252.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 101px;");
        
        var val1778 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1778 !== null) {
          subs__.addSub(mobl.domBind(node2252, 'mousedown', val1778));
        }
        
        var val1779 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1779 !== null) {
          subs__.addSub(mobl.domBind(node2252, 'mouseup', val1779));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16348 = mobl.ref(result__);
        
        var result__ = "resources/images/next_trans.png";
        var tmp16347 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16353 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16352 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16351 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16350 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16349 = mobl.ref(result__);
        
        var nodes3746 = $("<span>");
        node2252.append(nodes3746);
        subs__.addSub((ui.image)(tmp16347, tmp16349, tmp16350, tmp16348, tmp16351, tmp16352, tmp16353, function(_, callback) {
          var root3892 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3892); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3746;
          nodes3746 = node.contents();
          oldNodes.replaceWith(nodes3746);
        }));
        node2250.append(node2252);
        
        var node2253 = $("<span>");
        node2253.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 20px;");
        
        var val1776 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1776 !== null) {
          subs__.addSub(mobl.domBind(node2253, 'mousedown', val1776));
        }
        
        var val1777 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1777 !== null) {
          subs__.addSub(mobl.domBind(node2253, 'mouseup', val1777));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Reminder").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16355 = mobl.ref(result__);
        
        var result__ = "resources/images/edit_trans.png";
        var tmp16354 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16360 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16359 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16358 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16357 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16356 = mobl.ref(result__);
        
        var nodes3745 = $("<span>");
        node2253.append(nodes3745);
        subs__.addSub((ui.image)(tmp16354, tmp16356, tmp16357, tmp16355, tmp16358, tmp16359, tmp16360, function(_, callback) {
          var root3891 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3891); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3745;
          nodes3745 = node.contents();
          oldNodes.replaceWith(nodes3745);
        }));
        node2250.append(node2253);
        var result__ = null;
        var tmp16366 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16365 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16364 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16363 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16362 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16361 = mobl.ref(result__);
        
        var nodes3744 = $("<span>");
        node2250.append(nodes3744);
        subs__.addSub((ui.image)(transitionImage, tmp16361, tmp16362, tmp16363, tmp16364, tmp16365, tmp16366, function(_, callback) {
          var root3890 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3890); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3744;
          nodes3744 = node.contents();
          oldNodes.replaceWith(nodes3744);
        }));
        node2249.append(node2250);
        
        var node2251 = $("<span>");
        node2251.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node2251.append("Reminders saved");
        node2249.append(node2251);
        root3887.append(node2249);
        var nodes3742 = $("<span>");
        root3887.append(nodes3742);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root3888 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3888); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3742;
          nodes3742 = node.contents();
          oldNodes.replaceWith(nodes3742);
        }));
        callback(root3887); return subs__;
        
        
        
        
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3741;
        nodes3741 = node.contents();
        oldNodes.replaceWith(nodes3741);
      }));
      callback(root3886); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3740;
      nodes3740 = node.contents();
      oldNodes.replaceWith(nodes3740);
    }));
    var result__ = activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp16397 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp16397.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp16397.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp16397.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp16400 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16399 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16398 = mobl.ref(result__);
    
    var nodes3747 = $("<span>");
    node2232.append(nodes3747);
    subs__.addSub((mobl.block)(tmp16397, tmp16398, tmp16399, tmp16400, function(_, callback) {
      var root3893 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3748 = $("<span>");
      root3893.append(nodes3748);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3894 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2254 = $("<div>");
        node2254.attr('id', "flash__Life");
        
        var ref611 = mobl.ref(ui.flash);
        if(ref611.get() !== null) {
          node2254.attr('class', ref611.get());
          subs__.addSub(ref611.addEventListener('change', function(_, ref, val) {
            node2254.attr('class', val);
          }));
          
        }
        subs__.addSub(ref611.rebind());
        
        var result__ = null;
        var tmp16376 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16375 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16374 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16373 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16372 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16371 = mobl.ref(result__);
        
        var nodes3750 = $("<span>");
        node2254.append(nodes3750);
        subs__.addSub((ui.image)(backgroundImage, tmp16371, tmp16372, tmp16373, tmp16374, tmp16375, tmp16376, function(_, callback) {
          var root3896 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3896); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3750;
          nodes3750 = node.contents();
          oldNodes.replaceWith(nodes3750);
        }));
        
        var node2255 = $("<span>");
        
        var ref610 = mobl.ref(ui.transition);
        if(ref610.get() !== null) {
          node2255.attr('class', ref610.get());
          subs__.addSub(ref610.addEventListener('change', function(_, ref, val) {
            node2255.attr('class', val);
          }));
          
        }
        subs__.addSub(ref610.rebind());
        
        
        var node2257 = $("<span>");
        node2257.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 101px;");
        
        var val1782 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1782 !== null) {
          subs__.addSub(mobl.domBind(node2257, 'mousedown', val1782));
        }
        
        var val1783 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1783 !== null) {
          subs__.addSub(mobl.domBind(node2257, 'mouseup', val1783));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16378 = mobl.ref(result__);
        
        var result__ = "resources/images/next_trans.png";
        var tmp16377 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16383 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16382 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16381 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16380 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16379 = mobl.ref(result__);
        
        var nodes3753 = $("<span>");
        node2257.append(nodes3753);
        subs__.addSub((ui.image)(tmp16377, tmp16379, tmp16380, tmp16378, tmp16381, tmp16382, tmp16383, function(_, callback) {
          var root3899 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3899); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3753;
          nodes3753 = node.contents();
          oldNodes.replaceWith(nodes3753);
        }));
        node2255.append(node2257);
        
        var node2258 = $("<span>");
        node2258.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 20px;");
        
        var val1780 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1780 !== null) {
          subs__.addSub(mobl.domBind(node2258, 'mousedown', val1780));
        }
        
        var val1781 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1781 !== null) {
          subs__.addSub(mobl.domBind(node2258, 'mouseup', val1781));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__Life").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16385 = mobl.ref(result__);
        
        var result__ = "resources/images/edit_trans.png";
        var tmp16384 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16390 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16389 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16388 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16387 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16386 = mobl.ref(result__);
        
        var nodes3752 = $("<span>");
        node2258.append(nodes3752);
        subs__.addSub((ui.image)(tmp16384, tmp16386, tmp16387, tmp16385, tmp16388, tmp16389, tmp16390, function(_, callback) {
          var root3898 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3898); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3752;
          nodes3752 = node.contents();
          oldNodes.replaceWith(nodes3752);
        }));
        node2255.append(node2258);
        var result__ = null;
        var tmp16396 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16395 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16394 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16393 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16392 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16391 = mobl.ref(result__);
        
        var nodes3751 = $("<span>");
        node2255.append(nodes3751);
        subs__.addSub((ui.image)(transitionImage, tmp16391, tmp16392, tmp16393, tmp16394, tmp16395, tmp16396, function(_, callback) {
          var root3897 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3897); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3751;
          nodes3751 = node.contents();
          oldNodes.replaceWith(nodes3751);
        }));
        node2254.append(node2255);
        
        var node2256 = $("<span>");
        node2256.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node2256.append("Events saved");
        node2254.append(node2256);
        root3894.append(node2254);
        var nodes3749 = $("<span>");
        root3894.append(nodes3749);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root3895 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3895); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3749;
          nodes3749 = node.contents();
          oldNodes.replaceWith(nodes3749);
        }));
        callback(root3894); return subs__;
        
        
        
        
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3748;
        nodes3748 = node.contents();
        oldNodes.replaceWith(nodes3748);
      }));
      callback(root3893); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3747;
      nodes3747 = node.contents();
      oldNodes.replaceWith(nodes3747);
    }));
    var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp16427 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp16427.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp16427.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp16427.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp16430 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16429 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16428 = mobl.ref(result__);
    
    var nodes3754 = $("<span>");
    node2232.append(nodes3754);
    subs__.addSub((mobl.block)(tmp16427, tmp16428, tmp16429, tmp16430, function(_, callback) {
      var root3900 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3755 = $("<span>");
      root3900.append(nodes3755);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3901 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2259 = $("<div>");
        node2259.attr('id', "flash__Moodometer");
        
        var ref613 = mobl.ref(ui.flash);
        if(ref613.get() !== null) {
          node2259.attr('class', ref613.get());
          subs__.addSub(ref613.addEventListener('change', function(_, ref, val) {
            node2259.attr('class', val);
          }));
          
        }
        subs__.addSub(ref613.rebind());
        
        var result__ = null;
        var tmp16406 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16405 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16404 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16403 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16402 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16401 = mobl.ref(result__);
        
        var nodes3757 = $("<span>");
        node2259.append(nodes3757);
        subs__.addSub((ui.image)(backgroundImage, tmp16401, tmp16402, tmp16403, tmp16404, tmp16405, tmp16406, function(_, callback) {
          var root3903 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3903); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3757;
          nodes3757 = node.contents();
          oldNodes.replaceWith(nodes3757);
        }));
        
        var node2260 = $("<span>");
        
        var ref612 = mobl.ref(ui.transition);
        if(ref612.get() !== null) {
          node2260.attr('class', ref612.get());
          subs__.addSub(ref612.addEventListener('change', function(_, ref, val) {
            node2260.attr('class', val);
          }));
          
        }
        subs__.addSub(ref612.rebind());
        
        
        var node2262 = $("<span>");
        node2262.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 101px;");
        
        var val1786 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1786 !== null) {
          subs__.addSub(mobl.domBind(node2262, 'mousedown', val1786));
        }
        
        var val1787 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1787 !== null) {
          subs__.addSub(mobl.domBind(node2262, 'mouseup', val1787));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16408 = mobl.ref(result__);
        
        var result__ = "resources/images/next_trans.png";
        var tmp16407 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16413 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16412 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16411 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16410 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16409 = mobl.ref(result__);
        
        var nodes3760 = $("<span>");
        node2262.append(nodes3760);
        subs__.addSub((ui.image)(tmp16407, tmp16409, tmp16410, tmp16408, tmp16411, tmp16412, tmp16413, function(_, callback) {
          var root3906 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3906); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3760;
          nodes3760 = node.contents();
          oldNodes.replaceWith(nodes3760);
        }));
        node2260.append(node2262);
        
        var node2263 = $("<span>");
        node2263.attr('style', "float: left; position: absolute; margin-top: 57px; margin-left: 20px;");
        
        var val1784 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1784 !== null) {
          subs__.addSub(mobl.domBind(node2263, 'mousedown', val1784));
        }
        
        var val1785 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1785 !== null) {
          subs__.addSub(mobl.domBind(node2263, 'mouseup', val1785));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = mobl.$("#flash__Moodometer").hide();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16415 = mobl.ref(result__);
        
        var result__ = "resources/images/edit_trans.png";
        var tmp16414 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16420 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16419 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16418 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16417 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16416 = mobl.ref(result__);
        
        var nodes3759 = $("<span>");
        node2263.append(nodes3759);
        subs__.addSub((ui.image)(tmp16414, tmp16416, tmp16417, tmp16415, tmp16418, tmp16419, tmp16420, function(_, callback) {
          var root3905 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3905); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3759;
          nodes3759 = node.contents();
          oldNodes.replaceWith(nodes3759);
        }));
        node2260.append(node2263);
        var result__ = null;
        var tmp16426 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16425 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16424 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16423 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16422 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16421 = mobl.ref(result__);
        
        var nodes3758 = $("<span>");
        node2260.append(nodes3758);
        subs__.addSub((ui.image)(transitionImage, tmp16421, tmp16422, tmp16423, tmp16424, tmp16425, tmp16426, function(_, callback) {
          var root3904 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3904); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3758;
          nodes3758 = node.contents();
          oldNodes.replaceWith(nodes3758);
        }));
        node2259.append(node2260);
        
        var node2261 = $("<span>");
        node2261.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node2261.append("Mood saved");
        node2259.append(node2261);
        root3901.append(node2259);
        var nodes3756 = $("<span>");
        root3901.append(nodes3756);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root3902 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3902); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3756;
          nodes3756 = node.contents();
          oldNodes.replaceWith(nodes3756);
        }));
        callback(root3901); return subs__;
        
        
        
        
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3755;
        nodes3755 = node.contents();
        oldNodes.replaceWith(nodes3755);
      }));
      callback(root3900); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3754;
      nodes3754 = node.contents();
      oldNodes.replaceWith(nodes3754);
    }));
    var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle;
    var tmp16431 = mobl.ref(result__);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp16431.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp16431.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp16431.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    var result__ = null;
    var tmp16434 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16433 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16432 = mobl.ref(result__);
    
    var nodes3761 = $("<span>");
    node2232.append(nodes3761);
    subs__.addSub((mobl.block)(tmp16431, tmp16432, tmp16433, tmp16434, function(_, callback) {
      var root3907 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3762 = $("<span>");
      root3907.append(nodes3762);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root3908 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes3763 = $("<span>");
        root3908.append(nodes3763);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root3909 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3909); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3763;
          nodes3763 = node.contents();
          oldNodes.replaceWith(nodes3763);
        }));
        callback(root3908); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3762;
        nodes3762 = node.contents();
        oldNodes.replaceWith(nodes3762);
      }));
      callback(root3907); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3761;
      nodes3761 = node.contents();
      oldNodes.replaceWith(nodes3761);
    }));
    root3858.append(node2232);
    var result__ = null;
    var tmp16482 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16481 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16480 = mobl.ref(result__);
    
    var nodes3714 = $("<span>");
    root3858.append(nodes3714);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp16480, tmp16481, tmp16482, function(_, callback) {
      var root3860 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2233 = $("<span>");
      node2233.attr('style', "float: left; position: absolute; margin-left: -26px; margin-top: -355px;");
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = mobl.openUrl("http://www.itsneh.com");
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp16436 = mobl.ref(result__);
      
      var result__ = "resources/images/i.png";
      var tmp16435 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16441 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16440 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16439 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16438 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16437 = mobl.ref(result__);
      
      var nodes3722 = $("<span>");
      node2233.append(nodes3722);
      subs__.addSub((ui.image)(tmp16435, tmp16437, tmp16438, tmp16436, tmp16439, tmp16440, tmp16441, function(_, callback) {
        var root3868 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3868); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3722;
        nodes3722 = node.contents();
        oldNodes.replaceWith(nodes3722);
      }));
      root3860.append(node2233);
      
      var node2234 = $("<span>");
      node2234.attr('id', "settings");
      node2234.attr('style', "float: left; position: absolute; margin-left: 184px; margin-top: -291px;");
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = activeTabName.get().toString();
                       lastTabName.set(result__);
                       var result__ = "Settings";
                       activeTabName.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp16443 = mobl.ref(result__);
      
      var result__ = "resources/images/settings.png";
      var tmp16442 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16448 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16447 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16446 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16445 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16444 = mobl.ref(result__);
      
      var nodes3721 = $("<span>");
      node2234.append(nodes3721);
      subs__.addSub((ui.image)(tmp16442, tmp16444, tmp16445, tmp16443, tmp16446, tmp16447, tmp16448, function(_, callback) {
        var root3867 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3867); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3721;
        nodes3721 = node.contents();
        oldNodes.replaceWith(nodes3721);
      }));
      root3860.append(node2234);
      
      var node2235 = $("<span>");
      node2235.attr('id', "placeholder");
      node2235.attr('style', "display: none;");
      
      var result__ = false;
      var tmp16457 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16456 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16455 = mobl.ref(result__);
      
      var nodes3719 = $("<span>");
      node2235.append(nodes3719);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp16455, tmp16456, tmp16457, function(_, callback) {
        var root3865 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2240 = $("<span>");
        node2240.attr('style', "margin-left: 57px;");
        
        var val1772 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1772 !== null) {
          subs__.addSub(mobl.domBind(node2240, 'mousedown', val1772));
        }
        
        var val1773 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1773 !== null) {
          subs__.addSub(mobl.domBind(node2240, 'mouseout', val1773));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#placeholder").hide();
                         var result__ = mobl.$("#navigators").show();
                         var result__ = lastTabName.get();
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16449 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16454 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16453 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16452 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16451 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16450 = mobl.ref(result__);
        
        var nodes3720 = $("<span>");
        node2240.append(nodes3720);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp16450, tmp16451, tmp16449, tmp16452, tmp16453, tmp16454, function(_, callback) {
          var root3866 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3866); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3720;
          nodes3720 = node.contents();
          oldNodes.replaceWith(nodes3720);
        }));
        root3865.append(node2240);
        callback(root3865); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3719;
        nodes3719 = node.contents();
        oldNodes.replaceWith(nodes3719);
      }));
      root3860.append(node2235);
      
      var node2236 = $("<span>");
      node2236.attr('id', "navigators");
      
      var result__ = false;
      var tmp16479 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16478 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16477 = mobl.ref(result__);
      
      var nodes3715 = $("<span>");
      node2236.append(nodes3715);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp16477, tmp16478, tmp16479, function(_, callback) {
        var root3861 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2237 = $("<span>");
        
        var val1770 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1770 !== null) {
          subs__.addSub(mobl.domBind(node2237, 'mousedown', val1770));
        }
        
        var val1771 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1771 !== null) {
          subs__.addSub(mobl.domBind(node2237, 'mouseup', val1771));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.prev(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16458 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16463 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16462 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16461 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16460 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16459 = mobl.ref(result__);
        
        var nodes3718 = $("<span>");
        node2237.append(nodes3718);
        subs__.addSub((ui.image)(backButtonImage, tmp16459, tmp16460, tmp16458, tmp16461, tmp16462, tmp16463, function(_, callback) {
          var root3864 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3864); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3718;
          nodes3718 = node.contents();
          oldNodes.replaceWith(nodes3718);
        }));
        root3861.append(node2237);
        
        var node2238 = $("<span>");
        
        var ref607 = mobl.ref(ui.stressGraphButton);
        if(ref607.get() !== null) {
          node2238.attr('class', ref607.get());
          subs__.addSub(ref607.addEventListener('change', function(_, ref, val) {
            node2238.attr('class', val);
          }));
          
        }
        subs__.addSub(ref607.rebind());
        
        var val1766 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1766 !== null) {
          subs__.addSub(mobl.domBind(node2238, 'mouseover', val1766));
        }
        
        var val1767 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1767 !== null) {
          subs__.addSub(mobl.domBind(node2238, 'mouseout', val1767));
        }
        
        var val1768 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1768 !== null) {
          subs__.addSub(mobl.domBind(node2238, 'mousedown', val1768));
        }
        
        var val1769 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1769 !== null) {
          subs__.addSub(mobl.domBind(node2238, 'mouseup', val1769));
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
                         models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll239) {
                           coll239 = coll239.reverse();
                           function processOne77() {
                             var mood;
                             mood = coll239.pop();
                             var result__ = data + mood.happy + ",";
                             data = result__;
                             
                             if(coll239.length > 0) processOne77(); else rest77();
                             
                           }
                           function rest77() {
                             var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                             moods.set(result__);
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll239.length > 0) processOne77(); else rest77();
                         });
                         
                       };
        var tmp16465 = mobl.ref(result__);
        
        var result__ = activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get();
        var tmp16464 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp16464.set(activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get());
        }));
        subs__.addSub(stressGraphImageOn.addEventListener('change', function() {
          tmp16464.set(activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get());
        }));
        subs__.addSub(stressGraphImage.addEventListener('change', function() {
          tmp16464.set(activeTabName.get() == "Meditate" ? stressGraphImageOn.get() : stressGraphImage.get());
        }));
        
        var result__ = null;
        var tmp16470 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16469 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16468 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16467 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16466 = mobl.ref(result__);
        
        var nodes3717 = $("<span>");
        node2238.append(nodes3717);
        subs__.addSub((ui.image)(tmp16464, tmp16466, tmp16467, tmp16465, tmp16468, tmp16469, tmp16470, function(_, callback) {
          var root3863 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3863); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3717;
          nodes3717 = node.contents();
          oldNodes.replaceWith(nodes3717);
        }));
        root3861.append(node2238);
        
        var node2239 = $("<span>");
        
        var val1764 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1764 !== null) {
          subs__.addSub(mobl.domBind(node2239, 'mousedown', val1764));
        }
        
        var val1765 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1765 !== null) {
          subs__.addSub(mobl.domBind(node2239, 'mouseup', val1765));
        }
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                         var result__ = mobl.$("#sliders").show();
                         var result__ = ken.next(activeTabName.get());
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16471 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16476 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16475 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16474 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16473 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16472 = mobl.ref(result__);
        
        var nodes3716 = $("<span>");
        node2239.append(nodes3716);
        subs__.addSub((ui.image)(nextButtonImage, tmp16472, tmp16473, tmp16471, tmp16474, tmp16475, tmp16476, function(_, callback) {
          var root3862 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3862); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3716;
          nodes3716 = node.contents();
          oldNodes.replaceWith(nodes3716);
        }));
        root3861.append(node2239);
        callback(root3861); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3715;
        nodes3715 = node.contents();
        oldNodes.replaceWith(nodes3715);
      }));
      root3860.append(node2236);
      callback(root3860); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3714;
      nodes3714 = node.contents();
      oldNodes.replaceWith(nodes3714);
    }));
    var result__ = null;
    var tmp16529 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16528 = mobl.ref(result__);
    
    var result__ = null;
    var tmp16527 = mobl.ref(result__);
    
    var nodes3723 = $("<span>");
    root3858.append(nodes3723);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp16527, tmp16528, tmp16529, function(_, callback) {
      var root3869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2241 = $("<span>");
      node2241.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      var result__ = activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp16491 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp16491.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp16491.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp16491.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp16490 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16493 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16492 = mobl.ref(result__);
      
      var nodes3730 = $("<span>");
      node2241.append(nodes3730);
      subs__.addSub((mobl.span)(tmp16491, tmp16492, tmp16490, tmp16493, function(_, callback) {
        var root3876 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png";
        var tmp16483 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp16483.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        var result__ = null;
        var tmp16489 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16488 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16487 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16486 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16485 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16484 = mobl.ref(result__);
        
        var nodes3731 = $("<span>");
        root3876.append(nodes3731);
        subs__.addSub((ui.image)(tmp16483, tmp16484, tmp16485, tmp16486, tmp16487, tmp16488, tmp16489, function(_, callback) {
          var root3877 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3877); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3731;
          nodes3731 = node.contents();
          oldNodes.replaceWith(nodes3731);
        }));
        callback(root3876); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3730;
        nodes3730 = node.contents();
        oldNodes.replaceWith(nodes3730);
      }));
      root3869.append(node2241);
      
      var node2242 = $("<span>");
      node2242.attr('style', "position: absolute; margin-left: 70px;");
      
      var result__ = activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp16502 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp16502.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp16502.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp16502.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp16501 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16504 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16503 = mobl.ref(result__);
      
      var nodes3728 = $("<span>");
      node2242.append(nodes3728);
      subs__.addSub((mobl.span)(tmp16502, tmp16503, tmp16501, tmp16504, function(_, callback) {
        var root3874 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png";
        var tmp16494 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp16494.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        var result__ = null;
        var tmp16500 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16499 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16498 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16497 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16496 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16495 = mobl.ref(result__);
        
        var nodes3729 = $("<span>");
        root3874.append(nodes3729);
        subs__.addSub((ui.image)(tmp16494, tmp16495, tmp16496, tmp16497, tmp16498, tmp16499, tmp16500, function(_, callback) {
          var root3875 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3875); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3729;
          nodes3729 = node.contents();
          oldNodes.replaceWith(nodes3729);
        }));
        callback(root3874); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3728;
        nodes3728 = node.contents();
        oldNodes.replaceWith(nodes3728);
      }));
      root3869.append(node2242);
      
      var node2243 = $("<span>");
      node2243.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      var result__ = activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp16513 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp16513.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp16513.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp16513.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp16512 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16515 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16514 = mobl.ref(result__);
      
      var nodes3726 = $("<span>");
      node2243.append(nodes3726);
      subs__.addSub((mobl.span)(tmp16513, tmp16514, tmp16512, tmp16515, function(_, callback) {
        var root3872 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png";
        var tmp16505 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp16505.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        var result__ = null;
        var tmp16511 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16510 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16509 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16508 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16507 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16506 = mobl.ref(result__);
        
        var nodes3727 = $("<span>");
        root3872.append(nodes3727);
        subs__.addSub((ui.image)(tmp16505, tmp16506, tmp16507, tmp16508, tmp16509, tmp16510, tmp16511, function(_, callback) {
          var root3873 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3873); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3727;
          nodes3727 = node.contents();
          oldNodes.replaceWith(nodes3727);
        }));
        callback(root3872); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3726;
        nodes3726 = node.contents();
        oldNodes.replaceWith(nodes3726);
      }));
      root3869.append(node2243);
      
      var node2244 = $("<span>");
      node2244.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      var result__ = activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
      var tmp16524 = mobl.ref(result__);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp16524.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp16524.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp16524.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
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
      var tmp16523 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16526 = mobl.ref(result__);
      
      var result__ = null;
      var tmp16525 = mobl.ref(result__);
      
      var nodes3724 = $("<span>");
      node2244.append(nodes3724);
      subs__.addSub((mobl.span)(tmp16524, tmp16525, tmp16523, tmp16526, function(_, callback) {
        var root3870 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png";
        var tmp16516 = mobl.ref(result__);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp16516.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        var result__ = null;
        var tmp16522 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16521 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16520 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16519 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16518 = mobl.ref(result__);
        
        var result__ = null;
        var tmp16517 = mobl.ref(result__);
        
        var nodes3725 = $("<span>");
        root3870.append(nodes3725);
        subs__.addSub((ui.image)(tmp16516, tmp16517, tmp16518, tmp16519, tmp16520, tmp16521, tmp16522, function(_, callback) {
          var root3871 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3871); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3725;
          nodes3725 = node.contents();
          oldNodes.replaceWith(nodes3725);
        }));
        callback(root3870); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3724;
        nodes3724 = node.contents();
        oldNodes.replaceWith(nodes3724);
      }));
      root3869.append(node2244);
      callback(root3869); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3723;
      nodes3723 = node.contents();
      oldNodes.replaceWith(nodes3723);
    }));
    callback(root3858); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3712;
    nodes3712 = node.contents();
    oldNodes.replaceWith(nodes3712);
  }));
  callback(root3857); return subs__;
  
  return subs__;
};
