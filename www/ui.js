mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
var root7902 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2750 = $("<span>");
root7902.append(node2750);
var condSubs258 = new mobl.CompSubscription();
subs__.addSub(condSubs258);
var oldValue258;
var renderCond258 = function() {
  var value582 = value.get();
  if(oldValue258 === value582) return;
  oldValue258 = value582;
  var subs__ = condSubs258;
  subs__.unsubscribe();
  node2750.empty();
  if(value582) {
    var nodes6031 = $("<span>");
    node2750.append(nodes6031);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl891();
    }));
    
    function renderControl891() {
      subs__.addSub((elements)(function(elements, callback) {
        var root7903 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7903); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6031;
        nodes6031 = node.contents();
        oldNodes.replaceWith(nodes6031);
      }));
    }
    renderControl891();
    
    
  } else {
    
    var tmp13205 = mobl.ref(null);
    
    
    var tmp13204 = mobl.ref(null);
    
    var nodes6032 = $("<span>");
    node2750.append(nodes6032);
    subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp13204, tmp13205, function(_, callback) {
      var root7904 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root7904.append("Loading...");
      
      var tmp13198 = mobl.ref("middle");
      
      
      var tmp13197 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp13203 = mobl.ref(null);
      
      
      var tmp13202 = mobl.ref(null);
      
      
      var tmp13201 = mobl.ref(null);
      
      
      var tmp13200 = mobl.ref(null);
      
      
      var tmp13199 = mobl.ref(null);
      
      var nodes6033 = $("<span>");
      root7904.append(nodes6033);
      subs__.addSub((ui.image)(tmp13197, tmp13199, tmp13200, tmp13201, tmp13202, tmp13198, tmp13203, function(_, callback) {
        var root7905 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7905); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6033;
        nodes6033 = node.contents();
        oldNodes.replaceWith(nodes6033);
      }));
      callback(root7904); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6032;
      nodes6032 = node.contents();
      oldNodes.replaceWith(nodes6032);
    }));
    
    
  }
};
renderCond258();
subs__.addSub(value.addEventListener('change', function() {
  renderCond258();
}));

callback(root7902); return subs__;

return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
var root7906 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2751 = $("<div>");

var ref1771 = mobl.ref(ui.headerStyle);
if(ref1771.get() !== null) {
  node2751.attr('class', ref1771.get());
  subs__.addSub(ref1771.addEventListener('change', function(_, ref, val) {
    if(ref === ref1771) {
      node2751.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1771.rebind());

var val937 = onclick.get();
if(val937 !== null) {
  subs__.addSub(mobl.domBind(node2751, 'tap', val937));
}


var node2752 = $("<div>");

var ref1770 = mobl.ref(ui.headerContainerStyle);
if(ref1770.get() !== null) {
  node2752.attr('class', ref1770.get());
  subs__.addSub(ref1770.addEventListener('change', function(_, ref, val) {
    if(ref === ref1770) {
      node2752.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1770.rebind());


var node2753 = $("<div>");

var ref1768 = text;
node2753.text(""+ref1768.get());
var ignore361 = false;
subs__.addSub(ref1768.addEventListener('change', function(_, ref, val) {
  if(ignore361) return;
  node2753.text(""+val);
}));
subs__.addSub(ref1768.rebind());


var ref1769 = mobl.ref(ui.headerTextStyle);
if(ref1769.get() !== null) {
  node2753.attr('class', ref1769.get());
  subs__.addSub(ref1769.addEventListener('change', function(_, ref, val) {
    if(ref === ref1769) {
      node2753.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1769.rebind());

node2752.append(node2753);
node2751.append(node2752);
var nodes6034 = $("<span>");
node2751.append(nodes6034);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl892();
}));

function renderControl892() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7907 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7907); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6034;
    nodes6034 = node.contents();
    oldNodes.replaceWith(nodes6034);
  }));
}
renderControl892();
root7906.append(node2751);
callback(root7906); return subs__;




return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root7908 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref1772 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref1772.get() !== null) {
  sp.attr('class', ref1772.get());
  subs__.addSub(ref1772.addEventListener('change', function(_, ref, val) {
    if(ref === ref1772) {
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
subs__.addSub(ref1772.rebind());

var val938 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val938 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val938));
}

var val939 = function(event, callback) {
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
if(val939 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val939));
}

var val940 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after108(result__) {
                  var tmp13266 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after108);if(result__ !== undefined) after108(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val940 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val940));
}

var val941 = function(event, callback) {
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
if(val941 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val941));
}

var ref1773 = text;
sp.text(""+ref1773.get());
var ignore362 = false;
subs__.addSub(ref1773.addEventListener('change', function(_, ref, val) {
  if(ignore362) return;
  sp.text(""+val);
}));
subs__.addSub(ref1773.rebind());


root7908.append(sp);
callback(root7908); return subs__;

return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root7909 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes6035 = $("<span>");
root7909.append(nodes6035);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root7910 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root7910); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6035;
  nodes6035 = node.contents();
  oldNodes.replaceWith(nodes6035);
}));
callback(root7909); return subs__;

return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root7911 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes6036 = $("<span>");
root7911.append(nodes6036);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root7912 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root7912); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6036;
  nodes6036 = node.contents();
  oldNodes.replaceWith(nodes6036);
}));
callback(root7911); return subs__;

return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
var root7913 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2754 = $("<div>");

var ref1774 = id;
if(ref1774.get() !== null) {
  node2754.attr('id', ref1774.get());
  subs__.addSub(ref1774.addEventListener('change', function(_, ref, val) {
    if(ref === ref1774) {
      node2754.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1774.rebind());

var ref1775 = cssClass;
if(ref1775.get() !== null) {
  node2754.attr('class', ref1775.get());
  subs__.addSub(ref1775.addEventListener('change', function(_, ref, val) {
    if(ref === ref1775) {
      node2754.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1775.rebind());

var val942 = onclick.get();
if(val942 !== null) {
  subs__.addSub(mobl.domBind(node2754, 'tap', val942));
}

var nodes6037 = $("<span>");
node2754.append(nodes6037);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl893();
}));

function renderControl893() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7914 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7914); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6037;
    nodes6037 = node.contents();
    oldNodes.replaceWith(nodes6037);
  }));
}
renderControl893();
root7913.append(node2754);
callback(root7913); return subs__;


return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
var root7915 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2755 = $("<span>");

