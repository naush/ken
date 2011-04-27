mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root35175 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var node16028 = $("<div>");
  node16028.attr('style', "background-image: url(\"resources/images/background.png\"); background-repeat: no-repeat; height: 500px; width: 315px; position: absolute;");
  
  
  var tmp42714 = mobl.ref("Ken");
  
  
  var tmp42715 = mobl.ref(null);
  
  var nodes24037 = $("<span>");
  node16028.append(nodes24037);
  subs__.addSub((ui.customHeader)(tmp42714, tmp42715, function(_, callback) {
    var root35176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root35176); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24037;
    nodes24037 = node.contents();
    oldNodes.replaceWith(nodes24037);
  }));
  
  var activeTabName = mobl.ref("Reminder");
  
  var s = mobl.ref("");
  
  var node16029 = $("<div>");
  node16029.attr('style', "height: 332px; margin-left: 25px; margin-top: 10px");
  
  
  var tmp42716 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp42716.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp42716.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp42716.set(activeTabName.get() == "Reminder" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp42719 = mobl.ref(null);
  
  
  var tmp42718 = mobl.ref(null);
  
  
  var tmp42717 = mobl.ref(null);
  
  var nodes24047 = $("<span>");
  node16029.append(nodes24047);
  subs__.addSub((mobl.block)(tmp42716, tmp42717, tmp42718, tmp42719, function(_, callback) {
    var root35186 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes24048 = $("<span>");
    root35186.append(nodes24048);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root35187 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes24049 = $("<span>");
      root35187.append(nodes24049);
      subs__.addSub((controls.remindme.remindMe)(function(_, callback) {
        var root35188 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35188); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24049;
        nodes24049 = node.contents();
        oldNodes.replaceWith(nodes24049);
      }));
      callback(root35187); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24048;
      nodes24048 = node.contents();
      oldNodes.replaceWith(nodes24048);
    }));
    callback(root35186); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24047;
    nodes24047 = node.contents();
    oldNodes.replaceWith(nodes24047);
  }));
  
  var tmp42720 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp42720.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp42720.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp42720.set(activeTabName.get() == "Life" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp42723 = mobl.ref(null);
  
  
  var tmp42722 = mobl.ref(null);
  
  
  var tmp42721 = mobl.ref(null);
  
  var nodes24050 = $("<span>");
  node16029.append(nodes24050);
  subs__.addSub((mobl.block)(tmp42720, tmp42721, tmp42722, tmp42723, function(_, callback) {
    var root35189 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes24051 = $("<span>");
    root35189.append(nodes24051);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root35190 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes24052 = $("<span>");
      root35190.append(nodes24052);
      subs__.addSub((controls.life.life)(function(_, callback) {
        var root35191 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35191); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24052;
        nodes24052 = node.contents();
        oldNodes.replaceWith(nodes24052);
      }));
      callback(root35190); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24051;
      nodes24051 = node.contents();
      oldNodes.replaceWith(nodes24051);
    }));
    callback(root35189); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24050;
    nodes24050 = node.contents();
    oldNodes.replaceWith(nodes24050);
  }));
  
  var tmp42724 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp42724.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp42724.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp42724.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp42727 = mobl.ref(null);
  
  
  var tmp42726 = mobl.ref(null);
  
  
  var tmp42725 = mobl.ref(null);
  
  var nodes24053 = $("<span>");
  node16029.append(nodes24053);
  subs__.addSub((mobl.block)(tmp42724, tmp42725, tmp42726, tmp42727, function(_, callback) {
    var root35192 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes24054 = $("<span>");
    root35192.append(nodes24054);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root35193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes24055 = $("<span>");
      root35193.append(nodes24055);
      subs__.addSub((controls.moodometer.moodoMeter)(function(_, callback) {
        var root35194 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35194); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24055;
        nodes24055 = node.contents();
        oldNodes.replaceWith(nodes24055);
      }));
      callback(root35193); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24054;
      nodes24054 = node.contents();
      oldNodes.replaceWith(nodes24054);
    }));
    callback(root35192); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24053;
    nodes24053 = node.contents();
    oldNodes.replaceWith(nodes24053);
  }));
  
  var tmp42728 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  subs__.addSub(activeTabName.addEventListener('change', function() {
    tmp42728.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
    tmp42728.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
    tmp42728.set(activeTabName.get() == "Meditate" ? ui.customActiveTabStyle : ui.inActiveTabStyle);
  }));
  
  
  var tmp42731 = mobl.ref(null);
  
  
  var tmp42730 = mobl.ref(null);
  
  
  var tmp42729 = mobl.ref(null);
  
  var nodes24056 = $("<span>");
  node16029.append(nodes24056);
  subs__.addSub((mobl.block)(tmp42728, tmp42729, tmp42730, tmp42731, function(_, callback) {
    var root35195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes24057 = $("<span>");
    root35195.append(nodes24057);
    subs__.addSub((mobl.screenContext)(function(_, callback) {
      var root35196 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes24058 = $("<span>");
      root35196.append(nodes24058);
      subs__.addSub((controls.meditate.meditate)(function(_, callback) {
        var root35197 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35197); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24058;
        nodes24058 = node.contents();
        oldNodes.replaceWith(nodes24058);
      }));
      callback(root35196); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24057;
      nodes24057 = node.contents();
      oldNodes.replaceWith(nodes24057);
    }));
    callback(root35195); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24056;
    nodes24056 = node.contents();
    oldNodes.replaceWith(nodes24056);
  }));
  node16028.append(node16029);
  
  var tmp42778 = mobl.ref(null);
  
  
  var tmp42777 = mobl.ref(null);
  
  
  var tmp42776 = mobl.ref(null);
  
  var nodes24038 = $("<span>");
  node16028.append(nodes24038);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp42776, tmp42777, tmp42778, function(_, callback) {
    var root35177 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp42740 = mobl.ref(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp42740.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp42740.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp42740.set(activeTabName.get() == "Reminder" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp42739 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Reminder";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp42742 = mobl.ref(null);
    
    
    var tmp42741 = mobl.ref(null);
    
    var nodes24039 = $("<span>");
    root35177.append(nodes24039);
    subs__.addSub((mobl.span)(tmp42740, tmp42741, tmp42739, tmp42742, function(_, callback) {
      var root35178 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp42732 = mobl.ref(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp42732.set(activeTabName.get() == "Reminder" ? "resources/images/reminder_on_text.png" : "resources/images/reminder_off_text.png");
      }));
      
      
      var tmp42738 = mobl.ref(null);
      
      
      var tmp42737 = mobl.ref(null);
      
      
      var tmp42736 = mobl.ref(null);
      
      
      var tmp42735 = mobl.ref(null);
      
      
      var tmp42734 = mobl.ref(null);
      
      
      var tmp42733 = mobl.ref(null);
      
      var nodes24040 = $("<span>");
      root35178.append(nodes24040);
      subs__.addSub((ui.image)(tmp42732, tmp42733, tmp42734, tmp42735, tmp42736, tmp42737, tmp42738, function(_, callback) {
        var root35179 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35179); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24040;
        nodes24040 = node.contents();
        oldNodes.replaceWith(nodes24040);
      }));
      callback(root35178); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24039;
      nodes24039 = node.contents();
      oldNodes.replaceWith(nodes24039);
    }));
    
    var tmp42751 = mobl.ref(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp42751.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp42751.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp42751.set(activeTabName.get() == "Life" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp42750 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Life";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp42753 = mobl.ref(null);
    
    
    var tmp42752 = mobl.ref(null);
    
    var nodes24041 = $("<span>");
    root35177.append(nodes24041);
    subs__.addSub((mobl.span)(tmp42751, tmp42752, tmp42750, tmp42753, function(_, callback) {
      var root35180 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp42743 = mobl.ref(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp42743.set(activeTabName.get() == "Life" ? "resources/images/life_on.png" : "resources/images/life_off.png");
      }));
      
      
      var tmp42749 = mobl.ref(null);
      
      
      var tmp42748 = mobl.ref(null);
      
      
      var tmp42747 = mobl.ref(null);
      
      
      var tmp42746 = mobl.ref(null);
      
      
      var tmp42745 = mobl.ref(null);
      
      
      var tmp42744 = mobl.ref(null);
      
      var nodes24042 = $("<span>");
      root35180.append(nodes24042);
      subs__.addSub((ui.image)(tmp42743, tmp42744, tmp42745, tmp42746, tmp42747, tmp42748, tmp42749, function(_, callback) {
        var root35181 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35181); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24042;
        nodes24042 = node.contents();
        oldNodes.replaceWith(nodes24042);
      }));
      callback(root35180); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24041;
      nodes24041 = node.contents();
      oldNodes.replaceWith(nodes24041);
    }));
    
    var tmp42762 = mobl.ref(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp42762.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp42762.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp42762.set(activeTabName.get() == "Moodometer" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp42761 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Moodometer";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp42764 = mobl.ref(null);
    
    
    var tmp42763 = mobl.ref(null);
    
    var nodes24043 = $("<span>");
    root35177.append(nodes24043);
    subs__.addSub((mobl.span)(tmp42762, tmp42763, tmp42761, tmp42764, function(_, callback) {
      var root35182 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp42754 = mobl.ref(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp42754.set(activeTabName.get() == "Moodometer" ? "resources/images/moodometer_on_text.png" : "resources/images/moodometer_off_text.png");
      }));
      
      
      var tmp42760 = mobl.ref(null);
      
      
      var tmp42759 = mobl.ref(null);
      
      
      var tmp42758 = mobl.ref(null);
      
      
      var tmp42757 = mobl.ref(null);
      
      
      var tmp42756 = mobl.ref(null);
      
      
      var tmp42755 = mobl.ref(null);
      
      var nodes24044 = $("<span>");
      root35182.append(nodes24044);
      subs__.addSub((ui.image)(tmp42754, tmp42755, tmp42756, tmp42757, tmp42758, tmp42759, tmp42760, function(_, callback) {
        var root35183 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35183); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24044;
        nodes24044 = node.contents();
        oldNodes.replaceWith(nodes24044);
      }));
      callback(root35182); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24043;
      nodes24043 = node.contents();
      oldNodes.replaceWith(nodes24043);
    }));
    
    var tmp42773 = mobl.ref(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    subs__.addSub(activeTabName.addEventListener('change', function() {
      tmp42773.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
      tmp42773.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
      tmp42773.set(activeTabName.get() == "Meditate" ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
    }));
    
    
    var tmp42772 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = "Meditate";
                         activeTabName.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp42775 = mobl.ref(null);
    
    
    var tmp42774 = mobl.ref(null);
    
    var nodes24045 = $("<span>");
    root35177.append(nodes24045);
    subs__.addSub((mobl.span)(tmp42773, tmp42774, tmp42772, tmp42775, function(_, callback) {
      var root35184 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp42765 = mobl.ref(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
      subs__.addSub(activeTabName.addEventListener('change', function() {
        tmp42765.set(activeTabName.get() == "Meditate" ? "resources/images/meditate_on_text.png" : "resources/images/meditate_off_text.png");
      }));
      
      
      var tmp42771 = mobl.ref(null);
      
      
      var tmp42770 = mobl.ref(null);
      
      
      var tmp42769 = mobl.ref(null);
      
      
      var tmp42768 = mobl.ref(null);
      
      
      var tmp42767 = mobl.ref(null);
      
      
      var tmp42766 = mobl.ref(null);
      
      var nodes24046 = $("<span>");
      root35184.append(nodes24046);
      subs__.addSub((ui.image)(tmp42765, tmp42766, tmp42767, tmp42768, tmp42769, tmp42770, tmp42771, function(_, callback) {
        var root35185 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35185); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24046;
        nodes24046 = node.contents();
        oldNodes.replaceWith(nodes24046);
      }));
      callback(root35184); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24045;
      nodes24045 = node.contents();
      oldNodes.replaceWith(nodes24045);
    }));
    callback(root35177); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24038;
    nodes24038 = node.contents();
    oldNodes.replaceWith(nodes24038);
  }));
  root35175.append(node16028);
  callback(root35175); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};
