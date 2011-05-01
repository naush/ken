mobl.provides('controls.moodometer');
mobl.provides('models');
mobl.provides('mobl');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
  var root8998 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7197 = $("<span>");
  root8998.append(nodes7197);
  subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
    var root8999 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8999); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7197;
    nodes7197 = node.contents();
    oldNodes.replaceWith(nodes7197);
  }));
  callback(root8998); return subs__;
  
  return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
  var root9000 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18687 = mobl.ref(null);
  
  
  var tmp18686 = mobl.ref(null);
  
  
  var tmp18685 = mobl.ref(null);
  
  var nodes7198 = $("<span>");
  root9000.append(nodes7198);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp18685, tmp18686, tmp18687, function(_, callback) {
    var root9001 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp18658 = mobl.ref(false);
    
    
    var tmp18657 = mobl.ref(null);
    
    
    var tmp18656 = mobl.ref(null);
    
    var nodes7199 = $("<span>");
    root9001.append(nodes7199);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18656, tmp18657, tmp18658, function(_, callback) {
      var root9002 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3250 = $("<div>");
      node3250.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp18646 = mobl.ref("Not at all");
      
      
      var tmp18647 = mobl.ref(null);
      
      var nodes7201 = $("<span>");
      node3250.append(nodes7201);
      subs__.addSub((mobl.label)(tmp18646, mobl.ref(ui.left), tmp18647, function(_, callback) {
        var root9004 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9004); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7201;
        nodes7201 = node.contents();
        oldNodes.replaceWith(nodes7201);
      }));
      
      var tmp18648 = mobl.ref("Happy");
      
      
      var tmp18649 = mobl.ref(null);
      
      var nodes7202 = $("<span>");
      node3250.append(nodes7202);
      subs__.addSub((mobl.label)(tmp18648, mobl.ref(ui.center), tmp18649, function(_, callback) {
        var root9005 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9005); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7202;
        nodes7202 = node.contents();
        oldNodes.replaceWith(nodes7202);
      }));
      
      var tmp18650 = mobl.ref("Extremely");
      
      
      var tmp18651 = mobl.ref(null);
      
      var nodes7203 = $("<span>");
      node3250.append(nodes7203);
      subs__.addSub((mobl.label)(tmp18650, mobl.ref(ui.right), tmp18651, function(_, callback) {
        var root9006 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9006); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7203;
        nodes7203 = node.contents();
        oldNodes.replaceWith(nodes7203);
      }));
      root9002.append(node3250);
      
      var tmp18654 = mobl.ref(50);
      
      
      var tmp18653 = mobl.ref(100);
      
      
      var tmp18652 = mobl.ref(0);
      
      
      var tmp18655 = mobl.ref(null);
      
      var nodes7200 = $("<span>");
      root9002.append(nodes7200);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), tmp18655, tmp18652, tmp18653, tmp18654, function(_, callback) {
        var root9003 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9003); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7200;
        nodes7200 = node.contents();
        oldNodes.replaceWith(nodes7200);
      }));
      callback(root9002); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7199;
      nodes7199 = node.contents();
      oldNodes.replaceWith(nodes7199);
    }));
    
    var tmp18671 = mobl.ref(false);
    
    
    var tmp18670 = mobl.ref(null);
    
    
    var tmp18669 = mobl.ref(null);
    
    var nodes7204 = $("<span>");
    root9001.append(nodes7204);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18669, tmp18670, tmp18671, function(_, callback) {
      var root9007 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3251 = $("<div>");
      node3251.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp18659 = mobl.ref("Not at all");
      
      
      var tmp18660 = mobl.ref(null);
      
      var nodes7206 = $("<span>");
      node3251.append(nodes7206);
      subs__.addSub((mobl.label)(tmp18659, mobl.ref(ui.left), tmp18660, function(_, callback) {
        var root9009 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9009); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7206;
        nodes7206 = node.contents();
        oldNodes.replaceWith(nodes7206);
      }));
      
      var tmp18661 = mobl.ref("Relaxed");
      
      
      var tmp18662 = mobl.ref(null);
      
      var nodes7207 = $("<span>");
      node3251.append(nodes7207);
      subs__.addSub((mobl.label)(tmp18661, mobl.ref(ui.center), tmp18662, function(_, callback) {
        var root9010 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9010); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7207;
        nodes7207 = node.contents();
        oldNodes.replaceWith(nodes7207);
      }));
      
      var tmp18663 = mobl.ref("Extremely");
      
      
      var tmp18664 = mobl.ref(null);
      
      var nodes7208 = $("<span>");
      node3251.append(nodes7208);
      subs__.addSub((mobl.label)(tmp18663, mobl.ref(ui.right), tmp18664, function(_, callback) {
        var root9011 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9011); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7208;
        nodes7208 = node.contents();
        oldNodes.replaceWith(nodes7208);
      }));
      root9007.append(node3251);
      
      var tmp18667 = mobl.ref(50);
      
      
      var tmp18666 = mobl.ref(100);
      
      
      var tmp18665 = mobl.ref(0);
      
      
      var tmp18668 = mobl.ref(null);
      
      var nodes7205 = $("<span>");
      root9007.append(nodes7205);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), tmp18668, tmp18665, tmp18666, tmp18667, function(_, callback) {
        var root9008 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9008); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7205;
        nodes7205 = node.contents();
        oldNodes.replaceWith(nodes7205);
      }));
      callback(root9007); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7204;
      nodes7204 = node.contents();
      oldNodes.replaceWith(nodes7204);
    }));
    
    var tmp18684 = mobl.ref(false);
    
    
    var tmp18683 = mobl.ref(null);
    
    
    var tmp18682 = mobl.ref(null);
    
    var nodes7209 = $("<span>");
    root9001.append(nodes7209);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18682, tmp18683, tmp18684, function(_, callback) {
      var root9012 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3252 = $("<div>");
      node3252.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp18672 = mobl.ref("Not at all");
      
      
      var tmp18673 = mobl.ref(null);
      
      var nodes7211 = $("<span>");
      node3252.append(nodes7211);
      subs__.addSub((mobl.label)(tmp18672, mobl.ref(ui.left), tmp18673, function(_, callback) {
        var root9014 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9014); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7211;
        nodes7211 = node.contents();
        oldNodes.replaceWith(nodes7211);
      }));
      
      var tmp18674 = mobl.ref("Awake");
      
      
      var tmp18675 = mobl.ref(null);
      
      var nodes7212 = $("<span>");
      node3252.append(nodes7212);
      subs__.addSub((mobl.label)(tmp18674, mobl.ref(ui.center), tmp18675, function(_, callback) {
        var root9015 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9015); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7212;
        nodes7212 = node.contents();
        oldNodes.replaceWith(nodes7212);
      }));
      
      var tmp18676 = mobl.ref("Extremely");
      
      
      var tmp18677 = mobl.ref(null);
      
      var nodes7213 = $("<span>");
      node3252.append(nodes7213);
      subs__.addSub((mobl.label)(tmp18676, mobl.ref(ui.right), tmp18677, function(_, callback) {
        var root9016 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9016); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7213;
        nodes7213 = node.contents();
        oldNodes.replaceWith(nodes7213);
      }));
      root9012.append(node3252);
      
      var tmp18680 = mobl.ref(50);
      
      
      var tmp18679 = mobl.ref(100);
      
      
      var tmp18678 = mobl.ref(0);
      
      
      var tmp18681 = mobl.ref(null);
      
      var nodes7210 = $("<span>");
      root9012.append(nodes7210);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), tmp18681, tmp18678, tmp18679, tmp18680, function(_, callback) {
        var root9013 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9013); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7210;
        nodes7210 = node.contents();
        oldNodes.replaceWith(nodes7210);
      }));
      callback(root9012); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7209;
      nodes7209 = node.contents();
      oldNodes.replaceWith(nodes7209);
    }));
    callback(root9001); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7198;
    nodes7198 = node.contents();
    oldNodes.replaceWith(nodes7198);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  
  var tmp18696 = mobl.ref(null);
  
  
  var tmp18695 = mobl.ref(null);
  
  
  var tmp18694 = mobl.ref(null);
  
  var nodes7214 = $("<span>");
  root9000.append(nodes7214);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp18694, tmp18695, tmp18696, function(_, callback) {
    var root9017 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3253 = $("<span>");
    
    var val1398 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1398 !== null) {
      subs__.addSub(mobl.domBind(node3253, 'mousedown', val1398));
    }
    
    var val1399 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val1399 !== null) {
      subs__.addSub(mobl.domBind(node3253, 'mouseup', val1399));
    }
    
    
    var tmp18688 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mood.get().happy.length == 0 || mood.get().relaxed.length == 0 || mood.get().awake.length == 0;
                         if(result__) {
                           if(callback && callback.apply) callback(); return;
                         } else {
                           {
                             var result__ = mobl.add(mood.get());
                             mobl.call('controls.moodometer.moodoScreen', [mobl.ref(new models.moods.Mood({'date': mobl.now()})), mobl.ref(false), mobl.ref("slide")], function(result__) {
                             var tmp18698 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           }
                         }
                       });
    
    
    var tmp18693 = mobl.ref(null);
    
    
    var tmp18692 = mobl.ref(null);
    
    
    var tmp18691 = mobl.ref(null);
    
    
    var tmp18690 = mobl.ref(null);
    
    
    var tmp18689 = mobl.ref(null);
    
    var nodes7215 = $("<span>");
    node3253.append(nodes7215);
    subs__.addSub((ui.image)(saveButtonImage, tmp18689, tmp18690, tmp18688, tmp18691, tmp18692, tmp18693, function(_, callback) {
      var root9018 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9018); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7215;
      nodes7215 = node.contents();
      oldNodes.replaceWith(nodes7215);
    }));
    root9017.append(node3253);
    callback(root9017); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7214;
    nodes7214 = node.contents();
    oldNodes.replaceWith(nodes7214);
  }));
  callback(root9000); return subs__;
  
  
  return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
  var root9019 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18697 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));
  
  var nodes7216 = $("<span>");
  root9019.append(nodes7216);
  subs__.addSub((controls.moodometer.moodoForm)(tmp18697, function(_, callback) {
    var root9020 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9020); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7216;
    nodes7216 = node.contents();
    oldNodes.replaceWith(nodes7216);
  }));
  callback(root9019); return subs__;
  
  return subs__;
};
