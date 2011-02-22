mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
var root12368 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4594 = $("<span>");
root12368.append(node4594);
var condSubs531 = new mobl.CompSubscription();
subs__.addSub(condSubs531);
var oldValue531;
var renderCond531 = function() {
  var value1113 = value.get();
  if(oldValue531 === value1113) return;
  oldValue531 = value1113;
  var subs__ = condSubs531;
  subs__.unsubscribe();
  node4594.empty();
  if(value1113) {
    var nodes9074 = $("<span>");
    node4594.append(nodes9074);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl1788();
    }));
    
    function renderControl1788() {
      subs__.addSub((elements)(function(elements, callback) {
        var root12369 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root12369); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9074;
        nodes9074 = node.contents();
        oldNodes.replaceWith(nodes9074);
      }));
    }
    renderControl1788();
    
    
  } else {
    
    var tmp18129 = mobl.ref(null);
    
    
    var tmp18128 = mobl.ref(null);
    
    var nodes9075 = $("<span>");
    node4594.append(nodes9075);
    subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp18128, tmp18129, function(_, callback) {
      var root12370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root12370.append("Loading...");
      
      var tmp18122 = mobl.ref("middle");
      
      
      var tmp18121 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp18127 = mobl.ref(null);
      
      
      var tmp18126 = mobl.ref(null);
      
      
      var tmp18125 = mobl.ref(null);
      
      
      var tmp18124 = mobl.ref(null);
      
      
      var tmp18123 = mobl.ref(null);
      
      var nodes9076 = $("<span>");
      root12370.append(nodes9076);
      subs__.addSub((ui.image)(tmp18121, tmp18123, tmp18124, tmp18125, tmp18126, tmp18122, tmp18127, function(_, callback) {
        var root12371 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root12371); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9076;
        nodes9076 = node.contents();
        oldNodes.replaceWith(nodes9076);
      }));
      callback(root12370); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9075;
      nodes9075 = node.contents();
      oldNodes.replaceWith(nodes9075);
    }));
    
    
  }
};
renderCond531();
subs__.addSub(value.addEventListener('change', function() {
  renderCond531();
}));

callback(root12368); return subs__;

return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
var root12372 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4595 = $("<div>");

var ref3682 = mobl.ref(ui.headerStyle);
if(ref3682.get() !== null) {
  node4595.attr('class', ref3682.get());
  subs__.addSub(ref3682.addEventListener('change', function(_, ref, val) {
    if(ref === ref3682) {
      node4595.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3682.rebind());

var val1951 = onclick.get();
if(val1951 !== null) {
  subs__.addSub(mobl.domBind(node4595, 'tap', val1951));
}


var node4596 = $("<div>");

var ref3681 = mobl.ref(ui.headerContainerStyle);
if(ref3681.get() !== null) {
  node4596.attr('class', ref3681.get());
  subs__.addSub(ref3681.addEventListener('change', function(_, ref, val) {
    if(ref === ref3681) {
      node4596.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3681.rebind());


var node4597 = $("<div>");

var ref3679 = text;
node4597.text(""+ref3679.get());
var ignore751 = false;
subs__.addSub(ref3679.addEventListener('change', function(_, ref, val) {
  if(ignore751) return;
  node4597.text(""+val);
}));
subs__.addSub(ref3679.rebind());


var ref3680 = mobl.ref(ui.headerTextStyle);
if(ref3680.get() !== null) {
  node4597.attr('class', ref3680.get());
  subs__.addSub(ref3680.addEventListener('change', function(_, ref, val) {
    if(ref === ref3680) {
      node4597.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3680.rebind());

node4596.append(node4597);
node4595.append(node4596);
var nodes9077 = $("<span>");
node4595.append(nodes9077);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1789();
}));

function renderControl1789() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12373 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12373); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9077;
    nodes9077 = node.contents();
    oldNodes.replaceWith(nodes9077);
  }));
}
renderControl1789();
root12372.append(node4595);
callback(root12372); return subs__;




return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root12374 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref3683 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref3683.get() !== null) {
  sp.attr('class', ref3683.get());
  subs__.addSub(ref3683.addEventListener('change', function(_, ref, val) {
    if(ref === ref3683) {
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
subs__.addSub(ref3683.rebind());

var val1952 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val1952 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val1952));
}

var val1953 = function(event, callback) {
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
if(val1953 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val1953));
}

var val1954 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after225(result__) {
                  var tmp18190 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after225);if(result__ !== undefined) after225(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val1954 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val1954));
}

var val1955 = function(event, callback) {
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
if(val1955 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val1955));
}

var ref3684 = text;
sp.text(""+ref3684.get());
var ignore752 = false;
subs__.addSub(ref3684.addEventListener('change', function(_, ref, val) {
  if(ignore752) return;
  sp.text(""+val);
}));
subs__.addSub(ref3684.rebind());


root12374.append(sp);
callback(root12374); return subs__;

return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root12375 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes9078 = $("<span>");
root12375.append(nodes9078);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root12376 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root12376); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9078;
  nodes9078 = node.contents();
  oldNodes.replaceWith(nodes9078);
}));
callback(root12375); return subs__;

return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root12377 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes9079 = $("<span>");
root12377.append(nodes9079);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root12378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root12378); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9079;
  nodes9079 = node.contents();
  oldNodes.replaceWith(nodes9079);
}));
callback(root12377); return subs__;

return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
var root12379 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4598 = $("<div>");

var ref3685 = id;
if(ref3685.get() !== null) {
  node4598.attr('id', ref3685.get());
  subs__.addSub(ref3685.addEventListener('change', function(_, ref, val) {
    if(ref === ref3685) {
      node4598.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3685.rebind());

var ref3686 = cssClass;
if(ref3686.get() !== null) {
  node4598.attr('class', ref3686.get());
  subs__.addSub(ref3686.addEventListener('change', function(_, ref, val) {
    if(ref === ref3686) {
      node4598.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3686.rebind());

var val1956 = onclick.get();
if(val1956 !== null) {
  subs__.addSub(mobl.domBind(node4598, 'tap', val1956));
}

var nodes9080 = $("<span>");
node4598.append(nodes9080);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1790();
}));

function renderControl1790() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12380 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12380); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9080;
    nodes9080 = node.contents();
    oldNodes.replaceWith(nodes9080);
  }));
}
renderControl1790();
root12379.append(node4598);
callback(root12379); return subs__;


return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
var root12381 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4599 = $("<span>");

