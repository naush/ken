mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
var root12769 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4783 = $("<span>");
root12769.append(node4783);
var condSubs559 = new mobl.CompSubscription();
subs__.addSub(condSubs559);
var oldValue559;
var renderCond559 = function() {
  var value1169 = value.get();
  if(oldValue559 === value1169) return;
  oldValue559 = value1169;
  var subs__ = condSubs559;
  subs__.unsubscribe();
  node4783.empty();
  if(value1169) {
    var nodes9343 = $("<span>");
    node4783.append(nodes9343);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl1883();
    }));
    
    function renderControl1883() {
      subs__.addSub((elements)(function(elements, callback) {
        var root12770 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root12770); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9343;
        nodes9343 = node.contents();
        oldNodes.replaceWith(nodes9343);
      }));
    }
    renderControl1883();
    
    
  } else {
    
    var tmp18535 = mobl.ref(null);
    
    
    var tmp18534 = mobl.ref(null);
    
    var nodes9344 = $("<span>");
    node4783.append(nodes9344);
    subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp18534, tmp18535, function(_, callback) {
      var root12771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root12771.append("Loading...");
      
      var tmp18528 = mobl.ref("middle");
      
      
      var tmp18527 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp18533 = mobl.ref(null);
      
      
      var tmp18532 = mobl.ref(null);
      
      
      var tmp18531 = mobl.ref(null);
      
      
      var tmp18530 = mobl.ref(null);
      
      
      var tmp18529 = mobl.ref(null);
      
      var nodes9345 = $("<span>");
      root12771.append(nodes9345);
      subs__.addSub((ui.image)(tmp18527, tmp18529, tmp18530, tmp18531, tmp18532, tmp18528, tmp18533, function(_, callback) {
        var root12772 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root12772); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9345;
        nodes9345 = node.contents();
        oldNodes.replaceWith(nodes9345);
      }));
      callback(root12771); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9344;
      nodes9344 = node.contents();
      oldNodes.replaceWith(nodes9344);
    }));
    
    
  }
};
renderCond559();
subs__.addSub(value.addEventListener('change', function() {
  renderCond559();
}));

callback(root12769); return subs__;

return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
var root12773 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4784 = $("<div>");

var ref3878 = mobl.ref(ui.headerStyle);
if(ref3878.get() !== null) {
  node4784.attr('class', ref3878.get());
  subs__.addSub(ref3878.addEventListener('change', function(_, ref, val) {
    if(ref === ref3878) {
      node4784.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3878.rebind());

var val2055 = onclick.get();
if(val2055 !== null) {
  subs__.addSub(mobl.domBind(node4784, 'tap', val2055));
}


var node4785 = $("<div>");

var ref3877 = mobl.ref(ui.headerContainerStyle);
if(ref3877.get() !== null) {
  node4785.attr('class', ref3877.get());
  subs__.addSub(ref3877.addEventListener('change', function(_, ref, val) {
    if(ref === ref3877) {
      node4785.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3877.rebind());


var node4786 = $("<div>");

var ref3875 = text;
node4786.text(""+ref3875.get());
var ignore791 = false;
subs__.addSub(ref3875.addEventListener('change', function(_, ref, val) {
  if(ignore791) return;
  node4786.text(""+val);
}));
subs__.addSub(ref3875.rebind());


var ref3876 = mobl.ref(ui.headerTextStyle);
if(ref3876.get() !== null) {
  node4786.attr('class', ref3876.get());
  subs__.addSub(ref3876.addEventListener('change', function(_, ref, val) {
    if(ref === ref3876) {
      node4786.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3876.rebind());

node4785.append(node4786);
node4784.append(node4785);
var nodes9346 = $("<span>");
node4784.append(nodes9346);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1884();
}));

function renderControl1884() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12774 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12774); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9346;
    nodes9346 = node.contents();
    oldNodes.replaceWith(nodes9346);
  }));
}
renderControl1884();
root12773.append(node4784);
callback(root12773); return subs__;




return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root12775 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref3879 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref3879.get() !== null) {
  sp.attr('class', ref3879.get());
  subs__.addSub(ref3879.addEventListener('change', function(_, ref, val) {
    if(ref === ref3879) {
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
subs__.addSub(ref3879.rebind());

var val2056 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val2056 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val2056));
}

var val2057 = function(event, callback) {
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
if(val2057 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val2057));
}

var val2058 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after237(result__) {
                  var tmp18606 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after237);if(result__ !== undefined) after237(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val2058 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val2058));
}

var val2059 = function(event, callback) {
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
if(val2059 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val2059));
}

var ref3880 = text;
sp.text(""+ref3880.get());
var ignore792 = false;
subs__.addSub(ref3880.addEventListener('change', function(_, ref, val) {
  if(ignore792) return;
  sp.text(""+val);
}));
subs__.addSub(ref3880.rebind());


root12775.append(sp);
callback(root12775); return subs__;

return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root12776 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes9347 = $("<span>");
root12776.append(nodes9347);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root12777 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root12777); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9347;
  nodes9347 = node.contents();
  oldNodes.replaceWith(nodes9347);
}));
callback(root12776); return subs__;

return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root12778 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes9348 = $("<span>");
root12778.append(nodes9348);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root12779 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root12779); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9348;
  nodes9348 = node.contents();
  oldNodes.replaceWith(nodes9348);
}));
callback(root12778); return subs__;

return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
var root12780 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4787 = $("<div>");

var ref3881 = id;
if(ref3881.get() !== null) {
  node4787.attr('id', ref3881.get());
  subs__.addSub(ref3881.addEventListener('change', function(_, ref, val) {
    if(ref === ref3881) {
      node4787.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3881.rebind());

var ref3882 = cssClass;
if(ref3882.get() !== null) {
  node4787.attr('class', ref3882.get());
  subs__.addSub(ref3882.addEventListener('change', function(_, ref, val) {
    if(ref === ref3882) {
      node4787.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3882.rebind());

var val2060 = onclick.get();
if(val2060 !== null) {
  subs__.addSub(mobl.domBind(node4787, 'tap', val2060));
}

var nodes9349 = $("<span>");
node4787.append(nodes9349);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1885();
}));

function renderControl1885() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12781 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12781); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9349;
    nodes9349 = node.contents();
    oldNodes.replaceWith(nodes9349);
  }));
}
renderControl1885();
root12780.append(node4787);
callback(root12780); return subs__;


return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
var root12782 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4788 = $("<span>");

var ref3883 = id;
if(ref3883.get() !== null) {
  node4788.attr('id', ref3883.get());
  subs__.addSub(ref3883.addEventListener('change', function(_, ref, val) {
    if(ref === ref3883) {
      node4788.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3883.rebind());

var ref3884 = cssClass;
if(ref3884.get() !== null) {
  node4788.attr('class', ref3884.get());
  subs__.addSub(ref3884.addEventListener('change', function(_, ref, val) {
    if(ref === ref3884) {
      node4788.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3884.rebind());

var val2061 = onclick.get();
if(val2061 !== null) {
  subs__.addSub(mobl.domBind(node4788, 'tap', val2061));
}

var nodes9350 = $("<span>");
node4788.append(nodes9350);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1886();
}));

function renderControl1886() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12783 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12783); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9350;
    nodes9350 = node.contents();
    oldNodes.replaceWith(nodes9350);
  }));
}
renderControl1886();
root12782.append(node4788);
callback(root12782); return subs__;


