mobl.provides('ken');

ken.root = function(callback, screenCallback) {
var root765 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp1569 = mobl.ref("Ken");


var tmp1570 = mobl.ref(null);

var nodes677 = $("<span>");
root765.append(nodes677);
subs__.addSub((ui.header)(tmp1569, tmp1570, function(_, callback) {
  var root766 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root766); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes677;
  nodes677 = node.contents();
  oldNodes.replaceWith(nodes677);
}));

var tmp1571 = mobl.ref([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
subs__.addSub(mobl.ref(controls.remindme.remindMe).addEventListener('change', function() {
  tmp1571.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));
subs__.addSub(mobl.ref(controls.moodometer.moodoMeter).addEventListener('change', function() {
  tmp1571.set([new mobl.Tuple("Remind Me", "", controls.remindme.remindMe), new mobl.Tuple("Moodometer", "", controls.moodometer.moodoMeter)]);
}));

var nodes678 = $("<span>");
root765.append(nodes678);
subs__.addSub((ui.tabSet)(tmp1571, function(_, callback) {
  var root767 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root767); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes678;
  nodes678 = node.contents();
  oldNodes.replaceWith(nodes678);
}));
callback(root765); return subs__;


return subs__;
};
