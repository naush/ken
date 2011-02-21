mobl.provides('styles.ken');
styles.ken.loadingStyle = 'styles__ken__loadingStyle';

styles.ken.whenLoaded = function(value, elements, callback) {
var root5840 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1431 = $("<span>");
root5840.append(node1431);
var condSubs202 = new mobl.CompSubscription();
subs__.addSub(condSubs202);
var oldValue202;
var renderCond202 = function() {
  var value486 = value.get();
  if(oldValue202 === value486) return;
  oldValue202 = value486;
  var subs__ = condSubs202;
  subs__.unsubscribe();
  node1431.empty();
  if(value486) {
    var nodes4646 = $("<span>");
    node1431.append(nodes4646);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl704();
    }));
    
    function renderControl704() {
      subs__.addSub((elements)(function(elements, callback) {
        var root5841 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5841); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4646;
        nodes4646 = node.contents();
        oldNodes.replaceWith(nodes4646);
      }));
    }
    renderControl704();
    
    
  } else {
    
    var tmp11155 = mobl.ref(null);
    
    
    var tmp11154 = mobl.ref(null);
    
    var nodes4647 = $("<span>");
    node1431.append(nodes4647);
    subs__.addSub((styles.ken.block)(mobl.ref(styles.ken.loadingStyle), tmp11154, tmp11155, function(_, callback) {
      var root5842 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root5842.append("Loading...");
      
      var tmp11148 = mobl.ref("middle");
      
      
      var tmp11147 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp11153 = mobl.ref(null);
      
      
      var tmp11152 = mobl.ref(null);
      
      
      var tmp11151 = mobl.ref(null);
      
      
      var tmp11150 = mobl.ref(null);
      
      
      var tmp11149 = mobl.ref(null);
      
      var nodes4648 = $("<span>");
      root5842.append(nodes4648);
      subs__.addSub((styles.ken.image)(tmp11147, tmp11149, tmp11150, tmp11151, tmp11152, tmp11148, tmp11153, function(_, callback) {
        var root5843 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5843); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4648;
        nodes4648 = node.contents();
        oldNodes.replaceWith(nodes4648);
      }));
      callback(root5842); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4647;
      nodes4647 = node.contents();
      oldNodes.replaceWith(nodes4647);
    }));
    
    
  }
};
renderCond202();
subs__.addSub(value.addEventListener('change', function() {
  renderCond202();
}));

callback(root5840); return subs__;

return subs__;
};
styles.ken.headerStyle = 'styles__ken__headerStyle';
styles.ken.headerContainerStyle = 'styles__ken__headerContainerStyle';
styles.ken.headerTextStyle = 'styles__ken__headerTextStyle';

styles.ken.header = function(text, onclick, elements, callback) {
var root5844 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1432 = $("<div>");

var ref1379 = mobl.ref(styles.ken.headerStyle);
if(ref1379.get() !== null) {
  node1432.attr('class', ref1379.get());
  subs__.addSub(ref1379.addEventListener('change', function(_, ref, val) {
    if(ref === ref1379) {
      node1432.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1379.rebind());

var val729 = onclick.get();
if(val729 !== null) {
  subs__.addSub(mobl.domBind(node1432, 'tap', val729));
}


var node1433 = $("<div>");

var ref1378 = mobl.ref(styles.ken.headerContainerStyle);
if(ref1378.get() !== null) {
  node1433.attr('class', ref1378.get());
  subs__.addSub(ref1378.addEventListener('change', function(_, ref, val) {
    if(ref === ref1378) {
      node1433.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1378.rebind());


var node1434 = $("<div>");

var ref1376 = text;
node1434.text(""+ref1376.get());
var ignore281 = false;
subs__.addSub(ref1376.addEventListener('change', function(_, ref, val) {
  if(ignore281) return;
  node1434.text(""+val);
}));
subs__.addSub(ref1376.rebind());


var ref1377 = mobl.ref(styles.ken.headerTextStyle);
if(ref1377.get() !== null) {
  node1434.attr('class', ref1377.get());
  subs__.addSub(ref1377.addEventListener('change', function(_, ref, val) {
    if(ref === ref1377) {
      node1434.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1377.rebind());

node1433.append(node1434);
node1432.append(node1433);
var nodes4649 = $("<span>");
node1432.append(nodes4649);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl705();
}));

function renderControl705() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5845 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5845); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4649;
    nodes4649 = node.contents();
    oldNodes.replaceWith(nodes4649);
  }));
}
renderControl705();
root5844.append(node1432);
callback(root5844); return subs__;




return subs__;
};
styles.ken.buttonStyle = 'styles__ken__buttonStyle';
styles.ken.buttonPushedStyle = 'styles__ken__buttonPushedStyle';
styles.ken.buttonStyle = 'styles__ken__buttonStyle';
styles.ken.buttonPushedStyle = 'styles__ken__buttonPushedStyle';

styles.ken.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root5846 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref1380 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref1380.get() !== null) {
  sp.attr('class', ref1380.get());
  subs__.addSub(ref1380.addEventListener('change', function(_, ref, val) {
    if(ref === ref1380) {
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
subs__.addSub(ref1380.rebind());

var val730 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val730 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val730));
}

var val731 = function(event, callback) {
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
if(val731 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val731));
}

var val732 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after84(result__) {
                  var tmp11216 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after84);if(result__ !== undefined) after84(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val732 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val732));
}

var val733 = function(event, callback) {
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
if(val733 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val733));
}

var ref1381 = text;
sp.text(""+ref1381.get());
var ignore282 = false;
subs__.addSub(ref1381.addEventListener('change', function(_, ref, val) {
  if(ignore282) return;
  sp.text(""+val);
}));
subs__.addSub(ref1381.rebind());


root5846.append(sp);
callback(root5846); return subs__;

return subs__;
};
styles.ken.sideButtonStyle = 'styles__ken__sideButtonStyle';
styles.ken.sideButtonPushedStyle = 'styles__ken__sideButtonPushedStyle';

styles.ken.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root5847 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes4650 = $("<span>");
root5847.append(nodes4650);
subs__.addSub((styles.ken.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root5848 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5848); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4650;
  nodes4650 = node.contents();
  oldNodes.replaceWith(nodes4650);
}));
callback(root5847); return subs__;

return subs__;
};
styles.ken.backButtonStyle = 'styles__ken__backButtonStyle';
styles.ken.backButtonPushedStyle = 'styles__ken__backButtonPushedStyle';
styles.ken.backButtonStyle = 'styles__ken__backButtonStyle';
styles.ken.backButtonPushedStyle = 'styles__ken__backButtonPushedStyle';

styles.ken.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root5849 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes4651 = $("<span>");
root5849.append(nodes4651);
subs__.addSub((styles.ken.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root5850 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5850); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4651;
  nodes4651 = node.contents();
  oldNodes.replaceWith(nodes4651);
}));
callback(root5849); return subs__;

return subs__;
};

styles.ken.block = function(cssClass, id, onclick, elements, callback) {
var root5851 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1435 = $("<div>");

var ref1382 = id;
if(ref1382.get() !== null) {
  node1435.attr('id', ref1382.get());
  subs__.addSub(ref1382.addEventListener('change', function(_, ref, val) {
    if(ref === ref1382) {
      node1435.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1382.rebind());

var ref1383 = cssClass;
if(ref1383.get() !== null) {
  node1435.attr('class', ref1383.get());
  subs__.addSub(ref1383.addEventListener('change', function(_, ref, val) {
    if(ref === ref1383) {
      node1435.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1383.rebind());

var val734 = onclick.get();
if(val734 !== null) {
  subs__.addSub(mobl.domBind(node1435, 'tap', val734));
}

var nodes4652 = $("<span>");
node1435.append(nodes4652);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl706();
}));

function renderControl706() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5852 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5852); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4652;
    nodes4652 = node.contents();
    oldNodes.replaceWith(nodes4652);
  }));
}
renderControl706();
root5851.append(node1435);
callback(root5851); return subs__;


return subs__;
};