return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
var root12784 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4789 = $("<ul>");

var ref3885 = mobl.ref(ui.groupStyle);
if(ref3885.get() !== null) {
  node4789.attr('class', ref3885.get());
  subs__.addSub(ref3885.addEventListener('change', function(_, ref, val) {
    if(ref === ref3885) {
      node4789.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3885.rebind());

var nodes9351 = $("<span>");
node4789.append(nodes9351);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1887();
}));

function renderControl1887() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12785 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12785); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9351;
    nodes9351 = node.contents();
    oldNodes.replaceWith(nodes9351);
  }));
}
renderControl1887();
root12784.append(node4789);
callback(root12784); return subs__;


return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root12786 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4790 = $("<img>");

var ref3886 = url;
if(ref3886.get() !== null) {
  node4790.attr('src', ref3886.get());
  subs__.addSub(ref3886.addEventListener('change', function(_, ref, val) {
    if(ref === ref3886) {
      node4790.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3886.rebind());

var ref3887 = width;
if(ref3887.get() !== null) {
  node4790.attr('width', ref3887.get());
  subs__.addSub(ref3887.addEventListener('change', function(_, ref, val) {
    if(ref === ref3887) {
      node4790.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3887.rebind());

var ref3888 = height;
if(ref3888.get() !== null) {
  node4790.attr('height', ref3888.get());
  subs__.addSub(ref3888.addEventListener('change', function(_, ref, val) {
    if(ref === ref3888) {
      node4790.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3888.rebind());

var ref3889 = style;
if(ref3889.get() !== null) {
  node4790.attr('class', ref3889.get());
  subs__.addSub(ref3889.addEventListener('change', function(_, ref, val) {
    if(ref === ref3889) {
      node4790.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3889.rebind());

var val2062 = onclick.get();
if(val2062 !== null) {
  subs__.addSub(mobl.domBind(node4790, 'tap', val2062));
}

var ref3890 = valign;
if(ref3890.get() !== null) {
  node4790.attr('valign', ref3890.get());
  subs__.addSub(ref3890.addEventListener('change', function(_, ref, val) {
    if(ref === ref3890) {
      node4790.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3890.rebind());

var ref3891 = align;
if(ref3891.get() !== null) {
  node4790.attr('align', ref3891.get());
  subs__.addSub(ref3891.addEventListener('change', function(_, ref, val) {
    if(ref === ref3891) {
      node4790.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3891.rebind());

root12786.append(node4790);
callback(root12786); return subs__;

return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root12787 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref3892 = mobl.ref(ui.itemStyle);
if(ref3892.get() !== null) {
  el.attr('class', ref3892.get());
  subs__.addSub(ref3892.addEventListener('change', function(_, ref, val) {
    if(ref === ref3892) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3892.rebind());

var ref3893 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref3893.get() !== null) {
  el.attr('class', ref3893.get());
  subs__.addSub(ref3893.addEventListener('change', function(_, ref, val) {
    if(ref === ref3893) {
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
subs__.addSub(ref3893.rebind());

var val2063 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp18607 = result__;
                                         function after238(result__) {
                                           var tmp18608 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after238);if(result__ !== undefined) after238(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp18609 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val2063 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val2063));
}

var nodes9352 = $("<span>");
el.append(nodes9352);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1888();
}));

function renderControl1888() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12788 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12788); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9352;
    nodes9352 = node.contents();
    oldNodes.replaceWith(nodes9352);
  }));
}
renderControl1888();
root12787.append(el);
callback(root12787); return subs__;


return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
var root12789 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4791 = $("<input>");
node4791.attr('type', "checkbox");

var ref3895 = b;
node4791.attr('checked', !!ref3895.get());
subs__.addSub(ref3895.addEventListener('change', function(_, ref, val) {
  if(ref === ref3895) node4791.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node4791, 'change', function() {
  b.set(!!node4791.attr('checked'));
}));

var val2065 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val2065 !== null) {
  subs__.addSub(mobl.domBind(node4791, 'tap', val2065));
}

var val2066 = onchange.get();
if(val2066 !== null) {
  subs__.addSub(mobl.domBind(node4791, 'change', val2066));
}

root12789.append(node4791);

root12789.append(" ");

var node4792 = $("<span>");

var ref3894 = label;
node4792.text(""+ref3894.get());
var ignore793 = false;
subs__.addSub(ref3894.addEventListener('change', function(_, ref, val) {
  if(ignore793) return;
  node4792.text(""+val);
}));
subs__.addSub(ref3894.rebind());


var val2064 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after239(result__) {
                  var tmp18610 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after239);if(result__ !== undefined) after239(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val2064 !== null) {
  subs__.addSub(mobl.domBind(node4792, 'tap', val2064));
}

root12789.append(node4792);
callback(root12789); return subs__;


return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root12790 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4793 = $("<span>");
root12790.append(node4793);
var condSubs560 = new mobl.CompSubscription();
subs__.addSub(condSubs560);
var oldValue560;
var renderCond560 = function() {
  var value1170 = label.get();
  if(oldValue560 === value1170) return;
  oldValue560 = value1170;
  var subs__ = condSubs560;
  subs__.unsubscribe();
  node4793.empty();
  if(value1170) {
    
    var node4794 = $("<span>");
    node4794.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref3899 = label;
    node4794.text(""+ref3899.get());
    var ignore795 = false;
    subs__.addSub(ref3899.addEventListener('change', function(_, ref, val) {
      if(ignore795) return;
      node4794.text(""+val);
    }));
    subs__.addSub(ref3899.rebind());
    
    
    node4793.append(node4794);
    
    var node4795 = $("<span>");
    node4795.attr('style', "float: left");
    
    
    var node4796 = $("<input>");
    node4796.attr('type', "text");
    
    var ref3896 = mobl.ref(ui.textFieldStyle);
    if(ref3896.get() !== null) {
      node4796.attr('class', ref3896.get());
      subs__.addSub(ref3896.addEventListener('change', function(_, ref, val) {
        if(ref === ref3896) {
          node4796.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3896.rebind());
    
    var ref3897 = placeholder;
    if(ref3897.get() !== null) {
      node4796.attr('placeholder', ref3897.get());
      subs__.addSub(ref3897.addEventListener('change', function(_, ref, val) {
        if(ref === ref3897) {
          node4796.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3897.rebind());
    
    var ref3898 = s;
    node4796.val(""+ref3898.get());
    var ignore794 = false;
    subs__.addSub(ref3898.addEventListener('change', function(_, ref, val) {
      if(ignore794) return;
      node4796.val(""+val);
    }));
    subs__.addSub(ref3898.rebind());
    
    subs__.addSub(mobl.domBind(node4796, 'keyup change', function() {
      ignore794 = true;
      s.set(mobl.stringTomobl__String(node4796.val()));
      ignore794 = false;
    }));
    
    
    var val2067 = onchange.get();
    if(val2067 !== null) {
      subs__.addSub(mobl.domBind(node4796, 'change', val2067));
    }
    
    var val2068 = onkeyup.get();
    if(val2068 !== null) {
      subs__.addSub(mobl.domBind(node4796, 'keyup', val2068));
    }
    
    var val2069 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2069 !== null) {
      subs__.addSub(mobl.domBind(node4796, 'blur', val2069));
    }
    
    node4795.append(node4796);
    node4793.append(node4795);
    
    
    
    
  } else {
    
    var node4797 = $("<input>");
    node4797.attr('type', "text");
    
    var ref3900 = mobl.ref(ui.textFieldStyle);
    if(ref3900.get() !== null) {
      node4797.attr('class', ref3900.get());
      subs__.addSub(ref3900.addEventListener('change', function(_, ref, val) {
        if(ref === ref3900) {
          node4797.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3900.rebind());
    
    var ref3901 = placeholder;
    if(ref3901.get() !== null) {
      node4797.attr('placeholder', ref3901.get());
      subs__.addSub(ref3901.addEventListener('change', function(_, ref, val) {
        if(ref === ref3901) {
          node4797.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3901.rebind());
    
    var ref3902 = s;
    node4797.val(""+ref3902.get());
    var ignore796 = false;
    subs__.addSub(ref3902.addEventListener('change', function(_, ref, val) {
      if(ignore796) return;
      node4797.val(""+val);
    }));
    subs__.addSub(ref3902.rebind());
    
    subs__.addSub(mobl.domBind(node4797, 'keyup change', function() {
      ignore796 = true;
      s.set(mobl.stringTomobl__String(node4797.val()));
      ignore796 = false;
    }));
    
    
    var val2070 = onchange.get();
    if(val2070 !== null) {
      subs__.addSub(mobl.domBind(node4797, 'change', val2070));
    }
    
    var val2071 = onkeyup.get();
    if(val2071 !== null) {
      subs__.addSub(mobl.domBind(node4797, 'keyup', val2071));
    }
    
    var val2072 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2072 !== null) {
      subs__.addSub(mobl.domBind(node4797, 'blur', val2072));
    }
    
    node4793.append(node4797);
    
    
  }
};
renderCond560();
subs__.addSub(label.addEventListener('change', function() {
  renderCond560();
}));

callback(root12790); return subs__;

return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
var root12791 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4798 = $("<span>");
root12791.append(node4798);
var condSubs561 = new mobl.CompSubscription();
subs__.addSub(condSubs561);
var oldValue561;
var renderCond561 = function() {
  var value1171 = label.get();
  if(oldValue561 === value1171) return;
  oldValue561 = value1171;
  var subs__ = condSubs561;
  subs__.unsubscribe();
  node4798.empty();
  if(value1171) {
    
    var node4799 = $("<span>");
    node4799.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref3906 = label;
    node4799.text(""+ref3906.get());
    var ignore798 = false;
    subs__.addSub(ref3906.addEventListener('change', function(_, ref, val) {
      if(ignore798) return;
      node4799.text(""+val);
    }));
    subs__.addSub(ref3906.rebind());
    
    
    node4798.append(node4799);
    
    var node4800 = $("<span>");
    node4800.attr('style', "float: left");
    
    
    var node4801 = $("<input>");
    node4801.attr('type', "text");
    
    var ref3903 = mobl.ref(ui.textFieldStyle);
    if(ref3903.get() !== null) {
      node4801.attr('class', ref3903.get());
      subs__.addSub(ref3903.addEventListener('change', function(_, ref, val) {
        if(ref === ref3903) {
          node4801.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3903.rebind());
    
    var ref3904 = placeholder;
    if(ref3904.get() !== null) {
      node4801.attr('placeholder', ref3904.get());
      subs__.addSub(ref3904.addEventListener('change', function(_, ref, val) {
        if(ref === ref3904) {
          node4801.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3904.rebind());
    
    var ref3905 = n;
    node4801.val(""+ref3905.get());
    var ignore797 = false;
    subs__.addSub(ref3905.addEventListener('change', function(_, ref, val) {
      if(ignore797) return;
      node4801.val(""+val);
    }));
    subs__.addSub(ref3905.rebind());
    
    subs__.addSub(mobl.domBind(node4801, 'keyup change', function() {
      ignore797 = true;
      n.set(mobl.stringTomobl__Num(node4801.val()));
      ignore797 = false;
    }));
    
    
    var val2073 = onchange.get();
    if(val2073 !== null) {
      subs__.addSub(mobl.domBind(node4801, 'change', val2073));
    }
    
    var val2074 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2074 !== null) {
      subs__.addSub(mobl.domBind(node4801, 'blur', val2074));
    }
    
    node4800.append(node4801);
    node4798.append(node4800);
    
    
    
    
  } else {
    
    var node4802 = $("<input>");
    node4802.attr('type', "text");
    
    var ref3907 = mobl.ref(ui.textFieldStyle);
    if(ref3907.get() !== null) {
      node4802.attr('class', ref3907.get());
      subs__.addSub(ref3907.addEventListener('change', function(_, ref, val) {
        if(ref === ref3907) {
          node4802.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3907.rebind());
    
    var ref3908 = placeholder;
    if(ref3908.get() !== null) {
      node4802.attr('placeholder', ref3908.get());
      subs__.addSub(ref3908.addEventListener('change', function(_, ref, val) {
        if(ref === ref3908) {
          node4802.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3908.rebind());
    
    var ref3909 = n;
    node4802.val(""+ref3909.get());
    var ignore799 = false;
    subs__.addSub(ref3909.addEventListener('change', function(_, ref, val) {
      if(ignore799) return;
      node4802.val(""+val);
    }));
    subs__.addSub(ref3909.rebind());
    
    subs__.addSub(mobl.domBind(node4802, 'keyup change', function() {
      ignore799 = true;
      n.set(mobl.stringTomobl__Num(node4802.val()));
      ignore799 = false;
    }));
    
    
    var val2075 = onchange.get();
    if(val2075 !== null) {
      subs__.addSub(mobl.domBind(node4802, 'change', val2075));
    }
    
    var val2076 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2076 !== null) {
      subs__.addSub(mobl.domBind(node4802, 'blur', val2076));
    }
    
    node4798.append(node4802);
    
    
  }
};
renderCond561();
subs__.addSub(label.addEventListener('change', function() {
  renderCond561();
}));

callback(root12791); return subs__;

return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
var root12792 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp18542 = mobl.ref(null);


var tmp18541 = mobl.ref(null);

var nodes9353 = $("<span>");
root12792.append(nodes9353);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp18541, tmp18542, function(_, callback) {
  var root12793 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4803 = mobl.loadingSpan();
  root12793.append(node4803);
  var list888;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList888 = function() {
    var subs__ = listSubs__;
    list888 = tabs.get();
    list888.list(function(results924) {
      node4803.empty();
      for(var i893 = 0; i893 < results924.length; i893++) {
        (function() {
          var iternode888 = $("<span>");
          node4803.append(iternode888);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results924), i893), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results924), i893), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results924), i893), "_3");
          
          var tmp18539 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp18539.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp18539.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp18539.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp18539.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp18538 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp18540 = mobl.ref(null);
          
          var nodes9354 = $("<span>");
          iternode888.append(nodes9354);
          subs__.addSub((ui.span)(tmp18539, tmp18540, tmp18538, function(_, callback) {
            var root12794 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp18537 = mobl.ref(null);
            
            
            var tmp18536 = mobl.ref(null);
            
            var nodes9355 = $("<span>");
            root12794.append(nodes9355);
            subs__.addSub((mobl.label)(tabName, tmp18536, tmp18537, function(_, callback) {
              var root12795 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root12795); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9355;
              nodes9355 = node.contents();
              oldNodes.replaceWith(nodes9355);
            }));
            callback(root12794); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9354;
            nodes9354 = node.contents();
            oldNodes.replaceWith(nodes9354);
          }));
          
          var oldNodes = iternode888;
          iternode888 = iternode888.contents();
          oldNodes.replaceWith(iternode888);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list888.addEventListener('change', function() { listSubs__.unsubscribe(); renderList888(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList888(true); }));
    });
  };
  renderList888();
  
  callback(root12793); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9353;
  nodes9353 = node.contents();
  oldNodes.replaceWith(nodes9353);
}));

var node4804 = mobl.loadingSpan();
root12792.append(node4804);
var list889;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList889 = function() {
  var subs__ = listSubs__;
  list889 = tabs.get();
  list889.list(function(results925) {
    node4804.empty();
    for(var i894 = 0; i894 < results925.length; i894++) {
      (function() {
        var iternode889 = $("<span>");
        node4804.append(iternode889);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results925), i894), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results925), i894), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results925), i894), "_3");
        
        var tmp18543 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp18543.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp18543.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp18543.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp18543.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp18545 = mobl.ref(null);
        
        
        var tmp18544 = mobl.ref(null);
        
        var nodes9356 = $("<span>");
        iternode889.append(nodes9356);
        subs__.addSub((ui.block)(tmp18543, tmp18544, tmp18545, function(_, callback) {
          var root12796 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes9357 = $("<span>");
          root12796.append(nodes9357);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root12797 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes9358 = $("<span>");
            root12797.append(nodes9358);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl1889();
            }));
            
            function renderControl1889() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root12798 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root12798); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9358;
                nodes9358 = node.contents();
                oldNodes.replaceWith(nodes9358);
              }));
            }
            renderControl1889();
            callback(root12797); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9357;
            nodes9357 = node.contents();
            oldNodes.replaceWith(nodes9357);
          }));
          callback(root12796); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9356;
          nodes9356 = node.contents();
          oldNodes.replaceWith(nodes9356);
        }));
        
        var oldNodes = iternode889;
        iternode889 = iternode889.contents();
        oldNodes.replaceWith(iternode889);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list889.addEventListener('change', function() { listSubs__.unsubscribe(); renderList889(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList889(true); }));
  });
};
renderList889();

callback(root12792); return subs__;


return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root12799 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4805 = $("<div>");

var ref3913 = mobl.ref(ui.searchboxStyle);
if(ref3913.get() !== null) {
  node4805.attr('class', ref3913.get());
  subs__.addSub(ref3913.addEventListener('change', function(_, ref, val) {
    if(ref === ref3913) {
      node4805.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3913.rebind());


var node4806 = $("<input>");
node4806.attr('type', "text");

var ref3910 = mobl.ref(ui.searchBoxInputStyle);
if(ref3910.get() !== null) {
  node4806.attr('class', ref3910.get());
  subs__.addSub(ref3910.addEventListener('change', function(_, ref, val) {
    if(ref === ref3910) {
      node4806.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3910.rebind());

var ref3911 = placeholder;
if(ref3911.get() !== null) {
  node4806.attr('placeholder', ref3911.get());
  subs__.addSub(ref3911.addEventListener('change', function(_, ref, val) {
    if(ref === ref3911) {
      node4806.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3911.rebind());

var ref3912 = s;
node4806.val(""+ref3912.get());
var ignore800 = false;
subs__.addSub(ref3912.addEventListener('change', function(_, ref, val) {
  if(ignore800) return;
  node4806.val(""+val);
}));
subs__.addSub(ref3912.rebind());

subs__.addSub(mobl.domBind(node4806, 'keyup change', function() {
  ignore800 = true;
  s.set(mobl.stringTomobl__String(node4806.val()));
  ignore800 = false;
}));


var val2077 = onsearch.get();
if(val2077 !== null) {
  subs__.addSub(mobl.domBind(node4806, 'change', val2077));
}

var val2078 = onkeyup.get();
if(val2078 !== null) {
  subs__.addSub(mobl.domBind(node4806, 'keyup', val2078));
}
node4806.attr('autocorrect', "off");
node4806.attr('autocapitalize', "off");
node4806.attr('autocomplete', "off");

node4805.append(node4806);
root12799.append(node4805);
callback(root12799); return subs__;


return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
var root12800 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref3914 = mobl.ref(ui.contextMenuStyle);
if(ref3914.get() !== null) {
  menu.attr('class', ref3914.get());
  subs__.addSub(ref3914.addEventListener('change', function(_, ref, val) {
    if(ref === ref3914) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3914.rebind());

var nodes9359 = $("<span>");
menu.append(nodes9359);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1890();
}));

function renderControl1890() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12801 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12801); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9359;
    nodes9359 = node.contents();
    oldNodes.replaceWith(nodes9359);
  }));
}
renderControl1890();
root12800.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val2079 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp18613 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val2079 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val2079));
}

root12800.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root12800); return subs__;



return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
var root12802 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp18605 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp18605.set(mobl.window.get().innerWidth > 500);
}));


var node4807 = $("<span>");
root12802.append(node4807);
var condSubs562 = new mobl.CompSubscription();
subs__.addSub(condSubs562);
var oldValue562;
var renderCond562 = function() {
  var value1172 = tmp18605.get();
  if(oldValue562 === value1172) return;
  oldValue562 = value1172;
  var subs__ = condSubs562;
  subs__.unsubscribe();
  node4807.empty();
  if(value1172) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node4808 = $("<div>");
      node4808.attr('width', "100%");
      
      
      var node4809 = $("<div>");
      node4809.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes9361 = $("<span>");
      node4809.append(nodes9361);
      subs__.addSub((ui.group)(function(_, callback) {
        var root12804 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node4811 = mobl.loadingSpan();
        root12804.append(node4811);
        var list890;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList890 = function() {
          var subs__ = listSubs__;
          list890 = items.get();
          list890.list(function(results926) {
            node4811.empty();
            for(var i895 = 0; i895 < results926.length; i895++) {
              (function() {
                var iternode890 = $("<span>");
                node4811.append(iternode890);
                var it;
                it = mobl.ref(mobl.ref(results926), i895);
                
                var tmp18559 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp18559.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp18559.set(it.get() == current.get());
                }));
                
                
                var node4812 = $("<span>");
                iternode890.append(node4812);
                var condSubs563 = new mobl.CompSubscription();
                subs__.addSub(condSubs563);
                var oldValue563;
                var renderCond563 = function() {
                  var value1173 = tmp18559.get();
                  if(oldValue563 === value1173) return;
                  oldValue563 = value1173;
                  var subs__ = condSubs563;
                  subs__.unsubscribe();
                  node4812.empty();
                  if(value1173) {
                    
                    var tmp18555 = mobl.ref(false);
                    
                    
                    var tmp18554 = mobl.ref(null);
                    
                    
                    var tmp18553 = mobl.ref(null);
                    
                    var nodes9362 = $("<span>");
                    node4812.append(nodes9362);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp18553, tmp18554, tmp18555, function(_, callback) {
                      var root12805 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes9363 = $("<span>");
                      root12805.append(nodes9363);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1892();
                      }));
                      
                      function renderControl1892() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root12806 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root12806); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes9363;
                          nodes9363 = node.contents();
                          oldNodes.replaceWith(nodes9363);
                        }));
                      }
                      renderControl1892();
                      callback(root12805); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9362;
                      nodes9362 = node.contents();
                      oldNodes.replaceWith(nodes9362);
                    }));
                    
                    
                  } else {
                    
                    var tmp18557 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp18556 = mobl.ref(true);
                    
                    
                    var tmp18558 = mobl.ref(null);
                    
                    var nodes9364 = $("<span>");
                    node4812.append(nodes9364);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18557, tmp18558, tmp18556, function(_, callback) {
                      var root12807 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes9365 = $("<span>");
                      root12807.append(nodes9365);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1893();
                      }));
                      
                      function renderControl1893() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root12808 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root12808); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes9365;
                          nodes9365 = node.contents();
                          oldNodes.replaceWith(nodes9365);
                        }));
                      }
                      renderControl1893();
                      callback(root12807); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9364;
                      nodes9364 = node.contents();
                      oldNodes.replaceWith(nodes9364);
                    }));
                    
                    
                  }
                };
                renderCond563();
                subs__.addSub(tmp18559.addEventListener('change', function() {
                  renderCond563();
                }));
                
                
                var oldNodes = iternode890;
                iternode890 = iternode890.contents();
                oldNodes.replaceWith(iternode890);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list890.addEventListener('change', function() { listSubs__.unsubscribe(); renderList890(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList890(true); }));
          });
        };
        renderList890();
        
        callback(root12804); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9361;
        nodes9361 = node.contents();
        oldNodes.replaceWith(nodes9361);
      }));
      node4808.append(node4809);
      
      var node4810 = $("<div>");
      node4810.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes9360 = $("<span>");
      node4810.append(nodes9360);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl1891();
      }));
      
      function renderControl1891() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root12803 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root12803); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9360;
          nodes9360 = node.contents();
          oldNodes.replaceWith(nodes9360);
        }));
      }
      renderControl1891();
      node4808.append(node4810);
      node4807.append(node4808);
      
      
      
      
      
      
    });
  } else {
    var nodes9366 = $("<span>");
    node4807.append(nodes9366);
    subs__.addSub((ui.group)(function(_, callback) {
      var root12809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node4813 = mobl.loadingSpan();
      root12809.append(node4813);
      var list891;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList891 = function() {
        var subs__ = listSubs__;
        list891 = items.get();
        list891.list(function(results927) {
          node4813.empty();
          for(var i896 = 0; i896 < results927.length; i896++) {
            (function() {
              var iternode891 = $("<span>");
              node4813.append(iternode891);
              var it;
              it = mobl.ref(mobl.ref(results927), i896);
              
              var tmp18546 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                   var tmp18614 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp18548 = mobl.ref(false);
              
              
              var tmp18547 = mobl.ref(null);
              
              var nodes9367 = $("<span>");
              iternode891.append(nodes9367);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18546, tmp18547, tmp18548, function(_, callback) {
                var root12810 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9368 = $("<span>");
                root12810.append(nodes9368);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl1894();
                }));
                
                function renderControl1894() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root12811 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root12811); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9368;
                    nodes9368 = node.contents();
                    oldNodes.replaceWith(nodes9368);
                  }));
                }
                renderControl1894();
                callback(root12810); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9367;
                nodes9367 = node.contents();
                oldNodes.replaceWith(nodes9367);
              }));
              
              var oldNodes = iternode891;
              iternode891 = iternode891.contents();
              oldNodes.replaceWith(iternode891);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list891.addEventListener('change', function() { listSubs__.unsubscribe(); renderList891(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList891(true); }));
        });
      };
      renderList891();
      
      callback(root12809); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9366;
      nodes9366 = node.contents();
      oldNodes.replaceWith(nodes9366);
    }));
    
    
  }
};
renderCond562();
subs__.addSub(tmp18605.addEventListener('change', function() {
  renderCond562();
}));

