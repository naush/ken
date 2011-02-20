mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
var root807 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node108 = $("<span>");
root807.append(node108);
var condSubs14 = new mobl.CompSubscription();
subs__.addSub(condSubs14);
var oldValue14;
var renderCond14 = function() {
  var value57 = value.get();
  if(oldValue14 === value57) return;
  oldValue14 = value57;
  var subs__ = condSubs14;
  subs__.unsubscribe();
  node108.empty();
  if(value57) {
    var nodes649 = $("<span>");
    node108.append(nodes649);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl46();
    }));
    
    function renderControl46() {
      subs__.addSub((elements)(function(elements, callback) {
        var root808 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root808); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes649;
        nodes649 = node.contents();
        oldNodes.replaceWith(nodes649);
      }));
    }
    renderControl46();
    
    
  } else {
    
    var tmp1547 = mobl.ref(null);
    
    
    var tmp1546 = mobl.ref(null);
    
    var nodes650 = $("<span>");
    node108.append(nodes650);
    subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp1546, tmp1547, function(_, callback) {
      var root809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root809.append("Loading...");
      
      var tmp1539 = mobl.ref("middle");
      
      
      var tmp1538 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp1545 = mobl.ref(null);
      
      
      var tmp1544 = mobl.ref(null);
      
      
      var tmp1543 = mobl.ref(null);
      
      
      var tmp1542 = mobl.ref(null);
      
      
      var tmp1541 = mobl.ref(null);
      
      var nodes651 = $("<span>");
      root809.append(nodes651);
      subs__.addSub((ui.image)(tmp1538, tmp1541, tmp1542, tmp1543, tmp1544, tmp1539, tmp1545, function(_, callback) {
        var root810 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root810); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes651;
        nodes651 = node.contents();
        oldNodes.replaceWith(nodes651);
      }));
      callback(root809); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes650;
      nodes650 = node.contents();
      oldNodes.replaceWith(nodes650);
    }));
    
    
  }
};
renderCond14();
subs__.addSub(value.addEventListener('change', function() {
  renderCond14();
}));

callback(root807); return subs__;

return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
var root811 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node109 = $("<div>");

var ref101 = mobl.ref(ui.headerStyle);
if(ref101.get() !== null) {
  node109.attr('class', ref101.get());
  subs__.addSub(ref101.addEventListener('change', function(_, ref, val) {
    if(ref === ref101) {
      node109.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref101.rebind());

var val52 = onclick.get();
if(val52 !== null) {
  subs__.addSub(mobl.domBind(node109, 'tap', val52));
}


var node110 = $("<div>");

var ref100 = mobl.ref(ui.headerContainerStyle);
if(ref100.get() !== null) {
  node110.attr('class', ref100.get());
  subs__.addSub(ref100.addEventListener('change', function(_, ref, val) {
    if(ref === ref100) {
      node110.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref100.rebind());


var node111 = $("<div>");

var ref98 = text;
node111.text(""+ref98.get());
var ignore20 = false;
subs__.addSub(ref98.addEventListener('change', function(_, ref, val) {
  if(ignore20) return;
  node111.text(""+val);
}));
subs__.addSub(ref98.rebind());


var ref99 = mobl.ref(ui.headerTextStyle);
if(ref99.get() !== null) {
  node111.attr('class', ref99.get());
  subs__.addSub(ref99.addEventListener('change', function(_, ref, val) {
    if(ref === ref99) {
      node111.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref99.rebind());

node110.append(node111);
node109.append(node110);
var nodes652 = $("<span>");
node109.append(nodes652);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl47();
}));

function renderControl47() {
  subs__.addSub((elements)(function(elements, callback) {
    var root812 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root812); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes652;
    nodes652 = node.contents();
    oldNodes.replaceWith(nodes652);
  }));
}
renderControl47();
root811.append(node109);
callback(root811); return subs__;




return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root813 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref102 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref102.get() !== null) {
  sp.attr('class', ref102.get());
  subs__.addSub(ref102.addEventListener('change', function(_, ref, val) {
    if(ref === ref102) {
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
subs__.addSub(ref102.rebind());

var val53 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val53 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val53));
}

var val54 = function(event, callback) {
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
if(val54 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val54));
}

var val55 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after6(result__) {
                  var tmp1614 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after6);if(result__ !== undefined) after6(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val55 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val55));
}

var val56 = function(event, callback) {
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
if(val56 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val56));
}

var ref103 = text;
sp.text(""+ref103.get());
var ignore21 = false;
subs__.addSub(ref103.addEventListener('change', function(_, ref, val) {
  if(ignore21) return;
  sp.text(""+val);
}));
subs__.addSub(ref103.rebind());


root813.append(sp);
callback(root813); return subs__;

return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root814 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes653 = $("<span>");
root814.append(nodes653);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root815 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root815); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes653;
  nodes653 = node.contents();
  oldNodes.replaceWith(nodes653);
}));
callback(root814); return subs__;

return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root816 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes654 = $("<span>");
root816.append(nodes654);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root817 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root817); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes654;
  nodes654 = node.contents();
  oldNodes.replaceWith(nodes654);
}));
callback(root816); return subs__;

return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
var root818 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node112 = $("<div>");

