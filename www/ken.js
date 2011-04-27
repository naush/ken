mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root28515 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var node13279 = $("<div>");
  node13279.attr('style', "background-image: url(\"resources/images/background.png\"); background-repeat: no-repeat; height: 500px; width: 315px; position: absolute;");
  
  
  var tmp33931 = mobl.ref("Ken");
  
  
  var tmp33932 = mobl.ref(null);
  
  var nodes19262 = $("<span>");
  node13279.append(nodes19262);
  subs__.addSub((ui.customHeader)(tmp33931, tmp33932, function(_, callback) {
    var root28516 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28516); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19262;
    nodes19262 = node.contents();
    oldNodes.replaceWith(nodes19262);
  }));
  
  var tmp33933 = mobl.ref([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp33933.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp33933.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
    tmp33933.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp33933.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes19263 = $("<span>");
  node13279.append(nodes19263);
  subs__.addSub((ui.customTabSet)(tmp33933, function(_, callback) {
    var root28517 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28517); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19263;
    nodes19263 = node.contents();
    oldNodes.replaceWith(nodes19263);
  }));
  root28515.append(node13279);
  callback(root28515); return subs__;
  
  
  
  return subs__;
};
