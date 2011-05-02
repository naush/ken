mobl.provides('controls.moodometer');
mobl.provides('models');
mobl.provides('mobl');

controls.moodometer.moodoScreen = function(mood, callback, screenCallback) {
  var root13101 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes11914 = $("<span>");
  root13101.append(nodes11914);
  subs__.addSub((controls.moodometer.moodoForm)(mood, function(_, callback) {
    var root13102 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13102); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes11914;
    nodes11914 = node.contents();
    oldNodes.replaceWith(nodes11914);
  }));
  callback(root13101); return subs__;
  
  return subs__;
};

controls.moodometer.moodoForm = function(mood, elements, callback) {
  var root13103 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp41224 = mobl.ref(null);
  
  
  var tmp41223 = mobl.ref(null);
  
  
  var tmp41222 = mobl.ref(null);
  
  var nodes11915 = $("<span>");
  root13103.append(nodes11915);
  subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp41222, tmp41223, tmp41224, function(_, callback) {
    var root13104 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node5520 = $("<span>");
    node5520.attr('id', "sliders");
    
    
    var tmp41195 = mobl.ref(false);
    
    
    var tmp41194 = mobl.ref(null);
    
    
    var tmp41193 = mobl.ref(null);
    
    var nodes11916 = $("<span>");
    node5520.append(nodes11916);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp41193, tmp41194, tmp41195, function(_, callback) {
      var root13105 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node5521 = $("<div>");
      node5521.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp41183 = mobl.ref("Not at all");
      
      
      var tmp41184 = mobl.ref(null);
      
      var nodes11918 = $("<span>");
      node5521.append(nodes11918);
      subs__.addSub((mobl.label)(tmp41183, mobl.ref(ui.left), tmp41184, function(_, callback) {
        var root13107 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13107); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11918;
        nodes11918 = node.contents();
        oldNodes.replaceWith(nodes11918);
      }));
      
      var tmp41185 = mobl.ref("Happy");
      
      
      var tmp41186 = mobl.ref(null);
      
      var nodes11919 = $("<span>");
      node5521.append(nodes11919);
      subs__.addSub((mobl.label)(tmp41185, mobl.ref(ui.center), tmp41186, function(_, callback) {
        var root13108 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13108); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11919;
        nodes11919 = node.contents();
        oldNodes.replaceWith(nodes11919);
      }));
      
      var tmp41187 = mobl.ref("Extremely");
      
      
      var tmp41188 = mobl.ref(null);
      
      var nodes11920 = $("<span>");
      node5521.append(nodes11920);
      subs__.addSub((mobl.label)(tmp41187, mobl.ref(ui.right), tmp41188, function(_, callback) {
        var root13109 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13109); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11920;
        nodes11920 = node.contents();
        oldNodes.replaceWith(nodes11920);
      }));
      root13105.append(node5521);
      
      var tmp41191 = mobl.ref(50);
      
      
      var tmp41190 = mobl.ref(100);
      
      
      var tmp41189 = mobl.ref(0);
      
      
      var tmp41192 = mobl.ref(null);
      
      var nodes11917 = $("<span>");
      root13105.append(nodes11917);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'happy'), tmp41192, tmp41189, tmp41190, tmp41191, function(_, callback) {
        var root13106 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13106); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11917;
        nodes11917 = node.contents();
        oldNodes.replaceWith(nodes11917);
      }));
      callback(root13105); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes11916;
      nodes11916 = node.contents();
      oldNodes.replaceWith(nodes11916);
    }));
    
    var tmp41208 = mobl.ref(false);
    
    
    var tmp41207 = mobl.ref(null);
    
    
    var tmp41206 = mobl.ref(null);
    
    var nodes11921 = $("<span>");
    node5520.append(nodes11921);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp41206, tmp41207, tmp41208, function(_, callback) {
      var root13110 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node5522 = $("<div>");
      node5522.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp41196 = mobl.ref("Not at all");
      
      
      var tmp41197 = mobl.ref(null);
      
      var nodes11923 = $("<span>");
      node5522.append(nodes11923);
      subs__.addSub((mobl.label)(tmp41196, mobl.ref(ui.left), tmp41197, function(_, callback) {
        var root13112 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13112); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11923;
        nodes11923 = node.contents();
        oldNodes.replaceWith(nodes11923);
      }));
      
      var tmp41198 = mobl.ref("Relaxed");
      
      
      var tmp41199 = mobl.ref(null);
      
      var nodes11924 = $("<span>");
      node5522.append(nodes11924);
      subs__.addSub((mobl.label)(tmp41198, mobl.ref(ui.center), tmp41199, function(_, callback) {
        var root13113 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13113); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11924;
        nodes11924 = node.contents();
        oldNodes.replaceWith(nodes11924);
      }));
      
      var tmp41200 = mobl.ref("Extremely");
      
      
      var tmp41201 = mobl.ref(null);
      
      var nodes11925 = $("<span>");
      node5522.append(nodes11925);
      subs__.addSub((mobl.label)(tmp41200, mobl.ref(ui.right), tmp41201, function(_, callback) {
        var root13114 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13114); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11925;
        nodes11925 = node.contents();
        oldNodes.replaceWith(nodes11925);
      }));
      root13110.append(node5522);
      
      var tmp41204 = mobl.ref(50);
      
      
      var tmp41203 = mobl.ref(100);
      
      
      var tmp41202 = mobl.ref(0);
      
      
      var tmp41205 = mobl.ref(null);
      
      var nodes11922 = $("<span>");
      root13110.append(nodes11922);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'relaxed'), tmp41205, tmp41202, tmp41203, tmp41204, function(_, callback) {
        var root13111 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13111); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11922;
        nodes11922 = node.contents();
        oldNodes.replaceWith(nodes11922);
      }));
      callback(root13110); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes11921;
      nodes11921 = node.contents();
      oldNodes.replaceWith(nodes11921);
    }));
    
    var tmp41221 = mobl.ref(false);
    
    
    var tmp41220 = mobl.ref(null);
    
    
    var tmp41219 = mobl.ref(null);
    
    var nodes11926 = $("<span>");
    node5520.append(nodes11926);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp41219, tmp41220, tmp41221, function(_, callback) {
      var root13115 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node5523 = $("<div>");
      node5523.attr('style', "margin:0 0 10px 0; text-align: center; width: 250px");
      
      
      var tmp41209 = mobl.ref("Not at all");
      
      
      var tmp41210 = mobl.ref(null);
      
      var nodes11928 = $("<span>");
      node5523.append(nodes11928);
      subs__.addSub((mobl.label)(tmp41209, mobl.ref(ui.left), tmp41210, function(_, callback) {
        var root13117 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13117); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11928;
        nodes11928 = node.contents();
        oldNodes.replaceWith(nodes11928);
      }));
      
      var tmp41211 = mobl.ref("Awake");
      
      
      var tmp41212 = mobl.ref(null);
      
      var nodes11929 = $("<span>");
      node5523.append(nodes11929);
      subs__.addSub((mobl.label)(tmp41211, mobl.ref(ui.center), tmp41212, function(_, callback) {
        var root13118 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13118); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11929;
        nodes11929 = node.contents();
        oldNodes.replaceWith(nodes11929);
      }));
      
      var tmp41213 = mobl.ref("Extremely");
      
      
      var tmp41214 = mobl.ref(null);
      
      var nodes11930 = $("<span>");
      node5523.append(nodes11930);
      subs__.addSub((mobl.label)(tmp41213, mobl.ref(ui.right), tmp41214, function(_, callback) {
        var root13119 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13119); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11930;
        nodes11930 = node.contents();
        oldNodes.replaceWith(nodes11930);
      }));
      root13115.append(node5523);
      
      var tmp41217 = mobl.ref(50);
      
      
      var tmp41216 = mobl.ref(100);
      
      
      var tmp41215 = mobl.ref(0);
      
      
      var tmp41218 = mobl.ref(null);
      
      var nodes11927 = $("<span>");
      root13115.append(nodes11927);
      subs__.addSub((ui.rangeField)(mobl.ref(mood, 'awake'), tmp41218, tmp41215, tmp41216, tmp41217, function(_, callback) {
        var root13116 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13116); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes11927;
        nodes11927 = node.contents();
        oldNodes.replaceWith(nodes11927);
      }));
      callback(root13115); return subs__;
      
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes11926;
      nodes11926 = node.contents();
      oldNodes.replaceWith(nodes11926);
    }));
    root13104.append(node5520);
    callback(root13104); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes11915;
    nodes11915 = node.contents();
    oldNodes.replaceWith(nodes11915);
  }));
  
  var saveButtonImage = mobl.ref("resources/images/save.png");
  
  var tmp41233 = mobl.ref(null);
  
  
  var tmp41232 = mobl.ref(null);
  
  
  var tmp41231 = mobl.ref(null);
  
  var nodes11931 = $("<span>");
  root13103.append(nodes11931);
  subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp41231, tmp41232, tmp41233, function(_, callback) {
    var root13120 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node5524 = $("<span>");
    
    var val4107 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save_pressed.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val4107 !== null) {
      subs__.addSub(mobl.domBind(node5524, 'mousedown', val4107));
    }
    
    var val4108 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = "resources/images/save.png";
                  saveButtonImage.set(result__);
                  if(callback && callback.apply) callback(); return;
                };
    if(val4108 !== null) {
      subs__.addSub(mobl.domBind(node5524, 'mouseup', val4108));
    }
    
    
    var tmp41225 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.$("#sliders").hide();
                         var result__ = mobl.$("#flash__Moodometer").show();
                         var result__ = mood.get().happy == "" ? "50" : mood.get().happy;
                         mood.get().happy = result__;
                         var result__ = mood.get().relaxed == "" ? "50" : mood.get().relaxed;
                         mood.get().relaxed = result__;
                         var result__ = mood.get().awake == "" ? "50" : mood.get().awake;
                         mood.get().awake = result__;
                         var result__ = mobl.add(mood.get());
                         var result__ = new models.moods.Mood({'date': mobl.now()});
                         mood.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp41230 = mobl.ref(null);
    
    
    var tmp41229 = mobl.ref(null);
    
    
    var tmp41228 = mobl.ref(null);
    
    
    var tmp41227 = mobl.ref(null);
    
    
    var tmp41226 = mobl.ref(null);
    
    var nodes11932 = $("<span>");
    node5524.append(nodes11932);
    subs__.addSub((ui.image)(saveButtonImage, tmp41226, tmp41227, tmp41225, tmp41228, tmp41229, tmp41230, function(_, callback) {
      var root13121 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13121); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11932;
      nodes11932 = node.contents();
      oldNodes.replaceWith(nodes11932);
    }));
    root13120.append(node5524);
    callback(root13120); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes11931;
    nodes11931 = node.contents();
    oldNodes.replaceWith(nodes11931);
  }));
  callback(root13103); return subs__;
  
  
  return subs__;
};

controls.moodometer.moodoMeter = function(elements, callback) {
  var root13122 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp41234 = mobl.ref(new models.moods.Mood({'date': mobl.now()}));
  
  var nodes11933 = $("<span>");
  root13122.append(nodes11933);
  subs__.addSub((controls.moodometer.moodoForm)(tmp41234, function(_, callback) {
    var root13123 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13123); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes11933;
    nodes11933 = node.contents();
    oldNodes.replaceWith(nodes11933);
  }));
  callback(root13122); return subs__;
  
  return subs__;
};
