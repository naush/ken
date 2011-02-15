mobl.provides('ken');

ken.root = function(callback, screenCallback) {
  var root1296 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2731 = mobl.ref("Ken");
  
  
  var tmp2732 = mobl.ref(null);
  
  var nodes1148 = $("<span>");
  root1296.append(nodes1148);
  subs__.addSub((ui.header)(tmp2731, tmp2732, function(_, callback) {
    var root1297 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1297); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1148;
    nodes1148 = node.contents();
    oldNodes.replaceWith(nodes1148);
  }));
  
  var tmp2733 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer)]);
  subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
    tmp2733.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer)]);
  }));
  subs__.addSub(mobl.ref(controls.moodometer.moodometer).addEventListener('change', function() {
    tmp2733.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodometer)]);
  }));
  
  var nodes1149 = $("<span>");
  root1296.append(nodes1149);
  subs__.addSub((ui.tabSet)(tmp2733, function(_, callback) {
    var root1298 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1298); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1149;
    nodes1149 = node.contents();
    oldNodes.replaceWith(nodes1149);
  }));
  callback(root1296); return subs__;
  
  
  return subs__;
};