styles.ken.span = function(cssClass, id, onclick, elements, callback) {
var root5853 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1436 = $("<span>");

var ref1384 = id;
if(ref1384.get() !== null) {
  node1436.attr('id', ref1384.get());
  subs__.addSub(ref1384.addEventListener('change', function(_, ref, val) {
    if(ref === ref1384) {
      node1436.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1384.rebind());

var ref1385 = cssClass;
if(ref1385.get() !== null) {
  node1436.attr('class', ref1385.get());
  subs__.addSub(ref1385.addEventListener('change', function(_, ref, val) {
    if(ref === ref1385) {
      node1436.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1385.rebind());

var val735 = onclick.get();
if(val735 !== null) {
  subs__.addSub(mobl.domBind(node1436, 'tap', val735));
}

var nodes4653 = $("<span>");
node1436.append(nodes4653);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl707();
}));

function renderControl707() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5854 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5854); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4653;
    nodes4653 = node.contents();
    oldNodes.replaceWith(nodes4653);
  }));
}
renderControl707();
root5853.append(node1436);
callback(root5853); return subs__;


return subs__;
};
styles.ken.groupStyle = 'styles__ken__groupStyle';

styles.ken.group = function(elements, callback) {
var root5855 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1437 = $("<ul>");

var ref1386 = mobl.ref(styles.ken.groupStyle);
if(ref1386.get() !== null) {
  node1437.attr('class', ref1386.get());
  subs__.addSub(ref1386.addEventListener('change', function(_, ref, val) {
    if(ref === ref1386) {
      node1437.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1386.rebind());

var nodes4654 = $("<span>");
node1437.append(nodes4654);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl708();
}));

function renderControl708() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5856 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5856); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4654;
    nodes4654 = node.contents();
    oldNodes.replaceWith(nodes4654);
  }));
}
renderControl708();
root5855.append(node1437);
callback(root5855); return subs__;


return subs__;
};

styles.ken.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root5857 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1438 = $("<img>");

