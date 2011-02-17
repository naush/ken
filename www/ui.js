mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
var root6073 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3000 = $("<span>");
root6073.append(node3000);
var condSubs455 = new mobl.CompSubscription();
subs__.addSub(condSubs455);
var oldValue455;
var renderCond455 = function() {
  var value789 = value.get();
  if(oldValue455 === value789) return;
  oldValue455 = value789;
  var subs__ = condSubs455;
  subs__.unsubscribe();
  node3000.empty();
  if(value789) {
    var nodes3981 = $("<span>");
    node3000.append(nodes3981);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl1500();
    }));
    
    function renderControl1500() {
      subs__.addSub((elements)(function(elements, callback) {
        var root6074 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6074); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3981;
        nodes3981 = node.contents();
        oldNodes.replaceWith(nodes3981);
      }));
    }
    renderControl1500();
    
    
  } else {
    
    var tmp5870 = mobl.ref(null);
    
    
    var tmp5869 = mobl.ref(null);
    
    var nodes3982 = $("<span>");
    node3000.append(nodes3982);
    subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp5869, tmp5870, function(_, callback) {
      var root6075 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root6075.append("Loading...");
      
      var tmp5863 = mobl.ref("middle");
      
      
      var tmp5862 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp5868 = mobl.ref(null);
      
      
      var tmp5867 = mobl.ref(null);
      
      
      var tmp5866 = mobl.ref(null);
      
      
      var tmp5865 = mobl.ref(null);
      
      
      var tmp5864 = mobl.ref(null);
      
      var nodes3983 = $("<span>");
      root6075.append(nodes3983);
      subs__.addSub((ui.image)(tmp5862, tmp5864, tmp5865, tmp5866, tmp5867, tmp5863, tmp5868, function(_, callback) {
        var root6076 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6076); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3983;
        nodes3983 = node.contents();
        oldNodes.replaceWith(nodes3983);
      }));
      callback(root6075); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3982;
      nodes3982 = node.contents();
      oldNodes.replaceWith(nodes3982);
    }));
    
    
  }
};
renderCond455();
subs__.addSub(value.addEventListener('change', function() {
  renderCond455();
}));

callback(root6073); return subs__;

return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
var root6077 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3001 = $("<div>");

var ref3268 = mobl.ref(ui.headerStyle);
if(ref3268.get() !== null) {
  node3001.attr('class', ref3268.get());
  subs__.addSub(ref3268.addEventListener('change', function(_, ref, val) {
    if(ref === ref3268) {
      node3001.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3268.rebind());

var val1696 = onclick.get();
if(val1696 !== null) {
  subs__.addSub(mobl.domBind(node3001, 'tap', val1696));
}


var node3002 = $("<div>");

var ref3267 = mobl.ref(ui.headerContainerStyle);
if(ref3267.get() !== null) {
  node3002.attr('class', ref3267.get());
  subs__.addSub(ref3267.addEventListener('change', function(_, ref, val) {
    if(ref === ref3267) {
      node3002.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3267.rebind());


var node3003 = $("<div>");

var ref3265 = text;
node3003.text(""+ref3265.get());
var ignore678 = false;
subs__.addSub(ref3265.addEventListener('change', function(_, ref, val) {
  if(ignore678) return;
  node3003.text(""+val);
}));
subs__.addSub(ref3265.rebind());


var ref3266 = mobl.ref(ui.headerTextStyle);
if(ref3266.get() !== null) {
  node3003.attr('class', ref3266.get());
  subs__.addSub(ref3266.addEventListener('change', function(_, ref, val) {
    if(ref === ref3266) {
      node3003.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3266.rebind());

node3002.append(node3003);
node3001.append(node3002);
var nodes3984 = $("<span>");
node3001.append(nodes3984);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1501();
}));

function renderControl1501() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6078 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6078); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3984;
    nodes3984 = node.contents();
    oldNodes.replaceWith(nodes3984);
  }));
}
renderControl1501();
root6077.append(node3001);
callback(root6077); return subs__;




return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root6079 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref3269 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref3269.get() !== null) {
  sp.attr('class', ref3269.get());
  subs__.addSub(ref3269.addEventListener('change', function(_, ref, val) {
    if(ref === ref3269) {
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
subs__.addSub(ref3269.rebind());

var val1697 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val1697 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val1697));
}

var val1698 = function(event, callback) {
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
if(val1698 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val1698));
}

var val1699 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after195(result__) {
                  var tmp5934 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after195);if(result__ !== undefined) after195(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val1699 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val1699));
}

var val1700 = function(event, callback) {
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
if(val1700 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val1700));
}

var ref3270 = text;
sp.text(""+ref3270.get());
var ignore679 = false;
subs__.addSub(ref3270.addEventListener('change', function(_, ref, val) {
  if(ignore679) return;
  sp.text(""+val);
}));
subs__.addSub(ref3270.rebind());


root6079.append(sp);
callback(root6079); return subs__;

return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root6080 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3985 = $("<span>");
root6080.append(nodes3985);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root6081 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6081); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3985;
  nodes3985 = node.contents();
  oldNodes.replaceWith(nodes3985);
}));
callback(root6080); return subs__;

return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root6082 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3986 = $("<span>");
root6082.append(nodes3986);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root6083 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6083); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3986;
  nodes3986 = node.contents();
  oldNodes.replaceWith(nodes3986);
}));
callback(root6082); return subs__;

return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
var root6084 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3004 = $("<div>");

var ref3271 = id;
if(ref3271.get() !== null) {
  node3004.attr('id', ref3271.get());
  subs__.addSub(ref3271.addEventListener('change', function(_, ref, val) {
    if(ref === ref3271) {
      node3004.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3271.rebind());

var ref3272 = cssClass;
if(ref3272.get() !== null) {
  node3004.attr('class', ref3272.get());
  subs__.addSub(ref3272.addEventListener('change', function(_, ref, val) {
    if(ref === ref3272) {
      node3004.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3272.rebind());

var val1701 = onclick.get();
if(val1701 !== null) {
  subs__.addSub(mobl.domBind(node3004, 'tap', val1701));
}

var nodes3987 = $("<span>");
node3004.append(nodes3987);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1502();
}));

function renderControl1502() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6085 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6085); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3987;
    nodes3987 = node.contents();
    oldNodes.replaceWith(nodes3987);
  }));
}
renderControl1502();
root6084.append(node3004);
callback(root6084); return subs__;


return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
var root6086 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3005 = $("<span>");

