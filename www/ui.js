mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
var root3892 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node516 = $("<span>");
root3892.append(node516);
var condSubs77 = new mobl.CompSubscription();
subs__.addSub(condSubs77);
var oldValue77;
var renderCond77 = function() {
  var value190 = value.get();
  if(oldValue77 === value190) return;
  oldValue77 = value190;
  var subs__ = condSubs77;
  subs__.unsubscribe();
  node516.empty();
  if(value190) {
    var nodes3308 = $("<span>");
    node516.append(nodes3308);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl254();
    }));
    
    function renderControl254() {
      subs__.addSub((elements)(function(elements, callback) {
        var root3893 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3893); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3308;
        nodes3308 = node.contents();
        oldNodes.replaceWith(nodes3308);
      }));
    }
    renderControl254();
    
    
  } else {
    
    var tmp8827 = mobl.ref(null);
    
    
    var tmp8826 = mobl.ref(null);
    
    var nodes3309 = $("<span>");
    node516.append(nodes3309);
    subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp8826, tmp8827, function(_, callback) {
      var root3894 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root3894.append("Loading...");
      
      var tmp8820 = mobl.ref("middle");
      
      
      var tmp8819 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp8825 = mobl.ref(null);
      
      
      var tmp8824 = mobl.ref(null);
      
      
      var tmp8823 = mobl.ref(null);
      
      
      var tmp8822 = mobl.ref(null);
      
      
      var tmp8821 = mobl.ref(null);
      
      var nodes3310 = $("<span>");
      root3894.append(nodes3310);
      subs__.addSub((ui.image)(tmp8819, tmp8821, tmp8822, tmp8823, tmp8824, tmp8820, tmp8825, function(_, callback) {
        var root3895 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3895); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3310;
        nodes3310 = node.contents();
        oldNodes.replaceWith(nodes3310);
      }));
      callback(root3894); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3309;
      nodes3309 = node.contents();
      oldNodes.replaceWith(nodes3309);
    }));
    
    
  }
};
renderCond77();
subs__.addSub(value.addEventListener('change', function() {
  renderCond77();
}));

callback(root3892); return subs__;

return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
var root3896 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node517 = $("<div>");

var ref542 = mobl.ref(ui.headerStyle);
if(ref542.get() !== null) {
  node517.attr('class', ref542.get());
  subs__.addSub(ref542.addEventListener('change', function(_, ref, val) {
    if(ref === ref542) {
      node517.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref542.rebind());

var val286 = onclick.get();
if(val286 !== null) {
  subs__.addSub(mobl.domBind(node517, 'tap', val286));
}


var node518 = $("<div>");

var ref541 = mobl.ref(ui.headerContainerStyle);
if(ref541.get() !== null) {
  node518.attr('class', ref541.get());
  subs__.addSub(ref541.addEventListener('change', function(_, ref, val) {
    if(ref === ref541) {
      node518.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref541.rebind());


var node519 = $("<div>");

var ref539 = text;
node519.text(""+ref539.get());
var ignore110 = false;
subs__.addSub(ref539.addEventListener('change', function(_, ref, val) {
  if(ignore110) return;
  node519.text(""+val);
}));
subs__.addSub(ref539.rebind());


var ref540 = mobl.ref(ui.headerTextStyle);
if(ref540.get() !== null) {
  node519.attr('class', ref540.get());
  subs__.addSub(ref540.addEventListener('change', function(_, ref, val) {
    if(ref === ref540) {
      node519.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref540.rebind());

node518.append(node519);
node517.append(node518);
var nodes3311 = $("<span>");
node517.append(nodes3311);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl255();
}));

function renderControl255() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3897 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3897); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3311;
    nodes3311 = node.contents();
    oldNodes.replaceWith(nodes3311);
  }));
}
renderControl255();
root3896.append(node517);
callback(root3896); return subs__;




return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root3898 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref543 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref543.get() !== null) {
  sp.attr('class', ref543.get());
  subs__.addSub(ref543.addEventListener('change', function(_, ref, val) {
    if(ref === ref543) {
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
subs__.addSub(ref543.rebind());

var val287 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val287 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val287));
}

var val288 = function(event, callback) {
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
if(val288 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val288));
}

var val289 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after33(result__) {
                  var tmp8888 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after33);if(result__ !== undefined) after33(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val289 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val289));
}

var val290 = function(event, callback) {
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
if(val290 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val290));
}

var ref544 = text;
sp.text(""+ref544.get());
var ignore111 = false;
subs__.addSub(ref544.addEventListener('change', function(_, ref, val) {
  if(ignore111) return;
  sp.text(""+val);
}));
subs__.addSub(ref544.rebind());


root3898.append(sp);
callback(root3898); return subs__;

return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root3899 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3312 = $("<span>");
root3899.append(nodes3312);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root3900 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root3900); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3312;
  nodes3312 = node.contents();
  oldNodes.replaceWith(nodes3312);
}));
callback(root3899); return subs__;

return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root3901 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3313 = $("<span>");
root3901.append(nodes3313);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root3902 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root3902); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3313;
  nodes3313 = node.contents();
  oldNodes.replaceWith(nodes3313);
}));
callback(root3901); return subs__;

return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
var root3903 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node520 = $("<div>");

var ref545 = id;
if(ref545.get() !== null) {
  node520.attr('id', ref545.get());
  subs__.addSub(ref545.addEventListener('change', function(_, ref, val) {
    if(ref === ref545) {
      node520.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref545.rebind());

var ref546 = cssClass;
if(ref546.get() !== null) {
  node520.attr('class', ref546.get());
  subs__.addSub(ref546.addEventListener('change', function(_, ref, val) {
    if(ref === ref546) {
      node520.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref546.rebind());

var val291 = onclick.get();
if(val291 !== null) {
  subs__.addSub(mobl.domBind(node520, 'tap', val291));
}

var nodes3314 = $("<span>");
node520.append(nodes3314);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl256();
}));

function renderControl256() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3904 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3904); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3314;
    nodes3314 = node.contents();
    oldNodes.replaceWith(nodes3314);
  }));
}
renderControl256();
root3903.append(node520);
callback(root3903); return subs__;


return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
var root3905 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node521 = $("<span>");