var ref1387 = url;
if(ref1387.get() !== null) {
  node1438.attr('src', ref1387.get());
  subs__.addSub(ref1387.addEventListener('change', function(_, ref, val) {
    if(ref === ref1387) {
      node1438.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1387.rebind());

var ref1388 = width;
if(ref1388.get() !== null) {
  node1438.attr('width', ref1388.get());
  subs__.addSub(ref1388.addEventListener('change', function(_, ref, val) {
    if(ref === ref1388) {
      node1438.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1388.rebind());

var ref1389 = height;
if(ref1389.get() !== null) {
  node1438.attr('height', ref1389.get());
  subs__.addSub(ref1389.addEventListener('change', function(_, ref, val) {
    if(ref === ref1389) {
      node1438.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1389.rebind());

var ref1390 = style;
if(ref1390.get() !== null) {
  node1438.attr('class', ref1390.get());
  subs__.addSub(ref1390.addEventListener('change', function(_, ref, val) {
    if(ref === ref1390) {
      node1438.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1390.rebind());

var val736 = onclick.get();
if(val736 !== null) {
  subs__.addSub(mobl.domBind(node1438, 'tap', val736));
}

var ref1391 = valign;
if(ref1391.get() !== null) {
  node1438.attr('valign', ref1391.get());
  subs__.addSub(ref1391.addEventListener('change', function(_, ref, val) {
    if(ref === ref1391) {
      node1438.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1391.rebind());

var ref1392 = align;
if(ref1392.get() !== null) {
  node1438.attr('align', ref1392.get());
  subs__.addSub(ref1392.addEventListener('change', function(_, ref, val) {
    if(ref === ref1392) {
      node1438.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1392.rebind());

root5857.append(node1438);
callback(root5857); return subs__;

return subs__;
};
styles.ken.itemStyle = 'styles__ken__itemStyle';
styles.ken.itemPushedStyle = 'styles__ken__itemPushedStyle';
styles.ken.itemArrowStyle = 'styles__ken__itemArrowStyle';

styles.ken.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root5858 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref1393 = mobl.ref(styles.ken.itemStyle);
if(ref1393.get() !== null) {
  el.attr('class', ref1393.get());
  subs__.addSub(ref1393.addEventListener('change', function(_, ref, val) {
    if(ref === ref1393) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1393.rebind());

var ref1394 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styles.ken.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref1394.get() !== null) {
  el.attr('class', ref1394.get());
  subs__.addSub(ref1394.addEventListener('change', function(_, ref, val) {
    if(ref === ref1394) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  subs__.addSub(onclick.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styles.ken.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(hideArrow.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styles.ken.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(mobl.ref(styles.ken.itemArrowStyle).addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styles.ken.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushed.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styles.ken.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushedStyle.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styles.ken.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(style.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), styles.ken.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  
}
subs__.addSub(ref1394.rebind());

var val737 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp11217 = result__;
                                         function after85(result__) {
                                           var tmp11218 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after85);if(result__ !== undefined) after85(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp11219 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val737 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val737));
}

var nodes4655 = $("<span>");
el.append(nodes4655);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl709();
}));

function renderControl709() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5859 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5859); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4655;
    nodes4655 = node.contents();
    oldNodes.replaceWith(nodes4655);
  }));
}
renderControl709();
root5858.append(el);
callback(root5858); return subs__;


return subs__;
};

styles.ken.checkBox = function(b, label, onchange, elements, callback) {
var root5860 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1439 = $("<input>");
node1439.attr('type', "checkbox");

var ref1396 = b;
node1439.attr('checked', !!ref1396.get());
subs__.addSub(ref1396.addEventListener('change', function(_, ref, val) {
  if(ref === ref1396) node1439.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node1439, 'change', function() {
  b.set(!!node1439.attr('checked'));
}));

var val739 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val739 !== null) {
  subs__.addSub(mobl.domBind(node1439, 'tap', val739));
}

var val740 = onchange.get();
if(val740 !== null) {
  subs__.addSub(mobl.domBind(node1439, 'change', val740));
}

root5860.append(node1439);

root5860.append(" ");

var node1440 = $("<span>");

var ref1395 = label;
node1440.text(""+ref1395.get());
var ignore283 = false;
subs__.addSub(ref1395.addEventListener('change', function(_, ref, val) {
  if(ignore283) return;
  node1440.text(""+val);
}));
subs__.addSub(ref1395.rebind());


var val738 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after86(result__) {
                  var tmp11220 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after86);if(result__ !== undefined) after86(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val738 !== null) {
  subs__.addSub(mobl.domBind(node1440, 'tap', val738));
}

root5860.append(node1440);
callback(root5860); return subs__;


return subs__;
};
styles.ken.textFieldStyle = 'styles__ken__textFieldStyle';

styles.ken.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root5861 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1441 = $("<span>");
root5861.append(node1441);
var condSubs203 = new mobl.CompSubscription();
subs__.addSub(condSubs203);
var oldValue203;
var renderCond203 = function() {
  var value487 = label.get();
  if(oldValue203 === value487) return;
  oldValue203 = value487;
  var subs__ = condSubs203;
  subs__.unsubscribe();
  node1441.empty();
  if(value487) {
    
    var node1442 = $("<span>");
    node1442.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref1400 = label;
    node1442.text(""+ref1400.get());
    var ignore285 = false;
    subs__.addSub(ref1400.addEventListener('change', function(_, ref, val) {
      if(ignore285) return;
      node1442.text(""+val);
    }));
    subs__.addSub(ref1400.rebind());
    
    
    node1441.append(node1442);
    
    var node1443 = $("<span>");
    node1443.attr('style', "float: left");
    
    
    var node1444 = $("<input>");
    node1444.attr('type', "text");
    
    var ref1397 = mobl.ref(styles.ken.textFieldStyle);
    if(ref1397.get() !== null) {
      node1444.attr('class', ref1397.get());
      subs__.addSub(ref1397.addEventListener('change', function(_, ref, val) {
        if(ref === ref1397) {
          node1444.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1397.rebind());
    
    var ref1398 = placeholder;
    if(ref1398.get() !== null) {
      node1444.attr('placeholder', ref1398.get());
      subs__.addSub(ref1398.addEventListener('change', function(_, ref, val) {
        if(ref === ref1398) {
          node1444.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1398.rebind());
    
    var ref1399 = s;
    node1444.val(""+ref1399.get());
    var ignore284 = false;
    subs__.addSub(ref1399.addEventListener('change', function(_, ref, val) {
      if(ignore284) return;
      node1444.val(""+val);
    }));
    subs__.addSub(ref1399.rebind());
    
    subs__.addSub(mobl.domBind(node1444, 'keyup change', function() {
      ignore284 = true;
      s.set(mobl.stringTomobl__String(node1444.val()));
      ignore284 = false;
    }));
    
    
    var val741 = onchange.get();
    if(val741 !== null) {
      subs__.addSub(mobl.domBind(node1444, 'change', val741));
    }
    
    var val742 = onkeyup.get();
    if(val742 !== null) {
      subs__.addSub(mobl.domBind(node1444, 'keyup', val742));
    }
    
    var val743 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = styles.ken.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val743 !== null) {
      subs__.addSub(mobl.domBind(node1444, 'blur', val743));
    }
    
    node1443.append(node1444);
    node1441.append(node1443);
    
    
    
    
  } else {
    
    var node1445 = $("<input>");
    node1445.attr('type', "text");
    
    var ref1401 = mobl.ref(styles.ken.textFieldStyle);
    if(ref1401.get() !== null) {
      node1445.attr('class', ref1401.get());
      subs__.addSub(ref1401.addEventListener('change', function(_, ref, val) {
        if(ref === ref1401) {
          node1445.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1401.rebind());
    
    var ref1402 = placeholder;
    if(ref1402.get() !== null) {
      node1445.attr('placeholder', ref1402.get());
      subs__.addSub(ref1402.addEventListener('change', function(_, ref, val) {
        if(ref === ref1402) {
          node1445.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1402.rebind());
    
    var ref1403 = s;
    node1445.val(""+ref1403.get());
    var ignore286 = false;
    subs__.addSub(ref1403.addEventListener('change', function(_, ref, val) {
      if(ignore286) return;
      node1445.val(""+val);
    }));
    subs__.addSub(ref1403.rebind());
    
    subs__.addSub(mobl.domBind(node1445, 'keyup change', function() {
      ignore286 = true;
      s.set(mobl.stringTomobl__String(node1445.val()));
      ignore286 = false;
    }));
    
    
    var val744 = onchange.get();
    if(val744 !== null) {
      subs__.addSub(mobl.domBind(node1445, 'change', val744));
    }
    
    var val745 = onkeyup.get();
    if(val745 !== null) {
      subs__.addSub(mobl.domBind(node1445, 'keyup', val745));
    }
    
    var val746 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = styles.ken.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val746 !== null) {
      subs__.addSub(mobl.domBind(node1445, 'blur', val746));
    }
    
    node1441.append(node1445);
    
    
  }
};
renderCond203();
subs__.addSub(label.addEventListener('change', function() {
  renderCond203();
}));

callback(root5861); return subs__;

return subs__;
};

styles.ken.numField = function(n, placeholder, label, onchange, elements, callback) {
var root5862 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1446 = $("<span>");
root5862.append(node1446);
var condSubs204 = new mobl.CompSubscription();
subs__.addSub(condSubs204);
var oldValue204;
var renderCond204 = function() {
  var value488 = label.get();
  if(oldValue204 === value488) return;
  oldValue204 = value488;
  var subs__ = condSubs204;
  subs__.unsubscribe();
  node1446.empty();
  if(value488) {
    
    var node1447 = $("<span>");
    node1447.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref1407 = label;
    node1447.text(""+ref1407.get());
    var ignore288 = false;
    subs__.addSub(ref1407.addEventListener('change', function(_, ref, val) {
      if(ignore288) return;
      node1447.text(""+val);
    }));
    subs__.addSub(ref1407.rebind());
    
    
    node1446.append(node1447);
    
    var node1448 = $("<span>");
    node1448.attr('style', "float: left");
    
    
    var node1449 = $("<input>");
    node1449.attr('type', "text");
    
    var ref1404 = mobl.ref(styles.ken.textFieldStyle);
    if(ref1404.get() !== null) {
      node1449.attr('class', ref1404.get());
      subs__.addSub(ref1404.addEventListener('change', function(_, ref, val) {
        if(ref === ref1404) {
          node1449.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1404.rebind());
    
    var ref1405 = placeholder;
    if(ref1405.get() !== null) {
      node1449.attr('placeholder', ref1405.get());
      subs__.addSub(ref1405.addEventListener('change', function(_, ref, val) {
        if(ref === ref1405) {
          node1449.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1405.rebind());
    
    var ref1406 = n;
    node1449.val(""+ref1406.get());
    var ignore287 = false;
    subs__.addSub(ref1406.addEventListener('change', function(_, ref, val) {
      if(ignore287) return;
      node1449.val(""+val);
    }));
    subs__.addSub(ref1406.rebind());
    
    subs__.addSub(mobl.domBind(node1449, 'keyup change', function() {
      ignore287 = true;
      n.set(mobl.stringTomobl__Num(node1449.val()));
      ignore287 = false;
    }));
    
    
    var val747 = onchange.get();
    if(val747 !== null) {
      subs__.addSub(mobl.domBind(node1449, 'change', val747));
    }
    
    var val748 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = styles.ken.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val748 !== null) {
      subs__.addSub(mobl.domBind(node1449, 'blur', val748));
    }
    
    node1448.append(node1449);
    node1446.append(node1448);
    
    
    
    
  } else {
    
    var node1450 = $("<input>");
    node1450.attr('type', "text");
    
    var ref1408 = mobl.ref(styles.ken.textFieldStyle);
    if(ref1408.get() !== null) {
      node1450.attr('class', ref1408.get());
      subs__.addSub(ref1408.addEventListener('change', function(_, ref, val) {
        if(ref === ref1408) {
          node1450.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1408.rebind());
    
    var ref1409 = placeholder;
    if(ref1409.get() !== null) {
      node1450.attr('placeholder', ref1409.get());
      subs__.addSub(ref1409.addEventListener('change', function(_, ref, val) {
        if(ref === ref1409) {
          node1450.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref1409.rebind());
    
    var ref1410 = n;
    node1450.val(""+ref1410.get());
    var ignore289 = false;
    subs__.addSub(ref1410.addEventListener('change', function(_, ref, val) {
      if(ignore289) return;
      node1450.val(""+val);
    }));
    subs__.addSub(ref1410.rebind());
    
    subs__.addSub(mobl.domBind(node1450, 'keyup change', function() {
      ignore289 = true;
      n.set(mobl.stringTomobl__Num(node1450.val()));
      ignore289 = false;
    }));
    
    
    var val749 = onchange.get();
    if(val749 !== null) {
      subs__.addSub(mobl.domBind(node1450, 'change', val749));
    }
    
    var val750 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = styles.ken.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val750 !== null) {
      subs__.addSub(mobl.domBind(node1450, 'blur', val750));
    }
    
    node1446.append(node1450);
    
    
  }
};
renderCond204();
subs__.addSub(label.addEventListener('change', function() {
  renderCond204();
}));

callback(root5862); return subs__;

return subs__;
};
styles.ken.tabbarStyle = 'styles__ken__tabbarStyle';
styles.ken.inActiveTabButtonStyle = 'styles__ken__inActiveTabButtonStyle';
styles.ken.activeTabButtonStyle = 'styles__ken__activeTabButtonStyle';
styles.ken.inActiveTabStyle = 'styles__ken__inActiveTabStyle';
styles.ken.activeTabStyle = 'styles__ken__activeTabStyle';

styles.ken.tabSet = function(tabs, elements, callback) {
var root5863 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp11162 = mobl.ref(null);


var tmp11161 = mobl.ref(null);

var nodes4656 = $("<span>");
root5863.append(nodes4656);
subs__.addSub((styles.ken.block)(mobl.ref(styles.ken.tabbarStyle), tmp11161, tmp11162, function(_, callback) {
  var root5864 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1451 = mobl.loadingSpan();
  root5864.append(node1451);
  var list296;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList296 = function() {
    var subs__ = listSubs__;
    list296 = tabs.get();
    list296.list(function(results332) {
      node1451.empty();
      for(var i301 = 0; i301 < results332.length; i301++) {
        (function() {
          var iternode296 = $("<span>");
          node1451.append(iternode296);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results332), i301), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results332), i301), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results332), i301), "_3");
          
          var tmp11159 = mobl.ref(activeTabName.get() == tabName.get() ? styles.ken.activeTabButtonStyle : styles.ken.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp11159.set(activeTabName.get() == tabName.get() ? styles.ken.activeTabButtonStyle : styles.ken.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp11159.set(activeTabName.get() == tabName.get() ? styles.ken.activeTabButtonStyle : styles.ken.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(styles.ken.activeTabButtonStyle).addEventListener('change', function() {
            tmp11159.set(activeTabName.get() == tabName.get() ? styles.ken.activeTabButtonStyle : styles.ken.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(styles.ken.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp11159.set(activeTabName.get() == tabName.get() ? styles.ken.activeTabButtonStyle : styles.ken.inActiveTabButtonStyle);
          }));
          
          
          var tmp11158 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp11160 = mobl.ref(null);
          
          var nodes4657 = $("<span>");
          iternode296.append(nodes4657);
          subs__.addSub((styles.ken.span)(tmp11159, tmp11160, tmp11158, function(_, callback) {
            var root5865 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp11157 = mobl.ref(null);
            
            
            var tmp11156 = mobl.ref(null);
            
            var nodes4658 = $("<span>");
            root5865.append(nodes4658);
            subs__.addSub((mobl.label)(tabName, tmp11156, tmp11157, function(_, callback) {
              var root5866 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5866); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4658;
              nodes4658 = node.contents();
              oldNodes.replaceWith(nodes4658);
            }));
            callback(root5865); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4657;
            nodes4657 = node.contents();
            oldNodes.replaceWith(nodes4657);
          }));
          
          var oldNodes = iternode296;
          iternode296 = iternode296.contents();
          oldNodes.replaceWith(iternode296);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list296.addEventListener('change', function() { listSubs__.unsubscribe(); renderList296(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList296(true); }));
    });
  };
  renderList296();
  
  callback(root5864); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4656;
  nodes4656 = node.contents();
  oldNodes.replaceWith(nodes4656);
}));

var node1452 = mobl.loadingSpan();
root5863.append(node1452);
var list297;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList297 = function() {
  var subs__ = listSubs__;
  list297 = tabs.get();
  list297.list(function(results333) {
    node1452.empty();
    for(var i302 = 0; i302 < results333.length; i302++) {
      (function() {
        var iternode297 = $("<span>");
        node1452.append(iternode297);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results333), i302), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results333), i302), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results333), i302), "_3");
        
        var tmp11163 = mobl.ref(activeTabName.get() == tabName.get() ? styles.ken.activeTabStyle : styles.ken.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp11163.set(activeTabName.get() == tabName.get() ? styles.ken.activeTabStyle : styles.ken.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp11163.set(activeTabName.get() == tabName.get() ? styles.ken.activeTabStyle : styles.ken.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(styles.ken.activeTabStyle).addEventListener('change', function() {
          tmp11163.set(activeTabName.get() == tabName.get() ? styles.ken.activeTabStyle : styles.ken.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(styles.ken.inActiveTabStyle).addEventListener('change', function() {
          tmp11163.set(activeTabName.get() == tabName.get() ? styles.ken.activeTabStyle : styles.ken.inActiveTabStyle);
        }));
        
        
        var tmp11165 = mobl.ref(null);
        
        
        var tmp11164 = mobl.ref(null);
        
        var nodes4659 = $("<span>");
        iternode297.append(nodes4659);
        subs__.addSub((styles.ken.block)(tmp11163, tmp11164, tmp11165, function(_, callback) {
          var root5867 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes4660 = $("<span>");
          root5867.append(nodes4660);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root5868 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes4661 = $("<span>");
            root5868.append(nodes4661);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl710();
            }));
            
            function renderControl710() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root5869 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5869); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4661;
                nodes4661 = node.contents();
                oldNodes.replaceWith(nodes4661);
              }));
            }
            renderControl710();
            callback(root5868); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4660;
            nodes4660 = node.contents();
            oldNodes.replaceWith(nodes4660);
          }));
          callback(root5867); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4659;
          nodes4659 = node.contents();
          oldNodes.replaceWith(nodes4659);
        }));
        
        var oldNodes = iternode297;
        iternode297 = iternode297.contents();
        oldNodes.replaceWith(iternode297);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list297.addEventListener('change', function() { listSubs__.unsubscribe(); renderList297(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList297(true); }));
  });
};
renderList297();

callback(root5863); return subs__;


return subs__;
};
styles.ken.searchboxStyle = 'styles__ken__searchboxStyle';
styles.ken.searchBoxInputStyle = 'styles__ken__searchBoxInputStyle';

styles.ken.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root5870 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1453 = $("<div>");

var ref1414 = mobl.ref(styles.ken.searchboxStyle);
if(ref1414.get() !== null) {
  node1453.attr('class', ref1414.get());
  subs__.addSub(ref1414.addEventListener('change', function(_, ref, val) {
    if(ref === ref1414) {
      node1453.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1414.rebind());


var node1454 = $("<input>");
node1454.attr('type', "text");

var ref1411 = mobl.ref(styles.ken.searchBoxInputStyle);
if(ref1411.get() !== null) {
  node1454.attr('class', ref1411.get());
  subs__.addSub(ref1411.addEventListener('change', function(_, ref, val) {
    if(ref === ref1411) {
      node1454.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1411.rebind());

var ref1412 = placeholder;
if(ref1412.get() !== null) {
  node1454.attr('placeholder', ref1412.get());
  subs__.addSub(ref1412.addEventListener('change', function(_, ref, val) {
    if(ref === ref1412) {
      node1454.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1412.rebind());

var ref1413 = s;
node1454.val(""+ref1413.get());
var ignore290 = false;
subs__.addSub(ref1413.addEventListener('change', function(_, ref, val) {
  if(ignore290) return;
  node1454.val(""+val);
}));
subs__.addSub(ref1413.rebind());

subs__.addSub(mobl.domBind(node1454, 'keyup change', function() {
  ignore290 = true;
  s.set(mobl.stringTomobl__String(node1454.val()));
  ignore290 = false;
}));


var val751 = onsearch.get();
if(val751 !== null) {
  subs__.addSub(mobl.domBind(node1454, 'change', val751));
}

var val752 = onkeyup.get();
if(val752 !== null) {
  subs__.addSub(mobl.domBind(node1454, 'keyup', val752));
}
node1454.attr('autocorrect', "off");
node1454.attr('autocapitalize', "off");
node1454.attr('autocomplete', "off");

node1453.append(node1454);
root5870.append(node1453);
callback(root5870); return subs__;


return subs__;
};
styles.ken.contextMenuStyle = 'styles__ken__contextMenuStyle';
styles.ken.buttonStyle = 'styles__ken__buttonStyle';
styles.ken.buttonPushedStyle = 'styles__ken__buttonPushedStyle';

styles.ken.contextMenu = function(elements, callback) {
var root5871 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref1415 = mobl.ref(styles.ken.contextMenuStyle);
if(ref1415.get() !== null) {
  menu.attr('class', ref1415.get());
  subs__.addSub(ref1415.addEventListener('change', function(_, ref, val) {
    if(ref === ref1415) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1415.rebind());

var nodes4662 = $("<span>");
menu.append(nodes4662);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl711();
}));

function renderControl711() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5872 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5872); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4662;
    nodes4662 = node.contents();
    oldNodes.replaceWith(nodes4662);
  }));
}
renderControl711();
root5871.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val753 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp11223 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val753 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val753));
}

root5871.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root5871); return subs__;



return subs__;
};

styles.ken.masterDetail = function(items, masterItem, detail, elements, callback) {
var root5873 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp11215 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp11215.set(mobl.window.get().innerWidth > 500);
}));


var node1455 = $("<span>");
root5873.append(node1455);
var condSubs205 = new mobl.CompSubscription();
subs__.addSub(condSubs205);
var oldValue205;
var renderCond205 = function() {
  var value489 = tmp11215.get();
  if(oldValue205 === value489) return;
  oldValue205 = value489;
  var subs__ = condSubs205;
  subs__.unsubscribe();
  node1455.empty();
  if(value489) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node1456 = $("<div>");
      node1456.attr('width', "100%");
      
      
      var node1457 = $("<div>");
      node1457.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes4664 = $("<span>");
      node1457.append(nodes4664);
      subs__.addSub((styles.ken.group)(function(_, callback) {
        var root5875 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1459 = mobl.loadingSpan();
        root5875.append(node1459);
        var list298;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList298 = function() {
          var subs__ = listSubs__;
          list298 = items.get();
          list298.list(function(results334) {
            node1459.empty();
            for(var i303 = 0; i303 < results334.length; i303++) {
              (function() {
                var iternode298 = $("<span>");
                node1459.append(iternode298);
                var it;
                it = mobl.ref(mobl.ref(results334), i303);
                
                var tmp11179 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp11179.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp11179.set(it.get() == current.get());
                }));
                
                
                var node1460 = $("<span>");
                iternode298.append(node1460);
                var condSubs206 = new mobl.CompSubscription();
                subs__.addSub(condSubs206);
                var oldValue206;
                var renderCond206 = function() {
                  var value490 = tmp11179.get();
                  if(oldValue206 === value490) return;
                  oldValue206 = value490;
                  var subs__ = condSubs206;
                  subs__.unsubscribe();
                  node1460.empty();
                  if(value490) {
                    
                    var tmp11175 = mobl.ref(false);
                    
                    
                    var tmp11174 = mobl.ref(null);
                    
                    
                    var tmp11173 = mobl.ref(null);
                    
                    var nodes4665 = $("<span>");
                    node1460.append(nodes4665);
                    subs__.addSub((styles.ken.item)(mobl.ref(styles.ken.selectedItemStyle), mobl.ref(styles.ken.itemPushedStyle), tmp11173, tmp11174, tmp11175, function(_, callback) {
                      var root5876 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes4666 = $("<span>");
                      root5876.append(nodes4666);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl713();
                      }));
                      
                      function renderControl713() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root5877 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root5877); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4666;
                          nodes4666 = node.contents();
                          oldNodes.replaceWith(nodes4666);
                        }));
                      }
                      renderControl713();
                      callback(root5876); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4665;
                      nodes4665 = node.contents();
                      oldNodes.replaceWith(nodes4665);
                    }));
                    
                    
                  } else {
                    
                    var tmp11177 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp11176 = mobl.ref(true);
                    
                    
                    var tmp11178 = mobl.ref(null);
                    
                    var nodes4667 = $("<span>");
                    node1460.append(nodes4667);
                    subs__.addSub((styles.ken.item)(mobl.ref(styles.ken.itemStyle), mobl.ref(styles.ken.itemPushedStyle), tmp11177, tmp11178, tmp11176, function(_, callback) {
                      var root5878 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes4668 = $("<span>");
                      root5878.append(nodes4668);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl714();
                      }));
                      
                      function renderControl714() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root5879 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root5879); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4668;
                          nodes4668 = node.contents();
                          oldNodes.replaceWith(nodes4668);
                        }));
                      }
                      renderControl714();
                      callback(root5878); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4667;
                      nodes4667 = node.contents();
                      oldNodes.replaceWith(nodes4667);
                    }));
                    
                    
                  }
                };
                renderCond206();
                subs__.addSub(tmp11179.addEventListener('change', function() {
                  renderCond206();
                }));
                
                
                var oldNodes = iternode298;
                iternode298 = iternode298.contents();
                oldNodes.replaceWith(iternode298);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list298.addEventListener('change', function() { listSubs__.unsubscribe(); renderList298(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList298(true); }));
          });
        };
        renderList298();
        
        callback(root5875); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4664;
        nodes4664 = node.contents();
        oldNodes.replaceWith(nodes4664);
      }));
      node1456.append(node1457);
      
      var node1458 = $("<div>");
      node1458.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes4663 = $("<span>");
      node1458.append(nodes4663);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl712();
      }));
      
      function renderControl712() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root5874 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5874); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4663;
          nodes4663 = node.contents();
          oldNodes.replaceWith(nodes4663);
        }));
      }
      renderControl712();
      node1456.append(node1458);
      node1455.append(node1456);
      
      
      
      
      
      
    });
  } else {
    var nodes4669 = $("<span>");
    node1455.append(nodes4669);
    subs__.addSub((styles.ken.group)(function(_, callback) {
      var root5880 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1461 = mobl.loadingSpan();
      root5880.append(node1461);
      var list299;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList299 = function() {
        var subs__ = listSubs__;
        list299 = items.get();
        list299.list(function(results335) {
          node1461.empty();
          for(var i304 = 0; i304 < results335.length; i304++) {
            (function() {
              var iternode299 = $("<span>");
              node1461.append(iternode299);
              var it;
              it = mobl.ref(mobl.ref(results335), i304);
              
              var tmp11166 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('styles.ken.detailScreen', [it, detail], function(result__) {
                                   var tmp11224 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp11168 = mobl.ref(false);
              
              
              var tmp11167 = mobl.ref(null);
              
              var nodes4670 = $("<span>");
              iternode299.append(nodes4670);
              subs__.addSub((styles.ken.item)(mobl.ref(styles.ken.itemStyle), mobl.ref(styles.ken.itemPushedStyle), tmp11166, tmp11167, tmp11168, function(_, callback) {
                var root5881 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4671 = $("<span>");
                root5881.append(nodes4671);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl715();
                }));
                
                function renderControl715() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root5882 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5882); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4671;
                    nodes4671 = node.contents();
                    oldNodes.replaceWith(nodes4671);
                  }));
                }
                renderControl715();
                callback(root5881); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4670;
                nodes4670 = node.contents();
                oldNodes.replaceWith(nodes4670);
              }));
              
              var oldNodes = iternode299;
              iternode299 = iternode299.contents();
              oldNodes.replaceWith(iternode299);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list299.addEventListener('change', function() { listSubs__.unsubscribe(); renderList299(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList299(true); }));
        });
      };
      renderList299();
      
      callback(root5880); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4669;
      nodes4669 = node.contents();
      oldNodes.replaceWith(nodes4669);
    }));
    
    
  }
};
renderCond205();
subs__.addSub(tmp11215.addEventListener('change', function() {
  renderCond205();
}));

callback(root5873); return subs__;

return subs__;
};

styles.ken.detailScreen = function(it, detail, callback, screenCallback) {
var root5883 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp11171 = mobl.ref("Detail");


var tmp11172 = mobl.ref(null);

var nodes4672 = $("<span>");
root5883.append(nodes4672);
subs__.addSub((styles.ken.header)(tmp11171, tmp11172, function(_, callback) {
  var root5884 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11170 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp11169 = mobl.ref("Back");
  
  var nodes4673 = $("<span>");
  root5884.append(nodes4673);
  subs__.addSub((styles.ken.backButton)(tmp11169, mobl.ref(styles.ken.backButtonStyle), mobl.ref(styles.ken.backButtonPushedStyle), tmp11170, function(_, callback) {
    var root5885 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5885); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4673;
    nodes4673 = node.contents();
    oldNodes.replaceWith(nodes4673);
  }));
  callback(root5884); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4672;
  nodes4672 = node.contents();
  oldNodes.replaceWith(nodes4672);
}));
var nodes4674 = $("<span>");
root5883.append(nodes4674);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl716();
}));

function renderControl716() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root5886 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5886); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4674;
    nodes4674 = node.contents();
    oldNodes.replaceWith(nodes4674);
  }));
}
renderControl716();
callback(root5883); return subs__;


