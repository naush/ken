mobl.provides('controls.moodometer');

controls.moodometer.moodometer = function(elements, callback) {
  var root13445 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var newMood = mobl.ref(new models.moods.Mood({'date': mobl.now()}));
  
  
  var node7666 = $("<div>");
  node7666.attr('style', "margin:20px");
  
  
  var tmp20313 = mobl.ref("Do you feel...?");
  
  
  var tmp20314 = mobl.ref(null);
  
  var nodes10058 = $("<span>");
  node7666.append(nodes10058);
  subs__.addSub((mobl.label)(tmp20313, mobl.ref(ui.title), tmp20314, function(_, callback) {
    var root13446 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13446); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10058;
    nodes10058 = node.contents();
    oldNodes.replaceWith(nodes10058);
  }));
  var nodes10059 = $("<span>");
  node7666.append(nodes10059);
  subs__.addSub((ui.group)(function(_, callback) {
    var root13447 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp20322 = mobl.ref(false);
    
    
    var tmp20321 = mobl.ref(null);
    
    
    var tmp20320 = mobl.ref(null);
    
    var nodes10060 = $("<span>");
    root13447.append(nodes10060);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20320, tmp20321, tmp20322, function(_, callback) {
      var root13448 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp20315 = mobl.ref("Happy");
      
      
      var tmp20316 = mobl.ref(null);
      
      var nodes10061 = $("<span>");
      root13448.append(nodes10061);
      subs__.addSub((mobl.label)(tmp20315, mobl.ref(ui.emphasis), tmp20316, function(_, callback) {
        var root13449 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13449); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10061;
        nodes10061 = node.contents();
        oldNodes.replaceWith(nodes10061);
      }));
      
      var tmp20318 = mobl.ref(10);
      
      
      var tmp20317 = mobl.ref(-10);
      
      
      var tmp20319 = mobl.ref(0);
      
      var nodes10062 = $("<span>");
      root13448.append(nodes10062);
      subs__.addSub((ui.rangeField)(mobl.ref(newMood, 'happy'), mobl.ref(ui.ranger), tmp20317, tmp20318, tmp20319, function(_, callback) {
        var root13450 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13450); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10062;
        nodes10062 = node.contents();
        oldNodes.replaceWith(nodes10062);
      }));
      callback(root13448); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10060;
      nodes10060 = node.contents();
      oldNodes.replaceWith(nodes10060);
    }));
    
    var tmp20330 = mobl.ref(false);
    
    
    var tmp20329 = mobl.ref(null);
    
    
    var tmp20328 = mobl.ref(null);
    
    var nodes10063 = $("<span>");
    root13447.append(nodes10063);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20328, tmp20329, tmp20330, function(_, callback) {
      var root13451 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp20323 = mobl.ref("Relaxed");
      
      
      var tmp20324 = mobl.ref(null);
      
      var nodes10064 = $("<span>");
      root13451.append(nodes10064);
      subs__.addSub((mobl.label)(tmp20323, mobl.ref(ui.emphasis), tmp20324, function(_, callback) {
        var root13452 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13452); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10064;
        nodes10064 = node.contents();
        oldNodes.replaceWith(nodes10064);
      }));
      
      var tmp20326 = mobl.ref(10);
      
      
      var tmp20325 = mobl.ref(-10);
      
      
      var tmp20327 = mobl.ref(0);
      
      var nodes10065 = $("<span>");
      root13451.append(nodes10065);
      subs__.addSub((ui.rangeField)(mobl.ref(newMood, 'relaxed'), mobl.ref(ui.ranger), tmp20325, tmp20326, tmp20327, function(_, callback) {
        var root13453 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13453); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10065;
        nodes10065 = node.contents();
        oldNodes.replaceWith(nodes10065);
      }));
      callback(root13451); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10063;
      nodes10063 = node.contents();
      oldNodes.replaceWith(nodes10063);
    }));
    
    var tmp20338 = mobl.ref(false);
    
    
    var tmp20337 = mobl.ref(null);
    
    
    var tmp20336 = mobl.ref(null);
    
    var nodes10066 = $("<span>");
    root13447.append(nodes10066);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20336, tmp20337, tmp20338, function(_, callback) {
      var root13454 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp20331 = mobl.ref("Awake");
      
      
      var tmp20332 = mobl.ref(null);
      
      var nodes10067 = $("<span>");
      root13454.append(nodes10067);
      subs__.addSub((mobl.label)(tmp20331, mobl.ref(ui.emphasis), tmp20332, function(_, callback) {
        var root13455 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13455); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10067;
        nodes10067 = node.contents();
        oldNodes.replaceWith(nodes10067);
      }));
      
      var tmp20334 = mobl.ref(10);
      
      
      var tmp20333 = mobl.ref(-10);
      
      
      var tmp20335 = mobl.ref(0);
      
      var nodes10068 = $("<span>");
      root13454.append(nodes10068);
      subs__.addSub((ui.rangeField)(mobl.ref(newMood, 'awake'), mobl.ref(ui.ranger), tmp20333, tmp20334, tmp20335, function(_, callback) {
        var root13456 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13456); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10068;
        nodes10068 = node.contents();
        oldNodes.replaceWith(nodes10068);
      }));
      callback(root13454); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10066;
      nodes10066 = node.contents();
      oldNodes.replaceWith(nodes10066);
    }));
    
    var tmp20340 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.add(newMood.get());
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp20339 = mobl.ref("Save");
    
    var nodes10069 = $("<span>");
    root13447.append(nodes10069);
    subs__.addSub((ui.button)(tmp20339, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp20340, function(_, callback) {
      var root13457 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13457); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10069;
      nodes10069 = node.contents();
      oldNodes.replaceWith(nodes10069);
    }));
    callback(root13447); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10059;
    nodes10059 = node.contents();
    oldNodes.replaceWith(nodes10059);
  }));
  root13445.append(node7666);
  callback(root13445); return subs__;
  
  
  
  return subs__;
};