var ref3273 = id;
if(ref3273.get() !== null) {
  node3005.attr('id', ref3273.get());
  subs__.addSub(ref3273.addEventListener('change', function(_, ref, val) {
    if(ref === ref3273) {
      node3005.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3273.rebind());

var ref3274 = cssClass;
if(ref3274.get() !== null) {
  node3005.attr('class', ref3274.get());
  subs__.addSub(ref3274.addEventListener('change', function(_, ref, val) {
    if(ref === ref3274) {
      node3005.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3274.rebind());

var val1702 = onclick.get();
if(val1702 !== null) {
  subs__.addSub(mobl.domBind(node3005, 'tap', val1702));
}

var nodes3988 = $("<span>");
node3005.append(nodes3988);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1503();
}));

function renderControl1503() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6087 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6087); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3988;
    nodes3988 = node.contents();
    oldNodes.replaceWith(nodes3988);
  }));
}
renderControl1503();
root6086.append(node3005);
callback(root6086); return subs__;


return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
var root6088 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3006 = $("<ul>");

var ref3275 = mobl.ref(ui.groupStyle);
if(ref3275.get() !== null) {
  node3006.attr('class', ref3275.get());
  subs__.addSub(ref3275.addEventListener('change', function(_, ref, val) {
    if(ref === ref3275) {
      node3006.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3275.rebind());

var nodes3989 = $("<span>");
node3006.append(nodes3989);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1504();
}));

function renderControl1504() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6089 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6089); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3989;
    nodes3989 = node.contents();
    oldNodes.replaceWith(nodes3989);
  }));
}
renderControl1504();
root6088.append(node3006);
callback(root6088); return subs__;


return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root6090 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3007 = $("<img>");

