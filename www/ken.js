mobl.provides('ken');
mobl.provides('controls');
mobl.provides('models');
ken.nextTabs = mobl.ref(["Reminder", "Life", "Moodometer", "Meditate", "Reminder"]);
ken.prevTabs = mobl.ref(["Reminder", "Meditate", "Moodometer", "Life", "Reminder"]);
ken.navigateTab = function(currentTab, tabs) {
   var __this = this;
  var coll1191 = mobl.range(0, tabs.length);
  var length274 = coll1191.length;
  for(var i551 = 0; i551 < length274; i551++) {
    var index;
    index = coll1191.get(i551);
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
  var root13284 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp41989 = mobl.ref(null);
  
  
  var tmp41988 = mobl.ref(null);
  
  
  var tmp41987 = mobl.ref(null);
  
  var nodes12090 = $("<span>");
  root13284.append(nodes12090);
  subs__.addSub((mobl.block)(mobl.ref(ui.root), tmp41987, tmp41988, tmp41989, function(_, callback) {
    var root13285 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp41839 = mobl.ref("Ken");
    
    
    var tmp41840 = mobl.ref(null);
    
    var nodes12091 = $("<span>");
    root13285.append(nodes12091);
    subs__.addSub((ui.customHeader)(tmp41839, tmp41840, function(_, callback) {
      var root13286 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13286); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes12091;
      nodes12091 = node.contents();
      oldNodes.replaceWith(nodes12091);
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
    
    var node5605 = $("<div>");
    node5605.attr('style', "height: 284px; margin-left: 25px; margin-top: 10px");
    
    
    var tmp41848 = mobl.ref(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp41848.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp41848.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp41848.set(activeTabName.get() == "StressGraph" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp41851 = mobl.ref(null);
    
    
    var tmp41850 = mobl.ref(null);
    
    
    var tmp41849 = mobl.ref(null);
    
    var nodes12108 = $("<span>");
    node5605.append(nodes12108);
    subs__.addSub((mobl.block)(tmp41848, tmp41849, tmp41850, tmp41851, function(_, callback) {
      var root13303 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12109 = $("<span>");
      root13303.append(nodes12109);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root13304 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp41841 = mobl.ref("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        subs__.addSub(moods.addEventListener('change', function() {
          tmp41841.set("http://chart.apis.google.com/chart?chf=bg,s,67676700&chxl=0:|Mon|Tue|Wed|Thu|Fri|Sat|Sun|1:|Low|Med|High&chxp=0,0.2,1.1,2,2.9,3.8,4.7,5.6|1,0.5,1.5,2.5&chxr=0,0,6|1,0,3&chxs=0,676767,11.5,0,_,676767|1,676767,11.5,0,_,676767&chxt=t,y&chs=274x269&cht=lxy&chco=DDF8CC&chds=0,6,0,100&chd=t:0,1,2,3,4,5,6|" + moods.get() + "&chdlp=t&chls=1&chma=0,25,45,15&chm=r,3399CCCE,0,0,0.333|r,49188FCE,0,0.333,0.666|r,FF0000CC,0,0.666,1");
        }));
        
        
        var tmp41847 = mobl.ref(null);
        
        
        var tmp41846 = mobl.ref(null);
        
        
        var tmp41845 = mobl.ref(null);
        
        
        var tmp41844 = mobl.ref(null);
        
        
        var tmp41843 = mobl.ref(null);
        
        
        var tmp41842 = mobl.ref(null);
        
        var nodes12110 = $("<span>");
        root13304.append(nodes12110);
        subs__.addSub((ui.image)(tmp41841, tmp41842, tmp41843, tmp41844, tmp41845, tmp41846, tmp41847, function(_, callback) {
          var root13305 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13305); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12110;
          nodes12110 = node.contents();
          oldNodes.replaceWith(nodes12110);
        }));
        callback(root13304); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12109;
        nodes12109 = node.contents();
        oldNodes.replaceWith(nodes12109);
      }));
      callback(root13303); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12108;
      nodes12108 = node.contents();
      oldNodes.replaceWith(nodes12108);
    }));
    
    var tmp41865 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp41865.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp41865.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp41865.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp41868 = mobl.ref(null);
    
    
    var tmp41867 = mobl.ref(null);
    
    
    var tmp41866 = mobl.ref(null);
    
    var nodes12111 = $("<span>");
    node5605.append(nodes12111);
    subs__.addSub((mobl.block)(tmp41865, tmp41866, tmp41867, tmp41868, function(_, callback) {
      var root13306 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12112 = $("<span>");
      root13306.append(nodes12112);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root13307 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node5616 = $("<div>");
        node5616.attr('id', "flash__Reminder");
        
        var ref2816 = mobl.ref(ui.flash);
        if(ref2816.get() !== null) {
          node5616.attr('class', ref2816.get());
          subs__.addSub(ref2816.addEventListener('change', function(_, ref, val) {
            node5616.attr('class', val);
          }));
          
        }
        subs__.addSub(ref2816.rebind());
        
        
        var tmp41853 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Reminder").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp41852 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp41858 = mobl.ref(null);
        
        
        var tmp41857 = mobl.ref(null);
        
        
        var tmp41856 = mobl.ref(null);
        
        
        var tmp41855 = mobl.ref(null);
        
        
        var tmp41854 = mobl.ref(null);
        
        var nodes12114 = $("<span>");
        node5616.append(nodes12114);
        subs__.addSub((ui.image)(tmp41852, tmp41854, tmp41855, tmp41853, tmp41856, tmp41857, tmp41858, function(_, callback) {
          var root13309 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13309); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12114;
          nodes12114 = node.contents();
          oldNodes.replaceWith(nodes12114);
        }));
        
        var node5617 = $("<span>");
        
        var ref2815 = mobl.ref(ui.transition);
        if(ref2815.get() !== null) {
          node5617.attr('class', ref2815.get());
          subs__.addSub(ref2815.addEventListener('change', function(_, ref, val) {
            node5617.attr('class', val);
          }));
          
        }
        subs__.addSub(ref2815.rebind());
        
        var val4183 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4183 !== null) {
          subs__.addSub(mobl.domBind(node5617, 'mousedown', val4183));
        }
        
        var val4184 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4184 !== null) {
          subs__.addSub(mobl.domBind(node5617, 'mouseup', val4184));
        }
        
        
        var tmp41864 = mobl.ref(null);
        
        
        var tmp41863 = mobl.ref(null);
        
        
        var tmp41862 = mobl.ref(null);
        
        
        var tmp41861 = mobl.ref(null);
        
        
        var tmp41860 = mobl.ref(null);
        
        
        var tmp41859 = mobl.ref(null);
        
        var nodes12115 = $("<span>");
        node5617.append(nodes12115);
        subs__.addSub((ui.image)(transitionImage, tmp41859, tmp41860, tmp41861, tmp41862, tmp41863, tmp41864, function(_, callback) {
          var root13310 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13310); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12115;
          nodes12115 = node.contents();
          oldNodes.replaceWith(nodes12115);
        }));
        node5616.append(node5617);
        
        var node5618 = $("<span>");
        node5618.attr('style', "position: absolute; color: white; margin-left: -221px; margin-top: 202px;");
        
        
        node5618.append("Reminders saved");
        node5616.append(node5618);
        root13307.append(node5616);
        var nodes12113 = $("<span>");
        root13307.append(nodes12113);
        subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
          var root13308 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13308); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12113;
          nodes12113 = node.contents();
          oldNodes.replaceWith(nodes12113);
        }));
        callback(root13307); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12112;
        nodes12112 = node.contents();
        oldNodes.replaceWith(nodes12112);
      }));
      callback(root13306); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12111;
      nodes12111 = node.contents();
      oldNodes.replaceWith(nodes12111);
    }));
    
    var tmp41882 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp41882.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp41882.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp41882.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp41885 = mobl.ref(null);
    
    
    var tmp41884 = mobl.ref(null);
    
    
    var tmp41883 = mobl.ref(null);
    
    var nodes12116 = $("<span>");
    node5605.append(nodes12116);
    subs__.addSub((mobl.block)(tmp41882, tmp41883, tmp41884, tmp41885, function(_, callback) {
      var root13311 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12117 = $("<span>");
      root13311.append(nodes12117);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root13312 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node5619 = $("<div>");
        node5619.attr('id', "flash__Life");
        
        var ref2818 = mobl.ref(ui.flash);
        if(ref2818.get() !== null) {
          node5619.attr('class', ref2818.get());
          subs__.addSub(ref2818.addEventListener('change', function(_, ref, val) {
            node5619.attr('class', val);
          }));
          
        }
        subs__.addSub(ref2818.rebind());
        
        
        var tmp41870 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__Life").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp41869 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp41875 = mobl.ref(null);
        
        
        var tmp41874 = mobl.ref(null);
        
        
        var tmp41873 = mobl.ref(null);
        
        
        var tmp41872 = mobl.ref(null);
        
        
        var tmp41871 = mobl.ref(null);
        
        var nodes12119 = $("<span>");
        node5619.append(nodes12119);
        subs__.addSub((ui.image)(tmp41869, tmp41871, tmp41872, tmp41870, tmp41873, tmp41874, tmp41875, function(_, callback) {
          var root13314 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13314); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12119;
          nodes12119 = node.contents();
          oldNodes.replaceWith(nodes12119);
        }));
        
        var node5620 = $("<span>");
        
        var ref2817 = mobl.ref(ui.transition);
        if(ref2817.get() !== null) {
          node5620.attr('class', ref2817.get());
          subs__.addSub(ref2817.addEventListener('change', function(_, ref, val) {
            node5620.attr('class', val);
          }));
          
        }
        subs__.addSub(ref2817.rebind());
        
        var val4185 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4185 !== null) {
          subs__.addSub(mobl.domBind(node5620, 'mousedown', val4185));
        }
        
        var val4186 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4186 !== null) {
          subs__.addSub(mobl.domBind(node5620, 'mouseup', val4186));
        }
        
        
        var tmp41881 = mobl.ref(null);
        
        
        var tmp41880 = mobl.ref(null);
        
        
        var tmp41879 = mobl.ref(null);
        
        
        var tmp41878 = mobl.ref(null);
        
        
        var tmp41877 = mobl.ref(null);
        
        
        var tmp41876 = mobl.ref(null);
        
        var nodes12120 = $("<span>");
        node5620.append(nodes12120);
        subs__.addSub((ui.image)(transitionImage, tmp41876, tmp41877, tmp41878, tmp41879, tmp41880, tmp41881, function(_, callback) {
          var root13315 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13315); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12120;
          nodes12120 = node.contents();
          oldNodes.replaceWith(nodes12120);
        }));
        node5619.append(node5620);
        
        var node5621 = $("<span>");
        node5621.attr('style', "position: absolute; color: white; margin-left: -210px; margin-top: 202px;");
        
        
        node5621.append("Events saved");
        node5619.append(node5621);
        root13312.append(node5619);
        var nodes12118 = $("<span>");
        root13312.append(nodes12118);
        subs__.addSub((controls.life.life)(function(_, callback) {
          var root13313 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13313); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12118;
          nodes12118 = node.contents();
          oldNodes.replaceWith(nodes12118);
        }));
        callback(root13312); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12117;
        nodes12117 = node.contents();
        oldNodes.replaceWith(nodes12117);
      }));
      callback(root13311); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12116;
      nodes12116 = node.contents();
      oldNodes.replaceWith(nodes12116);
    }));
    
    var tmp41899 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp41899.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp41899.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp41899.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp41902 = mobl.ref(null);
    
    
    var tmp41901 = mobl.ref(null);
    
    
    var tmp41900 = mobl.ref(null);
    
    var nodes12121 = $("<span>");
    node5605.append(nodes12121);
    subs__.addSub((mobl.block)(tmp41899, tmp41900, tmp41901, tmp41902, function(_, callback) {
      var root13316 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12122 = $("<span>");
      root13316.append(nodes12122);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root13317 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node5622 = $("<div>");
        node5622.attr('id', "flash__Moodometer");
        
        var ref2820 = mobl.ref(ui.flash);
        if(ref2820.get() !== null) {
          node5622.attr('class', ref2820.get());
          subs__.addSub(ref2820.addEventListener('change', function(_, ref, val) {
            node5622.attr('class', val);
          }));
          
        }
        subs__.addSub(ref2820.rebind());
        
        
        var tmp41887 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = mobl.$("#flash__Moodometer").hide();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp41886 = mobl.ref("resources/images/background_lastscreen.png");
        
        
        var tmp41892 = mobl.ref(null);
        
        
        var tmp41891 = mobl.ref(null);
        
        
        var tmp41890 = mobl.ref(null);
        
        
        var tmp41889 = mobl.ref(null);
        
        
        var tmp41888 = mobl.ref(null);
        
        var nodes12124 = $("<span>");
        node5622.append(nodes12124);
        subs__.addSub((ui.image)(tmp41886, tmp41888, tmp41889, tmp41887, tmp41890, tmp41891, tmp41892, function(_, callback) {
          var root13319 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13319); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12124;
          nodes12124 = node.contents();
          oldNodes.replaceWith(nodes12124);
        }));
        
        var node5623 = $("<span>");
        
        var ref2819 = mobl.ref(ui.transition);
        if(ref2819.get() !== null) {
          node5623.attr('class', ref2819.get());
          subs__.addSub(ref2819.addEventListener('change', function(_, ref, val) {
            node5623.attr('class', val);
          }));
          
        }
        subs__.addSub(ref2819.rebind());
        
        var val4187 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen_pressed.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4187 !== null) {
          subs__.addSub(mobl.domBind(node5623, 'mousedown', val4187));
        }
        
        var val4188 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/transition_screen.png";
                      transitionImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4188 !== null) {
          subs__.addSub(mobl.domBind(node5623, 'mouseup', val4188));
        }
        
        
        var tmp41898 = mobl.ref(null);
        
        
        var tmp41897 = mobl.ref(null);
        
        
        var tmp41896 = mobl.ref(null);
        
        
        var tmp41895 = mobl.ref(null);
        
        
        var tmp41894 = mobl.ref(null);
        
        
        var tmp41893 = mobl.ref(null);
        
        var nodes12125 = $("<span>");
        node5623.append(nodes12125);
        subs__.addSub((ui.image)(transitionImage, tmp41893, tmp41894, tmp41895, tmp41896, tmp41897, tmp41898, function(_, callback) {
          var root13320 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13320); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12125;
          nodes12125 = node.contents();
          oldNodes.replaceWith(nodes12125);
        }));
        node5622.append(node5623);
        
        var node5624 = $("<span>");
        node5624.attr('style', "position: absolute; color: white; margin-left: -203px; margin-top: 202px;");
        
        
        node5624.append("Mood saved");
        node5622.append(node5624);
        root13317.append(node5622);
        var nodes12123 = $("<span>");
        root13317.append(nodes12123);
        subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
          var root13318 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13318); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12123;
          nodes12123 = node.contents();
          oldNodes.replaceWith(nodes12123);
        }));
        callback(root13317); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12122;
        nodes12122 = node.contents();
        oldNodes.replaceWith(nodes12122);
      }));
      callback(root13316); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12121;
      nodes12121 = node.contents();
      oldNodes.replaceWith(nodes12121);
    }));
    
    var tmp41903 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp41903.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
      tmp41903.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
      tmp41903.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
    }));
    
    
    var tmp41906 = mobl.ref(null);
    
    
    var tmp41905 = mobl.ref(null);
    
    
    var tmp41904 = mobl.ref(null);
    
    var nodes12126 = $("<span>");
    node5605.append(nodes12126);
    subs__.addSub((mobl.block)(tmp41903, tmp41904, tmp41905, tmp41906, function(_, callback) {
      var root13321 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12127 = $("<span>");
      root13321.append(nodes12127);
      subs__.addSub((mobl.screenContext)(function(_, callback) {
        var root13322 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes12128 = $("<span>");
        root13322.append(nodes12128);
        subs__.addSub((controls.meditate.meditate)(function(_, callback) {
          var root13323 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13323); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12128;
          nodes12128 = node.contents();
          oldNodes.replaceWith(nodes12128);
        }));
        callback(root13322); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12127;
        nodes12127 = node.contents();
        oldNodes.replaceWith(nodes12127);
      }));
      callback(root13321); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12126;
      nodes12126 = node.contents();
      oldNodes.replaceWith(nodes12126);
    }));
    root13285.append(node5605);
    
    var tmp41939 = mobl.ref(null);
    
    
    var tmp41938 = mobl.ref(null);
    
    
    var tmp41937 = mobl.ref(null);
    
    var nodes12092 = $("<span>");
    root13285.append(nodes12092);
    subs__.addSub((mobl.block)(mobl.ref(ui.navigator), tmp41937, tmp41938, tmp41939, function(_, callback) {
      var root13287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node5606 = $("<span>");
      node5606.attr('id', "placeholder");
      node5606.attr('style', "display: none;");
      
      
      var tmp41915 = mobl.ref(false);
      
      
      var tmp41914 = mobl.ref(null);
      
      
      var tmp41913 = mobl.ref(null);
      
      var nodes12097 = $("<span>");
      node5606.append(nodes12097);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp41913, tmp41914, tmp41915, function(_, callback) {
        var root13292 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node5611 = $("<span>");
        node5611.attr('style', "margin-left: 57px;");
        
        var val4181 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4181 !== null) {
          subs__.addSub(mobl.domBind(node5611, 'mousedown', val4181));
        }
        
        var val4182 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImageOn.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4182 !== null) {
          subs__.addSub(mobl.domBind(node5611, 'mouseout', val4182));
        }
        
        
        var tmp41907 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#placeholder").hide();
                             var result__ = mobl.$("#navigators").show();
                             var result__ = lastTabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp41912 = mobl.ref(null);
        
        
        var tmp41911 = mobl.ref(null);
        
        
        var tmp41910 = mobl.ref(null);
        
        
        var tmp41909 = mobl.ref(null);
        
        
        var tmp41908 = mobl.ref(null);
        
        var nodes12098 = $("<span>");
        node5611.append(nodes12098);
        subs__.addSub((ui.image)(stressGraphImageOn, tmp41908, tmp41909, tmp41907, tmp41910, tmp41911, tmp41912, function(_, callback) {
          var root13293 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13293); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12098;
          nodes12098 = node.contents();
          oldNodes.replaceWith(nodes12098);
        }));
        root13292.append(node5611);
        callback(root13292); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12097;
        nodes12097 = node.contents();
        oldNodes.replaceWith(nodes12097);
      }));
      root13287.append(node5606);
      
      var node5607 = $("<span>");
      node5607.attr('id', "navigators");
      
      
      var tmp41936 = mobl.ref(false);
      
      
      var tmp41935 = mobl.ref(null);
      
      
      var tmp41934 = mobl.ref(null);
      
      var nodes12093 = $("<span>");
      node5607.append(nodes12093);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp41934, tmp41935, tmp41936, function(_, callback) {
        var root13288 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node5608 = $("<span>");
        
        var val4179 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back_pressed.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4179 !== null) {
          subs__.addSub(mobl.domBind(node5608, 'mousedown', val4179));
        }
        
        var val4180 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/back.png";
                      backButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4180 !== null) {
          subs__.addSub(mobl.domBind(node5608, 'mouseup', val4180));
        }
        
        
        var tmp41916 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.prev(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp41921 = mobl.ref(null);
        
        
        var tmp41920 = mobl.ref(null);
        
        
        var tmp41919 = mobl.ref(null);
        
        
        var tmp41918 = mobl.ref(null);
        
        
        var tmp41917 = mobl.ref(null);
        
        var nodes12096 = $("<span>");
        node5608.append(nodes12096);
        subs__.addSub((ui.image)(backButtonImage, tmp41917, tmp41918, tmp41916, tmp41919, tmp41920, tmp41921, function(_, callback) {
          var root13291 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13291); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12096;
          nodes12096 = node.contents();
          oldNodes.replaceWith(nodes12096);
        }));
        root13288.append(node5608);
        
        var node5609 = $("<span>");
        
        var ref2814 = mobl.ref(ui.stressGraphButton);
        if(ref2814.get() !== null) {
          node5609.attr('class', ref2814.get());
          subs__.addSub(ref2814.addEventListener('change', function(_, ref, val) {
            node5609.attr('class', val);
          }));
          
        }
        subs__.addSub(ref2814.rebind());
        
        var val4175 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4175 !== null) {
          subs__.addSub(mobl.domBind(node5609, 'mouseover', val4175));
        }
        
        var val4176 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_off.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4176 !== null) {
          subs__.addSub(mobl.domBind(node5609, 'mouseout', val4176));
        }
        
        var val4177 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_pressed.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4177 !== null) {
          subs__.addSub(mobl.domBind(node5609, 'mousedown', val4177));
        }
        
        var val4178 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/view_stressgraph_on.png";
                      stressGraphImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4178 !== null) {
          subs__.addSub(mobl.domBind(node5609, 'mouseup', val4178));
        }
        
        
        var tmp41922 = mobl.ref(function(event, callback) {
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
                             models.moods.Mood.all().order("date", false).limit(7).reverse().list(function(coll1192) {
                               coll1192 = coll1192.reverse();
                               function processOne191() {
                                 var mood;
                                 mood = coll1192.pop();
                                 var result__ = data + mood.happy + ",";
                                 data = result__;
                                 
                                 if(coll1192.length > 0) processOne191(); else rest191();
                                 
                               }
                               function rest191() {
                                 var result__ = data.substring(0, data.length - 1 < 0 ? 0 : data.length - 1);
                                 moods.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll1192.length > 0) processOne191(); else rest191();
                             });
                             
                           });
        
        
        var tmp41927 = mobl.ref(null);
        
        
        var tmp41926 = mobl.ref(null);
        
        
        var tmp41925 = mobl.ref(null);
        
        
        var tmp41924 = mobl.ref(null);
        
        
        var tmp41923 = mobl.ref(null);
        
        var nodes12095 = $("<span>");
        node5609.append(nodes12095);
        subs__.addSub((ui.image)(stressGraphImage, tmp41923, tmp41924, tmp41922, tmp41925, tmp41926, tmp41927, function(_, callback) {
          var root13290 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13290); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12095;
          nodes12095 = node.contents();
          oldNodes.replaceWith(nodes12095);
        }));
        root13288.append(node5609);
        
        var node5610 = $("<span>");
        
        var val4173 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next_pressed.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4173 !== null) {
          subs__.addSub(mobl.domBind(node5610, 'mousedown', val4173));
        }
        
        var val4174 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = "resources/images/next.png";
                      nextButtonImage.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val4174 !== null) {
          subs__.addSub(mobl.domBind(node5610, 'mouseup', val4174));
        }
        
        
        var tmp41928 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                             var result__ = mobl.$("#sliders").show();
                             var result__ = ken.next(activeTabName.get());
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp41933 = mobl.ref(null);
        
        
        var tmp41932 = mobl.ref(null);
        
        
        var tmp41931 = mobl.ref(null);
        
        
        var tmp41930 = mobl.ref(null);
        
        
        var tmp41929 = mobl.ref(null);
        
        var nodes12094 = $("<span>");
        node5610.append(nodes12094);
        subs__.addSub((ui.image)(nextButtonImage, tmp41929, tmp41930, tmp41928, tmp41931, tmp41932, tmp41933, function(_, callback) {
          var root13289 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13289); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12094;
          nodes12094 = node.contents();
          oldNodes.replaceWith(nodes12094);
        }));
        root13288.append(node5610);
        callback(root13288); return subs__;
        
        
        
        
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12093;
        nodes12093 = node.contents();
        oldNodes.replaceWith(nodes12093);
      }));
      root13287.append(node5607);
      callback(root13287); return subs__;
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12092;
      nodes12092 = node.contents();
      oldNodes.replaceWith(nodes12092);
    }));
    
    var tmp41986 = mobl.ref(null);
    
    
    var tmp41985 = mobl.ref(null);
    
    
    var tmp41984 = mobl.ref(null);
    
    var nodes12099 = $("<span>");
    root13285.append(nodes12099);
    subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp41984, tmp41985, tmp41986, function(_, callback) {
      var root13294 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node5612 = $("<span>");
      node5612.attr('style', "position: absolute; margin-left: 0px; margin-top: 2px; vertical-align-bottom;");
      
      
      var tmp41948 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp41948.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp41948.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp41948.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp41947 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Reminder";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp41950 = mobl.ref(null);
      
      
      var tmp41949 = mobl.ref(null);
      
      var nodes12106 = $("<span>");
      node5612.append(nodes12106);
      subs__.addSub((mobl.span)(tmp41948, tmp41949, tmp41947, tmp41950, function(_, callback) {
        var root13301 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp41940 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp41940.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
        }));
        
        
        var tmp41946 = mobl.ref(null);
        
        
        var tmp41945 = mobl.ref(null);
        
        
        var tmp41944 = mobl.ref(null);
        
        
        var tmp41943 = mobl.ref(null);
        
        
        var tmp41942 = mobl.ref(null);
        
        
        var tmp41941 = mobl.ref(null);
        
        var nodes12107 = $("<span>");
        root13301.append(nodes12107);
        subs__.addSub((ui.image)(tmp41940, tmp41941, tmp41942, tmp41943, tmp41944, tmp41945, tmp41946, function(_, callback) {
          var root13302 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13302); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12107;
          nodes12107 = node.contents();
          oldNodes.replaceWith(nodes12107);
        }));
        callback(root13301); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12106;
        nodes12106 = node.contents();
        oldNodes.replaceWith(nodes12106);
      }));
      root13294.append(node5612);
      
      var node5613 = $("<span>");
      node5613.attr('style', "position: absolute; margin-left: 70px;");
      
      
      var tmp41959 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp41959.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp41959.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp41959.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp41958 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Life";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp41961 = mobl.ref(null);
      
      
      var tmp41960 = mobl.ref(null);
      
      var nodes12104 = $("<span>");
      node5613.append(nodes12104);
      subs__.addSub((mobl.span)(tmp41959, tmp41960, tmp41958, tmp41961, function(_, callback) {
        var root13299 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp41951 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp41951.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
        }));
        
        
        var tmp41957 = mobl.ref(null);
        
        
        var tmp41956 = mobl.ref(null);
        
        
        var tmp41955 = mobl.ref(null);
        
        
        var tmp41954 = mobl.ref(null);
        
        
        var tmp41953 = mobl.ref(null);
        
        
        var tmp41952 = mobl.ref(null);
        
        var nodes12105 = $("<span>");
        root13299.append(nodes12105);
        subs__.addSub((ui.image)(tmp41951, tmp41952, tmp41953, tmp41954, tmp41955, tmp41956, tmp41957, function(_, callback) {
          var root13300 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13300); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12105;
          nodes12105 = node.contents();
          oldNodes.replaceWith(nodes12105);
        }));
        callback(root13299); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12104;
        nodes12104 = node.contents();
        oldNodes.replaceWith(nodes12104);
      }));
      root13294.append(node5613);
      
      var node5614 = $("<span>");
      node5614.attr('style', "position: absolute; margin-left: 120px; margin-top: 1px;");
      
      
      var tmp41970 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp41970.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp41970.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp41970.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp41969 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Moodometer";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#flash__" + activeTabName.get()).hide();
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp41972 = mobl.ref(null);
      
      
      var tmp41971 = mobl.ref(null);
      
      var nodes12102 = $("<span>");
      node5614.append(nodes12102);
      subs__.addSub((mobl.span)(tmp41970, tmp41971, tmp41969, tmp41972, function(_, callback) {
        var root13297 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp41962 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp41962.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
        }));
        
        
        var tmp41968 = mobl.ref(null);
        
        
        var tmp41967 = mobl.ref(null);
        
        
        var tmp41966 = mobl.ref(null);
        
        
        var tmp41965 = mobl.ref(null);
        
        
        var tmp41964 = mobl.ref(null);
        
        
        var tmp41963 = mobl.ref(null);
        
        var nodes12103 = $("<span>");
        root13297.append(nodes12103);
        subs__.addSub((ui.image)(tmp41962, tmp41963, tmp41964, tmp41965, tmp41966, tmp41967, tmp41968, function(_, callback) {
          var root13298 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13298); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12103;
          nodes12103 = node.contents();
          oldNodes.replaceWith(nodes12103);
        }));
        callback(root13297); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12102;
        nodes12102 = node.contents();
        oldNodes.replaceWith(nodes12102);
      }));
      root13294.append(node5614);
      
      var node5615 = $("<span>");
      node5615.attr('style', "position: absolute; margin-left: 200px; margin-top: -2px;");
      
      
      var tmp41981 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp41981.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
        tmp41981.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
        tmp41981.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
      }));
      
      
      var tmp41980 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = "Meditate";
                           activeTabName.set(result__);
                           var result__ = mobl.$("#sliders").show();
                           var result__ = mobl.$("#placeholder").hide();
                           var result__ = mobl.$("#navigators").show();
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp41983 = mobl.ref(null);
      
      
      var tmp41982 = mobl.ref(null);
      
      var nodes12100 = $("<span>");
      node5615.append(nodes12100);
      subs__.addSub((mobl.span)(tmp41981, tmp41982, tmp41980, tmp41983, function(_, callback) {
        var root13295 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp41973 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp41973.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
        }));
        
        
        var tmp41979 = mobl.ref(null);
        
        
        var tmp41978 = mobl.ref(null);
        
        
        var tmp41977 = mobl.ref(null);
        
        
        var tmp41976 = mobl.ref(null);
        
        
        var tmp41975 = mobl.ref(null);
        
        
        var tmp41974 = mobl.ref(null);
        
        var nodes12101 = $("<span>");
        root13295.append(nodes12101);
        subs__.addSub((ui.image)(tmp41973, tmp41974, tmp41975, tmp41976, tmp41977, tmp41978, tmp41979, function(_, callback) {
          var root13296 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13296); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12101;
          nodes12101 = node.contents();
          oldNodes.replaceWith(nodes12101);
        }));
        callback(root13295); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12100;
        nodes12100 = node.contents();
        oldNodes.replaceWith(nodes12100);
      }));
      root13294.append(node5615);
      callback(root13294); return subs__;
      
      
      
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12099;
      nodes12099 = node.contents();
      oldNodes.replaceWith(nodes12099);
    }));
    callback(root13285); return subs__;
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes12090;
    nodes12090 = node.contents();
    oldNodes.replaceWith(nodes12090);
  }));
  callback(root13284); return subs__;
  
  return subs__;
};
