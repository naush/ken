mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root6388 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp11669 = mobl.ref("Ken");


var tmp11670 = mobl.ref(null);

var nodes5006 = $("<span>");
root6388.append(nodes5006);
subs__.addSub((ui.header)(tmp11669, tmp11670, function(_, callback) {
  var root6389 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6389); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5006;
  nodes5006 = node.contents();
  oldNodes.replaceWith(nodes5006);
}));

var tmp11671 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp11671.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.life.life).addEventListener('change', function() {
  tmp11671.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp11671.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Life", "", controls.life.life), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes5007 = $("<span>");
root6388.append(nodes5007);
subs__.addSub((ui.tabSet)(tmp11671, function(_, callback) {
  var root6390 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6390); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes5007;
  nodes5007 = node.contents();
  oldNodes.replaceWith(nodes5007);
}));
callback(root6388); return subs__;


return subs__;
};
