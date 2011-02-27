mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root13351 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp19054 = mobl.ref("Ken");


var tmp19055 = mobl.ref(null);

var nodes9707 = $("<span>");
root13351.append(nodes9707);
subs__.addSub((ui.header)(tmp19054, tmp19055, function(_, callback) {
  var root13352 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root13352); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9707;
  nodes9707 = node.contents();
  oldNodes.replaceWith(nodes9707);
}));

var tmp19056 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp19056.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
  tmp19056.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp19056.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes9708 = $("<span>");
root13351.append(nodes9708);
subs__.addSub((ui.customTabSet)(tmp19056, function(_, callback) {
  var root13353 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root13353); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9708;
  nodes9708 = node.contents();
  oldNodes.replaceWith(nodes9708);
}));
callback(root13351); return subs__;


return subs__;
};
