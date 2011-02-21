mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
var root6300 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1662 = $("<span>");
root6300.append(node1662);
var condSubs237 = new mobl.CompSubscription();
subs__.addSub(condSubs237);
var oldValue237;
var renderCond237 = function() {
  var value549 = value.get();
  if(oldValue237 === value549) return;
  oldValue237 = value549;
  var subs__ = condSubs237;
  subs__.unsubscribe();
  node1662.empty();
  if(value549) {
    var nodes4949 = $("<span>");
    node1662.append(nodes4949);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl822();
    }));
    
    function renderControl822() {
      subs__.addSub((elements)(function(elements, callback) {
        var root6301 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6301); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4949;
        nodes4949 = node.contents();
        oldNodes.replaceWith(nodes4949);
      }));
    }
    renderControl822();
    
    
  } else {
    
    var tmp11596 = mobl.ref(null);
    
    
    var tmp11595 = mobl.ref(null);
    
    var nodes4950 = $("<span>");
    node1662.append(nodes4950);
    subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp11595, tmp11596, function(_, callback) {
      var root6302 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root6302.append("Loading...");
      
      var tmp11589 = mobl.ref("middle");
      
      
      var tmp11588 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp11594 = mobl.ref(null);
      
      
      var tmp11593 = mobl.ref(null);
      
      
      var tmp11592 = mobl.ref(null);
      
      
      var tmp11591 = mobl.ref(null);
      
      
      var tmp11590 = mobl.ref(null);
      
      var nodes4951 = $("<span>");
      root6302.append(nodes4951);
      subs__.addSub((ui.image)(tmp11588, tmp11590, tmp11591, tmp11592, tmp11593, tmp11589, tmp11594, function(_, callback) {
        var root6303 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6303); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4951;
        nodes4951 = node.contents();
        oldNodes.replaceWith(nodes4951);
      }));
      callback(root6302); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4950;
      nodes4950 = node.contents();
      oldNodes.replaceWith(nodes4950);
    }));
    
    
  }
};
renderCond237();
subs__.addSub(value.addEventListener('change', function() {
  renderCond237();
}));

callback(root6300); return subs__;

return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
var root6304 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1663 = $("<div>");

var ref1624 = mobl.ref(ui.headerStyle);
if(ref1624.get() !== null) {
  node1663.attr('class', ref1624.get());
  subs__.addSub(ref1624.addEventListener('change', function(_, ref, val) {
    if(ref === ref1624) {
      node1663.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1624.rebind());

var val859 = onclick.get();
if(val859 !== null) {
  subs__.addSub(mobl.domBind(node1663, 'tap', val859));
}


var node1664 = $("<div>");

var ref1623 = mobl.ref(ui.headerContainerStyle);
if(ref1623.get() !== null) {
  node1664.attr('class', ref1623.get());
  subs__.addSub(ref1623.addEventListener('change', function(_, ref, val) {
    if(ref === ref1623) {
      node1664.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1623.rebind());


var node1665 = $("<div>");

var ref1621 = text;
node1665.text(""+ref1621.get());
var ignore331 = false;
subs__.addSub(ref1621.addEventListener('change', function(_, ref, val) {
  if(ignore331) return;
  node1665.text(""+val);
}));
subs__.addSub(ref1621.rebind());


var ref1622 = mobl.ref(ui.headerTextStyle);
if(ref1622.get() !== null) {
  node1665.attr('class', ref1622.get());
  subs__.addSub(ref1622.addEventListener('change', function(_, ref, val) {
    if(ref === ref1622) {
      node1665.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1622.rebind());

node1664.append(node1665);
node1663.append(node1664);
var nodes4952 = $("<span>");
node1663.append(nodes4952);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl823();
}));

function renderControl823() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6305 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6305); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4952;
    nodes4952 = node.contents();
    oldNodes.replaceWith(nodes4952);
  }));
}
renderControl823();
root6304.append(node1663);
callback(root6304); return subs__;




return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root6306 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref1625 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref1625.get() !== null) {
  sp.attr('class', ref1625.get());
  subs__.addSub(ref1625.addEventListener('change', function(_, ref, val) {
    if(ref === ref1625) {
      sp.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  subs__.addSub(pushed.addEventListener('change', function() {
    sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
  }));
  subs__.addSub(pushedStyle.addEventListener('change', function() {
    sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
  }));
  subs__.addSub(style.addEventListener('change', function() {
    sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
  }));
  
}
subs__.addSub(ref1625.rebind());

var val860 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val860 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val860));
}

var val861 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val861 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val861));
}

var val862 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after99(result__) {
                  var tmp11657 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after99);if(result__ !== undefined) after99(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val862 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val862));
}

var val863 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val863 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val863));
}

var ref1626 = text;
sp.text(""+ref1626.get());
var ignore332 = false;
subs__.addSub(ref1626.addEventListener('change', function(_, ref, val) {
  if(ignore332) return;
  sp.text(""+val);
}));
subs__.addSub(ref1626.rebind());


root6306.append(sp);
callback(root6306); return subs__;

return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root6307 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes4953 = $("<span>");
root6307.append(nodes4953);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root6308 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6308); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4953;
  nodes4953 = node.contents();
  oldNodes.replaceWith(nodes4953);
}));
callback(root6307); return subs__;

return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root6309 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes4954 = $("<span>");
root6309.append(nodes4954);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root6310 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6310); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4954;
  nodes4954 = node.contents();
  oldNodes.replaceWith(nodes4954);
}));
callback(root6309); return subs__;

return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
var root6311 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1666 = $("<div>");

var ref1627 = id;
if(ref1627.get() !== null) {
  node1666.attr('id', ref1627.get());
  subs__.addSub(ref1627.addEventListener('change', function(_, ref, val) {
    if(ref === ref1627) {
      node1666.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1627.rebind());

var ref1628 = cssClass;
if(ref1628.get() !== null) {
  node1666.attr('class', ref1628.get());
  subs__.addSub(ref1628.addEventListener('change', function(_, ref, val) {
    if(ref === ref1628) {
      node1666.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1628.rebind());

var val864 = onclick.get();
if(val864 !== null) {
  subs__.addSub(mobl.domBind(node1666, 'tap', val864));
}

var nodes4955 = $("<span>");
node1666.append(nodes4955);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl824();
}));

function renderControl824() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6312 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6312); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4955;
    nodes4955 = node.contents();
    oldNodes.replaceWith(nodes4955);
  }));
}
renderControl824();
root6311.append(node1666);
callback(root6311); return subs__;


return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
var root6313 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1667 = $("<span>");

