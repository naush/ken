mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root1407 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp2988 = mobl.ref("Ken");


var tmp2989 = mobl.ref(null);

var nodes1187 = $("<span>");
root1407.append(nodes1187);
subs__.addSub((mobl.ui.generic.header)(tmp2988, tmp2989, function(_, callback) {
  var root1408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root1408); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes1187;
  nodes1187 = node.contents();
  oldNodes.replaceWith(nodes1187);
}));

var tmp2990 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp2990.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
  tmp2990.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp2990.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes1188 = $("<span>");
root1407.append(nodes1188);
subs__.addSub((mobl.ui.generic.tabSet)(tmp2990, function(_, callback) {
  var root1409 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root1409); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes1188;
  nodes1188 = node.contents();
  oldNodes.replaceWith(nodes1188);
}));
callback(root1407); return subs__;


return subs__;
};