var ref547 = id;
if(ref547.get() !== null) {
  node521.attr('id', ref547.get());
  subs__.addSub(ref547.addEventListener('change', function(_, ref, val) {
    if(ref === ref547) {
      node521.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref547.rebind());

var ref548 = cssClass;
if(ref548.get() !== null) {
  node521.attr('class', ref548.get());
  subs__.addSub(ref548.addEventListener('change', function(_, ref, val) {
    if(ref === ref548) {
      node521.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref548.rebind());

var val292 = onclick.get();
if(val292 !== null) {
  subs__.addSub(mobl.domBind(node521, 'tap', val292));
}

var nodes3315 = $("<span>");
node521.append(nodes3315);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl257();
}));

function renderControl257() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3906 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3906); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3315;
    nodes3315 = node.contents();
    oldNodes.replaceWith(nodes3315);
  }));
}
renderControl257();
root3905.append(node521);
callback(root3905); return subs__;


return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
var root3907 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node522 = $("<ul>");

var ref549 = mobl.ref(ui.groupStyle);
if(ref549.get() !== null) {
  node522.attr('class', ref549.get());
  subs__.addSub(ref549.addEventListener('change', function(_, ref, val) {
    if(ref === ref549) {
      node522.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref549.rebind());

var nodes3316 = $("<span>");
node522.append(nodes3316);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl258();
}));

function renderControl258() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3908 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3908); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3316;
    nodes3316 = node.contents();
    oldNodes.replaceWith(nodes3316);
  }));
}
renderControl258();
root3907.append(node522);
callback(root3907); return subs__;


return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root3909 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node523 = $("<img>");