callback(root12802); return subs__;

return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
var root12812 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp18551 = mobl.ref("Detail");


var tmp18552 = mobl.ref(null);

var nodes9369 = $("<span>");
root12812.append(nodes9369);
subs__.addSub((ui.header)(tmp18551, tmp18552, function(_, callback) {
  var root12813 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18550 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp18549 = mobl.ref("Back");
  
  var nodes9370 = $("<span>");
  root12813.append(nodes9370);
  subs__.addSub((ui.backButton)(tmp18549, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp18550, function(_, callback) {
    var root12814 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12814); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9370;
    nodes9370 = node.contents();
    oldNodes.replaceWith(nodes9370);
  }));
  callback(root12813); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9369;
  nodes9369 = node.contents();
  oldNodes.replaceWith(nodes9369);
}));
var nodes9371 = $("<span>");
root12812.append(nodes9371);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl1895();
}));

function renderControl1895() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root12815 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12815); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9371;
    nodes9371 = node.contents();
    oldNodes.replaceWith(nodes9371);
  }));
}
renderControl1895();
callback(root12812); return subs__;


return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root12816 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes9372 = $("<span>");
root12816.append(nodes9372);
subs__.addSub((ui.group)(function(_, callback) {
  var root12817 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4814 = mobl.loadingSpan();
  root12817.append(node4814);
  var list892;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList892 = function() {
    var subs__ = listSubs__;
    list892 = coll.get();
    list892.list(function(results928) {
      node4814.empty();
      for(var i897 = 0; i897 < results928.length; i897++) {
        (function() {
          var iternode892 = $("<span>");
          node4814.append(iternode892);
          var it;
          it = mobl.ref(mobl.ref(results928), i897);
          
          var tmp18566 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp18566.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp18566.set(it.get() == selected.get());
          }));
          
          
          var node4815 = $("<span>");
          iternode892.append(node4815);
          var condSubs564 = new mobl.CompSubscription();
          subs__.addSub(condSubs564);
          var oldValue564;
          var renderCond564 = function() {
            var value1174 = tmp18566.get();
            if(oldValue564 === value1174) return;
            oldValue564 = value1174;
            var subs__ = condSubs564;
            subs__.unsubscribe();
            node4815.empty();
            if(value1174) {
              
              var tmp18562 = mobl.ref(false);
              
              
              var tmp18561 = mobl.ref(null);
              
              
              var tmp18560 = mobl.ref(null);
              
              var nodes9373 = $("<span>");
              node4815.append(nodes9373);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18560, tmp18561, tmp18562, function(_, callback) {
                var root12818 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9374 = $("<span>");
                root12818.append(nodes9374);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl1896();
                }));
                
                function renderControl1896() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root12819 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root12819); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9374;
                    nodes9374 = node.contents();
                    oldNodes.replaceWith(nodes9374);
                  }));
                }
                renderControl1896();
                callback(root12818); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9373;
                nodes9373 = node.contents();
                oldNodes.replaceWith(nodes9373);
              }));
              
              
            } else {
              
              var tmp18564 = mobl.ref(true);
              
              
              var tmp18563 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp18565 = mobl.ref(null);
              
              var nodes9375 = $("<span>");
              node4815.append(nodes9375);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18563, tmp18565, tmp18564, function(_, callback) {
                var root12820 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9376 = $("<span>");
                root12820.append(nodes9376);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl1897();
                }));
                
                function renderControl1897() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root12821 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root12821); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9376;
                    nodes9376 = node.contents();
                    oldNodes.replaceWith(nodes9376);
                  }));
                }
                renderControl1897();
                callback(root12820); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9375;
                nodes9375 = node.contents();
                oldNodes.replaceWith(nodes9375);
              }));
              
              
            }
          };
          renderCond564();
          subs__.addSub(tmp18566.addEventListener('change', function() {
            renderCond564();
          }));
          
          
          var oldNodes = iternode892;
          iternode892 = iternode892.contents();
          oldNodes.replaceWith(iternode892);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list892.addEventListener('change', function() { listSubs__.unsubscribe(); renderList892(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList892(true); }));
    });
  };
  renderList892();
  
  callback(root12817); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9372;
  nodes9372 = node.contents();
  oldNodes.replaceWith(nodes9372);
}));
callback(root12816); return subs__;

