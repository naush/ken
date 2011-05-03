mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root2341 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1100 = $("<span>");
  root2341.append(node1100);
  var condSubs129 = new mobl.CompSubscription();
  subs__.addSub(condSubs129);
  var oldValue129;
  var renderCond129 = function() {
    var value365 = value.get();
    if(oldValue129 === value365) return;
    oldValue129 = value365;
    var subs__ = condSubs129;
    subs__.unsubscribe();
    node1100.empty();
    if(value365) {
      var nodes1807 = $("<span>");
      node1100.append(nodes1807);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl350();
      }));
      
      function renderControl350() {
        subs__.addSub((elements)(function(elements, callback) {
          var root2342 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2342); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1807;
          nodes1807 = node.contents();
          oldNodes.replaceWith(nodes1807);
        }));
      }
      renderControl350();
      
      
    } else {
      
      var tmp4785 = mobl.ref(null);
      
      
      var tmp4784 = mobl.ref(null);
      
      
      var tmp4783 = mobl.ref(null);
      
      var nodes1808 = $("<span>");
      node1100.append(nodes1808);
      subs__.addSub((mobl.block)(style, tmp4783, tmp4784, tmp4785, function(_, callback) {
        var root2343 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp4775 = mobl.ref(null);
        
        
        var tmp4774 = mobl.ref(null);
        
        var nodes1809 = $("<span>");
        root2343.append(nodes1809);
        subs__.addSub((mobl.label)(loadingMessage, tmp4774, tmp4775, function(_, callback) {
          var root2344 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2344); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1809;
          nodes1809 = node.contents();
          oldNodes.replaceWith(nodes1809);
        }));
        
        var tmp4777 = mobl.ref("middle");
        
        
        var tmp4776 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp4782 = mobl.ref(null);
        
        
        var tmp4781 = mobl.ref(null);
        
        
        var tmp4780 = mobl.ref(null);
        
        
        var tmp4779 = mobl.ref(null);
        
        
        var tmp4778 = mobl.ref(null);
        
        var nodes1810 = $("<span>");
        root2343.append(nodes1810);
        subs__.addSub((ui.image)(tmp4776, tmp4778, tmp4779, tmp4780, tmp4781, tmp4777, tmp4782, function(_, callback) {
          var root2345 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2345); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1810;
          nodes1810 = node.contents();
          oldNodes.replaceWith(nodes1810);
        }));
        callback(root2343); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1808;
        nodes1808 = node.contents();
        oldNodes.replaceWith(nodes1808);
      }));
      
      
    }
  };
  renderCond129();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond129();
  }));
  
  callback(root2341); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root2346 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1101 = $("<div>");
  
  var ref899 = mobl.ref(ui.headerStyle);
  if(ref899.get() !== null) {
    node1101.attr('class', ref899.get());
    subs__.addSub(ref899.addEventListener('change', function(_, ref, val) {
      node1101.attr('class', val);
    }));
    
  }
  subs__.addSub(ref899.rebind());
  
  var val714 = onclick.get();
  if(val714 !== null) {
    subs__.addSub(mobl.domBind(node1101, 'tap', val714));
  }
  
  
  var node1102 = $("<div>");
  
  var ref898 = mobl.ref(ui.headerContainerStyle);
  if(ref898.get() !== null) {
    node1102.attr('class', ref898.get());
    subs__.addSub(ref898.addEventListener('change', function(_, ref, val) {
      node1102.attr('class', val);
    }));
    
  }
  subs__.addSub(ref898.rebind());
  
  
  var node1103 = $("<div>");
  
  var ref896 = text;
  node1103.text(""+ref896.get());
  var ignore154 = false;
  subs__.addSub(ref896.addEventListener('change', function(_, ref, val) {
    if(ignore154) return;
    node1103.text(""+val);
  }));
  subs__.addSub(ref896.rebind());
  
  
  var ref897 = mobl.ref(ui.headerTextStyle);
  if(ref897.get() !== null) {
    node1103.attr('class', ref897.get());
    subs__.addSub(ref897.addEventListener('change', function(_, ref, val) {
      node1103.attr('class', val);
    }));
    
  }
  subs__.addSub(ref897.rebind());
  
  node1102.append(node1103);
  node1101.append(node1102);
  var nodes1811 = $("<span>");
  node1101.append(nodes1811);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl351();
  }));
  
  function renderControl351() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2347 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2347); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1811;
      nodes1811 = node.contents();
      oldNodes.replaceWith(nodes1811);
    }));
  }
  renderControl351();
  root2346.append(node1101);
  callback(root2346); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2348 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref900 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref900.get() !== null) {
    sp.attr('class', ref900.get());
    subs__.addSub(ref900.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref900.rebind());
  
  var val715 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val715 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val715));
  }
  
  var val716 = function(event, callback) {
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
  if(val716 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val716));
  }
  
  var val717 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after140(result__) {
                    var tmp4875 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after140);if(result__ !== undefined) after140(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val717 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val717));
  }
  
  var val718 = function(event, callback) {
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
  if(val718 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val718));
  }
  
  var ref901 = text;
  sp.text(""+ref901.get());
  var ignore155 = false;
  subs__.addSub(ref901.addEventListener('change', function(_, ref, val) {
    if(ignore155) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref901.rebind());
  
  
  root2348.append(sp);
  callback(root2348); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2349 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1812 = $("<span>");
  root2349.append(nodes1812);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2350 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2350); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1812;
    nodes1812 = node.contents();
    oldNodes.replaceWith(nodes1812);
  }));
  callback(root2349); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2351 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1813 = $("<span>");
  root2351.append(nodes1813);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2352 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2352); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1813;
    nodes1813 = node.contents();
    oldNodes.replaceWith(nodes1813);
  }));
  callback(root2351); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root2353 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1104 = $("<ul>");
  
  var ref902 = mobl.ref(ui.groupStyle);
  if(ref902.get() !== null) {
    node1104.attr('class', ref902.get());
    subs__.addSub(ref902.addEventListener('change', function(_, ref, val) {
      node1104.attr('class', val);
    }));
    
  }
  subs__.addSub(ref902.rebind());
  
  var nodes1814 = $("<span>");
  node1104.append(nodes1814);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl352();
  }));
  
  function renderControl352() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2354 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2354); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1814;
      nodes1814 = node.contents();
      oldNodes.replaceWith(nodes1814);
    }));
  }
  renderControl352();
  root2353.append(node1104);
  callback(root2353); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root2355 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1105 = $("<img>");
  
  var ref903 = url;
  if(ref903.get() !== null) {
    node1105.attr('src', ref903.get());
    subs__.addSub(ref903.addEventListener('change', function(_, ref, val) {
      node1105.attr('src', val);
    }));
    
  }
  subs__.addSub(ref903.rebind());
  
  var ref904 = width;
  if(ref904.get() !== null) {
    node1105.attr('width', ref904.get());
    subs__.addSub(ref904.addEventListener('change', function(_, ref, val) {
      node1105.attr('width', val);
    }));
    
  }
  subs__.addSub(ref904.rebind());
  
  var ref905 = height;
  if(ref905.get() !== null) {
    node1105.attr('height', ref905.get());
    subs__.addSub(ref905.addEventListener('change', function(_, ref, val) {
      node1105.attr('height', val);
    }));
    
  }
  subs__.addSub(ref905.rebind());
  
  var ref906 = style;
  if(ref906.get() !== null) {
    node1105.attr('class', ref906.get());
    subs__.addSub(ref906.addEventListener('change', function(_, ref, val) {
      node1105.attr('class', val);
    }));
    
  }
  subs__.addSub(ref906.rebind());
  
  var val719 = onclick.get();
  if(val719 !== null) {
    subs__.addSub(mobl.domBind(node1105, 'tap', val719));
  }
  
  var ref907 = valign;
  if(ref907.get() !== null) {
    node1105.attr('valign', ref907.get());
    subs__.addSub(ref907.addEventListener('change', function(_, ref, val) {
      node1105.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref907.rebind());
  
  var ref908 = align;
  if(ref908.get() !== null) {
    node1105.attr('align', ref908.get());
    subs__.addSub(ref908.addEventListener('change', function(_, ref, val) {
      node1105.attr('align', val);
    }));
    
  }
  subs__.addSub(ref908.rebind());
  
  root2355.append(node1105);
  callback(root2355); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root2356 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref909 = mobl.ref(ui.itemStyle);
  if(ref909.get() !== null) {
    el.attr('class', ref909.get());
    subs__.addSub(ref909.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref909.rebind());
  
  var ref910 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref910.get() !== null) {
    el.attr('class', ref910.get());
    subs__.addSub(ref910.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref910.rebind());
  
  var val720 = onswipe.get();
  if(val720 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val720));
  }
  
  var val721 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp4876 = result__;
                                           function after141(result__) {
                                             var tmp4877 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after141);if(result__ !== undefined) after141(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp4878 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val721 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val721));
  }
  
  var nodes1815 = $("<span>");
  el.append(nodes1815);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl353();
  }));
  
  function renderControl353() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2357 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2357); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1815;
      nodes1815 = node.contents();
      oldNodes.replaceWith(nodes1815);
    }));
  }
  renderControl353();
  root2356.append(el);
  callback(root2356); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root2358 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1106 = $("<input>");
  node1106.attr('type', "checkbox");
  
  var ref912 = b;
  node1106.attr('checked', !!ref912.get());
  subs__.addSub(ref912.addEventListener('change', function(_, ref, val) {
    if(ref === ref912) node1106.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1106, 'change', function() {
    b.set(!!node1106.attr('checked'));
  }));
  
  var val723 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val723 !== null) {
    subs__.addSub(mobl.domBind(node1106, 'tap', val723));
  }
  
  var val724 = onchange.get();
  if(val724 !== null) {
    subs__.addSub(mobl.domBind(node1106, 'change', val724));
  }
  
  root2358.append(node1106);
  
  root2358.append(" ");
  
  var node1107 = $("<span>");
  
  var ref911 = label;
  node1107.text(""+ref911.get());
  var ignore156 = false;
  subs__.addSub(ref911.addEventListener('change', function(_, ref, val) {
    if(ignore156) return;
    node1107.text(""+val);
  }));
  subs__.addSub(ref911.rebind());
  
  
  var val722 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after142(result__) {
                    var tmp4879 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after142);if(result__ !== undefined) after142(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val722 !== null) {
    subs__.addSub(mobl.domBind(node1107, 'tap', val722));
  }
  
  root2358.append(node1107);
  callback(root2358); return subs__;
  
  
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
  var root2359 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1108 = $("<span>");
  root2359.append(node1108);
  var condSubs130 = new mobl.CompSubscription();
  subs__.addSub(condSubs130);
  var oldValue130;
  var renderCond130 = function() {
    var value366 = label.get();
    if(oldValue130 === value366) return;
    oldValue130 = value366;
    var subs__ = condSubs130;
    subs__.unsubscribe();
    node1108.empty();
    if(value366) {
      
      var tmp4786 = mobl.ref(null);
      
      var nodes1816 = $("<span>");
      node1108.append(nodes1816);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp4786, function(_, callback) {
        var root2360 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2360); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1816;
        nodes1816 = node.contents();
        oldNodes.replaceWith(nodes1816);
      }));
      
      
    } else {
      
    }
  };
  renderCond130();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond130();
  }));
  
  
  var node1109 = $("<span>");
  root2359.append(node1109);
  var condSubs131 = new mobl.CompSubscription();
  subs__.addSub(condSubs131);
  var oldValue131;
  var renderCond131 = function() {
    var value367 = validator.get();
    if(oldValue131 === value367) return;
    oldValue131 = value367;
    var subs__ = condSubs131;
    subs__.unsubscribe();
    node1109.empty();
    if(value367) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after146(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp4880 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1110 = $("<input>");
        node1110.attr('type', "text");
        
        var ref913 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref913.get() !== null) {
          node1110.attr('class', ref913.get());
          subs__.addSub(ref913.addEventListener('change', function(_, ref, val) {
            node1110.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1110.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1110.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1110.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref913.rebind());
        
        var ref914 = placeholder;
        if(ref914.get() !== null) {
          node1110.attr('placeholder', ref914.get());
          subs__.addSub(ref914.addEventListener('change', function(_, ref, val) {
            node1110.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref914.rebind());
        
        var ref915 = temp;
        node1110.val(""+ref915.get());
        var ignore157 = false;
        subs__.addSub(ref915.addEventListener('change', function(_, ref, val) {
          if(ignore157) return;
          node1110.val(""+val);
        }));
        subs__.addSub(ref915.rebind());
        
        subs__.addSub(mobl.domBind(node1110, 'keyup change', function() {
          ignore157 = true;
          temp.set(mobl.stringTomobl__String(node1110.val()));
          ignore157 = false;
        }));
        
        
        var val725 = onchange.get();
        if(val725 !== null) {
          subs__.addSub(mobl.domBind(node1110, 'change', val725));
        }
        
        var val726 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after143(result__) {
                          var tmp4881 = result__;
                          function after144(result__) {
                            var tmp4882 = result__;
                            var result__ = tmp4882;
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
                          var result__ = validator.get()(temp.get(), after144);if(result__ !== undefined) after144(result__);
                        }
                        var result__ = onkeyup.get()(event, after143);if(result__ !== undefined) after143(result__);
                      } else {
                        {
                          function after145(result__) {
                            var tmp4882 = result__;
                            var result__ = tmp4882;
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
                          var result__ = validator.get()(temp.get(), after145);if(result__ !== undefined) after145(result__);
                        }
                      }
                    };
        if(val726 !== null) {
          subs__.addSub(mobl.domBind(node1110, 'keyup', val726));
        }
        
        var val727 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val727 !== null) {
          subs__.addSub(mobl.domBind(node1110, 'blur', val727));
        }
        
        node1109.append(node1110);
        
        var tmp4787 = mobl.ref(null);
        
        var nodes1817 = $("<span>");
        node1109.append(nodes1817);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp4787, function(_, callback) {
          var root2361 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2361); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1817;
          nodes1817 = node.contents();
          oldNodes.replaceWith(nodes1817);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after146);if(result__ !== undefined) after146(result__);
    } else {
      
      var node1111 = $("<input>");
      node1111.attr('type', "text");
      
      var ref916 = style;
      if(ref916.get() !== null) {
        node1111.attr('class', ref916.get());
        subs__.addSub(ref916.addEventListener('change', function(_, ref, val) {
          node1111.attr('class', val);
        }));
        
      }
      subs__.addSub(ref916.rebind());
      
      var ref917 = placeholder;
      if(ref917.get() !== null) {
        node1111.attr('placeholder', ref917.get());
        subs__.addSub(ref917.addEventListener('change', function(_, ref, val) {
          node1111.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref917.rebind());
      
      var ref918 = s;
      node1111.val(""+ref918.get());
      var ignore158 = false;
      subs__.addSub(ref918.addEventListener('change', function(_, ref, val) {
        if(ignore158) return;
        node1111.val(""+val);
      }));
      subs__.addSub(ref918.rebind());
      
      subs__.addSub(mobl.domBind(node1111, 'keyup change', function() {
        ignore158 = true;
        s.set(mobl.stringTomobl__String(node1111.val()));
        ignore158 = false;
      }));
      
      
      var val728 = onchange.get();
      if(val728 !== null) {
        subs__.addSub(mobl.domBind(node1111, 'change', val728));
      }
      
      var val729 = onkeyup.get();
      if(val729 !== null) {
        subs__.addSub(mobl.domBind(node1111, 'keyup', val729));
      }
      
      var val730 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val730 !== null) {
        subs__.addSub(mobl.domBind(node1111, 'blur', val730));
      }
      
      node1109.append(node1111);
      
      
    }
  };
  renderCond131();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond131();
  }));
  
  callback(root2359); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2362 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1818 = $("<span>");
  root2362.append(nodes1818);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root2363 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2363); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1818;
    nodes1818 = node.contents();
    oldNodes.replaceWith(nodes1818);
  }));
  callback(root2362); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2364 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after147(result__) {
      var tmp4883 = result__;
      var result__ = tmp4883;
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
    var result__ = validator.get()(n2, after147);if(result__ !== undefined) after147(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes1819 = $("<span>");
  root2364.append(nodes1819);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root2365 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2365); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1819;
    nodes1819 = node.contents();
    oldNodes.replaceWith(nodes1819);
  }));
  callback(root2364); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root2366 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1112 = $("<span>");
  root2366.append(node1112);
  var condSubs132 = new mobl.CompSubscription();
  subs__.addSub(condSubs132);
  var oldValue132;
  var renderCond132 = function() {
    var value368 = label.get();
    if(oldValue132 === value368) return;
    oldValue132 = value368;
    var subs__ = condSubs132;
    subs__.unsubscribe();
    node1112.empty();
    if(value368) {
      
      var node1113 = $("<span>");
      node1113.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref922 = label;
      node1113.text(""+ref922.get());
      var ignore160 = false;
      subs__.addSub(ref922.addEventListener('change', function(_, ref, val) {
        if(ignore160) return;
        node1113.text(""+val);
      }));
      subs__.addSub(ref922.rebind());
      
      
      node1112.append(node1113);
      
      var node1114 = $("<span>");
      node1114.attr('style', "float: left");
      
      
      var node1115 = $("<input>");
      node1115.attr('type', "password");
      
      var ref919 = style;
      if(ref919.get() !== null) {
        node1115.attr('class', ref919.get());
        subs__.addSub(ref919.addEventListener('change', function(_, ref, val) {
          node1115.attr('class', val);
        }));
        
      }
      subs__.addSub(ref919.rebind());
      
      var ref920 = placeholder;
      if(ref920.get() !== null) {
        node1115.attr('placeholder', ref920.get());
        subs__.addSub(ref920.addEventListener('change', function(_, ref, val) {
          node1115.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref920.rebind());
      
      var ref921 = s;
      node1115.val(""+ref921.get());
      var ignore159 = false;
      subs__.addSub(ref921.addEventListener('change', function(_, ref, val) {
        if(ignore159) return;
        node1115.val(""+val);
      }));
      subs__.addSub(ref921.rebind());
      
      subs__.addSub(mobl.domBind(node1115, 'keyup change', function() {
        ignore159 = true;
        s.set(mobl.stringTomobl__String(node1115.val()));
        ignore159 = false;
      }));
      
      
      var val731 = onchange.get();
      if(val731 !== null) {
        subs__.addSub(mobl.domBind(node1115, 'change', val731));
      }
      
      var val732 = onkeyup.get();
      if(val732 !== null) {
        subs__.addSub(mobl.domBind(node1115, 'keyup', val732));
      }
      
      var val733 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val733 !== null) {
        subs__.addSub(mobl.domBind(node1115, 'blur', val733));
      }
      
      node1114.append(node1115);
      node1112.append(node1114);
      
      
      
      
    } else {
      
      var node1116 = $("<input>");
      node1116.attr('type', "password");
      
      var ref923 = style;
      if(ref923.get() !== null) {
        node1116.attr('class', ref923.get());
        subs__.addSub(ref923.addEventListener('change', function(_, ref, val) {
          node1116.attr('class', val);
        }));
        
      }
      subs__.addSub(ref923.rebind());
      
      var ref924 = placeholder;
      if(ref924.get() !== null) {
        node1116.attr('placeholder', ref924.get());
        subs__.addSub(ref924.addEventListener('change', function(_, ref, val) {
          node1116.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref924.rebind());
      
      var ref925 = s;
      node1116.val(""+ref925.get());
      var ignore161 = false;
      subs__.addSub(ref925.addEventListener('change', function(_, ref, val) {
        if(ignore161) return;
        node1116.val(""+val);
      }));
      subs__.addSub(ref925.rebind());
      
      subs__.addSub(mobl.domBind(node1116, 'keyup change', function() {
        ignore161 = true;
        s.set(mobl.stringTomobl__String(node1116.val()));
        ignore161 = false;
      }));
      
      
      var val734 = onchange.get();
      if(val734 !== null) {
        subs__.addSub(mobl.domBind(node1116, 'change', val734));
      }
      
      var val735 = onkeyup.get();
      if(val735 !== null) {
        subs__.addSub(mobl.domBind(node1116, 'keyup', val735));
      }
      
      var val736 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val736 !== null) {
        subs__.addSub(mobl.domBind(node1116, 'blur', val736));
      }
      
      node1112.append(node1116);
      
      
    }
  };
  renderCond132();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond132();
  }));
  
  callback(root2366); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root2367 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref930 = style;
  if(ref930.get() !== null) {
    sel.attr('class', ref930.get());
    subs__.addSub(ref930.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref930.rebind());
  
  var val737 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after148(result__) {
                    var tmp4885 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after148);if(result__ !== undefined) after148(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val737 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val737));
  }
  
  
  var node1117 = mobl.loadingSpan();
  sel.append(node1117);
  var list171;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList171 = function() {
    var subs__ = listSubs__;
    list171 = options.get();
    list171.list(function(results171) {
      node1117.empty();
      for(var i189 = 0; i189 < results171.length; i189++) {
        (function() {
          var iternode171 = $("<span>");
          node1117.append(iternode171);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results171), i189), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results171), i189), "_2");
          
          var node1118 = $("<option>");
          
          var ref926 = optionDescription;
          node1118.text(""+ref926.get());
          var ignore162 = false;
          subs__.addSub(ref926.addEventListener('change', function(_, ref, val) {
            if(ignore162) return;
            node1118.text(""+val);
          }));
          subs__.addSub(ref926.rebind());
          
          
          var ref927 = optionStyle;
          if(ref927.get() !== null) {
            node1118.attr('class', ref927.get());
            subs__.addSub(ref927.addEventListener('change', function(_, ref, val) {
              node1118.attr('class', val);
            }));
            
          }
          subs__.addSub(ref927.rebind());
          
          var ref928 = optionValue;
          if(ref928.get() !== null) {
            node1118.attr('value', ref928.get());
            subs__.addSub(ref928.addEventListener('change', function(_, ref, val) {
              node1118.attr('value', val);
            }));
            
          }
          subs__.addSub(ref928.rebind());
          
          var ref929 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref929.get() !== null) {
            node1118.attr('selected', ref929.get());
            subs__.addSub(ref929.addEventListener('change', function(_, ref, val) {
              node1118.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1118.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1118.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref929.rebind());
          
          iternode171.append(node1118);
          
          var oldNodes = iternode171;
          iternode171 = iternode171.contents();
          oldNodes.replaceWith(iternode171);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list171.addEventListener('change', function() { listSubs__.unsubscribe(); renderList171(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList171(true); }));
    });
  };
  renderList171();
  
  root2367.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root2367); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root2368 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp4796 = mobl.ref(null);
  
  
  var tmp4795 = mobl.ref(null);
  
  
  var tmp4794 = mobl.ref(null);
  
  var nodes1820 = $("<span>");
  root2368.append(nodes1820);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp4794, tmp4795, tmp4796, function(_, callback) {
    var root2369 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1119 = mobl.loadingSpan();
    root2369.append(node1119);
    var list172;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList172 = function() {
      var subs__ = listSubs__;
      list172 = tabs.get();
      list172.list(function(results172) {
        node1119.empty();
        for(var i190 = 0; i190 < results172.length; i190++) {
          (function() {
            var iternode172 = $("<span>");
            node1119.append(iternode172);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results172), i190), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results172), i190), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results172), i190), "_3");
            
            var tmp4791 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp4791.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4791.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp4791.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp4791.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp4790 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp4793 = mobl.ref(null);
            
            
            var tmp4792 = mobl.ref(null);
            
            var nodes1821 = $("<span>");
            iternode172.append(nodes1821);
            subs__.addSub((mobl.span)(tmp4791, tmp4792, tmp4790, tmp4793, function(_, callback) {
              var root2370 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp4789 = mobl.ref(null);
              
              
              var tmp4788 = mobl.ref(null);
              
              var nodes1822 = $("<span>");
              root2370.append(nodes1822);
              subs__.addSub((mobl.label)(tabName, tmp4788, tmp4789, function(_, callback) {
                var root2371 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2371); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1822;
                nodes1822 = node.contents();
                oldNodes.replaceWith(nodes1822);
              }));
              callback(root2370); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1821;
              nodes1821 = node.contents();
              oldNodes.replaceWith(nodes1821);
            }));
            
            var oldNodes = iternode172;
            iternode172 = iternode172.contents();
            oldNodes.replaceWith(iternode172);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list172.addEventListener('change', function() { listSubs__.unsubscribe(); renderList172(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList172(true); }));
      });
    };
    renderList172();
    
    callback(root2369); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1820;
    nodes1820 = node.contents();
    oldNodes.replaceWith(nodes1820);
  }));
  
  var node1120 = mobl.loadingSpan();
  root2368.append(node1120);
  var list173;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList173 = function() {
    var subs__ = listSubs__;
    list173 = tabs.get();
    list173.list(function(results173) {
      node1120.empty();
      for(var i191 = 0; i191 < results173.length; i191++) {
        (function() {
          var iternode173 = $("<span>");
          node1120.append(iternode173);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results173), i191), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results173), i191), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results173), i191), "_3");
          
          var tmp4797 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp4797.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp4797.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp4797.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp4797.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp4800 = mobl.ref(null);
          
          
          var tmp4799 = mobl.ref(null);
          
          
          var tmp4798 = mobl.ref(null);
          
          var nodes1823 = $("<span>");
          iternode173.append(nodes1823);
          subs__.addSub((mobl.block)(tmp4797, tmp4798, tmp4799, tmp4800, function(_, callback) {
            var root2372 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes1824 = $("<span>");
            root2372.append(nodes1824);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root2373 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1825 = $("<span>");
              root2373.append(nodes1825);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl354();
              }));
              
              function renderControl354() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root2374 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2374); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1825;
                  nodes1825 = node.contents();
                  oldNodes.replaceWith(nodes1825);
                }));
              }
              renderControl354();
              callback(root2373); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1824;
              nodes1824 = node.contents();
              oldNodes.replaceWith(nodes1824);
            }));
            callback(root2372); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes1823;
            nodes1823 = node.contents();
            oldNodes.replaceWith(nodes1823);
          }));
          
          var oldNodes = iternode173;
          iternode173 = iternode173.contents();
          oldNodes.replaceWith(iternode173);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list173.addEventListener('change', function() { listSubs__.unsubscribe(); renderList173(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList173(true); }));
    });
  };
  renderList173();
  
  callback(root2368); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root2375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1121 = $("<div>");
  
  var ref934 = mobl.ref(ui.searchboxStyle);
  if(ref934.get() !== null) {
    node1121.attr('class', ref934.get());
    subs__.addSub(ref934.addEventListener('change', function(_, ref, val) {
      node1121.attr('class', val);
    }));
    
  }
  subs__.addSub(ref934.rebind());
  
  
  var node1122 = $("<input>");
  node1122.attr('type', "search");
  
  var ref931 = mobl.ref(ui.searchBoxInputStyle);
  if(ref931.get() !== null) {
    node1122.attr('class', ref931.get());
    subs__.addSub(ref931.addEventListener('change', function(_, ref, val) {
      node1122.attr('class', val);
    }));
    
  }
  subs__.addSub(ref931.rebind());
  
  var ref932 = placeholder;
  if(ref932.get() !== null) {
    node1122.attr('placeholder', ref932.get());
    subs__.addSub(ref932.addEventListener('change', function(_, ref, val) {
      node1122.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref932.rebind());
  
  var ref933 = s;
  node1122.val(""+ref933.get());
  var ignore163 = false;
  subs__.addSub(ref933.addEventListener('change', function(_, ref, val) {
    if(ignore163) return;
    node1122.val(""+val);
  }));
  subs__.addSub(ref933.rebind());
  
  subs__.addSub(mobl.domBind(node1122, 'keyup change', function() {
    ignore163 = true;
    s.set(mobl.stringTomobl__String(node1122.val()));
    ignore163 = false;
  }));
  
  
  var val738 = onsearch.get();
  if(val738 !== null) {
    subs__.addSub(mobl.domBind(node1122, 'change', val738));
  }
  
  var val739 = onkeyup.get();
  if(val739 !== null) {
    subs__.addSub(mobl.domBind(node1122, 'keyup', val739));
  }
  node1122.attr('autocorrect', false);
  node1122.attr('autocapitalize', false);
  node1122.attr('autocomplete', false);
  
  node1121.append(node1122);
  root2375.append(node1121);
  callback(root2375); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root2376 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref935 = mobl.ref(ui.contextMenuStyle);
  if(ref935.get() !== null) {
    menu.attr('class', ref935.get());
    subs__.addSub(ref935.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref935.rebind());
  
  var nodes1826 = $("<span>");
  menu.append(nodes1826);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl355();
  }));
  
  function renderControl355() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2377 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2377); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1826;
      nodes1826 = node.contents();
      oldNodes.replaceWith(nodes1826);
    }));
  }
  renderControl355();
  root2376.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val740 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp4888 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val740 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val740));
  }
  
  root2376.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root2376); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root2378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp4874 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp4874.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1123 = $("<span>");
  root2378.append(node1123);
  var condSubs133 = new mobl.CompSubscription();
  subs__.addSub(condSubs133);
  var oldValue133;
  var renderCond133 = function() {
    var value369 = tmp4874.get();
    if(oldValue133 === value369) return;
    oldValue133 = value369;
    var subs__ = condSubs133;
    subs__.unsubscribe();
    node1123.empty();
    if(value369) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node1124 = $("<div>");
        node1124.attr('width', "100%");
        
        
        var node1125 = $("<div>");
        node1125.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1829 = $("<span>");
        node1125.append(nodes1829);
        subs__.addSub((ui.group)(function(_, callback) {
          var root2381 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1128 = mobl.loadingSpan();
          root2381.append(node1128);
          var list174;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList174 = function() {
            var subs__ = listSubs__;
            list174 = items.get();
            list174.list(function(results174) {
              node1128.empty();
              for(var i192 = 0; i192 < results174.length; i192++) {
                (function() {
                  var iternode174 = $("<span>");
                  node1128.append(iternode174);
                  var it;
                  it = mobl.ref(mobl.ref(results174), i192);
                  
                  var tmp4814 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp4814.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp4814.set(it.get() == current.get());
                  }));
                  
                  
                  var node1129 = $("<span>");
                  iternode174.append(node1129);
                  var condSubs135 = new mobl.CompSubscription();
                  subs__.addSub(condSubs135);
                  var oldValue135;
                  var renderCond135 = function() {
                    var value371 = tmp4814.get();
                    if(oldValue135 === value371) return;
                    oldValue135 = value371;
                    var subs__ = condSubs135;
                    subs__.unsubscribe();
                    node1129.empty();
                    if(value371) {
                      
                      var tmp4810 = mobl.ref(false);
                      
                      
                      var tmp4809 = mobl.ref(null);
                      
                      
                      var tmp4808 = mobl.ref(null);
                      
                      var nodes1830 = $("<span>");
                      node1129.append(nodes1830);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp4808, tmp4809, tmp4810, function(_, callback) {
                        var root2382 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1831 = $("<span>");
                        root2382.append(nodes1831);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl357();
                        }));
                        
                        function renderControl357() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2383 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2383); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1831;
                            nodes1831 = node.contents();
                            oldNodes.replaceWith(nodes1831);
                          }));
                        }
                        renderControl357();
                        callback(root2382); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1830;
                        nodes1830 = node.contents();
                        oldNodes.replaceWith(nodes1830);
                      }));
                      
                      
                    } else {
                      
                      var tmp4812 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp4811 = mobl.ref(true);
                      
                      
                      var tmp4813 = mobl.ref(null);
                      
                      var nodes1832 = $("<span>");
                      node1129.append(nodes1832);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4812, tmp4813, tmp4811, function(_, callback) {
                        var root2384 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1833 = $("<span>");
                        root2384.append(nodes1833);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl358();
                        }));
                        
                        function renderControl358() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2385 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2385); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1833;
                            nodes1833 = node.contents();
                            oldNodes.replaceWith(nodes1833);
                          }));
                        }
                        renderControl358();
                        callback(root2384); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1832;
                        nodes1832 = node.contents();
                        oldNodes.replaceWith(nodes1832);
                      }));
                      
                      
                    }
                  };
                  renderCond135();
                  subs__.addSub(tmp4814.addEventListener('change', function() {
                    renderCond135();
                  }));
                  
                  
                  var oldNodes = iternode174;
                  iternode174 = iternode174.contents();
                  oldNodes.replaceWith(iternode174);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list174.addEventListener('change', function() { listSubs__.unsubscribe(); renderList174(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList174(true); }));
            });
          };
          renderList174();
          
          callback(root2381); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1829;
          nodes1829 = node.contents();
          oldNodes.replaceWith(nodes1829);
        }));
        node1124.append(node1125);
        
        var node1126 = $("<div>");
        node1126.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1127 = $("<span>");
        node1126.append(node1127);
        var condSubs134 = new mobl.CompSubscription();
        subs__.addSub(condSubs134);
        var oldValue134;
        var renderCond134 = function() {
          var value370 = current.get();
          if(oldValue134 === value370) return;
          oldValue134 = value370;
          var subs__ = condSubs134;
          subs__.unsubscribe();
          node1127.empty();
          if(value370) {
            var nodes1827 = $("<span>");
            node1127.append(nodes1827);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl356();
            }));
            
            function renderControl356() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root2379 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2379); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1827;
                nodes1827 = node.contents();
                oldNodes.replaceWith(nodes1827);
              }));
            }
            renderControl356();
            
            
          } else {
            
            var tmp4815 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp4817 = mobl.ref(null);
            
            
            var tmp4816 = mobl.ref(null);
            
            var nodes1828 = $("<span>");
            node1127.append(nodes1828);
            subs__.addSub((mobl.label)(tmp4815, tmp4816, tmp4817, function(_, callback) {
              var root2380 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2380); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1828;
              nodes1828 = node.contents();
              oldNodes.replaceWith(nodes1828);
            }));
            
            
          }
        };
        renderCond134();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond134();
        }));
        
        node1124.append(node1126);
        node1123.append(node1124);
        
        
        
        
        
        
      });
    } else {
      var nodes1834 = $("<span>");
      node1123.append(nodes1834);
      subs__.addSub((ui.group)(function(_, callback) {
        var root2386 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1130 = mobl.loadingSpan();
        root2386.append(node1130);
        var list175;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList175 = function() {
          var subs__ = listSubs__;
          list175 = items.get();
          list175.list(function(results175) {
            node1130.empty();
            for(var i193 = 0; i193 < results175.length; i193++) {
              (function() {
                var iternode175 = $("<span>");
                node1130.append(iternode175);
                var it;
                it = mobl.ref(mobl.ref(results175), i193);
                
                var tmp4801 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp4889 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp4803 = mobl.ref(false);
                
                
                var tmp4802 = mobl.ref(null);
                
                var nodes1835 = $("<span>");
                iternode175.append(nodes1835);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4801, tmp4802, tmp4803, function(_, callback) {
                  var root2387 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1836 = $("<span>");
                  root2387.append(nodes1836);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl359();
                  }));
                  
                  function renderControl359() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root2388 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2388); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1836;
                      nodes1836 = node.contents();
                      oldNodes.replaceWith(nodes1836);
                    }));
                  }
                  renderControl359();
                  callback(root2387); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1835;
                  nodes1835 = node.contents();
                  oldNodes.replaceWith(nodes1835);
                }));
                
                var oldNodes = iternode175;
                iternode175 = iternode175.contents();
                oldNodes.replaceWith(iternode175);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list175.addEventListener('change', function() { listSubs__.unsubscribe(); renderList175(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList175(true); }));
          });
        };
        renderList175();
        
        callback(root2386); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1834;
        nodes1834 = node.contents();
        oldNodes.replaceWith(nodes1834);
      }));
      
      
    }
  };
  renderCond133();
  subs__.addSub(tmp4874.addEventListener('change', function() {
    renderCond133();
  }));
  
  callback(root2378); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root2389 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp4806 = mobl.ref("Detail");
  
  
  var tmp4807 = mobl.ref(null);
  
  var nodes1837 = $("<span>");
  root2389.append(nodes1837);
  subs__.addSub((ui.header)(tmp4806, tmp4807, function(_, callback) {
    var root2390 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp4805 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp4804 = mobl.ref("Back");
    
    var nodes1838 = $("<span>");
    root2390.append(nodes1838);
    subs__.addSub((ui.backButton)(tmp4804, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4805, function(_, callback) {
      var root2391 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2391); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1838;
      nodes1838 = node.contents();
      oldNodes.replaceWith(nodes1838);
    }));
    callback(root2390); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1837;
    nodes1837 = node.contents();
    oldNodes.replaceWith(nodes1837);
  }));
  var nodes1839 = $("<span>");
  root2389.append(nodes1839);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl360();
  }));
  
  function renderControl360() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root2392 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2392); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1839;
      nodes1839 = node.contents();
      oldNodes.replaceWith(nodes1839);
    }));
  }
  renderControl360();
  callback(root2389); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root2393 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1840 = $("<span>");
  root2393.append(nodes1840);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2394 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1131 = mobl.loadingSpan();
    root2394.append(node1131);
    var list176;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList176 = function() {
      var subs__ = listSubs__;
      list176 = coll.get();
      list176.list(function(results176) {
        node1131.empty();
        for(var i194 = 0; i194 < results176.length; i194++) {
          (function() {
            var iternode176 = $("<span>");
            node1131.append(iternode176);
            var it;
            it = mobl.ref(mobl.ref(results176), i194);
            
            var tmp4824 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp4824.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp4824.set(it.get() == selected.get());
            }));
            
            
            var node1132 = $("<span>");
            iternode176.append(node1132);
            var condSubs136 = new mobl.CompSubscription();
            subs__.addSub(condSubs136);
            var oldValue136;
            var renderCond136 = function() {
              var value372 = tmp4824.get();
              if(oldValue136 === value372) return;
              oldValue136 = value372;
              var subs__ = condSubs136;
              subs__.unsubscribe();
              node1132.empty();
              if(value372) {
                
                var tmp4820 = mobl.ref(false);
                
                
                var tmp4819 = mobl.ref(null);
                
                
                var tmp4818 = mobl.ref(null);
                
                var nodes1841 = $("<span>");
                node1132.append(nodes1841);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4818, tmp4819, tmp4820, function(_, callback) {
                  var root2395 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1842 = $("<span>");
                  root2395.append(nodes1842);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl361();
                  }));
                  
                  function renderControl361() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root2396 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2396); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1842;
                      nodes1842 = node.contents();
                      oldNodes.replaceWith(nodes1842);
                    }));
                  }
                  renderControl361();
                  callback(root2395); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1841;
                  nodes1841 = node.contents();
                  oldNodes.replaceWith(nodes1841);
                }));
                
                
              } else {
                
                var tmp4822 = mobl.ref(true);
                
                
                var tmp4821 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp4823 = mobl.ref(null);
                
                var nodes1843 = $("<span>");
                node1132.append(nodes1843);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4821, tmp4823, tmp4822, function(_, callback) {
                  var root2397 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1844 = $("<span>");
                  root2397.append(nodes1844);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl362();
                  }));
                  
                  function renderControl362() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root2398 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2398); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1844;
                      nodes1844 = node.contents();
                      oldNodes.replaceWith(nodes1844);
                    }));
                  }
                  renderControl362();
                  callback(root2397); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1843;
                  nodes1843 = node.contents();
                  oldNodes.replaceWith(nodes1843);
                }));
                
                
              }
            };
            renderCond136();
            subs__.addSub(tmp4824.addEventListener('change', function() {
              renderCond136();
            }));
            
            
            var oldNodes = iternode176;
            iternode176 = iternode176.contents();
            oldNodes.replaceWith(iternode176);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list176.addEventListener('change', function() { listSubs__.unsubscribe(); renderList176(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList176(true); }));
      });
    };
    renderList176();
    
    callback(root2394); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1840;
    nodes1840 = node.contents();
    oldNodes.replaceWith(nodes1840);
  }));
  callback(root2393); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root2399 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes1845 = $("<span>");
    root2399.append(nodes1845);
    subs__.addSub((ui.group)(function(_, callback) {
      var root2400 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp4828 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp4828.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp4828.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp4828.set(coll.get().limit(n.get()));
      }));
      
      
      var node1133 = mobl.loadingSpan();
      root2400.append(node1133);
      var list177;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList177 = function() {
        var subs__ = listSubs__;
        list177 = tmp4828.get();
        list177.list(function(results177) {
          node1133.empty();
          for(var i195 = 0; i195 < results177.length; i195++) {
            (function() {
              var iternode177 = $("<span>");
              node1133.append(iternode177);
              var it;
              it = mobl.ref(mobl.ref(results177), i195);
              
              var tmp4825 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp4827 = mobl.ref(false);
              
              
              var tmp4826 = mobl.ref(null);
              
              var nodes1846 = $("<span>");
              iternode177.append(nodes1846);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4825, tmp4826, tmp4827, function(_, callback) {
                var root2401 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1847 = $("<span>");
                root2401.append(nodes1847);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl363();
                }));
                
                function renderControl363() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root2402 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root2402); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1847;
                    nodes1847 = node.contents();
                    oldNodes.replaceWith(nodes1847);
                  }));
                }
                renderControl363();
                callback(root2401); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1846;
                nodes1846 = node.contents();
                oldNodes.replaceWith(nodes1846);
              }));
              
              var oldNodes = iternode177;
              iternode177 = iternode177.contents();
              oldNodes.replaceWith(iternode177);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list177.addEventListener('change', function() { listSubs__.unsubscribe(); renderList177(true); }));
          subs__.addSub(tmp4828.addEventListener('change', function() { listSubs__.unsubscribe(); renderList177(true); }));
        });
      };
      renderList177();
      
      
      var tmp4831 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp4831.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp4831.set(n.get() < total.get());
      }));
      
      
      var node1134 = $("<span>");
      root2400.append(node1134);
      var condSubs137 = new mobl.CompSubscription();
      subs__.addSub(condSubs137);
      var oldValue137;
      var renderCond137 = function() {
        var value373 = tmp4831.get();
        if(oldValue137 === value373) return;
        oldValue137 = value373;
        var subs__ = condSubs137;
        subs__.unsubscribe();
        node1134.empty();
        if(value373) {
          
          var node1135 = $("<li>");
          
          var ref936 = mobl.ref(ui.loadMoreStyle);
          if(ref936.get() !== null) {
            node1135.attr('class', ref936.get());
            subs__.addSub(ref936.addEventListener('change', function(_, ref, val) {
              node1135.attr('class', val);
            }));
            
          }
          subs__.addSub(ref936.rebind());
          
          var val741 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val741 !== null) {
            subs__.addSub(mobl.domBind(node1135, 'tap', val741));
          }
          
          
          var tmp4830 = mobl.ref(null);
          
          
          var tmp4829 = mobl.ref(null);
          
          var nodes1848 = $("<span>");
          node1135.append(nodes1848);
          subs__.addSub((mobl.label)(moreLabel, tmp4829, tmp4830, function(_, callback) {
            var root2403 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2403); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1848;
            nodes1848 = node.contents();
            oldNodes.replaceWith(nodes1848);
          }));
          node1134.append(node1135);
          
          
          
        } else {
          
        }
      };
      renderCond137();
      subs__.addSub(tmp4831.addEventListener('change', function() {
        renderCond137();
      }));
      
      callback(root2400); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1845;
      nodes1845 = node.contents();
      oldNodes.replaceWith(nodes1845);
    }));
    callback(root2399); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root2404 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1849 = $("<span>");
  root2404.append(nodes1849);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2405 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1136 = mobl.loadingSpan();
    root2405.append(node1136);
    var list178;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList178 = function() {
      var subs__ = listSubs__;
      list178 = items.get();
      list178.list(function(results178) {
        node1136.empty();
        for(var i196 = 0; i196 < results178.length; i196++) {
          (function() {
            var iternode178 = $("<span>");
            node1136.append(iternode178);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results178), i196), "_1");it = mobl.ref(mobl.ref(mobl.ref(results178), i196), "_2");
            
            var tmp4835 = mobl.ref(false);
            
            
            var tmp4834 = mobl.ref(null);
            
            
            var tmp4833 = mobl.ref(null);
            
            var nodes1850 = $("<span>");
            iternode178.append(nodes1850);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4833, tmp4834, tmp4835, function(_, callback) {
              var root2406 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp4832 = mobl.ref(null);
              
              var nodes1851 = $("<span>");
              root2406.append(nodes1851);
              subs__.addSub((ui.checkBox)(checked, it, tmp4832, function(_, callback) {
                var root2407 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2407); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1851;
                nodes1851 = node.contents();
                oldNodes.replaceWith(nodes1851);
              }));
              callback(root2406); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1850;
              nodes1850 = node.contents();
              oldNodes.replaceWith(nodes1850);
            }));
            
            var oldNodes = iternode178;
            iternode178 = iternode178.contents();
            oldNodes.replaceWith(iternode178);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list178.addEventListener('change', function() { listSubs__.unsubscribe(); renderList178(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList178(true); }));
      });
    };
    renderList178();
    
    callback(root2405); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1849;
    nodes1849 = node.contents();
    oldNodes.replaceWith(nodes1849);
  }));
  callback(root2404); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root2408 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll422) {
    coll422 = coll422.reverse();
    function processOne50() {
      var it;
      it = coll422.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll422.length > 0) processOne50(); else rest50();
      
    }
    function rest50() {
      
      var tmp4839 = mobl.ref(null);
      
      var nodes1852 = $("<span>");
      root2408.append(nodes1852);
      subs__.addSub((ui.header)(title, tmp4839, function(_, callback) {
        var root2409 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp4836 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp4837 = mobl.ref(mobl._("Back", []));
        
        var nodes1853 = $("<span>");
        root2409.append(nodes1853);
        subs__.addSub((ui.backButton)(tmp4837, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4836, function(_, callback) {
          var root2410 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2410); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1853;
          nodes1853 = node.contents();
          oldNodes.replaceWith(nodes1853);
        }));
        
        var tmp4838 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll421) {
                               coll421 = coll421.reverse();
                               function processOne49() {
                                 var checked;var it;
                                 var tmp4891 = coll421.pop();
                                 checked = tmp4891._1;it = tmp4891._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll421.length > 0) processOne49(); else rest49();
                                   
                                 } else {
                                   {
                                     
                                     if(coll421.length > 0) processOne49(); else rest49();
                                     
                                   }
                                 }
                               }
                               function rest49() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll421.length > 0) processOne49(); else rest49();
                             });
                             
                           });
        
        var nodes1854 = $("<span>");
        root2409.append(nodes1854);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4838, function(_, callback) {
          var root2411 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2411); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1854;
          nodes1854 = node.contents();
          oldNodes.replaceWith(nodes1854);
        }));
        callback(root2409); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1852;
        nodes1852 = node.contents();
        oldNodes.replaceWith(nodes1852);
      }));
      var nodes1855 = $("<span>");
      root2408.append(nodes1855);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root2412 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2412); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1855;
        nodes1855 = node.contents();
        oldNodes.replaceWith(nodes1855);
      }));
      callback(root2408); return subs__;
      
      
    }
    if(coll422.length > 0) processOne50(); else rest50();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root2413 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp4841 = mobl.ref(null);
  
  
  var tmp4840 = mobl.ref(null);
  
  var nodes1856 = $("<span>");
  root2413.append(nodes1856);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp4840, tmp4841, function(_, callback) {
    var root2414 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2414); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1856;
    nodes1856 = node.contents();
    oldNodes.replaceWith(nodes1856);
  }));
  
  var tmp4842 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp4842.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp4842.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp4842.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp4842.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp4842.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1857 = $("<span>");
  root2413.append(nodes1857);
  subs__.addSub((ui.masterDetail)(tmp4842, masterItem, detailItem, function(_, callback) {
    var root2415 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2415); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1857;
    nodes1857 = node.contents();
    oldNodes.replaceWith(nodes1857);
  }));
  callback(root2413); return subs__;
  
  
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
  var root2416 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp4855 = mobl.ref(null);
  
  
  var tmp4854 = mobl.ref(null);
  
  
  var tmp4853 = mobl.ref(null);
  
  var nodes1858 = $("<span>");
  root2416.append(nodes1858);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp4853, tmp4854, tmp4855, function(_, callback) {
    var root2417 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1137 = mobl.loadingSpan();
    root2417.append(node1137);
    var list179;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList179 = function() {
      var subs__ = listSubs__;
      list179 = sections.get();
      list179.list(function(results179) {
        node1137.empty();
        for(var i197 = 0; i197 < results179.length; i197++) {
          (function() {
            var iternode179 = $("<span>");
            node1137.append(iternode179);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results179), i197), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results179), i197), "_2");
            
            var tmp4846 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4846.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4846.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp4846.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp4846.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp4845 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp4848 = mobl.ref(null);
            
            
            var tmp4847 = mobl.ref(null);
            
            var nodes1859 = $("<span>");
            iternode179.append(nodes1859);
            subs__.addSub((mobl.span)(tmp4846, tmp4847, tmp4845, tmp4848, function(_, callback) {
              var root2418 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp4844 = mobl.ref(null);
              
              
              var tmp4843 = mobl.ref(null);
              
              var nodes1860 = $("<span>");
              root2418.append(nodes1860);
              subs__.addSub((mobl.label)(sectionName, tmp4843, tmp4844, function(_, callback) {
                var root2419 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2419); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1860;
                nodes1860 = node.contents();
                oldNodes.replaceWith(nodes1860);
              }));
              callback(root2418); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1859;
              nodes1859 = node.contents();
              oldNodes.replaceWith(nodes1859);
            }));
            
            var tmp4849 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4849.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4849.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp4849.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp4849.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp4852 = mobl.ref(null);
            
            
            var tmp4851 = mobl.ref(null);
            
            
            var tmp4850 = mobl.ref(null);
            
            var nodes1861 = $("<span>");
            iternode179.append(nodes1861);
            subs__.addSub((mobl.block)(tmp4849, tmp4850, tmp4851, tmp4852, function(_, callback) {
              var root2420 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1862 = $("<span>");
              root2420.append(nodes1862);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl364();
              }));
              
              function renderControl364() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root2421 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2421); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1862;
                  nodes1862 = node.contents();
                  oldNodes.replaceWith(nodes1862);
                }));
              }
              renderControl364();
              callback(root2420); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1861;
              nodes1861 = node.contents();
              oldNodes.replaceWith(nodes1861);
            }));
            
            var oldNodes = iternode179;
            iternode179 = iternode179.contents();
            oldNodes.replaceWith(iternode179);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list179.addEventListener('change', function() { listSubs__.unsubscribe(); renderList179(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList179(true); }));
      });
    };
    renderList179();
    
    callback(root2417); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1858;
    nodes1858 = node.contents();
    oldNodes.replaceWith(nodes1858);
  }));
  callback(root2416); return subs__;
  
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
  var root2422 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1138 = $("<table>");
  
  var ref937 = mobl.ref(ui.tableStyle);
  if(ref937.get() !== null) {
    node1138.attr('class', ref937.get());
    subs__.addSub(ref937.addEventListener('change', function(_, ref, val) {
      node1138.attr('class', val);
    }));
    
  }
  subs__.addSub(ref937.rebind());
  
  var nodes1863 = $("<span>");
  node1138.append(nodes1863);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl365();
  }));
  
  function renderControl365() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2423 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2423); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1863;
      nodes1863 = node.contents();
      oldNodes.replaceWith(nodes1863);
    }));
  }
  renderControl365();
  root2422.append(node1138);
  callback(root2422); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root2424 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1139 = $("<tr>");
  
  var ref938 = mobl.ref(ui.trStyle);
  if(ref938.get() !== null) {
    node1139.attr('class', ref938.get());
    subs__.addSub(ref938.addEventListener('change', function(_, ref, val) {
      node1139.attr('class', val);
    }));
    
  }
  subs__.addSub(ref938.rebind());
  
  var nodes1864 = $("<span>");
  node1139.append(nodes1864);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl366();
  }));
  
  function renderControl366() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2425 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2425); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1864;
      nodes1864 = node.contents();
      oldNodes.replaceWith(nodes1864);
    }));
  }
  renderControl366();
  root2424.append(node1139);
  callback(root2424); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root2426 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1140 = $("<td>");
  
  var ref939 = width;
  if(ref939.get() !== null) {
    node1140.attr('width', ref939.get());
    subs__.addSub(ref939.addEventListener('change', function(_, ref, val) {
      node1140.attr('width', val);
    }));
    
  }
  subs__.addSub(ref939.rebind());
  
  var ref940 = mobl.ref(ui.tdStyle);
  if(ref940.get() !== null) {
    node1140.attr('class', ref940.get());
    subs__.addSub(ref940.addEventListener('change', function(_, ref, val) {
      node1140.attr('class', val);
    }));
    
  }
  subs__.addSub(ref940.rebind());
  
  var nodes1865 = $("<span>");
  node1140.append(nodes1865);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl367();
  }));
  
  function renderControl367() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2427 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2427); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1865;
      nodes1865 = node.contents();
      oldNodes.replaceWith(nodes1865);
    }));
  }
  renderControl367();
  root2426.append(node1140);
  callback(root2426); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root2428 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1141 = $("<td>");
  
  var ref941 = width;
  if(ref941.get() !== null) {
    node1141.attr('width', ref941.get());
    subs__.addSub(ref941.addEventListener('change', function(_, ref, val) {
      node1141.attr('width', val);
    }));
    
  }
  subs__.addSub(ref941.rebind());
  
  var ref942 = mobl.ref(ui.tdStyle);
  if(ref942.get() !== null) {
    node1141.attr('class', ref942.get());
    subs__.addSub(ref942.addEventListener('change', function(_, ref, val) {
      node1141.attr('class', val);
    }));
    
  }
  subs__.addSub(ref942.rebind());
  
  var nodes1866 = $("<span>");
  node1141.append(nodes1866);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl368();
  }));
  
  function renderControl368() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2429 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2429); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1866;
      nodes1866 = node.contents();
      oldNodes.replaceWith(nodes1866);
    }));
  }
  renderControl368();
  root2428.append(node1141);
  callback(root2428); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root2430 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1142 = $("<td>");
  
  var ref943 = width;
  if(ref943.get() !== null) {
    node1142.attr('width', ref943.get());
    subs__.addSub(ref943.addEventListener('change', function(_, ref, val) {
      node1142.attr('width', val);
    }));
    
  }
  subs__.addSub(ref943.rebind());
  
  var ref944 = mobl.ref(ui.tdStyle);
  if(ref944.get() !== null) {
    node1142.attr('class', ref944.get());
    subs__.addSub(ref944.addEventListener('change', function(_, ref, val) {
      node1142.attr('class', val);
    }));
    
  }
  subs__.addSub(ref944.rebind());
  
  
  var node1143 = $("<strong>");
  
  var nodes1867 = $("<span>");
  node1143.append(nodes1867);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl369();
  }));
  
  function renderControl369() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2431 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2431); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1867;
      nodes1867 = node.contents();
      oldNodes.replaceWith(nodes1867);
    }));
  }
  renderControl369();
  node1142.append(node1143);
  root2430.append(node1142);
  callback(root2430); return subs__;
  
  
  
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
  var root2432 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1868 = $("<span>");
  root2432.append(nodes1868);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2433 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1144 = mobl.loadingSpan();
    root2433.append(node1144);
    var list180;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList180 = function() {
      var subs__ = listSubs__;
      list180 = items.get();
      list180.list(function(results180) {
        node1144.empty();
        for(var i198 = 0; i198 < results180.length; i198++) {
          (function() {
            var iternode180 = $("<span>");
            node1144.append(iternode180);
            var it;
            it = mobl.ref(mobl.ref(results180), i198);
            
            var tmp4856 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp4893 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp4858 = mobl.ref(false);
            
            
            var tmp4857 = mobl.ref(null);
            
            var nodes1869 = $("<span>");
            iternode180.append(nodes1869);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp4856, tmp4857, tmp4858, function(_, callback) {
              var root2434 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1870 = $("<span>");
              root2434.append(nodes1870);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl370();
              }));
              
              function renderControl370() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root2435 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2435); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1870;
                  nodes1870 = node.contents();
                  oldNodes.replaceWith(nodes1870);
                }));
              }
              renderControl370();
              callback(root2434); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1869;
              nodes1869 = node.contents();
              oldNodes.replaceWith(nodes1869);
            }));
            
            var oldNodes = iternode180;
            iternode180 = iternode180.contents();
            oldNodes.replaceWith(iternode180);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list180.addEventListener('change', function() { listSubs__.unsubscribe(); renderList180(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList180(true); }));
      });
    };
    renderList180();
    
    callback(root2433); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1868;
    nodes1868 = node.contents();
    oldNodes.replaceWith(nodes1868);
  }));
  callback(root2432); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root2436 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp4860 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp4859 = mobl.ref("Back");
  
  var nodes1871 = $("<span>");
  root2436.append(nodes1871);
  subs__.addSub((ui.backButton)(tmp4859, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4860, function(_, callback) {
    var root2437 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2437); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1871;
    nodes1871 = node.contents();
    oldNodes.replaceWith(nodes1871);
  }));
  var nodes1872 = $("<span>");
  root2436.append(nodes1872);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl371();
  }));
  
  function renderControl371() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root2438 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2438); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1872;
      nodes1872 = node.contents();
      oldNodes.replaceWith(nodes1872);
    }));
  }
  renderControl371();
  callback(root2436); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root2439 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1145 = $("<div>");
  
  var ref948 = mobl.ref(ui.customHeaderStyle);
  if(ref948.get() !== null) {
    node1145.attr('class', ref948.get());
    subs__.addSub(ref948.addEventListener('change', function(_, ref, val) {
      node1145.attr('class', val);
    }));
    
  }
  subs__.addSub(ref948.rebind());
  
  var val742 = onclick.get();
  if(val742 !== null) {
    subs__.addSub(mobl.domBind(node1145, 'tap', val742));
  }
  
  
  var node1146 = $("<div>");
  
  var ref947 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref947.get() !== null) {
    node1146.attr('class', ref947.get());
    subs__.addSub(ref947.addEventListener('change', function(_, ref, val) {
      node1146.attr('class', val);
    }));
    
  }
  subs__.addSub(ref947.rebind());
  
  
  var node1147 = $("<div>");
  
  var ref945 = text;
  node1147.text(""+ref945.get());
  var ignore164 = false;
  subs__.addSub(ref945.addEventListener('change', function(_, ref, val) {
    if(ignore164) return;
    node1147.text(""+val);
  }));
  subs__.addSub(ref945.rebind());
  
  
  var ref946 = mobl.ref(ui.customHeaderTextStyle);
  if(ref946.get() !== null) {
    node1147.attr('class', ref946.get());
    subs__.addSub(ref946.addEventListener('change', function(_, ref, val) {
      node1147.attr('class', val);
    }));
    
  }
  subs__.addSub(ref946.rebind());
  
  node1146.append(node1147);
  node1145.append(node1146);
  var nodes1873 = $("<span>");
  node1145.append(nodes1873);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl372();
  }));
  
  function renderControl372() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2440 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2440); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1873;
      nodes1873 = node.contents();
      oldNodes.replaceWith(nodes1873);
    }));
  }
  renderControl372();
  root2439.append(node1145);
  callback(root2439); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root2441 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref949 = mobl.ref(ui.customItemStyle);
  if(ref949.get() !== null) {
    el.attr('class', ref949.get());
    subs__.addSub(ref949.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref949.rebind());
  
  var ref950 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref950.get() !== null) {
    el.attr('class', ref950.get());
    subs__.addSub(ref950.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref950.rebind());
  
  var val743 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp4894 = result__;
                                           function after149(result__) {
                                             var tmp4895 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after149);if(result__ !== undefined) after149(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp4896 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val743 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val743));
  }
  
  var nodes1874 = $("<span>");
  el.append(nodes1874);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl373();
  }));
  
  function renderControl373() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2442 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2442); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1874;
      nodes1874 = node.contents();
      oldNodes.replaceWith(nodes1874);
    }));
  }
  renderControl373();
  root2441.append(el);
  callback(root2441); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root2443 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node1148 = $("<div>");
  node1148.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node1150 = mobl.loadingSpan();
  node1148.append(node1150);
  var list182;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList182 = function() {
    var subs__ = listSubs__;
    list182 = tabs.get();
    list182.list(function(results182) {
      node1150.empty();
      for(var i200 = 0; i200 < results182.length; i200++) {
        (function() {
          var iternode182 = $("<span>");
          node1150.append(iternode182);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results182), i200), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results182), i200), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results182), i200), "_3");
          
          var tmp4861 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp4861.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp4861.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp4861.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp4861.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp4864 = mobl.ref(null);
          
          
          var tmp4863 = mobl.ref(null);
          
          
          var tmp4862 = mobl.ref(null);
          
          var nodes1878 = $("<span>");
          iternode182.append(nodes1878);
          subs__.addSub((mobl.block)(tmp4861, tmp4862, tmp4863, tmp4864, function(_, callback) {
            var root2447 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes1879 = $("<span>");
            root2447.append(nodes1879);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root2448 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1880 = $("<span>");
              root2448.append(nodes1880);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl374();
              }));
              
              function renderControl374() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root2449 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2449); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1880;
                  nodes1880 = node.contents();
                  oldNodes.replaceWith(nodes1880);
                }));
              }
              renderControl374();
              callback(root2448); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1879;
              nodes1879 = node.contents();
              oldNodes.replaceWith(nodes1879);
            }));
            callback(root2447); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes1878;
            nodes1878 = node.contents();
            oldNodes.replaceWith(nodes1878);
          }));
          
          var oldNodes = iternode182;
          iternode182 = iternode182.contents();
          oldNodes.replaceWith(iternode182);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list182.addEventListener('change', function() { listSubs__.unsubscribe(); renderList182(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList182(true); }));
    });
  };
  renderList182();
  
  root2443.append(node1148);
  
  var tmp4873 = mobl.ref(null);
  
  
  var tmp4872 = mobl.ref(null);
  
  
  var tmp4871 = mobl.ref(null);
  
  var nodes1875 = $("<span>");
  root2443.append(nodes1875);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp4871, tmp4872, tmp4873, function(_, callback) {
    var root2444 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1149 = mobl.loadingSpan();
    root2444.append(node1149);
    var list181;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList181 = function() {
      var subs__ = listSubs__;
      list181 = tabs.get();
      list181.list(function(results181) {
        node1149.empty();
        for(var i199 = 0; i199 < results181.length; i199++) {
          (function() {
            var iternode181 = $("<span>");
            node1149.append(iternode181);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results181), i199), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results181), i199), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results181), i199), "_3");
            
            var tmp4868 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp4868.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4868.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp4868.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp4868.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp4867 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp4870 = mobl.ref(null);
            
            
            var tmp4869 = mobl.ref(null);
            
            var nodes1876 = $("<span>");
            iternode181.append(nodes1876);
            subs__.addSub((mobl.span)(tmp4868, tmp4869, tmp4867, tmp4870, function(_, callback) {
              var root2445 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp4866 = mobl.ref(null);
              
              
              var tmp4865 = mobl.ref(null);
              
              var nodes1877 = $("<span>");
              root2445.append(nodes1877);
              subs__.addSub((mobl.label)(tabName, tmp4865, tmp4866, function(_, callback) {
                var root2446 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2446); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1877;
                nodes1877 = node.contents();
                oldNodes.replaceWith(nodes1877);
              }));
              callback(root2445); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1876;
              nodes1876 = node.contents();
              oldNodes.replaceWith(nodes1876);
            }));
            
            var oldNodes = iternode181;
            iternode181 = iternode181.contents();
            oldNodes.replaceWith(iternode181);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list181.addEventListener('change', function() { listSubs__.unsubscribe(); renderList181(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList181(true); }));
      });
    };
    renderList181();
    
    callback(root2444); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1875;
    nodes1875 = node.contents();
    oldNodes.replaceWith(nodes1875);
  }));
  callback(root2443); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root2450 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1151 = $("<div>");
  node1151.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node1151.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  root2450.append(node1151);
  callback(root2450); return subs__;
  
  
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