var ref550 = url;
if(ref550.get() !== null) {
  node523.attr('src', ref550.get());
  subs__.addSub(ref550.addEventListener('change', function(_, ref, val) {
    if(ref === ref550) {
      node523.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref550.rebind());

var ref551 = width;
if(ref551.get() !== null) {
  node523.attr('width', ref551.get());
  subs__.addSub(ref551.addEventListener('change', function(_, ref, val) {
    if(ref === ref551) {
      node523.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref551.rebind());

var ref552 = height;
if(ref552.get() !== null) {
  node523.attr('height', ref552.get());
  subs__.addSub(ref552.addEventListener('change', function(_, ref, val) {
    if(ref === ref552) {
      node523.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref552.rebind());

var ref553 = style;
if(ref553.get() !== null) {
  node523.attr('class', ref553.get());
  subs__.addSub(ref553.addEventListener('change', function(_, ref, val) {
    if(ref === ref553) {
      node523.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref553.rebind());

var val293 = onclick.get();
if(val293 !== null) {
  subs__.addSub(mobl.domBind(node523, 'tap', val293));
}

var ref554 = valign;
if(ref554.get() !== null) {
  node523.attr('valign', ref554.get());
  subs__.addSub(ref554.addEventListener('change', function(_, ref, val) {
    if(ref === ref554) {
      node523.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref554.rebind());

var ref555 = align;
if(ref555.get() !== null) {
  node523.attr('align', ref555.get());
  subs__.addSub(ref555.addEventListener('change', function(_, ref, val) {
    if(ref === ref555) {
      node523.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref555.rebind());

root3909.append(node523);
callback(root3909); return subs__;

return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root3910 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref556 = mobl.ref(ui.itemStyle);
if(ref556.get() !== null) {
  el.attr('class', ref556.get());
  subs__.addSub(ref556.addEventListener('change', function(_, ref, val) {
    if(ref === ref556) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref556.rebind());

var ref557 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref557.get() !== null) {
  el.attr('class', ref557.get());
  subs__.addSub(ref557.addEventListener('change', function(_, ref, val) {
    if(ref === ref557) {
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
subs__.addSub(ref557.rebind());

var val294 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp8889 = result__;
                                         function after34(result__) {
                                           var tmp8890 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after34);if(result__ !== undefined) after34(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp8891 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val294 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val294));
}

var nodes3317 = $("<span>");
el.append(nodes3317);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl259();
}));

function renderControl259() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3911 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3911); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3317;
    nodes3317 = node.contents();
    oldNodes.replaceWith(nodes3317);
  }));
}
renderControl259();
root3910.append(el);
callback(root3910); return subs__;


return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
var root3912 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node524 = $("<input>");
node524.attr('type', "checkbox");

var ref559 = b;
node524.attr('checked', !!ref559.get());
subs__.addSub(ref559.addEventListener('change', function(_, ref, val) {
  if(ref === ref559) node524.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node524, 'change', function() {
  b.set(!!node524.attr('checked'));
}));

var val296 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val296 !== null) {
  subs__.addSub(mobl.domBind(node524, 'tap', val296));
}

var val297 = onchange.get();
if(val297 !== null) {
  subs__.addSub(mobl.domBind(node524, 'change', val297));
}

root3912.append(node524);

root3912.append(" ");

var node525 = $("<span>");

var ref558 = label;
node525.text(""+ref558.get());
var ignore112 = false;
subs__.addSub(ref558.addEventListener('change', function(_, ref, val) {
  if(ignore112) return;
  node525.text(""+val);
}));
subs__.addSub(ref558.rebind());


var val295 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after35(result__) {
                  var tmp8892 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after35);if(result__ !== undefined) after35(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val295 !== null) {
  subs__.addSub(mobl.domBind(node525, 'tap', val295));
}

root3912.append(node525);
callback(root3912); return subs__;


return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root3913 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node526 = $("<span>");
root3913.append(node526);
var condSubs78 = new mobl.CompSubscription();
subs__.addSub(condSubs78);
var oldValue78;
var renderCond78 = function() {
  var value191 = label.get();
  if(oldValue78 === value191) return;
  oldValue78 = value191;
  var subs__ = condSubs78;
  subs__.unsubscribe();
  node526.empty();
  if(value191) {
    
    var node527 = $("<span>");
    node527.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref563 = label;
    node527.text(""+ref563.get());
    var ignore114 = false;
    subs__.addSub(ref563.addEventListener('change', function(_, ref, val) {
      if(ignore114) return;
      node527.text(""+val);
    }));
    subs__.addSub(ref563.rebind());
    
    
    node526.append(node527);
    
    var node528 = $("<span>");
    node528.attr('style', "float: left");
    
    
    var node529 = $("<input>");
    node529.attr('type', "text");
    
    var ref560 = mobl.ref(ui.textFieldStyle);
    if(ref560.get() !== null) {
      node529.attr('class', ref560.get());
      subs__.addSub(ref560.addEventListener('change', function(_, ref, val) {
        if(ref === ref560) {
          node529.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref560.rebind());
    
    var ref561 = placeholder;
    if(ref561.get() !== null) {
      node529.attr('placeholder', ref561.get());
      subs__.addSub(ref561.addEventListener('change', function(_, ref, val) {
        if(ref === ref561) {
          node529.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref561.rebind());
    
    var ref562 = s;
    node529.val(""+ref562.get());
    var ignore113 = false;
    subs__.addSub(ref562.addEventListener('change', function(_, ref, val) {
      if(ignore113) return;
      node529.val(""+val);
    }));
    subs__.addSub(ref562.rebind());
    
    subs__.addSub(mobl.domBind(node529, 'keyup change', function() {
      ignore113 = true;
      s.set(mobl.stringTomobl__String(node529.val()));
      ignore113 = false;
    }));
    
    
    var val298 = onchange.get();
    if(val298 !== null) {
      subs__.addSub(mobl.domBind(node529, 'change', val298));
    }
    
    var val299 = onkeyup.get();
    if(val299 !== null) {
      subs__.addSub(mobl.domBind(node529, 'keyup', val299));
    }
    
    var val300 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val300 !== null) {
      subs__.addSub(mobl.domBind(node529, 'blur', val300));
    }
    
    node528.append(node529);
    node526.append(node528);
    
    
    
    
  } else {
    
    var node530 = $("<input>");
    node530.attr('type', "text");
    
    var ref564 = mobl.ref(ui.textFieldStyle);
    if(ref564.get() !== null) {
      node530.attr('class', ref564.get());
      subs__.addSub(ref564.addEventListener('change', function(_, ref, val) {
        if(ref === ref564) {
          node530.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref564.rebind());
    
    var ref565 = placeholder;
    if(ref565.get() !== null) {
      node530.attr('placeholder', ref565.get());
      subs__.addSub(ref565.addEventListener('change', function(_, ref, val) {
        if(ref === ref565) {
          node530.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref565.rebind());
    
    var ref566 = s;
    node530.val(""+ref566.get());
    var ignore115 = false;
    subs__.addSub(ref566.addEventListener('change', function(_, ref, val) {
      if(ignore115) return;
      node530.val(""+val);
    }));
    subs__.addSub(ref566.rebind());
    
    subs__.addSub(mobl.domBind(node530, 'keyup change', function() {
      ignore115 = true;
      s.set(mobl.stringTomobl__String(node530.val()));
      ignore115 = false;
    }));
    
    
    var val301 = onchange.get();
    if(val301 !== null) {
      subs__.addSub(mobl.domBind(node530, 'change', val301));
    }
    
    var val302 = onkeyup.get();
    if(val302 !== null) {
      subs__.addSub(mobl.domBind(node530, 'keyup', val302));
    }
    
    var val303 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val303 !== null) {
      subs__.addSub(mobl.domBind(node530, 'blur', val303));
    }
    
    node526.append(node530);
    
    
  }
};
renderCond78();
subs__.addSub(label.addEventListener('change', function() {
  renderCond78();
}));

callback(root3913); return subs__;

return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
var root3914 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node531 = $("<span>");
root3914.append(node531);
var condSubs79 = new mobl.CompSubscription();
subs__.addSub(condSubs79);
var oldValue79;
var renderCond79 = function() {
  var value192 = label.get();
  if(oldValue79 === value192) return;
  oldValue79 = value192;
  var subs__ = condSubs79;
  subs__.unsubscribe();
  node531.empty();
  if(value192) {
    
    var node532 = $("<span>");
    node532.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref570 = label;
    node532.text(""+ref570.get());
    var ignore117 = false;
    subs__.addSub(ref570.addEventListener('change', function(_, ref, val) {
      if(ignore117) return;
      node532.text(""+val);
    }));
    subs__.addSub(ref570.rebind());
    
    
    node531.append(node532);
    
    var node533 = $("<span>");
    node533.attr('style', "float: left");
    
    
    var node534 = $("<input>");
    node534.attr('type', "text");
    
    var ref567 = mobl.ref(ui.textFieldStyle);
    if(ref567.get() !== null) {
      node534.attr('class', ref567.get());
      subs__.addSub(ref567.addEventListener('change', function(_, ref, val) {
        if(ref === ref567) {
          node534.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref567.rebind());
    
    var ref568 = placeholder;
    if(ref568.get() !== null) {
      node534.attr('placeholder', ref568.get());
      subs__.addSub(ref568.addEventListener('change', function(_, ref, val) {
        if(ref === ref568) {
          node534.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref568.rebind());
    
    var ref569 = n;
    node534.val(""+ref569.get());
    var ignore116 = false;
    subs__.addSub(ref569.addEventListener('change', function(_, ref, val) {
      if(ignore116) return;
      node534.val(""+val);
    }));
    subs__.addSub(ref569.rebind());
    
    subs__.addSub(mobl.domBind(node534, 'keyup change', function() {
      ignore116 = true;
      n.set(mobl.stringTomobl__Num(node534.val()));
      ignore116 = false;
    }));
    
    
    var val304 = onchange.get();
    if(val304 !== null) {
      subs__.addSub(mobl.domBind(node534, 'change', val304));
    }
    
    var val305 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val305 !== null) {
      subs__.addSub(mobl.domBind(node534, 'blur', val305));
    }
    
    node533.append(node534);
    node531.append(node533);
    
    
    
    
  } else {
    
    var node535 = $("<input>");
    node535.attr('type', "text");
    
    var ref571 = mobl.ref(ui.textFieldStyle);
    if(ref571.get() !== null) {
      node535.attr('class', ref571.get());
      subs__.addSub(ref571.addEventListener('change', function(_, ref, val) {
        if(ref === ref571) {
          node535.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref571.rebind());
    
    var ref572 = placeholder;
    if(ref572.get() !== null) {
      node535.attr('placeholder', ref572.get());
      subs__.addSub(ref572.addEventListener('change', function(_, ref, val) {
        if(ref === ref572) {
          node535.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref572.rebind());
    
    var ref573 = n;
    node535.val(""+ref573.get());
    var ignore118 = false;
    subs__.addSub(ref573.addEventListener('change', function(_, ref, val) {
      if(ignore118) return;
      node535.val(""+val);
    }));
    subs__.addSub(ref573.rebind());
    
    subs__.addSub(mobl.domBind(node535, 'keyup change', function() {
      ignore118 = true;
      n.set(mobl.stringTomobl__Num(node535.val()));
      ignore118 = false;
    }));
    
    
    var val306 = onchange.get();
    if(val306 !== null) {
      subs__.addSub(mobl.domBind(node535, 'change', val306));
    }
    
    var val307 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val307 !== null) {
      subs__.addSub(mobl.domBind(node535, 'blur', val307));
    }
    
    node531.append(node535);
    
    
  }
};
renderCond79();
subs__.addSub(label.addEventListener('change', function() {
  renderCond79();
}));

callback(root3914); return subs__;

return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
var root3915 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp8834 = mobl.ref(null);


var tmp8833 = mobl.ref(null);

var nodes3318 = $("<span>");
root3915.append(nodes3318);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp8833, tmp8834, function(_, callback) {
  var root3916 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node536 = mobl.loadingSpan();
  root3916.append(node536);
  var list102;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList102 = function() {
    var subs__ = listSubs__;
    list102 = tabs.get();
    list102.list(function(results138) {
      node536.empty();
      for(var i107 = 0; i107 < results138.length; i107++) {
        (function() {
          var iternode102 = $("<span>");
          node536.append(iternode102);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results138), i107), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results138), i107), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results138), i107), "_3");
          
          var tmp8831 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp8831.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp8831.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp8831.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp8831.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp8830 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp8832 = mobl.ref(null);
          
          var nodes3319 = $("<span>");
          iternode102.append(nodes3319);
          subs__.addSub((ui.span)(tmp8831, tmp8832, tmp8830, function(_, callback) {
            var root3917 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp8829 = mobl.ref(null);
            
            
            var tmp8828 = mobl.ref(null);
            
            var nodes3320 = $("<span>");
            root3917.append(nodes3320);
            subs__.addSub((mobl.label)(tabName, tmp8828, tmp8829, function(_, callback) {
              var root3918 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root3918); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3320;
              nodes3320 = node.contents();
              oldNodes.replaceWith(nodes3320);
            }));
            callback(root3917); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3319;
            nodes3319 = node.contents();
            oldNodes.replaceWith(nodes3319);
          }));
          
          var oldNodes = iternode102;
          iternode102 = iternode102.contents();
          oldNodes.replaceWith(iternode102);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list102.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
    });
  };
  renderList102();
  
  callback(root3916); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3318;
  nodes3318 = node.contents();
  oldNodes.replaceWith(nodes3318);
}));

var node537 = mobl.loadingSpan();
root3915.append(node537);
var list103;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList103 = function() {
  var subs__ = listSubs__;
  list103 = tabs.get();
  list103.list(function(results139) {
    node537.empty();
    for(var i108 = 0; i108 < results139.length; i108++) {
      (function() {
        var iternode103 = $("<span>");
        node537.append(iternode103);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results139), i108), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results139), i108), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results139), i108), "_3");
        
        var tmp8835 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp8835.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp8835.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp8835.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp8835.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp8837 = mobl.ref(null);
        
        
        var tmp8836 = mobl.ref(null);
        
        var nodes3321 = $("<span>");
        iternode103.append(nodes3321);
        subs__.addSub((ui.block)(tmp8835, tmp8836, tmp8837, function(_, callback) {
          var root3919 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes3322 = $("<span>");
          root3919.append(nodes3322);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root3920 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes3323 = $("<span>");
            root3920.append(nodes3323);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl260();
            }));
            
            function renderControl260() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root3921 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3921); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3323;
                nodes3323 = node.contents();
                oldNodes.replaceWith(nodes3323);
              }));
            }
            renderControl260();
            callback(root3920); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3322;
            nodes3322 = node.contents();
            oldNodes.replaceWith(nodes3322);
          }));
          callback(root3919); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3321;
          nodes3321 = node.contents();
          oldNodes.replaceWith(nodes3321);
        }));
        
        var oldNodes = iternode103;
        iternode103 = iternode103.contents();
        oldNodes.replaceWith(iternode103);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list103.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
  });
};
renderList103();

callback(root3915); return subs__;


return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root3922 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node538 = $("<div>");

var ref577 = mobl.ref(ui.searchboxStyle);
if(ref577.get() !== null) {
  node538.attr('class', ref577.get());
  subs__.addSub(ref577.addEventListener('change', function(_, ref, val) {
    if(ref === ref577) {
      node538.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref577.rebind());


var node539 = $("<input>");
node539.attr('type', "text");

var ref574 = mobl.ref(ui.searchBoxInputStyle);
if(ref574.get() !== null) {
  node539.attr('class', ref574.get());
  subs__.addSub(ref574.addEventListener('change', function(_, ref, val) {
    if(ref === ref574) {
      node539.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref574.rebind());

var ref575 = placeholder;
if(ref575.get() !== null) {
  node539.attr('placeholder', ref575.get());
  subs__.addSub(ref575.addEventListener('change', function(_, ref, val) {
    if(ref === ref575) {
      node539.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref575.rebind());

var ref576 = s;
node539.val(""+ref576.get());
var ignore119 = false;
subs__.addSub(ref576.addEventListener('change', function(_, ref, val) {
  if(ignore119) return;
  node539.val(""+val);
}));
subs__.addSub(ref576.rebind());

subs__.addSub(mobl.domBind(node539, 'keyup change', function() {
  ignore119 = true;
  s.set(mobl.stringTomobl__String(node539.val()));
  ignore119 = false;
}));


var val308 = onsearch.get();
if(val308 !== null) {
  subs__.addSub(mobl.domBind(node539, 'change', val308));
}

var val309 = onkeyup.get();
if(val309 !== null) {
  subs__.addSub(mobl.domBind(node539, 'keyup', val309));
}
node539.attr('autocorrect', "off");
node539.attr('autocapitalize', "off");
node539.attr('autocomplete', "off");

node538.append(node539);
root3922.append(node538);
callback(root3922); return subs__;


return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
var root3923 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref578 = mobl.ref(ui.contextMenuStyle);
if(ref578.get() !== null) {
  menu.attr('class', ref578.get());
  subs__.addSub(ref578.addEventListener('change', function(_, ref, val) {
    if(ref === ref578) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref578.rebind());

var nodes3324 = $("<span>");
menu.append(nodes3324);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl261();
}));

function renderControl261() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3924 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3924); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3324;
    nodes3324 = node.contents();
    oldNodes.replaceWith(nodes3324);
  }));
}
renderControl261();
root3923.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val310 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp8895 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val310 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val310));
}

root3923.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root3923); return subs__;



return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
var root3925 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp8887 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp8887.set(mobl.window.get().innerWidth > 500);
}));


var node540 = $("<span>");
root3925.append(node540);
var condSubs80 = new mobl.CompSubscription();
subs__.addSub(condSubs80);
var oldValue80;
var renderCond80 = function() {
  var value193 = tmp8887.get();
  if(oldValue80 === value193) return;
  oldValue80 = value193;
  var subs__ = condSubs80;
  subs__.unsubscribe();
  node540.empty();
  if(value193) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node541 = $("<div>");
      node541.attr('width', "100%");
      
      
      var node542 = $("<div>");
      node542.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes3326 = $("<span>");
      node542.append(nodes3326);
      subs__.addSub((ui.group)(function(_, callback) {
        var root3927 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node544 = mobl.loadingSpan();
        root3927.append(node544);
        var list104;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList104 = function() {
          var subs__ = listSubs__;
          list104 = items.get();
          list104.list(function(results140) {
            node544.empty();
            for(var i109 = 0; i109 < results140.length; i109++) {
              (function() {
                var iternode104 = $("<span>");
                node544.append(iternode104);
                var it;
                it = mobl.ref(mobl.ref(results140), i109);
                
                var tmp8851 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp8851.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp8851.set(it.get() == current.get());
                }));
                
                
                var node545 = $("<span>");
                iternode104.append(node545);
                var condSubs81 = new mobl.CompSubscription();
                subs__.addSub(condSubs81);
                var oldValue81;
                var renderCond81 = function() {
                  var value194 = tmp8851.get();
                  if(oldValue81 === value194) return;
                  oldValue81 = value194;
                  var subs__ = condSubs81;
                  subs__.unsubscribe();
                  node545.empty();
                  if(value194) {
                    
                    var tmp8847 = mobl.ref(false);
                    
                    
                    var tmp8846 = mobl.ref(null);
                    
                    
                    var tmp8845 = mobl.ref(null);
                    
                    var nodes3327 = $("<span>");
                    node545.append(nodes3327);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp8845, tmp8846, tmp8847, function(_, callback) {
                      var root3928 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes3328 = $("<span>");
                      root3928.append(nodes3328);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl263();
                      }));
                      
                      function renderControl263() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root3929 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root3929); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes3328;
                          nodes3328 = node.contents();
                          oldNodes.replaceWith(nodes3328);
                        }));
                      }
                      renderControl263();
                      callback(root3928); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3327;
                      nodes3327 = node.contents();
                      oldNodes.replaceWith(nodes3327);
                    }));
                    
                    
                  } else {
                    
                    var tmp8849 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp8848 = mobl.ref(true);
                    
                    
                    var tmp8850 = mobl.ref(null);
                    
                    var nodes3329 = $("<span>");
                    node545.append(nodes3329);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8849, tmp8850, tmp8848, function(_, callback) {
                      var root3930 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes3330 = $("<span>");
                      root3930.append(nodes3330);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl264();
                      }));
                      
                      function renderControl264() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root3931 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root3931); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes3330;
                          nodes3330 = node.contents();
                          oldNodes.replaceWith(nodes3330);
                        }));
                      }
                      renderControl264();
                      callback(root3930); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3329;
                      nodes3329 = node.contents();
                      oldNodes.replaceWith(nodes3329);
                    }));
                    
                    
                  }
                };
                renderCond81();
                subs__.addSub(tmp8851.addEventListener('change', function() {
                  renderCond81();
                }));
                
                
                var oldNodes = iternode104;
                iternode104 = iternode104.contents();
                oldNodes.replaceWith(iternode104);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list104.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
          });
        };
        renderList104();
        
        callback(root3927); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3326;
        nodes3326 = node.contents();
        oldNodes.replaceWith(nodes3326);
      }));
      node541.append(node542);
      
      var node543 = $("<div>");
      node543.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes3325 = $("<span>");
      node543.append(nodes3325);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl262();
      }));
      
      function renderControl262() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root3926 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3926); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3325;
          nodes3325 = node.contents();
          oldNodes.replaceWith(nodes3325);
        }));
      }
      renderControl262();
      node541.append(node543);
      node540.append(node541);
      
      
      
      
      
      
    });
  } else {
    var nodes3331 = $("<span>");
    node540.append(nodes3331);
    subs__.addSub((ui.group)(function(_, callback) {
      var root3932 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node546 = mobl.loadingSpan();
      root3932.append(node546);
      var list105;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList105 = function() {
        var subs__ = listSubs__;
        list105 = items.get();
        list105.list(function(results141) {
          node546.empty();
          for(var i110 = 0; i110 < results141.length; i110++) {
            (function() {
              var iternode105 = $("<span>");
              node546.append(iternode105);
              var it;
              it = mobl.ref(mobl.ref(results141), i110);
              
              var tmp8838 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                   var tmp8896 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp8840 = mobl.ref(false);
              
              
              var tmp8839 = mobl.ref(null);
              
              var nodes3332 = $("<span>");
              iternode105.append(nodes3332);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8838, tmp8839, tmp8840, function(_, callback) {
                var root3933 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3333 = $("<span>");
                root3933.append(nodes3333);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl265();
                }));
                
                function renderControl265() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root3934 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root3934); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3333;
                    nodes3333 = node.contents();
                    oldNodes.replaceWith(nodes3333);
                  }));
                }
                renderControl265();
                callback(root3933); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3332;
                nodes3332 = node.contents();
                oldNodes.replaceWith(nodes3332);
              }));
              
              var oldNodes = iternode105;
              iternode105 = iternode105.contents();
              oldNodes.replaceWith(iternode105);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list105.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
        });
      };
      renderList105();
      
      callback(root3932); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3331;
      nodes3331 = node.contents();
      oldNodes.replaceWith(nodes3331);
    }));
    
    
  }
};
renderCond80();
subs__.addSub(tmp8887.addEventListener('change', function() {
  renderCond80();
}));

