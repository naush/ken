mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root2334 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1347 = $("<span>");
  root2334.append(node1347);
  var condSubs9 = new mobl.CompSubscription();
  subs__.addSub(condSubs9);
  var oldValue9;
  var renderCond9 = function() {
    var value61 = value.get();
    if(oldValue9 === value61) return;
    oldValue9 = value61;
    var subs__ = condSubs9;
    subs__.unsubscribe();
    node1347.empty();
    if(value61) {
      var nodes2252 = $("<span>");
      node1347.append(nodes2252);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl26();
      }));
      
      function renderControl26() {
        subs__.addSub((elements)(function(elements, callback) {
          var root2335 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2335); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2252;
          nodes2252 = node.contents();
          oldNodes.replaceWith(nodes2252);
        }));
      }
      renderControl26();
      
      
    } else {
      var result__ = null;
      var tmp9990 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9989 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9988 = mobl.ref(result__);
      
      var nodes2253 = $("<span>");
      node1347.append(nodes2253);
      subs__.addSub((mobl.block)(style, tmp9988, tmp9989, tmp9990, function(_, callback) {
        var root2336 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = null;
        var tmp9980 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9979 = mobl.ref(result__);
        
        var nodes2254 = $("<span>");
        root2336.append(nodes2254);
        subs__.addSub((mobl.label)(loadingMessage, tmp9979, tmp9980, function(_, callback) {
          var root2337 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2337); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2254;
          nodes2254 = node.contents();
          oldNodes.replaceWith(nodes2254);
        }));
        var result__ = "middle";
        var tmp9982 = mobl.ref(result__);
        
        var result__ = "data:image/gif;base64,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";
        var tmp9981 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9987 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9986 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9985 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9984 = mobl.ref(result__);
        
        var result__ = null;
        var tmp9983 = mobl.ref(result__);
        
        var nodes2255 = $("<span>");
        root2336.append(nodes2255);
        subs__.addSub((ui.image)(tmp9981, tmp9983, tmp9984, tmp9985, tmp9986, tmp9982, tmp9987, function(_, callback) {
          var root2338 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2338); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2255;
          nodes2255 = node.contents();
          oldNodes.replaceWith(nodes2255);
        }));
        callback(root2336); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2253;
        nodes2253 = node.contents();
        oldNodes.replaceWith(nodes2253);
      }));
      
      
    }
  };
  renderCond9();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond9();
  }));
  
  callback(root2334); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root2339 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1348 = $("<div>");
  
  var ref367 = mobl.ref(ui.headerStyle);
  if(ref367.get() !== null) {
    node1348.attr('class', ref367.get());
    subs__.addSub(ref367.addEventListener('change', function(_, ref, val) {
      node1348.attr('class', val);
    }));
    
  }
  subs__.addSub(ref367.rebind());
  
  var val1087 = onclick.get();
  if(val1087 !== null) {
    subs__.addSub(mobl.domBind(node1348, 'tap', val1087));
  }
  
  
  var node1349 = $("<div>");
  
  var ref366 = mobl.ref(ui.headerContainerStyle);
  if(ref366.get() !== null) {
    node1349.attr('class', ref366.get());
    subs__.addSub(ref366.addEventListener('change', function(_, ref, val) {
      node1349.attr('class', val);
    }));
    
  }
  subs__.addSub(ref366.rebind());
  
  
  var node1350 = $("<div>");
  
  var ref364 = text;
  node1350.text(""+ref364.get());
  var ignore11 = false;
  subs__.addSub(ref364.addEventListener('change', function(_, ref, val) {
    if(ignore11) return;
    node1350.text(""+val);
  }));
  subs__.addSub(ref364.rebind());
  
  
  var ref365 = mobl.ref(ui.headerTextStyle);
  if(ref365.get() !== null) {
    node1350.attr('class', ref365.get());
    subs__.addSub(ref365.addEventListener('change', function(_, ref, val) {
      node1350.attr('class', val);
    }));
    
  }
  subs__.addSub(ref365.rebind());
  
  node1349.append(node1350);
  node1348.append(node1349);
  var nodes2256 = $("<span>");
  node1348.append(nodes2256);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl27();
  }));
  
  function renderControl27() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2340 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2340); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2256;
      nodes2256 = node.contents();
      oldNodes.replaceWith(nodes2256);
    }));
  }
  renderControl27();
  root2339.append(node1348);
  callback(root2339); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2341 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref368 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref368.get() !== null) {
    sp.attr('class', ref368.get());
    subs__.addSub(ref368.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
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
  subs__.addSub(ref368.rebind());
  
  var val1088 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1088 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1088));
  }
  
  var val1089 = function(event, callback) {
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
  if(val1089 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1089));
  }
  
  var val1090 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after10(result__) {
                    var tmp10080 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after10);if(result__ !== undefined) after10(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1090 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1090));
  }
  
  var val1091 = function(event, callback) {
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
  if(val1091 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1091));
  }
  
  var ref369 = text;
  sp.text(""+ref369.get());
  var ignore12 = false;
  subs__.addSub(ref369.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref369.rebind());
  
  
  root2341.append(sp);
  callback(root2341); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2342 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2257 = $("<span>");
  root2342.append(nodes2257);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2343 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2343); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2257;
    nodes2257 = node.contents();
    oldNodes.replaceWith(nodes2257);
  }));
  callback(root2342); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2344 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2258 = $("<span>");
  root2344.append(nodes2258);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2345 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2345); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2258;
    nodes2258 = node.contents();
    oldNodes.replaceWith(nodes2258);
  }));
  callback(root2344); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root2346 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1351 = $("<ul>");
  
  var ref370 = mobl.ref(ui.groupStyle);
  if(ref370.get() !== null) {
    node1351.attr('class', ref370.get());
    subs__.addSub(ref370.addEventListener('change', function(_, ref, val) {
      node1351.attr('class', val);
    }));
    
  }
  subs__.addSub(ref370.rebind());
  
  var nodes2259 = $("<span>");
  node1351.append(nodes2259);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl28();
  }));
  
  function renderControl28() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2347 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2347); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2259;
      nodes2259 = node.contents();
      oldNodes.replaceWith(nodes2259);
    }));
  }
  renderControl28();
  root2346.append(node1351);
  callback(root2346); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root2348 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1352 = $("<img>");
  
  var ref371 = url;
  if(ref371.get() !== null) {
    node1352.attr('src', ref371.get());
    subs__.addSub(ref371.addEventListener('change', function(_, ref, val) {
      node1352.attr('src', val);
    }));
    
  }
  subs__.addSub(ref371.rebind());
  
  var ref372 = width;
  if(ref372.get() !== null) {
    node1352.attr('width', ref372.get());
    subs__.addSub(ref372.addEventListener('change', function(_, ref, val) {
      node1352.attr('width', val);
    }));
    
  }
  subs__.addSub(ref372.rebind());
  
  var ref373 = height;
  if(ref373.get() !== null) {
    node1352.attr('height', ref373.get());
    subs__.addSub(ref373.addEventListener('change', function(_, ref, val) {
      node1352.attr('height', val);
    }));
    
  }
  subs__.addSub(ref373.rebind());
  
  var ref374 = style;
  if(ref374.get() !== null) {
    node1352.attr('class', ref374.get());
    subs__.addSub(ref374.addEventListener('change', function(_, ref, val) {
      node1352.attr('class', val);
    }));
    
  }
  subs__.addSub(ref374.rebind());
  
  var val1092 = onclick.get();
  if(val1092 !== null) {
    subs__.addSub(mobl.domBind(node1352, 'tap', val1092));
  }
  
  var ref375 = valign;
  if(ref375.get() !== null) {
    node1352.attr('valign', ref375.get());
    subs__.addSub(ref375.addEventListener('change', function(_, ref, val) {
      node1352.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref375.rebind());
  
  var ref376 = align;
  if(ref376.get() !== null) {
    node1352.attr('align', ref376.get());
    subs__.addSub(ref376.addEventListener('change', function(_, ref, val) {
      node1352.attr('align', val);
    }));
    
  }
  subs__.addSub(ref376.rebind());
  
  root2348.append(node1352);
  callback(root2348); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root2349 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref377 = mobl.ref(ui.itemStyle);
  if(ref377.get() !== null) {
    el.attr('class', ref377.get());
    subs__.addSub(ref377.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref377.rebind());
  
  var ref378 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref378.get() !== null) {
    el.attr('class', ref378.get());
    subs__.addSub(ref378.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
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
  subs__.addSub(ref378.rebind());
  
  var val1093 = onswipe.get();
  if(val1093 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1093));
  }
  
  var val1094 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp10081 = result__;
                                           function after11(result__) {
                                             var tmp10082 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after11);if(result__ !== undefined) after11(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp10083 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1094 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1094));
  }
  
  var nodes2260 = $("<span>");
  el.append(nodes2260);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl29();
  }));
  
  function renderControl29() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2350 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2350); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2260;
      nodes2260 = node.contents();
      oldNodes.replaceWith(nodes2260);
    }));
  }
  renderControl29();
  root2349.append(el);
  callback(root2349); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root2351 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1353 = $("<input>");
  node1353.attr('type', "checkbox");
  
  var ref380 = b;
  node1353.attr('checked', !!ref380.get());
  subs__.addSub(ref380.addEventListener('change', function(_, ref, val) {
    if(ref === ref380) node1353.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1353, 'change', function() {
    b.set(!!node1353.attr('checked'));
  }));
  
  var val1096 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1096 !== null) {
    subs__.addSub(mobl.domBind(node1353, 'tap', val1096));
  }
  
  var val1097 = onchange.get();
  if(val1097 !== null) {
    subs__.addSub(mobl.domBind(node1353, 'change', val1097));
  }
  
  root2351.append(node1353);
  
  root2351.append(" ");
  
  var node1354 = $("<span>");
  
  var ref379 = label;
  node1354.text(""+ref379.get());
  var ignore13 = false;
  subs__.addSub(ref379.addEventListener('change', function(_, ref, val) {
    if(ignore13) return;
    node1354.text(""+val);
  }));
  subs__.addSub(ref379.rebind());
  
  
  var val1095 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after12(result__) {
                    var tmp10084 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after12);if(result__ !== undefined) after12(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1095 !== null) {
    subs__.addSub(mobl.domBind(node1354, 'tap', val1095));
  }
  
  root2351.append(node1354);
  callback(root2351); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';
