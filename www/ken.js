mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root3889 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp8816 = mobl.ref("Ken");


var tmp8817 = mobl.ref(null);

var nodes3306 = $("<span>");
root3889.append(nodes3306);
subs__.addSub((ui.header)(tmp8816, tmp8817, function(_, callback) {
  var root3890 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root3890); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3306;
  nodes3306 = node.contents();
  oldNodes.replaceWith(nodes3306);
}));

var tmp8818 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp8818.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
  tmp8818.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp8818.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes3307 = $("<span>");
root3889.append(nodes3307);
subs__.addSub((ui.tabSet)(tmp8818, function(_, callback) {
  var root3891 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root3891); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3307;
  nodes3307 = node.contents();
  oldNodes.replaceWith(nodes3307);
}));
callback(root3889); return subs__;


return subs__;
};
