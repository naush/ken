mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root335 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node177 = $("<span>");
  root335.append(node177);
  var condSubs0 = new mobl.CompSubscription();
  subs__.addSub(condSubs0);
  var oldValue0;
  var renderCond0 = function() {
    var value12 = value.get();
    if(oldValue0 === value12) return;
    oldValue0 = value12;
    var subs__ = condSubs0;
    subs__.unsubscribe();
    node177.empty();
    if(value12) {
      var nodes314 = $("<span>");
      node177.append(nodes314);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl12();
      }));
      
      function renderControl12() {
        subs__.addSub((elements)(function(elements, callback) {
          var root336 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root336); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes314;
          nodes314 = node.contents();
          oldNodes.replaceWith(nodes314);
        }));
      }
      renderControl12();
      
      
    } else {
      var result__ = null;
      var tmp1329 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1328 = mobl.ref(result__);
      
      var result__ = null;
      var tmp1327 = mobl.ref(result__);
      
      var nodes315 = $("<span>");
      node177.append(nodes315);
      subs__.addSub((mobl.block)(style, tmp1327, tmp1328, tmp1329, function(_, callback) {
        var root337 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = null;
        var tmp1319 = mobl.ref(result__);
        
        var result__ = null;
        var tmp1318 = mobl.ref(result__);
        
        var nodes316 = $("<span>");
        root337.append(nodes316);
        subs__.addSub((mobl.label)(loadingMessage, tmp1318, tmp1319, function(_, callback) {
          var root338 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root338); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes316;
          nodes316 = node.contents();
          oldNodes.replaceWith(nodes316);
        }));
        var result__ = "middle";
        var tmp1321 = mobl.ref(result__);
        
        var result__ = "data:image/gif;base64,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";
        var tmp1320 = mobl.ref(result__);
        
        var result__ = null;
        var tmp1326 = mobl.ref(result__);
        
        var result__ = null;
        var tmp1325 = mobl.ref(result__);
        
        var result__ = null;
        var tmp1324 = mobl.ref(result__);
        
        var result__ = null;
        var tmp1323 = mobl.ref(result__);
        
        var result__ = null;
        var tmp1322 = mobl.ref(result__);
        
        var nodes317 = $("<span>");
        root337.append(nodes317);
        subs__.addSub((ui.image)(tmp1320, tmp1322, tmp1323, tmp1324, tmp1325, tmp1321, tmp1326, function(_, callback) {
          var root339 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root339); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes317;
          nodes317 = node.contents();
          oldNodes.replaceWith(nodes317);
        }));
        callback(root337); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes315;
        nodes315 = node.contents();
        oldNodes.replaceWith(nodes315);
      }));
      
      
    }
  };
  renderCond0();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond0();
  }));
  
  callback(root335); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root340 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node178 = $("<div>");
  
  var ref69 = mobl.ref(ui.headerStyle);
  if(ref69.get() !== null) {
    node178.attr('class', ref69.get());
    subs__.addSub(ref69.addEventListener('change', function(_, ref, val) {
      node178.attr('class', val);
    }));
    
  }
  subs__.addSub(ref69.rebind());
  
  var val146 = onclick.get();
  if(val146 !== null) {
    subs__.addSub(mobl.domBind(node178, 'tap', val146));
  }
  
  
  var node179 = $("<div>");
  
  var ref68 = mobl.ref(ui.headerContainerStyle);
  if(ref68.get() !== null) {
    node179.attr('class', ref68.get());
    subs__.addSub(ref68.addEventListener('change', function(_, ref, val) {
      node179.attr('class', val);
    }));
    
  }
  subs__.addSub(ref68.rebind());
  
  
  var node181 = $("<div>");
  
  var ref66 = text;
  node181.text(""+ref66.get());
  var ignore2 = false;
  subs__.addSub(ref66.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    node181.text(""+val);
  }));
  subs__.addSub(ref66.rebind());
  
  
  var ref67 = mobl.ref(ui.headerTextStyle);
  if(ref67.get() !== null) {
    node181.attr('class', ref67.get());
    subs__.addSub(ref67.addEventListener('change', function(_, ref, val) {
      node181.attr('class', val);
    }));
    
  }
  subs__.addSub(ref67.rebind());
  
  node179.append(node181);
  node178.append(node179);
  var nodes318 = $("<span>");
  node178.append(nodes318);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl13();
  }));
  
  function renderControl13() {
    subs__.addSub((elements)(function(elements, callback) {
      var root341 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root341); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes318;
      nodes318 = node.contents();
      oldNodes.replaceWith(nodes318);
    }));
  }
  renderControl13();
  root340.append(node178);
  callback(root340); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root342 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref70 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref70.get() !== null) {
    sp.attr('class', ref70.get());
    subs__.addSub(ref70.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref70.rebind());
  
  var val147 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val147 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val147));
  }
  
  var val148 = function(event, callback) {
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
  if(val148 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val148));
  }
  
  var val149 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after0(result__) {
                    var tmp1419 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val149 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val149));
  }
  
  var val150 = function(event, callback) {
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
  if(val150 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val150));
  }
  
  var ref71 = text;
  sp.text(""+ref71.get());
  var ignore3 = false;
  subs__.addSub(ref71.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref71.rebind());
  
  
  root342.append(sp);
  callback(root342); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root343 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes319 = $("<span>");
  root343.append(nodes319);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root344 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root344); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes319;
    nodes319 = node.contents();
    oldNodes.replaceWith(nodes319);
  }));
  callback(root343); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root345 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes320 = $("<span>");
  root345.append(nodes320);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root346 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root346); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes320;
    nodes320 = node.contents();
    oldNodes.replaceWith(nodes320);
  }));
  callback(root345); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root347 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node182 = $("<ul>");
  
  var ref72 = mobl.ref(ui.groupStyle);
  if(ref72.get() !== null) {
    node182.attr('class', ref72.get());
    subs__.addSub(ref72.addEventListener('change', function(_, ref, val) {
      node182.attr('class', val);
    }));
    
  }
  subs__.addSub(ref72.rebind());
  
  var nodes321 = $("<span>");
  node182.append(nodes321);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl14();
  }));
  
  function renderControl14() {
    subs__.addSub((elements)(function(elements, callback) {
      var root348 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root348); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes321;
      nodes321 = node.contents();
      oldNodes.replaceWith(nodes321);
    }));
  }
  renderControl14();
  root347.append(node182);
  callback(root347); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root349 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node183 = $("<img>");
  
  var ref73 = url;
  if(ref73.get() !== null) {
    node183.attr('src', ref73.get());
    subs__.addSub(ref73.addEventListener('change', function(_, ref, val) {
      node183.attr('src', val);
    }));
    
  }
  subs__.addSub(ref73.rebind());
  
  var ref74 = width;
  if(ref74.get() !== null) {
    node183.attr('width', ref74.get());
    subs__.addSub(ref74.addEventListener('change', function(_, ref, val) {
      node183.attr('width', val);
    }));
    
  }
  subs__.addSub(ref74.rebind());
  
  var ref75 = height;
  if(ref75.get() !== null) {
    node183.attr('height', ref75.get());
    subs__.addSub(ref75.addEventListener('change', function(_, ref, val) {
      node183.attr('height', val);
    }));
    
  }
  subs__.addSub(ref75.rebind());
  
  var ref76 = style;
  if(ref76.get() !== null) {
    node183.attr('class', ref76.get());
    subs__.addSub(ref76.addEventListener('change', function(_, ref, val) {
      node183.attr('class', val);
    }));
    
  }
  subs__.addSub(ref76.rebind());
  
  var val151 = onclick.get();
  if(val151 !== null) {
    subs__.addSub(mobl.domBind(node183, 'tap', val151));
  }
  
  var ref77 = valign;
  if(ref77.get() !== null) {
    node183.attr('valign', ref77.get());
    subs__.addSub(ref77.addEventListener('change', function(_, ref, val) {
      node183.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref77.rebind());
  
  var ref78 = align;
  if(ref78.get() !== null) {
    node183.attr('align', ref78.get());
    subs__.addSub(ref78.addEventListener('change', function(_, ref, val) {
      node183.attr('align', val);
    }));
    
  }
  subs__.addSub(ref78.rebind());
  
  root349.append(node183);
  callback(root349); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root350 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref79 = mobl.ref(ui.itemStyle);
  if(ref79.get() !== null) {
    el.attr('class', ref79.get());
    subs__.addSub(ref79.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref79.rebind());
  
  var ref80 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref80.get() !== null) {
    el.attr('class', ref80.get());
    subs__.addSub(ref80.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref80.rebind());
  
  var val152 = onswipe.get();
  if(val152 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val152));
  }
  
  var val153 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1420 = result__;
                                           function after1(result__) {
                                             var tmp1421 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1422 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val153 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val153));
  }
  
  var nodes322 = $("<span>");
  el.append(nodes322);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl15();
  }));
  
  function renderControl15() {
    subs__.addSub((elements)(function(elements, callback) {
      var root351 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root351); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes322;
      nodes322 = node.contents();
      oldNodes.replaceWith(nodes322);
    }));
  }
  renderControl15();
  root350.append(el);
  callback(root350); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root352 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node184 = $("<input>");
  node184.attr('type', "checkbox");
  
  var ref82 = b;
  node184.attr('checked', !!ref82.get());
  subs__.addSub(ref82.addEventListener('change', function(_, ref, val) {
    if(ref === ref82) node184.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node184, 'change', function() {
    b.set(!!node184.attr('checked'));
  }));
  
  var val155 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val155 !== null) {
    subs__.addSub(mobl.domBind(node184, 'tap', val155));
  }
  
  var val156 = onchange.get();
  if(val156 !== null) {
    subs__.addSub(mobl.domBind(node184, 'change', val156));
  }
  
  root352.append(node184);
  
  root352.append(" ");
  
  var node185 = $("<span>");
  
  var ref81 = label;
  node185.text(""+ref81.get());
  var ignore4 = false;
  subs__.addSub(ref81.addEventListener('change', function(_, ref, val) {
    if(ignore4) return;
    node185.text(""+val);
  }));
  subs__.addSub(ref81.rebind());
  
  
  var val154 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2(result__) {
                    var tmp1423 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val154 !== null) {
    subs__.addSub(mobl.domBind(node185, 'tap', val154));
  }
  
  root352.append(node185);
  callback(root352); return subs__;
  
  
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
  var root353 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node186 = $("<span>");
  root353.append(node186);
  var condSubs1 = new mobl.CompSubscription();
  subs__.addSub(condSubs1);
  var oldValue1;
  var renderCond1 = function() {
    var value13 = label.get();
    if(oldValue1 === value13) return;
    oldValue1 = value13;
    var subs__ = condSubs1;
    subs__.unsubscribe();
    node186.empty();
    if(value13) {
      var result__ = null;
      var tmp1330 = mobl.ref(result__);
      
      var nodes323 = $("<span>");
      node186.append(nodes323);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp1330, function(_, callback) {
        var root354 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root354); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes323;
        nodes323 = node.contents();
        oldNodes.replaceWith(nodes323);
      }));
      
      
    } else {
      
    }
  };
  renderCond1();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond1();
  }));
  
  
  var node187 = $("<span>");
  root353.append(node187);
  var condSubs2 = new mobl.CompSubscription();
  subs__.addSub(condSubs2);
  var oldValue2;
  var renderCond2 = function() {
    var value14 = validator.get();
    if(oldValue2 === value14) return;
    oldValue2 = value14;
    var subs__ = condSubs2;
    subs__.unsubscribe();
    node187.empty();
    if(value14) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after6(result__) {
        var tmp1424 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1425 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node188 = $("<input>");
        node188.attr('type', "text");
        
        var ref83 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref83.get() !== null) {
          node188.attr('class', ref83.get());
          subs__.addSub(ref83.addEventListener('change', function(_, ref, val) {
            node188.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node188.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node188.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node188.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref83.rebind());
        
        var ref84 = placeholder;
        if(ref84.get() !== null) {
          node188.attr('placeholder', ref84.get());
          subs__.addSub(ref84.addEventListener('change', function(_, ref, val) {
            node188.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref84.rebind());
        
        var ref85 = temp;
        node188.val(""+ref85.get());
        var ignore5 = false;
        subs__.addSub(ref85.addEventListener('change', function(_, ref, val) {
          if(ignore5) return;
          node188.val(""+val);
        }));
        subs__.addSub(ref85.rebind());
        
        subs__.addSub(mobl.domBind(node188, 'keyup change', function() {
          ignore5 = true;
          temp.set(mobl.stringTomobl__String(node188.val()));
          ignore5 = false;
        }));
        
        
        var val157 = onchange.get();
        if(val157 !== null) {
          subs__.addSub(mobl.domBind(node188, 'change', val157));
        }
        
        var val158 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3(result__) {
                          var tmp1426 = result__;
                          function after4(result__) {
                            var tmp1427 = result__;
                            var result__ = tmp1427;
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
                          var result__ = validator.get()(temp.get(), after4);if(result__ !== undefined) after4(result__);
                        }
                        var result__ = onkeyup.get()(event, after3);if(result__ !== undefined) after3(result__);
                      } else {
                        {
                          function after5(result__) {
                            var tmp1427 = result__;
                            var result__ = tmp1427;
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
                          var result__ = validator.get()(temp.get(), after5);if(result__ !== undefined) after5(result__);
                        }
                      }
                    };
        if(val158 !== null) {
          subs__.addSub(mobl.domBind(node188, 'keyup', val158));
        }
        
        var val159 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val159 !== null) {
          subs__.addSub(mobl.domBind(node188, 'blur', val159));
        }
        
        node187.append(node188);
        var result__ = null;
        var tmp1331 = mobl.ref(result__);
        
        var nodes324 = $("<span>");
        node187.append(nodes324);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp1331, function(_, callback) {
          var root355 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root355); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes324;
          nodes324 = node.contents();
          oldNodes.replaceWith(nodes324);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after6);if(result__ !== undefined) after6(result__);
    } else {
      
      var node189 = $("<input>");
      node189.attr('type', "text");
      
      var ref86 = style;
      if(ref86.get() !== null) {
        node189.attr('class', ref86.get());
        subs__.addSub(ref86.addEventListener('change', function(_, ref, val) {
          node189.attr('class', val);
        }));
        
      }
      subs__.addSub(ref86.rebind());
      
      var ref87 = placeholder;
      if(ref87.get() !== null) {
        node189.attr('placeholder', ref87.get());
        subs__.addSub(ref87.addEventListener('change', function(_, ref, val) {
          node189.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref87.rebind());
      
      var ref88 = s;
      node189.val(""+ref88.get());
      var ignore6 = false;
      subs__.addSub(ref88.addEventListener('change', function(_, ref, val) {
        if(ignore6) return;
        node189.val(""+val);
      }));
      subs__.addSub(ref88.rebind());
      
      subs__.addSub(mobl.domBind(node189, 'keyup change', function() {
        ignore6 = true;
        s.set(mobl.stringTomobl__String(node189.val()));
        ignore6 = false;
      }));
      
      
      var val160 = onchange.get();
      if(val160 !== null) {
        subs__.addSub(mobl.domBind(node189, 'change', val160));
      }
      
      var val161 = onkeyup.get();
      if(val161 !== null) {
        subs__.addSub(mobl.domBind(node189, 'keyup', val161));
      }
      
      var val162 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val162 !== null) {
        subs__.addSub(mobl.domBind(node189, 'blur', val162));
      }
      
      node187.append(node189);
      
      
    }
  };
  renderCond2();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond2();
  }));
  
  callback(root353); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root356 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes325 = $("<span>");
  root356.append(nodes325);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root357 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root357); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes325;
    nodes325 = node.contents();
    oldNodes.replaceWith(nodes325);
  }));
  callback(root356); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root358 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after7(result__) {
      var tmp1428 = result__;
      var result__ = tmp1428;
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
    var result__ = validator.get()(n2, after7);if(result__ !== undefined) after7(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes326 = $("<span>");
  root358.append(nodes326);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root359 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root359); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes326;
    nodes326 = node.contents();
    oldNodes.replaceWith(nodes326);
  }));
  callback(root358); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root360 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node190 = $("<span>");
  root360.append(node190);
  var condSubs3 = new mobl.CompSubscription();
  subs__.addSub(condSubs3);
  var oldValue3;
  var renderCond3 = function() {
    var value15 = label.get();
    if(oldValue3 === value15) return;
    oldValue3 = value15;
    var subs__ = condSubs3;
    subs__.unsubscribe();
    node190.empty();
    if(value15) {
      
      var node191 = $("<span>");
      node191.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref92 = label;
      node191.text(""+ref92.get());
      var ignore8 = false;
      subs__.addSub(ref92.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node191.text(""+val);
      }));
      subs__.addSub(ref92.rebind());
      
      
      node190.append(node191);
      
      var node192 = $("<span>");
      node192.attr('style', "float: left");
      
      
      var node193 = $("<input>");
      node193.attr('type', "password");
      
      var ref89 = style;
      if(ref89.get() !== null) {
        node193.attr('class', ref89.get());
        subs__.addSub(ref89.addEventListener('change', function(_, ref, val) {
          node193.attr('class', val);
        }));
        
      }
      subs__.addSub(ref89.rebind());
      
      var ref90 = placeholder;
      if(ref90.get() !== null) {
        node193.attr('placeholder', ref90.get());
        subs__.addSub(ref90.addEventListener('change', function(_, ref, val) {
          node193.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref90.rebind());
      
      var ref91 = s;
      node193.val(""+ref91.get());
      var ignore7 = false;
      subs__.addSub(ref91.addEventListener('change', function(_, ref, val) {
        if(ignore7) return;
        node193.val(""+val);
      }));
      subs__.addSub(ref91.rebind());
      
      subs__.addSub(mobl.domBind(node193, 'keyup change', function() {
        ignore7 = true;
        s.set(mobl.stringTomobl__String(node193.val()));
        ignore7 = false;
      }));
      
      
      var val163 = onchange.get();
      if(val163 !== null) {
        subs__.addSub(mobl.domBind(node193, 'change', val163));
      }
      
      var val164 = onkeyup.get();
      if(val164 !== null) {
        subs__.addSub(mobl.domBind(node193, 'keyup', val164));
      }
      
      var val165 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val165 !== null) {
        subs__.addSub(mobl.domBind(node193, 'blur', val165));
      }
      
      node192.append(node193);
      node190.append(node192);
      
      
      
      
    } else {
      
      var node194 = $("<input>");
      node194.attr('type', "password");
      
      var ref93 = style;
      if(ref93.get() !== null) {
        node194.attr('class', ref93.get());
        subs__.addSub(ref93.addEventListener('change', function(_, ref, val) {
          node194.attr('class', val);
        }));
        
      }
      subs__.addSub(ref93.rebind());
      
      var ref94 = placeholder;
      if(ref94.get() !== null) {
        node194.attr('placeholder', ref94.get());
        subs__.addSub(ref94.addEventListener('change', function(_, ref, val) {
          node194.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref94.rebind());
      
      var ref95 = s;
      node194.val(""+ref95.get());
      var ignore9 = false;
      subs__.addSub(ref95.addEventListener('change', function(_, ref, val) {
        if(ignore9) return;
        node194.val(""+val);
      }));
      subs__.addSub(ref95.rebind());
      
      subs__.addSub(mobl.domBind(node194, 'keyup change', function() {
        ignore9 = true;
        s.set(mobl.stringTomobl__String(node194.val()));
        ignore9 = false;
      }));
      
      
      var val166 = onchange.get();
      if(val166 !== null) {
        subs__.addSub(mobl.domBind(node194, 'change', val166));
      }
      
      var val167 = onkeyup.get();
      if(val167 !== null) {
        subs__.addSub(mobl.domBind(node194, 'keyup', val167));
      }
      
      var val168 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val168 !== null) {
        subs__.addSub(mobl.domBind(node194, 'blur', val168));
      }
      
      node190.append(node194);
      
      
    }
  };
  renderCond3();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond3();
  }));
  
  callback(root360); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root361 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref100 = style;
  if(ref100.get() !== null) {
    sel.attr('class', ref100.get());
    subs__.addSub(ref100.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref100.rebind());
  
  var val169 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after8(result__) {
                    var tmp1430 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after8);if(result__ !== undefined) after8(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val169 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val169));
  }
  
  
  var node195 = mobl.loadingSpan();
  sel.append(node195);
  var list0;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList0 = function() {
    var subs__ = listSubs__;
    list0 = options.get();
    list0.list(function(results0) {
      node195.empty();
      for(var i8 = 0; i8 < results0.length; i8++) {
        (function() {
          var iternode0 = $("<span>");
          node195.append(iternode0);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results0), i8), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results0), i8), "_2");
          
          var node196 = $("<option>");
          
          var ref96 = optionDescription;
          node196.text(""+ref96.get());
          var ignore10 = false;
          subs__.addSub(ref96.addEventListener('change', function(_, ref, val) {
            if(ignore10) return;
            node196.text(""+val);
          }));
          subs__.addSub(ref96.rebind());
          
          
          var ref97 = optionStyle;
          if(ref97.get() !== null) {
            node196.attr('class', ref97.get());
            subs__.addSub(ref97.addEventListener('change', function(_, ref, val) {
              node196.attr('class', val);
            }));
            
          }
          subs__.addSub(ref97.rebind());
          
          var ref98 = optionValue;
          if(ref98.get() !== null) {
            node196.attr('value', ref98.get());
            subs__.addSub(ref98.addEventListener('change', function(_, ref, val) {
              node196.attr('value', val);
            }));
            
          }
          subs__.addSub(ref98.rebind());
          
          var ref99 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref99.get() !== null) {
            node196.attr('selected', ref99.get());
            subs__.addSub(ref99.addEventListener('change', function(_, ref, val) {
              node196.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node196.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node196.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref99.rebind());
          
          iternode0.append(node196);
          
          var oldNodes = iternode0;
          iternode0 = iternode0.contents();
          oldNodes.replaceWith(iternode0);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list0.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
    });
  };
  renderList0();
  
  root361.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root361); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root362 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  var result__ = null;
  var tmp1340 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1339 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1338 = mobl.ref(result__);
  
  var nodes327 = $("<span>");
  root362.append(nodes327);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp1338, tmp1339, tmp1340, function(_, callback) {
    var root363 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node197 = mobl.loadingSpan();
    root363.append(node197);
    var list1;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList1 = function() {
      var subs__ = listSubs__;
      list1 = tabs.get();
      list1.list(function(results1) {
        node197.empty();
        for(var i9 = 0; i9 < results1.length; i9++) {
          (function() {
            var iternode1 = $("<span>");
            node197.append(iternode1);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results1), i9), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i9), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i9), "_3");
            var result__ = activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
            var tmp1335 = mobl.ref(result__);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp1335.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1335.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp1335.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp1335.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = tabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp1334 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1337 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1336 = mobl.ref(result__);
            
            var nodes328 = $("<span>");
            iternode1.append(nodes328);
            subs__.addSub((mobl.span)(tmp1335, tmp1336, tmp1334, tmp1337, function(_, callback) {
              var root364 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp1333 = mobl.ref(result__);
              
              var result__ = null;
              var tmp1332 = mobl.ref(result__);
              
              var nodes329 = $("<span>");
              root364.append(nodes329);
              subs__.addSub((mobl.label)(tabName, tmp1332, tmp1333, function(_, callback) {
                var root365 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root365); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes329;
                nodes329 = node.contents();
                oldNodes.replaceWith(nodes329);
              }));
              callback(root364); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes328;
              nodes328 = node.contents();
              oldNodes.replaceWith(nodes328);
            }));
            
            var oldNodes = iternode1;
            iternode1 = iternode1.contents();
            oldNodes.replaceWith(iternode1);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
      });
    };
    renderList1();
    
    callback(root363); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes327;
    nodes327 = node.contents();
    oldNodes.replaceWith(nodes327);
  }));
  
  var node198 = mobl.loadingSpan();
  root362.append(node198);
  var list2;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2 = function() {
    var subs__ = listSubs__;
    list2 = tabs.get();
    list2.list(function(results2) {
      node198.empty();
      for(var i10 = 0; i10 < results2.length; i10++) {
        (function() {
          var iternode2 = $("<span>");
          node198.append(iternode2);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results2), i10), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i10), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i10), "_3");
          var result__ = activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
          var tmp1341 = mobl.ref(result__);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp1341.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp1341.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp1341.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp1341.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          var result__ = null;
          var tmp1344 = mobl.ref(result__);
          
          var result__ = null;
          var tmp1343 = mobl.ref(result__);
          
          var result__ = null;
          var tmp1342 = mobl.ref(result__);
          
          var nodes330 = $("<span>");
          iternode2.append(nodes330);
          subs__.addSub((mobl.block)(tmp1341, tmp1342, tmp1343, tmp1344, function(_, callback) {
            var root366 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes331 = $("<span>");
            root366.append(nodes331);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root367 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes332 = $("<span>");
              root367.append(nodes332);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl16();
              }));
              
              function renderControl16() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root368 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root368); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes332;
                  nodes332 = node.contents();
                  oldNodes.replaceWith(nodes332);
                }));
              }
              renderControl16();
              callback(root367); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes331;
              nodes331 = node.contents();
              oldNodes.replaceWith(nodes331);
            }));
            callback(root366); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes330;
            nodes330 = node.contents();
            oldNodes.replaceWith(nodes330);
          }));
          
          var oldNodes = iternode2;
          iternode2 = iternode2.contents();
          oldNodes.replaceWith(iternode2);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
    });
  };
  renderList2();
  
  callback(root362); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node199 = $("<div>");
  
  var ref104 = mobl.ref(ui.searchboxStyle);
  if(ref104.get() !== null) {
    node199.attr('class', ref104.get());
    subs__.addSub(ref104.addEventListener('change', function(_, ref, val) {
      node199.attr('class', val);
    }));
    
  }
  subs__.addSub(ref104.rebind());
  
  
  var node200 = $("<input>");
  node200.attr('type', "search");
  
  var ref101 = mobl.ref(ui.searchBoxInputStyle);
  if(ref101.get() !== null) {
    node200.attr('class', ref101.get());
    subs__.addSub(ref101.addEventListener('change', function(_, ref, val) {
      node200.attr('class', val);
    }));
    
  }
  subs__.addSub(ref101.rebind());
  
  var ref102 = placeholder;
  if(ref102.get() !== null) {
    node200.attr('placeholder', ref102.get());
    subs__.addSub(ref102.addEventListener('change', function(_, ref, val) {
      node200.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref102.rebind());
  
  var ref103 = s;
  node200.val(""+ref103.get());
  var ignore11 = false;
  subs__.addSub(ref103.addEventListener('change', function(_, ref, val) {
    if(ignore11) return;
    node200.val(""+val);
  }));
  subs__.addSub(ref103.rebind());
  
  subs__.addSub(mobl.domBind(node200, 'keyup change', function() {
    ignore11 = true;
    s.set(mobl.stringTomobl__String(node200.val()));
    ignore11 = false;
  }));
  
  
  var val170 = onsearch.get();
  if(val170 !== null) {
    subs__.addSub(mobl.domBind(node200, 'change', val170));
  }
  
  var val171 = onkeyup.get();
  if(val171 !== null) {
    subs__.addSub(mobl.domBind(node200, 'keyup', val171));
  }
  node200.attr('autocorrect', false);
  node200.attr('autocapitalize', false);
  node200.attr('autocomplete', false);
  
  node199.append(node200);
  root369.append(node199);
  callback(root369); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root370 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref105 = mobl.ref(ui.contextMenuStyle);
  if(ref105.get() !== null) {
    menu.attr('class', ref105.get());
    subs__.addSub(ref105.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref105.rebind());
  
  var nodes333 = $("<span>");
  menu.append(nodes333);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl17();
  }));
  
  function renderControl17() {
    subs__.addSub((elements)(function(elements, callback) {
      var root371 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root371); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes333;
      nodes333 = node.contents();
      oldNodes.replaceWith(nodes333);
    }));
  }
  renderControl17();
  root370.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val172 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1433 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val172 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val172));
  }
  
  root370.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root370); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root372 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1418 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1418.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node201 = $("<span>");
  root372.append(node201);
  var condSubs4 = new mobl.CompSubscription();
  subs__.addSub(condSubs4);
  var oldValue4;
  var renderCond4 = function() {
    var value16 = tmp1418.get();
    if(oldValue4 === value16) return;
    oldValue4 = value16;
    var subs__ = condSubs4;
    subs__.unsubscribe();
    node201.empty();
    if(value16) {
      items.get().one(function(result__) {
        var tmp1434 = result__;
        var current = mobl.ref(result__);
        
        var node202 = $("<div>");
        node202.attr('width', "100%");
        
        
        var node203 = $("<div>");
        node203.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes336 = $("<span>");
        node203.append(nodes336);
        subs__.addSub((ui.group)(function(_, callback) {
          var root375 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node206 = mobl.loadingSpan();
          root375.append(node206);
          var list3;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList3 = function() {
            var subs__ = listSubs__;
            list3 = items.get();
            list3.list(function(results3) {
              node206.empty();
              for(var i11 = 0; i11 < results3.length; i11++) {
                (function() {
                  var iternode3 = $("<span>");
                  node206.append(iternode3);
                  var it;
                  it = mobl.ref(mobl.ref(results3), i11);
                  var result__ = it.get() == current.get();
                  var tmp1358 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1358.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1358.set(it.get() == current.get());
                  }));
                  
                  
                  var node207 = $("<span>");
                  iternode3.append(node207);
                  var condSubs6 = new mobl.CompSubscription();
                  subs__.addSub(condSubs6);
                  var oldValue6;
                  var renderCond6 = function() {
                    var value18 = tmp1358.get();
                    if(oldValue6 === value18) return;
                    oldValue6 = value18;
                    var subs__ = condSubs6;
                    subs__.unsubscribe();
                    node207.empty();
                    if(value18) {
                      var result__ = false;
                      var tmp1354 = mobl.ref(result__);
                      
                      var result__ = null;
                      var tmp1353 = mobl.ref(result__);
                      
                      var result__ = null;
                      var tmp1352 = mobl.ref(result__);
                      
                      var nodes337 = $("<span>");
                      node207.append(nodes337);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp1352, tmp1353, tmp1354, function(_, callback) {
                        var root376 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes338 = $("<span>");
                        root376.append(nodes338);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl19();
                        }));
                        
                        function renderControl19() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root377 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root377); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes338;
                            nodes338 = node.contents();
                            oldNodes.replaceWith(nodes338);
                          }));
                        }
                        renderControl19();
                        callback(root376); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes337;
                        nodes337 = node.contents();
                        oldNodes.replaceWith(nodes337);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp1356 = mobl.ref(result__);
                      
                      var result__ = true;
                      var tmp1355 = mobl.ref(result__);
                      
                      var result__ = null;
                      var tmp1357 = mobl.ref(result__);
                      
                      var nodes339 = $("<span>");
                      node207.append(nodes339);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1356, tmp1357, tmp1355, function(_, callback) {
                        var root378 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes340 = $("<span>");
                        root378.append(nodes340);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl20();
                        }));
                        
                        function renderControl20() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root379 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root379); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes340;
                            nodes340 = node.contents();
                            oldNodes.replaceWith(nodes340);
                          }));
                        }
                        renderControl20();
                        callback(root378); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes339;
                        nodes339 = node.contents();
                        oldNodes.replaceWith(nodes339);
                      }));
                      
                      
                    }
                  };
                  renderCond6();
                  subs__.addSub(tmp1358.addEventListener('change', function() {
                    renderCond6();
                  }));
                  
                  
                  var oldNodes = iternode3;
                  iternode3 = iternode3.contents();
                  oldNodes.replaceWith(iternode3);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list3.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
            });
          };
          renderList3();
          
          callback(root375); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes336;
          nodes336 = node.contents();
          oldNodes.replaceWith(nodes336);
        }));
        node202.append(node203);
        
        var node204 = $("<div>");
        node204.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node205 = $("<span>");
        node204.append(node205);
        var condSubs5 = new mobl.CompSubscription();
        subs__.addSub(condSubs5);
        var oldValue5;
        var renderCond5 = function() {
          var value17 = current.get();
          if(oldValue5 === value17) return;
          oldValue5 = value17;
          var subs__ = condSubs5;
          subs__.unsubscribe();
          node205.empty();
          if(value17) {
            var nodes334 = $("<span>");
            node205.append(nodes334);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl18();
            }));
            
            function renderControl18() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root373 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root373); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes334;
                nodes334 = node.contents();
                oldNodes.replaceWith(nodes334);
              }));
            }
            renderControl18();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp1359 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1361 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1360 = mobl.ref(result__);
            
            var nodes335 = $("<span>");
            node205.append(nodes335);
            subs__.addSub((mobl.label)(tmp1359, tmp1360, tmp1361, function(_, callback) {
              var root374 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root374); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes335;
              nodes335 = node.contents();
              oldNodes.replaceWith(nodes335);
            }));
            
            
          }
        };
        renderCond5();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond5();
        }));
        
        node202.append(node204);
        node201.append(node202);
        
        
        
        
        
        
      });
    } else {
      var nodes341 = $("<span>");
      node201.append(nodes341);
      subs__.addSub((ui.group)(function(_, callback) {
        var root380 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node208 = mobl.loadingSpan();
        root380.append(node208);
        var list4;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList4 = function() {
          var subs__ = listSubs__;
          list4 = items.get();
          list4.list(function(results4) {
            node208.empty();
            for(var i12 = 0; i12 < results4.length; i12++) {
              (function() {
                var iternode4 = $("<span>");
                node208.append(iternode4);
                var it;
                it = mobl.ref(mobl.ref(results4), i12);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1435 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp1345 = mobl.ref(result__);
                
                var result__ = false;
                var tmp1347 = mobl.ref(result__);
                
                var result__ = null;
                var tmp1346 = mobl.ref(result__);
                
                var nodes342 = $("<span>");
                iternode4.append(nodes342);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1345, tmp1346, tmp1347, function(_, callback) {
                  var root381 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes343 = $("<span>");
                  root381.append(nodes343);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl21();
                  }));
                  
                  function renderControl21() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root382 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root382); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes343;
                      nodes343 = node.contents();
                      oldNodes.replaceWith(nodes343);
                    }));
                  }
                  renderControl21();
                  callback(root381); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes342;
                  nodes342 = node.contents();
                  oldNodes.replaceWith(nodes342);
                }));
                
                var oldNodes = iternode4;
                iternode4 = iternode4.contents();
                oldNodes.replaceWith(iternode4);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list4.addEventListener('change', function() { listSubs__.unsubscribe(); renderList4(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList4(true); }));
          });
        };
        renderList4();
        
        callback(root380); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes341;
        nodes341 = node.contents();
        oldNodes.replaceWith(nodes341);
      }));
      
      
    }
  };
  renderCond4();
  subs__.addSub(tmp1418.addEventListener('change', function() {
    renderCond4();
  }));
  
  callback(root372); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root383 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1350 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1351 = mobl.ref(result__);
  
  var nodes344 = $("<span>");
  root383.append(nodes344);
  subs__.addSub((ui.header)(tmp1350, tmp1351, function(_, callback) {
    var root384 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1349 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1348 = mobl.ref(result__);
    
    var nodes345 = $("<span>");
    root384.append(nodes345);
    subs__.addSub((ui.backButton)(tmp1348, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1349, function(_, callback) {
      var root385 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root385); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes345;
      nodes345 = node.contents();
      oldNodes.replaceWith(nodes345);
    }));
    callback(root384); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes344;
    nodes344 = node.contents();
    oldNodes.replaceWith(nodes344);
  }));
  var nodes346 = $("<span>");
  root383.append(nodes346);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl22();
  }));
  
  function renderControl22() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root386 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root386); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes346;
      nodes346 = node.contents();
      oldNodes.replaceWith(nodes346);
    }));
  }
  renderControl22();
  callback(root383); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root387 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes347 = $("<span>");
  root387.append(nodes347);
  subs__.addSub((ui.group)(function(_, callback) {
    var root388 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node209 = mobl.loadingSpan();
    root388.append(node209);
    var list5;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList5 = function() {
      var subs__ = listSubs__;
      list5 = coll.get();
      list5.list(function(results5) {
        node209.empty();
        for(var i13 = 0; i13 < results5.length; i13++) {
          (function() {
            var iternode5 = $("<span>");
            node209.append(iternode5);
            var it;
            it = mobl.ref(mobl.ref(results5), i13);
            var result__ = it.get() == selected.get();
            var tmp1368 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp1368.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1368.set(it.get() == selected.get());
            }));
            
            
            var node210 = $("<span>");
            iternode5.append(node210);
            var condSubs7 = new mobl.CompSubscription();
            subs__.addSub(condSubs7);
            var oldValue7;
            var renderCond7 = function() {
              var value19 = tmp1368.get();
              if(oldValue7 === value19) return;
              oldValue7 = value19;
              var subs__ = condSubs7;
              subs__.unsubscribe();
              node210.empty();
              if(value19) {
                var result__ = false;
                var tmp1364 = mobl.ref(result__);
                
                var result__ = null;
                var tmp1363 = mobl.ref(result__);
                
                var result__ = null;
                var tmp1362 = mobl.ref(result__);
                
                var nodes348 = $("<span>");
                node210.append(nodes348);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1362, tmp1363, tmp1364, function(_, callback) {
                  var root389 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes349 = $("<span>");
                  root389.append(nodes349);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl23();
                  }));
                  
                  function renderControl23() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root390 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root390); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes349;
                      nodes349 = node.contents();
                      oldNodes.replaceWith(nodes349);
                    }));
                  }
                  renderControl23();
                  callback(root389); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes348;
                  nodes348 = node.contents();
                  oldNodes.replaceWith(nodes348);
                }));
                
                
              } else {
                var result__ = true;
                var tmp1366 = mobl.ref(result__);
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1365 = mobl.ref(result__);
                
                var result__ = null;
                var tmp1367 = mobl.ref(result__);
                
                var nodes350 = $("<span>");
                node210.append(nodes350);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1365, tmp1367, tmp1366, function(_, callback) {
                  var root391 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes351 = $("<span>");
                  root391.append(nodes351);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl24();
                  }));
                  
                  function renderControl24() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root392 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root392); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes351;
                      nodes351 = node.contents();
                      oldNodes.replaceWith(nodes351);
                    }));
                  }
                  renderControl24();
                  callback(root391); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes350;
                  nodes350 = node.contents();
                  oldNodes.replaceWith(nodes350);
                }));
                
                
              }
            };
            renderCond7();
            subs__.addSub(tmp1368.addEventListener('change', function() {
              renderCond7();
            }));
            
            
            var oldNodes = iternode5;
            iternode5 = iternode5.contents();
            oldNodes.replaceWith(iternode5);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list5.addEventListener('change', function() { listSubs__.unsubscribe(); renderList5(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList5(true); }));
      });
    };
    renderList5();
    
    callback(root388); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes347;
    nodes347 = node.contents();
    oldNodes.replaceWith(nodes347);
  }));
  callback(root387); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root393 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp1436 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp1369 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp1369.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp1369.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp1369.set(coll.get().limit(n.get()));
    }));
    
    
    var node211 = mobl.loadingSpan();
    root393.append(node211);
    var list6;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList6 = function() {
      var subs__ = listSubs__;
      list6 = tmp1369.get();
      list6.list(function(results6) {
        node211.empty();
        for(var i14 = 0; i14 < results6.length; i14++) {
          (function() {
            var iternode6 = $("<span>");
            node211.append(iternode6);
            var it;
            it = mobl.ref(mobl.ref(results6), i14);
            var nodes352 = $("<span>");
            iternode6.append(nodes352);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl25();
            }));
            
            function renderControl25() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root394 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root394); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes352;
                nodes352 = node.contents();
                oldNodes.replaceWith(nodes352);
              }));
            }
            renderControl25();
            
            var oldNodes = iternode6;
            iternode6 = iternode6.contents();
            oldNodes.replaceWith(iternode6);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list6.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
        subs__.addSub(tmp1369.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
      });
    };
    renderList6();
    
    var result__ = n.get() < total.get();
    var tmp1375 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp1375.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp1375.set(n.get() < total.get());
    }));
    
    
    var node212 = $("<span>");
    root393.append(node212);
    var condSubs8 = new mobl.CompSubscription();
    subs__.addSub(condSubs8);
    var oldValue8;
    var renderCond8 = function() {
      var value20 = tmp1375.get();
      if(oldValue8 === value20) return;
      oldValue8 = value20;
      var subs__ = condSubs8;
      subs__.unsubscribe();
      node212.empty();
      if(value20) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1372 = mobl.ref(result__);
        
        var result__ = null;
        var tmp1374 = mobl.ref(result__);
        
        var result__ = null;
        var tmp1373 = mobl.ref(result__);
        
        var nodes353 = $("<span>");
        node212.append(nodes353);
        subs__.addSub((mobl.block)(moreStyle, tmp1373, tmp1372, tmp1374, function(_, callback) {
          var root395 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var result__ = null;
          var tmp1371 = mobl.ref(result__);
          
          var result__ = null;
          var tmp1370 = mobl.ref(result__);
          
          var nodes354 = $("<span>");
          root395.append(nodes354);
          subs__.addSub((mobl.label)(moreLabel, tmp1370, tmp1371, function(_, callback) {
            var root396 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root396); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes354;
            nodes354 = node.contents();
            oldNodes.replaceWith(nodes354);
          }));
          callback(root395); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes353;
          nodes353 = node.contents();
          oldNodes.replaceWith(nodes353);
        }));
        
        
      } else {
        
      }
    };
    renderCond8();
    subs__.addSub(tmp1375.addEventListener('change', function() {
      renderCond8();
    }));
    
    callback(root393); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root397 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes355 = $("<span>");
  root397.append(nodes355);
  subs__.addSub((ui.group)(function(_, callback) {
    var root398 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node213 = mobl.loadingSpan();
    root398.append(node213);
    var list7;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList7 = function() {
      var subs__ = listSubs__;
      list7 = items.get();
      list7.list(function(results7) {
        node213.empty();
        for(var i15 = 0; i15 < results7.length; i15++) {
          (function() {
            var iternode7 = $("<span>");
            node213.append(iternode7);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results7), i15), "_1");it = mobl.ref(mobl.ref(mobl.ref(results7), i15), "_2");
            var result__ = false;
            var tmp1379 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1378 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1377 = mobl.ref(result__);
            
            var nodes356 = $("<span>");
            iternode7.append(nodes356);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1377, tmp1378, tmp1379, function(_, callback) {
              var root399 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp1376 = mobl.ref(result__);
              
              var nodes357 = $("<span>");
              root399.append(nodes357);
              subs__.addSub((ui.checkBox)(checked, it, tmp1376, function(_, callback) {
                var root400 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root400); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes357;
                nodes357 = node.contents();
                oldNodes.replaceWith(nodes357);
              }));
              callback(root399); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes356;
              nodes356 = node.contents();
              oldNodes.replaceWith(nodes356);
            }));
            
            var oldNodes = iternode7;
            iternode7 = iternode7.contents();
            oldNodes.replaceWith(iternode7);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list7.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
      });
    };
    renderList7();
    
    callback(root398); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes355;
    nodes355 = node.contents();
    oldNodes.replaceWith(nodes355);
  }));
  callback(root397); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root401 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll35) {
    coll35 = coll35.reverse();
    function processOne9() {
      var it;
      it = coll35.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll35.length > 0) processOne9(); else rest9();
      
    }
    function rest9() {
      var result__ = null;
      var tmp1383 = mobl.ref(result__);
      
      var nodes358 = $("<span>");
      root401.append(nodes358);
      subs__.addSub((ui.header)(title, tmp1383, function(_, callback) {
        var root402 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1380 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1381 = mobl.ref(result__);
        
        var nodes359 = $("<span>");
        root402.append(nodes359);
        subs__.addSub((ui.backButton)(tmp1381, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1380, function(_, callback) {
          var root403 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root403); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes359;
          nodes359 = node.contents();
          oldNodes.replaceWith(nodes359);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll34) {
                           coll34 = coll34.reverse();
                           function processOne8() {
                             var checked;var it;
                             var tmp1438 = coll34.pop();
                             checked = tmp1438._1;it = tmp1438._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll34.length > 0) processOne8(); else rest8();
                               
                             } else {
                               {
                                 
                                 if(coll34.length > 0) processOne8(); else rest8();
                                 
                               }
                             }
                           }
                           function rest8() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll34.length > 0) processOne8(); else rest8();
                         });
                         
                       };
        var tmp1382 = mobl.ref(result__);
        
        var nodes360 = $("<span>");
        root402.append(nodes360);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1382, function(_, callback) {
          var root404 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root404); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes360;
          nodes360 = node.contents();
          oldNodes.replaceWith(nodes360);
        }));
        callback(root402); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes358;
        nodes358 = node.contents();
        oldNodes.replaceWith(nodes358);
      }));
      var nodes361 = $("<span>");
      root401.append(nodes361);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root405 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root405); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes361;
        nodes361 = node.contents();
        oldNodes.replaceWith(nodes361);
      }));
      callback(root401); return subs__;
      
      
    }
    if(coll35.length > 0) processOne9(); else rest9();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root406 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var result__ = null;
  var tmp1385 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1384 = mobl.ref(result__);
  
  var nodes362 = $("<span>");
  root406.append(nodes362);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp1384, tmp1385, function(_, callback) {
    var root407 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root407); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes362;
    nodes362 = node.contents();
    oldNodes.replaceWith(nodes362);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp1386 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes363 = $("<span>");
  root406.append(nodes363);
  subs__.addSub((ui.masterDetail)(tmp1386, masterItem, detailItem, function(_, callback) {
    var root408 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root408); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes363;
    nodes363 = node.contents();
    oldNodes.replaceWith(nodes363);
  }));
  callback(root406); return subs__;
  
  
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
  var root409 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  var result__ = null;
  var tmp1399 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1398 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1397 = mobl.ref(result__);
  
  var nodes364 = $("<span>");
  root409.append(nodes364);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp1397, tmp1398, tmp1399, function(_, callback) {
    var root410 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node214 = mobl.loadingSpan();
    root410.append(node214);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = sections.get();
      list8.list(function(results8) {
        node214.empty();
        for(var i16 = 0; i16 < results8.length; i16++) {
          (function() {
            var iternode8 = $("<span>");
            node214.append(iternode8);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results8), i16), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results8), i16), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp1390 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1390.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1390.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1390.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1390.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp1389 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1392 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1391 = mobl.ref(result__);
            
            var nodes365 = $("<span>");
            iternode8.append(nodes365);
            subs__.addSub((mobl.span)(tmp1390, tmp1391, tmp1389, tmp1392, function(_, callback) {
              var root411 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp1388 = mobl.ref(result__);
              
              var result__ = null;
              var tmp1387 = mobl.ref(result__);
              
              var nodes366 = $("<span>");
              root411.append(nodes366);
              subs__.addSub((mobl.label)(sectionName, tmp1387, tmp1388, function(_, callback) {
                var root412 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root412); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes366;
                nodes366 = node.contents();
                oldNodes.replaceWith(nodes366);
              }));
              callback(root411); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes365;
              nodes365 = node.contents();
              oldNodes.replaceWith(nodes365);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp1393 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1393.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1393.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1393.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1393.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var result__ = null;
            var tmp1396 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1395 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1394 = mobl.ref(result__);
            
            var nodes367 = $("<span>");
            iternode8.append(nodes367);
            subs__.addSub((mobl.block)(tmp1393, tmp1394, tmp1395, tmp1396, function(_, callback) {
              var root413 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes368 = $("<span>");
              root413.append(nodes368);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl26();
              }));
              
              function renderControl26() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root414 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root414); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes368;
                  nodes368 = node.contents();
                  oldNodes.replaceWith(nodes368);
                }));
              }
              renderControl26();
              callback(root413); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes367;
              nodes367 = node.contents();
              oldNodes.replaceWith(nodes367);
            }));
            
            var oldNodes = iternode8;
            iternode8 = iternode8.contents();
            oldNodes.replaceWith(iternode8);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list8.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
      });
    };
    renderList8();
    
    callback(root410); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes364;
    nodes364 = node.contents();
    oldNodes.replaceWith(nodes364);
  }));
  callback(root409); return subs__;
  
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
  var root415 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node215 = $("<table>");
  
  var ref106 = mobl.ref(ui.tableStyle);
  if(ref106.get() !== null) {
    node215.attr('class', ref106.get());
    subs__.addSub(ref106.addEventListener('change', function(_, ref, val) {
      node215.attr('class', val);
    }));
    
  }
  subs__.addSub(ref106.rebind());
  
  var nodes369 = $("<span>");
  node215.append(nodes369);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl27();
  }));
  
  function renderControl27() {
    subs__.addSub((elements)(function(elements, callback) {
      var root416 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root416); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes369;
      nodes369 = node.contents();
      oldNodes.replaceWith(nodes369);
    }));
  }
  renderControl27();
  root415.append(node215);
  callback(root415); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root417 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node216 = $("<tr>");
  
  var ref107 = mobl.ref(ui.trStyle);
  if(ref107.get() !== null) {
    node216.attr('class', ref107.get());
    subs__.addSub(ref107.addEventListener('change', function(_, ref, val) {
      node216.attr('class', val);
    }));
    
  }
  subs__.addSub(ref107.rebind());
  
  var nodes370 = $("<span>");
  node216.append(nodes370);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl28();
  }));
  
  function renderControl28() {
    subs__.addSub((elements)(function(elements, callback) {
      var root418 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root418); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes370;
      nodes370 = node.contents();
      oldNodes.replaceWith(nodes370);
    }));
  }
  renderControl28();
  root417.append(node216);
  callback(root417); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root419 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node217 = $("<td>");
  
  var ref109 = width;
  if(ref109.get() !== null) {
    node217.attr('width', ref109.get());
    subs__.addSub(ref109.addEventListener('change', function(_, ref, val) {
      node217.attr('width', val);
    }));
    
  }
  subs__.addSub(ref109.rebind());
  
  var ref110 = mobl.ref(ui.tdStyle);
  if(ref110.get() !== null) {
    node217.attr('class', ref110.get());
    subs__.addSub(ref110.addEventListener('change', function(_, ref, val) {
      node217.attr('class', val);
    }));
    
  }
  subs__.addSub(ref110.rebind());
  
  var nodes371 = $("<span>");
  node217.append(nodes371);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl29();
  }));
  
  function renderControl29() {
    subs__.addSub((elements)(function(elements, callback) {
      var root420 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root420); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes371;
      nodes371 = node.contents();
      oldNodes.replaceWith(nodes371);
    }));
  }
  renderControl29();
  root419.append(node217);
  callback(root419); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root421 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node218 = $("<td>");
  
  var ref111 = width;
  if(ref111.get() !== null) {
    node218.attr('width', ref111.get());
    subs__.addSub(ref111.addEventListener('change', function(_, ref, val) {
      node218.attr('width', val);
    }));
    
  }
  subs__.addSub(ref111.rebind());
  
  var ref112 = mobl.ref(ui.tdStyle);
  if(ref112.get() !== null) {
    node218.attr('class', ref112.get());
    subs__.addSub(ref112.addEventListener('change', function(_, ref, val) {
      node218.attr('class', val);
    }));
    
  }
  subs__.addSub(ref112.rebind());
  
  var nodes372 = $("<span>");
  node218.append(nodes372);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl30();
  }));
  
  function renderControl30() {
    subs__.addSub((elements)(function(elements, callback) {
      var root422 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root422); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes372;
      nodes372 = node.contents();
      oldNodes.replaceWith(nodes372);
    }));
  }
  renderControl30();
  root421.append(node218);
  callback(root421); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root423 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node219 = $("<td>");
  
  var ref113 = width;
  if(ref113.get() !== null) {
    node219.attr('width', ref113.get());
    subs__.addSub(ref113.addEventListener('change', function(_, ref, val) {
      node219.attr('width', val);
    }));
    
  }
  subs__.addSub(ref113.rebind());
  
  var ref114 = mobl.ref(ui.tdStyle);
  if(ref114.get() !== null) {
    node219.attr('class', ref114.get());
    subs__.addSub(ref114.addEventListener('change', function(_, ref, val) {
      node219.attr('class', val);
    }));
    
  }
  subs__.addSub(ref114.rebind());
  
  
  var node220 = $("<strong>");
  
  var nodes373 = $("<span>");
  node220.append(nodes373);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl31();
  }));
  
  function renderControl31() {
    subs__.addSub((elements)(function(elements, callback) {
      var root424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root424); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes373;
      nodes373 = node.contents();
      oldNodes.replaceWith(nodes373);
    }));
  }
  renderControl31();
  node219.append(node220);
  root423.append(node219);
  callback(root423); return subs__;
  
  
  
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
  var root425 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes374 = $("<span>");
  root425.append(nodes374);
  subs__.addSub((ui.group)(function(_, callback) {
    var root426 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node221 = mobl.loadingSpan();
    root426.append(node221);
    var list9;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList9 = function() {
      var subs__ = listSubs__;
      list9 = items.get();
      list9.list(function(results9) {
        node221.empty();
        for(var i17 = 0; i17 < results9.length; i17++) {
          (function() {
            var iternode9 = $("<span>");
            node221.append(iternode9);
            var it;
            it = mobl.ref(mobl.ref(results9), i17);
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                             var tmp1440 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           };
            var tmp1400 = mobl.ref(result__);
            
            var result__ = false;
            var tmp1402 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1401 = mobl.ref(result__);
            
            var nodes375 = $("<span>");
            iternode9.append(nodes375);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1400, tmp1401, tmp1402, function(_, callback) {
              var root427 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes376 = $("<span>");
              root427.append(nodes376);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl32();
              }));
              
              function renderControl32() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root428 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root428); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes376;
                  nodes376 = node.contents();
                  oldNodes.replaceWith(nodes376);
                }));
              }
              renderControl32();
              callback(root427); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes375;
              nodes375 = node.contents();
              oldNodes.replaceWith(nodes375);
            }));
            
            var oldNodes = iternode9;
            iternode9 = iternode9.contents();
            oldNodes.replaceWith(iternode9);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list9.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
      });
    };
    renderList9();
    
    callback(root426); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes374;
    nodes374 = node.contents();
    oldNodes.replaceWith(nodes374);
  }));
  callback(root425); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root429 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   if(screenCallback) screenCallback();
                   return;
                   if(callback && callback.apply) callback(); return;
                 };
  var tmp1404 = mobl.ref(result__);
  
  var result__ = "Back";
  var tmp1403 = mobl.ref(result__);
  
  var nodes377 = $("<span>");
  root429.append(nodes377);
  subs__.addSub((ui.backButton)(tmp1403, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1404, function(_, callback) {
    var root430 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root430); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes377;
    nodes377 = node.contents();
    oldNodes.replaceWith(nodes377);
  }));
  var nodes378 = $("<span>");
  root429.append(nodes378);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl33();
  }));
  
  function renderControl33() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root431 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root431); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes378;
      nodes378 = node.contents();
      oldNodes.replaceWith(nodes378);
    }));
  }
  renderControl33();
  callback(root429); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root432 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node222 = $("<div>");
  
  var ref118 = mobl.ref(ui.customHeaderStyle);
  if(ref118.get() !== null) {
    node222.attr('class', ref118.get());
    subs__.addSub(ref118.addEventListener('change', function(_, ref, val) {
      node222.attr('class', val);
    }));
    
  }
  subs__.addSub(ref118.rebind());
  
  var val173 = onclick.get();
  if(val173 !== null) {
    subs__.addSub(mobl.domBind(node222, 'tap', val173));
  }
  
  
  var node223 = $("<div>");
  
  var ref117 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref117.get() !== null) {
    node223.attr('class', ref117.get());
    subs__.addSub(ref117.addEventListener('change', function(_, ref, val) {
      node223.attr('class', val);
    }));
    
  }
  subs__.addSub(ref117.rebind());
  
  
  var node224 = $("<div>");
  
  var ref115 = text;
  node224.text(""+ref115.get());
  var ignore12 = false;
  subs__.addSub(ref115.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    node224.text(""+val);
  }));
  subs__.addSub(ref115.rebind());
  
  
  var ref116 = mobl.ref(ui.customHeaderTextStyle);
  if(ref116.get() !== null) {
    node224.attr('class', ref116.get());
    subs__.addSub(ref116.addEventListener('change', function(_, ref, val) {
      node224.attr('class', val);
    }));
    
  }
  subs__.addSub(ref116.rebind());
  
  node223.append(node224);
  node222.append(node223);
  var nodes379 = $("<span>");
  node222.append(nodes379);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl34();
  }));
  
  function renderControl34() {
    subs__.addSub((elements)(function(elements, callback) {
      var root433 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root433); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes379;
      nodes379 = node.contents();
      oldNodes.replaceWith(nodes379);
    }));
  }
  renderControl34();
  root432.append(node222);
  callback(root432); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root434 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref119 = mobl.ref(ui.customItemStyle);
  if(ref119.get() !== null) {
    el.attr('class', ref119.get());
    subs__.addSub(ref119.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref119.rebind());
  
  var ref120 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref120.get() !== null) {
    el.attr('class', ref120.get());
    subs__.addSub(ref120.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref120.rebind());
  
  var val174 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1441 = result__;
                                           function after9(result__) {
                                             var tmp1442 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after9);if(result__ !== undefined) after9(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1443 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val174 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val174));
  }
  
  var nodes380 = $("<span>");
  el.append(nodes380);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl35();
  }));
  
  function renderControl35() {
    subs__.addSub((elements)(function(elements, callback) {
      var root435 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root435); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes380;
      nodes380 = node.contents();
      oldNodes.replaceWith(nodes380);
    }));
  }
  renderControl35();
  root434.append(el);
  callback(root434); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node225 = $("<div>");
  node225.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node227 = mobl.loadingSpan();
  node225.append(node227);
  var list11;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList11 = function() {
    var subs__ = listSubs__;
    list11 = tabs.get();
    list11.list(function(results11) {
      node227.empty();
      for(var i19 = 0; i19 < results11.length; i19++) {
        (function() {
          var iternode11 = $("<span>");
          node227.append(iternode11);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results11), i19), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results11), i19), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results11), i19), "_3");
          var result__ = activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle;
          var tmp1405 = mobl.ref(result__);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp1405.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp1405.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp1405.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp1405.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          var result__ = null;
          var tmp1408 = mobl.ref(result__);
          
          var result__ = null;
          var tmp1407 = mobl.ref(result__);
          
          var result__ = null;
          var tmp1406 = mobl.ref(result__);
          
          var nodes384 = $("<span>");
          iternode11.append(nodes384);
          subs__.addSub((mobl.block)(tmp1405, tmp1406, tmp1407, tmp1408, function(_, callback) {
            var root440 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes385 = $("<span>");
            root440.append(nodes385);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root441 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes386 = $("<span>");
              root441.append(nodes386);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl36();
              }));
              
              function renderControl36() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root442 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root442); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes386;
                  nodes386 = node.contents();
                  oldNodes.replaceWith(nodes386);
                }));
              }
              renderControl36();
              callback(root441); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes385;
              nodes385 = node.contents();
              oldNodes.replaceWith(nodes385);
            }));
            callback(root440); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes384;
            nodes384 = node.contents();
            oldNodes.replaceWith(nodes384);
          }));
          
          var oldNodes = iternode11;
          iternode11 = iternode11.contents();
          oldNodes.replaceWith(iternode11);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list11.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
    });
  };
  renderList11();
  
  root436.append(node225);
  var result__ = null;
  var tmp1417 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1416 = mobl.ref(result__);
  
  var result__ = null;
  var tmp1415 = mobl.ref(result__);
  
  var nodes381 = $("<span>");
  root436.append(nodes381);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp1415, tmp1416, tmp1417, function(_, callback) {
    var root437 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node226 = mobl.loadingSpan();
    root437.append(node226);
    var list10;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList10 = function() {
      var subs__ = listSubs__;
      list10 = tabs.get();
      list10.list(function(results10) {
        node226.empty();
        for(var i18 = 0; i18 < results10.length; i18++) {
          (function() {
            var iternode10 = $("<span>");
            node226.append(iternode10);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results10), i18), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results10), i18), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results10), i18), "_3");
            var result__ = activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
            var tmp1412 = mobl.ref(result__);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp1412.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1412.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp1412.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp1412.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = tabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp1411 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1414 = mobl.ref(result__);
            
            var result__ = null;
            var tmp1413 = mobl.ref(result__);
            
            var nodes382 = $("<span>");
            iternode10.append(nodes382);
            subs__.addSub((mobl.span)(tmp1412, tmp1413, tmp1411, tmp1414, function(_, callback) {
              var root438 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp1410 = mobl.ref(result__);
              
              var result__ = null;
              var tmp1409 = mobl.ref(result__);
              
              var nodes383 = $("<span>");
              root438.append(nodes383);
              subs__.addSub((mobl.label)(tabName, tmp1409, tmp1410, function(_, callback) {
                var root439 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root439); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes383;
                nodes383 = node.contents();
                oldNodes.replaceWith(nodes383);
              }));
              callback(root438); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes382;
              nodes382 = node.contents();
              oldNodes.replaceWith(nodes382);
            }));
            
            var oldNodes = iternode10;
            iternode10 = iternode10.contents();
            oldNodes.replaceWith(iternode10);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list10.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
      });
    };
    renderList10();
    
    callback(root437); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes381;
    nodes381 = node.contents();
    oldNodes.replaceWith(nodes381);
  }));
  callback(root436); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root443 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node228 = $("<div>");
  node228.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node228.append(slider);
  var result__ = slider.slider(new mobl.Dynamic({'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                          if(event && event.stopPropagation) event.stopPropagation();
                                                          var result__ = slider.slider("value");
                                                          s.set(result__);
                                                          var result__ = slider.slider("value");
                                                          start.set(result__);
                                                          if(callback && callback.apply) callback(); return;
                                                        }}));
  root443.append(node228);
  callback(root443); return subs__;
  
  
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