var ref3687 = id;
if(ref3687.get() !== null) {
  node4599.attr('id', ref3687.get());
  subs__.addSub(ref3687.addEventListener('change', function(_, ref, val) {
    if(ref === ref3687) {
      node4599.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3687.rebind());

var ref3688 = cssClass;
if(ref3688.get() !== null) {
  node4599.attr('class', ref3688.get());
  subs__.addSub(ref3688.addEventListener('change', function(_, ref, val) {
    if(ref === ref3688) {
      node4599.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3688.rebind());

var val1957 = onclick.get();
if(val1957 !== null) {
  subs__.addSub(mobl.domBind(node4599, 'tap', val1957));
}

var nodes9081 = $("<span>");
node4599.append(nodes9081);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1791();
}));

function renderControl1791() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12382 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12382); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9081;
    nodes9081 = node.contents();
    oldNodes.replaceWith(nodes9081);
  }));
}
renderControl1791();
root12381.append(node4599);
callback(root12381); return subs__;


return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
var root12383 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4600 = $("<ul>");

var ref3689 = mobl.ref(ui.groupStyle);
if(ref3689.get() !== null) {
  node4600.attr('class', ref3689.get());
  subs__.addSub(ref3689.addEventListener('change', function(_, ref, val) {
    if(ref === ref3689) {
      node4600.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3689.rebind());

var nodes9082 = $("<span>");
node4600.append(nodes9082);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1792();
}));

function renderControl1792() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12384 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12384); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9082;
    nodes9082 = node.contents();
    oldNodes.replaceWith(nodes9082);
  }));
}
renderControl1792();
root12383.append(node4600);
callback(root12383); return subs__;


return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root12385 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4601 = $("<img>");

