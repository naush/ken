mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root1408 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp3725 = mobl.ref("Ken");
  
  
  var tmp3726 = mobl.ref(null);
  
  var nodes1210 = $("<span>");
  root1408.append(nodes1210);
  subs__.addSub((ui.header)(tmp3725, tmp3726, function(_, callback) {
    var root1409 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1409); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1210;
    nodes1210 = node.contents();
    oldNodes.replaceWith(nodes1210);
  }));
  
  var tmp3727 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp3727.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp3727.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
    tmp3727.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp3727.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes1211 = $("<span>");
  root1408.append(nodes1211);
  subs__.addSub((ui.tabSet)(tmp3727, function(_, callback) {
    var root1410 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1410); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1211;
    nodes1211 = node.contents();
    oldNodes.replaceWith(nodes1211);
  }));
  callback(root1408); return subs__;
  
  
  return subs__;
};
