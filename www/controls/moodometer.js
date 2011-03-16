mobl.provides('controls.moodometer');
mobl.provides('models');
mobl.provides('mobl');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
  var root126 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes83 = $("<span>");
  root126.append(nodes83);
  subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
    var root127 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root127); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes83;
    nodes83 = node.contents();
    oldNodes.replaceWith(nodes83);
  }));
  callback(root126); return subs__;
  
  return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
  var root128 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes84 = $("<span>");
  root128.append(nodes84);
  subs__.addSub((ui.group)(function(_, callback) {
    var root129 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp158 = mobl.ref(false);
    
    
    var tmp157 = mobl.ref(null);
    
    
    var tmp156 = mobl.ref(null);
    
    var nodes85 = $("<span>");
    root129.append(nodes85);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp156, tmp157, tmp158, function(_, callback) {
      var root130 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node52 = $("<div>");
      node52.attr('style', "margin:0 0 10px 0; text-align: center");
      
      
      var tmp146 = mobl.ref("Not at all");
      
      
      var tmp147 = mobl.ref(null);
      
      var nodes87 = $("<span>");
      node52.append(nodes87);
      subs__.addSub((mobl.label)(tmp146, mobl.ref(ui.left), tmp147, function(_, callback) {
        var root132 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root132); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes87;
        nodes87 = node.contents();
        oldNodes.replaceWith(nodes87);
      }));
      
      var tmp148 = mobl.ref("Happy");
      
      
      var tmp149 = mobl.ref(null);
      
      var nodes88 = $("<span>");
      node52.append(nodes88);
      subs__.addSub((mobl.label)(tmp148, mobl.ref(ui.center), tmp149, function(_, callback) {
        var root133 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root133); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes88;
        nodes88 = node.contents();
        oldNodes.replaceWith(nodes88);
      }));
      
      var tmp151 = mobl.ref("Extremely");
      
      
      var tmp152 = mobl.ref(null);
      
      var nodes89 = $("<span>");
      node52.append(nodes89);
      subs__.addSub((mobl.label)(tmp151, mobl.ref(ui.right), tmp152, function(_, callback) {
        var root134 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root134); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes89;
        nodes89 = node.contents();
        oldNodes.replaceWith(nodes89);
      }));
      root130.append(node52);
      
      var tmp155 = mobl.ref(50);
      
      
      var tmp154 = mobl.ref(100);
      
      
      var tmp153 = mobl.ref(0);
      
      var nodes86 = $("<span>");
      root130.append(nodes86);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp153, tmp154, tmp155, function(_, callback) {
        var root131 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root131); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes86;
        nodes86 = node.contents();
        oldNodes.replaceWith(nodes86);
      }));
      callback(root130); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes85;
      nodes85 = node.contents();
      oldNodes.replaceWith(nodes85);
    }));
    
    var tmp172 = mobl.ref(false);
    
    
    var tmp171 = mobl.ref(null);
    
    
    var tmp169 = mobl.ref(null);
    
    var nodes90 = $("<span>");
    root129.append(nodes90);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp169, tmp171, tmp172, function(_, callback) {
      var root135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node53 = $("<div>");
      node53.attr('style', "margin:0 0 10px 0; text-align: center");
      
      
      var tmp159 = mobl.ref("Not at all");
      
      
      var tmp161 = mobl.ref(null);
      
      var nodes92 = $("<span>");
      node53.append(nodes92);
      subs__.addSub((mobl.label)(tmp159, mobl.ref(ui.left), tmp161, function(_, callback) {
        var root137 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root137); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes92;
        nodes92 = node.contents();
        oldNodes.replaceWith(nodes92);
      }));
      
      var tmp162 = mobl.ref("Relaxed");
      
      
      var tmp163 = mobl.ref(null);
      
      var nodes93 = $("<span>");
      node53.append(nodes93);
      subs__.addSub((mobl.label)(tmp162, mobl.ref(ui.center), tmp163, function(_, callback) {
        var root138 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root138); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes93;
        nodes93 = node.contents();
        oldNodes.replaceWith(nodes93);
      }));
      
      var tmp164 = mobl.ref("Extremely");
      
      
      var tmp165 = mobl.ref(null);
      
      var nodes94 = $("<span>");
      node53.append(nodes94);
      subs__.addSub((mobl.label)(tmp164, mobl.ref(ui.right), tmp165, function(_, callback) {
        var root139 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root139); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes94;
        nodes94 = node.contents();
        oldNodes.replaceWith(nodes94);
      }));
      root135.append(node53);
      
      var tmp168 = mobl.ref(50);
      
      
      var tmp167 = mobl.ref(100);
      
      
      var tmp166 = mobl.ref(0);
      
      var nodes91 = $("<span>");
      root135.append(nodes91);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp166, tmp167, tmp168, function(_, callback) {
        var root136 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root136); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes91;
        nodes91 = node.contents();
        oldNodes.replaceWith(nodes91);
      }));
      callback(root135); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes90;
      nodes90 = node.contents();
      oldNodes.replaceWith(nodes90);
    }));
    
    var tmp185 = mobl.ref(false);
    
    
    var tmp184 = mobl.ref(null);
    
    
    var tmp183 = mobl.ref(null);
    
    var nodes95 = $("<span>");
    root129.append(nodes95);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp183, tmp184, tmp185, function(_, callback) {
      var root140 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node54 = $("<div>");
      node54.attr('style', "margin:0 0 10px 0; text-align: center");
      
      
      var tmp173 = mobl.ref("Not at all");
      
      
      var tmp174 = mobl.ref(null);
      
      var nodes97 = $("<span>");
      node54.append(nodes97);
      subs__.addSub((mobl.label)(tmp173, mobl.ref(ui.left), tmp174, function(_, callback) {
        var root142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root142); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes97;
        nodes97 = node.contents();
        oldNodes.replaceWith(nodes97);
      }));
      
      var tmp175 = mobl.ref("Awake");
      
      
      var tmp176 = mobl.ref(null);
      
      var nodes98 = $("<span>");
      node54.append(nodes98);
      subs__.addSub((mobl.label)(tmp175, mobl.ref(ui.center), tmp176, function(_, callback) {
        var root143 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root143); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes98;
        nodes98 = node.contents();
        oldNodes.replaceWith(nodes98);
      }));
      
      var tmp177 = mobl.ref("Extremely");
      
      
      var tmp178 = mobl.ref(null);
      
      var nodes99 = $("<span>");
      node54.append(nodes99);
      subs__.addSub((mobl.label)(tmp177, mobl.ref(ui.right), tmp178, function(_, callback) {
        var root144 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root144); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes99;
        nodes99 = node.contents();
        oldNodes.replaceWith(nodes99);
      }));
      root140.append(node54);
      
      var tmp182 = mobl.ref(50);
      
      
      var tmp181 = mobl.ref(100);
      
      
      var tmp179 = mobl.ref(0);
      
      var nodes96 = $("<span>");
      root140.append(nodes96);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp179, tmp181, tmp182, function(_, callback) {
        var root141 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root141); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes96;
        nodes96 = node.contents();
        oldNodes.replaceWith(nodes96);
      }));
      callback(root140); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes95;
      nodes95 = node.contents();
      oldNodes.replaceWith(nodes95);
    }));
    
    var tmp187 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mood.get().happy.length == 0 || mood.get().relaxed.length == 0 || mood.get().awake.length == 0;
                         if(result__) {
                           var result__ = mobl.notify.notify("Did you forget to rate your mood?", "Notification");
                           if(callback && callback.apply) callback(); return;
                         } else {
                           {
                             var result__ = mobl.notify.notify("Your mood is saved successfully!", "Notification");
                             var result__ = mobl.add(mood.get());
                             mobl.call('controls.moodometer.moodoScreen', [mobl.ref(new models.moods.Mood({'date': mobl.now()})), mobl.ref(false), mobl.ref("slide")], function(result__) {
                             var tmp189 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           }
                         }
                       });
    
    
    var tmp186 = mobl.ref("Save");
    
    var nodes100 = $("<span>");
    root129.append(nodes100);
    subs__.addSub((ui.button)(tmp186, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp187, function(_, callback) {
      var root145 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root145); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes100;
      nodes100 = node.contents();
      oldNodes.replaceWith(nodes100);
    }));
    callback(root129); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes84;
    nodes84 = node.contents();
    oldNodes.replaceWith(nodes84);
  }));
  callback(root128); return subs__;
  
  return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
  var root146 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp188 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));
  
  var nodes101 = $("<span>");
  root146.append(nodes101);
  subs__.addSub((controls.moodometer.moodoForm)(tmp188, function(_, callback) {
    var root147 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root147); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes101;
    nodes101 = node.contents();
    oldNodes.replaceWith(nodes101);
  }));
  callback(root146); return subs__;
  
  return subs__;
};