var ref3690 = url;
if(ref3690.get() !== null) {
  node4601.attr('src', ref3690.get());
  subs__.addSub(ref3690.addEventListener('change', function(_, ref, val) {
    if(ref === ref3690) {
      node4601.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3690.rebind());

var ref3691 = width;
if(ref3691.get() !== null) {
  node4601.attr('width', ref3691.get());
  subs__.addSub(ref3691.addEventListener('change', function(_, ref, val) {
    if(ref === ref3691) {
      node4601.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3691.rebind());

var ref3692 = height;
if(ref3692.get() !== null) {
  node4601.attr('height', ref3692.get());
  subs__.addSub(ref3692.addEventListener('change', function(_, ref, val) {
    if(ref === ref3692) {
      node4601.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3692.rebind());

var ref3693 = style;
if(ref3693.get() !== null) {
  node4601.attr('class', ref3693.get());
  subs__.addSub(ref3693.addEventListener('change', function(_, ref, val) {
    if(ref === ref3693) {
      node4601.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3693.rebind());

var val1958 = onclick.get();
if(val1958 !== null) {
  subs__.addSub(mobl.domBind(node4601, 'tap', val1958));
}

var ref3694 = valign;
if(ref3694.get() !== null) {
  node4601.attr('valign', ref3694.get());
  subs__.addSub(ref3694.addEventListener('change', function(_, ref, val) {
    if(ref === ref3694) {
      node4601.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3694.rebind());

var ref3695 = align;
if(ref3695.get() !== null) {
  node4601.attr('align', ref3695.get());
  subs__.addSub(ref3695.addEventListener('change', function(_, ref, val) {
    if(ref === ref3695) {
      node4601.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3695.rebind());

root12385.append(node4601);
callback(root12385); return subs__;

return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root12386 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref3696 = mobl.ref(ui.itemStyle);
if(ref3696.get() !== null) {
  el.attr('class', ref3696.get());
  subs__.addSub(ref3696.addEventListener('change', function(_, ref, val) {
    if(ref === ref3696) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3696.rebind());

var ref3697 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref3697.get() !== null) {
  el.attr('class', ref3697.get());
  subs__.addSub(ref3697.addEventListener('change', function(_, ref, val) {
    if(ref === ref3697) {
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
subs__.addSub(ref3697.rebind());

var val1959 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp18191 = result__;
                                         function after226(result__) {
                                           var tmp18192 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after226);if(result__ !== undefined) after226(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp18193 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val1959 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val1959));
}

var nodes9083 = $("<span>");
el.append(nodes9083);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1793();
}));

function renderControl1793() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12387 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12387); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9083;
    nodes9083 = node.contents();
    oldNodes.replaceWith(nodes9083);
  }));
}
renderControl1793();
root12386.append(el);
callback(root12386); return subs__;


return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
var root12388 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4602 = $("<input>");
node4602.attr('type', "checkbox");

var ref3699 = b;
node4602.attr('checked', !!ref3699.get());
subs__.addSub(ref3699.addEventListener('change', function(_, ref, val) {
  if(ref === ref3699) node4602.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node4602, 'change', function() {
  b.set(!!node4602.attr('checked'));
}));

var val1961 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val1961 !== null) {
  subs__.addSub(mobl.domBind(node4602, 'tap', val1961));
}

var val1962 = onchange.get();
if(val1962 !== null) {
  subs__.addSub(mobl.domBind(node4602, 'change', val1962));
}

root12388.append(node4602);

root12388.append(" ");

var node4603 = $("<span>");

var ref3698 = label;
node4603.text(""+ref3698.get());
var ignore753 = false;
subs__.addSub(ref3698.addEventListener('change', function(_, ref, val) {
  if(ignore753) return;
  node4603.text(""+val);
}));
subs__.addSub(ref3698.rebind());


var val1960 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after227(result__) {
                  var tmp18194 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after227);if(result__ !== undefined) after227(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val1960 !== null) {
  subs__.addSub(mobl.domBind(node4603, 'tap', val1960));
}

root12388.append(node4603);
callback(root12388); return subs__;


return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root12389 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4604 = $("<span>");
root12389.append(node4604);
var condSubs532 = new mobl.CompSubscription();
subs__.addSub(condSubs532);
var oldValue532;
var renderCond532 = function() {
  var value1114 = label.get();
  if(oldValue532 === value1114) return;
  oldValue532 = value1114;
  var subs__ = condSubs532;
  subs__.unsubscribe();
  node4604.empty();
  if(value1114) {
    
    var node4605 = $("<span>");
    node4605.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref3703 = label;
    node4605.text(""+ref3703.get());
    var ignore755 = false;
    subs__.addSub(ref3703.addEventListener('change', function(_, ref, val) {
      if(ignore755) return;
      node4605.text(""+val);
    }));
    subs__.addSub(ref3703.rebind());
    
    
    node4604.append(node4605);
    
    var node4606 = $("<span>");
    node4606.attr('style', "float: left");
    
    
    var node4607 = $("<input>");
    node4607.attr('type', "text");
    
    var ref3700 = mobl.ref(ui.textFieldStyle);
    if(ref3700.get() !== null) {
      node4607.attr('class', ref3700.get());
      subs__.addSub(ref3700.addEventListener('change', function(_, ref, val) {
        if(ref === ref3700) {
          node4607.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3700.rebind());
    
    var ref3701 = placeholder;
    if(ref3701.get() !== null) {
      node4607.attr('placeholder', ref3701.get());
      subs__.addSub(ref3701.addEventListener('change', function(_, ref, val) {
        if(ref === ref3701) {
          node4607.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3701.rebind());
    
    var ref3702 = s;
    node4607.val(""+ref3702.get());
    var ignore754 = false;
    subs__.addSub(ref3702.addEventListener('change', function(_, ref, val) {
      if(ignore754) return;
      node4607.val(""+val);
    }));
    subs__.addSub(ref3702.rebind());
    
    subs__.addSub(mobl.domBind(node4607, 'keyup change', function() {
      ignore754 = true;
      s.set(mobl.stringTomobl__String(node4607.val()));
      ignore754 = false;
    }));
    
    
    var val1963 = onchange.get();
    if(val1963 !== null) {
      subs__.addSub(mobl.domBind(node4607, 'change', val1963));
    }
    
    var val1964 = onkeyup.get();
    if(val1964 !== null) {
      subs__.addSub(mobl.domBind(node4607, 'keyup', val1964));
    }
    
    var val1965 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1965 !== null) {
      subs__.addSub(mobl.domBind(node4607, 'blur', val1965));
    }
    
    node4606.append(node4607);
    node4604.append(node4606);
    
    
    
    
  } else {
    
    var node4608 = $("<input>");
    node4608.attr('type', "text");
    
    var ref3704 = mobl.ref(ui.textFieldStyle);
    if(ref3704.get() !== null) {
      node4608.attr('class', ref3704.get());
      subs__.addSub(ref3704.addEventListener('change', function(_, ref, val) {
        if(ref === ref3704) {
          node4608.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3704.rebind());
    
    var ref3705 = placeholder;
    if(ref3705.get() !== null) {
      node4608.attr('placeholder', ref3705.get());
      subs__.addSub(ref3705.addEventListener('change', function(_, ref, val) {
        if(ref === ref3705) {
          node4608.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3705.rebind());
    
    var ref3706 = s;
    node4608.val(""+ref3706.get());
    var ignore756 = false;
    subs__.addSub(ref3706.addEventListener('change', function(_, ref, val) {
      if(ignore756) return;
      node4608.val(""+val);
    }));
    subs__.addSub(ref3706.rebind());
    
    subs__.addSub(mobl.domBind(node4608, 'keyup change', function() {
      ignore756 = true;
      s.set(mobl.stringTomobl__String(node4608.val()));
      ignore756 = false;
    }));
    
    
    var val1966 = onchange.get();
    if(val1966 !== null) {
      subs__.addSub(mobl.domBind(node4608, 'change', val1966));
    }
    
    var val1967 = onkeyup.get();
    if(val1967 !== null) {
      subs__.addSub(mobl.domBind(node4608, 'keyup', val1967));
    }
    
    var val1968 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1968 !== null) {
      subs__.addSub(mobl.domBind(node4608, 'blur', val1968));
    }
    
    node4604.append(node4608);
    
    
  }
};
renderCond532();
subs__.addSub(label.addEventListener('change', function() {
  renderCond532();
}));

callback(root12389); return subs__;

return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
var root12390 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4609 = $("<span>");
root12390.append(node4609);
var condSubs533 = new mobl.CompSubscription();
subs__.addSub(condSubs533);
var oldValue533;
var renderCond533 = function() {
  var value1115 = label.get();
  if(oldValue533 === value1115) return;
  oldValue533 = value1115;
  var subs__ = condSubs533;
  subs__.unsubscribe();
  node4609.empty();
  if(value1115) {
    
    var node4610 = $("<span>");
    node4610.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref3710 = label;
    node4610.text(""+ref3710.get());
    var ignore758 = false;
    subs__.addSub(ref3710.addEventListener('change', function(_, ref, val) {
      if(ignore758) return;
      node4610.text(""+val);
    }));
    subs__.addSub(ref3710.rebind());
    
    
    node4609.append(node4610);
    
    var node4611 = $("<span>");
    node4611.attr('style', "float: left");
    
    
    var node4612 = $("<input>");
    node4612.attr('type', "text");
    
    var ref3707 = mobl.ref(ui.textFieldStyle);
    if(ref3707.get() !== null) {
      node4612.attr('class', ref3707.get());
      subs__.addSub(ref3707.addEventListener('change', function(_, ref, val) {
        if(ref === ref3707) {
          node4612.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3707.rebind());
    
    var ref3708 = placeholder;
    if(ref3708.get() !== null) {
      node4612.attr('placeholder', ref3708.get());
      subs__.addSub(ref3708.addEventListener('change', function(_, ref, val) {
        if(ref === ref3708) {
          node4612.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3708.rebind());
    
    var ref3709 = n;
    node4612.val(""+ref3709.get());
    var ignore757 = false;
    subs__.addSub(ref3709.addEventListener('change', function(_, ref, val) {
      if(ignore757) return;
      node4612.val(""+val);
    }));
    subs__.addSub(ref3709.rebind());
    
    subs__.addSub(mobl.domBind(node4612, 'keyup change', function() {
      ignore757 = true;
      n.set(mobl.stringTomobl__Num(node4612.val()));
      ignore757 = false;
    }));
    
    
    var val1969 = onchange.get();
    if(val1969 !== null) {
      subs__.addSub(mobl.domBind(node4612, 'change', val1969));
    }
    
    var val1970 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1970 !== null) {
      subs__.addSub(mobl.domBind(node4612, 'blur', val1970));
    }
    
    node4611.append(node4612);
    node4609.append(node4611);
    
    
    
    
  } else {
    
    var node4613 = $("<input>");
    node4613.attr('type', "text");
    
    var ref3711 = mobl.ref(ui.textFieldStyle);
    if(ref3711.get() !== null) {
      node4613.attr('class', ref3711.get());
      subs__.addSub(ref3711.addEventListener('change', function(_, ref, val) {
        if(ref === ref3711) {
          node4613.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3711.rebind());
    
    var ref3712 = placeholder;
    if(ref3712.get() !== null) {
      node4613.attr('placeholder', ref3712.get());
      subs__.addSub(ref3712.addEventListener('change', function(_, ref, val) {
        if(ref === ref3712) {
          node4613.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3712.rebind());
    
    var ref3713 = n;
    node4613.val(""+ref3713.get());
    var ignore759 = false;
    subs__.addSub(ref3713.addEventListener('change', function(_, ref, val) {
      if(ignore759) return;
      node4613.val(""+val);
    }));
    subs__.addSub(ref3713.rebind());
    
    subs__.addSub(mobl.domBind(node4613, 'keyup change', function() {
      ignore759 = true;
      n.set(mobl.stringTomobl__Num(node4613.val()));
      ignore759 = false;
    }));
    
    
    var val1971 = onchange.get();
    if(val1971 !== null) {
      subs__.addSub(mobl.domBind(node4613, 'change', val1971));
    }
    
    var val1972 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1972 !== null) {
      subs__.addSub(mobl.domBind(node4613, 'blur', val1972));
    }
    
    node4609.append(node4613);
    
    
  }
};
renderCond533();
subs__.addSub(label.addEventListener('change', function() {
  renderCond533();
}));

callback(root12390); return subs__;

return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
var root12391 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp18136 = mobl.ref(null);


var tmp18135 = mobl.ref(null);

var nodes9084 = $("<span>");
root12391.append(nodes9084);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp18135, tmp18136, function(_, callback) {
  var root12392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4614 = mobl.loadingSpan();
  root12392.append(node4614);
  var list850;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList850 = function() {
    var subs__ = listSubs__;
    list850 = tabs.get();
    list850.list(function(results886) {
      node4614.empty();
      for(var i855 = 0; i855 < results886.length; i855++) {
        (function() {
          var iternode850 = $("<span>");
          node4614.append(iternode850);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results886), i855), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results886), i855), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results886), i855), "_3");
          
          var tmp18133 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp18133.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp18133.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp18133.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp18133.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp18132 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp18134 = mobl.ref(null);
          
          var nodes9085 = $("<span>");
          iternode850.append(nodes9085);
          subs__.addSub((ui.span)(tmp18133, tmp18134, tmp18132, function(_, callback) {
            var root12393 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp18131 = mobl.ref(null);
            
            
            var tmp18130 = mobl.ref(null);
            
            var nodes9086 = $("<span>");
            root12393.append(nodes9086);
            subs__.addSub((mobl.label)(tabName, tmp18130, tmp18131, function(_, callback) {
              var root12394 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root12394); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9086;
              nodes9086 = node.contents();
              oldNodes.replaceWith(nodes9086);
            }));
            callback(root12393); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9085;
            nodes9085 = node.contents();
            oldNodes.replaceWith(nodes9085);
          }));
          
          var oldNodes = iternode850;
          iternode850 = iternode850.contents();
          oldNodes.replaceWith(iternode850);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list850.addEventListener('change', function() { listSubs__.unsubscribe(); renderList850(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList850(true); }));
    });
  };
  renderList850();
  
  callback(root12392); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9084;
  nodes9084 = node.contents();
  oldNodes.replaceWith(nodes9084);
}));

var node4615 = mobl.loadingSpan();
root12391.append(node4615);
var list851;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList851 = function() {
  var subs__ = listSubs__;
  list851 = tabs.get();
  list851.list(function(results887) {
    node4615.empty();
    for(var i856 = 0; i856 < results887.length; i856++) {
      (function() {
        var iternode851 = $("<span>");
        node4615.append(iternode851);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results887), i856), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results887), i856), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results887), i856), "_3");
        
        var tmp18137 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp18137.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp18137.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp18137.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp18137.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp18139 = mobl.ref(null);
        
        
        var tmp18138 = mobl.ref(null);
        
        var nodes9087 = $("<span>");
        iternode851.append(nodes9087);
        subs__.addSub((ui.block)(tmp18137, tmp18138, tmp18139, function(_, callback) {
          var root12395 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes9088 = $("<span>");
          root12395.append(nodes9088);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root12396 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes9089 = $("<span>");
            root12396.append(nodes9089);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl1794();
            }));
            
            function renderControl1794() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root12397 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root12397); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9089;
                nodes9089 = node.contents();
                oldNodes.replaceWith(nodes9089);
              }));
            }
            renderControl1794();
            callback(root12396); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9088;
            nodes9088 = node.contents();
            oldNodes.replaceWith(nodes9088);
          }));
          callback(root12395); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9087;
          nodes9087 = node.contents();
          oldNodes.replaceWith(nodes9087);
        }));
        
        var oldNodes = iternode851;
        iternode851 = iternode851.contents();
        oldNodes.replaceWith(iternode851);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list851.addEventListener('change', function() { listSubs__.unsubscribe(); renderList851(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList851(true); }));
  });
};
renderList851();

callback(root12391); return subs__;


return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root12398 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4616 = $("<div>");

var ref3717 = mobl.ref(ui.searchboxStyle);
if(ref3717.get() !== null) {
  node4616.attr('class', ref3717.get());
  subs__.addSub(ref3717.addEventListener('change', function(_, ref, val) {
    if(ref === ref3717) {
      node4616.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3717.rebind());


var node4617 = $("<input>");
node4617.attr('type', "text");

var ref3714 = mobl.ref(ui.searchBoxInputStyle);
if(ref3714.get() !== null) {
  node4617.attr('class', ref3714.get());
  subs__.addSub(ref3714.addEventListener('change', function(_, ref, val) {
    if(ref === ref3714) {
      node4617.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3714.rebind());

var ref3715 = placeholder;
if(ref3715.get() !== null) {
  node4617.attr('placeholder', ref3715.get());
  subs__.addSub(ref3715.addEventListener('change', function(_, ref, val) {
    if(ref === ref3715) {
      node4617.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3715.rebind());

var ref3716 = s;
node4617.val(""+ref3716.get());
var ignore760 = false;
subs__.addSub(ref3716.addEventListener('change', function(_, ref, val) {
  if(ignore760) return;
  node4617.val(""+val);
}));
subs__.addSub(ref3716.rebind());

subs__.addSub(mobl.domBind(node4617, 'keyup change', function() {
  ignore760 = true;
  s.set(mobl.stringTomobl__String(node4617.val()));
  ignore760 = false;
}));


var val1973 = onsearch.get();
if(val1973 !== null) {
  subs__.addSub(mobl.domBind(node4617, 'change', val1973));
}

var val1974 = onkeyup.get();
if(val1974 !== null) {
  subs__.addSub(mobl.domBind(node4617, 'keyup', val1974));
}
node4617.attr('autocorrect', "off");
node4617.attr('autocapitalize', "off");
node4617.attr('autocomplete', "off");

node4616.append(node4617);
root12398.append(node4616);
callback(root12398); return subs__;


return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
var root12399 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref3718 = mobl.ref(ui.contextMenuStyle);
if(ref3718.get() !== null) {
  menu.attr('class', ref3718.get());
  subs__.addSub(ref3718.addEventListener('change', function(_, ref, val) {
    if(ref === ref3718) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3718.rebind());

var nodes9090 = $("<span>");
menu.append(nodes9090);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1795();
}));

function renderControl1795() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12400 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12400); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9090;
    nodes9090 = node.contents();
    oldNodes.replaceWith(nodes9090);
  }));
}
renderControl1795();
root12399.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val1975 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp18197 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val1975 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val1975));
}

root12399.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root12399); return subs__;



return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
var root12401 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp18189 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp18189.set(mobl.window.get().innerWidth > 500);
}));


var node4618 = $("<span>");
root12401.append(node4618);
var condSubs534 = new mobl.CompSubscription();
subs__.addSub(condSubs534);
var oldValue534;
var renderCond534 = function() {
  var value1116 = tmp18189.get();
  if(oldValue534 === value1116) return;
  oldValue534 = value1116;
  var subs__ = condSubs534;
  subs__.unsubscribe();
  node4618.empty();
  if(value1116) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node4619 = $("<div>");
      node4619.attr('width', "100%");
      
      
      var node4620 = $("<div>");
      node4620.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes9092 = $("<span>");
      node4620.append(nodes9092);
      subs__.addSub((ui.group)(function(_, callback) {
        var root12403 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node4622 = mobl.loadingSpan();
        root12403.append(node4622);
        var list852;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList852 = function() {
          var subs__ = listSubs__;
          list852 = items.get();
          list852.list(function(results888) {
            node4622.empty();
            for(var i857 = 0; i857 < results888.length; i857++) {
              (function() {
                var iternode852 = $("<span>");
                node4622.append(iternode852);
                var it;
                it = mobl.ref(mobl.ref(results888), i857);
                
                var tmp18153 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp18153.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp18153.set(it.get() == current.get());
                }));
                
                
                var node4623 = $("<span>");
                iternode852.append(node4623);
                var condSubs535 = new mobl.CompSubscription();
                subs__.addSub(condSubs535);
                var oldValue535;
                var renderCond535 = function() {
                  var value1117 = tmp18153.get();
                  if(oldValue535 === value1117) return;
                  oldValue535 = value1117;
                  var subs__ = condSubs535;
                  subs__.unsubscribe();
                  node4623.empty();
                  if(value1117) {
                    
                    var tmp18149 = mobl.ref(false);
                    
                    
                    var tmp18148 = mobl.ref(null);
                    
                    
                    var tmp18147 = mobl.ref(null);
                    
                    var nodes9093 = $("<span>");
                    node4623.append(nodes9093);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp18147, tmp18148, tmp18149, function(_, callback) {
                      var root12404 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes9094 = $("<span>");
                      root12404.append(nodes9094);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1797();
                      }));
                      
                      function renderControl1797() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root12405 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root12405); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes9094;
                          nodes9094 = node.contents();
                          oldNodes.replaceWith(nodes9094);
                        }));
                      }
                      renderControl1797();
                      callback(root12404); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9093;
                      nodes9093 = node.contents();
                      oldNodes.replaceWith(nodes9093);
                    }));
                    
                    
                  } else {
                    
                    var tmp18151 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp18150 = mobl.ref(true);
                    
                    
                    var tmp18152 = mobl.ref(null);
                    
                    var nodes9095 = $("<span>");
                    node4623.append(nodes9095);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18151, tmp18152, tmp18150, function(_, callback) {
                      var root12406 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes9096 = $("<span>");
                      root12406.append(nodes9096);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1798();
                      }));
                      
                      function renderControl1798() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root12407 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root12407); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes9096;
                          nodes9096 = node.contents();
                          oldNodes.replaceWith(nodes9096);
                        }));
                      }
                      renderControl1798();
                      callback(root12406); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9095;
                      nodes9095 = node.contents();
                      oldNodes.replaceWith(nodes9095);
                    }));
                    
                    
                  }
                };
                renderCond535();
                subs__.addSub(tmp18153.addEventListener('change', function() {
                  renderCond535();
                }));
                
                
                var oldNodes = iternode852;
                iternode852 = iternode852.contents();
                oldNodes.replaceWith(iternode852);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list852.addEventListener('change', function() { listSubs__.unsubscribe(); renderList852(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList852(true); }));
          });
        };
        renderList852();
        
        callback(root12403); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9092;
        nodes9092 = node.contents();
        oldNodes.replaceWith(nodes9092);
      }));
      node4619.append(node4620);
      
      var node4621 = $("<div>");
      node4621.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes9091 = $("<span>");
      node4621.append(nodes9091);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl1796();
      }));
      
      function renderControl1796() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root12402 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root12402); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9091;
          nodes9091 = node.contents();
          oldNodes.replaceWith(nodes9091);
        }));
      }
      renderControl1796();
      node4619.append(node4621);
      node4618.append(node4619);
      
      
      
      
      
      
    });
  } else {
    var nodes9097 = $("<span>");
    node4618.append(nodes9097);
    subs__.addSub((ui.group)(function(_, callback) {
      var root12408 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node4624 = mobl.loadingSpan();
      root12408.append(node4624);
      var list853;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList853 = function() {
        var subs__ = listSubs__;
        list853 = items.get();
        list853.list(function(results889) {
          node4624.empty();
          for(var i858 = 0; i858 < results889.length; i858++) {
            (function() {
              var iternode853 = $("<span>");
              node4624.append(iternode853);
              var it;
              it = mobl.ref(mobl.ref(results889), i858);
              
              var tmp18140 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                   var tmp18198 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp18142 = mobl.ref(false);
              
              
              var tmp18141 = mobl.ref(null);
              
              var nodes9098 = $("<span>");
              iternode853.append(nodes9098);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18140, tmp18141, tmp18142, function(_, callback) {
                var root12409 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9099 = $("<span>");
                root12409.append(nodes9099);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl1799();
                }));
                
                function renderControl1799() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root12410 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root12410); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9099;
                    nodes9099 = node.contents();
                    oldNodes.replaceWith(nodes9099);
                  }));
                }
                renderControl1799();
                callback(root12409); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9098;
                nodes9098 = node.contents();
                oldNodes.replaceWith(nodes9098);
              }));
              
              var oldNodes = iternode853;
              iternode853 = iternode853.contents();
              oldNodes.replaceWith(iternode853);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list853.addEventListener('change', function() { listSubs__.unsubscribe(); renderList853(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList853(true); }));
        });
      };
      renderList853();
      
      callback(root12408); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9097;
      nodes9097 = node.contents();
      oldNodes.replaceWith(nodes9097);
    }));
    
    
  }
};
renderCond534();
subs__.addSub(tmp18189.addEventListener('change', function() {
  renderCond534();
}));

