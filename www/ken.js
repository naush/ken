mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root6552 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp11839 = mobl.ref("Ken");


var tmp11840 = mobl.ref(null);

var nodes5116 = $("<span>");
root6552.append(nodes5116);
subs__.addSub((ui.header)(tmp11839, tmp11840, function(_, callback) {
  var root6553 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6553); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5116;
  nodes5116 = node.contents();
  oldNodes.replaceWith(nodes5116);
}));

var tmp11841 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp11841.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
  tmp11841.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp11841.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes5117 = $("<span>");
root6552.append(nodes5117);
subs__.addSub((ui.tabSet)(tmp11841, function(_, callback) {
  var root6554 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6554); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5117;
  nodes5117 = node.contents();
  oldNodes.replaceWith(nodes5117);
}));
callback(root6552); return subs__;


return subs__;
};