var ref104 = id;
if(ref104.get() !== null) {
  node112.attr('id', ref104.get());
  subs__.addSub(ref104.addEventListener('change', function(_, ref, val) {
    if(ref === ref104) {
      node112.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref104.rebind());

var ref105 = cssClass;
if(ref105.get() !== null) {
  node112.attr('class', ref105.get());
  subs__.addSub(ref105.addEventListener('change', function(_, ref, val) {
    if(ref === ref105) {
      node112.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref105.rebind());

var val57 = onclick.get();
if(val57 !== null) {
  subs__.addSub(mobl.domBind(node112, 'tap', val57));
}

var nodes655 = $("<span>");
node112.append(nodes655);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl48();
}));

function renderControl48() {
  subs__.addSub((elements)(function(elements, callback) {
    var root819 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root819); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes655;
    nodes655 = node.contents();
    oldNodes.replaceWith(nodes655);
  }));
}
renderControl48();
root818.append(node112);
callback(root818); return subs__;


return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
var root820 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node113 = $("<span>");

var ref106 = id;
if(ref106.get() !== null) {
  node113.attr('id', ref106.get());
  subs__.addSub(ref106.addEventListener('change', function(_, ref, val) {
    if(ref === ref106) {
      node113.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref106.rebind());

var ref107 = cssClass;
if(ref107.get() !== null) {
  node113.attr('class', ref107.get());
  subs__.addSub(ref107.addEventListener('change', function(_, ref, val) {
    if(ref === ref107) {
      node113.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref107.rebind());

var val58 = onclick.get();
if(val58 !== null) {
  subs__.addSub(mobl.domBind(node113, 'tap', val58));
}

var nodes656 = $("<span>");
node113.append(nodes656);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl49();
}));

function renderControl49() {
  subs__.addSub((elements)(function(elements, callback) {
    var root821 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root821); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes656;
    nodes656 = node.contents();
    oldNodes.replaceWith(nodes656);
  }));
}
renderControl49();
root820.append(node113);
callback(root820); return subs__;


return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
var root822 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node114 = $("<ul>");

var ref108 = mobl.ref(ui.groupStyle);
if(ref108.get() !== null) {
  node114.attr('class', ref108.get());
  subs__.addSub(ref108.addEventListener('change', function(_, ref, val) {
    if(ref === ref108) {
      node114.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref108.rebind());

var nodes657 = $("<span>");
node114.append(nodes657);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl50();
}));

function renderControl50() {
  subs__.addSub((elements)(function(elements, callback) {
    var root823 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root823); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes657;
    nodes657 = node.contents();
    oldNodes.replaceWith(nodes657);
  }));
}
renderControl50();
root822.append(node114);
callback(root822); return subs__;


return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root824 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node115 = $("<img>");

var ref109 = url;
if(ref109.get() !== null) {
  node115.attr('src', ref109.get());
  subs__.addSub(ref109.addEventListener('change', function(_, ref, val) {
    if(ref === ref109) {
      node115.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref109.rebind());

var ref110 = width;
if(ref110.get() !== null) {
  node115.attr('width', ref110.get());
  subs__.addSub(ref110.addEventListener('change', function(_, ref, val) {
    if(ref === ref110) {
      node115.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref110.rebind());

var ref111 = height;
if(ref111.get() !== null) {
  node115.attr('height', ref111.get());
  subs__.addSub(ref111.addEventListener('change', function(_, ref, val) {
    if(ref === ref111) {
      node115.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref111.rebind());

var ref112 = style;
if(ref112.get() !== null) {
  node115.attr('class', ref112.get());
  subs__.addSub(ref112.addEventListener('change', function(_, ref, val) {
    if(ref === ref112) {
      node115.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref112.rebind());

var val59 = onclick.get();
if(val59 !== null) {
  subs__.addSub(mobl.domBind(node115, 'tap', val59));
}

var ref113 = valign;
if(ref113.get() !== null) {
  node115.attr('valign', ref113.get());
  subs__.addSub(ref113.addEventListener('change', function(_, ref, val) {
    if(ref === ref113) {
      node115.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref113.rebind());

var ref114 = align;
if(ref114.get() !== null) {
  node115.attr('align', ref114.get());
  subs__.addSub(ref114.addEventListener('change', function(_, ref, val) {
    if(ref === ref114) {
      node115.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref114.rebind());

root824.append(node115);
callback(root824); return subs__;

return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root825 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref115 = mobl.ref(ui.itemStyle);
if(ref115.get() !== null) {
  el.attr('class', ref115.get());
  subs__.addSub(ref115.addEventListener('change', function(_, ref, val) {
    if(ref === ref115) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref115.rebind());

var ref116 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref116.get() !== null) {
  el.attr('class', ref116.get());
  subs__.addSub(ref116.addEventListener('change', function(_, ref, val) {
    if(ref === ref116) {
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
subs__.addSub(ref116.rebind());

var val60 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp1615 = result__;
                                         function after7(result__) {
                                           var tmp1616 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after7);if(result__ !== undefined) after7(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp1617 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val60 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val60));
}

var nodes658 = $("<span>");
el.append(nodes658);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl51();
}));

function renderControl51() {
  subs__.addSub((elements)(function(elements, callback) {
    var root826 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root826); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes658;
    nodes658 = node.contents();
    oldNodes.replaceWith(nodes658);
  }));
}
renderControl51();
root825.append(el);
callback(root825); return subs__;


return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
var root827 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node116 = $("<input>");
node116.attr('type', "checkbox");

var ref118 = b;
node116.attr('checked', !!ref118.get());
subs__.addSub(ref118.addEventListener('change', function(_, ref, val) {
  if(ref === ref118) node116.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node116, 'change', function() {
  b.set(!!node116.attr('checked'));
}));

var val62 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val62 !== null) {
  subs__.addSub(mobl.domBind(node116, 'tap', val62));
}

var val63 = onchange.get();
if(val63 !== null) {
  subs__.addSub(mobl.domBind(node116, 'change', val63));
}

root827.append(node116);

root827.append(" ");

var node117 = $("<span>");

var ref117 = label;
node117.text(""+ref117.get());
var ignore22 = false;
subs__.addSub(ref117.addEventListener('change', function(_, ref, val) {
  if(ignore22) return;
  node117.text(""+val);
}));
subs__.addSub(ref117.rebind());


var val61 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after8(result__) {
                  var tmp1618 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after8);if(result__ !== undefined) after8(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val61 !== null) {
  subs__.addSub(mobl.domBind(node117, 'tap', val61));
}

root827.append(node117);
callback(root827); return subs__;


return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root828 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node118 = $("<span>");
root828.append(node118);
var condSubs15 = new mobl.CompSubscription();
subs__.addSub(condSubs15);
var oldValue15;
var renderCond15 = function() {
  var value58 = label.get();
  if(oldValue15 === value58) return;
  oldValue15 = value58;
  var subs__ = condSubs15;
  subs__.unsubscribe();
  node118.empty();
  if(value58) {
    
    var node119 = $("<span>");
    node119.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref122 = label;
    node119.text(""+ref122.get());
    var ignore24 = false;
    subs__.addSub(ref122.addEventListener('change', function(_, ref, val) {
      if(ignore24) return;
      node119.text(""+val);
    }));
    subs__.addSub(ref122.rebind());
    
    
    node118.append(node119);
    
    var node120 = $("<span>");
    node120.attr('style', "float: left");
    
    
    var node121 = $("<input>");
    node121.attr('type', "text");
    
    var ref119 = mobl.ref(ui.textFieldStyle);
    if(ref119.get() !== null) {
      node121.attr('class', ref119.get());
      subs__.addSub(ref119.addEventListener('change', function(_, ref, val) {
        if(ref === ref119) {
          node121.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref119.rebind());
    
    var ref120 = placeholder;
    if(ref120.get() !== null) {
      node121.attr('placeholder', ref120.get());
      subs__.addSub(ref120.addEventListener('change', function(_, ref, val) {
        if(ref === ref120) {
          node121.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref120.rebind());
    
    var ref121 = s;
    node121.val(""+ref121.get());
    var ignore23 = false;
    subs__.addSub(ref121.addEventListener('change', function(_, ref, val) {
      if(ignore23) return;
      node121.val(""+val);
    }));
    subs__.addSub(ref121.rebind());
    
    subs__.addSub(mobl.domBind(node121, 'keyup change', function() {
      ignore23 = true;
      s.set(mobl.stringTomobl__String(node121.val()));
      ignore23 = false;
    }));
    
    
    var val64 = onchange.get();
    if(val64 !== null) {
      subs__.addSub(mobl.domBind(node121, 'change', val64));
    }
    
    var val65 = onkeyup.get();
    if(val65 !== null) {
      subs__.addSub(mobl.domBind(node121, 'keyup', val65));
    }
    
    var val66 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val66 !== null) {
      subs__.addSub(mobl.domBind(node121, 'blur', val66));
    }
    
    node120.append(node121);
    node118.append(node120);
    
    
    
    
  } else {
    
    var node122 = $("<input>");
    node122.attr('type', "text");
    
    var ref123 = mobl.ref(ui.textFieldStyle);
    if(ref123.get() !== null) {
      node122.attr('class', ref123.get());
      subs__.addSub(ref123.addEventListener('change', function(_, ref, val) {
        if(ref === ref123) {
          node122.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref123.rebind());
    
    var ref124 = placeholder;
    if(ref124.get() !== null) {
      node122.attr('placeholder', ref124.get());
      subs__.addSub(ref124.addEventListener('change', function(_, ref, val) {
        if(ref === ref124) {
          node122.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref124.rebind());
    
    var ref125 = s;
    node122.val(""+ref125.get());
    var ignore25 = false;
    subs__.addSub(ref125.addEventListener('change', function(_, ref, val) {
      if(ignore25) return;
      node122.val(""+val);
    }));
    subs__.addSub(ref125.rebind());
    
    subs__.addSub(mobl.domBind(node122, 'keyup change', function() {
      ignore25 = true;
      s.set(mobl.stringTomobl__String(node122.val()));
      ignore25 = false;
    }));
    
    
    var val67 = onchange.get();
    if(val67 !== null) {
      subs__.addSub(mobl.domBind(node122, 'change', val67));
    }
    
    var val68 = onkeyup.get();
    if(val68 !== null) {
      subs__.addSub(mobl.domBind(node122, 'keyup', val68));
    }
    
    var val69 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val69 !== null) {
      subs__.addSub(mobl.domBind(node122, 'blur', val69));
    }
    
    node118.append(node122);
    
    
  }
};
renderCond15();
subs__.addSub(label.addEventListener('change', function() {
  renderCond15();
}));

callback(root828); return subs__;

return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
var root829 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node123 = $("<span>");
root829.append(node123);
var condSubs16 = new mobl.CompSubscription();
subs__.addSub(condSubs16);
var oldValue16;
var renderCond16 = function() {
  var value59 = label.get();
  if(oldValue16 === value59) return;
  oldValue16 = value59;
  var subs__ = condSubs16;
  subs__.unsubscribe();
  node123.empty();
  if(value59) {
    
    var node124 = $("<span>");
    node124.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref129 = label;
    node124.text(""+ref129.get());
    var ignore27 = false;
    subs__.addSub(ref129.addEventListener('change', function(_, ref, val) {
      if(ignore27) return;
      node124.text(""+val);
    }));
    subs__.addSub(ref129.rebind());
    
    
    node123.append(node124);
    
    var node125 = $("<span>");
    node125.attr('style', "float: left");
    
    
    var node126 = $("<input>");
    node126.attr('type', "text");
    
    var ref126 = mobl.ref(ui.textFieldStyle);
    if(ref126.get() !== null) {
      node126.attr('class', ref126.get());
      subs__.addSub(ref126.addEventListener('change', function(_, ref, val) {
        if(ref === ref126) {
          node126.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref126.rebind());
    
    var ref127 = placeholder;
    if(ref127.get() !== null) {
      node126.attr('placeholder', ref127.get());
      subs__.addSub(ref127.addEventListener('change', function(_, ref, val) {
        if(ref === ref127) {
          node126.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref127.rebind());
    
    var ref128 = n;
    node126.val(""+ref128.get());
    var ignore26 = false;
    subs__.addSub(ref128.addEventListener('change', function(_, ref, val) {
      if(ignore26) return;
      node126.val(""+val);
    }));
    subs__.addSub(ref128.rebind());
    
    subs__.addSub(mobl.domBind(node126, 'keyup change', function() {
      ignore26 = true;
      n.set(mobl.stringTomobl__Num(node126.val()));
      ignore26 = false;
    }));
    
    
    var val70 = onchange.get();
    if(val70 !== null) {
      subs__.addSub(mobl.domBind(node126, 'change', val70));
    }
    
    var val71 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val71 !== null) {
      subs__.addSub(mobl.domBind(node126, 'blur', val71));
    }
    
    node125.append(node126);
    node123.append(node125);
    
    
    
    
  } else {
    
    var node127 = $("<input>");
    node127.attr('type', "text");
    
    var ref130 = mobl.ref(ui.textFieldStyle);
    if(ref130.get() !== null) {
      node127.attr('class', ref130.get());
      subs__.addSub(ref130.addEventListener('change', function(_, ref, val) {
        if(ref === ref130) {
          node127.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref130.rebind());
    
    var ref131 = placeholder;
    if(ref131.get() !== null) {
      node127.attr('placeholder', ref131.get());
      subs__.addSub(ref131.addEventListener('change', function(_, ref, val) {
        if(ref === ref131) {
          node127.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref131.rebind());
    
    var ref132 = n;
    node127.val(""+ref132.get());
    var ignore28 = false;
    subs__.addSub(ref132.addEventListener('change', function(_, ref, val) {
      if(ignore28) return;
      node127.val(""+val);
    }));
    subs__.addSub(ref132.rebind());
    
    subs__.addSub(mobl.domBind(node127, 'keyup change', function() {
      ignore28 = true;
      n.set(mobl.stringTomobl__Num(node127.val()));
      ignore28 = false;
    }));
    
    
    var val72 = onchange.get();
    if(val72 !== null) {
      subs__.addSub(mobl.domBind(node127, 'change', val72));
    }
    
    var val73 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val73 !== null) {
      subs__.addSub(mobl.domBind(node127, 'blur', val73));
    }
    
    node123.append(node127);
    
    
  }
};
renderCond16();
subs__.addSub(label.addEventListener('change', function() {
  renderCond16();
}));

callback(root829); return subs__;

return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
var root830 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp1555 = mobl.ref(null);


var tmp1554 = mobl.ref(null);

var nodes659 = $("<span>");
root830.append(nodes659);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp1554, tmp1555, function(_, callback) {
  var root831 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node128 = mobl.loadingSpan();
  root831.append(node128);
  var list30;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList30 = function() {
    var subs__ = listSubs__;
    list30 = tabs.get();
    list30.list(function(results56) {
      node128.empty();
      for(var i33 = 0; i33 < results56.length; i33++) {
        (function() {
          var iternode30 = $("<span>");
          node128.append(iternode30);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results56), i33), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results56), i33), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results56), i33), "_3");
          
          var tmp1552 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp1552.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp1552.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp1552.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp1552.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp1551 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp1553 = mobl.ref(null);
          
          var nodes660 = $("<span>");
          iternode30.append(nodes660);
          subs__.addSub((ui.span)(tmp1552, tmp1553, tmp1551, function(_, callback) {
            var root832 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp1549 = mobl.ref(null);
            
            
            var tmp1548 = mobl.ref(null);
            
            var nodes661 = $("<span>");
            root832.append(nodes661);
            subs__.addSub((mobl.label)(tabName, tmp1548, tmp1549, function(_, callback) {
              var root833 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root833); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes661;
              nodes661 = node.contents();
              oldNodes.replaceWith(nodes661);
            }));
            callback(root832); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes660;
            nodes660 = node.contents();
            oldNodes.replaceWith(nodes660);
          }));
          
          var oldNodes = iternode30;
          iternode30 = iternode30.contents();
          oldNodes.replaceWith(iternode30);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list30.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
    });
  };
  renderList30();
  
  callback(root831); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes659;
  nodes659 = node.contents();
  oldNodes.replaceWith(nodes659);
}));

var node129 = mobl.loadingSpan();
root830.append(node129);
var list31;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList31 = function() {
  var subs__ = listSubs__;
  list31 = tabs.get();
  list31.list(function(results57) {
    node129.empty();
    for(var i34 = 0; i34 < results57.length; i34++) {
      (function() {
        var iternode31 = $("<span>");
        node129.append(iternode31);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results57), i34), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results57), i34), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results57), i34), "_3");
        
        var tmp1556 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp1556.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp1556.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp1556.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp1556.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp1558 = mobl.ref(null);
        
        
        var tmp1557 = mobl.ref(null);
        
        var nodes662 = $("<span>");
        iternode31.append(nodes662);
        subs__.addSub((ui.block)(tmp1556, tmp1557, tmp1558, function(_, callback) {
          var root834 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes663 = $("<span>");
          root834.append(nodes663);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root835 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes664 = $("<span>");
            root835.append(nodes664);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl52();
            }));
            
            function renderControl52() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root836 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root836); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes664;
                nodes664 = node.contents();
                oldNodes.replaceWith(nodes664);
              }));
            }
            renderControl52();
            callback(root835); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes663;
            nodes663 = node.contents();
            oldNodes.replaceWith(nodes663);
          }));
          callback(root834); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes662;
          nodes662 = node.contents();
          oldNodes.replaceWith(nodes662);
        }));
        
        var oldNodes = iternode31;
        iternode31 = iternode31.contents();
        oldNodes.replaceWith(iternode31);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list31.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
  });
};
renderList31();

callback(root830); return subs__;


return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root837 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node130 = $("<div>");

var ref136 = mobl.ref(ui.searchboxStyle);
if(ref136.get() !== null) {
  node130.attr('class', ref136.get());
  subs__.addSub(ref136.addEventListener('change', function(_, ref, val) {
    if(ref === ref136) {
      node130.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref136.rebind());


var node131 = $("<input>");
node131.attr('type', "text");

var ref133 = mobl.ref(ui.searchBoxInputStyle);
if(ref133.get() !== null) {
  node131.attr('class', ref133.get());
  subs__.addSub(ref133.addEventListener('change', function(_, ref, val) {
    if(ref === ref133) {
      node131.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref133.rebind());

var ref134 = placeholder;
if(ref134.get() !== null) {
  node131.attr('placeholder', ref134.get());
  subs__.addSub(ref134.addEventListener('change', function(_, ref, val) {
    if(ref === ref134) {
      node131.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref134.rebind());

var ref135 = s;
node131.val(""+ref135.get());
var ignore29 = false;
subs__.addSub(ref135.addEventListener('change', function(_, ref, val) {
  if(ignore29) return;
  node131.val(""+val);
}));
subs__.addSub(ref135.rebind());

subs__.addSub(mobl.domBind(node131, 'keyup change', function() {
  ignore29 = true;
  s.set(mobl.stringTomobl__String(node131.val()));
  ignore29 = false;
}));


var val74 = onsearch.get();
if(val74 !== null) {
  subs__.addSub(mobl.domBind(node131, 'change', val74));
}

var val75 = onkeyup.get();
if(val75 !== null) {
  subs__.addSub(mobl.domBind(node131, 'keyup', val75));
}
node131.attr('autocorrect', "off");
node131.attr('autocapitalize', "off");
node131.attr('autocomplete', "off");

node130.append(node131);
root837.append(node130);
callback(root837); return subs__;


return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
var root838 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref137 = mobl.ref(ui.contextMenuStyle);
if(ref137.get() !== null) {
  menu.attr('class', ref137.get());
  subs__.addSub(ref137.addEventListener('change', function(_, ref, val) {
    if(ref === ref137) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref137.rebind());

var nodes665 = $("<span>");
menu.append(nodes665);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl53();
}));

function renderControl53() {
  subs__.addSub((elements)(function(elements, callback) {
    var root839 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root839); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes665;
    nodes665 = node.contents();
    oldNodes.replaceWith(nodes665);
  }));
}
renderControl53();
root838.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val76 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp1622 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val76 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val76));
}

root838.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root838); return subs__;



return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
var root840 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp1613 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp1613.set(mobl.window.get().innerWidth > 500);
}));


var node132 = $("<span>");
root840.append(node132);
var condSubs17 = new mobl.CompSubscription();
subs__.addSub(condSubs17);
var oldValue17;
var renderCond17 = function() {
  var value60 = tmp1613.get();
  if(oldValue17 === value60) return;
  oldValue17 = value60;
  var subs__ = condSubs17;
  subs__.unsubscribe();
  node132.empty();
  if(value60) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node133 = $("<div>");
      node133.attr('width', "100%");
      
      
      var node134 = $("<div>");
      node134.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes667 = $("<span>");
      node134.append(nodes667);
      subs__.addSub((ui.group)(function(_, callback) {
        var root842 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node136 = mobl.loadingSpan();
        root842.append(node136);
        var list32;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList32 = function() {
          var subs__ = listSubs__;
          list32 = items.get();
          list32.list(function(results58) {
            node136.empty();
            for(var i35 = 0; i35 < results58.length; i35++) {
              (function() {
                var iternode32 = $("<span>");
                node136.append(iternode32);
                var it;
                it = mobl.ref(mobl.ref(results58), i35);
                
                var tmp1574 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp1574.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp1574.set(it.get() == current.get());
                }));
                
                
                var node137 = $("<span>");
                iternode32.append(node137);
                var condSubs18 = new mobl.CompSubscription();
                subs__.addSub(condSubs18);
                var oldValue18;
                var renderCond18 = function() {
                  var value61 = tmp1574.get();
                  if(oldValue18 === value61) return;
                  oldValue18 = value61;
                  var subs__ = condSubs18;
                  subs__.unsubscribe();
                  node137.empty();
                  if(value61) {
                    
                    var tmp1569 = mobl.ref(false);
                    
                    
                    var tmp1568 = mobl.ref(null);
                    
                    
                    var tmp1567 = mobl.ref(null);
                    
                    var nodes668 = $("<span>");
                    node137.append(nodes668);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp1567, tmp1568, tmp1569, function(_, callback) {
                      var root843 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes669 = $("<span>");
                      root843.append(nodes669);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl55();
                      }));
                      
                      function renderControl55() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root844 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root844); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes669;
                          nodes669 = node.contents();
                          oldNodes.replaceWith(nodes669);
                        }));
                      }
                      renderControl55();
                      callback(root843); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes668;
                      nodes668 = node.contents();
                      oldNodes.replaceWith(nodes668);
                    }));
                    
                    
                  } else {
                    
                    var tmp1572 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp1571 = mobl.ref(true);
                    
                    
                    var tmp1573 = mobl.ref(null);
                    
                    var nodes670 = $("<span>");
                    node137.append(nodes670);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1572, tmp1573, tmp1571, function(_, callback) {
                      var root845 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes671 = $("<span>");
                      root845.append(nodes671);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl56();
                      }));
                      
                      function renderControl56() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root846 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root846); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes671;
                          nodes671 = node.contents();
                          oldNodes.replaceWith(nodes671);
                        }));
                      }
                      renderControl56();
                      callback(root845); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes670;
                      nodes670 = node.contents();
                      oldNodes.replaceWith(nodes670);
                    }));
                    
                    
                  }
                };
                renderCond18();
                subs__.addSub(tmp1574.addEventListener('change', function() {
                  renderCond18();
                }));
                
                
                var oldNodes = iternode32;
                iternode32 = iternode32.contents();
                oldNodes.replaceWith(iternode32);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list32.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
          });
        };
        renderList32();
        
        callback(root842); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes667;
        nodes667 = node.contents();
        oldNodes.replaceWith(nodes667);
      }));
      node133.append(node134);
      
      var node135 = $("<div>");
      node135.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes666 = $("<span>");
      node135.append(nodes666);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl54();
      }));
      
      function renderControl54() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root841 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root841); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes666;
          nodes666 = node.contents();
          oldNodes.replaceWith(nodes666);
        }));
      }
      renderControl54();
      node133.append(node135);
      node132.append(node133);
      
      
      
      
      
      
    });
  } else {
    var nodes672 = $("<span>");
    node132.append(nodes672);
    subs__.addSub((ui.group)(function(_, callback) {
      var root847 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node138 = mobl.loadingSpan();
      root847.append(node138);
      var list33;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList33 = function() {
        var subs__ = listSubs__;
        list33 = items.get();
        list33.list(function(results59) {
          node138.empty();
          for(var i36 = 0; i36 < results59.length; i36++) {
            (function() {
              var iternode33 = $("<span>");
              node138.append(iternode33);
              var it;
              it = mobl.ref(mobl.ref(results59), i36);
              
              var tmp1559 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                   var tmp1623 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp1562 = mobl.ref(false);
              
              
              var tmp1561 = mobl.ref(null);
              
              var nodes673 = $("<span>");
              iternode33.append(nodes673);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1559, tmp1561, tmp1562, function(_, callback) {
                var root848 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes674 = $("<span>");
                root848.append(nodes674);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl57();
                }));
                
                function renderControl57() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root849 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root849); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes674;
                    nodes674 = node.contents();
                    oldNodes.replaceWith(nodes674);
                  }));
                }
                renderControl57();
                callback(root848); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes673;
                nodes673 = node.contents();
                oldNodes.replaceWith(nodes673);
              }));
              
              var oldNodes = iternode33;
              iternode33 = iternode33.contents();
              oldNodes.replaceWith(iternode33);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list33.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
        });
      };
      renderList33();
      
      callback(root847); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes672;
      nodes672 = node.contents();
      oldNodes.replaceWith(nodes672);
    }));
    
    
  }
};
renderCond17();
subs__.addSub(tmp1613.addEventListener('change', function() {
  renderCond17();
}));

callback(root840); return subs__;

return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
var root850 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp1565 = mobl.ref("Detail");


var tmp1566 = mobl.ref(null);

var nodes675 = $("<span>");
root850.append(nodes675);
subs__.addSub((ui.header)(tmp1565, tmp1566, function(_, callback) {
  var root851 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1564 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp1563 = mobl.ref("Back");
  
  var nodes676 = $("<span>");
  root851.append(nodes676);
  subs__.addSub((ui.backButton)(tmp1563, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1564, function(_, callback) {
    var root852 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root852); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes676;
    nodes676 = node.contents();
    oldNodes.replaceWith(nodes676);
  }));
  callback(root851); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes675;
  nodes675 = node.contents();
  oldNodes.replaceWith(nodes675);
}));
var nodes677 = $("<span>");
root850.append(nodes677);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl58();
}));

function renderControl58() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root853 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root853); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes677;
    nodes677 = node.contents();
    oldNodes.replaceWith(nodes677);
  }));
}
renderControl58();
callback(root850); return subs__;