callback(root12401); return subs__;

return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
var root12411 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp18145 = mobl.ref("Detail");


var tmp18146 = mobl.ref(null);

var nodes9100 = $("<span>");
root12411.append(nodes9100);
subs__.addSub((ui.header)(tmp18145, tmp18146, function(_, callback) {
  var root12412 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18144 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp18143 = mobl.ref("Back");
  
  var nodes9101 = $("<span>");
  root12412.append(nodes9101);
  subs__.addSub((ui.backButton)(tmp18143, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp18144, function(_, callback) {
    var root12413 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12413); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9101;
    nodes9101 = node.contents();
    oldNodes.replaceWith(nodes9101);
  }));
  callback(root12412); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9100;
  nodes9100 = node.contents();
  oldNodes.replaceWith(nodes9100);
}));
var nodes9102 = $("<span>");
root12411.append(nodes9102);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl1800();
}));

function renderControl1800() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root12414 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12414); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9102;
    nodes9102 = node.contents();
    oldNodes.replaceWith(nodes9102);
  }));
}
renderControl1800();
callback(root12411); return subs__;


return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root12415 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes9103 = $("<span>");
root12415.append(nodes9103);
subs__.addSub((ui.group)(function(_, callback) {
  var root12416 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4625 = mobl.loadingSpan();
  root12416.append(node4625);
  var list854;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList854 = function() {
    var subs__ = listSubs__;
    list854 = coll.get();
    list854.list(function(results890) {
      node4625.empty();
      for(var i859 = 0; i859 < results890.length; i859++) {
        (function() {
          var iternode854 = $("<span>");
          node4625.append(iternode854);
          var it;
          it = mobl.ref(mobl.ref(results890), i859);
          
          var tmp18160 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp18160.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp18160.set(it.get() == selected.get());
          }));
          
          
          var node4626 = $("<span>");
          iternode854.append(node4626);
          var condSubs536 = new mobl.CompSubscription();
          subs__.addSub(condSubs536);
          var oldValue536;
          var renderCond536 = function() {
            var value1118 = tmp18160.get();
            if(oldValue536 === value1118) return;
            oldValue536 = value1118;
            var subs__ = condSubs536;
            subs__.unsubscribe();
            node4626.empty();
            if(value1118) {
              
              var tmp18156 = mobl.ref(false);
              
              
              var tmp18155 = mobl.ref(null);
              
              
              var tmp18154 = mobl.ref(null);
              
              var nodes9104 = $("<span>");
              node4626.append(nodes9104);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18154, tmp18155, tmp18156, function(_, callback) {
                var root12417 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9105 = $("<span>");
                root12417.append(nodes9105);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl1801();
                }));
                
                function renderControl1801() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root12418 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root12418); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9105;
                    nodes9105 = node.contents();
                    oldNodes.replaceWith(nodes9105);
                  }));
                }
                renderControl1801();
                callback(root12417); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9104;
                nodes9104 = node.contents();
                oldNodes.replaceWith(nodes9104);
              }));
              
              
            } else {
              
              var tmp18158 = mobl.ref(true);
              
              
              var tmp18157 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp18159 = mobl.ref(null);
              
              var nodes9106 = $("<span>");
              node4626.append(nodes9106);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18157, tmp18159, tmp18158, function(_, callback) {
                var root12419 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9107 = $("<span>");
                root12419.append(nodes9107);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl1802();
                }));
                
                function renderControl1802() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root12420 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root12420); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9107;
                    nodes9107 = node.contents();
                    oldNodes.replaceWith(nodes9107);
                  }));
                }
                renderControl1802();
                callback(root12419); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9106;
                nodes9106 = node.contents();
                oldNodes.replaceWith(nodes9106);
              }));
              
              
            }
          };
          renderCond536();
          subs__.addSub(tmp18160.addEventListener('change', function() {
            renderCond536();
          }));
          
          
          var oldNodes = iternode854;
          iternode854 = iternode854.contents();
          oldNodes.replaceWith(iternode854);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list854.addEventListener('change', function() { listSubs__.unsubscribe(); renderList854(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList854(true); }));
    });
  };
  renderList854();
  
  callback(root12416); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9103;
  nodes9103 = node.contents();
  oldNodes.replaceWith(nodes9103);
}));
callback(root12415); return subs__;

