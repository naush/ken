mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root510 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp833 = mobl.ref("Ken");
  
  
  var tmp834 = mobl.ref(null);
  
  var nodes376 = $("<span>");
  root510.append(nodes376);
  subs__.addSub((ui.header)(tmp833, tmp834, function(_, callback) {
    var root511 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root511); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes376;
    nodes376 = node.contents();
    oldNodes.replaceWith(nodes376);
  }));
  
  var tmp835 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp835.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp835.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
    tmp835.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp835.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes377 = $("<span>");
  root510.append(nodes377);
  subs__.addSub((ui.tabSet)(tmp835, function(_, callback) {
    var root512 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root512); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes377;
    nodes377 = node.contents();
    oldNodes.replaceWith(nodes377);
  }));
  callback(root510); return subs__;
  
  
  return subs__;
};
