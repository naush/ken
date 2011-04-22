mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root4243 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8487 = mobl.ref("Ken");
  
  
  var tmp8488 = mobl.ref(null);
  
  var nodes3283 = $("<span>");
  root4243.append(nodes3283);
  subs__.addSub((ui.header)(tmp8487, tmp8488, function(_, callback) {
    var root4244 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4244); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3283;
    nodes3283 = node.contents();
    oldNodes.replaceWith(nodes3283);
  }));
  
  var tmp8489 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp8489.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp8489.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
    tmp8489.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp8489.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes3284 = $("<span>");
  root4243.append(nodes3284);
  subs__.addSub((ui.customTabSet)(tmp8489, function(_, callback) {
    var root4245 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4245); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3284;
    nodes3284 = node.contents();
    oldNodes.replaceWith(nodes3284);
  }));
  callback(root4243); return subs__;
  
  
  return subs__;
};