return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root12421 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes9108 = $("<span>");
  root12421.append(nodes9108);
  subs__.addSub((ui.group)(function(_, callback) {
    var root12422 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp18164 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp18164.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp18164.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp18164.set(coll.get().limit(n.get()));
    }));
    
    
    var node4627 = mobl.loadingSpan();
    root12422.append(node4627);
    var list855;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList855 = function() {
      var subs__ = listSubs__;
      list855 = tmp18164.get();
      list855.list(function(results891) {
        node4627.empty();
        for(var i860 = 0; i860 < results891.length; i860++) {
          (function() {
            var iternode855 = $("<span>");
            node4627.append(iternode855);
            var it;
            it = mobl.ref(mobl.ref(results891), i860);
            
            var tmp18161 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp18163 = mobl.ref(false);
            
            
            var tmp18162 = mobl.ref(null);
            
            var nodes9109 = $("<span>");
            iternode855.append(nodes9109);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18161, tmp18162, tmp18163, function(_, callback) {
              var root12423 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9110 = $("<span>");
              root12423.append(nodes9110);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl1803();
              }));
              
              function renderControl1803() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root12424 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root12424); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9110;
                  nodes9110 = node.contents();
                  oldNodes.replaceWith(nodes9110);
                }));
              }
              renderControl1803();
              callback(root12423); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9109;
              nodes9109 = node.contents();
              oldNodes.replaceWith(nodes9109);
            }));
            
            var oldNodes = iternode855;
            iternode855 = iternode855.contents();
            oldNodes.replaceWith(iternode855);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list855.addEventListener('change', function() { listSubs__.unsubscribe(); renderList855(true); }));
        subs__.addSub(tmp18164.addEventListener('change', function() { listSubs__.unsubscribe(); renderList855(true); }));
      });
    };
    renderList855();
    
    
    var tmp18165 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp18165.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp18165.set(n.get() < total.get());
    }));
    
    
    var node4628 = $("<span>");
    root12422.append(node4628);
    var condSubs537 = new mobl.CompSubscription();
    subs__.addSub(condSubs537);
    var oldValue537;
    var renderCond537 = function() {
      var value1119 = tmp18165.get();
      if(oldValue537 === value1119) return;
      oldValue537 = value1119;
      var subs__ = condSubs537;
      subs__.unsubscribe();
      node4628.empty();
      if(value1119) {
        
        var node4629 = $("<li>");
        
        var ref3719 = mobl.ref(ui.loadMoreStyle);
        if(ref3719.get() !== null) {
          node4629.attr('class', ref3719.get());
          subs__.addSub(ref3719.addEventListener('change', function(_, ref, val) {
            if(ref === ref3719) {
              node4629.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref3719.rebind());
        
        var val1976 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1976 !== null) {
          subs__.addSub(mobl.domBind(node4629, 'tap', val1976));
        }
        
        
        node4629.append("More");
        node4628.append(node4629);
        
        
      } else {
        
      }
    };
    renderCond537();
    subs__.addSub(tmp18165.addEventListener('change', function() {
      renderCond537();
    }));
    
    callback(root12422); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9108;
    nodes9108 = node.contents();
    oldNodes.replaceWith(nodes9108);
  }));
  callback(root12421); return subs__;
  
});
return subs__;
};