var ref1776 = id;
if(ref1776.get() !== null) {
  node2755.attr('id', ref1776.get());
  subs__.addSub(ref1776.addEventListener('change', function(_, ref, val) {
    if(ref === ref1776) {
      node2755.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1776.rebind());

var ref1777 = cssClass;
if(ref1777.get() !== null) {
  node2755.attr('class', ref1777.get());
  subs__.addSub(ref1777.addEventListener('change', function(_, ref, val) {
    if(ref === ref1777) {
      node2755.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1777.rebind());

var val943 = onclick.get();
if(val943 !== null) {
  subs__.addSub(mobl.domBind(node2755, 'tap', val943));
}

var nodes6038 = $("<span>");
node2755.append(nodes6038);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl894();
}));

function renderControl894() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7916 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7916); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6038;
    nodes6038 = node.contents();
    oldNodes.replaceWith(nodes6038);
  }));
}
renderControl894();
root7915.append(node2755);
callback(root7915); return subs__;


return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
var root7917 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2756 = $("<ul>");

var ref1778 = mobl.ref(ui.groupStyle);
if(ref1778.get() !== null) {
  node2756.attr('class', ref1778.get());
  subs__.addSub(ref1778.addEventListener('change', function(_, ref, val) {
    if(ref === ref1778) {
      node2756.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1778.rebind());

var nodes6039 = $("<span>");
node2756.append(nodes6039);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl895();
}));

function renderControl895() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7918 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7918); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6039;
    nodes6039 = node.contents();
    oldNodes.replaceWith(nodes6039);
  }));
}
renderControl895();
root7917.append(node2756);
callback(root7917); return subs__;


return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root7919 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2757 = $("<img>");

