mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root25632 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var node12086 = $("<div>");
  node12086.attr('style', "background-image: url(\"resources/images/background.png\"); background-repeat: no-repeat; height: 500px;");
  
  
  var tmp30085 = mobl.ref("Ken");
  
  
  var tmp30086 = mobl.ref(null);
  
  var nodes17246 = $("<span>");
  node12086.append(nodes17246);
  subs__.addSub((ui.customHeader)(tmp30085, tmp30086, function(_, callback) {
    var root25633 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root25633); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17246;
    nodes17246 = node.contents();
    oldNodes.replaceWith(nodes17246);
  }));
  
  var tmp30087 = mobl.ref([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp30087.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp30087.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
    tmp30087.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp30087.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes17247 = $("<span>");
  node12086.append(nodes17247);
  subs__.addSub((ui.customTabSet)(tmp30087, function(_, callback) {
    var root25634 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root25634); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17247;
    nodes17247 = node.contents();
    oldNodes.replaceWith(nodes17247);
  }));
  root25632.append(node12086);
  callback(root25632); return subs__;
  
  
  
  return subs__;
};
