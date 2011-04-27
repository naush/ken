mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root26922 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12581 = $("<span>");
  root26922.append(node12581);
  var condSubs2350 = new mobl.CompSubscription();
  subs__.addSub(condSubs2350);
  var oldValue2350;
  var renderCond2350 = function() {
    var value5288 = value.get();
    if(oldValue2350 === value5288) return;
    oldValue2350 = value5288;
    var subs__ = condSubs2350;
    subs__.unsubscribe();
    node12581.empty();
    if(value5288) {
      var nodes18165 = $("<span>");
      node12581.append(nodes18165);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl5650();
      }));
      
      function renderControl5650() {
        subs__.addSub((elements)(function(elements, callback) {
          var root26923 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26923); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18165;
          nodes18165 = node.contents();
          oldNodes.replaceWith(nodes18165);
        }));
      }
      renderControl5650();
      
      
    } else {
      
      var tmp32019 = mobl.ref(null);
      
      
      var tmp32018 = mobl.ref(null);
      
      
      var tmp32017 = mobl.ref(null);
      
      var nodes18166 = $("<span>");
      node12581.append(nodes18166);
      subs__.addSub((mobl.block)(style, tmp32017, tmp32018, tmp32019, function(_, callback) {
        var root26924 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp32009 = mobl.ref(null);
        
        
        var tmp32008 = mobl.ref(null);
        
        var nodes18167 = $("<span>");
        root26924.append(nodes18167);
        subs__.addSub((mobl.label)(loadingMessage, tmp32008, tmp32009, function(_, callback) {
          var root26925 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26925); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18167;
          nodes18167 = node.contents();
          oldNodes.replaceWith(nodes18167);
        }));
        
        var tmp32011 = mobl.ref("middle");
        
        
        var tmp32010 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp32016 = mobl.ref(null);
        
        
        var tmp32015 = mobl.ref(null);
        
        
        var tmp32014 = mobl.ref(null);
        
        
        var tmp32013 = mobl.ref(null);
        
        
        var tmp32012 = mobl.ref(null);
        
        var nodes18168 = $("<span>");
        root26924.append(nodes18168);
        subs__.addSub((ui.image)(tmp32010, tmp32012, tmp32013, tmp32014, tmp32015, tmp32011, tmp32016, function(_, callback) {
          var root26926 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26926); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18168;
          nodes18168 = node.contents();
          oldNodes.replaceWith(nodes18168);
        }));
        callback(root26924); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18166;
        nodes18166 = node.contents();
        oldNodes.replaceWith(nodes18166);
      }));
      
      
    }
  };
  renderCond2350();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond2350();
  }));
  
  callback(root26922); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root26927 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12582 = $("<div>");
  
  var ref13486 = mobl.ref(ui.headerStyle);
  if(ref13486.get() !== null) {
    node12582.attr('class', ref13486.get());
    subs__.addSub(ref13486.addEventListener('change', function(_, ref, val) {
      node12582.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13486.rebind());
  
  var val7466 = onclick.get();
  if(val7466 !== null) {
    subs__.addSub(mobl.domBind(node12582, 'tap', val7466));
  }
  
  
  var node12583 = $("<div>");
  
  var ref13485 = mobl.ref(ui.headerContainerStyle);
  if(ref13485.get() !== null) {
    node12583.attr('class', ref13485.get());
    subs__.addSub(ref13485.addEventListener('change', function(_, ref, val) {
      node12583.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13485.rebind());
  
  
  var node12584 = $("<div>");
  
  var ref13483 = text;
  node12584.text(""+ref13483.get());
  var ignore2709 = false;
  subs__.addSub(ref13483.addEventListener('change', function(_, ref, val) {
    if(ignore2709) return;
    node12584.text(""+val);
  }));
  subs__.addSub(ref13483.rebind());
  
  
  var ref13484 = mobl.ref(ui.headerTextStyle);
  if(ref13484.get() !== null) {
    node12584.attr('class', ref13484.get());
    subs__.addSub(ref13484.addEventListener('change', function(_, ref, val) {
      node12584.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13484.rebind());
  
  node12583.append(node12584);
  node12582.append(node12583);
  var nodes18169 = $("<span>");
  node12582.append(nodes18169);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5651();
  }));
  
  function renderControl5651() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26928 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26928); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18169;
      nodes18169 = node.contents();
      oldNodes.replaceWith(nodes18169);
    }));
  }
  renderControl5651();
  root26927.append(node12582);
  callback(root26927); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root26929 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref13487 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref13487.get() !== null) {
    sp.attr('class', ref13487.get());
    subs__.addSub(ref13487.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref13487.rebind());
  
  var val7467 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val7467 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val7467));
  }
  
  var val7468 = function(event, callback) {
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
  if(val7468 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val7468));
  }
  
  var val7469 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after2444(result__) {
                    var tmp32109 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after2444);if(result__ !== undefined) after2444(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7469 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val7469));
  }
  
  var val7470 = function(event, callback) {
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
  if(val7470 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val7470));
  }
  
  var ref13488 = text;
  sp.text(""+ref13488.get());
  var ignore2710 = false;
  subs__.addSub(ref13488.addEventListener('change', function(_, ref, val) {
    if(ignore2710) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref13488.rebind());
  
  
  root26929.append(sp);
  callback(root26929); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root26930 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes18170 = $("<span>");
  root26930.append(nodes18170);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root26931 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26931); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18170;
    nodes18170 = node.contents();
    oldNodes.replaceWith(nodes18170);
  }));
  callback(root26930); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root26932 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes18171 = $("<span>");
  root26932.append(nodes18171);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root26933 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26933); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18171;
    nodes18171 = node.contents();
    oldNodes.replaceWith(nodes18171);
  }));
  callback(root26932); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root26934 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12585 = $("<ul>");
  
  var ref13489 = mobl.ref(ui.groupStyle);
  if(ref13489.get() !== null) {
    node12585.attr('class', ref13489.get());
    subs__.addSub(ref13489.addEventListener('change', function(_, ref, val) {
      node12585.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13489.rebind());
  
  var nodes18172 = $("<span>");
  node12585.append(nodes18172);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5652();
  }));
  
  function renderControl5652() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26935 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26935); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18172;
      nodes18172 = node.contents();
      oldNodes.replaceWith(nodes18172);
    }));
  }
  renderControl5652();
  root26934.append(node12585);
  callback(root26934); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root26936 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12586 = $("<img>");
  
  var ref13490 = url;
  if(ref13490.get() !== null) {
    node12586.attr('src', ref13490.get());
    subs__.addSub(ref13490.addEventListener('change', function(_, ref, val) {
      node12586.attr('src', val);
    }));
    
  }
  subs__.addSub(ref13490.rebind());
  
  var ref13491 = width;
  if(ref13491.get() !== null) {
    node12586.attr('width', ref13491.get());
    subs__.addSub(ref13491.addEventListener('change', function(_, ref, val) {
      node12586.attr('width', val);
    }));
    
  }
  subs__.addSub(ref13491.rebind());
  
  var ref13492 = height;
  if(ref13492.get() !== null) {
    node12586.attr('height', ref13492.get());
    subs__.addSub(ref13492.addEventListener('change', function(_, ref, val) {
      node12586.attr('height', val);
    }));
    
  }
  subs__.addSub(ref13492.rebind());
  
  var ref13493 = style;
  if(ref13493.get() !== null) {
    node12586.attr('class', ref13493.get());
    subs__.addSub(ref13493.addEventListener('change', function(_, ref, val) {
      node12586.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13493.rebind());
  
  var val7471 = onclick.get();
  if(val7471 !== null) {
    subs__.addSub(mobl.domBind(node12586, 'tap', val7471));
  }
  
  var ref13494 = valign;
  if(ref13494.get() !== null) {
    node12586.attr('valign', ref13494.get());
    subs__.addSub(ref13494.addEventListener('change', function(_, ref, val) {
      node12586.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref13494.rebind());
  
  var ref13495 = align;
  if(ref13495.get() !== null) {
    node12586.attr('align', ref13495.get());
    subs__.addSub(ref13495.addEventListener('change', function(_, ref, val) {
      node12586.attr('align', val);
    }));
    
  }
  subs__.addSub(ref13495.rebind());
  
  root26936.append(node12586);
  callback(root26936); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root26937 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref13496 = mobl.ref(ui.itemStyle);
  if(ref13496.get() !== null) {
    el.attr('class', ref13496.get());
    subs__.addSub(ref13496.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13496.rebind());
  
  var ref13497 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref13497.get() !== null) {
    el.attr('class', ref13497.get());
    subs__.addSub(ref13497.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref13497.rebind());
  
  var val7472 = onswipe.get();
  if(val7472 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val7472));
  }
  
  var val7473 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp32110 = result__;
                                           function after2445(result__) {
                                             var tmp32111 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after2445);if(result__ !== undefined) after2445(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp32112 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val7473 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val7473));
  }
  
  var nodes18173 = $("<span>");
  el.append(nodes18173);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5653();
  }));
  
  function renderControl5653() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26938 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26938); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18173;
      nodes18173 = node.contents();
      oldNodes.replaceWith(nodes18173);
    }));
  }
  renderControl5653();
  root26937.append(el);
  callback(root26937); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root26939 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12587 = $("<input>");
  node12587.attr('type', "checkbox");
  
  var ref13499 = b;
  node12587.attr('checked', !!ref13499.get());
  subs__.addSub(ref13499.addEventListener('change', function(_, ref, val) {
    if(ref === ref13499) node12587.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node12587, 'change', function() {
    b.set(!!node12587.attr('checked'));
  }));
  
  var val7475 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val7475 !== null) {
    subs__.addSub(mobl.domBind(node12587, 'tap', val7475));
  }
  
  var val7476 = onchange.get();
  if(val7476 !== null) {
    subs__.addSub(mobl.domBind(node12587, 'change', val7476));
  }
  
  root26939.append(node12587);
  
  root26939.append(" ");
  
  var node12588 = $("<span>");
  
  var ref13498 = label;
  node12588.text(""+ref13498.get());
  var ignore2711 = false;
  subs__.addSub(ref13498.addEventListener('change', function(_, ref, val) {
    if(ignore2711) return;
    node12588.text(""+val);
  }));
  subs__.addSub(ref13498.rebind());
  
  
  var val7474 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2446(result__) {
                    var tmp32113 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2446);if(result__ !== undefined) after2446(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7474 !== null) {
    subs__.addSub(mobl.domBind(node12588, 'tap', val7474));
  }
  
  root26939.append(node12588);
  callback(root26939); return subs__;
  
  
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
  var root26940 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12589 = $("<span>");
  root26940.append(node12589);
  var condSubs2351 = new mobl.CompSubscription();
  subs__.addSub(condSubs2351);
  var oldValue2351;
  var renderCond2351 = function() {
    var value5289 = label.get();
    if(oldValue2351 === value5289) return;
    oldValue2351 = value5289;
    var subs__ = condSubs2351;
    subs__.unsubscribe();
    node12589.empty();
    if(value5289) {
      
      var tmp32020 = mobl.ref(null);
      
      var nodes18174 = $("<span>");
      node12589.append(nodes18174);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp32020, function(_, callback) {
        var root26941 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root26941); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes18174;
        nodes18174 = node.contents();
        oldNodes.replaceWith(nodes18174);
      }));
      
      
    } else {
      
    }
  };
  renderCond2351();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2351();
  }));
  
  
  var node12590 = $("<span>");
  root26940.append(node12590);
  var condSubs2352 = new mobl.CompSubscription();
  subs__.addSub(condSubs2352);
  var oldValue2352;
  var renderCond2352 = function() {
    var value5290 = validator.get();
    if(oldValue2352 === value5290) return;
    oldValue2352 = value5290;
    var subs__ = condSubs2352;
    subs__.unsubscribe();
    node12590.empty();
    if(value5290) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after2450(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp32114 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node12591 = $("<input>");
        node12591.attr('type', "text");
        
        var ref13500 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref13500.get() !== null) {
          node12591.attr('class', ref13500.get());
          subs__.addSub(ref13500.addEventListener('change', function(_, ref, val) {
            node12591.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node12591.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node12591.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node12591.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref13500.rebind());
        
        var ref13501 = placeholder;
        if(ref13501.get() !== null) {
          node12591.attr('placeholder', ref13501.get());
          subs__.addSub(ref13501.addEventListener('change', function(_, ref, val) {
            node12591.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref13501.rebind());
        
        var ref13502 = temp;
        node12591.val(""+ref13502.get());
        var ignore2712 = false;
        subs__.addSub(ref13502.addEventListener('change', function(_, ref, val) {
          if(ignore2712) return;
          node12591.val(""+val);
        }));
        subs__.addSub(ref13502.rebind());
        
        subs__.addSub(mobl.domBind(node12591, 'keyup change', function() {
          ignore2712 = true;
          temp.set(mobl.stringTomobl__String(node12591.val()));
          ignore2712 = false;
        }));
        
        
        var val7477 = onchange.get();
        if(val7477 !== null) {
          subs__.addSub(mobl.domBind(node12591, 'change', val7477));
        }
        
        var val7478 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after2447(result__) {
                          var tmp32115 = result__;
                          function after2448(result__) {
                            var tmp32116 = result__;
                            var result__ = tmp32116;
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
                          var result__ = validator.get()(temp.get(), after2448);if(result__ !== undefined) after2448(result__);
                        }
                        var result__ = onkeyup.get()(event, after2447);if(result__ !== undefined) after2447(result__);
                      } else {
                        {
                          function after2449(result__) {
                            var tmp32116 = result__;
                            var result__ = tmp32116;
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
                          var result__ = validator.get()(temp.get(), after2449);if(result__ !== undefined) after2449(result__);
                        }
                      }
                    };
        if(val7478 !== null) {
          subs__.addSub(mobl.domBind(node12591, 'keyup', val7478));
        }
        
        var val7479 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val7479 !== null) {
          subs__.addSub(mobl.domBind(node12591, 'blur', val7479));
        }
        
        node12590.append(node12591);
        
        var tmp32021 = mobl.ref(null);
        
        var nodes18175 = $("<span>");
        node12590.append(nodes18175);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp32021, function(_, callback) {
          var root26942 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26942); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18175;
          nodes18175 = node.contents();
          oldNodes.replaceWith(nodes18175);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after2450);if(result__ !== undefined) after2450(result__);
    } else {
      
      var node12592 = $("<input>");
      node12592.attr('type', "text");
      
      var ref13503 = style;
      if(ref13503.get() !== null) {
        node12592.attr('class', ref13503.get());
        subs__.addSub(ref13503.addEventListener('change', function(_, ref, val) {
          node12592.attr('class', val);
        }));
        
      }
      subs__.addSub(ref13503.rebind());
      
      var ref13504 = placeholder;
      if(ref13504.get() !== null) {
        node12592.attr('placeholder', ref13504.get());
        subs__.addSub(ref13504.addEventListener('change', function(_, ref, val) {
          node12592.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref13504.rebind());
      
      var ref13505 = s;
      node12592.val(""+ref13505.get());
      var ignore2713 = false;
      subs__.addSub(ref13505.addEventListener('change', function(_, ref, val) {
        if(ignore2713) return;
        node12592.val(""+val);
      }));
      subs__.addSub(ref13505.rebind());
      
      subs__.addSub(mobl.domBind(node12592, 'keyup change', function() {
        ignore2713 = true;
        s.set(mobl.stringTomobl__String(node12592.val()));
        ignore2713 = false;
      }));
      
      
      var val7480 = onchange.get();
      if(val7480 !== null) {
        subs__.addSub(mobl.domBind(node12592, 'change', val7480));
      }
      
      var val7481 = onkeyup.get();
      if(val7481 !== null) {
        subs__.addSub(mobl.domBind(node12592, 'keyup', val7481));
      }
      
      var val7482 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val7482 !== null) {
        subs__.addSub(mobl.domBind(node12592, 'blur', val7482));
      }
      
      node12590.append(node12592);
      
      
    }
  };
  renderCond2352();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond2352();
  }));
  
  callback(root26940); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root26943 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes18176 = $("<span>");
  root26943.append(nodes18176);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root26944 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26944); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18176;
    nodes18176 = node.contents();
    oldNodes.replaceWith(nodes18176);
  }));
  callback(root26943); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root26945 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after2451(result__) {
      var tmp32117 = result__;
      var result__ = tmp32117;
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
    var result__ = validator.get()(n2, after2451);if(result__ !== undefined) after2451(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes18177 = $("<span>");
  root26945.append(nodes18177);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root26946 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26946); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18177;
    nodes18177 = node.contents();
    oldNodes.replaceWith(nodes18177);
  }));
  callback(root26945); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root26947 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12593 = $("<span>");
  root26947.append(node12593);
  var condSubs2353 = new mobl.CompSubscription();
  subs__.addSub(condSubs2353);
  var oldValue2353;
  var renderCond2353 = function() {
    var value5291 = label.get();
    if(oldValue2353 === value5291) return;
    oldValue2353 = value5291;
    var subs__ = condSubs2353;
    subs__.unsubscribe();
    node12593.empty();
    if(value5291) {
      
      var node12594 = $("<span>");
      node12594.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref13509 = label;
      node12594.text(""+ref13509.get());
      var ignore2715 = false;
      subs__.addSub(ref13509.addEventListener('change', function(_, ref, val) {
        if(ignore2715) return;
        node12594.text(""+val);
      }));
      subs__.addSub(ref13509.rebind());
      
      
      node12593.append(node12594);
      
      var node12595 = $("<span>");
      node12595.attr('style', "float: left");
      
      
      var node12596 = $("<input>");
      node12596.attr('type', "password");
      
      var ref13506 = style;
      if(ref13506.get() !== null) {
        node12596.attr('class', ref13506.get());
        subs__.addSub(ref13506.addEventListener('change', function(_, ref, val) {
          node12596.attr('class', val);
        }));
        
      }
      subs__.addSub(ref13506.rebind());
      
      var ref13507 = placeholder;
      if(ref13507.get() !== null) {
        node12596.attr('placeholder', ref13507.get());
        subs__.addSub(ref13507.addEventListener('change', function(_, ref, val) {
          node12596.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref13507.rebind());
      
      var ref13508 = s;
      node12596.val(""+ref13508.get());
      var ignore2714 = false;
      subs__.addSub(ref13508.addEventListener('change', function(_, ref, val) {
        if(ignore2714) return;
        node12596.val(""+val);
      }));
      subs__.addSub(ref13508.rebind());
      
      subs__.addSub(mobl.domBind(node12596, 'keyup change', function() {
        ignore2714 = true;
        s.set(mobl.stringTomobl__String(node12596.val()));
        ignore2714 = false;
      }));
      
      
      var val7483 = onchange.get();
      if(val7483 !== null) {
        subs__.addSub(mobl.domBind(node12596, 'change', val7483));
      }
      
      var val7484 = onkeyup.get();
      if(val7484 !== null) {
        subs__.addSub(mobl.domBind(node12596, 'keyup', val7484));
      }
      
      var val7485 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val7485 !== null) {
        subs__.addSub(mobl.domBind(node12596, 'blur', val7485));
      }
      
      node12595.append(node12596);
      node12593.append(node12595);
      
      
      
      
    } else {
      
      var node12597 = $("<input>");
      node12597.attr('type', "password");
      
      var ref13510 = style;
      if(ref13510.get() !== null) {
        node12597.attr('class', ref13510.get());
        subs__.addSub(ref13510.addEventListener('change', function(_, ref, val) {
          node12597.attr('class', val);
        }));
        
      }
      subs__.addSub(ref13510.rebind());
      
      var ref13511 = placeholder;
      if(ref13511.get() !== null) {
        node12597.attr('placeholder', ref13511.get());
        subs__.addSub(ref13511.addEventListener('change', function(_, ref, val) {
          node12597.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref13511.rebind());
      
      var ref13512 = s;
      node12597.val(""+ref13512.get());
      var ignore2716 = false;
      subs__.addSub(ref13512.addEventListener('change', function(_, ref, val) {
        if(ignore2716) return;
        node12597.val(""+val);
      }));
      subs__.addSub(ref13512.rebind());
      
      subs__.addSub(mobl.domBind(node12597, 'keyup change', function() {
        ignore2716 = true;
        s.set(mobl.stringTomobl__String(node12597.val()));
        ignore2716 = false;
      }));
      
      
      var val7486 = onchange.get();
      if(val7486 !== null) {
        subs__.addSub(mobl.domBind(node12597, 'change', val7486));
      }
      
      var val7487 = onkeyup.get();
      if(val7487 !== null) {
        subs__.addSub(mobl.domBind(node12597, 'keyup', val7487));
      }
      
      var val7488 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val7488 !== null) {
        subs__.addSub(mobl.domBind(node12597, 'blur', val7488));
      }
      
      node12593.append(node12597);
      
      
    }
  };
  renderCond2353();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2353();
  }));
  
  callback(root26947); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root26948 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref13517 = style;
  if(ref13517.get() !== null) {
    sel.attr('class', ref13517.get());
    subs__.addSub(ref13517.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13517.rebind());
  
  var val7489 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2452(result__) {
                    var tmp32119 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after2452);if(result__ !== undefined) after2452(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7489 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val7489));
  }
  
  
  var node12598 = mobl.loadingSpan();
  sel.append(node12598);
  var list2841;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2841 = function() {
    var subs__ = listSubs__;
    list2841 = options.get();
    list2841.list(function(results3041) {
      node12598.empty();
      for(var i2841 = 0; i2841 < results3041.length; i2841++) {
        (function() {
          var iternode2841 = $("<span>");
          node12598.append(iternode2841);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results3041), i2841), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results3041), i2841), "_2");
          
          var node12599 = $("<option>");
          
          var ref13513 = optionDescription;
          node12599.text(""+ref13513.get());
          var ignore2717 = false;
          subs__.addSub(ref13513.addEventListener('change', function(_, ref, val) {
            if(ignore2717) return;
            node12599.text(""+val);
          }));
          subs__.addSub(ref13513.rebind());
          
          
          var ref13514 = optionStyle;
          if(ref13514.get() !== null) {
            node12599.attr('class', ref13514.get());
            subs__.addSub(ref13514.addEventListener('change', function(_, ref, val) {
              node12599.attr('class', val);
            }));
            
          }
          subs__.addSub(ref13514.rebind());
          
          var ref13515 = optionValue;
          if(ref13515.get() !== null) {
            node12599.attr('value', ref13515.get());
            subs__.addSub(ref13515.addEventListener('change', function(_, ref, val) {
              node12599.attr('value', val);
            }));
            
          }
          subs__.addSub(ref13515.rebind());
          
          var ref13516 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref13516.get() !== null) {
            node12599.attr('selected', ref13516.get());
            subs__.addSub(ref13516.addEventListener('change', function(_, ref, val) {
              node12599.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node12599.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node12599.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref13516.rebind());
          
          iternode2841.append(node12599);
          
          var oldNodes = iternode2841;
          iternode2841 = iternode2841.contents();
          oldNodes.replaceWith(iternode2841);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2841.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2841(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2841(true); }));
    });
  };
  renderList2841();
  
  root26948.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root26948); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root26949 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp32030 = mobl.ref(null);
  
  
  var tmp32029 = mobl.ref(null);
  
  
  var tmp32028 = mobl.ref(null);
  
  var nodes18178 = $("<span>");
  root26949.append(nodes18178);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp32028, tmp32029, tmp32030, function(_, callback) {
    var root26950 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12600 = mobl.loadingSpan();
    root26950.append(node12600);
    var list2842;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2842 = function() {
      var subs__ = listSubs__;
      list2842 = tabs.get();
      list2842.list(function(results3042) {
        node12600.empty();
        for(var i2842 = 0; i2842 < results3042.length; i2842++) {
          (function() {
            var iternode2842 = $("<span>");
            node12600.append(iternode2842);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results3042), i2842), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3042), i2842), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3042), i2842), "_3");
            
            var tmp32025 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp32025.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp32025.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp32025.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp32025.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp32024 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp32027 = mobl.ref(null);
            
            
            var tmp32026 = mobl.ref(null);
            
            var nodes18179 = $("<span>");
            iternode2842.append(nodes18179);
            subs__.addSub((mobl.span)(tmp32025, tmp32026, tmp32024, tmp32027, function(_, callback) {
              var root26951 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp32023 = mobl.ref(null);
              
              
              var tmp32022 = mobl.ref(null);
              
              var nodes18180 = $("<span>");
              root26951.append(nodes18180);
              subs__.addSub((mobl.label)(tabName, tmp32022, tmp32023, function(_, callback) {
                var root26952 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root26952); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes18180;
                nodes18180 = node.contents();
                oldNodes.replaceWith(nodes18180);
              }));
              callback(root26951); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18179;
              nodes18179 = node.contents();
              oldNodes.replaceWith(nodes18179);
            }));
            
            var oldNodes = iternode2842;
            iternode2842 = iternode2842.contents();
            oldNodes.replaceWith(iternode2842);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2842.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2842(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2842(true); }));
      });
    };
    renderList2842();
    
    callback(root26950); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18178;
    nodes18178 = node.contents();
    oldNodes.replaceWith(nodes18178);
  }));
  
  var node12601 = mobl.loadingSpan();
  root26949.append(node12601);
  var list2843;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2843 = function() {
    var subs__ = listSubs__;
    list2843 = tabs.get();
    list2843.list(function(results3043) {
      node12601.empty();
      for(var i2843 = 0; i2843 < results3043.length; i2843++) {
        (function() {
          var iternode2843 = $("<span>");
          node12601.append(iternode2843);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results3043), i2843), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3043), i2843), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3043), i2843), "_3");
          
          var tmp32031 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp32031.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp32031.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp32031.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp32031.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp32034 = mobl.ref(null);
          
          
          var tmp32033 = mobl.ref(null);
          
          
          var tmp32032 = mobl.ref(null);
          
          var nodes18181 = $("<span>");
          iternode2843.append(nodes18181);
          subs__.addSub((mobl.block)(tmp32031, tmp32032, tmp32033, tmp32034, function(_, callback) {
            var root26953 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes18182 = $("<span>");
            root26953.append(nodes18182);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root26954 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes18183 = $("<span>");
              root26954.append(nodes18183);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl5654();
              }));
              
              function renderControl5654() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root26955 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root26955); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18183;
                  nodes18183 = node.contents();
                  oldNodes.replaceWith(nodes18183);
                }));
              }
              renderControl5654();
              callback(root26954); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18182;
              nodes18182 = node.contents();
              oldNodes.replaceWith(nodes18182);
            }));
            callback(root26953); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes18181;
            nodes18181 = node.contents();
            oldNodes.replaceWith(nodes18181);
          }));
          
          var oldNodes = iternode2843;
          iternode2843 = iternode2843.contents();
          oldNodes.replaceWith(iternode2843);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2843.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2843(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2843(true); }));
    });
  };
  renderList2843();
  
  callback(root26949); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root26956 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12602 = $("<div>");
  
  var ref13521 = mobl.ref(ui.searchboxStyle);
  if(ref13521.get() !== null) {
    node12602.attr('class', ref13521.get());
    subs__.addSub(ref13521.addEventListener('change', function(_, ref, val) {
      node12602.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13521.rebind());
  
  
  var node12603 = $("<input>");
  node12603.attr('type', "search");
  
  var ref13518 = mobl.ref(ui.searchBoxInputStyle);
  if(ref13518.get() !== null) {
    node12603.attr('class', ref13518.get());
    subs__.addSub(ref13518.addEventListener('change', function(_, ref, val) {
      node12603.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13518.rebind());
  
  var ref13519 = placeholder;
  if(ref13519.get() !== null) {
    node12603.attr('placeholder', ref13519.get());
    subs__.addSub(ref13519.addEventListener('change', function(_, ref, val) {
      node12603.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref13519.rebind());
  
  var ref13520 = s;
  node12603.val(""+ref13520.get());
  var ignore2718 = false;
  subs__.addSub(ref13520.addEventListener('change', function(_, ref, val) {
    if(ignore2718) return;
    node12603.val(""+val);
  }));
  subs__.addSub(ref13520.rebind());
  
  subs__.addSub(mobl.domBind(node12603, 'keyup change', function() {
    ignore2718 = true;
    s.set(mobl.stringTomobl__String(node12603.val()));
    ignore2718 = false;
  }));
  
  
  var val7490 = onsearch.get();
  if(val7490 !== null) {
    subs__.addSub(mobl.domBind(node12603, 'change', val7490));
  }
  
  var val7491 = onkeyup.get();
  if(val7491 !== null) {
    subs__.addSub(mobl.domBind(node12603, 'keyup', val7491));
  }
  node12603.attr('autocorrect', false);
  node12603.attr('autocapitalize', false);
  node12603.attr('autocomplete', false);
  
  node12602.append(node12603);
  root26956.append(node12602);
  callback(root26956); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root26957 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref13522 = mobl.ref(ui.contextMenuStyle);
  if(ref13522.get() !== null) {
    menu.attr('class', ref13522.get());
    subs__.addSub(ref13522.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13522.rebind());
  
  var nodes18184 = $("<span>");
  menu.append(nodes18184);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5655();
  }));
  
  function renderControl5655() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26958 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26958); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18184;
      nodes18184 = node.contents();
      oldNodes.replaceWith(nodes18184);
    }));
  }
  renderControl5655();
  root26957.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val7492 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp32122 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val7492 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val7492));
  }
  
  root26957.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root26957); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root26959 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp32108 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp32108.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node12604 = $("<span>");
  root26959.append(node12604);
  var condSubs2354 = new mobl.CompSubscription();
  subs__.addSub(condSubs2354);
  var oldValue2354;
  var renderCond2354 = function() {
    var value5292 = tmp32108.get();
    if(oldValue2354 === value5292) return;
    oldValue2354 = value5292;
    var subs__ = condSubs2354;
    subs__.unsubscribe();
    node12604.empty();
    if(value5292) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node12605 = $("<div>");
        node12605.attr('width', "100%");
        
        
        var node12606 = $("<div>");
        node12606.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes18187 = $("<span>");
        node12606.append(nodes18187);
        subs__.addSub((ui.group)(function(_, callback) {
          var root26962 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node12609 = mobl.loadingSpan();
          root26962.append(node12609);
          var list2844;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList2844 = function() {
            var subs__ = listSubs__;
            list2844 = items.get();
            list2844.list(function(results3044) {
              node12609.empty();
              for(var i2844 = 0; i2844 < results3044.length; i2844++) {
                (function() {
                  var iternode2844 = $("<span>");
                  node12609.append(iternode2844);
                  var it;
                  it = mobl.ref(mobl.ref(results3044), i2844);
                  
                  var tmp32048 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp32048.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp32048.set(it.get() == current.get());
                  }));
                  
                  
                  var node12610 = $("<span>");
                  iternode2844.append(node12610);
                  var condSubs2356 = new mobl.CompSubscription();
                  subs__.addSub(condSubs2356);
                  var oldValue2356;
                  var renderCond2356 = function() {
                    var value5294 = tmp32048.get();
                    if(oldValue2356 === value5294) return;
                    oldValue2356 = value5294;
                    var subs__ = condSubs2356;
                    subs__.unsubscribe();
                    node12610.empty();
                    if(value5294) {
                      
                      var tmp32044 = mobl.ref(false);
                      
                      
                      var tmp32043 = mobl.ref(null);
                      
                      
                      var tmp32042 = mobl.ref(null);
                      
                      var nodes18188 = $("<span>");
                      node12610.append(nodes18188);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp32042, tmp32043, tmp32044, function(_, callback) {
                        var root26963 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes18189 = $("<span>");
                        root26963.append(nodes18189);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl5657();
                        }));
                        
                        function renderControl5657() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root26964 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root26964); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes18189;
                            nodes18189 = node.contents();
                            oldNodes.replaceWith(nodes18189);
                          }));
                        }
                        renderControl5657();
                        callback(root26963); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes18188;
                        nodes18188 = node.contents();
                        oldNodes.replaceWith(nodes18188);
                      }));
                      
                      
                    } else {
                      
                      var tmp32046 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp32045 = mobl.ref(true);
                      
                      
                      var tmp32047 = mobl.ref(null);
                      
                      var nodes18190 = $("<span>");
                      node12610.append(nodes18190);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp32046, tmp32047, tmp32045, function(_, callback) {
                        var root26965 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes18191 = $("<span>");
                        root26965.append(nodes18191);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl5658();
                        }));
                        
                        function renderControl5658() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root26966 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root26966); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes18191;
                            nodes18191 = node.contents();
                            oldNodes.replaceWith(nodes18191);
                          }));
                        }
                        renderControl5658();
                        callback(root26965); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes18190;
                        nodes18190 = node.contents();
                        oldNodes.replaceWith(nodes18190);
                      }));
                      
                      
                    }
                  };
                  renderCond2356();
                  subs__.addSub(tmp32048.addEventListener('change', function() {
                    renderCond2356();
                  }));
                  
                  
                  var oldNodes = iternode2844;
                  iternode2844 = iternode2844.contents();
                  oldNodes.replaceWith(iternode2844);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list2844.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2844(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2844(true); }));
            });
          };
          renderList2844();
          
          callback(root26962); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes18187;
          nodes18187 = node.contents();
          oldNodes.replaceWith(nodes18187);
        }));
        node12605.append(node12606);
        
        var node12607 = $("<div>");
        node12607.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node12608 = $("<span>");
        node12607.append(node12608);
        var condSubs2355 = new mobl.CompSubscription();
        subs__.addSub(condSubs2355);
        var oldValue2355;
        var renderCond2355 = function() {
          var value5293 = current.get();
          if(oldValue2355 === value5293) return;
          oldValue2355 = value5293;
          var subs__ = condSubs2355;
          subs__.unsubscribe();
          node12608.empty();
          if(value5293) {
            var nodes18185 = $("<span>");
            node12608.append(nodes18185);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl5656();
            }));
            
            function renderControl5656() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root26960 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root26960); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes18185;
                nodes18185 = node.contents();
                oldNodes.replaceWith(nodes18185);
              }));
            }
            renderControl5656();
            
            
          } else {
            
            var tmp32049 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp32051 = mobl.ref(null);
            
            
            var tmp32050 = mobl.ref(null);
            
            var nodes18186 = $("<span>");
            node12608.append(nodes18186);
            subs__.addSub((mobl.label)(tmp32049, tmp32050, tmp32051, function(_, callback) {
              var root26961 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root26961); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes18186;
              nodes18186 = node.contents();
              oldNodes.replaceWith(nodes18186);
            }));
            
            
          }
        };
        renderCond2355();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond2355();
        }));
        
        node12605.append(node12607);
        node12604.append(node12605);
        
        
        
        
        
        
      });
    } else {
      var nodes18192 = $("<span>");
      node12604.append(nodes18192);
      subs__.addSub((ui.group)(function(_, callback) {
        var root26967 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node12611 = mobl.loadingSpan();
        root26967.append(node12611);
        var list2845;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList2845 = function() {
          var subs__ = listSubs__;
          list2845 = items.get();
          list2845.list(function(results3045) {
            node12611.empty();
            for(var i2845 = 0; i2845 < results3045.length; i2845++) {
              (function() {
                var iternode2845 = $("<span>");
                node12611.append(iternode2845);
                var it;
                it = mobl.ref(mobl.ref(results3045), i2845);
                
                var tmp32035 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp32123 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp32037 = mobl.ref(false);
                
                
                var tmp32036 = mobl.ref(null);
                
                var nodes18193 = $("<span>");
                iternode2845.append(nodes18193);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp32035, tmp32036, tmp32037, function(_, callback) {
                  var root26968 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes18194 = $("<span>");
                  root26968.append(nodes18194);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl5659();
                  }));
                  
                  function renderControl5659() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root26969 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root26969); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes18194;
                      nodes18194 = node.contents();
                      oldNodes.replaceWith(nodes18194);
                    }));
                  }
                  renderControl5659();
                  callback(root26968); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18193;
                  nodes18193 = node.contents();
                  oldNodes.replaceWith(nodes18193);
                }));
                
                var oldNodes = iternode2845;
                iternode2845 = iternode2845.contents();
                oldNodes.replaceWith(iternode2845);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list2845.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2845(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2845(true); }));
          });
        };
        renderList2845();
        
        callback(root26967); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18192;
        nodes18192 = node.contents();
        oldNodes.replaceWith(nodes18192);
      }));
      
      
    }
  };
  renderCond2354();
  subs__.addSub(tmp32108.addEventListener('change', function() {
    renderCond2354();
  }));
  
  callback(root26959); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root26970 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp32040 = mobl.ref("Detail");
  
  
  var tmp32041 = mobl.ref(null);
  
  var nodes18195 = $("<span>");
  root26970.append(nodes18195);
  subs__.addSub((ui.header)(tmp32040, tmp32041, function(_, callback) {
    var root26971 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp32039 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp32038 = mobl.ref("Back");
    
    var nodes18196 = $("<span>");
    root26971.append(nodes18196);
    subs__.addSub((ui.backButton)(tmp32038, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp32039, function(_, callback) {
      var root26972 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26972); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18196;
      nodes18196 = node.contents();
      oldNodes.replaceWith(nodes18196);
    }));
    callback(root26971); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18195;
    nodes18195 = node.contents();
    oldNodes.replaceWith(nodes18195);
  }));
  var nodes18197 = $("<span>");
  root26970.append(nodes18197);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl5660();
  }));
  
  function renderControl5660() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root26973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26973); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18197;
      nodes18197 = node.contents();
      oldNodes.replaceWith(nodes18197);
    }));
  }
  renderControl5660();
  callback(root26970); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root26974 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes18198 = $("<span>");
  root26974.append(nodes18198);
  subs__.addSub((ui.group)(function(_, callback) {
    var root26975 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12612 = mobl.loadingSpan();
    root26975.append(node12612);
    var list2846;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2846 = function() {
      var subs__ = listSubs__;
      list2846 = coll.get();
      list2846.list(function(results3046) {
        node12612.empty();
        for(var i2846 = 0; i2846 < results3046.length; i2846++) {
          (function() {
            var iternode2846 = $("<span>");
            node12612.append(iternode2846);
            var it;
            it = mobl.ref(mobl.ref(results3046), i2846);
            
            var tmp32058 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp32058.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp32058.set(it.get() == selected.get());
            }));
            
            
            var node12613 = $("<span>");
            iternode2846.append(node12613);
            var condSubs2357 = new mobl.CompSubscription();
            subs__.addSub(condSubs2357);
            var oldValue2357;
            var renderCond2357 = function() {
              var value5295 = tmp32058.get();
              if(oldValue2357 === value5295) return;
              oldValue2357 = value5295;
              var subs__ = condSubs2357;
              subs__.unsubscribe();
              node12613.empty();
              if(value5295) {
                
                var tmp32054 = mobl.ref(false);
                
                
                var tmp32053 = mobl.ref(null);
                
                
                var tmp32052 = mobl.ref(null);
                
                var nodes18199 = $("<span>");
                node12613.append(nodes18199);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp32052, tmp32053, tmp32054, function(_, callback) {
                  var root26976 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes18200 = $("<span>");
                  root26976.append(nodes18200);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl5661();
                  }));
                  
                  function renderControl5661() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root26977 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root26977); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes18200;
                      nodes18200 = node.contents();
                      oldNodes.replaceWith(nodes18200);
                    }));
                  }
                  renderControl5661();
                  callback(root26976); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18199;
                  nodes18199 = node.contents();
                  oldNodes.replaceWith(nodes18199);
                }));
                
                
              } else {
                
                var tmp32056 = mobl.ref(true);
                
                
                var tmp32055 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp32057 = mobl.ref(null);
                
                var nodes18201 = $("<span>");
                node12613.append(nodes18201);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp32055, tmp32057, tmp32056, function(_, callback) {
                  var root26978 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes18202 = $("<span>");
                  root26978.append(nodes18202);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl5662();
                  }));
                  
                  function renderControl5662() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root26979 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root26979); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes18202;
                      nodes18202 = node.contents();
                      oldNodes.replaceWith(nodes18202);
                    }));
                  }
                  renderControl5662();
                  callback(root26978); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18201;
                  nodes18201 = node.contents();
                  oldNodes.replaceWith(nodes18201);
                }));
                
                
              }
            };
            renderCond2357();
            subs__.addSub(tmp32058.addEventListener('change', function() {
              renderCond2357();
            }));
            
            
            var oldNodes = iternode2846;
            iternode2846 = iternode2846.contents();
            oldNodes.replaceWith(iternode2846);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2846.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2846(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2846(true); }));
      });
    };
    renderList2846();
    
    callback(root26975); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18198;
    nodes18198 = node.contents();
    oldNodes.replaceWith(nodes18198);
  }));
  callback(root26974); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root26980 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes18203 = $("<span>");
    root26980.append(nodes18203);
    subs__.addSub((ui.group)(function(_, callback) {
      var root26981 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp32062 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp32062.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp32062.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp32062.set(coll.get().limit(n.get()));
      }));
      
      
      var node12614 = mobl.loadingSpan();
      root26981.append(node12614);
      var list2847;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2847 = function() {
        var subs__ = listSubs__;
        list2847 = tmp32062.get();
        list2847.list(function(results3047) {
          node12614.empty();
          for(var i2847 = 0; i2847 < results3047.length; i2847++) {
            (function() {
              var iternode2847 = $("<span>");
              node12614.append(iternode2847);
              var it;
              it = mobl.ref(mobl.ref(results3047), i2847);
              
              var tmp32059 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp32061 = mobl.ref(false);
              
              
              var tmp32060 = mobl.ref(null);
              
              var nodes18204 = $("<span>");
              iternode2847.append(nodes18204);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp32059, tmp32060, tmp32061, function(_, callback) {
                var root26982 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes18205 = $("<span>");
                root26982.append(nodes18205);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl5663();
                }));
                
                function renderControl5663() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root26983 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root26983); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes18205;
                    nodes18205 = node.contents();
                    oldNodes.replaceWith(nodes18205);
                  }));
                }
                renderControl5663();
                callback(root26982); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes18204;
                nodes18204 = node.contents();
                oldNodes.replaceWith(nodes18204);
              }));
              
              var oldNodes = iternode2847;
              iternode2847 = iternode2847.contents();
              oldNodes.replaceWith(iternode2847);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list2847.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2847(true); }));
          subs__.addSub(tmp32062.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2847(true); }));
        });
      };
      renderList2847();
      
      
      var tmp32065 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp32065.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp32065.set(n.get() < total.get());
      }));
      
      
      var node12615 = $("<span>");
      root26981.append(node12615);
      var condSubs2358 = new mobl.CompSubscription();
      subs__.addSub(condSubs2358);
      var oldValue2358;
      var renderCond2358 = function() {
        var value5296 = tmp32065.get();
        if(oldValue2358 === value5296) return;
        oldValue2358 = value5296;
        var subs__ = condSubs2358;
        subs__.unsubscribe();
        node12615.empty();
        if(value5296) {
          
          var node12616 = $("<li>");
          
          var ref13523 = mobl.ref(ui.loadMoreStyle);
          if(ref13523.get() !== null) {
            node12616.attr('class', ref13523.get());
            subs__.addSub(ref13523.addEventListener('change', function(_, ref, val) {
              node12616.attr('class', val);
            }));
            
          }
          subs__.addSub(ref13523.rebind());
          
          var val7493 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val7493 !== null) {
            subs__.addSub(mobl.domBind(node12616, 'tap', val7493));
          }
          
          
          var tmp32064 = mobl.ref(null);
          
          
          var tmp32063 = mobl.ref(null);
          
          var nodes18206 = $("<span>");
          node12616.append(nodes18206);
          subs__.addSub((mobl.label)(moreLabel, tmp32063, tmp32064, function(_, callback) {
            var root26984 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root26984); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes18206;
            nodes18206 = node.contents();
            oldNodes.replaceWith(nodes18206);
          }));
          node12615.append(node12616);
          
          
          
        } else {
          
        }
      };
      renderCond2358();
      subs__.addSub(tmp32065.addEventListener('change', function() {
        renderCond2358();
      }));
      
      callback(root26981); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes18203;
      nodes18203 = node.contents();
      oldNodes.replaceWith(nodes18203);
    }));
    callback(root26980); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root26985 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes18207 = $("<span>");
  root26985.append(nodes18207);
  subs__.addSub((ui.group)(function(_, callback) {
    var root26986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12617 = mobl.loadingSpan();
    root26986.append(node12617);
    var list2848;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2848 = function() {
      var subs__ = listSubs__;
      list2848 = items.get();
      list2848.list(function(results3048) {
        node12617.empty();
        for(var i2848 = 0; i2848 < results3048.length; i2848++) {
          (function() {
            var iternode2848 = $("<span>");
            node12617.append(iternode2848);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results3048), i2848), "_1");it = mobl.ref(mobl.ref(mobl.ref(results3048), i2848), "_2");
            
            var tmp32069 = mobl.ref(false);
            
            
            var tmp32068 = mobl.ref(null);
            
            
            var tmp32067 = mobl.ref(null);
            
            var nodes18208 = $("<span>");
            iternode2848.append(nodes18208);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp32067, tmp32068, tmp32069, function(_, callback) {
              var root26987 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp32066 = mobl.ref(null);
              
              var nodes18209 = $("<span>");
              root26987.append(nodes18209);
              subs__.addSub((ui.checkBox)(checked, it, tmp32066, function(_, callback) {
                var root26988 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root26988); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes18209;
                nodes18209 = node.contents();
                oldNodes.replaceWith(nodes18209);
              }));
              callback(root26987); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18208;
              nodes18208 = node.contents();
              oldNodes.replaceWith(nodes18208);
            }));
            
            var oldNodes = iternode2848;
            iternode2848 = iternode2848.contents();
            oldNodes.replaceWith(iternode2848);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2848.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2848(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2848(true); }));
      });
    };
    renderList2848();
    
    callback(root26986); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18207;
    nodes18207 = node.contents();
    oldNodes.replaceWith(nodes18207);
  }));
  callback(root26985); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root26989 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll5024) {
    coll5024 = coll5024.reverse();
    function processOne632() {
      var it;
      it = coll5024.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll5024.length > 0) processOne632(); else rest632();
      
    }
    function rest632() {
      
      var tmp32073 = mobl.ref(null);
      
      var nodes18210 = $("<span>");
      root26989.append(nodes18210);
      subs__.addSub((ui.header)(title, tmp32073, function(_, callback) {
        var root26990 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp32070 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp32071 = mobl.ref(mobl._("Back", []));
        
        var nodes18211 = $("<span>");
        root26990.append(nodes18211);
        subs__.addSub((ui.backButton)(tmp32071, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp32070, function(_, callback) {
          var root26991 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26991); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18211;
          nodes18211 = node.contents();
          oldNodes.replaceWith(nodes18211);
        }));
        
        var tmp32072 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll5023) {
                               coll5023 = coll5023.reverse();
                               function processOne631() {
                                 var checked;var it;
                                 var tmp32125 = coll5023.pop();
                                 checked = tmp32125._1;it = tmp32125._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll5023.length > 0) processOne631(); else rest631();
                                   
                                 } else {
                                   {
                                     
                                     if(coll5023.length > 0) processOne631(); else rest631();
                                     
                                   }
                                 }
                               }
                               function rest631() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll5023.length > 0) processOne631(); else rest631();
                             });
                             
                           });
        
        var nodes18212 = $("<span>");
        root26990.append(nodes18212);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp32072, function(_, callback) {
          var root26992 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26992); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18212;
          nodes18212 = node.contents();
          oldNodes.replaceWith(nodes18212);
        }));
        callback(root26990); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18210;
        nodes18210 = node.contents();
        oldNodes.replaceWith(nodes18210);
      }));
      var nodes18213 = $("<span>");
      root26989.append(nodes18213);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root26993 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root26993); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes18213;
        nodes18213 = node.contents();
        oldNodes.replaceWith(nodes18213);
      }));
      callback(root26989); return subs__;
      
      
    }
    if(coll5024.length > 0) processOne632(); else rest632();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root26994 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp32075 = mobl.ref(null);
  
  
  var tmp32074 = mobl.ref(null);
  
  var nodes18214 = $("<span>");
  root26994.append(nodes18214);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp32074, tmp32075, function(_, callback) {
    var root26995 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26995); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18214;
    nodes18214 = node.contents();
    oldNodes.replaceWith(nodes18214);
  }));
  
  var tmp32076 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp32076.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp32076.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp32076.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp32076.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp32076.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes18215 = $("<span>");
  root26994.append(nodes18215);
  subs__.addSub((ui.masterDetail)(tmp32076, masterItem, detailItem, function(_, callback) {
    var root26996 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26996); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18215;
    nodes18215 = node.contents();
    oldNodes.replaceWith(nodes18215);
  }));
  callback(root26994); return subs__;
  
  
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
  var root26997 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp32089 = mobl.ref(null);
  
  
  var tmp32088 = mobl.ref(null);
  
  
  var tmp32087 = mobl.ref(null);
  
  var nodes18216 = $("<span>");
  root26997.append(nodes18216);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp32087, tmp32088, tmp32089, function(_, callback) {
    var root26998 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12618 = mobl.loadingSpan();
    root26998.append(node12618);
    var list2849;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2849 = function() {
      var subs__ = listSubs__;
      list2849 = sections.get();
      list2849.list(function(results3049) {
        node12618.empty();
        for(var i2849 = 0; i2849 < results3049.length; i2849++) {
          (function() {
            var iternode2849 = $("<span>");
            node12618.append(iternode2849);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results3049), i2849), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results3049), i2849), "_2");
            
            var tmp32080 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp32080.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp32080.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp32080.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp32080.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp32079 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp32082 = mobl.ref(null);
            
            
            var tmp32081 = mobl.ref(null);
            
            var nodes18217 = $("<span>");
            iternode2849.append(nodes18217);
            subs__.addSub((mobl.span)(tmp32080, tmp32081, tmp32079, tmp32082, function(_, callback) {
              var root26999 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp32078 = mobl.ref(null);
              
              
              var tmp32077 = mobl.ref(null);
              
              var nodes18218 = $("<span>");
              root26999.append(nodes18218);
              subs__.addSub((mobl.label)(sectionName, tmp32077, tmp32078, function(_, callback) {
                var root27000 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root27000); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes18218;
                nodes18218 = node.contents();
                oldNodes.replaceWith(nodes18218);
              }));
              callback(root26999); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18217;
              nodes18217 = node.contents();
              oldNodes.replaceWith(nodes18217);
            }));
            
            var tmp32083 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp32083.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp32083.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp32083.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp32083.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp32086 = mobl.ref(null);
            
            
            var tmp32085 = mobl.ref(null);
            
            
            var tmp32084 = mobl.ref(null);
            
            var nodes18219 = $("<span>");
            iternode2849.append(nodes18219);
            subs__.addSub((mobl.block)(tmp32083, tmp32084, tmp32085, tmp32086, function(_, callback) {
              var root27001 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes18220 = $("<span>");
              root27001.append(nodes18220);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl5664();
              }));
              
              function renderControl5664() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root27002 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root27002); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18220;
                  nodes18220 = node.contents();
                  oldNodes.replaceWith(nodes18220);
                }));
              }
              renderControl5664();
              callback(root27001); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18219;
              nodes18219 = node.contents();
              oldNodes.replaceWith(nodes18219);
            }));
            
            var oldNodes = iternode2849;
            iternode2849 = iternode2849.contents();
            oldNodes.replaceWith(iternode2849);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2849.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2849(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2849(true); }));
      });
    };
    renderList2849();
    
    callback(root26998); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18216;
    nodes18216 = node.contents();
    oldNodes.replaceWith(nodes18216);
  }));
  callback(root26997); return subs__;
  
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
  var root27003 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12619 = $("<table>");
  
  var ref13524 = mobl.ref(ui.tableStyle);
  if(ref13524.get() !== null) {
    node12619.attr('class', ref13524.get());
    subs__.addSub(ref13524.addEventListener('change', function(_, ref, val) {
      node12619.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13524.rebind());
  
  var nodes18221 = $("<span>");
  node12619.append(nodes18221);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5665();
  }));
  
  function renderControl5665() {
    subs__.addSub((elements)(function(elements, callback) {
      var root27004 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27004); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18221;
      nodes18221 = node.contents();
      oldNodes.replaceWith(nodes18221);
    }));
  }
  renderControl5665();
  root27003.append(node12619);
  callback(root27003); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root27005 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12620 = $("<tr>");
  
  var ref13525 = mobl.ref(ui.trStyle);
  if(ref13525.get() !== null) {
    node12620.attr('class', ref13525.get());
    subs__.addSub(ref13525.addEventListener('change', function(_, ref, val) {
      node12620.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13525.rebind());
  
  var nodes18222 = $("<span>");
  node12620.append(nodes18222);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5666();
  }));
  
  function renderControl5666() {
    subs__.addSub((elements)(function(elements, callback) {
      var root27006 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27006); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18222;
      nodes18222 = node.contents();
      oldNodes.replaceWith(nodes18222);
    }));
  }
  renderControl5666();
  root27005.append(node12620);
  callback(root27005); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root27007 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12621 = $("<td>");
  
  var ref13526 = width;
  if(ref13526.get() !== null) {
    node12621.attr('width', ref13526.get());
    subs__.addSub(ref13526.addEventListener('change', function(_, ref, val) {
      node12621.attr('width', val);
    }));
    
  }
  subs__.addSub(ref13526.rebind());
  
  var ref13527 = mobl.ref(ui.tdStyle);
  if(ref13527.get() !== null) {
    node12621.attr('class', ref13527.get());
    subs__.addSub(ref13527.addEventListener('change', function(_, ref, val) {
      node12621.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13527.rebind());
  
  var nodes18223 = $("<span>");
  node12621.append(nodes18223);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5667();
  }));
  
  function renderControl5667() {
    subs__.addSub((elements)(function(elements, callback) {
      var root27008 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27008); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18223;
      nodes18223 = node.contents();
      oldNodes.replaceWith(nodes18223);
    }));
  }
  renderControl5667();
  root27007.append(node12621);
  callback(root27007); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root27009 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12622 = $("<td>");
  
  var ref13528 = width;
  if(ref13528.get() !== null) {
    node12622.attr('width', ref13528.get());
    subs__.addSub(ref13528.addEventListener('change', function(_, ref, val) {
      node12622.attr('width', val);
    }));
    
  }
  subs__.addSub(ref13528.rebind());
  
  var ref13529 = mobl.ref(ui.tdStyle);
  if(ref13529.get() !== null) {
    node12622.attr('class', ref13529.get());
    subs__.addSub(ref13529.addEventListener('change', function(_, ref, val) {
      node12622.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13529.rebind());
  
  var nodes18224 = $("<span>");
  node12622.append(nodes18224);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5668();
  }));
  
  function renderControl5668() {
    subs__.addSub((elements)(function(elements, callback) {
      var root27010 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27010); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18224;
      nodes18224 = node.contents();
      oldNodes.replaceWith(nodes18224);
    }));
  }
  renderControl5668();
  root27009.append(node12622);
  callback(root27009); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root27011 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12623 = $("<td>");
  
  var ref13530 = width;
  if(ref13530.get() !== null) {
    node12623.attr('width', ref13530.get());
    subs__.addSub(ref13530.addEventListener('change', function(_, ref, val) {
      node12623.attr('width', val);
    }));
    
  }
  subs__.addSub(ref13530.rebind());
  
  var ref13531 = mobl.ref(ui.tdStyle);
  if(ref13531.get() !== null) {
    node12623.attr('class', ref13531.get());
    subs__.addSub(ref13531.addEventListener('change', function(_, ref, val) {
      node12623.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13531.rebind());
  
  
  var node12624 = $("<strong>");
  
  var nodes18225 = $("<span>");
  node12624.append(nodes18225);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5669();
  }));
  
  function renderControl5669() {
    subs__.addSub((elements)(function(elements, callback) {
      var root27012 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27012); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18225;
      nodes18225 = node.contents();
      oldNodes.replaceWith(nodes18225);
    }));
  }
  renderControl5669();
  node12623.append(node12624);
  root27011.append(node12623);
  callback(root27011); return subs__;
  
  
  
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
  var root27013 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes18226 = $("<span>");
  root27013.append(nodes18226);
  subs__.addSub((ui.group)(function(_, callback) {
    var root27014 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12625 = mobl.loadingSpan();
    root27014.append(node12625);
    var list2850;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2850 = function() {
      var subs__ = listSubs__;
      list2850 = items.get();
      list2850.list(function(results3050) {
        node12625.empty();
        for(var i2850 = 0; i2850 < results3050.length; i2850++) {
          (function() {
            var iternode2850 = $("<span>");
            node12625.append(iternode2850);
            var it;
            it = mobl.ref(mobl.ref(results3050), i2850);
            
            var tmp32090 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp32127 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp32092 = mobl.ref(false);
            
            
            var tmp32091 = mobl.ref(null);
            
            var nodes18227 = $("<span>");
            iternode2850.append(nodes18227);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32090, tmp32091, tmp32092, function(_, callback) {
              var root27015 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes18228 = $("<span>");
              root27015.append(nodes18228);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl5670();
              }));
              
              function renderControl5670() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root27016 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root27016); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18228;
                  nodes18228 = node.contents();
                  oldNodes.replaceWith(nodes18228);
                }));
              }
              renderControl5670();
              callback(root27015); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18227;
              nodes18227 = node.contents();
              oldNodes.replaceWith(nodes18227);
            }));
            
            var oldNodes = iternode2850;
            iternode2850 = iternode2850.contents();
            oldNodes.replaceWith(iternode2850);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2850.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2850(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2850(true); }));
      });
    };
    renderList2850();
    
    callback(root27014); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18226;
    nodes18226 = node.contents();
    oldNodes.replaceWith(nodes18226);
  }));
  callback(root27013); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root27017 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp32094 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp32093 = mobl.ref("Back");
  
  var nodes18229 = $("<span>");
  root27017.append(nodes18229);
  subs__.addSub((ui.backButton)(tmp32093, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp32094, function(_, callback) {
    var root27018 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root27018); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18229;
    nodes18229 = node.contents();
    oldNodes.replaceWith(nodes18229);
  }));
  var nodes18230 = $("<span>");
  root27017.append(nodes18230);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl5671();
  }));
  
  function renderControl5671() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root27019 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27019); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18230;
      nodes18230 = node.contents();
      oldNodes.replaceWith(nodes18230);
    }));
  }
  renderControl5671();
  callback(root27017); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root27020 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12626 = $("<div>");
  
  var ref13535 = mobl.ref(ui.customHeaderStyle);
  if(ref13535.get() !== null) {
    node12626.attr('class', ref13535.get());
    subs__.addSub(ref13535.addEventListener('change', function(_, ref, val) {
      node12626.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13535.rebind());
  
  var val7494 = onclick.get();
  if(val7494 !== null) {
    subs__.addSub(mobl.domBind(node12626, 'tap', val7494));
  }
  
  
  var node12627 = $("<div>");
  
  var ref13534 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref13534.get() !== null) {
    node12627.attr('class', ref13534.get());
    subs__.addSub(ref13534.addEventListener('change', function(_, ref, val) {
      node12627.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13534.rebind());
  
  
  var node12628 = $("<div>");
  
  var ref13532 = text;
  node12628.text(""+ref13532.get());
  var ignore2719 = false;
  subs__.addSub(ref13532.addEventListener('change', function(_, ref, val) {
    if(ignore2719) return;
    node12628.text(""+val);
  }));
  subs__.addSub(ref13532.rebind());
  
  
  var ref13533 = mobl.ref(ui.customHeaderTextStyle);
  if(ref13533.get() !== null) {
    node12628.attr('class', ref13533.get());
    subs__.addSub(ref13533.addEventListener('change', function(_, ref, val) {
      node12628.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13533.rebind());
  
  node12627.append(node12628);
  node12626.append(node12627);
  var nodes18231 = $("<span>");
  node12626.append(nodes18231);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5672();
  }));
  
  function renderControl5672() {
    subs__.addSub((elements)(function(elements, callback) {
      var root27021 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27021); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18231;
      nodes18231 = node.contents();
      oldNodes.replaceWith(nodes18231);
    }));
  }
  renderControl5672();
  root27020.append(node12626);
  callback(root27020); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root27022 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref13536 = mobl.ref(ui.customItemStyle);
  if(ref13536.get() !== null) {
    el.attr('class', ref13536.get());
    subs__.addSub(ref13536.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13536.rebind());
  
  var ref13537 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref13537.get() !== null) {
    el.attr('class', ref13537.get());
    subs__.addSub(ref13537.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref13537.rebind());
  
  var val7495 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp32128 = result__;
                                           function after2453(result__) {
                                             var tmp32129 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after2453);if(result__ !== undefined) after2453(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp32130 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val7495 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val7495));
  }
  
  var nodes18232 = $("<span>");
  el.append(nodes18232);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5673();
  }));
  
  function renderControl5673() {
    subs__.addSub((elements)(function(elements, callback) {
      var root27023 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27023); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18232;
      nodes18232 = node.contents();
      oldNodes.replaceWith(nodes18232);
    }));
  }
  renderControl5673();
  root27022.append(el);
  callback(root27022); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root27024 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node12629 = $("<div>");
  node12629.attr('style', "height: 345px; margin-left: 25px; margin-top: 10px");
  
  
  var node12631 = mobl.loadingSpan();
  node12629.append(node12631);
  var list2852;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2852 = function() {
    var subs__ = listSubs__;
    list2852 = tabs.get();
    list2852.list(function(results3052) {
      node12631.empty();
      for(var i2852 = 0; i2852 < results3052.length; i2852++) {
        (function() {
          var iternode2852 = $("<span>");
          node12631.append(iternode2852);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results3052), i2852), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3052), i2852), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3052), i2852), "_3");
          
          var tmp32095 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp32095.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp32095.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp32095.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp32095.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp32098 = mobl.ref(null);
          
          
          var tmp32097 = mobl.ref(null);
          
          
          var tmp32096 = mobl.ref(null);
          
          var nodes18236 = $("<span>");
          iternode2852.append(nodes18236);
          subs__.addSub((mobl.block)(tmp32095, tmp32096, tmp32097, tmp32098, function(_, callback) {
            var root27028 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes18237 = $("<span>");
            root27028.append(nodes18237);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root27029 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes18238 = $("<span>");
              root27029.append(nodes18238);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl5674();
              }));
              
              function renderControl5674() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root27030 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root27030); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18238;
                  nodes18238 = node.contents();
                  oldNodes.replaceWith(nodes18238);
                }));
              }
              renderControl5674();
              callback(root27029); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18237;
              nodes18237 = node.contents();
              oldNodes.replaceWith(nodes18237);
            }));
            callback(root27028); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes18236;
            nodes18236 = node.contents();
            oldNodes.replaceWith(nodes18236);
          }));
          
          var oldNodes = iternode2852;
          iternode2852 = iternode2852.contents();
          oldNodes.replaceWith(iternode2852);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2852.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2852(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2852(true); }));
    });
  };
  renderList2852();
  
  root27024.append(node12629);
  
  var tmp32107 = mobl.ref(null);
  
  
  var tmp32106 = mobl.ref(null);
  
  
  var tmp32105 = mobl.ref(null);
  
  var nodes18233 = $("<span>");
  root27024.append(nodes18233);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp32105, tmp32106, tmp32107, function(_, callback) {
    var root27025 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12630 = mobl.loadingSpan();
    root27025.append(node12630);
    var list2851;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2851 = function() {
      var subs__ = listSubs__;
      list2851 = tabs.get();
      list2851.list(function(results3051) {
        node12630.empty();
        for(var i2851 = 0; i2851 < results3051.length; i2851++) {
          (function() {
            var iternode2851 = $("<span>");
            node12630.append(iternode2851);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results3051), i2851), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3051), i2851), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3051), i2851), "_3");
            
            var tmp32102 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp32102.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp32102.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp32102.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp32102.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp32101 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp32104 = mobl.ref(null);
            
            
            var tmp32103 = mobl.ref(null);
            
            var nodes18234 = $("<span>");
            iternode2851.append(nodes18234);
            subs__.addSub((mobl.span)(tmp32102, tmp32103, tmp32101, tmp32104, function(_, callback) {
              var root27026 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp32100 = mobl.ref(null);
              
              
              var tmp32099 = mobl.ref(null);
              
              var nodes18235 = $("<span>");
              root27026.append(nodes18235);
              subs__.addSub((mobl.label)(tabName, tmp32099, tmp32100, function(_, callback) {
                var root27027 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root27027); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes18235;
                nodes18235 = node.contents();
                oldNodes.replaceWith(nodes18235);
              }));
              callback(root27026); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18234;
              nodes18234 = node.contents();
              oldNodes.replaceWith(nodes18234);
            }));
            
            var oldNodes = iternode2851;
            iternode2851 = iternode2851.contents();
            oldNodes.replaceWith(iternode2851);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2851.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2851(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2851(true); }));
      });
    };
    renderList2851();
    
    callback(root27025); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18233;
    nodes18233 = node.contents();
    oldNodes.replaceWith(nodes18233);
  }));
  callback(root27024); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root27031 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var slider = $("<div>");
  
  root27031.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  callback(root27031); return subs__;
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
