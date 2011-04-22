mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root737 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp935 = mobl.ref("Ken");
  
  
  var tmp936 = mobl.ref(null);
  
  var nodes501 = $("<span>");
  root737.append(nodes501);
  subs__.addSub((ui.header)(tmp935, tmp936, function(_, callback) {
    var root738 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root738); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes501;
    nodes501 = node.contents();
    oldNodes.replaceWith(nodes501);
  }));
  
  var tmp937 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp937.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp937.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
    tmp937.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp937.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "resources/imges/life_on.png", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes502 = $("<span>");
  root737.append(nodes502);
  subs__.addSub((ui.tabSet)(tmp937, function(_, callback) {
    var root739 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root739); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes502;
    nodes502 = node.contents();
    oldNodes.replaceWith(nodes502);
  }));
  callback(root737); return subs__;
  
  
  return subs__;
};