ui.textFieldInvalidStyle = 'ui__textFieldInvalidStyle';
ui.textFieldLabelStyle = 'ui__textFieldLabelStyle';
ui.validationMessageStyle = 'ui__validationMessageStyle';
ui.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


ui.textField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2352 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1355 = $("<span>");
  root2352.append(node1355);
  var condSubs10 = new mobl.CompSubscription();
  subs__.addSub(condSubs10);
  var oldValue10;
  var renderCond10 = function() {
    var value62 = label.get();
    if(oldValue10 === value62) return;
    oldValue10 = value62;
    var subs__ = condSubs10;
    subs__.unsubscribe();
    node1355.empty();
    if(value62) {
      var result__ = null;
      var tmp9991 = mobl.ref(result__);
      
      var nodes2261 = $("<span>");
      node1355.append(nodes2261);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp9991, function(_, callback) {
        var root2353 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2353); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2261;
        nodes2261 = node.contents();
        oldNodes.replaceWith(nodes2261);
      }));
      
      
    } else {
      
    }
  };
  renderCond10();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond10();
  }));
  
  
  var node1356 = $("<span>");
  root2352.append(node1356);
  var condSubs11 = new mobl.CompSubscription();
  subs__.addSub(condSubs11);
  var oldValue11;
  var renderCond11 = function() {
    var value63 = validator.get();
    if(oldValue11 === value63) return;
    oldValue11 = value63;
    var subs__ = condSubs11;
    subs__.unsubscribe();
    node1356.empty();
    if(value63) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after16(result__) {
        var tmp10085 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp10086 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1357 = $("<input>");
        node1357.attr('type', "text");
        
        var ref381 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref381.get() !== null) {
          node1357.attr('class', ref381.get());
          subs__.addSub(ref381.addEventListener('change', function(_, ref, val) {
            node1357.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1357.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1357.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1357.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref381.rebind());
        
        var ref382 = placeholder;
        if(ref382.get() !== null) {
          node1357.attr('placeholder', ref382.get());
          subs__.addSub(ref382.addEventListener('change', function(_, ref, val) {
            node1357.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref382.rebind());
        
        var ref383 = temp;
        node1357.val(""+ref383.get());
        var ignore14 = false;
        subs__.addSub(ref383.addEventListener('change', function(_, ref, val) {
          if(ignore14) return;
          node1357.val(""+val);
        }));
        subs__.addSub(ref383.rebind());
        
        subs__.addSub(mobl.domBind(node1357, 'keyup change', function() {
          ignore14 = true;
          temp.set(mobl.stringTomobl__String(node1357.val()));
          ignore14 = false;
        }));
        
        
        var val1098 = onchange.get();
        if(val1098 !== null) {
          subs__.addSub(mobl.domBind(node1357, 'change', val1098));
        }
        
        var val1099 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after13(result__) {
                          var tmp10087 = result__;
                          function after14(result__) {
                            var tmp10088 = result__;
                            var result__ = tmp10088;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after14);if(result__ !== undefined) after14(result__);
                        }
                        var result__ = onkeyup.get()(event, after13);if(result__ !== undefined) after13(result__);
                      } else {
                        {
                          function after15(result__) {
                            var tmp10088 = result__;
                            var result__ = tmp10088;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after15);if(result__ !== undefined) after15(result__);
                        }
                      }
                    };
        if(val1099 !== null) {
          subs__.addSub(mobl.domBind(node1357, 'keyup', val1099));
        }
        
        var val1100 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1100 !== null) {
          subs__.addSub(mobl.domBind(node1357, 'blur', val1100));
        }
        
        node1356.append(node1357);
        var result__ = null;
        var tmp9992 = mobl.ref(result__);
        
        var nodes2262 = $("<span>");
        node1356.append(nodes2262);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp9992, function(_, callback) {
          var root2354 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2354); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2262;
          nodes2262 = node.contents();
          oldNodes.replaceWith(nodes2262);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after16);if(result__ !== undefined) after16(result__);
    } else {
      
      var node1358 = $("<input>");
      node1358.attr('type', "text");
      
      var ref384 = style;
      if(ref384.get() !== null) {
        node1358.attr('class', ref384.get());
        subs__.addSub(ref384.addEventListener('change', function(_, ref, val) {
          node1358.attr('class', val);
        }));
        
      }
      subs__.addSub(ref384.rebind());
      
      var ref385 = placeholder;
      if(ref385.get() !== null) {
        node1358.attr('placeholder', ref385.get());
        subs__.addSub(ref385.addEventListener('change', function(_, ref, val) {
          node1358.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref385.rebind());
      
      var ref386 = s;
      node1358.val(""+ref386.get());
      var ignore15 = false;
      subs__.addSub(ref386.addEventListener('change', function(_, ref, val) {
        if(ignore15) return;
        node1358.val(""+val);
      }));
      subs__.addSub(ref386.rebind());
      
      subs__.addSub(mobl.domBind(node1358, 'keyup change', function() {
        ignore15 = true;
        s.set(mobl.stringTomobl__String(node1358.val()));
        ignore15 = false;
      }));
      
      
      var val1101 = onchange.get();
      if(val1101 !== null) {
        subs__.addSub(mobl.domBind(node1358, 'change', val1101));
      }
      
      var val1102 = onkeyup.get();
      if(val1102 !== null) {
        subs__.addSub(mobl.domBind(node1358, 'keyup', val1102));
      }
      
      var val1103 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1103 !== null) {
        subs__.addSub(mobl.domBind(node1358, 'blur', val1103));
      }
      
      node1356.append(node1358);
      
      
    }
  };
  renderCond11();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond11();
  }));
  
  callback(root2352); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2355 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2263 = $("<span>");
  root2355.append(nodes2263);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root2356 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2356); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2263;
    nodes2263 = node.contents();
    oldNodes.replaceWith(nodes2263);
  }));
  callback(root2355); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2357 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after17(result__) {
      var tmp10089 = result__;
      var result__ = tmp10089;
      var m = result__;
      var result__ = !m;
      if(result__) {
        var result__ = n2;
        n.set(result__);
        var result__ = m;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = m;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    var result__ = validator.get()(n2, after17);if(result__ !== undefined) after17(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes2264 = $("<span>");
  root2357.append(nodes2264);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root2358 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2358); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2264;
    nodes2264 = node.contents();
    oldNodes.replaceWith(nodes2264);
  }));
  callback(root2357); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root2359 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1359 = $("<span>");
  root2359.append(node1359);
  var condSubs12 = new mobl.CompSubscription();
  subs__.addSub(condSubs12);
  var oldValue12;
  var renderCond12 = function() {
    var value64 = label.get();
    if(oldValue12 === value64) return;
    oldValue12 = value64;
    var subs__ = condSubs12;
    subs__.unsubscribe();
    node1359.empty();
    if(value64) {
      
      var node1360 = $("<span>");
      node1360.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref390 = label;
      node1360.text(""+ref390.get());
      var ignore17 = false;
      subs__.addSub(ref390.addEventListener('change', function(_, ref, val) {
        if(ignore17) return;
        node1360.text(""+val);
      }));
      subs__.addSub(ref390.rebind());
      
      
      node1359.append(node1360);
      
      var node1361 = $("<span>");
      node1361.attr('style', "float: left");
      
      
      var node1362 = $("<input>");
      node1362.attr('type', "password");
      
      var ref387 = style;
      if(ref387.get() !== null) {
        node1362.attr('class', ref387.get());
        subs__.addSub(ref387.addEventListener('change', function(_, ref, val) {
          node1362.attr('class', val);
        }));
        
      }
      subs__.addSub(ref387.rebind());
      
      var ref388 = placeholder;
      if(ref388.get() !== null) {
        node1362.attr('placeholder', ref388.get());
        subs__.addSub(ref388.addEventListener('change', function(_, ref, val) {
          node1362.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref388.rebind());
      
      var ref389 = s;
      node1362.val(""+ref389.get());
      var ignore16 = false;
      subs__.addSub(ref389.addEventListener('change', function(_, ref, val) {
        if(ignore16) return;
        node1362.val(""+val);
      }));
      subs__.addSub(ref389.rebind());
      
      subs__.addSub(mobl.domBind(node1362, 'keyup change', function() {
        ignore16 = true;
        s.set(mobl.stringTomobl__String(node1362.val()));
        ignore16 = false;
      }));
      
      
      var val1104 = onchange.get();
      if(val1104 !== null) {
        subs__.addSub(mobl.domBind(node1362, 'change', val1104));
      }
      
      var val1105 = onkeyup.get();
      if(val1105 !== null) {
        subs__.addSub(mobl.domBind(node1362, 'keyup', val1105));
      }
      
      var val1106 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1106 !== null) {
        subs__.addSub(mobl.domBind(node1362, 'blur', val1106));
      }
      
      node1361.append(node1362);
      node1359.append(node1361);
      
      
      
      
    } else {
      
      var node1363 = $("<input>");
      node1363.attr('type', "password");
      
      var ref391 = style;
      if(ref391.get() !== null) {
        node1363.attr('class', ref391.get());
        subs__.addSub(ref391.addEventListener('change', function(_, ref, val) {
          node1363.attr('class', val);
        }));
        
      }
      subs__.addSub(ref391.rebind());
      
      var ref392 = placeholder;
      if(ref392.get() !== null) {
        node1363.attr('placeholder', ref392.get());
        subs__.addSub(ref392.addEventListener('change', function(_, ref, val) {
          node1363.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref392.rebind());
      
      var ref393 = s;
      node1363.val(""+ref393.get());
      var ignore18 = false;
      subs__.addSub(ref393.addEventListener('change', function(_, ref, val) {
        if(ignore18) return;
        node1363.val(""+val);
      }));
      subs__.addSub(ref393.rebind());
      
      subs__.addSub(mobl.domBind(node1363, 'keyup change', function() {
        ignore18 = true;
        s.set(mobl.stringTomobl__String(node1363.val()));
        ignore18 = false;
      }));
      
      
      var val1107 = onchange.get();
      if(val1107 !== null) {
        subs__.addSub(mobl.domBind(node1363, 'change', val1107));
      }
      
      var val1108 = onkeyup.get();
      if(val1108 !== null) {
        subs__.addSub(mobl.domBind(node1363, 'keyup', val1108));
      }
      
      var val1109 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1109 !== null) {
        subs__.addSub(mobl.domBind(node1363, 'blur', val1109));
      }
      
      node1359.append(node1363);
      
      
    }
  };
  renderCond12();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond12();
  }));
  
  callback(root2359); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root2360 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref398 = style;
  if(ref398.get() !== null) {
    sel.attr('class', ref398.get());
    subs__.addSub(ref398.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref398.rebind());
  
  var val1110 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after18(result__) {
                    var tmp10091 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after18);if(result__ !== undefined) after18(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1110 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1110));
  }
  
  
  var node1364 = mobl.loadingSpan();
  sel.append(node1364);
  var list13;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList13 = function() {
    var subs__ = listSubs__;
    list13 = options.get();
    list13.list(function(results13) {
      node1364.empty();
      for(var i57 = 0; i57 < results13.length; i57++) {
        (function() {
          var iternode13 = $("<span>");
          node1364.append(iternode13);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results13), i57), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results13), i57), "_2");
          
          var node1365 = $("<option>");
          
          var ref394 = optionDescription;
          node1365.text(""+ref394.get());
          var ignore19 = false;
          subs__.addSub(ref394.addEventListener('change', function(_, ref, val) {
            if(ignore19) return;
            node1365.text(""+val);
          }));
          subs__.addSub(ref394.rebind());
          
          
          var ref395 = optionStyle;
          if(ref395.get() !== null) {
            node1365.attr('class', ref395.get());
            subs__.addSub(ref395.addEventListener('change', function(_, ref, val) {
              node1365.attr('class', val);
            }));
            
          }
          subs__.addSub(ref395.rebind());
          
          var ref396 = optionValue;
          if(ref396.get() !== null) {
            node1365.attr('value', ref396.get());
            subs__.addSub(ref396.addEventListener('change', function(_, ref, val) {
              node1365.attr('value', val);
            }));
            
          }
          subs__.addSub(ref396.rebind());
          
          var ref397 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref397.get() !== null) {
            node1365.attr('selected', ref397.get());
            subs__.addSub(ref397.addEventListener('change', function(_, ref, val) {
              node1365.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1365.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1365.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref397.rebind());
          
          iternode13.append(node1365);
          
          var oldNodes = iternode13;
          iternode13 = iternode13.contents();
          oldNodes.replaceWith(iternode13);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list13.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
    });
  };
  renderList13();
  
  root2360.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root2360); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root2361 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  var result__ = null;
  var tmp10001 = mobl.ref(result__);
  
  var result__ = null;
  var tmp10000 = mobl.ref(result__);
  
  var result__ = null;
  var tmp9999 = mobl.ref(result__);
  
  var nodes2265 = $("<span>");
  root2361.append(nodes2265);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp9999, tmp10000, tmp10001, function(_, callback) {
    var root2362 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1366 = mobl.loadingSpan();
    root2362.append(node1366);
    var list14;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList14 = function() {
      var subs__ = listSubs__;
      list14 = tabs.get();
      list14.list(function(results14) {
        node1366.empty();
        for(var i58 = 0; i58 < results14.length; i58++) {
          (function() {
            var iternode14 = $("<span>");
            node1366.append(iternode14);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results14), i58), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results14), i58), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results14), i58), "_3");
            var result__ = activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
            var tmp9996 = mobl.ref(result__);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp9996.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp9996.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp9996.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp9996.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = tabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp9995 = mobl.ref(result__);
            
            var result__ = null;
            var tmp9998 = mobl.ref(result__);
            
            var result__ = null;
            var tmp9997 = mobl.ref(result__);
            
            var nodes2266 = $("<span>");
            iternode14.append(nodes2266);
            subs__.addSub((mobl.span)(tmp9996, tmp9997, tmp9995, tmp9998, function(_, callback) {
              var root2363 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp9994 = mobl.ref(result__);
              
              var result__ = null;
              var tmp9993 = mobl.ref(result__);
              
              var nodes2267 = $("<span>");
              root2363.append(nodes2267);
              subs__.addSub((mobl.label)(tabName, tmp9993, tmp9994, function(_, callback) {
                var root2364 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2364); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2267;
                nodes2267 = node.contents();
                oldNodes.replaceWith(nodes2267);
              }));
              callback(root2363); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2266;
              nodes2266 = node.contents();
              oldNodes.replaceWith(nodes2266);
            }));
            
            var oldNodes = iternode14;
            iternode14 = iternode14.contents();
            oldNodes.replaceWith(iternode14);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list14.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
      });
    };
    renderList14();
    
    callback(root2362); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2265;
    nodes2265 = node.contents();
    oldNodes.replaceWith(nodes2265);
  }));
  
  var node1367 = mobl.loadingSpan();
  root2361.append(node1367);
  var list15;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList15 = function() {
    var subs__ = listSubs__;
    list15 = tabs.get();
    list15.list(function(results15) {
      node1367.empty();
      for(var i59 = 0; i59 < results15.length; i59++) {
        (function() {
          var iternode15 = $("<span>");
          node1367.append(iternode15);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results15), i59), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results15), i59), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results15), i59), "_3");
          var result__ = activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
          var tmp10002 = mobl.ref(result__);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp10002.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp10002.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp10002.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp10002.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          var result__ = null;
          var tmp10005 = mobl.ref(result__);
          
          var result__ = null;
          var tmp10004 = mobl.ref(result__);
          
          var result__ = null;
          var tmp10003 = mobl.ref(result__);
          
          var nodes2268 = $("<span>");
          iternode15.append(nodes2268);
          subs__.addSub((mobl.block)(tmp10002, tmp10003, tmp10004, tmp10005, function(_, callback) {
            var root2365 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes2269 = $("<span>");
            root2365.append(nodes2269);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root2366 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2270 = $("<span>");
              root2366.append(nodes2270);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl30();
              }));
              
              function renderControl30() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root2367 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2367); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2270;
                  nodes2270 = node.contents();
                  oldNodes.replaceWith(nodes2270);
                }));
              }
              renderControl30();
              callback(root2366); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2269;
              nodes2269 = node.contents();
              oldNodes.replaceWith(nodes2269);
            }));
            callback(root2365); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes2268;
            nodes2268 = node.contents();
            oldNodes.replaceWith(nodes2268);
          }));
          
          var oldNodes = iternode15;
          iternode15 = iternode15.contents();
          oldNodes.replaceWith(iternode15);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list15.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
    });
  };
  renderList15();
  
  callback(root2361); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root2368 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1368 = $("<div>");
  
  var ref402 = mobl.ref(ui.searchboxStyle);
  if(ref402.get() !== null) {
    node1368.attr('class', ref402.get());
    subs__.addSub(ref402.addEventListener('change', function(_, ref, val) {
      node1368.attr('class', val);
    }));
    
  }
  subs__.addSub(ref402.rebind());
  
  
  var node1369 = $("<input>");
  node1369.attr('type', "search");
  
  var ref399 = mobl.ref(ui.searchBoxInputStyle);
  if(ref399.get() !== null) {
    node1369.attr('class', ref399.get());
    subs__.addSub(ref399.addEventListener('change', function(_, ref, val) {
      node1369.attr('class', val);
    }));
    
  }
  subs__.addSub(ref399.rebind());
  
  var ref400 = placeholder;
  if(ref400.get() !== null) {
    node1369.attr('placeholder', ref400.get());
    subs__.addSub(ref400.addEventListener('change', function(_, ref, val) {
      node1369.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref400.rebind());
  
  var ref401 = s;
  node1369.val(""+ref401.get());
  var ignore20 = false;
  subs__.addSub(ref401.addEventListener('change', function(_, ref, val) {
    if(ignore20) return;
    node1369.val(""+val);
  }));
  subs__.addSub(ref401.rebind());
  
  subs__.addSub(mobl.domBind(node1369, 'keyup change', function() {
    ignore20 = true;
    s.set(mobl.stringTomobl__String(node1369.val()));
    ignore20 = false;
  }));
  
  
  var val1111 = onsearch.get();
  if(val1111 !== null) {
    subs__.addSub(mobl.domBind(node1369, 'change', val1111));
  }
  
  var val1112 = onkeyup.get();
  if(val1112 !== null) {
    subs__.addSub(mobl.domBind(node1369, 'keyup', val1112));
  }
  node1369.attr('autocorrect', false);
  node1369.attr('autocapitalize', false);
  node1369.attr('autocomplete', false);
  
  node1368.append(node1369);
  root2368.append(node1368);
  callback(root2368); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root2369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref403 = mobl.ref(ui.contextMenuStyle);
  if(ref403.get() !== null) {
    menu.attr('class', ref403.get());
    subs__.addSub(ref403.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref403.rebind());
  
  var nodes2271 = $("<span>");
  menu.append(nodes2271);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl31();
  }));
  
  function renderControl31() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2370); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2271;
      nodes2271 = node.contents();
      oldNodes.replaceWith(nodes2271);
    }));
  }
  renderControl31();
  root2369.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1113 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp10094 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1113 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1113));
  }
  
  root2369.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root2369); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root2371 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp10079 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp10079.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1370 = $("<span>");
  root2371.append(node1370);
  var condSubs13 = new mobl.CompSubscription();
  subs__.addSub(condSubs13);
  var oldValue13;
  var renderCond13 = function() {
    var value65 = tmp10079.get();
    if(oldValue13 === value65) return;
    oldValue13 = value65;
    var subs__ = condSubs13;
    subs__.unsubscribe();
    node1370.empty();
    if(value65) {
      items.get().one(function(result__) {
        var tmp10095 = result__;
        var current = mobl.ref(result__);
        
        var node1371 = $("<div>");
        node1371.attr('width', "100%");
        
        
        var node1372 = $("<div>");
        node1372.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes2274 = $("<span>");
        node1372.append(nodes2274);
        subs__.addSub((ui.group)(function(_, callback) {
          var root2374 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1375 = mobl.loadingSpan();
          root2374.append(node1375);
          var list16;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList16 = function() {
            var subs__ = listSubs__;
            list16 = items.get();
            list16.list(function(results16) {
              node1375.empty();
              for(var i60 = 0; i60 < results16.length; i60++) {
                (function() {
                  var iternode16 = $("<span>");
                  node1375.append(iternode16);
                  var it;
                  it = mobl.ref(mobl.ref(results16), i60);
                  var result__ = it.get() == current.get();
                  var tmp10019 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp10019.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp10019.set(it.get() == current.get());
                  }));
                  
                  
                  var node1376 = $("<span>");
                  iternode16.append(node1376);
                  var condSubs15 = new mobl.CompSubscription();
                  subs__.addSub(condSubs15);
                  var oldValue15;
                  var renderCond15 = function() {
                    var value67 = tmp10019.get();
                    if(oldValue15 === value67) return;
                    oldValue15 = value67;
                    var subs__ = condSubs15;
                    subs__.unsubscribe();
                    node1376.empty();
                    if(value67) {
                      var result__ = false;
                      var tmp10015 = mobl.ref(result__);
                      
                      var result__ = null;
                      var tmp10014 = mobl.ref(result__);
                      
                      var result__ = null;
                      var tmp10013 = mobl.ref(result__);
                      
                      var nodes2275 = $("<span>");
                      node1376.append(nodes2275);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp10013, tmp10014, tmp10015, function(_, callback) {
                        var root2375 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes2276 = $("<span>");
                        root2375.append(nodes2276);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl33();
                        }));
                        
                        function renderControl33() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2376 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2376); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes2276;
                            nodes2276 = node.contents();
                            oldNodes.replaceWith(nodes2276);
                          }));
                        }
                        renderControl33();
                        callback(root2375); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2275;
                        nodes2275 = node.contents();
                        oldNodes.replaceWith(nodes2275);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp10017 = mobl.ref(result__);
                      
                      var result__ = true;
                      var tmp10016 = mobl.ref(result__);
                      
                      var result__ = null;
                      var tmp10018 = mobl.ref(result__);
                      
                      var nodes2277 = $("<span>");
                      node1376.append(nodes2277);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10017, tmp10018, tmp10016, function(_, callback) {
                        var root2377 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes2278 = $("<span>");
                        root2377.append(nodes2278);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl34();
                        }));
                        
                        function renderControl34() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2378 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2378); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes2278;
                            nodes2278 = node.contents();
                            oldNodes.replaceWith(nodes2278);
                          }));
                        }
                        renderControl34();
                        callback(root2377); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2277;
                        nodes2277 = node.contents();
                        oldNodes.replaceWith(nodes2277);
                      }));
                      
                      
                    }
                  };
                  renderCond15();
                  subs__.addSub(tmp10019.addEventListener('change', function() {
                    renderCond15();
                  }));
                  
                  
                  var oldNodes = iternode16;
                  iternode16 = iternode16.contents();
                  oldNodes.replaceWith(iternode16);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list16.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
            });
          };
          renderList16();
          
          callback(root2374); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes2274;
          nodes2274 = node.contents();
          oldNodes.replaceWith(nodes2274);
        }));
        node1371.append(node1372);
        
        var node1373 = $("<div>");
        node1373.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1374 = $("<span>");
        node1373.append(node1374);
        var condSubs14 = new mobl.CompSubscription();
        subs__.addSub(condSubs14);
        var oldValue14;
        var renderCond14 = function() {
          var value66 = current.get();
          if(oldValue14 === value66) return;
          oldValue14 = value66;
          var subs__ = condSubs14;
          subs__.unsubscribe();
          node1374.empty();
          if(value66) {
            var nodes2272 = $("<span>");
            node1374.append(nodes2272);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl32();
            }));
            
            function renderControl32() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root2372 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2372); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2272;
                nodes2272 = node.contents();
                oldNodes.replaceWith(nodes2272);
              }));
            }
            renderControl32();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp10020 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10022 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10021 = mobl.ref(result__);
            
            var nodes2273 = $("<span>");
            node1374.append(nodes2273);
            subs__.addSub((mobl.label)(tmp10020, tmp10021, tmp10022, function(_, callback) {
              var root2373 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2373); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2273;
              nodes2273 = node.contents();
              oldNodes.replaceWith(nodes2273);
            }));
            
            
          }
        };
        renderCond14();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond14();
        }));
        
        node1371.append(node1373);
        node1370.append(node1371);
        
        
        
        
        
        
      });
    } else {
      var nodes2279 = $("<span>");
      node1370.append(nodes2279);
      subs__.addSub((ui.group)(function(_, callback) {
        var root2379 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1377 = mobl.loadingSpan();
        root2379.append(node1377);
        var list17;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList17 = function() {
          var subs__ = listSubs__;
          list17 = items.get();
          list17.list(function(results17) {
            node1377.empty();
            for(var i61 = 0; i61 < results17.length; i61++) {
              (function() {
                var iternode17 = $("<span>");
                node1377.append(iternode17);
                var it;
                it = mobl.ref(mobl.ref(results17), i61);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp10096 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp10006 = mobl.ref(result__);
                
                var result__ = false;
                var tmp10008 = mobl.ref(result__);
                
                var result__ = null;
                var tmp10007 = mobl.ref(result__);
                
                var nodes2280 = $("<span>");
                iternode17.append(nodes2280);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10006, tmp10007, tmp10008, function(_, callback) {
                  var root2380 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2281 = $("<span>");
                  root2380.append(nodes2281);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl35();
                  }));
                  
                  function renderControl35() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root2381 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2381); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2281;
                      nodes2281 = node.contents();
                      oldNodes.replaceWith(nodes2281);
                    }));
                  }
                  renderControl35();
                  callback(root2380); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2280;
                  nodes2280 = node.contents();
                  oldNodes.replaceWith(nodes2280);
                }));
                
                var oldNodes = iternode17;
                iternode17 = iternode17.contents();
                oldNodes.replaceWith(iternode17);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list17.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
          });
        };
        renderList17();
        
        callback(root2379); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2279;
        nodes2279 = node.contents();
        oldNodes.replaceWith(nodes2279);
      }));
      
      
    }
  };
  renderCond13();
  subs__.addSub(tmp10079.addEventListener('change', function() {
    renderCond13();
  }));
  
  callback(root2371); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root2382 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp10011 = mobl.ref(result__);
  
  var result__ = null;
  var tmp10012 = mobl.ref(result__);
  
  var nodes2282 = $("<span>");
  root2382.append(nodes2282);
  subs__.addSub((ui.header)(tmp10011, tmp10012, function(_, callback) {
    var root2383 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10010 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10009 = mobl.ref(result__);
    
    var nodes2283 = $("<span>");
    root2383.append(nodes2283);
    subs__.addSub((ui.backButton)(tmp10009, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10010, function(_, callback) {
      var root2384 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2384); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2283;
      nodes2283 = node.contents();
      oldNodes.replaceWith(nodes2283);
    }));
    callback(root2383); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2282;
    nodes2282 = node.contents();
    oldNodes.replaceWith(nodes2282);
  }));
  var nodes2284 = $("<span>");
  root2382.append(nodes2284);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl36();
  }));
  
  function renderControl36() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root2385 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2385); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2284;
      nodes2284 = node.contents();
      oldNodes.replaceWith(nodes2284);
    }));
  }
  renderControl36();
  callback(root2382); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root2386 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes2285 = $("<span>");
  root2386.append(nodes2285);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2387 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1378 = mobl.loadingSpan();
    root2387.append(node1378);
    var list18;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList18 = function() {
      var subs__ = listSubs__;
      list18 = coll.get();
      list18.list(function(results18) {
        node1378.empty();
        for(var i62 = 0; i62 < results18.length; i62++) {
          (function() {
            var iternode18 = $("<span>");
            node1378.append(iternode18);
            var it;
            it = mobl.ref(mobl.ref(results18), i62);
            var result__ = it.get() == selected.get();
            var tmp10029 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp10029.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp10029.set(it.get() == selected.get());
            }));
            
            
            var node1379 = $("<span>");
            iternode18.append(node1379);
            var condSubs16 = new mobl.CompSubscription();
            subs__.addSub(condSubs16);
            var oldValue16;
            var renderCond16 = function() {
              var value68 = tmp10029.get();
              if(oldValue16 === value68) return;
              oldValue16 = value68;
              var subs__ = condSubs16;
              subs__.unsubscribe();
              node1379.empty();
              if(value68) {
                var result__ = false;
                var tmp10025 = mobl.ref(result__);
                
                var result__ = null;
                var tmp10024 = mobl.ref(result__);
                
                var result__ = null;
                var tmp10023 = mobl.ref(result__);
                
                var nodes2286 = $("<span>");
                node1379.append(nodes2286);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10023, tmp10024, tmp10025, function(_, callback) {
                  var root2388 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2287 = $("<span>");
                  root2388.append(nodes2287);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl37();
                  }));
                  
                  function renderControl37() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root2389 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2389); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2287;
                      nodes2287 = node.contents();
                      oldNodes.replaceWith(nodes2287);
                    }));
                  }
                  renderControl37();
                  callback(root2388); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2286;
                  nodes2286 = node.contents();
                  oldNodes.replaceWith(nodes2286);
                }));
                
                
              } else {
                var result__ = true;
                var tmp10027 = mobl.ref(result__);
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp10026 = mobl.ref(result__);
                
                var result__ = null;
                var tmp10028 = mobl.ref(result__);
                
                var nodes2288 = $("<span>");
                node1379.append(nodes2288);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10026, tmp10028, tmp10027, function(_, callback) {
                  var root2390 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2289 = $("<span>");
                  root2390.append(nodes2289);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl38();
                  }));
                  
                  function renderControl38() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root2391 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2391); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2289;
                      nodes2289 = node.contents();
                      oldNodes.replaceWith(nodes2289);
                    }));
                  }
                  renderControl38();
                  callback(root2390); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2288;
                  nodes2288 = node.contents();
                  oldNodes.replaceWith(nodes2288);
                }));
                
                
              }
            };
            renderCond16();
            subs__.addSub(tmp10029.addEventListener('change', function() {
              renderCond16();
            }));
            
            
            var oldNodes = iternode18;
            iternode18 = iternode18.contents();
            oldNodes.replaceWith(iternode18);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list18.addEventListener('change', function() { listSubs__.unsubscribe(); renderList18(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList18(true); }));
      });
    };
    renderList18();
    
    callback(root2387); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2285;
    nodes2285 = node.contents();
    oldNodes.replaceWith(nodes2285);
  }));
  callback(root2386); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root2392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp10097 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp10030 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp10030.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp10030.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp10030.set(coll.get().limit(n.get()));
    }));
    
    
    var node1380 = mobl.loadingSpan();
    root2392.append(node1380);
    var list19;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList19 = function() {
      var subs__ = listSubs__;
      list19 = tmp10030.get();
      list19.list(function(results19) {
        node1380.empty();
        for(var i63 = 0; i63 < results19.length; i63++) {
          (function() {
            var iternode19 = $("<span>");
            node1380.append(iternode19);
            var it;
            it = mobl.ref(mobl.ref(results19), i63);
            var nodes2290 = $("<span>");
            iternode19.append(nodes2290);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl39();
            }));
            
            function renderControl39() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root2393 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2393); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2290;
                nodes2290 = node.contents();
                oldNodes.replaceWith(nodes2290);
              }));
            }
            renderControl39();
            
            var oldNodes = iternode19;
            iternode19 = iternode19.contents();
            oldNodes.replaceWith(iternode19);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list19.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
        subs__.addSub(tmp10030.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
      });
    };
    renderList19();
    
    var result__ = n.get() < total.get();
    var tmp10036 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp10036.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp10036.set(n.get() < total.get());
    }));
    
    
    var node1381 = $("<span>");
    root2392.append(node1381);
    var condSubs17 = new mobl.CompSubscription();
    subs__.addSub(condSubs17);
    var oldValue17;
    var renderCond17 = function() {
      var value69 = tmp10036.get();
      if(oldValue17 === value69) return;
      oldValue17 = value69;
      var subs__ = condSubs17;
      subs__.unsubscribe();
      node1381.empty();
      if(value69) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp10033 = mobl.ref(result__);
        
        var result__ = null;
        var tmp10035 = mobl.ref(result__);
        
        var result__ = null;
        var tmp10034 = mobl.ref(result__);
        
        var nodes2291 = $("<span>");
        node1381.append(nodes2291);
        subs__.addSub((mobl.block)(moreStyle, tmp10034, tmp10033, tmp10035, function(_, callback) {
          var root2394 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var result__ = null;
          var tmp10032 = mobl.ref(result__);
          
          var result__ = null;
          var tmp10031 = mobl.ref(result__);
          
          var nodes2292 = $("<span>");
          root2394.append(nodes2292);
          subs__.addSub((mobl.label)(moreLabel, tmp10031, tmp10032, function(_, callback) {
            var root2395 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2395); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2292;
            nodes2292 = node.contents();
            oldNodes.replaceWith(nodes2292);
          }));
          callback(root2394); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes2291;
          nodes2291 = node.contents();
          oldNodes.replaceWith(nodes2291);
        }));
        
        
      } else {
        
      }
    };
    renderCond17();
    subs__.addSub(tmp10036.addEventListener('change', function() {
      renderCond17();
    }));
    
    callback(root2392); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root2396 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2293 = $("<span>");
  root2396.append(nodes2293);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2397 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1382 = mobl.loadingSpan();
    root2397.append(node1382);
    var list20;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList20 = function() {
      var subs__ = listSubs__;
      list20 = items.get();
      list20.list(function(results20) {
        node1382.empty();
        for(var i64 = 0; i64 < results20.length; i64++) {
          (function() {
            var iternode20 = $("<span>");
            node1382.append(iternode20);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results20), i64), "_1");it = mobl.ref(mobl.ref(mobl.ref(results20), i64), "_2");
            var result__ = false;
            var tmp10040 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10039 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10038 = mobl.ref(result__);
            
            var nodes2294 = $("<span>");
            iternode20.append(nodes2294);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10038, tmp10039, tmp10040, function(_, callback) {
              var root2398 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp10037 = mobl.ref(result__);
              
              var nodes2295 = $("<span>");
              root2398.append(nodes2295);
              subs__.addSub((ui.checkBox)(checked, it, tmp10037, function(_, callback) {
                var root2399 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2399); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2295;
                nodes2295 = node.contents();
                oldNodes.replaceWith(nodes2295);
              }));
              callback(root2398); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2294;
              nodes2294 = node.contents();
              oldNodes.replaceWith(nodes2294);
            }));
            
            var oldNodes = iternode20;
            iternode20 = iternode20.contents();
            oldNodes.replaceWith(iternode20);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list20.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
      });
    };
    renderList20();
    
    callback(root2397); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2293;
    nodes2293 = node.contents();
    oldNodes.replaceWith(nodes2293);
  }));
  callback(root2396); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root2400 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll171) {
    coll171 = coll171.reverse();
    function processOne49() {
      var it;
      it = coll171.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll171.length > 0) processOne49(); else rest49();
      
    }
    function rest49() {
      var result__ = null;
      var tmp10044 = mobl.ref(result__);
      
      var nodes2296 = $("<span>");
      root2400.append(nodes2296);
      subs__.addSub((ui.header)(title, tmp10044, function(_, callback) {
        var root2401 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp10041 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp10042 = mobl.ref(result__);
        
        var nodes2297 = $("<span>");
        root2401.append(nodes2297);
        subs__.addSub((ui.backButton)(tmp10042, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10041, function(_, callback) {
          var root2402 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2402); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2297;
          nodes2297 = node.contents();
          oldNodes.replaceWith(nodes2297);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll170) {
                           coll170 = coll170.reverse();
                           function processOne48() {
                             var checked;var it;
                             var tmp10099 = coll170.pop();
                             checked = tmp10099._1;it = tmp10099._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll170.length > 0) processOne48(); else rest48();
                               
                             } else {
                               {
                                 
                                 if(coll170.length > 0) processOne48(); else rest48();
                                 
                               }
                             }
                           }
                           function rest48() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll170.length > 0) processOne48(); else rest48();
                         });
                         
                       };
        var tmp10043 = mobl.ref(result__);
        
        var nodes2298 = $("<span>");
        root2401.append(nodes2298);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10043, function(_, callback) {
          var root2403 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2403); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2298;
          nodes2298 = node.contents();
          oldNodes.replaceWith(nodes2298);
        }));
        callback(root2401); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2296;
        nodes2296 = node.contents();
        oldNodes.replaceWith(nodes2296);
      }));
      var nodes2299 = $("<span>");
      root2400.append(nodes2299);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root2404 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2404); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2299;
        nodes2299 = node.contents();
        oldNodes.replaceWith(nodes2299);
      }));
      callback(root2400); return subs__;
      
      
    }
    if(coll171.length > 0) processOne49(); else rest49();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root2405 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var result__ = null;
  var tmp10046 = mobl.ref(result__);
  
  var result__ = null;
  var tmp10045 = mobl.ref(result__);
  
  var nodes2300 = $("<span>");
  root2405.append(nodes2300);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp10045, tmp10046, function(_, callback) {
    var root2406 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2406); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2300;
    nodes2300 = node.contents();
    oldNodes.replaceWith(nodes2300);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp10047 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp10047.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp10047.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp10047.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp10047.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp10047.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes2301 = $("<span>");
  root2405.append(nodes2301);
  subs__.addSub((ui.masterDetail)(tmp10047, masterItem, detailItem, function(_, callback) {
    var root2407 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2407); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2301;
    nodes2301 = node.contents();
    oldNodes.replaceWith(nodes2301);
  }));
  callback(root2405); return subs__;
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
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
  var root2408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  var result__ = null;
  var tmp10060 = mobl.ref(result__);
  
  var result__ = null;
  var tmp10059 = mobl.ref(result__);
  
  var result__ = null;
  var tmp10058 = mobl.ref(result__);
  
  var nodes2302 = $("<span>");
  root2408.append(nodes2302);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp10058, tmp10059, tmp10060, function(_, callback) {
    var root2409 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1383 = mobl.loadingSpan();
    root2409.append(node1383);
    var list21;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList21 = function() {
      var subs__ = listSubs__;
      list21 = sections.get();
      list21.list(function(results21) {
        node1383.empty();
        for(var i65 = 0; i65 < results21.length; i65++) {
          (function() {
            var iternode21 = $("<span>");
            node1383.append(iternode21);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results21), i65), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results21), i65), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp10051 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp10051.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp10051.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp10051.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp10051.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp10050 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10053 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10052 = mobl.ref(result__);
            
            var nodes2303 = $("<span>");
            iternode21.append(nodes2303);
            subs__.addSub((mobl.span)(tmp10051, tmp10052, tmp10050, tmp10053, function(_, callback) {
              var root2410 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp10049 = mobl.ref(result__);
              
              var result__ = null;
              var tmp10048 = mobl.ref(result__);
              
              var nodes2304 = $("<span>");
              root2410.append(nodes2304);
              subs__.addSub((mobl.label)(sectionName, tmp10048, tmp10049, function(_, callback) {
                var root2411 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2411); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2304;
                nodes2304 = node.contents();
                oldNodes.replaceWith(nodes2304);
              }));
              callback(root2410); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2303;
              nodes2303 = node.contents();
              oldNodes.replaceWith(nodes2303);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp10054 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp10054.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp10054.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp10054.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp10054.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var result__ = null;
            var tmp10057 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10056 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10055 = mobl.ref(result__);
            
            var nodes2305 = $("<span>");
            iternode21.append(nodes2305);
            subs__.addSub((mobl.block)(tmp10054, tmp10055, tmp10056, tmp10057, function(_, callback) {
              var root2412 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2306 = $("<span>");
              root2412.append(nodes2306);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl40();
              }));
              
              function renderControl40() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root2413 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2413); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2306;
                  nodes2306 = node.contents();
                  oldNodes.replaceWith(nodes2306);
                }));
              }
              renderControl40();
              callback(root2412); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2305;
              nodes2305 = node.contents();
              oldNodes.replaceWith(nodes2305);
            }));
            
            var oldNodes = iternode21;
            iternode21 = iternode21.contents();
            oldNodes.replaceWith(iternode21);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list21.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
      });
    };
    renderList21();
    
    callback(root2409); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2302;
    nodes2302 = node.contents();
    oldNodes.replaceWith(nodes2302);
  }));
  callback(root2408); return subs__;
  
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
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(elements, callback) {
  var root2414 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1384 = $("<table>");
  
  var ref404 = mobl.ref(ui.tableStyle);
  if(ref404.get() !== null) {
    node1384.attr('class', ref404.get());
    subs__.addSub(ref404.addEventListener('change', function(_, ref, val) {
      node1384.attr('class', val);
    }));
    
  }
  subs__.addSub(ref404.rebind());
  
  var nodes2307 = $("<span>");
  node1384.append(nodes2307);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl41();
  }));
  
  function renderControl41() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2415 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2415); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2307;
      nodes2307 = node.contents();
      oldNodes.replaceWith(nodes2307);
    }));
  }
  renderControl41();
  root2414.append(node1384);
  callback(root2414); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root2416 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1385 = $("<tr>");
  
  var ref405 = mobl.ref(ui.trStyle);
  if(ref405.get() !== null) {
    node1385.attr('class', ref405.get());
    subs__.addSub(ref405.addEventListener('change', function(_, ref, val) {
      node1385.attr('class', val);
    }));
    
  }
  subs__.addSub(ref405.rebind());
  
  var nodes2308 = $("<span>");
  node1385.append(nodes2308);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl42();
  }));
  
  function renderControl42() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2417 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2417); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2308;
      nodes2308 = node.contents();
      oldNodes.replaceWith(nodes2308);
    }));
  }
  renderControl42();
  root2416.append(node1385);
  callback(root2416); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root2418 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1386 = $("<td>");
  
  var ref406 = width;
  if(ref406.get() !== null) {
    node1386.attr('width', ref406.get());
    subs__.addSub(ref406.addEventListener('change', function(_, ref, val) {
      node1386.attr('width', val);
    }));
    
  }
  subs__.addSub(ref406.rebind());
  
  var ref407 = mobl.ref(ui.tdStyle);
  if(ref407.get() !== null) {
    node1386.attr('class', ref407.get());
    subs__.addSub(ref407.addEventListener('change', function(_, ref, val) {
      node1386.attr('class', val);
    }));
    
  }
  subs__.addSub(ref407.rebind());
  
  var nodes2309 = $("<span>");
  node1386.append(nodes2309);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl43();
  }));
  
  function renderControl43() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2419 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2419); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2309;
      nodes2309 = node.contents();
      oldNodes.replaceWith(nodes2309);
    }));
  }
  renderControl43();
  root2418.append(node1386);
  callback(root2418); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root2420 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1387 = $("<td>");
  
  var ref408 = width;
  if(ref408.get() !== null) {
    node1387.attr('width', ref408.get());
    subs__.addSub(ref408.addEventListener('change', function(_, ref, val) {
      node1387.attr('width', val);
    }));
    
  }
  subs__.addSub(ref408.rebind());
  
  var ref409 = mobl.ref(ui.tdStyle);
  if(ref409.get() !== null) {
    node1387.attr('class', ref409.get());
    subs__.addSub(ref409.addEventListener('change', function(_, ref, val) {
      node1387.attr('class', val);
    }));
    
  }
  subs__.addSub(ref409.rebind());
  
  var nodes2310 = $("<span>");
  node1387.append(nodes2310);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl44();
  }));
  
  function renderControl44() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2421 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2421); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2310;
      nodes2310 = node.contents();
      oldNodes.replaceWith(nodes2310);
    }));
  }
  renderControl44();
  root2420.append(node1387);
  callback(root2420); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root2422 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1388 = $("<td>");
  
  var ref410 = width;
  if(ref410.get() !== null) {
    node1388.attr('width', ref410.get());
    subs__.addSub(ref410.addEventListener('change', function(_, ref, val) {
      node1388.attr('width', val);
    }));
    
  }
  subs__.addSub(ref410.rebind());
  
  var ref411 = mobl.ref(ui.tdStyle);
  if(ref411.get() !== null) {
    node1388.attr('class', ref411.get());
    subs__.addSub(ref411.addEventListener('change', function(_, ref, val) {
      node1388.attr('class', val);
    }));
    
  }
  subs__.addSub(ref411.rebind());
  
  
  var node1389 = $("<strong>");
  
  var nodes2311 = $("<span>");
  node1389.append(nodes2311);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl45();
  }));
  
  function renderControl45() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2423 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2423); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2311;
      nodes2311 = node.contents();
      oldNodes.replaceWith(nodes2311);
    }));
  }
  renderControl45();
  node1388.append(node1389);
  root2422.append(node1388);
  callback(root2422); return subs__;
  
  
  
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
}(ui));
ui.customMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root2424 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2312 = $("<span>");
  root2424.append(nodes2312);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2425 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1390 = mobl.loadingSpan();
    root2425.append(node1390);
    var list22;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList22 = function() {
      var subs__ = listSubs__;
      list22 = items.get();
      list22.list(function(results22) {
        node1390.empty();
        for(var i66 = 0; i66 < results22.length; i66++) {
          (function() {
            var iternode22 = $("<span>");
            node1390.append(iternode22);
            var it;
            it = mobl.ref(mobl.ref(results22), i66);
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                             var tmp10101 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           };
            var tmp10061 = mobl.ref(result__);
            
            var result__ = false;
            var tmp10063 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10062 = mobl.ref(result__);
            
            var nodes2313 = $("<span>");
            iternode22.append(nodes2313);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp10061, tmp10062, tmp10063, function(_, callback) {
              var root2426 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2314 = $("<span>");
              root2426.append(nodes2314);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl46();
              }));
              
              function renderControl46() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root2427 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2427); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2314;
                  nodes2314 = node.contents();
                  oldNodes.replaceWith(nodes2314);
                }));
              }
              renderControl46();
              callback(root2426); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2313;
              nodes2313 = node.contents();
              oldNodes.replaceWith(nodes2313);
            }));
            
            var oldNodes = iternode22;
            iternode22 = iternode22.contents();
            oldNodes.replaceWith(iternode22);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list22.addEventListener('change', function() { listSubs__.unsubscribe(); renderList22(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList22(true); }));
      });
    };
    renderList22();
    
    callback(root2425); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2312;
    nodes2312 = node.contents();
    oldNodes.replaceWith(nodes2312);
  }));
  callback(root2424); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root2428 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   if(screenCallback) screenCallback();
                   return;
                   if(callback && callback.apply) callback(); return;
                 };
  var tmp10065 = mobl.ref(result__);
  
  var result__ = "Back";
  var tmp10064 = mobl.ref(result__);
  
  var nodes2315 = $("<span>");
  root2428.append(nodes2315);
  subs__.addSub((ui.backButton)(tmp10064, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10065, function(_, callback) {
    var root2429 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2429); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2315;
    nodes2315 = node.contents();
    oldNodes.replaceWith(nodes2315);
  }));
  var nodes2316 = $("<span>");
  root2428.append(nodes2316);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl47();
  }));
  
  function renderControl47() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root2430 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2430); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2316;
      nodes2316 = node.contents();
      oldNodes.replaceWith(nodes2316);
    }));
  }
  renderControl47();
  callback(root2428); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root2431 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1391 = $("<div>");
  
  var ref415 = mobl.ref(ui.customHeaderStyle);
  if(ref415.get() !== null) {
    node1391.attr('class', ref415.get());
    subs__.addSub(ref415.addEventListener('change', function(_, ref, val) {
      node1391.attr('class', val);
    }));
    
  }
  subs__.addSub(ref415.rebind());
  
  var val1114 = onclick.get();
  if(val1114 !== null) {
    subs__.addSub(mobl.domBind(node1391, 'tap', val1114));
  }
  
  
  var node1392 = $("<div>");
  
  var ref414 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref414.get() !== null) {
    node1392.attr('class', ref414.get());
    subs__.addSub(ref414.addEventListener('change', function(_, ref, val) {
      node1392.attr('class', val);
    }));
    
  }
  subs__.addSub(ref414.rebind());
  
  
  var node1393 = $("<div>");
  
  var ref412 = text;
  node1393.text(""+ref412.get());
  var ignore21 = false;
  subs__.addSub(ref412.addEventListener('change', function(_, ref, val) {
    if(ignore21) return;
    node1393.text(""+val);
  }));
  subs__.addSub(ref412.rebind());
  
  
  var ref413 = mobl.ref(ui.customHeaderTextStyle);
  if(ref413.get() !== null) {
    node1393.attr('class', ref413.get());
    subs__.addSub(ref413.addEventListener('change', function(_, ref, val) {
      node1393.attr('class', val);
    }));
    
  }
  subs__.addSub(ref413.rebind());
  
  node1392.append(node1393);
  node1391.append(node1392);
  var nodes2317 = $("<span>");
  node1391.append(nodes2317);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl48();
  }));
  
  function renderControl48() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2432 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2432); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2317;
      nodes2317 = node.contents();
      oldNodes.replaceWith(nodes2317);
    }));
  }
  renderControl48();
  root2431.append(node1391);
  callback(root2431); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root2433 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref416 = mobl.ref(ui.customItemStyle);
  if(ref416.get() !== null) {
    el.attr('class', ref416.get());
    subs__.addSub(ref416.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref416.rebind());
  
  var ref417 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref417.get() !== null) {
    el.attr('class', ref417.get());
    subs__.addSub(ref417.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(mobl.ref(ui.customItemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(mobl.ref(ui.customItemPushedStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    subs__.addSub(mobl.ref(ui.customItemStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
    }));
    
  }
  subs__.addSub(ref417.rebind());
  
  var val1115 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp10102 = result__;
                                           function after19(result__) {
                                             var tmp10103 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after19);if(result__ !== undefined) after19(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp10104 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1115 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1115));
  }
  
  var nodes2318 = $("<span>");
  el.append(nodes2318);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl49();
  }));
  
  function renderControl49() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2434 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2434); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2318;
      nodes2318 = node.contents();
      oldNodes.replaceWith(nodes2318);
    }));
  }
  renderControl49();
  root2433.append(el);
  callback(root2433); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root2435 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node1394 = $("<div>");
  node1394.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node1396 = mobl.loadingSpan();
  node1394.append(node1396);
  var list24;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList24 = function() {
    var subs__ = listSubs__;
    list24 = tabs.get();
    list24.list(function(results24) {
      node1396.empty();
      for(var i68 = 0; i68 < results24.length; i68++) {
        (function() {
          var iternode24 = $("<span>");
          node1396.append(iternode24);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results24), i68), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results24), i68), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results24), i68), "_3");
          var result__ = activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle;
          var tmp10066 = mobl.ref(result__);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp10066.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp10066.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp10066.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp10066.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          var result__ = null;
          var tmp10069 = mobl.ref(result__);
          
          var result__ = null;
          var tmp10068 = mobl.ref(result__);
          
          var result__ = null;
          var tmp10067 = mobl.ref(result__);
          
          var nodes2322 = $("<span>");
          iternode24.append(nodes2322);
          subs__.addSub((mobl.block)(tmp10066, tmp10067, tmp10068, tmp10069, function(_, callback) {
            var root2439 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes2323 = $("<span>");
            root2439.append(nodes2323);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root2440 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2324 = $("<span>");
              root2440.append(nodes2324);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl50();
              }));
              
              function renderControl50() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root2441 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2441); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2324;
                  nodes2324 = node.contents();
                  oldNodes.replaceWith(nodes2324);
                }));
              }
              renderControl50();
              callback(root2440); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2323;
              nodes2323 = node.contents();
              oldNodes.replaceWith(nodes2323);
            }));
            callback(root2439); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes2322;
            nodes2322 = node.contents();
            oldNodes.replaceWith(nodes2322);
          }));
          
          var oldNodes = iternode24;
          iternode24 = iternode24.contents();
          oldNodes.replaceWith(iternode24);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list24.addEventListener('change', function() { listSubs__.unsubscribe(); renderList24(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList24(true); }));
    });
  };
  renderList24();
  
  root2435.append(node1394);
  var result__ = null;
  var tmp10078 = mobl.ref(result__);
  
  var result__ = null;
  var tmp10077 = mobl.ref(result__);
  
  var result__ = null;
  var tmp10076 = mobl.ref(result__);
  
  var nodes2319 = $("<span>");
  root2435.append(nodes2319);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp10076, tmp10077, tmp10078, function(_, callback) {
    var root2436 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1395 = mobl.loadingSpan();
    root2436.append(node1395);
    var list23;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList23 = function() {
      var subs__ = listSubs__;
      list23 = tabs.get();
      list23.list(function(results23) {
        node1395.empty();
        for(var i67 = 0; i67 < results23.length; i67++) {
          (function() {
            var iternode23 = $("<span>");
            node1395.append(iternode23);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results23), i67), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results23), i67), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results23), i67), "_3");
            var result__ = activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
            var tmp10073 = mobl.ref(result__);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp10073.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp10073.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp10073.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp10073.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = tabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp10072 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10075 = mobl.ref(result__);
            
            var result__ = null;
            var tmp10074 = mobl.ref(result__);
            
            var nodes2320 = $("<span>");
            iternode23.append(nodes2320);
            subs__.addSub((mobl.span)(tmp10073, tmp10074, tmp10072, tmp10075, function(_, callback) {
              var root2437 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp10071 = mobl.ref(result__);
              
              var result__ = null;
              var tmp10070 = mobl.ref(result__);
              
              var nodes2321 = $("<span>");
              root2437.append(nodes2321);
              subs__.addSub((mobl.label)(tabName, tmp10070, tmp10071, function(_, callback) {
                var root2438 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2438); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2321;
                nodes2321 = node.contents();
                oldNodes.replaceWith(nodes2321);
              }));
              callback(root2437); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2320;
              nodes2320 = node.contents();
              oldNodes.replaceWith(nodes2320);
            }));
            
            var oldNodes = iternode23;
            iternode23 = iternode23.contents();
            oldNodes.replaceWith(iternode23);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list23.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
      });
    };
    renderList23();
    
    callback(root2436); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2319;
    nodes2319 = node.contents();
    oldNodes.replaceWith(nodes2319);
  }));
  callback(root2435); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root2442 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1397 = $("<div>");
  node1397.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node1397.append(slider);
  var result__ = slider.slider(new mobl.Dynamic({'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                          if(event && event.stopPropagation) event.stopPropagation();
                                                          var result__ = slider.slider("value");
                                                          s.set(result__);
                                                          var result__ = slider.slider("value");
                                                          start.set(result__);
                                                          if(callback && callback.apply) callback(); return;
                                                        }}));
  root2442.append(node1397);
  callback(root2442); return subs__;
  
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
ui.action = 'ui__action';
ui.main = 'ui__main';
ui.navigator = 'ui__navigator';
ui.stressGraphButton = 'ui__stressGraphButton';
ui.root = 'ui__root';
ui.flash = 'ui__flash';
ui.transition = 'ui__transition';
