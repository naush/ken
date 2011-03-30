mobl.provides('controls.moodometer');
mobl.provides('models');
mobl.provides('mobl');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
  var root852 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes721 = $("<span>");
  root852.append(nodes721);
  subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
    var root853 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root853); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes721;
    nodes721 = node.contents();
    oldNodes.replaceWith(nodes721);
  }));
  callback(root852); return subs__;
  
  return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
  var root854 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes722 = $("<span>");
  root854.append(nodes722);
  subs__.addSub((ui.group)(function(_, callback) {
    var root855 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp2181 = mobl.ref(false);
    
    
    var tmp2180 = mobl.ref(null);
    
    
    var tmp2179 = mobl.ref(null);
    
    var nodes723 = $("<span>");
    root855.append(nodes723);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2179, tmp2180, tmp2181, function(_, callback) {
      var root856 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node103 = $("<div>");
      node103.attr('style', "margin:0 0 10px 0; text-align: center");
      
      
      var tmp2170 = mobl.ref("Not at all");
      
      
      var tmp2171 = mobl.ref(null);
      
      var nodes725 = $("<span>");
      node103.append(nodes725);
      subs__.addSub((mobl.label)(tmp2170, mobl.ref(ui.left), tmp2171, function(_, callback) {
        var root858 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root858); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes725;
        nodes725 = node.contents();
        oldNodes.replaceWith(nodes725);
      }));
      
      var tmp2172 = mobl.ref("Happy");
      
      
      var tmp2173 = mobl.ref(null);
      
      var nodes726 = $("<span>");
      node103.append(nodes726);
      subs__.addSub((mobl.label)(tmp2172, mobl.ref(ui.center), tmp2173, function(_, callback) {
        var root859 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root859); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes726;
        nodes726 = node.contents();
        oldNodes.replaceWith(nodes726);
      }));
      
      var tmp2174 = mobl.ref("Extremely");
      
      
      var tmp2175 = mobl.ref(null);
      
      var nodes727 = $("<span>");
      node103.append(nodes727);
      subs__.addSub((mobl.label)(tmp2174, mobl.ref(ui.right), tmp2175, function(_, callback) {
        var root860 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root860); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes727;
        nodes727 = node.contents();
        oldNodes.replaceWith(nodes727);
      }));
      root856.append(node103);
      
      var tmp2178 = mobl.ref(50);
      
      
      var tmp2177 = mobl.ref(100);
      
      
      var tmp2176 = mobl.ref(0);
      
      var nodes724 = $("<span>");
      root856.append(nodes724);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), mobl.ref(ui.ranger), tmp2176, tmp2177, tmp2178, function(_, callback) {
        var root857 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root857); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes724;
        nodes724 = node.contents();
        oldNodes.replaceWith(nodes724);
      }));
      callback(root856); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes723;
      nodes723 = node.contents();
      oldNodes.replaceWith(nodes723);
    }));
    
    var tmp2193 = mobl.ref(false);
    
    
    var tmp2192 = mobl.ref(null);
    
    
    var tmp2191 = mobl.ref(null);
    
    var nodes728 = $("<span>");
    root855.append(nodes728);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2191, tmp2192, tmp2193, function(_, callback) {
      var root861 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node104 = $("<div>");
      node104.attr('style', "margin:0 0 10px 0; text-align: center");
      
      
      var tmp2182 = mobl.ref("Not at all");
      
      
      var tmp2183 = mobl.ref(null);
      
      var nodes730 = $("<span>");
      node104.append(nodes730);
      subs__.addSub((mobl.label)(tmp2182, mobl.ref(ui.left), tmp2183, function(_, callback) {
        var root863 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root863); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes730;
        nodes730 = node.contents();
        oldNodes.replaceWith(nodes730);
      }));
      
      var tmp2184 = mobl.ref("Relaxed");
      
      
      var tmp2185 = mobl.ref(null);
      
      var nodes731 = $("<span>");
      node104.append(nodes731);
      subs__.addSub((mobl.label)(tmp2184, mobl.ref(ui.center), tmp2185, function(_, callback) {
        var root864 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root864); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes731;
        nodes731 = node.contents();
        oldNodes.replaceWith(nodes731);
      }));
      
      var tmp2186 = mobl.ref("Extremely");
      
      
      var tmp2187 = mobl.ref(null);
      
      var nodes732 = $("<span>");
      node104.append(nodes732);
      subs__.addSub((mobl.label)(tmp2186, mobl.ref(ui.right), tmp2187, function(_, callback) {
        var root865 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root865); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes732;
        nodes732 = node.contents();
        oldNodes.replaceWith(nodes732);
      }));
      root861.append(node104);
      
      var tmp2190 = mobl.ref(50);
      
      
      var tmp2189 = mobl.ref(100);
      
      
      var tmp2188 = mobl.ref(0);
      
      var nodes729 = $("<span>");
      root861.append(nodes729);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), mobl.ref(ui.ranger), tmp2188, tmp2189, tmp2190, function(_, callback) {
        var root862 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root862); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes729;
        nodes729 = node.contents();
        oldNodes.replaceWith(nodes729);
      }));
      callback(root861); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes728;
      nodes728 = node.contents();
      oldNodes.replaceWith(nodes728);
    }));
    
    var tmp2205 = mobl.ref(false);
    
    
    var tmp2204 = mobl.ref(null);
    
    
    var tmp2203 = mobl.ref(null);
    
    var nodes733 = $("<span>");
    root855.append(nodes733);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2203, tmp2204, tmp2205, function(_, callback) {
      var root866 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node105 = $("<div>");
      node105.attr('style', "margin:0 0 10px 0; text-align: center");
      
      
      var tmp2194 = mobl.ref("Not at all");
      
      
      var tmp2195 = mobl.ref(null);
      
      var nodes735 = $("<span>");
      node105.append(nodes735);
      subs__.addSub((mobl.label)(tmp2194, mobl.ref(ui.left), tmp2195, function(_, callback) {
        var root868 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root868); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes735;
        nodes735 = node.contents();
        oldNodes.replaceWith(nodes735);
      }));
      
      var tmp2196 = mobl.ref("Awake");
      
      
      var tmp2197 = mobl.ref(null);
      
      var nodes736 = $("<span>");
      node105.append(nodes736);
      subs__.addSub((mobl.label)(tmp2196, mobl.ref(ui.center), tmp2197, function(_, callback) {
        var root869 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root869); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes736;
        nodes736 = node.contents();
        oldNodes.replaceWith(nodes736);
      }));
      
      var tmp2198 = mobl.ref("Extremely");
      
      
      var tmp2199 = mobl.ref(null);
      
      var nodes737 = $("<span>");
      node105.append(nodes737);
      subs__.addSub((mobl.label)(tmp2198, mobl.ref(ui.right), tmp2199, function(_, callback) {
        var root870 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root870); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes737;
        nodes737 = node.contents();
        oldNodes.replaceWith(nodes737);
      }));
      root866.append(node105);
      
      var tmp2202 = mobl.ref(50);
      
      
      var tmp2201 = mobl.ref(100);
      
      
      var tmp2200 = mobl.ref(0);
      
      var nodes734 = $("<span>");
      root866.append(nodes734);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), mobl.ref(ui.ranger), tmp2200, tmp2201, tmp2202, function(_, callback) {
        var root867 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root867); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes734;
        nodes734 = node.contents();
        oldNodes.replaceWith(nodes734);
      }));
      callback(root866); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes733;
      nodes733 = node.contents();
      oldNodes.replaceWith(nodes733);
    }));
    
    var tmp2207 = mobl.ref(function(event, callback) {
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
                             var tmp2209 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           }
                         }
                       });
    
    
    var tmp2206 = mobl.ref("Save");
    
    var nodes738 = $("<span>");
    root855.append(nodes738);
    subs__.addSub((ui.button)(tmp2206, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2207, function(_, callback) {
      var root871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root871); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes738;
      nodes738 = node.contents();
      oldNodes.replaceWith(nodes738);
    }));
    callback(root855); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes722;
    nodes722 = node.contents();
    oldNodes.replaceWith(nodes722);
  }));
  callback(root854); return subs__;
  
  return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
  var root872 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2208 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));
  
  var nodes739 = $("<span>");
  root872.append(nodes739);
  subs__.addSub((controls.moodometer.moodoForm)(tmp2208, function(_, callback) {
    var root873 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root873); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes739;
    nodes739 = node.contents();
    oldNodes.replaceWith(nodes739);
  }));
  callback(root872); return subs__;
  
  return subs__;
};
