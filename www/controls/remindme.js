mobl.provides('controls.remindme');
mobl.provides('models');
mobl.provides('mobl');
controls.remindme.loadPresets = function() {
   var __this = this;
  var presets = [];
  
  presets.push(new mobl.Tuple(false, "Drink water", 0));
  presets.push(new mobl.Tuple(false, "Stop frowning", 0));
  presets.push(new mobl.Tuple(false, "Take few deep breaths", 0));
  presets.push(new mobl.Tuple(false, "Relax shoulders by rotating them", 0));
  presets.push(new mobl.Tuple(false, "Close eyes and count till 20", 0));
  presets.push(new mobl.Tuple(false, "Stretch", 0));
  return presets;
};


controls.remindme.reminderForm = function(presets, elements, callback) {
  var root846 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes717 = $("<span>");
  root846.append(nodes717);
  subs__.addSub((ui.group)(function(_, callback) {
    var root847 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node102 = mobl.loadingSpan();
    root847.append(node102);
    var list35;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList35 = function() {
      var subs__ = listSubs__;
      list35 = presets.get();
      list35.list(function(results691) {
        node102.empty();
        for(var i35 = 0; i35 < results691.length; i35++) {
          (function() {
            var iternode35 = $("<span>");
            node102.append(iternode35);
            var check;var name;var stress;
            check = mobl.ref(mobl.ref(mobl.ref(results691), i35), "_1");name = mobl.ref(mobl.ref(mobl.ref(results691), i35), "_2");stress = mobl.ref(mobl.ref(mobl.ref(results691), i35), "_3");
            
            var tmp2166 = mobl.ref(false);
            
            
            var tmp2165 = mobl.ref(null);
            
            
            var tmp2164 = mobl.ref(null);
            
            var nodes718 = $("<span>");
            iternode35.append(nodes718);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2164, tmp2165, tmp2166, function(_, callback) {
              var root848 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp2163 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = check.get();
                                   if(result__) {
                                     var result__ = mobl.add(new models.reminders.Reminder({'name': name.get(), 'stress': stress.get(), 'date': mobl.now()}));
                                     if(callback && callback.apply) callback(); return;
                                   } else {
                                     {
                                       models.reminders.Reminder.all().filter("name", "=", name.get()).order("date", false).one(function(result__) {
                                         var tmp2169 = result__;
                                         var result__ = tmp2169;
                                         var itemToRemove = result__;
                                         var result__ = mobl.remove(itemToRemove);
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes719 = $("<span>");
              root848.append(nodes719);
              subs__.addSub((ui.checkBox)(check, name, tmp2163, function(_, callback) {
                var root849 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root849); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes719;
                nodes719 = node.contents();
                oldNodes.replaceWith(nodes719);
              }));
              callback(root848); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes718;
              nodes718 = node.contents();
              oldNodes.replaceWith(nodes718);
            }));
            
            var oldNodes = iternode35;
            iternode35 = iternode35.contents();
            oldNodes.replaceWith(iternode35);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list35.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
        subs__.addSub(presets.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
      });
    };
    renderList35();
    
    callback(root847); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes717;
    nodes717 = node.contents();
    oldNodes.replaceWith(nodes717);
  }));
  callback(root846); return subs__;
  
  return subs__;
};

controls.remindme.remindMe = function(elements, callback) {
  var root850 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2167 = mobl.ref(controls.remindme.loadPresets());
  
  var nodes720 = $("<span>");
  root850.append(nodes720);
  subs__.addSub((controls.remindme.reminderForm)(tmp2167, function(_, callback) {
    var root851 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root851); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes720;
    nodes720 = node.contents();
    oldNodes.replaceWith(nodes720);
  }));
  callback(root850); return subs__;
  
  return subs__;
};