var ref1629 = id;
if(ref1629.get() !== null) {
  node1667.attr('id', ref1629.get());
  subs__.addSub(ref1629.addEventListener('change', function(_, ref, val) {
    if(ref === ref1629) {
      node1667.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1629.rebind());

var ref1630 = cssClass;
if(ref1630.get() !== null) {
  node1667.attr('class', ref1630.get());
  subs__.addSub(ref1630.addEventListener('change', function(_, ref, val) {
    if(ref === ref1630) {
      node1667.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1630.rebind());

var val865 = onclick.get();
if(val865 !== null) {
  subs__.addSub(mobl.domBind(node1667, 'tap', val865));
}

var nodes4956 = $("<span>");
node1667.append(nodes4956);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl825();
}));

function renderControl825() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6314 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6314); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4956;
    nodes4956 = node.contents();
    oldNodes.replaceWith(nodes4956);
  }));
}
renderControl825();
root6313.append(node1667);
callback(root6313); return subs__;


return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
var root6315 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1668 = $("<ul>");

var ref1631 = mobl.ref(ui.groupStyle);
if(ref1631.get() !== null) {
  node1668.attr('class', ref1631.get());
  subs__.addSub(ref1631.addEventListener('change', function(_, ref, val) {
    if(ref === ref1631) {
      node1668.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1631.rebind());

var nodes4957 = $("<span>");
node1668.append(nodes4957);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl826();
}));

function renderControl826() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6316 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6316); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4957;
    nodes4957 = node.contents();
    oldNodes.replaceWith(nodes4957);
  }));
}
renderControl826();
root6315.append(node1668);
callback(root6315); return subs__;


return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root6317 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1669 = $("<img>");