callback(root3925); return subs__;

return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
var root3935 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp8843 = mobl.ref("Detail");


var tmp8844 = mobl.ref(null);

var nodes3334 = $("<span>");
root3935.append(nodes3334);
subs__.addSub((ui.header)(tmp8843, tmp8844, function(_, callback) {
  var root3936 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8842 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp8841 = mobl.ref("Back");
  
  var nodes3335 = $("<span>");
  root3936.append(nodes3335);
  subs__.addSub((ui.backButton)(tmp8841, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8842, function(_, callback) {
    var root3937 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3937); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3335;
    nodes3335 = node.contents();
    oldNodes.replaceWith(nodes3335);
  }));
  callback(root3936); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3334;
  nodes3334 = node.contents();
  oldNodes.replaceWith(nodes3334);
}));
var nodes3336 = $("<span>");
root3935.append(nodes3336);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl266();
}));

function renderControl266() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root3938 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3938); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3336;
    nodes3336 = node.contents();
    oldNodes.replaceWith(nodes3336);
  }));
}
renderControl266();
callback(root3935); return subs__;


return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root3939 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes3337 = $("<span>");
root3939.append(nodes3337);
subs__.addSub((ui.group)(function(_, callback) {
  var root3940 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node547 = mobl.loadingSpan();
  root3940.append(node547);
  var list106;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList106 = function() {
    var subs__ = listSubs__;
    list106 = coll.get();
    list106.list(function(results142) {
      node547.empty();
      for(var i111 = 0; i111 < results142.length; i111++) {
        (function() {
          var iternode106 = $("<span>");
          node547.append(iternode106);
          var it;
          it = mobl.ref(mobl.ref(results142), i111);
          
          var tmp8858 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp8858.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp8858.set(it.get() == selected.get());
          }));
          
          
          var node548 = $("<span>");
          iternode106.append(node548);
          var condSubs82 = new mobl.CompSubscription();
          subs__.addSub(condSubs82);
          var oldValue82;
          var renderCond82 = function() {
            var value195 = tmp8858.get();
            if(oldValue82 === value195) return;
            oldValue82 = value195;
            var subs__ = condSubs82;
            subs__.unsubscribe();
            node548.empty();
            if(value195) {
              
              var tmp8854 = mobl.ref(false);
              
              
              var tmp8853 = mobl.ref(null);
              
              
              var tmp8852 = mobl.ref(null);
              
              var nodes3338 = $("<span>");
              node548.append(nodes3338);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8852, tmp8853, tmp8854, function(_, callback) {
                var root3941 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3339 = $("<span>");
                root3941.append(nodes3339);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl267();
                }));
                
                function renderControl267() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root3942 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root3942); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3339;
                    nodes3339 = node.contents();
                    oldNodes.replaceWith(nodes3339);
                  }));
                }
                renderControl267();
                callback(root3941); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3338;
                nodes3338 = node.contents();
                oldNodes.replaceWith(nodes3338);
              }));
              
              
            } else {
              
              var tmp8856 = mobl.ref(true);
              
              
              var tmp8855 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp8857 = mobl.ref(null);
              
              var nodes3340 = $("<span>");
              node548.append(nodes3340);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8855, tmp8857, tmp8856, function(_, callback) {
                var root3943 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3341 = $("<span>");
                root3943.append(nodes3341);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl268();
                }));
                
                function renderControl268() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root3944 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root3944); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3341;
                    nodes3341 = node.contents();
                    oldNodes.replaceWith(nodes3341);
                  }));
                }
                renderControl268();
                callback(root3943); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3340;
                nodes3340 = node.contents();
                oldNodes.replaceWith(nodes3340);
              }));
              
              
            }
          };
          renderCond82();
          subs__.addSub(tmp8858.addEventListener('change', function() {
            renderCond82();
          }));
          
          
          var oldNodes = iternode106;
          iternode106 = iternode106.contents();
          oldNodes.replaceWith(iternode106);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list106.addEventListener('change', function() { listSubs__.unsubscribe(); renderList106(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList106(true); }));
    });
  };
  renderList106();
  
  callback(root3940); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3337;
  nodes3337 = node.contents();
  oldNodes.replaceWith(nodes3337);
}));
callback(root3939); return subs__;

