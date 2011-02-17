mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
var root5222 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2593 = $("<span>");
root5222.append(node2593);
var condSubs392 = new mobl.CompSubscription();
subs__.addSub(condSubs392);
var oldValue392;
var renderCond392 = function() {
  var value676 = value.get();
  if(oldValue392 === value676) return;
  oldValue392 = value676;
  var subs__ = condSubs392;
  subs__.unsubscribe();
  node2593.empty();
  if(value676) {
    var nodes3419 = $("<span>");
    node2593.append(nodes3419);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl1293();
    }));
    
    function renderControl1293() {
      subs__.addSub((elements)(function(elements, callback) {
        var root5223 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5223); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3419;
        nodes3419 = node.contents();
        oldNodes.replaceWith(nodes3419);
      }));
    }
    renderControl1293();
    
    
  } else {
    
    var tmp5033 = mobl.ref(null);
    
    
    var tmp5032 = mobl.ref(null);
    
    var nodes3420 = $("<span>");
    node2593.append(nodes3420);
    subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp5032, tmp5033, function(_, callback) {
      var root5224 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root5224.append("Loading...");
      
      var tmp5026 = mobl.ref("middle");
      
      
      var tmp5025 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp5031 = mobl.ref(null);
      
      
      var tmp5030 = mobl.ref(null);
      
      
      var tmp5029 = mobl.ref(null);
      
      
      var tmp5028 = mobl.ref(null);
      
      
      var tmp5027 = mobl.ref(null);
      
      var nodes3421 = $("<span>");
      root5224.append(nodes3421);
      subs__.addSub((ui.image)(tmp5025, tmp5027, tmp5028, tmp5029, tmp5030, tmp5026, tmp5031, function(_, callback) {
        var root5225 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5225); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3421;
        nodes3421 = node.contents();
        oldNodes.replaceWith(nodes3421);
      }));
      callback(root5224); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3420;
      nodes3420 = node.contents();
      oldNodes.replaceWith(nodes3420);
    }));
    
    
  }
};
renderCond392();
subs__.addSub(value.addEventListener('change', function() {
  renderCond392();
}));

callback(root5222); return subs__;

return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
var root5226 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2594 = $("<div>");

var ref2823 = mobl.ref(ui.headerStyle);
if(ref2823.get() !== null) {
  node2594.attr('class', ref2823.get());
  subs__.addSub(ref2823.addEventListener('change', function(_, ref, val) {
    if(ref === ref2823) {
      node2594.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2823.rebind());

var val1462 = onclick.get();
if(val1462 !== null) {
  subs__.addSub(mobl.domBind(node2594, 'tap', val1462));
}


var node2595 = $("<div>");

var ref2822 = mobl.ref(ui.headerContainerStyle);
if(ref2822.get() !== null) {
  node2595.attr('class', ref2822.get());
  subs__.addSub(ref2822.addEventListener('change', function(_, ref, val) {
    if(ref === ref2822) {
      node2595.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2822.rebind());


var node2596 = $("<div>");

var ref2820 = text;
node2596.text(""+ref2820.get());
var ignore586 = false;
subs__.addSub(ref2820.addEventListener('change', function(_, ref, val) {
  if(ignore586) return;
  node2596.text(""+val);
}));
subs__.addSub(ref2820.rebind());


var ref2821 = mobl.ref(ui.headerTextStyle);
if(ref2821.get() !== null) {
  node2596.attr('class', ref2821.get());
  subs__.addSub(ref2821.addEventListener('change', function(_, ref, val) {
    if(ref === ref2821) {
      node2596.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2821.rebind());

node2595.append(node2596);
node2594.append(node2595);
var nodes3422 = $("<span>");
node2594.append(nodes3422);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1294();
}));

function renderControl1294() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5227 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5227); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3422;
    nodes3422 = node.contents();
    oldNodes.replaceWith(nodes3422);
  }));
}
renderControl1294();
root5226.append(node2594);
callback(root5226); return subs__;




return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root5228 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref2824 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref2824.get() !== null) {
  sp.attr('class', ref2824.get());
  subs__.addSub(ref2824.addEventListener('change', function(_, ref, val) {
    if(ref === ref2824) {
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
subs__.addSub(ref2824.rebind());

var val1463 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val1463 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val1463));
}

var val1464 = function(event, callback) {
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
if(val1464 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val1464));
}

var val1465 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after168(result__) {
                  var tmp5097 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after168);if(result__ !== undefined) after168(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val1465 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val1465));
}

var val1466 = function(event, callback) {
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
if(val1466 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val1466));
}

var ref2825 = text;
sp.text(""+ref2825.get());
var ignore587 = false;
subs__.addSub(ref2825.addEventListener('change', function(_, ref, val) {
  if(ignore587) return;
  sp.text(""+val);
}));
subs__.addSub(ref2825.rebind());


root5228.append(sp);
callback(root5228); return subs__;

return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root5229 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3423 = $("<span>");
root5229.append(nodes3423);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root5230 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5230); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3423;
  nodes3423 = node.contents();
  oldNodes.replaceWith(nodes3423);
}));
callback(root5229); return subs__;

return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root5231 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3424 = $("<span>");
root5231.append(nodes3424);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root5232 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5232); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3424;
  nodes3424 = node.contents();
  oldNodes.replaceWith(nodes3424);
}));
callback(root5231); return subs__;

return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
var root5233 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2597 = $("<div>");

var ref2826 = id;
if(ref2826.get() !== null) {
  node2597.attr('id', ref2826.get());
  subs__.addSub(ref2826.addEventListener('change', function(_, ref, val) {
    if(ref === ref2826) {
      node2597.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2826.rebind());

var ref2827 = cssClass;
if(ref2827.get() !== null) {
  node2597.attr('class', ref2827.get());
  subs__.addSub(ref2827.addEventListener('change', function(_, ref, val) {
    if(ref === ref2827) {
      node2597.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2827.rebind());

var val1467 = onclick.get();
if(val1467 !== null) {
  subs__.addSub(mobl.domBind(node2597, 'tap', val1467));
}

var nodes3425 = $("<span>");
node2597.append(nodes3425);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1295();
}));

function renderControl1295() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5234 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5234); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3425;
    nodes3425 = node.contents();
    oldNodes.replaceWith(nodes3425);
  }));
}
renderControl1295();
root5233.append(node2597);
callback(root5233); return subs__;


return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
var root5235 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2598 = $("<span>");