var ref1779 = url;
if(ref1779.get() !== null) {
  node2757.attr('src', ref1779.get());
  subs__.addSub(ref1779.addEventListener('change', function(_, ref, val) {
    if(ref === ref1779) {
      node2757.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1779.rebind());

var ref1780 = width;
if(ref1780.get() !== null) {
  node2757.attr('width', ref1780.get());
  subs__.addSub(ref1780.addEventListener('change', function(_, ref, val) {
    if(ref === ref1780) {
      node2757.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1780.rebind());

var ref1781 = height;
if(ref1781.get() !== null) {
  node2757.attr('height', ref1781.get());
  subs__.addSub(ref1781.addEventListener('change', function(_, ref, val) {
    if(ref === ref1781) {
      node2757.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1781.rebind());

var ref1782 = style;
if(ref1782.get() !== null) {
  node2757.attr('class', ref1782.get());
  subs__.addSub(ref1782.addEventListener('change', function(_, ref, val) {
    if(ref === ref1782) {
      node2757.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1782.rebind());

var val944 = onclick.get();
if(val944 !== null) {
  subs__.addSub(mobl.domBind(node2757, 'tap', val944));
}

var ref1783 = valign;
if(ref1783.get() !== null) {
  node2757.attr('valign', ref1783.get());
  subs__.addSub(ref1783.addEventListener('change', function(_, ref, val) {
    if(ref === ref1783) {
      node2757.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1783.rebind());

var ref1784 = align;
if(ref1784.get() !== null) {
  node2757.attr('align', ref1784.get());
  subs__.addSub(ref1784.addEventListener('change', function(_, ref, val) {
    if(ref === ref1784) {
      node2757.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1784.rebind());

root7919.append(node2757);
callback(root7919); return subs__;

return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root7920 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref1785 = mobl.ref(ui.itemStyle);
if(ref1785.get() !== null) {
  el.attr('class', ref1785.get());
  subs__.addSub(ref1785.addEventListener('change', function(_, ref, val) {
    if(ref === ref1785) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1785.rebind());

var ref1786 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref1786.get() !== null) {
  el.attr('class', ref1786.get());
  subs__.addSub(ref1786.addEventListener('change', function(_, ref, val) {
    if(ref === ref1786) {
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
subs__.addSub(ref1786.rebind());

var val945 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp13267 = result__;
                                         function after109(result__) {
                                           var tmp13268 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after109);if(result__ !== undefined) after109(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp13269 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val945 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val945));
}

var nodes6040 = $("<span>");
el.append(nodes6040);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl896();
}));

function renderControl896() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7921 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7921); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6040;
    nodes6040 = node.contents();
    oldNodes.replaceWith(nodes6040);
  }));
}
renderControl896();
root7920.append(el);
callback(root7920); return subs__;


return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
var root7922 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2758 = $("<input>");
node2758.attr('type', "checkbox");

var ref1788 = b;
node2758.attr('checked', !!ref1788.get());
subs__.addSub(ref1788.addEventListener('change', function(_, ref, val) {
  if(ref === ref1788) node2758.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node2758, 'change', function() {
  b.set(!!node2758.attr('checked'));
}));

var val947 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val947 !== null) {
  subs__.addSub(mobl.domBind(node2758, 'tap', val947));
}

var val948 = onchange.get();
if(val948 !== null) {
  subs__.addSub(mobl.domBind(node2758, 'change', val948));
}

root7922.append(node2758);

root7922.append(" ");

var node2759 = $("<span>");

var ref1787 = label;
node2759.text(""+ref1787.get());
var ignore363 = false;
subs__.addSub(ref1787.addEventListener('change', function(_, ref, val) {
  if(ignore363) return;
  node2759.text(""+val);
}));
subs__.addSub(ref1787.rebind());


var val946 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after110(result__) {
                  var tmp13270 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after110);if(result__ !== undefined) after110(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val946 !== null) {
  subs__.addSub(mobl.domBind(node2759, 'tap', val946));
}

root7922.append(node2759);
callback(root7922); return subs__;


return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root7923 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2760 = $("<span>");
root7923.append(node2760);
var condSubs259 = new mobl.CompSubscription();
subs__.addSub(condSubs259);
var oldValue259;
var renderCond259 = function() {
  var value583 = label.get();
  if(oldValue259 === value583) return;
  oldValue259 = value583;
  var subs__ = condSubs259;
  subs__.unsubscribe();
  node2760.empty();
  if(value583) {
    
    var node2761 = $("<span>");
    node2761.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref1792 = label;
    node2761.text(""+ref1792.get());
    var ignore365 = false;
    subs__.addSub(ref1792.addEventListener('change', function(_, ref, val) {
      if(ignore365) return;
      node2761.text(""+val);
    }));
    subs__.addSub(ref1792.rebind());
    
    
    node2760.append(node2761);
    
    var node2762 = $("<span>");
    node2762.attr('style', "float: left");
    
    
    var node2763 = $("<input>");
    node2763.attr('type', "text");
    
    var ref1789 = mobl.ref(ui.textFieldStyle);
    if(ref1789.get() !== null) {
      node2763.attr('class', ref1789.get());
      subs__.addSub(ref1789.addEventListener('change', function(_, ref, val) {
        if(ref === ref1789) {
          node2763.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1789.rebind());
    
    var ref1790 = placeholder;
    if(ref1790.get() !== null) {
      node2763.attr('placeholder', ref1790.get());
      subs__.addSub(ref1790.addEventListener('change', function(_, ref, val) {
        if(ref === ref1790) {
          node2763.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1790.rebind());
    
    var ref1791 = s;
    node2763.val(""+ref1791.get());
    var ignore364 = false;
    subs__.addSub(ref1791.addEventListener('change', function(_, ref, val) {
      if(ignore364) return;
      node2763.val(""+val);
    }));
    subs__.addSub(ref1791.rebind());
    
    subs__.addSub(mobl.domBind(node2763, 'keyup change', function() {
      ignore364 = true;
      s.set(mobl.stringTomobl__String(node2763.val()));
      ignore364 = false;
    }));
    
    
    var val949 = onchange.get();
    if(val949 !== null) {
      subs__.addSub(mobl.domBind(node2763, 'change', val949));
    }
    
    var val950 = onkeyup.get();
    if(val950 !== null) {
      subs__.addSub(mobl.domBind(node2763, 'keyup', val950));
    }
    
    var val951 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val951 !== null) {
      subs__.addSub(mobl.domBind(node2763, 'blur', val951));
    }
    
    node2762.append(node2763);
    node2760.append(node2762);
    
    
    
    
  } else {
    
    var node2764 = $("<input>");
    node2764.attr('type', "text");
    
    var ref1793 = mobl.ref(ui.textFieldStyle);
    if(ref1793.get() !== null) {
      node2764.attr('class', ref1793.get());
      subs__.addSub(ref1793.addEventListener('change', function(_, ref, val) {
        if(ref === ref1793) {
          node2764.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1793.rebind());
    
    var ref1794 = placeholder;
    if(ref1794.get() !== null) {
      node2764.attr('placeholder', ref1794.get());
      subs__.addSub(ref1794.addEventListener('change', function(_, ref, val) {
        if(ref === ref1794) {
          node2764.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1794.rebind());
    
    var ref1795 = s;
    node2764.val(""+ref1795.get());
    var ignore366 = false;
    subs__.addSub(ref1795.addEventListener('change', function(_, ref, val) {
      if(ignore366) return;
      node2764.val(""+val);
    }));
    subs__.addSub(ref1795.rebind());
    
    subs__.addSub(mobl.domBind(node2764, 'keyup change', function() {
      ignore366 = true;
      s.set(mobl.stringTomobl__String(node2764.val()));
      ignore366 = false;
    }));
    
    
    var val952 = onchange.get();
    if(val952 !== null) {
      subs__.addSub(mobl.domBind(node2764, 'change', val952));
    }
    
    var val953 = onkeyup.get();
    if(val953 !== null) {
      subs__.addSub(mobl.domBind(node2764, 'keyup', val953));
    }
    
    var val954 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val954 !== null) {
      subs__.addSub(mobl.domBind(node2764, 'blur', val954));
    }
    
    node2760.append(node2764);
    
    
  }
};
renderCond259();
subs__.addSub(label.addEventListener('change', function() {
  renderCond259();
}));

callback(root7923); return subs__;

return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
var root7924 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2765 = $("<span>");
root7924.append(node2765);
var condSubs260 = new mobl.CompSubscription();
subs__.addSub(condSubs260);
var oldValue260;
var renderCond260 = function() {
  var value584 = label.get();
  if(oldValue260 === value584) return;
  oldValue260 = value584;
  var subs__ = condSubs260;
  subs__.unsubscribe();
  node2765.empty();
  if(value584) {
    
    var node2766 = $("<span>");
    node2766.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref1799 = label;
    node2766.text(""+ref1799.get());
    var ignore368 = false;
    subs__.addSub(ref1799.addEventListener('change', function(_, ref, val) {
      if(ignore368) return;
      node2766.text(""+val);
    }));
    subs__.addSub(ref1799.rebind());
    
    
    node2765.append(node2766);
    
    var node2767 = $("<span>");
    node2767.attr('style', "float: left");
    
    
    var node2768 = $("<input>");
    node2768.attr('type', "text");
    
    var ref1796 = mobl.ref(ui.textFieldStyle);
    if(ref1796.get() !== null) {
      node2768.attr('class', ref1796.get());
      subs__.addSub(ref1796.addEventListener('change', function(_, ref, val) {
        if(ref === ref1796) {
          node2768.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1796.rebind());
    
    var ref1797 = placeholder;
    if(ref1797.get() !== null) {
      node2768.attr('placeholder', ref1797.get());
      subs__.addSub(ref1797.addEventListener('change', function(_, ref, val) {
        if(ref === ref1797) {
          node2768.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1797.rebind());
    
    var ref1798 = n;
    node2768.val(""+ref1798.get());
    var ignore367 = false;
    subs__.addSub(ref1798.addEventListener('change', function(_, ref, val) {
      if(ignore367) return;
      node2768.val(""+val);
    }));
    subs__.addSub(ref1798.rebind());
    
    subs__.addSub(mobl.domBind(node2768, 'keyup change', function() {
      ignore367 = true;
      n.set(mobl.stringTomobl__Num(node2768.val()));
      ignore367 = false;
    }));
    
    
    var val955 = onchange.get();
    if(val955 !== null) {
      subs__.addSub(mobl.domBind(node2768, 'change', val955));
    }
    
    var val956 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val956 !== null) {
      subs__.addSub(mobl.domBind(node2768, 'blur', val956));
    }
    
    node2767.append(node2768);
    node2765.append(node2767);
    
    
    
    
  } else {
    
    var node2769 = $("<input>");
    node2769.attr('type', "text");
    
    var ref1800 = mobl.ref(ui.textFieldStyle);
    if(ref1800.get() !== null) {
      node2769.attr('class', ref1800.get());
      subs__.addSub(ref1800.addEventListener('change', function(_, ref, val) {
        if(ref === ref1800) {
          node2769.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1800.rebind());
    
    var ref1801 = placeholder;
    if(ref1801.get() !== null) {
      node2769.attr('placeholder', ref1801.get());
      subs__.addSub(ref1801.addEventListener('change', function(_, ref, val) {
        if(ref === ref1801) {
          node2769.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1801.rebind());
    
    var ref1802 = n;
    node2769.val(""+ref1802.get());
    var ignore369 = false;
    subs__.addSub(ref1802.addEventListener('change', function(_, ref, val) {
      if(ignore369) return;
      node2769.val(""+val);
    }));
    subs__.addSub(ref1802.rebind());
    
    subs__.addSub(mobl.domBind(node2769, 'keyup change', function() {
      ignore369 = true;
      n.set(mobl.stringTomobl__Num(node2769.val()));
      ignore369 = false;
    }));
    
    
    var val957 = onchange.get();
    if(val957 !== null) {
      subs__.addSub(mobl.domBind(node2769, 'change', val957));
    }
    
    var val958 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val958 !== null) {
      subs__.addSub(mobl.domBind(node2769, 'blur', val958));
    }
    
    node2765.append(node2769);
    
    
  }
};
renderCond260();
subs__.addSub(label.addEventListener('change', function() {
  renderCond260();
}));

callback(root7924); return subs__;

return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
var root7925 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp13212 = mobl.ref(null);


var tmp13211 = mobl.ref(null);

var nodes6041 = $("<span>");
root7925.append(nodes6041);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp13211, tmp13212, function(_, callback) {
  var root7926 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2770 = mobl.loadingSpan();
  root7926.append(node2770);
  var list513;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList513 = function() {
    var subs__ = listSubs__;
    list513 = tabs.get();
    list513.list(function(results549) {
      node2770.empty();
      for(var i518 = 0; i518 < results549.length; i518++) {
        (function() {
          var iternode513 = $("<span>");
          node2770.append(iternode513);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results549), i518), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results549), i518), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results549), i518), "_3");
          
          var tmp13209 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp13209.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp13209.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp13209.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp13209.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp13208 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp13210 = mobl.ref(null);
          
          var nodes6042 = $("<span>");
          iternode513.append(nodes6042);
          subs__.addSub((ui.span)(tmp13209, tmp13210, tmp13208, function(_, callback) {
            var root7927 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp13207 = mobl.ref(null);
            
            
            var tmp13206 = mobl.ref(null);
            
            var nodes6043 = $("<span>");
            root7927.append(nodes6043);
            subs__.addSub((mobl.label)(tabName, tmp13206, tmp13207, function(_, callback) {
              var root7928 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root7928); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6043;
              nodes6043 = node.contents();
              oldNodes.replaceWith(nodes6043);
            }));
            callback(root7927); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6042;
            nodes6042 = node.contents();
            oldNodes.replaceWith(nodes6042);
          }));
          
          var oldNodes = iternode513;
          iternode513 = iternode513.contents();
          oldNodes.replaceWith(iternode513);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list513.addEventListener('change', function() { listSubs__.unsubscribe(); renderList513(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList513(true); }));
    });
  };
  renderList513();
  
  callback(root7926); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes6041;
  nodes6041 = node.contents();
  oldNodes.replaceWith(nodes6041);
}));

var node2771 = mobl.loadingSpan();
root7925.append(node2771);
var list514;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList514 = function() {
  var subs__ = listSubs__;
  list514 = tabs.get();
  list514.list(function(results550) {
    node2771.empty();
    for(var i519 = 0; i519 < results550.length; i519++) {
      (function() {
        var iternode514 = $("<span>");
        node2771.append(iternode514);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results550), i519), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results550), i519), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results550), i519), "_3");
        
        var tmp13213 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp13213.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp13213.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp13213.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp13213.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp13215 = mobl.ref(null);
        
        
        var tmp13214 = mobl.ref(null);
        
        var nodes6044 = $("<span>");
        iternode514.append(nodes6044);
        subs__.addSub((ui.block)(tmp13213, tmp13214, tmp13215, function(_, callback) {
          var root7929 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes6045 = $("<span>");
          root7929.append(nodes6045);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root7930 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes6046 = $("<span>");
            root7930.append(nodes6046);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl897();
            }));
            
            function renderControl897() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root7931 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7931); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6046;
                nodes6046 = node.contents();
                oldNodes.replaceWith(nodes6046);
              }));
            }
            renderControl897();
            callback(root7930); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6045;
            nodes6045 = node.contents();
            oldNodes.replaceWith(nodes6045);
          }));
          callback(root7929); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6044;
          nodes6044 = node.contents();
          oldNodes.replaceWith(nodes6044);
        }));
        
        var oldNodes = iternode514;
        iternode514 = iternode514.contents();
        oldNodes.replaceWith(iternode514);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list514.addEventListener('change', function() { listSubs__.unsubscribe(); renderList514(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList514(true); }));
  });
};
renderList514();

callback(root7925); return subs__;


return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root7932 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2772 = $("<div>");

var ref1806 = mobl.ref(ui.searchboxStyle);
if(ref1806.get() !== null) {
  node2772.attr('class', ref1806.get());
  subs__.addSub(ref1806.addEventListener('change', function(_, ref, val) {
    if(ref === ref1806) {
      node2772.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1806.rebind());


var node2773 = $("<input>");
node2773.attr('type', "text");

var ref1803 = mobl.ref(ui.searchBoxInputStyle);
if(ref1803.get() !== null) {
  node2773.attr('class', ref1803.get());
  subs__.addSub(ref1803.addEventListener('change', function(_, ref, val) {
    if(ref === ref1803) {
      node2773.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1803.rebind());

var ref1804 = placeholder;
if(ref1804.get() !== null) {
  node2773.attr('placeholder', ref1804.get());
  subs__.addSub(ref1804.addEventListener('change', function(_, ref, val) {
    if(ref === ref1804) {
      node2773.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1804.rebind());

var ref1805 = s;
node2773.val(""+ref1805.get());
var ignore370 = false;
subs__.addSub(ref1805.addEventListener('change', function(_, ref, val) {
  if(ignore370) return;
  node2773.val(""+val);
}));
subs__.addSub(ref1805.rebind());

subs__.addSub(mobl.domBind(node2773, 'keyup change', function() {
  ignore370 = true;
  s.set(mobl.stringTomobl__String(node2773.val()));
  ignore370 = false;
}));


var val959 = onsearch.get();
if(val959 !== null) {
  subs__.addSub(mobl.domBind(node2773, 'change', val959));
}

var val960 = onkeyup.get();
if(val960 !== null) {
  subs__.addSub(mobl.domBind(node2773, 'keyup', val960));
}
node2773.attr('autocorrect', "off");
node2773.attr('autocapitalize', "off");
node2773.attr('autocomplete', "off");

node2772.append(node2773);
root7932.append(node2772);
callback(root7932); return subs__;


return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
var root7933 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref1807 = mobl.ref(ui.contextMenuStyle);
if(ref1807.get() !== null) {
  menu.attr('class', ref1807.get());
  subs__.addSub(ref1807.addEventListener('change', function(_, ref, val) {
    if(ref === ref1807) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1807.rebind());

var nodes6047 = $("<span>");
menu.append(nodes6047);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl898();
}));

function renderControl898() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7934 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7934); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6047;
    nodes6047 = node.contents();
    oldNodes.replaceWith(nodes6047);
  }));
}
renderControl898();
root7933.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val961 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp13273 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val961 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val961));
}

root7933.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root7933); return subs__;



return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
var root7935 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp13265 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp13265.set(mobl.window.get().innerWidth > 500);
}));


var node2774 = $("<span>");
root7935.append(node2774);
var condSubs261 = new mobl.CompSubscription();
subs__.addSub(condSubs261);
var oldValue261;
var renderCond261 = function() {
  var value585 = tmp13265.get();
  if(oldValue261 === value585) return;
  oldValue261 = value585;
  var subs__ = condSubs261;
  subs__.unsubscribe();
  node2774.empty();
  if(value585) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node2775 = $("<div>");
      node2775.attr('width', "100%");
      
      
      var node2776 = $("<div>");
      node2776.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes6049 = $("<span>");
      node2776.append(nodes6049);
      subs__.addSub((ui.group)(function(_, callback) {
        var root7937 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2778 = mobl.loadingSpan();
        root7937.append(node2778);
        var list515;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList515 = function() {
          var subs__ = listSubs__;
          list515 = items.get();
          list515.list(function(results551) {
            node2778.empty();
            for(var i520 = 0; i520 < results551.length; i520++) {
              (function() {
                var iternode515 = $("<span>");
                node2778.append(iternode515);
                var it;
                it = mobl.ref(mobl.ref(results551), i520);
                
                var tmp13229 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp13229.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp13229.set(it.get() == current.get());
                }));
                
                
                var node2779 = $("<span>");
                iternode515.append(node2779);
                var condSubs262 = new mobl.CompSubscription();
                subs__.addSub(condSubs262);
                var oldValue262;
                var renderCond262 = function() {
                  var value586 = tmp13229.get();
                  if(oldValue262 === value586) return;
                  oldValue262 = value586;
                  var subs__ = condSubs262;
                  subs__.unsubscribe();
                  node2779.empty();
                  if(value586) {
                    
                    var tmp13225 = mobl.ref(false);
                    
                    
                    var tmp13224 = mobl.ref(null);
                    
                    
                    var tmp13223 = mobl.ref(null);
                    
                    var nodes6050 = $("<span>");
                    node2779.append(nodes6050);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp13223, tmp13224, tmp13225, function(_, callback) {
                      var root7938 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes6051 = $("<span>");
                      root7938.append(nodes6051);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl900();
                      }));
                      
                      function renderControl900() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root7939 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root7939); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes6051;
                          nodes6051 = node.contents();
                          oldNodes.replaceWith(nodes6051);
                        }));
                      }
                      renderControl900();
                      callback(root7938); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6050;
                      nodes6050 = node.contents();
                      oldNodes.replaceWith(nodes6050);
                    }));
                    
                    
                  } else {
                    
                    var tmp13227 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp13226 = mobl.ref(true);
                    
                    
                    var tmp13228 = mobl.ref(null);
                    
                    var nodes6052 = $("<span>");
                    node2779.append(nodes6052);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13227, tmp13228, tmp13226, function(_, callback) {
                      var root7940 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes6053 = $("<span>");
                      root7940.append(nodes6053);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl901();
                      }));
                      
                      function renderControl901() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root7941 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root7941); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes6053;
                          nodes6053 = node.contents();
                          oldNodes.replaceWith(nodes6053);
                        }));
                      }
                      renderControl901();
                      callback(root7940); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6052;
                      nodes6052 = node.contents();
                      oldNodes.replaceWith(nodes6052);
                    }));
                    
                    
                  }
                };
                renderCond262();
                subs__.addSub(tmp13229.addEventListener('change', function() {
                  renderCond262();
                }));
                
                
                var oldNodes = iternode515;
                iternode515 = iternode515.contents();
                oldNodes.replaceWith(iternode515);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list515.addEventListener('change', function() { listSubs__.unsubscribe(); renderList515(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList515(true); }));
          });
        };
        renderList515();
        
        callback(root7937); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6049;
        nodes6049 = node.contents();
        oldNodes.replaceWith(nodes6049);
      }));
      node2775.append(node2776);
      
      var node2777 = $("<div>");
      node2777.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes6048 = $("<span>");
      node2777.append(nodes6048);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl899();
      }));
      
      function renderControl899() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root7936 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7936); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6048;
          nodes6048 = node.contents();
          oldNodes.replaceWith(nodes6048);
        }));
      }
      renderControl899();
      node2775.append(node2777);
      node2774.append(node2775);
      
      
      
      
      
      
    });
  } else {
    var nodes6054 = $("<span>");
    node2774.append(nodes6054);
    subs__.addSub((ui.group)(function(_, callback) {
      var root7942 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2780 = mobl.loadingSpan();
      root7942.append(node2780);
      var list516;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList516 = function() {
        var subs__ = listSubs__;
        list516 = items.get();
        list516.list(function(results552) {
          node2780.empty();
          for(var i521 = 0; i521 < results552.length; i521++) {
            (function() {
              var iternode516 = $("<span>");
              node2780.append(iternode516);
              var it;
              it = mobl.ref(mobl.ref(results552), i521);
              
              var tmp13216 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                   var tmp13274 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp13218 = mobl.ref(false);
              
              
              var tmp13217 = mobl.ref(null);
              
              var nodes6055 = $("<span>");
              iternode516.append(nodes6055);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13216, tmp13217, tmp13218, function(_, callback) {
                var root7943 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6056 = $("<span>");
                root7943.append(nodes6056);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl902();
                }));
                
                function renderControl902() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root7944 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root7944); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6056;
                    nodes6056 = node.contents();
                    oldNodes.replaceWith(nodes6056);
                  }));
                }
                renderControl902();
                callback(root7943); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6055;
                nodes6055 = node.contents();
                oldNodes.replaceWith(nodes6055);
              }));
              
              var oldNodes = iternode516;
              iternode516 = iternode516.contents();
              oldNodes.replaceWith(iternode516);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list516.addEventListener('change', function() { listSubs__.unsubscribe(); renderList516(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList516(true); }));
        });
      };
      renderList516();
      
      callback(root7942); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6054;
      nodes6054 = node.contents();
      oldNodes.replaceWith(nodes6054);
    }));
    
    
  }
};
renderCond261();
subs__.addSub(tmp13265.addEventListener('change', function() {
  renderCond261();
}));