return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root3945 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes3342 = $("<span>");
  root3945.append(nodes3342);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3946 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8862 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp8862.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp8862.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp8862.set(coll.get().limit(n.get()));
    }));
    
    
    var node549 = mobl.loadingSpan();
    root3946.append(node549);
    var list107;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList107 = function() {
      var subs__ = listSubs__;
      list107 = tmp8862.get();
      list107.list(function(results143) {
        node549.empty();
        for(var i112 = 0; i112 < results143.length; i112++) {
          (function() {
            var iternode107 = $("<span>");
            node549.append(iternode107);
            var it;
            it = mobl.ref(mobl.ref(results143), i112);
            
            var tmp8859 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp8861 = mobl.ref(false);
            
            
            var tmp8860 = mobl.ref(null);
            
            var nodes3343 = $("<span>");
            iternode107.append(nodes3343);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8859, tmp8860, tmp8861, function(_, callback) {
              var root3947 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3344 = $("<span>");
              root3947.append(nodes3344);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl269();
              }));
              
              function renderControl269() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root3948 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root3948); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3344;
                  nodes3344 = node.contents();
                  oldNodes.replaceWith(nodes3344);
                }));
              }
              renderControl269();
              callback(root3947); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3343;
              nodes3343 = node.contents();
              oldNodes.replaceWith(nodes3343);
            }));
            
            var oldNodes = iternode107;
            iternode107 = iternode107.contents();
            oldNodes.replaceWith(iternode107);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list107.addEventListener('change', function() { listSubs__.unsubscribe(); renderList107(true); }));
        subs__.addSub(tmp8862.addEventListener('change', function() { listSubs__.unsubscribe(); renderList107(true); }));
      });
    };
    renderList107();
    
    
    var tmp8863 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp8863.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp8863.set(n.get() < total.get());
    }));
    
    
    var node550 = $("<span>");
    root3946.append(node550);
    var condSubs83 = new mobl.CompSubscription();
    subs__.addSub(condSubs83);
    var oldValue83;
    var renderCond83 = function() {
      var value196 = tmp8863.get();
      if(oldValue83 === value196) return;
      oldValue83 = value196;
      var subs__ = condSubs83;
      subs__.unsubscribe();
      node550.empty();
      if(value196) {
        
        var node551 = $("<li>");
        
        var ref579 = mobl.ref(ui.loadMoreStyle);
        if(ref579.get() !== null) {
          node551.attr('class', ref579.get());
          subs__.addSub(ref579.addEventListener('change', function(_, ref, val) {
            if(ref === ref579) {
              node551.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref579.rebind());
        
        var val311 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val311 !== null) {
          subs__.addSub(mobl.domBind(node551, 'tap', val311));
        }
        
        
        node551.append("More");
        node550.append(node551);
        
        
      } else {
        
      }
    };
    renderCond83();
    subs__.addSub(tmp8863.addEventListener('change', function() {
      renderCond83();
    }));
    
    callback(root3946); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3342;
    nodes3342 = node.contents();
    oldNodes.replaceWith(nodes3342);
  }));
  callback(root3945); return subs__;
  
});
return subs__;
};