return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root12822 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes9377 = $("<span>");
  root12822.append(nodes9377);
  subs__.addSub((ui.group)(function(_, callback) {
    var root12823 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp18570 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp18570.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp18570.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp18570.set(coll.get().limit(n.get()));
    }));
    
    
    var node4816 = mobl.loadingSpan();
    root12823.append(node4816);
    var list893;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList893 = function() {
      var subs__ = listSubs__;
      list893 = tmp18570.get();
      list893.list(function(results929) {
        node4816.empty();
        for(var i898 = 0; i898 < results929.length; i898++) {
          (function() {
            var iternode893 = $("<span>");
            node4816.append(iternode893);
            var it;
            it = mobl.ref(mobl.ref(results929), i898);
            
            var tmp18567 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp18569 = mobl.ref(false);
            
            
            var tmp18568 = mobl.ref(null);
            
            var nodes9378 = $("<span>");
            iternode893.append(nodes9378);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18567, tmp18568, tmp18569, function(_, callback) {
              var root12824 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9379 = $("<span>");
              root12824.append(nodes9379);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl1898();
              }));
              
              function renderControl1898() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root12825 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root12825); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9379;
                  nodes9379 = node.contents();
                  oldNodes.replaceWith(nodes9379);
                }));
              }
              renderControl1898();
              callback(root12824); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9378;
              nodes9378 = node.contents();
              oldNodes.replaceWith(nodes9378);
            }));
            
            var oldNodes = iternode893;
            iternode893 = iternode893.contents();
            oldNodes.replaceWith(iternode893);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list893.addEventListener('change', function() { listSubs__.unsubscribe(); renderList893(true); }));
        subs__.addSub(tmp18570.addEventListener('change', function() { listSubs__.unsubscribe(); renderList893(true); }));
      });
    };
    renderList893();
    
    
    var tmp18571 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp18571.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp18571.set(n.get() < total.get());
    }));
    
    
    var node4817 = $("<span>");
    root12823.append(node4817);
    var condSubs565 = new mobl.CompSubscription();
    subs__.addSub(condSubs565);
    var oldValue565;
    var renderCond565 = function() {
      var value1175 = tmp18571.get();
      if(oldValue565 === value1175) return;
      oldValue565 = value1175;
      var subs__ = condSubs565;
      subs__.unsubscribe();
      node4817.empty();
      if(value1175) {
        
        var node4818 = $("<li>");
        
        var ref3915 = mobl.ref(ui.loadMoreStyle);
        if(ref3915.get() !== null) {
          node4818.attr('class', ref3915.get());
          subs__.addSub(ref3915.addEventListener('change', function(_, ref, val) {
            if(ref === ref3915) {
              node4818.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref3915.rebind());
        
        var val2080 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val2080 !== null) {
          subs__.addSub(mobl.domBind(node4818, 'tap', val2080));
        }
        
        
        node4818.append("More");
        node4817.append(node4818);
        
        
      } else {
        
      }
    };
    renderCond565();
    subs__.addSub(tmp18571.addEventListener('change', function() {
      renderCond565();
    }));
    
    callback(root12823); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9377;
    nodes9377 = node.contents();
    oldNodes.replaceWith(nodes9377);
  }));
  callback(root12822); return subs__;
  
});
return subs__;
};