var ref1632 = url;
if(ref1632.get() !== null) {
  node1669.attr('src', ref1632.get());
  subs__.addSub(ref1632.addEventListener('change', function(_, ref, val) {
    if(ref === ref1632) {
      node1669.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1632.rebind());

var ref1633 = width;
if(ref1633.get() !== null) {
  node1669.attr('width', ref1633.get());
  subs__.addSub(ref1633.addEventListener('change', function(_, ref, val) {
    if(ref === ref1633) {
      node1669.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1633.rebind());

var ref1634 = height;
if(ref1634.get() !== null) {
  node1669.attr('height', ref1634.get());
  subs__.addSub(ref1634.addEventListener('change', function(_, ref, val) {
    if(ref === ref1634) {
      node1669.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1634.rebind());

var ref1635 = style;
if(ref1635.get() !== null) {
  node1669.attr('class', ref1635.get());
  subs__.addSub(ref1635.addEventListener('change', function(_, ref, val) {
    if(ref === ref1635) {
      node1669.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1635.rebind());

var val866 = onclick.get();
if(val866 !== null) {
  subs__.addSub(mobl.domBind(node1669, 'tap', val866));
}

var ref1636 = valign;
if(ref1636.get() !== null) {
  node1669.attr('valign', ref1636.get());
  subs__.addSub(ref1636.addEventListener('change', function(_, ref, val) {
    if(ref === ref1636) {
      node1669.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1636.rebind());

var ref1637 = align;
if(ref1637.get() !== null) {
  node1669.attr('align', ref1637.get());
  subs__.addSub(ref1637.addEventListener('change', function(_, ref, val) {
    if(ref === ref1637) {
      node1669.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1637.rebind());

root6317.append(node1669);
callback(root6317); return subs__;

return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root6318 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref1638 = mobl.ref(ui.itemStyle);
if(ref1638.get() !== null) {
  el.attr('class', ref1638.get());
  subs__.addSub(ref1638.addEventListener('change', function(_, ref, val) {
    if(ref === ref1638) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1638.rebind());

var ref1639 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref1639.get() !== null) {
  el.attr('class', ref1639.get());
  subs__.addSub(ref1639.addEventListener('change', function(_, ref, val) {
    if(ref === ref1639) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  subs__.addSub(onclick.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(hideArrow.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushed.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushedStyle.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(style.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  
}
subs__.addSub(ref1639.rebind());

var val867 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp11658 = result__;
                                         function after100(result__) {
                                           var tmp11659 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after100);if(result__ !== undefined) after100(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp11660 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val867 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val867));
}

var nodes4958 = $("<span>");
el.append(nodes4958);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl827();
}));

function renderControl827() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6319 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6319); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4958;
    nodes4958 = node.contents();
    oldNodes.replaceWith(nodes4958);
  }));
}
renderControl827();
root6318.append(el);
callback(root6318); return subs__;


return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
var root6320 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1670 = $("<input>");
node1670.attr('type', "checkbox");

var ref1641 = b;
node1670.attr('checked', !!ref1641.get());
subs__.addSub(ref1641.addEventListener('change', function(_, ref, val) {
  if(ref === ref1641) node1670.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node1670, 'change', function() {
  b.set(!!node1670.attr('checked'));
}));

var val869 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val869 !== null) {
  subs__.addSub(mobl.domBind(node1670, 'tap', val869));
}

var val870 = onchange.get();
if(val870 !== null) {
  subs__.addSub(mobl.domBind(node1670, 'change', val870));
}

root6320.append(node1670);

root6320.append(" ");

var node1671 = $("<span>");

var ref1640 = label;
node1671.text(""+ref1640.get());
var ignore333 = false;
subs__.addSub(ref1640.addEventListener('change', function(_, ref, val) {
  if(ignore333) return;
  node1671.text(""+val);
}));
subs__.addSub(ref1640.rebind());


var val868 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after101(result__) {
                  var tmp11661 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after101);if(result__ !== undefined) after101(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val868 !== null) {
  subs__.addSub(mobl.domBind(node1671, 'tap', val868));
}

root6320.append(node1671);
callback(root6320); return subs__;


return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root6321 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1672 = $("<span>");
root6321.append(node1672);
var condSubs238 = new mobl.CompSubscription();
subs__.addSub(condSubs238);
var oldValue238;
var renderCond238 = function() {
  var value550 = label.get();
  if(oldValue238 === value550) return;
  oldValue238 = value550;
  var subs__ = condSubs238;
  subs__.unsubscribe();
  node1672.empty();
  if(value550) {
    
    var node1673 = $("<span>");
    node1673.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref1645 = label;
    node1673.text(""+ref1645.get());
    var ignore335 = false;
    subs__.addSub(ref1645.addEventListener('change', function(_, ref, val) {
      if(ignore335) return;
      node1673.text(""+val);
    }));
    subs__.addSub(ref1645.rebind());
    
    
    node1672.append(node1673);
    
    var node1674 = $("<span>");
    node1674.attr('style', "float: left");
    
    
    var node1675 = $("<input>");
    node1675.attr('type', "text");
    
    var ref1642 = mobl.ref(ui.textFieldStyle);
    if(ref1642.get() !== null) {
      node1675.attr('class', ref1642.get());
      subs__.addSub(ref1642.addEventListener('change', function(_, ref, val) {
        if(ref === ref1642) {
          node1675.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1642.rebind());
    
    var ref1643 = placeholder;
    if(ref1643.get() !== null) {
      node1675.attr('placeholder', ref1643.get());
      subs__.addSub(ref1643.addEventListener('change', function(_, ref, val) {
        if(ref === ref1643) {
          node1675.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1643.rebind());
    
    var ref1644 = s;
    node1675.val(""+ref1644.get());
    var ignore334 = false;
    subs__.addSub(ref1644.addEventListener('change', function(_, ref, val) {
      if(ignore334) return;
      node1675.val(""+val);
    }));
    subs__.addSub(ref1644.rebind());
    
    subs__.addSub(mobl.domBind(node1675, 'keyup change', function() {
      ignore334 = true;
      s.set(mobl.stringTomobl__String(node1675.val()));
      ignore334 = false;
    }));
    
    
    var val871 = onchange.get();
    if(val871 !== null) {
      subs__.addSub(mobl.domBind(node1675, 'change', val871));
    }
    
    var val872 = onkeyup.get();
    if(val872 !== null) {
      subs__.addSub(mobl.domBind(node1675, 'keyup', val872));
    }
    
    var val873 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val873 !== null) {
      subs__.addSub(mobl.domBind(node1675, 'blur', val873));
    }
    
    node1674.append(node1675);
    node1672.append(node1674);
    
    
    
    
  } else {
    
    var node1676 = $("<input>");
    node1676.attr('type', "text");
    
    var ref1646 = mobl.ref(ui.textFieldStyle);
    if(ref1646.get() !== null) {
      node1676.attr('class', ref1646.get());
      subs__.addSub(ref1646.addEventListener('change', function(_, ref, val) {
        if(ref === ref1646) {
          node1676.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1646.rebind());
    
    var ref1647 = placeholder;
    if(ref1647.get() !== null) {
      node1676.attr('placeholder', ref1647.get());
      subs__.addSub(ref1647.addEventListener('change', function(_, ref, val) {
        if(ref === ref1647) {
          node1676.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1647.rebind());
    
    var ref1648 = s;
    node1676.val(""+ref1648.get());
    var ignore336 = false;
    subs__.addSub(ref1648.addEventListener('change', function(_, ref, val) {
      if(ignore336) return;
      node1676.val(""+val);
    }));
    subs__.addSub(ref1648.rebind());
    
    subs__.addSub(mobl.domBind(node1676, 'keyup change', function() {
      ignore336 = true;
      s.set(mobl.stringTomobl__String(node1676.val()));
      ignore336 = false;
    }));
    
    
    var val874 = onchange.get();
    if(val874 !== null) {
      subs__.addSub(mobl.domBind(node1676, 'change', val874));
    }
    
    var val875 = onkeyup.get();
    if(val875 !== null) {
      subs__.addSub(mobl.domBind(node1676, 'keyup', val875));
    }
    
    var val876 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val876 !== null) {
      subs__.addSub(mobl.domBind(node1676, 'blur', val876));
    }
    
    node1672.append(node1676);
    
    
  }
};
renderCond238();
subs__.addSub(label.addEventListener('change', function() {
  renderCond238();
}));

callback(root6321); return subs__;

return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
var root6322 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1677 = $("<span>");
root6322.append(node1677);
var condSubs239 = new mobl.CompSubscription();
subs__.addSub(condSubs239);
var oldValue239;
var renderCond239 = function() {
  var value551 = label.get();
  if(oldValue239 === value551) return;
  oldValue239 = value551;
  var subs__ = condSubs239;
  subs__.unsubscribe();
  node1677.empty();
  if(value551) {
    
    var node1678 = $("<span>");
    node1678.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref1652 = label;
    node1678.text(""+ref1652.get());
    var ignore338 = false;
    subs__.addSub(ref1652.addEventListener('change', function(_, ref, val) {
      if(ignore338) return;
      node1678.text(""+val);
    }));
    subs__.addSub(ref1652.rebind());
    
    
    node1677.append(node1678);
    
    var node1679 = $("<span>");
    node1679.attr('style', "float: left");
    
    
    var node1680 = $("<input>");
    node1680.attr('type', "text");
    
    var ref1649 = mobl.ref(ui.textFieldStyle);
    if(ref1649.get() !== null) {
      node1680.attr('class', ref1649.get());
      subs__.addSub(ref1649.addEventListener('change', function(_, ref, val) {
        if(ref === ref1649) {
          node1680.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1649.rebind());
    
    var ref1650 = placeholder;
    if(ref1650.get() !== null) {
      node1680.attr('placeholder', ref1650.get());
      subs__.addSub(ref1650.addEventListener('change', function(_, ref, val) {
        if(ref === ref1650) {
          node1680.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1650.rebind());
    
    var ref1651 = n;
    node1680.val(""+ref1651.get());
    var ignore337 = false;
    subs__.addSub(ref1651.addEventListener('change', function(_, ref, val) {
      if(ignore337) return;
      node1680.val(""+val);
    }));
    subs__.addSub(ref1651.rebind());
    
    subs__.addSub(mobl.domBind(node1680, 'keyup change', function() {
      ignore337 = true;
      n.set(mobl.stringTomobl__Num(node1680.val()));
      ignore337 = false;
    }));
    
    
    var val877 = onchange.get();
    if(val877 !== null) {
      subs__.addSub(mobl.domBind(node1680, 'change', val877));
    }
    
    var val878 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val878 !== null) {
      subs__.addSub(mobl.domBind(node1680, 'blur', val878));
    }
    
    node1679.append(node1680);
    node1677.append(node1679);
    
    
    
    
  } else {
    
    var node1681 = $("<input>");
    node1681.attr('type', "text");
    
    var ref1653 = mobl.ref(ui.textFieldStyle);
    if(ref1653.get() !== null) {
      node1681.attr('class', ref1653.get());
      subs__.addSub(ref1653.addEventListener('change', function(_, ref, val) {
        if(ref === ref1653) {
          node1681.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1653.rebind());
    
    var ref1654 = placeholder;
    if(ref1654.get() !== null) {
      node1681.attr('placeholder', ref1654.get());
      subs__.addSub(ref1654.addEventListener('change', function(_, ref, val) {
        if(ref === ref1654) {
          node1681.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1654.rebind());
    
    var ref1655 = n;
    node1681.val(""+ref1655.get());
    var ignore339 = false;
    subs__.addSub(ref1655.addEventListener('change', function(_, ref, val) {
      if(ignore339) return;
      node1681.val(""+val);
    }));
    subs__.addSub(ref1655.rebind());
    
    subs__.addSub(mobl.domBind(node1681, 'keyup change', function() {
      ignore339 = true;
      n.set(mobl.stringTomobl__Num(node1681.val()));
      ignore339 = false;
    }));
    
    
    var val879 = onchange.get();
    if(val879 !== null) {
      subs__.addSub(mobl.domBind(node1681, 'change', val879));
    }
    
    var val880 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val880 !== null) {
      subs__.addSub(mobl.domBind(node1681, 'blur', val880));
    }
    
    node1677.append(node1681);
    
    
  }
};
renderCond239();
subs__.addSub(label.addEventListener('change', function() {
  renderCond239();
}));

callback(root6322); return subs__;

return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
var root6323 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp11603 = mobl.ref(null);


var tmp11602 = mobl.ref(null);

var nodes4959 = $("<span>");
root6323.append(nodes4959);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp11602, tmp11603, function(_, callback) {
  var root6324 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1682 = mobl.loadingSpan();
  root6324.append(node1682);
  var list342;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList342 = function() {
    var subs__ = listSubs__;
    list342 = tabs.get();
    list342.list(function(results378) {
      node1682.empty();
      for(var i347 = 0; i347 < results378.length; i347++) {
        (function() {
          var iternode342 = $("<span>");
          node1682.append(iternode342);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results378), i347), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results378), i347), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results378), i347), "_3");
          
          var tmp11600 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp11600.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp11600.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp11600.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp11600.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp11599 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp11601 = mobl.ref(null);
          
          var nodes4960 = $("<span>");
          iternode342.append(nodes4960);
          subs__.addSub((ui.span)(tmp11600, tmp11601, tmp11599, function(_, callback) {
            var root6325 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp11598 = mobl.ref(null);
            
            
            var tmp11597 = mobl.ref(null);
            
            var nodes4961 = $("<span>");
            root6325.append(nodes4961);
            subs__.addSub((mobl.label)(tabName, tmp11597, tmp11598, function(_, callback) {
              var root6326 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6326); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4961;
              nodes4961 = node.contents();
              oldNodes.replaceWith(nodes4961);
            }));
            callback(root6325); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4960;
            nodes4960 = node.contents();
            oldNodes.replaceWith(nodes4960);
          }));
          
          var oldNodes = iternode342;
          iternode342 = iternode342.contents();
          oldNodes.replaceWith(iternode342);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list342.addEventListener('change', function() { listSubs__.unsubscribe(); renderList342(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList342(true); }));
    });
  };
  renderList342();
  
  callback(root6324); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4959;
  nodes4959 = node.contents();
  oldNodes.replaceWith(nodes4959);
}));

var node1683 = mobl.loadingSpan();
root6323.append(node1683);
var list343;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList343 = function() {
  var subs__ = listSubs__;
  list343 = tabs.get();
  list343.list(function(results379) {
    node1683.empty();
    for(var i348 = 0; i348 < results379.length; i348++) {
      (function() {
        var iternode343 = $("<span>");
        node1683.append(iternode343);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results379), i348), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results379), i348), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results379), i348), "_3");
        
        var tmp11604 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp11604.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp11604.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp11604.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp11604.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp11606 = mobl.ref(null);
        
        
        var tmp11605 = mobl.ref(null);
        
        var nodes4962 = $("<span>");
        iternode343.append(nodes4962);
        subs__.addSub((ui.block)(tmp11604, tmp11605, tmp11606, function(_, callback) {
          var root6327 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes4963 = $("<span>");
          root6327.append(nodes4963);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root6328 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes4964 = $("<span>");
            root6328.append(nodes4964);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl828();
            }));
            
            function renderControl828() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root6329 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6329); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4964;
                nodes4964 = node.contents();
                oldNodes.replaceWith(nodes4964);
              }));
            }
            renderControl828();
            callback(root6328); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4963;
            nodes4963 = node.contents();
            oldNodes.replaceWith(nodes4963);
          }));
          callback(root6327); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4962;
          nodes4962 = node.contents();
          oldNodes.replaceWith(nodes4962);
        }));
        
        var oldNodes = iternode343;
        iternode343 = iternode343.contents();
        oldNodes.replaceWith(iternode343);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list343.addEventListener('change', function() { listSubs__.unsubscribe(); renderList343(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList343(true); }));
  });
};
renderList343();

callback(root6323); return subs__;


return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root6330 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1684 = $("<div>");

var ref1659 = mobl.ref(ui.searchboxStyle);
if(ref1659.get() !== null) {
  node1684.attr('class', ref1659.get());
  subs__.addSub(ref1659.addEventListener('change', function(_, ref, val) {
    if(ref === ref1659) {
      node1684.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1659.rebind());


var node1685 = $("<input>");
node1685.attr('type', "text");

var ref1656 = mobl.ref(ui.searchBoxInputStyle);
if(ref1656.get() !== null) {
  node1685.attr('class', ref1656.get());
  subs__.addSub(ref1656.addEventListener('change', function(_, ref, val) {
    if(ref === ref1656) {
      node1685.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1656.rebind());

var ref1657 = placeholder;
if(ref1657.get() !== null) {
  node1685.attr('placeholder', ref1657.get());
  subs__.addSub(ref1657.addEventListener('change', function(_, ref, val) {
    if(ref === ref1657) {
      node1685.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1657.rebind());

var ref1658 = s;
node1685.val(""+ref1658.get());
var ignore340 = false;
subs__.addSub(ref1658.addEventListener('change', function(_, ref, val) {
  if(ignore340) return;
  node1685.val(""+val);
}));
subs__.addSub(ref1658.rebind());

subs__.addSub(mobl.domBind(node1685, 'keyup change', function() {
  ignore340 = true;
  s.set(mobl.stringTomobl__String(node1685.val()));
  ignore340 = false;
}));


var val881 = onsearch.get();
if(val881 !== null) {
  subs__.addSub(mobl.domBind(node1685, 'change', val881));
}

var val882 = onkeyup.get();
if(val882 !== null) {
  subs__.addSub(mobl.domBind(node1685, 'keyup', val882));
}
node1685.attr('autocorrect', "off");
node1685.attr('autocapitalize', "off");
node1685.attr('autocomplete', "off");

node1684.append(node1685);
root6330.append(node1684);
callback(root6330); return subs__;


return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
var root6331 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref1660 = mobl.ref(ui.contextMenuStyle);
if(ref1660.get() !== null) {
  menu.attr('class', ref1660.get());
  subs__.addSub(ref1660.addEventListener('change', function(_, ref, val) {
    if(ref === ref1660) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1660.rebind());

var nodes4965 = $("<span>");
menu.append(nodes4965);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl829();
}));

function renderControl829() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6332 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6332); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4965;
    nodes4965 = node.contents();
    oldNodes.replaceWith(nodes4965);
  }));
}
renderControl829();
root6331.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val883 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp11664 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val883 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val883));
}

root6331.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root6331); return subs__;



return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
var root6333 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp11656 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp11656.set(mobl.window.get().innerWidth > 500);
}));


var node1686 = $("<span>");
root6333.append(node1686);
var condSubs240 = new mobl.CompSubscription();
subs__.addSub(condSubs240);
var oldValue240;
var renderCond240 = function() {
  var value552 = tmp11656.get();
  if(oldValue240 === value552) return;
  oldValue240 = value552;
  var subs__ = condSubs240;
  subs__.unsubscribe();
  node1686.empty();
  if(value552) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node1687 = $("<div>");
      node1687.attr('width', "100%");
      
      
      var node1688 = $("<div>");
      node1688.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes4967 = $("<span>");
      node1688.append(nodes4967);
      subs__.addSub((ui.group)(function(_, callback) {
        var root6335 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1690 = mobl.loadingSpan();
        root6335.append(node1690);
        var list344;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList344 = function() {
          var subs__ = listSubs__;
          list344 = items.get();
          list344.list(function(results380) {
            node1690.empty();
            for(var i349 = 0; i349 < results380.length; i349++) {
              (function() {
                var iternode344 = $("<span>");
                node1690.append(iternode344);
                var it;
                it = mobl.ref(mobl.ref(results380), i349);
                
                var tmp11620 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp11620.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp11620.set(it.get() == current.get());
                }));
                
                
                var node1691 = $("<span>");
                iternode344.append(node1691);
                var condSubs241 = new mobl.CompSubscription();
                subs__.addSub(condSubs241);
                var oldValue241;
                var renderCond241 = function() {
                  var value553 = tmp11620.get();
                  if(oldValue241 === value553) return;
                  oldValue241 = value553;
                  var subs__ = condSubs241;
                  subs__.unsubscribe();
                  node1691.empty();
                  if(value553) {
                    
                    var tmp11616 = mobl.ref(false);
                    
                    
                    var tmp11615 = mobl.ref(null);
                    
                    
                    var tmp11614 = mobl.ref(null);
                    
                    var nodes4968 = $("<span>");
                    node1691.append(nodes4968);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp11614, tmp11615, tmp11616, function(_, callback) {
                      var root6336 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes4969 = $("<span>");
                      root6336.append(nodes4969);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl831();
                      }));
                      
                      function renderControl831() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root6337 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6337); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4969;
                          nodes4969 = node.contents();
                          oldNodes.replaceWith(nodes4969);
                        }));
                      }
                      renderControl831();
                      callback(root6336); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4968;
                      nodes4968 = node.contents();
                      oldNodes.replaceWith(nodes4968);
                    }));
                    
                    
                  } else {
                    
                    var tmp11618 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp11617 = mobl.ref(true);
                    
                    
                    var tmp11619 = mobl.ref(null);
                    
                    var nodes4970 = $("<span>");
                    node1691.append(nodes4970);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11618, tmp11619, tmp11617, function(_, callback) {
                      var root6338 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes4971 = $("<span>");
                      root6338.append(nodes4971);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl832();
                      }));
                      
                      function renderControl832() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root6339 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6339); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4971;
                          nodes4971 = node.contents();
                          oldNodes.replaceWith(nodes4971);
                        }));
                      }
                      renderControl832();
                      callback(root6338); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4970;
                      nodes4970 = node.contents();
                      oldNodes.replaceWith(nodes4970);
                    }));
                    
                    
                  }
                };
                renderCond241();
                subs__.addSub(tmp11620.addEventListener('change', function() {
                  renderCond241();
                }));
                
                
                var oldNodes = iternode344;
                iternode344 = iternode344.contents();
                oldNodes.replaceWith(iternode344);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list344.addEventListener('change', function() { listSubs__.unsubscribe(); renderList344(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList344(true); }));
          });
        };
        renderList344();
        
        callback(root6335); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4967;
        nodes4967 = node.contents();
        oldNodes.replaceWith(nodes4967);
      }));
      node1687.append(node1688);
      
      var node1689 = $("<div>");
      node1689.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes4966 = $("<span>");
      node1689.append(nodes4966);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl830();
      }));
      
      function renderControl830() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root6334 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6334); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4966;
          nodes4966 = node.contents();
          oldNodes.replaceWith(nodes4966);
        }));
      }
      renderControl830();
      node1687.append(node1689);
      node1686.append(node1687);
      
      
      
      
      
      
    });
  } else {
    var nodes4972 = $("<span>");
    node1686.append(nodes4972);
    subs__.addSub((ui.group)(function(_, callback) {
      var root6340 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1692 = mobl.loadingSpan();
      root6340.append(node1692);
      var list345;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList345 = function() {
        var subs__ = listSubs__;
        list345 = items.get();
        list345.list(function(results381) {
          node1692.empty();
          for(var i350 = 0; i350 < results381.length; i350++) {
            (function() {
              var iternode345 = $("<span>");
              node1692.append(iternode345);
              var it;
              it = mobl.ref(mobl.ref(results381), i350);
              
              var tmp11607 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                   var tmp11665 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp11609 = mobl.ref(false);
              
              
              var tmp11608 = mobl.ref(null);
              
              var nodes4973 = $("<span>");
              iternode345.append(nodes4973);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11607, tmp11608, tmp11609, function(_, callback) {
                var root6341 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4974 = $("<span>");
                root6341.append(nodes4974);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl833();
                }));
                
                function renderControl833() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root6342 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6342); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4974;
                    nodes4974 = node.contents();
                    oldNodes.replaceWith(nodes4974);
                  }));
                }
                renderControl833();
                callback(root6341); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4973;
                nodes4973 = node.contents();
                oldNodes.replaceWith(nodes4973);
              }));
              
              var oldNodes = iternode345;
              iternode345 = iternode345.contents();
              oldNodes.replaceWith(iternode345);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list345.addEventListener('change', function() { listSubs__.unsubscribe(); renderList345(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList345(true); }));
        });
      };
      renderList345();
      
      callback(root6340); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4972;
      nodes4972 = node.contents();
      oldNodes.replaceWith(nodes4972);
    }));
    
    
  }
};
renderCond240();
subs__.addSub(tmp11656.addEventListener('change', function() {
  renderCond240();
}));

