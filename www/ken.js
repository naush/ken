mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root9116 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp14615 = mobl.ref("Ken");


var tmp14616 = mobl.ref(null);

var nodes6874 = $("<span>");
root9116.append(nodes6874);
subs__.addSub((ui.header)(tmp14615, tmp14616, function(_, callback) {
  var root9117 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root9117); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6874;
  nodes6874 = node.contents();
  oldNodes.replaceWith(nodes6874);
}));

var tmp14617 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp14617.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
  tmp14617.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp14617.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes6875 = $("<span>");
root9116.append(nodes6875);
subs__.addSub((ui.tabSet)(tmp14617, function(_, callback) {
  var root9118 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root9118); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6875;
  nodes6875 = node.contents();
  oldNodes.replaceWith(nodes6875);
}));
callback(root9116); return subs__;


return subs__;
};