ui.markableList = function(items, elements, callback) {
var root12826 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes9380 = $("<span>");
root12826.append(nodes9380);
subs__.addSub((ui.group)(function(_, callback) {
  var root12827 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4819 = mobl.loadingSpan();
  root12827.append(node4819);
  var list894;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList894 = function() {
    var subs__ = listSubs__;
    list894 = items.get();
    list894.list(function(results930) {
      node4819.empty();
      for(var i899 = 0; i899 < results930.length; i899++) {
        (function() {
          var iternode894 = $("<span>");
          node4819.append(iternode894);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results930), i899), "_1");it = mobl.ref(mobl.ref(mobl.ref(results930), i899), "_2");
          
          var tmp18575 = mobl.ref(false);
          
          
          var tmp18574 = mobl.ref(null);
          
          
          var tmp18573 = mobl.ref(null);
          
          var nodes9381 = $("<span>");
          iternode894.append(nodes9381);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18573, tmp18574, tmp18575, function(_, callback) {
            var root12828 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp18572 = mobl.ref(null);
            
            var nodes9382 = $("<span>");
            root12828.append(nodes9382);
            subs__.addSub((ui.checkBox)(checked, it, tmp18572, function(_, callback) {
              var root12829 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root12829); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9382;
              nodes9382 = node.contents();
              oldNodes.replaceWith(nodes9382);
            }));
            callback(root12828); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9381;
            nodes9381 = node.contents();
            oldNodes.replaceWith(nodes9381);
          }));
          
          var oldNodes = iternode894;
          iternode894 = iternode894.contents();
          oldNodes.replaceWith(iternode894);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list894.addEventListener('change', function() { listSubs__.unsubscribe(); renderList894(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList894(true); }));
    });
  };
  renderList894();
  
  callback(root12827); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9380;
  nodes9380 = node.contents();
  oldNodes.replaceWith(nodes9380);
}));
callback(root12826); return subs__;