var ref3276 = url;
if(ref3276.get() !== null) {
  node3007.attr('src', ref3276.get());
  subs__.addSub(ref3276.addEventListener('change', function(_, ref, val) {
    if(ref === ref3276) {
      node3007.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3276.rebind());

var ref3277 = width;
if(ref3277.get() !== null) {
  node3007.attr('width', ref3277.get());
  subs__.addSub(ref3277.addEventListener('change', function(_, ref, val) {
    if(ref === ref3277) {
      node3007.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3277.rebind());

var ref3278 = height;
if(ref3278.get() !== null) {
  node3007.attr('height', ref3278.get());
  subs__.addSub(ref3278.addEventListener('change', function(_, ref, val) {
    if(ref === ref3278) {
      node3007.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3278.rebind());

var ref3279 = style;
if(ref3279.get() !== null) {
  node3007.attr('class', ref3279.get());
  subs__.addSub(ref3279.addEventListener('change', function(_, ref, val) {
    if(ref === ref3279) {
      node3007.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3279.rebind());

var val1703 = onclick.get();
if(val1703 !== null) {
  subs__.addSub(mobl.domBind(node3007, 'tap', val1703));
}

var ref3280 = valign;
if(ref3280.get() !== null) {
  node3007.attr('valign', ref3280.get());
  subs__.addSub(ref3280.addEventListener('change', function(_, ref, val) {
    if(ref === ref3280) {
      node3007.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3280.rebind());

var ref3281 = align;
if(ref3281.get() !== null) {
  node3007.attr('align', ref3281.get());
  subs__.addSub(ref3281.addEventListener('change', function(_, ref, val) {
    if(ref === ref3281) {
      node3007.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3281.rebind());

root6090.append(node3007);
callback(root6090); return subs__;

return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root6091 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref3282 = mobl.ref(ui.itemStyle);
if(ref3282.get() !== null) {
  el.attr('class', ref3282.get());
  subs__.addSub(ref3282.addEventListener('change', function(_, ref, val) {
    if(ref === ref3282) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3282.rebind());

var ref3283 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref3283.get() !== null) {
  el.attr('class', ref3283.get());
  subs__.addSub(ref3283.addEventListener('change', function(_, ref, val) {
    if(ref === ref3283) {
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
subs__.addSub(ref3283.rebind());

var val1704 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp5935 = result__;
                                         function after196(result__) {
                                           var tmp5936 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after196);if(result__ !== undefined) after196(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp5937 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val1704 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val1704));
}

var nodes3990 = $("<span>");
el.append(nodes3990);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1505();
}));

function renderControl1505() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6092 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6092); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3990;
    nodes3990 = node.contents();
    oldNodes.replaceWith(nodes3990);
  }));
}
renderControl1505();
root6091.append(el);
callback(root6091); return subs__;


return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
var root6093 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3008 = $("<input>");
node3008.attr('type', "checkbox");

var ref3285 = b;
node3008.attr('checked', !!ref3285.get());
subs__.addSub(ref3285.addEventListener('change', function(_, ref, val) {
  if(ref === ref3285) node3008.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node3008, 'change', function() {
  b.set(!!node3008.attr('checked'));
}));

var val1706 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val1706 !== null) {
  subs__.addSub(mobl.domBind(node3008, 'tap', val1706));
}

var val1707 = onchange.get();
if(val1707 !== null) {
  subs__.addSub(mobl.domBind(node3008, 'change', val1707));
}

root6093.append(node3008);

root6093.append(" ");

var node3009 = $("<span>");

var ref3284 = label;
node3009.text(""+ref3284.get());
var ignore680 = false;
subs__.addSub(ref3284.addEventListener('change', function(_, ref, val) {
  if(ignore680) return;
  node3009.text(""+val);
}));
subs__.addSub(ref3284.rebind());


var val1705 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after197(result__) {
                  var tmp5938 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after197);if(result__ !== undefined) after197(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val1705 !== null) {
  subs__.addSub(mobl.domBind(node3009, 'tap', val1705));
}

root6093.append(node3009);
callback(root6093); return subs__;


return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root6094 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3010 = $("<span>");
root6094.append(node3010);
var condSubs456 = new mobl.CompSubscription();
subs__.addSub(condSubs456);
var oldValue456;
var renderCond456 = function() {
  var value790 = label.get();
  if(oldValue456 === value790) return;
  oldValue456 = value790;
  var subs__ = condSubs456;
  subs__.unsubscribe();
  node3010.empty();
  if(value790) {
    
    var node3011 = $("<span>");
    node3011.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref3289 = label;
    node3011.text(""+ref3289.get());
    var ignore682 = false;
    subs__.addSub(ref3289.addEventListener('change', function(_, ref, val) {
      if(ignore682) return;
      node3011.text(""+val);
    }));
    subs__.addSub(ref3289.rebind());
    
    
    node3010.append(node3011);
    
    var node3012 = $("<span>");
    node3012.attr('style', "float: left");
    
    
    var node3013 = $("<input>");
    node3013.attr('type', "text");
    
    var ref3286 = mobl.ref(ui.textFieldStyle);
    if(ref3286.get() !== null) {
      node3013.attr('class', ref3286.get());
      subs__.addSub(ref3286.addEventListener('change', function(_, ref, val) {
        if(ref === ref3286) {
          node3013.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3286.rebind());
    
    var ref3287 = placeholder;
    if(ref3287.get() !== null) {
      node3013.attr('placeholder', ref3287.get());
      subs__.addSub(ref3287.addEventListener('change', function(_, ref, val) {
        if(ref === ref3287) {
          node3013.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3287.rebind());
    
    var ref3288 = s;
    node3013.val(""+ref3288.get());
    var ignore681 = false;
    subs__.addSub(ref3288.addEventListener('change', function(_, ref, val) {
      if(ignore681) return;
      node3013.val(""+val);
    }));
    subs__.addSub(ref3288.rebind());
    
    subs__.addSub(mobl.domBind(node3013, 'keyup change', function() {
      ignore681 = true;
      s.set(mobl.stringTomobl__String(node3013.val()));
      ignore681 = false;
    }));
    
    
    var val1708 = onchange.get();
    if(val1708 !== null) {
      subs__.addSub(mobl.domBind(node3013, 'change', val1708));
    }
    
    var val1709 = onkeyup.get();
    if(val1709 !== null) {
      subs__.addSub(mobl.domBind(node3013, 'keyup', val1709));
    }
    
    var val1710 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1710 !== null) {
      subs__.addSub(mobl.domBind(node3013, 'blur', val1710));
    }
    
    node3012.append(node3013);
    node3010.append(node3012);
    
    
    
    
  } else {
    
    var node3014 = $("<input>");
    node3014.attr('type', "text");
    
    var ref3290 = mobl.ref(ui.textFieldStyle);
    if(ref3290.get() !== null) {
      node3014.attr('class', ref3290.get());
      subs__.addSub(ref3290.addEventListener('change', function(_, ref, val) {
        if(ref === ref3290) {
          node3014.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3290.rebind());
    
    var ref3291 = placeholder;
    if(ref3291.get() !== null) {
      node3014.attr('placeholder', ref3291.get());
      subs__.addSub(ref3291.addEventListener('change', function(_, ref, val) {
        if(ref === ref3291) {
          node3014.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3291.rebind());
    
    var ref3292 = s;
    node3014.val(""+ref3292.get());
    var ignore683 = false;
    subs__.addSub(ref3292.addEventListener('change', function(_, ref, val) {
      if(ignore683) return;
      node3014.val(""+val);
    }));
    subs__.addSub(ref3292.rebind());
    
    subs__.addSub(mobl.domBind(node3014, 'keyup change', function() {
      ignore683 = true;
      s.set(mobl.stringTomobl__String(node3014.val()));
      ignore683 = false;
    }));
    
    
    var val1711 = onchange.get();
    if(val1711 !== null) {
      subs__.addSub(mobl.domBind(node3014, 'change', val1711));
    }
    
    var val1712 = onkeyup.get();
    if(val1712 !== null) {
      subs__.addSub(mobl.domBind(node3014, 'keyup', val1712));
    }
    
    var val1713 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1713 !== null) {
      subs__.addSub(mobl.domBind(node3014, 'blur', val1713));
    }
    
    node3010.append(node3014);
    
    
  }
};
renderCond456();
subs__.addSub(label.addEventListener('change', function() {
  renderCond456();
}));

callback(root6094); return subs__;

return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
var root6095 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3015 = $("<span>");
root6095.append(node3015);
var condSubs457 = new mobl.CompSubscription();
subs__.addSub(condSubs457);
var oldValue457;
var renderCond457 = function() {
  var value791 = label.get();
  if(oldValue457 === value791) return;
  oldValue457 = value791;
  var subs__ = condSubs457;
  subs__.unsubscribe();
  node3015.empty();
  if(value791) {
    
    var node3016 = $("<span>");
    node3016.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref3296 = label;
    node3016.text(""+ref3296.get());
    var ignore685 = false;
    subs__.addSub(ref3296.addEventListener('change', function(_, ref, val) {
      if(ignore685) return;
      node3016.text(""+val);
    }));
    subs__.addSub(ref3296.rebind());
    
    
    node3015.append(node3016);
    
    var node3017 = $("<span>");
    node3017.attr('style', "float: left");
    
    
    var node3018 = $("<input>");
    node3018.attr('type', "text");
    
    var ref3293 = mobl.ref(ui.textFieldStyle);
    if(ref3293.get() !== null) {
      node3018.attr('class', ref3293.get());
      subs__.addSub(ref3293.addEventListener('change', function(_, ref, val) {
        if(ref === ref3293) {
          node3018.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3293.rebind());
    
    var ref3294 = placeholder;
    if(ref3294.get() !== null) {
      node3018.attr('placeholder', ref3294.get());
      subs__.addSub(ref3294.addEventListener('change', function(_, ref, val) {
        if(ref === ref3294) {
          node3018.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3294.rebind());
    
    var ref3295 = n;
    node3018.val(""+ref3295.get());
    var ignore684 = false;
    subs__.addSub(ref3295.addEventListener('change', function(_, ref, val) {
      if(ignore684) return;
      node3018.val(""+val);
    }));
    subs__.addSub(ref3295.rebind());
    
    subs__.addSub(mobl.domBind(node3018, 'keyup change', function() {
      ignore684 = true;
      n.set(mobl.stringTomobl__Num(node3018.val()));
      ignore684 = false;
    }));
    
    
    var val1714 = onchange.get();
    if(val1714 !== null) {
      subs__.addSub(mobl.domBind(node3018, 'change', val1714));
    }
    
    var val1715 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1715 !== null) {
      subs__.addSub(mobl.domBind(node3018, 'blur', val1715));
    }
    
    node3017.append(node3018);
    node3015.append(node3017);
    
    
    
    
  } else {
    
    var node3019 = $("<input>");
    node3019.attr('type', "text");
    
    var ref3297 = mobl.ref(ui.textFieldStyle);
    if(ref3297.get() !== null) {
      node3019.attr('class', ref3297.get());
      subs__.addSub(ref3297.addEventListener('change', function(_, ref, val) {
        if(ref === ref3297) {
          node3019.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3297.rebind());
    
    var ref3298 = placeholder;
    if(ref3298.get() !== null) {
      node3019.attr('placeholder', ref3298.get());
      subs__.addSub(ref3298.addEventListener('change', function(_, ref, val) {
        if(ref === ref3298) {
          node3019.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref3298.rebind());
    
    var ref3299 = n;
    node3019.val(""+ref3299.get());
    var ignore686 = false;
    subs__.addSub(ref3299.addEventListener('change', function(_, ref, val) {
      if(ignore686) return;
      node3019.val(""+val);
    }));
    subs__.addSub(ref3299.rebind());
    
    subs__.addSub(mobl.domBind(node3019, 'keyup change', function() {
      ignore686 = true;
      n.set(mobl.stringTomobl__Num(node3019.val()));
      ignore686 = false;
    }));
    
    
    var val1716 = onchange.get();
    if(val1716 !== null) {
      subs__.addSub(mobl.domBind(node3019, 'change', val1716));
    }
    
    var val1717 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val1717 !== null) {
      subs__.addSub(mobl.domBind(node3019, 'blur', val1717));
    }
    
    node3015.append(node3019);
    
    
  }
};
renderCond457();
subs__.addSub(label.addEventListener('change', function() {
  renderCond457();
}));

callback(root6095); return subs__;

return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
var root6096 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp5877 = mobl.ref(null);


var tmp5876 = mobl.ref(null);

var nodes3991 = $("<span>");
root6096.append(nodes3991);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp5876, tmp5877, function(_, callback) {
  var root6097 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3020 = mobl.loadingSpan();
  root6097.append(node3020);
  var list520;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList520 = function() {
    var subs__ = listSubs__;
    list520 = tabs.get();
    list520.list(function(results520) {
      node3020.empty();
      for(var i520 = 0; i520 < results520.length; i520++) {
        (function() {
          var iternode520 = $("<span>");
          node3020.append(iternode520);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results520), i520), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results520), i520), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results520), i520), "_3");
          
          var tmp5874 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp5874.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp5874.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp5874.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp5874.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp5873 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp5875 = mobl.ref(null);
          
          var nodes3992 = $("<span>");
          iternode520.append(nodes3992);
          subs__.addSub((ui.span)(tmp5874, tmp5875, tmp5873, function(_, callback) {
            var root6098 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp5872 = mobl.ref(null);
            
            
            var tmp5871 = mobl.ref(null);
            
            var nodes3993 = $("<span>");
            root6098.append(nodes3993);
            subs__.addSub((mobl.label)(tabName, tmp5871, tmp5872, function(_, callback) {
              var root6099 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6099); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3993;
              nodes3993 = node.contents();
              oldNodes.replaceWith(nodes3993);
            }));
            callback(root6098); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3992;
            nodes3992 = node.contents();
            oldNodes.replaceWith(nodes3992);
          }));
          
          var oldNodes = iternode520;
          iternode520 = iternode520.contents();
          oldNodes.replaceWith(iternode520);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list520.addEventListener('change', function() { listSubs__.unsubscribe(); renderList520(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList520(true); }));
    });
  };
  renderList520();
  
  callback(root6097); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3991;
  nodes3991 = node.contents();
  oldNodes.replaceWith(nodes3991);
}));

var node3021 = mobl.loadingSpan();
root6096.append(node3021);
var list521;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList521 = function() {
  var subs__ = listSubs__;
  list521 = tabs.get();
  list521.list(function(results521) {
    node3021.empty();
    for(var i521 = 0; i521 < results521.length; i521++) {
      (function() {
        var iternode521 = $("<span>");
        node3021.append(iternode521);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results521), i521), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results521), i521), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results521), i521), "_3");
        
        var tmp5878 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp5878.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp5878.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp5878.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp5878.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp5880 = mobl.ref(null);
        
        
        var tmp5879 = mobl.ref(null);
        
        var nodes3994 = $("<span>");
        iternode521.append(nodes3994);
        subs__.addSub((ui.block)(tmp5878, tmp5879, tmp5880, function(_, callback) {
          var root6100 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes3995 = $("<span>");
          root6100.append(nodes3995);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root6101 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes3996 = $("<span>");
            root6101.append(nodes3996);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl1506();
            }));
            
            function renderControl1506() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root6102 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6102); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3996;
                nodes3996 = node.contents();
                oldNodes.replaceWith(nodes3996);
              }));
            }
            renderControl1506();
            callback(root6101); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3995;
            nodes3995 = node.contents();
            oldNodes.replaceWith(nodes3995);
          }));
          callback(root6100); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3994;
          nodes3994 = node.contents();
          oldNodes.replaceWith(nodes3994);
        }));
        
        var oldNodes = iternode521;
        iternode521 = iternode521.contents();
        oldNodes.replaceWith(iternode521);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list521.addEventListener('change', function() { listSubs__.unsubscribe(); renderList521(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList521(true); }));
  });
};
renderList521();

callback(root6096); return subs__;


return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root6103 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3022 = $("<div>");

var ref3303 = mobl.ref(ui.searchboxStyle);
if(ref3303.get() !== null) {
  node3022.attr('class', ref3303.get());
  subs__.addSub(ref3303.addEventListener('change', function(_, ref, val) {
    if(ref === ref3303) {
      node3022.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3303.rebind());


var node3023 = $("<input>");
node3023.attr('type', "text");

var ref3300 = mobl.ref(ui.searchBoxInputStyle);
if(ref3300.get() !== null) {
  node3023.attr('class', ref3300.get());
  subs__.addSub(ref3300.addEventListener('change', function(_, ref, val) {
    if(ref === ref3300) {
      node3023.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3300.rebind());

var ref3301 = placeholder;
if(ref3301.get() !== null) {
  node3023.attr('placeholder', ref3301.get());
  subs__.addSub(ref3301.addEventListener('change', function(_, ref, val) {
    if(ref === ref3301) {
      node3023.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3301.rebind());

var ref3302 = s;
node3023.val(""+ref3302.get());
var ignore687 = false;
subs__.addSub(ref3302.addEventListener('change', function(_, ref, val) {
  if(ignore687) return;
  node3023.val(""+val);
}));
subs__.addSub(ref3302.rebind());

subs__.addSub(mobl.domBind(node3023, 'keyup change', function() {
  ignore687 = true;
  s.set(mobl.stringTomobl__String(node3023.val()));
  ignore687 = false;
}));


var val1718 = onsearch.get();
if(val1718 !== null) {
  subs__.addSub(mobl.domBind(node3023, 'change', val1718));
}

var val1719 = onkeyup.get();
if(val1719 !== null) {
  subs__.addSub(mobl.domBind(node3023, 'keyup', val1719));
}
node3023.attr('autocorrect', "off");
node3023.attr('autocapitalize', "off");
node3023.attr('autocomplete', "off");

node3022.append(node3023);
root6103.append(node3022);
callback(root6103); return subs__;


return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
var root6104 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref3304 = mobl.ref(ui.contextMenuStyle);
if(ref3304.get() !== null) {
  menu.attr('class', ref3304.get());
  subs__.addSub(ref3304.addEventListener('change', function(_, ref, val) {
    if(ref === ref3304) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3304.rebind());

var nodes3997 = $("<span>");
menu.append(nodes3997);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1507();
}));

function renderControl1507() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6105 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6105); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3997;
    nodes3997 = node.contents();
    oldNodes.replaceWith(nodes3997);
  }));
}
renderControl1507();
root6104.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val1720 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp5941 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val1720 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val1720));
}

root6104.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root6104); return subs__;



return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
var root6106 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp5933 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp5933.set(mobl.window.get().innerWidth > 500);
}));


var node3024 = $("<span>");
root6106.append(node3024);
var condSubs458 = new mobl.CompSubscription();
subs__.addSub(condSubs458);
var oldValue458;
var renderCond458 = function() {
  var value792 = tmp5933.get();
  if(oldValue458 === value792) return;
  oldValue458 = value792;
  var subs__ = condSubs458;
  subs__.unsubscribe();
  node3024.empty();
  if(value792) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node3025 = $("<div>");
      node3025.attr('width', "100%");
      
      
      var node3026 = $("<div>");
      node3026.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes3999 = $("<span>");
      node3026.append(nodes3999);
      subs__.addSub((ui.group)(function(_, callback) {
        var root6108 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3028 = mobl.loadingSpan();
        root6108.append(node3028);
        var list522;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList522 = function() {
          var subs__ = listSubs__;
          list522 = items.get();
          list522.list(function(results522) {
            node3028.empty();
            for(var i522 = 0; i522 < results522.length; i522++) {
              (function() {
                var iternode522 = $("<span>");
                node3028.append(iternode522);
                var it;
                it = mobl.ref(mobl.ref(results522), i522);
                
                var tmp5894 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp5894.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp5894.set(it.get() == current.get());
                }));
                
                
                var node3029 = $("<span>");
                iternode522.append(node3029);
                var condSubs459 = new mobl.CompSubscription();
                subs__.addSub(condSubs459);
                var oldValue459;
                var renderCond459 = function() {
                  var value793 = tmp5894.get();
                  if(oldValue459 === value793) return;
                  oldValue459 = value793;
                  var subs__ = condSubs459;
                  subs__.unsubscribe();
                  node3029.empty();
                  if(value793) {
                    
                    var tmp5890 = mobl.ref(false);
                    
                    
                    var tmp5889 = mobl.ref(null);
                    
                    
                    var tmp5888 = mobl.ref(null);
                    
                    var nodes4000 = $("<span>");
                    node3029.append(nodes4000);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp5888, tmp5889, tmp5890, function(_, callback) {
                      var root6109 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes4001 = $("<span>");
                      root6109.append(nodes4001);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1509();
                      }));
                      
                      function renderControl1509() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root6110 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6110); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4001;
                          nodes4001 = node.contents();
                          oldNodes.replaceWith(nodes4001);
                        }));
                      }
                      renderControl1509();
                      callback(root6109); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4000;
                      nodes4000 = node.contents();
                      oldNodes.replaceWith(nodes4000);
                    }));
                    
                    
                  } else {
                    
                    var tmp5892 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp5891 = mobl.ref(true);
                    
                    
                    var tmp5893 = mobl.ref(null);
                    
                    var nodes4002 = $("<span>");
                    node3029.append(nodes4002);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5892, tmp5893, tmp5891, function(_, callback) {
                      var root6111 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes4003 = $("<span>");
                      root6111.append(nodes4003);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1510();
                      }));
                      
                      function renderControl1510() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root6112 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6112); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4003;
                          nodes4003 = node.contents();
                          oldNodes.replaceWith(nodes4003);
                        }));
                      }
                      renderControl1510();
                      callback(root6111); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4002;
                      nodes4002 = node.contents();
                      oldNodes.replaceWith(nodes4002);
                    }));
                    
                    
                  }
                };
                renderCond459();
                subs__.addSub(tmp5894.addEventListener('change', function() {
                  renderCond459();
                }));
                
                
                var oldNodes = iternode522;
                iternode522 = iternode522.contents();
                oldNodes.replaceWith(iternode522);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list522.addEventListener('change', function() { listSubs__.unsubscribe(); renderList522(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList522(true); }));
          });
        };
        renderList522();
        
        callback(root6108); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3999;
        nodes3999 = node.contents();
        oldNodes.replaceWith(nodes3999);
      }));
      node3025.append(node3026);
      
      var node3027 = $("<div>");
      node3027.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes3998 = $("<span>");
      node3027.append(nodes3998);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl1508();
      }));
      
      function renderControl1508() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root6107 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6107); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3998;
          nodes3998 = node.contents();
          oldNodes.replaceWith(nodes3998);
        }));
      }
      renderControl1508();
      node3025.append(node3027);
      node3024.append(node3025);
      
      
      
      
      
      
    });
  } else {
    var nodes4004 = $("<span>");
    node3024.append(nodes4004);
    subs__.addSub((ui.group)(function(_, callback) {
      var root6113 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3030 = mobl.loadingSpan();
      root6113.append(node3030);
      var list523;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList523 = function() {
        var subs__ = listSubs__;
        list523 = items.get();
        list523.list(function(results523) {
          node3030.empty();
          for(var i523 = 0; i523 < results523.length; i523++) {
            (function() {
              var iternode523 = $("<span>");
              node3030.append(iternode523);
              var it;
              it = mobl.ref(mobl.ref(results523), i523);
              
              var tmp5881 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                   var tmp5942 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp5883 = mobl.ref(false);
              
              
              var tmp5882 = mobl.ref(null);
              
              var nodes4005 = $("<span>");
              iternode523.append(nodes4005);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5881, tmp5882, tmp5883, function(_, callback) {
                var root6114 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4006 = $("<span>");
                root6114.append(nodes4006);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl1511();
                }));
                
                function renderControl1511() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root6115 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6115); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4006;
                    nodes4006 = node.contents();
                    oldNodes.replaceWith(nodes4006);
                  }));
                }
                renderControl1511();
                callback(root6114); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4005;
                nodes4005 = node.contents();
                oldNodes.replaceWith(nodes4005);
              }));
              
              var oldNodes = iternode523;
              iternode523 = iternode523.contents();
              oldNodes.replaceWith(iternode523);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list523.addEventListener('change', function() { listSubs__.unsubscribe(); renderList523(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList523(true); }));
        });
      };
      renderList523();
      
      callback(root6113); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4004;
      nodes4004 = node.contents();
      oldNodes.replaceWith(nodes4004);
    }));
    
    
  }
};
renderCond458();
subs__.addSub(tmp5933.addEventListener('change', function() {
  renderCond458();
}));

