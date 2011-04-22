mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root5249 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11265 = mobl.ref("Ken");
  
  
  var tmp11266 = mobl.ref(null);
  
  var nodes4156 = $("<span>");
  root5249.append(nodes4156);
  subs__.addSub((ui.header)(tmp11265, tmp11266, function(_, callback) {
    var root5250 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5250); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4156;
    nodes4156 = node.contents();
    oldNodes.replaceWith(nodes4156);
  }));
  
  var tmp11267 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp11267.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp11267.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
    tmp11267.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp11267.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes4157 = $("<span>");
  root5249.append(nodes4157);
  subs__.addSub((ui.customTabSet)(tmp11267, function(_, callback) {
    var root5251 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5251); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4157;
    nodes4157 = node.contents();
    oldNodes.replaceWith(nodes4157);
  }));
  callback(root5249); return subs__;
  
  
  return subs__;
};