return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root854 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes678 = $("<span>");
root854.append(nodes678);
subs__.addSub((ui.group)(function(_, callback) {
  var root855 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node139 = mobl.loadingSpan();
  root855.append(node139);
  var list34;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList34 = function() {
    var subs__ = listSubs__;
    list34 = coll.get();
    list34.list(function(results60) {
      node139.empty();
      for(var i37 = 0; i37 < results60.length; i37++) {
        (function() {
          var iternode34 = $("<span>");
          node139.append(iternode34);
          var it;
          it = mobl.ref(mobl.ref(results60), i37);
          
          var tmp1582 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp1582.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp1582.set(it.get() == selected.get());
          }));
          
          
          var node140 = $("<span>");
          iternode34.append(node140);
          var condSubs19 = new mobl.CompSubscription();
          subs__.addSub(condSubs19);
          var oldValue19;
          var renderCond19 = function() {
            var value62 = tmp1582.get();
            if(oldValue19 === value62) return;
            oldValue19 = value62;
            var subs__ = condSubs19;
            subs__.unsubscribe();
            node140.empty();
            if(value62) {
              
              var tmp1577 = mobl.ref(false);
              
              
              var tmp1576 = mobl.ref(null);
              
              
              var tmp1575 = mobl.ref(null);
              
              var nodes679 = $("<span>");
              node140.append(nodes679);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1575, tmp1576, tmp1577, function(_, callback) {
                var root856 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes680 = $("<span>");
                root856.append(nodes680);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl59();
                }));
                
                function renderControl59() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root857 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root857); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes680;
                    nodes680 = node.contents();
                    oldNodes.replaceWith(nodes680);
                  }));
                }
                renderControl59();
                callback(root856); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes679;
                nodes679 = node.contents();
                oldNodes.replaceWith(nodes679);
              }));
              
              
            } else {
              
              var tmp1579 = mobl.ref(true);
              
              
              var tmp1578 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp1581 = mobl.ref(null);
              
              var nodes682 = $("<span>");
              node140.append(nodes682);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1578, tmp1581, tmp1579, function(_, callback) {
                var root858 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes683 = $("<span>");
                root858.append(nodes683);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl60();
                }));
                
                function renderControl60() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root859 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root859); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes683;
                    nodes683 = node.contents();
                    oldNodes.replaceWith(nodes683);
                  }));
                }
                renderControl60();
                callback(root858); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes682;
                nodes682 = node.contents();
                oldNodes.replaceWith(nodes682);
              }));
              
              
            }
          };
          renderCond19();
          subs__.addSub(tmp1582.addEventListener('change', function() {
            renderCond19();
          }));
          
          
          var oldNodes = iternode34;
          iternode34 = iternode34.contents();
          oldNodes.replaceWith(iternode34);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list34.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
    });
  };
  renderList34();
  
  callback(root855); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes678;
  nodes678 = node.contents();
  oldNodes.replaceWith(nodes678);
}));
callback(root854); return subs__;