var ref2828 = id;
if(ref2828.get() !== null) {
  node2598.attr('id', ref2828.get());
  subs__.addSub(ref2828.addEventListener('change', function(_, ref, val) {
    if(ref === ref2828) {
      node2598.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2828.rebind());

var ref2829 = cssClass;
if(ref2829.get() !== null) {
  node2598.attr('class', ref2829.get());
  subs__.addSub(ref2829.addEventListener('change', function(_, ref, val) {
    if(ref === ref2829) {
      node2598.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2829.rebind());

var val1468 = onclick.get();
if(val1468 !== null) {
  subs__.addSub(mobl.domBind(node2598, 'tap', val1468));
}

var nodes3426 = $("<span>");
node2598.append(nodes3426);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1296();
}));

function renderControl1296() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5236 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5236); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3426;
    nodes3426 = node.contents();
    oldNodes.replaceWith(nodes3426);
  }));
}
renderControl1296();
root5235.append(node2598);
callback(root5235); return subs__;


return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
var root5237 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2599 = $("<ul>");

var ref2830 = mobl.ref(ui.groupStyle);
if(ref2830.get() !== null) {
  node2599.attr('class', ref2830.get());
  subs__.addSub(ref2830.addEventListener('change', function(_, ref, val) {
    if(ref === ref2830) {
      node2599.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2830.rebind());

var nodes3427 = $("<span>");
node2599.append(nodes3427);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1297();
}));

function renderControl1297() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5238 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5238); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3427;
    nodes3427 = node.contents();
    oldNodes.replaceWith(nodes3427);
  }));
}
renderControl1297();
root5237.append(node2599);
callback(root5237); return subs__;


return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root5239 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2600 = $("<img>");

