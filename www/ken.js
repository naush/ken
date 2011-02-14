mobl.provides('ken');

ken.root = function(callback, screenCallback) {
  var root14063 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp21603 = mobl.ref("Ken");
  
  
  var tmp21604 = mobl.ref(null);
  
  var nodes10604 = $("<span>");
  root14063.append(nodes10604);
  subs__.addSub((ui.header)(tmp21603, tmp21604, function(_, callback) {
    var root14064 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root14064); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10604;
    nodes10604 = node.contents();
    oldNodes.replaceWith(nodes10604);
  }));
  
  var tmp21605 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp21605.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp21605.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodometer).addEventListener('change', function() {
    tmp21605.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp21605.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes10605 = $("<span>");
  root14063.append(nodes10605);
  subs__.addSub((ui.tabSet)(tmp21605, function(_, callback) {
    var root14065 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root14065); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10605;
    nodes10605 = node.contents();
    oldNodes.replaceWith(nodes10605);
  }));
  callback(root14063); return subs__;
  
  
  return subs__;
};