return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root860 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes684 = $("<span>");
  root860.append(nodes684);
  subs__.addSub((ui.group)(function(_, callback) {
    var root861 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp1586 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp1586.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp1586.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp1586.set(coll.get().limit(n.get()));
    }));
    
    
    var node141 = mobl.loadingSpan();
    root861.append(node141);
    var list35;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList35 = function() {
      var subs__ = listSubs__;
      list35 = tmp1586.get();
      list35.list(function(results61) {
        node141.empty();
        for(var i38 = 0; i38 < results61.length; i38++) {
          (function() {
            var iternode35 = $("<span>");
            node141.append(iternode35);
            var it;
            it = mobl.ref(mobl.ref(results61), i38);
            
            var tmp1583 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1585 = mobl.ref(false);
            
            
            var tmp1584 = mobl.ref(null);
            
            var nodes685 = $("<span>");
            iternode35.append(nodes685);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1583, tmp1584, tmp1585, function(_, callback) {
              var root862 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes686 = $("<span>");
              root862.append(nodes686);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl61();
              }));
              
              function renderControl61() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root863 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root863); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes686;
                  nodes686 = node.contents();
                  oldNodes.replaceWith(nodes686);
                }));
              }
              renderControl61();
              callback(root862); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes685;
              nodes685 = node.contents();
              oldNodes.replaceWith(nodes685);
            }));
            
            var oldNodes = iternode35;
            iternode35 = iternode35.contents();
            oldNodes.replaceWith(iternode35);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list35.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
        subs__.addSub(tmp1586.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
      });
    };
    renderList35();
    
    
    var tmp1587 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp1587.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp1587.set(n.get() < total.get());
    }));
    
    
    var node142 = $("<span>");
    root861.append(node142);
    var condSubs20 = new mobl.CompSubscription();
    subs__.addSub(condSubs20);
    var oldValue20;
    var renderCond20 = function() {
      var value63 = tmp1587.get();
      if(oldValue20 === value63) return;
      oldValue20 = value63;
      var subs__ = condSubs20;
      subs__.unsubscribe();
      node142.empty();
      if(value63) {
        
        var node143 = $("<li>");
        
        var ref138 = mobl.ref(ui.loadMoreStyle);
        if(ref138.get() !== null) {
          node143.attr('class', ref138.get());
          subs__.addSub(ref138.addEventListener('change', function(_, ref, val) {
            if(ref === ref138) {
              node143.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref138.rebind());
        
        var val77 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val77 !== null) {
          subs__.addSub(mobl.domBind(node143, 'tap', val77));
        }
        
        
        node143.append("More");
        node142.append(node143);
        
        
      } else {
        
      }
    };
    renderCond20();
    subs__.addSub(tmp1587.addEventListener('change', function() {
      renderCond20();
    }));
    
    callback(root861); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes684;
    nodes684 = node.contents();
    oldNodes.replaceWith(nodes684);
  }));
  callback(root860); return subs__;
  
});
return subs__;
};