return subs__;
};
styles.ken.selectedItemStyle = 'styles__ken__selectedItemStyle';

styles.ken.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root5887 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes4675 = $("<span>");
root5887.append(nodes4675);
subs__.addSub((styles.ken.group)(function(_, callback) {
  var root5888 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1462 = mobl.loadingSpan();
  root5888.append(node1462);
  var list300;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList300 = function() {
    var subs__ = listSubs__;
    list300 = coll.get();
    list300.list(function(results336) {
      node1462.empty();
      for(var i305 = 0; i305 < results336.length; i305++) {
        (function() {
          var iternode300 = $("<span>");
          node1462.append(iternode300);
          var it;
          it = mobl.ref(mobl.ref(results336), i305);
          
          var tmp11186 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp11186.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp11186.set(it.get() == selected.get());
          }));
          
          
          var node1463 = $("<span>");
          iternode300.append(node1463);
          var condSubs207 = new mobl.CompSubscription();
          subs__.addSub(condSubs207);
          var oldValue207;
          var renderCond207 = function() {
            var value491 = tmp11186.get();
            if(oldValue207 === value491) return;
            oldValue207 = value491;
            var subs__ = condSubs207;
            subs__.unsubscribe();
            node1463.empty();
            if(value491) {
              
              var tmp11182 = mobl.ref(false);
              
              
              var tmp11181 = mobl.ref(null);
              
              
              var tmp11180 = mobl.ref(null);
              
              var nodes4676 = $("<span>");
              node1463.append(nodes4676);
              subs__.addSub((styles.ken.item)(mobl.ref(styles.ken.itemStyle), mobl.ref(styles.ken.itemPushedStyle), tmp11180, tmp11181, tmp11182, function(_, callback) {
                var root5889 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4677 = $("<span>");
                root5889.append(nodes4677);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl717();
                }));
                
                function renderControl717() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root5890 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5890); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4677;
                    nodes4677 = node.contents();
                    oldNodes.replaceWith(nodes4677);
                  }));
                }
                renderControl717();
                callback(root5889); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4676;
                nodes4676 = node.contents();
                oldNodes.replaceWith(nodes4676);
              }));
              
              
            } else {
              
              var tmp11184 = mobl.ref(true);
              
              
              var tmp11183 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp11185 = mobl.ref(null);
              
              var nodes4678 = $("<span>");
              node1463.append(nodes4678);
              subs__.addSub((styles.ken.item)(mobl.ref(styles.ken.itemStyle), mobl.ref(styles.ken.itemPushedStyle), tmp11183, tmp11185, tmp11184, function(_, callback) {
                var root5891 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4679 = $("<span>");
                root5891.append(nodes4679);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl718();
                }));
                
                function renderControl718() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root5892 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5892); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4679;
                    nodes4679 = node.contents();
                    oldNodes.replaceWith(nodes4679);
                  }));
                }
                renderControl718();
                callback(root5891); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4678;
                nodes4678 = node.contents();
                oldNodes.replaceWith(nodes4678);
              }));
              
              
            }
          };
          renderCond207();
          subs__.addSub(tmp11186.addEventListener('change', function() {
            renderCond207();
          }));
          
          
          var oldNodes = iternode300;
          iternode300 = iternode300.contents();
          oldNodes.replaceWith(iternode300);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list300.addEventListener('change', function() { listSubs__.unsubscribe(); renderList300(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList300(true); }));
    });
  };
  renderList300();
  
  callback(root5888); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4675;
  nodes4675 = node.contents();
  oldNodes.replaceWith(nodes4675);
}));
callback(root5887); return subs__;