callback(root6106); return subs__;

return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
var root6116 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp5886 = mobl.ref("Detail");


var tmp5887 = mobl.ref(null);

var nodes4007 = $("<span>");
root6116.append(nodes4007);
subs__.addSub((ui.header)(tmp5886, tmp5887, function(_, callback) {
  var root6117 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5885 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp5884 = mobl.ref("Back");
  
  var nodes4008 = $("<span>");
  root6117.append(nodes4008);
  subs__.addSub((ui.backButton)(tmp5884, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5885, function(_, callback) {
    var root6118 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6118); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4008;
    nodes4008 = node.contents();
    oldNodes.replaceWith(nodes4008);
  }));
  callback(root6117); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4007;
  nodes4007 = node.contents();
  oldNodes.replaceWith(nodes4007);
}));
var nodes4009 = $("<span>");
root6116.append(nodes4009);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl1512();
}));

function renderControl1512() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root6119 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6119); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4009;
    nodes4009 = node.contents();
    oldNodes.replaceWith(nodes4009);
  }));
}
renderControl1512();
callback(root6116); return subs__;


return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root6120 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes4010 = $("<span>");
root6120.append(nodes4010);
subs__.addSub((ui.group)(function(_, callback) {
  var root6121 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3031 = mobl.loadingSpan();
  root6121.append(node3031);
  var list524;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList524 = function() {
    var subs__ = listSubs__;
    list524 = coll.get();
    list524.list(function(results524) {
      node3031.empty();
      for(var i524 = 0; i524 < results524.length; i524++) {
        (function() {
          var iternode524 = $("<span>");
          node3031.append(iternode524);
          var it;
          it = mobl.ref(mobl.ref(results524), i524);
          
          var tmp5901 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp5901.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp5901.set(it.get() == selected.get());
          }));
          
          
          var node3032 = $("<span>");
          iternode524.append(node3032);
          var condSubs460 = new mobl.CompSubscription();
          subs__.addSub(condSubs460);
          var oldValue460;
          var renderCond460 = function() {
            var value794 = tmp5901.get();
            if(oldValue460 === value794) return;
            oldValue460 = value794;
            var subs__ = condSubs460;
            subs__.unsubscribe();
            node3032.empty();
            if(value794) {
              
              var tmp5897 = mobl.ref(false);
              
              
              var tmp5896 = mobl.ref(null);
              
              
              var tmp5895 = mobl.ref(null);
              
              var nodes4011 = $("<span>");
              node3032.append(nodes4011);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5895, tmp5896, tmp5897, function(_, callback) {
                var root6122 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4012 = $("<span>");
                root6122.append(nodes4012);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl1513();
                }));
                
                function renderControl1513() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root6123 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6123); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4012;
                    nodes4012 = node.contents();
                    oldNodes.replaceWith(nodes4012);
                  }));
                }
                renderControl1513();
                callback(root6122); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4011;
                nodes4011 = node.contents();
                oldNodes.replaceWith(nodes4011);
              }));
              
              
            } else {
              
              var tmp5899 = mobl.ref(true);
              
              
              var tmp5898 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp5900 = mobl.ref(null);
              
              var nodes4013 = $("<span>");
              node3032.append(nodes4013);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5898, tmp5900, tmp5899, function(_, callback) {
                var root6124 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4014 = $("<span>");
                root6124.append(nodes4014);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl1514();
                }));
                
                function renderControl1514() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root6125 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6125); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4014;
                    nodes4014 = node.contents();
                    oldNodes.replaceWith(nodes4014);
                  }));
                }
                renderControl1514();
                callback(root6124); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4013;
                nodes4013 = node.contents();
                oldNodes.replaceWith(nodes4013);
              }));
              
              
            }
          };
          renderCond460();
          subs__.addSub(tmp5901.addEventListener('change', function() {
            renderCond460();
          }));
          
          
          var oldNodes = iternode524;
          iternode524 = iternode524.contents();
          oldNodes.replaceWith(iternode524);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list524.addEventListener('change', function() { listSubs__.unsubscribe(); renderList524(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList524(true); }));
    });
  };
  renderList524();
  
  callback(root6121); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4010;
  nodes4010 = node.contents();
  oldNodes.replaceWith(nodes4010);
}));
callback(root6120); return subs__;