ui.markableList = function(items, elements, callback) {
var root864 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes687 = $("<span>");
root864.append(nodes687);
subs__.addSub((ui.group)(function(_, callback) {
  var root865 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node144 = mobl.loadingSpan();
  root865.append(node144);
  var list36;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList36 = function() {
    var subs__ = listSubs__;
    list36 = items.get();
    list36.list(function(results62) {
      node144.empty();
      for(var i39 = 0; i39 < results62.length; i39++) {
        (function() {
          var iternode36 = $("<span>");
          node144.append(iternode36);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results62), i39), "_1");it = mobl.ref(mobl.ref(mobl.ref(results62), i39), "_2");
          
          var tmp1592 = mobl.ref(false);
          
          
          var tmp1591 = mobl.ref(null);
          
          
          var tmp1589 = mobl.ref(null);
          
          var nodes688 = $("<span>");
          iternode36.append(nodes688);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1589, tmp1591, tmp1592, function(_, callback) {
            var root866 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp1588 = mobl.ref(null);
            
            var nodes689 = $("<span>");
            root866.append(nodes689);
            subs__.addSub((ui.checkBox)(checked, it, tmp1588, function(_, callback) {
              var root867 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root867); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes689;
              nodes689 = node.contents();
              oldNodes.replaceWith(nodes689);
            }));
            callback(root866); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes688;
            nodes688 = node.contents();
            oldNodes.replaceWith(nodes688);
          }));
          
          var oldNodes = iternode36;
          iternode36 = iternode36.contents();
          oldNodes.replaceWith(iternode36);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list36.addEventListener('change', function() { listSubs__.unsubscribe(); renderList36(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList36(true); }));
    });
  };
  renderList36();
  
  callback(root865); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes687;
  nodes687 = node.contents();
  oldNodes.replaceWith(nodes687);
}));
callback(root864); return subs__;

