mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root7990 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp13278 = mobl.ref("Ken");


var tmp13279 = mobl.ref(null);

var nodes6088 = $("<span>");
root7990.append(nodes6088);
subs__.addSub((ui.header)(tmp13278, tmp13279, function(_, callback) {
  var root7991 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root7991); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6088;
  nodes6088 = node.contents();
  oldNodes.replaceWith(nodes6088);
}));

var tmp13280 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp13280.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
  tmp13280.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp13280.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes6089 = $("<span>");
root7990.append(nodes6089);
subs__.addSub((ui.tabSet)(tmp13280, function(_, callback) {
  var root7992 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root7992); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6089;
  nodes6089 = node.contents();
  oldNodes.replaceWith(nodes6089);
}));
callback(root7990); return subs__;


return subs__;
};
