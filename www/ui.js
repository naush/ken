mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
  var root13357 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7619 = $("<span>");
  root13357.append(node7619);
  var condSubs847 = new mobl.CompSubscription();
  subs__.addSub(condSubs847);
  var oldValue847;
  var renderCond847 = function() {
    var value5551 = value.get();
    if(oldValue847 === value5551) return;
    oldValue847 = value5551;
    var subs__ = condSubs847;
    subs__.unsubscribe();
    node7619.empty();
    if(value5551) {
      var nodes10001 = $("<span>");
      node7619.append(nodes10001);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1654();
      }));
      
      function renderControl1654() {
        subs__.addSub((elements)(function(elements, callback) {
          var root13358 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13358); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10001;
          nodes10001 = node.contents();
          oldNodes.replaceWith(nodes10001);
        }));
      }
      renderControl1654();
      
      
    } else {
      
      var tmp20240 = mobl.ref(null);
      
      
      var tmp20239 = mobl.ref(null);
      
      var nodes10002 = $("<span>");
      node7619.append(nodes10002);
      subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp20239, tmp20240, function(_, callback) {
        var root13359 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root13359.append("Loading...");
        
        var tmp20233 = mobl.ref("middle");
        
        
        var tmp20232 = mobl.ref("mobl/ui/generic/loading-large.gif");
        
        
        var tmp20238 = mobl.ref(null);
        
        
        var tmp20237 = mobl.ref(null);
        
        
        var tmp20236 = mobl.ref(null);
        
        
        var tmp20235 = mobl.ref(null);
        
        
        var tmp20234 = mobl.ref(null);
        
        var nodes10003 = $("<span>");
        root13359.append(nodes10003);
        subs__.addSub((ui.image)(tmp20232, tmp20234, tmp20235, tmp20236, tmp20237, tmp20233, tmp20238, function(_, callback) {
          var root13360 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13360); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10003;
          nodes10003 = node.contents();
          oldNodes.replaceWith(nodes10003);
        }));
        callback(root13359); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10002;
        nodes10002 = node.contents();
        oldNodes.replaceWith(nodes10002);
      }));
      
      
    }
  };
  renderCond847();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond847();
  }));
  
  callback(root13357); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root13361 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7620 = $("<div>");
  
  var ref6104 = mobl.ref(ui.headerStyle);
  if(ref6104.get() !== null) {
    node7620.attr('class', ref6104.get());
    subs__.addSub(ref6104.addEventListener('change', function(_, ref, val) {
      if(ref === ref6104) {
        node7620.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6104.rebind());
  
  var val2083 = onclick.get();
  if(val2083 !== null) {
    subs__.addSub(mobl.domBind(node7620, 'tap', val2083));
  }
  
  
  var node7621 = $("<div>");
  
  var ref6103 = mobl.ref(ui.headerContainerStyle);
  if(ref6103.get() !== null) {
    node7621.attr('class', ref6103.get());
    subs__.addSub(ref6103.addEventListener('change', function(_, ref, val) {
      if(ref === ref6103) {
        node7621.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6103.rebind());
  
  
  var node7622 = $("<div>");
  
  var ref6101 = text;
  node7622.text(""+ref6101.get());
  var ignore1324 = false;
  subs__.addSub(ref6101.addEventListener('change', function(_, ref, val) {
    if(ignore1324) return;
    node7622.text(""+val);
  }));
  subs__.addSub(ref6101.rebind());
  
  
  var ref6102 = mobl.ref(ui.headerTextStyle);
  if(ref6102.get() !== null) {
    node7622.attr('class', ref6102.get());
    subs__.addSub(ref6102.addEventListener('change', function(_, ref, val) {
      if(ref === ref6102) {
        node7622.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6102.rebind());
  
  node7621.append(node7622);
  node7620.append(node7621);
  var nodes10004 = $("<span>");
  node7620.append(nodes10004);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1655();
  }));
  
  function renderControl1655() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13362); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10004;
      nodes10004 = node.contents();
      oldNodes.replaceWith(nodes10004);
    }));
  }
  renderControl1655();
  root13361.append(node7620);
  callback(root13361); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root13363 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  
  var sp = $("<span>");
  
  var ref6105 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref6105.get() !== null) {
    sp.attr('class', ref6105.get());
    subs__.addSub(ref6105.addEventListener('change', function(_, ref, val) {
      if(ref === ref6105) {
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
  subs__.addSub(ref6105.rebind());
  
  var val2084 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val2084 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val2084));
  }
  
  var val2085 = function(event, callback) {
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
  if(val2085 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val2085));
  }
  
  var val2086 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after574(result__) {
                    var tmp20301 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after574);if(result__ !== undefined) after574(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val2086 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val2086));
  }
  
  var val2087 = function(event, callback) {
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
  if(val2087 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val2087));
  }
  
  var ref6106 = text;
  sp.text(""+ref6106.get());
  var ignore1325 = false;
  subs__.addSub(ref6106.addEventListener('change', function(_, ref, val) {
    if(ignore1325) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref6106.rebind());
  
  
  root13363.append(sp);
  callback(root13363); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root13364 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10005 = $("<span>");
  root13364.append(nodes10005);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root13365 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13365); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10005;
    nodes10005 = node.contents();
    oldNodes.replaceWith(nodes10005);
  }));
  callback(root13364); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root13366 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10006 = $("<span>");
  root13366.append(nodes10006);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root13367 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13367); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10006;
    nodes10006 = node.contents();
    oldNodes.replaceWith(nodes10006);
  }));
  callback(root13366); return subs__;
  
  return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
  var root13368 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7623 = $("<div>");
  
  var ref6107 = id;
  if(ref6107.get() !== null) {
    node7623.attr('id', ref6107.get());
    subs__.addSub(ref6107.addEventListener('change', function(_, ref, val) {
      if(ref === ref6107) {
        node7623.attr('id', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6107.rebind());
  
  var ref6108 = cssClass;
  if(ref6108.get() !== null) {
    node7623.attr('class', ref6108.get());
    subs__.addSub(ref6108.addEventListener('change', function(_, ref, val) {
      if(ref === ref6108) {
        node7623.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6108.rebind());
  
  var val2088 = onclick.get();
  if(val2088 !== null) {
    subs__.addSub(mobl.domBind(node7623, 'tap', val2088));
  }
  
  var nodes10007 = $("<span>");
  node7623.append(nodes10007);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1656();
  }));
  
  function renderControl1656() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13369 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13369); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10007;
      nodes10007 = node.contents();
      oldNodes.replaceWith(nodes10007);
    }));
  }
  renderControl1656();
  root13368.append(node7623);
  callback(root13368); return subs__;
  
  
  return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
  var root13370 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7624 = $("<span>");
  
  var ref6109 = id;
  if(ref6109.get() !== null) {
    node7624.attr('id', ref6109.get());
    subs__.addSub(ref6109.addEventListener('change', function(_, ref, val) {
      if(ref === ref6109) {
        node7624.attr('id', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6109.rebind());
  
  var ref6110 = cssClass;
  if(ref6110.get() !== null) {
    node7624.attr('class', ref6110.get());
    subs__.addSub(ref6110.addEventListener('change', function(_, ref, val) {
      if(ref === ref6110) {
        node7624.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6110.rebind());
  
  var val2089 = onclick.get();
  if(val2089 !== null) {
    subs__.addSub(mobl.domBind(node7624, 'tap', val2089));
  }
  
  var nodes10008 = $("<span>");
  node7624.append(nodes10008);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1657();
  }));
  
  function renderControl1657() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13371 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13371); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10008;
      nodes10008 = node.contents();
      oldNodes.replaceWith(nodes10008);
    }));
  }
  renderControl1657();
  root13370.append(node7624);
  callback(root13370); return subs__;
  
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root13372 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7625 = $("<ul>");
  
  var ref6111 = mobl.ref(ui.groupStyle);
  if(ref6111.get() !== null) {
    node7625.attr('class', ref6111.get());
    subs__.addSub(ref6111.addEventListener('change', function(_, ref, val) {
      if(ref === ref6111) {
        node7625.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6111.rebind());
  
  var nodes10009 = $("<span>");
  node7625.append(nodes10009);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1658();
  }));
  
  function renderControl1658() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13373 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13373); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10009;
      nodes10009 = node.contents();
      oldNodes.replaceWith(nodes10009);
    }));
  }
  renderControl1658();
  root13372.append(node7625);
  callback(root13372); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root13374 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7626 = $("<img>");
  
  var ref6112 = url;
  if(ref6112.get() !== null) {
    node7626.attr('src', ref6112.get());
    subs__.addSub(ref6112.addEventListener('change', function(_, ref, val) {
      if(ref === ref6112) {
        node7626.attr('src', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6112.rebind());
  
  var ref6113 = width;
  if(ref6113.get() !== null) {
    node7626.attr('width', ref6113.get());
    subs__.addSub(ref6113.addEventListener('change', function(_, ref, val) {
      if(ref === ref6113) {
        node7626.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6113.rebind());
  
  var ref6114 = height;
  if(ref6114.get() !== null) {
    node7626.attr('height', ref6114.get());
    subs__.addSub(ref6114.addEventListener('change', function(_, ref, val) {
      if(ref === ref6114) {
        node7626.attr('height', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6114.rebind());
  
  var ref6115 = style;
  if(ref6115.get() !== null) {
    node7626.attr('class', ref6115.get());
    subs__.addSub(ref6115.addEventListener('change', function(_, ref, val) {
      if(ref === ref6115) {
        node7626.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6115.rebind());
  
  var val2090 = onclick.get();
  if(val2090 !== null) {
    subs__.addSub(mobl.domBind(node7626, 'tap', val2090));
  }
  
  var ref6116 = valign;
  if(ref6116.get() !== null) {
    node7626.attr('valign', ref6116.get());
    subs__.addSub(ref6116.addEventListener('change', function(_, ref, val) {
      if(ref === ref6116) {
        node7626.attr('valign', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6116.rebind());
  
  var ref6117 = align;
  if(ref6117.get() !== null) {
    node7626.attr('align', ref6117.get());
    subs__.addSub(ref6117.addEventListener('change', function(_, ref, val) {
      if(ref === ref6117) {
        node7626.attr('align', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6117.rebind());
  
  root13374.append(node7626);
  callback(root13374); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root13375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  
  var el = $("<li>");
  
  var ref6118 = mobl.ref(ui.itemStyle);
  if(ref6118.get() !== null) {
    el.attr('class', ref6118.get());
    subs__.addSub(ref6118.addEventListener('change', function(_, ref, val) {
      if(ref === ref6118) {
        el.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6118.rebind());
  
  var ref6119 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref6119.get() !== null) {
    el.attr('class', ref6119.get());
    subs__.addSub(ref6119.addEventListener('change', function(_, ref, val) {
      if(ref === ref6119) {
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
  subs__.addSub(ref6119.rebind());
  
  var val2091 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp20302 = result__;
                                           function after575(result__) {
                                             var tmp20303 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after575);if(result__ !== undefined) after575(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp20304 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val2091 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val2091));
  }
  
  var nodes10010 = $("<span>");
  el.append(nodes10010);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1659();
  }));
  
  function renderControl1659() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13376 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13376); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10010;
      nodes10010 = node.contents();
      oldNodes.replaceWith(nodes10010);
    }));
  }
  renderControl1659();
  root13375.append(el);
  callback(root13375); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root13377 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7627 = $("<input>");
  node7627.attr('type', "checkbox");
  
  var ref6121 = b;
  node7627.attr('checked', !!ref6121.get());
  subs__.addSub(ref6121.addEventListener('change', function(_, ref, val) {
    if(ref === ref6121) node7627.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node7627, 'change', function() {
    b.set(!!node7627.attr('checked'));
  }));
  
  var val2093 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val2093 !== null) {
    subs__.addSub(mobl.domBind(node7627, 'tap', val2093));
  }
  
  var val2094 = onchange.get();
  if(val2094 !== null) {
    subs__.addSub(mobl.domBind(node7627, 'change', val2094));
  }
  
  root13377.append(node7627);
  
  root13377.append(" ");
  
  var node7628 = $("<span>");
  
  var ref6120 = label;
  node7628.text(""+ref6120.get());
  var ignore1326 = false;
  subs__.addSub(ref6120.addEventListener('change', function(_, ref, val) {
    if(ignore1326) return;
    node7628.text(""+val);
  }));
  subs__.addSub(ref6120.rebind());
  
  
  var val2092 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after576(result__) {
                    var tmp20305 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after576);if(result__ !== undefined) after576(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val2092 !== null) {
    subs__.addSub(mobl.domBind(node7628, 'tap', val2092));
  }
  
  root13377.append(node7628);
  callback(root13377); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
  var root13378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7629 = $("<span>");
  root13378.append(node7629);
  var condSubs848 = new mobl.CompSubscription();
  subs__.addSub(condSubs848);
  var oldValue848;
  var renderCond848 = function() {
    var value5552 = label.get();
    if(oldValue848 === value5552) return;
    oldValue848 = value5552;
    var subs__ = condSubs848;
    subs__.unsubscribe();
    node7629.empty();
    if(value5552) {
      
      var node7630 = $("<span>");
      node7630.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref6125 = label;
      node7630.text(""+ref6125.get());
      var ignore1328 = false;
      subs__.addSub(ref6125.addEventListener('change', function(_, ref, val) {
        if(ignore1328) return;
        node7630.text(""+val);
      }));
      subs__.addSub(ref6125.rebind());
      
      
      node7629.append(node7630);
      
      var node7631 = $("<span>");
      node7631.attr('style', "float: left");
      
      
      var node7632 = $("<input>");
      node7632.attr('type', "text");
      
      var ref6122 = mobl.ref(ui.textFieldStyle);
      if(ref6122.get() !== null) {
        node7632.attr('class', ref6122.get());
        subs__.addSub(ref6122.addEventListener('change', function(_, ref, val) {
          if(ref === ref6122) {
            node7632.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref6122.rebind());
      
      var ref6123 = placeholder;
      if(ref6123.get() !== null) {
        node7632.attr('placeholder', ref6123.get());
        subs__.addSub(ref6123.addEventListener('change', function(_, ref, val) {
          if(ref === ref6123) {
            node7632.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref6123.rebind());
      
      var ref6124 = s;
      node7632.val(""+ref6124.get());
      var ignore1327 = false;
      subs__.addSub(ref6124.addEventListener('change', function(_, ref, val) {
        if(ignore1327) return;
        node7632.val(""+val);
      }));
      subs__.addSub(ref6124.rebind());
      
      subs__.addSub(mobl.domBind(node7632, 'keyup', function() {
        ignore1327 = true;
        s.set(mobl.stringTomobl__String(node7632.val()));
        ignore1327 = false;
      }));
      
      
      var val2095 = onchange.get();
      if(val2095 !== null) {
        subs__.addSub(mobl.domBind(node7632, 'change', val2095));
      }
      
      var val2096 = onkeyup.get();
      if(val2096 !== null) {
        subs__.addSub(mobl.domBind(node7632, 'keyup', val2096));
      }
      
      var val2097 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val2097 !== null) {
        subs__.addSub(mobl.domBind(node7632, 'blur', val2097));
      }
      
      node7631.append(node7632);
      node7629.append(node7631);
      
      
      
      
    } else {
      
      var node7633 = $("<input>");
      node7633.attr('type', "text");
      
      var ref6126 = mobl.ref(ui.textFieldStyle);
      if(ref6126.get() !== null) {
        node7633.attr('class', ref6126.get());
        subs__.addSub(ref6126.addEventListener('change', function(_, ref, val) {
          if(ref === ref6126) {
            node7633.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref6126.rebind());
      
      var ref6127 = placeholder;
      if(ref6127.get() !== null) {
        node7633.attr('placeholder', ref6127.get());
        subs__.addSub(ref6127.addEventListener('change', function(_, ref, val) {
          if(ref === ref6127) {
            node7633.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref6127.rebind());
      
      var ref6128 = s;
      node7633.val(""+ref6128.get());
      var ignore1329 = false;
      subs__.addSub(ref6128.addEventListener('change', function(_, ref, val) {
        if(ignore1329) return;
        node7633.val(""+val);
      }));
      subs__.addSub(ref6128.rebind());
      
      subs__.addSub(mobl.domBind(node7633, 'keyup', function() {
        ignore1329 = true;
        s.set(mobl.stringTomobl__String(node7633.val()));
        ignore1329 = false;
      }));
      
      
      var val2098 = onchange.get();
      if(val2098 !== null) {
        subs__.addSub(mobl.domBind(node7633, 'change', val2098));
      }
      
      var val2099 = onkeyup.get();
      if(val2099 !== null) {
        subs__.addSub(mobl.domBind(node7633, 'keyup', val2099));
      }
      
      var val2100 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val2100 !== null) {
        subs__.addSub(mobl.domBind(node7633, 'blur', val2100));
      }
      
      node7629.append(node7633);
      
      
    }
  };
  renderCond848();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond848();
  }));
  
  callback(root13378); return subs__;
  
  return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
  var root13379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7634 = $("<span>");
  root13379.append(node7634);
  var condSubs849 = new mobl.CompSubscription();
  subs__.addSub(condSubs849);
  var oldValue849;
  var renderCond849 = function() {
    var value5553 = label.get();
    if(oldValue849 === value5553) return;
    oldValue849 = value5553;
    var subs__ = condSubs849;
    subs__.unsubscribe();
    node7634.empty();
    if(value5553) {
      
      var node7635 = $("<span>");
      node7635.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref6132 = label;
      node7635.text(""+ref6132.get());
      var ignore1331 = false;
      subs__.addSub(ref6132.addEventListener('change', function(_, ref, val) {
        if(ignore1331) return;
        node7635.text(""+val);
      }));
      subs__.addSub(ref6132.rebind());
      
      
      node7634.append(node7635);
      
      var node7636 = $("<span>");
      node7636.attr('style', "float: left");
      
      
      var node7637 = $("<input>");
      node7637.attr('type', "text");
      
      var ref6129 = mobl.ref(ui.textFieldStyle);
      if(ref6129.get() !== null) {
        node7637.attr('class', ref6129.get());
        subs__.addSub(ref6129.addEventListener('change', function(_, ref, val) {
          if(ref === ref6129) {
            node7637.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref6129.rebind());
      
      var ref6130 = placeholder;
      if(ref6130.get() !== null) {
        node7637.attr('placeholder', ref6130.get());
        subs__.addSub(ref6130.addEventListener('change', function(_, ref, val) {
          if(ref === ref6130) {
            node7637.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref6130.rebind());
      
      var ref6131 = n;
      node7637.val(""+ref6131.get());
      var ignore1330 = false;
      subs__.addSub(ref6131.addEventListener('change', function(_, ref, val) {
        if(ignore1330) return;
        node7637.val(""+val);
      }));
      subs__.addSub(ref6131.rebind());
      
      subs__.addSub(mobl.domBind(node7637, 'keyup', function() {
        ignore1330 = true;
        n.set(mobl.stringTomobl__Num(node7637.val()));
        ignore1330 = false;
      }));
      
      
      var val2101 = onchange.get();
      if(val2101 !== null) {
        subs__.addSub(mobl.domBind(node7637, 'change', val2101));
      }
      
      var val2102 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val2102 !== null) {
        subs__.addSub(mobl.domBind(node7637, 'blur', val2102));
      }
      
      node7636.append(node7637);
      node7634.append(node7636);
      
      
      
      
    } else {
      
      var node7638 = $("<input>");
      node7638.attr('type', "text");
      
      var ref6133 = mobl.ref(ui.textFieldStyle);
      if(ref6133.get() !== null) {
        node7638.attr('class', ref6133.get());
        subs__.addSub(ref6133.addEventListener('change', function(_, ref, val) {
          if(ref === ref6133) {
            node7638.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref6133.rebind());
      
      var ref6134 = placeholder;
      if(ref6134.get() !== null) {
        node7638.attr('placeholder', ref6134.get());
        subs__.addSub(ref6134.addEventListener('change', function(_, ref, val) {
          if(ref === ref6134) {
            node7638.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref6134.rebind());
      
      var ref6135 = n;
      node7638.val(""+ref6135.get());
      var ignore1332 = false;
      subs__.addSub(ref6135.addEventListener('change', function(_, ref, val) {
        if(ignore1332) return;
        node7638.val(""+val);
      }));
      subs__.addSub(ref6135.rebind());
      
      subs__.addSub(mobl.domBind(node7638, 'keyup', function() {
        ignore1332 = true;
        n.set(mobl.stringTomobl__Num(node7638.val()));
        ignore1332 = false;
      }));
      
      
      var val2103 = onchange.get();
      if(val2103 !== null) {
        subs__.addSub(mobl.domBind(node7638, 'change', val2103));
      }
      
      var val2104 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val2104 !== null) {
        subs__.addSub(mobl.domBind(node7638, 'blur', val2104));
      }
      
      node7634.append(node7638);
      
      
    }
  };
  renderCond849();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond849();
  }));
  
  callback(root13379); return subs__;
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root13380 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  
  var tmp20247 = mobl.ref(null);
  
  
  var tmp20246 = mobl.ref(null);
  
  var nodes10011 = $("<span>");
  root13380.append(nodes10011);
  subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp20246, tmp20247, function(_, callback) {
    var root13381 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node7639 = mobl.loadingSpan();
    root13381.append(node7639);
    var list1001;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList1001 = function() {
      var subs__ = listSubs__;
      list1001 = tabs.get();
      list1001.list(function(results1001) {
        node7639.empty();
        for(var i1003 = 0; i1003 < results1001.length; i1003++) {
          (function() {
            var iternode1001 = $("<span>");
            node7639.append(iternode1001);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results1001), i1003), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1001), i1003), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1001), i1003), "_3");
            
            var tmp20244 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp20244.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp20244.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp20244.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp20244.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp20243 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp20245 = mobl.ref(null);
            
            var nodes10012 = $("<span>");
            iternode1001.append(nodes10012);
            subs__.addSub((ui.span)(tmp20244, tmp20245, tmp20243, function(_, callback) {
              var root13382 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp20242 = mobl.ref(null);
              
              
              var tmp20241 = mobl.ref(null);
              
              var nodes10013 = $("<span>");
              root13382.append(nodes10013);
              subs__.addSub((mobl.label)(tabName, tmp20241, tmp20242, function(_, callback) {
                var root13383 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root13383); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10013;
                nodes10013 = node.contents();
                oldNodes.replaceWith(nodes10013);
              }));
              callback(root13382); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10012;
              nodes10012 = node.contents();
              oldNodes.replaceWith(nodes10012);
            }));
            
            var oldNodes = iternode1001;
            iternode1001 = iternode1001.contents();
            oldNodes.replaceWith(iternode1001);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1001.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1001(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1001(true); }));
      });
    };
    renderList1001();
    
    callback(root13381); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10011;
    nodes10011 = node.contents();
    oldNodes.replaceWith(nodes10011);
  }));
  
  var node7640 = mobl.loadingSpan();
  root13380.append(node7640);
  var list1002;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1002 = function() {
    var subs__ = listSubs__;
    list1002 = tabs.get();
    list1002.list(function(results1002) {
      node7640.empty();
      for(var i1004 = 0; i1004 < results1002.length; i1004++) {
        (function() {
          var iternode1002 = $("<span>");
          node7640.append(iternode1002);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results1002), i1004), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1002), i1004), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1002), i1004), "_3");
          
          var tmp20248 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp20248.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp20248.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp20248.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp20248.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp20250 = mobl.ref(null);
          
          
          var tmp20249 = mobl.ref(null);
          
          var nodes10014 = $("<span>");
          iternode1002.append(nodes10014);
          subs__.addSub((ui.block)(tmp20248, tmp20249, tmp20250, function(_, callback) {
            var root13384 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes10015 = $("<span>");
            root13384.append(nodes10015);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root13385 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10016 = $("<span>");
              root13385.append(nodes10016);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl1660();
              }));
              
              function renderControl1660() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root13386 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root13386); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10016;
                  nodes10016 = node.contents();
                  oldNodes.replaceWith(nodes10016);
                }));
              }
              renderControl1660();
              callback(root13385); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10015;
              nodes10015 = node.contents();
              oldNodes.replaceWith(nodes10015);
            }));
            callback(root13384); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes10014;
            nodes10014 = node.contents();
            oldNodes.replaceWith(nodes10014);
          }));
          
          var oldNodes = iternode1002;
          iternode1002 = iternode1002.contents();
          oldNodes.replaceWith(iternode1002);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1002.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1002(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1002(true); }));
    });
  };
  renderList1002();
  
  callback(root13380); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root13387 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7641 = $("<div>");
  
  var ref6139 = mobl.ref(ui.searchboxStyle);
  if(ref6139.get() !== null) {
    node7641.attr('class', ref6139.get());
    subs__.addSub(ref6139.addEventListener('change', function(_, ref, val) {
      if(ref === ref6139) {
        node7641.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6139.rebind());
  
  
  var node7642 = $("<input>");
  node7642.attr('type', "text");
  
  var ref6136 = mobl.ref(ui.searchBoxInputStyle);
  if(ref6136.get() !== null) {
    node7642.attr('class', ref6136.get());
    subs__.addSub(ref6136.addEventListener('change', function(_, ref, val) {
      if(ref === ref6136) {
        node7642.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6136.rebind());
  
  var ref6137 = placeholder;
  if(ref6137.get() !== null) {
    node7642.attr('placeholder', ref6137.get());
    subs__.addSub(ref6137.addEventListener('change', function(_, ref, val) {
      if(ref === ref6137) {
        node7642.attr('placeholder', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6137.rebind());
  
  var ref6138 = s;
  node7642.val(""+ref6138.get());
  var ignore1333 = false;
  subs__.addSub(ref6138.addEventListener('change', function(_, ref, val) {
    if(ignore1333) return;
    node7642.val(""+val);
  }));
  subs__.addSub(ref6138.rebind());
  
  subs__.addSub(mobl.domBind(node7642, 'keyup', function() {
    ignore1333 = true;
    s.set(mobl.stringTomobl__String(node7642.val()));
    ignore1333 = false;
  }));
  
  
  var val2105 = onsearch.get();
  if(val2105 !== null) {
    subs__.addSub(mobl.domBind(node7642, 'change', val2105));
  }
  
  var val2106 = onkeyup.get();
  if(val2106 !== null) {
    subs__.addSub(mobl.domBind(node7642, 'keyup', val2106));
  }
  node7642.attr('autocorrect', "off");
  node7642.attr('autocapitalize', "off");
  node7642.attr('autocomplete', "off");
  
  node7641.append(node7642);
  root13387.append(node7641);
  callback(root13387); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root13388 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref6140 = mobl.ref(ui.contextMenuStyle);
  if(ref6140.get() !== null) {
    menu.attr('class', ref6140.get());
    subs__.addSub(ref6140.addEventListener('change', function(_, ref, val) {
      if(ref === ref6140) {
        menu.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6140.rebind());
  
  var nodes10017 = $("<span>");
  menu.append(nodes10017);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1661();
  }));
  
  function renderControl1661() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13389 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13389); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10017;
      nodes10017 = node.contents();
      oldNodes.replaceWith(nodes10017);
    }));
  }
  renderControl1661();
  root13388.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "mobl/ui/generic/contextmenu.png");
  img.attr('style', "float: right;");
  
  var val2107 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp20308 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val2107 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val2107));
  }
  
  root13388.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root13388); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root13390 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp20300 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp20300.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node7643 = $("<span>");
  root13390.append(node7643);
  var condSubs850 = new mobl.CompSubscription();
  subs__.addSub(condSubs850);
  var oldValue850;
  var renderCond850 = function() {
    var value5554 = tmp20300.get();
    if(oldValue850 === value5554) return;
    oldValue850 = value5554;
    var subs__ = condSubs850;
    subs__.unsubscribe();
    node7643.empty();
    if(value5554) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node7644 = $("<div>");
        node7644.attr('width', "100%");
        
        
        var node7645 = $("<div>");
        node7645.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes10019 = $("<span>");
        node7645.append(nodes10019);
        subs__.addSub((ui.group)(function(_, callback) {
          var root13392 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node7647 = mobl.loadingSpan();
          root13392.append(node7647);
          var list1003;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList1003 = function() {
            var subs__ = listSubs__;
            list1003 = items.get();
            list1003.list(function(results1003) {
              node7647.empty();
              for(var i1005 = 0; i1005 < results1003.length; i1005++) {
                (function() {
                  var iternode1003 = $("<span>");
                  node7647.append(iternode1003);
                  var it;
                  it = mobl.ref(mobl.ref(results1003), i1005);
                  
                  var tmp20264 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp20264.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp20264.set(it.get() == current.get());
                  }));
                  
                  
                  var node7648 = $("<span>");
                  iternode1003.append(node7648);
                  var condSubs851 = new mobl.CompSubscription();
                  subs__.addSub(condSubs851);
                  var oldValue851;
                  var renderCond851 = function() {
                    var value5555 = tmp20264.get();
                    if(oldValue851 === value5555) return;
                    oldValue851 = value5555;
                    var subs__ = condSubs851;
                    subs__.unsubscribe();
                    node7648.empty();
                    if(value5555) {
                      
                      var tmp20260 = mobl.ref(false);
                      
                      
                      var tmp20259 = mobl.ref(null);
                      
                      
                      var tmp20258 = mobl.ref(null);
                      
                      var nodes10020 = $("<span>");
                      node7648.append(nodes10020);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp20258, tmp20259, tmp20260, function(_, callback) {
                        var root13393 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes10021 = $("<span>");
                        root13393.append(nodes10021);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1663();
                        }));
                        
                        function renderControl1663() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root13394 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root13394); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes10021;
                            nodes10021 = node.contents();
                            oldNodes.replaceWith(nodes10021);
                          }));
                        }
                        renderControl1663();
                        callback(root13393); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10020;
                        nodes10020 = node.contents();
                        oldNodes.replaceWith(nodes10020);
                      }));
                      
                      
                    } else {
                      
                      var tmp20262 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp20261 = mobl.ref(true);
                      
                      
                      var tmp20263 = mobl.ref(null);
                      
                      var nodes10022 = $("<span>");
                      node7648.append(nodes10022);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20262, tmp20263, tmp20261, function(_, callback) {
                        var root13395 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes10023 = $("<span>");
                        root13395.append(nodes10023);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1664();
                        }));
                        
                        function renderControl1664() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root13396 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root13396); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes10023;
                            nodes10023 = node.contents();
                            oldNodes.replaceWith(nodes10023);
                          }));
                        }
                        renderControl1664();
                        callback(root13395); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10022;
                        nodes10022 = node.contents();
                        oldNodes.replaceWith(nodes10022);
                      }));
                      
                      
                    }
                  };
                  renderCond851();
                  subs__.addSub(tmp20264.addEventListener('change', function() {
                    renderCond851();
                  }));
                  
                  
                  var oldNodes = iternode1003;
                  iternode1003 = iternode1003.contents();
                  oldNodes.replaceWith(iternode1003);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list1003.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1003(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1003(true); }));
            });
          };
          renderList1003();
          
          callback(root13392); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes10019;
          nodes10019 = node.contents();
          oldNodes.replaceWith(nodes10019);
        }));
        node7644.append(node7645);
        
        var node7646 = $("<div>");
        node7646.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        var nodes10018 = $("<span>");
        node7646.append(nodes10018);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl1662();
        }));
        
        function renderControl1662() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root13391 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root13391); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes10018;
            nodes10018 = node.contents();
            oldNodes.replaceWith(nodes10018);
          }));
        }
        renderControl1662();
        node7644.append(node7646);
        node7643.append(node7644);
        
        
        
        
        
        
      });
    } else {
      var nodes10024 = $("<span>");
      node7643.append(nodes10024);
      subs__.addSub((ui.group)(function(_, callback) {
        var root13397 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node7649 = mobl.loadingSpan();
        root13397.append(node7649);
        var list1004;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList1004 = function() {
          var subs__ = listSubs__;
          list1004 = items.get();
          list1004.list(function(results1004) {
            node7649.empty();
            for(var i1006 = 0; i1006 < results1004.length; i1006++) {
              (function() {
                var iternode1004 = $("<span>");
                node7649.append(iternode1004);
                var it;
                it = mobl.ref(mobl.ref(results1004), i1006);
                
                var tmp20251 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                     var tmp20309 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp20253 = mobl.ref(false);
                
                
                var tmp20252 = mobl.ref(null);
                
                var nodes10025 = $("<span>");
                iternode1004.append(nodes10025);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20251, tmp20252, tmp20253, function(_, callback) {
                  var root13398 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10026 = $("<span>");
                  root13398.append(nodes10026);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1665();
                  }));
                  
                  function renderControl1665() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root13399 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root13399); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10026;
                      nodes10026 = node.contents();
                      oldNodes.replaceWith(nodes10026);
                    }));
                  }
                  renderControl1665();
                  callback(root13398); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10025;
                  nodes10025 = node.contents();
                  oldNodes.replaceWith(nodes10025);
                }));
                
                var oldNodes = iternode1004;
                iternode1004 = iternode1004.contents();
                oldNodes.replaceWith(iternode1004);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list1004.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1004(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1004(true); }));
          });
        };
        renderList1004();
        
        callback(root13397); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10024;
        nodes10024 = node.contents();
        oldNodes.replaceWith(nodes10024);
      }));
      
      
    }
  };
  renderCond850();
  subs__.addSub(tmp20300.addEventListener('change', function() {
    renderCond850();
  }));
  
  callback(root13390); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root13400 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp20256 = mobl.ref("Detail");
  
  
  var tmp20257 = mobl.ref(null);
  
  var nodes10027 = $("<span>");
  root13400.append(nodes10027);
  subs__.addSub((ui.header)(tmp20256, tmp20257, function(_, callback) {
    var root13401 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp20255 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp20254 = mobl.ref("Back");
    
    var nodes10028 = $("<span>");
    root13401.append(nodes10028);
    subs__.addSub((ui.backButton)(tmp20254, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20255, function(_, callback) {
      var root13402 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13402); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10028;
      nodes10028 = node.contents();
      oldNodes.replaceWith(nodes10028);
    }));
    callback(root13401); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10027;
    nodes10027 = node.contents();
    oldNodes.replaceWith(nodes10027);
  }));
  var nodes10029 = $("<span>");
  root13400.append(nodes10029);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1666();
  }));
  
  function renderControl1666() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root13403 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13403); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10029;
      nodes10029 = node.contents();
      oldNodes.replaceWith(nodes10029);
    }));
  }
  renderControl1666();
  callback(root13400); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root13404 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes10030 = $("<span>");
  root13404.append(nodes10030);
  subs__.addSub((ui.group)(function(_, callback) {
    var root13405 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node7650 = mobl.loadingSpan();
    root13405.append(node7650);
    var list1005;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList1005 = function() {
      var subs__ = listSubs__;
      list1005 = coll.get();
      list1005.list(function(results1005) {
        node7650.empty();
        for(var i1007 = 0; i1007 < results1005.length; i1007++) {
          (function() {
            var iternode1005 = $("<span>");
            node7650.append(iternode1005);
            var it;
            it = mobl.ref(mobl.ref(results1005), i1007);
            
            var tmp20271 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp20271.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp20271.set(it.get() == selected.get());
            }));
            
            
            var node7651 = $("<span>");
            iternode1005.append(node7651);
            var condSubs852 = new mobl.CompSubscription();
            subs__.addSub(condSubs852);
            var oldValue852;
            var renderCond852 = function() {
              var value5556 = tmp20271.get();
              if(oldValue852 === value5556) return;
              oldValue852 = value5556;
              var subs__ = condSubs852;
              subs__.unsubscribe();
              node7651.empty();
              if(value5556) {
                
                var tmp20267 = mobl.ref(false);
                
                
                var tmp20266 = mobl.ref(null);
                
                
                var tmp20265 = mobl.ref(null);
                
                var nodes10031 = $("<span>");
                node7651.append(nodes10031);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20265, tmp20266, tmp20267, function(_, callback) {
                  var root13406 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10032 = $("<span>");
                  root13406.append(nodes10032);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1667();
                  }));
                  
                  function renderControl1667() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root13407 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root13407); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10032;
                      nodes10032 = node.contents();
                      oldNodes.replaceWith(nodes10032);
                    }));
                  }
                  renderControl1667();
                  callback(root13406); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10031;
                  nodes10031 = node.contents();
                  oldNodes.replaceWith(nodes10031);
                }));
                
                
              } else {
                
                var tmp20269 = mobl.ref(true);
                
                
                var tmp20268 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp20270 = mobl.ref(null);
                
                var nodes10033 = $("<span>");
                node7651.append(nodes10033);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20268, tmp20270, tmp20269, function(_, callback) {
                  var root13408 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10034 = $("<span>");
                  root13408.append(nodes10034);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1668();
                  }));
                  
                  function renderControl1668() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root13409 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root13409); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10034;
                      nodes10034 = node.contents();
                      oldNodes.replaceWith(nodes10034);
                    }));
                  }
                  renderControl1668();
                  callback(root13408); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10033;
                  nodes10033 = node.contents();
                  oldNodes.replaceWith(nodes10033);
                }));
                
                
              }
            };
            renderCond852();
            subs__.addSub(tmp20271.addEventListener('change', function() {
              renderCond852();
            }));
            
            
            var oldNodes = iternode1005;
            iternode1005 = iternode1005.contents();
            oldNodes.replaceWith(iternode1005);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1005.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1005(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1005(true); }));
      });
    };
    renderList1005();
    
    callback(root13405); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10030;
    nodes10030 = node.contents();
    oldNodes.replaceWith(nodes10030);
  }));
  callback(root13404); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
  var root13410 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes10035 = $("<span>");
    root13410.append(nodes10035);
    subs__.addSub((ui.group)(function(_, callback) {
      var root13411 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp20275 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp20275.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp20275.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp20275.set(coll.get().limit(n.get()));
      }));
      
      
      var node7652 = mobl.loadingSpan();
      root13411.append(node7652);
      var list1006;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList1006 = function() {
        var subs__ = listSubs__;
        list1006 = tmp20275.get();
        list1006.list(function(results1006) {
          node7652.empty();
          for(var i1008 = 0; i1008 < results1006.length; i1008++) {
            (function() {
              var iternode1006 = $("<span>");
              node7652.append(iternode1006);
              var it;
              it = mobl.ref(mobl.ref(results1006), i1008);
              
              var tmp20272 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp20274 = mobl.ref(false);
              
              
              var tmp20273 = mobl.ref(null);
              
              var nodes10036 = $("<span>");
              iternode1006.append(nodes10036);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20272, tmp20273, tmp20274, function(_, callback) {
                var root13412 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes10037 = $("<span>");
                root13412.append(nodes10037);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl1669();
                }));
                
                function renderControl1669() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root13413 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root13413); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes10037;
                    nodes10037 = node.contents();
                    oldNodes.replaceWith(nodes10037);
                  }));
                }
                renderControl1669();
                callback(root13412); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes10036;
                nodes10036 = node.contents();
                oldNodes.replaceWith(nodes10036);
              }));
              
              var oldNodes = iternode1006;
              iternode1006 = iternode1006.contents();
              oldNodes.replaceWith(iternode1006);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list1006.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1006(true); }));
          subs__.addSub(tmp20275.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1006(true); }));
        });
      };
      renderList1006();
      
      
      var tmp20276 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp20276.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp20276.set(n.get() < total.get());
      }));
      
      
      var node7653 = $("<span>");
      root13411.append(node7653);
      var condSubs853 = new mobl.CompSubscription();
      subs__.addSub(condSubs853);
      var oldValue853;
      var renderCond853 = function() {
        var value5557 = tmp20276.get();
        if(oldValue853 === value5557) return;
        oldValue853 = value5557;
        var subs__ = condSubs853;
        subs__.unsubscribe();
        node7653.empty();
        if(value5557) {
          
          var node7654 = $("<li>");
          
          var ref6141 = mobl.ref(ui.loadMoreStyle);
          if(ref6141.get() !== null) {
            node7654.attr('class', ref6141.get());
            subs__.addSub(ref6141.addEventListener('change', function(_, ref, val) {
              if(ref === ref6141) {
                node7654.attr('class', val);
              } else {
                console.log("Garbage!");
              }
            }));
            
          }
          subs__.addSub(ref6141.rebind());
          
          var val2108 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val2108 !== null) {
            subs__.addSub(mobl.domBind(node7654, 'tap', val2108));
          }
          
          
          node7654.append("More");
          node7653.append(node7654);
          
          
        } else {
          
        }
      };
      renderCond853();
      subs__.addSub(tmp20276.addEventListener('change', function() {
        renderCond853();
      }));
      
      callback(root13411); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10035;
      nodes10035 = node.contents();
      oldNodes.replaceWith(nodes10035);
    }));
    callback(root13410); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root13414 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10038 = $("<span>");
  root13414.append(nodes10038);
  subs__.addSub((ui.group)(function(_, callback) {
    var root13415 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node7655 = mobl.loadingSpan();
    root13415.append(node7655);
    var list1007;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList1007 = function() {
      var subs__ = listSubs__;
      list1007 = items.get();
      list1007.list(function(results1007) {
        node7655.empty();
        for(var i1009 = 0; i1009 < results1007.length; i1009++) {
          (function() {
            var iternode1007 = $("<span>");
            node7655.append(iternode1007);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results1007), i1009), "_1");it = mobl.ref(mobl.ref(mobl.ref(results1007), i1009), "_2");
            
            var tmp20280 = mobl.ref(false);
            
            
            var tmp20279 = mobl.ref(null);
            
            
            var tmp20278 = mobl.ref(null);
            
            var nodes10039 = $("<span>");
            iternode1007.append(nodes10039);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20278, tmp20279, tmp20280, function(_, callback) {
              var root13416 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp20277 = mobl.ref(null);
              
              var nodes10040 = $("<span>");
              root13416.append(nodes10040);
              subs__.addSub((ui.checkBox)(checked, it, tmp20277, function(_, callback) {
                var root13417 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root13417); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10040;
                nodes10040 = node.contents();
                oldNodes.replaceWith(nodes10040);
              }));
              callback(root13416); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10039;
              nodes10039 = node.contents();
              oldNodes.replaceWith(nodes10039);
            }));
            
            var oldNodes = iternode1007;
            iternode1007 = iternode1007.contents();
            oldNodes.replaceWith(iternode1007);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1007.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1007(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1007(true); }));
      });
    };
    renderList1007();
    
    callback(root13415); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10038;
    nodes10038 = node.contents();
    oldNodes.replaceWith(nodes10038);
  }));
  callback(root13414); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
  var root13418 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  
  var result__ = coll.get();
  coll.get().list(function(coll1752) {
    coll1752 = coll1752.reverse();
    function processOne436() {
      var it;
      it = coll1752.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1752.length > 0) processOne436(); else rest436();
      
    }
    function rest436() {
      
      var tmp20285 = mobl.ref(null);
      
      var nodes10041 = $("<span>");
      root13418.append(nodes10041);
      subs__.addSub((ui.header)(title, tmp20285, function(_, callback) {
        var root13419 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp20281 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp20282 = mobl.ref("Back");
        
        var nodes10042 = $("<span>");
        root13419.append(nodes10042);
        subs__.addSub((ui.backButton)(tmp20282, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20281, function(_, callback) {
          var root13420 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13420); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10042;
          nodes10042 = node.contents();
          oldNodes.replaceWith(nodes10042);
        }));
        
        var tmp20284 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll1751) {
                               coll1751 = coll1751.reverse();
                               function processOne435() {
                                 var checked;var it;
                                 var tmp20311 = coll1751.pop();
                                 checked = tmp20311._1;it = tmp20311._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll1751.length > 0) processOne435(); else rest435();
                                   
                                 } else {
                                   {
                                     
                                     if(coll1751.length > 0) processOne435(); else rest435();
                                     
                                   }
                                 }
                               }
                               function rest435() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll1751.length > 0) processOne435(); else rest435();
                             });
                             
                           });
        
        
        var tmp20283 = mobl.ref("Done");
        
        var nodes10043 = $("<span>");
        root13419.append(nodes10043);
        subs__.addSub((ui.button)(tmp20283, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp20284, function(_, callback) {
          var root13421 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13421); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10043;
          nodes10043 = node.contents();
          oldNodes.replaceWith(nodes10043);
        }));
        callback(root13419); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10041;
        nodes10041 = node.contents();
        oldNodes.replaceWith(nodes10041);
      }));
      var nodes10044 = $("<span>");
      root13418.append(nodes10044);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root13422 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13422); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10044;
        nodes10044 = node.contents();
        oldNodes.replaceWith(nodes10044);
      }));
      callback(root13418); return subs__;
      
      
    }
    if(coll1752.length > 0) processOne436(); else rest436();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
  var root13423 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  
  var tmp20286 = mobl.ref("Search term");
  
  
  var tmp20288 = mobl.ref(null);
  
  
  var tmp20287 = mobl.ref(null);
  
  var nodes10045 = $("<span>");
  root13423.append(nodes10045);
  subs__.addSub((ui.searchBox)(phrase, tmp20286, tmp20287, tmp20288, function(_, callback) {
    var root13424 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13424); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10045;
    nodes10045 = node.contents();
    oldNodes.replaceWith(nodes10045);
  }));
  
  var tmp20289 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp20289.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp20289.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp20289.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp20289.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp20289.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes10046 = $("<span>");
  root13423.append(nodes10046);
  subs__.addSub((ui.masterDetail)(tmp20289, masterItem, detailItem, function(_, callback) {
    var root13425 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13425); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10046;
    nodes10046 = node.contents();
    oldNodes.replaceWith(nodes10046);
  }));
  callback(root13423); return subs__;
  
  
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
  var root13426 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp20299 = mobl.ref(null);
  
  
  var tmp20298 = mobl.ref(null);
  
  var nodes10047 = $("<span>");
  root13426.append(nodes10047);
  subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp20298, tmp20299, function(_, callback) {
    var root13427 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node7656 = mobl.loadingSpan();
    root13427.append(node7656);
    var list1008;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList1008 = function() {
      var subs__ = listSubs__;
      list1008 = sections.get();
      list1008.list(function(results1008) {
        node7656.empty();
        for(var i1010 = 0; i1010 < results1008.length; i1010++) {
          (function() {
            var iternode1008 = $("<span>");
            node7656.append(iternode1008);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results1008), i1010), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results1008), i1010), "_2");
            
            var tmp20293 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp20293.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp20293.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp20293.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp20293.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp20292 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp20294 = mobl.ref(null);
            
            var nodes10048 = $("<span>");
            iternode1008.append(nodes10048);
            subs__.addSub((ui.span)(tmp20293, tmp20294, tmp20292, function(_, callback) {
              var root13428 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp20291 = mobl.ref(null);
              
              
              var tmp20290 = mobl.ref(null);
              
              var nodes10049 = $("<span>");
              root13428.append(nodes10049);
              subs__.addSub((mobl.label)(sectionName, tmp20290, tmp20291, function(_, callback) {
                var root13429 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root13429); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10049;
                nodes10049 = node.contents();
                oldNodes.replaceWith(nodes10049);
              }));
              callback(root13428); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10048;
              nodes10048 = node.contents();
              oldNodes.replaceWith(nodes10048);
            }));
            
            var tmp20295 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp20295.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp20295.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp20295.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp20295.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp20297 = mobl.ref(null);
            
            
            var tmp20296 = mobl.ref(null);
            
            var nodes10050 = $("<span>");
            iternode1008.append(nodes10050);
            subs__.addSub((ui.block)(tmp20295, tmp20296, tmp20297, function(_, callback) {
              var root13430 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10051 = $("<span>");
              root13430.append(nodes10051);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1670();
              }));
              
              function renderControl1670() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root13431 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root13431); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10051;
                  nodes10051 = node.contents();
                  oldNodes.replaceWith(nodes10051);
                }));
              }
              renderControl1670();
              callback(root13430); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10050;
              nodes10050 = node.contents();
              oldNodes.replaceWith(nodes10050);
            }));
            
            var oldNodes = iternode1008;
            iternode1008 = iternode1008.contents();
            oldNodes.replaceWith(iternode1008);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1008.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1008(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1008(true); }));
      });
    };
    renderList1008();
    
    callback(root13427); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10047;
    nodes10047 = node.contents();
    oldNodes.replaceWith(nodes10047);
  }));
  callback(root13426); return subs__;
  
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
  var root13432 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7657 = $("<table>");
  
  var ref6142 = mobl.ref(ui.tableStyle);
  if(ref6142.get() !== null) {
    node7657.attr('class', ref6142.get());
    subs__.addSub(ref6142.addEventListener('change', function(_, ref, val) {
      if(ref === ref6142) {
        node7657.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6142.rebind());
  
  var nodes10052 = $("<span>");
  node7657.append(nodes10052);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1671();
  }));
  
  function renderControl1671() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13433 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13433); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10052;
      nodes10052 = node.contents();
      oldNodes.replaceWith(nodes10052);
    }));
  }
  renderControl1671();
  root13432.append(node7657);
  callback(root13432); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root13434 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7658 = $("<tr>");
  
  var ref6143 = mobl.ref(ui.trStyle);
  if(ref6143.get() !== null) {
    node7658.attr('class', ref6143.get());
    subs__.addSub(ref6143.addEventListener('change', function(_, ref, val) {
      if(ref === ref6143) {
        node7658.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6143.rebind());
  
  var nodes10053 = $("<span>");
  node7658.append(nodes10053);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1672();
  }));
  
  function renderControl1672() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13435 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13435); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10053;
      nodes10053 = node.contents();
      oldNodes.replaceWith(nodes10053);
    }));
  }
  renderControl1672();
  root13434.append(node7658);
  callback(root13434); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root13436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7659 = $("<td>");
  
  var ref6144 = width;
  if(ref6144.get() !== null) {
    node7659.attr('width', ref6144.get());
    subs__.addSub(ref6144.addEventListener('change', function(_, ref, val) {
      if(ref === ref6144) {
        node7659.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6144.rebind());
  
  var ref6145 = mobl.ref(ui.tdStyle);
  if(ref6145.get() !== null) {
    node7659.attr('class', ref6145.get());
    subs__.addSub(ref6145.addEventListener('change', function(_, ref, val) {
      if(ref === ref6145) {
        node7659.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6145.rebind());
  
  var nodes10054 = $("<span>");
  node7659.append(nodes10054);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1673();
  }));
  
  function renderControl1673() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13437 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13437); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10054;
      nodes10054 = node.contents();
      oldNodes.replaceWith(nodes10054);
    }));
  }
  renderControl1673();
  root13436.append(node7659);
  callback(root13436); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root13438 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7660 = $("<td>");
  
  var ref6146 = width;
  if(ref6146.get() !== null) {
    node7660.attr('width', ref6146.get());
    subs__.addSub(ref6146.addEventListener('change', function(_, ref, val) {
      if(ref === ref6146) {
        node7660.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6146.rebind());
  
  var ref6147 = mobl.ref(ui.tdStyle);
  if(ref6147.get() !== null) {
    node7660.attr('class', ref6147.get());
    subs__.addSub(ref6147.addEventListener('change', function(_, ref, val) {
      if(ref === ref6147) {
        node7660.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6147.rebind());
  
  var nodes10055 = $("<span>");
  node7660.append(nodes10055);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1674();
  }));
  
  function renderControl1674() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13439 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13439); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10055;
      nodes10055 = node.contents();
      oldNodes.replaceWith(nodes10055);
    }));
  }
  renderControl1674();
  root13438.append(node7660);
  callback(root13438); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root13440 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7661 = $("<td>");
  
  var ref6148 = width;
  if(ref6148.get() !== null) {
    node7661.attr('width', ref6148.get());
    subs__.addSub(ref6148.addEventListener('change', function(_, ref, val) {
      if(ref === ref6148) {
        node7661.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6148.rebind());
  
  var ref6149 = mobl.ref(ui.tdStyle);
  if(ref6149.get() !== null) {
    node7661.attr('class', ref6149.get());
    subs__.addSub(ref6149.addEventListener('change', function(_, ref, val) {
      if(ref === ref6149) {
        node7661.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6149.rebind());
  
  
  var node7662 = $("<strong>");
  
  var nodes10056 = $("<span>");
  node7662.append(nodes10056);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1675();
  }));
  
  function renderControl1675() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13441 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13441); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10056;
      nodes10056 = node.contents();
      oldNodes.replaceWith(nodes10056);
    }));
  }
  renderControl1675();
  node7661.append(node7662);
  root13440.append(node7661);
  callback(root13440); return subs__;
  
  
  
  return subs__;
};