return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
var root12830 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll2213) {
  coll2213 = coll2213.reverse();
  function processOne459() {
    var it;
    it = coll2213.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll2213.length > 0) processOne459(); else rest459();
    
  }
  function rest459() {
    
    var tmp18580 = mobl.ref(null);
    
    var nodes9383 = $("<span>");
    root12830.append(nodes9383);
    subs__.addSub((ui.header)(title, tmp18580, function(_, callback) {
      var root12831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp18576 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp18577 = mobl.ref("Back");
      
      var nodes9384 = $("<span>");
      root12831.append(nodes9384);
      subs__.addSub((ui.backButton)(tmp18577, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp18576, function(_, callback) {
        var root12832 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root12832); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9384;
        nodes9384 = node.contents();
        oldNodes.replaceWith(nodes9384);
      }));
      
      var tmp18579 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll2212) {
                             coll2212 = coll2212.reverse();
                             function processOne458() {
                               var checked;var it;
                               var tmp18616 = coll2212.pop();
                               checked = tmp18616._1;it = tmp18616._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll2212.length > 0) processOne458(); else rest458();
                                 
                               } else {
                                 {
                                   
                                   if(coll2212.length > 0) processOne458(); else rest458();
                                   
                                 }
                               }
                             }
                             function rest458() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll2212.length > 0) processOne458(); else rest458();
                           });
                           
                         });
      
      
      var tmp18578 = mobl.ref("Done");
      
      var nodes9385 = $("<span>");
      root12831.append(nodes9385);
      subs__.addSub((ui.button)(tmp18578, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp18579, function(_, callback) {
        var root12833 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root12833); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9385;
        nodes9385 = node.contents();
        oldNodes.replaceWith(nodes9385);
      }));
      callback(root12831); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9383;
      nodes9383 = node.contents();
      oldNodes.replaceWith(nodes9383);
    }));
    var nodes9386 = $("<span>");
    root12830.append(nodes9386);
    subs__.addSub((ui.markableList)(items, function(_, callback) {
      var root12834 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root12834); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9386;
      nodes9386 = node.contents();
      oldNodes.replaceWith(nodes9386);
    }));
    callback(root12830); return subs__;
    
    
  }
  if(coll2213.length > 0) processOne459(); else rest459();
});