callback(root7935); return subs__;

return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
var root7945 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp13221 = mobl.ref("Detail");


var tmp13222 = mobl.ref(null);

var nodes6057 = $("<span>");
root7945.append(nodes6057);
subs__.addSub((ui.header)(tmp13221, tmp13222, function(_, callback) {
  var root7946 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp13220 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp13219 = mobl.ref("Back");
  
  var nodes6058 = $("<span>");
  root7946.append(nodes6058);
  subs__.addSub((ui.backButton)(tmp13219, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13220, function(_, callback) {
    var root7947 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7947); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6058;
    nodes6058 = node.contents();
    oldNodes.replaceWith(nodes6058);
  }));
  callback(root7946); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes6057;
  nodes6057 = node.contents();
  oldNodes.replaceWith(nodes6057);
}));
var nodes6059 = $("<span>");
root7945.append(nodes6059);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl903();
}));

function renderControl903() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root7948 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7948); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6059;
    nodes6059 = node.contents();
    oldNodes.replaceWith(nodes6059);
  }));
}
renderControl903();
callback(root7945); return subs__;


return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root7949 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes6060 = $("<span>");
root7949.append(nodes6060);
subs__.addSub((ui.group)(function(_, callback) {
  var root7950 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2781 = mobl.loadingSpan();
  root7950.append(node2781);
  var list517;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList517 = function() {
    var subs__ = listSubs__;
    list517 = coll.get();
    list517.list(function(results553) {
      node2781.empty();
      for(var i522 = 0; i522 < results553.length; i522++) {
        (function() {
          var iternode517 = $("<span>");
          node2781.append(iternode517);
          var it;
          it = mobl.ref(mobl.ref(results553), i522);
          
          var tmp13236 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp13236.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp13236.set(it.get() == selected.get());
          }));
          
          
          var node2782 = $("<span>");
          iternode517.append(node2782);
          var condSubs263 = new mobl.CompSubscription();
          subs__.addSub(condSubs263);
          var oldValue263;
          var renderCond263 = function() {
            var value587 = tmp13236.get();
            if(oldValue263 === value587) return;
            oldValue263 = value587;
            var subs__ = condSubs263;
            subs__.unsubscribe();
            node2782.empty();
            if(value587) {
              
              var tmp13232 = mobl.ref(false);
              
              
              var tmp13231 = mobl.ref(null);
              
              
              var tmp13230 = mobl.ref(null);
              
              var nodes6061 = $("<span>");
              node2782.append(nodes6061);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13230, tmp13231, tmp13232, function(_, callback) {
                var root7951 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6062 = $("<span>");
                root7951.append(nodes6062);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl904();
                }));
                
                function renderControl904() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root7952 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root7952); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6062;
                    nodes6062 = node.contents();
                    oldNodes.replaceWith(nodes6062);
                  }));
                }
                renderControl904();
                callback(root7951); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6061;
                nodes6061 = node.contents();
                oldNodes.replaceWith(nodes6061);
              }));
              
              
            } else {
              
              var tmp13234 = mobl.ref(true);
              
              
              var tmp13233 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp13235 = mobl.ref(null);
              
              var nodes6063 = $("<span>");
              node2782.append(nodes6063);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13233, tmp13235, tmp13234, function(_, callback) {
                var root7953 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6064 = $("<span>");
                root7953.append(nodes6064);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl905();
                }));
                
                function renderControl905() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root7954 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root7954); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6064;
                    nodes6064 = node.contents();
                    oldNodes.replaceWith(nodes6064);
                  }));
                }
                renderControl905();
                callback(root7953); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6063;
                nodes6063 = node.contents();
                oldNodes.replaceWith(nodes6063);
              }));
              
              
            }
          };
          renderCond263();
          subs__.addSub(tmp13236.addEventListener('change', function() {
            renderCond263();
          }));
          
          
          var oldNodes = iternode517;
          iternode517 = iternode517.contents();
          oldNodes.replaceWith(iternode517);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list517.addEventListener('change', function() { listSubs__.unsubscribe(); renderList517(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList517(true); }));
    });
  };
  renderList517();
  
  callback(root7950); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes6060;
  nodes6060 = node.contents();
  oldNodes.replaceWith(nodes6060);
}));
callback(root7949); return subs__;