return subs__;
};
styles.ken.loadMoreStyle = 'styles__ken__loadMoreStyle';

styles.ken.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root5893 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes4680 = $("<span>");
  root5893.append(nodes4680);
  subs__.addSub((styles.ken.group)(function(_, callback) {
    var root5894 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11190 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp11190.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp11190.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp11190.set(coll.get().limit(n.get()));
    }));
    
    
    var node1464 = mobl.loadingSpan();
    root5894.append(node1464);
    var list301;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList301 = function() {
      var subs__ = listSubs__;
      list301 = tmp11190.get();
      list301.list(function(results337) {
        node1464.empty();
        for(var i306 = 0; i306 < results337.length; i306++) {
          (function() {
            var iternode301 = $("<span>");
            node1464.append(iternode301);
            var it;
            it = mobl.ref(mobl.ref(results337), i306);
            
            var tmp11187 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp11189 = mobl.ref(false);
            
            
            var tmp11188 = mobl.ref(null);
            
            var nodes4681 = $("<span>");
            iternode301.append(nodes4681);
            subs__.addSub((styles.ken.item)(mobl.ref(styles.ken.itemStyle), mobl.ref(styles.ken.itemPushedStyle), tmp11187, tmp11188, tmp11189, function(_, callback) {
              var root5895 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4682 = $("<span>");
              root5895.append(nodes4682);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl719();
              }));
              
              function renderControl719() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root5896 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5896); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4682;
                  nodes4682 = node.contents();
                  oldNodes.replaceWith(nodes4682);
                }));
              }
              renderControl719();
              callback(root5895); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4681;
              nodes4681 = node.contents();
              oldNodes.replaceWith(nodes4681);
            }));
            
            var oldNodes = iternode301;
            iternode301 = iternode301.contents();
            oldNodes.replaceWith(iternode301);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list301.addEventListener('change', function() { listSubs__.unsubscribe(); renderList301(true); }));
        subs__.addSub(tmp11190.addEventListener('change', function() { listSubs__.unsubscribe(); renderList301(true); }));
      });
    };
    renderList301();
    
    
    var tmp11191 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp11191.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp11191.set(n.get() < total.get());
    }));
    
    
    var node1465 = $("<span>");
    root5894.append(node1465);
    var condSubs208 = new mobl.CompSubscription();
    subs__.addSub(condSubs208);
    var oldValue208;
    var renderCond208 = function() {
      var value492 = tmp11191.get();
      if(oldValue208 === value492) return;
      oldValue208 = value492;
      var subs__ = condSubs208;
      subs__.unsubscribe();
      node1465.empty();
      if(value492) {
        
        var node1466 = $("<li>");
        
        var ref1416 = mobl.ref(styles.ken.loadMoreStyle);
        if(ref1416.get() !== null) {
          node1466.attr('class', ref1416.get());
          subs__.addSub(ref1416.addEventListener('change', function(_, ref, val) {
            if(ref === ref1416) {
              node1466.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref1416.rebind());
        
        var val754 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val754 !== null) {
          subs__.addSub(mobl.domBind(node1466, 'tap', val754));
        }
        
        
        node1466.append("More");
        node1465.append(node1466);
        
        
      } else {
        
      }
    };
    renderCond208();
    subs__.addSub(tmp11191.addEventListener('change', function() {
      renderCond208();
    }));
    
    callback(root5894); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4680;
    nodes4680 = node.contents();
    oldNodes.replaceWith(nodes4680);
  }));
  callback(root5893); return subs__;
  
});
return subs__;
};