return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
var root868 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll119) {
  coll119 = coll119.reverse();
  function processOne11() {
    var it;
    it = coll119.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll119.length > 0) processOne11(); else rest11();
    
  }
  function rest11() {
    
    var tmp1597 = mobl.ref(null);
    
    var nodes690 = $("<span>");
    root868.append(nodes690);
    subs__.addSub((ui.header)(title, tmp1597, function(_, callback) {
      var root869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp1593 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp1594 = mobl.ref("Back");
      
      var nodes691 = $("<span>");
      root869.append(nodes691);
      subs__.addSub((ui.backButton)(tmp1594, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1593, function(_, callback) {
        var root870 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root870); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes691;
        nodes691 = node.contents();
        oldNodes.replaceWith(nodes691);
      }));
      
      var tmp1596 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll118) {
                             coll118 = coll118.reverse();
                             function processOne10() {
                               var checked;var it;
                               var tmp1625 = coll118.pop();
                               checked = tmp1625._1;it = tmp1625._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll118.length > 0) processOne10(); else rest10();
                                 
                               } else {
                                 {
                                   
                                   if(coll118.length > 0) processOne10(); else rest10();
                                   
                                 }
                               }
                             }
                             function rest10() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll118.length > 0) processOne10(); else rest10();
                           });
                           
                         });
      
      
      var tmp1595 = mobl.ref("Done");
      
      var nodes692 = $("<span>");
      root869.append(nodes692);
      subs__.addSub((ui.button)(tmp1595, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1596, function(_, callback) {
        var root871 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root871); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes692;
        nodes692 = node.contents();
        oldNodes.replaceWith(nodes692);
      }));
      callback(root869); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes690;
      nodes690 = node.contents();
      oldNodes.replaceWith(nodes690);
    }));
    var nodes693 = $("<span>");
    root868.append(nodes693);
    subs__.addSub((ui.markableList)(items, function(_, callback) {
      var root872 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root872); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes693;
      nodes693 = node.contents();
      oldNodes.replaceWith(nodes693);
    }));
    callback(root868); return subs__;
    
    
  }
  if(coll119.length > 0) processOne11(); else rest11();
});

