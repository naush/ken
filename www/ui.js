mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root5122 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1874 = $("<span>");
  root5122.append(node1874);
  var condSubs248 = new mobl.CompSubscription();
  subs__.addSub(condSubs248);
  var oldValue248;
  var renderCond248 = function() {
    var value584 = value.get();
    if(oldValue248 === value584) return;
    oldValue248 = value584;
    var subs__ = condSubs248;
    subs__.unsubscribe();
    node1874.empty();
    if(value584) {
      var nodes4025 = $("<span>");
      node1874.append(nodes4025);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl675();
      }));
      
      function renderControl675() {
        subs__.addSub((elements)(function(elements, callback) {
          var root5123 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5123); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4025;
          nodes4025 = node.contents();
          oldNodes.replaceWith(nodes4025);
        }));
      }
      renderControl675();
      
      
    } else {
      
      var tmp10199 = mobl.ref(null);
      
      
      var tmp10198 = mobl.ref(null);
      
      
      var tmp10197 = mobl.ref(null);
      
      var nodes4026 = $("<span>");
      node1874.append(nodes4026);
      subs__.addSub((mobl.block)(style, tmp10197, tmp10198, tmp10199, function(_, callback) {
        var root5124 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10189 = mobl.ref(null);
        
        
        var tmp10188 = mobl.ref(null);
        
        var nodes4027 = $("<span>");
        root5124.append(nodes4027);
        subs__.addSub((mobl.label)(loadingMessage, tmp10188, tmp10189, function(_, callback) {
          var root5125 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5125); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4027;
          nodes4027 = node.contents();
          oldNodes.replaceWith(nodes4027);
        }));
        
        var tmp10191 = mobl.ref("middle");
        
        
        var tmp10190 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp10196 = mobl.ref(null);
        
        
        var tmp10195 = mobl.ref(null);
        
        
        var tmp10194 = mobl.ref(null);
        
        
        var tmp10193 = mobl.ref(null);
        
        
        var tmp10192 = mobl.ref(null);
        
        var nodes4028 = $("<span>");
        root5124.append(nodes4028);
        subs__.addSub((ui.image)(tmp10190, tmp10192, tmp10193, tmp10194, tmp10195, tmp10191, tmp10196, function(_, callback) {
          var root5126 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5126); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4028;
          nodes4028 = node.contents();
          oldNodes.replaceWith(nodes4028);
        }));
        callback(root5124); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4026;
        nodes4026 = node.contents();
        oldNodes.replaceWith(nodes4026);
      }));
      
      
    }
  };
  renderCond248();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond248();
  }));
  
  callback(root5122); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root5127 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1875 = $("<div>");
  
  var ref1492 = mobl.ref(ui.headerStyle);
  if(ref1492.get() !== null) {
    node1875.attr('class', ref1492.get());
    subs__.addSub(ref1492.addEventListener('change', function(_, ref, val) {
      node1875.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1492.rebind());
  
  var val810 = onclick.get();
  if(val810 !== null) {
    subs__.addSub(mobl.domBind(node1875, 'tap', val810));
  }
  
  
  var node1876 = $("<div>");
  
  var ref1491 = mobl.ref(ui.headerContainerStyle);
  if(ref1491.get() !== null) {
    node1876.attr('class', ref1491.get());
    subs__.addSub(ref1491.addEventListener('change', function(_, ref, val) {
      node1876.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1491.rebind());
  
  
  var node1877 = $("<div>");
  
  var ref1489 = text;
  node1877.text(""+ref1489.get());
  var ignore297 = false;
  subs__.addSub(ref1489.addEventListener('change', function(_, ref, val) {
    if(ignore297) return;
    node1877.text(""+val);
  }));
  subs__.addSub(ref1489.rebind());
  
  
  var ref1490 = mobl.ref(ui.headerTextStyle);
  if(ref1490.get() !== null) {
    node1877.attr('class', ref1490.get());
    subs__.addSub(ref1490.addEventListener('change', function(_, ref, val) {
      node1877.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1490.rebind());
  
  node1876.append(node1877);
  node1875.append(node1876);
  var nodes4029 = $("<span>");
  node1875.append(nodes4029);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl676();
  }));
  
  function renderControl676() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5128 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5128); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4029;
      nodes4029 = node.contents();
      oldNodes.replaceWith(nodes4029);
    }));
  }
  renderControl676();
  root5127.append(node1875);
  callback(root5127); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5129 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1493 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1493.get() !== null) {
    sp.attr('class', ref1493.get());
    subs__.addSub(ref1493.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1493.rebind());
  
  var val811 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val811 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val811));
  }
  
  var val812 = function(event, callback) {
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
  if(val812 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val812));
  }
  
  var val813 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after270(result__) {
                    var tmp10289 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after270);if(result__ !== undefined) after270(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val813 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val813));
  }
  
  var val814 = function(event, callback) {
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
  if(val814 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val814));
  }
  
  var ref1494 = text;
  sp.text(""+ref1494.get());
  var ignore298 = false;
  subs__.addSub(ref1494.addEventListener('change', function(_, ref, val) {
    if(ignore298) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1494.rebind());
  
  
  root5129.append(sp);
  callback(root5129); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5130 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4030 = $("<span>");
  root5130.append(nodes4030);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5131 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5131); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4030;
    nodes4030 = node.contents();
    oldNodes.replaceWith(nodes4030);
  }));
  callback(root5130); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5132 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4031 = $("<span>");
  root5132.append(nodes4031);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5133 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5133); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4031;
    nodes4031 = node.contents();
    oldNodes.replaceWith(nodes4031);
  }));
  callback(root5132); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root5134 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1878 = $("<ul>");
  
  var ref1495 = mobl.ref(ui.groupStyle);
  if(ref1495.get() !== null) {
    node1878.attr('class', ref1495.get());
    subs__.addSub(ref1495.addEventListener('change', function(_, ref, val) {
      node1878.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1495.rebind());
  
  var nodes4032 = $("<span>");
  node1878.append(nodes4032);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl677();
  }));
  
  function renderControl677() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5135); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4032;
      nodes4032 = node.contents();
      oldNodes.replaceWith(nodes4032);
    }));
  }
  renderControl677();
  root5134.append(node1878);
  callback(root5134); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root5136 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1879 = $("<img>");
  
  var ref1496 = url;
  if(ref1496.get() !== null) {
    node1879.attr('src', ref1496.get());
    subs__.addSub(ref1496.addEventListener('change', function(_, ref, val) {
      node1879.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1496.rebind());
  
  var ref1497 = width;
  if(ref1497.get() !== null) {
    node1879.attr('width', ref1497.get());
    subs__.addSub(ref1497.addEventListener('change', function(_, ref, val) {
      node1879.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1497.rebind());
  
  var ref1498 = height;
  if(ref1498.get() !== null) {
    node1879.attr('height', ref1498.get());
    subs__.addSub(ref1498.addEventListener('change', function(_, ref, val) {
      node1879.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1498.rebind());
  
  var ref1499 = style;
  if(ref1499.get() !== null) {
    node1879.attr('class', ref1499.get());
    subs__.addSub(ref1499.addEventListener('change', function(_, ref, val) {
      node1879.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1499.rebind());
  
  var val815 = onclick.get();
  if(val815 !== null) {
    subs__.addSub(mobl.domBind(node1879, 'tap', val815));
  }
  
  var ref1500 = valign;
  if(ref1500.get() !== null) {
    node1879.attr('valign', ref1500.get());
    subs__.addSub(ref1500.addEventListener('change', function(_, ref, val) {
      node1879.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1500.rebind());
  
  var ref1501 = align;
  if(ref1501.get() !== null) {
    node1879.attr('align', ref1501.get());
    subs__.addSub(ref1501.addEventListener('change', function(_, ref, val) {
      node1879.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1501.rebind());
  
  root5136.append(node1879);
  callback(root5136); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root5137 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1502 = mobl.ref(ui.itemStyle);
  if(ref1502.get() !== null) {
    el.attr('class', ref1502.get());
    subs__.addSub(ref1502.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1502.rebind());
  
  var ref1503 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1503.get() !== null) {
    el.attr('class', ref1503.get());
    subs__.addSub(ref1503.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1503.rebind());
  
  var val816 = onswipe.get();
  if(val816 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val816));
  }
  
  var val817 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp10290 = result__;
                                           function after271(result__) {
                                             var tmp10291 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after271);if(result__ !== undefined) after271(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp10292 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val817 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val817));
  }
  
  var nodes4033 = $("<span>");
  el.append(nodes4033);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl678();
  }));
  
  function renderControl678() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5138 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5138); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4033;
      nodes4033 = node.contents();
      oldNodes.replaceWith(nodes4033);
    }));
  }
  renderControl678();
  root5137.append(el);
  callback(root5137); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root5139 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1880 = $("<input>");
  node1880.attr('type', "checkbox");
  
  var ref1505 = b;
  node1880.attr('checked', !!ref1505.get());
  subs__.addSub(ref1505.addEventListener('change', function(_, ref, val) {
    if(ref === ref1505) node1880.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1880, 'change', function() {
    b.set(!!node1880.attr('checked'));
  }));
  
  var val819 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val819 !== null) {
    subs__.addSub(mobl.domBind(node1880, 'tap', val819));
  }
  
  var val820 = onchange.get();
  if(val820 !== null) {
    subs__.addSub(mobl.domBind(node1880, 'change', val820));
  }
  
  root5139.append(node1880);
  
  root5139.append(" ");
  
  var node1881 = $("<span>");
  
  var ref1504 = label;
  node1881.text(""+ref1504.get());
  var ignore299 = false;
  subs__.addSub(ref1504.addEventListener('change', function(_, ref, val) {
    if(ignore299) return;
    node1881.text(""+val);
  }));
  subs__.addSub(ref1504.rebind());
  
  
  var val818 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after272(result__) {
                    var tmp10293 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after272);if(result__ !== undefined) after272(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val818 !== null) {
    subs__.addSub(mobl.domBind(node1881, 'tap', val818));
  }
  
  root5139.append(node1881);
  callback(root5139); return subs__;
  
  
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
  var root5140 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1882 = $("<span>");
  root5140.append(node1882);
  var condSubs249 = new mobl.CompSubscription();
  subs__.addSub(condSubs249);
  var oldValue249;
  var renderCond249 = function() {
    var value585 = label.get();
    if(oldValue249 === value585) return;
    oldValue249 = value585;
    var subs__ = condSubs249;
    subs__.unsubscribe();
    node1882.empty();
    if(value585) {
      
      var tmp10200 = mobl.ref(null);
      
      var nodes4034 = $("<span>");
      node1882.append(nodes4034);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp10200, function(_, callback) {
        var root5141 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5141); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4034;
        nodes4034 = node.contents();
        oldNodes.replaceWith(nodes4034);
      }));
      
      
    } else {
      
    }
  };
  renderCond249();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond249();
  }));
  
  
  var node1883 = $("<span>");
  root5140.append(node1883);
  var condSubs250 = new mobl.CompSubscription();
  subs__.addSub(condSubs250);
  var oldValue250;
  var renderCond250 = function() {
    var value586 = validator.get();
    if(oldValue250 === value586) return;
    oldValue250 = value586;
    var subs__ = condSubs250;
    subs__.unsubscribe();
    node1883.empty();
    if(value586) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after276(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp10294 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1884 = $("<input>");
        node1884.attr('type', "text");
        
        var ref1506 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1506.get() !== null) {
          node1884.attr('class', ref1506.get());
          subs__.addSub(ref1506.addEventListener('change', function(_, ref, val) {
            node1884.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1884.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1884.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1884.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1506.rebind());
        
        var ref1507 = placeholder;
        if(ref1507.get() !== null) {
          node1884.attr('placeholder', ref1507.get());
          subs__.addSub(ref1507.addEventListener('change', function(_, ref, val) {
            node1884.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1507.rebind());
        
        var ref1508 = temp;
        node1884.val(""+ref1508.get());
        var ignore300 = false;
        subs__.addSub(ref1508.addEventListener('change', function(_, ref, val) {
          if(ignore300) return;
          node1884.val(""+val);
        }));
        subs__.addSub(ref1508.rebind());
        
        subs__.addSub(mobl.domBind(node1884, 'keyup change', function() {
          ignore300 = true;
          temp.set(mobl.stringTomobl__String(node1884.val()));
          ignore300 = false;
        }));
        
        
        var val821 = onchange.get();
        if(val821 !== null) {
          subs__.addSub(mobl.domBind(node1884, 'change', val821));
        }
        
        var val822 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after273(result__) {
                          var tmp10295 = result__;
                          function after274(result__) {
                            var tmp10296 = result__;
                            var result__ = tmp10296;
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
                          var result__ = validator.get()(temp.get(), after274);if(result__ !== undefined) after274(result__);
                        }
                        var result__ = onkeyup.get()(event, after273);if(result__ !== undefined) after273(result__);
                      } else {
                        {
                          function after275(result__) {
                            var tmp10296 = result__;
                            var result__ = tmp10296;
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
                          var result__ = validator.get()(temp.get(), after275);if(result__ !== undefined) after275(result__);
                        }
                      }
                    };
        if(val822 !== null) {
          subs__.addSub(mobl.domBind(node1884, 'keyup', val822));
        }
        
        var val823 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val823 !== null) {
          subs__.addSub(mobl.domBind(node1884, 'blur', val823));
        }
        
        node1883.append(node1884);
        
        var tmp10201 = mobl.ref(null);
        
        var nodes4035 = $("<span>");
        node1883.append(nodes4035);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp10201, function(_, callback) {
          var root5142 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5142); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4035;
          nodes4035 = node.contents();
          oldNodes.replaceWith(nodes4035);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after276);if(result__ !== undefined) after276(result__);
    } else {
      
      var node1885 = $("<input>");
      node1885.attr('type', "text");
      
      var ref1509 = style;
      if(ref1509.get() !== null) {
        node1885.attr('class', ref1509.get());
        subs__.addSub(ref1509.addEventListener('change', function(_, ref, val) {
          node1885.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1509.rebind());
      
      var ref1510 = placeholder;
      if(ref1510.get() !== null) {
        node1885.attr('placeholder', ref1510.get());
        subs__.addSub(ref1510.addEventListener('change', function(_, ref, val) {
          node1885.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1510.rebind());
      
      var ref1511 = s;
      node1885.val(""+ref1511.get());
      var ignore301 = false;
      subs__.addSub(ref1511.addEventListener('change', function(_, ref, val) {
        if(ignore301) return;
        node1885.val(""+val);
      }));
      subs__.addSub(ref1511.rebind());
      
      subs__.addSub(mobl.domBind(node1885, 'keyup change', function() {
        ignore301 = true;
        s.set(mobl.stringTomobl__String(node1885.val()));
        ignore301 = false;
      }));
      
      
      var val824 = onchange.get();
      if(val824 !== null) {
        subs__.addSub(mobl.domBind(node1885, 'change', val824));
      }
      
      var val825 = onkeyup.get();
      if(val825 !== null) {
        subs__.addSub(mobl.domBind(node1885, 'keyup', val825));
      }
      
      var val826 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val826 !== null) {
        subs__.addSub(mobl.domBind(node1885, 'blur', val826));
      }
      
      node1883.append(node1885);
      
      
    }
  };
  renderCond250();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond250();
  }));
  
  callback(root5140); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5143 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4036 = $("<span>");
  root5143.append(nodes4036);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5144 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5144); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4036;
    nodes4036 = node.contents();
    oldNodes.replaceWith(nodes4036);
  }));
  callback(root5143); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5145 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after277(result__) {
      var tmp10297 = result__;
      var result__ = tmp10297;
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
    var result__ = validator.get()(n2, after277);if(result__ !== undefined) after277(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes4037 = $("<span>");
  root5145.append(nodes4037);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5146 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5146); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4037;
    nodes4037 = node.contents();
    oldNodes.replaceWith(nodes4037);
  }));
  callback(root5145); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root5147 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1886 = $("<span>");
  root5147.append(node1886);
  var condSubs251 = new mobl.CompSubscription();
  subs__.addSub(condSubs251);
  var oldValue251;
  var renderCond251 = function() {
    var value587 = label.get();
    if(oldValue251 === value587) return;
    oldValue251 = value587;
    var subs__ = condSubs251;
    subs__.unsubscribe();
    node1886.empty();
    if(value587) {
      
      var node1887 = $("<span>");
      node1887.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1515 = label;
      node1887.text(""+ref1515.get());
      var ignore303 = false;
      subs__.addSub(ref1515.addEventListener('change', function(_, ref, val) {
        if(ignore303) return;
        node1887.text(""+val);
      }));
      subs__.addSub(ref1515.rebind());
      
      
      node1886.append(node1887);
      
      var node1888 = $("<span>");
      node1888.attr('style', "float: left");
      
      
      var node1889 = $("<input>");
      node1889.attr('type', "password");
      
      var ref1512 = style;
      if(ref1512.get() !== null) {
        node1889.attr('class', ref1512.get());
        subs__.addSub(ref1512.addEventListener('change', function(_, ref, val) {
          node1889.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1512.rebind());
      
      var ref1513 = placeholder;
      if(ref1513.get() !== null) {
        node1889.attr('placeholder', ref1513.get());
        subs__.addSub(ref1513.addEventListener('change', function(_, ref, val) {
          node1889.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1513.rebind());
      
      var ref1514 = s;
      node1889.val(""+ref1514.get());
      var ignore302 = false;
      subs__.addSub(ref1514.addEventListener('change', function(_, ref, val) {
        if(ignore302) return;
        node1889.val(""+val);
      }));
      subs__.addSub(ref1514.rebind());
      
      subs__.addSub(mobl.domBind(node1889, 'keyup change', function() {
        ignore302 = true;
        s.set(mobl.stringTomobl__String(node1889.val()));
        ignore302 = false;
      }));
      
      
      var val827 = onchange.get();
      if(val827 !== null) {
        subs__.addSub(mobl.domBind(node1889, 'change', val827));
      }
      
      var val828 = onkeyup.get();
      if(val828 !== null) {
        subs__.addSub(mobl.domBind(node1889, 'keyup', val828));
      }
      
      var val829 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val829 !== null) {
        subs__.addSub(mobl.domBind(node1889, 'blur', val829));
      }
      
      node1888.append(node1889);
      node1886.append(node1888);
      
      
      
      
    } else {
      
      var node1890 = $("<input>");
      node1890.attr('type', "password");
      
      var ref1516 = style;
      if(ref1516.get() !== null) {
        node1890.attr('class', ref1516.get());
        subs__.addSub(ref1516.addEventListener('change', function(_, ref, val) {
          node1890.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1516.rebind());
      
      var ref1517 = placeholder;
      if(ref1517.get() !== null) {
        node1890.attr('placeholder', ref1517.get());
        subs__.addSub(ref1517.addEventListener('change', function(_, ref, val) {
          node1890.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1517.rebind());
      
      var ref1518 = s;
      node1890.val(""+ref1518.get());
      var ignore304 = false;
      subs__.addSub(ref1518.addEventListener('change', function(_, ref, val) {
        if(ignore304) return;
        node1890.val(""+val);
      }));
      subs__.addSub(ref1518.rebind());
      
      subs__.addSub(mobl.domBind(node1890, 'keyup change', function() {
        ignore304 = true;
        s.set(mobl.stringTomobl__String(node1890.val()));
        ignore304 = false;
      }));
      
      
      var val830 = onchange.get();
      if(val830 !== null) {
        subs__.addSub(mobl.domBind(node1890, 'change', val830));
      }
      
      var val831 = onkeyup.get();
      if(val831 !== null) {
        subs__.addSub(mobl.domBind(node1890, 'keyup', val831));
      }
      
      var val832 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val832 !== null) {
        subs__.addSub(mobl.domBind(node1890, 'blur', val832));
      }
      
      node1886.append(node1890);
      
      
    }
  };
  renderCond251();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond251();
  }));
  
  callback(root5147); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root5148 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1523 = style;
  if(ref1523.get() !== null) {
    sel.attr('class', ref1523.get());
    subs__.addSub(ref1523.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1523.rebind());
  
  var val833 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after278(result__) {
                    var tmp10299 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after278);if(result__ !== undefined) after278(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val833 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val833));
  }
  
  
  var node1891 = mobl.loadingSpan();
  sel.append(node1891);
  var list342;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList342 = function() {
    var subs__ = listSubs__;
    list342 = options.get();
    list342.list(function(results342) {
      node1891.empty();
      for(var i395 = 0; i395 < results342.length; i395++) {
        (function() {
          var iternode342 = $("<span>");
          node1891.append(iternode342);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results342), i395), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results342), i395), "_2");
          
          var node1892 = $("<option>");
          
          var ref1519 = optionDescription;
          node1892.text(""+ref1519.get());
          var ignore305 = false;
          subs__.addSub(ref1519.addEventListener('change', function(_, ref, val) {
            if(ignore305) return;
            node1892.text(""+val);
          }));
          subs__.addSub(ref1519.rebind());
          
          
          var ref1520 = optionStyle;
          if(ref1520.get() !== null) {
            node1892.attr('class', ref1520.get());
            subs__.addSub(ref1520.addEventListener('change', function(_, ref, val) {
              node1892.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1520.rebind());
          
          var ref1521 = optionValue;
          if(ref1521.get() !== null) {
            node1892.attr('value', ref1521.get());
            subs__.addSub(ref1521.addEventListener('change', function(_, ref, val) {
              node1892.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1521.rebind());
          
          var ref1522 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1522.get() !== null) {
            node1892.attr('selected', ref1522.get());
            subs__.addSub(ref1522.addEventListener('change', function(_, ref, val) {
              node1892.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1892.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1892.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1522.rebind());
          
          iternode342.append(node1892);
          
          var oldNodes = iternode342;
          iternode342 = iternode342.contents();
          oldNodes.replaceWith(iternode342);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list342.addEventListener('change', function() { listSubs__.unsubscribe(); renderList342(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList342(true); }));
    });
  };
  renderList342();
  
  root5148.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root5148); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root5149 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp10210 = mobl.ref(null);
  
  
  var tmp10209 = mobl.ref(null);
  
  
  var tmp10208 = mobl.ref(null);
  
  var nodes4038 = $("<span>");
  root5149.append(nodes4038);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp10208, tmp10209, tmp10210, function(_, callback) {
    var root5150 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1893 = mobl.loadingSpan();
    root5150.append(node1893);
    var list343;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList343 = function() {
      var subs__ = listSubs__;
      list343 = tabs.get();
      list343.list(function(results343) {
        node1893.empty();
        for(var i396 = 0; i396 < results343.length; i396++) {
          (function() {
            var iternode343 = $("<span>");
            node1893.append(iternode343);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results343), i396), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results343), i396), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results343), i396), "_3");
            
            var tmp10205 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp10205.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp10205.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp10205.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp10205.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp10204 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp10207 = mobl.ref(null);
            
            
            var tmp10206 = mobl.ref(null);
            
            var nodes4039 = $("<span>");
            iternode343.append(nodes4039);
            subs__.addSub((mobl.span)(tmp10205, tmp10206, tmp10204, tmp10207, function(_, callback) {
              var root5151 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp10203 = mobl.ref(null);
              
              
              var tmp10202 = mobl.ref(null);
              
              var nodes4040 = $("<span>");
              root5151.append(nodes4040);
              subs__.addSub((mobl.label)(tabName, tmp10202, tmp10203, function(_, callback) {
                var root5152 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5152); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4040;
                nodes4040 = node.contents();
                oldNodes.replaceWith(nodes4040);
              }));
              callback(root5151); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4039;
              nodes4039 = node.contents();
              oldNodes.replaceWith(nodes4039);
            }));
            
            var oldNodes = iternode343;
            iternode343 = iternode343.contents();
            oldNodes.replaceWith(iternode343);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list343.addEventListener('change', function() { listSubs__.unsubscribe(); renderList343(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList343(true); }));
      });
    };
    renderList343();
    
    callback(root5150); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4038;
    nodes4038 = node.contents();
    oldNodes.replaceWith(nodes4038);
  }));
  
  var node1894 = mobl.loadingSpan();
  root5149.append(node1894);
  var list344;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList344 = function() {
    var subs__ = listSubs__;
    list344 = tabs.get();
    list344.list(function(results344) {
      node1894.empty();
      for(var i397 = 0; i397 < results344.length; i397++) {
        (function() {
          var iternode344 = $("<span>");
          node1894.append(iternode344);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results344), i397), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results344), i397), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results344), i397), "_3");
          
          var tmp10211 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp10211.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp10211.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp10211.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp10211.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp10214 = mobl.ref(null);
          
          
          var tmp10213 = mobl.ref(null);
          
          
          var tmp10212 = mobl.ref(null);
          
          var nodes4041 = $("<span>");
          iternode344.append(nodes4041);
          subs__.addSub((mobl.block)(tmp10211, tmp10212, tmp10213, tmp10214, function(_, callback) {
            var root5153 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes4042 = $("<span>");
            root5153.append(nodes4042);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root5154 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4043 = $("<span>");
              root5154.append(nodes4043);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl679();
              }));
              
              function renderControl679() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root5155 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5155); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4043;
                  nodes4043 = node.contents();
                  oldNodes.replaceWith(nodes4043);
                }));
              }
              renderControl679();
              callback(root5154); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4042;
              nodes4042 = node.contents();
              oldNodes.replaceWith(nodes4042);
            }));
            callback(root5153); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4041;
            nodes4041 = node.contents();
            oldNodes.replaceWith(nodes4041);
          }));
          
          var oldNodes = iternode344;
          iternode344 = iternode344.contents();
          oldNodes.replaceWith(iternode344);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list344.addEventListener('change', function() { listSubs__.unsubscribe(); renderList344(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList344(true); }));
    });
  };
  renderList344();
  
  callback(root5149); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root5156 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1895 = $("<div>");
  
  var ref1527 = mobl.ref(ui.searchboxStyle);
  if(ref1527.get() !== null) {
    node1895.attr('class', ref1527.get());
    subs__.addSub(ref1527.addEventListener('change', function(_, ref, val) {
      node1895.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1527.rebind());
  
  
  var node1896 = $("<input>");
  node1896.attr('type', "search");
  
  var ref1524 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1524.get() !== null) {
    node1896.attr('class', ref1524.get());
    subs__.addSub(ref1524.addEventListener('change', function(_, ref, val) {
      node1896.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1524.rebind());
  
  var ref1525 = placeholder;
  if(ref1525.get() !== null) {
    node1896.attr('placeholder', ref1525.get());
    subs__.addSub(ref1525.addEventListener('change', function(_, ref, val) {
      node1896.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1525.rebind());
  
  var ref1526 = s;
  node1896.val(""+ref1526.get());
  var ignore306 = false;
  subs__.addSub(ref1526.addEventListener('change', function(_, ref, val) {
    if(ignore306) return;
    node1896.val(""+val);
  }));
  subs__.addSub(ref1526.rebind());
  
  subs__.addSub(mobl.domBind(node1896, 'keyup change', function() {
    ignore306 = true;
    s.set(mobl.stringTomobl__String(node1896.val()));
    ignore306 = false;
  }));
  
  
  var val834 = onsearch.get();
  if(val834 !== null) {
    subs__.addSub(mobl.domBind(node1896, 'change', val834));
  }
  
  var val835 = onkeyup.get();
  if(val835 !== null) {
    subs__.addSub(mobl.domBind(node1896, 'keyup', val835));
  }
  node1896.attr('autocorrect', false);
  node1896.attr('autocapitalize', false);
  node1896.attr('autocomplete', false);
  
  node1895.append(node1896);
  root5156.append(node1895);
  callback(root5156); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root5157 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1528 = mobl.ref(ui.contextMenuStyle);
  if(ref1528.get() !== null) {
    menu.attr('class', ref1528.get());
    subs__.addSub(ref1528.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1528.rebind());
  
  var nodes4044 = $("<span>");
  menu.append(nodes4044);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl680();
  }));
  
  function renderControl680() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5158); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4044;
      nodes4044 = node.contents();
      oldNodes.replaceWith(nodes4044);
    }));
  }
  renderControl680();
  root5157.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val836 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp10302 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val836 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val836));
  }
  
  root5157.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root5157); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root5159 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10288 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp10288.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1897 = $("<span>");
  root5159.append(node1897);
  var condSubs252 = new mobl.CompSubscription();
  subs__.addSub(condSubs252);
  var oldValue252;
  var renderCond252 = function() {
    var value588 = tmp10288.get();
    if(oldValue252 === value588) return;
    oldValue252 = value588;
    var subs__ = condSubs252;
    subs__.unsubscribe();
    node1897.empty();
    if(value588) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node1898 = $("<div>");
        node1898.attr('width', "100%");
        
        
        var node1899 = $("<div>");
        node1899.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes4047 = $("<span>");
        node1899.append(nodes4047);
        subs__.addSub((ui.group)(function(_, callback) {
          var root5162 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1902 = mobl.loadingSpan();
          root5162.append(node1902);
          var list345;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList345 = function() {
            var subs__ = listSubs__;
            list345 = items.get();
            list345.list(function(results345) {
              node1902.empty();
              for(var i398 = 0; i398 < results345.length; i398++) {
                (function() {
                  var iternode345 = $("<span>");
                  node1902.append(iternode345);
                  var it;
                  it = mobl.ref(mobl.ref(results345), i398);
                  
                  var tmp10228 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp10228.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp10228.set(it.get() == current.get());
                  }));
                  
                  
                  var node1903 = $("<span>");
                  iternode345.append(node1903);
                  var condSubs254 = new mobl.CompSubscription();
                  subs__.addSub(condSubs254);
                  var oldValue254;
                  var renderCond254 = function() {
                    var value590 = tmp10228.get();
                    if(oldValue254 === value590) return;
                    oldValue254 = value590;
                    var subs__ = condSubs254;
                    subs__.unsubscribe();
                    node1903.empty();
                    if(value590) {
                      
                      var tmp10224 = mobl.ref(false);
                      
                      
                      var tmp10223 = mobl.ref(null);
                      
                      
                      var tmp10222 = mobl.ref(null);
                      
                      var nodes4048 = $("<span>");
                      node1903.append(nodes4048);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp10222, tmp10223, tmp10224, function(_, callback) {
                        var root5163 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4049 = $("<span>");
                        root5163.append(nodes4049);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl682();
                        }));
                        
                        function renderControl682() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5164 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5164); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4049;
                            nodes4049 = node.contents();
                            oldNodes.replaceWith(nodes4049);
                          }));
                        }
                        renderControl682();
                        callback(root5163); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4048;
                        nodes4048 = node.contents();
                        oldNodes.replaceWith(nodes4048);
                      }));
                      
                      
                    } else {
                      
                      var tmp10226 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp10225 = mobl.ref(true);
                      
                      
                      var tmp10227 = mobl.ref(null);
                      
                      var nodes4050 = $("<span>");
                      node1903.append(nodes4050);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10226, tmp10227, tmp10225, function(_, callback) {
                        var root5165 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4051 = $("<span>");
                        root5165.append(nodes4051);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl683();
                        }));
                        
                        function renderControl683() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5166 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5166); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4051;
                            nodes4051 = node.contents();
                            oldNodes.replaceWith(nodes4051);
                          }));
                        }
                        renderControl683();
                        callback(root5165); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4050;
                        nodes4050 = node.contents();
                        oldNodes.replaceWith(nodes4050);
                      }));
                      
                      
                    }
                  };
                  renderCond254();
                  subs__.addSub(tmp10228.addEventListener('change', function() {
                    renderCond254();
                  }));
                  
                  
                  var oldNodes = iternode345;
                  iternode345 = iternode345.contents();
                  oldNodes.replaceWith(iternode345);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list345.addEventListener('change', function() { listSubs__.unsubscribe(); renderList345(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList345(true); }));
            });
          };
          renderList345();
          
          callback(root5162); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4047;
          nodes4047 = node.contents();
          oldNodes.replaceWith(nodes4047);
        }));
        node1898.append(node1899);
        
        var node1900 = $("<div>");
        node1900.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1901 = $("<span>");
        node1900.append(node1901);
        var condSubs253 = new mobl.CompSubscription();
        subs__.addSub(condSubs253);
        var oldValue253;
        var renderCond253 = function() {
          var value589 = current.get();
          if(oldValue253 === value589) return;
          oldValue253 = value589;
          var subs__ = condSubs253;
          subs__.unsubscribe();
          node1901.empty();
          if(value589) {
            var nodes4045 = $("<span>");
            node1901.append(nodes4045);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl681();
            }));
            
            function renderControl681() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root5160 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5160); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4045;
                nodes4045 = node.contents();
                oldNodes.replaceWith(nodes4045);
              }));
            }
            renderControl681();
            
            
          } else {
            
            var tmp10229 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp10231 = mobl.ref(null);
            
            
            var tmp10230 = mobl.ref(null);
            
            var nodes4046 = $("<span>");
            node1901.append(nodes4046);
            subs__.addSub((mobl.label)(tmp10229, tmp10230, tmp10231, function(_, callback) {
              var root5161 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5161); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4046;
              nodes4046 = node.contents();
              oldNodes.replaceWith(nodes4046);
            }));
            
            
          }
        };
        renderCond253();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond253();
        }));
        
        node1898.append(node1900);
        node1897.append(node1898);
        
        
        
        
        
        
      });
    } else {
      var nodes4052 = $("<span>");
      node1897.append(nodes4052);
      subs__.addSub((ui.group)(function(_, callback) {
        var root5167 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1904 = mobl.loadingSpan();
        root5167.append(node1904);
        var list346;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList346 = function() {
          var subs__ = listSubs__;
          list346 = items.get();
          list346.list(function(results346) {
            node1904.empty();
            for(var i399 = 0; i399 < results346.length; i399++) {
              (function() {
                var iternode346 = $("<span>");
                node1904.append(iternode346);
                var it;
                it = mobl.ref(mobl.ref(results346), i399);
                
                var tmp10215 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp10303 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp10217 = mobl.ref(false);
                
                
                var tmp10216 = mobl.ref(null);
                
                var nodes4053 = $("<span>");
                iternode346.append(nodes4053);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10215, tmp10216, tmp10217, function(_, callback) {
                  var root5168 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4054 = $("<span>");
                  root5168.append(nodes4054);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl684();
                  }));
                  
                  function renderControl684() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root5169 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5169); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4054;
                      nodes4054 = node.contents();
                      oldNodes.replaceWith(nodes4054);
                    }));
                  }
                  renderControl684();
                  callback(root5168); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4053;
                  nodes4053 = node.contents();
                  oldNodes.replaceWith(nodes4053);
                }));
                
                var oldNodes = iternode346;
                iternode346 = iternode346.contents();
                oldNodes.replaceWith(iternode346);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list346.addEventListener('change', function() { listSubs__.unsubscribe(); renderList346(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList346(true); }));
          });
        };
        renderList346();
        
        callback(root5167); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4052;
        nodes4052 = node.contents();
        oldNodes.replaceWith(nodes4052);
      }));
      
      
    }
  };
  renderCond252();
  subs__.addSub(tmp10288.addEventListener('change', function() {
    renderCond252();
  }));
  
  callback(root5159); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root5170 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10220 = mobl.ref("Detail");
  
  
  var tmp10221 = mobl.ref(null);
  
  var nodes4055 = $("<span>");
  root5170.append(nodes4055);
  subs__.addSub((ui.header)(tmp10220, tmp10221, function(_, callback) {
    var root5171 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp10219 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp10218 = mobl.ref("Back");
    
    var nodes4056 = $("<span>");
    root5171.append(nodes4056);
    subs__.addSub((ui.backButton)(tmp10218, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10219, function(_, callback) {
      var root5172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5172); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4056;
      nodes4056 = node.contents();
      oldNodes.replaceWith(nodes4056);
    }));
    callback(root5171); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4055;
    nodes4055 = node.contents();
    oldNodes.replaceWith(nodes4055);
  }));
  var nodes4057 = $("<span>");
  root5170.append(nodes4057);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl685();
  }));
  
  function renderControl685() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root5173 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5173); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4057;
      nodes4057 = node.contents();
      oldNodes.replaceWith(nodes4057);
    }));
  }
  renderControl685();
  callback(root5170); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root5174 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes4058 = $("<span>");
  root5174.append(nodes4058);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5175 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1905 = mobl.loadingSpan();
    root5175.append(node1905);
    var list347;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList347 = function() {
      var subs__ = listSubs__;
      list347 = coll.get();
      list347.list(function(results347) {
        node1905.empty();
        for(var i400 = 0; i400 < results347.length; i400++) {
          (function() {
            var iternode347 = $("<span>");
            node1905.append(iternode347);
            var it;
            it = mobl.ref(mobl.ref(results347), i400);
            
            var tmp10238 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp10238.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp10238.set(it.get() == selected.get());
            }));
            
            
            var node1906 = $("<span>");
            iternode347.append(node1906);
            var condSubs255 = new mobl.CompSubscription();
            subs__.addSub(condSubs255);
            var oldValue255;
            var renderCond255 = function() {
              var value591 = tmp10238.get();
              if(oldValue255 === value591) return;
              oldValue255 = value591;
              var subs__ = condSubs255;
              subs__.unsubscribe();
              node1906.empty();
              if(value591) {
                
                var tmp10234 = mobl.ref(false);
                
                
                var tmp10233 = mobl.ref(null);
                
                
                var tmp10232 = mobl.ref(null);
                
                var nodes4059 = $("<span>");
                node1906.append(nodes4059);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10232, tmp10233, tmp10234, function(_, callback) {
                  var root5176 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4060 = $("<span>");
                  root5176.append(nodes4060);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl686();
                  }));
                  
                  function renderControl686() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root5177 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5177); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4060;
                      nodes4060 = node.contents();
                      oldNodes.replaceWith(nodes4060);
                    }));
                  }
                  renderControl686();
                  callback(root5176); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4059;
                  nodes4059 = node.contents();
                  oldNodes.replaceWith(nodes4059);
                }));
                
                
              } else {
                
                var tmp10236 = mobl.ref(true);
                
                
                var tmp10235 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp10237 = mobl.ref(null);
                
                var nodes4061 = $("<span>");
                node1906.append(nodes4061);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10235, tmp10237, tmp10236, function(_, callback) {
                  var root5178 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4062 = $("<span>");
                  root5178.append(nodes4062);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl687();
                  }));
                  
                  function renderControl687() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root5179 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5179); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4062;
                      nodes4062 = node.contents();
                      oldNodes.replaceWith(nodes4062);
                    }));
                  }
                  renderControl687();
                  callback(root5178); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4061;
                  nodes4061 = node.contents();
                  oldNodes.replaceWith(nodes4061);
                }));
                
                
              }
            };
            renderCond255();
            subs__.addSub(tmp10238.addEventListener('change', function() {
              renderCond255();
            }));
            
            
            var oldNodes = iternode347;
            iternode347 = iternode347.contents();
            oldNodes.replaceWith(iternode347);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list347.addEventListener('change', function() { listSubs__.unsubscribe(); renderList347(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList347(true); }));
      });
    };
    renderList347();
    
    callback(root5175); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4058;
    nodes4058 = node.contents();
    oldNodes.replaceWith(nodes4058);
  }));
  callback(root5174); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root5180 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes4063 = $("<span>");
    root5180.append(nodes4063);
    subs__.addSub((ui.group)(function(_, callback) {
      var root5181 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10242 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp10242.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp10242.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp10242.set(coll.get().limit(n.get()));
      }));
      
      
      var node1907 = mobl.loadingSpan();
      root5181.append(node1907);
      var list348;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList348 = function() {
        var subs__ = listSubs__;
        list348 = tmp10242.get();
        list348.list(function(results348) {
          node1907.empty();
          for(var i401 = 0; i401 < results348.length; i401++) {
            (function() {
              var iternode348 = $("<span>");
              node1907.append(iternode348);
              var it;
              it = mobl.ref(mobl.ref(results348), i401);
              
              var tmp10239 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp10241 = mobl.ref(false);
              
              
              var tmp10240 = mobl.ref(null);
              
              var nodes4064 = $("<span>");
              iternode348.append(nodes4064);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10239, tmp10240, tmp10241, function(_, callback) {
                var root5182 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4065 = $("<span>");
                root5182.append(nodes4065);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl688();
                }));
                
                function renderControl688() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root5183 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5183); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4065;
                    nodes4065 = node.contents();
                    oldNodes.replaceWith(nodes4065);
                  }));
                }
                renderControl688();
                callback(root5182); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4064;
                nodes4064 = node.contents();
                oldNodes.replaceWith(nodes4064);
              }));
              
              var oldNodes = iternode348;
              iternode348 = iternode348.contents();
              oldNodes.replaceWith(iternode348);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list348.addEventListener('change', function() { listSubs__.unsubscribe(); renderList348(true); }));
          subs__.addSub(tmp10242.addEventListener('change', function() { listSubs__.unsubscribe(); renderList348(true); }));
        });
      };
      renderList348();
      
      
      var tmp10245 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp10245.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp10245.set(n.get() < total.get());
      }));
      
      
      var node1908 = $("<span>");
      root5181.append(node1908);
      var condSubs256 = new mobl.CompSubscription();
      subs__.addSub(condSubs256);
      var oldValue256;
      var renderCond256 = function() {
        var value592 = tmp10245.get();
        if(oldValue256 === value592) return;
        oldValue256 = value592;
        var subs__ = condSubs256;
        subs__.unsubscribe();
        node1908.empty();
        if(value592) {
          
          var node1909 = $("<li>");
          
          var ref1529 = mobl.ref(ui.loadMoreStyle);
          if(ref1529.get() !== null) {
            node1909.attr('class', ref1529.get());
            subs__.addSub(ref1529.addEventListener('change', function(_, ref, val) {
              node1909.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1529.rebind());
          
          var val837 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val837 !== null) {
            subs__.addSub(mobl.domBind(node1909, 'tap', val837));
          }
          
          
          var tmp10244 = mobl.ref(null);
          
          
          var tmp10243 = mobl.ref(null);
          
          var nodes4066 = $("<span>");
          node1909.append(nodes4066);
          subs__.addSub((mobl.label)(moreLabel, tmp10243, tmp10244, function(_, callback) {
            var root5184 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5184); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4066;
            nodes4066 = node.contents();
            oldNodes.replaceWith(nodes4066);
          }));
          node1908.append(node1909);
          
          
          
        } else {
          
        }
      };
      renderCond256();
      subs__.addSub(tmp10245.addEventListener('change', function() {
        renderCond256();
      }));
      
      callback(root5181); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4063;
      nodes4063 = node.contents();
      oldNodes.replaceWith(nodes4063);
    }));
    callback(root5180); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root5185 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4067 = $("<span>");
  root5185.append(nodes4067);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5186 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1910 = mobl.loadingSpan();
    root5186.append(node1910);
    var list349;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList349 = function() {
      var subs__ = listSubs__;
      list349 = items.get();
      list349.list(function(results349) {
        node1910.empty();
        for(var i402 = 0; i402 < results349.length; i402++) {
          (function() {
            var iternode349 = $("<span>");
            node1910.append(iternode349);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results349), i402), "_1");it = mobl.ref(mobl.ref(mobl.ref(results349), i402), "_2");
            
            var tmp10249 = mobl.ref(false);
            
            
            var tmp10248 = mobl.ref(null);
            
            
            var tmp10247 = mobl.ref(null);
            
            var nodes4068 = $("<span>");
            iternode349.append(nodes4068);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10247, tmp10248, tmp10249, function(_, callback) {
              var root5187 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp10246 = mobl.ref(null);
              
              var nodes4069 = $("<span>");
              root5187.append(nodes4069);
              subs__.addSub((ui.checkBox)(checked, it, tmp10246, function(_, callback) {
                var root5188 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5188); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4069;
                nodes4069 = node.contents();
                oldNodes.replaceWith(nodes4069);
              }));
              callback(root5187); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4068;
              nodes4068 = node.contents();
              oldNodes.replaceWith(nodes4068);
            }));
            
            var oldNodes = iternode349;
            iternode349 = iternode349.contents();
            oldNodes.replaceWith(iternode349);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list349.addEventListener('change', function() { listSubs__.unsubscribe(); renderList349(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList349(true); }));
      });
    };
    renderList349();
    
    callback(root5186); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4067;
    nodes4067 = node.contents();
    oldNodes.replaceWith(nodes4067);
  }));
  callback(root5185); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root5189 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll618) {
    coll618 = coll618.reverse();
    function processOne67() {
      var it;
      it = coll618.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll618.length > 0) processOne67(); else rest67();
      
    }
    function rest67() {
      
      var tmp10253 = mobl.ref(null);
      
      var nodes4070 = $("<span>");
      root5189.append(nodes4070);
      subs__.addSub((ui.header)(title, tmp10253, function(_, callback) {
        var root5190 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10250 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10251 = mobl.ref(mobl._("Back", []));
        
        var nodes4071 = $("<span>");
        root5190.append(nodes4071);
        subs__.addSub((ui.backButton)(tmp10251, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10250, function(_, callback) {
          var root5191 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5191); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4071;
          nodes4071 = node.contents();
          oldNodes.replaceWith(nodes4071);
        }));
        
        var tmp10252 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll617) {
                               coll617 = coll617.reverse();
                               function processOne66() {
                                 var checked;var it;
                                 var tmp10305 = coll617.pop();
                                 checked = tmp10305._1;it = tmp10305._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll617.length > 0) processOne66(); else rest66();
                                   
                                 } else {
                                   {
                                     
                                     if(coll617.length > 0) processOne66(); else rest66();
                                     
                                   }
                                 }
                               }
                               function rest66() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll617.length > 0) processOne66(); else rest66();
                             });
                             
                           });
        
        var nodes4072 = $("<span>");
        root5190.append(nodes4072);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10252, function(_, callback) {
          var root5192 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5192); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4072;
          nodes4072 = node.contents();
          oldNodes.replaceWith(nodes4072);
        }));
        callback(root5190); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4070;
        nodes4070 = node.contents();
        oldNodes.replaceWith(nodes4070);
      }));
      var nodes4073 = $("<span>");
      root5189.append(nodes4073);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root5193 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5193); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4073;
        nodes4073 = node.contents();
        oldNodes.replaceWith(nodes4073);
      }));
      callback(root5189); return subs__;
      
      
    }
    if(coll618.length > 0) processOne67(); else rest67();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root5194 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp10255 = mobl.ref(null);
  
  
  var tmp10254 = mobl.ref(null);
  
  var nodes4074 = $("<span>");
  root5194.append(nodes4074);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp10254, tmp10255, function(_, callback) {
    var root5195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5195); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4074;
    nodes4074 = node.contents();
    oldNodes.replaceWith(nodes4074);
  }));
  
  var tmp10256 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp10256.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp10256.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp10256.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp10256.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp10256.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes4075 = $("<span>");
  root5194.append(nodes4075);
  subs__.addSub((ui.masterDetail)(tmp10256, masterItem, detailItem, function(_, callback) {
    var root5196 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5196); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4075;
    nodes4075 = node.contents();
    oldNodes.replaceWith(nodes4075);
  }));
  callback(root5194); return subs__;
  
  
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
  var root5197 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp10269 = mobl.ref(null);
  
  
  var tmp10268 = mobl.ref(null);
  
  
  var tmp10267 = mobl.ref(null);
  
  var nodes4076 = $("<span>");
  root5197.append(nodes4076);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp10267, tmp10268, tmp10269, function(_, callback) {
    var root5198 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1911 = mobl.loadingSpan();
    root5198.append(node1911);
    var list350;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList350 = function() {
      var subs__ = listSubs__;
      list350 = sections.get();
      list350.list(function(results350) {
        node1911.empty();
        for(var i403 = 0; i403 < results350.length; i403++) {
          (function() {
            var iternode350 = $("<span>");
            node1911.append(iternode350);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results350), i403), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results350), i403), "_2");
            
            var tmp10260 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp10260.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp10260.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp10260.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp10260.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp10259 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp10262 = mobl.ref(null);
            
            
            var tmp10261 = mobl.ref(null);
            
            var nodes4077 = $("<span>");
            iternode350.append(nodes4077);
            subs__.addSub((mobl.span)(tmp10260, tmp10261, tmp10259, tmp10262, function(_, callback) {
              var root5199 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp10258 = mobl.ref(null);
              
              
              var tmp10257 = mobl.ref(null);
              
              var nodes4078 = $("<span>");
              root5199.append(nodes4078);
              subs__.addSub((mobl.label)(sectionName, tmp10257, tmp10258, function(_, callback) {
                var root5200 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5200); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4078;
                nodes4078 = node.contents();
                oldNodes.replaceWith(nodes4078);
              }));
              callback(root5199); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4077;
              nodes4077 = node.contents();
              oldNodes.replaceWith(nodes4077);
            }));
            
            var tmp10263 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp10263.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp10263.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp10263.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp10263.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp10266 = mobl.ref(null);
            
            
            var tmp10265 = mobl.ref(null);
            
            
            var tmp10264 = mobl.ref(null);
            
            var nodes4079 = $("<span>");
            iternode350.append(nodes4079);
            subs__.addSub((mobl.block)(tmp10263, tmp10264, tmp10265, tmp10266, function(_, callback) {
              var root5201 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4080 = $("<span>");
              root5201.append(nodes4080);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl689();
              }));
              
              function renderControl689() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root5202 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5202); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4080;
                  nodes4080 = node.contents();
                  oldNodes.replaceWith(nodes4080);
                }));
              }
              renderControl689();
              callback(root5201); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4079;
              nodes4079 = node.contents();
              oldNodes.replaceWith(nodes4079);
            }));
            
            var oldNodes = iternode350;
            iternode350 = iternode350.contents();
            oldNodes.replaceWith(iternode350);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list350.addEventListener('change', function() { listSubs__.unsubscribe(); renderList350(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList350(true); }));
      });
    };
    renderList350();
    
    callback(root5198); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4076;
    nodes4076 = node.contents();
    oldNodes.replaceWith(nodes4076);
  }));
  callback(root5197); return subs__;
  
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
  var root5203 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1912 = $("<table>");
  
  var ref1530 = mobl.ref(ui.tableStyle);
  if(ref1530.get() !== null) {
    node1912.attr('class', ref1530.get());
    subs__.addSub(ref1530.addEventListener('change', function(_, ref, val) {
      node1912.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1530.rebind());
  
  var nodes4081 = $("<span>");
  node1912.append(nodes4081);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl690();
  }));
  
  function renderControl690() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5204 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5204); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4081;
      nodes4081 = node.contents();
      oldNodes.replaceWith(nodes4081);
    }));
  }
  renderControl690();
  root5203.append(node1912);
  callback(root5203); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root5205 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1913 = $("<tr>");
  
  var ref1531 = mobl.ref(ui.trStyle);
  if(ref1531.get() !== null) {
    node1913.attr('class', ref1531.get());
    subs__.addSub(ref1531.addEventListener('change', function(_, ref, val) {
      node1913.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1531.rebind());
  
  var nodes4082 = $("<span>");
  node1913.append(nodes4082);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl691();
  }));
  
  function renderControl691() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5206 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5206); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4082;
      nodes4082 = node.contents();
      oldNodes.replaceWith(nodes4082);
    }));
  }
  renderControl691();
  root5205.append(node1913);
  callback(root5205); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root5207 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1914 = $("<td>");
  
  var ref1532 = width;
  if(ref1532.get() !== null) {
    node1914.attr('width', ref1532.get());
    subs__.addSub(ref1532.addEventListener('change', function(_, ref, val) {
      node1914.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1532.rebind());
  
  var ref1533 = mobl.ref(ui.tdStyle);
  if(ref1533.get() !== null) {
    node1914.attr('class', ref1533.get());
    subs__.addSub(ref1533.addEventListener('change', function(_, ref, val) {
      node1914.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1533.rebind());
  
  var nodes4083 = $("<span>");
  node1914.append(nodes4083);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl692();
  }));
  
  function renderControl692() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5208 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5208); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4083;
      nodes4083 = node.contents();
      oldNodes.replaceWith(nodes4083);
    }));
  }
  renderControl692();
  root5207.append(node1914);
  callback(root5207); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root5209 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1915 = $("<td>");
  
  var ref1534 = width;
  if(ref1534.get() !== null) {
    node1915.attr('width', ref1534.get());
    subs__.addSub(ref1534.addEventListener('change', function(_, ref, val) {
      node1915.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1534.rebind());
  
  var ref1535 = mobl.ref(ui.tdStyle);
  if(ref1535.get() !== null) {
    node1915.attr('class', ref1535.get());
    subs__.addSub(ref1535.addEventListener('change', function(_, ref, val) {
      node1915.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1535.rebind());
  
  var nodes4084 = $("<span>");
  node1915.append(nodes4084);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl693();
  }));
  
  function renderControl693() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5210 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5210); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4084;
      nodes4084 = node.contents();
      oldNodes.replaceWith(nodes4084);
    }));
  }
  renderControl693();
  root5209.append(node1915);
  callback(root5209); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root5211 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1916 = $("<td>");
  
  var ref1536 = width;
  if(ref1536.get() !== null) {
    node1916.attr('width', ref1536.get());
    subs__.addSub(ref1536.addEventListener('change', function(_, ref, val) {
      node1916.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1536.rebind());
  
  var ref1537 = mobl.ref(ui.tdStyle);
  if(ref1537.get() !== null) {
    node1916.attr('class', ref1537.get());
    subs__.addSub(ref1537.addEventListener('change', function(_, ref, val) {
      node1916.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1537.rebind());
  
  
  var node1917 = $("<strong>");
  
  var nodes4085 = $("<span>");
  node1917.append(nodes4085);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl694();
  }));
  
  function renderControl694() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5212 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5212); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4085;
      nodes4085 = node.contents();
      oldNodes.replaceWith(nodes4085);
    }));
  }
  renderControl694();
  node1916.append(node1917);
  root5211.append(node1916);
  callback(root5211); return subs__;
  
  
  
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
  var root5213 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4086 = $("<span>");
  root5213.append(nodes4086);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5214 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1918 = mobl.loadingSpan();
    root5214.append(node1918);
    var list351;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList351 = function() {
      var subs__ = listSubs__;
      list351 = items.get();
      list351.list(function(results351) {
        node1918.empty();
        for(var i404 = 0; i404 < results351.length; i404++) {
          (function() {
            var iternode351 = $("<span>");
            node1918.append(iternode351);
            var it;
            it = mobl.ref(mobl.ref(results351), i404);
            
            var tmp10270 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp10307 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp10272 = mobl.ref(false);
            
            
            var tmp10271 = mobl.ref(null);
            
            var nodes4087 = $("<span>");
            iternode351.append(nodes4087);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp10270, tmp10271, tmp10272, function(_, callback) {
              var root5215 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4088 = $("<span>");
              root5215.append(nodes4088);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl695();
              }));
              
              function renderControl695() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root5216 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5216); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4088;
                  nodes4088 = node.contents();
                  oldNodes.replaceWith(nodes4088);
                }));
              }
              renderControl695();
              callback(root5215); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4087;
              nodes4087 = node.contents();
              oldNodes.replaceWith(nodes4087);
            }));
            
            var oldNodes = iternode351;
            iternode351 = iternode351.contents();
            oldNodes.replaceWith(iternode351);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list351.addEventListener('change', function() { listSubs__.unsubscribe(); renderList351(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList351(true); }));
      });
    };
    renderList351();
    
    callback(root5214); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4086;
    nodes4086 = node.contents();
    oldNodes.replaceWith(nodes4086);
  }));
  callback(root5213); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root5217 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10274 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp10273 = mobl.ref("Back");
  
  var nodes4089 = $("<span>");
  root5217.append(nodes4089);
  subs__.addSub((ui.backButton)(tmp10273, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10274, function(_, callback) {
    var root5218 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5218); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4089;
    nodes4089 = node.contents();
    oldNodes.replaceWith(nodes4089);
  }));
  var nodes4090 = $("<span>");
  root5217.append(nodes4090);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl696();
  }));
  
  function renderControl696() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root5219 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5219); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4090;
      nodes4090 = node.contents();
      oldNodes.replaceWith(nodes4090);
    }));
  }
  renderControl696();
  callback(root5217); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root5220 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1919 = $("<div>");
  
  var ref1541 = mobl.ref(ui.customHeaderStyle);
  if(ref1541.get() !== null) {
    node1919.attr('class', ref1541.get());
    subs__.addSub(ref1541.addEventListener('change', function(_, ref, val) {
      node1919.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1541.rebind());
  
  var val838 = onclick.get();
  if(val838 !== null) {
    subs__.addSub(mobl.domBind(node1919, 'tap', val838));
  }
  
  
  var node1920 = $("<div>");
  
  var ref1540 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref1540.get() !== null) {
    node1920.attr('class', ref1540.get());
    subs__.addSub(ref1540.addEventListener('change', function(_, ref, val) {
      node1920.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1540.rebind());
  
  
  var node1921 = $("<div>");
  
  var ref1538 = text;
  node1921.text(""+ref1538.get());
  var ignore307 = false;
  subs__.addSub(ref1538.addEventListener('change', function(_, ref, val) {
    if(ignore307) return;
    node1921.text(""+val);
  }));
  subs__.addSub(ref1538.rebind());
  
  
  var ref1539 = mobl.ref(ui.customHeaderTextStyle);
  if(ref1539.get() !== null) {
    node1921.attr('class', ref1539.get());
    subs__.addSub(ref1539.addEventListener('change', function(_, ref, val) {
      node1921.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1539.rebind());
  
  node1920.append(node1921);
  node1919.append(node1920);
  var nodes4091 = $("<span>");
  node1919.append(nodes4091);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl697();
  }));
  
  function renderControl697() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5221); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4091;
      nodes4091 = node.contents();
      oldNodes.replaceWith(nodes4091);
    }));
  }
  renderControl697();
  root5220.append(node1919);
  callback(root5220); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root5222 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1542 = mobl.ref(ui.customItemStyle);
  if(ref1542.get() !== null) {
    el.attr('class', ref1542.get());
    subs__.addSub(ref1542.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1542.rebind());
  
  var ref1543 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref1543.get() !== null) {
    el.attr('class', ref1543.get());
    subs__.addSub(ref1543.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1543.rebind());
  
  var val839 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp10308 = result__;
                                           function after279(result__) {
                                             var tmp10309 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after279);if(result__ !== undefined) after279(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp10310 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val839 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val839));
  }
  
  var nodes4092 = $("<span>");
  el.append(nodes4092);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl698();
  }));
  
  function renderControl698() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5223); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4092;
      nodes4092 = node.contents();
      oldNodes.replaceWith(nodes4092);
    }));
  }
  renderControl698();
  root5222.append(el);
  callback(root5222); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root5224 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node1922 = $("<div>");
  node1922.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node1924 = mobl.loadingSpan();
  node1922.append(node1924);
  var list353;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList353 = function() {
    var subs__ = listSubs__;
    list353 = tabs.get();
    list353.list(function(results353) {
      node1924.empty();
      for(var i406 = 0; i406 < results353.length; i406++) {
        (function() {
          var iternode353 = $("<span>");
          node1924.append(iternode353);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results353), i406), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results353), i406), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results353), i406), "_3");
          
          var tmp10275 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp10275.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp10275.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp10275.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp10275.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp10278 = mobl.ref(null);
          
          
          var tmp10277 = mobl.ref(null);
          
          
          var tmp10276 = mobl.ref(null);
          
          var nodes4096 = $("<span>");
          iternode353.append(nodes4096);
          subs__.addSub((mobl.block)(tmp10275, tmp10276, tmp10277, tmp10278, function(_, callback) {
            var root5228 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes4097 = $("<span>");
            root5228.append(nodes4097);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root5229 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4098 = $("<span>");
              root5229.append(nodes4098);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl699();
              }));
              
              function renderControl699() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root5230 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5230); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4098;
                  nodes4098 = node.contents();
                  oldNodes.replaceWith(nodes4098);
                }));
              }
              renderControl699();
              callback(root5229); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4097;
              nodes4097 = node.contents();
              oldNodes.replaceWith(nodes4097);
            }));
            callback(root5228); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4096;
            nodes4096 = node.contents();
            oldNodes.replaceWith(nodes4096);
          }));
          
          var oldNodes = iternode353;
          iternode353 = iternode353.contents();
          oldNodes.replaceWith(iternode353);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list353.addEventListener('change', function() { listSubs__.unsubscribe(); renderList353(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList353(true); }));
    });
  };
  renderList353();
  
  root5224.append(node1922);
  
  var tmp10287 = mobl.ref(null);
  
  
  var tmp10286 = mobl.ref(null);
  
  
  var tmp10285 = mobl.ref(null);
  
  var nodes4093 = $("<span>");
  root5224.append(nodes4093);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp10285, tmp10286, tmp10287, function(_, callback) {
    var root5225 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1923 = mobl.loadingSpan();
    root5225.append(node1923);
    var list352;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList352 = function() {
      var subs__ = listSubs__;
      list352 = tabs.get();
      list352.list(function(results352) {
        node1923.empty();
        for(var i405 = 0; i405 < results352.length; i405++) {
          (function() {
            var iternode352 = $("<span>");
            node1923.append(iternode352);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results352), i405), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results352), i405), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results352), i405), "_3");
            
            var tmp10282 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp10282.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp10282.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp10282.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp10282.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp10281 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp10284 = mobl.ref(null);
            
            
            var tmp10283 = mobl.ref(null);
            
            var nodes4094 = $("<span>");
            iternode352.append(nodes4094);
            subs__.addSub((mobl.span)(tmp10282, tmp10283, tmp10281, tmp10284, function(_, callback) {
              var root5226 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp10280 = mobl.ref(null);
              
              
              var tmp10279 = mobl.ref(null);
              
              var nodes4095 = $("<span>");
              root5226.append(nodes4095);
              subs__.addSub((mobl.label)(tabName, tmp10279, tmp10280, function(_, callback) {
                var root5227 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5227); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4095;
                nodes4095 = node.contents();
                oldNodes.replaceWith(nodes4095);
              }));
              callback(root5226); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4094;
              nodes4094 = node.contents();
              oldNodes.replaceWith(nodes4094);
            }));
            
            var oldNodes = iternode352;
            iternode352 = iternode352.contents();
            oldNodes.replaceWith(iternode352);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list352.addEventListener('change', function() { listSubs__.unsubscribe(); renderList352(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList352(true); }));
      });
    };
    renderList352();
    
    callback(root5225); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4093;
    nodes4093 = node.contents();
    oldNodes.replaceWith(nodes4093);
  }));
  callback(root5224); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root5231 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1925 = $("<div>");
  node1925.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node1925.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  root5231.append(node1925);
  callback(root5231); return subs__;
  
  
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