ui.markableList = function(items, elements, callback) {
var root3949 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes3345 = $("<span>");
root3949.append(nodes3345);
subs__.addSub((ui.group)(function(_, callback) {
  var root3950 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node552 = mobl.loadingSpan();
  root3950.append(node552);
  var list108;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList108 = function() {
    var subs__ = listSubs__;
    list108 = items.get();
    list108.list(function(results144) {
      node552.empty();
      for(var i113 = 0; i113 < results144.length; i113++) {
        (function() {
          var iternode108 = $("<span>");
          node552.append(iternode108);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results144), i113), "_1");it = mobl.ref(mobl.ref(mobl.ref(results144), i113), "_2");
          
          var tmp8867 = mobl.ref(false);
          
          
          var tmp8866 = mobl.ref(null);
          
          
          var tmp8865 = mobl.ref(null);
          
          var nodes3346 = $("<span>");
          iternode108.append(nodes3346);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8865, tmp8866, tmp8867, function(_, callback) {
            var root3951 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp8864 = mobl.ref(null);
            
            var nodes3347 = $("<span>");
            root3951.append(nodes3347);
            subs__.addSub((ui.checkBox)(checked, it, tmp8864, function(_, callback) {
              var root3952 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root3952); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3347;
              nodes3347 = node.contents();
              oldNodes.replaceWith(nodes3347);
            }));
            callback(root3951); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3346;
            nodes3346 = node.contents();
            oldNodes.replaceWith(nodes3346);
          }));
          
          var oldNodes = iternode108;
          iternode108 = iternode108.contents();
          oldNodes.replaceWith(iternode108);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list108.addEventListener('change', function() { listSubs__.unsubscribe(); renderList108(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList108(true); }));
    });
  };
  renderList108();
  
  callback(root3950); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3345;
  nodes3345 = node.contents();
  oldNodes.replaceWith(nodes3345);
}));
callback(root3949); return subs__;

