mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1758 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node571 = $("<span>");
  root1758.append(node571);
  var condSubs138 = new mobl.CompSubscription();
  subs__.addSub(condSubs138);
  var oldValue138;
  var renderCond138 = function() {
    var value262 = value.get();
    if(oldValue138 === value262) return;
    oldValue138 = value262;
    var subs__ = condSubs138;
    subs__.unsubscribe();
    node571.empty();
    if(value262) {
      var nodes1326 = $("<span>");
      node571.append(nodes1326);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl261();
      }));
      
      function renderControl261() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1759 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1759); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1326;
          nodes1326 = node.contents();
          oldNodes.replaceWith(nodes1326);
        }));
      }
      renderControl261();
      
      
    } else {
      
      var tmp2937 = mobl.ref(null);
      
      
      var tmp2936 = mobl.ref(null);
      
      
      var tmp2935 = mobl.ref(null);
      
      var nodes1327 = $("<span>");
      node571.append(nodes1327);
      subs__.addSub((mobl.block)(style, tmp2935, tmp2936, tmp2937, function(_, callback) {
        var root1760 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp2927 = mobl.ref(null);
        
        
        var tmp2926 = mobl.ref(null);
        
        var nodes1328 = $("<span>");
        root1760.append(nodes1328);
        subs__.addSub((mobl.label)(loadingMessage, tmp2926, tmp2927, function(_, callback) {
          var root1761 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1761); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1328;
          nodes1328 = node.contents();
          oldNodes.replaceWith(nodes1328);
        }));
        
        var tmp2929 = mobl.ref("middle");
        
        
        var tmp2928 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp2934 = mobl.ref(null);
        
        
        var tmp2933 = mobl.ref(null);
        
        
        var tmp2932 = mobl.ref(null);
        
        
        var tmp2931 = mobl.ref(null);
        
        
        var tmp2930 = mobl.ref(null);
        
        var nodes1329 = $("<span>");
        root1760.append(nodes1329);
        subs__.addSub((ui.image)(tmp2928, tmp2930, tmp2931, tmp2932, tmp2933, tmp2929, tmp2934, function(_, callback) {
          var root1762 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1762); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1329;
          nodes1329 = node.contents();
          oldNodes.replaceWith(nodes1329);
        }));
        callback(root1760); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1327;
        nodes1327 = node.contents();
        oldNodes.replaceWith(nodes1327);
      }));
      
      
    }
  };
  renderCond138();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond138();
  }));
  
  callback(root1758); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root1763 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node572 = $("<div>");
  
  var ref493 = mobl.ref(ui.headerStyle);
  if(ref493.get() !== null) {
    node572.attr('class', ref493.get());
    subs__.addSub(ref493.addEventListener('change', function(_, ref, val) {
      node572.attr('class', val);
    }));
    
  }
  subs__.addSub(ref493.rebind());
  
  var val280 = onclick.get();
  if(val280 !== null) {
    subs__.addSub(mobl.domBind(node572, 'tap', val280));
  }
  
  
  var node573 = $("<div>");
  
  var ref492 = mobl.ref(ui.headerContainerStyle);
  if(ref492.get() !== null) {
    node573.attr('class', ref492.get());
    subs__.addSub(ref492.addEventListener('change', function(_, ref, val) {
      node573.attr('class', val);
    }));
    
  }
  subs__.addSub(ref492.rebind());
  
  
  var node574 = $("<div>");
  
  var ref490 = text;
  node574.text(""+ref490.get());
  var ignore100 = false;
  subs__.addSub(ref490.addEventListener('change', function(_, ref, val) {
    if(ignore100) return;
    node574.text(""+val);
  }));
  subs__.addSub(ref490.rebind());
  
  
  var ref491 = mobl.ref(ui.headerTextStyle);
  if(ref491.get() !== null) {
    node574.attr('class', ref491.get());
    subs__.addSub(ref491.addEventListener('change', function(_, ref, val) {
      node574.attr('class', val);
    }));
    
  }
  subs__.addSub(ref491.rebind());
  
  node573.append(node574);
  node572.append(node573);
  var nodes1330 = $("<span>");
  node572.append(nodes1330);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl262();
  }));
  
  function renderControl262() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1764 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1764); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1330;
      nodes1330 = node.contents();
      oldNodes.replaceWith(nodes1330);
    }));
  }
  renderControl262();
  root1763.append(node572);
  callback(root1763); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1765 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref494 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref494.get() !== null) {
    sp.attr('class', ref494.get());
    subs__.addSub(ref494.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref494.rebind());
  
  var val281 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val281 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val281));
  }
  
  var val282 = function(event, callback) {
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
  if(val282 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val282));
  }
  
  var val283 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after90(result__) {
                    var tmp3009 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after90);if(result__ !== undefined) after90(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val283 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val283));
  }
  
  var val284 = function(event, callback) {
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
  if(val284 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val284));
  }
  
  var ref495 = text;
  sp.text(""+ref495.get());
  var ignore101 = false;
  subs__.addSub(ref495.addEventListener('change', function(_, ref, val) {
    if(ignore101) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref495.rebind());
  
  
  root1765.append(sp);
  callback(root1765); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1766 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1331 = $("<span>");
  root1766.append(nodes1331);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1767 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1767); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1331;
    nodes1331 = node.contents();
    oldNodes.replaceWith(nodes1331);
  }));
  callback(root1766); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1768 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1332 = $("<span>");
  root1768.append(nodes1332);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1769 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1769); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1332;
    nodes1332 = node.contents();
    oldNodes.replaceWith(nodes1332);
  }));
  callback(root1768); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1770 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node575 = $("<ul>");
  
  var ref496 = mobl.ref(ui.groupStyle);
  if(ref496.get() !== null) {
    node575.attr('class', ref496.get());
    subs__.addSub(ref496.addEventListener('change', function(_, ref, val) {
      node575.attr('class', val);
    }));
    
  }
  subs__.addSub(ref496.rebind());
  
  var nodes1333 = $("<span>");
  node575.append(nodes1333);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl263();
  }));
  
  function renderControl263() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1771); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1333;
      nodes1333 = node.contents();
      oldNodes.replaceWith(nodes1333);
    }));
  }
  renderControl263();
  root1770.append(node575);
  callback(root1770); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1772 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node576 = $("<img>");
  
  var ref497 = url;
  if(ref497.get() !== null) {
    node576.attr('src', ref497.get());
    subs__.addSub(ref497.addEventListener('change', function(_, ref, val) {
      node576.attr('src', val);
    }));
    
  }
  subs__.addSub(ref497.rebind());
  
  var ref498 = width;
  if(ref498.get() !== null) {
    node576.attr('width', ref498.get());
    subs__.addSub(ref498.addEventListener('change', function(_, ref, val) {
      node576.attr('width', val);
    }));
    
  }
  subs__.addSub(ref498.rebind());
  
  var ref499 = height;
  if(ref499.get() !== null) {
    node576.attr('height', ref499.get());
    subs__.addSub(ref499.addEventListener('change', function(_, ref, val) {
      node576.attr('height', val);
    }));
    
  }
  subs__.addSub(ref499.rebind());
  
  var ref500 = style;
  if(ref500.get() !== null) {
    node576.attr('class', ref500.get());
    subs__.addSub(ref500.addEventListener('change', function(_, ref, val) {
      node576.attr('class', val);
    }));
    
  }
  subs__.addSub(ref500.rebind());
  
  var val285 = onclick.get();
  if(val285 !== null) {
    subs__.addSub(mobl.domBind(node576, 'tap', val285));
  }
  
  var ref501 = valign;
  if(ref501.get() !== null) {
    node576.attr('valign', ref501.get());
    subs__.addSub(ref501.addEventListener('change', function(_, ref, val) {
      node576.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref501.rebind());
  
  var ref502 = align;
  if(ref502.get() !== null) {
    node576.attr('align', ref502.get());
    subs__.addSub(ref502.addEventListener('change', function(_, ref, val) {
      node576.attr('align', val);
    }));
    
  }
  subs__.addSub(ref502.rebind());
  
  root1772.append(node576);
  callback(root1772); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1773 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref503 = mobl.ref(ui.itemStyle);
  if(ref503.get() !== null) {
    el.attr('class', ref503.get());
    subs__.addSub(ref503.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref503.rebind());
  
  var ref504 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref504.get() !== null) {
    el.attr('class', ref504.get());
    subs__.addSub(ref504.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref504.rebind());
  
  var val286 = onswipe.get();
  if(val286 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val286));
  }
  
  var val287 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp3010 = result__;
                                           function after91(result__) {
                                             var tmp3011 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after91);if(result__ !== undefined) after91(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp3012 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val287 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val287));
  }
  
  var nodes1334 = $("<span>");
  el.append(nodes1334);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl264();
  }));
  
  function renderControl264() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1774 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1774); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1334;
      nodes1334 = node.contents();
      oldNodes.replaceWith(nodes1334);
    }));
  }
  renderControl264();
  root1773.append(el);
  callback(root1773); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1775 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node577 = $("<input>");
  node577.attr('type', "checkbox");
  
  var ref506 = b;
  node577.attr('checked', !!ref506.get());
  subs__.addSub(ref506.addEventListener('change', function(_, ref, val) {
    if(ref === ref506) node577.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node577, 'change', function() {
    b.set(!!node577.attr('checked'));
  }));
  
  var val289 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val289 !== null) {
    subs__.addSub(mobl.domBind(node577, 'tap', val289));
  }
  
  var val290 = onchange.get();
  if(val290 !== null) {
    subs__.addSub(mobl.domBind(node577, 'change', val290));
  }
  
  root1775.append(node577);
  
  root1775.append(" ");
  
  var node578 = $("<span>");
  
  var ref505 = label;
  node578.text(""+ref505.get());
  var ignore102 = false;
  subs__.addSub(ref505.addEventListener('change', function(_, ref, val) {
    if(ignore102) return;
    node578.text(""+val);
  }));
  subs__.addSub(ref505.rebind());
  
  
  var val288 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after92(result__) {
                    var tmp3013 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after92);if(result__ !== undefined) after92(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val288 !== null) {
    subs__.addSub(mobl.domBind(node578, 'tap', val288));
  }
  
  root1775.append(node578);
  callback(root1775); return subs__;
  
  
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
  var root1776 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node579 = $("<span>");
  root1776.append(node579);
  var condSubs139 = new mobl.CompSubscription();
  subs__.addSub(condSubs139);
  var oldValue139;
  var renderCond139 = function() {
    var value263 = label.get();
    if(oldValue139 === value263) return;
    oldValue139 = value263;
    var subs__ = condSubs139;
    subs__.unsubscribe();
    node579.empty();
    if(value263) {
      
      var tmp2938 = mobl.ref(null);
      
      var nodes1335 = $("<span>");
      node579.append(nodes1335);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp2938, function(_, callback) {
        var root1777 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1777); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1335;
        nodes1335 = node.contents();
        oldNodes.replaceWith(nodes1335);
      }));
      
      
    } else {
      
    }
  };
  renderCond139();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond139();
  }));
  
  
  var node580 = $("<span>");
  root1776.append(node580);
  var condSubs140 = new mobl.CompSubscription();
  subs__.addSub(condSubs140);
  var oldValue140;
  var renderCond140 = function() {
    var value264 = validator.get();
    if(oldValue140 === value264) return;
    oldValue140 = value264;
    var subs__ = condSubs140;
    subs__.unsubscribe();
    node580.empty();
    if(value264) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after96(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp3014 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node581 = $("<input>");
        node581.attr('type', "text");
        
        var ref507 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref507.get() !== null) {
          node581.attr('class', ref507.get());
          subs__.addSub(ref507.addEventListener('change', function(_, ref, val) {
            node581.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node581.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node581.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node581.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref507.rebind());
        
        var ref508 = placeholder;
        if(ref508.get() !== null) {
          node581.attr('placeholder', ref508.get());
          subs__.addSub(ref508.addEventListener('change', function(_, ref, val) {
            node581.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref508.rebind());
        
        var ref509 = temp;
        node581.val(""+ref509.get());
        var ignore103 = false;
        subs__.addSub(ref509.addEventListener('change', function(_, ref, val) {
          if(ignore103) return;
          node581.val(""+val);
        }));
        subs__.addSub(ref509.rebind());
        
        subs__.addSub(mobl.domBind(node581, 'keyup change', function() {
          ignore103 = true;
          temp.set(mobl.stringTomobl__String(node581.val()));
          ignore103 = false;
        }));
        
        
        var val291 = onchange.get();
        if(val291 !== null) {
          subs__.addSub(mobl.domBind(node581, 'change', val291));
        }
        
        var val292 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after93(result__) {
                          var tmp3015 = result__;
                          function after94(result__) {
                            var tmp3016 = result__;
                            var result__ = tmp3016;
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
                          var result__ = validator.get()(temp.get(), after94);if(result__ !== undefined) after94(result__);
                        }
                        var result__ = onkeyup.get()(event, after93);if(result__ !== undefined) after93(result__);
                      } else {
                        {
                          function after95(result__) {
                            var tmp3016 = result__;
                            var result__ = tmp3016;
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
                          var result__ = validator.get()(temp.get(), after95);if(result__ !== undefined) after95(result__);
                        }
                      }
                    };
        if(val292 !== null) {
          subs__.addSub(mobl.domBind(node581, 'keyup', val292));
        }
        
        var val293 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val293 !== null) {
          subs__.addSub(mobl.domBind(node581, 'blur', val293));
        }
        
        node580.append(node581);
        
        var tmp2939 = mobl.ref(null);
        
        var nodes1336 = $("<span>");
        node580.append(nodes1336);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp2939, function(_, callback) {
          var root1778 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1778); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1336;
          nodes1336 = node.contents();
          oldNodes.replaceWith(nodes1336);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after96);if(result__ !== undefined) after96(result__);
    } else {
      
      var node582 = $("<input>");
      node582.attr('type', "text");
      
      var ref510 = style;
      if(ref510.get() !== null) {
        node582.attr('class', ref510.get());
        subs__.addSub(ref510.addEventListener('change', function(_, ref, val) {
          node582.attr('class', val);
        }));
        
      }
      subs__.addSub(ref510.rebind());
      
      var ref511 = placeholder;
      if(ref511.get() !== null) {
        node582.attr('placeholder', ref511.get());
        subs__.addSub(ref511.addEventListener('change', function(_, ref, val) {
          node582.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref511.rebind());
      
      var ref512 = s;
      node582.val(""+ref512.get());
      var ignore104 = false;
      subs__.addSub(ref512.addEventListener('change', function(_, ref, val) {
        if(ignore104) return;
        node582.val(""+val);
      }));
      subs__.addSub(ref512.rebind());
      
      subs__.addSub(mobl.domBind(node582, 'keyup change', function() {
        ignore104 = true;
        s.set(mobl.stringTomobl__String(node582.val()));
        ignore104 = false;
      }));
      
      
      var val294 = onchange.get();
      if(val294 !== null) {
        subs__.addSub(mobl.domBind(node582, 'change', val294));
      }
      
      var val295 = onkeyup.get();
      if(val295 !== null) {
        subs__.addSub(mobl.domBind(node582, 'keyup', val295));
      }
      
      var val296 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val296 !== null) {
        subs__.addSub(mobl.domBind(node582, 'blur', val296));
      }
      
      node580.append(node582);
      
      
    }
  };
  renderCond140();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond140();
  }));
  
  callback(root1776); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1779 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1337 = $("<span>");
  root1779.append(nodes1337);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1780 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1780); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1337;
    nodes1337 = node.contents();
    oldNodes.replaceWith(nodes1337);
  }));
  callback(root1779); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1781 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after97(result__) {
      var tmp3017 = result__;
      var result__ = tmp3017;
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
    var result__ = validator.get()(n2, after97);if(result__ !== undefined) after97(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes1338 = $("<span>");
  root1781.append(nodes1338);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1782 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1782); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1338;
    nodes1338 = node.contents();
    oldNodes.replaceWith(nodes1338);
  }));
  callback(root1781); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1783 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node583 = $("<span>");
  root1783.append(node583);
  var condSubs141 = new mobl.CompSubscription();
  subs__.addSub(condSubs141);
  var oldValue141;
  var renderCond141 = function() {
    var value265 = label.get();
    if(oldValue141 === value265) return;
    oldValue141 = value265;
    var subs__ = condSubs141;
    subs__.unsubscribe();
    node583.empty();
    if(value265) {
      
      var node584 = $("<span>");
      node584.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref516 = label;
      node584.text(""+ref516.get());
      var ignore106 = false;
      subs__.addSub(ref516.addEventListener('change', function(_, ref, val) {
        if(ignore106) return;
        node584.text(""+val);
      }));
      subs__.addSub(ref516.rebind());
      
      
      node583.append(node584);
      
      var node585 = $("<span>");
      node585.attr('style', "float: left");
      
      
      var node586 = $("<input>");
      node586.attr('type', "password");
      
      var ref513 = style;
      if(ref513.get() !== null) {
        node586.attr('class', ref513.get());
        subs__.addSub(ref513.addEventListener('change', function(_, ref, val) {
          node586.attr('class', val);
        }));
        
      }
      subs__.addSub(ref513.rebind());
      
      var ref514 = placeholder;
      if(ref514.get() !== null) {
        node586.attr('placeholder', ref514.get());
        subs__.addSub(ref514.addEventListener('change', function(_, ref, val) {
          node586.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref514.rebind());
      
      var ref515 = s;
      node586.val(""+ref515.get());
      var ignore105 = false;
      subs__.addSub(ref515.addEventListener('change', function(_, ref, val) {
        if(ignore105) return;
        node586.val(""+val);
      }));
      subs__.addSub(ref515.rebind());
      
      subs__.addSub(mobl.domBind(node586, 'keyup change', function() {
        ignore105 = true;
        s.set(mobl.stringTomobl__String(node586.val()));
        ignore105 = false;
      }));
      
      
      var val297 = onchange.get();
      if(val297 !== null) {
        subs__.addSub(mobl.domBind(node586, 'change', val297));
      }
      
      var val298 = onkeyup.get();
      if(val298 !== null) {
        subs__.addSub(mobl.domBind(node586, 'keyup', val298));
      }
      
      var val299 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val299 !== null) {
        subs__.addSub(mobl.domBind(node586, 'blur', val299));
      }
      
      node585.append(node586);
      node583.append(node585);
      
      
      
      
    } else {
      
      var node587 = $("<input>");
      node587.attr('type', "password");
      
      var ref517 = style;
      if(ref517.get() !== null) {
        node587.attr('class', ref517.get());
        subs__.addSub(ref517.addEventListener('change', function(_, ref, val) {
          node587.attr('class', val);
        }));
        
      }
      subs__.addSub(ref517.rebind());
      
      var ref518 = placeholder;
      if(ref518.get() !== null) {
        node587.attr('placeholder', ref518.get());
        subs__.addSub(ref518.addEventListener('change', function(_, ref, val) {
          node587.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref518.rebind());
      
      var ref519 = s;
      node587.val(""+ref519.get());
      var ignore107 = false;
      subs__.addSub(ref519.addEventListener('change', function(_, ref, val) {
        if(ignore107) return;
        node587.val(""+val);
      }));
      subs__.addSub(ref519.rebind());
      
      subs__.addSub(mobl.domBind(node587, 'keyup change', function() {
        ignore107 = true;
        s.set(mobl.stringTomobl__String(node587.val()));
        ignore107 = false;
      }));
      
      
      var val300 = onchange.get();
      if(val300 !== null) {
        subs__.addSub(mobl.domBind(node587, 'change', val300));
      }
      
      var val301 = onkeyup.get();
      if(val301 !== null) {
        subs__.addSub(mobl.domBind(node587, 'keyup', val301));
      }
      
      var val302 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val302 !== null) {
        subs__.addSub(mobl.domBind(node587, 'blur', val302));
      }
      
      node583.append(node587);
      
      
    }
  };
  renderCond141();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond141();
  }));
  
  callback(root1783); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1784 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref524 = style;
  if(ref524.get() !== null) {
    sel.attr('class', ref524.get());
    subs__.addSub(ref524.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref524.rebind());
  
  var val303 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after98(result__) {
                    var tmp3019 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after98);if(result__ !== undefined) after98(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val303 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val303));
  }
  
  
  var node588 = mobl.loadingSpan();
  sel.append(node588);
  var list131;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList131 = function() {
    var subs__ = listSubs__;
    list131 = options.get();
    list131.list(function(results261) {
      node588.empty();
      for(var i133 = 0; i133 < results261.length; i133++) {
        (function() {
          var iternode131 = $("<span>");
          node588.append(iternode131);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results261), i133), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results261), i133), "_2");
          
          var node589 = $("<option>");
          
          var ref520 = optionDescription;
          node589.text(""+ref520.get());
          var ignore108 = false;
          subs__.addSub(ref520.addEventListener('change', function(_, ref, val) {
            if(ignore108) return;
            node589.text(""+val);
          }));
          subs__.addSub(ref520.rebind());
          
          
          var ref521 = optionStyle;
          if(ref521.get() !== null) {
            node589.attr('class', ref521.get());
            subs__.addSub(ref521.addEventListener('change', function(_, ref, val) {
              node589.attr('class', val);
            }));
            
          }
          subs__.addSub(ref521.rebind());
          
          var ref522 = optionValue;
          if(ref522.get() !== null) {
            node589.attr('value', ref522.get());
            subs__.addSub(ref522.addEventListener('change', function(_, ref, val) {
              node589.attr('value', val);
            }));
            
          }
          subs__.addSub(ref522.rebind());
          
          var ref523 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref523.get() !== null) {
            node589.attr('selected', ref523.get());
            subs__.addSub(ref523.addEventListener('change', function(_, ref, val) {
              node589.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node589.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node589.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref523.rebind());
          
          iternode131.append(node589);
          
          var oldNodes = iternode131;
          iternode131 = iternode131.contents();
          oldNodes.replaceWith(iternode131);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list131.addEventListener('change', function() { listSubs__.unsubscribe(); renderList131(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList131(true); }));
    });
  };
  renderList131();
  
  root1784.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1784); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root1785 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp2948 = mobl.ref(null);
  
  
  var tmp2947 = mobl.ref(null);
  
  
  var tmp2946 = mobl.ref(null);
  
  var nodes1339 = $("<span>");
  root1785.append(nodes1339);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp2946, tmp2947, tmp2948, function(_, callback) {
    var root1786 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node590 = mobl.loadingSpan();
    root1786.append(node590);
    var list132;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList132 = function() {
      var subs__ = listSubs__;
      list132 = tabs.get();
      list132.list(function(results262) {
        node590.empty();
        for(var i134 = 0; i134 < results262.length; i134++) {
          (function() {
            var iternode132 = $("<span>");
            node590.append(iternode132);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results262), i134), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results262), i134), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results262), i134), "_3");
            
            var tmp2943 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp2943.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp2943.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp2943.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp2943.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp2942 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp2945 = mobl.ref(null);
            
            
            var tmp2944 = mobl.ref(null);
            
            var nodes1340 = $("<span>");
            iternode132.append(nodes1340);
            subs__.addSub((mobl.span)(tmp2943, tmp2944, tmp2942, tmp2945, function(_, callback) {
              var root1787 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp2941 = mobl.ref(null);
              
              
              var tmp2940 = mobl.ref(null);
              
              var nodes1341 = $("<span>");
              root1787.append(nodes1341);
              subs__.addSub((mobl.label)(tabName, tmp2940, tmp2941, function(_, callback) {
                var root1788 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1788); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1341;
                nodes1341 = node.contents();
                oldNodes.replaceWith(nodes1341);
              }));
              callback(root1787); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1340;
              nodes1340 = node.contents();
              oldNodes.replaceWith(nodes1340);
            }));
            
            var oldNodes = iternode132;
            iternode132 = iternode132.contents();
            oldNodes.replaceWith(iternode132);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list132.addEventListener('change', function() { listSubs__.unsubscribe(); renderList132(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList132(true); }));
      });
    };
    renderList132();
    
    callback(root1786); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1339;
    nodes1339 = node.contents();
    oldNodes.replaceWith(nodes1339);
  }));
  
  var node591 = mobl.loadingSpan();
  root1785.append(node591);
  var list133;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList133 = function() {
    var subs__ = listSubs__;
    list133 = tabs.get();
    list133.list(function(results263) {
      node591.empty();
      for(var i135 = 0; i135 < results263.length; i135++) {
        (function() {
          var iternode133 = $("<span>");
          node591.append(iternode133);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results263), i135), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results263), i135), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results263), i135), "_3");
          
          var tmp2949 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp2949.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp2949.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp2949.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp2949.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp2952 = mobl.ref(null);
          
          
          var tmp2951 = mobl.ref(null);
          
          
          var tmp2950 = mobl.ref(null);
          
          var nodes1342 = $("<span>");
          iternode133.append(nodes1342);
          subs__.addSub((mobl.block)(tmp2949, tmp2950, tmp2951, tmp2952, function(_, callback) {
            var root1789 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes1343 = $("<span>");
            root1789.append(nodes1343);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root1790 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1344 = $("<span>");
              root1790.append(nodes1344);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl265();
              }));
              
              function renderControl265() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root1791 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1791); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1344;
                  nodes1344 = node.contents();
                  oldNodes.replaceWith(nodes1344);
                }));
              }
              renderControl265();
              callback(root1790); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1343;
              nodes1343 = node.contents();
              oldNodes.replaceWith(nodes1343);
            }));
            callback(root1789); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes1342;
            nodes1342 = node.contents();
            oldNodes.replaceWith(nodes1342);
          }));
          
          var oldNodes = iternode133;
          iternode133 = iternode133.contents();
          oldNodes.replaceWith(iternode133);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list133.addEventListener('change', function() { listSubs__.unsubscribe(); renderList133(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList133(true); }));
    });
  };
  renderList133();
  
  callback(root1785); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1792 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node592 = $("<div>");
  
  var ref528 = mobl.ref(ui.searchboxStyle);
  if(ref528.get() !== null) {
    node592.attr('class', ref528.get());
    subs__.addSub(ref528.addEventListener('change', function(_, ref, val) {
      node592.attr('class', val);
    }));
    
  }
  subs__.addSub(ref528.rebind());
  
  
  var node593 = $("<input>");
  node593.attr('type', "search");
  
  var ref525 = mobl.ref(ui.searchBoxInputStyle);
  if(ref525.get() !== null) {
    node593.attr('class', ref525.get());
    subs__.addSub(ref525.addEventListener('change', function(_, ref, val) {
      node593.attr('class', val);
    }));
    
  }
  subs__.addSub(ref525.rebind());
  
  var ref526 = placeholder;
  if(ref526.get() !== null) {
    node593.attr('placeholder', ref526.get());
    subs__.addSub(ref526.addEventListener('change', function(_, ref, val) {
      node593.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref526.rebind());
  
  var ref527 = s;
  node593.val(""+ref527.get());
  var ignore109 = false;
  subs__.addSub(ref527.addEventListener('change', function(_, ref, val) {
    if(ignore109) return;
    node593.val(""+val);
  }));
  subs__.addSub(ref527.rebind());
  
  subs__.addSub(mobl.domBind(node593, 'keyup change', function() {
    ignore109 = true;
    s.set(mobl.stringTomobl__String(node593.val()));
    ignore109 = false;
  }));
  
  
  var val304 = onsearch.get();
  if(val304 !== null) {
    subs__.addSub(mobl.domBind(node593, 'change', val304));
  }
  
  var val305 = onkeyup.get();
  if(val305 !== null) {
    subs__.addSub(mobl.domBind(node593, 'keyup', val305));
  }
  node593.attr('autocorrect', false);
  node593.attr('autocapitalize', false);
  node593.attr('autocomplete', false);
  
  node592.append(node593);
  root1792.append(node592);
  callback(root1792); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1793 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref529 = mobl.ref(ui.contextMenuStyle);
  if(ref529.get() !== null) {
    menu.attr('class', ref529.get());
    subs__.addSub(ref529.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref529.rebind());
  
  var nodes1345 = $("<span>");
  menu.append(nodes1345);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl266();
  }));
  
  function renderControl266() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1794 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1794); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1345;
      nodes1345 = node.contents();
      oldNodes.replaceWith(nodes1345);
    }));
  }
  renderControl266();
  root1793.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val306 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp3022 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val306 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val306));
  }
  
  root1793.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1793); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1795 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp3008 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp3008.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node594 = $("<span>");
  root1795.append(node594);
  var condSubs142 = new mobl.CompSubscription();
  subs__.addSub(condSubs142);
  var oldValue142;
  var renderCond142 = function() {
    var value266 = tmp3008.get();
    if(oldValue142 === value266) return;
    oldValue142 = value266;
    var subs__ = condSubs142;
    subs__.unsubscribe();
    node594.empty();
    if(value266) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node595 = $("<div>");
        node595.attr('width', "100%");
        
        
        var node596 = $("<div>");
        node596.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1348 = $("<span>");
        node596.append(nodes1348);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1798 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node599 = mobl.loadingSpan();
          root1798.append(node599);
          var list134;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList134 = function() {
            var subs__ = listSubs__;
            list134 = items.get();
            list134.list(function(results264) {
              node599.empty();
              for(var i136 = 0; i136 < results264.length; i136++) {
                (function() {
                  var iternode134 = $("<span>");
                  node599.append(iternode134);
                  var it;
                  it = mobl.ref(mobl.ref(results264), i136);
                  
                  var tmp2966 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp2966.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp2966.set(it.get() == current.get());
                  }));
                  
                  
                  var node600 = $("<span>");
                  iternode134.append(node600);
                  var condSubs144 = new mobl.CompSubscription();
                  subs__.addSub(condSubs144);
                  var oldValue144;
                  var renderCond144 = function() {
                    var value268 = tmp2966.get();
                    if(oldValue144 === value268) return;
                    oldValue144 = value268;
                    var subs__ = condSubs144;
                    subs__.unsubscribe();
                    node600.empty();
                    if(value268) {
                      
                      var tmp2962 = mobl.ref(false);
                      
                      
                      var tmp2961 = mobl.ref(null);
                      
                      
                      var tmp2960 = mobl.ref(null);
                      
                      var nodes1349 = $("<span>");
                      node600.append(nodes1349);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp2960, tmp2961, tmp2962, function(_, callback) {
                        var root1799 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1350 = $("<span>");
                        root1799.append(nodes1350);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl268();
                        }));
                        
                        function renderControl268() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1800 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1800); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1350;
                            nodes1350 = node.contents();
                            oldNodes.replaceWith(nodes1350);
                          }));
                        }
                        renderControl268();
                        callback(root1799); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1349;
                        nodes1349 = node.contents();
                        oldNodes.replaceWith(nodes1349);
                      }));
                      
                      
                    } else {
                      
                      var tmp2964 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp2963 = mobl.ref(true);
                      
                      
                      var tmp2965 = mobl.ref(null);
                      
                      var nodes1351 = $("<span>");
                      node600.append(nodes1351);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2964, tmp2965, tmp2963, function(_, callback) {
                        var root1801 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1352 = $("<span>");
                        root1801.append(nodes1352);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl269();
                        }));
                        
                        function renderControl269() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1802 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1802); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1352;
                            nodes1352 = node.contents();
                            oldNodes.replaceWith(nodes1352);
                          }));
                        }
                        renderControl269();
                        callback(root1801); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1351;
                        nodes1351 = node.contents();
                        oldNodes.replaceWith(nodes1351);
                      }));
                      
                      
                    }
                  };
                  renderCond144();
                  subs__.addSub(tmp2966.addEventListener('change', function() {
                    renderCond144();
                  }));
                  
                  
                  var oldNodes = iternode134;
                  iternode134 = iternode134.contents();
                  oldNodes.replaceWith(iternode134);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list134.addEventListener('change', function() { listSubs__.unsubscribe(); renderList134(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList134(true); }));
            });
          };
          renderList134();
          
          callback(root1798); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1348;
          nodes1348 = node.contents();
          oldNodes.replaceWith(nodes1348);
        }));
        node595.append(node596);
        
        var node597 = $("<div>");
        node597.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node598 = $("<span>");
        node597.append(node598);
        var condSubs143 = new mobl.CompSubscription();
        subs__.addSub(condSubs143);
        var oldValue143;
        var renderCond143 = function() {
          var value267 = current.get();
          if(oldValue143 === value267) return;
          oldValue143 = value267;
          var subs__ = condSubs143;
          subs__.unsubscribe();
          node598.empty();
          if(value267) {
            var nodes1346 = $("<span>");
            node598.append(nodes1346);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl267();
            }));
            
            function renderControl267() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1796 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1796); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1346;
                nodes1346 = node.contents();
                oldNodes.replaceWith(nodes1346);
              }));
            }
            renderControl267();
            
            
          } else {
            
            var tmp2967 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp2969 = mobl.ref(null);
            
            
            var tmp2968 = mobl.ref(null);
            
            var nodes1347 = $("<span>");
            node598.append(nodes1347);
            subs__.addSub((mobl.label)(tmp2967, tmp2968, tmp2969, function(_, callback) {
              var root1797 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1797); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1347;
              nodes1347 = node.contents();
              oldNodes.replaceWith(nodes1347);
            }));
            
            
          }
        };
        renderCond143();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond143();
        }));
        
        node595.append(node597);
        node594.append(node595);
        
        
        
        
        
        
      });
    } else {
      var nodes1353 = $("<span>");
      node594.append(nodes1353);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1803 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node601 = mobl.loadingSpan();
        root1803.append(node601);
        var list135;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList135 = function() {
          var subs__ = listSubs__;
          list135 = items.get();
          list135.list(function(results265) {
            node601.empty();
            for(var i137 = 0; i137 < results265.length; i137++) {
              (function() {
                var iternode135 = $("<span>");
                node601.append(iternode135);
                var it;
                it = mobl.ref(mobl.ref(results265), i137);
                
                var tmp2953 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp3023 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp2955 = mobl.ref(false);
                
                
                var tmp2954 = mobl.ref(null);
                
                var nodes1354 = $("<span>");
                iternode135.append(nodes1354);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2953, tmp2954, tmp2955, function(_, callback) {
                  var root1804 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1355 = $("<span>");
                  root1804.append(nodes1355);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl270();
                  }));
                  
                  function renderControl270() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1805 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1805); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1355;
                      nodes1355 = node.contents();
                      oldNodes.replaceWith(nodes1355);
                    }));
                  }
                  renderControl270();
                  callback(root1804); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1354;
                  nodes1354 = node.contents();
                  oldNodes.replaceWith(nodes1354);
                }));
                
                var oldNodes = iternode135;
                iternode135 = iternode135.contents();
                oldNodes.replaceWith(iternode135);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list135.addEventListener('change', function() { listSubs__.unsubscribe(); renderList135(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList135(true); }));
          });
        };
        renderList135();
        
        callback(root1803); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1353;
        nodes1353 = node.contents();
        oldNodes.replaceWith(nodes1353);
      }));
      
      
    }
  };
  renderCond142();
  subs__.addSub(tmp3008.addEventListener('change', function() {
    renderCond142();
  }));
  
  callback(root1795); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1806 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2958 = mobl.ref("Detail");
  
  
  var tmp2959 = mobl.ref(null);
  
  var nodes1356 = $("<span>");
  root1806.append(nodes1356);
  subs__.addSub((ui.header)(tmp2958, tmp2959, function(_, callback) {
    var root1807 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp2957 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp2956 = mobl.ref("Back");
    
    var nodes1357 = $("<span>");
    root1807.append(nodes1357);
    subs__.addSub((ui.backButton)(tmp2956, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2957, function(_, callback) {
      var root1808 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1808); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1357;
      nodes1357 = node.contents();
      oldNodes.replaceWith(nodes1357);
    }));
    callback(root1807); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1356;
    nodes1356 = node.contents();
    oldNodes.replaceWith(nodes1356);
  }));
  var nodes1358 = $("<span>");
  root1806.append(nodes1358);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl271();
  }));
  
  function renderControl271() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1809); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1358;
      nodes1358 = node.contents();
      oldNodes.replaceWith(nodes1358);
    }));
  }
  renderControl271();
  callback(root1806); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1810 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1359 = $("<span>");
  root1810.append(nodes1359);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1811 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node602 = mobl.loadingSpan();
    root1811.append(node602);
    var list136;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList136 = function() {
      var subs__ = listSubs__;
      list136 = coll.get();
      list136.list(function(results266) {
        node602.empty();
        for(var i138 = 0; i138 < results266.length; i138++) {
          (function() {
            var iternode136 = $("<span>");
            node602.append(iternode136);
            var it;
            it = mobl.ref(mobl.ref(results266), i138);
            
            var tmp2976 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp2976.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp2976.set(it.get() == selected.get());
            }));
            
            
            var node603 = $("<span>");
            iternode136.append(node603);
            var condSubs145 = new mobl.CompSubscription();
            subs__.addSub(condSubs145);
            var oldValue145;
            var renderCond145 = function() {
              var value269 = tmp2976.get();
              if(oldValue145 === value269) return;
              oldValue145 = value269;
              var subs__ = condSubs145;
              subs__.unsubscribe();
              node603.empty();
              if(value269) {
                
                var tmp2972 = mobl.ref(false);
                
                
                var tmp2971 = mobl.ref(null);
                
                
                var tmp2970 = mobl.ref(null);
                
                var nodes1360 = $("<span>");
                node603.append(nodes1360);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2970, tmp2971, tmp2972, function(_, callback) {
                  var root1812 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1361 = $("<span>");
                  root1812.append(nodes1361);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl272();
                  }));
                  
                  function renderControl272() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1813 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1813); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1361;
                      nodes1361 = node.contents();
                      oldNodes.replaceWith(nodes1361);
                    }));
                  }
                  renderControl272();
                  callback(root1812); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1360;
                  nodes1360 = node.contents();
                  oldNodes.replaceWith(nodes1360);
                }));
                
                
              } else {
                
                var tmp2974 = mobl.ref(true);
                
                
                var tmp2973 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp2975 = mobl.ref(null);
                
                var nodes1362 = $("<span>");
                node603.append(nodes1362);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2973, tmp2975, tmp2974, function(_, callback) {
                  var root1814 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1363 = $("<span>");
                  root1814.append(nodes1363);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl273();
                  }));
                  
                  function renderControl273() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1815 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1815); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1363;
                      nodes1363 = node.contents();
                      oldNodes.replaceWith(nodes1363);
                    }));
                  }
                  renderControl273();
                  callback(root1814); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1362;
                  nodes1362 = node.contents();
                  oldNodes.replaceWith(nodes1362);
                }));
                
                
              }
            };
            renderCond145();
            subs__.addSub(tmp2976.addEventListener('change', function() {
              renderCond145();
            }));
            
            
            var oldNodes = iternode136;
            iternode136 = iternode136.contents();
            oldNodes.replaceWith(iternode136);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list136.addEventListener('change', function() { listSubs__.unsubscribe(); renderList136(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList136(true); }));
      });
    };
    renderList136();
    
    callback(root1811); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1359;
    nodes1359 = node.contents();
    oldNodes.replaceWith(nodes1359);
  }));
  callback(root1810); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root1816 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes1364 = $("<span>");
    root1816.append(nodes1364);
    subs__.addSub((ui.group)(function(_, callback) {
      var root1817 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp2980 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp2980.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp2980.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp2980.set(coll.get().limit(n.get()));
      }));
      
      
      var node604 = mobl.loadingSpan();
      root1817.append(node604);
      var list137;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList137 = function() {
        var subs__ = listSubs__;
        list137 = tmp2980.get();
        list137.list(function(results267) {
          node604.empty();
          for(var i139 = 0; i139 < results267.length; i139++) {
            (function() {
              var iternode137 = $("<span>");
              node604.append(iternode137);
              var it;
              it = mobl.ref(mobl.ref(results267), i139);
              
              var tmp2977 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp2979 = mobl.ref(false);
              
              
              var tmp2978 = mobl.ref(null);
              
              var nodes1365 = $("<span>");
              iternode137.append(nodes1365);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2977, tmp2978, tmp2979, function(_, callback) {
                var root1818 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1366 = $("<span>");
                root1818.append(nodes1366);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl274();
                }));
                
                function renderControl274() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root1819 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1819); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1366;
                    nodes1366 = node.contents();
                    oldNodes.replaceWith(nodes1366);
                  }));
                }
                renderControl274();
                callback(root1818); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1365;
                nodes1365 = node.contents();
                oldNodes.replaceWith(nodes1365);
              }));
              
              var oldNodes = iternode137;
              iternode137 = iternode137.contents();
              oldNodes.replaceWith(iternode137);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list137.addEventListener('change', function() { listSubs__.unsubscribe(); renderList137(true); }));
          subs__.addSub(tmp2980.addEventListener('change', function() { listSubs__.unsubscribe(); renderList137(true); }));
        });
      };
      renderList137();
      
      
      var tmp2983 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp2983.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp2983.set(n.get() < total.get());
      }));
      
      
      var node605 = $("<span>");
      root1817.append(node605);
      var condSubs146 = new mobl.CompSubscription();
      subs__.addSub(condSubs146);
      var oldValue146;
      var renderCond146 = function() {
        var value270 = tmp2983.get();
        if(oldValue146 === value270) return;
        oldValue146 = value270;
        var subs__ = condSubs146;
        subs__.unsubscribe();
        node605.empty();
        if(value270) {
          
          var node606 = $("<li>");
          
          var ref530 = mobl.ref(ui.loadMoreStyle);
          if(ref530.get() !== null) {
            node606.attr('class', ref530.get());
            subs__.addSub(ref530.addEventListener('change', function(_, ref, val) {
              node606.attr('class', val);
            }));
            
          }
          subs__.addSub(ref530.rebind());
          
          var val307 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val307 !== null) {
            subs__.addSub(mobl.domBind(node606, 'tap', val307));
          }
          
          
          var tmp2982 = mobl.ref(null);
          
          
          var tmp2981 = mobl.ref(null);
          
          var nodes1367 = $("<span>");
          node606.append(nodes1367);
          subs__.addSub((mobl.label)(moreLabel, tmp2981, tmp2982, function(_, callback) {
            var root1820 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1820); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1367;
            nodes1367 = node.contents();
            oldNodes.replaceWith(nodes1367);
          }));
          node605.append(node606);
          
          
          
        } else {
          
        }
      };
      renderCond146();
      subs__.addSub(tmp2983.addEventListener('change', function() {
        renderCond146();
      }));
      
      callback(root1817); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1364;
      nodes1364 = node.contents();
      oldNodes.replaceWith(nodes1364);
    }));
    callback(root1816); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1821 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1368 = $("<span>");
  root1821.append(nodes1368);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1822 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node607 = mobl.loadingSpan();
    root1822.append(node607);
    var list138;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList138 = function() {
      var subs__ = listSubs__;
      list138 = items.get();
      list138.list(function(results268) {
        node607.empty();
        for(var i140 = 0; i140 < results268.length; i140++) {
          (function() {
            var iternode138 = $("<span>");
            node607.append(iternode138);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results268), i140), "_1");it = mobl.ref(mobl.ref(mobl.ref(results268), i140), "_2");
            
            var tmp2987 = mobl.ref(false);
            
            
            var tmp2986 = mobl.ref(null);
            
            
            var tmp2985 = mobl.ref(null);
            
            var nodes1369 = $("<span>");
            iternode138.append(nodes1369);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2985, tmp2986, tmp2987, function(_, callback) {
              var root1823 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp2984 = mobl.ref(null);
              
              var nodes1370 = $("<span>");
              root1823.append(nodes1370);
              subs__.addSub((ui.checkBox)(checked, it, tmp2984, function(_, callback) {
                var root1824 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1824); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1370;
                nodes1370 = node.contents();
                oldNodes.replaceWith(nodes1370);
              }));
              callback(root1823); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1369;
              nodes1369 = node.contents();
              oldNodes.replaceWith(nodes1369);
            }));
            
            var oldNodes = iternode138;
            iternode138 = iternode138.contents();
            oldNodes.replaceWith(iternode138);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list138.addEventListener('change', function() { listSubs__.unsubscribe(); renderList138(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList138(true); }));
      });
    };
    renderList138();
    
    callback(root1822); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1368;
    nodes1368 = node.contents();
    oldNodes.replaceWith(nodes1368);
  }));
  callback(root1821); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1825 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll259) {
    coll259 = coll259.reverse();
    function processOne70() {
      var it;
      it = coll259.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll259.length > 0) processOne70(); else rest70();
      
    }
    function rest70() {
      
      var tmp2991 = mobl.ref(null);
      
      var nodes1371 = $("<span>");
      root1825.append(nodes1371);
      subs__.addSub((ui.header)(title, tmp2991, function(_, callback) {
        var root1826 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp2988 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp2989 = mobl.ref(mobl._("Back", []));
        
        var nodes1372 = $("<span>");
        root1826.append(nodes1372);
        subs__.addSub((ui.backButton)(tmp2989, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2988, function(_, callback) {
          var root1827 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1827); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1372;
          nodes1372 = node.contents();
          oldNodes.replaceWith(nodes1372);
        }));
        
        var tmp2990 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll258) {
                               coll258 = coll258.reverse();
                               function processOne69() {
                                 var checked;var it;
                                 var tmp3025 = coll258.pop();
                                 checked = tmp3025._1;it = tmp3025._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll258.length > 0) processOne69(); else rest69();
                                   
                                 } else {
                                   {
                                     
                                     if(coll258.length > 0) processOne69(); else rest69();
                                     
                                   }
                                 }
                               }
                               function rest69() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll258.length > 0) processOne69(); else rest69();
                             });
                             
                           });
        
        var nodes1373 = $("<span>");
        root1826.append(nodes1373);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2990, function(_, callback) {
          var root1828 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1828); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1373;
          nodes1373 = node.contents();
          oldNodes.replaceWith(nodes1373);
        }));
        callback(root1826); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1371;
        nodes1371 = node.contents();
        oldNodes.replaceWith(nodes1371);
      }));
      var nodes1374 = $("<span>");
      root1825.append(nodes1374);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1829 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1829); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1374;
        nodes1374 = node.contents();
        oldNodes.replaceWith(nodes1374);
      }));
      callback(root1825); return subs__;
      
      
    }
    if(coll259.length > 0) processOne70(); else rest70();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1830 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp2993 = mobl.ref(null);
  
  
  var tmp2992 = mobl.ref(null);
  
  var nodes1375 = $("<span>");
  root1830.append(nodes1375);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp2992, tmp2993, function(_, callback) {
    var root1831 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1831); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1375;
    nodes1375 = node.contents();
    oldNodes.replaceWith(nodes1375);
  }));
  
  var tmp2994 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp2994.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp2994.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp2994.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp2994.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp2994.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1376 = $("<span>");
  root1830.append(nodes1376);
  subs__.addSub((ui.masterDetail)(tmp2994, masterItem, detailItem, function(_, callback) {
    var root1832 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1832); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1376;
    nodes1376 = node.contents();
    oldNodes.replaceWith(nodes1376);
  }));
  callback(root1830); return subs__;
  
  
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
  var root1833 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp3007 = mobl.ref(null);
  
  
  var tmp3006 = mobl.ref(null);
  
  
  var tmp3005 = mobl.ref(null);
  
  var nodes1377 = $("<span>");
  root1833.append(nodes1377);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp3005, tmp3006, tmp3007, function(_, callback) {
    var root1834 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node608 = mobl.loadingSpan();
    root1834.append(node608);
    var list139;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList139 = function() {
      var subs__ = listSubs__;
      list139 = sections.get();
      list139.list(function(results269) {
        node608.empty();
        for(var i141 = 0; i141 < results269.length; i141++) {
          (function() {
            var iternode139 = $("<span>");
            node608.append(iternode139);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results269), i141), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results269), i141), "_2");
            
            var tmp2998 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp2998.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp2998.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp2998.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp2998.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp2997 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp3000 = mobl.ref(null);
            
            
            var tmp2999 = mobl.ref(null);
            
            var nodes1378 = $("<span>");
            iternode139.append(nodes1378);
            subs__.addSub((mobl.span)(tmp2998, tmp2999, tmp2997, tmp3000, function(_, callback) {
              var root1835 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp2996 = mobl.ref(null);
              
              
              var tmp2995 = mobl.ref(null);
              
              var nodes1379 = $("<span>");
              root1835.append(nodes1379);
              subs__.addSub((mobl.label)(sectionName, tmp2995, tmp2996, function(_, callback) {
                var root1836 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1836); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1379;
                nodes1379 = node.contents();
                oldNodes.replaceWith(nodes1379);
              }));
              callback(root1835); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1378;
              nodes1378 = node.contents();
              oldNodes.replaceWith(nodes1378);
            }));
            
            var tmp3001 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp3001.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp3001.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp3001.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp3001.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp3004 = mobl.ref(null);
            
            
            var tmp3003 = mobl.ref(null);
            
            
            var tmp3002 = mobl.ref(null);
            
            var nodes1380 = $("<span>");
            iternode139.append(nodes1380);
            subs__.addSub((mobl.block)(tmp3001, tmp3002, tmp3003, tmp3004, function(_, callback) {
              var root1837 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1381 = $("<span>");
              root1837.append(nodes1381);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl275();
              }));
              
              function renderControl275() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1838 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1838); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1381;
                  nodes1381 = node.contents();
                  oldNodes.replaceWith(nodes1381);
                }));
              }
              renderControl275();
              callback(root1837); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1380;
              nodes1380 = node.contents();
              oldNodes.replaceWith(nodes1380);
            }));
            
            var oldNodes = iternode139;
            iternode139 = iternode139.contents();
            oldNodes.replaceWith(iternode139);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list139.addEventListener('change', function() { listSubs__.unsubscribe(); renderList139(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList139(true); }));
      });
    };
    renderList139();
    
    callback(root1834); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1377;
    nodes1377 = node.contents();
    oldNodes.replaceWith(nodes1377);
  }));
  callback(root1833); return subs__;
  
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
  var root1839 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node609 = $("<table>");
  
  var ref531 = mobl.ref(ui.tableStyle);
  if(ref531.get() !== null) {
    node609.attr('class', ref531.get());
    subs__.addSub(ref531.addEventListener('change', function(_, ref, val) {
      node609.attr('class', val);
    }));
    
  }
  subs__.addSub(ref531.rebind());
  
  var nodes1382 = $("<span>");
  node609.append(nodes1382);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl276();
  }));
  
  function renderControl276() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1840 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1840); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1382;
      nodes1382 = node.contents();
      oldNodes.replaceWith(nodes1382);
    }));
  }
  renderControl276();
  root1839.append(node609);
  callback(root1839); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root1841 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node610 = $("<tr>");
  
  var ref532 = mobl.ref(ui.trStyle);
  if(ref532.get() !== null) {
    node610.attr('class', ref532.get());
    subs__.addSub(ref532.addEventListener('change', function(_, ref, val) {
      node610.attr('class', val);
    }));
    
  }
  subs__.addSub(ref532.rebind());
  
  var nodes1383 = $("<span>");
  node610.append(nodes1383);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl277();
  }));
  
  function renderControl277() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1842 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1842); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1383;
      nodes1383 = node.contents();
      oldNodes.replaceWith(nodes1383);
    }));
  }
  renderControl277();
  root1841.append(node610);
  callback(root1841); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root1843 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node611 = $("<td>");
  
  var ref533 = width;
  if(ref533.get() !== null) {
    node611.attr('width', ref533.get());
    subs__.addSub(ref533.addEventListener('change', function(_, ref, val) {
      node611.attr('width', val);
    }));
    
  }
  subs__.addSub(ref533.rebind());
  
  var ref534 = mobl.ref(ui.tdStyle);
  if(ref534.get() !== null) {
    node611.attr('class', ref534.get());
    subs__.addSub(ref534.addEventListener('change', function(_, ref, val) {
      node611.attr('class', val);
    }));
    
  }
  subs__.addSub(ref534.rebind());
  
  var nodes1384 = $("<span>");
  node611.append(nodes1384);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl278();
  }));
  
  function renderControl278() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1844 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1844); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1384;
      nodes1384 = node.contents();
      oldNodes.replaceWith(nodes1384);
    }));
  }
  renderControl278();
  root1843.append(node611);
  callback(root1843); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root1845 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node612 = $("<td>");
  
  var ref535 = width;
  if(ref535.get() !== null) {
    node612.attr('width', ref535.get());
    subs__.addSub(ref535.addEventListener('change', function(_, ref, val) {
      node612.attr('width', val);
    }));
    
  }
  subs__.addSub(ref535.rebind());
  
  var ref536 = mobl.ref(ui.tdStyle);
  if(ref536.get() !== null) {
    node612.attr('class', ref536.get());
    subs__.addSub(ref536.addEventListener('change', function(_, ref, val) {
      node612.attr('class', val);
    }));
    
  }
  subs__.addSub(ref536.rebind());
  
  var nodes1385 = $("<span>");
  node612.append(nodes1385);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl279();
  }));
  
  function renderControl279() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1846 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1846); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1385;
      nodes1385 = node.contents();
      oldNodes.replaceWith(nodes1385);
    }));
  }
  renderControl279();
  root1845.append(node612);
  callback(root1845); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root1847 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node613 = $("<td>");
  
  var ref537 = width;
  if(ref537.get() !== null) {
    node613.attr('width', ref537.get());
    subs__.addSub(ref537.addEventListener('change', function(_, ref, val) {
      node613.attr('width', val);
    }));
    
  }
  subs__.addSub(ref537.rebind());
  
  var ref538 = mobl.ref(ui.tdStyle);
  if(ref538.get() !== null) {
    node613.attr('class', ref538.get());
    subs__.addSub(ref538.addEventListener('change', function(_, ref, val) {
      node613.attr('class', val);
    }));
    
  }
  subs__.addSub(ref538.rebind());
  
  
  var node614 = $("<strong>");
  
  var nodes1386 = $("<span>");
  node614.append(nodes1386);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl280();
  }));
  
  function renderControl280() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1848 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1848); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1386;
      nodes1386 = node.contents();
      oldNodes.replaceWith(nodes1386);
    }));
  }
  renderControl280();
  node613.append(node614);
  root1847.append(node613);
  callback(root1847); return subs__;
  
  
  
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
  var root1849 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var slider = $("<div>");
  
  root1849.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  callback(root1849); return subs__;
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
