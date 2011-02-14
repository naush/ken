mobl.provides('controls.moodometer');
controls.moodometer.newMood = mobl.ref(new models.moods.Mood({'date': mobl.now()}));

controls.moodometer.addMood = function(callback, screenCallback) {
  var root13718 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var node7686 = $("<div>");
  node7686.attr('style', "margin:20px");
  
  
  var tmp20886 = mobl.ref("Do you feel...?");
  
  
  var tmp20887 = mobl.ref(null);
  
  var nodes10305 = $("<span>");
  node7686.append(nodes10305);
  subs__.addSub((mobl.label)(tmp20886, mobl.ref(ui.title), tmp20887, function(_, callback) {
    var root13719 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13719); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10305;
    nodes10305 = node.contents();
    oldNodes.replaceWith(nodes10305);
  }));
  var nodes10306 = $("<span>");
  node7686.append(nodes10306);
  subs__.addSub((ui.group)(function(_, callback) {
    var root13720 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp20895 = mobl.ref(false);
    
    
    var tmp20894 = mobl.ref(null);
    
    
    var tmp20893 = mobl.ref(null);
    
    var nodes10307 = $("<span>");
    root13720.append(nodes10307);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20893, tmp20894, tmp20895, function(_, callback) {
      var root13721 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp20888 = mobl.ref("Happy");
      
      
      var tmp20889 = mobl.ref(null);
      
      var nodes10308 = $("<span>");
      root13721.append(nodes10308);
      subs__.addSub((mobl.label)(tmp20888, mobl.ref(ui.emphasis), tmp20889, function(_, callback) {
        var root13722 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13722); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10308;
        nodes10308 = node.contents();
        oldNodes.replaceWith(nodes10308);
      }));
      
      var tmp20891 = mobl.ref(10);
      
      
      var tmp20890 = mobl.ref(-10);
      
      
      var tmp20892 = mobl.ref(0);
      
      var nodes10309 = $("<span>");
      root13721.append(nodes10309);
      subs__.addSub((ui.rangeField)(mobl.ref(controls.moodometer.newMood, 'happy'), mobl.ref(ui.ranger), tmp20890, tmp20891, tmp20892, function(_, callback) {
        var root13723 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13723); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10309;
        nodes10309 = node.contents();
        oldNodes.replaceWith(nodes10309);
      }));
      callback(root13721); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10307;
      nodes10307 = node.contents();
      oldNodes.replaceWith(nodes10307);
    }));
    
    var tmp20903 = mobl.ref(false);
    
    
    var tmp20902 = mobl.ref(null);
    
    
    var tmp20901 = mobl.ref(null);
    
    var nodes10310 = $("<span>");
    root13720.append(nodes10310);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20901, tmp20902, tmp20903, function(_, callback) {
      var root13724 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp20896 = mobl.ref("Relaxed");
      
      
      var tmp20897 = mobl.ref(null);
      
      var nodes10311 = $("<span>");
      root13724.append(nodes10311);
      subs__.addSub((mobl.label)(tmp20896, mobl.ref(ui.emphasis), tmp20897, function(_, callback) {
        var root13725 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13725); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10311;
        nodes10311 = node.contents();
        oldNodes.replaceWith(nodes10311);
      }));
      
      var tmp20899 = mobl.ref(10);
      
      
      var tmp20898 = mobl.ref(-10);
      
      
      var tmp20900 = mobl.ref(0);
      
      var nodes10312 = $("<span>");
      root13724.append(nodes10312);
      subs__.addSub((ui.rangeField)(mobl.ref(controls.moodometer.newMood, 'relaxed'), mobl.ref(ui.ranger), tmp20898, tmp20899, tmp20900, function(_, callback) {
        var root13726 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13726); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10312;
        nodes10312 = node.contents();
        oldNodes.replaceWith(nodes10312);
      }));
      callback(root13724); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10310;
      nodes10310 = node.contents();
      oldNodes.replaceWith(nodes10310);
    }));
    
    var tmp20911 = mobl.ref(false);
    
    
    var tmp20910 = mobl.ref(null);
    
    
    var tmp20909 = mobl.ref(null);
    
    var nodes10313 = $("<span>");
    root13720.append(nodes10313);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20909, tmp20910, tmp20911, function(_, callback) {
      var root13727 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp20904 = mobl.ref("Awake");
      
      
      var tmp20905 = mobl.ref(null);
      
      var nodes10314 = $("<span>");
      root13727.append(nodes10314);
      subs__.addSub((mobl.label)(tmp20904, mobl.ref(ui.emphasis), tmp20905, function(_, callback) {
        var root13728 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13728); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10314;
        nodes10314 = node.contents();
        oldNodes.replaceWith(nodes10314);
      }));
      
      var tmp20907 = mobl.ref(10);
      
      
      var tmp20906 = mobl.ref(-10);
      
      
      var tmp20908 = mobl.ref(0);
      
      var nodes10315 = $("<span>");
      root13727.append(nodes10315);
      subs__.addSub((ui.rangeField)(mobl.ref(controls.moodometer.newMood, 'awake'), mobl.ref(ui.ranger), tmp20906, tmp20907, tmp20908, function(_, callback) {
        var root13729 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13729); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10315;
        nodes10315 = node.contents();
        oldNodes.replaceWith(nodes10315);
      }));
      callback(root13727); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10313;
      nodes10313 = node.contents();
      oldNodes.replaceWith(nodes10313);
    }));
    
    var tmp20913 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.add(controls.moodometer.newMood.get());
                         var result__ = new models.moods.Mood({'date': mobl.now()});
                         controls.moodometer.newMood.set(result__);
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp20912 = mobl.ref("Save");
    
    var nodes10316 = $("<span>");
    root13720.append(nodes10316);
    subs__.addSub((ui.button)(tmp20912, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp20913, function(_, callback) {
      var root13730 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13730); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10316;
      nodes10316 = node.contents();
      oldNodes.replaceWith(nodes10316);
    }));
    callback(root13720); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10306;
    nodes10306 = node.contents();
    oldNodes.replaceWith(nodes10306);
  }));
  root13718.append(node7686);
  callback(root13718); return subs__;
  
  
  
  return subs__;
};

controls.moodometer.moodometer = function(elements, callback) {
  var root13731 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp20915 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = new models.moods.Mood({'date': mobl.now()});
                       controls.moodometer.newMood.set(result__);
                       mobl.call('controls.moodometer.addMood', [], function(result__) {
                       var tmp20916 = result__;
                       if(callback && callback.apply) callback(); return;
                       });
                     });
  
  
  var tmp20914 = mobl.ref("Add");
  
  var nodes10317 = $("<span>");
  root13731.append(nodes10317);
  subs__.addSub((ui.button)(tmp20914, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp20915, function(_, callback) {
    var root13732 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13732); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10317;
    nodes10317 = node.contents();
    oldNodes.replaceWith(nodes10317);
  }));
  callback(root13731); return subs__;
  
  return subs__;
};