return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root6126 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes4015 = $("<span>");
  root6126.append(nodes4015);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6127 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5905 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp5905.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp5905.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp5905.set(coll.get().limit(n.get()));
    }));
    
    
    var node3033 = mobl.loadingSpan();
    root6127.append(node3033);
    var list525;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList525 = function() {
      var subs__ = listSubs__;
      list525 = tmp5905.get();
      list525.list(function(results525) {
        node3033.empty();
        for(var i525 = 0; i525 < results525.length; i525++) {
          (function() {
            var iternode525 = $("<span>");
            node3033.append(iternode525);
            var it;
            it = mobl.ref(mobl.ref(results525), i525);
            
            var tmp5902 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp5904 = mobl.ref(false);
            
            
            var tmp5903 = mobl.ref(null);
            
            var nodes4016 = $("<span>");
            iternode525.append(nodes4016);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5902, tmp5903, tmp5904, function(_, callback) {
              var root6128 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4017 = $("<span>");
              root6128.append(nodes4017);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl1515();
              }));
              
              function renderControl1515() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root6129 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root6129); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4017;
                  nodes4017 = node.contents();
                  oldNodes.replaceWith(nodes4017);
                }));
              }
              renderControl1515();
              callback(root6128); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4016;
              nodes4016 = node.contents();
              oldNodes.replaceWith(nodes4016);
            }));
            
            var oldNodes = iternode525;
            iternode525 = iternode525.contents();
            oldNodes.replaceWith(iternode525);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list525.addEventListener('change', function() { listSubs__.unsubscribe(); renderList525(true); }));
        subs__.addSub(tmp5905.addEventListener('change', function() { listSubs__.unsubscribe(); renderList525(true); }));
      });
    };
    renderList525();
    
    
    var tmp5906 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp5906.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp5906.set(n.get() < total.get());
    }));
    
    
    var node3034 = $("<span>");
    root6127.append(node3034);
    var condSubs461 = new mobl.CompSubscription();
    subs__.addSub(condSubs461);
    var oldValue461;
    var renderCond461 = function() {
      var value795 = tmp5906.get();
      if(oldValue461 === value795) return;
      oldValue461 = value795;
      var subs__ = condSubs461;
      subs__.unsubscribe();
      node3034.empty();
      if(value795) {
        
        var node3035 = $("<li>");
        
        var ref3305 = mobl.ref(ui.loadMoreStyle);
        if(ref3305.get() !== null) {
          node3035.attr('class', ref3305.get());
          subs__.addSub(ref3305.addEventListener('change', function(_, ref, val) {
            if(ref === ref3305) {
              node3035.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref3305.rebind());
        
        var val1721 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1721 !== null) {
          subs__.addSub(mobl.domBind(node3035, 'tap', val1721));
        }
        
        
        node3035.append("More");
        node3034.append(node3035);
        
        
      } else {
        
      }
    };
    renderCond461();
    subs__.addSub(tmp5906.addEventListener('change', function() {
      renderCond461();
    }));
    
    callback(root6127); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4015;
    nodes4015 = node.contents();
    oldNodes.replaceWith(nodes4015);
  }));
  callback(root6126); return subs__;
  
});
return subs__;
};