return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root7955 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes6065 = $("<span>");
  root7955.append(nodes6065);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7956 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp13240 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp13240.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp13240.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp13240.set(coll.get().limit(n.get()));
    }));
    
    
    var node2783 = mobl.loadingSpan();
    root7956.append(node2783);
    var list518;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList518 = function() {
      var subs__ = listSubs__;
      list518 = tmp13240.get();
      list518.list(function(results554) {
        node2783.empty();
        for(var i523 = 0; i523 < results554.length; i523++) {
          (function() {
            var iternode518 = $("<span>");
            node2783.append(iternode518);
            var it;
            it = mobl.ref(mobl.ref(results554), i523);
            
            var tmp13237 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp13239 = mobl.ref(false);
            
            
            var tmp13238 = mobl.ref(null);
            
            var nodes6066 = $("<span>");
            iternode518.append(nodes6066);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13237, tmp13238, tmp13239, function(_, callback) {
              var root7957 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6067 = $("<span>");
              root7957.append(nodes6067);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl906();
              }));
              
              function renderControl906() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root7958 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7958); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6067;
                  nodes6067 = node.contents();
                  oldNodes.replaceWith(nodes6067);
                }));
              }
              renderControl906();
              callback(root7957); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6066;
              nodes6066 = node.contents();
              oldNodes.replaceWith(nodes6066);
            }));
            
            var oldNodes = iternode518;
            iternode518 = iternode518.contents();
            oldNodes.replaceWith(iternode518);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list518.addEventListener('change', function() { listSubs__.unsubscribe(); renderList518(true); }));
        subs__.addSub(tmp13240.addEventListener('change', function() { listSubs__.unsubscribe(); renderList518(true); }));
      });
    };
    renderList518();
    
    
    var tmp13241 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp13241.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp13241.set(n.get() < total.get());
    }));
    
    
    var node2784 = $("<span>");
    root7956.append(node2784);
    var condSubs264 = new mobl.CompSubscription();
    subs__.addSub(condSubs264);
    var oldValue264;
    var renderCond264 = function() {
      var value588 = tmp13241.get();
      if(oldValue264 === value588) return;
      oldValue264 = value588;
      var subs__ = condSubs264;
      subs__.unsubscribe();
      node2784.empty();
      if(value588) {
        
        var node2785 = $("<li>");
        
        var ref1808 = mobl.ref(ui.loadMoreStyle);
        if(ref1808.get() !== null) {
          node2785.attr('class', ref1808.get());
          subs__.addSub(ref1808.addEventListener('change', function(_, ref, val) {
            if(ref === ref1808) {
              node2785.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref1808.rebind());
        
        var val962 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val962 !== null) {
          subs__.addSub(mobl.domBind(node2785, 'tap', val962));
        }
        
        
        node2785.append("More");
        node2784.append(node2785);
        
        
      } else {
        
      }
    };
    renderCond264();
    subs__.addSub(tmp13241.addEventListener('change', function() {
      renderCond264();
    }));
    
    callback(root7956); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6065;
    nodes6065 = node.contents();
    oldNodes.replaceWith(nodes6065);
  }));
  callback(root7955); return subs__;
  
});
return subs__;
};

