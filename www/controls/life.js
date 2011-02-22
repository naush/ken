mobl.provides('controls.life');
controls.life.events = mobl.ref([]);
controls.life.loadPresets = function() {
   var __this = this;
  var presets = [];
  
  presets.push(new mobl.Tuple(false, "Minor violations of the law (e.g., traffic tickets, misdemeanors)", 11));
  presets.push(new mobl.Tuple(false, "Christmas", 12));
  presets.push(new mobl.Tuple(false, "Change in number of family get-togethers", 15));
  presets.push(new mobl.Tuple(false, "Vacation", 15));
  presets.push(new mobl.Tuple(false, "Change in eating habits", 15));
  presets.push(new mobl.Tuple(false, "Change in sleeping habits", 16));
  presets.push(new mobl.Tuple(false, "Purchase of major items (auto, computer, etc)", 17));
  presets.push(new mobl.Tuple(false, "Change in social activities", 18));
  presets.push(new mobl.Tuple(false, "Change in church/spiritual activities", 19));
  presets.push(new mobl.Tuple(false, "Change in recreational habits", 19));
  presets.push(new mobl.Tuple(false, "Change in residence", 20));
  presets.push(new mobl.Tuple(false, "Change in work hours or responsibilities", 20));
  presets.push(new mobl.Tuple(false, "Change in school", 20));
  presets.push(new mobl.Tuple(false, "Trouble with boss/superior", 23));
  presets.push(new mobl.Tuple(false, "Revision/change of personal habits", 24));
  presets.push(new mobl.Tuple(false, "Change in living condition (rebuilding, remodeling)", 25));
  presets.push(new mobl.Tuple(false, "Going back to school", 26));
  presets.push(new mobl.Tuple(false, "Spouse stops work outside of home", 26));
  presets.push(new mobl.Tuple(false, "Outstanding Personal Achievement", 28));
  presets.push(new mobl.Tuple(false, "Trouble with in-laws", 29));
  presets.push(new mobl.Tuple(false, "Changes in responsibility at work", 29));
  presets.push(new mobl.Tuple(false, "Son or daughter leaving home", 29));
  presets.push(new mobl.Tuple(false, "Foreclosure of mortgage or loan", 30));
  presets.push(new mobl.Tuple(false, "Mortgage or loan for major purchase (i.e. home, etc.)", 31));
  presets.push(new mobl.Tuple(false, "Increase in number of arguments with spouse", 35));
  presets.push(new mobl.Tuple(false, "Change to different line of work", 36));
  presets.push(new mobl.Tuple(false, "Death of a close friend", 37));
  presets.push(new mobl.Tuple(false, "Major change in finances", 38));
  presets.push(new mobl.Tuple(false, "Gain of new family member thru birth, adoption, or remarriage", 39));
  presets.push(new mobl.Tuple(false, "Business readjustment", 39));
  presets.push(new mobl.Tuple(false, "Sexual difficulties", 40));
  presets.push(new mobl.Tuple(false, "Pregnancy", 40));
  presets.push(new mobl.Tuple(false, "Major change in health or behavior of a family member", 44));
  presets.push(new mobl.Tuple(false, "Retirement", 45));
  presets.push(new mobl.Tuple(false, "Marital reconciliation", 45));
  presets.push(new mobl.Tuple(false, "Being fired from work", 47));
  presets.push(new mobl.Tuple(false, "Marriage", 50));
  presets.push(new mobl.Tuple(false, "Personal injury or illness", 53));
  presets.push(new mobl.Tuple(false, "Death of a close family member", 63));
  presets.push(new mobl.Tuple(false, "Jail term", 63));
  presets.push(new mobl.Tuple(false, "Marital separation (or separation from any major intimate relationship)", 65));
  presets.push(new mobl.Tuple(false, "Divorse", 73));
  presets.push(new mobl.Tuple(false, "Death of a spouse", 100));
  return presets;
};

controls.life.cb = function(check, name, stress) {
   var __this = this;
  return function(event, callback) {
           if(event && event.stopPropagation) event.stopPropagation();
           var result__ = check ? controls.life.events.get().push(new mobl.Tuple(name, stress)) : controls.life.events.get().remove(new mobl.Tuple(name, stress));
           if(callback && callback.apply) callback(); return;
         };
};