styles.ken.markableList = function(items, elements, callback) {
var root5897 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes4683 = $("<span>");
root5897.append(nodes4683);
subs__.addSub((styles.ken.group)(function(_, callback) {
  var root5898 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1467 = mobl.loadingSpan();
  root5898.append(node1467);
  var list302;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList302 = function() {
    var subs__ = listSubs__;
    list302 = items.get();
    list302.list(function(results338) {
      node1467.empty();
      for(var i307 = 0; i307 < results338.length; i307++) {
        (function() {
          var iternode302 = $("<span>");
          node1467.append(iternode302);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results338), i307), "_1");it = mobl.ref(mobl.ref(mobl.ref(results338), i307), "_2");
          
          var tmp11195 = mobl.ref(false);
          
          
          var tmp11194 = mobl.ref(null);
          
          
          var tmp11193 = mobl.ref(null);
          
          var nodes4684 = $("<span>");
          iternode302.append(nodes4684);
          subs__.addSub((styles.ken.item)(mobl.ref(styles.ken.itemStyle), mobl.ref(styles.ken.itemPushedStyle), tmp11193, tmp11194, tmp11195, function(_, callback) {
            var root5899 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp11192 = mobl.ref(null);
            
            var nodes4685 = $("<span>");
            root5899.append(nodes4685);
            subs__.addSub((styles.ken.checkBox)(checked, it, tmp11192, function(_, callback) {
              var root5900 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5900); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4685;
              nodes4685 = node.contents();
              oldNodes.replaceWith(nodes4685);
            }));
            callback(root5899); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4684;
            nodes4684 = node.contents();
            oldNodes.replaceWith(nodes4684);
          }));
          
          var oldNodes = iternode302;
          iternode302 = iternode302.contents();
          oldNodes.replaceWith(iternode302);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list302.addEventListener('change', function() { listSubs__.unsubscribe(); renderList302(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList302(true); }));
    });
  };
  renderList302();
  
  callback(root5898); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4683;
  nodes4683 = node.contents();
  oldNodes.replaceWith(nodes4683);
}));
callback(root5897); return subs__;