ui.markableList = function(items, elements, callback) {
var root7959 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes6068 = $("<span>");
root7959.append(nodes6068);
subs__.addSub((ui.group)(function(_, callback) {
  var root7960 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2786 = mobl.loadingSpan();
  root7960.append(node2786);
  var list519;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList519 = function() {
    var subs__ = listSubs__;
    list519 = items.get();
    list519.list(function(results555) {
      node2786.empty();
      for(var i524 = 0; i524 < results555.length; i524++) {
        (function() {
          var iternode519 = $("<span>");
          node2786.append(iternode519);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results555), i524), "_1");it = mobl.ref(mobl.ref(mobl.ref(results555), i524), "_2");
          
          var tmp13245 = mobl.ref(false);
          
          
          var tmp13244 = mobl.ref(null);
          
          
          var tmp13243 = mobl.ref(null);
          
          var nodes6069 = $("<span>");
          iternode519.append(nodes6069);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13243, tmp13244, tmp13245, function(_, callback) {
            var root7961 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp13242 = mobl.ref(null);
            
            var nodes6070 = $("<span>");
            root7961.append(nodes6070);
            subs__.addSub((ui.checkBox)(checked, it, tmp13242, function(_, callback) {
              var root7962 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root7962); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6070;
              nodes6070 = node.contents();
              oldNodes.replaceWith(nodes6070);
            }));
            callback(root7961); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6069;
            nodes6069 = node.contents();
            oldNodes.replaceWith(nodes6069);
          }));
          
          var oldNodes = iternode519;
          iternode519 = iternode519.contents();
          oldNodes.replaceWith(iternode519);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list519.addEventListener('change', function() { listSubs__.unsubscribe(); renderList519(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList519(true); }));
    });
  };
  renderList519();
  
  callback(root7960); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes6068;
  nodes6068 = node.contents();
  oldNodes.replaceWith(nodes6068);
}));
callback(root7959); return subs__;

