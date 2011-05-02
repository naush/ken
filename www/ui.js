mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root7142 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2777 = $("<span>");
  root7142.append(node2777);
  var condSubs186 = new mobl.CompSubscription();
  subs__.addSub(condSubs186);
  var oldValue186;
  var renderCond186 = function() {
    var value654 = value.get();
    if(oldValue186 === value654) return;
    oldValue186 = value654;
    var subs__ = condSubs186;
    subs__.unsubscribe();
    node2777.empty();
    if(value654) {
      var nodes6175 = $("<span>");
      node2777.append(nodes6175);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl500();
      }));
      
      function renderControl500() {
        subs__.addSub((elements)(function(elements, callback) {
          var root7143 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7143); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6175;
          nodes6175 = node.contents();
          oldNodes.replaceWith(nodes6175);
        }));
      }
      renderControl500();
      
      
    } else {
      
      var tmp19531 = mobl.ref(null);
      
      
      var tmp19530 = mobl.ref(null);
      
      
      var tmp19529 = mobl.ref(null);
      
      var nodes6176 = $("<span>");
      node2777.append(nodes6176);
      subs__.addSub((mobl.block)(style, tmp19529, tmp19530, tmp19531, function(_, callback) {
        var root7144 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp19521 = mobl.ref(null);
        
        
        var tmp19520 = mobl.ref(null);
        
        var nodes6177 = $("<span>");
        root7144.append(nodes6177);
        subs__.addSub((mobl.label)(loadingMessage, tmp19520, tmp19521, function(_, callback) {
          var root7145 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7145); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6177;
          nodes6177 = node.contents();
          oldNodes.replaceWith(nodes6177);
        }));
        
        var tmp19523 = mobl.ref("middle");
        
        
        var tmp19522 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp19528 = mobl.ref(null);
        
        
        var tmp19527 = mobl.ref(null);
        
        
        var tmp19526 = mobl.ref(null);
        
        
        var tmp19525 = mobl.ref(null);
        
        
        var tmp19524 = mobl.ref(null);
        
        var nodes6178 = $("<span>");
        root7144.append(nodes6178);
        subs__.addSub((ui.image)(tmp19522, tmp19524, tmp19525, tmp19526, tmp19527, tmp19523, tmp19528, function(_, callback) {
          var root7146 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7146); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6178;
          nodes6178 = node.contents();
          oldNodes.replaceWith(nodes6178);
        }));
        callback(root7144); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6176;
        nodes6176 = node.contents();
        oldNodes.replaceWith(nodes6176);
      }));
      
      
    }
  };
  renderCond186();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond186();
  }));
  
  callback(root7142); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root7147 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2778 = $("<div>");
  
  var ref1737 = mobl.ref(ui.headerStyle);
  if(ref1737.get() !== null) {
    node2778.attr('class', ref1737.get());
    subs__.addSub(ref1737.addEventListener('change', function(_, ref, val) {
      node2778.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1737.rebind());
  
  var val1966 = onclick.get();
  if(val1966 !== null) {
    subs__.addSub(mobl.domBind(node2778, 'tap', val1966));
  }
  
  
  var node2779 = $("<div>");
  
  var ref1736 = mobl.ref(ui.headerContainerStyle);
  if(ref1736.get() !== null) {
    node2779.attr('class', ref1736.get());
    subs__.addSub(ref1736.addEventListener('change', function(_, ref, val) {
      node2779.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1736.rebind());
  
  
  var node2780 = $("<div>");
  
  var ref1734 = text;
  node2780.text(""+ref1734.get());
  var ignore220 = false;
  subs__.addSub(ref1734.addEventListener('change', function(_, ref, val) {
    if(ignore220) return;
    node2780.text(""+val);
  }));
  subs__.addSub(ref1734.rebind());
  
  
  var ref1735 = mobl.ref(ui.headerTextStyle);
  if(ref1735.get() !== null) {
    node2780.attr('class', ref1735.get());
    subs__.addSub(ref1735.addEventListener('change', function(_, ref, val) {
      node2780.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1735.rebind());
  
  node2779.append(node2780);
  node2778.append(node2779);
  var nodes6179 = $("<span>");
  node2778.append(nodes6179);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl501();
  }));
  
  function renderControl501() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7148 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7148); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6179;
      nodes6179 = node.contents();
      oldNodes.replaceWith(nodes6179);
    }));
  }
  renderControl501();
  root7147.append(node2778);
  callback(root7147); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7149 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1738 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1738.get() !== null) {
    sp.attr('class', ref1738.get());
    subs__.addSub(ref1738.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1738.rebind());
  
  var val1967 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1967 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1967));
  }
  
  var val1968 = function(event, callback) {
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
  if(val1968 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1968));
  }
  
  var val1969 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after200(result__) {
                    var tmp19621 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after200);if(result__ !== undefined) after200(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1969 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1969));
  }
  
  var val1970 = function(event, callback) {
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
  if(val1970 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1970));
  }
  
  var ref1739 = text;
  sp.text(""+ref1739.get());
  var ignore221 = false;
  subs__.addSub(ref1739.addEventListener('change', function(_, ref, val) {
    if(ignore221) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1739.rebind());
  
  
  root7149.append(sp);
  callback(root7149); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7150 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6180 = $("<span>");
  root7150.append(nodes6180);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root7151 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7151); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6180;
    nodes6180 = node.contents();
    oldNodes.replaceWith(nodes6180);
  }));
  callback(root7150); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7152 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6181 = $("<span>");
  root7152.append(nodes6181);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root7153 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7153); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6181;
    nodes6181 = node.contents();
    oldNodes.replaceWith(nodes6181);
  }));
  callback(root7152); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root7154 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2781 = $("<ul>");
  
  var ref1740 = mobl.ref(ui.groupStyle);
  if(ref1740.get() !== null) {
    node2781.attr('class', ref1740.get());
    subs__.addSub(ref1740.addEventListener('change', function(_, ref, val) {
      node2781.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1740.rebind());
  
  var nodes6182 = $("<span>");
  node2781.append(nodes6182);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl502();
  }));
  
  function renderControl502() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7155 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7155); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6182;
      nodes6182 = node.contents();
      oldNodes.replaceWith(nodes6182);
    }));
  }
  renderControl502();
  root7154.append(node2781);
  callback(root7154); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root7156 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2782 = $("<img>");
  
  var ref1741 = url;
  if(ref1741.get() !== null) {
    node2782.attr('src', ref1741.get());
    subs__.addSub(ref1741.addEventListener('change', function(_, ref, val) {
      node2782.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1741.rebind());
  
  var ref1742 = width;
  if(ref1742.get() !== null) {
    node2782.attr('width', ref1742.get());
    subs__.addSub(ref1742.addEventListener('change', function(_, ref, val) {
      node2782.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1742.rebind());
  
  var ref1743 = height;
  if(ref1743.get() !== null) {
    node2782.attr('height', ref1743.get());
    subs__.addSub(ref1743.addEventListener('change', function(_, ref, val) {
      node2782.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1743.rebind());
  
  var ref1744 = style;
  if(ref1744.get() !== null) {
    node2782.attr('class', ref1744.get());
    subs__.addSub(ref1744.addEventListener('change', function(_, ref, val) {
      node2782.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1744.rebind());
  
  var val1971 = onclick.get();
  if(val1971 !== null) {
    subs__.addSub(mobl.domBind(node2782, 'tap', val1971));
  }
  
  var ref1745 = valign;
  if(ref1745.get() !== null) {
    node2782.attr('valign', ref1745.get());
    subs__.addSub(ref1745.addEventListener('change', function(_, ref, val) {
      node2782.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1745.rebind());
  
  var ref1746 = align;
  if(ref1746.get() !== null) {
    node2782.attr('align', ref1746.get());
    subs__.addSub(ref1746.addEventListener('change', function(_, ref, val) {
      node2782.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1746.rebind());
  
  root7156.append(node2782);
  callback(root7156); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root7157 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1747 = mobl.ref(ui.itemStyle);
  if(ref1747.get() !== null) {
    el.attr('class', ref1747.get());
    subs__.addSub(ref1747.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1747.rebind());
  
  var ref1748 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1748.get() !== null) {
    el.attr('class', ref1748.get());
    subs__.addSub(ref1748.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1748.rebind());
  
  var val1972 = onswipe.get();
  if(val1972 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1972));
  }
  
  var val1973 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp19622 = result__;
                                           function after201(result__) {
                                             var tmp19623 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after201);if(result__ !== undefined) after201(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp19624 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1973 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1973));
  }
  
  var nodes6183 = $("<span>");
  el.append(nodes6183);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl503();
  }));
  
  function renderControl503() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7158); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6183;
      nodes6183 = node.contents();
      oldNodes.replaceWith(nodes6183);
    }));
  }
  renderControl503();
  root7157.append(el);
  callback(root7157); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root7159 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2783 = $("<input>");
  node2783.attr('type', "checkbox");
  
  var ref1750 = b;
  node2783.attr('checked', !!ref1750.get());
  subs__.addSub(ref1750.addEventListener('change', function(_, ref, val) {
    if(ref === ref1750) node2783.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2783, 'change', function() {
    b.set(!!node2783.attr('checked'));
  }));
  
  var val1975 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1975 !== null) {
    subs__.addSub(mobl.domBind(node2783, 'tap', val1975));
  }
  
  var val1976 = onchange.get();
  if(val1976 !== null) {
    subs__.addSub(mobl.domBind(node2783, 'change', val1976));
  }
  
  root7159.append(node2783);
  
  root7159.append(" ");
  
  var node2784 = $("<span>");
  
  var ref1749 = label;
  node2784.text(""+ref1749.get());
  var ignore222 = false;
  subs__.addSub(ref1749.addEventListener('change', function(_, ref, val) {
    if(ignore222) return;
    node2784.text(""+val);
  }));
  subs__.addSub(ref1749.rebind());
  
  
  var val1974 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after202(result__) {
                    var tmp19625 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after202);if(result__ !== undefined) after202(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1974 !== null) {
    subs__.addSub(mobl.domBind(node2784, 'tap', val1974));
  }
  
  root7159.append(node2784);
  callback(root7159); return subs__;
  
  
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
  var root7160 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2785 = $("<span>");
  root7160.append(node2785);
  var condSubs187 = new mobl.CompSubscription();
  subs__.addSub(condSubs187);
  var oldValue187;
  var renderCond187 = function() {
    var value655 = label.get();
    if(oldValue187 === value655) return;
    oldValue187 = value655;
    var subs__ = condSubs187;
    subs__.unsubscribe();
    node2785.empty();
    if(value655) {
      
      var tmp19532 = mobl.ref(null);
      
      var nodes6184 = $("<span>");
      node2785.append(nodes6184);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp19532, function(_, callback) {
        var root7161 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7161); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6184;
        nodes6184 = node.contents();
        oldNodes.replaceWith(nodes6184);
      }));
      
      
    } else {
      
    }
  };
  renderCond187();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond187();
  }));
  
  
  var node2786 = $("<span>");
  root7160.append(node2786);
  var condSubs188 = new mobl.CompSubscription();
  subs__.addSub(condSubs188);
  var oldValue188;
  var renderCond188 = function() {
    var value656 = validator.get();
    if(oldValue188 === value656) return;
    oldValue188 = value656;
    var subs__ = condSubs188;
    subs__.unsubscribe();
    node2786.empty();
    if(value656) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after206(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp19626 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2787 = $("<input>");
        node2787.attr('type', "text");
        
        var ref1751 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1751.get() !== null) {
          node2787.attr('class', ref1751.get());
          subs__.addSub(ref1751.addEventListener('change', function(_, ref, val) {
            node2787.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2787.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2787.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2787.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1751.rebind());
        
        var ref1752 = placeholder;
        if(ref1752.get() !== null) {
          node2787.attr('placeholder', ref1752.get());
          subs__.addSub(ref1752.addEventListener('change', function(_, ref, val) {
            node2787.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1752.rebind());
        
        var ref1753 = temp;
        node2787.val(""+ref1753.get());
        var ignore223 = false;
        subs__.addSub(ref1753.addEventListener('change', function(_, ref, val) {
          if(ignore223) return;
          node2787.val(""+val);
        }));
        subs__.addSub(ref1753.rebind());
        
        subs__.addSub(mobl.domBind(node2787, 'keyup change', function() {
          ignore223 = true;
          temp.set(mobl.stringTomobl__String(node2787.val()));
          ignore223 = false;
        }));
        
        
        var val1977 = onchange.get();
        if(val1977 !== null) {
          subs__.addSub(mobl.domBind(node2787, 'change', val1977));
        }
        
        var val1978 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after203(result__) {
                          var tmp19627 = result__;
                          function after204(result__) {
                            var tmp19628 = result__;
                            var result__ = tmp19628;
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
                          var result__ = validator.get()(temp.get(), after204);if(result__ !== undefined) after204(result__);
                        }
                        var result__ = onkeyup.get()(event, after203);if(result__ !== undefined) after203(result__);
                      } else {
                        {
                          function after205(result__) {
                            var tmp19628 = result__;
                            var result__ = tmp19628;
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
                          var result__ = validator.get()(temp.get(), after205);if(result__ !== undefined) after205(result__);
                        }
                      }
                    };
        if(val1978 !== null) {
          subs__.addSub(mobl.domBind(node2787, 'keyup', val1978));
        }
        
        var val1979 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1979 !== null) {
          subs__.addSub(mobl.domBind(node2787, 'blur', val1979));
        }
        
        node2786.append(node2787);
        
        var tmp19533 = mobl.ref(null);
        
        var nodes6185 = $("<span>");
        node2786.append(nodes6185);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp19533, function(_, callback) {
          var root7162 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7162); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6185;
          nodes6185 = node.contents();
          oldNodes.replaceWith(nodes6185);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after206);if(result__ !== undefined) after206(result__);
    } else {
      
      var node2788 = $("<input>");
      node2788.attr('type', "text");
      
      var ref1754 = style;
      if(ref1754.get() !== null) {
        node2788.attr('class', ref1754.get());
        subs__.addSub(ref1754.addEventListener('change', function(_, ref, val) {
          node2788.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1754.rebind());
      
      var ref1755 = placeholder;
      if(ref1755.get() !== null) {
        node2788.attr('placeholder', ref1755.get());
        subs__.addSub(ref1755.addEventListener('change', function(_, ref, val) {
          node2788.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1755.rebind());
      
      var ref1756 = s;
      node2788.val(""+ref1756.get());
      var ignore224 = false;
      subs__.addSub(ref1756.addEventListener('change', function(_, ref, val) {
        if(ignore224) return;
        node2788.val(""+val);
      }));
      subs__.addSub(ref1756.rebind());
      
      subs__.addSub(mobl.domBind(node2788, 'keyup change', function() {
        ignore224 = true;
        s.set(mobl.stringTomobl__String(node2788.val()));
        ignore224 = false;
      }));
      
      
      var val1980 = onchange.get();
      if(val1980 !== null) {
        subs__.addSub(mobl.domBind(node2788, 'change', val1980));
      }
      
      var val1981 = onkeyup.get();
      if(val1981 !== null) {
        subs__.addSub(mobl.domBind(node2788, 'keyup', val1981));
      }
      
      var val1982 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1982 !== null) {
        subs__.addSub(mobl.domBind(node2788, 'blur', val1982));
      }
      
      node2786.append(node2788);
      
      
    }
  };
  renderCond188();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond188();
  }));
  
  callback(root7160); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7163 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6186 = $("<span>");
  root7163.append(nodes6186);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7164 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7164); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6186;
    nodes6186 = node.contents();
    oldNodes.replaceWith(nodes6186);
  }));
  callback(root7163); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after207(result__) {
      var tmp19629 = result__;
      var result__ = tmp19629;
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
    var result__ = validator.get()(n2, after207);if(result__ !== undefined) after207(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes6187 = $("<span>");
  root7165.append(nodes6187);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7166 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7166); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6187;
    nodes6187 = node.contents();
    oldNodes.replaceWith(nodes6187);
  }));
  callback(root7165); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root7167 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2789 = $("<span>");
  root7167.append(node2789);
  var condSubs189 = new mobl.CompSubscription();
  subs__.addSub(condSubs189);
  var oldValue189;
  var renderCond189 = function() {
    var value657 = label.get();
    if(oldValue189 === value657) return;
    oldValue189 = value657;
    var subs__ = condSubs189;
    subs__.unsubscribe();
    node2789.empty();
    if(value657) {
      
      var node2790 = $("<span>");
      node2790.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1760 = label;
      node2790.text(""+ref1760.get());
      var ignore226 = false;
      subs__.addSub(ref1760.addEventListener('change', function(_, ref, val) {
        if(ignore226) return;
        node2790.text(""+val);
      }));
      subs__.addSub(ref1760.rebind());
      
      
      node2789.append(node2790);
      
      var node2791 = $("<span>");
      node2791.attr('style', "float: left");
      
      
      var node2792 = $("<input>");
      node2792.attr('type', "password");
      
      var ref1757 = style;
      if(ref1757.get() !== null) {
        node2792.attr('class', ref1757.get());
        subs__.addSub(ref1757.addEventListener('change', function(_, ref, val) {
          node2792.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1757.rebind());
      
      var ref1758 = placeholder;
      if(ref1758.get() !== null) {
        node2792.attr('placeholder', ref1758.get());
        subs__.addSub(ref1758.addEventListener('change', function(_, ref, val) {
          node2792.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1758.rebind());
      
      var ref1759 = s;
      node2792.val(""+ref1759.get());
      var ignore225 = false;
      subs__.addSub(ref1759.addEventListener('change', function(_, ref, val) {
        if(ignore225) return;
        node2792.val(""+val);
      }));
      subs__.addSub(ref1759.rebind());
      
      subs__.addSub(mobl.domBind(node2792, 'keyup change', function() {
        ignore225 = true;
        s.set(mobl.stringTomobl__String(node2792.val()));
        ignore225 = false;
      }));
      
      
      var val1983 = onchange.get();
      if(val1983 !== null) {
        subs__.addSub(mobl.domBind(node2792, 'change', val1983));
      }
      
      var val1984 = onkeyup.get();
      if(val1984 !== null) {
        subs__.addSub(mobl.domBind(node2792, 'keyup', val1984));
      }
      
      var val1985 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1985 !== null) {
        subs__.addSub(mobl.domBind(node2792, 'blur', val1985));
      }
      
      node2791.append(node2792);
      node2789.append(node2791);
      
      
      
      
    } else {
      
      var node2793 = $("<input>");
      node2793.attr('type', "password");
      
      var ref1761 = style;
      if(ref1761.get() !== null) {
        node2793.attr('class', ref1761.get());
        subs__.addSub(ref1761.addEventListener('change', function(_, ref, val) {
          node2793.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1761.rebind());
      
      var ref1762 = placeholder;
      if(ref1762.get() !== null) {
        node2793.attr('placeholder', ref1762.get());
        subs__.addSub(ref1762.addEventListener('change', function(_, ref, val) {
          node2793.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1762.rebind());
      
      var ref1763 = s;
      node2793.val(""+ref1763.get());
      var ignore227 = false;
      subs__.addSub(ref1763.addEventListener('change', function(_, ref, val) {
        if(ignore227) return;
        node2793.val(""+val);
      }));
      subs__.addSub(ref1763.rebind());
      
      subs__.addSub(mobl.domBind(node2793, 'keyup change', function() {
        ignore227 = true;
        s.set(mobl.stringTomobl__String(node2793.val()));
        ignore227 = false;
      }));
      
      
      var val1986 = onchange.get();
      if(val1986 !== null) {
        subs__.addSub(mobl.domBind(node2793, 'change', val1986));
      }
      
      var val1987 = onkeyup.get();
      if(val1987 !== null) {
        subs__.addSub(mobl.domBind(node2793, 'keyup', val1987));
      }
      
      var val1988 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1988 !== null) {
        subs__.addSub(mobl.domBind(node2793, 'blur', val1988));
      }
      
      node2789.append(node2793);
      
      
    }
  };
  renderCond189();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond189();
  }));
  
  callback(root7167); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root7168 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1768 = style;
  if(ref1768.get() !== null) {
    sel.attr('class', ref1768.get());
    subs__.addSub(ref1768.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1768.rebind());
  
  var val1989 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after208(result__) {
                    var tmp19631 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after208);if(result__ !== undefined) after208(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1989 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1989));
  }
  
  
  var node2794 = mobl.loadingSpan();
  sel.append(node2794);
  var list265;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList265 = function() {
    var subs__ = listSubs__;
    list265 = options.get();
    list265.list(function(results265) {
      node2794.empty();
      for(var i393 = 0; i393 < results265.length; i393++) {
        (function() {
          var iternode265 = $("<span>");
          node2794.append(iternode265);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results265), i393), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results265), i393), "_2");
          
          var node2795 = $("<option>");
          
          var ref1764 = optionDescription;
          node2795.text(""+ref1764.get());
          var ignore228 = false;
          subs__.addSub(ref1764.addEventListener('change', function(_, ref, val) {
            if(ignore228) return;
            node2795.text(""+val);
          }));
          subs__.addSub(ref1764.rebind());
          
          
          var ref1765 = optionStyle;
          if(ref1765.get() !== null) {
            node2795.attr('class', ref1765.get());
            subs__.addSub(ref1765.addEventListener('change', function(_, ref, val) {
              node2795.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1765.rebind());
          
          var ref1766 = optionValue;
          if(ref1766.get() !== null) {
            node2795.attr('value', ref1766.get());
            subs__.addSub(ref1766.addEventListener('change', function(_, ref, val) {
              node2795.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1766.rebind());
          
          var ref1767 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1767.get() !== null) {
            node2795.attr('selected', ref1767.get());
            subs__.addSub(ref1767.addEventListener('change', function(_, ref, val) {
              node2795.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2795.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2795.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1767.rebind());
          
          iternode265.append(node2795);
          
          var oldNodes = iternode265;
          iternode265 = iternode265.contents();
          oldNodes.replaceWith(iternode265);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list265.addEventListener('change', function() { listSubs__.unsubscribe(); renderList265(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList265(true); }));
    });
  };
  renderList265();
  
  root7168.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root7168); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root7169 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp19542 = mobl.ref(null);
  
  
  var tmp19541 = mobl.ref(null);
  
  
  var tmp19540 = mobl.ref(null);
  
  var nodes6188 = $("<span>");
  root7169.append(nodes6188);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp19540, tmp19541, tmp19542, function(_, callback) {
    var root7170 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2796 = mobl.loadingSpan();
    root7170.append(node2796);
    var list266;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList266 = function() {
      var subs__ = listSubs__;
      list266 = tabs.get();
      list266.list(function(results266) {
        node2796.empty();
        for(var i394 = 0; i394 < results266.length; i394++) {
          (function() {
            var iternode266 = $("<span>");
            node2796.append(iternode266);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results266), i394), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results266), i394), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results266), i394), "_3");
            
            var tmp19537 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp19537.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp19537.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp19537.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp19537.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp19536 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp19539 = mobl.ref(null);
            
            
            var tmp19538 = mobl.ref(null);
            
            var nodes6189 = $("<span>");
            iternode266.append(nodes6189);
            subs__.addSub((mobl.span)(tmp19537, tmp19538, tmp19536, tmp19539, function(_, callback) {
              var root7171 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp19535 = mobl.ref(null);
              
              
              var tmp19534 = mobl.ref(null);
              
              var nodes6190 = $("<span>");
              root7171.append(nodes6190);
              subs__.addSub((mobl.label)(tabName, tmp19534, tmp19535, function(_, callback) {
                var root7172 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7172); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6190;
                nodes6190 = node.contents();
                oldNodes.replaceWith(nodes6190);
              }));
              callback(root7171); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6189;
              nodes6189 = node.contents();
              oldNodes.replaceWith(nodes6189);
            }));
            
            var oldNodes = iternode266;
            iternode266 = iternode266.contents();
            oldNodes.replaceWith(iternode266);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list266.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
      });
    };
    renderList266();
    
    callback(root7170); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6188;
    nodes6188 = node.contents();
    oldNodes.replaceWith(nodes6188);
  }));
  
  var node2797 = mobl.loadingSpan();
  root7169.append(node2797);
  var list267;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList267 = function() {
    var subs__ = listSubs__;
    list267 = tabs.get();
    list267.list(function(results267) {
      node2797.empty();
      for(var i395 = 0; i395 < results267.length; i395++) {
        (function() {
          var iternode267 = $("<span>");
          node2797.append(iternode267);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results267), i395), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results267), i395), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results267), i395), "_3");
          
          var tmp19543 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp19543.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp19543.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp19543.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp19543.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp19546 = mobl.ref(null);
          
          
          var tmp19545 = mobl.ref(null);
          
          
          var tmp19544 = mobl.ref(null);
          
          var nodes6191 = $("<span>");
          iternode267.append(nodes6191);
          subs__.addSub((mobl.block)(tmp19543, tmp19544, tmp19545, tmp19546, function(_, callback) {
            var root7173 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes6192 = $("<span>");
            root7173.append(nodes6192);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root7174 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6193 = $("<span>");
              root7174.append(nodes6193);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl504();
              }));
              
              function renderControl504() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root7175 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7175); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6193;
                  nodes6193 = node.contents();
                  oldNodes.replaceWith(nodes6193);
                }));
              }
              renderControl504();
              callback(root7174); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6192;
              nodes6192 = node.contents();
              oldNodes.replaceWith(nodes6192);
            }));
            callback(root7173); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6191;
            nodes6191 = node.contents();
            oldNodes.replaceWith(nodes6191);
          }));
          
          var oldNodes = iternode267;
          iternode267 = iternode267.contents();
          oldNodes.replaceWith(iternode267);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list267.addEventListener('change', function() { listSubs__.unsubscribe(); renderList267(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList267(true); }));
    });
  };
  renderList267();
  
  callback(root7169); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root7176 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2798 = $("<div>");
  
  var ref1772 = mobl.ref(ui.searchboxStyle);
  if(ref1772.get() !== null) {
    node2798.attr('class', ref1772.get());
    subs__.addSub(ref1772.addEventListener('change', function(_, ref, val) {
      node2798.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1772.rebind());
  
  
  var node2799 = $("<input>");
  node2799.attr('type', "search");
  
  var ref1769 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1769.get() !== null) {
    node2799.attr('class', ref1769.get());
    subs__.addSub(ref1769.addEventListener('change', function(_, ref, val) {
      node2799.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1769.rebind());
  
  var ref1770 = placeholder;
  if(ref1770.get() !== null) {
    node2799.attr('placeholder', ref1770.get());
    subs__.addSub(ref1770.addEventListener('change', function(_, ref, val) {
      node2799.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1770.rebind());
  
  var ref1771 = s;
  node2799.val(""+ref1771.get());
  var ignore229 = false;
  subs__.addSub(ref1771.addEventListener('change', function(_, ref, val) {
    if(ignore229) return;
    node2799.val(""+val);
  }));
  subs__.addSub(ref1771.rebind());
  
  subs__.addSub(mobl.domBind(node2799, 'keyup change', function() {
    ignore229 = true;
    s.set(mobl.stringTomobl__String(node2799.val()));
    ignore229 = false;
  }));
  
  
  var val1990 = onsearch.get();
  if(val1990 !== null) {
    subs__.addSub(mobl.domBind(node2799, 'change', val1990));
  }
  
  var val1991 = onkeyup.get();
  if(val1991 !== null) {
    subs__.addSub(mobl.domBind(node2799, 'keyup', val1991));
  }
  node2799.attr('autocorrect', false);
  node2799.attr('autocapitalize', false);
  node2799.attr('autocomplete', false);
  
  node2798.append(node2799);
  root7176.append(node2798);
  callback(root7176); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root7177 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1773 = mobl.ref(ui.contextMenuStyle);
  if(ref1773.get() !== null) {
    menu.attr('class', ref1773.get());
    subs__.addSub(ref1773.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1773.rebind());
  
  var nodes6194 = $("<span>");
  menu.append(nodes6194);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl505();
  }));
  
  function renderControl505() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7178 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7178); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6194;
      nodes6194 = node.contents();
      oldNodes.replaceWith(nodes6194);
    }));
  }
  renderControl505();
  root7177.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1992 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp19634 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1992 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1992));
  }
  
  root7177.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root7177); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root7179 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19620 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp19620.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2800 = $("<span>");
  root7179.append(node2800);
  var condSubs190 = new mobl.CompSubscription();
  subs__.addSub(condSubs190);
  var oldValue190;
  var renderCond190 = function() {
    var value658 = tmp19620.get();
    if(oldValue190 === value658) return;
    oldValue190 = value658;
    var subs__ = condSubs190;
    subs__.unsubscribe();
    node2800.empty();
    if(value658) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node2801 = $("<div>");
        node2801.attr('width', "100%");
        
        
        var node2802 = $("<div>");
        node2802.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes6197 = $("<span>");
        node2802.append(nodes6197);
        subs__.addSub((ui.group)(function(_, callback) {
          var root7182 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2805 = mobl.loadingSpan();
          root7182.append(node2805);
          var list268;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList268 = function() {
            var subs__ = listSubs__;
            list268 = items.get();
            list268.list(function(results268) {
              node2805.empty();
              for(var i396 = 0; i396 < results268.length; i396++) {
                (function() {
                  var iternode268 = $("<span>");
                  node2805.append(iternode268);
                  var it;
                  it = mobl.ref(mobl.ref(results268), i396);
                  
                  var tmp19560 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp19560.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp19560.set(it.get() == current.get());
                  }));
                  
                  
                  var node2806 = $("<span>");
                  iternode268.append(node2806);
                  var condSubs192 = new mobl.CompSubscription();
                  subs__.addSub(condSubs192);
                  var oldValue192;
                  var renderCond192 = function() {
                    var value660 = tmp19560.get();
                    if(oldValue192 === value660) return;
                    oldValue192 = value660;
                    var subs__ = condSubs192;
                    subs__.unsubscribe();
                    node2806.empty();
                    if(value660) {
                      
                      var tmp19556 = mobl.ref(false);
                      
                      
                      var tmp19555 = mobl.ref(null);
                      
                      
                      var tmp19554 = mobl.ref(null);
                      
                      var nodes6198 = $("<span>");
                      node2806.append(nodes6198);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp19554, tmp19555, tmp19556, function(_, callback) {
                        var root7183 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6199 = $("<span>");
                        root7183.append(nodes6199);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl507();
                        }));
                        
                        function renderControl507() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root7184 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root7184); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6199;
                            nodes6199 = node.contents();
                            oldNodes.replaceWith(nodes6199);
                          }));
                        }
                        renderControl507();
                        callback(root7183); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6198;
                        nodes6198 = node.contents();
                        oldNodes.replaceWith(nodes6198);
                      }));
                      
                      
                    } else {
                      
                      var tmp19558 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp19557 = mobl.ref(true);
                      
                      
                      var tmp19559 = mobl.ref(null);
                      
                      var nodes6200 = $("<span>");
                      node2806.append(nodes6200);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19558, tmp19559, tmp19557, function(_, callback) {
                        var root7185 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6201 = $("<span>");
                        root7185.append(nodes6201);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl508();
                        }));
                        
                        function renderControl508() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root7186 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root7186); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6201;
                            nodes6201 = node.contents();
                            oldNodes.replaceWith(nodes6201);
                          }));
                        }
                        renderControl508();
                        callback(root7185); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6200;
                        nodes6200 = node.contents();
                        oldNodes.replaceWith(nodes6200);
                      }));
                      
                      
                    }
                  };
                  renderCond192();
                  subs__.addSub(tmp19560.addEventListener('change', function() {
                    renderCond192();
                  }));
                  
                  
                  var oldNodes = iternode268;
                  iternode268 = iternode268.contents();
                  oldNodes.replaceWith(iternode268);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list268.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
            });
          };
          renderList268();
          
          callback(root7182); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6197;
          nodes6197 = node.contents();
          oldNodes.replaceWith(nodes6197);
        }));
        node2801.append(node2802);
        
        var node2803 = $("<div>");
        node2803.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2804 = $("<span>");
        node2803.append(node2804);
        var condSubs191 = new mobl.CompSubscription();
        subs__.addSub(condSubs191);
        var oldValue191;
        var renderCond191 = function() {
          var value659 = current.get();
          if(oldValue191 === value659) return;
          oldValue191 = value659;
          var subs__ = condSubs191;
          subs__.unsubscribe();
          node2804.empty();
          if(value659) {
            var nodes6195 = $("<span>");
            node2804.append(nodes6195);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl506();
            }));
            
            function renderControl506() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root7180 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7180); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6195;
                nodes6195 = node.contents();
                oldNodes.replaceWith(nodes6195);
              }));
            }
            renderControl506();
            
            
          } else {
            
            var tmp19561 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp19563 = mobl.ref(null);
            
            
            var tmp19562 = mobl.ref(null);
            
            var nodes6196 = $("<span>");
            node2804.append(nodes6196);
            subs__.addSub((mobl.label)(tmp19561, tmp19562, tmp19563, function(_, callback) {
              var root7181 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root7181); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6196;
              nodes6196 = node.contents();
              oldNodes.replaceWith(nodes6196);
            }));
            
            
          }
        };
        renderCond191();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond191();
        }));
        
        node2801.append(node2803);
        node2800.append(node2801);
        
        
        
        
        
        
      });
    } else {
      var nodes6202 = $("<span>");
      node2800.append(nodes6202);
      subs__.addSub((ui.group)(function(_, callback) {
        var root7187 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2807 = mobl.loadingSpan();
        root7187.append(node2807);
        var list269;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList269 = function() {
          var subs__ = listSubs__;
          list269 = items.get();
          list269.list(function(results269) {
            node2807.empty();
            for(var i397 = 0; i397 < results269.length; i397++) {
              (function() {
                var iternode269 = $("<span>");
                node2807.append(iternode269);
                var it;
                it = mobl.ref(mobl.ref(results269), i397);
                
                var tmp19547 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp19635 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp19549 = mobl.ref(false);
                
                
                var tmp19548 = mobl.ref(null);
                
                var nodes6203 = $("<span>");
                iternode269.append(nodes6203);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19547, tmp19548, tmp19549, function(_, callback) {
                  var root7188 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6204 = $("<span>");
                  root7188.append(nodes6204);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl509();
                  }));
                  
                  function renderControl509() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root7189 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7189); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6204;
                      nodes6204 = node.contents();
                      oldNodes.replaceWith(nodes6204);
                    }));
                  }
                  renderControl509();
                  callback(root7188); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6203;
                  nodes6203 = node.contents();
                  oldNodes.replaceWith(nodes6203);
                }));
                
                var oldNodes = iternode269;
                iternode269 = iternode269.contents();
                oldNodes.replaceWith(iternode269);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list269.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
          });
        };
        renderList269();
        
        callback(root7187); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6202;
        nodes6202 = node.contents();
        oldNodes.replaceWith(nodes6202);
      }));
      
      
    }
  };
  renderCond190();
  subs__.addSub(tmp19620.addEventListener('change', function() {
    renderCond190();
  }));
  
  callback(root7179); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root7190 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19552 = mobl.ref("Detail");
  
  
  var tmp19553 = mobl.ref(null);
  
  var nodes6205 = $("<span>");
  root7190.append(nodes6205);
  subs__.addSub((ui.header)(tmp19552, tmp19553, function(_, callback) {
    var root7191 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp19551 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp19550 = mobl.ref("Back");
    
    var nodes6206 = $("<span>");
    root7191.append(nodes6206);
    subs__.addSub((ui.backButton)(tmp19550, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19551, function(_, callback) {
      var root7192 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7192); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6206;
      nodes6206 = node.contents();
      oldNodes.replaceWith(nodes6206);
    }));
    callback(root7191); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6205;
    nodes6205 = node.contents();
    oldNodes.replaceWith(nodes6205);
  }));
  var nodes6207 = $("<span>");
  root7190.append(nodes6207);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl510();
  }));
  
  function renderControl510() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root7193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7193); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6207;
      nodes6207 = node.contents();
      oldNodes.replaceWith(nodes6207);
    }));
  }
  renderControl510();
  callback(root7190); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root7194 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes6208 = $("<span>");
  root7194.append(nodes6208);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2808 = mobl.loadingSpan();
    root7195.append(node2808);
    var list270;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList270 = function() {
      var subs__ = listSubs__;
      list270 = coll.get();
      list270.list(function(results270) {
        node2808.empty();
        for(var i398 = 0; i398 < results270.length; i398++) {
          (function() {
            var iternode270 = $("<span>");
            node2808.append(iternode270);
            var it;
            it = mobl.ref(mobl.ref(results270), i398);
            
            var tmp19570 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp19570.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp19570.set(it.get() == selected.get());
            }));
            
            
            var node2809 = $("<span>");
            iternode270.append(node2809);
            var condSubs193 = new mobl.CompSubscription();
            subs__.addSub(condSubs193);
            var oldValue193;
            var renderCond193 = function() {
              var value661 = tmp19570.get();
              if(oldValue193 === value661) return;
              oldValue193 = value661;
              var subs__ = condSubs193;
              subs__.unsubscribe();
              node2809.empty();
              if(value661) {
                
                var tmp19566 = mobl.ref(false);
                
                
                var tmp19565 = mobl.ref(null);
                
                
                var tmp19564 = mobl.ref(null);
                
                var nodes6209 = $("<span>");
                node2809.append(nodes6209);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19564, tmp19565, tmp19566, function(_, callback) {
                  var root7196 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6210 = $("<span>");
                  root7196.append(nodes6210);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl511();
                  }));
                  
                  function renderControl511() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root7197 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7197); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6210;
                      nodes6210 = node.contents();
                      oldNodes.replaceWith(nodes6210);
                    }));
                  }
                  renderControl511();
                  callback(root7196); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6209;
                  nodes6209 = node.contents();
                  oldNodes.replaceWith(nodes6209);
                }));
                
                
              } else {
                
                var tmp19568 = mobl.ref(true);
                
                
                var tmp19567 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp19569 = mobl.ref(null);
                
                var nodes6211 = $("<span>");
                node2809.append(nodes6211);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19567, tmp19569, tmp19568, function(_, callback) {
                  var root7198 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6212 = $("<span>");
                  root7198.append(nodes6212);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl512();
                  }));
                  
                  function renderControl512() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root7199 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7199); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6212;
                      nodes6212 = node.contents();
                      oldNodes.replaceWith(nodes6212);
                    }));
                  }
                  renderControl512();
                  callback(root7198); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6211;
                  nodes6211 = node.contents();
                  oldNodes.replaceWith(nodes6211);
                }));
                
                
              }
            };
            renderCond193();
            subs__.addSub(tmp19570.addEventListener('change', function() {
              renderCond193();
            }));
            
            
            var oldNodes = iternode270;
            iternode270 = iternode270.contents();
            oldNodes.replaceWith(iternode270);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list270.addEventListener('change', function() { listSubs__.unsubscribe(); renderList270(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList270(true); }));
      });
    };
    renderList270();
    
    callback(root7195); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6208;
    nodes6208 = node.contents();
    oldNodes.replaceWith(nodes6208);
  }));
  callback(root7194); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root7200 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes6213 = $("<span>");
    root7200.append(nodes6213);
    subs__.addSub((ui.group)(function(_, callback) {
      var root7201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp19574 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp19574.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp19574.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp19574.set(coll.get().limit(n.get()));
      }));
      
      
      var node2810 = mobl.loadingSpan();
      root7201.append(node2810);
      var list271;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList271 = function() {
        var subs__ = listSubs__;
        list271 = tmp19574.get();
        list271.list(function(results271) {
          node2810.empty();
          for(var i399 = 0; i399 < results271.length; i399++) {
            (function() {
              var iternode271 = $("<span>");
              node2810.append(iternode271);
              var it;
              it = mobl.ref(mobl.ref(results271), i399);
              
              var tmp19571 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp19573 = mobl.ref(false);
              
              
              var tmp19572 = mobl.ref(null);
              
              var nodes6214 = $("<span>");
              iternode271.append(nodes6214);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19571, tmp19572, tmp19573, function(_, callback) {
                var root7202 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6215 = $("<span>");
                root7202.append(nodes6215);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl513();
                }));
                
                function renderControl513() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root7203 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root7203); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6215;
                    nodes6215 = node.contents();
                    oldNodes.replaceWith(nodes6215);
                  }));
                }
                renderControl513();
                callback(root7202); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6214;
                nodes6214 = node.contents();
                oldNodes.replaceWith(nodes6214);
              }));
              
              var oldNodes = iternode271;
              iternode271 = iternode271.contents();
              oldNodes.replaceWith(iternode271);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list271.addEventListener('change', function() { listSubs__.unsubscribe(); renderList271(true); }));
          subs__.addSub(tmp19574.addEventListener('change', function() { listSubs__.unsubscribe(); renderList271(true); }));
        });
      };
      renderList271();
      
      
      var tmp19577 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp19577.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp19577.set(n.get() < total.get());
      }));
      
      
      var node2811 = $("<span>");
      root7201.append(node2811);
      var condSubs194 = new mobl.CompSubscription();
      subs__.addSub(condSubs194);
      var oldValue194;
      var renderCond194 = function() {
        var value662 = tmp19577.get();
        if(oldValue194 === value662) return;
        oldValue194 = value662;
        var subs__ = condSubs194;
        subs__.unsubscribe();
        node2811.empty();
        if(value662) {
          
          var node2812 = $("<li>");
          
          var ref1774 = mobl.ref(ui.loadMoreStyle);
          if(ref1774.get() !== null) {
            node2812.attr('class', ref1774.get());
            subs__.addSub(ref1774.addEventListener('change', function(_, ref, val) {
              node2812.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1774.rebind());
          
          var val1993 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val1993 !== null) {
            subs__.addSub(mobl.domBind(node2812, 'tap', val1993));
          }
          
          
          var tmp19576 = mobl.ref(null);
          
          
          var tmp19575 = mobl.ref(null);
          
          var nodes6216 = $("<span>");
          node2812.append(nodes6216);
          subs__.addSub((mobl.label)(moreLabel, tmp19575, tmp19576, function(_, callback) {
            var root7204 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root7204); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6216;
            nodes6216 = node.contents();
            oldNodes.replaceWith(nodes6216);
          }));
          node2811.append(node2812);
          
          
          
        } else {
          
        }
      };
      renderCond194();
      subs__.addSub(tmp19577.addEventListener('change', function() {
        renderCond194();
      }));
      
      callback(root7201); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6213;
      nodes6213 = node.contents();
      oldNodes.replaceWith(nodes6213);
    }));
    callback(root7200); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root7205 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6217 = $("<span>");
  root7205.append(nodes6217);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7206 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2813 = mobl.loadingSpan();
    root7206.append(node2813);
    var list272;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList272 = function() {
      var subs__ = listSubs__;
      list272 = items.get();
      list272.list(function(results272) {
        node2813.empty();
        for(var i400 = 0; i400 < results272.length; i400++) {
          (function() {
            var iternode272 = $("<span>");
            node2813.append(iternode272);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results272), i400), "_1");it = mobl.ref(mobl.ref(mobl.ref(results272), i400), "_2");
            
            var tmp19581 = mobl.ref(false);
            
            
            var tmp19580 = mobl.ref(null);
            
            
            var tmp19579 = mobl.ref(null);
            
            var nodes6218 = $("<span>");
            iternode272.append(nodes6218);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19579, tmp19580, tmp19581, function(_, callback) {
              var root7207 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp19578 = mobl.ref(null);
              
              var nodes6219 = $("<span>");
              root7207.append(nodes6219);
              subs__.addSub((ui.checkBox)(checked, it, tmp19578, function(_, callback) {
                var root7208 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7208); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6219;
                nodes6219 = node.contents();
                oldNodes.replaceWith(nodes6219);
              }));
              callback(root7207); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6218;
              nodes6218 = node.contents();
              oldNodes.replaceWith(nodes6218);
            }));
            
            var oldNodes = iternode272;
            iternode272 = iternode272.contents();
            oldNodes.replaceWith(iternode272);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list272.addEventListener('change', function() { listSubs__.unsubscribe(); renderList272(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList272(true); }));
      });
    };
    renderList272();
    
    callback(root7206); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6217;
    nodes6217 = node.contents();
    oldNodes.replaceWith(nodes6217);
  }));
  callback(root7205); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root7209 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll915) {
    coll915 = coll915.reverse();
    function processOne85() {
      var it;
      it = coll915.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll915.length > 0) processOne85(); else rest85();
      
    }
    function rest85() {
      
      var tmp19585 = mobl.ref(null);
      
      var nodes6220 = $("<span>");
      root7209.append(nodes6220);
      subs__.addSub((ui.header)(title, tmp19585, function(_, callback) {
        var root7210 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp19582 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp19583 = mobl.ref(mobl._("Back", []));
        
        var nodes6221 = $("<span>");
        root7210.append(nodes6221);
        subs__.addSub((ui.backButton)(tmp19583, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19582, function(_, callback) {
          var root7211 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7211); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6221;
          nodes6221 = node.contents();
          oldNodes.replaceWith(nodes6221);
        }));
        
        var tmp19584 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll914) {
                               coll914 = coll914.reverse();
                               function processOne84() {
                                 var checked;var it;
                                 var tmp19637 = coll914.pop();
                                 checked = tmp19637._1;it = tmp19637._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll914.length > 0) processOne84(); else rest84();
                                   
                                 } else {
                                   {
                                     
                                     if(coll914.length > 0) processOne84(); else rest84();
                                     
                                   }
                                 }
                               }
                               function rest84() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll914.length > 0) processOne84(); else rest84();
                             });
                             
                           });
        
        var nodes6222 = $("<span>");
        root7210.append(nodes6222);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp19584, function(_, callback) {
          var root7212 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7212); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6222;
          nodes6222 = node.contents();
          oldNodes.replaceWith(nodes6222);
        }));
        callback(root7210); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6220;
        nodes6220 = node.contents();
        oldNodes.replaceWith(nodes6220);
      }));
      var nodes6223 = $("<span>");
      root7209.append(nodes6223);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root7213 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7213); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6223;
        nodes6223 = node.contents();
        oldNodes.replaceWith(nodes6223);
      }));
      callback(root7209); return subs__;
      
      
    }
    if(coll915.length > 0) processOne85(); else rest85();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root7214 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp19587 = mobl.ref(null);
  
  
  var tmp19586 = mobl.ref(null);
  
  var nodes6224 = $("<span>");
  root7214.append(nodes6224);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp19586, tmp19587, function(_, callback) {
    var root7215 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7215); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6224;
    nodes6224 = node.contents();
    oldNodes.replaceWith(nodes6224);
  }));
  
  var tmp19588 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp19588.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp19588.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp19588.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp19588.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp19588.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes6225 = $("<span>");
  root7214.append(nodes6225);
  subs__.addSub((ui.masterDetail)(tmp19588, masterItem, detailItem, function(_, callback) {
    var root7216 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7216); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6225;
    nodes6225 = node.contents();
    oldNodes.replaceWith(nodes6225);
  }));
  callback(root7214); return subs__;
  
  
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
  var root7217 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp19601 = mobl.ref(null);
  
  
  var tmp19600 = mobl.ref(null);
  
  
  var tmp19599 = mobl.ref(null);
  
  var nodes6226 = $("<span>");
  root7217.append(nodes6226);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp19599, tmp19600, tmp19601, function(_, callback) {
    var root7218 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2814 = mobl.loadingSpan();
    root7218.append(node2814);
    var list273;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList273 = function() {
      var subs__ = listSubs__;
      list273 = sections.get();
      list273.list(function(results273) {
        node2814.empty();
        for(var i401 = 0; i401 < results273.length; i401++) {
          (function() {
            var iternode273 = $("<span>");
            node2814.append(iternode273);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results273), i401), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results273), i401), "_2");
            
            var tmp19592 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp19592.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp19592.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp19592.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp19592.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp19591 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp19594 = mobl.ref(null);
            
            
            var tmp19593 = mobl.ref(null);
            
            var nodes6227 = $("<span>");
            iternode273.append(nodes6227);
            subs__.addSub((mobl.span)(tmp19592, tmp19593, tmp19591, tmp19594, function(_, callback) {
              var root7219 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp19590 = mobl.ref(null);
              
              
              var tmp19589 = mobl.ref(null);
              
              var nodes6228 = $("<span>");
              root7219.append(nodes6228);
              subs__.addSub((mobl.label)(sectionName, tmp19589, tmp19590, function(_, callback) {
                var root7220 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7220); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6228;
                nodes6228 = node.contents();
                oldNodes.replaceWith(nodes6228);
              }));
              callback(root7219); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6227;
              nodes6227 = node.contents();
              oldNodes.replaceWith(nodes6227);
            }));
            
            var tmp19595 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp19595.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp19595.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp19595.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp19595.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp19598 = mobl.ref(null);
            
            
            var tmp19597 = mobl.ref(null);
            
            
            var tmp19596 = mobl.ref(null);
            
            var nodes6229 = $("<span>");
            iternode273.append(nodes6229);
            subs__.addSub((mobl.block)(tmp19595, tmp19596, tmp19597, tmp19598, function(_, callback) {
              var root7221 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6230 = $("<span>");
              root7221.append(nodes6230);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl514();
              }));
              
              function renderControl514() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root7222 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7222); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6230;
                  nodes6230 = node.contents();
                  oldNodes.replaceWith(nodes6230);
                }));
              }
              renderControl514();
              callback(root7221); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6229;
              nodes6229 = node.contents();
              oldNodes.replaceWith(nodes6229);
            }));
            
            var oldNodes = iternode273;
            iternode273 = iternode273.contents();
            oldNodes.replaceWith(iternode273);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list273.addEventListener('change', function() { listSubs__.unsubscribe(); renderList273(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList273(true); }));
      });
    };
    renderList273();
    
    callback(root7218); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6226;
    nodes6226 = node.contents();
    oldNodes.replaceWith(nodes6226);
  }));
  callback(root7217); return subs__;
  
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
  var root7223 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2815 = $("<table>");
  
  var ref1775 = mobl.ref(ui.tableStyle);
  if(ref1775.get() !== null) {
    node2815.attr('class', ref1775.get());
    subs__.addSub(ref1775.addEventListener('change', function(_, ref, val) {
      node2815.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1775.rebind());
  
  var nodes6231 = $("<span>");
  node2815.append(nodes6231);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl515();
  }));
  
  function renderControl515() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7224 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7224); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6231;
      nodes6231 = node.contents();
      oldNodes.replaceWith(nodes6231);
    }));
  }
  renderControl515();
  root7223.append(node2815);
  callback(root7223); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root7225 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2816 = $("<tr>");
  
  var ref1776 = mobl.ref(ui.trStyle);
  if(ref1776.get() !== null) {
    node2816.attr('class', ref1776.get());
    subs__.addSub(ref1776.addEventListener('change', function(_, ref, val) {
      node2816.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1776.rebind());
  
  var nodes6232 = $("<span>");
  node2816.append(nodes6232);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl516();
  }));
  
  function renderControl516() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7226 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7226); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6232;
      nodes6232 = node.contents();
      oldNodes.replaceWith(nodes6232);
    }));
  }
  renderControl516();
  root7225.append(node2816);
  callback(root7225); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root7227 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2817 = $("<td>");
  
  var ref1777 = width;
  if(ref1777.get() !== null) {
    node2817.attr('width', ref1777.get());
    subs__.addSub(ref1777.addEventListener('change', function(_, ref, val) {
      node2817.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1777.rebind());
  
  var ref1778 = mobl.ref(ui.tdStyle);
  if(ref1778.get() !== null) {
    node2817.attr('class', ref1778.get());
    subs__.addSub(ref1778.addEventListener('change', function(_, ref, val) {
      node2817.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1778.rebind());
  
  var nodes6233 = $("<span>");
  node2817.append(nodes6233);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl517();
  }));
  
  function renderControl517() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7228 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7228); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6233;
      nodes6233 = node.contents();
      oldNodes.replaceWith(nodes6233);
    }));
  }
  renderControl517();
  root7227.append(node2817);
  callback(root7227); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root7229 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2818 = $("<td>");
  
  var ref1779 = width;
  if(ref1779.get() !== null) {
    node2818.attr('width', ref1779.get());
    subs__.addSub(ref1779.addEventListener('change', function(_, ref, val) {
      node2818.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1779.rebind());
  
  var ref1780 = mobl.ref(ui.tdStyle);
  if(ref1780.get() !== null) {
    node2818.attr('class', ref1780.get());
    subs__.addSub(ref1780.addEventListener('change', function(_, ref, val) {
      node2818.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1780.rebind());
  
  var nodes6234 = $("<span>");
  node2818.append(nodes6234);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl518();
  }));
  
  function renderControl518() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7230 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7230); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6234;
      nodes6234 = node.contents();
      oldNodes.replaceWith(nodes6234);
    }));
  }
  renderControl518();
  root7229.append(node2818);
  callback(root7229); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root7231 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2819 = $("<td>");
  
  var ref1781 = width;
  if(ref1781.get() !== null) {
    node2819.attr('width', ref1781.get());
    subs__.addSub(ref1781.addEventListener('change', function(_, ref, val) {
      node2819.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1781.rebind());
  
  var ref1782 = mobl.ref(ui.tdStyle);
  if(ref1782.get() !== null) {
    node2819.attr('class', ref1782.get());
    subs__.addSub(ref1782.addEventListener('change', function(_, ref, val) {
      node2819.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1782.rebind());
  
  
  var node2820 = $("<strong>");
  
  var nodes6235 = $("<span>");
  node2820.append(nodes6235);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl519();
  }));
  
  function renderControl519() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7232 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7232); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6235;
      nodes6235 = node.contents();
      oldNodes.replaceWith(nodes6235);
    }));
  }
  renderControl519();
  node2819.append(node2820);
  root7231.append(node2819);
  callback(root7231); return subs__;
  
  
  
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
  var root7233 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6236 = $("<span>");
  root7233.append(nodes6236);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7234 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2821 = mobl.loadingSpan();
    root7234.append(node2821);
    var list274;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList274 = function() {
      var subs__ = listSubs__;
      list274 = items.get();
      list274.list(function(results274) {
        node2821.empty();
        for(var i402 = 0; i402 < results274.length; i402++) {
          (function() {
            var iternode274 = $("<span>");
            node2821.append(iternode274);
            var it;
            it = mobl.ref(mobl.ref(results274), i402);
            
            var tmp19602 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp19639 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp19604 = mobl.ref(false);
            
            
            var tmp19603 = mobl.ref(null);
            
            var nodes6237 = $("<span>");
            iternode274.append(nodes6237);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp19602, tmp19603, tmp19604, function(_, callback) {
              var root7235 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6238 = $("<span>");
              root7235.append(nodes6238);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl520();
              }));
              
              function renderControl520() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root7236 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7236); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6238;
                  nodes6238 = node.contents();
                  oldNodes.replaceWith(nodes6238);
                }));
              }
              renderControl520();
              callback(root7235); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6237;
              nodes6237 = node.contents();
              oldNodes.replaceWith(nodes6237);
            }));
            
            var oldNodes = iternode274;
            iternode274 = iternode274.contents();
            oldNodes.replaceWith(iternode274);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list274.addEventListener('change', function() { listSubs__.unsubscribe(); renderList274(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList274(true); }));
      });
    };
    renderList274();
    
    callback(root7234); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6236;
    nodes6236 = node.contents();
    oldNodes.replaceWith(nodes6236);
  }));
  callback(root7233); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root7237 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19606 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp19605 = mobl.ref("Back");
  
  var nodes6239 = $("<span>");
  root7237.append(nodes6239);
  subs__.addSub((ui.backButton)(tmp19605, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19606, function(_, callback) {
    var root7238 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7238); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6239;
    nodes6239 = node.contents();
    oldNodes.replaceWith(nodes6239);
  }));
  var nodes6240 = $("<span>");
  root7237.append(nodes6240);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl521();
  }));
  
  function renderControl521() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root7239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7239); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6240;
      nodes6240 = node.contents();
      oldNodes.replaceWith(nodes6240);
    }));
  }
  renderControl521();
  callback(root7237); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root7240 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2822 = $("<div>");
  
  var ref1786 = mobl.ref(ui.customHeaderStyle);
  if(ref1786.get() !== null) {
    node2822.attr('class', ref1786.get());
    subs__.addSub(ref1786.addEventListener('change', function(_, ref, val) {
      node2822.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1786.rebind());
  
  var val1994 = onclick.get();
  if(val1994 !== null) {
    subs__.addSub(mobl.domBind(node2822, 'tap', val1994));
  }
  
  
  var node2823 = $("<div>");
  
  var ref1785 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref1785.get() !== null) {
    node2823.attr('class', ref1785.get());
    subs__.addSub(ref1785.addEventListener('change', function(_, ref, val) {
      node2823.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1785.rebind());
  
  
  var node2824 = $("<div>");
  
  var ref1783 = text;
  node2824.text(""+ref1783.get());
  var ignore230 = false;
  subs__.addSub(ref1783.addEventListener('change', function(_, ref, val) {
    if(ignore230) return;
    node2824.text(""+val);
  }));
  subs__.addSub(ref1783.rebind());
  
  
  var ref1784 = mobl.ref(ui.customHeaderTextStyle);
  if(ref1784.get() !== null) {
    node2824.attr('class', ref1784.get());
    subs__.addSub(ref1784.addEventListener('change', function(_, ref, val) {
      node2824.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1784.rebind());
  
  node2823.append(node2824);
  node2822.append(node2823);
  var nodes6241 = $("<span>");
  node2822.append(nodes6241);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl522();
  }));
  
  function renderControl522() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7241); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6241;
      nodes6241 = node.contents();
      oldNodes.replaceWith(nodes6241);
    }));
  }
  renderControl522();
  root7240.append(node2822);
  callback(root7240); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root7242 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1787 = mobl.ref(ui.customItemStyle);
  if(ref1787.get() !== null) {
    el.attr('class', ref1787.get());
    subs__.addSub(ref1787.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1787.rebind());
  
  var ref1788 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref1788.get() !== null) {
    el.attr('class', ref1788.get());
    subs__.addSub(ref1788.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1788.rebind());
  
  var val1995 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp19640 = result__;
                                           function after209(result__) {
                                             var tmp19641 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after209);if(result__ !== undefined) after209(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp19642 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1995 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1995));
  }
  
  var nodes6242 = $("<span>");
  el.append(nodes6242);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl523();
  }));
  
  function renderControl523() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7243); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6242;
      nodes6242 = node.contents();
      oldNodes.replaceWith(nodes6242);
    }));
  }
  renderControl523();
  root7242.append(el);
  callback(root7242); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root7244 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node2825 = $("<div>");
  node2825.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node2827 = mobl.loadingSpan();
  node2825.append(node2827);
  var list276;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList276 = function() {
    var subs__ = listSubs__;
    list276 = tabs.get();
    list276.list(function(results276) {
      node2827.empty();
      for(var i404 = 0; i404 < results276.length; i404++) {
        (function() {
          var iternode276 = $("<span>");
          node2827.append(iternode276);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results276), i404), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results276), i404), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results276), i404), "_3");
          
          var tmp19607 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp19607.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp19607.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp19607.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp19607.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp19610 = mobl.ref(null);
          
          
          var tmp19609 = mobl.ref(null);
          
          
          var tmp19608 = mobl.ref(null);
          
          var nodes6246 = $("<span>");
          iternode276.append(nodes6246);
          subs__.addSub((mobl.block)(tmp19607, tmp19608, tmp19609, tmp19610, function(_, callback) {
            var root7248 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes6247 = $("<span>");
            root7248.append(nodes6247);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root7249 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6248 = $("<span>");
              root7249.append(nodes6248);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl524();
              }));
              
              function renderControl524() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root7250 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7250); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6248;
                  nodes6248 = node.contents();
                  oldNodes.replaceWith(nodes6248);
                }));
              }
              renderControl524();
              callback(root7249); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6247;
              nodes6247 = node.contents();
              oldNodes.replaceWith(nodes6247);
            }));
            callback(root7248); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes6246;
            nodes6246 = node.contents();
            oldNodes.replaceWith(nodes6246);
          }));
          
          var oldNodes = iternode276;
          iternode276 = iternode276.contents();
          oldNodes.replaceWith(iternode276);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list276.addEventListener('change', function() { listSubs__.unsubscribe(); renderList276(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList276(true); }));
    });
  };
  renderList276();
  
  root7244.append(node2825);
  
  var tmp19619 = mobl.ref(null);
  
  
  var tmp19618 = mobl.ref(null);
  
  
  var tmp19617 = mobl.ref(null);
  
  var nodes6243 = $("<span>");
  root7244.append(nodes6243);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp19617, tmp19618, tmp19619, function(_, callback) {
    var root7245 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2826 = mobl.loadingSpan();
    root7245.append(node2826);
    var list275;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList275 = function() {
      var subs__ = listSubs__;
      list275 = tabs.get();
      list275.list(function(results275) {
        node2826.empty();
        for(var i403 = 0; i403 < results275.length; i403++) {
          (function() {
            var iternode275 = $("<span>");
            node2826.append(iternode275);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results275), i403), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results275), i403), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results275), i403), "_3");
            
            var tmp19614 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp19614.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp19614.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp19614.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp19614.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp19613 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp19616 = mobl.ref(null);
            
            
            var tmp19615 = mobl.ref(null);
            
            var nodes6244 = $("<span>");
            iternode275.append(nodes6244);
            subs__.addSub((mobl.span)(tmp19614, tmp19615, tmp19613, tmp19616, function(_, callback) {
              var root7246 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp19612 = mobl.ref(null);
              
              
              var tmp19611 = mobl.ref(null);
              
              var nodes6245 = $("<span>");
              root7246.append(nodes6245);
              subs__.addSub((mobl.label)(tabName, tmp19611, tmp19612, function(_, callback) {
                var root7247 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7247); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6245;
                nodes6245 = node.contents();
                oldNodes.replaceWith(nodes6245);
              }));
              callback(root7246); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6244;
              nodes6244 = node.contents();
              oldNodes.replaceWith(nodes6244);
            }));
            
            var oldNodes = iternode275;
            iternode275 = iternode275.contents();
            oldNodes.replaceWith(iternode275);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list275.addEventListener('change', function() { listSubs__.unsubscribe(); renderList275(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList275(true); }));
      });
    };
    renderList275();
    
    callback(root7245); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6243;
    nodes6243 = node.contents();
    oldNodes.replaceWith(nodes6243);
  }));
  callback(root7244); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root7251 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2828 = $("<div>");
  node2828.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node2828.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  root7251.append(node2828);
  callback(root7251); return subs__;
  
  
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