ui.markableList = function(items, elements, callback) {
var root6130 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes4018 = $("<span>");
root6130.append(nodes4018);
subs__.addSub((ui.group)(function(_, callback) {
  var root6131 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3036 = mobl.loadingSpan();
  root6131.append(node3036);
  var list526;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList526 = function() {
    var subs__ = listSubs__;
    list526 = items.get();
    list526.list(function(results526) {
      node3036.empty();
      for(var i526 = 0; i526 < results526.length; i526++) {
        (function() {
          var iternode526 = $("<span>");
          node3036.append(iternode526);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results526), i526), "_1");it = mobl.ref(mobl.ref(mobl.ref(results526), i526), "_2");
          
          var tmp5910 = mobl.ref(false);
          
          
          var tmp5909 = mobl.ref(null);
          
          
          var tmp5908 = mobl.ref(null);
          
          var nodes4019 = $("<span>");
          iternode526.append(nodes4019);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5908, tmp5909, tmp5910, function(_, callback) {
            var root6132 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp5907 = mobl.ref(null);
            
            var nodes4020 = $("<span>");
            root6132.append(nodes4020);
            subs__.addSub((ui.checkBox)(checked, it, tmp5907, function(_, callback) {
              var root6133 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6133); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4020;
              nodes4020 = node.contents();
              oldNodes.replaceWith(nodes4020);
            }));
            callback(root6132); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4019;
            nodes4019 = node.contents();
            oldNodes.replaceWith(nodes4019);
          }));
          
          var oldNodes = iternode526;
          iternode526 = iternode526.contents();
          oldNodes.replaceWith(iternode526);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list526.addEventListener('change', function() { listSubs__.unsubscribe(); renderList526(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList526(true); }));
    });
  };
  renderList526();
  
  callback(root6131); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4018;
  nodes4018 = node.contents();
  oldNodes.replaceWith(nodes4018);
}));
callback(root6130); return subs__;

