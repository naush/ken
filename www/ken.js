mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root5505 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp5304 = mobl.ref("Ken");


var tmp5305 = mobl.ref(null);

var nodes3606 = $("<span>");
root5505.append(nodes3606);
subs__.addSub((mobl.ui.generic.header)(tmp5304, tmp5305, function(_, callback) {
  var root5506 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5506); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3606;
  nodes3606 = node.contents();
  oldNodes.replaceWith(nodes3606);
}));

var tmp5306 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp5306.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp5306.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes3607 = $("<span>");
root5505.append(nodes3607);
subs__.addSub((mobl.ui.generic.tabSet)(tmp5306, function(_, callback) {
  var root5507 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5507); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3607;
  nodes3607 = node.contents();
  oldNodes.replaceWith(nodes3607);
}));
callback(root5505); return subs__;


return subs__;
};
