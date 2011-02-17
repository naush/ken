mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root4339 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp4128 = mobl.ref("Ken");


var tmp4129 = mobl.ref(null);

var nodes2831 = $("<span>");
root4339.append(nodes2831);
subs__.addSub((mobl.ui.generic.header)(tmp4128, tmp4129, function(_, callback) {
  var root4340 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root4340); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes2831;
  nodes2831 = node.contents();
  oldNodes.replaceWith(nodes2831);
}));

var tmp4130 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp4130.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp4130.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes2832 = $("<span>");
root4339.append(nodes2832);
subs__.addSub((mobl.ui.generic.tabSet)(tmp4130, function(_, callback) {
  var root4341 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root4341); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes2832;
  nodes2832 = node.contents();
  oldNodes.replaceWith(nodes2832);
}));
callback(root4339); return subs__;


return subs__;
};