return subs__;
};

styles.ken.selectList = function(title, coll, callback, screenCallback) {
var root5901 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll958) {
  coll958 = coll958.reverse();
  function processOne185() {
    var it;
    it = coll958.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll958.length > 0) processOne185(); else rest185();
    
  }
  function rest185() {
    
    var tmp11200 = mobl.ref(null);
    
    var nodes4686 = $("<span>");
    root5901.append(nodes4686);
    subs__.addSub((styles.ken.header)(title, tmp11200, function(_, callback) {
      var root5902 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11196 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp11197 = mobl.ref("Back");
      
      var nodes4687 = $("<span>");
      root5902.append(nodes4687);
      subs__.addSub((styles.ken.backButton)(tmp11197, mobl.ref(styles.ken.backButtonStyle), mobl.ref(styles.ken.backButtonPushedStyle), tmp11196, function(_, callback) {
        var root5903 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5903); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4687;
        nodes4687 = node.contents();
        oldNodes.replaceWith(nodes4687);
      }));
      
      var tmp11199 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll957) {
                             coll957 = coll957.reverse();
                             function processOne184() {
                               var checked;var it;
                               var tmp11226 = coll957.pop();
                               checked = tmp11226._1;it = tmp11226._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll957.length > 0) processOne184(); else rest184();
                                 
                               } else {
                                 {
                                   
                                   if(coll957.length > 0) processOne184(); else rest184();
                                   
                                 }
                               }
                             }
                             function rest184() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll957.length > 0) processOne184(); else rest184();
                           });
                           
                         });
      
      
      var tmp11198 = mobl.ref("Done");
      
      var nodes4688 = $("<span>");
      root5902.append(nodes4688);
      subs__.addSub((styles.ken.button)(tmp11198, mobl.ref(styles.ken.buttonStyle), mobl.ref(styles.ken.buttonPushedStyle), tmp11199, function(_, callback) {
        var root5904 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5904); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4688;
        nodes4688 = node.contents();
        oldNodes.replaceWith(nodes4688);
      }));
      callback(root5902); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4686;
      nodes4686 = node.contents();
      oldNodes.replaceWith(nodes4686);
    }));
    var nodes4689 = $("<span>");
    root5901.append(nodes4689);
    subs__.addSub((styles.ken.markableList)(items, function(_, callback) {
      var root5905 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5905); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4689;
      nodes4689 = node.contents();
      oldNodes.replaceWith(nodes4689);
    }));
    callback(root5901); return subs__;
    
    
  }
  if(coll958.length > 0) processOne185(); else rest185();
});

return subs__;
};

styles.ken.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root5906 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp11201 = mobl.ref("Search term");


var tmp11203 = mobl.ref(null);


var tmp11202 = mobl.ref(null);

var nodes4690 = $("<span>");
root5906.append(nodes4690);
subs__.addSub((styles.ken.searchBox)(phrase, tmp11201, tmp11202, tmp11203, function(_, callback) {
  var root5907 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5907); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4690;
  nodes4690 = node.contents();
  oldNodes.replaceWith(nodes4690);
}));

var tmp11204 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp11204.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp11204.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp11204.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp11204.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp11204.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes4691 = $("<span>");
root5906.append(nodes4691);
subs__.addSub((styles.ken.masterDetail)(tmp11204, masterItem, detailItem, function(_, callback) {
  var root5908 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root5908); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes4691;
  nodes4691 = node.contents();
  oldNodes.replaceWith(nodes4691);
}));
callback(root5906); return subs__;


return subs__;
};
styles.ken.progressStyle = 'styles__ken__progressStyle';
styles.ken.startLoading = function() {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + styles.ken.progressStyle + "'>Loading...</div>");
  
  mobl.$("body").prepend(loading);
};

styles.ken.endLoading = function() {
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
}(styles.ken));styles.ken.accordionStyle = 'styles__ken__accordionStyle';
styles.ken.activeSectionHeaderStyle = 'styles__ken__activeSectionHeaderStyle';
styles.ken.inActiveSectionHeaderStyle = 'styles__ken__inActiveSectionHeaderStyle';
styles.ken.activeSectionHeaderStyle = 'styles__ken__activeSectionHeaderStyle';
styles.ken.inActiveSectionHeaderStyle = 'styles__ken__inActiveSectionHeaderStyle';
styles.ken.inActiveSectionStyle = 'styles__ken__inActiveSectionStyle';
styles.ken.activeSectionStyle = 'styles__ken__activeSectionStyle';