callback(root6333); return subs__;

return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
var root6343 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp11612 = mobl.ref("Detail");


var tmp11613 = mobl.ref(null);

var nodes4975 = $("<span>");
root6343.append(nodes4975);
subs__.addSub((ui.header)(tmp11612, tmp11613, function(_, callback) {
  var root6344 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11611 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp11610 = mobl.ref("Back");
  
  var nodes4976 = $("<span>");
  root6344.append(nodes4976);
  subs__.addSub((ui.backButton)(tmp11610, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp11611, function(_, callback) {
    var root6345 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6345); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4976;
    nodes4976 = node.contents();
    oldNodes.replaceWith(nodes4976);
  }));
  callback(root6344); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4975;
  nodes4975 = node.contents();
  oldNodes.replaceWith(nodes4975);
}));
var nodes4977 = $("<span>");
root6343.append(nodes4977);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl834();
}));

function renderControl834() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root6346 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6346); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4977;
    nodes4977 = node.contents();
    oldNodes.replaceWith(nodes4977);
  }));
}
renderControl834();
callback(root6343); return subs__;


return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root6347 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes4978 = $("<span>");
root6347.append(nodes4978);
subs__.addSub((ui.group)(function(_, callback) {
  var root6348 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1693 = mobl.loadingSpan();
  root6348.append(node1693);
  var list346;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList346 = function() {
    var subs__ = listSubs__;
    list346 = coll.get();
    list346.list(function(results382) {
      node1693.empty();
      for(var i351 = 0; i351 < results382.length; i351++) {
        (function() {
          var iternode346 = $("<span>");
          node1693.append(iternode346);
          var it;
          it = mobl.ref(mobl.ref(results382), i351);
          
          var tmp11627 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp11627.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp11627.set(it.get() == selected.get());
          }));
          
          
          var node1694 = $("<span>");
          iternode346.append(node1694);
          var condSubs242 = new mobl.CompSubscription();
          subs__.addSub(condSubs242);
          var oldValue242;
          var renderCond242 = function() {
            var value554 = tmp11627.get();
            if(oldValue242 === value554) return;
            oldValue242 = value554;
            var subs__ = condSubs242;
            subs__.unsubscribe();
            node1694.empty();
            if(value554) {
              
              var tmp11623 = mobl.ref(false);
              
              
              var tmp11622 = mobl.ref(null);
              
              
              var tmp11621 = mobl.ref(null);
              
              var nodes4979 = $("<span>");
              node1694.append(nodes4979);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11621, tmp11622, tmp11623, function(_, callback) {
                var root6349 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4980 = $("<span>");
                root6349.append(nodes4980);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl835();
                }));
                
                function renderControl835() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root6350 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6350); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4980;
                    nodes4980 = node.contents();
                    oldNodes.replaceWith(nodes4980);
                  }));
                }
                renderControl835();
                callback(root6349); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4979;
                nodes4979 = node.contents();
                oldNodes.replaceWith(nodes4979);
              }));
              
              
            } else {
              
              var tmp11625 = mobl.ref(true);
              
              
              var tmp11624 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp11626 = mobl.ref(null);
              
              var nodes4981 = $("<span>");
              node1694.append(nodes4981);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11624, tmp11626, tmp11625, function(_, callback) {
                var root6351 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4982 = $("<span>");
                root6351.append(nodes4982);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl836();
                }));
                
                function renderControl836() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root6352 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6352); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4982;
                    nodes4982 = node.contents();
                    oldNodes.replaceWith(nodes4982);
                  }));
                }
                renderControl836();
                callback(root6351); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4981;
                nodes4981 = node.contents();
                oldNodes.replaceWith(nodes4981);
              }));
              
              
            }
          };
          renderCond242();
          subs__.addSub(tmp11627.addEventListener('change', function() {
            renderCond242();
          }));
          
          
          var oldNodes = iternode346;
          iternode346 = iternode346.contents();
          oldNodes.replaceWith(iternode346);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list346.addEventListener('change', function() { listSubs__.unsubscribe(); renderList346(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList346(true); }));
    });
  };
  renderList346();
  
  callback(root6348); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4978;
  nodes4978 = node.contents();
  oldNodes.replaceWith(nodes4978);
}));
callback(root6347); return subs__;