ui.markableList = function(items, elements, callback) {
var root12425 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes9111 = $("<span>");
root12425.append(nodes9111);
subs__.addSub((ui.group)(function(_, callback) {
  var root12426 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4630 = mobl.loadingSpan();
  root12426.append(node4630);
  var list856;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList856 = function() {
    var subs__ = listSubs__;
    list856 = items.get();
    list856.list(function(results892) {
      node4630.empty();
      for(var i861 = 0; i861 < results892.length; i861++) {
        (function() {
          var iternode856 = $("<span>");
          node4630.append(iternode856);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results892), i861), "_1");it = mobl.ref(mobl.ref(mobl.ref(results892), i861), "_2");
          
          var tmp18169 = mobl.ref(false);
          
          
          var tmp18168 = mobl.ref(null);
          
          
          var tmp18167 = mobl.ref(null);
          
          var nodes9112 = $("<span>");
          iternode856.append(nodes9112);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18167, tmp18168, tmp18169, function(_, callback) {
            var root12427 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp18166 = mobl.ref(null);
            
            var nodes9113 = $("<span>");
            root12427.append(nodes9113);
            subs__.addSub((ui.checkBox)(checked, it, tmp18166, function(_, callback) {
              var root12428 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root12428); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9113;
              nodes9113 = node.contents();
              oldNodes.replaceWith(nodes9113);
            }));
            callback(root12427); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9112;
            nodes9112 = node.contents();
            oldNodes.replaceWith(nodes9112);
          }));
          
          var oldNodes = iternode856;
          iternode856 = iternode856.contents();
          oldNodes.replaceWith(iternode856);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list856.addEventListener('change', function() { listSubs__.unsubscribe(); renderList856(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList856(true); }));
    });
  };
  renderList856();
  
  callback(root12426); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9111;
  nodes9111 = node.contents();
  oldNodes.replaceWith(nodes9111);
}));
callback(root12425); return subs__;