return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
var root6134 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll1121) {
  coll1121 = coll1121.reverse();
  function processOne131() {
    var it;
    it = coll1121.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll1121.length > 0) processOne131(); else rest131();
    
  }
  function rest131() {
    
    var tmp5915 = mobl.ref(null);
    
    var nodes4021 = $("<span>");
    root6134.append(nodes4021);
    subs__.addSub((ui.header)(title, tmp5915, function(_, callback) {
      var root6135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp5911 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp5912 = mobl.ref("Back");
      
      var nodes4022 = $("<span>");
      root6135.append(nodes4022);
      subs__.addSub((ui.backButton)(tmp5912, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5911, function(_, callback) {
        var root6136 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6136); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4022;
        nodes4022 = node.contents();
        oldNodes.replaceWith(nodes4022);
      }));
      
      var tmp5914 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll1120) {
                             coll1120 = coll1120.reverse();
                             function processOne130() {
                               var checked;var it;
                               var tmp5944 = coll1120.pop();
                               checked = tmp5944._1;it = tmp5944._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll1120.length > 0) processOne130(); else rest130();
                                 
                               } else {
                                 {
                                   
                                   if(coll1120.length > 0) processOne130(); else rest130();
                                   
                                 }
                               }
                             }
                             function rest130() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll1120.length > 0) processOne130(); else rest130();
                           });
                           
                         });
      
      
      var tmp5913 = mobl.ref("Done");
      
      var nodes4023 = $("<span>");
      root6135.append(nodes4023);
      subs__.addSub((ui.button)(tmp5913, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp5914, function(_, callback) {
        var root6137 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6137); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4023;
        nodes4023 = node.contents();
        oldNodes.replaceWith(nodes4023);
      }));
      callback(root6135); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4021;
      nodes4021 = node.contents();
      oldNodes.replaceWith(nodes4021);
    }));
    var nodes4024 = $("<span>");
    root6134.append(nodes4024);
    subs__.addSub((ui.markableList)(items, function(_, callback) {
      var root6138 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6138); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4024;
      nodes4024 = node.contents();
      oldNodes.replaceWith(nodes4024);
    }));
    callback(root6134); return subs__;
    
    
  }
  if(coll1121.length > 0) processOne131(); else rest131();
});

return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root6139 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp5916 = mobl.ref("Search term");


var tmp5918 = mobl.ref(null);


var tmp5917 = mobl.ref(null);

var nodes4025 = $("<span>");
root6139.append(nodes4025);
subs__.addSub((ui.searchBox)(phrase, tmp5916, tmp5917, tmp5918, function(_, callback) {
  var root6140 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6140); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4025;
  nodes4025 = node.contents();
  oldNodes.replaceWith(nodes4025);
}));

var tmp5919 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp5919.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp5919.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp5919.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp5919.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp5919.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes4026 = $("<span>");
root6139.append(nodes4026);
subs__.addSub((ui.masterDetail)(tmp5919, masterItem, detailItem, function(_, callback) {
  var root6141 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6141); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4026;
  nodes4026 = node.contents();
  oldNodes.replaceWith(nodes4026);
}));
callback(root6139); return subs__;


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
var root6142 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp5929 = mobl.ref(null);


var tmp5928 = mobl.ref(null);

var nodes4027 = $("<span>");
root6142.append(nodes4027);
subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp5928, tmp5929, function(_, callback) {
  var root6143 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3037 = mobl.loadingSpan();
  root6143.append(node3037);
  var list527;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList527 = function() {
    var subs__ = listSubs__;
    list527 = sections.get();
    list527.list(function(results527) {
      node3037.empty();
      for(var i527 = 0; i527 < results527.length; i527++) {
        (function() {
          var iternode527 = $("<span>");
          node3037.append(iternode527);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results527), i527), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results527), i527), "_2");
          
          var tmp5923 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp5923.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp5923.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp5923.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp5923.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp5922 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp5924 = mobl.ref(null);
          
          var nodes4028 = $("<span>");
          iternode527.append(nodes4028);
          subs__.addSub((ui.span)(tmp5923, tmp5924, tmp5922, function(_, callback) {
            var root6144 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp5921 = mobl.ref(null);
            
            
            var tmp5920 = mobl.ref(null);
            
            var nodes4029 = $("<span>");
            root6144.append(nodes4029);
            subs__.addSub((mobl.label)(sectionName, tmp5920, tmp5921, function(_, callback) {
              var root6145 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6145); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4029;
              nodes4029 = node.contents();
              oldNodes.replaceWith(nodes4029);
            }));
            callback(root6144); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4028;
            nodes4028 = node.contents();
            oldNodes.replaceWith(nodes4028);
          }));
          
          var tmp5925 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp5925.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp5925.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
            tmp5925.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
            tmp5925.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          
          
          var tmp5927 = mobl.ref(null);
          
          
          var tmp5926 = mobl.ref(null);
          
          var nodes4030 = $("<span>");
          iternode527.append(nodes4030);
          subs__.addSub((ui.block)(tmp5925, tmp5926, tmp5927, function(_, callback) {
            var root6146 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes4031 = $("<span>");
            root6146.append(nodes4031);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl1516();
            }));
            
            function renderControl1516() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root6147 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6147); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4031;
                nodes4031 = node.contents();
                oldNodes.replaceWith(nodes4031);
              }));
            }
            renderControl1516();
            callback(root6146); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4030;
            nodes4030 = node.contents();
            oldNodes.replaceWith(nodes4030);
          }));
          
          var oldNodes = iternode527;
          iternode527 = iternode527.contents();
          oldNodes.replaceWith(iternode527);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list527.addEventListener('change', function() { listSubs__.unsubscribe(); renderList527(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList527(true); }));
    });
  };
  renderList527();
  
  callback(root6143); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4027;
  nodes4027 = node.contents();
  oldNodes.replaceWith(nodes4027);
}));
callback(root6142); return subs__;

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
var root6148 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3038 = $("<table>");