return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root6353 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes4983 = $("<span>");
  root6353.append(nodes4983);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6354 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11631 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp11631.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp11631.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp11631.set(coll.get().limit(n.get()));
    }));
    
    
    var node1695 = mobl.loadingSpan();
    root6354.append(node1695);
    var list347;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList347 = function() {
      var subs__ = listSubs__;
      list347 = tmp11631.get();
      list347.list(function(results383) {
        node1695.empty();
        for(var i352 = 0; i352 < results383.length; i352++) {
          (function() {
            var iternode347 = $("<span>");
            node1695.append(iternode347);
            var it;
            it = mobl.ref(mobl.ref(results383), i352);
            
            var tmp11628 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp11630 = mobl.ref(false);
            
            
            var tmp11629 = mobl.ref(null);
            
            var nodes4984 = $("<span>");
            iternode347.append(nodes4984);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11628, tmp11629, tmp11630, function(_, callback) {
              var root6355 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4985 = $("<span>");
              root6355.append(nodes4985);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl837();
              }));
              
              function renderControl837() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root6356 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root6356); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4985;
                  nodes4985 = node.contents();
                  oldNodes.replaceWith(nodes4985);
                }));
              }
              renderControl837();
              callback(root6355); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4984;
              nodes4984 = node.contents();
              oldNodes.replaceWith(nodes4984);
            }));
            
            var oldNodes = iternode347;
            iternode347 = iternode347.contents();
            oldNodes.replaceWith(iternode347);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list347.addEventListener('change', function() { listSubs__.unsubscribe(); renderList347(true); }));
        subs__.addSub(tmp11631.addEventListener('change', function() { listSubs__.unsubscribe(); renderList347(true); }));
      });
    };
    renderList347();
    
    
    var tmp11632 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp11632.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp11632.set(n.get() < total.get());
    }));
    
    
    var node1696 = $("<span>");
    root6354.append(node1696);
    var condSubs243 = new mobl.CompSubscription();
    subs__.addSub(condSubs243);
    var oldValue243;
    var renderCond243 = function() {
      var value555 = tmp11632.get();
      if(oldValue243 === value555) return;
      oldValue243 = value555;
      var subs__ = condSubs243;
      subs__.unsubscribe();
      node1696.empty();
      if(value555) {
        
        var node1697 = $("<li>");
        
        var ref1661 = mobl.ref(ui.loadMoreStyle);
        if(ref1661.get() !== null) {
          node1697.attr('class', ref1661.get());
          subs__.addSub(ref1661.addEventListener('change', function(_, ref, val) {
            if(ref === ref1661) {
              node1697.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref1661.rebind());
        
        var val884 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val884 !== null) {
          subs__.addSub(mobl.domBind(node1697, 'tap', val884));
        }
        
        
        node1697.append("More");
        node1696.append(node1697);
        
        
      } else {
        
      }
    };
    renderCond243();
    subs__.addSub(tmp11632.addEventListener('change', function() {
      renderCond243();
    }));
    
    callback(root6354); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4983;
    nodes4983 = node.contents();
    oldNodes.replaceWith(nodes4983);
  }));
  callback(root6353); return subs__;
  
});
return subs__;
};