return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
var root12429 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll2121) {
  coll2121 = coll2121.reverse();
  function processOne451() {
    var it;
    it = coll2121.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll2121.length > 0) processOne451(); else rest451();
    
  }
  function rest451() {
    
    var tmp18174 = mobl.ref(null);
    
    var nodes9114 = $("<span>");
    root12429.append(nodes9114);
    subs__.addSub((ui.header)(title, tmp18174, function(_, callback) {
      var root12430 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp18170 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp18171 = mobl.ref("Back");
      
      var nodes9115 = $("<span>");
      root12430.append(nodes9115);
      subs__.addSub((ui.backButton)(tmp18171, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp18170, function(_, callback) {
        var root12431 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root12431); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9115;
        nodes9115 = node.contents();
        oldNodes.replaceWith(nodes9115);
      }));
      
      var tmp18173 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll2120) {
                             coll2120 = coll2120.reverse();
                             function processOne450() {
                               var checked;var it;
                               var tmp18200 = coll2120.pop();
                               checked = tmp18200._1;it = tmp18200._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll2120.length > 0) processOne450(); else rest450();
                                 
                               } else {
                                 {
                                   
                                   if(coll2120.length > 0) processOne450(); else rest450();
                                   
                                 }
                               }
                             }
                             function rest450() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll2120.length > 0) processOne450(); else rest450();
                           });
                           
                         });
      
      
      var tmp18172 = mobl.ref("Done");
      
      var nodes9116 = $("<span>");
      root12430.append(nodes9116);
      subs__.addSub((ui.button)(tmp18172, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp18173, function(_, callback) {
        var root12432 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root12432); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9116;
        nodes9116 = node.contents();
        oldNodes.replaceWith(nodes9116);
      }));
      callback(root12430); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9114;
      nodes9114 = node.contents();
      oldNodes.replaceWith(nodes9114);
    }));
    var nodes9117 = $("<span>");
    root12429.append(nodes9117);
    subs__.addSub((ui.markableList)(items, function(_, callback) {
      var root12433 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root12433); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9117;
      nodes9117 = node.contents();
      oldNodes.replaceWith(nodes9117);
    }));
    callback(root12429); return subs__;
    
    
  }
  if(coll2121.length > 0) processOne451(); else rest451();
});

return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root12434 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp18175 = mobl.ref("Search term");


var tmp18177 = mobl.ref(null);


var tmp18176 = mobl.ref(null);

var nodes9118 = $("<span>");
root12434.append(nodes9118);
subs__.addSub((ui.searchBox)(phrase, tmp18175, tmp18176, tmp18177, function(_, callback) {
  var root12435 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root12435); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9118;
  nodes9118 = node.contents();
  oldNodes.replaceWith(nodes9118);
}));

var tmp18178 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp18178.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp18178.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp18178.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp18178.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp18178.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes9119 = $("<span>");
root12434.append(nodes9119);
subs__.addSub((ui.masterDetail)(tmp18178, masterItem, detailItem, function(_, callback) {
  var root12436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root12436); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9119;
  nodes9119 = node.contents();
  oldNodes.replaceWith(nodes9119);
}));
callback(root12434); return subs__;


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
var root12437 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp18188 = mobl.ref(null);


var tmp18187 = mobl.ref(null);

var nodes9120 = $("<span>");
root12437.append(nodes9120);
subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp18187, tmp18188, function(_, callback) {
  var root12438 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4631 = mobl.loadingSpan();
  root12438.append(node4631);
  var list857;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList857 = function() {
    var subs__ = listSubs__;
    list857 = sections.get();
    list857.list(function(results893) {
      node4631.empty();
      for(var i862 = 0; i862 < results893.length; i862++) {
        (function() {
          var iternode857 = $("<span>");
          node4631.append(iternode857);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results893), i862), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results893), i862), "_2");
          
          var tmp18182 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp18182.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp18182.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp18182.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp18182.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp18181 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp18183 = mobl.ref(null);
          
          var nodes9121 = $("<span>");
          iternode857.append(nodes9121);
          subs__.addSub((ui.span)(tmp18182, tmp18183, tmp18181, function(_, callback) {
            var root12439 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp18180 = mobl.ref(null);
            
            
            var tmp18179 = mobl.ref(null);
            
            var nodes9122 = $("<span>");
            root12439.append(nodes9122);
            subs__.addSub((mobl.label)(sectionName, tmp18179, tmp18180, function(_, callback) {
              var root12440 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root12440); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9122;
              nodes9122 = node.contents();
              oldNodes.replaceWith(nodes9122);
            }));
            callback(root12439); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9121;
            nodes9121 = node.contents();
            oldNodes.replaceWith(nodes9121);
          }));
          
          var tmp18184 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp18184.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp18184.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
            tmp18184.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
            tmp18184.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          
          
          var tmp18186 = mobl.ref(null);
          
          
          var tmp18185 = mobl.ref(null);
          
          var nodes9123 = $("<span>");
          iternode857.append(nodes9123);
          subs__.addSub((ui.block)(tmp18184, tmp18185, tmp18186, function(_, callback) {
            var root12441 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes9124 = $("<span>");
            root12441.append(nodes9124);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl1804();
            }));
            
            function renderControl1804() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root12442 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root12442); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9124;
                nodes9124 = node.contents();
                oldNodes.replaceWith(nodes9124);
              }));
            }
            renderControl1804();
            callback(root12441); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9123;
            nodes9123 = node.contents();
            oldNodes.replaceWith(nodes9123);
          }));
          
          var oldNodes = iternode857;
          iternode857 = iternode857.contents();
          oldNodes.replaceWith(iternode857);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list857.addEventListener('change', function() { listSubs__.unsubscribe(); renderList857(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList857(true); }));
    });
  };
  renderList857();
  
  callback(root12438); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9120;
  nodes9120 = node.contents();
  oldNodes.replaceWith(nodes9120);
}));
callback(root12437); return subs__;

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
var root12443 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4632 = $("<table>");