return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root873 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp1598 = mobl.ref("Search term");


var tmp1600 = mobl.ref(null);


var tmp1599 = mobl.ref(null);

var nodes694 = $("<span>");
root873.append(nodes694);
subs__.addSub((ui.searchBox)(phrase, tmp1598, tmp1599, tmp1600, function(_, callback) {
  var root874 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root874); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes694;
  nodes694 = node.contents();
  oldNodes.replaceWith(nodes694);
}));

var tmp1601 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp1601.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp1601.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp1601.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp1601.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp1601.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes695 = $("<span>");
root873.append(nodes695);
subs__.addSub((ui.masterDetail)(tmp1601, masterItem, detailItem, function(_, callback) {
  var root875 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root875); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes695;
  nodes695 = node.contents();
  oldNodes.replaceWith(nodes695);
}));
callback(root873); return subs__;


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
var root876 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp1612 = mobl.ref(null);


var tmp1611 = mobl.ref(null);

var nodes696 = $("<span>");
root876.append(nodes696);
subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp1611, tmp1612, function(_, callback) {
  var root877 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node145 = mobl.loadingSpan();
  root877.append(node145);
  var list37;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList37 = function() {
    var subs__ = listSubs__;
    list37 = sections.get();
    list37.list(function(results63) {
      node145.empty();
      for(var i40 = 0; i40 < results63.length; i40++) {
        (function() {
          var iternode37 = $("<span>");
          node145.append(iternode37);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results63), i40), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results63), i40), "_2");
          
          var tmp1605 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp1605.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp1605.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp1605.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp1605.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp1604 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp1606 = mobl.ref(null);
          
          var nodes697 = $("<span>");
          iternode37.append(nodes697);
          subs__.addSub((ui.span)(tmp1605, tmp1606, tmp1604, function(_, callback) {
            var root878 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp1603 = mobl.ref(null);
            
            
            var tmp1602 = mobl.ref(null);
            
            var nodes698 = $("<span>");
            root878.append(nodes698);
            subs__.addSub((mobl.label)(sectionName, tmp1602, tmp1603, function(_, callback) {
              var root879 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root879); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes698;
              nodes698 = node.contents();
              oldNodes.replaceWith(nodes698);
            }));
            callback(root878); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes697;
            nodes697 = node.contents();
            oldNodes.replaceWith(nodes697);
          }));
          
          var tmp1607 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp1607.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp1607.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
            tmp1607.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
            tmp1607.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          
          
          var tmp1609 = mobl.ref(null);
          
          
          var tmp1608 = mobl.ref(null);
          
          var nodes699 = $("<span>");
          iternode37.append(nodes699);
          subs__.addSub((ui.block)(tmp1607, tmp1608, tmp1609, function(_, callback) {
            var root880 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes700 = $("<span>");
            root880.append(nodes700);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl62();
            }));
            
            function renderControl62() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root881 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root881); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes700;
                nodes700 = node.contents();
                oldNodes.replaceWith(nodes700);
              }));
            }
            renderControl62();
            callback(root880); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes699;
            nodes699 = node.contents();
            oldNodes.replaceWith(nodes699);
          }));
          
          var oldNodes = iternode37;
          iternode37 = iternode37.contents();
          oldNodes.replaceWith(iternode37);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list37.addEventListener('change', function() { listSubs__.unsubscribe(); renderList37(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList37(true); }));
    });
  };
  renderList37();
  
  callback(root877); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes696;
  nodes696 = node.contents();
  oldNodes.replaceWith(nodes696);
}));
callback(root876); return subs__;

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
var root882 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node146 = $("<table>");