return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root12835 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp18581 = mobl.ref("Search term");


var tmp18583 = mobl.ref(null);


var tmp18582 = mobl.ref(null);

var nodes9387 = $("<span>");
root12835.append(nodes9387);
subs__.addSub((ui.searchBox)(phrase, tmp18581, tmp18582, tmp18583, function(_, callback) {
  var root12836 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root12836); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9387;
  nodes9387 = node.contents();
  oldNodes.replaceWith(nodes9387);
}));

var tmp18584 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp18584.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp18584.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp18584.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp18584.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp18584.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes9388 = $("<span>");
root12835.append(nodes9388);
subs__.addSub((ui.masterDetail)(tmp18584, masterItem, detailItem, function(_, callback) {
  var root12837 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root12837); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes9388;
  nodes9388 = node.contents();
  oldNodes.replaceWith(nodes9388);
}));
callback(root12835); return subs__;


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
var root12838 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp18594 = mobl.ref(null);


var tmp18593 = mobl.ref(null);

var nodes9389 = $("<span>");
root12838.append(nodes9389);
subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp18593, tmp18594, function(_, callback) {
  var root12839 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4820 = mobl.loadingSpan();
  root12839.append(node4820);
  var list895;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList895 = function() {
    var subs__ = listSubs__;
    list895 = sections.get();
    list895.list(function(results931) {
      node4820.empty();
      for(var i900 = 0; i900 < results931.length; i900++) {
        (function() {
          var iternode895 = $("<span>");
          node4820.append(iternode895);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results931), i900), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results931), i900), "_2");
          
          var tmp18588 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp18588.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp18588.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp18588.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp18588.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp18587 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp18589 = mobl.ref(null);
          
          var nodes9390 = $("<span>");
          iternode895.append(nodes9390);
          subs__.addSub((ui.span)(tmp18588, tmp18589, tmp18587, function(_, callback) {
            var root12840 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp18586 = mobl.ref(null);
            
            
            var tmp18585 = mobl.ref(null);
            
            var nodes9391 = $("<span>");
            root12840.append(nodes9391);
            subs__.addSub((mobl.label)(sectionName, tmp18585, tmp18586, function(_, callback) {
              var root12841 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root12841); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9391;
              nodes9391 = node.contents();
              oldNodes.replaceWith(nodes9391);
            }));
            callback(root12840); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9390;
            nodes9390 = node.contents();
            oldNodes.replaceWith(nodes9390);
          }));
          
          var tmp18590 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp18590.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp18590.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
            tmp18590.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
            tmp18590.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          
          
          var tmp18592 = mobl.ref(null);
          
          
          var tmp18591 = mobl.ref(null);
          
          var nodes9392 = $("<span>");
          iternode895.append(nodes9392);
          subs__.addSub((ui.block)(tmp18590, tmp18591, tmp18592, function(_, callback) {
            var root12842 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes9393 = $("<span>");
            root12842.append(nodes9393);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl1899();
            }));
            
            function renderControl1899() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root12843 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root12843); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9393;
                nodes9393 = node.contents();
                oldNodes.replaceWith(nodes9393);
              }));
            }
            renderControl1899();
            callback(root12842); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9392;
            nodes9392 = node.contents();
            oldNodes.replaceWith(nodes9392);
          }));
          
          var oldNodes = iternode895;
          iternode895 = iternode895.contents();
          oldNodes.replaceWith(iternode895);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list895.addEventListener('change', function() { listSubs__.unsubscribe(); renderList895(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList895(true); }));
    });
  };
  renderList895();
  
  callback(root12839); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9389;
  nodes9389 = node.contents();
  oldNodes.replaceWith(nodes9389);
}));
callback(root12838); return subs__;

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
var root12844 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4821 = $("<table>");

var ref3916 = mobl.ref(ui.tableStyle);
if(ref3916.get() !== null) {
  node4821.attr('class', ref3916.get());
  subs__.addSub(ref3916.addEventListener('change', function(_, ref, val) {
    if(ref === ref3916) {
      node4821.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3916.rebind());

var nodes9394 = $("<span>");
node4821.append(nodes9394);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1900();
}));

function renderControl1900() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12845 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12845); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9394;
    nodes9394 = node.contents();
    oldNodes.replaceWith(nodes9394);
  }));
}
renderControl1900();
root12844.append(node4821);
callback(root12844); return subs__;


return subs__;
};

ui.row = function(elements, callback) {
var root12846 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4822 = $("<tr>");

var ref3917 = mobl.ref(ui.trStyle);
if(ref3917.get() !== null) {
  node4822.attr('class', ref3917.get());
  subs__.addSub(ref3917.addEventListener('change', function(_, ref, val) {
    if(ref === ref3917) {
      node4822.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3917.rebind());

var nodes9395 = $("<span>");
node4822.append(nodes9395);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1901();
}));

function renderControl1901() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12847 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12847); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9395;
    nodes9395 = node.contents();
    oldNodes.replaceWith(nodes9395);
  }));
}
renderControl1901();
root12846.append(node4822);
callback(root12846); return subs__;


return subs__;
};

ui.cell = function(width, elements, callback) {
var root12848 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4823 = $("<td>");

var ref3918 = width;
if(ref3918.get() !== null) {
  node4823.attr('width', ref3918.get());
  subs__.addSub(ref3918.addEventListener('change', function(_, ref, val) {
    if(ref === ref3918) {
      node4823.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3918.rebind());

var ref3919 = mobl.ref(ui.tdStyle);
if(ref3919.get() !== null) {
  node4823.attr('class', ref3919.get());
  subs__.addSub(ref3919.addEventListener('change', function(_, ref, val) {
    if(ref === ref3919) {
      node4823.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3919.rebind());

var nodes9396 = $("<span>");
node4823.append(nodes9396);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1902();
}));

function renderControl1902() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12849 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12849); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9396;
    nodes9396 = node.contents();
    oldNodes.replaceWith(nodes9396);
  }));
}
renderControl1902();
root12848.append(node4823);
callback(root12848); return subs__;


return subs__;
};

