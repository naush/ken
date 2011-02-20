mobl.provides('controls.life');
controls.life.events = mobl.ref([]);
controls.life.marriage = mobl.ref(false);
controls.life.divorce = mobl.ref(false);
controls.life.deathOfSpouse = mobl.ref(false);
controls.life.injuryOrIllness = mobl.ref(false);
controls.life.backToSchool = mobl.ref(false);
controls.life.changeInResidence = mobl.ref(false);
controls.life.mortgageOrLoan = mobl.ref(false);
controls.life.cb = function(check, name) {
   var __this = this;
  return function(event, callback) {
           if(event && event.stopPropagation) event.stopPropagation();
           var result__ = check;
           if(result__) {
             var result__ = controls.life.events.get().push(name);
             if(callback && callback.apply) callback(); return;
           } else {
             {
               var result__ = controls.life.events.get().remove(name);
               if(callback && callback.apply) callback(); return;
             }
           }
         };
};


controls.life.life = function(elements, callback) {
var root3869 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3288 = $("<span>");
root3869.append(nodes3288);
subs__.addSub((ui.group)(function(_, callback) {
  var root3870 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8780 = mobl.ref(false);
  
  
  var tmp8779 = mobl.ref(null);
  
  
  var tmp8778 = mobl.ref(null);
  
  var nodes3289 = $("<span>");
  root3870.append(nodes3289);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8778, tmp8779, tmp8780, function(_, callback) {
    var root3871 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8777 = mobl.ref(controls.life.cb(controls.life.marriage.get(), "Marriage"));
    subs__.addSub(controls.life.marriage.addEventListener('change', function() {
      tmp8777.set(controls.life.cb(controls.life.marriage.get(), "Marriage"));
    }));
    
    
    var tmp8776 = mobl.ref("Marriage");
    
    var nodes3290 = $("<span>");
    root3871.append(nodes3290);
    subs__.addSub((ui.checkBox)(controls.life.marriage, tmp8776, tmp8777, function(_, callback) {
      var root3872 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3872); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3290;
      nodes3290 = node.contents();
      oldNodes.replaceWith(nodes3290);
    }));
    callback(root3871); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3289;
    nodes3289 = node.contents();
    oldNodes.replaceWith(nodes3289);
  }));
  
  var tmp8785 = mobl.ref(false);
  
  
  var tmp8784 = mobl.ref(null);
  
  
  var tmp8783 = mobl.ref(null);
  
  var nodes3291 = $("<span>");
  root3870.append(nodes3291);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8783, tmp8784, tmp8785, function(_, callback) {
    var root3873 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8782 = mobl.ref(controls.life.cb(controls.life.divorce.get(), "Divorce"));
    subs__.addSub(controls.life.divorce.addEventListener('change', function() {
      tmp8782.set(controls.life.cb(controls.life.divorce.get(), "Divorce"));
    }));
    
    
    var tmp8781 = mobl.ref("Divorce");
    
    var nodes3292 = $("<span>");
    root3873.append(nodes3292);
    subs__.addSub((ui.checkBox)(controls.life.divorce, tmp8781, tmp8782, function(_, callback) {
      var root3874 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3874); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3292;
      nodes3292 = node.contents();
      oldNodes.replaceWith(nodes3292);
    }));
    callback(root3873); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3291;
    nodes3291 = node.contents();
    oldNodes.replaceWith(nodes3291);
  }));
  
  var tmp8790 = mobl.ref(false);
  
  
  var tmp8789 = mobl.ref(null);
  
  
  var tmp8788 = mobl.ref(null);
  
  var nodes3293 = $("<span>");
  root3870.append(nodes3293);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8788, tmp8789, tmp8790, function(_, callback) {
    var root3875 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8787 = mobl.ref(controls.life.cb(controls.life.deathOfSpouse.get(), "Death of a spouse"));
    subs__.addSub(controls.life.deathOfSpouse.addEventListener('change', function() {
      tmp8787.set(controls.life.cb(controls.life.deathOfSpouse.get(), "Death of a spouse"));
    }));
    
    
    var tmp8786 = mobl.ref("Death of a spouse");
    
    var nodes3294 = $("<span>");
    root3875.append(nodes3294);
    subs__.addSub((ui.checkBox)(controls.life.deathOfSpouse, tmp8786, tmp8787, function(_, callback) {
      var root3876 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3876); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3294;
      nodes3294 = node.contents();
      oldNodes.replaceWith(nodes3294);
    }));
    callback(root3875); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3293;
    nodes3293 = node.contents();
    oldNodes.replaceWith(nodes3293);
  }));
  
  var tmp8795 = mobl.ref(false);
  
  
  var tmp8794 = mobl.ref(null);
  
  
  var tmp8793 = mobl.ref(null);
  
  var nodes3295 = $("<span>");
  root3870.append(nodes3295);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8793, tmp8794, tmp8795, function(_, callback) {
    var root3877 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8792 = mobl.ref(controls.life.cb(controls.life.injuryOrIllness.get(), "Injury or illness"));
    subs__.addSub(controls.life.injuryOrIllness.addEventListener('change', function() {
      tmp8792.set(controls.life.cb(controls.life.injuryOrIllness.get(), "Injury or illness"));
    }));
    
    
    var tmp8791 = mobl.ref("Injury or illness");
    
    var nodes3296 = $("<span>");
    root3877.append(nodes3296);
    subs__.addSub((ui.checkBox)(controls.life.injuryOrIllness, tmp8791, tmp8792, function(_, callback) {
      var root3878 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3878); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3296;
      nodes3296 = node.contents();
      oldNodes.replaceWith(nodes3296);
    }));
    callback(root3877); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3295;
    nodes3295 = node.contents();
    oldNodes.replaceWith(nodes3295);
  }));
  
  var tmp8800 = mobl.ref(false);
  
  
  var tmp8799 = mobl.ref(null);
  
  
  var tmp8798 = mobl.ref(null);
  
  var nodes3297 = $("<span>");
  root3870.append(nodes3297);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8798, tmp8799, tmp8800, function(_, callback) {
    var root3879 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8797 = mobl.ref(controls.life.cb(controls.life.backToSchool.get(), "Going back to school"));
    subs__.addSub(controls.life.backToSchool.addEventListener('change', function() {
      tmp8797.set(controls.life.cb(controls.life.backToSchool.get(), "Going back to school"));
    }));
    
    
    var tmp8796 = mobl.ref("Going back to school");
    
    var nodes3298 = $("<span>");
    root3879.append(nodes3298);
    subs__.addSub((ui.checkBox)(controls.life.backToSchool, tmp8796, tmp8797, function(_, callback) {
      var root3880 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3880); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3298;
      nodes3298 = node.contents();
      oldNodes.replaceWith(nodes3298);
    }));
    callback(root3879); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3297;
    nodes3297 = node.contents();
    oldNodes.replaceWith(nodes3297);
  }));
  
  var tmp8805 = mobl.ref(false);
  
  
  var tmp8804 = mobl.ref(null);
  
  
  var tmp8803 = mobl.ref(null);
  
  var nodes3299 = $("<span>");
  root3870.append(nodes3299);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8803, tmp8804, tmp8805, function(_, callback) {
    var root3881 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8802 = mobl.ref(controls.life.cb(controls.life.changeInResidence.get(), "Change in residence"));
    subs__.addSub(controls.life.changeInResidence.addEventListener('change', function() {
      tmp8802.set(controls.life.cb(controls.life.changeInResidence.get(), "Change in residence"));
    }));
    
    
    var tmp8801 = mobl.ref("Chance in residence");
    
    var nodes3300 = $("<span>");
    root3881.append(nodes3300);
    subs__.addSub((ui.checkBox)(controls.life.changeInResidence, tmp8801, tmp8802, function(_, callback) {
      var root3882 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3882); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3300;
      nodes3300 = node.contents();
      oldNodes.replaceWith(nodes3300);
    }));
    callback(root3881); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3299;
    nodes3299 = node.contents();
    oldNodes.replaceWith(nodes3299);
  }));
  
  var tmp8810 = mobl.ref(false);
  
  
  var tmp8809 = mobl.ref(null);
  
  
  var tmp8808 = mobl.ref(null);
  
  var nodes3301 = $("<span>");
  root3870.append(nodes3301);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8808, tmp8809, tmp8810, function(_, callback) {
    var root3883 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8807 = mobl.ref(controls.life.cb(controls.life.mortgageOrLoan.get(), "Mortgage or loan"));
    subs__.addSub(controls.life.mortgageOrLoan.addEventListener('change', function() {
      tmp8807.set(controls.life.cb(controls.life.mortgageOrLoan.get(), "Mortgage or loan"));
    }));
    
    
    var tmp8806 = mobl.ref("Mortgage or loan");
    
    var nodes3302 = $("<span>");
    root3883.append(nodes3302);
    subs__.addSub((ui.checkBox)(controls.life.mortgageOrLoan, tmp8806, tmp8807, function(_, callback) {
      var root3884 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3884); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3302;
      nodes3302 = node.contents();
      oldNodes.replaceWith(nodes3302);
    }));
    callback(root3883); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3301;
    nodes3301 = node.contents();
    oldNodes.replaceWith(nodes3301);
  }));
  
  var tmp8812 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.life.events.get();
                       controls.life.events.get().list(function(coll383) {
                         coll383 = coll383.reverse();
                         function processOne129() {
                           var event;
                           event = coll383.pop();
                           var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event, 'date': mobl.now()}));
                           
                           if(coll383.length > 0) processOne129(); else rest129();
                           
                         }
                         function rest129() {
                           var result__ = controls.life.events.get().length > 0;
                           if(result__) {
                             var result__ = mobl.notify.notify("Events saved!", "Notification");
                             var result__ = 0;
                             controls.life.events.get().length = result__;
                             if(callback && callback.apply) callback(); return;
                           } else {
                             {
                               var result__ = mobl.notify.notify("Please select at least one event.", "Notification");
                               if(callback && callback.apply) callback(); return;
                             }
                           }
                         }
                         if(coll383.length > 0) processOne129(); else rest129();
                       });
                       
                     });
  
  
  var tmp8811 = mobl.ref("Save");
  
  var nodes3303 = $("<span>");
  root3870.append(nodes3303);
  subs__.addSub((ui.button)(tmp8811, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8812, function(_, callback) {
    var root3885 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3885); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3303;
    nodes3303 = node.contents();
    oldNodes.replaceWith(nodes3303);
  }));
  callback(root3870); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3288;
  nodes3288 = node.contents();
  oldNodes.replaceWith(nodes3288);
}));
callback(root3869); return subs__;

return subs__;
};
