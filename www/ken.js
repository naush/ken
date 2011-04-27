mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root36833 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var node16560 = $("<div>");
  node16560.attr('style', "background-image: url(\"resources/images/background.png\"); background-repeat: no-repeat; height: 500px; width: 315px; position: absolute;");
  
  
  var tmp45634 = mobl.ref("Ken");
  
  
  var tmp45635 = mobl.ref(null);
  
  var nodes25269 = $("<span>");
  node16560.append(nodes25269);
  subs__.addSub((ui.customHeader)(tmp45634, tmp45635, function(_, callback) {
    var root36834 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36834); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes25269;
    nodes25269 = node.contents();
    oldNodes.replaceWith(nodes25269);
  }));
  
  var activeTabName = mobl.ref("Reminder");
  
  var s = mobl.ref("");
  
  var node16561 = $("<div>");
  node16561.attr('style', "height: 332px; margin-left: 25px; margin-top: 10px");
  
  
  var tmp45636 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp45636.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp45636.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp45636.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp45639 = mobl.ref(null);
  
  
  var tmp45638 = mobl.ref(null);
  
  
  var tmp45637 = mobl.ref(null);
  
  var nodes25279 = $("<span>");
  node16561.append(nodes25279);
  subs__.addSub((mobl.block)(tmp45636, tmp45637, tmp45638, tmp45639, function(_, callback) {
    var root36844 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes25280 = $("<span>");
    root36844.append(nodes25280);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root36845 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes25281 = $("<span>");
      root36845.append(nodes25281);
      subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
        var root36846 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36846); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25281;
        nodes25281 = node.contents();
        oldNodes.replaceWith(nodes25281);
      }));
      callback(root36845); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25280;
      nodes25280 = node.contents();
      oldNodes.replaceWith(nodes25280);
    }));
    callback(root36844); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes25279;
    nodes25279 = node.contents();
    oldNodes.replaceWith(nodes25279);
  }));
  
  var tmp45640 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp45640.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp45640.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp45640.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp45643 = mobl.ref(null);
  
  
  var tmp45642 = mobl.ref(null);
  
  
  var tmp45641 = mobl.ref(null);
  
  var nodes25282 = $("<span>");
  node16561.append(nodes25282);
  subs__.addSub((mobl.block)(tmp45640, tmp45641, tmp45642, tmp45643, function(_, callback) {
    var root36847 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes25283 = $("<span>");
    root36847.append(nodes25283);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root36848 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes25284 = $("<span>");
      root36848.append(nodes25284);
      subs__.addSub((controls.life.life)(function(_, callback) {
        var root36849 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36849); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25284;
        nodes25284 = node.contents();
        oldNodes.replaceWith(nodes25284);
      }));
      callback(root36848); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25283;
      nodes25283 = node.contents();
      oldNodes.replaceWith(nodes25283);
    }));
    callback(root36847); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes25282;
    nodes25282 = node.contents();
    oldNodes.replaceWith(nodes25282);
  }));
  
  var tmp45644 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp45644.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp45644.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp45644.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp45647 = mobl.ref(null);
  
  
  var tmp45646 = mobl.ref(null);
  
  
  var tmp45645 = mobl.ref(null);
  
  var nodes25285 = $("<span>");
  node16561.append(nodes25285);
  subs__.addSub((mobl.block)(tmp45644, tmp45645, tmp45646, tmp45647, function(_, callback) {
    var root36850 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes25286 = $("<span>");
    root36850.append(nodes25286);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root36851 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes25287 = $("<span>");
      root36851.append(nodes25287);
      subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
        var root36852 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36852); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25287;
        nodes25287 = node.contents();
        oldNodes.replaceWith(nodes25287);
      }));
      callback(root36851); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25286;
      nodes25286 = node.contents();
      oldNodes.replaceWith(nodes25286);
    }));
    callback(root36850); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes25285;
    nodes25285 = node.contents();
    oldNodes.replaceWith(nodes25285);
  }));
  
  var tmp45648 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp45648.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp45648.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp45648.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp45651 = mobl.ref(null);
  
  
  var tmp45650 = mobl.ref(null);
  
  
  var tmp45649 = mobl.ref(null);
  
  var nodes25288 = $("<span>");
  node16561.append(nodes25288);
  subs__.addSub((mobl.block)(tmp45648, tmp45649, tmp45650, tmp45651, function(_, callback) {
    var root36853 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes25289 = $("<span>");
    root36853.append(nodes25289);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root36854 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes25290 = $("<span>");
      root36854.append(nodes25290);
      subs__.addSub((controls.meditate.meditate)(function(_, callback) {
        var root36855 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36855); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25290;
        nodes25290 = node.contents();
        oldNodes.replaceWith(nodes25290);
      }));
      callback(root36854); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25289;
      nodes25289 = node.contents();
      oldNodes.replaceWith(nodes25289);
    }));
    callback(root36853); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes25288;
    nodes25288 = node.contents();
    oldNodes.replaceWith(nodes25288);
  }));
  node16560.append(node16561);
  
  var tmp45698 = mobl.ref(null);
  
  
  var tmp45697 = mobl.ref(null);
  
  
  var tmp45696 = mobl.ref(null);
  
  var nodes25270 = $("<span>");
  node16560.append(nodes25270);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp45696, tmp45697, tmp45698, function(_, callback) {
    var root36835 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp45660 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp45660.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp45660.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp45660.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp45659 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Reminder";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp45662 = mobl.ref(null);
    
    
    var tmp45661 = mobl.ref(null);
    
    var nodes25271 = $("<span>");
    root36835.append(nodes25271);
    subs__.addSub((mobl.span)(tmp45660, tmp45661, tmp45659, tmp45662, function(_, callback) {
      var root36836 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp45652 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp45652.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
      }));
      
      
      var tmp45658 = mobl.ref(null);
      
      
      var tmp45657 = mobl.ref(null);
      
      
      var tmp45656 = mobl.ref(null);
      
      
      var tmp45655 = mobl.ref(null);
      
      
      var tmp45654 = mobl.ref(null);
      
      
      var tmp45653 = mobl.ref(null);
      
      var nodes25272 = $("<span>");
      root36836.append(nodes25272);
      subs__.addSub((ui.image)(tmp45652, tmp45653, tmp45654, tmp45655, tmp45656, tmp45657, tmp45658, function(_, callback) {
        var root36837 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36837); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25272;
        nodes25272 = node.contents();
        oldNodes.replaceWith(nodes25272);
      }));
      callback(root36836); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25271;
      nodes25271 = node.contents();
      oldNodes.replaceWith(nodes25271);
    }));
    
    var tmp45671 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp45671.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp45671.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp45671.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp45670 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Life";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp45673 = mobl.ref(null);
    
    
    var tmp45672 = mobl.ref(null);
    
    var nodes25273 = $("<span>");
    root36835.append(nodes25273);
    subs__.addSub((mobl.span)(tmp45671, tmp45672, tmp45670, tmp45673, function(_, callback) {
      var root36838 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp45663 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp45663.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
      }));
      
      
      var tmp45669 = mobl.ref(null);
      
      
      var tmp45668 = mobl.ref(null);
      
      
      var tmp45667 = mobl.ref(null);
      
      
      var tmp45666 = mobl.ref(null);
      
      
      var tmp45665 = mobl.ref(null);
      
      
      var tmp45664 = mobl.ref(null);
      
      var nodes25274 = $("<span>");
      root36838.append(nodes25274);
      subs__.addSub((ui.image)(tmp45663, tmp45664, tmp45665, tmp45666, tmp45667, tmp45668, tmp45669, function(_, callback) {
        var root36839 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36839); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25274;
        nodes25274 = node.contents();
        oldNodes.replaceWith(nodes25274);
      }));
      callback(root36838); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25273;
      nodes25273 = node.contents();
      oldNodes.replaceWith(nodes25273);
    }));
    
    var tmp45682 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp45682.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp45682.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp45682.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp45681 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Moodometer";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp45684 = mobl.ref(null);
    
    
    var tmp45683 = mobl.ref(null);
    
    var nodes25275 = $("<span>");
    root36835.append(nodes25275);
    subs__.addSub((mobl.span)(tmp45682, tmp45683, tmp45681, tmp45684, function(_, callback) {
      var root36840 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp45674 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp45674.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
      }));
      
      
      var tmp45680 = mobl.ref(null);
      
      
      var tmp45679 = mobl.ref(null);
      
      
      var tmp45678 = mobl.ref(null);
      
      
      var tmp45677 = mobl.ref(null);
      
      
      var tmp45676 = mobl.ref(null);
      
      
      var tmp45675 = mobl.ref(null);
      
      var nodes25276 = $("<span>");
      root36840.append(nodes25276);
      subs__.addSub((ui.image)(tmp45674, tmp45675, tmp45676, tmp45677, tmp45678, tmp45679, tmp45680, function(_, callback) {
        var root36841 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36841); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25276;
        nodes25276 = node.contents();
        oldNodes.replaceWith(nodes25276);
      }));
      callback(root36840); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25275;
      nodes25275 = node.contents();
      oldNodes.replaceWith(nodes25275);
    }));
    
    var tmp45693 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp45693.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp45693.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp45693.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp45692 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Meditate";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp45695 = mobl.ref(null);
    
    
    var tmp45694 = mobl.ref(null);
    
    var nodes25277 = $("<span>");
    root36835.append(nodes25277);
    subs__.addSub((mobl.span)(tmp45693, tmp45694, tmp45692, tmp45695, function(_, callback) {
      var root36842 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp45685 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp45685.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
      }));
      
      
      var tmp45691 = mobl.ref(null);
      
      
      var tmp45690 = mobl.ref(null);
      
      
      var tmp45689 = mobl.ref(null);
      
      
      var tmp45688 = mobl.ref(null);
      
      
      var tmp45687 = mobl.ref(null);
      
      
      var tmp45686 = mobl.ref(null);
      
      var nodes25278 = $("<span>");
      root36842.append(nodes25278);
      subs__.addSub((ui.image)(tmp45685, tmp45686, tmp45687, tmp45688, tmp45689, tmp45690, tmp45691, function(_, callback) {
        var root36843 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36843); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25278;
        nodes25278 = node.contents();
        oldNodes.replaceWith(nodes25278);
      }));
      callback(root36842); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25277;
      nodes25277 = node.contents();
      oldNodes.replaceWith(nodes25277);
    }));
    callback(root36835); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes25270;
    nodes25270 = node.contents();
    oldNodes.replaceWith(nodes25270);
  }));
  root36833.append(node16560);
  callback(root36833); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};