ui.col = function(width, elements, callback) {
var root12850 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4824 = $("<td>");

var ref3920 = width;
if(ref3920.get() !== null) {
  node4824.attr('width', ref3920.get());
  subs__.addSub(ref3920.addEventListener('change', function(_, ref, val) {
    if(ref === ref3920) {
      node4824.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3920.rebind());

var ref3921 = mobl.ref(ui.tdStyle);
if(ref3921.get() !== null) {
  node4824.attr('class', ref3921.get());
  subs__.addSub(ref3921.addEventListener('change', function(_, ref, val) {
    if(ref === ref3921) {
      node4824.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3921.rebind());

var nodes9397 = $("<span>");
node4824.append(nodes9397);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1903();
}));

function renderControl1903() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12851 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12851); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9397;
    nodes9397 = node.contents();
    oldNodes.replaceWith(nodes9397);
  }));
}
renderControl1903();
root12850.append(node4824);
callback(root12850); return subs__;


return subs__;
};

ui.headerCol = function(width, elements, callback) {
var root12852 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4825 = $("<td>");

var ref3922 = width;
if(ref3922.get() !== null) {
  node4825.attr('width', ref3922.get());
  subs__.addSub(ref3922.addEventListener('change', function(_, ref, val) {
    if(ref === ref3922) {
      node4825.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3922.rebind());

var ref3923 = mobl.ref(ui.tdStyle);
if(ref3923.get() !== null) {
  node4825.attr('class', ref3923.get());
  subs__.addSub(ref3923.addEventListener('change', function(_, ref, val) {
    if(ref === ref3923) {
      node4825.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3923.rebind());


var node4826 = $("<strong>");

var nodes9398 = $("<span>");
node4826.append(nodes9398);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1904();
}));

function renderControl1904() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12853 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12853); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9398;
    nodes9398 = node.contents();
    oldNodes.replaceWith(nodes9398);
  }));
}
renderControl1904();
node4825.append(node4826);
root12852.append(node4825);
callback(root12852); return subs__;



return subs__;
};

ui.scroller = function(height, elements, callback) {
var root12854 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node4827 = $("<div>");
node4827.attr('class', "scroller");

var nodes9399 = $("<span>");
node4827.append(nodes9399);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1905();
}));

function renderControl1905() {
  subs__.addSub((elements)(function(elements, callback) {
    var root12855 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root12855); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9399;
    nodes9399 = node.contents();
    oldNodes.replaceWith(nodes9399);
  }));
}
renderControl1905();
root12854.append(node4827);
var result__ = ui.setupScrollers();
callback(root12854); return subs__;


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
ui.customTabSet = function(tabs, elements, callback) {
var root12856 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp18601 = mobl.ref(null);


var tmp18600 = mobl.ref(null);

var nodes9400 = $("<span>");
root12856.append(nodes9400);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp18600, tmp18601, function(_, callback) {
  var root12857 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4828 = mobl.loadingSpan();
  root12857.append(node4828);
  var list896;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList896 = function() {
    var subs__ = listSubs__;
    list896 = tabs.get();
    list896.list(function(results932) {
      node4828.empty();
      for(var i901 = 0; i901 < results932.length; i901++) {
        (function() {
          var iternode896 = $("<span>");
          node4828.append(iternode896);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results932), i901), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results932), i901), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results932), i901), "_3");
          
          var tmp18598 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp18598.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp18598.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp18598.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp18598.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp18597 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp18599 = mobl.ref(null);
          
          var nodes9401 = $("<span>");
          iternode896.append(nodes9401);
          subs__.addSub((ui.span)(tmp18598, tmp18599, tmp18597, function(_, callback) {
            var root12858 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp18596 = mobl.ref(null);
            
            
            var tmp18595 = mobl.ref(null);
            
            var nodes9402 = $("<span>");
            root12858.append(nodes9402);
            subs__.addSub((mobl.label)(tabName, tmp18595, tmp18596, function(_, callback) {
              var root12859 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root12859); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9402;
              nodes9402 = node.contents();
              oldNodes.replaceWith(nodes9402);
            }));
            callback(root12858); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9401;
            nodes9401 = node.contents();
            oldNodes.replaceWith(nodes9401);
          }));
          
          var oldNodes = iternode896;
          iternode896 = iternode896.contents();
          oldNodes.replaceWith(iternode896);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list896.addEventListener('change', function() { listSubs__.unsubscribe(); renderList896(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList896(true); }));
    });
  };
  renderList896();
  
  callback(root12857); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes9400;
  nodes9400 = node.contents();
  oldNodes.replaceWith(nodes9400);
}));

var node4829 = mobl.loadingSpan();
root12856.append(node4829);
var list897;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList897 = function() {
  var subs__ = listSubs__;
  list897 = tabs.get();
  list897.list(function(results933) {
    node4829.empty();
    for(var i902 = 0; i902 < results933.length; i902++) {
      (function() {
        var iternode897 = $("<span>");
        node4829.append(iternode897);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results933), i902), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results933), i902), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results933), i902), "_3");
        
        var tmp18602 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp18602.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp18602.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp18602.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp18602.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp18604 = mobl.ref(null);
        
        
        var tmp18603 = mobl.ref(null);
        
        var nodes9403 = $("<span>");
        iternode897.append(nodes9403);
        subs__.addSub((ui.block)(tmp18602, tmp18603, tmp18604, function(_, callback) {
          var root12860 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes9404 = $("<span>");
          root12860.append(nodes9404);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root12861 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes9405 = $("<span>");
            root12861.append(nodes9405);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl1906();
            }));
            
            function renderControl1906() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root12862 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root12862); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9405;
                nodes9405 = node.contents();
                oldNodes.replaceWith(nodes9405);
              }));
            }
            renderControl1906();
            callback(root12861); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes9404;
            nodes9404 = node.contents();
            oldNodes.replaceWith(nodes9404);
          }));
          callback(root12860); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9403;
          nodes9403 = node.contents();
          oldNodes.replaceWith(nodes9403);
        }));
        
        var oldNodes = iternode897;
        iternode897 = iternode897.contents();
        oldNodes.replaceWith(iternode897);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list897.addEventListener('change', function() { listSubs__.unsubscribe(); renderList897(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList897(true); }));
  });
};
renderList897();

callback(root12856); return subs__;


return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
var root12863 = $("<span>");
var subs__ = new mobl.CompSubscription();

var slider = $("<div>");

root12863.append(slider);
var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                      if(event && event.stopPropagation) event.stopPropagation();
                                                                      var result__ = slider.slider("value");
                                                                      s.set(result__);
                                                                      var result__ = slider.slider("value");
                                                                      start.set(result__);
                                                                      if(callback && callback.apply) callback(); return;
                                                                    }}));
callback(root12863); return subs__;

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
