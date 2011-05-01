mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root858 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node334 = $("<span>");
  root858.append(node334);
  var condSubs36 = new mobl.CompSubscription();
  subs__.addSub(condSubs36);
  var oldValue36;
  var renderCond36 = function() {
    var value108 = value.get();
    if(oldValue36 === value108) return;
    oldValue36 = value108;
    var subs__ = condSubs36;
    subs__.unsubscribe();
    node334.empty();
    if(value108) {
      var nodes693 = $("<span>");
      node334.append(nodes693);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl100();
      }));
      
      function renderControl100() {
        subs__.addSub((elements)(function(elements, callback) {
          var root859 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root859); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes693;
          nodes693 = node.contents();
          oldNodes.replaceWith(nodes693);
        }));
      }
      renderControl100();
      
      
    } else {
      
      var tmp1852 = mobl.ref(null);
      
      
      var tmp1851 = mobl.ref(null);
      
      
      var tmp1850 = mobl.ref(null);
      
      var nodes694 = $("<span>");
      node334.append(nodes694);
      subs__.addSub((mobl.block)(style, tmp1850, tmp1851, tmp1852, function(_, callback) {
        var root860 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1842 = mobl.ref(null);
        
        
        var tmp1841 = mobl.ref(null);
        
        var nodes695 = $("<span>");
        root860.append(nodes695);
        subs__.addSub((mobl.label)(loadingMessage, tmp1841, tmp1842, function(_, callback) {
          var root861 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root861); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes695;
          nodes695 = node.contents();
          oldNodes.replaceWith(nodes695);
        }));
        
        var tmp1844 = mobl.ref("middle");
        
        
        var tmp1843 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp1849 = mobl.ref(null);
        
        
        var tmp1848 = mobl.ref(null);
        
        
        var tmp1847 = mobl.ref(null);
        
        
        var tmp1846 = mobl.ref(null);
        
        
        var tmp1845 = mobl.ref(null);
        
        var nodes696 = $("<span>");
        root860.append(nodes696);
        subs__.addSub((ui.image)(tmp1843, tmp1845, tmp1846, tmp1847, tmp1848, tmp1844, tmp1849, function(_, callback) {
          var root862 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root862); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes696;
          nodes696 = node.contents();
          oldNodes.replaceWith(nodes696);
        }));
        callback(root860); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes694;
        nodes694 = node.contents();
        oldNodes.replaceWith(nodes694);
      }));
      
      
    }
  };
  renderCond36();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond36();
  }));
  
  callback(root858); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root863 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node335 = $("<div>");
  
  var ref240 = mobl.ref(ui.headerStyle);
  if(ref240.get() !== null) {
    node335.attr('class', ref240.get());
    subs__.addSub(ref240.addEventListener('change', function(_, ref, val) {
      node335.attr('class', val);
    }));
    
  }
  subs__.addSub(ref240.rebind());
  
  var val232 = onclick.get();
  if(val232 !== null) {
    subs__.addSub(mobl.domBind(node335, 'tap', val232));
  }
  
  
  var node336 = $("<div>");
  
  var ref239 = mobl.ref(ui.headerContainerStyle);
  if(ref239.get() !== null) {
    node336.attr('class', ref239.get());
    subs__.addSub(ref239.addEventListener('change', function(_, ref, val) {
      node336.attr('class', val);
    }));
    
  }
  subs__.addSub(ref239.rebind());
  
  
  var node337 = $("<div>");
  
  var ref237 = text;
  node337.text(""+ref237.get());
  var ignore44 = false;
  subs__.addSub(ref237.addEventListener('change', function(_, ref, val) {
    if(ignore44) return;
    node337.text(""+val);
  }));
  subs__.addSub(ref237.rebind());
  
  
  var ref238 = mobl.ref(ui.headerTextStyle);
  if(ref238.get() !== null) {
    node337.attr('class', ref238.get());
    subs__.addSub(ref238.addEventListener('change', function(_, ref, val) {
      node337.attr('class', val);
    }));
    
  }
  subs__.addSub(ref238.rebind());
  
  node336.append(node337);
  node335.append(node336);
  var nodes697 = $("<span>");
  node335.append(nodes697);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl101();
  }));
  
  function renderControl101() {
    subs__.addSub((elements)(function(elements, callback) {
      var root864 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root864); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes697;
      nodes697 = node.contents();
      oldNodes.replaceWith(nodes697);
    }));
  }
  renderControl101();
  root863.append(node335);
  callback(root863); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root865 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref241 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref241.get() !== null) {
    sp.attr('class', ref241.get());
    subs__.addSub(ref241.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref241.rebind());
  
  var val233 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val233 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val233));
  }
  
  var val234 = function(event, callback) {
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
  if(val234 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val234));
  }
  
  var val235 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after40(result__) {
                    var tmp1942 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after40);if(result__ !== undefined) after40(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val235 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val235));
  }
  
  var val236 = function(event, callback) {
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
  if(val236 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val236));
  }
  
  var ref242 = text;
  sp.text(""+ref242.get());
  var ignore45 = false;
  subs__.addSub(ref242.addEventListener('change', function(_, ref, val) {
    if(ignore45) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref242.rebind());
  
  
  root865.append(sp);
  callback(root865); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root866 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes698 = $("<span>");
  root866.append(nodes698);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root867 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root867); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes698;
    nodes698 = node.contents();
    oldNodes.replaceWith(nodes698);
  }));
  callback(root866); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root868 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes699 = $("<span>");
  root868.append(nodes699);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root869 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root869); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes699;
    nodes699 = node.contents();
    oldNodes.replaceWith(nodes699);
  }));
  callback(root868); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root870 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node338 = $("<ul>");
  
  var ref243 = mobl.ref(ui.groupStyle);
  if(ref243.get() !== null) {
    node338.attr('class', ref243.get());
    subs__.addSub(ref243.addEventListener('change', function(_, ref, val) {
      node338.attr('class', val);
    }));
    
  }
  subs__.addSub(ref243.rebind());
  
  var nodes700 = $("<span>");
  node338.append(nodes700);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl102();
  }));
  
  function renderControl102() {
    subs__.addSub((elements)(function(elements, callback) {
      var root871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root871); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes700;
      nodes700 = node.contents();
      oldNodes.replaceWith(nodes700);
    }));
  }
  renderControl102();
  root870.append(node338);
  callback(root870); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root872 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node339 = $("<img>");
  
  var ref244 = url;
  if(ref244.get() !== null) {
    node339.attr('src', ref244.get());
    subs__.addSub(ref244.addEventListener('change', function(_, ref, val) {
      node339.attr('src', val);
    }));
    
  }
  subs__.addSub(ref244.rebind());
  
  var ref245 = width;
  if(ref245.get() !== null) {
    node339.attr('width', ref245.get());
    subs__.addSub(ref245.addEventListener('change', function(_, ref, val) {
      node339.attr('width', val);
    }));
    
  }
  subs__.addSub(ref245.rebind());
  
  var ref246 = height;
  if(ref246.get() !== null) {
    node339.attr('height', ref246.get());
    subs__.addSub(ref246.addEventListener('change', function(_, ref, val) {
      node339.attr('height', val);
    }));
    
  }
  subs__.addSub(ref246.rebind());
  
  var ref247 = style;
  if(ref247.get() !== null) {
    node339.attr('class', ref247.get());
    subs__.addSub(ref247.addEventListener('change', function(_, ref, val) {
      node339.attr('class', val);
    }));
    
  }
  subs__.addSub(ref247.rebind());
  
  var val237 = onclick.get();
  if(val237 !== null) {
    subs__.addSub(mobl.domBind(node339, 'tap', val237));
  }
  
  var ref248 = valign;
  if(ref248.get() !== null) {
    node339.attr('valign', ref248.get());
    subs__.addSub(ref248.addEventListener('change', function(_, ref, val) {
      node339.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref248.rebind());
  
  var ref249 = align;
  if(ref249.get() !== null) {
    node339.attr('align', ref249.get());
    subs__.addSub(ref249.addEventListener('change', function(_, ref, val) {
      node339.attr('align', val);
    }));
    
  }
  subs__.addSub(ref249.rebind());
  
  root872.append(node339);
  callback(root872); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root873 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref250 = mobl.ref(ui.itemStyle);
  if(ref250.get() !== null) {
    el.attr('class', ref250.get());
    subs__.addSub(ref250.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref250.rebind());
  
  var ref251 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref251.get() !== null) {
    el.attr('class', ref251.get());
    subs__.addSub(ref251.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref251.rebind());
  
  var val238 = onswipe.get();
  if(val238 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val238));
  }
  
  var val239 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1943 = result__;
                                           function after41(result__) {
                                             var tmp1944 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after41);if(result__ !== undefined) after41(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1945 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val239 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val239));
  }
  
  var nodes701 = $("<span>");
  el.append(nodes701);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl103();
  }));
  
  function renderControl103() {
    subs__.addSub((elements)(function(elements, callback) {
      var root874 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root874); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes701;
      nodes701 = node.contents();
      oldNodes.replaceWith(nodes701);
    }));
  }
  renderControl103();
  root873.append(el);
  callback(root873); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root875 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node340 = $("<input>");
  node340.attr('type', "checkbox");
  
  var ref253 = b;
  node340.attr('checked', !!ref253.get());
  subs__.addSub(ref253.addEventListener('change', function(_, ref, val) {
    if(ref === ref253) node340.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node340, 'change', function() {
    b.set(!!node340.attr('checked'));
  }));
  
  var val241 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val241 !== null) {
    subs__.addSub(mobl.domBind(node340, 'tap', val241));
  }
  
  var val242 = onchange.get();
  if(val242 !== null) {
    subs__.addSub(mobl.domBind(node340, 'change', val242));
  }
  
  root875.append(node340);
  
  root875.append(" ");
  
  var node341 = $("<span>");
  
  var ref252 = label;
  node341.text(""+ref252.get());
  var ignore46 = false;
  subs__.addSub(ref252.addEventListener('change', function(_, ref, val) {
    if(ignore46) return;
    node341.text(""+val);
  }));
  subs__.addSub(ref252.rebind());
  
  
  var val240 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after42(result__) {
                    var tmp1946 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after42);if(result__ !== undefined) after42(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val240 !== null) {
    subs__.addSub(mobl.domBind(node341, 'tap', val240));
  }
  
  root875.append(node341);
  callback(root875); return subs__;
  
  
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
  var root876 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node342 = $("<span>");
  root876.append(node342);
  var condSubs37 = new mobl.CompSubscription();
  subs__.addSub(condSubs37);
  var oldValue37;
  var renderCond37 = function() {
    var value109 = label.get();
    if(oldValue37 === value109) return;
    oldValue37 = value109;
    var subs__ = condSubs37;
    subs__.unsubscribe();
    node342.empty();
    if(value109) {
      
      var tmp1853 = mobl.ref(null);
      
      var nodes702 = $("<span>");
      node342.append(nodes702);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp1853, function(_, callback) {
        var root877 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root877); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes702;
        nodes702 = node.contents();
        oldNodes.replaceWith(nodes702);
      }));
      
      
    } else {
      
    }
  };
  renderCond37();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond37();
  }));
  
  
  var node343 = $("<span>");
  root876.append(node343);
  var condSubs38 = new mobl.CompSubscription();
  subs__.addSub(condSubs38);
  var oldValue38;
  var renderCond38 = function() {
    var value110 = validator.get();
    if(oldValue38 === value110) return;
    oldValue38 = value110;
    var subs__ = condSubs38;
    subs__.unsubscribe();
    node343.empty();
    if(value110) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after46(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1947 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node344 = $("<input>");
        node344.attr('type', "text");
        
        var ref254 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref254.get() !== null) {
          node344.attr('class', ref254.get());
          subs__.addSub(ref254.addEventListener('change', function(_, ref, val) {
            node344.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node344.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node344.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node344.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref254.rebind());
        
        var ref255 = placeholder;
        if(ref255.get() !== null) {
          node344.attr('placeholder', ref255.get());
          subs__.addSub(ref255.addEventListener('change', function(_, ref, val) {
            node344.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref255.rebind());
        
        var ref256 = temp;
        node344.val(""+ref256.get());
        var ignore47 = false;
        subs__.addSub(ref256.addEventListener('change', function(_, ref, val) {
          if(ignore47) return;
          node344.val(""+val);
        }));
        subs__.addSub(ref256.rebind());
        
        subs__.addSub(mobl.domBind(node344, 'keyup change', function() {
          ignore47 = true;
          temp.set(mobl.stringTomobl__String(node344.val()));
          ignore47 = false;
        }));
        
        
        var val243 = onchange.get();
        if(val243 !== null) {
          subs__.addSub(mobl.domBind(node344, 'change', val243));
        }
        
        var val244 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after43(result__) {
                          var tmp1948 = result__;
                          function after44(result__) {
                            var tmp1949 = result__;
                            var result__ = tmp1949;
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
                          var result__ = validator.get()(temp.get(), after44);if(result__ !== undefined) after44(result__);
                        }
                        var result__ = onkeyup.get()(event, after43);if(result__ !== undefined) after43(result__);
                      } else {
                        {
                          function after45(result__) {
                            var tmp1949 = result__;
                            var result__ = tmp1949;
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
                          var result__ = validator.get()(temp.get(), after45);if(result__ !== undefined) after45(result__);
                        }
                      }
                    };
        if(val244 !== null) {
          subs__.addSub(mobl.domBind(node344, 'keyup', val244));
        }
        
        var val245 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val245 !== null) {
          subs__.addSub(mobl.domBind(node344, 'blur', val245));
        }
        
        node343.append(node344);
        
        var tmp1854 = mobl.ref(null);
        
        var nodes703 = $("<span>");
        node343.append(nodes703);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp1854, function(_, callback) {
          var root878 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root878); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes703;
          nodes703 = node.contents();
          oldNodes.replaceWith(nodes703);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after46);if(result__ !== undefined) after46(result__);
    } else {
      
      var node345 = $("<input>");
      node345.attr('type', "text");
      
      var ref257 = style;
      if(ref257.get() !== null) {
        node345.attr('class', ref257.get());
        subs__.addSub(ref257.addEventListener('change', function(_, ref, val) {
          node345.attr('class', val);
        }));
        
      }
      subs__.addSub(ref257.rebind());
      
      var ref258 = placeholder;
      if(ref258.get() !== null) {
        node345.attr('placeholder', ref258.get());
        subs__.addSub(ref258.addEventListener('change', function(_, ref, val) {
          node345.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref258.rebind());
      
      var ref259 = s;
      node345.val(""+ref259.get());
      var ignore48 = false;
      subs__.addSub(ref259.addEventListener('change', function(_, ref, val) {
        if(ignore48) return;
        node345.val(""+val);
      }));
      subs__.addSub(ref259.rebind());
      
      subs__.addSub(mobl.domBind(node345, 'keyup change', function() {
        ignore48 = true;
        s.set(mobl.stringTomobl__String(node345.val()));
        ignore48 = false;
      }));
      
      
      var val246 = onchange.get();
      if(val246 !== null) {
        subs__.addSub(mobl.domBind(node345, 'change', val246));
      }
      
      var val247 = onkeyup.get();
      if(val247 !== null) {
        subs__.addSub(mobl.domBind(node345, 'keyup', val247));
      }
      
      var val248 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val248 !== null) {
        subs__.addSub(mobl.domBind(node345, 'blur', val248));
      }
      
      node343.append(node345);
      
      
    }
  };
  renderCond38();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond38();
  }));
  
  callback(root876); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root879 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes704 = $("<span>");
  root879.append(nodes704);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root880 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root880); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes704;
    nodes704 = node.contents();
    oldNodes.replaceWith(nodes704);
  }));
  callback(root879); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root881 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after47(result__) {
      var tmp1950 = result__;
      var result__ = tmp1950;
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
    var result__ = validator.get()(n2, after47);if(result__ !== undefined) after47(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes705 = $("<span>");
  root881.append(nodes705);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root882 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root882); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes705;
    nodes705 = node.contents();
    oldNodes.replaceWith(nodes705);
  }));
  callback(root881); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root883 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node346 = $("<span>");
  root883.append(node346);
  var condSubs39 = new mobl.CompSubscription();
  subs__.addSub(condSubs39);
  var oldValue39;
  var renderCond39 = function() {
    var value111 = label.get();
    if(oldValue39 === value111) return;
    oldValue39 = value111;
    var subs__ = condSubs39;
    subs__.unsubscribe();
    node346.empty();
    if(value111) {
      
      var node347 = $("<span>");
      node347.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref263 = label;
      node347.text(""+ref263.get());
      var ignore50 = false;
      subs__.addSub(ref263.addEventListener('change', function(_, ref, val) {
        if(ignore50) return;
        node347.text(""+val);
      }));
      subs__.addSub(ref263.rebind());
      
      
      node346.append(node347);
      
      var node348 = $("<span>");
      node348.attr('style', "float: left");
      
      
      var node349 = $("<input>");
      node349.attr('type', "password");
      
      var ref260 = style;
      if(ref260.get() !== null) {
        node349.attr('class', ref260.get());
        subs__.addSub(ref260.addEventListener('change', function(_, ref, val) {
          node349.attr('class', val);
        }));
        
      }
      subs__.addSub(ref260.rebind());
      
      var ref261 = placeholder;
      if(ref261.get() !== null) {
        node349.attr('placeholder', ref261.get());
        subs__.addSub(ref261.addEventListener('change', function(_, ref, val) {
          node349.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref261.rebind());
      
      var ref262 = s;
      node349.val(""+ref262.get());
      var ignore49 = false;
      subs__.addSub(ref262.addEventListener('change', function(_, ref, val) {
        if(ignore49) return;
        node349.val(""+val);
      }));
      subs__.addSub(ref262.rebind());
      
      subs__.addSub(mobl.domBind(node349, 'keyup change', function() {
        ignore49 = true;
        s.set(mobl.stringTomobl__String(node349.val()));
        ignore49 = false;
      }));
      
      
      var val249 = onchange.get();
      if(val249 !== null) {
        subs__.addSub(mobl.domBind(node349, 'change', val249));
      }
      
      var val250 = onkeyup.get();
      if(val250 !== null) {
        subs__.addSub(mobl.domBind(node349, 'keyup', val250));
      }
      
      var val251 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val251 !== null) {
        subs__.addSub(mobl.domBind(node349, 'blur', val251));
      }
      
      node348.append(node349);
      node346.append(node348);
      
      
      
      
    } else {
      
      var node350 = $("<input>");
      node350.attr('type', "password");
      
      var ref264 = style;
      if(ref264.get() !== null) {
        node350.attr('class', ref264.get());
        subs__.addSub(ref264.addEventListener('change', function(_, ref, val) {
          node350.attr('class', val);
        }));
        
      }
      subs__.addSub(ref264.rebind());
      
      var ref265 = placeholder;
      if(ref265.get() !== null) {
        node350.attr('placeholder', ref265.get());
        subs__.addSub(ref265.addEventListener('change', function(_, ref, val) {
          node350.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref265.rebind());
      
      var ref266 = s;
      node350.val(""+ref266.get());
      var ignore51 = false;
      subs__.addSub(ref266.addEventListener('change', function(_, ref, val) {
        if(ignore51) return;
        node350.val(""+val);
      }));
      subs__.addSub(ref266.rebind());
      
      subs__.addSub(mobl.domBind(node350, 'keyup change', function() {
        ignore51 = true;
        s.set(mobl.stringTomobl__String(node350.val()));
        ignore51 = false;
      }));
      
      
      var val252 = onchange.get();
      if(val252 !== null) {
        subs__.addSub(mobl.domBind(node350, 'change', val252));
      }
      
      var val253 = onkeyup.get();
      if(val253 !== null) {
        subs__.addSub(mobl.domBind(node350, 'keyup', val253));
      }
      
      var val254 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val254 !== null) {
        subs__.addSub(mobl.domBind(node350, 'blur', val254));
      }
      
      node346.append(node350);
      
      
    }
  };
  renderCond39();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond39();
  }));
  
  callback(root883); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root884 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref271 = style;
  if(ref271.get() !== null) {
    sel.attr('class', ref271.get());
    subs__.addSub(ref271.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref271.rebind());
  
  var val255 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after48(result__) {
                    var tmp1952 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after48);if(result__ !== undefined) after48(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val255 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val255));
  }
  
  
  var node351 = mobl.loadingSpan();
  sel.append(node351);
  var list52;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList52 = function() {
    var subs__ = listSubs__;
    list52 = options.get();
    list52.list(function(results52) {
      node351.empty();
      for(var i65 = 0; i65 < results52.length; i65++) {
        (function() {
          var iternode52 = $("<span>");
          node351.append(iternode52);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results52), i65), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results52), i65), "_2");
          
          var node352 = $("<option>");
          
          var ref267 = optionDescription;
          node352.text(""+ref267.get());
          var ignore52 = false;
          subs__.addSub(ref267.addEventListener('change', function(_, ref, val) {
            if(ignore52) return;
            node352.text(""+val);
          }));
          subs__.addSub(ref267.rebind());
          
          
          var ref268 = optionStyle;
          if(ref268.get() !== null) {
            node352.attr('class', ref268.get());
            subs__.addSub(ref268.addEventListener('change', function(_, ref, val) {
              node352.attr('class', val);
            }));
            
          }
          subs__.addSub(ref268.rebind());
          
          var ref269 = optionValue;
          if(ref269.get() !== null) {
            node352.attr('value', ref269.get());
            subs__.addSub(ref269.addEventListener('change', function(_, ref, val) {
              node352.attr('value', val);
            }));
            
          }
          subs__.addSub(ref269.rebind());
          
          var ref270 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref270.get() !== null) {
            node352.attr('selected', ref270.get());
            subs__.addSub(ref270.addEventListener('change', function(_, ref, val) {
              node352.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node352.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node352.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref270.rebind());
          
          iternode52.append(node352);
          
          var oldNodes = iternode52;
          iternode52 = iternode52.contents();
          oldNodes.replaceWith(iternode52);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list52.addEventListener('change', function() { listSubs__.unsubscribe(); renderList52(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList52(true); }));
    });
  };
  renderList52();
  
  root884.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root884); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root885 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp1863 = mobl.ref(null);
  
  
  var tmp1862 = mobl.ref(null);
  
  
  var tmp1861 = mobl.ref(null);
  
  var nodes706 = $("<span>");
  root885.append(nodes706);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp1861, tmp1862, tmp1863, function(_, callback) {
    var root886 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node353 = mobl.loadingSpan();
    root886.append(node353);
    var list53;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList53 = function() {
      var subs__ = listSubs__;
      list53 = tabs.get();
      list53.list(function(results53) {
        node353.empty();
        for(var i66 = 0; i66 < results53.length; i66++) {
          (function() {
            var iternode53 = $("<span>");
            node353.append(iternode53);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results53), i66), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results53), i66), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results53), i66), "_3");
            
            var tmp1858 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp1858.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1858.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp1858.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp1858.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp1857 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1860 = mobl.ref(null);
            
            
            var tmp1859 = mobl.ref(null);
            
            var nodes707 = $("<span>");
            iternode53.append(nodes707);
            subs__.addSub((mobl.span)(tmp1858, tmp1859, tmp1857, tmp1860, function(_, callback) {
              var root887 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1856 = mobl.ref(null);
              
              
              var tmp1855 = mobl.ref(null);
              
              var nodes708 = $("<span>");
              root887.append(nodes708);
              subs__.addSub((mobl.label)(tabName, tmp1855, tmp1856, function(_, callback) {
                var root888 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root888); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes708;
                nodes708 = node.contents();
                oldNodes.replaceWith(nodes708);
              }));
              callback(root887); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes707;
              nodes707 = node.contents();
              oldNodes.replaceWith(nodes707);
            }));
            
            var oldNodes = iternode53;
            iternode53 = iternode53.contents();
            oldNodes.replaceWith(iternode53);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list53.addEventListener('change', function() { listSubs__.unsubscribe(); renderList53(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList53(true); }));
      });
    };
    renderList53();
    
    callback(root886); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes706;
    nodes706 = node.contents();
    oldNodes.replaceWith(nodes706);
  }));
  
  var node354 = mobl.loadingSpan();
  root885.append(node354);
  var list54;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList54 = function() {
    var subs__ = listSubs__;
    list54 = tabs.get();
    list54.list(function(results54) {
      node354.empty();
      for(var i67 = 0; i67 < results54.length; i67++) {
        (function() {
          var iternode54 = $("<span>");
          node354.append(iternode54);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results54), i67), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results54), i67), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results54), i67), "_3");
          
          var tmp1864 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp1864.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp1864.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp1864.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp1864.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp1867 = mobl.ref(null);
          
          
          var tmp1866 = mobl.ref(null);
          
          
          var tmp1865 = mobl.ref(null);
          
          var nodes709 = $("<span>");
          iternode54.append(nodes709);
          subs__.addSub((mobl.block)(tmp1864, tmp1865, tmp1866, tmp1867, function(_, callback) {
            var root889 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes710 = $("<span>");
            root889.append(nodes710);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root890 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes711 = $("<span>");
              root890.append(nodes711);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl104();
              }));
              
              function renderControl104() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root891 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root891); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes711;
                  nodes711 = node.contents();
                  oldNodes.replaceWith(nodes711);
                }));
              }
              renderControl104();
              callback(root890); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes710;
              nodes710 = node.contents();
              oldNodes.replaceWith(nodes710);
            }));
            callback(root889); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes709;
            nodes709 = node.contents();
            oldNodes.replaceWith(nodes709);
          }));
          
          var oldNodes = iternode54;
          iternode54 = iternode54.contents();
          oldNodes.replaceWith(iternode54);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list54.addEventListener('change', function() { listSubs__.unsubscribe(); renderList54(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList54(true); }));
    });
  };
  renderList54();
  
  callback(root885); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root892 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node355 = $("<div>");
  
  var ref275 = mobl.ref(ui.searchboxStyle);
  if(ref275.get() !== null) {
    node355.attr('class', ref275.get());
    subs__.addSub(ref275.addEventListener('change', function(_, ref, val) {
      node355.attr('class', val);
    }));
    
  }
  subs__.addSub(ref275.rebind());
  
  
  var node356 = $("<input>");
  node356.attr('type', "search");
  
  var ref272 = mobl.ref(ui.searchBoxInputStyle);
  if(ref272.get() !== null) {
    node356.attr('class', ref272.get());
    subs__.addSub(ref272.addEventListener('change', function(_, ref, val) {
      node356.attr('class', val);
    }));
    
  }
  subs__.addSub(ref272.rebind());
  
  var ref273 = placeholder;
  if(ref273.get() !== null) {
    node356.attr('placeholder', ref273.get());
    subs__.addSub(ref273.addEventListener('change', function(_, ref, val) {
      node356.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref273.rebind());
  
  var ref274 = s;
  node356.val(""+ref274.get());
  var ignore53 = false;
  subs__.addSub(ref274.addEventListener('change', function(_, ref, val) {
    if(ignore53) return;
    node356.val(""+val);
  }));
  subs__.addSub(ref274.rebind());
  
  subs__.addSub(mobl.domBind(node356, 'keyup change', function() {
    ignore53 = true;
    s.set(mobl.stringTomobl__String(node356.val()));
    ignore53 = false;
  }));
  
  
  var val256 = onsearch.get();
  if(val256 !== null) {
    subs__.addSub(mobl.domBind(node356, 'change', val256));
  }
  
  var val257 = onkeyup.get();
  if(val257 !== null) {
    subs__.addSub(mobl.domBind(node356, 'keyup', val257));
  }
  node356.attr('autocorrect', false);
  node356.attr('autocapitalize', false);
  node356.attr('autocomplete', false);
  
  node355.append(node356);
  root892.append(node355);
  callback(root892); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root893 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref276 = mobl.ref(ui.contextMenuStyle);
  if(ref276.get() !== null) {
    menu.attr('class', ref276.get());
    subs__.addSub(ref276.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref276.rebind());
  
  var nodes712 = $("<span>");
  menu.append(nodes712);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl105();
  }));
  
  function renderControl105() {
    subs__.addSub((elements)(function(elements, callback) {
      var root894 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root894); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes712;
      nodes712 = node.contents();
      oldNodes.replaceWith(nodes712);
    }));
  }
  renderControl105();
  root893.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val258 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1955 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val258 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val258));
  }
  
  root893.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root893); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root895 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1941 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1941.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node357 = $("<span>");
  root895.append(node357);
  var condSubs40 = new mobl.CompSubscription();
  subs__.addSub(condSubs40);
  var oldValue40;
  var renderCond40 = function() {
    var value112 = tmp1941.get();
    if(oldValue40 === value112) return;
    oldValue40 = value112;
    var subs__ = condSubs40;
    subs__.unsubscribe();
    node357.empty();
    if(value112) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node358 = $("<div>");
        node358.attr('width', "100%");
        
        
        var node359 = $("<div>");
        node359.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes715 = $("<span>");
        node359.append(nodes715);
        subs__.addSub((ui.group)(function(_, callback) {
          var root898 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node362 = mobl.loadingSpan();
          root898.append(node362);
          var list55;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList55 = function() {
            var subs__ = listSubs__;
            list55 = items.get();
            list55.list(function(results55) {
              node362.empty();
              for(var i68 = 0; i68 < results55.length; i68++) {
                (function() {
                  var iternode55 = $("<span>");
                  node362.append(iternode55);
                  var it;
                  it = mobl.ref(mobl.ref(results55), i68);
                  
                  var tmp1881 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1881.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1881.set(it.get() == current.get());
                  }));
                  
                  
                  var node363 = $("<span>");
                  iternode55.append(node363);
                  var condSubs42 = new mobl.CompSubscription();
                  subs__.addSub(condSubs42);
                  var oldValue42;
                  var renderCond42 = function() {
                    var value114 = tmp1881.get();
                    if(oldValue42 === value114) return;
                    oldValue42 = value114;
                    var subs__ = condSubs42;
                    subs__.unsubscribe();
                    node363.empty();
                    if(value114) {
                      
                      var tmp1877 = mobl.ref(false);
                      
                      
                      var tmp1876 = mobl.ref(null);
                      
                      
                      var tmp1875 = mobl.ref(null);
                      
                      var nodes716 = $("<span>");
                      node363.append(nodes716);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp1875, tmp1876, tmp1877, function(_, callback) {
                        var root899 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes717 = $("<span>");
                        root899.append(nodes717);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl107();
                        }));
                        
                        function renderControl107() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root900 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root900); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes717;
                            nodes717 = node.contents();
                            oldNodes.replaceWith(nodes717);
                          }));
                        }
                        renderControl107();
                        callback(root899); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes716;
                        nodes716 = node.contents();
                        oldNodes.replaceWith(nodes716);
                      }));
                      
                      
                    } else {
                      
                      var tmp1879 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp1878 = mobl.ref(true);
                      
                      
                      var tmp1880 = mobl.ref(null);
                      
                      var nodes718 = $("<span>");
                      node363.append(nodes718);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1879, tmp1880, tmp1878, function(_, callback) {
                        var root901 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes719 = $("<span>");
                        root901.append(nodes719);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl108();
                        }));
                        
                        function renderControl108() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root902 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root902); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes719;
                            nodes719 = node.contents();
                            oldNodes.replaceWith(nodes719);
                          }));
                        }
                        renderControl108();
                        callback(root901); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes718;
                        nodes718 = node.contents();
                        oldNodes.replaceWith(nodes718);
                      }));
                      
                      
                    }
                  };
                  renderCond42();
                  subs__.addSub(tmp1881.addEventListener('change', function() {
                    renderCond42();
                  }));
                  
                  
                  var oldNodes = iternode55;
                  iternode55 = iternode55.contents();
                  oldNodes.replaceWith(iternode55);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list55.addEventListener('change', function() { listSubs__.unsubscribe(); renderList55(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList55(true); }));
            });
          };
          renderList55();
          
          callback(root898); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes715;
          nodes715 = node.contents();
          oldNodes.replaceWith(nodes715);
        }));
        node358.append(node359);
        
        var node360 = $("<div>");
        node360.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node361 = $("<span>");
        node360.append(node361);
        var condSubs41 = new mobl.CompSubscription();
        subs__.addSub(condSubs41);
        var oldValue41;
        var renderCond41 = function() {
          var value113 = current.get();
          if(oldValue41 === value113) return;
          oldValue41 = value113;
          var subs__ = condSubs41;
          subs__.unsubscribe();
          node361.empty();
          if(value113) {
            var nodes713 = $("<span>");
            node361.append(nodes713);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl106();
            }));
            
            function renderControl106() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root896 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root896); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes713;
                nodes713 = node.contents();
                oldNodes.replaceWith(nodes713);
              }));
            }
            renderControl106();
            
            
          } else {
            
            var tmp1882 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp1884 = mobl.ref(null);
            
            
            var tmp1883 = mobl.ref(null);
            
            var nodes714 = $("<span>");
            node361.append(nodes714);
            subs__.addSub((mobl.label)(tmp1882, tmp1883, tmp1884, function(_, callback) {
              var root897 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root897); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes714;
              nodes714 = node.contents();
              oldNodes.replaceWith(nodes714);
            }));
            
            
          }
        };
        renderCond41();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond41();
        }));
        
        node358.append(node360);
        node357.append(node358);
        
        
        
        
        
        
      });
    } else {
      var nodes720 = $("<span>");
      node357.append(nodes720);
      subs__.addSub((ui.group)(function(_, callback) {
        var root903 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node364 = mobl.loadingSpan();
        root903.append(node364);
        var list56;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList56 = function() {
          var subs__ = listSubs__;
          list56 = items.get();
          list56.list(function(results56) {
            node364.empty();
            for(var i69 = 0; i69 < results56.length; i69++) {
              (function() {
                var iternode56 = $("<span>");
                node364.append(iternode56);
                var it;
                it = mobl.ref(mobl.ref(results56), i69);
                
                var tmp1868 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp1956 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp1870 = mobl.ref(false);
                
                
                var tmp1869 = mobl.ref(null);
                
                var nodes721 = $("<span>");
                iternode56.append(nodes721);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1868, tmp1869, tmp1870, function(_, callback) {
                  var root904 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes722 = $("<span>");
                  root904.append(nodes722);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl109();
                  }));
                  
                  function renderControl109() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root905 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root905); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes722;
                      nodes722 = node.contents();
                      oldNodes.replaceWith(nodes722);
                    }));
                  }
                  renderControl109();
                  callback(root904); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes721;
                  nodes721 = node.contents();
                  oldNodes.replaceWith(nodes721);
                }));
                
                var oldNodes = iternode56;
                iternode56 = iternode56.contents();
                oldNodes.replaceWith(iternode56);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list56.addEventListener('change', function() { listSubs__.unsubscribe(); renderList56(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList56(true); }));
          });
        };
        renderList56();
        
        callback(root903); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes720;
        nodes720 = node.contents();
        oldNodes.replaceWith(nodes720);
      }));
      
      
    }
  };
  renderCond40();
  subs__.addSub(tmp1941.addEventListener('change', function() {
    renderCond40();
  }));
  
  callback(root895); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root906 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1873 = mobl.ref("Detail");
  
  
  var tmp1874 = mobl.ref(null);
  
  var nodes723 = $("<span>");
  root906.append(nodes723);
  subs__.addSub((ui.header)(tmp1873, tmp1874, function(_, callback) {
    var root907 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp1872 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp1871 = mobl.ref("Back");
    
    var nodes724 = $("<span>");
    root907.append(nodes724);
    subs__.addSub((ui.backButton)(tmp1871, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1872, function(_, callback) {
      var root908 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root908); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes724;
      nodes724 = node.contents();
      oldNodes.replaceWith(nodes724);
    }));
    callback(root907); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes723;
    nodes723 = node.contents();
    oldNodes.replaceWith(nodes723);
  }));
  var nodes725 = $("<span>");
  root906.append(nodes725);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl110();
  }));
  
  function renderControl110() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root909 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root909); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes725;
      nodes725 = node.contents();
      oldNodes.replaceWith(nodes725);
    }));
  }
  renderControl110();
  callback(root906); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root910 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes726 = $("<span>");
  root910.append(nodes726);
  subs__.addSub((ui.group)(function(_, callback) {
    var root911 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node365 = mobl.loadingSpan();
    root911.append(node365);
    var list57;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList57 = function() {
      var subs__ = listSubs__;
      list57 = coll.get();
      list57.list(function(results57) {
        node365.empty();
        for(var i70 = 0; i70 < results57.length; i70++) {
          (function() {
            var iternode57 = $("<span>");
            node365.append(iternode57);
            var it;
            it = mobl.ref(mobl.ref(results57), i70);
            
            var tmp1891 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp1891.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1891.set(it.get() == selected.get());
            }));
            
            
            var node366 = $("<span>");
            iternode57.append(node366);
            var condSubs43 = new mobl.CompSubscription();
            subs__.addSub(condSubs43);
            var oldValue43;
            var renderCond43 = function() {
              var value115 = tmp1891.get();
              if(oldValue43 === value115) return;
              oldValue43 = value115;
              var subs__ = condSubs43;
              subs__.unsubscribe();
              node366.empty();
              if(value115) {
                
                var tmp1887 = mobl.ref(false);
                
                
                var tmp1886 = mobl.ref(null);
                
                
                var tmp1885 = mobl.ref(null);
                
                var nodes727 = $("<span>");
                node366.append(nodes727);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1885, tmp1886, tmp1887, function(_, callback) {
                  var root912 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes728 = $("<span>");
                  root912.append(nodes728);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl111();
                  }));
                  
                  function renderControl111() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root913 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root913); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes728;
                      nodes728 = node.contents();
                      oldNodes.replaceWith(nodes728);
                    }));
                  }
                  renderControl111();
                  callback(root912); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes727;
                  nodes727 = node.contents();
                  oldNodes.replaceWith(nodes727);
                }));
                
                
              } else {
                
                var tmp1889 = mobl.ref(true);
                
                
                var tmp1888 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp1890 = mobl.ref(null);
                
                var nodes729 = $("<span>");
                node366.append(nodes729);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1888, tmp1890, tmp1889, function(_, callback) {
                  var root914 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes730 = $("<span>");
                  root914.append(nodes730);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl112();
                  }));
                  
                  function renderControl112() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root915 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root915); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes730;
                      nodes730 = node.contents();
                      oldNodes.replaceWith(nodes730);
                    }));
                  }
                  renderControl112();
                  callback(root914); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes729;
                  nodes729 = node.contents();
                  oldNodes.replaceWith(nodes729);
                }));
                
                
              }
            };
            renderCond43();
            subs__.addSub(tmp1891.addEventListener('change', function() {
              renderCond43();
            }));
            
            
            var oldNodes = iternode57;
            iternode57 = iternode57.contents();
            oldNodes.replaceWith(iternode57);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list57.addEventListener('change', function() { listSubs__.unsubscribe(); renderList57(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList57(true); }));
      });
    };
    renderList57();
    
    callback(root911); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes726;
    nodes726 = node.contents();
    oldNodes.replaceWith(nodes726);
  }));
  callback(root910); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root916 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes731 = $("<span>");
    root916.append(nodes731);
    subs__.addSub((ui.group)(function(_, callback) {
      var root917 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp1895 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp1895.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp1895.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp1895.set(coll.get().limit(n.get()));
      }));
      
      
      var node367 = mobl.loadingSpan();
      root917.append(node367);
      var list58;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList58 = function() {
        var subs__ = listSubs__;
        list58 = tmp1895.get();
        list58.list(function(results58) {
          node367.empty();
          for(var i71 = 0; i71 < results58.length; i71++) {
            (function() {
              var iternode58 = $("<span>");
              node367.append(iternode58);
              var it;
              it = mobl.ref(mobl.ref(results58), i71);
              
              var tmp1892 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp1894 = mobl.ref(false);
              
              
              var tmp1893 = mobl.ref(null);
              
              var nodes732 = $("<span>");
              iternode58.append(nodes732);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1892, tmp1893, tmp1894, function(_, callback) {
                var root918 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes733 = $("<span>");
                root918.append(nodes733);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl113();
                }));
                
                function renderControl113() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root919 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root919); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes733;
                    nodes733 = node.contents();
                    oldNodes.replaceWith(nodes733);
                  }));
                }
                renderControl113();
                callback(root918); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes732;
                nodes732 = node.contents();
                oldNodes.replaceWith(nodes732);
              }));
              
              var oldNodes = iternode58;
              iternode58 = iternode58.contents();
              oldNodes.replaceWith(iternode58);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list58.addEventListener('change', function() { listSubs__.unsubscribe(); renderList58(true); }));
          subs__.addSub(tmp1895.addEventListener('change', function() { listSubs__.unsubscribe(); renderList58(true); }));
        });
      };
      renderList58();
      
      
      var tmp1898 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp1898.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp1898.set(n.get() < total.get());
      }));
      
      
      var node368 = $("<span>");
      root917.append(node368);
      var condSubs44 = new mobl.CompSubscription();
      subs__.addSub(condSubs44);
      var oldValue44;
      var renderCond44 = function() {
        var value116 = tmp1898.get();
        if(oldValue44 === value116) return;
        oldValue44 = value116;
        var subs__ = condSubs44;
        subs__.unsubscribe();
        node368.empty();
        if(value116) {
          
          var node369 = $("<li>");
          
          var ref277 = mobl.ref(ui.loadMoreStyle);
          if(ref277.get() !== null) {
            node369.attr('class', ref277.get());
            subs__.addSub(ref277.addEventListener('change', function(_, ref, val) {
              node369.attr('class', val);
            }));
            
          }
          subs__.addSub(ref277.rebind());
          
          var val259 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val259 !== null) {
            subs__.addSub(mobl.domBind(node369, 'tap', val259));
          }
          
          
          var tmp1897 = mobl.ref(null);
          
          
          var tmp1896 = mobl.ref(null);
          
          var nodes734 = $("<span>");
          node369.append(nodes734);
          subs__.addSub((mobl.label)(moreLabel, tmp1896, tmp1897, function(_, callback) {
            var root920 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root920); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes734;
            nodes734 = node.contents();
            oldNodes.replaceWith(nodes734);
          }));
          node368.append(node369);
          
          
          
        } else {
          
        }
      };
      renderCond44();
      subs__.addSub(tmp1898.addEventListener('change', function() {
        renderCond44();
      }));
      
      callback(root917); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes731;
      nodes731 = node.contents();
      oldNodes.replaceWith(nodes731);
    }));
    callback(root916); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root921 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes735 = $("<span>");
  root921.append(nodes735);
  subs__.addSub((ui.group)(function(_, callback) {
    var root922 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node370 = mobl.loadingSpan();
    root922.append(node370);
    var list59;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList59 = function() {
      var subs__ = listSubs__;
      list59 = items.get();
      list59.list(function(results59) {
        node370.empty();
        for(var i72 = 0; i72 < results59.length; i72++) {
          (function() {
            var iternode59 = $("<span>");
            node370.append(iternode59);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results59), i72), "_1");it = mobl.ref(mobl.ref(mobl.ref(results59), i72), "_2");
            
            var tmp1902 = mobl.ref(false);
            
            
            var tmp1901 = mobl.ref(null);
            
            
            var tmp1900 = mobl.ref(null);
            
            var nodes736 = $("<span>");
            iternode59.append(nodes736);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1900, tmp1901, tmp1902, function(_, callback) {
              var root923 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1899 = mobl.ref(null);
              
              var nodes737 = $("<span>");
              root923.append(nodes737);
              subs__.addSub((ui.checkBox)(checked, it, tmp1899, function(_, callback) {
                var root924 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root924); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes737;
                nodes737 = node.contents();
                oldNodes.replaceWith(nodes737);
              }));
              callback(root923); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes736;
              nodes736 = node.contents();
              oldNodes.replaceWith(nodes736);
            }));
            
            var oldNodes = iternode59;
            iternode59 = iternode59.contents();
            oldNodes.replaceWith(iternode59);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list59.addEventListener('change', function() { listSubs__.unsubscribe(); renderList59(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList59(true); }));
      });
    };
    renderList59();
    
    callback(root922); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes735;
    nodes735 = node.contents();
    oldNodes.replaceWith(nodes735);
  }));
  callback(root921); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root925 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll138) {
    coll138 = coll138.reverse();
    function processOne17() {
      var it;
      it = coll138.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll138.length > 0) processOne17(); else rest17();
      
    }
    function rest17() {
      
      var tmp1906 = mobl.ref(null);
      
      var nodes738 = $("<span>");
      root925.append(nodes738);
      subs__.addSub((ui.header)(title, tmp1906, function(_, callback) {
        var root926 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1903 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp1904 = mobl.ref(mobl._("Back", []));
        
        var nodes739 = $("<span>");
        root926.append(nodes739);
        subs__.addSub((ui.backButton)(tmp1904, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1903, function(_, callback) {
          var root927 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root927); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes739;
          nodes739 = node.contents();
          oldNodes.replaceWith(nodes739);
        }));
        
        var tmp1905 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll137) {
                               coll137 = coll137.reverse();
                               function processOne16() {
                                 var checked;var it;
                                 var tmp1958 = coll137.pop();
                                 checked = tmp1958._1;it = tmp1958._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll137.length > 0) processOne16(); else rest16();
                                   
                                 } else {
                                   {
                                     
                                     if(coll137.length > 0) processOne16(); else rest16();
                                     
                                   }
                                 }
                               }
                               function rest16() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll137.length > 0) processOne16(); else rest16();
                             });
                             
                           });
        
        var nodes740 = $("<span>");
        root926.append(nodes740);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1905, function(_, callback) {
          var root928 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root928); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes740;
          nodes740 = node.contents();
          oldNodes.replaceWith(nodes740);
        }));
        callback(root926); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes738;
        nodes738 = node.contents();
        oldNodes.replaceWith(nodes738);
      }));
      var nodes741 = $("<span>");
      root925.append(nodes741);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root929 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root929); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes741;
        nodes741 = node.contents();
        oldNodes.replaceWith(nodes741);
      }));
      callback(root925); return subs__;
      
      
    }
    if(coll138.length > 0) processOne17(); else rest17();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root930 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp1908 = mobl.ref(null);
  
  
  var tmp1907 = mobl.ref(null);
  
  var nodes742 = $("<span>");
  root930.append(nodes742);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp1907, tmp1908, function(_, callback) {
    var root931 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root931); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes742;
    nodes742 = node.contents();
    oldNodes.replaceWith(nodes742);
  }));
  
  var tmp1909 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1909.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1909.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1909.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1909.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1909.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes743 = $("<span>");
  root930.append(nodes743);
  subs__.addSub((ui.masterDetail)(tmp1909, masterItem, detailItem, function(_, callback) {
    var root932 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root932); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes743;
    nodes743 = node.contents();
    oldNodes.replaceWith(nodes743);
  }));
  callback(root930); return subs__;
  
  
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
  var root933 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp1922 = mobl.ref(null);
  
  
  var tmp1921 = mobl.ref(null);
  
  
  var tmp1920 = mobl.ref(null);
  
  var nodes744 = $("<span>");
  root933.append(nodes744);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp1920, tmp1921, tmp1922, function(_, callback) {
    var root934 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node371 = mobl.loadingSpan();
    root934.append(node371);
    var list60;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList60 = function() {
      var subs__ = listSubs__;
      list60 = sections.get();
      list60.list(function(results60) {
        node371.empty();
        for(var i73 = 0; i73 < results60.length; i73++) {
          (function() {
            var iternode60 = $("<span>");
            node371.append(iternode60);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results60), i73), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results60), i73), "_2");
            
            var tmp1913 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1913.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1913.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1913.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1913.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp1912 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1915 = mobl.ref(null);
            
            
            var tmp1914 = mobl.ref(null);
            
            var nodes745 = $("<span>");
            iternode60.append(nodes745);
            subs__.addSub((mobl.span)(tmp1913, tmp1914, tmp1912, tmp1915, function(_, callback) {
              var root935 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1911 = mobl.ref(null);
              
              
              var tmp1910 = mobl.ref(null);
              
              var nodes746 = $("<span>");
              root935.append(nodes746);
              subs__.addSub((mobl.label)(sectionName, tmp1910, tmp1911, function(_, callback) {
                var root936 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root936); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes746;
                nodes746 = node.contents();
                oldNodes.replaceWith(nodes746);
              }));
              callback(root935); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes745;
              nodes745 = node.contents();
              oldNodes.replaceWith(nodes745);
            }));
            
            var tmp1916 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1916.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1916.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1916.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1916.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp1919 = mobl.ref(null);
            
            
            var tmp1918 = mobl.ref(null);
            
            
            var tmp1917 = mobl.ref(null);
            
            var nodes747 = $("<span>");
            iternode60.append(nodes747);
            subs__.addSub((mobl.block)(tmp1916, tmp1917, tmp1918, tmp1919, function(_, callback) {
              var root937 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes748 = $("<span>");
              root937.append(nodes748);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl114();
              }));
              
              function renderControl114() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root938 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root938); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes748;
                  nodes748 = node.contents();
                  oldNodes.replaceWith(nodes748);
                }));
              }
              renderControl114();
              callback(root937); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes747;
              nodes747 = node.contents();
              oldNodes.replaceWith(nodes747);
            }));
            
            var oldNodes = iternode60;
            iternode60 = iternode60.contents();
            oldNodes.replaceWith(iternode60);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list60.addEventListener('change', function() { listSubs__.unsubscribe(); renderList60(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList60(true); }));
      });
    };
    renderList60();
    
    callback(root934); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes744;
    nodes744 = node.contents();
    oldNodes.replaceWith(nodes744);
  }));
  callback(root933); return subs__;
  
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
  var root939 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node372 = $("<table>");
  
  var ref278 = mobl.ref(ui.tableStyle);
  if(ref278.get() !== null) {
    node372.attr('class', ref278.get());
    subs__.addSub(ref278.addEventListener('change', function(_, ref, val) {
      node372.attr('class', val);
    }));
    
  }
  subs__.addSub(ref278.rebind());
  
  var nodes749 = $("<span>");
  node372.append(nodes749);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl115();
  }));
  
  function renderControl115() {
    subs__.addSub((elements)(function(elements, callback) {
      var root940 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root940); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes749;
      nodes749 = node.contents();
      oldNodes.replaceWith(nodes749);
    }));
  }
  renderControl115();
  root939.append(node372);
  callback(root939); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root941 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node373 = $("<tr>");
  
  var ref279 = mobl.ref(ui.trStyle);
  if(ref279.get() !== null) {
    node373.attr('class', ref279.get());
    subs__.addSub(ref279.addEventListener('change', function(_, ref, val) {
      node373.attr('class', val);
    }));
    
  }
  subs__.addSub(ref279.rebind());
  
  var nodes750 = $("<span>");
  node373.append(nodes750);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl116();
  }));
  
  function renderControl116() {
    subs__.addSub((elements)(function(elements, callback) {
      var root942 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root942); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes750;
      nodes750 = node.contents();
      oldNodes.replaceWith(nodes750);
    }));
  }
  renderControl116();
  root941.append(node373);
  callback(root941); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root943 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node374 = $("<td>");
  
  var ref280 = width;
  if(ref280.get() !== null) {
    node374.attr('width', ref280.get());
    subs__.addSub(ref280.addEventListener('change', function(_, ref, val) {
      node374.attr('width', val);
    }));
    
  }
  subs__.addSub(ref280.rebind());
  
  var ref281 = mobl.ref(ui.tdStyle);
  if(ref281.get() !== null) {
    node374.attr('class', ref281.get());
    subs__.addSub(ref281.addEventListener('change', function(_, ref, val) {
      node374.attr('class', val);
    }));
    
  }
  subs__.addSub(ref281.rebind());
  
  var nodes751 = $("<span>");
  node374.append(nodes751);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl117();
  }));
  
  function renderControl117() {
    subs__.addSub((elements)(function(elements, callback) {
      var root944 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root944); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes751;
      nodes751 = node.contents();
      oldNodes.replaceWith(nodes751);
    }));
  }
  renderControl117();
  root943.append(node374);
  callback(root943); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root945 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node375 = $("<td>");
  
  var ref282 = width;
  if(ref282.get() !== null) {
    node375.attr('width', ref282.get());
    subs__.addSub(ref282.addEventListener('change', function(_, ref, val) {
      node375.attr('width', val);
    }));
    
  }
  subs__.addSub(ref282.rebind());
  
  var ref283 = mobl.ref(ui.tdStyle);
  if(ref283.get() !== null) {
    node375.attr('class', ref283.get());
    subs__.addSub(ref283.addEventListener('change', function(_, ref, val) {
      node375.attr('class', val);
    }));
    
  }
  subs__.addSub(ref283.rebind());
  
  var nodes752 = $("<span>");
  node375.append(nodes752);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl118();
  }));
  
  function renderControl118() {
    subs__.addSub((elements)(function(elements, callback) {
      var root946 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root946); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes752;
      nodes752 = node.contents();
      oldNodes.replaceWith(nodes752);
    }));
  }
  renderControl118();
  root945.append(node375);
  callback(root945); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root947 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node376 = $("<td>");
  
  var ref284 = width;
  if(ref284.get() !== null) {
    node376.attr('width', ref284.get());
    subs__.addSub(ref284.addEventListener('change', function(_, ref, val) {
      node376.attr('width', val);
    }));
    
  }
  subs__.addSub(ref284.rebind());
  
  var ref285 = mobl.ref(ui.tdStyle);
  if(ref285.get() !== null) {
    node376.attr('class', ref285.get());
    subs__.addSub(ref285.addEventListener('change', function(_, ref, val) {
      node376.attr('class', val);
    }));
    
  }
  subs__.addSub(ref285.rebind());
  
  
  var node377 = $("<strong>");
  
  var nodes753 = $("<span>");
  node377.append(nodes753);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl119();
  }));
  
  function renderControl119() {
    subs__.addSub((elements)(function(elements, callback) {
      var root948 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root948); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes753;
      nodes753 = node.contents();
      oldNodes.replaceWith(nodes753);
    }));
  }
  renderControl119();
  node376.append(node377);
  root947.append(node376);
  callback(root947); return subs__;
  
  
  
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
  var root949 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes754 = $("<span>");
  root949.append(nodes754);
  subs__.addSub((ui.group)(function(_, callback) {
    var root950 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node378 = mobl.loadingSpan();
    root950.append(node378);
    var list61;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList61 = function() {
      var subs__ = listSubs__;
      list61 = items.get();
      list61.list(function(results61) {
        node378.empty();
        for(var i74 = 0; i74 < results61.length; i74++) {
          (function() {
            var iternode61 = $("<span>");
            node378.append(iternode61);
            var it;
            it = mobl.ref(mobl.ref(results61), i74);
            
            var tmp1923 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1960 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp1925 = mobl.ref(false);
            
            
            var tmp1924 = mobl.ref(null);
            
            var nodes755 = $("<span>");
            iternode61.append(nodes755);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp1923, tmp1924, tmp1925, function(_, callback) {
              var root951 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes756 = $("<span>");
              root951.append(nodes756);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl120();
              }));
              
              function renderControl120() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root952 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root952); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes756;
                  nodes756 = node.contents();
                  oldNodes.replaceWith(nodes756);
                }));
              }
              renderControl120();
              callback(root951); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes755;
              nodes755 = node.contents();
              oldNodes.replaceWith(nodes755);
            }));
            
            var oldNodes = iternode61;
            iternode61 = iternode61.contents();
            oldNodes.replaceWith(iternode61);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list61.addEventListener('change', function() { listSubs__.unsubscribe(); renderList61(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList61(true); }));
      });
    };
    renderList61();
    
    callback(root950); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes754;
    nodes754 = node.contents();
    oldNodes.replaceWith(nodes754);
  }));
  callback(root949); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root953 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1927 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp1926 = mobl.ref("Back");
  
  var nodes757 = $("<span>");
  root953.append(nodes757);
  subs__.addSub((ui.backButton)(tmp1926, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1927, function(_, callback) {
    var root954 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root954); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes757;
    nodes757 = node.contents();
    oldNodes.replaceWith(nodes757);
  }));
  var nodes758 = $("<span>");
  root953.append(nodes758);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl121();
  }));
  
  function renderControl121() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root955 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root955); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes758;
      nodes758 = node.contents();
      oldNodes.replaceWith(nodes758);
    }));
  }
  renderControl121();
  callback(root953); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root956 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node379 = $("<div>");
  
  var ref289 = mobl.ref(ui.customHeaderStyle);
  if(ref289.get() !== null) {
    node379.attr('class', ref289.get());
    subs__.addSub(ref289.addEventListener('change', function(_, ref, val) {
      node379.attr('class', val);
    }));
    
  }
  subs__.addSub(ref289.rebind());
  
  var val260 = onclick.get();
  if(val260 !== null) {
    subs__.addSub(mobl.domBind(node379, 'tap', val260));
  }
  
  
  var node380 = $("<div>");
  
  var ref288 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref288.get() !== null) {
    node380.attr('class', ref288.get());
    subs__.addSub(ref288.addEventListener('change', function(_, ref, val) {
      node380.attr('class', val);
    }));
    
  }
  subs__.addSub(ref288.rebind());
  
  
  var node381 = $("<div>");
  
  var ref286 = text;
  node381.text(""+ref286.get());
  var ignore54 = false;
  subs__.addSub(ref286.addEventListener('change', function(_, ref, val) {
    if(ignore54) return;
    node381.text(""+val);
  }));
  subs__.addSub(ref286.rebind());
  
  
  var ref287 = mobl.ref(ui.customHeaderTextStyle);
  if(ref287.get() !== null) {
    node381.attr('class', ref287.get());
    subs__.addSub(ref287.addEventListener('change', function(_, ref, val) {
      node381.attr('class', val);
    }));
    
  }
  subs__.addSub(ref287.rebind());
  
  node380.append(node381);
  node379.append(node380);
  var nodes759 = $("<span>");
  node379.append(nodes759);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl122();
  }));
  
  function renderControl122() {
    subs__.addSub((elements)(function(elements, callback) {
      var root957 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root957); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes759;
      nodes759 = node.contents();
      oldNodes.replaceWith(nodes759);
    }));
  }
  renderControl122();
  root956.append(node379);
  callback(root956); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root958 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref290 = mobl.ref(ui.customItemStyle);
  if(ref290.get() !== null) {
    el.attr('class', ref290.get());
    subs__.addSub(ref290.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref290.rebind());
  
  var ref291 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref291.get() !== null) {
    el.attr('class', ref291.get());
    subs__.addSub(ref291.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref291.rebind());
  
  var val261 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1961 = result__;
                                           function after49(result__) {
                                             var tmp1962 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after49);if(result__ !== undefined) after49(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1963 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val261 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val261));
  }
  
  var nodes760 = $("<span>");
  el.append(nodes760);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl123();
  }));
  
  function renderControl123() {
    subs__.addSub((elements)(function(elements, callback) {
      var root959 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root959); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes760;
      nodes760 = node.contents();
      oldNodes.replaceWith(nodes760);
    }));
  }
  renderControl123();
  root958.append(el);
  callback(root958); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root960 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node382 = $("<div>");
  node382.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node384 = mobl.loadingSpan();
  node382.append(node384);
  var list63;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList63 = function() {
    var subs__ = listSubs__;
    list63 = tabs.get();
    list63.list(function(results63) {
      node384.empty();
      for(var i76 = 0; i76 < results63.length; i76++) {
        (function() {
          var iternode63 = $("<span>");
          node384.append(iternode63);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results63), i76), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results63), i76), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results63), i76), "_3");
          
          var tmp1928 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp1928.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp1928.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp1928.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp1928.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp1931 = mobl.ref(null);
          
          
          var tmp1930 = mobl.ref(null);
          
          
          var tmp1929 = mobl.ref(null);
          
          var nodes764 = $("<span>");
          iternode63.append(nodes764);
          subs__.addSub((mobl.block)(tmp1928, tmp1929, tmp1930, tmp1931, function(_, callback) {
            var root964 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes765 = $("<span>");
            root964.append(nodes765);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root965 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes766 = $("<span>");
              root965.append(nodes766);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl124();
              }));
              
              function renderControl124() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root966 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root966); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes766;
                  nodes766 = node.contents();
                  oldNodes.replaceWith(nodes766);
                }));
              }
              renderControl124();
              callback(root965); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes765;
              nodes765 = node.contents();
              oldNodes.replaceWith(nodes765);
            }));
            callback(root964); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes764;
            nodes764 = node.contents();
            oldNodes.replaceWith(nodes764);
          }));
          
          var oldNodes = iternode63;
          iternode63 = iternode63.contents();
          oldNodes.replaceWith(iternode63);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list63.addEventListener('change', function() { listSubs__.unsubscribe(); renderList63(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList63(true); }));
    });
  };
  renderList63();
  
  root960.append(node382);
  
  var tmp1940 = mobl.ref(null);
  
  
  var tmp1939 = mobl.ref(null);
  
  
  var tmp1938 = mobl.ref(null);
  
  var nodes761 = $("<span>");
  root960.append(nodes761);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp1938, tmp1939, tmp1940, function(_, callback) {
    var root961 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node383 = mobl.loadingSpan();
    root961.append(node383);
    var list62;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList62 = function() {
      var subs__ = listSubs__;
      list62 = tabs.get();
      list62.list(function(results62) {
        node383.empty();
        for(var i75 = 0; i75 < results62.length; i75++) {
          (function() {
            var iternode62 = $("<span>");
            node383.append(iternode62);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results62), i75), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results62), i75), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results62), i75), "_3");
            
            var tmp1935 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp1935.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1935.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp1935.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp1935.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp1934 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1937 = mobl.ref(null);
            
            
            var tmp1936 = mobl.ref(null);
            
            var nodes762 = $("<span>");
            iternode62.append(nodes762);
            subs__.addSub((mobl.span)(tmp1935, tmp1936, tmp1934, tmp1937, function(_, callback) {
              var root962 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1933 = mobl.ref(null);
              
              
              var tmp1932 = mobl.ref(null);
              
              var nodes763 = $("<span>");
              root962.append(nodes763);
              subs__.addSub((mobl.label)(tabName, tmp1932, tmp1933, function(_, callback) {
                var root963 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root963); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes763;
                nodes763 = node.contents();
                oldNodes.replaceWith(nodes763);
              }));
              callback(root962); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes762;
              nodes762 = node.contents();
              oldNodes.replaceWith(nodes762);
            }));
            
            var oldNodes = iternode62;
            iternode62 = iternode62.contents();
            oldNodes.replaceWith(iternode62);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list62.addEventListener('change', function() { listSubs__.unsubscribe(); renderList62(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList62(true); }));
      });
    };
    renderList62();
    
    callback(root961); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes761;
    nodes761 = node.contents();
    oldNodes.replaceWith(nodes761);
  }));
  callback(root960); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root967 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node385 = $("<div>");
  node385.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node385.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  root967.append(node385);
  callback(root967); return subs__;
  
  
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