return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
var root3953 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll391) {
  coll391 = coll391.reverse();
  function processOne131() {
    var it;
    it = coll391.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll391.length > 0) processOne131(); else rest131();
    
  }
  function rest131() {
    
    var tmp8872 = mobl.ref(null);
    
    var nodes3348 = $("<span>");
    root3953.append(nodes3348);
    subs__.addSub((ui.header)(title, tmp8872, function(_, callback) {
      var root3954 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8868 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp8869 = mobl.ref("Back");
      
      var nodes3349 = $("<span>");
      root3954.append(nodes3349);
      subs__.addSub((ui.backButton)(tmp8869, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8868, function(_, callback) {
        var root3955 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3955); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3349;
        nodes3349 = node.contents();
        oldNodes.replaceWith(nodes3349);
      }));
      
      var tmp8871 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll390) {
                             coll390 = coll390.reverse();
                             function processOne130() {
                               var checked;var it;
                               var tmp8898 = coll390.pop();
                               checked = tmp8898._1;it = tmp8898._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll390.length > 0) processOne130(); else rest130();
                                 
                               } else {
                                 {
                                   
                                   if(coll390.length > 0) processOne130(); else rest130();
                                   
                                 }
                               }
                             }
                             function rest130() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll390.length > 0) processOne130(); else rest130();
                           });
                           
                         });
      
      
      var tmp8870 = mobl.ref("Done");
      
      var nodes3350 = $("<span>");
      root3954.append(nodes3350);
      subs__.addSub((ui.button)(tmp8870, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8871, function(_, callback) {
        var root3956 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3956); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3350;
        nodes3350 = node.contents();
        oldNodes.replaceWith(nodes3350);
      }));
      callback(root3954); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3348;
      nodes3348 = node.contents();
      oldNodes.replaceWith(nodes3348);
    }));
    var nodes3351 = $("<span>");
    root3953.append(nodes3351);
    subs__.addSub((ui.markableList)(items, function(_, callback) {
      var root3957 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3957); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3351;
      nodes3351 = node.contents();
      oldNodes.replaceWith(nodes3351);
    }));
    callback(root3953); return subs__;
    
    
  }
  if(coll391.length > 0) processOne131(); else rest131();
});

return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root3958 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp8873 = mobl.ref("Search term");


var tmp8875 = mobl.ref(null);


var tmp8874 = mobl.ref(null);

var nodes3352 = $("<span>");
root3958.append(nodes3352);
subs__.addSub((ui.searchBox)(phrase, tmp8873, tmp8874, tmp8875, function(_, callback) {
  var root3959 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root3959); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3352;
  nodes3352 = node.contents();
  oldNodes.replaceWith(nodes3352);
}));

var tmp8876 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp8876.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp8876.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp8876.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp8876.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp8876.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes3353 = $("<span>");
root3958.append(nodes3353);
subs__.addSub((ui.masterDetail)(tmp8876, masterItem, detailItem, function(_, callback) {
  var root3960 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root3960); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes3353;
  nodes3353 = node.contents();
  oldNodes.replaceWith(nodes3353);
}));
callback(root3958); return subs__;


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
var root3961 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp8886 = mobl.ref(null);


var tmp8885 = mobl.ref(null);

var nodes3354 = $("<span>");
root3961.append(nodes3354);
subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp8885, tmp8886, function(_, callback) {
  var root3962 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node553 = mobl.loadingSpan();
  root3962.append(node553);
  var list109;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList109 = function() {
    var subs__ = listSubs__;
    list109 = sections.get();
    list109.list(function(results145) {
      node553.empty();
      for(var i114 = 0; i114 < results145.length; i114++) {
        (function() {
          var iternode109 = $("<span>");
          node553.append(iternode109);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results145), i114), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results145), i114), "_2");
          
          var tmp8880 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp8880.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp8880.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp8880.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp8880.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp8879 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp8881 = mobl.ref(null);
          
          var nodes3355 = $("<span>");
          iternode109.append(nodes3355);
          subs__.addSub((ui.span)(tmp8880, tmp8881, tmp8879, function(_, callback) {
            var root3963 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp8878 = mobl.ref(null);
            
            
            var tmp8877 = mobl.ref(null);
            
            var nodes3356 = $("<span>");
            root3963.append(nodes3356);
            subs__.addSub((mobl.label)(sectionName, tmp8877, tmp8878, function(_, callback) {
              var root3964 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root3964); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3356;
              nodes3356 = node.contents();
              oldNodes.replaceWith(nodes3356);
            }));
            callback(root3963); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3355;
            nodes3355 = node.contents();
            oldNodes.replaceWith(nodes3355);
          }));
          
          var tmp8882 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp8882.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp8882.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
            tmp8882.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
            tmp8882.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          
          
          var tmp8884 = mobl.ref(null);
          
          
          var tmp8883 = mobl.ref(null);
          
          var nodes3357 = $("<span>");
          iternode109.append(nodes3357);
          subs__.addSub((ui.block)(tmp8882, tmp8883, tmp8884, function(_, callback) {
            var root3965 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes3358 = $("<span>");
            root3965.append(nodes3358);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl270();
            }));
            
            function renderControl270() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root3966 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3966); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3358;
                nodes3358 = node.contents();
                oldNodes.replaceWith(nodes3358);
              }));
            }
            renderControl270();
            callback(root3965); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3357;
            nodes3357 = node.contents();
            oldNodes.replaceWith(nodes3357);
          }));
          
          var oldNodes = iternode109;
          iternode109 = iternode109.contents();
          oldNodes.replaceWith(iternode109);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list109.addEventListener('change', function() { listSubs__.unsubscribe(); renderList109(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList109(true); }));
    });
  };
  renderList109();
  
  callback(root3962); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes3354;
  nodes3354 = node.contents();
  oldNodes.replaceWith(nodes3354);
}));
callback(root3961); return subs__;

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
var root3967 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node554 = $("<table>");

