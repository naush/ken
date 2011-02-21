mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root6438 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp11717 = mobl.ref("Ken");


var tmp11718 = mobl.ref(null);

var nodes5040 = $("<span>");
root6438.append(nodes5040);
subs__.addSub((ui.header)(tmp11717, tmp11718, function(_, callback) {
  var root6439 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6439); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5040;
  nodes5040 = node.contents();
  oldNodes.replaceWith(nodes5040);
}));

var tmp11719 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp11719.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
  tmp11719.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp11719.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes5041 = $("<span>");
root6438.append(nodes5041);
subs__.addSub((ui.tabSet)(tmp11719, function(_, callback) {
  var root6440 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6440); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5041;
  nodes5041 = node.contents();
  oldNodes.replaceWith(nodes5041);
}));
callback(root6438); return subs__;


return subs__;
};