ui.markableList = function(items, elements, callback) {
var root6357 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes4986 = $("<span>");
root6357.append(nodes4986);
subs__.addSub((ui.group)(function(_, callback) {
  var root6358 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1698 = mobl.loadingSpan();
  root6358.append(node1698);
  var list348;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList348 = function() {
    var subs__ = listSubs__;
    list348 = items.get();
    list348.list(function(results384) {
      node1698.empty();
      for(var i353 = 0; i353 < results384.length; i353++) {
        (function() {
          var iternode348 = $("<span>");
          node1698.append(iternode348);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results384), i353), "_1");it = mobl.ref(mobl.ref(mobl.ref(results384), i353), "_2");
          
          var tmp11636 = mobl.ref(false);
          
          
          var tmp11635 = mobl.ref(null);
          
          
          var tmp11634 = mobl.ref(null);
          
          var nodes4987 = $("<span>");
          iternode348.append(nodes4987);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11634, tmp11635, tmp11636, function(_, callback) {
            var root6359 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp11633 = mobl.ref(null);
            
            var nodes4988 = $("<span>");
            root6359.append(nodes4988);
            subs__.addSub((ui.checkBox)(checked, it, tmp11633, function(_, callback) {
              var root6360 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6360); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4988;
              nodes4988 = node.contents();
              oldNodes.replaceWith(nodes4988);
            }));
            callback(root6359); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4987;
            nodes4987 = node.contents();
            oldNodes.replaceWith(nodes4987);
          }));
          
          var oldNodes = iternode348;
          iternode348 = iternode348.contents();
          oldNodes.replaceWith(iternode348);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list348.addEventListener('change', function() { listSubs__.unsubscribe(); renderList348(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList348(true); }));
    });
  };
  renderList348();
  
  callback(root6358); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4986;
  nodes4986 = node.contents();
  oldNodes.replaceWith(nodes4986);
}));
callback(root6357); return subs__;