controls.life.lifeForm = function(presets, elements, callback) {
var root8007 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes6100 = $("<span>");
root8007.append(nodes6100);
subs__.addSub((ui.group)(function(_, callback) {
  var root8008 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2797 = mobl.loadingSpan();
  root8008.append(node2797);
  var list523;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList523 = function() {
    var subs__ = listSubs__;
    list523 = presets.get();
    list523.list(function(results559) {
      node2797.empty();
      for(var i528 = 0; i528 < results559.length; i528++) {
        (function() {
          var iternode523 = $("<span>");
          node2797.append(iternode523);
          var check;var name;var stress;
          check = mobl.ref(mobl.ref(mobl.ref(results559), i528), "_1");name = mobl.ref(mobl.ref(mobl.ref(results559), i528), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results559), i528), "_3");
          
          var tmp13300 = mobl.ref(false);
          
          
          var tmp13299 = mobl.ref(null);
          
          
          var tmp13298 = mobl.ref(null);
          
          var nodes6101 = $("<span>");
          iternode523.append(nodes6101);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13298, tmp13299, tmp13300, function(_, callback) {
            var root8009 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp13297 = mobl.ref(controls.life.cb(check.get(), name.get(), stress.get()));
            subs__.addSub(check.addEventListener('change', function() {
              tmp13297.set(controls.life.cb(check.get(), name.get(), stress.get()));
            }));
            subs__.addSub(name.addEventListener('change', function() {
              tmp13297.set(controls.life.cb(check.get(), name.get(), stress.get()));
            }));
            subs__.addSub(stress.addEventListener('change', function() {
              tmp13297.set(controls.life.cb(check.get(), name.get(), stress.get()));
            }));
            
            var nodes6102 = $("<span>");
            root8009.append(nodes6102);
            subs__.addSub((ui.checkBox)(check, name, tmp13297, function(_, callback) {
              var root8010 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8010); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6102;
              nodes6102 = node.contents();
              oldNodes.replaceWith(nodes6102);
            }));
            callback(root8009); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6101;
            nodes6101 = node.contents();
            oldNodes.replaceWith(nodes6101);
          }));
          
          var oldNodes = iternode523;
          iternode523 = iternode523.contents();
          oldNodes.replaceWith(iternode523);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list523.addEventListener('change', function() { listSubs__.unsubscribe(); renderList523(true); }));
      subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList523(true); }));
    });
  };
  renderList523();
  
  
  var tmp13302 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = controls.life.events.get();
                       controls.life.events.get().list(function(coll1256) {
                         coll1256 = coll1256.reverse();
                         function processOne351() {
                           var event;
                           event = coll1256.pop();
                           var result__ = mobl.add(new models.lifeevents.LifeEvent({'name': event, 'date': mobl.now()}));
                           
                           if(coll1256.length > 0) processOne351(); else rest351();
                           
                         }
                         function rest351() {
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
                         if(coll1256.length > 0) processOne351(); else rest351();
                       });
                       
                     });
  
  
  var tmp13301 = mobl.ref("Save");
  
  var nodes6103 = $("<span>");
  root8008.append(nodes6103);
  subs__.addSub((ui.button)(tmp13301, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp13302, function(_, callback) {
    var root8011 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8011); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6103;
    nodes6103 = node.contents();
    oldNodes.replaceWith(nodes6103);
  }));
  callback(root8008); return subs__;
  
  
  return subs__;
}, function(node) {
  var oldNodes = nodes6100;
  nodes6100 = node.contents();
  oldNodes.replaceWith(nodes6100);
}));
callback(root8007); return subs__;

return subs__;
};

controls.life.life = function(elements, callback) {
var root8012 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp13303 = mobl.ref(controls.life.loadPresets());

var nodes6104 = $("<span>");
root8012.append(nodes6104);
subs__.addSub((controls.life.lifeForm)(tmp13303, function(_, callback) {
  var root8013 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root8013); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6104;
  nodes6104 = node.contents();
  oldNodes.replaceWith(nodes6104);
}));
callback(root8012); return subs__;

return subs__;
};