return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
var root7963 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll1241) {
  coll1241 = coll1241.reverse();
  function processOne348() {
    var it;
    it = coll1241.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll1241.length > 0) processOne348(); else rest348();
    
  }
  function rest348() {
    
    var tmp13250 = mobl.ref(null);
    
    var nodes6071 = $("<span>");
    root7963.append(nodes6071);
    subs__.addSub((ui.header)(title, tmp13250, function(_, callback) {
      var root7964 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp13246 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp13247 = mobl.ref("Back");
      
      var nodes6072 = $("<span>");
      root7964.append(nodes6072);
      subs__.addSub((ui.backButton)(tmp13247, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13246, function(_, callback) {
        var root7965 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7965); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6072;
        nodes6072 = node.contents();
        oldNodes.replaceWith(nodes6072);
      }));
      
      var tmp13249 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll1240) {
                             coll1240 = coll1240.reverse();
                             function processOne347() {
                               var checked;var it;
                               var tmp13276 = coll1240.pop();
                               checked = tmp13276._1;it = tmp13276._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll1240.length > 0) processOne347(); else rest347();
                                 
                               } else {
                                 {
                                   
                                   if(coll1240.length > 0) processOne347(); else rest347();
                                   
                                 }
                               }
                             }
                             function rest347() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll1240.length > 0) processOne347(); else rest347();
                           });
                           
                         });
      
      
      var tmp13248 = mobl.ref("Done");
      
      var nodes6073 = $("<span>");
      root7964.append(nodes6073);
      subs__.addSub((ui.button)(tmp13248, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp13249, function(_, callback) {
        var root7966 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7966); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6073;
        nodes6073 = node.contents();
        oldNodes.replaceWith(nodes6073);
      }));
      callback(root7964); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6071;
      nodes6071 = node.contents();
      oldNodes.replaceWith(nodes6071);
    }));
    var nodes6074 = $("<span>");
    root7963.append(nodes6074);
    subs__.addSub((ui.markableList)(items, function(_, callback) {
      var root7967 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7967); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6074;
      nodes6074 = node.contents();
      oldNodes.replaceWith(nodes6074);
    }));
    callback(root7963); return subs__;
    
    
  }
  if(coll1241.length > 0) processOne348(); else rest348();
});

return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root7968 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp13251 = mobl.ref("Search term");


var tmp13253 = mobl.ref(null);


var tmp13252 = mobl.ref(null);

var nodes6075 = $("<span>");
root7968.append(nodes6075);
subs__.addSub((ui.searchBox)(phrase, tmp13251, tmp13252, tmp13253, function(_, callback) {
  var root7969 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root7969); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6075;
  nodes6075 = node.contents();
  oldNodes.replaceWith(nodes6075);
}));

var tmp13254 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp13254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp13254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp13254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp13254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp13254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes6076 = $("<span>");
root7968.append(nodes6076);
subs__.addSub((ui.masterDetail)(tmp13254, masterItem, detailItem, function(_, callback) {
  var root7970 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root7970); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes6076;
  nodes6076 = node.contents();
  oldNodes.replaceWith(nodes6076);
}));
callback(root7968); return subs__;


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
var root7971 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp13264 = mobl.ref(null);


var tmp13263 = mobl.ref(null);

