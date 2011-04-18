mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1125 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node446 = $("<span>");
  root1125.append(node446);
  var condSubs98 = new mobl.CompSubscription();
  subs__.addSub(condSubs98);
  var oldValue98;
  var renderCond98 = function() {
    var value210 = value.get();
    if(oldValue98 === value210) return;
    oldValue98 = value210;
    var subs__ = condSubs98;
    subs__.unsubscribe();
    node446.empty();
    if(value210) {
      var nodes805 = $("<span>");
      node446.append(nodes805);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl207();
      }));
      
      function renderControl207() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1126 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1126); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes805;
          nodes805 = node.contents();
          oldNodes.replaceWith(nodes805);
        }));
      }
      renderControl207();
      
      
    } else {
      
      var tmp1603 = mobl.ref(null);
      
      
      var tmp1602 = mobl.ref(null);
      
      
      var tmp1601 = mobl.ref(null);
      
      var nodes806 = $("<span>");
      node446.append(nodes806);
      subs__.addSub((mobl.block)(style, tmp1601, tmp1602, tmp1603, function(_, callback) {
        var root1127 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1593 = mobl.ref(null);
        
        
        var tmp1592 = mobl.ref(null);
        
        var nodes807 = $("<span>");
        root1127.append(nodes807);
        subs__.addSub((mobl.label)(loadingMessage, tmp1592, tmp1593, function(_, callback) {
          var root1128 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1128); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes807;
          nodes807 = node.contents();
          oldNodes.replaceWith(nodes807);
        }));
        
        var tmp1595 = mobl.ref("middle");
        
        
        var tmp1594 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp1600 = mobl.ref(null);
        
        
        var tmp1599 = mobl.ref(null);
        
        
        var tmp1598 = mobl.ref(null);
        
        
        var tmp1597 = mobl.ref(null);
        
        
        var tmp1596 = mobl.ref(null);
        
        var nodes808 = $("<span>");
        root1127.append(nodes808);
        subs__.addSub((ui.image)(tmp1594, tmp1596, tmp1597, tmp1598, tmp1599, tmp1595, tmp1600, function(_, callback) {
          var root1129 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1129); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes808;
          nodes808 = node.contents();
          oldNodes.replaceWith(nodes808);
        }));
        callback(root1127); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes806;
        nodes806 = node.contents();
        oldNodes.replaceWith(nodes806);
      }));
      
      
    }
  };
  renderCond98();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond98();
  }));
  
  callback(root1125); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root1130 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node447 = $("<div>");
  
  var ref444 = mobl.ref(ui.headerStyle);
  if(ref444.get() !== null) {
    node447.attr('class', ref444.get());
    subs__.addSub(ref444.addEventListener('change', function(_, ref, val) {
      node447.attr('class', val);
    }));
    
  }
  subs__.addSub(ref444.rebind());
  
  var val252 = onclick.get();
  if(val252 !== null) {
    subs__.addSub(mobl.domBind(node447, 'tap', val252));
  }
  
  
  var node448 = $("<div>");
  
  var ref443 = mobl.ref(ui.headerContainerStyle);
  if(ref443.get() !== null) {
    node448.attr('class', ref443.get());
    subs__.addSub(ref443.addEventListener('change', function(_, ref, val) {
      node448.attr('class', val);
    }));
    
  }
  subs__.addSub(ref443.rebind());
  
  
  var node449 = $("<div>");
  
  var ref441 = text;
  node449.text(""+ref441.get());
  var ignore90 = false;
  subs__.addSub(ref441.addEventListener('change', function(_, ref, val) {
    if(ignore90) return;
    node449.text(""+val);
  }));
  subs__.addSub(ref441.rebind());
  
  
  var ref442 = mobl.ref(ui.headerTextStyle);
  if(ref442.get() !== null) {
    node449.attr('class', ref442.get());
    subs__.addSub(ref442.addEventListener('change', function(_, ref, val) {
      node449.attr('class', val);
    }));
    
  }
  subs__.addSub(ref442.rebind());
  
  node448.append(node449);
  node447.append(node448);
  var nodes809 = $("<span>");
  node447.append(nodes809);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl208();
  }));
  
  function renderControl208() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1131); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes809;
      nodes809 = node.contents();
      oldNodes.replaceWith(nodes809);
    }));
  }
  renderControl208();
  root1130.append(node447);
  callback(root1130); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1132 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref445 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref445.get() !== null) {
    sp.attr('class', ref445.get());
    subs__.addSub(ref445.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref445.rebind());
  
  var val253 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val253 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val253));
  }
  
  var val254 = function(event, callback) {
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
  if(val254 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val254));
  }
  
  var val255 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after81(result__) {
                    var tmp1675 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after81);if(result__ !== undefined) after81(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val255 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val255));
  }
  
  var val256 = function(event, callback) {
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
  if(val256 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val256));
  }
  
  var ref446 = text;
  sp.text(""+ref446.get());
  var ignore91 = false;
  subs__.addSub(ref446.addEventListener('change', function(_, ref, val) {
    if(ignore91) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref446.rebind());
  
  
  root1132.append(sp);
  callback(root1132); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1133 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes810 = $("<span>");
  root1133.append(nodes810);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1134 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1134); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes810;
    nodes810 = node.contents();
    oldNodes.replaceWith(nodes810);
  }));
  callback(root1133); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1135 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes811 = $("<span>");
  root1135.append(nodes811);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1136 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1136); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes811;
    nodes811 = node.contents();
    oldNodes.replaceWith(nodes811);
  }));
  callback(root1135); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1137 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node450 = $("<ul>");
  
  var ref447 = mobl.ref(ui.groupStyle);
  if(ref447.get() !== null) {
    node450.attr('class', ref447.get());
    subs__.addSub(ref447.addEventListener('change', function(_, ref, val) {
      node450.attr('class', val);
    }));
    
  }
  subs__.addSub(ref447.rebind());
  
  var nodes812 = $("<span>");
  node450.append(nodes812);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl209();
  }));
  
  function renderControl209() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1138 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1138); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes812;
      nodes812 = node.contents();
      oldNodes.replaceWith(nodes812);
    }));
  }
  renderControl209();
  root1137.append(node450);
  callback(root1137); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1139 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node451 = $("<img>");
  
  var ref448 = url;
  if(ref448.get() !== null) {
    node451.attr('src', ref448.get());
    subs__.addSub(ref448.addEventListener('change', function(_, ref, val) {
      node451.attr('src', val);
    }));
    
  }
  subs__.addSub(ref448.rebind());
  
  var ref449 = width;
  if(ref449.get() !== null) {
    node451.attr('width', ref449.get());
    subs__.addSub(ref449.addEventListener('change', function(_, ref, val) {
      node451.attr('width', val);
    }));
    
  }
  subs__.addSub(ref449.rebind());
  
  var ref450 = height;
  if(ref450.get() !== null) {
    node451.attr('height', ref450.get());
    subs__.addSub(ref450.addEventListener('change', function(_, ref, val) {
      node451.attr('height', val);
    }));
    
  }
  subs__.addSub(ref450.rebind());
  
  var ref451 = style;
  if(ref451.get() !== null) {
    node451.attr('class', ref451.get());
    subs__.addSub(ref451.addEventListener('change', function(_, ref, val) {
      node451.attr('class', val);
    }));
    
  }
  subs__.addSub(ref451.rebind());
  
  var val257 = onclick.get();
  if(val257 !== null) {
    subs__.addSub(mobl.domBind(node451, 'tap', val257));
  }
  
  var ref452 = valign;
  if(ref452.get() !== null) {
    node451.attr('valign', ref452.get());
    subs__.addSub(ref452.addEventListener('change', function(_, ref, val) {
      node451.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref452.rebind());
  
  var ref453 = align;
  if(ref453.get() !== null) {
    node451.attr('align', ref453.get());
    subs__.addSub(ref453.addEventListener('change', function(_, ref, val) {
      node451.attr('align', val);
    }));
    
  }
  subs__.addSub(ref453.rebind());
  
  root1139.append(node451);
  callback(root1139); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1140 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref454 = mobl.ref(ui.itemStyle);
  if(ref454.get() !== null) {
    el.attr('class', ref454.get());
    subs__.addSub(ref454.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref454.rebind());
  
  var ref455 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref455.get() !== null) {
    el.attr('class', ref455.get());
    subs__.addSub(ref455.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref455.rebind());
  
  var val258 = onswipe.get();
  if(val258 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val258));
  }
  
  var val259 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1676 = result__;
                                           function after82(result__) {
                                             var tmp1677 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after82);if(result__ !== undefined) after82(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1678 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val259 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val259));
  }
  
  var nodes813 = $("<span>");
  el.append(nodes813);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl210();
  }));
  
  function renderControl210() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1141 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1141); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes813;
      nodes813 = node.contents();
      oldNodes.replaceWith(nodes813);
    }));
  }
  renderControl210();
  root1140.append(el);
  callback(root1140); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1142 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node452 = $("<input>");
  node452.attr('type', "checkbox");
  
  var ref457 = b;
  node452.attr('checked', !!ref457.get());
  subs__.addSub(ref457.addEventListener('change', function(_, ref, val) {
    if(ref === ref457) node452.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node452, 'change', function() {
    b.set(!!node452.attr('checked'));
  }));
  
  var val261 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val261 !== null) {
    subs__.addSub(mobl.domBind(node452, 'tap', val261));
  }
  
  var val262 = onchange.get();
  if(val262 !== null) {
    subs__.addSub(mobl.domBind(node452, 'change', val262));
  }
  
  root1142.append(node452);
  
  root1142.append(" ");
  
  var node453 = $("<span>");
  
  var ref456 = label;
  node453.text(""+ref456.get());
  var ignore92 = false;
  subs__.addSub(ref456.addEventListener('change', function(_, ref, val) {
    if(ignore92) return;
    node453.text(""+val);
  }));
  subs__.addSub(ref456.rebind());
  
  
  var val260 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after83(result__) {
                    var tmp1679 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after83);if(result__ !== undefined) after83(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val260 !== null) {
    subs__.addSub(mobl.domBind(node453, 'tap', val260));
  }
  
  root1142.append(node453);
  callback(root1142); return subs__;
  
  
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
  var root1143 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node454 = $("<span>");
  root1143.append(node454);
  var condSubs99 = new mobl.CompSubscription();
  subs__.addSub(condSubs99);
  var oldValue99;
  var renderCond99 = function() {
    var value211 = label.get();
    if(oldValue99 === value211) return;
    oldValue99 = value211;
    var subs__ = condSubs99;
    subs__.unsubscribe();
    node454.empty();
    if(value211) {
      
      var tmp1604 = mobl.ref(null);
      
      var nodes814 = $("<span>");
      node454.append(nodes814);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp1604, function(_, callback) {
        var root1144 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1144); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes814;
        nodes814 = node.contents();
        oldNodes.replaceWith(nodes814);
      }));
      
      
    } else {
      
    }
  };
  renderCond99();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond99();
  }));
  
  
  var node455 = $("<span>");
  root1143.append(node455);
  var condSubs100 = new mobl.CompSubscription();
  subs__.addSub(condSubs100);
  var oldValue100;
  var renderCond100 = function() {
    var value212 = validator.get();
    if(oldValue100 === value212) return;
    oldValue100 = value212;
    var subs__ = condSubs100;
    subs__.unsubscribe();
    node455.empty();
    if(value212) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after87(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1680 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node456 = $("<input>");
        node456.attr('type', "text");
        
        var ref458 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref458.get() !== null) {
          node456.attr('class', ref458.get());
          subs__.addSub(ref458.addEventListener('change', function(_, ref, val) {
            node456.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node456.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node456.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node456.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref458.rebind());
        
        var ref459 = placeholder;
        if(ref459.get() !== null) {
          node456.attr('placeholder', ref459.get());
          subs__.addSub(ref459.addEventListener('change', function(_, ref, val) {
            node456.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref459.rebind());
        
        var ref460 = temp;
        node456.val(""+ref460.get());
        var ignore93 = false;
        subs__.addSub(ref460.addEventListener('change', function(_, ref, val) {
          if(ignore93) return;
          node456.val(""+val);
        }));
        subs__.addSub(ref460.rebind());
        
        subs__.addSub(mobl.domBind(node456, 'keyup change', function() {
          ignore93 = true;
          temp.set(mobl.stringTomobl__String(node456.val()));
          ignore93 = false;
        }));
        
        
        var val263 = onchange.get();
        if(val263 !== null) {
          subs__.addSub(mobl.domBind(node456, 'change', val263));
        }
        
        var val264 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after84(result__) {
                          var tmp1681 = result__;
                          function after85(result__) {
                            var tmp1682 = result__;
                            var result__ = tmp1682;
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
                          var result__ = validator.get()(temp.get(), after85);if(result__ !== undefined) after85(result__);
                        }
                        var result__ = onkeyup.get()(event, after84);if(result__ !== undefined) after84(result__);
                      } else {
                        {
                          function after86(result__) {
                            var tmp1682 = result__;
                            var result__ = tmp1682;
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
                          var result__ = validator.get()(temp.get(), after86);if(result__ !== undefined) after86(result__);
                        }
                      }
                    };
        if(val264 !== null) {
          subs__.addSub(mobl.domBind(node456, 'keyup', val264));
        }
        
        var val265 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val265 !== null) {
          subs__.addSub(mobl.domBind(node456, 'blur', val265));
        }
        
        node455.append(node456);
        
        var tmp1605 = mobl.ref(null);
        
        var nodes815 = $("<span>");
        node455.append(nodes815);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp1605, function(_, callback) {
          var root1145 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1145); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes815;
          nodes815 = node.contents();
          oldNodes.replaceWith(nodes815);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after87);if(result__ !== undefined) after87(result__);
    } else {
      
      var node457 = $("<input>");
      node457.attr('type', "text");
      
      var ref461 = style;
      if(ref461.get() !== null) {
        node457.attr('class', ref461.get());
        subs__.addSub(ref461.addEventListener('change', function(_, ref, val) {
          node457.attr('class', val);
        }));
        
      }
      subs__.addSub(ref461.rebind());
      
      var ref462 = placeholder;
      if(ref462.get() !== null) {
        node457.attr('placeholder', ref462.get());
        subs__.addSub(ref462.addEventListener('change', function(_, ref, val) {
          node457.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref462.rebind());
      
      var ref463 = s;
      node457.val(""+ref463.get());
      var ignore94 = false;
      subs__.addSub(ref463.addEventListener('change', function(_, ref, val) {
        if(ignore94) return;
        node457.val(""+val);
      }));
      subs__.addSub(ref463.rebind());
      
      subs__.addSub(mobl.domBind(node457, 'keyup change', function() {
        ignore94 = true;
        s.set(mobl.stringTomobl__String(node457.val()));
        ignore94 = false;
      }));
      
      
      var val266 = onchange.get();
      if(val266 !== null) {
        subs__.addSub(mobl.domBind(node457, 'change', val266));
      }
      
      var val267 = onkeyup.get();
      if(val267 !== null) {
        subs__.addSub(mobl.domBind(node457, 'keyup', val267));
      }
      
      var val268 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val268 !== null) {
        subs__.addSub(mobl.domBind(node457, 'blur', val268));
      }
      
      node455.append(node457);
      
      
    }
  };
  renderCond100();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond100();
  }));
  
  callback(root1143); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1146 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes816 = $("<span>");
  root1146.append(nodes816);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1147 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1147); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes816;
    nodes816 = node.contents();
    oldNodes.replaceWith(nodes816);
  }));
  callback(root1146); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1148 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after88(result__) {
      var tmp1683 = result__;
      var result__ = tmp1683;
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
    var result__ = validator.get()(n2, after88);if(result__ !== undefined) after88(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes817 = $("<span>");
  root1148.append(nodes817);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1149 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1149); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes817;
    nodes817 = node.contents();
    oldNodes.replaceWith(nodes817);
  }));
  callback(root1148); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1150 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node458 = $("<span>");
  root1150.append(node458);
  var condSubs101 = new mobl.CompSubscription();
  subs__.addSub(condSubs101);
  var oldValue101;
  var renderCond101 = function() {
    var value213 = label.get();
    if(oldValue101 === value213) return;
    oldValue101 = value213;
    var subs__ = condSubs101;
    subs__.unsubscribe();
    node458.empty();
    if(value213) {
      
      var node459 = $("<span>");
      node459.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref467 = label;
      node459.text(""+ref467.get());
      var ignore96 = false;
      subs__.addSub(ref467.addEventListener('change', function(_, ref, val) {
        if(ignore96) return;
        node459.text(""+val);
      }));
      subs__.addSub(ref467.rebind());
      
      
      node458.append(node459);
      
      var node460 = $("<span>");
      node460.attr('style', "float: left");
      
      
      var node461 = $("<input>");
      node461.attr('type', "password");
      
      var ref464 = style;
      if(ref464.get() !== null) {
        node461.attr('class', ref464.get());
        subs__.addSub(ref464.addEventListener('change', function(_, ref, val) {
          node461.attr('class', val);
        }));
        
      }
      subs__.addSub(ref464.rebind());
      
      var ref465 = placeholder;
      if(ref465.get() !== null) {
        node461.attr('placeholder', ref465.get());
        subs__.addSub(ref465.addEventListener('change', function(_, ref, val) {
          node461.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref465.rebind());
      
      var ref466 = s;
      node461.val(""+ref466.get());
      var ignore95 = false;
      subs__.addSub(ref466.addEventListener('change', function(_, ref, val) {
        if(ignore95) return;
        node461.val(""+val);
      }));
      subs__.addSub(ref466.rebind());
      
      subs__.addSub(mobl.domBind(node461, 'keyup change', function() {
        ignore95 = true;
        s.set(mobl.stringTomobl__String(node461.val()));
        ignore95 = false;
      }));
      
      
      var val269 = onchange.get();
      if(val269 !== null) {
        subs__.addSub(mobl.domBind(node461, 'change', val269));
      }
      
      var val270 = onkeyup.get();
      if(val270 !== null) {
        subs__.addSub(mobl.domBind(node461, 'keyup', val270));
      }
      
      var val271 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val271 !== null) {
        subs__.addSub(mobl.domBind(node461, 'blur', val271));
      }
      
      node460.append(node461);
      node458.append(node460);
      
      
      
      
    } else {
      
      var node462 = $("<input>");
      node462.attr('type', "password");
      
      var ref468 = style;
      if(ref468.get() !== null) {
        node462.attr('class', ref468.get());
        subs__.addSub(ref468.addEventListener('change', function(_, ref, val) {
          node462.attr('class', val);
        }));
        
      }
      subs__.addSub(ref468.rebind());
      
      var ref469 = placeholder;
      if(ref469.get() !== null) {
        node462.attr('placeholder', ref469.get());
        subs__.addSub(ref469.addEventListener('change', function(_, ref, val) {
          node462.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref469.rebind());
      
      var ref470 = s;
      node462.val(""+ref470.get());
      var ignore97 = false;
      subs__.addSub(ref470.addEventListener('change', function(_, ref, val) {
        if(ignore97) return;
        node462.val(""+val);
      }));
      subs__.addSub(ref470.rebind());
      
      subs__.addSub(mobl.domBind(node462, 'keyup change', function() {
        ignore97 = true;
        s.set(mobl.stringTomobl__String(node462.val()));
        ignore97 = false;
      }));
      
      
      var val272 = onchange.get();
      if(val272 !== null) {
        subs__.addSub(mobl.domBind(node462, 'change', val272));
      }
      
      var val273 = onkeyup.get();
      if(val273 !== null) {
        subs__.addSub(mobl.domBind(node462, 'keyup', val273));
      }
      
      var val274 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val274 !== null) {
        subs__.addSub(mobl.domBind(node462, 'blur', val274));
      }
      
      node458.append(node462);
      
      
    }
  };
  renderCond101();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond101();
  }));
  
  callback(root1150); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1151 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref475 = style;
  if(ref475.get() !== null) {
    sel.attr('class', ref475.get());
    subs__.addSub(ref475.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref475.rebind());
  
  var val275 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after89(result__) {
                    var tmp1685 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after89);if(result__ !== undefined) after89(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val275 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val275));
  }
  
  
  var node463 = mobl.loadingSpan();
  sel.append(node463);
  var list99;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList99 = function() {
    var subs__ = listSubs__;
    list99 = options.get();
    list99.list(function(results227) {
      node463.empty();
      for(var i99 = 0; i99 < results227.length; i99++) {
        (function() {
          var iternode99 = $("<span>");
          node463.append(iternode99);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results227), i99), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results227), i99), "_2");
          
          var node464 = $("<option>");
          
          var ref471 = optionDescription;
          node464.text(""+ref471.get());
          var ignore98 = false;
          subs__.addSub(ref471.addEventListener('change', function(_, ref, val) {
            if(ignore98) return;
            node464.text(""+val);
          }));
          subs__.addSub(ref471.rebind());
          
          
          var ref472 = optionStyle;
          if(ref472.get() !== null) {
            node464.attr('class', ref472.get());
            subs__.addSub(ref472.addEventListener('change', function(_, ref, val) {
              node464.attr('class', val);
            }));
            
          }
          subs__.addSub(ref472.rebind());
          
          var ref473 = optionValue;
          if(ref473.get() !== null) {
            node464.attr('value', ref473.get());
            subs__.addSub(ref473.addEventListener('change', function(_, ref, val) {
              node464.attr('value', val);
            }));
            
          }
          subs__.addSub(ref473.rebind());
          
          var ref474 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref474.get() !== null) {
            node464.attr('selected', ref474.get());
            subs__.addSub(ref474.addEventListener('change', function(_, ref, val) {
              node464.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node464.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node464.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref474.rebind());
          
          iternode99.append(node464);
          
          var oldNodes = iternode99;
          iternode99 = iternode99.contents();
          oldNodes.replaceWith(iternode99);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list99.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
    });
  };
  renderList99();
  
  root1151.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1151); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root1152 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp1614 = mobl.ref(null);
  
  
  var tmp1613 = mobl.ref(null);
  
  
  var tmp1612 = mobl.ref(null);
  
  var nodes818 = $("<span>");
  root1152.append(nodes818);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp1612, tmp1613, tmp1614, function(_, callback) {
    var root1153 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node465 = mobl.loadingSpan();
    root1153.append(node465);
    var list100;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList100 = function() {
      var subs__ = listSubs__;
      list100 = tabs.get();
      list100.list(function(results228) {
        node465.empty();
        for(var i100 = 0; i100 < results228.length; i100++) {
          (function() {
            var iternode100 = $("<span>");
            node465.append(iternode100);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results228), i100), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results228), i100), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results228), i100), "_3");
            
            var tmp1609 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp1609.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1609.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp1609.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp1609.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp1608 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1611 = mobl.ref(null);
            
            
            var tmp1610 = mobl.ref(null);
            
            var nodes819 = $("<span>");
            iternode100.append(nodes819);
            subs__.addSub((mobl.span)(tmp1609, tmp1610, tmp1608, tmp1611, function(_, callback) {
              var root1154 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1607 = mobl.ref(null);
              
              
              var tmp1606 = mobl.ref(null);
              
              var nodes820 = $("<span>");
              root1154.append(nodes820);
              subs__.addSub((mobl.label)(tabName, tmp1606, tmp1607, function(_, callback) {
                var root1155 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1155); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes820;
                nodes820 = node.contents();
                oldNodes.replaceWith(nodes820);
              }));
              callback(root1154); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes819;
              nodes819 = node.contents();
              oldNodes.replaceWith(nodes819);
            }));
            
            var oldNodes = iternode100;
            iternode100 = iternode100.contents();
            oldNodes.replaceWith(iternode100);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list100.addEventListener('change', function() { listSubs__.unsubscribe(); renderList100(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList100(true); }));
      });
    };
    renderList100();
    
    callback(root1153); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes818;
    nodes818 = node.contents();
    oldNodes.replaceWith(nodes818);
  }));
  
  var node466 = mobl.loadingSpan();
  root1152.append(node466);
  var list101;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList101 = function() {
    var subs__ = listSubs__;
    list101 = tabs.get();
    list101.list(function(results229) {
      node466.empty();
      for(var i101 = 0; i101 < results229.length; i101++) {
        (function() {
          var iternode101 = $("<span>");
          node466.append(iternode101);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results229), i101), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results229), i101), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results229), i101), "_3");
          
          var tmp1615 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp1615.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp1615.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp1615.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp1615.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp1618 = mobl.ref(null);
          
          
          var tmp1617 = mobl.ref(null);
          
          
          var tmp1616 = mobl.ref(null);
          
          var nodes821 = $("<span>");
          iternode101.append(nodes821);
          subs__.addSub((mobl.block)(tmp1615, tmp1616, tmp1617, tmp1618, function(_, callback) {
            var root1156 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes822 = $("<span>");
            root1156.append(nodes822);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root1157 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes823 = $("<span>");
              root1157.append(nodes823);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl211();
              }));
              
              function renderControl211() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root1158 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1158); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes823;
                  nodes823 = node.contents();
                  oldNodes.replaceWith(nodes823);
                }));
              }
              renderControl211();
              callback(root1157); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes822;
              nodes822 = node.contents();
              oldNodes.replaceWith(nodes822);
            }));
            callback(root1156); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes821;
            nodes821 = node.contents();
            oldNodes.replaceWith(nodes821);
          }));
          
          var oldNodes = iternode101;
          iternode101 = iternode101.contents();
          oldNodes.replaceWith(iternode101);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list101.addEventListener('change', function() { listSubs__.unsubscribe(); renderList101(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList101(true); }));
    });
  };
  renderList101();
  
  callback(root1152); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1159 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node467 = $("<div>");
  
  var ref479 = mobl.ref(ui.searchboxStyle);
  if(ref479.get() !== null) {
    node467.attr('class', ref479.get());
    subs__.addSub(ref479.addEventListener('change', function(_, ref, val) {
      node467.attr('class', val);
    }));
    
  }
  subs__.addSub(ref479.rebind());
  
  
  var node468 = $("<input>");
  node468.attr('type', "search");
  
  var ref476 = mobl.ref(ui.searchBoxInputStyle);
  if(ref476.get() !== null) {
    node468.attr('class', ref476.get());
    subs__.addSub(ref476.addEventListener('change', function(_, ref, val) {
      node468.attr('class', val);
    }));
    
  }
  subs__.addSub(ref476.rebind());
  
  var ref477 = placeholder;
  if(ref477.get() !== null) {
    node468.attr('placeholder', ref477.get());
    subs__.addSub(ref477.addEventListener('change', function(_, ref, val) {
      node468.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref477.rebind());
  
  var ref478 = s;
  node468.val(""+ref478.get());
  var ignore99 = false;
  subs__.addSub(ref478.addEventListener('change', function(_, ref, val) {
    if(ignore99) return;
    node468.val(""+val);
  }));
  subs__.addSub(ref478.rebind());
  
  subs__.addSub(mobl.domBind(node468, 'keyup change', function() {
    ignore99 = true;
    s.set(mobl.stringTomobl__String(node468.val()));
    ignore99 = false;
  }));
  
  
  var val276 = onsearch.get();
  if(val276 !== null) {
    subs__.addSub(mobl.domBind(node468, 'change', val276));
  }
  
  var val277 = onkeyup.get();
  if(val277 !== null) {
    subs__.addSub(mobl.domBind(node468, 'keyup', val277));
  }
  node468.attr('autocorrect', false);
  node468.attr('autocapitalize', false);
  node468.attr('autocomplete', false);
  
  node467.append(node468);
  root1159.append(node467);
  callback(root1159); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1160 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref480 = mobl.ref(ui.contextMenuStyle);
  if(ref480.get() !== null) {
    menu.attr('class', ref480.get());
    subs__.addSub(ref480.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref480.rebind());
  
  var nodes824 = $("<span>");
  menu.append(nodes824);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl212();
  }));
  
  function renderControl212() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1161 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1161); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes824;
      nodes824 = node.contents();
      oldNodes.replaceWith(nodes824);
    }));
  }
  renderControl212();
  root1160.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val278 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1688 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val278 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val278));
  }
  
  root1160.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1160); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1162 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1674 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1674.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node469 = $("<span>");
  root1162.append(node469);
  var condSubs102 = new mobl.CompSubscription();
  subs__.addSub(condSubs102);
  var oldValue102;
  var renderCond102 = function() {
    var value214 = tmp1674.get();
    if(oldValue102 === value214) return;
    oldValue102 = value214;
    var subs__ = condSubs102;
    subs__.unsubscribe();
    node469.empty();
    if(value214) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node470 = $("<div>");
        node470.attr('width', "100%");
        
        
        var node471 = $("<div>");
        node471.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes827 = $("<span>");
        node471.append(nodes827);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1165 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node474 = mobl.loadingSpan();
          root1165.append(node474);
          var list102;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList102 = function() {
            var subs__ = listSubs__;
            list102 = items.get();
            list102.list(function(results230) {
              node474.empty();
              for(var i102 = 0; i102 < results230.length; i102++) {
                (function() {
                  var iternode102 = $("<span>");
                  node474.append(iternode102);
                  var it;
                  it = mobl.ref(mobl.ref(results230), i102);
                  
                  var tmp1632 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1632.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1632.set(it.get() == current.get());
                  }));
                  
                  
                  var node475 = $("<span>");
                  iternode102.append(node475);
                  var condSubs104 = new mobl.CompSubscription();
                  subs__.addSub(condSubs104);
                  var oldValue104;
                  var renderCond104 = function() {
                    var value216 = tmp1632.get();
                    if(oldValue104 === value216) return;
                    oldValue104 = value216;
                    var subs__ = condSubs104;
                    subs__.unsubscribe();
                    node475.empty();
                    if(value216) {
                      
                      var tmp1628 = mobl.ref(false);
                      
                      
                      var tmp1627 = mobl.ref(null);
                      
                      
                      var tmp1626 = mobl.ref(null);
                      
                      var nodes828 = $("<span>");
                      node475.append(nodes828);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp1626, tmp1627, tmp1628, function(_, callback) {
                        var root1166 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes829 = $("<span>");
                        root1166.append(nodes829);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl214();
                        }));
                        
                        function renderControl214() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1167 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1167); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes829;
                            nodes829 = node.contents();
                            oldNodes.replaceWith(nodes829);
                          }));
                        }
                        renderControl214();
                        callback(root1166); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes828;
                        nodes828 = node.contents();
                        oldNodes.replaceWith(nodes828);
                      }));
                      
                      
                    } else {
                      
                      var tmp1630 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp1629 = mobl.ref(true);
                      
                      
                      var tmp1631 = mobl.ref(null);
                      
                      var nodes830 = $("<span>");
                      node475.append(nodes830);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1630, tmp1631, tmp1629, function(_, callback) {
                        var root1168 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes831 = $("<span>");
                        root1168.append(nodes831);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl215();
                        }));
                        
                        function renderControl215() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1169 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1169); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes831;
                            nodes831 = node.contents();
                            oldNodes.replaceWith(nodes831);
                          }));
                        }
                        renderControl215();
                        callback(root1168); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes830;
                        nodes830 = node.contents();
                        oldNodes.replaceWith(nodes830);
                      }));
                      
                      
                    }
                  };
                  renderCond104();
                  subs__.addSub(tmp1632.addEventListener('change', function() {
                    renderCond104();
                  }));
                  
                  
                  var oldNodes = iternode102;
                  iternode102 = iternode102.contents();
                  oldNodes.replaceWith(iternode102);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list102.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
            });
          };
          renderList102();
          
          callback(root1165); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes827;
          nodes827 = node.contents();
          oldNodes.replaceWith(nodes827);
        }));
        node470.append(node471);
        
        var node472 = $("<div>");
        node472.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node473 = $("<span>");
        node472.append(node473);
        var condSubs103 = new mobl.CompSubscription();
        subs__.addSub(condSubs103);
        var oldValue103;
        var renderCond103 = function() {
          var value215 = current.get();
          if(oldValue103 === value215) return;
          oldValue103 = value215;
          var subs__ = condSubs103;
          subs__.unsubscribe();
          node473.empty();
          if(value215) {
            var nodes825 = $("<span>");
            node473.append(nodes825);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl213();
            }));
            
            function renderControl213() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1163 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1163); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes825;
                nodes825 = node.contents();
                oldNodes.replaceWith(nodes825);
              }));
            }
            renderControl213();
            
            
          } else {
            
            var tmp1633 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp1635 = mobl.ref(null);
            
            
            var tmp1634 = mobl.ref(null);
            
            var nodes826 = $("<span>");
            node473.append(nodes826);
            subs__.addSub((mobl.label)(tmp1633, tmp1634, tmp1635, function(_, callback) {
              var root1164 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1164); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes826;
              nodes826 = node.contents();
              oldNodes.replaceWith(nodes826);
            }));
            
            
          }
        };
        renderCond103();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond103();
        }));
        
        node470.append(node472);
        node469.append(node470);
        
        
        
        
        
        
      });
    } else {
      var nodes832 = $("<span>");
      node469.append(nodes832);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1170 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node476 = mobl.loadingSpan();
        root1170.append(node476);
        var list103;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList103 = function() {
          var subs__ = listSubs__;
          list103 = items.get();
          list103.list(function(results231) {
            node476.empty();
            for(var i103 = 0; i103 < results231.length; i103++) {
              (function() {
                var iternode103 = $("<span>");
                node476.append(iternode103);
                var it;
                it = mobl.ref(mobl.ref(results231), i103);
                
                var tmp1619 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp1689 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp1621 = mobl.ref(false);
                
                
                var tmp1620 = mobl.ref(null);
                
                var nodes833 = $("<span>");
                iternode103.append(nodes833);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1619, tmp1620, tmp1621, function(_, callback) {
                  var root1171 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes834 = $("<span>");
                  root1171.append(nodes834);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl216();
                  }));
                  
                  function renderControl216() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1172 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1172); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes834;
                      nodes834 = node.contents();
                      oldNodes.replaceWith(nodes834);
                    }));
                  }
                  renderControl216();
                  callback(root1171); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes833;
                  nodes833 = node.contents();
                  oldNodes.replaceWith(nodes833);
                }));
                
                var oldNodes = iternode103;
                iternode103 = iternode103.contents();
                oldNodes.replaceWith(iternode103);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list103.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
          });
        };
        renderList103();
        
        callback(root1170); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes832;
        nodes832 = node.contents();
        oldNodes.replaceWith(nodes832);
      }));
      
      
    }
  };
  renderCond102();
  subs__.addSub(tmp1674.addEventListener('change', function() {
    renderCond102();
  }));
  
  callback(root1162); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1173 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1624 = mobl.ref("Detail");
  
  
  var tmp1625 = mobl.ref(null);
  
  var nodes835 = $("<span>");
  root1173.append(nodes835);
  subs__.addSub((ui.header)(tmp1624, tmp1625, function(_, callback) {
    var root1174 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp1623 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp1622 = mobl.ref("Back");
    
    var nodes836 = $("<span>");
    root1174.append(nodes836);
    subs__.addSub((ui.backButton)(tmp1622, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1623, function(_, callback) {
      var root1175 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1175); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes836;
      nodes836 = node.contents();
      oldNodes.replaceWith(nodes836);
    }));
    callback(root1174); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes835;
    nodes835 = node.contents();
    oldNodes.replaceWith(nodes835);
  }));
  var nodes837 = $("<span>");
  root1173.append(nodes837);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl217();
  }));
  
  function renderControl217() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1176 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1176); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes837;
      nodes837 = node.contents();
      oldNodes.replaceWith(nodes837);
    }));
  }
  renderControl217();
  callback(root1173); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1177 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes838 = $("<span>");
  root1177.append(nodes838);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1178 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node477 = mobl.loadingSpan();
    root1178.append(node477);
    var list104;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList104 = function() {
      var subs__ = listSubs__;
      list104 = coll.get();
      list104.list(function(results232) {
        node477.empty();
        for(var i104 = 0; i104 < results232.length; i104++) {
          (function() {
            var iternode104 = $("<span>");
            node477.append(iternode104);
            var it;
            it = mobl.ref(mobl.ref(results232), i104);
            
            var tmp1642 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp1642.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1642.set(it.get() == selected.get());
            }));
            
            
            var node478 = $("<span>");
            iternode104.append(node478);
            var condSubs105 = new mobl.CompSubscription();
            subs__.addSub(condSubs105);
            var oldValue105;
            var renderCond105 = function() {
              var value217 = tmp1642.get();
              if(oldValue105 === value217) return;
              oldValue105 = value217;
              var subs__ = condSubs105;
              subs__.unsubscribe();
              node478.empty();
              if(value217) {
                
                var tmp1638 = mobl.ref(false);
                
                
                var tmp1637 = mobl.ref(null);
                
                
                var tmp1636 = mobl.ref(null);
                
                var nodes839 = $("<span>");
                node478.append(nodes839);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1636, tmp1637, tmp1638, function(_, callback) {
                  var root1179 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes840 = $("<span>");
                  root1179.append(nodes840);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl218();
                  }));
                  
                  function renderControl218() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1180 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1180); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes840;
                      nodes840 = node.contents();
                      oldNodes.replaceWith(nodes840);
                    }));
                  }
                  renderControl218();
                  callback(root1179); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes839;
                  nodes839 = node.contents();
                  oldNodes.replaceWith(nodes839);
                }));
                
                
              } else {
                
                var tmp1640 = mobl.ref(true);
                
                
                var tmp1639 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp1641 = mobl.ref(null);
                
                var nodes841 = $("<span>");
                node478.append(nodes841);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1639, tmp1641, tmp1640, function(_, callback) {
                  var root1181 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes842 = $("<span>");
                  root1181.append(nodes842);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl219();
                  }));
                  
                  function renderControl219() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1182 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1182); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes842;
                      nodes842 = node.contents();
                      oldNodes.replaceWith(nodes842);
                    }));
                  }
                  renderControl219();
                  callback(root1181); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes841;
                  nodes841 = node.contents();
                  oldNodes.replaceWith(nodes841);
                }));
                
                
              }
            };
            renderCond105();
            subs__.addSub(tmp1642.addEventListener('change', function() {
              renderCond105();
            }));
            
            
            var oldNodes = iternode104;
            iternode104 = iternode104.contents();
            oldNodes.replaceWith(iternode104);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list104.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
      });
    };
    renderList104();
    
    callback(root1178); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes838;
    nodes838 = node.contents();
    oldNodes.replaceWith(nodes838);
  }));
  callback(root1177); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root1183 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes843 = $("<span>");
    root1183.append(nodes843);
    subs__.addSub((ui.group)(function(_, callback) {
      var root1184 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp1646 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp1646.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp1646.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp1646.set(coll.get().limit(n.get()));
      }));
      
      
      var node479 = mobl.loadingSpan();
      root1184.append(node479);
      var list105;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList105 = function() {
        var subs__ = listSubs__;
        list105 = tmp1646.get();
        list105.list(function(results233) {
          node479.empty();
          for(var i105 = 0; i105 < results233.length; i105++) {
            (function() {
              var iternode105 = $("<span>");
              node479.append(iternode105);
              var it;
              it = mobl.ref(mobl.ref(results233), i105);
              
              var tmp1643 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp1645 = mobl.ref(false);
              
              
              var tmp1644 = mobl.ref(null);
              
              var nodes844 = $("<span>");
              iternode105.append(nodes844);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1643, tmp1644, tmp1645, function(_, callback) {
                var root1185 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes845 = $("<span>");
                root1185.append(nodes845);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl220();
                }));
                
                function renderControl220() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root1186 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1186); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes845;
                    nodes845 = node.contents();
                    oldNodes.replaceWith(nodes845);
                  }));
                }
                renderControl220();
                callback(root1185); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes844;
                nodes844 = node.contents();
                oldNodes.replaceWith(nodes844);
              }));
              
              var oldNodes = iternode105;
              iternode105 = iternode105.contents();
              oldNodes.replaceWith(iternode105);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list105.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
          subs__.addSub(tmp1646.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
        });
      };
      renderList105();
      
      
      var tmp1649 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp1649.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp1649.set(n.get() < total.get());
      }));
      
      
      var node480 = $("<span>");
      root1184.append(node480);
      var condSubs106 = new mobl.CompSubscription();
      subs__.addSub(condSubs106);
      var oldValue106;
      var renderCond106 = function() {
        var value218 = tmp1649.get();
        if(oldValue106 === value218) return;
        oldValue106 = value218;
        var subs__ = condSubs106;
        subs__.unsubscribe();
        node480.empty();
        if(value218) {
          
          var node481 = $("<li>");
          
          var ref481 = mobl.ref(ui.loadMoreStyle);
          if(ref481.get() !== null) {
            node481.attr('class', ref481.get());
            subs__.addSub(ref481.addEventListener('change', function(_, ref, val) {
              node481.attr('class', val);
            }));
            
          }
          subs__.addSub(ref481.rebind());
          
          var val279 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val279 !== null) {
            subs__.addSub(mobl.domBind(node481, 'tap', val279));
          }
          
          
          var tmp1648 = mobl.ref(null);
          
          
          var tmp1647 = mobl.ref(null);
          
          var nodes846 = $("<span>");
          node481.append(nodes846);
          subs__.addSub((mobl.label)(moreLabel, tmp1647, tmp1648, function(_, callback) {
            var root1187 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1187); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes846;
            nodes846 = node.contents();
            oldNodes.replaceWith(nodes846);
          }));
          node480.append(node481);
          
          
          
        } else {
          
        }
      };
      renderCond106();
      subs__.addSub(tmp1649.addEventListener('change', function() {
        renderCond106();
      }));
      
      callback(root1184); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes843;
      nodes843 = node.contents();
      oldNodes.replaceWith(nodes843);
    }));
    callback(root1183); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1188 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes847 = $("<span>");
  root1188.append(nodes847);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1189 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node482 = mobl.loadingSpan();
    root1189.append(node482);
    var list106;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList106 = function() {
      var subs__ = listSubs__;
      list106 = items.get();
      list106.list(function(results234) {
        node482.empty();
        for(var i106 = 0; i106 < results234.length; i106++) {
          (function() {
            var iternode106 = $("<span>");
            node482.append(iternode106);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results234), i106), "_1");it = mobl.ref(mobl.ref(mobl.ref(results234), i106), "_2");
            
            var tmp1653 = mobl.ref(false);
            
            
            var tmp1652 = mobl.ref(null);
            
            
            var tmp1651 = mobl.ref(null);
            
            var nodes848 = $("<span>");
            iternode106.append(nodes848);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1651, tmp1652, tmp1653, function(_, callback) {
              var root1190 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1650 = mobl.ref(null);
              
              var nodes849 = $("<span>");
              root1190.append(nodes849);
              subs__.addSub((ui.checkBox)(checked, it, tmp1650, function(_, callback) {
                var root1191 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1191); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes849;
                nodes849 = node.contents();
                oldNodes.replaceWith(nodes849);
              }));
              callback(root1190); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes848;
              nodes848 = node.contents();
              oldNodes.replaceWith(nodes848);
            }));
            
            var oldNodes = iternode106;
            iternode106 = iternode106.contents();
            oldNodes.replaceWith(iternode106);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list106.addEventListener('change', function() { listSubs__.unsubscribe(); renderList106(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList106(true); }));
      });
    };
    renderList106();
    
    callback(root1189); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes847;
    nodes847 = node.contents();
    oldNodes.replaceWith(nodes847);
  }));
  callback(root1188); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1192 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll211) {
    coll211 = coll211.reverse();
    function processOne40() {
      var it;
      it = coll211.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll211.length > 0) processOne40(); else rest40();
      
    }
    function rest40() {
      
      var tmp1657 = mobl.ref(null);
      
      var nodes850 = $("<span>");
      root1192.append(nodes850);
      subs__.addSub((ui.header)(title, tmp1657, function(_, callback) {
        var root1193 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1654 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp1655 = mobl.ref(mobl._("Back", []));
        
        var nodes851 = $("<span>");
        root1193.append(nodes851);
        subs__.addSub((ui.backButton)(tmp1655, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1654, function(_, callback) {
          var root1194 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1194); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes851;
          nodes851 = node.contents();
          oldNodes.replaceWith(nodes851);
        }));
        
        var tmp1656 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll210) {
                               coll210 = coll210.reverse();
                               function processOne39() {
                                 var checked;var it;
                                 var tmp1691 = coll210.pop();
                                 checked = tmp1691._1;it = tmp1691._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll210.length > 0) processOne39(); else rest39();
                                   
                                 } else {
                                   {
                                     
                                     if(coll210.length > 0) processOne39(); else rest39();
                                     
                                   }
                                 }
                               }
                               function rest39() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll210.length > 0) processOne39(); else rest39();
                             });
                             
                           });
        
        var nodes852 = $("<span>");
        root1193.append(nodes852);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1656, function(_, callback) {
          var root1195 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1195); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes852;
          nodes852 = node.contents();
          oldNodes.replaceWith(nodes852);
        }));
        callback(root1193); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes850;
        nodes850 = node.contents();
        oldNodes.replaceWith(nodes850);
      }));
      var nodes853 = $("<span>");
      root1192.append(nodes853);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1196 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1196); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes853;
        nodes853 = node.contents();
        oldNodes.replaceWith(nodes853);
      }));
      callback(root1192); return subs__;
      
      
    }
    if(coll211.length > 0) processOne40(); else rest40();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1197 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp1659 = mobl.ref(null);
  
  
  var tmp1658 = mobl.ref(null);
  
  var nodes854 = $("<span>");
  root1197.append(nodes854);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp1658, tmp1659, function(_, callback) {
    var root1198 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1198); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes854;
    nodes854 = node.contents();
    oldNodes.replaceWith(nodes854);
  }));
  
  var tmp1660 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1660.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1660.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1660.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1660.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1660.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes855 = $("<span>");
  root1197.append(nodes855);
  subs__.addSub((ui.masterDetail)(tmp1660, masterItem, detailItem, function(_, callback) {
    var root1199 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1199); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes855;
    nodes855 = node.contents();
    oldNodes.replaceWith(nodes855);
  }));
  callback(root1197); return subs__;
  
  
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
  var root1200 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp1673 = mobl.ref(null);
  
  
  var tmp1672 = mobl.ref(null);
  
  
  var tmp1671 = mobl.ref(null);
  
  var nodes856 = $("<span>");
  root1200.append(nodes856);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp1671, tmp1672, tmp1673, function(_, callback) {
    var root1201 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node483 = mobl.loadingSpan();
    root1201.append(node483);
    var list107;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList107 = function() {
      var subs__ = listSubs__;
      list107 = sections.get();
      list107.list(function(results235) {
        node483.empty();
        for(var i107 = 0; i107 < results235.length; i107++) {
          (function() {
            var iternode107 = $("<span>");
            node483.append(iternode107);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results235), i107), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results235), i107), "_2");
            
            var tmp1664 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1664.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1664.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1664.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1664.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp1663 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1666 = mobl.ref(null);
            
            
            var tmp1665 = mobl.ref(null);
            
            var nodes857 = $("<span>");
            iternode107.append(nodes857);
            subs__.addSub((mobl.span)(tmp1664, tmp1665, tmp1663, tmp1666, function(_, callback) {
              var root1202 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1662 = mobl.ref(null);
              
              
              var tmp1661 = mobl.ref(null);
              
              var nodes858 = $("<span>");
              root1202.append(nodes858);
              subs__.addSub((mobl.label)(sectionName, tmp1661, tmp1662, function(_, callback) {
                var root1203 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1203); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes858;
                nodes858 = node.contents();
                oldNodes.replaceWith(nodes858);
              }));
              callback(root1202); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes857;
              nodes857 = node.contents();
              oldNodes.replaceWith(nodes857);
            }));
            
            var tmp1667 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1667.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1667.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1667.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1667.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp1670 = mobl.ref(null);
            
            
            var tmp1669 = mobl.ref(null);
            
            
            var tmp1668 = mobl.ref(null);
            
            var nodes859 = $("<span>");
            iternode107.append(nodes859);
            subs__.addSub((mobl.block)(tmp1667, tmp1668, tmp1669, tmp1670, function(_, callback) {
              var root1204 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes860 = $("<span>");
              root1204.append(nodes860);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl221();
              }));
              
              function renderControl221() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1205 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1205); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes860;
                  nodes860 = node.contents();
                  oldNodes.replaceWith(nodes860);
                }));
              }
              renderControl221();
              callback(root1204); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes859;
              nodes859 = node.contents();
              oldNodes.replaceWith(nodes859);
            }));
            
            var oldNodes = iternode107;
            iternode107 = iternode107.contents();
            oldNodes.replaceWith(iternode107);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list107.addEventListener('change', function() { listSubs__.unsubscribe(); renderList107(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList107(true); }));
      });
    };
    renderList107();
    
    callback(root1201); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes856;
    nodes856 = node.contents();
    oldNodes.replaceWith(nodes856);
  }));
  callback(root1200); return subs__;
  
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
  var root1206 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node484 = $("<table>");
  
  var ref482 = mobl.ref(ui.tableStyle);
  if(ref482.get() !== null) {
    node484.attr('class', ref482.get());
    subs__.addSub(ref482.addEventListener('change', function(_, ref, val) {
      node484.attr('class', val);
    }));
    
  }
  subs__.addSub(ref482.rebind());
  
  var nodes861 = $("<span>");
  node484.append(nodes861);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl222();
  }));
  
  function renderControl222() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1207 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1207); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes861;
      nodes861 = node.contents();
      oldNodes.replaceWith(nodes861);
    }));
  }
  renderControl222();
  root1206.append(node484);
  callback(root1206); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root1208 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node485 = $("<tr>");
  
  var ref483 = mobl.ref(ui.trStyle);
  if(ref483.get() !== null) {
    node485.attr('class', ref483.get());
    subs__.addSub(ref483.addEventListener('change', function(_, ref, val) {
      node485.attr('class', val);
    }));
    
  }
  subs__.addSub(ref483.rebind());
  
  var nodes862 = $("<span>");
  node485.append(nodes862);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl223();
  }));
  
  function renderControl223() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1209); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes862;
      nodes862 = node.contents();
      oldNodes.replaceWith(nodes862);
    }));
  }
  renderControl223();
  root1208.append(node485);
  callback(root1208); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root1210 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node486 = $("<td>");
  
  var ref484 = width;
  if(ref484.get() !== null) {
    node486.attr('width', ref484.get());
    subs__.addSub(ref484.addEventListener('change', function(_, ref, val) {
      node486.attr('width', val);
    }));
    
  }
  subs__.addSub(ref484.rebind());
  
  var ref485 = mobl.ref(ui.tdStyle);
  if(ref485.get() !== null) {
    node486.attr('class', ref485.get());
    subs__.addSub(ref485.addEventListener('change', function(_, ref, val) {
      node486.attr('class', val);
    }));
    
  }
  subs__.addSub(ref485.rebind());
  
  var nodes863 = $("<span>");
  node486.append(nodes863);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl224();
  }));
  
  function renderControl224() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1211 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1211); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes863;
      nodes863 = node.contents();
      oldNodes.replaceWith(nodes863);
    }));
  }
  renderControl224();
  root1210.append(node486);
  callback(root1210); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root1212 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node487 = $("<td>");
  
  var ref486 = width;
  if(ref486.get() !== null) {
    node487.attr('width', ref486.get());
    subs__.addSub(ref486.addEventListener('change', function(_, ref, val) {
      node487.attr('width', val);
    }));
    
  }
  subs__.addSub(ref486.rebind());
  
  var ref487 = mobl.ref(ui.tdStyle);
  if(ref487.get() !== null) {
    node487.attr('class', ref487.get());
    subs__.addSub(ref487.addEventListener('change', function(_, ref, val) {
      node487.attr('class', val);
    }));
    
  }
  subs__.addSub(ref487.rebind());
  
  var nodes864 = $("<span>");
  node487.append(nodes864);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl225();
  }));
  
  function renderControl225() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1213); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes864;
      nodes864 = node.contents();
      oldNodes.replaceWith(nodes864);
    }));
  }
  renderControl225();
  root1212.append(node487);
  callback(root1212); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root1214 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node488 = $("<td>");
  
  var ref488 = width;
  if(ref488.get() !== null) {
    node488.attr('width', ref488.get());
    subs__.addSub(ref488.addEventListener('change', function(_, ref, val) {
      node488.attr('width', val);
    }));
    
  }
  subs__.addSub(ref488.rebind());
  
  var ref489 = mobl.ref(ui.tdStyle);
  if(ref489.get() !== null) {
    node488.attr('class', ref489.get());
    subs__.addSub(ref489.addEventListener('change', function(_, ref, val) {
      node488.attr('class', val);
    }));
    
  }
  subs__.addSub(ref489.rebind());
  
  
  var node489 = $("<strong>");
  
  var nodes865 = $("<span>");
  node489.append(nodes865);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl226();
  }));
  
  function renderControl226() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1215); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes865;
      nodes865 = node.contents();
      oldNodes.replaceWith(nodes865);
    }));
  }
  renderControl226();
  node488.append(node489);
  root1214.append(node488);
  callback(root1214); return subs__;
  
  
  
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
  var root1216 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var slider = $("<div>");
  
  root1216.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  callback(root1216); return subs__;
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
ui.selectedItemStyle = 'ui__selectedItemStyle';
