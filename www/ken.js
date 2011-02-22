mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root8186 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp13498 = mobl.ref("Ken");


var tmp13499 = mobl.ref(null);

var nodes6217 = $("<span>");
root8186.append(nodes6217);
subs__.addSub((ui.header)(tmp13498, tmp13499, function(_, callback) {
  var root8187 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root8187); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6217;
  nodes6217 = node.contents();
  oldNodes.replaceWith(nodes6217);
}));

var tmp13500 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp13500.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
  tmp13500.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp13500.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes6218 = $("<span>");
root8186.append(nodes6218);
subs__.addSub((ui.tabSet)(tmp13500, function(_, callback) {
  var root8188 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root8188); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6218;
  nodes6218 = node.contents();
  oldNodes.replaceWith(nodes6218);
}));
callback(root8186); return subs__;


return subs__;
};
