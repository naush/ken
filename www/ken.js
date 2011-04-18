mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root2067 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5457 = mobl.ref("Ken");
  
  
  var tmp5458 = mobl.ref(null);
  
  var nodes1790 = $("<span>");
  root2067.append(nodes1790);
  subs__.addSub((ui.header)(tmp5457, tmp5458, function(_, callback) {
    var root2068 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2068); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1790;
    nodes1790 = node.contents();
    oldNodes.replaceWith(nodes1790);
  }));
  
  var tmp5459 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp5459.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp5459.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
    tmp5459.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp5459.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes1791 = $("<span>");
  root2067.append(nodes1791);
  subs__.addSub((ui.tabSet)(tmp5459, function(_, callback) {
    var root2069 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2069); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1791;
    nodes1791 = node.contents();
    oldNodes.replaceWith(nodes1791);
  }));
  callback(root2067); return subs__;
  
  
  return subs__;
};