return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
var root6361 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll1052) {
  coll1052 = coll1052.reverse();
  function processOne195() {
    var it;
    it = coll1052.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll1052.length > 0) processOne195(); else rest195();
    
  }
  function rest195() {
    
    var tmp11641 = mobl.ref(null);
    
    var nodes4989 = $("<span>");
    root6361.append(nodes4989);
    subs__.addSub((ui.header)(title, tmp11641, function(_, callback) {
      var root6362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11637 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp11638 = mobl.ref("Back");
      
      var nodes4990 = $("<span>");
      root6362.append(nodes4990);
      subs__.addSub((ui.backButton)(tmp11638, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp11637, function(_, callback) {
        var root6363 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6363); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4990;
        nodes4990 = node.contents();
        oldNodes.replaceWith(nodes4990);
      }));
      
      var tmp11640 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll1051) {
                             coll1051 = coll1051.reverse();
                             function processOne194() {
                               var checked;var it;
                               var tmp11667 = coll1051.pop();
                               checked = tmp11667._1;it = tmp11667._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll1051.length > 0) processOne194(); else rest194();
                                 
                               } else {
                                 {
                                   
                                   if(coll1051.length > 0) processOne194(); else rest194();
                                   
                                 }
                               }
                             }
                             function rest194() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll1051.length > 0) processOne194(); else rest194();
                           });
                           
                         });
      
      
      var tmp11639 = mobl.ref("Done");
      
      var nodes4991 = $("<span>");
      root6362.append(nodes4991);
      subs__.addSub((ui.button)(tmp11639, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11640, function(_, callback) {
        var root6364 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6364); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4991;
        nodes4991 = node.contents();
        oldNodes.replaceWith(nodes4991);
      }));
      callback(root6362); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4989;
      nodes4989 = node.contents();
      oldNodes.replaceWith(nodes4989);
    }));
    var nodes4992 = $("<span>");
    root6361.append(nodes4992);
    subs__.addSub((ui.markableList)(items, function(_, callback) {
      var root6365 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6365); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4992;
      nodes4992 = node.contents();
      oldNodes.replaceWith(nodes4992);
    }));
    callback(root6361); return subs__;
    
    
  }
  if(coll1052.length > 0) processOne195(); else rest195();
});

return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root6366 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp11642 = mobl.ref("Search term");


var tmp11644 = mobl.ref(null);


var tmp11643 = mobl.ref(null);

var nodes4993 = $("<span>");
root6366.append(nodes4993);
subs__.addSub((ui.searchBox)(phrase, tmp11642, tmp11643, tmp11644, function(_, callback) {
  var root6367 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6367); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4993;
  nodes4993 = node.contents();
  oldNodes.replaceWith(nodes4993);
}));

var tmp11645 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp11645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp11645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp11645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp11645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp11645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes4994 = $("<span>");
root6366.append(nodes4994);
subs__.addSub((ui.masterDetail)(tmp11645, masterItem, detailItem, function(_, callback) {
  var root6368 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6368); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4994;
  nodes4994 = node.contents();
  oldNodes.replaceWith(nodes4994);
}));
callback(root6366); return subs__;


return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function() {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + ui.progressStyle + "'>Loading...</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, elements, callback) {
var root6369 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp11655 = mobl.ref(null);


var tmp11654 = mobl.ref(null);

var nodes4995 = $("<span>");
root6369.append(nodes4995);
subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp11654, tmp11655, function(_, callback) {
  var root6370 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1699 = mobl.loadingSpan();
  root6370.append(node1699);
  var list349;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList349 = function() {
    var subs__ = listSubs__;
    list349 = sections.get();
    list349.list(function(results385) {
      node1699.empty();
      for(var i354 = 0; i354 < results385.length; i354++) {
        (function() {
          var iternode349 = $("<span>");
          node1699.append(iternode349);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results385), i354), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results385), i354), "_2");
          
          var tmp11649 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp11649.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp11649.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp11649.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp11649.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp11648 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp11650 = mobl.ref(null);
          
          var nodes4996 = $("<span>");
          iternode349.append(nodes4996);
          subs__.addSub((ui.span)(tmp11649, tmp11650, tmp11648, function(_, callback) {
            var root6371 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp11647 = mobl.ref(null);
            
            
            var tmp11646 = mobl.ref(null);
            
            var nodes4997 = $("<span>");
            root6371.append(nodes4997);
            subs__.addSub((mobl.label)(sectionName, tmp11646, tmp11647, function(_, callback) {
              var root6372 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6372); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4997;
              nodes4997 = node.contents();
              oldNodes.replaceWith(nodes4997);
            }));
            callback(root6371); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4996;
            nodes4996 = node.contents();
            oldNodes.replaceWith(nodes4996);
          }));
          
          var tmp11651 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp11651.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp11651.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
            tmp11651.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
            tmp11651.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          
          
          var tmp11653 = mobl.ref(null);
          
          
          var tmp11652 = mobl.ref(null);
          
          var nodes4998 = $("<span>");
          iternode349.append(nodes4998);
          subs__.addSub((ui.block)(tmp11651, tmp11652, tmp11653, function(_, callback) {
            var root6373 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes4999 = $("<span>");
            root6373.append(nodes4999);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl838();
            }));
            
            function renderControl838() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root6374 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6374); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4999;
                nodes4999 = node.contents();
                oldNodes.replaceWith(nodes4999);
              }));
            }
            renderControl838();
            callback(root6373); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4998;
            nodes4998 = node.contents();
            oldNodes.replaceWith(nodes4998);
          }));
          
          var oldNodes = iternode349;
          iternode349 = iternode349.contents();
          oldNodes.replaceWith(iternode349);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list349.addEventListener('change', function() { listSubs__.unsubscribe(); renderList349(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList349(true); }));
    });
  };
  renderList349();
  
  callback(root6370); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4995;
  nodes4995 = node.contents();
  oldNodes.replaceWith(nodes4995);
}));
callback(root6369); return subs__;