var nodes6077 = $("<span>");
root7971.append(nodes6077);
subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp13263, tmp13264, function(_, callback) {
  var root7972 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2787 = mobl.loadingSpan();
  root7972.append(node2787);
  var list520;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList520 = function() {
    var subs__ = listSubs__;
    list520 = sections.get();
    list520.list(function(results556) {
      node2787.empty();
      for(var i525 = 0; i525 < results556.length; i525++) {
        (function() {
          var iternode520 = $("<span>");
          node2787.append(iternode520);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results556), i525), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results556), i525), "_2");
          
          var tmp13258 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp13258.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp13258.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp13258.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp13258.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp13257 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp13259 = mobl.ref(null);
          
          var nodes6078 = $("<span>");
          iternode520.append(nodes6078);
          subs__.addSub((ui.span)(tmp13258, tmp13259, tmp13257, function(_, callback) {
            var root7973 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp13256 = mobl.ref(null);
            
            
            var tmp13255 = mobl.ref(null);
            
            var nodes6079 = $("<span>");
            root7973.append(nodes6079);
            subs__.addSub((mobl.label)(sectionName, tmp13255, tmp13256, function(_, callback) {
              var root7974 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root7974); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6079;
              nodes6079 = node.contents();
              oldNodes.replaceWith(nodes6079);
            }));
            callback(root7973); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6078;
            nodes6078 = node.contents();
            oldNodes.replaceWith(nodes6078);
          }));
          
          var tmp13260 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp13260.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp13260.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
            tmp13260.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
            tmp13260.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          
          
          var tmp13262 = mobl.ref(null);
          
          
          var tmp13261 = mobl.ref(null);
          
          var nodes6080 = $("<span>");
          iternode520.append(nodes6080);
          subs__.addSub((ui.block)(tmp13260, tmp13261, tmp13262, function(_, callback) {
            var root7975 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes6081 = $("<span>");
            root7975.append(nodes6081);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl907();
            }));
            
            function renderControl907() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root7976 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7976); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6081;
                nodes6081 = node.contents();
                oldNodes.replaceWith(nodes6081);
              }));
            }
            renderControl907();
            callback(root7975); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6080;
            nodes6080 = node.contents();
            oldNodes.replaceWith(nodes6080);
          }));
          
          var oldNodes = iternode520;
          iternode520 = iternode520.contents();
          oldNodes.replaceWith(iternode520);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list520.addEventListener('change', function() { listSubs__.unsubscribe(); renderList520(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList520(true); }));
    });
  };
  renderList520();
  
  callback(root7972); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes6077;
  nodes6077 = node.contents();
  oldNodes.replaceWith(nodes6077);
}));
callback(root7971); return subs__;

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
var root7977 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2788 = $("<table>");

var ref1809 = mobl.ref(ui.tableStyle);
if(ref1809.get() !== null) {
  node2788.attr('class', ref1809.get());
  subs__.addSub(ref1809.addEventListener('change', function(_, ref, val) {
    if(ref === ref1809) {
      node2788.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1809.rebind());

var nodes6082 = $("<span>");
node2788.append(nodes6082);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl908();
}));

function renderControl908() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7978 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7978); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6082;
    nodes6082 = node.contents();
    oldNodes.replaceWith(nodes6082);
  }));
}
renderControl908();
root7977.append(node2788);
callback(root7977); return subs__;


return subs__;
};

ui.row = function(elements, callback) {
var root7979 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2789 = $("<tr>");

var ref1810 = mobl.ref(ui.trStyle);
if(ref1810.get() !== null) {
  node2789.attr('class', ref1810.get());
  subs__.addSub(ref1810.addEventListener('change', function(_, ref, val) {
    if(ref === ref1810) {
      node2789.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1810.rebind());

var nodes6083 = $("<span>");
node2789.append(nodes6083);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl909();
}));

function renderControl909() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7980 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7980); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6083;
    nodes6083 = node.contents();
    oldNodes.replaceWith(nodes6083);
  }));
}
renderControl909();
root7979.append(node2789);
callback(root7979); return subs__;


return subs__;
};

ui.cell = function(width, elements, callback) {
var root7981 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2790 = $("<td>");

var ref1811 = width;
if(ref1811.get() !== null) {
  node2790.attr('width', ref1811.get());
  subs__.addSub(ref1811.addEventListener('change', function(_, ref, val) {
    if(ref === ref1811) {
      node2790.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1811.rebind());

var ref1812 = mobl.ref(ui.tdStyle);
if(ref1812.get() !== null) {
  node2790.attr('class', ref1812.get());
  subs__.addSub(ref1812.addEventListener('change', function(_, ref, val) {
    if(ref === ref1812) {
      node2790.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1812.rebind());

var nodes6084 = $("<span>");
node2790.append(nodes6084);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl910();
}));

function renderControl910() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7982 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7982); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6084;
    nodes6084 = node.contents();
    oldNodes.replaceWith(nodes6084);
  }));
}
renderControl910();
root7981.append(node2790);
callback(root7981); return subs__;


return subs__;
};

ui.col = function(width, elements, callback) {
var root7983 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2791 = $("<td>");

var ref1813 = width;
if(ref1813.get() !== null) {
  node2791.attr('width', ref1813.get());
  subs__.addSub(ref1813.addEventListener('change', function(_, ref, val) {
    if(ref === ref1813) {
      node2791.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1813.rebind());

var ref1814 = mobl.ref(ui.tdStyle);
if(ref1814.get() !== null) {
  node2791.attr('class', ref1814.get());
  subs__.addSub(ref1814.addEventListener('change', function(_, ref, val) {
    if(ref === ref1814) {
      node2791.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1814.rebind());

var nodes6085 = $("<span>");
node2791.append(nodes6085);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl911();
}));

function renderControl911() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7984 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7984); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6085;
    nodes6085 = node.contents();
    oldNodes.replaceWith(nodes6085);
  }));
}
renderControl911();
root7983.append(node2791);
callback(root7983); return subs__;


return subs__;
};

ui.headerCol = function(width, elements, callback) {
var root7985 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2792 = $("<td>");

var ref1815 = width;
if(ref1815.get() !== null) {
  node2792.attr('width', ref1815.get());
  subs__.addSub(ref1815.addEventListener('change', function(_, ref, val) {
    if(ref === ref1815) {
      node2792.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1815.rebind());

var ref1816 = mobl.ref(ui.tdStyle);
if(ref1816.get() !== null) {
  node2792.attr('class', ref1816.get());
  subs__.addSub(ref1816.addEventListener('change', function(_, ref, val) {
    if(ref === ref1816) {
      node2792.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1816.rebind());


var node2793 = $("<strong>");

var nodes6086 = $("<span>");
node2793.append(nodes6086);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl912();
}));

function renderControl912() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7986); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6086;
    nodes6086 = node.contents();
    oldNodes.replaceWith(nodes6086);
  }));
}
renderControl912();
node2792.append(node2793);
root7985.append(node2792);
callback(root7985); return subs__;



return subs__;
};

ui.scroller = function(height, elements, callback) {
var root7987 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node2794 = $("<div>");
node2794.attr('class', "scroller");

var nodes6087 = $("<span>");
node2794.append(nodes6087);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl913();
}));

function renderControl913() {
  subs__.addSub((elements)(function(elements, callback) {
    var root7988 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7988); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6087;
    nodes6087 = node.contents();
    oldNodes.replaceWith(nodes6087);
  }));
}
renderControl913();
root7987.append(node2794);
var result__ = ui.setupScrollers();
callback(root7987); return subs__;


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
var root7989 = $("<span>");
var subs__ = new mobl.CompSubscription();

var slider = $("<div>");

root7989.append(slider);
var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                      if(event && event.stopPropagation) event.stopPropagation();
                                                                      var result__ = slider.slider("value");
                                                                      s.set(result__);
                                                                      var result__ = slider.slider("value");
                                                                      start.set(result__);
                                                                      if(callback && callback.apply) callback(); return;
                                                                    }}));
callback(root7989); return subs__;

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