var ref2831 = url;
if(ref2831.get() !== null) {
  node2600.attr('src', ref2831.get());
  subs__.addSub(ref2831.addEventListener('change', function(_, ref, val) {
    if(ref === ref2831) {
      node2600.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2831.rebind());

var ref2832 = width;
if(ref2832.get() !== null) {
  node2600.attr('width', ref2832.get());
  subs__.addSub(ref2832.addEventListener('change', function(_, ref, val) {
    if(ref === ref2832) {
      node2600.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2832.rebind());

var ref2833 = height;
if(ref2833.get() !== null) {
  node2600.attr('height', ref2833.get());
  subs__.addSub(ref2833.addEventListener('change', function(_, ref, val) {
    if(ref === ref2833) {
      node2600.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2833.rebind());

var ref2834 = style;
if(ref2834.get() !== null) {
  node2600.attr('class', ref2834.get());
  subs__.addSub(ref2834.addEventListener('change', function(_, ref, val) {
    if(ref === ref2834) {
      node2600.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2834.rebind());

var val1469 = onclick.get();
if(val1469 !== null) {
  subs__.addSub(mobl.domBind(node2600, 'tap', val1469));
}

var ref2835 = valign;
if(ref2835.get() !== null) {
  node2600.attr('valign', ref2835.get());
  subs__.addSub(ref2835.addEventListener('change', function(_, ref, val) {
    if(ref === ref2835) {
      node2600.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2835.rebind());

var ref2836 = align;
if(ref2836.get() !== null) {
  node2600.attr('align', ref2836.get());
  subs__.addSub(ref2836.addEventListener('change', function(_, ref, val) {
    if(ref === ref2836) {
      node2600.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2836.rebind());

root5239.append(node2600);
callback(root5239); return subs__;

return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root5240 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref2837 = mobl.ref(ui.itemStyle);
if(ref2837.get() !== null) {
  el.attr('class', ref2837.get());
  subs__.addSub(ref2837.addEventListener('change', function(_, ref, val) {
    if(ref === ref2837) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2837.rebind());

var ref2838 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref2838.get() !== null) {
  el.attr('class', ref2838.get());
  subs__.addSub(ref2838.addEventListener('change', function(_, ref, val) {
    if(ref === ref2838) {
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
subs__.addSub(ref2838.rebind());

var val1470 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp5098 = result__;
                                         function after169(result__) {
                                           var tmp5099 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after169);if(result__ !== undefined) after169(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp5100 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val1470 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val1470));
}

var nodes3428 = $("<span>");
el.append(nodes3428);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1298();
}));

function renderControl1298() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5241 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5241); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3428;
    nodes3428 = node.contents();
    oldNodes.replaceWith(nodes3428);
  }));
}
renderControl1298();
root5240.append(el);
callback(root5240); return subs__;


return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
var root5242 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2601 = $("<input>");
node2601.attr('type', "checkbox");

var ref2840 = b;
node2601.attr('checked', !!ref2840.get());
subs__.addSub(ref2840.addEventListener('change', function(_, ref, val) {
  if(ref === ref2840) node2601.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node2601, 'change', function() {
  b.set(!!node2601.attr('checked'));
}));

var val1472 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val1472 !== null) {
  subs__.addSub(mobl.domBind(node2601, 'tap', val1472));
}

var val1473 = onchange.get();
if(val1473 !== null) {
  subs__.addSub(mobl.domBind(node2601, 'change', val1473));
}

root5242.append(node2601);

root5242.append(" ");

var node2602 = $("<span>");

var ref2839 = label;
node2602.text(""+ref2839.get());
var ignore588 = false;
subs__.addSub(ref2839.addEventListener('change', function(_, ref, val) {
  if(ignore588) return;
  node2602.text(""+val);
}));
subs__.addSub(ref2839.rebind());


var val1471 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after170(result__) {
                  var tmp5101 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after170);if(result__ !== undefined) after170(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val1471 !== null) {
  subs__.addSub(mobl.domBind(node2602, 'tap', val1471));
}

root5242.append(node2602);
callback(root5242); return subs__;


return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root5243 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2603 = $("<span>");
root5243.append(node2603);
var condSubs393 = new mobl.CompSubscription();
subs__.addSub(condSubs393);
var oldValue393;
var renderCond393 = function() {
  var value677 = label.get();
  if(oldValue393 === value677) return;
  oldValue393 = value677;
  var subs__ = condSubs393;
  subs__.unsubscribe();
  node2603.empty();
  if(value677) {
    
    var node2604 = $("<span>");
    node2604.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref2844 = label;
    node2604.text(""+ref2844.get());
    var ignore590 = false;
    subs__.addSub(ref2844.addEventListener('change', function(_, ref, val) {
      if(ignore590) return;
      node2604.text(""+val);
    }));
    subs__.addSub(ref2844.rebind());
    
    
    node2603.append(node2604);
    
    var node2605 = $("<span>");
    node2605.attr('style', "float: left");
    
    
    var node2606 = $("<input>");
    node2606.attr('type', "text");
    
    var ref2841 = mobl.ref(ui.textFieldStyle);
    if(ref2841.get() !== null) {
      node2606.attr('class', ref2841.get());
      subs__.addSub(ref2841.addEventListener('change', function(_, ref, val) {
        if(ref === ref2841) {
          node2606.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref2841.rebind());
    
    var ref2842 = placeholder;
    if(ref2842.get() !== null) {
      node2606.attr('placeholder', ref2842.get());
      subs__.addSub(ref2842.addEventListener('change', function(_, ref, val) {
        if(ref === ref2842) {
          node2606.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref2842.rebind());
    
    var ref2843 = s;
    node2606.val(""+ref2843.get());
    var ignore589 = false;
    subs__.addSub(ref2843.addEventListener('change', function(_, ref, val) {
      if(ignore589) return;
      node2606.val(""+val);
    }));
    subs__.addSub(ref2843.rebind());
    
    subs__.addSub(mobl.domBind(node2606, 'keyup change', function() {
      ignore589 = true;
      s.set(mobl.stringTomobl__String(node2606.val()));
      ignore589 = false;
    }));
    
    
    var val1474 = onchange.get();
    if(val1474 !== null) {
      subs__.addSub(mobl.domBind(node2606, 'change', val1474));
    }
    
    var val1475 = onkeyup.get();
    if(val1475 !== null) {
      subs__.addSub(mobl.domBind(node2606, 'keyup', val1475));
    }
    
    var val1476 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1476 !== null) {
      subs__.addSub(mobl.domBind(node2606, 'blur', val1476));
    }
    
    node2605.append(node2606);
    node2603.append(node2605);
    
    
    
    
  } else {
    
    var node2607 = $("<input>");
    node2607.attr('type', "text");
    
    var ref2845 = mobl.ref(ui.textFieldStyle);
    if(ref2845.get() !== null) {
      node2607.attr('class', ref2845.get());
      subs__.addSub(ref2845.addEventListener('change', function(_, ref, val) {
        if(ref === ref2845) {
          node2607.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref2845.rebind());
    
    var ref2846 = placeholder;
    if(ref2846.get() !== null) {
      node2607.attr('placeholder', ref2846.get());
      subs__.addSub(ref2846.addEventListener('change', function(_, ref, val) {
        if(ref === ref2846) {
          node2607.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref2846.rebind());
    
    var ref2847 = s;
    node2607.val(""+ref2847.get());
    var ignore591 = false;
    subs__.addSub(ref2847.addEventListener('change', function(_, ref, val) {
      if(ignore591) return;
      node2607.val(""+val);
    }));
    subs__.addSub(ref2847.rebind());
    
    subs__.addSub(mobl.domBind(node2607, 'keyup change', function() {
      ignore591 = true;
      s.set(mobl.stringTomobl__String(node2607.val()));
      ignore591 = false;
    }));
    
    
    var val1477 = onchange.get();
    if(val1477 !== null) {
      subs__.addSub(mobl.domBind(node2607, 'change', val1477));
    }
    
    var val1478 = onkeyup.get();
    if(val1478 !== null) {
      subs__.addSub(mobl.domBind(node2607, 'keyup', val1478));
    }
    
    var val1479 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1479 !== null) {
      subs__.addSub(mobl.domBind(node2607, 'blur', val1479));
    }
    
    node2603.append(node2607);
    
    
  }
};
renderCond393();
subs__.addSub(label.addEventListener('change', function() {
  renderCond393();
}));

callback(root5243); return subs__;

return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
var root5244 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2608 = $("<span>");
root5244.append(node2608);
var condSubs394 = new mobl.CompSubscription();
subs__.addSub(condSubs394);
var oldValue394;
var renderCond394 = function() {
  var value678 = label.get();
  if(oldValue394 === value678) return;
  oldValue394 = value678;
  var subs__ = condSubs394;
  subs__.unsubscribe();
  node2608.empty();
  if(value678) {
    
    var node2609 = $("<span>");
    node2609.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref2851 = label;
    node2609.text(""+ref2851.get());
    var ignore593 = false;
    subs__.addSub(ref2851.addEventListener('change', function(_, ref, val) {
      if(ignore593) return;
      node2609.text(""+val);
    }));
    subs__.addSub(ref2851.rebind());
    
    
    node2608.append(node2609);
    
    var node2610 = $("<span>");
    node2610.attr('style', "float: left");
    
    
    var node2611 = $("<input>");
    node2611.attr('type', "text");
    
    var ref2848 = mobl.ref(ui.textFieldStyle);
    if(ref2848.get() !== null) {
      node2611.attr('class', ref2848.get());
      subs__.addSub(ref2848.addEventListener('change', function(_, ref, val) {
        if(ref === ref2848) {
          node2611.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref2848.rebind());
    
    var ref2849 = placeholder;
    if(ref2849.get() !== null) {
      node2611.attr('placeholder', ref2849.get());
      subs__.addSub(ref2849.addEventListener('change', function(_, ref, val) {
        if(ref === ref2849) {
          node2611.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref2849.rebind());
    
    var ref2850 = n;
    node2611.val(""+ref2850.get());
    var ignore592 = false;
    subs__.addSub(ref2850.addEventListener('change', function(_, ref, val) {
      if(ignore592) return;
      node2611.val(""+val);
    }));
    subs__.addSub(ref2850.rebind());
    
    subs__.addSub(mobl.domBind(node2611, 'keyup change', function() {
      ignore592 = true;
      n.set(mobl.stringTomobl__Num(node2611.val()));
      ignore592 = false;
    }));
    
    
    var val1480 = onchange.get();
    if(val1480 !== null) {
      subs__.addSub(mobl.domBind(node2611, 'change', val1480));
    }
    
    var val1481 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1481 !== null) {
      subs__.addSub(mobl.domBind(node2611, 'blur', val1481));
    }
    
    node2610.append(node2611);
    node2608.append(node2610);
    
    
    
    
  } else {
    
    var node2612 = $("<input>");
    node2612.attr('type', "text");
    
    var ref2852 = mobl.ref(ui.textFieldStyle);
    if(ref2852.get() !== null) {
      node2612.attr('class', ref2852.get());
      subs__.addSub(ref2852.addEventListener('change', function(_, ref, val) {
        if(ref === ref2852) {
          node2612.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref2852.rebind());
    
    var ref2853 = placeholder;
    if(ref2853.get() !== null) {
      node2612.attr('placeholder', ref2853.get());
      subs__.addSub(ref2853.addEventListener('change', function(_, ref, val) {
        if(ref === ref2853) {
          node2612.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref2853.rebind());
    
    var ref2854 = n;
    node2612.val(""+ref2854.get());
    var ignore594 = false;
    subs__.addSub(ref2854.addEventListener('change', function(_, ref, val) {
      if(ignore594) return;
      node2612.val(""+val);
    }));
    subs__.addSub(ref2854.rebind());
    
    subs__.addSub(mobl.domBind(node2612, 'keyup change', function() {
      ignore594 = true;
      n.set(mobl.stringTomobl__Num(node2612.val()));
      ignore594 = false;
    }));
    
    
    var val1482 = onchange.get();
    if(val1482 !== null) {
      subs__.addSub(mobl.domBind(node2612, 'change', val1482));
    }
    
    var val1483 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1483 !== null) {
      subs__.addSub(mobl.domBind(node2612, 'blur', val1483));
    }
    
    node2608.append(node2612);
    
    
  }
};
renderCond394();
subs__.addSub(label.addEventListener('change', function() {
  renderCond394();
}));

callback(root5244); return subs__;

return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
var root5245 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp5040 = mobl.ref(null);


var tmp5039 = mobl.ref(null);

var nodes3429 = $("<span>");
root5245.append(nodes3429);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp5039, tmp5040, function(_, callback) {
  var root5246 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2613 = mobl.loadingSpan();
  root5246.append(node2613);
  var list448;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList448 = function() {
    var subs__ = listSubs__;
    list448 = tabs.get();
    list448.list(function(results448) {
      node2613.empty();
      for(var i448 = 0; i448 < results448.length; i448++) {
        (function() {
          var iternode448 = $("<span>");
          node2613.append(iternode448);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results448), i448), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results448), i448), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results448), i448), "_3");
          
          var tmp5037 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp5037.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp5037.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp5037.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp5037.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp5036 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp5038 = mobl.ref(null);
          
          var nodes3430 = $("<span>");
          iternode448.append(nodes3430);
          subs__.addSub((ui.span)(tmp5037, tmp5038, tmp5036, function(_, callback) {
            var root5247 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp5035 = mobl.ref(null);
            
            
            var tmp5034 = mobl.ref(null);
            
            var nodes3431 = $("<span>");
            root5247.append(nodes3431);
            subs__.addSub((mobl.label)(tabName, tmp5034, tmp5035, function(_, callback) {
              var root5248 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5248); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3431;
              nodes3431 = node.contents();
              oldNodes.replaceWith(nodes3431);
            }));
            callback(root5247); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3430;
            nodes3430 = node.contents();
            oldNodes.replaceWith(nodes3430);
          }));
          
          var oldNodes = iternode448;
          iternode448 = iternode448.contents();
          oldNodes.replaceWith(iternode448);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list448.addEventListener('change', function() { listSubs__.unsubscribe(); renderList448(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList448(true); }));
    });
  };
  renderList448();
  
  callback(root5246); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3429;
  nodes3429 = node.contents();
  oldNodes.replaceWith(nodes3429);
}));

var node2614 = mobl.loadingSpan();
root5245.append(node2614);
var list449;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList449 = function() {
  var subs__ = listSubs__;
  list449 = tabs.get();
  list449.list(function(results449) {
    node2614.empty();
    for(var i449 = 0; i449 < results449.length; i449++) {
      (function() {
        var iternode449 = $("<span>");
        node2614.append(iternode449);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results449), i449), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results449), i449), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results449), i449), "_3");
        
        var tmp5041 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp5041.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp5041.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp5041.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp5041.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp5043 = mobl.ref(null);
        
        
        var tmp5042 = mobl.ref(null);
        
        var nodes3432 = $("<span>");
        iternode449.append(nodes3432);
        subs__.addSub((ui.block)(tmp5041, tmp5042, tmp5043, function(_, callback) {
          var root5249 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes3433 = $("<span>");
          root5249.append(nodes3433);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root5250 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes3434 = $("<span>");
            root5250.append(nodes3434);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl1299();
            }));
            
            function renderControl1299() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root5251 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5251); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3434;
                nodes3434 = node.contents();
                oldNodes.replaceWith(nodes3434);
              }));
            }
            renderControl1299();
            callback(root5250); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3433;
            nodes3433 = node.contents();
            oldNodes.replaceWith(nodes3433);
          }));
          callback(root5249); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3432;
          nodes3432 = node.contents();
          oldNodes.replaceWith(nodes3432);
        }));
        
        var oldNodes = iternode449;
        iternode449 = iternode449.contents();
        oldNodes.replaceWith(iternode449);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list449.addEventListener('change', function() { listSubs__.unsubscribe(); renderList449(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList449(true); }));
  });
};
renderList449();

callback(root5245); return subs__;


return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root5252 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2615 = $("<div>");

var ref2858 = mobl.ref(ui.searchboxStyle);
if(ref2858.get() !== null) {
  node2615.attr('class', ref2858.get());
  subs__.addSub(ref2858.addEventListener('change', function(_, ref, val) {
    if(ref === ref2858) {
      node2615.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2858.rebind());


var node2616 = $("<input>");
node2616.attr('type', "text");

var ref2855 = mobl.ref(ui.searchBoxInputStyle);
if(ref2855.get() !== null) {
  node2616.attr('class', ref2855.get());
  subs__.addSub(ref2855.addEventListener('change', function(_, ref, val) {
    if(ref === ref2855) {
      node2616.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2855.rebind());

var ref2856 = placeholder;
if(ref2856.get() !== null) {
  node2616.attr('placeholder', ref2856.get());
  subs__.addSub(ref2856.addEventListener('change', function(_, ref, val) {
    if(ref === ref2856) {
      node2616.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2856.rebind());

var ref2857 = s;
node2616.val(""+ref2857.get());
var ignore595 = false;
subs__.addSub(ref2857.addEventListener('change', function(_, ref, val) {
  if(ignore595) return;
  node2616.val(""+val);
}));
subs__.addSub(ref2857.rebind());

subs__.addSub(mobl.domBind(node2616, 'keyup change', function() {
  ignore595 = true;
  s.set(mobl.stringTomobl__String(node2616.val()));
  ignore595 = false;
}));


var val1484 = onsearch.get();
if(val1484 !== null) {
  subs__.addSub(mobl.domBind(node2616, 'change', val1484));
}

var val1485 = onkeyup.get();
if(val1485 !== null) {
  subs__.addSub(mobl.domBind(node2616, 'keyup', val1485));
}
node2616.attr('autocorrect', "off");
node2616.attr('autocapitalize', "off");
node2616.attr('autocomplete', "off");

node2615.append(node2616);
root5252.append(node2615);
callback(root5252); return subs__;


return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
var root5253 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref2859 = mobl.ref(ui.contextMenuStyle);
if(ref2859.get() !== null) {
  menu.attr('class', ref2859.get());
  subs__.addSub(ref2859.addEventListener('change', function(_, ref, val) {
    if(ref === ref2859) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2859.rebind());

var nodes3435 = $("<span>");
menu.append(nodes3435);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1300();
}));

function renderControl1300() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5254 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5254); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3435;
    nodes3435 = node.contents();
    oldNodes.replaceWith(nodes3435);
  }));
}
renderControl1300();
root5253.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val1486 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp5104 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val1486 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val1486));
}

root5253.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root5253); return subs__;



return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
var root5255 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp5096 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp5096.set(mobl.window.get().innerWidth > 500);
}));


var node2617 = $("<span>");
root5255.append(node2617);
var condSubs395 = new mobl.CompSubscription();
subs__.addSub(condSubs395);
var oldValue395;
var renderCond395 = function() {
  var value679 = tmp5096.get();
  if(oldValue395 === value679) return;
  oldValue395 = value679;
  var subs__ = condSubs395;
  subs__.unsubscribe();
  node2617.empty();
  if(value679) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node2618 = $("<div>");
      node2618.attr('width', "100%");
      
      
      var node2619 = $("<div>");
      node2619.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes3437 = $("<span>");
      node2619.append(nodes3437);
      subs__.addSub((ui.group)(function(_, callback) {
        var root5257 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2621 = mobl.loadingSpan();
        root5257.append(node2621);
        var list450;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList450 = function() {
          var subs__ = listSubs__;
          list450 = items.get();
          list450.list(function(results450) {
            node2621.empty();
            for(var i450 = 0; i450 < results450.length; i450++) {
              (function() {
                var iternode450 = $("<span>");
                node2621.append(iternode450);
                var it;
                it = mobl.ref(mobl.ref(results450), i450);
                
                var tmp5057 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp5057.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp5057.set(it.get() == current.get());
                }));
                
                
                var node2622 = $("<span>");
                iternode450.append(node2622);
                var condSubs396 = new mobl.CompSubscription();
                subs__.addSub(condSubs396);
                var oldValue396;
                var renderCond396 = function() {
                  var value680 = tmp5057.get();
                  if(oldValue396 === value680) return;
                  oldValue396 = value680;
                  var subs__ = condSubs396;
                  subs__.unsubscribe();
                  node2622.empty();
                  if(value680) {
                    
                    var tmp5053 = mobl.ref(false);
                    
                    
                    var tmp5052 = mobl.ref(null);
                    
                    
                    var tmp5051 = mobl.ref(null);
                    
                    var nodes3438 = $("<span>");
                    node2622.append(nodes3438);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp5051, tmp5052, tmp5053, function(_, callback) {
                      var root5258 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes3439 = $("<span>");
                      root5258.append(nodes3439);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1302();
                      }));
                      
                      function renderControl1302() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root5259 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root5259); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes3439;
                          nodes3439 = node.contents();
                          oldNodes.replaceWith(nodes3439);
                        }));
                      }
                      renderControl1302();
                      callback(root5258); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3438;
                      nodes3438 = node.contents();
                      oldNodes.replaceWith(nodes3438);
                    }));
                    
                    
                  } else {
                    
                    var tmp5055 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp5054 = mobl.ref(true);
                    
                    
                    var tmp5056 = mobl.ref(null);
                    
                    var nodes3440 = $("<span>");
                    node2622.append(nodes3440);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5055, tmp5056, tmp5054, function(_, callback) {
                      var root5260 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes3441 = $("<span>");
                      root5260.append(nodes3441);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1303();
                      }));
                      
                      function renderControl1303() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root5261 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root5261); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes3441;
                          nodes3441 = node.contents();
                          oldNodes.replaceWith(nodes3441);
                        }));
                      }
                      renderControl1303();
                      callback(root5260); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3440;
                      nodes3440 = node.contents();
                      oldNodes.replaceWith(nodes3440);
                    }));
                    
                    
                  }
                };
                renderCond396();
                subs__.addSub(tmp5057.addEventListener('change', function() {
                  renderCond396();
                }));
                
                
                var oldNodes = iternode450;
                iternode450 = iternode450.contents();
                oldNodes.replaceWith(iternode450);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list450.addEventListener('change', function() { listSubs__.unsubscribe(); renderList450(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList450(true); }));
          });
        };
        renderList450();
        
        callback(root5257); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3437;
        nodes3437 = node.contents();
        oldNodes.replaceWith(nodes3437);
      }));
      node2618.append(node2619);
      
      var node2620 = $("<div>");
      node2620.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes3436 = $("<span>");
      node2620.append(nodes3436);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl1301();
      }));
      
      function renderControl1301() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root5256 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5256); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3436;
          nodes3436 = node.contents();
          oldNodes.replaceWith(nodes3436);
        }));
      }
      renderControl1301();
      node2618.append(node2620);
      node2617.append(node2618);
      
      
      
      
      
      
    });
  } else {
    var nodes3442 = $("<span>");
    node2617.append(nodes3442);
    subs__.addSub((ui.group)(function(_, callback) {
      var root5262 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2623 = mobl.loadingSpan();
      root5262.append(node2623);
      var list451;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList451 = function() {
        var subs__ = listSubs__;
        list451 = items.get();
        list451.list(function(results451) {
          node2623.empty();
          for(var i451 = 0; i451 < results451.length; i451++) {
            (function() {
              var iternode451 = $("<span>");
              node2623.append(iternode451);
              var it;
              it = mobl.ref(mobl.ref(results451), i451);
              
              var tmp5044 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                   var tmp5105 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp5046 = mobl.ref(false);
              
              
              var tmp5045 = mobl.ref(null);
              
              var nodes3443 = $("<span>");
              iternode451.append(nodes3443);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5044, tmp5045, tmp5046, function(_, callback) {
                var root5263 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3444 = $("<span>");
                root5263.append(nodes3444);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl1304();
                }));
                
                function renderControl1304() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root5264 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5264); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3444;
                    nodes3444 = node.contents();
                    oldNodes.replaceWith(nodes3444);
                  }));
                }
                renderControl1304();
                callback(root5263); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3443;
                nodes3443 = node.contents();
                oldNodes.replaceWith(nodes3443);
              }));
              
              var oldNodes = iternode451;
              iternode451 = iternode451.contents();
              oldNodes.replaceWith(iternode451);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list451.addEventListener('change', function() { listSubs__.unsubscribe(); renderList451(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList451(true); }));
        });
      };
      renderList451();
      
      callback(root5262); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3442;
      nodes3442 = node.contents();
      oldNodes.replaceWith(nodes3442);
    }));
    
    
  }
};
renderCond395();
subs__.addSub(tmp5096.addEventListener('change', function() {
  renderCond395();
}));