var ref580 = mobl.ref(ui.tableStyle);
if(ref580.get() !== null) {
  node554.attr('class', ref580.get());
  subs__.addSub(ref580.addEventListener('change', function(_, ref, val) {
    if(ref === ref580) {
      node554.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref580.rebind());

var nodes3359 = $("<span>");
node554.append(nodes3359);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl271();
}));

function renderControl271() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3968 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3968); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3359;
    nodes3359 = node.contents();
    oldNodes.replaceWith(nodes3359);
  }));
}
renderControl271();
root3967.append(node554);
callback(root3967); return subs__;


return subs__;
};

ui.row = function(elements, callback) {
var root3969 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node555 = $("<tr>");

var ref581 = mobl.ref(ui.trStyle);
if(ref581.get() !== null) {
  node555.attr('class', ref581.get());
  subs__.addSub(ref581.addEventListener('change', function(_, ref, val) {
    if(ref === ref581) {
      node555.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref581.rebind());

var nodes3360 = $("<span>");
node555.append(nodes3360);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl272();
}));

function renderControl272() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3970 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3970); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3360;
    nodes3360 = node.contents();
    oldNodes.replaceWith(nodes3360);
  }));
}
renderControl272();
root3969.append(node555);
callback(root3969); return subs__;


return subs__;
};

ui.cell = function(width, elements, callback) {
var root3971 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node556 = $("<td>");

var ref582 = width;
if(ref582.get() !== null) {
  node556.attr('width', ref582.get());
  subs__.addSub(ref582.addEventListener('change', function(_, ref, val) {
    if(ref === ref582) {
      node556.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref582.rebind());

var ref583 = mobl.ref(ui.tdStyle);
if(ref583.get() !== null) {
  node556.attr('class', ref583.get());
  subs__.addSub(ref583.addEventListener('change', function(_, ref, val) {
    if(ref === ref583) {
      node556.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref583.rebind());

var nodes3361 = $("<span>");
node556.append(nodes3361);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl273();
}));

function renderControl273() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3972 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3972); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3361;
    nodes3361 = node.contents();
    oldNodes.replaceWith(nodes3361);
  }));
}
renderControl273();
root3971.append(node556);
callback(root3971); return subs__;


return subs__;
};

ui.col = function(width, elements, callback) {
var root3973 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node557 = $("<td>");

var ref584 = width;
if(ref584.get() !== null) {
  node557.attr('width', ref584.get());
  subs__.addSub(ref584.addEventListener('change', function(_, ref, val) {
    if(ref === ref584) {
      node557.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref584.rebind());

var ref585 = mobl.ref(ui.tdStyle);
if(ref585.get() !== null) {
  node557.attr('class', ref585.get());
  subs__.addSub(ref585.addEventListener('change', function(_, ref, val) {
    if(ref === ref585) {
      node557.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref585.rebind());

var nodes3362 = $("<span>");
node557.append(nodes3362);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl274();
}));

function renderControl274() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3974 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3974); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3362;
    nodes3362 = node.contents();
    oldNodes.replaceWith(nodes3362);
  }));
}
renderControl274();
root3973.append(node557);
callback(root3973); return subs__;


return subs__;
};

ui.headerCol = function(width, elements, callback) {
var root3975 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node558 = $("<td>");

var ref586 = width;
if(ref586.get() !== null) {
  node558.attr('width', ref586.get());
  subs__.addSub(ref586.addEventListener('change', function(_, ref, val) {
    if(ref === ref586) {
      node558.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref586.rebind());

var ref587 = mobl.ref(ui.tdStyle);
if(ref587.get() !== null) {
  node558.attr('class', ref587.get());
  subs__.addSub(ref587.addEventListener('change', function(_, ref, val) {
    if(ref === ref587) {
      node558.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref587.rebind());


var node559 = $("<strong>");

var nodes3363 = $("<span>");
node559.append(nodes3363);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl275();
}));

function renderControl275() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3976 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3976); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3363;
    nodes3363 = node.contents();
    oldNodes.replaceWith(nodes3363);
  }));
}
renderControl275();
node558.append(node559);
root3975.append(node558);
callback(root3975); return subs__;



return subs__;
};

ui.scroller = function(height, elements, callback) {
var root3977 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node560 = $("<div>");
node560.attr('class', "scroller");

var nodes3364 = $("<span>");
node560.append(nodes3364);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl276();
}));

function renderControl276() {
  subs__.addSub((elements)(function(elements, callback) {
    var root3978 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3978); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3364;
    nodes3364 = node.contents();
    oldNodes.replaceWith(nodes3364);
  }));
}
renderControl276();
root3977.append(node560);
var result__ = ui.setupScrollers();
callback(root3977); return subs__;


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
var root3979 = $("<span>");
var subs__ = new mobl.CompSubscription();

var slider = $("<div>");

root3979.append(slider);
var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                      if(event && event.stopPropagation) event.stopPropagation();
                                                                      var result__ = slider.slider("value");
                                                                      s.set(result__);
                                                                      var result__ = slider.slider("value");
                                                                      start.set(result__);
                                                                      if(callback && callback.apply) callback(); return;
                                                                    }}));
callback(root3979); return subs__;

return subs__;
};
ui.title = 'ui__title';
ui.emphasis = 'ui__emphasis';
ui.ranger = 'ui__ranger';
ui.tweetStyle = 'ui__tweetStyle';
ui.tweetIconStyle = 'ui__tweetIconStyle';