var ref3720 = mobl.ref(ui.tableStyle);
if(ref3720.get() !== null) {
  node4632.attr('class', ref3720.get());
  subs__.addSub(ref3720.addEventListener('change', function(_, ref, val) {
    if(ref === ref3720) {
      node4632.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3720.rebind());

var nodes9125 = $("<span>");
node4632.append(nodes9125);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1805();
}));

function renderControl1805() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12444 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12444); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9125;
    nodes9125 = node.contents();
    oldNodes.replaceWith(nodes9125);
  }));
}
renderControl1805();
root12443.append(node4632);
callback(root12443); return subs__;


return subs__;
};

ui.row = function(elements, callback) {
var root12445 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4633 = $("<tr>");

var ref3721 = mobl.ref(ui.trStyle);
if(ref3721.get() !== null) {
  node4633.attr('class', ref3721.get());
  subs__.addSub(ref3721.addEventListener('change', function(_, ref, val) {
    if(ref === ref3721) {
      node4633.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3721.rebind());

var nodes9126 = $("<span>");
node4633.append(nodes9126);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1806();
}));

function renderControl1806() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12446 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12446); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9126;
    nodes9126 = node.contents();
    oldNodes.replaceWith(nodes9126);
  }));
}
renderControl1806();
root12445.append(node4633);
callback(root12445); return subs__;


return subs__;
};

ui.cell = function(width, elements, callback) {
var root12447 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4634 = $("<td>");

var ref3722 = width;
if(ref3722.get() !== null) {
  node4634.attr('width', ref3722.get());
  subs__.addSub(ref3722.addEventListener('change', function(_, ref, val) {
    if(ref === ref3722) {
      node4634.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3722.rebind());

var ref3723 = mobl.ref(ui.tdStyle);
if(ref3723.get() !== null) {
  node4634.attr('class', ref3723.get());
  subs__.addSub(ref3723.addEventListener('change', function(_, ref, val) {
    if(ref === ref3723) {
      node4634.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3723.rebind());

var nodes9127 = $("<span>");
node4634.append(nodes9127);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1807();
}));

function renderControl1807() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12448 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12448); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9127;
    nodes9127 = node.contents();
    oldNodes.replaceWith(nodes9127);
  }));
}
renderControl1807();
root12447.append(node4634);
callback(root12447); return subs__;


return subs__;
};

ui.col = function(width, elements, callback) {
var root12449 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4635 = $("<td>");

var ref3724 = width;
if(ref3724.get() !== null) {
  node4635.attr('width', ref3724.get());
  subs__.addSub(ref3724.addEventListener('change', function(_, ref, val) {
    if(ref === ref3724) {
      node4635.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3724.rebind());

var ref3725 = mobl.ref(ui.tdStyle);
if(ref3725.get() !== null) {
  node4635.attr('class', ref3725.get());
  subs__.addSub(ref3725.addEventListener('change', function(_, ref, val) {
    if(ref === ref3725) {
      node4635.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3725.rebind());

var nodes9128 = $("<span>");
node4635.append(nodes9128);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1808();
}));

function renderControl1808() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12450 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12450); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9128;
    nodes9128 = node.contents();
    oldNodes.replaceWith(nodes9128);
  }));
}
renderControl1808();
root12449.append(node4635);
callback(root12449); return subs__;


return subs__;
};

ui.headerCol = function(width, elements, callback) {
var root12451 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4636 = $("<td>");

var ref3726 = width;
if(ref3726.get() !== null) {
  node4636.attr('width', ref3726.get());
  subs__.addSub(ref3726.addEventListener('change', function(_, ref, val) {
    if(ref === ref3726) {
      node4636.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3726.rebind());

var ref3727 = mobl.ref(ui.tdStyle);
if(ref3727.get() !== null) {
  node4636.attr('class', ref3727.get());
  subs__.addSub(ref3727.addEventListener('change', function(_, ref, val) {
    if(ref === ref3727) {
      node4636.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3727.rebind());


var node4637 = $("<strong>");

var nodes9129 = $("<span>");
node4637.append(nodes9129);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1809();
}));

function renderControl1809() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12452 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12452); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9129;
    nodes9129 = node.contents();
    oldNodes.replaceWith(nodes9129);
  }));
}
renderControl1809();
node4636.append(node4637);
root12451.append(node4636);
callback(root12451); return subs__;



return subs__;
};

ui.scroller = function(height, elements, callback) {
var root12453 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4638 = $("<div>");
node4638.attr('class', "scroller");

var nodes9130 = $("<span>");
node4638.append(nodes9130);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1810();
}));

function renderControl1810() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12454 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12454); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9130;
    nodes9130 = node.contents();
    oldNodes.replaceWith(nodes9130);
  }));
}
renderControl1810();
root12453.append(node4638);
var result__ = ui.setupScrollers();
callback(root12453); return subs__;


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
var root12455 = $("<span>");
var subs__ = new mobl.CompSubscription();

var slider = $("<div>");

root12455.append(slider);
var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                      if(event && event.stopPropagation) event.stopPropagation();
                                                                      var result__ = slider.slider("value");
                                                                      s.set(result__);
                                                                      var result__ = slider.slider("value");
                                                                      start.set(result__);
                                                                      if(callback && callback.apply) callback(); return;
                                                                    }}));
callback(root12455); return subs__;

return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
ui.tweetStyle = 'ui__tweetStyle';
ui.tweetIconStyle = 'ui__tweetIconStyle';
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