callback(root5255); return subs__;

return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
var root5265 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp5049 = mobl.ref("Detail");


var tmp5050 = mobl.ref(null);

var nodes3445 = $("<span>");
root5265.append(nodes3445);
subs__.addSub((ui.header)(tmp5049, tmp5050, function(_, callback) {
  var root5266 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5048 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp5047 = mobl.ref("Back");
  
  var nodes3446 = $("<span>");
  root5266.append(nodes3446);
  subs__.addSub((ui.backButton)(tmp5047, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5048, function(_, callback) {
    var root5267 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5267); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3446;
    nodes3446 = node.contents();
    oldNodes.replaceWith(nodes3446);
  }));
  callback(root5266); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3445;
  nodes3445 = node.contents();
  oldNodes.replaceWith(nodes3445);
}));
var nodes3447 = $("<span>");
root5265.append(nodes3447);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl1305();
}));

function renderControl1305() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root5268 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5268); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3447;
    nodes3447 = node.contents();
    oldNodes.replaceWith(nodes3447);
  }));
}
renderControl1305();
callback(root5265); return subs__;


return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root5269 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes3448 = $("<span>");
root5269.append(nodes3448);
subs__.addSub((ui.group)(function(_, callback) {
  var root5270 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2624 = mobl.loadingSpan();
  root5270.append(node2624);
  var list452;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList452 = function() {
    var subs__ = listSubs__;
    list452 = coll.get();
    list452.list(function(results452) {
      node2624.empty();
      for(var i452 = 0; i452 < results452.length; i452++) {
        (function() {
          var iternode452 = $("<span>");
          node2624.append(iternode452);
          var it;
          it = mobl.ref(mobl.ref(results452), i452);
          
          var tmp5064 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp5064.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp5064.set(it.get() == selected.get());
          }));
          
          
          var node2625 = $("<span>");
          iternode452.append(node2625);
          var condSubs397 = new mobl.CompSubscription();
          subs__.addSub(condSubs397);
          var oldValue397;
          var renderCond397 = function() {
            var value681 = tmp5064.get();
            if(oldValue397 === value681) return;
            oldValue397 = value681;
            var subs__ = condSubs397;
            subs__.unsubscribe();
            node2625.empty();
            if(value681) {
              
              var tmp5060 = mobl.ref(false);
              
              
              var tmp5059 = mobl.ref(null);
              
              
              var tmp5058 = mobl.ref(null);
              
              var nodes3449 = $("<span>");
              node2625.append(nodes3449);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5058, tmp5059, tmp5060, function(_, callback) {
                var root5271 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3450 = $("<span>");
                root5271.append(nodes3450);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl1306();
                }));
                
                function renderControl1306() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root5272 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5272); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3450;
                    nodes3450 = node.contents();
                    oldNodes.replaceWith(nodes3450);
                  }));
                }
                renderControl1306();
                callback(root5271); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3449;
                nodes3449 = node.contents();
                oldNodes.replaceWith(nodes3449);
              }));
              
              
            } else {
              
              var tmp5062 = mobl.ref(true);
              
              
              var tmp5061 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp5063 = mobl.ref(null);
              
              var nodes3451 = $("<span>");
              node2625.append(nodes3451);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5061, tmp5063, tmp5062, function(_, callback) {
                var root5273 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3452 = $("<span>");
                root5273.append(nodes3452);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl1307();
                }));
                
                function renderControl1307() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root5274 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5274); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3452;
                    nodes3452 = node.contents();
                    oldNodes.replaceWith(nodes3452);
                  }));
                }
                renderControl1307();
                callback(root5273); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3451;
                nodes3451 = node.contents();
                oldNodes.replaceWith(nodes3451);
              }));
              
              
            }
          };
          renderCond397();
          subs__.addSub(tmp5064.addEventListener('change', function() {
            renderCond397();
          }));
          
          
          var oldNodes = iternode452;
          iternode452 = iternode452.contents();
          oldNodes.replaceWith(iternode452);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list452.addEventListener('change', function() { listSubs__.unsubscribe(); renderList452(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList452(true); }));
    });
  };
  renderList452();
  
  callback(root5270); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3448;
  nodes3448 = node.contents();
  oldNodes.replaceWith(nodes3448);
}));
callback(root5269); return subs__;