var ref3306 = mobl.ref(ui.tableStyle);
if(ref3306.get() !== null) {
  node3038.attr('class', ref3306.get());
  subs__.addSub(ref3306.addEventListener('change', function(_, ref, val) {
    if(ref === ref3306) {
      node3038.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3306.rebind());

var nodes4032 = $("<span>");
node3038.append(nodes4032);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1517();
}));

function renderControl1517() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6149 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6149); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4032;
    nodes4032 = node.contents();
    oldNodes.replaceWith(nodes4032);
  }));
}
renderControl1517();
root6148.append(node3038);
callback(root6148); return subs__;


return subs__;
};

ui.row = function(elements, callback) {
var root6150 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3039 = $("<tr>");

var ref3307 = mobl.ref(ui.trStyle);
if(ref3307.get() !== null) {
  node3039.attr('class', ref3307.get());
  subs__.addSub(ref3307.addEventListener('change', function(_, ref, val) {
    if(ref === ref3307) {
      node3039.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3307.rebind());

var nodes4033 = $("<span>");
node3039.append(nodes4033);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1518();
}));

function renderControl1518() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6151 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6151); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4033;
    nodes4033 = node.contents();
    oldNodes.replaceWith(nodes4033);
  }));
}
renderControl1518();
root6150.append(node3039);
callback(root6150); return subs__;


return subs__;
};

ui.cell = function(width, elements, callback) {
var root6152 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3040 = $("<td>");

var ref3308 = width;
if(ref3308.get() !== null) {
  node3040.attr('width', ref3308.get());
  subs__.addSub(ref3308.addEventListener('change', function(_, ref, val) {
    if(ref === ref3308) {
      node3040.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3308.rebind());

var ref3309 = mobl.ref(ui.tdStyle);
if(ref3309.get() !== null) {
  node3040.attr('class', ref3309.get());
  subs__.addSub(ref3309.addEventListener('change', function(_, ref, val) {
    if(ref === ref3309) {
      node3040.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3309.rebind());

var nodes4034 = $("<span>");
node3040.append(nodes4034);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1519();
}));

function renderControl1519() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6153 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6153); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4034;
    nodes4034 = node.contents();
    oldNodes.replaceWith(nodes4034);
  }));
}
renderControl1519();
root6152.append(node3040);
callback(root6152); return subs__;


return subs__;
};

ui.col = function(width, elements, callback) {
var root6154 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3041 = $("<td>");

var ref3310 = width;
if(ref3310.get() !== null) {
  node3041.attr('width', ref3310.get());
  subs__.addSub(ref3310.addEventListener('change', function(_, ref, val) {
    if(ref === ref3310) {
      node3041.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3310.rebind());

var ref3311 = mobl.ref(ui.tdStyle);
if(ref3311.get() !== null) {
  node3041.attr('class', ref3311.get());
  subs__.addSub(ref3311.addEventListener('change', function(_, ref, val) {
    if(ref === ref3311) {
      node3041.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3311.rebind());

var nodes4035 = $("<span>");
node3041.append(nodes4035);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1520();
}));

function renderControl1520() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6155 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6155); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4035;
    nodes4035 = node.contents();
    oldNodes.replaceWith(nodes4035);
  }));
}
renderControl1520();
root6154.append(node3041);
callback(root6154); return subs__;


return subs__;
};

ui.headerCol = function(width, elements, callback) {
var root6156 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3042 = $("<td>");

var ref3312 = width;
if(ref3312.get() !== null) {
  node3042.attr('width', ref3312.get());
  subs__.addSub(ref3312.addEventListener('change', function(_, ref, val) {
    if(ref === ref3312) {
      node3042.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3312.rebind());

var ref3313 = mobl.ref(ui.tdStyle);
if(ref3313.get() !== null) {
  node3042.attr('class', ref3313.get());
  subs__.addSub(ref3313.addEventListener('change', function(_, ref, val) {
    if(ref === ref3313) {
      node3042.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref3313.rebind());


var node3043 = $("<strong>");

var nodes4036 = $("<span>");
node3043.append(nodes4036);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1521();
}));

function renderControl1521() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6157 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6157); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4036;
    nodes4036 = node.contents();
    oldNodes.replaceWith(nodes4036);
  }));
}
renderControl1521();
node3042.append(node3043);
root6156.append(node3042);
callback(root6156); return subs__;



return subs__;
};

ui.scroller = function(height, elements, callback) {
var root6158 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node3044 = $("<div>");
node3044.attr('class', "scroller");

var nodes4037 = $("<span>");
node3044.append(nodes4037);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl1522();
}));

function renderControl1522() {
  subs__.addSub((elements)(function(elements, callback) {
    var root6159 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6159); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4037;
    nodes4037 = node.contents();
    oldNodes.replaceWith(nodes4037);
  }));
}
renderControl1522();
root6158.append(node3044);
var result__ = ui.setupScrollers();
callback(root6158); return subs__;


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
var root6160 = $("<span>");
var subs__ = new mobl.CompSubscription();

var slider = $("<div>");

root6160.append(slider);

var tmp5930 = mobl.ref(start.get() + "%");
subs__.addSub(start.addEventListener('change', function() {
  tmp5930.set(start.get() + "%");
}));


var tmp5932 = mobl.ref(null);


var tmp5931 = mobl.ref(null);

var nodes4038 = $("<span>");
root6160.append(nodes4038);
subs__.addSub((mobl.label)(tmp5930, tmp5931, tmp5932, function(_, callback) {
  var root6161 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root6161); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4038;
  nodes4038 = node.contents();
  oldNodes.replaceWith(nodes4038);
}));
var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'databind': s.get(), 'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                      if(event && event.stopPropagation) event.stopPropagation();
                                                                      var result__ = slider.slider("value");
                                                                      s.set(result__);
                                                                      var result__ = slider.slider("value");
                                                                      start.set(result__);
                                                                      if(callback && callback.apply) callback(); return;
                                                                    }}));
callback(root6160); return subs__;


return subs__;
};
ui.title = 'ui__title';
ui.emphasis = 'ui__emphasis';
ui.ranger = 'ui__ranger';
