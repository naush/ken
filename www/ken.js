mobl.provides('ken');
mobl.provides('controls');
mobl.provides('models');
ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll1 = mobl.range(0, tabs.length);
  var length0 = coll1.length;
  for(var i1 = 0; i1 < length0; i1++) {
    var index;
    index = coll1.get(i1);
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
  var root27 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp242 = mobl.ref(null);
  
  
  var tmp241 = mobl.ref(null);
  
  
  var tmp239 = mobl.ref(null);
  
  var nodes23 = $("<span>");
  root27.append(nodes23);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp239, tmp241, tmp242, function(_, callback) {
    var root28 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp77 = mobl.ref("Ken");
    
    
    var tmp78 = mobl.ref(null);
    
    var nodes24 = $("<span>");
    root28.append(nodes24);
    subs__.addSub((ui.customHeader)(tmp77, tmp78, function(_, callback) {
      var root29 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root29); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24;
      nodes24 = node.contents();
      oldNodes.replaceWith(nodes24);
    }));
    
    var stressGraphImage = mobl.ref("resources/images/view_stressgraph_off.png");
    
    var stressGraphImageOn = mobl.ref("resources/images/view_stressgraph_on.png");
    
    var backButtonImage = mobl.ref("resources/images/back.png");
    
    var nextButtonImage = mobl.ref("resources/images/next.png");
    
    var transitionImage = mobl.ref("resources/images/transition_screen.png");
    
    var moods = mobl.ref("");
    
    var activeTabName = mobl.ref("Reminder");
    
    var lastTabName = mobl.ref("");
    
    var s = mobl.ref("");
    
    var node4 = $("<div>");
    node4.attr('style', "height: 284px; margin-left: 25px; margin-top: 10px");
    
    
    var tmp87 = mobl.ref(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp87.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp87.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp87.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp91 = mobl.ref(null);
    
    
    var tmp89 = mobl.ref(null);
    
    
    var tmp88 = mobl.ref(null);
    
    var nodes41 = $("<span>");
    node4.append(nodes41);
    subs__.addSub((mobl.block)(tmp87, tmp88, tmp89, tmp91, function(_, callback) {
      var root46 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes42 = $("<span>");
      root46.append(nodes42);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root47 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp79 = mobl.ref("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        subs__.addSub(moods.addEventListener('change', function() {
          tmp79.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        
        var tmp86 = mobl.ref(null);
        
        
        var tmp85 = mobl.ref(null);
        
        
        var tmp84 = mobl.ref(null);
        
        
        var tmp83 = mobl.ref(null);
        
        
        var tmp82 = mobl.ref(null);
        
        
        var tmp81 = mobl.ref(null);
        
        var nodes43 = $("<span>");
        root47.append(nodes43);
        subs__.addSub((ui.image)(tmp79, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, function(_, callback) {
          var root48 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root48); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes43;
          nodes43 = node.contents();
          oldNodes.replaceWith(nodes43);
        }));
        callback(root47); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes42;
        nodes42 = node.contents();
        oldNodes.replaceWith(nodes42);
      }));
      callback(root46); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes41;
      nodes41 = node.contents();
      oldNodes.replaceWith(nodes41);
    }));
    
    var tmp105 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp105.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp105.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp105.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp108 = mobl.ref(null);
    
    
    var tmp107 = mobl.ref(null);
    
    
    var tmp106 = mobl.ref(null);
    
    var nodes44 = $("<span>");
    node4.append(nodes44);
    subs__.addSub((mobl.block)(tmp105, tmp106, tmp107, tmp108, function(_, callback) {
      var root49 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes45 = $("<span>");
      root49.append(nodes45);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root50 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node15 = $("<div>");
        node15.attr('id', "flash__Reminder");
        
        var ref2 = mobl.ref(ui.flash);
        if(ref2.get() !== null) {
          node15.attr('class', ref2.get());
          subs__.addSub(ref2.addEventListener('change', function(_, ref, val) {
            node15.attr('class', val);
          }));
          
        }
        subs__.addSub(ref2.rebind());
        
        
        var tmp93 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Reminder").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp92 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp98 = mobl.ref(null);
        
        
        var tmp97 = mobl.ref(null);
        
        
        var tmp96 = mobl.ref(null);
        
        
        var tmp95 = mobl.ref(null);
        
        
        var tmp94 = mobl.ref(null);
        
        var nodes47 = $("<span>");
        node15.append(nodes47);
        subs__.addSub((ui.image)(tmp92, tmp94, tmp95, tmp93, tmp96, tmp97, tmp98, function(_, callback) {
          var root52 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root52); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes47;
          nodes47 = node.contents();
          oldNodes.replaceWith(nodes47);
        }));
        
        var node16 = $("<span>");
        
        var ref1 = mobl.ref(ui.transition);
        if(ref1.get() !== null) {
          node16.attr('class', ref1.get());
          subs__.addSub(ref1.addEventListener('change', function(_, ref, val) {
            node16.attr('class', val);
          }));
          
        }
        subs__.addSub(ref1.rebind());
        
        var val12 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val12 !== null) {
          subs__.addSub(mobl.domBind(node16, 'mousedown', val12));
        }
        
        var val13 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val13 !== null) {
          subs__.addSub(mobl.domBind(node16, 'mouseup', val13));
        }
        
        
        var tmp104 = mobl.ref(null);
        
        
        var tmp103 = mobl.ref(null);
        
        
        var tmp102 = mobl.ref(null);
        
        
        var tmp101 = mobl.ref(null);
        
        
        var tmp100 = mobl.ref(null);
        
        
        var tmp99 = mobl.ref(null);
        
        var nodes48 = $("<span>");
        node16.append(nodes48);
        subs__.addSub((ui.image)(transitionImage, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, function(_, callback) {
          var root53 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root53); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes48;
          nodes48 = node.contents();
          oldNodes.replaceWith(nodes48);
        }));
        node15.append(node16);
        
        var node17 = $("<span>");
        node17.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node17.append("Reminders saved");
        node15.append(node17);
        root50.append(node15);
        var nodes46 = $("<span>");
        root50.append(nodes46);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root51 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root51); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes46;
          nodes46 = node.contents();
          oldNodes.replaceWith(nodes46);
        }));
        callback(root50); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes45;
        nodes45 = node.contents();
        oldNodes.replaceWith(nodes45);
      }));
      callback(root49); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes44;
      nodes44 = node.contents();
      oldNodes.replaceWith(nodes44);
    }));
    
    var tmp124 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp124.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp124.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp124.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp127 = mobl.ref(null);
    
    
    var tmp126 = mobl.ref(null);
    
    
    var tmp125 = mobl.ref(null);
    
    var nodes49 = $("<span>");
    node4.append(nodes49);
    subs__.addSub((mobl.block)(tmp124, tmp125, tmp126, tmp127, function(_, callback) {
      var root54 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes50 = $("<span>");
      root54.append(nodes50);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root55 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node18 = $("<div>");
        node18.attr('id', "flash__Life");
        
        var ref4 = mobl.ref(ui.flash);
        if(ref4.get() !== null) {
          node18.attr('class', ref4.get());
          subs__.addSub(ref4.addEventListener('change', function(_, ref, val) {
            node18.attr('class', val);
          }));
          
        }
        subs__.addSub(ref4.rebind());
        
        
        var tmp111 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Life").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp109 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp116 = mobl.ref(null);
        
        
        var tmp115 = mobl.ref(null);
        
        
        var tmp114 = mobl.ref(null);
        
        
        var tmp113 = mobl.ref(null);
        
        
        var tmp112 = mobl.ref(null);
        
        var nodes52 = $("<span>");
        node18.append(nodes52);
        subs__.addSub((ui.image)(tmp109, tmp112, tmp113, tmp111, tmp114, tmp115, tmp116, function(_, callback) {
          var root57 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root57); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes52;
          nodes52 = node.contents();
          oldNodes.replaceWith(nodes52);
        }));
        
        var node19 = $("<span>");
        
        var ref3 = mobl.ref(ui.transition);
        if(ref3.get() !== null) {
          node19.attr('class', ref3.get());
          subs__.addSub(ref3.addEventListener('change', function(_, ref, val) {
            node19.attr('class', val);
          }));
          
        }
        subs__.addSub(ref3.rebind());
        
        var val14 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val14 !== null) {
          subs__.addSub(mobl.domBind(node19, 'mousedown', val14));
        }
        
        var val15 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val15 !== null) {
          subs__.addSub(mobl.domBind(node19, 'mouseup', val15));
        }
        
        
        var tmp123 = mobl.ref(null);
        
        
        var tmp122 = mobl.ref(null);
        
        
        var tmp121 = mobl.ref(null);
        
        
        var tmp119 = mobl.ref(null);
        
        
        var tmp118 = mobl.ref(null);
        
        
        var tmp117 = mobl.ref(null);
        
        var nodes53 = $("<span>");
        node19.append(nodes53);
        subs__.addSub((ui.image)(transitionImage, tmp117, tmp118, tmp119, tmp121, tmp122, tmp123, function(_, callback) {
          var root58 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root58); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes53;
          nodes53 = node.contents();
          oldNodes.replaceWith(nodes53);
        }));
        node18.append(node19);
        
        var node20 = $("<span>");
        node20.attr('style', "position: absolute; color: white; margin-left: -210px; margin-top: 202px;");
        
        
        node20.append("Events saved");
        node18.append(node20);
        root55.append(node18);
        var nodes51 = $("<span>");
        root55.append(nodes51);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root56 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root56); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes51;
          nodes51 = node.contents();
          oldNodes.replaceWith(nodes51);
        }));
        callback(root55); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes50;
        nodes50 = node.contents();
        oldNodes.replaceWith(nodes50);
      }));
      callback(root54); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes49;
      nodes49 = node.contents();
      oldNodes.replaceWith(nodes49);
    }));
    
    var tmp143 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp143.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp143.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp143.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp146 = mobl.ref(null);
    
    
    var tmp145 = mobl.ref(null);
    
    
    var tmp144 = mobl.ref(null);
    
    var nodes54 = $("<span>");
    node4.append(nodes54);
    subs__.addSub((mobl.block)(tmp143, tmp144, tmp145, tmp146, function(_, callback) {
      var root59 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes55 = $("<span>");
      root59.append(nodes55);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root60 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node21 = $("<div>");
        node21.attr('id', "flash__Moodometer");
        
        var ref6 = mobl.ref(ui.flash);
        if(ref6.get() !== null) {
          node21.attr('class', ref6.get());
          subs__.addSub(ref6.addEventListener('change', function(_, ref, val) {
            node21.attr('class', val);
          }));
          
        }
        subs__.addSub(ref6.rebind());
        
        
        var tmp129 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = mobl.$("#flash__Moodometer").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp128 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp135 = mobl.ref(null);
        
        
        var tmp134 = mobl.ref(null);
        
        
        var tmp133 = mobl.ref(null);
        
        
        var tmp132 = mobl.ref(null);
        
        
        var tmp131 = mobl.ref(null);
        
        var nodes57 = $("<span>");
        node21.append(nodes57);
        subs__.addSub((ui.image)(tmp128, tmp131, tmp132, tmp129, tmp133, tmp134, tmp135, function(_, callback) {
          var root62 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root62); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes57;
          nodes57 = node.contents();
          oldNodes.replaceWith(nodes57);
        }));
        
        var node22 = $("<span>");
        
        var ref5 = mobl.ref(ui.transition);
        if(ref5.get() !== null) {
          node22.attr('class', ref5.get());
          subs__.addSub(ref5.addEventListener('change', function(_, ref, val) {
            node22.attr('class', val);
          }));
          
        }
        subs__.addSub(ref5.rebind());
        
        var val16 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val16 !== null) {
          subs__.addSub(mobl.domBind(node22, 'mousedown', val16));
        }
        
        var val17 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val17 !== null) {
          subs__.addSub(mobl.domBind(node22, 'mouseup', val17));
        }
        
        
        var tmp142 = mobl.ref(null);
        
        
        var tmp141 = mobl.ref(null);
        
        
        var tmp139 = mobl.ref(null);
        
        
        var tmp138 = mobl.ref(null);
        
        
        var tmp137 = mobl.ref(null);
        
        
        var tmp136 = mobl.ref(null);
        
        var nodes58 = $("<span>");
        node22.append(nodes58);
        subs__.addSub((ui.image)(transitionImage, tmp136, tmp137, tmp138, tmp139, tmp141, tmp142, function(_, callback) {
          var root63 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root63); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes58;
          nodes58 = node.contents();
          oldNodes.replaceWith(nodes58);
        }));
        node21.append(node22);
        
        var node23 = $("<span>");
        node23.attr('style', "position: absolute; color: white; margin-left: -203px; margin-top: 202px;");
        
        
        node23.append("Mood saved");
        node21.append(node23);
        root60.append(node21);
        var nodes56 = $("<span>");
        root60.append(nodes56);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root61 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root61); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes56;
          nodes56 = node.contents();
          oldNodes.replaceWith(nodes56);
        }));
        callback(root60); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes55;
        nodes55 = node.contents();
        oldNodes.replaceWith(nodes55);
      }));
      callback(root59); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes54;
      nodes54 = node.contents();
      oldNodes.replaceWith(nodes54);
    }));
    
    var tmp147 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp147.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp147.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp147.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp151 = mobl.ref(null);
    
    
    var tmp149 = mobl.ref(null);
    
    
    var tmp148 = mobl.ref(null);
    
    var nodes59 = $("<span>");
    node4.append(nodes59);
    subs__.addSub((mobl.block)(tmp147, tmp148, tmp149, tmp151, function(_, callback) {
      var root64 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes60 = $("<span>");
      root64.append(nodes60);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root65 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes61 = $("<span>");
        root65.append(nodes61);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root66 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root66); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes61;
          nodes61 = node.contents();
          oldNodes.replaceWith(nodes61);
        }));
        callback(root65); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes60;
        nodes60 = node.contents();
        oldNodes.replaceWith(nodes60);
      }));
      callback(root64); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes59;
      nodes59 = node.contents();
      oldNodes.replaceWith(nodes59);
    }));
    root28.append(node4);
    
    var tmp187 = mobl.ref(null);
    
    
    var tmp186 = mobl.ref(null);
    
    
    var tmp185 = mobl.ref(null);
    
    var nodes25 = $("<span>");
    root28.append(nodes25);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp185, tmp186, tmp187, function(_, callback) {
      var root30 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node5 = $("<span>");
      node5.attr('id', "placeholder");
      node5.attr('style', "display: none;");
      
      
      var tmp161 = mobl.ref(false);
      
      
      var tmp159 = mobl.ref(null);
      
      
      var tmp158 = mobl.ref(null);
      
      var nodes30 = $("<span>");
      node5.append(nodes30);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp158, tmp159, tmp161, function(_, callback) {
        var root35 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node10 = $("<span>");
        node10.attr('style', "margin-left: 57px;");
        
        var val10 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val10 !== null) {
          subs__.addSub(mobl.domBind(node10, 'mousedown', val10));
        }
        
        var val11 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val11 !== null) {
          subs__.addSub(mobl.domBind(node10, 'mouseout', val11));
        }
        
        
        var tmp152 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#placeholder").hide();
                             var result__ = mobl.$("#navigators").show();
                             var result__ = lastTabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp157 = mobl.ref(null);
        
        
        var tmp156 = mobl.ref(null);
        
        
        var tmp155 = mobl.ref(null);
        
        
        var tmp154 = mobl.ref(null);
        
        
        var tmp153 = mobl.ref(null);
        
        var nodes31 = $("<span>");
        node10.append(nodes31);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp153, tmp154, tmp152, tmp155, tmp156, tmp157, function(_, callback) {
          var root36 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root36); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes31;
          nodes31 = node.contents();
          oldNodes.replaceWith(nodes31);
        }));
        root35.append(node10);
        callback(root35); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes30;
        nodes30 = node.contents();
        oldNodes.replaceWith(nodes30);
      }));
      root30.append(node5);
      
      var node6 = $("<span>");
      node6.attr('id', "navigators");
      
      
      var tmp184 = mobl.ref(false);
      
      
      var tmp183 = mobl.ref(null);
      
      
      var tmp182 = mobl.ref(null);
      
      var nodes26 = $("<span>");
      node6.append(nodes26);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp182, tmp183, tmp184, function(_, callback) {
        var root31 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node7 = $("<span>");
        
        var val8 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val8 !== null) {
          subs__.addSub(mobl.domBind(node7, 'mousedown', val8));
        }
        
        var val9 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val9 !== null) {
          subs__.addSub(mobl.domBind(node7, 'mouseup', val9));
        }
        
        
        var tmp162 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.prev(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp167 = mobl.ref(null);
        
        
        var tmp166 = mobl.ref(null);
        
        
        var tmp165 = mobl.ref(null);
        
        
        var tmp164 = mobl.ref(null);
        
        
        var tmp163 = mobl.ref(null);
        
        var nodes29 = $("<span>");
        node7.append(nodes29);
        subs__.addSub((ui.image)(backButtonImage, tmp163, tmp164, tmp162, tmp165, tmp166, tmp167, function(_, callback) {
          var root34 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root34); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes29;
          nodes29 = node.contents();
          oldNodes.replaceWith(nodes29);
        }));
        root31.append(node7);
        
        var node8 = $("<span>");
        
        var ref0 = mobl.ref(ui.stressGraphButton);
        if(ref0.get() !== null) {
          node8.attr('class', ref0.get());
          subs__.addSub(ref0.addEventListener('change', function(_, ref, val) {
            node8.attr('class', val);
          }));
          
        }
        subs__.addSub(ref0.rebind());
        
        var val4 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4 !== null) {
          subs__.addSub(mobl.domBind(node8, 'mouseover', val4));
        }
        
        var val5 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val5 !== null) {
          subs__.addSub(mobl.domBind(node8, 'mouseout', val5));
        }
        
        var val6 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val6 !== null) {
          subs__.addSub(mobl.domBind(node8, 'mousedown', val6));
        }
        
        var val7 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val7 !== null) {
          subs__.addSub(mobl.domBind(node8, 'mouseup', val7));
        }
        
        
        var tmp168 = mobl.ref(function(event, callback) {
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
                             models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll2) {
                               coll2 = coll2.reverse();
                               function processOne1() {
                                 var mood;
                                 mood = coll2.pop();
                                 var result__ = data + mood.happy + ",";
                                 data = result__;
                                 
                                 if(coll2.length > 0) processOne1(); else rest1();
                                 
                               }
                               function rest1() {
                                 var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                                 moods.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll2.length > 0) processOne1(); else rest1();
                             });
                             
                           });
        
        
        var tmp174 = mobl.ref(null);
        
        
        var tmp173 = mobl.ref(null);
        
        
        var tmp172 = mobl.ref(null);
        
        
        var tmp171 = mobl.ref(null);
        
        
        var tmp169 = mobl.ref(null);
        
        var nodes28 = $("<span>");
        node8.append(nodes28);
        subs__.addSub((ui.image)(stressGraphImage, tmp169, tmp171, tmp168, tmp172, tmp173, tmp174, function(_, callback) {
          var root33 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root33); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes28;
          nodes28 = node.contents();
          oldNodes.replaceWith(nodes28);
        }));
        root31.append(node8);
        
        var node9 = $("<span>");
        
        var val2 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val2 !== null) {
          subs__.addSub(mobl.domBind(node9, 'mousedown', val2));
        }
        
        var val3 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val3 !== null) {
          subs__.addSub(mobl.domBind(node9, 'mouseup', val3));
        }
        
        
        var tmp175 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.next(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp181 = mobl.ref(null);
        
        
        var tmp179 = mobl.ref(null);
        
        
        var tmp178 = mobl.ref(null);
        
        
        var tmp177 = mobl.ref(null);
        
        
        var tmp176 = mobl.ref(null);
        
        var nodes27 = $("<span>");
        node9.append(nodes27);
        subs__.addSub((ui.image)(nextButtonImage, tmp176, tmp177, tmp175, tmp178, tmp179, tmp181, function(_, callback) {
          var root32 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root32); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes27;
          nodes27 = node.contents();
          oldNodes.replaceWith(nodes27);
        }));
        root31.append(node9);
        callback(root31); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes26;
        nodes26 = node.contents();
        oldNodes.replaceWith(nodes26);
      }));
      root30.append(node6);
      callback(root30); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25;
      nodes25 = node.contents();
      oldNodes.replaceWith(nodes25);
    }));
    
    var tmp238 = mobl.ref(null);
    
    
    var tmp237 = mobl.ref(null);
    
    
    var tmp236 = mobl.ref(null);
    
    var nodes32 = $("<span>");
    root28.append(nodes32);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp236, tmp237, tmp238, function(_, callback) {
      var root37 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node11 = $("<span>");
      node11.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      
      var tmp197 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp197.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp197.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp197.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp196 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Reminder";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp199 = mobl.ref(null);
      
      
      var tmp198 = mobl.ref(null);
      
      var nodes39 = $("<span>");
      node11.append(nodes39);
      subs__.addSub((mobl.span)(tmp197, tmp198, tmp196, tmp199, function(_, callback) {
        var root44 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp188 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp188.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        
        var tmp195 = mobl.ref(null);
        
        
        var tmp194 = mobl.ref(null);
        
        
        var tmp193 = mobl.ref(null);
        
        
        var tmp192 = mobl.ref(null);
        
        
        var tmp191 = mobl.ref(null);
        
        
        var tmp189 = mobl.ref(null);
        
        var nodes40 = $("<span>");
        root44.append(nodes40);
        subs__.addSub((ui.image)(tmp188, tmp189, tmp191, tmp192, tmp193, tmp194, tmp195, function(_, callback) {
          var root45 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root45); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes40;
          nodes40 = node.contents();
          oldNodes.replaceWith(nodes40);
        }));
        callback(root44); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes39;
        nodes39 = node.contents();
        oldNodes.replaceWith(nodes39);
      }));
      root37.append(node11);
      
      var node12 = $("<span>");
      node12.attr('style', "position: absolute; margin-left: 70px;");
      
      
      var tmp208 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp208.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp208.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp208.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp207 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Life";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp211 = mobl.ref(null);
      
      
      var tmp209 = mobl.ref(null);
      
      var nodes37 = $("<span>");
      node12.append(nodes37);
      subs__.addSub((mobl.span)(tmp208, tmp209, tmp207, tmp211, function(_, callback) {
        var root42 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp200 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp200.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        
        var tmp206 = mobl.ref(null);
        
        
        var tmp205 = mobl.ref(null);
        
        
        var tmp204 = mobl.ref(null);
        
        
        var tmp203 = mobl.ref(null);
        
        
        var tmp202 = mobl.ref(null);
        
        
        var tmp201 = mobl.ref(null);
        
        var nodes38 = $("<span>");
        root42.append(nodes38);
        subs__.addSub((ui.image)(tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, function(_, callback) {
          var root43 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root43); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes38;
          nodes38 = node.contents();
          oldNodes.replaceWith(nodes38);
        }));
        callback(root42); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes37;
        nodes37 = node.contents();
        oldNodes.replaceWith(nodes37);
      }));
      root37.append(node12);
      
      var node13 = $("<span>");
      node13.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      
      var tmp221 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp221.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp221.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp221.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp219 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Moodometer";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp223 = mobl.ref(null);
      
      
      var tmp222 = mobl.ref(null);
      
      var nodes35 = $("<span>");
      node13.append(nodes35);
      subs__.addSub((mobl.span)(tmp221, tmp222, tmp219, tmp223, function(_, callback) {
        var root40 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp212 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp212.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        
        var tmp218 = mobl.ref(null);
        
        
        var tmp217 = mobl.ref(null);
        
        
        var tmp216 = mobl.ref(null);
        
        
        var tmp215 = mobl.ref(null);
        
        
        var tmp214 = mobl.ref(null);
        
        
        var tmp213 = mobl.ref(null);
        
        var nodes36 = $("<span>");
        root40.append(nodes36);
        subs__.addSub((ui.image)(tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, function(_, callback) {
          var root41 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root41); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes36;
          nodes36 = node.contents();
          oldNodes.replaceWith(nodes36);
        }));
        callback(root40); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes35;
        nodes35 = node.contents();
        oldNodes.replaceWith(nodes35);
      }));
      root37.append(node13);
      
      var node14 = $("<span>");
      node14.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      
      var tmp233 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp233.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp233.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp233.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp232 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Meditate";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp235 = mobl.ref(null);
      
      
      var tmp234 = mobl.ref(null);
      
      var nodes33 = $("<span>");
      node14.append(nodes33);
      subs__.addSub((mobl.span)(tmp233, tmp234, tmp232, tmp235, function(_, callback) {
        var root38 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp224 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp224.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        
        var tmp231 = mobl.ref(null);
        
        
        var tmp229 = mobl.ref(null);
        
        
        var tmp228 = mobl.ref(null);
        
        
        var tmp227 = mobl.ref(null);
        
        
        var tmp226 = mobl.ref(null);
        
        
        var tmp225 = mobl.ref(null);
        
        var nodes34 = $("<span>");
        root38.append(nodes34);
        subs__.addSub((ui.image)(tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp231, function(_, callback) {
          var root39 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root39); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes34;
          nodes34 = node.contents();
          oldNodes.replaceWith(nodes34);
        }));
        callback(root38); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes33;
        nodes33 = node.contents();
        oldNodes.replaceWith(nodes33);
      }));
      root37.append(node14);
      callback(root37); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes32;
      nodes32 = node.contents();
      oldNodes.replaceWith(nodes32);
    }));
    callback(root28); return subs__;
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes23;
    nodes23 = node.contents();
    oldNodes.replaceWith(nodes23);
  }));
  callback(root27); return subs__;
  
  return subs__;
};