ui.scroller = function(height, elements, callback) {
  var root13442 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7663 = $("<div>");
  node7663.attr('class', "scroller");
  
  var nodes10057 = $("<span>");
  node7663.append(nodes10057);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1676();
  }));
  
  function renderControl1676() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13443 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13443); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10057;
      nodes10057 = node.contents();
      oldNodes.replaceWith(nodes10057);
    }));
  }
  renderControl1676();
  root13442.append(node7663);
  var result__ = ui.setupScrollers();
  callback(root13442); return subs__;
  
  
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
  var root13444 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var id = mobl.ref(s.get() + "-range-field");
  subs__.addSub(s.addEventListener('change', function() {
    id.set(s.get() + "-range-field");
  }));
  
  
  var node7664 = $("<input>");
  node7664.attr('type', "hidden");
  
  var ref6155 = s;
  node7664.val(""+ref6155.get());
  var ignore1334 = false;
  subs__.addSub(ref6155.addEventListener('change', function(_, ref, val) {
    if(ignore1334) return;
    node7664.val(""+val);
  }));
  subs__.addSub(ref6155.rebind());
  
  subs__.addSub(mobl.domBind(node7664, 'keyup', function() {
    ignore1334 = true;
    s.set(mobl.stringTomobl__String(node7664.val()));
    ignore1334 = false;
  }));
  
  
  var ref6156 = start;
  if(ref6156.get() !== null) {
    node7664.attr('value', ref6156.get());
    subs__.addSub(ref6156.addEventListener('change', function(_, ref, val) {
      if(ref === ref6156) {
        node7664.attr('value', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6156.rebind());
  
  root13444.append(node7664);
  
  var node7665 = $("<input>");
  node7665.attr('type', "range");
  
  var ref6150 = start;
  if(ref6150.get() !== null) {
    node7665.attr('value', ref6150.get());
    subs__.addSub(ref6150.addEventListener('change', function(_, ref, val) {
      if(ref === ref6150) {
        node7665.attr('value', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6150.rebind());
  
  var ref6151 = min;
  if(ref6151.get() !== null) {
    node7665.attr('min', ref6151.get());
    subs__.addSub(ref6151.addEventListener('change', function(_, ref, val) {
      if(ref === ref6151) {
        node7665.attr('min', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6151.rebind());
  
  var ref6152 = max;
  if(ref6152.get() !== null) {
    node7665.attr('max', ref6152.get());
    subs__.addSub(ref6152.addEventListener('change', function(_, ref, val) {
      if(ref === ref6152) {
        node7665.attr('max', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6152.rebind());
  
  var val2109 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = mobl.$("#" + id.get()).val();
                s.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val2109 !== null) {
    subs__.addSub(mobl.domBind(node7665, 'change', val2109));
  }
  
  var ref6153 = id;
  if(ref6153.get() !== null) {
    node7665.attr('id', ref6153.get());
    subs__.addSub(ref6153.addEventListener('change', function(_, ref, val) {
      if(ref === ref6153) {
        node7665.attr('id', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6153.rebind());
  
  var ref6154 = style;
  if(ref6154.get() !== null) {
    node7665.attr('class', ref6154.get());
    subs__.addSub(ref6154.addEventListener('change', function(_, ref, val) {
      if(ref === ref6154) {
        node7665.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref6154.rebind());
  
  root13444.append(node7665);
  callback(root13444); return subs__;
  
  
  return subs__;
};
ui.title = 'ui__title';
ui.emphasis = 'ui__emphasis';
ui.ranger = 'ui__ranger';