styles.ken.accordion = function(sections, elements, callback) {
var root5909 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp11214 = mobl.ref(null);


var tmp11213 = mobl.ref(null);

var nodes4692 = $("<span>");
root5909.append(nodes4692);
subs__.addSub((styles.ken.block)(mobl.ref(styles.ken.accordionStyle), tmp11213, tmp11214, function(_, callback) {
  var root5910 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1468 = mobl.loadingSpan();
  root5910.append(node1468);
  var list303;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList303 = function() {
    var subs__ = listSubs__;
    list303 = sections.get();
    list303.list(function(results339) {
      node1468.empty();
      for(var i308 = 0; i308 < results339.length; i308++) {
        (function() {
          var iternode303 = $("<span>");
          node1468.append(iternode303);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results339), i308), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results339), i308), "_2");
          
          var tmp11208 = mobl.ref(activeSection.get() == sectionName.get() ? styles.ken.activeSectionHeaderStyle : styles.ken.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp11208.set(activeSection.get() == sectionName.get() ? styles.ken.activeSectionHeaderStyle : styles.ken.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp11208.set(activeSection.get() == sectionName.get() ? styles.ken.activeSectionHeaderStyle : styles.ken.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(styles.ken.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp11208.set(activeSection.get() == sectionName.get() ? styles.ken.activeSectionHeaderStyle : styles.ken.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(styles.ken.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp11208.set(activeSection.get() == sectionName.get() ? styles.ken.activeSectionHeaderStyle : styles.ken.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp11207 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp11209 = mobl.ref(null);
          
          var nodes4693 = $("<span>");
          iternode303.append(nodes4693);
          subs__.addSub((styles.ken.span)(tmp11208, tmp11209, tmp11207, function(_, callback) {
            var root5911 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp11206 = mobl.ref(null);
            
            
            var tmp11205 = mobl.ref(null);
            
            var nodes4694 = $("<span>");
            root5911.append(nodes4694);
            subs__.addSub((mobl.label)(sectionName, tmp11205, tmp11206, function(_, callback) {
              var root5912 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5912); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4694;
              nodes4694 = node.contents();
              oldNodes.replaceWith(nodes4694);
            }));
            callback(root5911); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4693;
            nodes4693 = node.contents();
            oldNodes.replaceWith(nodes4693);
          }));
          
          var tmp11210 = mobl.ref(activeSection.get() == sectionName.get() ? styles.ken.activeSectionStyle : styles.ken.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp11210.set(activeSection.get() == sectionName.get() ? styles.ken.activeSectionStyle : styles.ken.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp11210.set(activeSection.get() == sectionName.get() ? styles.ken.activeSectionStyle : styles.ken.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(styles.ken.activeSectionStyle).addEventListener('change', function() {
            tmp11210.set(activeSection.get() == sectionName.get() ? styles.ken.activeSectionStyle : styles.ken.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(styles.ken.inActiveSectionStyle).addEventListener('change', function() {
            tmp11210.set(activeSection.get() == sectionName.get() ? styles.ken.activeSectionStyle : styles.ken.inActiveSectionStyle);
          }));
          
          
          var tmp11212 = mobl.ref(null);
          
          
          var tmp11211 = mobl.ref(null);
          
          var nodes4695 = $("<span>");
          iternode303.append(nodes4695);
          subs__.addSub((styles.ken.block)(tmp11210, tmp11211, tmp11212, function(_, callback) {
            var root5913 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes4696 = $("<span>");
            root5913.append(nodes4696);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl720();
            }));
            
            function renderControl720() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root5914 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5914); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4696;
                nodes4696 = node.contents();
                oldNodes.replaceWith(nodes4696);
              }));
            }
            renderControl720();
            callback(root5913); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4695;
            nodes4695 = node.contents();
            oldNodes.replaceWith(nodes4695);
          }));
          
          var oldNodes = iternode303;
          iternode303 = iternode303.contents();
          oldNodes.replaceWith(iternode303);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list303.addEventListener('change', function() { listSubs__.unsubscribe(); renderList303(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList303(true); }));
    });
  };
  renderList303();
  
  callback(root5910); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes4692;
  nodes4692 = node.contents();
  oldNodes.replaceWith(nodes4692);
}));
callback(root5909); return subs__;

return subs__;
};
styles.ken.tableStyle = 'styles__ken__tableStyle';
styles.ken.tdStyle = 'styles__ken__tdStyle';
styles.ken.trStyle = 'styles__ken__trStyle';
styles.ken.trStyle = 'styles__ken__trStyle';
styles.ken.trStyle = 'styles__ken__trStyle';
styles.ken.tdStyle = 'styles__ken__tdStyle';
styles.ken.tdStyle = 'styles__ken__tdStyle';
styles.ken.tdStyle = 'styles__ken__tdStyle';
styles.ken.tdStyle = 'styles__ken__tdStyle';
styles.ken.tdStyle = 'styles__ken__tdStyle';
styles.ken.tdStyle = 'styles__ken__tdStyle';

styles.ken.table = function(elements, callback) {
var root5915 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1469 = $("<table>");

var ref1417 = mobl.ref(styles.ken.tableStyle);
if(ref1417.get() !== null) {
  node1469.attr('class', ref1417.get());
  subs__.addSub(ref1417.addEventListener('change', function(_, ref, val) {
    if(ref === ref1417) {
      node1469.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1417.rebind());

var nodes4697 = $("<span>");
node1469.append(nodes4697);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl721();
}));

function renderControl721() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5916 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5916); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4697;
    nodes4697 = node.contents();
    oldNodes.replaceWith(nodes4697);
  }));
}
renderControl721();
root5915.append(node1469);
callback(root5915); return subs__;


return subs__;
};

styles.ken.row = function(elements, callback) {
var root5917 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1470 = $("<tr>");

var ref1418 = mobl.ref(styles.ken.trStyle);
if(ref1418.get() !== null) {
  node1470.attr('class', ref1418.get());
  subs__.addSub(ref1418.addEventListener('change', function(_, ref, val) {
    if(ref === ref1418) {
      node1470.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1418.rebind());

var nodes4698 = $("<span>");
node1470.append(nodes4698);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl722();
}));

function renderControl722() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5918 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5918); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4698;
    nodes4698 = node.contents();
    oldNodes.replaceWith(nodes4698);
  }));
}
renderControl722();
root5917.append(node1470);
callback(root5917); return subs__;


return subs__;
};

styles.ken.cell = function(width, elements, callback) {
var root5919 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1471 = $("<td>");

var ref1419 = width;
if(ref1419.get() !== null) {
  node1471.attr('width', ref1419.get());
  subs__.addSub(ref1419.addEventListener('change', function(_, ref, val) {
    if(ref === ref1419) {
      node1471.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1419.rebind());

var ref1420 = mobl.ref(styles.ken.tdStyle);
if(ref1420.get() !== null) {
  node1471.attr('class', ref1420.get());
  subs__.addSub(ref1420.addEventListener('change', function(_, ref, val) {
    if(ref === ref1420) {
      node1471.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1420.rebind());

var nodes4699 = $("<span>");
node1471.append(nodes4699);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl723();
}));

function renderControl723() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5920 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5920); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4699;
    nodes4699 = node.contents();
    oldNodes.replaceWith(nodes4699);
  }));
}
renderControl723();
root5919.append(node1471);
callback(root5919); return subs__;


return subs__;
};

styles.ken.col = function(width, elements, callback) {
var root5921 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1472 = $("<td>");

var ref1421 = width;
if(ref1421.get() !== null) {
  node1472.attr('width', ref1421.get());
  subs__.addSub(ref1421.addEventListener('change', function(_, ref, val) {
    if(ref === ref1421) {
      node1472.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1421.rebind());

var ref1422 = mobl.ref(styles.ken.tdStyle);
if(ref1422.get() !== null) {
  node1472.attr('class', ref1422.get());
  subs__.addSub(ref1422.addEventListener('change', function(_, ref, val) {
    if(ref === ref1422) {
      node1472.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1422.rebind());

var nodes4700 = $("<span>");
node1472.append(nodes4700);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl724();
}));

function renderControl724() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5922 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5922); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4700;
    nodes4700 = node.contents();
    oldNodes.replaceWith(nodes4700);
  }));
}
renderControl724();
root5921.append(node1472);
callback(root5921); return subs__;


return subs__;
};

styles.ken.headerCol = function(width, elements, callback) {
var root5923 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1473 = $("<td>");

var ref1423 = width;
if(ref1423.get() !== null) {
  node1473.attr('width', ref1423.get());
  subs__.addSub(ref1423.addEventListener('change', function(_, ref, val) {
    if(ref === ref1423) {
      node1473.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1423.rebind());

var ref1424 = mobl.ref(styles.ken.tdStyle);
if(ref1424.get() !== null) {
  node1473.attr('class', ref1424.get());
  subs__.addSub(ref1424.addEventListener('change', function(_, ref, val) {
    if(ref === ref1424) {
      node1473.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref1424.rebind());


var node1474 = $("<strong>");

var nodes4701 = $("<span>");
node1474.append(nodes4701);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl725();
}));

function renderControl725() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5924 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5924); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4701;
    nodes4701 = node.contents();
    oldNodes.replaceWith(nodes4701);
  }));
}
renderControl725();
node1473.append(node1474);
root5923.append(node1473);
callback(root5923); return subs__;



return subs__;
};

styles.ken.scroller = function(height, elements, callback) {
var root5925 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node1475 = $("<div>");
node1475.attr('class', "scroller");

var nodes4702 = $("<span>");
node1475.append(nodes4702);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl726();
}));

function renderControl726() {
  subs__.addSub((elements)(function(elements, callback) {
    var root5926 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5926); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4702;
    nodes4702 = node.contents();
    oldNodes.replaceWith(nodes4702);
  }));
}
renderControl726();
root5925.append(node1475);
var result__ = styles.ken.setupScrollers();
callback(root5925); return subs__;


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
}(styles.ken));