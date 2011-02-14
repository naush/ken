mobl.provides('ken');

ken.root = function(callback, screenCallback) {
  var root176 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp178 = mobl.ref("Ken");
  
  
  var tmp179 = mobl.ref(null);
  
  var nodes114 = $("<span>");
  root176.append(nodes114);
  subs__.addSub((ui.header)(tmp178, tmp179, function(_, callback) {
    var root177 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root177); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes114;
    nodes114 = node.contents();
    oldNodes.replaceWith(nodes114);
  }));
  
  var tmp180 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp180.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
    tmp180.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodometer).addEventListener('change', function() {
    tmp180.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  subs__.addSub(mobl.ref(controls.meditate.meditate).addEventListener('change', function() {
    tmp180.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer), new mobl.Tuple("Meditate", "", controls.meditate.meditate)]);
  }));
  
  var nodes115 = $("<span>");
  root176.append(nodes115);
  subs__.addSub((ui.tabSet)(tmp180, function(_, callback) {
    var root178 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root178); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes115;
    nodes115 = node.contents();
    oldNodes.replaceWith(nodes115);
  }));
  callback(root176); return subs__;
  
  
  return subs__;
};