return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root5275 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes3453 = $("<span>");
  root5275.append(nodes3453);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5276 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5068 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp5068.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp5068.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp5068.set(coll.get().limit(n.get()));
    }));
    
    
    var node2626 = mobl.loadingSpan();
    root5276.append(node2626);
    var list453;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList453 = function() {
      var subs__ = listSubs__;
      list453 = tmp5068.get();
      list453.list(function(results453) {
        node2626.empty();
        for(var i453 = 0; i453 < results453.length; i453++) {
          (function() {
            var iternode453 = $("<span>");
            node2626.append(iternode453);
            var it;
            it = mobl.ref(mobl.ref(results453), i453);
            
            var tmp5065 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp5067 = mobl.ref(false);
            
            
            var tmp5066 = mobl.ref(null);
            
            var nodes3454 = $("<span>");
            iternode453.append(nodes3454);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5065, tmp5066, tmp5067, function(_, callback) {
              var root5277 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3455 = $("<span>");
              root5277.append(nodes3455);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl1308();
              }));
              
              function renderControl1308() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root5278 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5278); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3455;
                  nodes3455 = node.contents();
                  oldNodes.replaceWith(nodes3455);
                }));
              }
              renderControl1308();
              callback(root5277); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3454;
              nodes3454 = node.contents();
              oldNodes.replaceWith(nodes3454);
            }));
            
            var oldNodes = iternode453;
            iternode453 = iternode453.contents();
            oldNodes.replaceWith(iternode453);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list453.addEventListener('change', function() { listSubs__.unsubscribe(); renderList453(true); }));
        subs__.addSub(tmp5068.addEventListener('change', function() { listSubs__.unsubscribe(); renderList453(true); }));
      });
    };
    renderList453();
    
    
    var tmp5069 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp5069.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp5069.set(n.get() < total.get());
    }));
    
    
    var node2627 = $("<span>");
    root5276.append(node2627);
    var condSubs398 = new mobl.CompSubscription();
    subs__.addSub(condSubs398);
    var oldValue398;
    var renderCond398 = function() {
      var value682 = tmp5069.get();
      if(oldValue398 === value682) return;
      oldValue398 = value682;
      var subs__ = condSubs398;
      subs__.unsubscribe();
      node2627.empty();
      if(value682) {
        
        var node2628 = $("<li>");
        
        var ref2860 = mobl.ref(ui.loadMoreStyle);
        if(ref2860.get() !== null) {
          node2628.attr('class', ref2860.get());
          subs__.addSub(ref2860.addEventListener('change', function(_, ref, val) {
            if(ref === ref2860) {
              node2628.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref2860.rebind());
        
        var val1487 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1487 !== null) {
          subs__.addSub(mobl.domBind(node2628, 'tap', val1487));
        }
        
        
        node2628.append("More");
        node2627.append(node2628);
        
        
      } else {
        
      }
    };
    renderCond398();
    subs__.addSub(tmp5069.addEventListener('change', function() {
      renderCond398();
    }));
    
    callback(root5276); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3453;
    nodes3453 = node.contents();
    oldNodes.replaceWith(nodes3453);
  }));
  callback(root5275); return subs__;
  
});
return subs__;
};