return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(elements, callback) {
var root6375 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1700 = $("<table>");

var ref1662 = mobl.ref(ui.tableStyle);
if(ref1662.get() !== null) {
  node1700.attr('class', ref1662.get());
  subs__.addSub(ref1662.addEventListener('change', function(_, ref, val) {
    if(ref === ref1662) {
      node1700.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1662.rebind());

var nodes5000 = $("<span>");
node1700.append(nodes5000);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl839();
}));

function renderControl839() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6376 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6376); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5000;
    nodes5000 = node.contents();
    oldNodes.replaceWith(nodes5000);
  }));
}
renderControl839();
root6375.append(node1700);
callback(root6375); return subs__;


return subs__;
};

ui.row = function(elements, callback) {
var root6377 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1701 = $("<tr>");

var ref1663 = mobl.ref(ui.trStyle);
if(ref1663.get() !== null) {
  node1701.attr('class', ref1663.get());
  subs__.addSub(ref1663.addEventListener('change', function(_, ref, val) {
    if(ref === ref1663) {
      node1701.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1663.rebind());

var nodes5001 = $("<span>");
node1701.append(nodes5001);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl840();
}));

function renderControl840() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6378 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6378); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5001;
    nodes5001 = node.contents();
    oldNodes.replaceWith(nodes5001);
  }));
}
renderControl840();
root6377.append(node1701);
callback(root6377); return subs__;


return subs__;
};

ui.cell = function(width, elements, callback) {
var root6379 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1702 = $("<td>");

var ref1664 = width;
if(ref1664.get() !== null) {
  node1702.attr('width', ref1664.get());
  subs__.addSub(ref1664.addEventListener('change', function(_, ref, val) {
    if(ref === ref1664) {
      node1702.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1664.rebind());

var ref1665 = mobl.ref(ui.tdStyle);
if(ref1665.get() !== null) {
  node1702.attr('class', ref1665.get());
  subs__.addSub(ref1665.addEventListener('change', function(_, ref, val) {
    if(ref === ref1665) {
      node1702.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1665.rebind());

var nodes5002 = $("<span>");
node1702.append(nodes5002);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl841();
}));

function renderControl841() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6380 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6380); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5002;
    nodes5002 = node.contents();
    oldNodes.replaceWith(nodes5002);
  }));
}
renderControl841();
root6379.append(node1702);
callback(root6379); return subs__;


return subs__;
};

ui.col = function(width, elements, callback) {
var root6381 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1703 = $("<td>");

var ref1666 = width;
if(ref1666.get() !== null) {
  node1703.attr('width', ref1666.get());
  subs__.addSub(ref1666.addEventListener('change', function(_, ref, val) {
    if(ref === ref1666) {
      node1703.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1666.rebind());

var ref1667 = mobl.ref(ui.tdStyle);
if(ref1667.get() !== null) {
  node1703.attr('class', ref1667.get());
  subs__.addSub(ref1667.addEventListener('change', function(_, ref, val) {
    if(ref === ref1667) {
      node1703.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1667.rebind());

var nodes5003 = $("<span>");
node1703.append(nodes5003);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl842();
}));

function renderControl842() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6382 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6382); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5003;
    nodes5003 = node.contents();
    oldNodes.replaceWith(nodes5003);
  }));
}
renderControl842();
root6381.append(node1703);
callback(root6381); return subs__;


return subs__;
};

ui.headerCol = function(width, elements, callback) {
var root6383 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1704 = $("<td>");

var ref1668 = width;
if(ref1668.get() !== null) {
  node1704.attr('width', ref1668.get());
  subs__.addSub(ref1668.addEventListener('change', function(_, ref, val) {
    if(ref === ref1668) {
      node1704.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1668.rebind());

var ref1669 = mobl.ref(ui.tdStyle);
if(ref1669.get() !== null) {
  node1704.attr('class', ref1669.get());
  subs__.addSub(ref1669.addEventListener('change', function(_, ref, val) {
    if(ref === ref1669) {
      node1704.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1669.rebind());


var node1705 = $("<strong>");

var nodes5004 = $("<span>");
node1705.append(nodes5004);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl843();
}));

function renderControl843() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6384 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6384); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5004;
    nodes5004 = node.contents();
    oldNodes.replaceWith(nodes5004);
  }));
}
renderControl843();
node1704.append(node1705);
root6383.append(node1704);
callback(root6383); return subs__;



return subs__;
};

ui.scroller = function(height, elements, callback) {
var root6385 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1706 = $("<div>");
node1706.attr('class', "scroller");

var nodes5005 = $("<span>");
node1706.append(nodes5005);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl844();
}));

function renderControl844() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6386 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6386); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5005;
    nodes5005 = node.contents();
    oldNodes.replaceWith(nodes5005);
  }));
}
renderControl844();
root6385.append(node1706);
var result__ = ui.setupScrollers();
callback(root6385); return subs__;


return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
setInterval(function() {
              var allScrollers = $("div.scroller");
              for(var i = 0; i < allScrollers.length; i++)
              {
                var scroller = allScrollers.eq(i).data("scroller");
                if(scroller)
                {
                  scroller.setupScroller();
                }
              }
            }, 1000);
}(ui));
ui.rangeField = function(s, style, min, max, start, elements, callback) {
var root6387 = $("<span>");
var subs__ = new mobl.CompSubscription();

var slider = $("<div>");

root6387.append(slider);
var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                      if(event && event.stopPropagation) event.stopPropagation();
                                                                      var result__ = slider.slider("value");
                                                                      s.set(result__);
                                                                      var result__ = slider.slider("value");
                                                                      start.set(result__);
                                                                      if(callback && callback.apply) callback(); return;
                                                                    }}));
callback(root6387); return subs__;

return subs__;
};
ui.title = 'ui__title';
ui.emphasis = 'ui__emphasis';
ui.ranger = 'ui__ranger';
ui.tweetStyle = 'ui__tweetStyle';
ui.tweetIconStyle = 'ui__tweetIconStyle';
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
