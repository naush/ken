mobl.provides('ken');

ken.root = function(callback, screenCallback) {
  var root13620 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp20683 = mobl.ref("Ken");
  
  
  var tmp20684 = mobl.ref(null);
  
  var nodes10218 = $("<span>");
  root13620.append(nodes10218);
  subs__.addSub((ui.header)(tmp20683, tmp20684, function(_, callback) {
    var root13621 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13621); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10218;
    nodes10218 = node.contents();
    oldNodes.replaceWith(nodes10218);
  }));
  
  var tmp20685 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp20685.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp20685.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodometer).addEventListener('change', function() {
    tmp20685.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp20685.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes10219 = $("<span>");
  root13620.append(nodes10219);
  subs__.addSub((ui.tabSet)(tmp20685, function(_, callback) {
    var root13622 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13622); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10219;
    nodes10219 = node.contents();
    oldNodes.replaceWith(nodes10219);
  }));
  callback(root13620); return subs__;
  
  
  return subs__;
};
