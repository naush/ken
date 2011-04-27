mobl.provides('ken');
mobl.provides('controls');

ken.root = function(callback, screenCallback) {
  var root27073 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var node12640 = $("<div>");
  node12640.attr('style', "background-image: url(\"resources/images/background.png\"); background-repeat: no-repeat; height: 500px; width: 315px; position: absolute;");
  
  
  var tmp32216 = mobl.ref("Ken");
  
  
  var tmp32217 = mobl.ref(null);
  
  var nodes18271 = $("<span>");
  node12640.append(nodes18271);
  subs__.addSub((ui.customHeader)(tmp32216, tmp32217, function(_, callback) {
    var root27074 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root27074); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18271;
    nodes18271 = node.contents();
    oldNodes.replaceWith(nodes18271);
  }));
  
  var tmp32218 = mobl.ref([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp32218.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp32218.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
    tmp32218.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp32218.set([new mobl.Tuple("Reminder", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes18272 = $("<span>");
  node12640.append(nodes18272);
  subs__.addSub((ui.customTabSet)(tmp32218, function(_, callback) {
    var root27075 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root27075); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18272;
    nodes18272 = node.contents();
    oldNodes.replaceWith(nodes18272);
  }));
  root27073.append(node12640);
  callback(root27073); return subs__;
  
  
  
  return subs__;
};
