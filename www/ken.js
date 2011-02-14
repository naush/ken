mobl.provides('ken');

ken.root = function(callback, screenCallback) {
  var root13458 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp20341 = mobl.ref("Ken");
  
  
  var tmp20342 = mobl.ref(null);
  
  var nodes10070 = $("<span>");
  root13458.append(nodes10070);
  subs__.addSub((ui.header)(tmp20341, tmp20342, function(_, callback) {
    var root13459 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13459); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10070;
    nodes10070 = node.contents();
    oldNodes.replaceWith(nodes10070);
  }));
  
  var tmp20343 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp20343.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp20343.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodometer).addEventListener('change', function() {
    tmp20343.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp20343.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes10071 = $("<span>");
  root13458.append(nodes10071);
  subs__.addSub((ui.tabSet)(tmp20343, function(_, callback) {
    var root13460 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13460); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10071;
    nodes10071 = node.contents();
    oldNodes.replaceWith(nodes10071);
  }));
  callback(root13458); return subs__;
  
  
  return subs__;
};