ui.markableList = function(items, elements, callback) {
var root5279 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3456 = $("<span>");
root5279.append(nodes3456);
subs__.addSub((ui.group)(function(_, callback) {
  var root5280 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2629 = mobl.loadingSpan();
  root5280.append(node2629);
  var list454;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList454 = function() {
    var subs__ = listSubs__;
    list454 = items.get();
    list454.list(function(results454) {
      node2629.empty();
      for(var i454 = 0; i454 < results454.length; i454++) {
        (function() {
          var iternode454 = $("<span>");
          node2629.append(iternode454);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results454), i454), "_1");it = mobl.ref(mobl.ref(mobl.ref(results454), i454), "_2");
          
          var tmp5073 = mobl.ref(false);
          
          
          var tmp5072 = mobl.ref(null);
          
          
          var tmp5071 = mobl.ref(null);
          
          var nodes3457 = $("<span>");
          iternode454.append(nodes3457);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5071, tmp5072, tmp5073, function(_, callback) {
            var root5281 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp5070 = mobl.ref(null);
            
            var nodes3458 = $("<span>");
            root5281.append(nodes3458);
            subs__.addSub((ui.checkBox)(checked, it, tmp5070, function(_, callback) {
              var root5282 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5282); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3458;
              nodes3458 = node.contents();
              oldNodes.replaceWith(nodes3458);
            }));
            callback(root5281); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3457;
            nodes3457 = node.contents();
            oldNodes.replaceWith(nodes3457);
          }));
          
          var oldNodes = iternode454;
          iternode454 = iternode454.contents();
          oldNodes.replaceWith(iternode454);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list454.addEventListener('change', function() { listSubs__.unsubscribe(); renderList454(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList454(true); }));
    });
  };
  renderList454();
  
  callback(root5280); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3456;
  nodes3456 = node.contents();
  oldNodes.replaceWith(nodes3456);
}));
callback(root5279); return subs__;

