mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root8113 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3019 = $("<span>");
  root8113.append(node3019);
  var condSubs392 = new mobl.CompSubscription();
  subs__.addSub(condSubs392);
  var oldValue392;
  var renderCond392 = function() {
    var value1068 = value.get();
    if(oldValue392 === value1068) return;
    oldValue392 = value1068;
    var subs__ = condSubs392;
    subs__.unsubscribe();
    node3019.empty();
    if(value1068) {
      var nodes6396 = $("<span>");
      node3019.append(nodes6396);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1075();
      }));
      
      function renderControl1075() {
        subs__.addSub((elements)(function(elements, callback) {
          var root8114 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8114); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6396;
          nodes6396 = node.contents();
          oldNodes.replaceWith(nodes6396);
        }));
      }
      renderControl1075();
      
      
    } else {
      
      var tmp16182 = mobl.ref(null);
      
      
      var tmp16181 = mobl.ref(null);
      
      
      var tmp16180 = mobl.ref(null);
      
      var nodes6397 = $("<span>");
      node3019.append(nodes6397);
      subs__.addSub((mobl.block)(style, tmp16180, tmp16181, tmp16182, function(_, callback) {
        var root8115 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp16172 = mobl.ref(null);
        
        
        var tmp16171 = mobl.ref(null);
        
        var nodes6398 = $("<span>");
        root8115.append(nodes6398);
        subs__.addSub((mobl.label)(loadingMessage, tmp16171, tmp16172, function(_, callback) {
          var root8116 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8116); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6398;
          nodes6398 = node.contents();
          oldNodes.replaceWith(nodes6398);
        }));
        
        var tmp16174 = mobl.ref("middle");
        
        
        var tmp16173 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp16179 = mobl.ref(null);
        
        
        var tmp16178 = mobl.ref(null);
        
        
        var tmp16177 = mobl.ref(null);
        
        
        var tmp16176 = mobl.ref(null);
        
        
        var tmp16175 = mobl.ref(null);
        
        var nodes6399 = $("<span>");
        root8115.append(nodes6399);
        subs__.addSub((ui.image)(tmp16173, tmp16175, tmp16176, tmp16177, tmp16178, tmp16174, tmp16179, function(_, callback) {
          var root8117 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8117); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6399;
          nodes6399 = node.contents();
          oldNodes.replaceWith(nodes6399);
        }));
        callback(root8115); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6397;
        nodes6397 = node.contents();
        oldNodes.replaceWith(nodes6397);
      }));
      
      
    }
  };
  renderCond392();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond392();
  }));
  
  callback(root8113); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root8118 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3020 = $("<div>");
  
  var ref2406 = mobl.ref(ui.headerStyle);
  if(ref2406.get() !== null) {
    node3020.attr('class', ref2406.get());
    subs__.addSub(ref2406.addEventListener('change', function(_, ref, val) {
      node3020.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2406.rebind());
  
  var val1290 = onclick.get();
  if(val1290 !== null) {
    subs__.addSub(mobl.domBind(node3020, 'tap', val1290));
  }
  
  
  var node3021 = $("<div>");
  
  var ref2405 = mobl.ref(ui.headerContainerStyle);
  if(ref2405.get() !== null) {
    node3021.attr('class', ref2405.get());
    subs__.addSub(ref2405.addEventListener('change', function(_, ref, val) {
      node3021.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2405.rebind());
  
  
  var node3022 = $("<div>");
  
  var ref2403 = text;
  node3022.text(""+ref2403.get());
  var ignore473 = false;
  subs__.addSub(ref2403.addEventListener('change', function(_, ref, val) {
    if(ignore473) return;
    node3022.text(""+val);
  }));
  subs__.addSub(ref2403.rebind());
  
  
  var ref2404 = mobl.ref(ui.headerTextStyle);
  if(ref2404.get() !== null) {
    node3022.attr('class', ref2404.get());
    subs__.addSub(ref2404.addEventListener('change', function(_, ref, val) {
      node3022.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2404.rebind());
  
  node3021.append(node3022);
  node3020.append(node3021);
  var nodes6400 = $("<span>");
  node3020.append(nodes6400);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1076();
  }));
  
  function renderControl1076() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8119 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8119); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6400;
      nodes6400 = node.contents();
      oldNodes.replaceWith(nodes6400);
    }));
  }
  renderControl1076();
  root8118.append(node3020);
  callback(root8118); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8120 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2407 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2407.get() !== null) {
    sp.attr('class', ref2407.get());
    subs__.addSub(ref2407.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2407.rebind());
  
  var val1291 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1291 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1291));
  }
  
  var val1292 = function(event, callback) {
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
  if(val1292 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1292));
  }
  
  var val1293 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after430(result__) {
                    var tmp16272 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after430);if(result__ !== undefined) after430(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1293 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1293));
  }
  
  var val1294 = function(event, callback) {
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
  if(val1294 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1294));
  }
  
  var ref2408 = text;
  sp.text(""+ref2408.get());
  var ignore474 = false;
  subs__.addSub(ref2408.addEventListener('change', function(_, ref, val) {
    if(ignore474) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2408.rebind());
  
  
  root8120.append(sp);
  callback(root8120); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8121 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6401 = $("<span>");
  root8121.append(nodes6401);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8122 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8122); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6401;
    nodes6401 = node.contents();
    oldNodes.replaceWith(nodes6401);
  }));
  callback(root8121); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8123 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6402 = $("<span>");
  root8123.append(nodes6402);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8124 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8124); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6402;
    nodes6402 = node.contents();
    oldNodes.replaceWith(nodes6402);
  }));
  callback(root8123); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root8125 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3023 = $("<ul>");
  
  var ref2409 = mobl.ref(ui.groupStyle);
  if(ref2409.get() !== null) {
    node3023.attr('class', ref2409.get());
    subs__.addSub(ref2409.addEventListener('change', function(_, ref, val) {
      node3023.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2409.rebind());
  
  var nodes6403 = $("<span>");
  node3023.append(nodes6403);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1077();
  }));
  
  function renderControl1077() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8126 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8126); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6403;
      nodes6403 = node.contents();
      oldNodes.replaceWith(nodes6403);
    }));
  }
  renderControl1077();
  root8125.append(node3023);
  callback(root8125); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root8127 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3024 = $("<img>");
  
  var ref2410 = url;
  if(ref2410.get() !== null) {
    node3024.attr('src', ref2410.get());
    subs__.addSub(ref2410.addEventListener('change', function(_, ref, val) {
      node3024.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2410.rebind());
  
  var ref2411 = width;
  if(ref2411.get() !== null) {
    node3024.attr('width', ref2411.get());
    subs__.addSub(ref2411.addEventListener('change', function(_, ref, val) {
      node3024.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2411.rebind());
  
  var ref2412 = height;
  if(ref2412.get() !== null) {
    node3024.attr('height', ref2412.get());
    subs__.addSub(ref2412.addEventListener('change', function(_, ref, val) {
      node3024.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2412.rebind());
  
  var ref2413 = style;
  if(ref2413.get() !== null) {
    node3024.attr('class', ref2413.get());
    subs__.addSub(ref2413.addEventListener('change', function(_, ref, val) {
      node3024.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2413.rebind());
  
  var val1295 = onclick.get();
  if(val1295 !== null) {
    subs__.addSub(mobl.domBind(node3024, 'tap', val1295));
  }
  
  var ref2414 = valign;
  if(ref2414.get() !== null) {
    node3024.attr('valign', ref2414.get());
    subs__.addSub(ref2414.addEventListener('change', function(_, ref, val) {
      node3024.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2414.rebind());
  
  var ref2415 = align;
  if(ref2415.get() !== null) {
    node3024.attr('align', ref2415.get());
    subs__.addSub(ref2415.addEventListener('change', function(_, ref, val) {
      node3024.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2415.rebind());
  
  root8127.append(node3024);
  callback(root8127); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root8128 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2416 = mobl.ref(ui.itemStyle);
  if(ref2416.get() !== null) {
    el.attr('class', ref2416.get());
    subs__.addSub(ref2416.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2416.rebind());
  
  var ref2417 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2417.get() !== null) {
    el.attr('class', ref2417.get());
    subs__.addSub(ref2417.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2417.rebind());
  
  var val1296 = onswipe.get();
  if(val1296 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1296));
  }
  
  var val1297 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp16273 = result__;
                                           function after431(result__) {
                                             var tmp16274 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after431);if(result__ !== undefined) after431(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp16275 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1297 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1297));
  }
  
  var nodes6404 = $("<span>");
  el.append(nodes6404);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1078();
  }));
  
  function renderControl1078() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8129 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8129); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6404;
      nodes6404 = node.contents();
      oldNodes.replaceWith(nodes6404);
    }));
  }
  renderControl1078();
  root8128.append(el);
  callback(root8128); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root8130 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3025 = $("<input>");
  node3025.attr('type', "checkbox");
  
  var ref2419 = b;
  node3025.attr('checked', !!ref2419.get());
  subs__.addSub(ref2419.addEventListener('change', function(_, ref, val) {
    if(ref === ref2419) node3025.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node3025, 'change', function() {
    b.set(!!node3025.attr('checked'));
  }));
  
  var val1299 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1299 !== null) {
    subs__.addSub(mobl.domBind(node3025, 'tap', val1299));
  }
  
  var val1300 = onchange.get();
  if(val1300 !== null) {
    subs__.addSub(mobl.domBind(node3025, 'change', val1300));
  }
  
  root8130.append(node3025);
  
  root8130.append(" ");
  
  var node3026 = $("<span>");
  
  var ref2418 = label;
  node3026.text(""+ref2418.get());
  var ignore475 = false;
  subs__.addSub(ref2418.addEventListener('change', function(_, ref, val) {
    if(ignore475) return;
    node3026.text(""+val);
  }));
  subs__.addSub(ref2418.rebind());
  
  
  var val1298 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after432(result__) {
                    var tmp16276 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after432);if(result__ !== undefined) after432(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1298 !== null) {
    subs__.addSub(mobl.domBind(node3026, 'tap', val1298));
  }
  
  root8130.append(node3026);
  callback(root8130); return subs__;
  
  
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
  var root8131 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3027 = $("<span>");
  root8131.append(node3027);
  var condSubs393 = new mobl.CompSubscription();
  subs__.addSub(condSubs393);
  var oldValue393;
  var renderCond393 = function() {
    var value1069 = label.get();
    if(oldValue393 === value1069) return;
    oldValue393 = value1069;
    var subs__ = condSubs393;
    subs__.unsubscribe();
    node3027.empty();
    if(value1069) {
      
      var tmp16183 = mobl.ref(null);
      
      var nodes6405 = $("<span>");
      node3027.append(nodes6405);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp16183, function(_, callback) {
        var root8132 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8132); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6405;
        nodes6405 = node.contents();
        oldNodes.replaceWith(nodes6405);
      }));
      
      
    } else {
      
    }
  };
  renderCond393();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond393();
  }));
  
  
  var node3028 = $("<span>");
  root8131.append(node3028);
  var condSubs394 = new mobl.CompSubscription();
  subs__.addSub(condSubs394);
  var oldValue394;
  var renderCond394 = function() {
    var value1070 = validator.get();
    if(oldValue394 === value1070) return;
    oldValue394 = value1070;
    var subs__ = condSubs394;
    subs__.unsubscribe();
    node3028.empty();
    if(value1070) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after436(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp16277 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node3029 = $("<input>");
        node3029.attr('type', "text");
        
        var ref2420 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2420.get() !== null) {
          node3029.attr('class', ref2420.get());
          subs__.addSub(ref2420.addEventListener('change', function(_, ref, val) {
            node3029.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node3029.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node3029.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node3029.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2420.rebind());
        
        var ref2421 = placeholder;
        if(ref2421.get() !== null) {
          node3029.attr('placeholder', ref2421.get());
          subs__.addSub(ref2421.addEventListener('change', function(_, ref, val) {
            node3029.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2421.rebind());
        
        var ref2422 = temp;
        node3029.val(""+ref2422.get());
        var ignore476 = false;
        subs__.addSub(ref2422.addEventListener('change', function(_, ref, val) {
          if(ignore476) return;
          node3029.val(""+val);
        }));
        subs__.addSub(ref2422.rebind());
        
        subs__.addSub(mobl.domBind(node3029, 'keyup change', function() {
          ignore476 = true;
          temp.set(mobl.stringTomobl__String(node3029.val()));
          ignore476 = false;
        }));
        
        
        var val1301 = onchange.get();
        if(val1301 !== null) {
          subs__.addSub(mobl.domBind(node3029, 'change', val1301));
        }
        
        var val1302 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after433(result__) {
                          var tmp16278 = result__;
                          function after434(result__) {
                            var tmp16279 = result__;
                            var result__ = tmp16279;
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
                          var result__ = validator.get()(temp.get(), after434);if(result__ !== undefined) after434(result__);
                        }
                        var result__ = onkeyup.get()(event, after433);if(result__ !== undefined) after433(result__);
                      } else {
                        {
                          function after435(result__) {
                            var tmp16279 = result__;
                            var result__ = tmp16279;
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
                          var result__ = validator.get()(temp.get(), after435);if(result__ !== undefined) after435(result__);
                        }
                      }
                    };
        if(val1302 !== null) {
          subs__.addSub(mobl.domBind(node3029, 'keyup', val1302));
        }
        
        var val1303 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1303 !== null) {
          subs__.addSub(mobl.domBind(node3029, 'blur', val1303));
        }
        
        node3028.append(node3029);
        
        var tmp16184 = mobl.ref(null);
        
        var nodes6406 = $("<span>");
        node3028.append(nodes6406);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp16184, function(_, callback) {
          var root8133 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8133); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6406;
          nodes6406 = node.contents();
          oldNodes.replaceWith(nodes6406);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after436);if(result__ !== undefined) after436(result__);
    } else {
      
      var node3030 = $("<input>");
      node3030.attr('type', "text");
      
      var ref2423 = style;
      if(ref2423.get() !== null) {
        node3030.attr('class', ref2423.get());
        subs__.addSub(ref2423.addEventListener('change', function(_, ref, val) {
          node3030.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2423.rebind());
      
      var ref2424 = placeholder;
      if(ref2424.get() !== null) {
        node3030.attr('placeholder', ref2424.get());
        subs__.addSub(ref2424.addEventListener('change', function(_, ref, val) {
          node3030.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2424.rebind());
      
      var ref2425 = s;
      node3030.val(""+ref2425.get());
      var ignore477 = false;
      subs__.addSub(ref2425.addEventListener('change', function(_, ref, val) {
        if(ignore477) return;
        node3030.val(""+val);
      }));
      subs__.addSub(ref2425.rebind());
      
      subs__.addSub(mobl.domBind(node3030, 'keyup change', function() {
        ignore477 = true;
        s.set(mobl.stringTomobl__String(node3030.val()));
        ignore477 = false;
      }));
      
      
      var val1304 = onchange.get();
      if(val1304 !== null) {
        subs__.addSub(mobl.domBind(node3030, 'change', val1304));
      }
      
      var val1305 = onkeyup.get();
      if(val1305 !== null) {
        subs__.addSub(mobl.domBind(node3030, 'keyup', val1305));
      }
      
      var val1306 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1306 !== null) {
        subs__.addSub(mobl.domBind(node3030, 'blur', val1306));
      }
      
      node3028.append(node3030);
      
      
    }
  };
  renderCond394();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond394();
  }));
  
  callback(root8131); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8134 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6407 = $("<span>");
  root8134.append(nodes6407);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8135 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8135); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6407;
    nodes6407 = node.contents();
    oldNodes.replaceWith(nodes6407);
  }));
  callback(root8134); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8136 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after437(result__) {
      var tmp16280 = result__;
      var result__ = tmp16280;
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
    var result__ = validator.get()(n2, after437);if(result__ !== undefined) after437(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes6408 = $("<span>");
  root8136.append(nodes6408);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8137 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8137); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6408;
    nodes6408 = node.contents();
    oldNodes.replaceWith(nodes6408);
  }));
  callback(root8136); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root8138 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3031 = $("<span>");
  root8138.append(node3031);
  var condSubs395 = new mobl.CompSubscription();
  subs__.addSub(condSubs395);
  var oldValue395;
  var renderCond395 = function() {
    var value1071 = label.get();
    if(oldValue395 === value1071) return;
    oldValue395 = value1071;
    var subs__ = condSubs395;
    subs__.unsubscribe();
    node3031.empty();
    if(value1071) {
      
      var node3032 = $("<span>");
      node3032.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2429 = label;
      node3032.text(""+ref2429.get());
      var ignore479 = false;
      subs__.addSub(ref2429.addEventListener('change', function(_, ref, val) {
        if(ignore479) return;
        node3032.text(""+val);
      }));
      subs__.addSub(ref2429.rebind());
      
      
      node3031.append(node3032);
      
      var node3033 = $("<span>");
      node3033.attr('style', "float: left");
      
      
      var node3034 = $("<input>");
      node3034.attr('type', "password");
      
      var ref2426 = style;
      if(ref2426.get() !== null) {
        node3034.attr('class', ref2426.get());
        subs__.addSub(ref2426.addEventListener('change', function(_, ref, val) {
          node3034.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2426.rebind());
      
      var ref2427 = placeholder;
      if(ref2427.get() !== null) {
        node3034.attr('placeholder', ref2427.get());
        subs__.addSub(ref2427.addEventListener('change', function(_, ref, val) {
          node3034.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2427.rebind());
      
      var ref2428 = s;
      node3034.val(""+ref2428.get());
      var ignore478 = false;
      subs__.addSub(ref2428.addEventListener('change', function(_, ref, val) {
        if(ignore478) return;
        node3034.val(""+val);
      }));
      subs__.addSub(ref2428.rebind());
      
      subs__.addSub(mobl.domBind(node3034, 'keyup change', function() {
        ignore478 = true;
        s.set(mobl.stringTomobl__String(node3034.val()));
        ignore478 = false;
      }));
      
      
      var val1307 = onchange.get();
      if(val1307 !== null) {
        subs__.addSub(mobl.domBind(node3034, 'change', val1307));
      }
      
      var val1308 = onkeyup.get();
      if(val1308 !== null) {
        subs__.addSub(mobl.domBind(node3034, 'keyup', val1308));
      }
      
      var val1309 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1309 !== null) {
        subs__.addSub(mobl.domBind(node3034, 'blur', val1309));
      }
      
      node3033.append(node3034);
      node3031.append(node3033);
      
      
      
      
    } else {
      
      var node3035 = $("<input>");
      node3035.attr('type', "password");
      
      var ref2430 = style;
      if(ref2430.get() !== null) {
        node3035.attr('class', ref2430.get());
        subs__.addSub(ref2430.addEventListener('change', function(_, ref, val) {
          node3035.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2430.rebind());
      
      var ref2431 = placeholder;
      if(ref2431.get() !== null) {
        node3035.attr('placeholder', ref2431.get());
        subs__.addSub(ref2431.addEventListener('change', function(_, ref, val) {
          node3035.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2431.rebind());
      
      var ref2432 = s;
      node3035.val(""+ref2432.get());
      var ignore480 = false;
      subs__.addSub(ref2432.addEventListener('change', function(_, ref, val) {
        if(ignore480) return;
        node3035.val(""+val);
      }));
      subs__.addSub(ref2432.rebind());
      
      subs__.addSub(mobl.domBind(node3035, 'keyup change', function() {
        ignore480 = true;
        s.set(mobl.stringTomobl__String(node3035.val()));
        ignore480 = false;
      }));
      
      
      var val1310 = onchange.get();
      if(val1310 !== null) {
        subs__.addSub(mobl.domBind(node3035, 'change', val1310));
      }
      
      var val1311 = onkeyup.get();
      if(val1311 !== null) {
        subs__.addSub(mobl.domBind(node3035, 'keyup', val1311));
      }
      
      var val1312 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1312 !== null) {
        subs__.addSub(mobl.domBind(node3035, 'blur', val1312));
      }
      
      node3031.append(node3035);
      
      
    }
  };
  renderCond395();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond395();
  }));
  
  callback(root8138); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root8139 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2437 = style;
  if(ref2437.get() !== null) {
    sel.attr('class', ref2437.get());
    subs__.addSub(ref2437.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2437.rebind());
  
  var val1313 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after438(result__) {
                    var tmp16282 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after438);if(result__ !== undefined) after438(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1313 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1313));
  }
  
  
  var node3036 = mobl.loadingSpan();
  sel.append(node3036);
  var list534;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList534 = function() {
    var subs__ = listSubs__;
    list534 = options.get();
    list534.list(function(results536) {
      node3036.empty();
      for(var i631 = 0; i631 < results536.length; i631++) {
        (function() {
          var iternode534 = $("<span>");
          node3036.append(iternode534);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results536), i631), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results536), i631), "_2");
          
          var node3037 = $("<option>");
          
          var ref2433 = optionDescription;
          node3037.text(""+ref2433.get());
          var ignore481 = false;
          subs__.addSub(ref2433.addEventListener('change', function(_, ref, val) {
            if(ignore481) return;
            node3037.text(""+val);
          }));
          subs__.addSub(ref2433.rebind());
          
          
          var ref2434 = optionStyle;
          if(ref2434.get() !== null) {
            node3037.attr('class', ref2434.get());
            subs__.addSub(ref2434.addEventListener('change', function(_, ref, val) {
              node3037.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2434.rebind());
          
          var ref2435 = optionValue;
          if(ref2435.get() !== null) {
            node3037.attr('value', ref2435.get());
            subs__.addSub(ref2435.addEventListener('change', function(_, ref, val) {
              node3037.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2435.rebind());
          
          var ref2436 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2436.get() !== null) {
            node3037.attr('selected', ref2436.get());
            subs__.addSub(ref2436.addEventListener('change', function(_, ref, val) {
              node3037.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node3037.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node3037.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2436.rebind());
          
          iternode534.append(node3037);
          
          var oldNodes = iternode534;
          iternode534 = iternode534.contents();
          oldNodes.replaceWith(iternode534);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list534.addEventListener('change', function() { listSubs__.unsubscribe(); renderList534(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList534(true); }));
    });
  };
  renderList534();
  
  root8139.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root8139); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root8140 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp16193 = mobl.ref(null);
  
  
  var tmp16192 = mobl.ref(null);
  
  
  var tmp16191 = mobl.ref(null);
  
  var nodes6409 = $("<span>");
  root8140.append(nodes6409);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp16191, tmp16192, tmp16193, function(_, callback) {
    var root8141 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3038 = mobl.loadingSpan();
    root8141.append(node3038);
    var list535;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList535 = function() {
      var subs__ = listSubs__;
      list535 = tabs.get();
      list535.list(function(results537) {
        node3038.empty();
        for(var i632 = 0; i632 < results537.length; i632++) {
          (function() {
            var iternode535 = $("<span>");
            node3038.append(iternode535);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results537), i632), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results537), i632), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results537), i632), "_3");
            
            var tmp16188 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp16188.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp16188.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp16188.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp16188.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp16187 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp16190 = mobl.ref(null);
            
            
            var tmp16189 = mobl.ref(null);
            
            var nodes6410 = $("<span>");
            iternode535.append(nodes6410);
            subs__.addSub((mobl.span)(tmp16188, tmp16189, tmp16187, tmp16190, function(_, callback) {
              var root8142 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp16186 = mobl.ref(null);
              
              
              var tmp16185 = mobl.ref(null);
              
              var nodes6411 = $("<span>");
              root8142.append(nodes6411);
              subs__.addSub((mobl.label)(tabName, tmp16185, tmp16186, function(_, callback) {
                var root8143 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8143); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6411;
                nodes6411 = node.contents();
                oldNodes.replaceWith(nodes6411);
              }));
              callback(root8142); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6410;
              nodes6410 = node.contents();
              oldNodes.replaceWith(nodes6410);
            }));
            
            var oldNodes = iternode535;
            iternode535 = iternode535.contents();
            oldNodes.replaceWith(iternode535);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list535.addEventListener('change', function() { listSubs__.unsubscribe(); renderList535(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList535(true); }));
      });
    };
    renderList535();
    
    callback(root8141); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6409;
    nodes6409 = node.contents();
    oldNodes.replaceWith(nodes6409);
  }));
  
  var node3039 = mobl.loadingSpan();
  root8140.append(node3039);
  var list536;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList536 = function() {
    var subs__ = listSubs__;
    list536 = tabs.get();
    list536.list(function(results538) {
      node3039.empty();
      for(var i633 = 0; i633 < results538.length; i633++) {
        (function() {
          var iternode536 = $("<span>");
          node3039.append(iternode536);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results538), i633), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results538), i633), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results538), i633), "_3");
          
          var tmp16194 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp16194.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp16194.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp16194.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp16194.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp16197 = mobl.ref(null);
          
          
          var tmp16196 = mobl.ref(null);
          
          
          var tmp16195 = mobl.ref(null);
          
          var nodes6412 = $("<span>");
          iternode536.append(nodes6412);
          subs__.addSub((mobl.block)(tmp16194, tmp16195, tmp16196, tmp16197, function(_, callback) {
            var root8144 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes6413 = $("<span>");
            root8144.append(nodes6413);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root8145 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6414 = $("<span>");
              root8145.append(nodes6414);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl1079();
              }));
              
              function renderControl1079() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root8146 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8146); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6414;
                  nodes6414 = node.contents();
                  oldNodes.replaceWith(nodes6414);
                }));
              }
              renderControl1079();
              callback(root8145); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6413;
              nodes6413 = node.contents();
              oldNodes.replaceWith(nodes6413);
            }));
            callback(root8144); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6412;
            nodes6412 = node.contents();
            oldNodes.replaceWith(nodes6412);
          }));
          
          var oldNodes = iternode536;
          iternode536 = iternode536.contents();
          oldNodes.replaceWith(iternode536);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list536.addEventListener('change', function() { listSubs__.unsubscribe(); renderList536(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList536(true); }));
    });
  };
  renderList536();
  
  callback(root8140); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root8147 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3040 = $("<div>");
  
  var ref2441 = mobl.ref(ui.searchboxStyle);
  if(ref2441.get() !== null) {
    node3040.attr('class', ref2441.get());
    subs__.addSub(ref2441.addEventListener('change', function(_, ref, val) {
      node3040.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2441.rebind());
  
  
  var node3041 = $("<input>");
  node3041.attr('type', "search");
  
  var ref2438 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2438.get() !== null) {
    node3041.attr('class', ref2438.get());
    subs__.addSub(ref2438.addEventListener('change', function(_, ref, val) {
      node3041.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2438.rebind());
  
  var ref2439 = placeholder;
  if(ref2439.get() !== null) {
    node3041.attr('placeholder', ref2439.get());
    subs__.addSub(ref2439.addEventListener('change', function(_, ref, val) {
      node3041.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2439.rebind());
  
  var ref2440 = s;
  node3041.val(""+ref2440.get());
  var ignore482 = false;
  subs__.addSub(ref2440.addEventListener('change', function(_, ref, val) {
    if(ignore482) return;
    node3041.val(""+val);
  }));
  subs__.addSub(ref2440.rebind());
  
  subs__.addSub(mobl.domBind(node3041, 'keyup change', function() {
    ignore482 = true;
    s.set(mobl.stringTomobl__String(node3041.val()));
    ignore482 = false;
  }));
  
  
  var val1314 = onsearch.get();
  if(val1314 !== null) {
    subs__.addSub(mobl.domBind(node3041, 'change', val1314));
  }
  
  var val1315 = onkeyup.get();
  if(val1315 !== null) {
    subs__.addSub(mobl.domBind(node3041, 'keyup', val1315));
  }
  node3041.attr('autocorrect', false);
  node3041.attr('autocapitalize', false);
  node3041.attr('autocomplete', false);
  
  node3040.append(node3041);
  root8147.append(node3040);
  callback(root8147); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root8148 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2442 = mobl.ref(ui.contextMenuStyle);
  if(ref2442.get() !== null) {
    menu.attr('class', ref2442.get());
    subs__.addSub(ref2442.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2442.rebind());
  
  var nodes6415 = $("<span>");
  menu.append(nodes6415);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1080();
  }));
  
  function renderControl1080() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8149 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8149); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6415;
      nodes6415 = node.contents();
      oldNodes.replaceWith(nodes6415);
    }));
  }
  renderControl1080();
  root8148.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1316 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp16285 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1316 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1316));
  }
  
  root8148.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root8148); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root8150 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp16271 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp16271.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node3042 = $("<span>");
  root8150.append(node3042);
  var condSubs396 = new mobl.CompSubscription();
  subs__.addSub(condSubs396);
  var oldValue396;
  var renderCond396 = function() {
    var value1072 = tmp16271.get();
    if(oldValue396 === value1072) return;
    oldValue396 = value1072;
    var subs__ = condSubs396;
    subs__.unsubscribe();
    node3042.empty();
    if(value1072) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node3043 = $("<div>");
        node3043.attr('width', "100%");
        
        
        var node3044 = $("<div>");
        node3044.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes6418 = $("<span>");
        node3044.append(nodes6418);
        subs__.addSub((ui.group)(function(_, callback) {
          var root8153 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node3047 = mobl.loadingSpan();
          root8153.append(node3047);
          var list537;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList537 = function() {
            var subs__ = listSubs__;
            list537 = items.get();
            list537.list(function(results539) {
              node3047.empty();
              for(var i634 = 0; i634 < results539.length; i634++) {
                (function() {
                  var iternode537 = $("<span>");
                  node3047.append(iternode537);
                  var it;
                  it = mobl.ref(mobl.ref(results539), i634);
                  
                  var tmp16211 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp16211.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp16211.set(it.get() == current.get());
                  }));
                  
                  
                  var node3048 = $("<span>");
                  iternode537.append(node3048);
                  var condSubs398 = new mobl.CompSubscription();
                  subs__.addSub(condSubs398);
                  var oldValue398;
                  var renderCond398 = function() {
                    var value1074 = tmp16211.get();
                    if(oldValue398 === value1074) return;
                    oldValue398 = value1074;
                    var subs__ = condSubs398;
                    subs__.unsubscribe();
                    node3048.empty();
                    if(value1074) {
                      
                      var tmp16207 = mobl.ref(false);
                      
                      
                      var tmp16206 = mobl.ref(null);
                      
                      
                      var tmp16205 = mobl.ref(null);
                      
                      var nodes6419 = $("<span>");
                      node3048.append(nodes6419);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp16205, tmp16206, tmp16207, function(_, callback) {
                        var root8154 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6420 = $("<span>");
                        root8154.append(nodes6420);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1082();
                        }));
                        
                        function renderControl1082() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8155 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8155); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6420;
                            nodes6420 = node.contents();
                            oldNodes.replaceWith(nodes6420);
                          }));
                        }
                        renderControl1082();
                        callback(root8154); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6419;
                        nodes6419 = node.contents();
                        oldNodes.replaceWith(nodes6419);
                      }));
                      
                      
                    } else {
                      
                      var tmp16209 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp16208 = mobl.ref(true);
                      
                      
                      var tmp16210 = mobl.ref(null);
                      
                      var nodes6421 = $("<span>");
                      node3048.append(nodes6421);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16209, tmp16210, tmp16208, function(_, callback) {
                        var root8156 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6422 = $("<span>");
                        root8156.append(nodes6422);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1083();
                        }));
                        
                        function renderControl1083() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8157 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8157); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6422;
                            nodes6422 = node.contents();
                            oldNodes.replaceWith(nodes6422);
                          }));
                        }
                        renderControl1083();
                        callback(root8156); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6421;
                        nodes6421 = node.contents();
                        oldNodes.replaceWith(nodes6421);
                      }));
                      
                      
                    }
                  };
                  renderCond398();
                  subs__.addSub(tmp16211.addEventListener('change', function() {
                    renderCond398();
                  }));
                  
                  
                  var oldNodes = iternode537;
                  iternode537 = iternode537.contents();
                  oldNodes.replaceWith(iternode537);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list537.addEventListener('change', function() { listSubs__.unsubscribe(); renderList537(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList537(true); }));
            });
          };
          renderList537();
          
          callback(root8153); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6418;
          nodes6418 = node.contents();
          oldNodes.replaceWith(nodes6418);
        }));
        node3043.append(node3044);
        
        var node3045 = $("<div>");
        node3045.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node3046 = $("<span>");
        node3045.append(node3046);
        var condSubs397 = new mobl.CompSubscription();
        subs__.addSub(condSubs397);
        var oldValue397;
        var renderCond397 = function() {
          var value1073 = current.get();
          if(oldValue397 === value1073) return;
          oldValue397 = value1073;
          var subs__ = condSubs397;
          subs__.unsubscribe();
          node3046.empty();
          if(value1073) {
            var nodes6416 = $("<span>");
            node3046.append(nodes6416);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1081();
            }));
            
            function renderControl1081() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root8151 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8151); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6416;
                nodes6416 = node.contents();
                oldNodes.replaceWith(nodes6416);
              }));
            }
            renderControl1081();
            
            
          } else {
            
            var tmp16212 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp16214 = mobl.ref(null);
            
            
            var tmp16213 = mobl.ref(null);
            
            var nodes6417 = $("<span>");
            node3046.append(nodes6417);
            subs__.addSub((mobl.label)(tmp16212, tmp16213, tmp16214, function(_, callback) {
              var root8152 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8152); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6417;
              nodes6417 = node.contents();
              oldNodes.replaceWith(nodes6417);
            }));
            
            
          }
        };
        renderCond397();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond397();
        }));
        
        node3043.append(node3045);
        node3042.append(node3043);
        
        
        
        
        
        
      });
    } else {
      var nodes6423 = $("<span>");
      node3042.append(nodes6423);
      subs__.addSub((ui.group)(function(_, callback) {
        var root8158 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3049 = mobl.loadingSpan();
        root8158.append(node3049);
        var list538;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList538 = function() {
          var subs__ = listSubs__;
          list538 = items.get();
          list538.list(function(results540) {
            node3049.empty();
            for(var i635 = 0; i635 < results540.length; i635++) {
              (function() {
                var iternode538 = $("<span>");
                node3049.append(iternode538);
                var it;
                it = mobl.ref(mobl.ref(results540), i635);
                
                var tmp16198 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp16286 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp16200 = mobl.ref(false);
                
                
                var tmp16199 = mobl.ref(null);
                
                var nodes6424 = $("<span>");
                iternode538.append(nodes6424);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16198, tmp16199, tmp16200, function(_, callback) {
                  var root8159 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6425 = $("<span>");
                  root8159.append(nodes6425);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1084();
                  }));
                  
                  function renderControl1084() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root8160 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8160); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6425;
                      nodes6425 = node.contents();
                      oldNodes.replaceWith(nodes6425);
                    }));
                  }
                  renderControl1084();
                  callback(root8159); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6424;
                  nodes6424 = node.contents();
                  oldNodes.replaceWith(nodes6424);
                }));
                
                var oldNodes = iternode538;
                iternode538 = iternode538.contents();
                oldNodes.replaceWith(iternode538);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list538.addEventListener('change', function() { listSubs__.unsubscribe(); renderList538(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList538(true); }));
          });
        };
        renderList538();
        
        callback(root8158); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6423;
        nodes6423 = node.contents();
        oldNodes.replaceWith(nodes6423);
      }));
      
      
    }
  };
  renderCond396();
  subs__.addSub(tmp16271.addEventListener('change', function() {
    renderCond396();
  }));
  
  callback(root8150); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root8161 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp16203 = mobl.ref("Detail");
  
  
  var tmp16204 = mobl.ref(null);
  
  var nodes6426 = $("<span>");
  root8161.append(nodes6426);
  subs__.addSub((ui.header)(tmp16203, tmp16204, function(_, callback) {
    var root8162 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp16202 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp16201 = mobl.ref("Back");
    
    var nodes6427 = $("<span>");
    root8162.append(nodes6427);
    subs__.addSub((ui.backButton)(tmp16201, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16202, function(_, callback) {
      var root8163 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8163); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6427;
      nodes6427 = node.contents();
      oldNodes.replaceWith(nodes6427);
    }));
    callback(root8162); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6426;
    nodes6426 = node.contents();
    oldNodes.replaceWith(nodes6426);
  }));
  var nodes6428 = $("<span>");
  root8161.append(nodes6428);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1085();
  }));
  
  function renderControl1085() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6428;
      nodes6428 = node.contents();
      oldNodes.replaceWith(nodes6428);
    }));
  }
  renderControl1085();
  callback(root8161); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root8165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes6429 = $("<span>");
  root8165.append(nodes6429);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8166 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3050 = mobl.loadingSpan();
    root8166.append(node3050);
    var list539;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList539 = function() {
      var subs__ = listSubs__;
      list539 = coll.get();
      list539.list(function(results541) {
        node3050.empty();
        for(var i636 = 0; i636 < results541.length; i636++) {
          (function() {
            var iternode539 = $("<span>");
            node3050.append(iternode539);
            var it;
            it = mobl.ref(mobl.ref(results541), i636);
            
            var tmp16221 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp16221.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp16221.set(it.get() == selected.get());
            }));
            
            
            var node3051 = $("<span>");
            iternode539.append(node3051);
            var condSubs399 = new mobl.CompSubscription();
            subs__.addSub(condSubs399);
            var oldValue399;
            var renderCond399 = function() {
              var value1075 = tmp16221.get();
              if(oldValue399 === value1075) return;
              oldValue399 = value1075;
              var subs__ = condSubs399;
              subs__.unsubscribe();
              node3051.empty();
              if(value1075) {
                
                var tmp16217 = mobl.ref(false);
                
                
                var tmp16216 = mobl.ref(null);
                
                
                var tmp16215 = mobl.ref(null);
                
                var nodes6430 = $("<span>");
                node3051.append(nodes6430);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16215, tmp16216, tmp16217, function(_, callback) {
                  var root8167 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6431 = $("<span>");
                  root8167.append(nodes6431);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1086();
                  }));
                  
                  function renderControl1086() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root8168 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8168); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6431;
                      nodes6431 = node.contents();
                      oldNodes.replaceWith(nodes6431);
                    }));
                  }
                  renderControl1086();
                  callback(root8167); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6430;
                  nodes6430 = node.contents();
                  oldNodes.replaceWith(nodes6430);
                }));
                
                
              } else {
                
                var tmp16219 = mobl.ref(true);
                
                
                var tmp16218 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp16220 = mobl.ref(null);
                
                var nodes6432 = $("<span>");
                node3051.append(nodes6432);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16218, tmp16220, tmp16219, function(_, callback) {
                  var root8169 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6433 = $("<span>");
                  root8169.append(nodes6433);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1087();
                  }));
                  
                  function renderControl1087() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root8170 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8170); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6433;
                      nodes6433 = node.contents();
                      oldNodes.replaceWith(nodes6433);
                    }));
                  }
                  renderControl1087();
                  callback(root8169); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6432;
                  nodes6432 = node.contents();
                  oldNodes.replaceWith(nodes6432);
                }));
                
                
              }
            };
            renderCond399();
            subs__.addSub(tmp16221.addEventListener('change', function() {
              renderCond399();
            }));
            
            
            var oldNodes = iternode539;
            iternode539 = iternode539.contents();
            oldNodes.replaceWith(iternode539);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list539.addEventListener('change', function() { listSubs__.unsubscribe(); renderList539(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList539(true); }));
      });
    };
    renderList539();
    
    callback(root8166); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6429;
    nodes6429 = node.contents();
    oldNodes.replaceWith(nodes6429);
  }));
  callback(root8165); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root8171 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes6434 = $("<span>");
    root8171.append(nodes6434);
    subs__.addSub((ui.group)(function(_, callback) {
      var root8172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp16225 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp16225.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp16225.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp16225.set(coll.get().limit(n.get()));
      }));
      
      
      var node3052 = mobl.loadingSpan();
      root8172.append(node3052);
      var list540;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList540 = function() {
        var subs__ = listSubs__;
        list540 = tmp16225.get();
        list540.list(function(results542) {
          node3052.empty();
          for(var i637 = 0; i637 < results542.length; i637++) {
            (function() {
              var iternode540 = $("<span>");
              node3052.append(iternode540);
              var it;
              it = mobl.ref(mobl.ref(results542), i637);
              
              var tmp16222 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp16224 = mobl.ref(false);
              
              
              var tmp16223 = mobl.ref(null);
              
              var nodes6435 = $("<span>");
              iternode540.append(nodes6435);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16222, tmp16223, tmp16224, function(_, callback) {
                var root8173 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6436 = $("<span>");
                root8173.append(nodes6436);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl1088();
                }));
                
                function renderControl1088() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root8174 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8174); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6436;
                    nodes6436 = node.contents();
                    oldNodes.replaceWith(nodes6436);
                  }));
                }
                renderControl1088();
                callback(root8173); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6435;
                nodes6435 = node.contents();
                oldNodes.replaceWith(nodes6435);
              }));
              
              var oldNodes = iternode540;
              iternode540 = iternode540.contents();
              oldNodes.replaceWith(iternode540);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list540.addEventListener('change', function() { listSubs__.unsubscribe(); renderList540(true); }));
          subs__.addSub(tmp16225.addEventListener('change', function() { listSubs__.unsubscribe(); renderList540(true); }));
        });
      };
      renderList540();
      
      
      var tmp16228 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp16228.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp16228.set(n.get() < total.get());
      }));
      
      
      var node3053 = $("<span>");
      root8172.append(node3053);
      var condSubs400 = new mobl.CompSubscription();
      subs__.addSub(condSubs400);
      var oldValue400;
      var renderCond400 = function() {
        var value1076 = tmp16228.get();
        if(oldValue400 === value1076) return;
        oldValue400 = value1076;
        var subs__ = condSubs400;
        subs__.unsubscribe();
        node3053.empty();
        if(value1076) {
          
          var node3054 = $("<li>");
          
          var ref2443 = mobl.ref(ui.loadMoreStyle);
          if(ref2443.get() !== null) {
            node3054.attr('class', ref2443.get());
            subs__.addSub(ref2443.addEventListener('change', function(_, ref, val) {
              node3054.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2443.rebind());
          
          var val1317 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val1317 !== null) {
            subs__.addSub(mobl.domBind(node3054, 'tap', val1317));
          }
          
          
          var tmp16227 = mobl.ref(null);
          
          
          var tmp16226 = mobl.ref(null);
          
          var nodes6437 = $("<span>");
          node3054.append(nodes6437);
          subs__.addSub((mobl.label)(moreLabel, tmp16226, tmp16227, function(_, callback) {
            var root8175 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8175); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6437;
            nodes6437 = node.contents();
            oldNodes.replaceWith(nodes6437);
          }));
          node3053.append(node3054);
          
          
          
        } else {
          
        }
      };
      renderCond400();
      subs__.addSub(tmp16228.addEventListener('change', function() {
        renderCond400();
      }));
      
      callback(root8172); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6434;
      nodes6434 = node.contents();
      oldNodes.replaceWith(nodes6434);
    }));
    callback(root8171); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root8176 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6438 = $("<span>");
  root8176.append(nodes6438);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8177 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3055 = mobl.loadingSpan();
    root8177.append(node3055);
    var list541;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList541 = function() {
      var subs__ = listSubs__;
      list541 = items.get();
      list541.list(function(results543) {
        node3055.empty();
        for(var i638 = 0; i638 < results543.length; i638++) {
          (function() {
            var iternode541 = $("<span>");
            node3055.append(iternode541);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results543), i638), "_1");it = mobl.ref(mobl.ref(mobl.ref(results543), i638), "_2");
            
            var tmp16232 = mobl.ref(false);
            
            
            var tmp16231 = mobl.ref(null);
            
            
            var tmp16230 = mobl.ref(null);
            
            var nodes6439 = $("<span>");
            iternode541.append(nodes6439);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16230, tmp16231, tmp16232, function(_, callback) {
              var root8178 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp16229 = mobl.ref(null);
              
              var nodes6440 = $("<span>");
              root8178.append(nodes6440);
              subs__.addSub((ui.checkBox)(checked, it, tmp16229, function(_, callback) {
                var root8179 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8179); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6440;
                nodes6440 = node.contents();
                oldNodes.replaceWith(nodes6440);
              }));
              callback(root8178); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6439;
              nodes6439 = node.contents();
              oldNodes.replaceWith(nodes6439);
            }));
            
            var oldNodes = iternode541;
            iternode541 = iternode541.contents();
            oldNodes.replaceWith(iternode541);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list541.addEventListener('change', function() { listSubs__.unsubscribe(); renderList541(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList541(true); }));
      });
    };
    renderList541();
    
    callback(root8177); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6438;
    nodes6438 = node.contents();
    oldNodes.replaceWith(nodes6438);
  }));
  callback(root8176); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root8180 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1204) {
    coll1204 = coll1204.reverse();
    function processOne99() {
      var it;
      it = coll1204.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1204.length > 0) processOne99(); else rest99();
      
    }
    function rest99() {
      
      var tmp16236 = mobl.ref(null);
      
      var nodes6441 = $("<span>");
      root8180.append(nodes6441);
      subs__.addSub((ui.header)(title, tmp16236, function(_, callback) {
        var root8181 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp16233 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp16234 = mobl.ref(mobl._("Back", []));
        
        var nodes6442 = $("<span>");
        root8181.append(nodes6442);
        subs__.addSub((ui.backButton)(tmp16234, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16233, function(_, callback) {
          var root8182 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8182); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6442;
          nodes6442 = node.contents();
          oldNodes.replaceWith(nodes6442);
        }));
        
        var tmp16235 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll1203) {
                               coll1203 = coll1203.reverse();
                               function processOne98() {
                                 var checked;var it;
                                 var tmp16288 = coll1203.pop();
                                 checked = tmp16288._1;it = tmp16288._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll1203.length > 0) processOne98(); else rest98();
                                   
                                 } else {
                                   {
                                     
                                     if(coll1203.length > 0) processOne98(); else rest98();
                                     
                                   }
                                 }
                               }
                               function rest98() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll1203.length > 0) processOne98(); else rest98();
                             });
                             
                           });
        
        var nodes6443 = $("<span>");
        root8181.append(nodes6443);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp16235, function(_, callback) {
          var root8183 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8183); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6443;
          nodes6443 = node.contents();
          oldNodes.replaceWith(nodes6443);
        }));
        callback(root8181); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6441;
        nodes6441 = node.contents();
        oldNodes.replaceWith(nodes6441);
      }));
      var nodes6444 = $("<span>");
      root8180.append(nodes6444);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root8184 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8184); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6444;
        nodes6444 = node.contents();
        oldNodes.replaceWith(nodes6444);
      }));
      callback(root8180); return subs__;
      
      
    }
    if(coll1204.length > 0) processOne99(); else rest99();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root8185 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp16238 = mobl.ref(null);
  
  
  var tmp16237 = mobl.ref(null);
  
  var nodes6445 = $("<span>");
  root8185.append(nodes6445);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp16237, tmp16238, function(_, callback) {
    var root8186 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8186); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6445;
    nodes6445 = node.contents();
    oldNodes.replaceWith(nodes6445);
  }));
  
  var tmp16239 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp16239.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp16239.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp16239.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp16239.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp16239.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes6446 = $("<span>");
  root8185.append(nodes6446);
  subs__.addSub((ui.masterDetail)(tmp16239, masterItem, detailItem, function(_, callback) {
    var root8187 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8187); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6446;
    nodes6446 = node.contents();
    oldNodes.replaceWith(nodes6446);
  }));
  callback(root8185); return subs__;
  
  
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
  var root8188 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp16252 = mobl.ref(null);
  
  
  var tmp16251 = mobl.ref(null);
  
  
  var tmp16250 = mobl.ref(null);
  
  var nodes6447 = $("<span>");
  root8188.append(nodes6447);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp16250, tmp16251, tmp16252, function(_, callback) {
    var root8189 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3056 = mobl.loadingSpan();
    root8189.append(node3056);
    var list542;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList542 = function() {
      var subs__ = listSubs__;
      list542 = sections.get();
      list542.list(function(results544) {
        node3056.empty();
        for(var i639 = 0; i639 < results544.length; i639++) {
          (function() {
            var iternode542 = $("<span>");
            node3056.append(iternode542);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results544), i639), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results544), i639), "_2");
            
            var tmp16243 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp16243.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp16243.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp16243.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp16243.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp16242 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp16245 = mobl.ref(null);
            
            
            var tmp16244 = mobl.ref(null);
            
            var nodes6448 = $("<span>");
            iternode542.append(nodes6448);
            subs__.addSub((mobl.span)(tmp16243, tmp16244, tmp16242, tmp16245, function(_, callback) {
              var root8190 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp16241 = mobl.ref(null);
              
              
              var tmp16240 = mobl.ref(null);
              
              var nodes6449 = $("<span>");
              root8190.append(nodes6449);
              subs__.addSub((mobl.label)(sectionName, tmp16240, tmp16241, function(_, callback) {
                var root8191 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8191); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6449;
                nodes6449 = node.contents();
                oldNodes.replaceWith(nodes6449);
              }));
              callback(root8190); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6448;
              nodes6448 = node.contents();
              oldNodes.replaceWith(nodes6448);
            }));
            
            var tmp16246 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp16246.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp16246.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp16246.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp16246.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp16249 = mobl.ref(null);
            
            
            var tmp16248 = mobl.ref(null);
            
            
            var tmp16247 = mobl.ref(null);
            
            var nodes6450 = $("<span>");
            iternode542.append(nodes6450);
            subs__.addSub((mobl.block)(tmp16246, tmp16247, tmp16248, tmp16249, function(_, callback) {
              var root8192 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6451 = $("<span>");
              root8192.append(nodes6451);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1089();
              }));
              
              function renderControl1089() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root8193 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8193); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6451;
                  nodes6451 = node.contents();
                  oldNodes.replaceWith(nodes6451);
                }));
              }
              renderControl1089();
              callback(root8192); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6450;
              nodes6450 = node.contents();
              oldNodes.replaceWith(nodes6450);
            }));
            
            var oldNodes = iternode542;
            iternode542 = iternode542.contents();
            oldNodes.replaceWith(iternode542);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list542.addEventListener('change', function() { listSubs__.unsubscribe(); renderList542(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList542(true); }));
      });
    };
    renderList542();
    
    callback(root8189); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6447;
    nodes6447 = node.contents();
    oldNodes.replaceWith(nodes6447);
  }));
  callback(root8188); return subs__;
  
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
  var root8194 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3057 = $("<table>");
  
  var ref2444 = mobl.ref(ui.tableStyle);
  if(ref2444.get() !== null) {
    node3057.attr('class', ref2444.get());
    subs__.addSub(ref2444.addEventListener('change', function(_, ref, val) {
      node3057.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2444.rebind());
  
  var nodes6452 = $("<span>");
  node3057.append(nodes6452);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1090();
  }));
  
  function renderControl1090() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8195); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6452;
      nodes6452 = node.contents();
      oldNodes.replaceWith(nodes6452);
    }));
  }
  renderControl1090();
  root8194.append(node3057);
  callback(root8194); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root8196 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3058 = $("<tr>");
  
  var ref2445 = mobl.ref(ui.trStyle);
  if(ref2445.get() !== null) {
    node3058.attr('class', ref2445.get());
    subs__.addSub(ref2445.addEventListener('change', function(_, ref, val) {
      node3058.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2445.rebind());
  
  var nodes6453 = $("<span>");
  node3058.append(nodes6453);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1091();
  }));
  
  function renderControl1091() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8197); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6453;
      nodes6453 = node.contents();
      oldNodes.replaceWith(nodes6453);
    }));
  }
  renderControl1091();
  root8196.append(node3058);
  callback(root8196); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root8198 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3059 = $("<td>");
  
  var ref2446 = width;
  if(ref2446.get() !== null) {
    node3059.attr('width', ref2446.get());
    subs__.addSub(ref2446.addEventListener('change', function(_, ref, val) {
      node3059.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2446.rebind());
  
  var ref2447 = mobl.ref(ui.tdStyle);
  if(ref2447.get() !== null) {
    node3059.attr('class', ref2447.get());
    subs__.addSub(ref2447.addEventListener('change', function(_, ref, val) {
      node3059.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2447.rebind());
  
  var nodes6454 = $("<span>");
  node3059.append(nodes6454);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1092();
  }));
  
  function renderControl1092() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8199 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8199); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6454;
      nodes6454 = node.contents();
      oldNodes.replaceWith(nodes6454);
    }));
  }
  renderControl1092();
  root8198.append(node3059);
  callback(root8198); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root8200 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3060 = $("<td>");
  
  var ref2448 = width;
  if(ref2448.get() !== null) {
    node3060.attr('width', ref2448.get());
    subs__.addSub(ref2448.addEventListener('change', function(_, ref, val) {
      node3060.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2448.rebind());
  
  var ref2449 = mobl.ref(ui.tdStyle);
  if(ref2449.get() !== null) {
    node3060.attr('class', ref2449.get());
    subs__.addSub(ref2449.addEventListener('change', function(_, ref, val) {
      node3060.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2449.rebind());
  
  var nodes6455 = $("<span>");
  node3060.append(nodes6455);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1093();
  }));
  
  function renderControl1093() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8201); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6455;
      nodes6455 = node.contents();
      oldNodes.replaceWith(nodes6455);
    }));
  }
  renderControl1093();
  root8200.append(node3060);
  callback(root8200); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root8202 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3061 = $("<td>");
  
  var ref2450 = width;
  if(ref2450.get() !== null) {
    node3061.attr('width', ref2450.get());
    subs__.addSub(ref2450.addEventListener('change', function(_, ref, val) {
      node3061.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2450.rebind());
  
  var ref2451 = mobl.ref(ui.tdStyle);
  if(ref2451.get() !== null) {
    node3061.attr('class', ref2451.get());
    subs__.addSub(ref2451.addEventListener('change', function(_, ref, val) {
      node3061.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2451.rebind());
  
  
  var node3062 = $("<strong>");
  
  var nodes6456 = $("<span>");
  node3062.append(nodes6456);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1094();
  }));
  
  function renderControl1094() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8203); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6456;
      nodes6456 = node.contents();
      oldNodes.replaceWith(nodes6456);
    }));
  }
  renderControl1094();
  node3061.append(node3062);
  root8202.append(node3061);
  callback(root8202); return subs__;
  
  
  
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
  var root8204 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6457 = $("<span>");
  root8204.append(nodes6457);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8205 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3063 = mobl.loadingSpan();
    root8205.append(node3063);
    var list543;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList543 = function() {
      var subs__ = listSubs__;
      list543 = items.get();
      list543.list(function(results545) {
        node3063.empty();
        for(var i640 = 0; i640 < results545.length; i640++) {
          (function() {
            var iternode543 = $("<span>");
            node3063.append(iternode543);
            var it;
            it = mobl.ref(mobl.ref(results545), i640);
            
            var tmp16253 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp16290 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp16255 = mobl.ref(false);
            
            
            var tmp16254 = mobl.ref(null);
            
            var nodes6458 = $("<span>");
            iternode543.append(nodes6458);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp16253, tmp16254, tmp16255, function(_, callback) {
              var root8206 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6459 = $("<span>");
              root8206.append(nodes6459);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl1095();
              }));
              
              function renderControl1095() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root8207 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8207); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6459;
                  nodes6459 = node.contents();
                  oldNodes.replaceWith(nodes6459);
                }));
              }
              renderControl1095();
              callback(root8206); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6458;
              nodes6458 = node.contents();
              oldNodes.replaceWith(nodes6458);
            }));
            
            var oldNodes = iternode543;
            iternode543 = iternode543.contents();
            oldNodes.replaceWith(iternode543);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list543.addEventListener('change', function() { listSubs__.unsubscribe(); renderList543(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList543(true); }));
      });
    };
    renderList543();
    
    callback(root8205); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6457;
    nodes6457 = node.contents();
    oldNodes.replaceWith(nodes6457);
  }));
  callback(root8204); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root8208 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp16257 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp16256 = mobl.ref("Back");
  
  var nodes6460 = $("<span>");
  root8208.append(nodes6460);
  subs__.addSub((ui.backButton)(tmp16256, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16257, function(_, callback) {
    var root8209 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8209); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6460;
    nodes6460 = node.contents();
    oldNodes.replaceWith(nodes6460);
  }));
  var nodes6461 = $("<span>");
  root8208.append(nodes6461);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1096();
  }));
  
  function renderControl1096() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8210 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8210); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6461;
      nodes6461 = node.contents();
      oldNodes.replaceWith(nodes6461);
    }));
  }
  renderControl1096();
  callback(root8208); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root8211 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3064 = $("<div>");
  
  var ref2455 = mobl.ref(ui.customHeaderStyle);
  if(ref2455.get() !== null) {
    node3064.attr('class', ref2455.get());
    subs__.addSub(ref2455.addEventListener('change', function(_, ref, val) {
      node3064.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2455.rebind());
  
  var val1318 = onclick.get();
  if(val1318 !== null) {
    subs__.addSub(mobl.domBind(node3064, 'tap', val1318));
  }
  
  
  var node3065 = $("<div>");
  
  var ref2454 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref2454.get() !== null) {
    node3065.attr('class', ref2454.get());
    subs__.addSub(ref2454.addEventListener('change', function(_, ref, val) {
      node3065.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2454.rebind());
  
  
  var node3066 = $("<div>");
  
  var ref2452 = text;
  node3066.text(""+ref2452.get());
  var ignore483 = false;
  subs__.addSub(ref2452.addEventListener('change', function(_, ref, val) {
    if(ignore483) return;
    node3066.text(""+val);
  }));
  subs__.addSub(ref2452.rebind());
  
  
  var ref2453 = mobl.ref(ui.customHeaderTextStyle);
  if(ref2453.get() !== null) {
    node3066.attr('class', ref2453.get());
    subs__.addSub(ref2453.addEventListener('change', function(_, ref, val) {
      node3066.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2453.rebind());
  
  node3065.append(node3066);
  node3064.append(node3065);
  var nodes6462 = $("<span>");
  node3064.append(nodes6462);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1097();
  }));
  
  function renderControl1097() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8212 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8212); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6462;
      nodes6462 = node.contents();
      oldNodes.replaceWith(nodes6462);
    }));
  }
  renderControl1097();
  root8211.append(node3064);
  callback(root8211); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root8213 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2456 = mobl.ref(ui.customItemStyle);
  if(ref2456.get() !== null) {
    el.attr('class', ref2456.get());
    subs__.addSub(ref2456.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2456.rebind());
  
  var ref2457 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref2457.get() !== null) {
    el.attr('class', ref2457.get());
    subs__.addSub(ref2457.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2457.rebind());
  
  var val1319 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp16291 = result__;
                                           function after439(result__) {
                                             var tmp16292 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after439);if(result__ !== undefined) after439(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp16293 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1319 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1319));
  }
  
  var nodes6463 = $("<span>");
  el.append(nodes6463);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1098();
  }));
  
  function renderControl1098() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8214 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8214); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6463;
      nodes6463 = node.contents();
      oldNodes.replaceWith(nodes6463);
    }));
  }
  renderControl1098();
  root8213.append(el);
  callback(root8213); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root8215 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node3067 = $("<div>");
  node3067.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node3069 = mobl.loadingSpan();
  node3067.append(node3069);
  var list545;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList545 = function() {
    var subs__ = listSubs__;
    list545 = tabs.get();
    list545.list(function(results547) {
      node3069.empty();
      for(var i642 = 0; i642 < results547.length; i642++) {
        (function() {
          var iternode545 = $("<span>");
          node3069.append(iternode545);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results547), i642), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results547), i642), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results547), i642), "_3");
          
          var tmp16258 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp16258.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp16258.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp16258.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp16258.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp16261 = mobl.ref(null);
          
          
          var tmp16260 = mobl.ref(null);
          
          
          var tmp16259 = mobl.ref(null);
          
          var nodes6467 = $("<span>");
          iternode545.append(nodes6467);
          subs__.addSub((mobl.block)(tmp16258, tmp16259, tmp16260, tmp16261, function(_, callback) {
            var root8219 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes6468 = $("<span>");
            root8219.append(nodes6468);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root8220 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6469 = $("<span>");
              root8220.append(nodes6469);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl1099();
              }));
              
              function renderControl1099() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root8221 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8221); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6469;
                  nodes6469 = node.contents();
                  oldNodes.replaceWith(nodes6469);
                }));
              }
              renderControl1099();
              callback(root8220); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6468;
              nodes6468 = node.contents();
              oldNodes.replaceWith(nodes6468);
            }));
            callback(root8219); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6467;
            nodes6467 = node.contents();
            oldNodes.replaceWith(nodes6467);
          }));
          
          var oldNodes = iternode545;
          iternode545 = iternode545.contents();
          oldNodes.replaceWith(iternode545);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list545.addEventListener('change', function() { listSubs__.unsubscribe(); renderList545(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList545(true); }));
    });
  };
  renderList545();
  
  root8215.append(node3067);
  
  var tmp16270 = mobl.ref(null);
  
  
  var tmp16269 = mobl.ref(null);
  
  
  var tmp16268 = mobl.ref(null);
  
  var nodes6464 = $("<span>");
  root8215.append(nodes6464);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp16268, tmp16269, tmp16270, function(_, callback) {
    var root8216 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3068 = mobl.loadingSpan();
    root8216.append(node3068);
    var list544;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList544 = function() {
      var subs__ = listSubs__;
      list544 = tabs.get();
      list544.list(function(results546) {
        node3068.empty();
        for(var i641 = 0; i641 < results546.length; i641++) {
          (function() {
            var iternode544 = $("<span>");
            node3068.append(iternode544);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results546), i641), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results546), i641), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results546), i641), "_3");
            
            var tmp16265 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp16265.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp16265.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp16265.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp16265.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp16264 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp16267 = mobl.ref(null);
            
            
            var tmp16266 = mobl.ref(null);
            
            var nodes6465 = $("<span>");
            iternode544.append(nodes6465);
            subs__.addSub((mobl.span)(tmp16265, tmp16266, tmp16264, tmp16267, function(_, callback) {
              var root8217 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp16263 = mobl.ref(null);
              
              
              var tmp16262 = mobl.ref(null);
              
              var nodes6466 = $("<span>");
              root8217.append(nodes6466);
              subs__.addSub((mobl.label)(tabName, tmp16262, tmp16263, function(_, callback) {
                var root8218 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8218); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6466;
                nodes6466 = node.contents();
                oldNodes.replaceWith(nodes6466);
              }));
              callback(root8217); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6465;
              nodes6465 = node.contents();
              oldNodes.replaceWith(nodes6465);
            }));
            
            var oldNodes = iternode544;
            iternode544 = iternode544.contents();
            oldNodes.replaceWith(iternode544);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list544.addEventListener('change', function() { listSubs__.unsubscribe(); renderList544(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList544(true); }));
      });
    };
    renderList544();
    
    callback(root8216); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6464;
    nodes6464 = node.contents();
    oldNodes.replaceWith(nodes6464);
  }));
  callback(root8215); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root8222 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3070 = $("<div>");
  node3070.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node3070.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  root8222.append(node3070);
  callback(root8222); return subs__;
  
  
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