var ref139 = mobl.ref(ui.tableStyle);
if(ref139.get() !== null) {
  node146.attr('class', ref139.get());
  subs__.addSub(ref139.addEventListener('change', function(_, ref, val) {
    if(ref === ref139) {
      node146.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref139.rebind());

var nodes701 = $("<span>");
node146.append(nodes701);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl63();
}));

function renderControl63() {
  subs__.addSub((elements)(function(elements, callback) {
    var root883 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root883); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes701;
    nodes701 = node.contents();
    oldNodes.replaceWith(nodes701);
  }));
}
renderControl63();
root882.append(node146);
callback(root882); return subs__;


return subs__;
};

ui.row = function(elements, callback) {
var root884 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node147 = $("<tr>");

var ref140 = mobl.ref(ui.trStyle);
if(ref140.get() !== null) {
  node147.attr('class', ref140.get());
  subs__.addSub(ref140.addEventListener('change', function(_, ref, val) {
    if(ref === ref140) {
      node147.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref140.rebind());

var nodes702 = $("<span>");
node147.append(nodes702);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl64();
}));

function renderControl64() {
  subs__.addSub((elements)(function(elements, callback) {
    var root885 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root885); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes702;
    nodes702 = node.contents();
    oldNodes.replaceWith(nodes702);
  }));
}
renderControl64();
root884.append(node147);
callback(root884); return subs__;


return subs__;
};

ui.cell = function(width, elements, callback) {
var root886 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node148 = $("<td>");

var ref141 = width;
if(ref141.get() !== null) {
  node148.attr('width', ref141.get());
  subs__.addSub(ref141.addEventListener('change', function(_, ref, val) {
    if(ref === ref141) {
      node148.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref141.rebind());

var ref142 = mobl.ref(ui.tdStyle);
if(ref142.get() !== null) {
  node148.attr('class', ref142.get());
  subs__.addSub(ref142.addEventListener('change', function(_, ref, val) {
    if(ref === ref142) {
      node148.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref142.rebind());

var nodes703 = $("<span>");
node148.append(nodes703);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl65();
}));

function renderControl65() {
  subs__.addSub((elements)(function(elements, callback) {
    var root887 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root887); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes703;
    nodes703 = node.contents();
    oldNodes.replaceWith(nodes703);
  }));
}
renderControl65();
root886.append(node148);
callback(root886); return subs__;


return subs__;
};

ui.col = function(width, elements, callback) {
var root888 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node149 = $("<td>");

var ref143 = width;
if(ref143.get() !== null) {
  node149.attr('width', ref143.get());
  subs__.addSub(ref143.addEventListener('change', function(_, ref, val) {
    if(ref === ref143) {
      node149.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref143.rebind());

var ref144 = mobl.ref(ui.tdStyle);
if(ref144.get() !== null) {
  node149.attr('class', ref144.get());
  subs__.addSub(ref144.addEventListener('change', function(_, ref, val) {
    if(ref === ref144) {
      node149.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref144.rebind());

var nodes704 = $("<span>");
node149.append(nodes704);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl66();
}));

function renderControl66() {
  subs__.addSub((elements)(function(elements, callback) {
    var root889 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root889); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes704;
    nodes704 = node.contents();
    oldNodes.replaceWith(nodes704);
  }));
}
renderControl66();
root888.append(node149);
callback(root888); return subs__;


return subs__;
};

ui.headerCol = function(width, elements, callback) {
var root890 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node150 = $("<td>");

var ref145 = width;
if(ref145.get() !== null) {
  node150.attr('width', ref145.get());
  subs__.addSub(ref145.addEventListener('change', function(_, ref, val) {
    if(ref === ref145) {
      node150.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref145.rebind());

var ref146 = mobl.ref(ui.tdStyle);
if(ref146.get() !== null) {
  node150.attr('class', ref146.get());
  subs__.addSub(ref146.addEventListener('change', function(_, ref, val) {
    if(ref === ref146) {
      node150.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref146.rebind());


var node151 = $("<strong>");

var nodes705 = $("<span>");
node151.append(nodes705);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl67();
}));

function renderControl67() {
  subs__.addSub((elements)(function(elements, callback) {
    var root891 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root891); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes705;
    nodes705 = node.contents();
    oldNodes.replaceWith(nodes705);
  }));
}
renderControl67();
node150.append(node151);
root890.append(node150);
callback(root890); return subs__;



return subs__;
};

ui.scroller = function(height, elements, callback) {
var root892 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node152 = $("<div>");
node152.attr('class', "scroller");

var nodes706 = $("<span>");
node152.append(nodes706);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl68();
}));

function renderControl68() {
  subs__.addSub((elements)(function(elements, callback) {
    var root893 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root893); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes706;
    nodes706 = node.contents();
    oldNodes.replaceWith(nodes706);
  }));
}
renderControl68();
root892.append(node152);
var result__ = ui.setupScrollers();
callback(root892); return subs__;


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
var root894 = $("<span>");
var subs__ = new mobl.CompSubscription();

var slider = $("<div>");

root894.append(slider);
var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                      if(event && event.stopPropagation) event.stopPropagation();
                                                                      var result__ = slider.slider("value");
                                                                      s.set(result__);
                                                                      var result__ = slider.slider("value");
                                                                      start.set(result__);
                                                                      if(callback && callback.apply) callback(); return;
                                                                    }}));
callback(root894); return subs__;

return subs__;
};
ui.title = 'ui__title';
ui.emphasis = 'ui__emphasis';
ui.ranger = 'ui__ranger';
ui.tweetStyle = 'ui__tweetStyle';
ui.tweetIconStyle = 'ui__tweetIconStyle';