return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
var root5283 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll953) {
  coll953 = coll953.reverse();
  function processOne113() {
    var it;
    it = coll953.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll953.length > 0) processOne113(); else rest113();
    
  }
  function rest113() {
    
    var tmp5078 = mobl.ref(null);
    
    var nodes3459 = $("<span>");
    root5283.append(nodes3459);
    subs__.addSub((ui.header)(title, tmp5078, function(_, callback) {
      var root5284 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp5074 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp5075 = mobl.ref("Back");
      
      var nodes3460 = $("<span>");
      root5284.append(nodes3460);
      subs__.addSub((ui.backButton)(tmp5075, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5074, function(_, callback) {
        var root5285 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5285); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3460;
        nodes3460 = node.contents();
        oldNodes.replaceWith(nodes3460);
      }));
      
      var tmp5077 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll952) {
                             coll952 = coll952.reverse();
                             function processOne112() {
                               var checked;var it;
                               var tmp5107 = coll952.pop();
                               checked = tmp5107._1;it = tmp5107._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll952.length > 0) processOne112(); else rest112();
                                 
                               } else {
                                 {
                                   
                                   if(coll952.length > 0) processOne112(); else rest112();
                                   
                                 }
                               }
                             }
                             function rest112() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll952.length > 0) processOne112(); else rest112();
                           });
                           
                         });
      
      
      var tmp5076 = mobl.ref("Done");
      
      var nodes3461 = $("<span>");
      root5284.append(nodes3461);
      subs__.addSub((ui.button)(tmp5076, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp5077, function(_, callback) {
        var root5286 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5286); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3461;
        nodes3461 = node.contents();
        oldNodes.replaceWith(nodes3461);
      }));
      callback(root5284); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3459;
      nodes3459 = node.contents();
      oldNodes.replaceWith(nodes3459);
    }));
    var nodes3462 = $("<span>");
    root5283.append(nodes3462);
    subs__.addSub((ui.markableList)(items, function(_, callback) {
      var root5287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5287); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3462;
      nodes3462 = node.contents();
      oldNodes.replaceWith(nodes3462);
    }));
    callback(root5283); return subs__;
    
    
  }
  if(coll953.length > 0) processOne113(); else rest113();
});

return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root5288 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp5079 = mobl.ref("Search term");


var tmp5081 = mobl.ref(null);


var tmp5080 = mobl.ref(null);

var nodes3463 = $("<span>");
root5288.append(nodes3463);
subs__.addSub((ui.searchBox)(phrase, tmp5079, tmp5080, tmp5081, function(_, callback) {
  var root5289 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5289); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3463;
  nodes3463 = node.contents();
  oldNodes.replaceWith(nodes3463);
}));

var tmp5082 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp5082.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp5082.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp5082.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp5082.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp5082.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes3464 = $("<span>");
root5288.append(nodes3464);
subs__.addSub((ui.masterDetail)(tmp5082, masterItem, detailItem, function(_, callback) {
  var root5290 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5290); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3464;
  nodes3464 = node.contents();
  oldNodes.replaceWith(nodes3464);
}));
callback(root5288); return subs__;


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
var root5291 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp5092 = mobl.ref(null);


var tmp5091 = mobl.ref(null);

var nodes3465 = $("<span>");
root5291.append(nodes3465);
subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp5091, tmp5092, function(_, callback) {
  var root5292 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2630 = mobl.loadingSpan();
  root5292.append(node2630);
  var list455;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList455 = function() {
    var subs__ = listSubs__;
    list455 = sections.get();
    list455.list(function(results455) {
      node2630.empty();
      for(var i455 = 0; i455 < results455.length; i455++) {
        (function() {
          var iternode455 = $("<span>");
          node2630.append(iternode455);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results455), i455), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results455), i455), "_2");
          
          var tmp5086 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp5086.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp5086.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp5086.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp5086.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp5085 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp5087 = mobl.ref(null);
          
          var nodes3466 = $("<span>");
          iternode455.append(nodes3466);
          subs__.addSub((ui.span)(tmp5086, tmp5087, tmp5085, function(_, callback) {
            var root5293 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp5084 = mobl.ref(null);
            
            
            var tmp5083 = mobl.ref(null);
            
            var nodes3467 = $("<span>");
            root5293.append(nodes3467);
            subs__.addSub((mobl.label)(sectionName, tmp5083, tmp5084, function(_, callback) {
              var root5294 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5294); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3467;
              nodes3467 = node.contents();
              oldNodes.replaceWith(nodes3467);
            }));
            callback(root5293); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3466;
            nodes3466 = node.contents();
            oldNodes.replaceWith(nodes3466);
          }));
          
          var tmp5088 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp5088.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp5088.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
            tmp5088.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
            tmp5088.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          
          
          var tmp5090 = mobl.ref(null);
          
          
          var tmp5089 = mobl.ref(null);
          
          var nodes3468 = $("<span>");
          iternode455.append(nodes3468);
          subs__.addSub((ui.block)(tmp5088, tmp5089, tmp5090, function(_, callback) {
            var root5295 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes3469 = $("<span>");
            root5295.append(nodes3469);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl1309();
            }));
            
            function renderControl1309() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root5296 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5296); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3469;
                nodes3469 = node.contents();
                oldNodes.replaceWith(nodes3469);
              }));
            }
            renderControl1309();
            callback(root5295); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3468;
            nodes3468 = node.contents();
            oldNodes.replaceWith(nodes3468);
          }));
          
          var oldNodes = iternode455;
          iternode455 = iternode455.contents();
          oldNodes.replaceWith(iternode455);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list455.addEventListener('change', function() { listSubs__.unsubscribe(); renderList455(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList455(true); }));
    });
  };
  renderList455();
  
  callback(root5292); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3465;
  nodes3465 = node.contents();
  oldNodes.replaceWith(nodes3465);
}));
callback(root5291); return subs__;

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
var root5297 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2631 = $("<table>");

