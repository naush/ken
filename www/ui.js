mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root232 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node61 = $("<span>");
  root232.append(node61);
  var condSubs9 = new mobl.CompSubscription();
  subs__.addSub(condSubs9);
  var oldValue9;
  var renderCond9 = function() {
    var value25 = value.get();
    if(oldValue9 === value25) return;
    oldValue9 = value25;
    var subs__ = condSubs9;
    subs__.unsubscribe();
    node61.empty();
    if(value25) {
      var nodes169 = $("<span>");
      node61.append(nodes169);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl24();
      }));
      
      function renderControl24() {
        subs__.addSub((elements)(function(elements, callback) {
          var root233 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root233); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes169;
          nodes169 = node.contents();
          oldNodes.replaceWith(nodes169);
        }));
      }
      renderControl24();
      
      
    } else {
      
      var tmp355 = mobl.ref(null);
      
      
      var tmp354 = mobl.ref(null);
      
      
      var tmp353 = mobl.ref(null);
      
      var nodes170 = $("<span>");
      node61.append(nodes170);
      subs__.addSub((mobl.block)(style, tmp353, tmp354, tmp355, function(_, callback) {
        var root234 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp345 = mobl.ref(null);
        
        
        var tmp344 = mobl.ref(null);
        
        var nodes171 = $("<span>");
        root234.append(nodes171);
        subs__.addSub((mobl.label)(loadingMessage, tmp344, tmp345, function(_, callback) {
          var root235 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root235); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes171;
          nodes171 = node.contents();
          oldNodes.replaceWith(nodes171);
        }));
        
        var tmp347 = mobl.ref("middle");
        
        
        var tmp346 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp352 = mobl.ref(null);
        
        
        var tmp351 = mobl.ref(null);
        
        
        var tmp350 = mobl.ref(null);
        
        
        var tmp349 = mobl.ref(null);
        
        
        var tmp348 = mobl.ref(null);
        
        var nodes172 = $("<span>");
        root234.append(nodes172);
        subs__.addSub((ui.image)(tmp346, tmp348, tmp349, tmp350, tmp351, tmp347, tmp352, function(_, callback) {
          var root236 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root236); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes172;
          nodes172 = node.contents();
          oldNodes.replaceWith(nodes172);
        }));
        callback(root234); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes170;
        nodes170 = node.contents();
        oldNodes.replaceWith(nodes170);
      }));
      
      
    }
  };
  renderCond9();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond9();
  }));
  
  callback(root232); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root237 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node62 = $("<div>");
  
  var ref61 = mobl.ref(ui.headerStyle);
  if(ref61.get() !== null) {
    node62.attr('class', ref61.get());
    subs__.addSub(ref61.addEventListener('change', function(_, ref, val) {
      node62.attr('class', val);
    }));
    
  }
  subs__.addSub(ref61.rebind());
  
  var val33 = onclick.get();
  if(val33 !== null) {
    subs__.addSub(mobl.domBind(node62, 'tap', val33));
  }
  
  
  var node63 = $("<div>");
  
  var ref60 = mobl.ref(ui.headerContainerStyle);
  if(ref60.get() !== null) {
    node63.attr('class', ref60.get());
    subs__.addSub(ref60.addEventListener('change', function(_, ref, val) {
      node63.attr('class', val);
    }));
    
  }
  subs__.addSub(ref60.rebind());
  
  
  var node64 = $("<div>");
  
  var ref58 = text;
  node64.text(""+ref58.get());
  var ignore11 = false;
  subs__.addSub(ref58.addEventListener('change', function(_, ref, val) {
    if(ignore11) return;
    node64.text(""+val);
  }));
  subs__.addSub(ref58.rebind());
  
  
  var ref59 = mobl.ref(ui.headerTextStyle);
  if(ref59.get() !== null) {
    node64.attr('class', ref59.get());
    subs__.addSub(ref59.addEventListener('change', function(_, ref, val) {
      node64.attr('class', val);
    }));
    
  }
  subs__.addSub(ref59.rebind());
  
  node63.append(node64);
  node62.append(node63);
  var nodes173 = $("<span>");
  node62.append(nodes173);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl25();
  }));
  
  function renderControl25() {
    subs__.addSub((elements)(function(elements, callback) {
      var root238 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root238); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes173;
      nodes173 = node.contents();
      oldNodes.replaceWith(nodes173);
    }));
  }
  renderControl25();
  root237.append(node62);
  callback(root237); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root239 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref62 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref62.get() !== null) {
    sp.attr('class', ref62.get());
    subs__.addSub(ref62.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref62.rebind());
  
  var val34 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val34 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val34));
  }
  
  var val35 = function(event, callback) {
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
  if(val35 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val35));
  }
  
  var val36 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after9(result__) {
                    var tmp427 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after9);if(result__ !== undefined) after9(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val36 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val36));
  }
  
  var val37 = function(event, callback) {
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
  if(val37 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val37));
  }
  
  var ref63 = text;
  sp.text(""+ref63.get());
  var ignore12 = false;
  subs__.addSub(ref63.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref63.rebind());
  
  
  root239.append(sp);
  callback(root239); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root240 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes174 = $("<span>");
  root240.append(nodes174);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root241 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root241); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes174;
    nodes174 = node.contents();
    oldNodes.replaceWith(nodes174);
  }));
  callback(root240); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root242 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes175 = $("<span>");
  root242.append(nodes175);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root243 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root243); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes175;
    nodes175 = node.contents();
    oldNodes.replaceWith(nodes175);
  }));
  callback(root242); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root244 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node65 = $("<ul>");
  
  var ref64 = mobl.ref(ui.groupStyle);
  if(ref64.get() !== null) {
    node65.attr('class', ref64.get());
    subs__.addSub(ref64.addEventListener('change', function(_, ref, val) {
      node65.attr('class', val);
    }));
    
  }
  subs__.addSub(ref64.rebind());
  
  var nodes176 = $("<span>");
  node65.append(nodes176);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl26();
  }));
  
  function renderControl26() {
    subs__.addSub((elements)(function(elements, callback) {
      var root245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root245); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes176;
      nodes176 = node.contents();
      oldNodes.replaceWith(nodes176);
    }));
  }
  renderControl26();
  root244.append(node65);
  callback(root244); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root246 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node66 = $("<img>");
  
  var ref65 = url;
  if(ref65.get() !== null) {
    node66.attr('src', ref65.get());
    subs__.addSub(ref65.addEventListener('change', function(_, ref, val) {
      node66.attr('src', val);
    }));
    
  }
  subs__.addSub(ref65.rebind());
  
  var ref66 = width;
  if(ref66.get() !== null) {
    node66.attr('width', ref66.get());
    subs__.addSub(ref66.addEventListener('change', function(_, ref, val) {
      node66.attr('width', val);
    }));
    
  }
  subs__.addSub(ref66.rebind());
  
  var ref67 = height;
  if(ref67.get() !== null) {
    node66.attr('height', ref67.get());
    subs__.addSub(ref67.addEventListener('change', function(_, ref, val) {
      node66.attr('height', val);
    }));
    
  }
  subs__.addSub(ref67.rebind());
  
  var ref68 = style;
  if(ref68.get() !== null) {
    node66.attr('class', ref68.get());
    subs__.addSub(ref68.addEventListener('change', function(_, ref, val) {
      node66.attr('class', val);
    }));
    
  }
  subs__.addSub(ref68.rebind());
  
  var val38 = onclick.get();
  if(val38 !== null) {
    subs__.addSub(mobl.domBind(node66, 'tap', val38));
  }
  
  var ref69 = valign;
  if(ref69.get() !== null) {
    node66.attr('valign', ref69.get());
    subs__.addSub(ref69.addEventListener('change', function(_, ref, val) {
      node66.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref69.rebind());
  
  var ref70 = align;
  if(ref70.get() !== null) {
    node66.attr('align', ref70.get());
    subs__.addSub(ref70.addEventListener('change', function(_, ref, val) {
      node66.attr('align', val);
    }));
    
  }
  subs__.addSub(ref70.rebind());
  
  root246.append(node66);
  callback(root246); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root247 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref71 = mobl.ref(ui.itemStyle);
  if(ref71.get() !== null) {
    el.attr('class', ref71.get());
    subs__.addSub(ref71.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref71.rebind());
  
  var ref72 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref72.get() !== null) {
    el.attr('class', ref72.get());
    subs__.addSub(ref72.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref72.rebind());
  
  var val39 = onswipe.get();
  if(val39 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val39));
  }
  
  var val40 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp428 = result__;
                                           function after10(result__) {
                                             var tmp429 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after10);if(result__ !== undefined) after10(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp430 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val40 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val40));
  }
  
  var nodes177 = $("<span>");
  el.append(nodes177);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl27();
  }));
  
  function renderControl27() {
    subs__.addSub((elements)(function(elements, callback) {
      var root248 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root248); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes177;
      nodes177 = node.contents();
      oldNodes.replaceWith(nodes177);
    }));
  }
  renderControl27();
  root247.append(el);
  callback(root247); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root249 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node67 = $("<input>");
  node67.attr('type', "checkbox");
  
  var ref74 = b;
  node67.attr('checked', !!ref74.get());
  subs__.addSub(ref74.addEventListener('change', function(_, ref, val) {
    if(ref === ref74) node67.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node67, 'change', function() {
    b.set(!!node67.attr('checked'));
  }));
  
  var val42 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val42 !== null) {
    subs__.addSub(mobl.domBind(node67, 'tap', val42));
  }
  
  var val43 = onchange.get();
  if(val43 !== null) {
    subs__.addSub(mobl.domBind(node67, 'change', val43));
  }
  
  root249.append(node67);
  
  root249.append(" ");
  
  var node68 = $("<span>");
  
  var ref73 = label;
  node68.text(""+ref73.get());
  var ignore13 = false;
  subs__.addSub(ref73.addEventListener('change', function(_, ref, val) {
    if(ignore13) return;
    node68.text(""+val);
  }));
  subs__.addSub(ref73.rebind());
  
  
  var val41 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after11(result__) {
                    var tmp431 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after11);if(result__ !== undefined) after11(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val41 !== null) {
    subs__.addSub(mobl.domBind(node68, 'tap', val41));
  }
  
  root249.append(node68);
  callback(root249); return subs__;
  
  
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
  var root250 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node69 = $("<span>");
  root250.append(node69);
  var condSubs10 = new mobl.CompSubscription();
  subs__.addSub(condSubs10);
  var oldValue10;
  var renderCond10 = function() {
    var value26 = label.get();
    if(oldValue10 === value26) return;
    oldValue10 = value26;
    var subs__ = condSubs10;
    subs__.unsubscribe();
    node69.empty();
    if(value26) {
      
      var tmp356 = mobl.ref(null);
      
      var nodes178 = $("<span>");
      node69.append(nodes178);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp356, function(_, callback) {
        var root251 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root251); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes178;
        nodes178 = node.contents();
        oldNodes.replaceWith(nodes178);
      }));
      
      
    } else {
      
    }
  };
  renderCond10();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond10();
  }));
  
  
  var node70 = $("<span>");
  root250.append(node70);
  var condSubs11 = new mobl.CompSubscription();
  subs__.addSub(condSubs11);
  var oldValue11;
  var renderCond11 = function() {
    var value27 = validator.get();
    if(oldValue11 === value27) return;
    oldValue11 = value27;
    var subs__ = condSubs11;
    subs__.unsubscribe();
    node70.empty();
    if(value27) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after15(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp432 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node71 = $("<input>");
        node71.attr('type', "text");
        
        var ref75 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref75.get() !== null) {
          node71.attr('class', ref75.get());
          subs__.addSub(ref75.addEventListener('change', function(_, ref, val) {
            node71.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node71.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node71.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node71.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref75.rebind());
        
        var ref76 = placeholder;
        if(ref76.get() !== null) {
          node71.attr('placeholder', ref76.get());
          subs__.addSub(ref76.addEventListener('change', function(_, ref, val) {
            node71.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref76.rebind());
        
        var ref77 = temp;
        node71.val(""+ref77.get());
        var ignore14 = false;
        subs__.addSub(ref77.addEventListener('change', function(_, ref, val) {
          if(ignore14) return;
          node71.val(""+val);
        }));
        subs__.addSub(ref77.rebind());
        
        subs__.addSub(mobl.domBind(node71, 'keyup change', function() {
          ignore14 = true;
          temp.set(mobl.stringTomobl__String(node71.val()));
          ignore14 = false;
        }));
        
        
        var val44 = onchange.get();
        if(val44 !== null) {
          subs__.addSub(mobl.domBind(node71, 'change', val44));
        }
        
        var val45 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after12(result__) {
                          var tmp433 = result__;
                          function after13(result__) {
                            var tmp434 = result__;
                            var result__ = tmp434;
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
                          var result__ = validator.get()(temp.get(), after13);if(result__ !== undefined) after13(result__);
                        }
                        var result__ = onkeyup.get()(event, after12);if(result__ !== undefined) after12(result__);
                      } else {
                        {
                          function after14(result__) {
                            var tmp434 = result__;
                            var result__ = tmp434;
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
                      }
                    };
        if(val45 !== null) {
          subs__.addSub(mobl.domBind(node71, 'keyup', val45));
        }
        
        var val46 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val46 !== null) {
          subs__.addSub(mobl.domBind(node71, 'blur', val46));
        }
        
        node70.append(node71);
        
        var tmp357 = mobl.ref(null);
        
        var nodes179 = $("<span>");
        node70.append(nodes179);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp357, function(_, callback) {
          var root252 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root252); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes179;
          nodes179 = node.contents();
          oldNodes.replaceWith(nodes179);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after15);if(result__ !== undefined) after15(result__);
    } else {
      
      var node72 = $("<input>");
      node72.attr('type', "text");
      
      var ref78 = style;
      if(ref78.get() !== null) {
        node72.attr('class', ref78.get());
        subs__.addSub(ref78.addEventListener('change', function(_, ref, val) {
          node72.attr('class', val);
        }));
        
      }
      subs__.addSub(ref78.rebind());
      
      var ref79 = placeholder;
      if(ref79.get() !== null) {
        node72.attr('placeholder', ref79.get());
        subs__.addSub(ref79.addEventListener('change', function(_, ref, val) {
          node72.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref79.rebind());
      
      var ref80 = s;
      node72.val(""+ref80.get());
      var ignore15 = false;
      subs__.addSub(ref80.addEventListener('change', function(_, ref, val) {
        if(ignore15) return;
        node72.val(""+val);
      }));
      subs__.addSub(ref80.rebind());
      
      subs__.addSub(mobl.domBind(node72, 'keyup change', function() {
        ignore15 = true;
        s.set(mobl.stringTomobl__String(node72.val()));
        ignore15 = false;
      }));
      
      
      var val47 = onchange.get();
      if(val47 !== null) {
        subs__.addSub(mobl.domBind(node72, 'change', val47));
      }
      
      var val48 = onkeyup.get();
      if(val48 !== null) {
        subs__.addSub(mobl.domBind(node72, 'keyup', val48));
      }
      
      var val49 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val49 !== null) {
        subs__.addSub(mobl.domBind(node72, 'blur', val49));
      }
      
      node70.append(node72);
      
      
    }
  };
  renderCond11();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond11();
  }));
  
  callback(root250); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root253 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes180 = $("<span>");
  root253.append(nodes180);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root254 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root254); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes180;
    nodes180 = node.contents();
    oldNodes.replaceWith(nodes180);
  }));
  callback(root253); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root255 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after16(result__) {
      var tmp435 = result__;
      var result__ = tmp435;
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
    var result__ = validator.get()(n2, after16);if(result__ !== undefined) after16(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes181 = $("<span>");
  root255.append(nodes181);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root256 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root256); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes181;
    nodes181 = node.contents();
    oldNodes.replaceWith(nodes181);
  }));
  callback(root255); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root257 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node73 = $("<span>");
  root257.append(node73);
  var condSubs12 = new mobl.CompSubscription();
  subs__.addSub(condSubs12);
  var oldValue12;
  var renderCond12 = function() {
    var value28 = label.get();
    if(oldValue12 === value28) return;
    oldValue12 = value28;
    var subs__ = condSubs12;
    subs__.unsubscribe();
    node73.empty();
    if(value28) {
      
      var node74 = $("<span>");
      node74.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref84 = label;
      node74.text(""+ref84.get());
      var ignore17 = false;
      subs__.addSub(ref84.addEventListener('change', function(_, ref, val) {
        if(ignore17) return;
        node74.text(""+val);
      }));
      subs__.addSub(ref84.rebind());
      
      
      node73.append(node74);
      
      var node75 = $("<span>");
      node75.attr('style', "float: left");
      
      
      var node76 = $("<input>");
      node76.attr('type', "password");
      
      var ref81 = style;
      if(ref81.get() !== null) {
        node76.attr('class', ref81.get());
        subs__.addSub(ref81.addEventListener('change', function(_, ref, val) {
          node76.attr('class', val);
        }));
        
      }
      subs__.addSub(ref81.rebind());
      
      var ref82 = placeholder;
      if(ref82.get() !== null) {
        node76.attr('placeholder', ref82.get());
        subs__.addSub(ref82.addEventListener('change', function(_, ref, val) {
          node76.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref82.rebind());
      
      var ref83 = s;
      node76.val(""+ref83.get());
      var ignore16 = false;
      subs__.addSub(ref83.addEventListener('change', function(_, ref, val) {
        if(ignore16) return;
        node76.val(""+val);
      }));
      subs__.addSub(ref83.rebind());
      
      subs__.addSub(mobl.domBind(node76, 'keyup change', function() {
        ignore16 = true;
        s.set(mobl.stringTomobl__String(node76.val()));
        ignore16 = false;
      }));
      
      
      var val50 = onchange.get();
      if(val50 !== null) {
        subs__.addSub(mobl.domBind(node76, 'change', val50));
      }
      
      var val51 = onkeyup.get();
      if(val51 !== null) {
        subs__.addSub(mobl.domBind(node76, 'keyup', val51));
      }
      
      var val52 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val52 !== null) {
        subs__.addSub(mobl.domBind(node76, 'blur', val52));
      }
      
      node75.append(node76);
      node73.append(node75);
      
      
      
      
    } else {
      
      var node77 = $("<input>");
      node77.attr('type', "password");
      
      var ref85 = style;
      if(ref85.get() !== null) {
        node77.attr('class', ref85.get());
        subs__.addSub(ref85.addEventListener('change', function(_, ref, val) {
          node77.attr('class', val);
        }));
        
      }
      subs__.addSub(ref85.rebind());
      
      var ref86 = placeholder;
      if(ref86.get() !== null) {
        node77.attr('placeholder', ref86.get());
        subs__.addSub(ref86.addEventListener('change', function(_, ref, val) {
          node77.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref86.rebind());
      
      var ref87 = s;
      node77.val(""+ref87.get());
      var ignore18 = false;
      subs__.addSub(ref87.addEventListener('change', function(_, ref, val) {
        if(ignore18) return;
        node77.val(""+val);
      }));
      subs__.addSub(ref87.rebind());
      
      subs__.addSub(mobl.domBind(node77, 'keyup change', function() {
        ignore18 = true;
        s.set(mobl.stringTomobl__String(node77.val()));
        ignore18 = false;
      }));
      
      
      var val53 = onchange.get();
      if(val53 !== null) {
        subs__.addSub(mobl.domBind(node77, 'change', val53));
      }
      
      var val54 = onkeyup.get();
      if(val54 !== null) {
        subs__.addSub(mobl.domBind(node77, 'keyup', val54));
      }
      
      var val55 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val55 !== null) {
        subs__.addSub(mobl.domBind(node77, 'blur', val55));
      }
      
      node73.append(node77);
      
      
    }
  };
  renderCond12();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond12();
  }));
  
  callback(root257); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root258 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref92 = style;
  if(ref92.get() !== null) {
    sel.attr('class', ref92.get());
    subs__.addSub(ref92.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref92.rebind());
  
  var val56 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after17(result__) {
                    var tmp437 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after17);if(result__ !== undefined) after17(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val56 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val56));
  }
  
  
  var node78 = mobl.loadingSpan();
  sel.append(node78);
  var list15;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList15 = function() {
    var subs__ = listSubs__;
    list15 = options.get();
    list15.list(function(results103) {
      node78.empty();
      for(var i15 = 0; i15 < results103.length; i15++) {
        (function() {
          var iternode15 = $("<span>");
          node78.append(iternode15);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results103), i15), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results103), i15), "_2");
          
          var node79 = $("<option>");
          
          var ref88 = optionDescription;
          node79.text(""+ref88.get());
          var ignore19 = false;
          subs__.addSub(ref88.addEventListener('change', function(_, ref, val) {
            if(ignore19) return;
            node79.text(""+val);
          }));
          subs__.addSub(ref88.rebind());
          
          
          var ref89 = optionStyle;
          if(ref89.get() !== null) {
            node79.attr('class', ref89.get());
            subs__.addSub(ref89.addEventListener('change', function(_, ref, val) {
              node79.attr('class', val);
            }));
            
          }
          subs__.addSub(ref89.rebind());
          
          var ref90 = optionValue;
          if(ref90.get() !== null) {
            node79.attr('value', ref90.get());
            subs__.addSub(ref90.addEventListener('change', function(_, ref, val) {
              node79.attr('value', val);
            }));
            
          }
          subs__.addSub(ref90.rebind());
          
          var ref91 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref91.get() !== null) {
            node79.attr('selected', ref91.get());
            subs__.addSub(ref91.addEventListener('change', function(_, ref, val) {
              node79.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node79.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node79.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref91.rebind());
          
          iternode15.append(node79);
          
          var oldNodes = iternode15;
          iternode15 = iternode15.contents();
          oldNodes.replaceWith(iternode15);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list15.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
    });
  };
  renderList15();
  
  root258.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root258); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root259 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp366 = mobl.ref(null);
  
  
  var tmp365 = mobl.ref(null);
  
  
  var tmp364 = mobl.ref(null);
  
  var nodes182 = $("<span>");
  root259.append(nodes182);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp364, tmp365, tmp366, function(_, callback) {
    var root260 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node80 = mobl.loadingSpan();
    root260.append(node80);
    var list16;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList16 = function() {
      var subs__ = listSubs__;
      list16 = tabs.get();
      list16.list(function(results104) {
        node80.empty();
        for(var i16 = 0; i16 < results104.length; i16++) {
          (function() {
            var iternode16 = $("<span>");
            node80.append(iternode16);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results104), i16), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results104), i16), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results104), i16), "_3");
            
            var tmp361 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp361.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp361.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp361.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp361.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp360 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp363 = mobl.ref(null);
            
            
            var tmp362 = mobl.ref(null);
            
            var nodes183 = $("<span>");
            iternode16.append(nodes183);
            subs__.addSub((mobl.span)(tmp361, tmp362, tmp360, tmp363, function(_, callback) {
              var root261 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp359 = mobl.ref(null);
              
              
              var tmp358 = mobl.ref(null);
              
              var nodes184 = $("<span>");
              root261.append(nodes184);
              subs__.addSub((mobl.label)(tabName, tmp358, tmp359, function(_, callback) {
                var root262 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root262); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes184;
                nodes184 = node.contents();
                oldNodes.replaceWith(nodes184);
              }));
              callback(root261); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes183;
              nodes183 = node.contents();
              oldNodes.replaceWith(nodes183);
            }));
            
            var oldNodes = iternode16;
            iternode16 = iternode16.contents();
            oldNodes.replaceWith(iternode16);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list16.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
      });
    };
    renderList16();
    
    callback(root260); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes182;
    nodes182 = node.contents();
    oldNodes.replaceWith(nodes182);
  }));
  
  var node81 = mobl.loadingSpan();
  root259.append(node81);
  var list17;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList17 = function() {
    var subs__ = listSubs__;
    list17 = tabs.get();
    list17.list(function(results105) {
      node81.empty();
      for(var i17 = 0; i17 < results105.length; i17++) {
        (function() {
          var iternode17 = $("<span>");
          node81.append(iternode17);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results105), i17), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results105), i17), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results105), i17), "_3");
          
          var tmp367 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp367.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp367.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp367.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp367.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp370 = mobl.ref(null);
          
          
          var tmp369 = mobl.ref(null);
          
          
          var tmp368 = mobl.ref(null);
          
          var nodes185 = $("<span>");
          iternode17.append(nodes185);
          subs__.addSub((mobl.block)(tmp367, tmp368, tmp369, tmp370, function(_, callback) {
            var root263 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes186 = $("<span>");
            root263.append(nodes186);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root264 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes187 = $("<span>");
              root264.append(nodes187);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl28();
              }));
              
              function renderControl28() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root265 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root265); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes187;
                  nodes187 = node.contents();
                  oldNodes.replaceWith(nodes187);
                }));
              }
              renderControl28();
              callback(root264); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes186;
              nodes186 = node.contents();
              oldNodes.replaceWith(nodes186);
            }));
            callback(root263); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes185;
            nodes185 = node.contents();
            oldNodes.replaceWith(nodes185);
          }));
          
          var oldNodes = iternode17;
          iternode17 = iternode17.contents();
          oldNodes.replaceWith(iternode17);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list17.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
    });
  };
  renderList17();
  
  callback(root259); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root266 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node82 = $("<div>");
  
  var ref96 = mobl.ref(ui.searchboxStyle);
  if(ref96.get() !== null) {
    node82.attr('class', ref96.get());
    subs__.addSub(ref96.addEventListener('change', function(_, ref, val) {
      node82.attr('class', val);
    }));
    
  }
  subs__.addSub(ref96.rebind());
  
  
  var node83 = $("<input>");
  node83.attr('type', "search");
  
  var ref93 = mobl.ref(ui.searchBoxInputStyle);
  if(ref93.get() !== null) {
    node83.attr('class', ref93.get());
    subs__.addSub(ref93.addEventListener('change', function(_, ref, val) {
      node83.attr('class', val);
    }));
    
  }
  subs__.addSub(ref93.rebind());
  
  var ref94 = placeholder;
  if(ref94.get() !== null) {
    node83.attr('placeholder', ref94.get());
    subs__.addSub(ref94.addEventListener('change', function(_, ref, val) {
      node83.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref94.rebind());
  
  var ref95 = s;
  node83.val(""+ref95.get());
  var ignore20 = false;
  subs__.addSub(ref95.addEventListener('change', function(_, ref, val) {
    if(ignore20) return;
    node83.val(""+val);
  }));
  subs__.addSub(ref95.rebind());
  
  subs__.addSub(mobl.domBind(node83, 'keyup change', function() {
    ignore20 = true;
    s.set(mobl.stringTomobl__String(node83.val()));
    ignore20 = false;
  }));
  
  
  var val57 = onsearch.get();
  if(val57 !== null) {
    subs__.addSub(mobl.domBind(node83, 'change', val57));
  }
  
  var val58 = onkeyup.get();
  if(val58 !== null) {
    subs__.addSub(mobl.domBind(node83, 'keyup', val58));
  }
  node83.attr('autocorrect', false);
  node83.attr('autocapitalize', false);
  node83.attr('autocomplete', false);
  
  node82.append(node83);
  root266.append(node82);
  callback(root266); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root267 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref97 = mobl.ref(ui.contextMenuStyle);
  if(ref97.get() !== null) {
    menu.attr('class', ref97.get());
    subs__.addSub(ref97.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref97.rebind());
  
  var nodes188 = $("<span>");
  menu.append(nodes188);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl29();
  }));
  
  function renderControl29() {
    subs__.addSub((elements)(function(elements, callback) {
      var root268 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root268); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes188;
      nodes188 = node.contents();
      oldNodes.replaceWith(nodes188);
    }));
  }
  renderControl29();
  root267.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val59 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp440 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val59 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val59));
  }
  
  root267.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root267); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root269 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp426 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp426.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node84 = $("<span>");
  root269.append(node84);
  var condSubs13 = new mobl.CompSubscription();
  subs__.addSub(condSubs13);
  var oldValue13;
  var renderCond13 = function() {
    var value29 = tmp426.get();
    if(oldValue13 === value29) return;
    oldValue13 = value29;
    var subs__ = condSubs13;
    subs__.unsubscribe();
    node84.empty();
    if(value29) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node85 = $("<div>");
        node85.attr('width', "100%");
        
        
        var node86 = $("<div>");
        node86.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes191 = $("<span>");
        node86.append(nodes191);
        subs__.addSub((ui.group)(function(_, callback) {
          var root272 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node89 = mobl.loadingSpan();
          root272.append(node89);
          var list18;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList18 = function() {
            var subs__ = listSubs__;
            list18 = items.get();
            list18.list(function(results106) {
              node89.empty();
              for(var i18 = 0; i18 < results106.length; i18++) {
                (function() {
                  var iternode18 = $("<span>");
                  node89.append(iternode18);
                  var it;
                  it = mobl.ref(mobl.ref(results106), i18);
                  
                  var tmp384 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp384.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp384.set(it.get() == current.get());
                  }));
                  
                  
                  var node90 = $("<span>");
                  iternode18.append(node90);
                  var condSubs15 = new mobl.CompSubscription();
                  subs__.addSub(condSubs15);
                  var oldValue15;
                  var renderCond15 = function() {
                    var value31 = tmp384.get();
                    if(oldValue15 === value31) return;
                    oldValue15 = value31;
                    var subs__ = condSubs15;
                    subs__.unsubscribe();
                    node90.empty();
                    if(value31) {
                      
                      var tmp380 = mobl.ref(false);
                      
                      
                      var tmp379 = mobl.ref(null);
                      
                      
                      var tmp378 = mobl.ref(null);
                      
                      var nodes192 = $("<span>");
                      node90.append(nodes192);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp378, tmp379, tmp380, function(_, callback) {
                        var root273 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes193 = $("<span>");
                        root273.append(nodes193);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl31();
                        }));
                        
                        function renderControl31() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root274 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root274); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes193;
                            nodes193 = node.contents();
                            oldNodes.replaceWith(nodes193);
                          }));
                        }
                        renderControl31();
                        callback(root273); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes192;
                        nodes192 = node.contents();
                        oldNodes.replaceWith(nodes192);
                      }));
                      
                      
                    } else {
                      
                      var tmp382 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp381 = mobl.ref(true);
                      
                      
                      var tmp383 = mobl.ref(null);
                      
                      var nodes194 = $("<span>");
                      node90.append(nodes194);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp382, tmp383, tmp381, function(_, callback) {
                        var root275 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes195 = $("<span>");
                        root275.append(nodes195);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl32();
                        }));
                        
                        function renderControl32() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root276 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root276); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes195;
                            nodes195 = node.contents();
                            oldNodes.replaceWith(nodes195);
                          }));
                        }
                        renderControl32();
                        callback(root275); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes194;
                        nodes194 = node.contents();
                        oldNodes.replaceWith(nodes194);
                      }));
                      
                      
                    }
                  };
                  renderCond15();
                  subs__.addSub(tmp384.addEventListener('change', function() {
                    renderCond15();
                  }));
                  
                  
                  var oldNodes = iternode18;
                  iternode18 = iternode18.contents();
                  oldNodes.replaceWith(iternode18);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list18.addEventListener('change', function() { listSubs__.unsubscribe(); renderList18(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList18(true); }));
            });
          };
          renderList18();
          
          callback(root272); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes191;
          nodes191 = node.contents();
          oldNodes.replaceWith(nodes191);
        }));
        node85.append(node86);
        
        var node87 = $("<div>");
        node87.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node88 = $("<span>");
        node87.append(node88);
        var condSubs14 = new mobl.CompSubscription();
        subs__.addSub(condSubs14);
        var oldValue14;
        var renderCond14 = function() {
          var value30 = current.get();
          if(oldValue14 === value30) return;
          oldValue14 = value30;
          var subs__ = condSubs14;
          subs__.unsubscribe();
          node88.empty();
          if(value30) {
            var nodes189 = $("<span>");
            node88.append(nodes189);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl30();
            }));
            
            function renderControl30() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root270 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root270); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes189;
                nodes189 = node.contents();
                oldNodes.replaceWith(nodes189);
              }));
            }
            renderControl30();
            
            
          } else {
            
            var tmp385 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp387 = mobl.ref(null);
            
            
            var tmp386 = mobl.ref(null);
            
            var nodes190 = $("<span>");
            node88.append(nodes190);
            subs__.addSub((mobl.label)(tmp385, tmp386, tmp387, function(_, callback) {
              var root271 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root271); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes190;
              nodes190 = node.contents();
              oldNodes.replaceWith(nodes190);
            }));
            
            
          }
        };
        renderCond14();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond14();
        }));
        
        node85.append(node87);
        node84.append(node85);
        
        
        
        
        
        
      });
    } else {
      var nodes196 = $("<span>");
      node84.append(nodes196);
      subs__.addSub((ui.group)(function(_, callback) {
        var root277 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node91 = mobl.loadingSpan();
        root277.append(node91);
        var list19;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList19 = function() {
          var subs__ = listSubs__;
          list19 = items.get();
          list19.list(function(results107) {
            node91.empty();
            for(var i19 = 0; i19 < results107.length; i19++) {
              (function() {
                var iternode19 = $("<span>");
                node91.append(iternode19);
                var it;
                it = mobl.ref(mobl.ref(results107), i19);
                
                var tmp371 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp441 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp373 = mobl.ref(false);
                
                
                var tmp372 = mobl.ref(null);
                
                var nodes197 = $("<span>");
                iternode19.append(nodes197);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp371, tmp372, tmp373, function(_, callback) {
                  var root278 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes198 = $("<span>");
                  root278.append(nodes198);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl33();
                  }));
                  
                  function renderControl33() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root279 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root279); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes198;
                      nodes198 = node.contents();
                      oldNodes.replaceWith(nodes198);
                    }));
                  }
                  renderControl33();
                  callback(root278); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes197;
                  nodes197 = node.contents();
                  oldNodes.replaceWith(nodes197);
                }));
                
                var oldNodes = iternode19;
                iternode19 = iternode19.contents();
                oldNodes.replaceWith(iternode19);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list19.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
          });
        };
        renderList19();
        
        callback(root277); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes196;
        nodes196 = node.contents();
        oldNodes.replaceWith(nodes196);
      }));
      
      
    }
  };
  renderCond13();
  subs__.addSub(tmp426.addEventListener('change', function() {
    renderCond13();
  }));
  
  callback(root269); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root280 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp376 = mobl.ref("Detail");
  
  
  var tmp377 = mobl.ref(null);
  
  var nodes199 = $("<span>");
  root280.append(nodes199);
  subs__.addSub((ui.header)(tmp376, tmp377, function(_, callback) {
    var root281 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp375 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp374 = mobl.ref("Back");
    
    var nodes200 = $("<span>");
    root281.append(nodes200);
    subs__.addSub((ui.backButton)(tmp374, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp375, function(_, callback) {
      var root282 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root282); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes200;
      nodes200 = node.contents();
      oldNodes.replaceWith(nodes200);
    }));
    callback(root281); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes199;
    nodes199 = node.contents();
    oldNodes.replaceWith(nodes199);
  }));
  var nodes201 = $("<span>");
  root280.append(nodes201);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl34();
  }));
  
  function renderControl34() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root283 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root283); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes201;
      nodes201 = node.contents();
      oldNodes.replaceWith(nodes201);
    }));
  }
  renderControl34();
  callback(root280); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root284 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes202 = $("<span>");
  root284.append(nodes202);
  subs__.addSub((ui.group)(function(_, callback) {
    var root285 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node92 = mobl.loadingSpan();
    root285.append(node92);
    var list20;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList20 = function() {
      var subs__ = listSubs__;
      list20 = coll.get();
      list20.list(function(results108) {
        node92.empty();
        for(var i20 = 0; i20 < results108.length; i20++) {
          (function() {
            var iternode20 = $("<span>");
            node92.append(iternode20);
            var it;
            it = mobl.ref(mobl.ref(results108), i20);
            
            var tmp394 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp394.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp394.set(it.get() == selected.get());
            }));
            
            
            var node93 = $("<span>");
            iternode20.append(node93);
            var condSubs16 = new mobl.CompSubscription();
            subs__.addSub(condSubs16);
            var oldValue16;
            var renderCond16 = function() {
              var value32 = tmp394.get();
              if(oldValue16 === value32) return;
              oldValue16 = value32;
              var subs__ = condSubs16;
              subs__.unsubscribe();
              node93.empty();
              if(value32) {
                
                var tmp390 = mobl.ref(false);
                
                
                var tmp389 = mobl.ref(null);
                
                
                var tmp388 = mobl.ref(null);
                
                var nodes203 = $("<span>");
                node93.append(nodes203);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp388, tmp389, tmp390, function(_, callback) {
                  var root286 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes204 = $("<span>");
                  root286.append(nodes204);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl35();
                  }));
                  
                  function renderControl35() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root287 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root287); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes204;
                      nodes204 = node.contents();
                      oldNodes.replaceWith(nodes204);
                    }));
                  }
                  renderControl35();
                  callback(root286); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes203;
                  nodes203 = node.contents();
                  oldNodes.replaceWith(nodes203);
                }));
                
                
              } else {
                
                var tmp392 = mobl.ref(true);
                
                
                var tmp391 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp393 = mobl.ref(null);
                
                var nodes205 = $("<span>");
                node93.append(nodes205);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp391, tmp393, tmp392, function(_, callback) {
                  var root288 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes206 = $("<span>");
                  root288.append(nodes206);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl36();
                  }));
                  
                  function renderControl36() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root289 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root289); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes206;
                      nodes206 = node.contents();
                      oldNodes.replaceWith(nodes206);
                    }));
                  }
                  renderControl36();
                  callback(root288); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes205;
                  nodes205 = node.contents();
                  oldNodes.replaceWith(nodes205);
                }));
                
                
              }
            };
            renderCond16();
            subs__.addSub(tmp394.addEventListener('change', function() {
              renderCond16();
            }));
            
            
            var oldNodes = iternode20;
            iternode20 = iternode20.contents();
            oldNodes.replaceWith(iternode20);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list20.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
      });
    };
    renderList20();
    
    callback(root285); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes202;
    nodes202 = node.contents();
    oldNodes.replaceWith(nodes202);
  }));
  callback(root284); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root290 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes207 = $("<span>");
    root290.append(nodes207);
    subs__.addSub((ui.group)(function(_, callback) {
      var root291 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp398 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp398.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp398.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp398.set(coll.get().limit(n.get()));
      }));
      
      
      var node94 = mobl.loadingSpan();
      root291.append(node94);
      var list21;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList21 = function() {
        var subs__ = listSubs__;
        list21 = tmp398.get();
        list21.list(function(results109) {
          node94.empty();
          for(var i21 = 0; i21 < results109.length; i21++) {
            (function() {
              var iternode21 = $("<span>");
              node94.append(iternode21);
              var it;
              it = mobl.ref(mobl.ref(results109), i21);
              
              var tmp395 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp397 = mobl.ref(false);
              
              
              var tmp396 = mobl.ref(null);
              
              var nodes208 = $("<span>");
              iternode21.append(nodes208);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp395, tmp396, tmp397, function(_, callback) {
                var root292 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes209 = $("<span>");
                root292.append(nodes209);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl37();
                }));
                
                function renderControl37() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root293 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root293); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes209;
                    nodes209 = node.contents();
                    oldNodes.replaceWith(nodes209);
                  }));
                }
                renderControl37();
                callback(root292); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes208;
                nodes208 = node.contents();
                oldNodes.replaceWith(nodes208);
              }));
              
              var oldNodes = iternode21;
              iternode21 = iternode21.contents();
              oldNodes.replaceWith(iternode21);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list21.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
          subs__.addSub(tmp398.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
        });
      };
      renderList21();
      
      
      var tmp401 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp401.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp401.set(n.get() < total.get());
      }));
      
      
      var node95 = $("<span>");
      root291.append(node95);
      var condSubs17 = new mobl.CompSubscription();
      subs__.addSub(condSubs17);
      var oldValue17;
      var renderCond17 = function() {
        var value33 = tmp401.get();
        if(oldValue17 === value33) return;
        oldValue17 = value33;
        var subs__ = condSubs17;
        subs__.unsubscribe();
        node95.empty();
        if(value33) {
          
          var node96 = $("<li>");
          
          var ref98 = mobl.ref(ui.loadMoreStyle);
          if(ref98.get() !== null) {
            node96.attr('class', ref98.get());
            subs__.addSub(ref98.addEventListener('change', function(_, ref, val) {
              node96.attr('class', val);
            }));
            
          }
          subs__.addSub(ref98.rebind());
          
          var val60 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val60 !== null) {
            subs__.addSub(mobl.domBind(node96, 'tap', val60));
          }
          
          
          var tmp400 = mobl.ref(null);
          
          
          var tmp399 = mobl.ref(null);
          
          var nodes210 = $("<span>");
          node96.append(nodes210);
          subs__.addSub((mobl.label)(moreLabel, tmp399, tmp400, function(_, callback) {
            var root294 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root294); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes210;
            nodes210 = node.contents();
            oldNodes.replaceWith(nodes210);
          }));
          node95.append(node96);
          
          
          
        } else {
          
        }
      };
      renderCond17();
      subs__.addSub(tmp401.addEventListener('change', function() {
        renderCond17();
      }));
      
      callback(root291); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes207;
      nodes207 = node.contents();
      oldNodes.replaceWith(nodes207);
    }));
    callback(root290); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root295 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes211 = $("<span>");
  root295.append(nodes211);
  subs__.addSub((ui.group)(function(_, callback) {
    var root296 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node97 = mobl.loadingSpan();
    root296.append(node97);
    var list22;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList22 = function() {
      var subs__ = listSubs__;
      list22 = items.get();
      list22.list(function(results110) {
        node97.empty();
        for(var i22 = 0; i22 < results110.length; i22++) {
          (function() {
            var iternode22 = $("<span>");
            node97.append(iternode22);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results110), i22), "_1");it = mobl.ref(mobl.ref(mobl.ref(results110), i22), "_2");
            
            var tmp405 = mobl.ref(false);
            
            
            var tmp404 = mobl.ref(null);
            
            
            var tmp403 = mobl.ref(null);
            
            var nodes212 = $("<span>");
            iternode22.append(nodes212);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp403, tmp404, tmp405, function(_, callback) {
              var root297 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp402 = mobl.ref(null);
              
              var nodes213 = $("<span>");
              root297.append(nodes213);
              subs__.addSub((ui.checkBox)(checked, it, tmp402, function(_, callback) {
                var root298 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root298); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes213;
                nodes213 = node.contents();
                oldNodes.replaceWith(nodes213);
              }));
              callback(root297); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes212;
              nodes212 = node.contents();
              oldNodes.replaceWith(nodes212);
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
    
    callback(root296); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes211;
    nodes211 = node.contents();
    oldNodes.replaceWith(nodes211);
  }));
  callback(root295); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root299 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll27) {
    coll27 = coll27.reverse();
    function processOne3() {
      var it;
      it = coll27.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll27.length > 0) processOne3(); else rest3();
      
    }
    function rest3() {
      
      var tmp409 = mobl.ref(null);
      
      var nodes214 = $("<span>");
      root299.append(nodes214);
      subs__.addSub((ui.header)(title, tmp409, function(_, callback) {
        var root300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp406 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp407 = mobl.ref(mobl._("Back", []));
        
        var nodes215 = $("<span>");
        root300.append(nodes215);
        subs__.addSub((ui.backButton)(tmp407, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp406, function(_, callback) {
          var root301 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root301); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes215;
          nodes215 = node.contents();
          oldNodes.replaceWith(nodes215);
        }));
        
        var tmp408 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll26) {
                               coll26 = coll26.reverse();
                               function processOne2() {
                                 var checked;var it;
                                 var tmp443 = coll26.pop();
                                 checked = tmp443._1;it = tmp443._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll26.length > 0) processOne2(); else rest2();
                                   
                                 } else {
                                   {
                                     
                                     if(coll26.length > 0) processOne2(); else rest2();
                                     
                                   }
                                 }
                               }
                               function rest2() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll26.length > 0) processOne2(); else rest2();
                             });
                             
                           });
        
        var nodes216 = $("<span>");
        root300.append(nodes216);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp408, function(_, callback) {
          var root302 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root302); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes216;
          nodes216 = node.contents();
          oldNodes.replaceWith(nodes216);
        }));
        callback(root300); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes214;
        nodes214 = node.contents();
        oldNodes.replaceWith(nodes214);
      }));
      var nodes217 = $("<span>");
      root299.append(nodes217);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root303 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root303); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes217;
        nodes217 = node.contents();
        oldNodes.replaceWith(nodes217);
      }));
      callback(root299); return subs__;
      
      
    }
    if(coll27.length > 0) processOne3(); else rest3();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root304 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp411 = mobl.ref(null);
  
  
  var tmp410 = mobl.ref(null);
  
  var nodes218 = $("<span>");
  root304.append(nodes218);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp410, tmp411, function(_, callback) {
    var root305 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root305); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes218;
    nodes218 = node.contents();
    oldNodes.replaceWith(nodes218);
  }));
  
  var tmp412 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp412.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp412.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp412.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp412.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp412.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes219 = $("<span>");
  root304.append(nodes219);
  subs__.addSub((ui.masterDetail)(tmp412, masterItem, detailItem, function(_, callback) {
    var root306 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root306); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes219;
    nodes219 = node.contents();
    oldNodes.replaceWith(nodes219);
  }));
  callback(root304); return subs__;
  
  
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
  var root307 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp425 = mobl.ref(null);
  
  
  var tmp424 = mobl.ref(null);
  
  
  var tmp423 = mobl.ref(null);
  
  var nodes220 = $("<span>");
  root307.append(nodes220);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp423, tmp424, tmp425, function(_, callback) {
    var root308 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node98 = mobl.loadingSpan();
    root308.append(node98);
    var list23;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList23 = function() {
      var subs__ = listSubs__;
      list23 = sections.get();
      list23.list(function(results111) {
        node98.empty();
        for(var i23 = 0; i23 < results111.length; i23++) {
          (function() {
            var iternode23 = $("<span>");
            node98.append(iternode23);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results111), i23), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results111), i23), "_2");
            
            var tmp416 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp416.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp416.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp416.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp416.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp415 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp418 = mobl.ref(null);
            
            
            var tmp417 = mobl.ref(null);
            
            var nodes221 = $("<span>");
            iternode23.append(nodes221);
            subs__.addSub((mobl.span)(tmp416, tmp417, tmp415, tmp418, function(_, callback) {
              var root309 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp414 = mobl.ref(null);
              
              
              var tmp413 = mobl.ref(null);
              
              var nodes222 = $("<span>");
              root309.append(nodes222);
              subs__.addSub((mobl.label)(sectionName, tmp413, tmp414, function(_, callback) {
                var root310 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root310); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes222;
                nodes222 = node.contents();
                oldNodes.replaceWith(nodes222);
              }));
              callback(root309); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes221;
              nodes221 = node.contents();
              oldNodes.replaceWith(nodes221);
            }));
            
            var tmp419 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp419.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp419.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp419.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp419.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp422 = mobl.ref(null);
            
            
            var tmp421 = mobl.ref(null);
            
            
            var tmp420 = mobl.ref(null);
            
            var nodes223 = $("<span>");
            iternode23.append(nodes223);
            subs__.addSub((mobl.block)(tmp419, tmp420, tmp421, tmp422, function(_, callback) {
              var root311 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes224 = $("<span>");
              root311.append(nodes224);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl38();
              }));
              
              function renderControl38() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root312 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root312); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes224;
                  nodes224 = node.contents();
                  oldNodes.replaceWith(nodes224);
                }));
              }
              renderControl38();
              callback(root311); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes223;
              nodes223 = node.contents();
              oldNodes.replaceWith(nodes223);
            }));
            
            var oldNodes = iternode23;
            iternode23 = iternode23.contents();
            oldNodes.replaceWith(iternode23);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list23.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
      });
    };
    renderList23();
    
    callback(root308); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes220;
    nodes220 = node.contents();
    oldNodes.replaceWith(nodes220);
  }));
  callback(root307); return subs__;
  
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
  var root313 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node99 = $("<table>");
  
  var ref99 = mobl.ref(ui.tableStyle);
  if(ref99.get() !== null) {
    node99.attr('class', ref99.get());
    subs__.addSub(ref99.addEventListener('change', function(_, ref, val) {
      node99.attr('class', val);
    }));
    
  }
  subs__.addSub(ref99.rebind());
  
  var nodes225 = $("<span>");
  node99.append(nodes225);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl39();
  }));
  
  function renderControl39() {
    subs__.addSub((elements)(function(elements, callback) {
      var root314 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root314); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes225;
      nodes225 = node.contents();
      oldNodes.replaceWith(nodes225);
    }));
  }
  renderControl39();
  root313.append(node99);
  callback(root313); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root315 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node100 = $("<tr>");
  
  var ref100 = mobl.ref(ui.trStyle);
  if(ref100.get() !== null) {
    node100.attr('class', ref100.get());
    subs__.addSub(ref100.addEventListener('change', function(_, ref, val) {
      node100.attr('class', val);
    }));
    
  }
  subs__.addSub(ref100.rebind());
  
  var nodes226 = $("<span>");
  node100.append(nodes226);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl40();
  }));
  
  function renderControl40() {
    subs__.addSub((elements)(function(elements, callback) {
      var root316 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root316); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes226;
      nodes226 = node.contents();
      oldNodes.replaceWith(nodes226);
    }));
  }
  renderControl40();
  root315.append(node100);
  callback(root315); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root317 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node101 = $("<td>");
  
  var ref101 = width;
  if(ref101.get() !== null) {
    node101.attr('width', ref101.get());
    subs__.addSub(ref101.addEventListener('change', function(_, ref, val) {
      node101.attr('width', val);
    }));
    
  }
  subs__.addSub(ref101.rebind());
  
  var ref102 = mobl.ref(ui.tdStyle);
  if(ref102.get() !== null) {
    node101.attr('class', ref102.get());
    subs__.addSub(ref102.addEventListener('change', function(_, ref, val) {
      node101.attr('class', val);
    }));
    
  }
  subs__.addSub(ref102.rebind());
  
  var nodes227 = $("<span>");
  node101.append(nodes227);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl41();
  }));
  
  function renderControl41() {
    subs__.addSub((elements)(function(elements, callback) {
      var root318 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root318); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes227;
      nodes227 = node.contents();
      oldNodes.replaceWith(nodes227);
    }));
  }
  renderControl41();
  root317.append(node101);
  callback(root317); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root319 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node102 = $("<td>");
  
  var ref103 = width;
  if(ref103.get() !== null) {
    node102.attr('width', ref103.get());
    subs__.addSub(ref103.addEventListener('change', function(_, ref, val) {
      node102.attr('width', val);
    }));
    
  }
  subs__.addSub(ref103.rebind());
  
  var ref104 = mobl.ref(ui.tdStyle);
  if(ref104.get() !== null) {
    node102.attr('class', ref104.get());
    subs__.addSub(ref104.addEventListener('change', function(_, ref, val) {
      node102.attr('class', val);
    }));
    
  }
  subs__.addSub(ref104.rebind());
  
  var nodes228 = $("<span>");
  node102.append(nodes228);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl42();
  }));
  
  function renderControl42() {
    subs__.addSub((elements)(function(elements, callback) {
      var root320 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root320); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes228;
      nodes228 = node.contents();
      oldNodes.replaceWith(nodes228);
    }));
  }
  renderControl42();
  root319.append(node102);
  callback(root319); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root321 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node103 = $("<td>");
  
  var ref105 = width;
  if(ref105.get() !== null) {
    node103.attr('width', ref105.get());
    subs__.addSub(ref105.addEventListener('change', function(_, ref, val) {
      node103.attr('width', val);
    }));
    
  }
  subs__.addSub(ref105.rebind());
  
  var ref106 = mobl.ref(ui.tdStyle);
  if(ref106.get() !== null) {
    node103.attr('class', ref106.get());
    subs__.addSub(ref106.addEventListener('change', function(_, ref, val) {
      node103.attr('class', val);
    }));
    
  }
  subs__.addSub(ref106.rebind());
  
  
  var node104 = $("<strong>");
  
  var nodes229 = $("<span>");
  node104.append(nodes229);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl43();
  }));
  
  function renderControl43() {
    subs__.addSub((elements)(function(elements, callback) {
      var root322 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root322); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes229;
      nodes229 = node.contents();
      oldNodes.replaceWith(nodes229);
    }));
  }
  renderControl43();
  node103.append(node104);
  root321.append(node103);
  callback(root321); return subs__;
  
  
  
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
ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root323 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var slider = $("<div>");
  
  root323.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  callback(root323); return subs__;
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