var ref2861 = mobl.ref(ui.tableStyle);
if(ref2861.get() !== null) {
  node2631.attr('class', ref2861.get());
  subs__.addSub(ref2861.addEventListener('change', function(_, ref, val) {
    if(ref === ref2861) {
      node2631.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2861.rebind());

var nodes3470 = $("<span>");
node2631.append(nodes3470);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1310();
}));

function renderControl1310() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5298 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5298); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3470;
    nodes3470 = node.contents();
    oldNodes.replaceWith(nodes3470);
  }));
}
renderControl1310();
root5297.append(node2631);
callback(root5297); return subs__;


return subs__;
};

ui.row = function(elements, callback) {
var root5299 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2632 = $("<tr>");

var ref2862 = mobl.ref(ui.trStyle);
if(ref2862.get() !== null) {
  node2632.attr('class', ref2862.get());
  subs__.addSub(ref2862.addEventListener('change', function(_, ref, val) {
    if(ref === ref2862) {
      node2632.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2862.rebind());

var nodes3471 = $("<span>");
node2632.append(nodes3471);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1311();
}));

function renderControl1311() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5300 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5300); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3471;
    nodes3471 = node.contents();
    oldNodes.replaceWith(nodes3471);
  }));
}
renderControl1311();
root5299.append(node2632);
callback(root5299); return subs__;


return subs__;
};

ui.cell = function(width, elements, callback) {
var root5301 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2633 = $("<td>");

var ref2863 = width;
if(ref2863.get() !== null) {
  node2633.attr('width', ref2863.get());
  subs__.addSub(ref2863.addEventListener('change', function(_, ref, val) {
    if(ref === ref2863) {
      node2633.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2863.rebind());

var ref2864 = mobl.ref(ui.tdStyle);
if(ref2864.get() !== null) {
  node2633.attr('class', ref2864.get());
  subs__.addSub(ref2864.addEventListener('change', function(_, ref, val) {
    if(ref === ref2864) {
      node2633.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2864.rebind());

var nodes3472 = $("<span>");
node2633.append(nodes3472);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1312();
}));

function renderControl1312() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5302 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5302); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3472;
    nodes3472 = node.contents();
    oldNodes.replaceWith(nodes3472);
  }));
}
renderControl1312();
root5301.append(node2633);
callback(root5301); return subs__;


return subs__;
};

ui.col = function(width, elements, callback) {
var root5303 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2634 = $("<td>");

var ref2865 = width;
if(ref2865.get() !== null) {
  node2634.attr('width', ref2865.get());
  subs__.addSub(ref2865.addEventListener('change', function(_, ref, val) {
    if(ref === ref2865) {
      node2634.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2865.rebind());

var ref2866 = mobl.ref(ui.tdStyle);
if(ref2866.get() !== null) {
  node2634.attr('class', ref2866.get());
  subs__.addSub(ref2866.addEventListener('change', function(_, ref, val) {
    if(ref === ref2866) {
      node2634.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2866.rebind());

var nodes3473 = $("<span>");
node2634.append(nodes3473);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1313();
}));

function renderControl1313() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5304 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5304); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3473;
    nodes3473 = node.contents();
    oldNodes.replaceWith(nodes3473);
  }));
}
renderControl1313();
root5303.append(node2634);
callback(root5303); return subs__;


return subs__;
};

ui.headerCol = function(width, elements, callback) {
var root5305 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2635 = $("<td>");

var ref2867 = width;
if(ref2867.get() !== null) {
  node2635.attr('width', ref2867.get());
  subs__.addSub(ref2867.addEventListener('change', function(_, ref, val) {
    if(ref === ref2867) {
      node2635.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2867.rebind());

var ref2868 = mobl.ref(ui.tdStyle);
if(ref2868.get() !== null) {
  node2635.attr('class', ref2868.get());
  subs__.addSub(ref2868.addEventListener('change', function(_, ref, val) {
    if(ref === ref2868) {
      node2635.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2868.rebind());


var node2636 = $("<strong>");

var nodes3474 = $("<span>");
node2636.append(nodes3474);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1314();
}));

function renderControl1314() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5306 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5306); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3474;
    nodes3474 = node.contents();
    oldNodes.replaceWith(nodes3474);
  }));
}
renderControl1314();
node2635.append(node2636);
root5305.append(node2635);
callback(root5305); return subs__;



return subs__;
};

ui.scroller = function(height, elements, callback) {
var root5307 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2637 = $("<div>");
node2637.attr('class', "scroller");

var nodes3475 = $("<span>");
node2637.append(nodes3475);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1315();
}));

function renderControl1315() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5308 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5308); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3475;
    nodes3475 = node.contents();
    oldNodes.replaceWith(nodes3475);
  }));
}
renderControl1315();
root5307.append(node2637);
var result__ = ui.setupScrollers();
callback(root5307); return subs__;


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
var root5309 = $("<span>");
var subs__ = new mobl.CompSubscription();

var slider = $("<div>");

root5309.append(slider);

var tmp5093 = mobl.ref(start.get() + "%");
subs__.addSub(start.addEventListener('change', function() {
  tmp5093.set(start.get() + "%");
}));


var tmp5095 = mobl.ref(null);


var tmp5094 = mobl.ref(null);

var nodes3476 = $("<span>");
root5309.append(nodes3476);
subs__.addSub((mobl.label)(tmp5093, tmp5094, tmp5095, function(_, callback) {
  var root5310 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5310); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3476;
  nodes3476 = node.contents();
  oldNodes.replaceWith(nodes3476);
}));

var node2638 = $("<input>");
node2638.attr('type', "hidden");

var ref2869 = s;
node2638.val(""+ref2869.get());
var ignore596 = false;
subs__.addSub(ref2869.addEventListener('change', function(_, ref, val) {
  if(ignore596) return;
  node2638.val(""+val);
}));
subs__.addSub(ref2869.rebind());

subs__.addSub(mobl.domBind(node2638, 'keyup change', function() {
  ignore596 = true;
  s.set(mobl.stringTomobl__String(node2638.val()));
  ignore596 = false;
}));


var ref2870 = start;
if(ref2870.get() !== null) {
  node2638.attr('value', ref2870.get());
  subs__.addSub(ref2870.addEventListener('change', function(_, ref, val) {
    if(ref === ref2870) {
      node2638.attr('value', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref2870.rebind());

root5309.append(node2638);
var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                      if(event && event.stopPropagation) event.stopPropagation();
                                                                      var result__ = slider.slider("value");
                                                                      s.set(result__);
                                                                      var result__ = slider.slider("value");
                                                                      start.set(result__);
                                                                      if(callback && callback.apply) callback(); return;
                                                                    }}));
callback(root5309); return subs__;



return subs__;
};
ui.title = 'ui__title';
ui.emphasis = 'ui__emphasis';
ui.ranger = 'ui__ranger';
