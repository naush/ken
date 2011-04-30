mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root4928 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1801 = $("<span>");
  root4928.append(node1801);
  var condSubs239 = new mobl.CompSubscription();
  subs__.addSub(condSubs239);
  var oldValue239;
  var renderCond239 = function() {
    var value559 = value.get();
    if(oldValue239 === value559) return;
    oldValue239 = value559;
    var subs__ = condSubs239;
    subs__.unsubscribe();
    node1801.empty();
    if(value559) {
      var nodes3870 = $("<span>");
      node1801.append(nodes3870);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl650();
      }));
      
      function renderControl650() {
        subs__.addSub((elements)(function(elements, callback) {
          var root4929 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4929); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3870;
          nodes3870 = node.contents();
          oldNodes.replaceWith(nodes3870);
        }));
      }
      renderControl650();
      
      
    } else {
      
      var tmp9798 = mobl.ref(null);
      
      
      var tmp9797 = mobl.ref(null);
      
      
      var tmp9796 = mobl.ref(null);
      
      var nodes3871 = $("<span>");
      node1801.append(nodes3871);
      subs__.addSub((mobl.block)(style, tmp9796, tmp9797, tmp9798, function(_, callback) {
        var root4930 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp9788 = mobl.ref(null);
        
        
        var tmp9787 = mobl.ref(null);
        
        var nodes3872 = $("<span>");
        root4930.append(nodes3872);
        subs__.addSub((mobl.label)(loadingMessage, tmp9787, tmp9788, function(_, callback) {
          var root4931 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4931); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3872;
          nodes3872 = node.contents();
          oldNodes.replaceWith(nodes3872);
        }));
        
        var tmp9790 = mobl.ref("middle");
        
        
        var tmp9789 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp9795 = mobl.ref(null);
        
        
        var tmp9794 = mobl.ref(null);
        
        
        var tmp9793 = mobl.ref(null);
        
        
        var tmp9792 = mobl.ref(null);
        
        
        var tmp9791 = mobl.ref(null);
        
        var nodes3873 = $("<span>");
        root4930.append(nodes3873);
        subs__.addSub((ui.image)(tmp9789, tmp9791, tmp9792, tmp9793, tmp9794, tmp9790, tmp9795, function(_, callback) {
          var root4932 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4932); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3873;
          nodes3873 = node.contents();
          oldNodes.replaceWith(nodes3873);
        }));
        callback(root4930); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3871;
        nodes3871 = node.contents();
        oldNodes.replaceWith(nodes3871);
      }));
      
      
    }
  };
  renderCond239();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond239();
  }));
  
  callback(root4928); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root4933 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1802 = $("<div>");
  
  var ref1437 = mobl.ref(ui.headerStyle);
  if(ref1437.get() !== null) {
    node1802.attr('class', ref1437.get());
    subs__.addSub(ref1437.addEventListener('change', function(_, ref, val) {
      node1802.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1437.rebind());
  
  var val780 = onclick.get();
  if(val780 !== null) {
    subs__.addSub(mobl.domBind(node1802, 'tap', val780));
  }
  
  
  var node1803 = $("<div>");
  
  var ref1436 = mobl.ref(ui.headerContainerStyle);
  if(ref1436.get() !== null) {
    node1803.attr('class', ref1436.get());
    subs__.addSub(ref1436.addEventListener('change', function(_, ref, val) {
      node1803.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1436.rebind());
  
  
  var node1804 = $("<div>");
  
  var ref1434 = text;
  node1804.text(""+ref1434.get());
  var ignore286 = false;
  subs__.addSub(ref1434.addEventListener('change', function(_, ref, val) {
    if(ignore286) return;
    node1804.text(""+val);
  }));
  subs__.addSub(ref1434.rebind());
  
  
  var ref1435 = mobl.ref(ui.headerTextStyle);
  if(ref1435.get() !== null) {
    node1804.attr('class', ref1435.get());
    subs__.addSub(ref1435.addEventListener('change', function(_, ref, val) {
      node1804.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1435.rebind());
  
  node1803.append(node1804);
  node1802.append(node1803);
  var nodes3874 = $("<span>");
  node1802.append(nodes3874);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl651();
  }));
  
  function renderControl651() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4934 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4934); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3874;
      nodes3874 = node.contents();
      oldNodes.replaceWith(nodes3874);
    }));
  }
  renderControl651();
  root4933.append(node1802);
  callback(root4933); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4935 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1438 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1438.get() !== null) {
    sp.attr('class', ref1438.get());
    subs__.addSub(ref1438.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1438.rebind());
  
  var val781 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val781 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val781));
  }
  
  var val782 = function(event, callback) {
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
  if(val782 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val782));
  }
  
  var val783 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after260(result__) {
                    var tmp9888 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after260);if(result__ !== undefined) after260(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val783 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val783));
  }
  
  var val784 = function(event, callback) {
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
  if(val784 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val784));
  }
  
  var ref1439 = text;
  sp.text(""+ref1439.get());
  var ignore287 = false;
  subs__.addSub(ref1439.addEventListener('change', function(_, ref, val) {
    if(ignore287) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1439.rebind());
  
  
  root4935.append(sp);
  callback(root4935); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4936 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3875 = $("<span>");
  root4936.append(nodes3875);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4937 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4937); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3875;
    nodes3875 = node.contents();
    oldNodes.replaceWith(nodes3875);
  }));
  callback(root4936); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4938 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3876 = $("<span>");
  root4938.append(nodes3876);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4939 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4939); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3876;
    nodes3876 = node.contents();
    oldNodes.replaceWith(nodes3876);
  }));
  callback(root4938); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root4940 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1805 = $("<ul>");
  
  var ref1440 = mobl.ref(ui.groupStyle);
  if(ref1440.get() !== null) {
    node1805.attr('class', ref1440.get());
    subs__.addSub(ref1440.addEventListener('change', function(_, ref, val) {
      node1805.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1440.rebind());
  
  var nodes3877 = $("<span>");
  node1805.append(nodes3877);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl652();
  }));
  
  function renderControl652() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4941 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4941); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3877;
      nodes3877 = node.contents();
      oldNodes.replaceWith(nodes3877);
    }));
  }
  renderControl652();
  root4940.append(node1805);
  callback(root4940); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root4942 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1806 = $("<img>");
  
  var ref1441 = url;
  if(ref1441.get() !== null) {
    node1806.attr('src', ref1441.get());
    subs__.addSub(ref1441.addEventListener('change', function(_, ref, val) {
      node1806.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1441.rebind());
  
  var ref1442 = width;
  if(ref1442.get() !== null) {
    node1806.attr('width', ref1442.get());
    subs__.addSub(ref1442.addEventListener('change', function(_, ref, val) {
      node1806.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1442.rebind());
  
  var ref1443 = height;
  if(ref1443.get() !== null) {
    node1806.attr('height', ref1443.get());
    subs__.addSub(ref1443.addEventListener('change', function(_, ref, val) {
      node1806.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1443.rebind());
  
  var ref1444 = style;
  if(ref1444.get() !== null) {
    node1806.attr('class', ref1444.get());
    subs__.addSub(ref1444.addEventListener('change', function(_, ref, val) {
      node1806.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1444.rebind());
  
  var val785 = onclick.get();
  if(val785 !== null) {
    subs__.addSub(mobl.domBind(node1806, 'tap', val785));
  }
  
  var ref1445 = valign;
  if(ref1445.get() !== null) {
    node1806.attr('valign', ref1445.get());
    subs__.addSub(ref1445.addEventListener('change', function(_, ref, val) {
      node1806.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1445.rebind());
  
  var ref1446 = align;
  if(ref1446.get() !== null) {
    node1806.attr('align', ref1446.get());
    subs__.addSub(ref1446.addEventListener('change', function(_, ref, val) {
      node1806.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1446.rebind());
  
  root4942.append(node1806);
  callback(root4942); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root4943 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1447 = mobl.ref(ui.itemStyle);
  if(ref1447.get() !== null) {
    el.attr('class', ref1447.get());
    subs__.addSub(ref1447.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1447.rebind());
  
  var ref1448 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1448.get() !== null) {
    el.attr('class', ref1448.get());
    subs__.addSub(ref1448.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1448.rebind());
  
  var val786 = onswipe.get();
  if(val786 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val786));
  }
  
  var val787 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp9889 = result__;
                                           function after261(result__) {
                                             var tmp9890 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after261);if(result__ !== undefined) after261(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp9891 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val787 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val787));
  }
  
  var nodes3878 = $("<span>");
  el.append(nodes3878);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl653();
  }));
  
  function renderControl653() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4944 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4944); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3878;
      nodes3878 = node.contents();
      oldNodes.replaceWith(nodes3878);
    }));
  }
  renderControl653();
  root4943.append(el);
  callback(root4943); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root4945 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1807 = $("<input>");
  node1807.attr('type', "checkbox");
  
  var ref1450 = b;
  node1807.attr('checked', !!ref1450.get());
  subs__.addSub(ref1450.addEventListener('change', function(_, ref, val) {
    if(ref === ref1450) node1807.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1807, 'change', function() {
    b.set(!!node1807.attr('checked'));
  }));
  
  var val789 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val789 !== null) {
    subs__.addSub(mobl.domBind(node1807, 'tap', val789));
  }
  
  var val790 = onchange.get();
  if(val790 !== null) {
    subs__.addSub(mobl.domBind(node1807, 'change', val790));
  }
  
  root4945.append(node1807);
  
  root4945.append(" ");
  
  var node1808 = $("<span>");
  
  var ref1449 = label;
  node1808.text(""+ref1449.get());
  var ignore288 = false;
  subs__.addSub(ref1449.addEventListener('change', function(_, ref, val) {
    if(ignore288) return;
    node1808.text(""+val);
  }));
  subs__.addSub(ref1449.rebind());
  
  
  var val788 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after262(result__) {
                    var tmp9892 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after262);if(result__ !== undefined) after262(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val788 !== null) {
    subs__.addSub(mobl.domBind(node1808, 'tap', val788));
  }
  
  root4945.append(node1808);
  callback(root4945); return subs__;
  
  
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
  var root4946 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1809 = $("<span>");
  root4946.append(node1809);
  var condSubs240 = new mobl.CompSubscription();
  subs__.addSub(condSubs240);
  var oldValue240;
  var renderCond240 = function() {
    var value560 = label.get();
    if(oldValue240 === value560) return;
    oldValue240 = value560;
    var subs__ = condSubs240;
    subs__.unsubscribe();
    node1809.empty();
    if(value560) {
      
      var tmp9799 = mobl.ref(null);
      
      var nodes3879 = $("<span>");
      node1809.append(nodes3879);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp9799, function(_, callback) {
        var root4947 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4947); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3879;
        nodes3879 = node.contents();
        oldNodes.replaceWith(nodes3879);
      }));
      
      
    } else {
      
    }
  };
  renderCond240();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond240();
  }));
  
  
  var node1810 = $("<span>");
  root4946.append(node1810);
  var condSubs241 = new mobl.CompSubscription();
  subs__.addSub(condSubs241);
  var oldValue241;
  var renderCond241 = function() {
    var value561 = validator.get();
    if(oldValue241 === value561) return;
    oldValue241 = value561;
    var subs__ = condSubs241;
    subs__.unsubscribe();
    node1810.empty();
    if(value561) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after266(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp9893 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1811 = $("<input>");
        node1811.attr('type', "text");
        
        var ref1451 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1451.get() !== null) {
          node1811.attr('class', ref1451.get());
          subs__.addSub(ref1451.addEventListener('change', function(_, ref, val) {
            node1811.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1811.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1811.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1811.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1451.rebind());
        
        var ref1452 = placeholder;
        if(ref1452.get() !== null) {
          node1811.attr('placeholder', ref1452.get());
          subs__.addSub(ref1452.addEventListener('change', function(_, ref, val) {
            node1811.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1452.rebind());
        
        var ref1453 = temp;
        node1811.val(""+ref1453.get());
        var ignore289 = false;
        subs__.addSub(ref1453.addEventListener('change', function(_, ref, val) {
          if(ignore289) return;
          node1811.val(""+val);
        }));
        subs__.addSub(ref1453.rebind());
        
        subs__.addSub(mobl.domBind(node1811, 'keyup change', function() {
          ignore289 = true;
          temp.set(mobl.stringTomobl__String(node1811.val()));
          ignore289 = false;
        }));
        
        
        var val791 = onchange.get();
        if(val791 !== null) {
          subs__.addSub(mobl.domBind(node1811, 'change', val791));
        }
        
        var val792 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after263(result__) {
                          var tmp9894 = result__;
                          function after264(result__) {
                            var tmp9895 = result__;
                            var result__ = tmp9895;
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
                          var result__ = validator.get()(temp.get(), after264);if(result__ !== undefined) after264(result__);
                        }
                        var result__ = onkeyup.get()(event, after263);if(result__ !== undefined) after263(result__);
                      } else {
                        {
                          function after265(result__) {
                            var tmp9895 = result__;
                            var result__ = tmp9895;
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
                          var result__ = validator.get()(temp.get(), after265);if(result__ !== undefined) after265(result__);
                        }
                      }
                    };
        if(val792 !== null) {
          subs__.addSub(mobl.domBind(node1811, 'keyup', val792));
        }
        
        var val793 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val793 !== null) {
          subs__.addSub(mobl.domBind(node1811, 'blur', val793));
        }
        
        node1810.append(node1811);
        
        var tmp9800 = mobl.ref(null);
        
        var nodes3880 = $("<span>");
        node1810.append(nodes3880);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp9800, function(_, callback) {
          var root4948 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4948); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3880;
          nodes3880 = node.contents();
          oldNodes.replaceWith(nodes3880);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after266);if(result__ !== undefined) after266(result__);
    } else {
      
      var node1812 = $("<input>");
      node1812.attr('type', "text");
      
      var ref1454 = style;
      if(ref1454.get() !== null) {
        node1812.attr('class', ref1454.get());
        subs__.addSub(ref1454.addEventListener('change', function(_, ref, val) {
          node1812.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1454.rebind());
      
      var ref1455 = placeholder;
      if(ref1455.get() !== null) {
        node1812.attr('placeholder', ref1455.get());
        subs__.addSub(ref1455.addEventListener('change', function(_, ref, val) {
          node1812.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1455.rebind());
      
      var ref1456 = s;
      node1812.val(""+ref1456.get());
      var ignore290 = false;
      subs__.addSub(ref1456.addEventListener('change', function(_, ref, val) {
        if(ignore290) return;
        node1812.val(""+val);
      }));
      subs__.addSub(ref1456.rebind());
      
      subs__.addSub(mobl.domBind(node1812, 'keyup change', function() {
        ignore290 = true;
        s.set(mobl.stringTomobl__String(node1812.val()));
        ignore290 = false;
      }));
      
      
      var val794 = onchange.get();
      if(val794 !== null) {
        subs__.addSub(mobl.domBind(node1812, 'change', val794));
      }
      
      var val795 = onkeyup.get();
      if(val795 !== null) {
        subs__.addSub(mobl.domBind(node1812, 'keyup', val795));
      }
      
      var val796 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val796 !== null) {
        subs__.addSub(mobl.domBind(node1812, 'blur', val796));
      }
      
      node1810.append(node1812);
      
      
    }
  };
  renderCond241();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond241();
  }));
  
  callback(root4946); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4949 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3881 = $("<span>");
  root4949.append(nodes3881);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4950 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4950); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3881;
    nodes3881 = node.contents();
    oldNodes.replaceWith(nodes3881);
  }));
  callback(root4949); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4951 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after267(result__) {
      var tmp9896 = result__;
      var result__ = tmp9896;
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
    var result__ = validator.get()(n2, after267);if(result__ !== undefined) after267(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes3882 = $("<span>");
  root4951.append(nodes3882);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4952 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4952); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3882;
    nodes3882 = node.contents();
    oldNodes.replaceWith(nodes3882);
  }));
  callback(root4951); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root4953 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1813 = $("<span>");
  root4953.append(node1813);
  var condSubs242 = new mobl.CompSubscription();
  subs__.addSub(condSubs242);
  var oldValue242;
  var renderCond242 = function() {
    var value562 = label.get();
    if(oldValue242 === value562) return;
    oldValue242 = value562;
    var subs__ = condSubs242;
    subs__.unsubscribe();
    node1813.empty();
    if(value562) {
      
      var node1814 = $("<span>");
      node1814.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1460 = label;
      node1814.text(""+ref1460.get());
      var ignore292 = false;
      subs__.addSub(ref1460.addEventListener('change', function(_, ref, val) {
        if(ignore292) return;
        node1814.text(""+val);
      }));
      subs__.addSub(ref1460.rebind());
      
      
      node1813.append(node1814);
      
      var node1815 = $("<span>");
      node1815.attr('style', "float: left");
      
      
      var node1816 = $("<input>");
      node1816.attr('type', "password");
      
      var ref1457 = style;
      if(ref1457.get() !== null) {
        node1816.attr('class', ref1457.get());
        subs__.addSub(ref1457.addEventListener('change', function(_, ref, val) {
          node1816.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1457.rebind());
      
      var ref1458 = placeholder;
      if(ref1458.get() !== null) {
        node1816.attr('placeholder', ref1458.get());
        subs__.addSub(ref1458.addEventListener('change', function(_, ref, val) {
          node1816.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1458.rebind());
      
      var ref1459 = s;
      node1816.val(""+ref1459.get());
      var ignore291 = false;
      subs__.addSub(ref1459.addEventListener('change', function(_, ref, val) {
        if(ignore291) return;
        node1816.val(""+val);
      }));
      subs__.addSub(ref1459.rebind());
      
      subs__.addSub(mobl.domBind(node1816, 'keyup change', function() {
        ignore291 = true;
        s.set(mobl.stringTomobl__String(node1816.val()));
        ignore291 = false;
      }));
      
      
      var val797 = onchange.get();
      if(val797 !== null) {
        subs__.addSub(mobl.domBind(node1816, 'change', val797));
      }
      
      var val798 = onkeyup.get();
      if(val798 !== null) {
        subs__.addSub(mobl.domBind(node1816, 'keyup', val798));
      }
      
      var val799 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val799 !== null) {
        subs__.addSub(mobl.domBind(node1816, 'blur', val799));
      }
      
      node1815.append(node1816);
      node1813.append(node1815);
      
      
      
      
    } else {
      
      var node1817 = $("<input>");
      node1817.attr('type', "password");
      
      var ref1461 = style;
      if(ref1461.get() !== null) {
        node1817.attr('class', ref1461.get());
        subs__.addSub(ref1461.addEventListener('change', function(_, ref, val) {
          node1817.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1461.rebind());
      
      var ref1462 = placeholder;
      if(ref1462.get() !== null) {
        node1817.attr('placeholder', ref1462.get());
        subs__.addSub(ref1462.addEventListener('change', function(_, ref, val) {
          node1817.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1462.rebind());
      
      var ref1463 = s;
      node1817.val(""+ref1463.get());
      var ignore293 = false;
      subs__.addSub(ref1463.addEventListener('change', function(_, ref, val) {
        if(ignore293) return;
        node1817.val(""+val);
      }));
      subs__.addSub(ref1463.rebind());
      
      subs__.addSub(mobl.domBind(node1817, 'keyup change', function() {
        ignore293 = true;
        s.set(mobl.stringTomobl__String(node1817.val()));
        ignore293 = false;
      }));
      
      
      var val800 = onchange.get();
      if(val800 !== null) {
        subs__.addSub(mobl.domBind(node1817, 'change', val800));
      }
      
      var val801 = onkeyup.get();
      if(val801 !== null) {
        subs__.addSub(mobl.domBind(node1817, 'keyup', val801));
      }
      
      var val802 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val802 !== null) {
        subs__.addSub(mobl.domBind(node1817, 'blur', val802));
      }
      
      node1813.append(node1817);
      
      
    }
  };
  renderCond242();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond242();
  }));
  
  callback(root4953); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root4954 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1468 = style;
  if(ref1468.get() !== null) {
    sel.attr('class', ref1468.get());
    subs__.addSub(ref1468.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1468.rebind());
  
  var val803 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after268(result__) {
                    var tmp9898 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after268);if(result__ !== undefined) after268(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val803 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val803));
  }
  
  
  var node1818 = mobl.loadingSpan();
  sel.append(node1818);
  var list330;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList330 = function() {
    var subs__ = listSubs__;
    list330 = options.get();
    list330.list(function(results330) {
      node1818.empty();
      for(var i380 = 0; i380 < results330.length; i380++) {
        (function() {
          var iternode330 = $("<span>");
          node1818.append(iternode330);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results330), i380), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results330), i380), "_2");
          
          var node1819 = $("<option>");
          
          var ref1464 = optionDescription;
          node1819.text(""+ref1464.get());
          var ignore294 = false;
          subs__.addSub(ref1464.addEventListener('change', function(_, ref, val) {
            if(ignore294) return;
            node1819.text(""+val);
          }));
          subs__.addSub(ref1464.rebind());
          
          
          var ref1465 = optionStyle;
          if(ref1465.get() !== null) {
            node1819.attr('class', ref1465.get());
            subs__.addSub(ref1465.addEventListener('change', function(_, ref, val) {
              node1819.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1465.rebind());
          
          var ref1466 = optionValue;
          if(ref1466.get() !== null) {
            node1819.attr('value', ref1466.get());
            subs__.addSub(ref1466.addEventListener('change', function(_, ref, val) {
              node1819.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1466.rebind());
          
          var ref1467 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1467.get() !== null) {
            node1819.attr('selected', ref1467.get());
            subs__.addSub(ref1467.addEventListener('change', function(_, ref, val) {
              node1819.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1819.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1819.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1467.rebind());
          
          iternode330.append(node1819);
          
          var oldNodes = iternode330;
          iternode330 = iternode330.contents();
          oldNodes.replaceWith(iternode330);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list330.addEventListener('change', function() { listSubs__.unsubscribe(); renderList330(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList330(true); }));
    });
  };
  renderList330();
  
  root4954.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root4954); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root4955 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp9809 = mobl.ref(null);
  
  
  var tmp9808 = mobl.ref(null);
  
  
  var tmp9807 = mobl.ref(null);
  
  var nodes3883 = $("<span>");
  root4955.append(nodes3883);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp9807, tmp9808, tmp9809, function(_, callback) {
    var root4956 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1820 = mobl.loadingSpan();
    root4956.append(node1820);
    var list331;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList331 = function() {
      var subs__ = listSubs__;
      list331 = tabs.get();
      list331.list(function(results331) {
        node1820.empty();
        for(var i381 = 0; i381 < results331.length; i381++) {
          (function() {
            var iternode331 = $("<span>");
            node1820.append(iternode331);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results331), i381), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results331), i381), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results331), i381), "_3");
            
            var tmp9804 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp9804.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp9804.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp9804.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp9804.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp9803 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp9806 = mobl.ref(null);
            
            
            var tmp9805 = mobl.ref(null);
            
            var nodes3884 = $("<span>");
            iternode331.append(nodes3884);
            subs__.addSub((mobl.span)(tmp9804, tmp9805, tmp9803, tmp9806, function(_, callback) {
              var root4957 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp9802 = mobl.ref(null);
              
              
              var tmp9801 = mobl.ref(null);
              
              var nodes3885 = $("<span>");
              root4957.append(nodes3885);
              subs__.addSub((mobl.label)(tabName, tmp9801, tmp9802, function(_, callback) {
                var root4958 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4958); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3885;
                nodes3885 = node.contents();
                oldNodes.replaceWith(nodes3885);
              }));
              callback(root4957); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3884;
              nodes3884 = node.contents();
              oldNodes.replaceWith(nodes3884);
            }));
            
            var oldNodes = iternode331;
            iternode331 = iternode331.contents();
            oldNodes.replaceWith(iternode331);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list331.addEventListener('change', function() { listSubs__.unsubscribe(); renderList331(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList331(true); }));
      });
    };
    renderList331();
    
    callback(root4956); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3883;
    nodes3883 = node.contents();
    oldNodes.replaceWith(nodes3883);
  }));
  
  var node1821 = mobl.loadingSpan();
  root4955.append(node1821);
  var list332;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList332 = function() {
    var subs__ = listSubs__;
    list332 = tabs.get();
    list332.list(function(results332) {
      node1821.empty();
      for(var i382 = 0; i382 < results332.length; i382++) {
        (function() {
          var iternode332 = $("<span>");
          node1821.append(iternode332);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results332), i382), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results332), i382), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results332), i382), "_3");
          
          var tmp9810 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp9810.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp9810.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp9810.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp9810.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp9813 = mobl.ref(null);
          
          
          var tmp9812 = mobl.ref(null);
          
          
          var tmp9811 = mobl.ref(null);
          
          var nodes3886 = $("<span>");
          iternode332.append(nodes3886);
          subs__.addSub((mobl.block)(tmp9810, tmp9811, tmp9812, tmp9813, function(_, callback) {
            var root4959 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes3887 = $("<span>");
            root4959.append(nodes3887);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root4960 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3888 = $("<span>");
              root4960.append(nodes3888);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl654();
              }));
              
              function renderControl654() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root4961 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4961); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3888;
                  nodes3888 = node.contents();
                  oldNodes.replaceWith(nodes3888);
                }));
              }
              renderControl654();
              callback(root4960); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3887;
              nodes3887 = node.contents();
              oldNodes.replaceWith(nodes3887);
            }));
            callback(root4959); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3886;
            nodes3886 = node.contents();
            oldNodes.replaceWith(nodes3886);
          }));
          
          var oldNodes = iternode332;
          iternode332 = iternode332.contents();
          oldNodes.replaceWith(iternode332);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list332.addEventListener('change', function() { listSubs__.unsubscribe(); renderList332(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList332(true); }));
    });
  };
  renderList332();
  
  callback(root4955); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root4962 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1822 = $("<div>");
  
  var ref1472 = mobl.ref(ui.searchboxStyle);
  if(ref1472.get() !== null) {
    node1822.attr('class', ref1472.get());
    subs__.addSub(ref1472.addEventListener('change', function(_, ref, val) {
      node1822.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1472.rebind());
  
  
  var node1823 = $("<input>");
  node1823.attr('type', "search");
  
  var ref1469 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1469.get() !== null) {
    node1823.attr('class', ref1469.get());
    subs__.addSub(ref1469.addEventListener('change', function(_, ref, val) {
      node1823.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1469.rebind());
  
  var ref1470 = placeholder;
  if(ref1470.get() !== null) {
    node1823.attr('placeholder', ref1470.get());
    subs__.addSub(ref1470.addEventListener('change', function(_, ref, val) {
      node1823.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1470.rebind());
  
  var ref1471 = s;
  node1823.val(""+ref1471.get());
  var ignore295 = false;
  subs__.addSub(ref1471.addEventListener('change', function(_, ref, val) {
    if(ignore295) return;
    node1823.val(""+val);
  }));
  subs__.addSub(ref1471.rebind());
  
  subs__.addSub(mobl.domBind(node1823, 'keyup change', function() {
    ignore295 = true;
    s.set(mobl.stringTomobl__String(node1823.val()));
    ignore295 = false;
  }));
  
  
  var val804 = onsearch.get();
  if(val804 !== null) {
    subs__.addSub(mobl.domBind(node1823, 'change', val804));
  }
  
  var val805 = onkeyup.get();
  if(val805 !== null) {
    subs__.addSub(mobl.domBind(node1823, 'keyup', val805));
  }
  node1823.attr('autocorrect', false);
  node1823.attr('autocapitalize', false);
  node1823.attr('autocomplete', false);
  
  node1822.append(node1823);
  root4962.append(node1822);
  callback(root4962); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root4963 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1473 = mobl.ref(ui.contextMenuStyle);
  if(ref1473.get() !== null) {
    menu.attr('class', ref1473.get());
    subs__.addSub(ref1473.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1473.rebind());
  
  var nodes3889 = $("<span>");
  menu.append(nodes3889);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl655();
  }));
  
  function renderControl655() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4964 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4964); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3889;
      nodes3889 = node.contents();
      oldNodes.replaceWith(nodes3889);
    }));
  }
  renderControl655();
  root4963.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val806 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp9901 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val806 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val806));
  }
  
  root4963.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root4963); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root4965 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp9887 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp9887.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1824 = $("<span>");
  root4965.append(node1824);
  var condSubs243 = new mobl.CompSubscription();
  subs__.addSub(condSubs243);
  var oldValue243;
  var renderCond243 = function() {
    var value563 = tmp9887.get();
    if(oldValue243 === value563) return;
    oldValue243 = value563;
    var subs__ = condSubs243;
    subs__.unsubscribe();
    node1824.empty();
    if(value563) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node1825 = $("<div>");
        node1825.attr('width', "100%");
        
        
        var node1826 = $("<div>");
        node1826.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes3892 = $("<span>");
        node1826.append(nodes3892);
        subs__.addSub((ui.group)(function(_, callback) {
          var root4968 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1829 = mobl.loadingSpan();
          root4968.append(node1829);
          var list333;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList333 = function() {
            var subs__ = listSubs__;
            list333 = items.get();
            list333.list(function(results333) {
              node1829.empty();
              for(var i383 = 0; i383 < results333.length; i383++) {
                (function() {
                  var iternode333 = $("<span>");
                  node1829.append(iternode333);
                  var it;
                  it = mobl.ref(mobl.ref(results333), i383);
                  
                  var tmp9827 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp9827.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp9827.set(it.get() == current.get());
                  }));
                  
                  
                  var node1830 = $("<span>");
                  iternode333.append(node1830);
                  var condSubs245 = new mobl.CompSubscription();
                  subs__.addSub(condSubs245);
                  var oldValue245;
                  var renderCond245 = function() {
                    var value565 = tmp9827.get();
                    if(oldValue245 === value565) return;
                    oldValue245 = value565;
                    var subs__ = condSubs245;
                    subs__.unsubscribe();
                    node1830.empty();
                    if(value565) {
                      
                      var tmp9823 = mobl.ref(false);
                      
                      
                      var tmp9822 = mobl.ref(null);
                      
                      
                      var tmp9821 = mobl.ref(null);
                      
                      var nodes3893 = $("<span>");
                      node1830.append(nodes3893);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp9821, tmp9822, tmp9823, function(_, callback) {
                        var root4969 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3894 = $("<span>");
                        root4969.append(nodes3894);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl657();
                        }));
                        
                        function renderControl657() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root4970 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root4970); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3894;
                            nodes3894 = node.contents();
                            oldNodes.replaceWith(nodes3894);
                          }));
                        }
                        renderControl657();
                        callback(root4969); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3893;
                        nodes3893 = node.contents();
                        oldNodes.replaceWith(nodes3893);
                      }));
                      
                      
                    } else {
                      
                      var tmp9825 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp9824 = mobl.ref(true);
                      
                      
                      var tmp9826 = mobl.ref(null);
                      
                      var nodes3895 = $("<span>");
                      node1830.append(nodes3895);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9825, tmp9826, tmp9824, function(_, callback) {
                        var root4971 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3896 = $("<span>");
                        root4971.append(nodes3896);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl658();
                        }));
                        
                        function renderControl658() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root4972 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root4972); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3896;
                            nodes3896 = node.contents();
                            oldNodes.replaceWith(nodes3896);
                          }));
                        }
                        renderControl658();
                        callback(root4971); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3895;
                        nodes3895 = node.contents();
                        oldNodes.replaceWith(nodes3895);
                      }));
                      
                      
                    }
                  };
                  renderCond245();
                  subs__.addSub(tmp9827.addEventListener('change', function() {
                    renderCond245();
                  }));
                  
                  
                  var oldNodes = iternode333;
                  iternode333 = iternode333.contents();
                  oldNodes.replaceWith(iternode333);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list333.addEventListener('change', function() { listSubs__.unsubscribe(); renderList333(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList333(true); }));
            });
          };
          renderList333();
          
          callback(root4968); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3892;
          nodes3892 = node.contents();
          oldNodes.replaceWith(nodes3892);
        }));
        node1825.append(node1826);
        
        var node1827 = $("<div>");
        node1827.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1828 = $("<span>");
        node1827.append(node1828);
        var condSubs244 = new mobl.CompSubscription();
        subs__.addSub(condSubs244);
        var oldValue244;
        var renderCond244 = function() {
          var value564 = current.get();
          if(oldValue244 === value564) return;
          oldValue244 = value564;
          var subs__ = condSubs244;
          subs__.unsubscribe();
          node1828.empty();
          if(value564) {
            var nodes3890 = $("<span>");
            node1828.append(nodes3890);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl656();
            }));
            
            function renderControl656() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root4966 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4966); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3890;
                nodes3890 = node.contents();
                oldNodes.replaceWith(nodes3890);
              }));
            }
            renderControl656();
            
            
          } else {
            
            var tmp9828 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp9830 = mobl.ref(null);
            
            
            var tmp9829 = mobl.ref(null);
            
            var nodes3891 = $("<span>");
            node1828.append(nodes3891);
            subs__.addSub((mobl.label)(tmp9828, tmp9829, tmp9830, function(_, callback) {
              var root4967 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4967); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3891;
              nodes3891 = node.contents();
              oldNodes.replaceWith(nodes3891);
            }));
            
            
          }
        };
        renderCond244();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond244();
        }));
        
        node1825.append(node1827);
        node1824.append(node1825);
        
        
        
        
        
        
      });
    } else {
      var nodes3897 = $("<span>");
      node1824.append(nodes3897);
      subs__.addSub((ui.group)(function(_, callback) {
        var root4973 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1831 = mobl.loadingSpan();
        root4973.append(node1831);
        var list334;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList334 = function() {
          var subs__ = listSubs__;
          list334 = items.get();
          list334.list(function(results334) {
            node1831.empty();
            for(var i384 = 0; i384 < results334.length; i384++) {
              (function() {
                var iternode334 = $("<span>");
                node1831.append(iternode334);
                var it;
                it = mobl.ref(mobl.ref(results334), i384);
                
                var tmp9814 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp9902 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp9816 = mobl.ref(false);
                
                
                var tmp9815 = mobl.ref(null);
                
                var nodes3898 = $("<span>");
                iternode334.append(nodes3898);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9814, tmp9815, tmp9816, function(_, callback) {
                  var root4974 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3899 = $("<span>");
                  root4974.append(nodes3899);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl659();
                  }));
                  
                  function renderControl659() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root4975 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4975); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3899;
                      nodes3899 = node.contents();
                      oldNodes.replaceWith(nodes3899);
                    }));
                  }
                  renderControl659();
                  callback(root4974); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3898;
                  nodes3898 = node.contents();
                  oldNodes.replaceWith(nodes3898);
                }));
                
                var oldNodes = iternode334;
                iternode334 = iternode334.contents();
                oldNodes.replaceWith(iternode334);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list334.addEventListener('change', function() { listSubs__.unsubscribe(); renderList334(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList334(true); }));
          });
        };
        renderList334();
        
        callback(root4973); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3897;
        nodes3897 = node.contents();
        oldNodes.replaceWith(nodes3897);
      }));
      
      
    }
  };
  renderCond243();
  subs__.addSub(tmp9887.addEventListener('change', function() {
    renderCond243();
  }));
  
  callback(root4965); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root4976 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp9819 = mobl.ref("Detail");
  
  
  var tmp9820 = mobl.ref(null);
  
  var nodes3900 = $("<span>");
  root4976.append(nodes3900);
  subs__.addSub((ui.header)(tmp9819, tmp9820, function(_, callback) {
    var root4977 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp9818 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp9817 = mobl.ref("Back");
    
    var nodes3901 = $("<span>");
    root4977.append(nodes3901);
    subs__.addSub((ui.backButton)(tmp9817, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9818, function(_, callback) {
      var root4978 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4978); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3901;
      nodes3901 = node.contents();
      oldNodes.replaceWith(nodes3901);
    }));
    callback(root4977); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3900;
    nodes3900 = node.contents();
    oldNodes.replaceWith(nodes3900);
  }));
  var nodes3902 = $("<span>");
  root4976.append(nodes3902);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl660();
  }));
  
  function renderControl660() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root4979 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4979); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3902;
      nodes3902 = node.contents();
      oldNodes.replaceWith(nodes3902);
    }));
  }
  renderControl660();
  callback(root4976); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root4980 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes3903 = $("<span>");
  root4980.append(nodes3903);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4981 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1832 = mobl.loadingSpan();
    root4981.append(node1832);
    var list335;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList335 = function() {
      var subs__ = listSubs__;
      list335 = coll.get();
      list335.list(function(results335) {
        node1832.empty();
        for(var i385 = 0; i385 < results335.length; i385++) {
          (function() {
            var iternode335 = $("<span>");
            node1832.append(iternode335);
            var it;
            it = mobl.ref(mobl.ref(results335), i385);
            
            var tmp9837 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp9837.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp9837.set(it.get() == selected.get());
            }));
            
            
            var node1833 = $("<span>");
            iternode335.append(node1833);
            var condSubs246 = new mobl.CompSubscription();
            subs__.addSub(condSubs246);
            var oldValue246;
            var renderCond246 = function() {
              var value566 = tmp9837.get();
              if(oldValue246 === value566) return;
              oldValue246 = value566;
              var subs__ = condSubs246;
              subs__.unsubscribe();
              node1833.empty();
              if(value566) {
                
                var tmp9833 = mobl.ref(false);
                
                
                var tmp9832 = mobl.ref(null);
                
                
                var tmp9831 = mobl.ref(null);
                
                var nodes3904 = $("<span>");
                node1833.append(nodes3904);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9831, tmp9832, tmp9833, function(_, callback) {
                  var root4982 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3905 = $("<span>");
                  root4982.append(nodes3905);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl661();
                  }));
                  
                  function renderControl661() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root4983 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4983); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3905;
                      nodes3905 = node.contents();
                      oldNodes.replaceWith(nodes3905);
                    }));
                  }
                  renderControl661();
                  callback(root4982); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3904;
                  nodes3904 = node.contents();
                  oldNodes.replaceWith(nodes3904);
                }));
                
                
              } else {
                
                var tmp9835 = mobl.ref(true);
                
                
                var tmp9834 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp9836 = mobl.ref(null);
                
                var nodes3906 = $("<span>");
                node1833.append(nodes3906);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9834, tmp9836, tmp9835, function(_, callback) {
                  var root4984 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3907 = $("<span>");
                  root4984.append(nodes3907);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl662();
                  }));
                  
                  function renderControl662() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root4985 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4985); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3907;
                      nodes3907 = node.contents();
                      oldNodes.replaceWith(nodes3907);
                    }));
                  }
                  renderControl662();
                  callback(root4984); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3906;
                  nodes3906 = node.contents();
                  oldNodes.replaceWith(nodes3906);
                }));
                
                
              }
            };
            renderCond246();
            subs__.addSub(tmp9837.addEventListener('change', function() {
              renderCond246();
            }));
            
            
            var oldNodes = iternode335;
            iternode335 = iternode335.contents();
            oldNodes.replaceWith(iternode335);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list335.addEventListener('change', function() { listSubs__.unsubscribe(); renderList335(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList335(true); }));
      });
    };
    renderList335();
    
    callback(root4981); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3903;
    nodes3903 = node.contents();
    oldNodes.replaceWith(nodes3903);
  }));
  callback(root4980); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root4986 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes3908 = $("<span>");
    root4986.append(nodes3908);
    subs__.addSub((ui.group)(function(_, callback) {
      var root4987 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp9841 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp9841.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp9841.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp9841.set(coll.get().limit(n.get()));
      }));
      
      
      var node1834 = mobl.loadingSpan();
      root4987.append(node1834);
      var list336;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList336 = function() {
        var subs__ = listSubs__;
        list336 = tmp9841.get();
        list336.list(function(results336) {
          node1834.empty();
          for(var i386 = 0; i386 < results336.length; i386++) {
            (function() {
              var iternode336 = $("<span>");
              node1834.append(iternode336);
              var it;
              it = mobl.ref(mobl.ref(results336), i386);
              
              var tmp9838 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp9840 = mobl.ref(false);
              
              
              var tmp9839 = mobl.ref(null);
              
              var nodes3909 = $("<span>");
              iternode336.append(nodes3909);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9838, tmp9839, tmp9840, function(_, callback) {
                var root4988 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3910 = $("<span>");
                root4988.append(nodes3910);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl663();
                }));
                
                function renderControl663() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root4989 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root4989); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3910;
                    nodes3910 = node.contents();
                    oldNodes.replaceWith(nodes3910);
                  }));
                }
                renderControl663();
                callback(root4988); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3909;
                nodes3909 = node.contents();
                oldNodes.replaceWith(nodes3909);
              }));
              
              var oldNodes = iternode336;
              iternode336 = iternode336.contents();
              oldNodes.replaceWith(iternode336);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list336.addEventListener('change', function() { listSubs__.unsubscribe(); renderList336(true); }));
          subs__.addSub(tmp9841.addEventListener('change', function() { listSubs__.unsubscribe(); renderList336(true); }));
        });
      };
      renderList336();
      
      
      var tmp9844 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp9844.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp9844.set(n.get() < total.get());
      }));
      
      
      var node1835 = $("<span>");
      root4987.append(node1835);
      var condSubs247 = new mobl.CompSubscription();
      subs__.addSub(condSubs247);
      var oldValue247;
      var renderCond247 = function() {
        var value567 = tmp9844.get();
        if(oldValue247 === value567) return;
        oldValue247 = value567;
        var subs__ = condSubs247;
        subs__.unsubscribe();
        node1835.empty();
        if(value567) {
          
          var node1836 = $("<li>");
          
          var ref1474 = mobl.ref(ui.loadMoreStyle);
          if(ref1474.get() !== null) {
            node1836.attr('class', ref1474.get());
            subs__.addSub(ref1474.addEventListener('change', function(_, ref, val) {
              node1836.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1474.rebind());
          
          var val807 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val807 !== null) {
            subs__.addSub(mobl.domBind(node1836, 'tap', val807));
          }
          
          
          var tmp9843 = mobl.ref(null);
          
          
          var tmp9842 = mobl.ref(null);
          
          var nodes3911 = $("<span>");
          node1836.append(nodes3911);
          subs__.addSub((mobl.label)(moreLabel, tmp9842, tmp9843, function(_, callback) {
            var root4990 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4990); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3911;
            nodes3911 = node.contents();
            oldNodes.replaceWith(nodes3911);
          }));
          node1835.append(node1836);
          
          
          
        } else {
          
        }
      };
      renderCond247();
      subs__.addSub(tmp9844.addEventListener('change', function() {
        renderCond247();
      }));
      
      callback(root4987); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3908;
      nodes3908 = node.contents();
      oldNodes.replaceWith(nodes3908);
    }));
    callback(root4986); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root4991 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3912 = $("<span>");
  root4991.append(nodes3912);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4992 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1837 = mobl.loadingSpan();
    root4992.append(node1837);
    var list337;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList337 = function() {
      var subs__ = listSubs__;
      list337 = items.get();
      list337.list(function(results337) {
        node1837.empty();
        for(var i387 = 0; i387 < results337.length; i387++) {
          (function() {
            var iternode337 = $("<span>");
            node1837.append(iternode337);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results337), i387), "_1");it = mobl.ref(mobl.ref(mobl.ref(results337), i387), "_2");
            
            var tmp9848 = mobl.ref(false);
            
            
            var tmp9847 = mobl.ref(null);
            
            
            var tmp9846 = mobl.ref(null);
            
            var nodes3913 = $("<span>");
            iternode337.append(nodes3913);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9846, tmp9847, tmp9848, function(_, callback) {
              var root4993 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp9845 = mobl.ref(null);
              
              var nodes3914 = $("<span>");
              root4993.append(nodes3914);
              subs__.addSub((ui.checkBox)(checked, it, tmp9845, function(_, callback) {
                var root4994 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4994); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3914;
                nodes3914 = node.contents();
                oldNodes.replaceWith(nodes3914);
              }));
              callback(root4993); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3913;
              nodes3913 = node.contents();
              oldNodes.replaceWith(nodes3913);
            }));
            
            var oldNodes = iternode337;
            iternode337 = iternode337.contents();
            oldNodes.replaceWith(iternode337);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list337.addEventListener('change', function() { listSubs__.unsubscribe(); renderList337(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList337(true); }));
      });
    };
    renderList337();
    
    callback(root4992); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3912;
    nodes3912 = node.contents();
    oldNodes.replaceWith(nodes3912);
  }));
  callback(root4991); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root4995 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll589) {
    coll589 = coll589.reverse();
    function processOne65() {
      var it;
      it = coll589.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll589.length > 0) processOne65(); else rest65();
      
    }
    function rest65() {
      
      var tmp9852 = mobl.ref(null);
      
      var nodes3915 = $("<span>");
      root4995.append(nodes3915);
      subs__.addSub((ui.header)(title, tmp9852, function(_, callback) {
        var root4996 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp9849 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp9850 = mobl.ref(mobl._("Back", []));
        
        var nodes3916 = $("<span>");
        root4996.append(nodes3916);
        subs__.addSub((ui.backButton)(tmp9850, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9849, function(_, callback) {
          var root4997 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4997); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3916;
          nodes3916 = node.contents();
          oldNodes.replaceWith(nodes3916);
        }));
        
        var tmp9851 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll588) {
                               coll588 = coll588.reverse();
                               function processOne64() {
                                 var checked;var it;
                                 var tmp9904 = coll588.pop();
                                 checked = tmp9904._1;it = tmp9904._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll588.length > 0) processOne64(); else rest64();
                                   
                                 } else {
                                   {
                                     
                                     if(coll588.length > 0) processOne64(); else rest64();
                                     
                                   }
                                 }
                               }
                               function rest64() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll588.length > 0) processOne64(); else rest64();
                             });
                             
                           });
        
        var nodes3917 = $("<span>");
        root4996.append(nodes3917);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp9851, function(_, callback) {
          var root4998 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4998); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3917;
          nodes3917 = node.contents();
          oldNodes.replaceWith(nodes3917);
        }));
        callback(root4996); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3915;
        nodes3915 = node.contents();
        oldNodes.replaceWith(nodes3915);
      }));
      var nodes3918 = $("<span>");
      root4995.append(nodes3918);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root4999 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4999); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3918;
        nodes3918 = node.contents();
        oldNodes.replaceWith(nodes3918);
      }));
      callback(root4995); return subs__;
      
      
    }
    if(coll589.length > 0) processOne65(); else rest65();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root5000 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp9854 = mobl.ref(null);
  
  
  var tmp9853 = mobl.ref(null);
  
  var nodes3919 = $("<span>");
  root5000.append(nodes3919);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp9853, tmp9854, function(_, callback) {
    var root5001 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5001); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3919;
    nodes3919 = node.contents();
    oldNodes.replaceWith(nodes3919);
  }));
  
  var tmp9855 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp9855.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp9855.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp9855.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp9855.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp9855.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes3920 = $("<span>");
  root5000.append(nodes3920);
  subs__.addSub((ui.masterDetail)(tmp9855, masterItem, detailItem, function(_, callback) {
    var root5002 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5002); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3920;
    nodes3920 = node.contents();
    oldNodes.replaceWith(nodes3920);
  }));
  callback(root5000); return subs__;
  
  
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
  var root5003 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp9868 = mobl.ref(null);
  
  
  var tmp9867 = mobl.ref(null);
  
  
  var tmp9866 = mobl.ref(null);
  
  var nodes3921 = $("<span>");
  root5003.append(nodes3921);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp9866, tmp9867, tmp9868, function(_, callback) {
    var root5004 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1838 = mobl.loadingSpan();
    root5004.append(node1838);
    var list338;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList338 = function() {
      var subs__ = listSubs__;
      list338 = sections.get();
      list338.list(function(results338) {
        node1838.empty();
        for(var i388 = 0; i388 < results338.length; i388++) {
          (function() {
            var iternode338 = $("<span>");
            node1838.append(iternode338);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results338), i388), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results338), i388), "_2");
            
            var tmp9859 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp9859.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp9859.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp9859.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp9859.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp9858 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp9861 = mobl.ref(null);
            
            
            var tmp9860 = mobl.ref(null);
            
            var nodes3922 = $("<span>");
            iternode338.append(nodes3922);
            subs__.addSub((mobl.span)(tmp9859, tmp9860, tmp9858, tmp9861, function(_, callback) {
              var root5005 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp9857 = mobl.ref(null);
              
              
              var tmp9856 = mobl.ref(null);
              
              var nodes3923 = $("<span>");
              root5005.append(nodes3923);
              subs__.addSub((mobl.label)(sectionName, tmp9856, tmp9857, function(_, callback) {
                var root5006 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5006); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3923;
                nodes3923 = node.contents();
                oldNodes.replaceWith(nodes3923);
              }));
              callback(root5005); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3922;
              nodes3922 = node.contents();
              oldNodes.replaceWith(nodes3922);
            }));
            
            var tmp9862 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp9862.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp9862.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp9862.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp9862.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp9865 = mobl.ref(null);
            
            
            var tmp9864 = mobl.ref(null);
            
            
            var tmp9863 = mobl.ref(null);
            
            var nodes3924 = $("<span>");
            iternode338.append(nodes3924);
            subs__.addSub((mobl.block)(tmp9862, tmp9863, tmp9864, tmp9865, function(_, callback) {
              var root5007 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3925 = $("<span>");
              root5007.append(nodes3925);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl664();
              }));
              
              function renderControl664() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root5008 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5008); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3925;
                  nodes3925 = node.contents();
                  oldNodes.replaceWith(nodes3925);
                }));
              }
              renderControl664();
              callback(root5007); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3924;
              nodes3924 = node.contents();
              oldNodes.replaceWith(nodes3924);
            }));
            
            var oldNodes = iternode338;
            iternode338 = iternode338.contents();
            oldNodes.replaceWith(iternode338);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list338.addEventListener('change', function() { listSubs__.unsubscribe(); renderList338(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList338(true); }));
      });
    };
    renderList338();
    
    callback(root5004); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3921;
    nodes3921 = node.contents();
    oldNodes.replaceWith(nodes3921);
  }));
  callback(root5003); return subs__;
  
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
  var root5009 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1839 = $("<table>");
  
  var ref1475 = mobl.ref(ui.tableStyle);
  if(ref1475.get() !== null) {
    node1839.attr('class', ref1475.get());
    subs__.addSub(ref1475.addEventListener('change', function(_, ref, val) {
      node1839.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1475.rebind());
  
  var nodes3926 = $("<span>");
  node1839.append(nodes3926);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl665();
  }));
  
  function renderControl665() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5010 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5010); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3926;
      nodes3926 = node.contents();
      oldNodes.replaceWith(nodes3926);
    }));
  }
  renderControl665();
  root5009.append(node1839);
  callback(root5009); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root5011 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1840 = $("<tr>");
  
  var ref1476 = mobl.ref(ui.trStyle);
  if(ref1476.get() !== null) {
    node1840.attr('class', ref1476.get());
    subs__.addSub(ref1476.addEventListener('change', function(_, ref, val) {
      node1840.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1476.rebind());
  
  var nodes3927 = $("<span>");
  node1840.append(nodes3927);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl666();
  }));
  
  function renderControl666() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5012 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5012); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3927;
      nodes3927 = node.contents();
      oldNodes.replaceWith(nodes3927);
    }));
  }
  renderControl666();
  root5011.append(node1840);
  callback(root5011); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root5013 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1841 = $("<td>");
  
  var ref1477 = width;
  if(ref1477.get() !== null) {
    node1841.attr('width', ref1477.get());
    subs__.addSub(ref1477.addEventListener('change', function(_, ref, val) {
      node1841.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1477.rebind());
  
  var ref1478 = mobl.ref(ui.tdStyle);
  if(ref1478.get() !== null) {
    node1841.attr('class', ref1478.get());
    subs__.addSub(ref1478.addEventListener('change', function(_, ref, val) {
      node1841.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1478.rebind());
  
  var nodes3928 = $("<span>");
  node1841.append(nodes3928);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl667();
  }));
  
  function renderControl667() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5014 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5014); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3928;
      nodes3928 = node.contents();
      oldNodes.replaceWith(nodes3928);
    }));
  }
  renderControl667();
  root5013.append(node1841);
  callback(root5013); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root5015 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1842 = $("<td>");
  
  var ref1479 = width;
  if(ref1479.get() !== null) {
    node1842.attr('width', ref1479.get());
    subs__.addSub(ref1479.addEventListener('change', function(_, ref, val) {
      node1842.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1479.rebind());
  
  var ref1480 = mobl.ref(ui.tdStyle);
  if(ref1480.get() !== null) {
    node1842.attr('class', ref1480.get());
    subs__.addSub(ref1480.addEventListener('change', function(_, ref, val) {
      node1842.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1480.rebind());
  
  var nodes3929 = $("<span>");
  node1842.append(nodes3929);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl668();
  }));
  
  function renderControl668() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5016 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5016); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3929;
      nodes3929 = node.contents();
      oldNodes.replaceWith(nodes3929);
    }));
  }
  renderControl668();
  root5015.append(node1842);
  callback(root5015); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root5017 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1843 = $("<td>");
  
  var ref1481 = width;
  if(ref1481.get() !== null) {
    node1843.attr('width', ref1481.get());
    subs__.addSub(ref1481.addEventListener('change', function(_, ref, val) {
      node1843.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1481.rebind());
  
  var ref1482 = mobl.ref(ui.tdStyle);
  if(ref1482.get() !== null) {
    node1843.attr('class', ref1482.get());
    subs__.addSub(ref1482.addEventListener('change', function(_, ref, val) {
      node1843.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1482.rebind());
  
  
  var node1844 = $("<strong>");
  
  var nodes3930 = $("<span>");
  node1844.append(nodes3930);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl669();
  }));
  
  function renderControl669() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5018 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5018); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3930;
      nodes3930 = node.contents();
      oldNodes.replaceWith(nodes3930);
    }));
  }
  renderControl669();
  node1843.append(node1844);
  root5017.append(node1843);
  callback(root5017); return subs__;
  
  
  
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
  var root5019 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3931 = $("<span>");
  root5019.append(nodes3931);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5020 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1845 = mobl.loadingSpan();
    root5020.append(node1845);
    var list339;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList339 = function() {
      var subs__ = listSubs__;
      list339 = items.get();
      list339.list(function(results339) {
        node1845.empty();
        for(var i389 = 0; i389 < results339.length; i389++) {
          (function() {
            var iternode339 = $("<span>");
            node1845.append(iternode339);
            var it;
            it = mobl.ref(mobl.ref(results339), i389);
            
            var tmp9869 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp9906 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp9871 = mobl.ref(false);
            
            
            var tmp9870 = mobl.ref(null);
            
            var nodes3932 = $("<span>");
            iternode339.append(nodes3932);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp9869, tmp9870, tmp9871, function(_, callback) {
              var root5021 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3933 = $("<span>");
              root5021.append(nodes3933);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl670();
              }));
              
              function renderControl670() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root5022 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5022); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3933;
                  nodes3933 = node.contents();
                  oldNodes.replaceWith(nodes3933);
                }));
              }
              renderControl670();
              callback(root5021); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3932;
              nodes3932 = node.contents();
              oldNodes.replaceWith(nodes3932);
            }));
            
            var oldNodes = iternode339;
            iternode339 = iternode339.contents();
            oldNodes.replaceWith(iternode339);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list339.addEventListener('change', function() { listSubs__.unsubscribe(); renderList339(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList339(true); }));
      });
    };
    renderList339();
    
    callback(root5020); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3931;
    nodes3931 = node.contents();
    oldNodes.replaceWith(nodes3931);
  }));
  callback(root5019); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root5023 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp9873 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp9872 = mobl.ref("Back");
  
  var nodes3934 = $("<span>");
  root5023.append(nodes3934);
  subs__.addSub((ui.backButton)(tmp9872, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9873, function(_, callback) {
    var root5024 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5024); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3934;
    nodes3934 = node.contents();
    oldNodes.replaceWith(nodes3934);
  }));
  var nodes3935 = $("<span>");
  root5023.append(nodes3935);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl671();
  }));
  
  function renderControl671() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root5025 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5025); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3935;
      nodes3935 = node.contents();
      oldNodes.replaceWith(nodes3935);
    }));
  }
  renderControl671();
  callback(root5023); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root5026 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1846 = $("<div>");
  
  var ref1486 = mobl.ref(ui.customHeaderStyle);
  if(ref1486.get() !== null) {
    node1846.attr('class', ref1486.get());
    subs__.addSub(ref1486.addEventListener('change', function(_, ref, val) {
      node1846.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1486.rebind());
  
  var val808 = onclick.get();
  if(val808 !== null) {
    subs__.addSub(mobl.domBind(node1846, 'tap', val808));
  }
  
  
  var node1847 = $("<div>");
  
  var ref1485 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref1485.get() !== null) {
    node1847.attr('class', ref1485.get());
    subs__.addSub(ref1485.addEventListener('change', function(_, ref, val) {
      node1847.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1485.rebind());
  
  
  var node1848 = $("<div>");
  
  var ref1483 = text;
  node1848.text(""+ref1483.get());
  var ignore296 = false;
  subs__.addSub(ref1483.addEventListener('change', function(_, ref, val) {
    if(ignore296) return;
    node1848.text(""+val);
  }));
  subs__.addSub(ref1483.rebind());
  
  
  var ref1484 = mobl.ref(ui.customHeaderTextStyle);
  if(ref1484.get() !== null) {
    node1848.attr('class', ref1484.get());
    subs__.addSub(ref1484.addEventListener('change', function(_, ref, val) {
      node1848.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1484.rebind());
  
  node1847.append(node1848);
  node1846.append(node1847);
  var nodes3936 = $("<span>");
  node1846.append(nodes3936);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl672();
  }));
  
  function renderControl672() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5027 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5027); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3936;
      nodes3936 = node.contents();
      oldNodes.replaceWith(nodes3936);
    }));
  }
  renderControl672();
  root5026.append(node1846);
  callback(root5026); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root5028 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1487 = mobl.ref(ui.customItemStyle);
  if(ref1487.get() !== null) {
    el.attr('class', ref1487.get());
    subs__.addSub(ref1487.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1487.rebind());
  
  var ref1488 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref1488.get() !== null) {
    el.attr('class', ref1488.get());
    subs__.addSub(ref1488.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1488.rebind());
  
  var val809 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp9907 = result__;
                                           function after269(result__) {
                                             var tmp9908 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after269);if(result__ !== undefined) after269(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp9909 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val809 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val809));
  }
  
  var nodes3937 = $("<span>");
  el.append(nodes3937);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl673();
  }));
  
  function renderControl673() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5029 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5029); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3937;
      nodes3937 = node.contents();
      oldNodes.replaceWith(nodes3937);
    }));
  }
  renderControl673();
  root5028.append(el);
  callback(root5028); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root5030 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node1849 = $("<div>");
  node1849.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node1851 = mobl.loadingSpan();
  node1849.append(node1851);
  var list341;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList341 = function() {
    var subs__ = listSubs__;
    list341 = tabs.get();
    list341.list(function(results341) {
      node1851.empty();
      for(var i391 = 0; i391 < results341.length; i391++) {
        (function() {
          var iternode341 = $("<span>");
          node1851.append(iternode341);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results341), i391), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results341), i391), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results341), i391), "_3");
          
          var tmp9874 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp9874.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp9874.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp9874.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp9874.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp9877 = mobl.ref(null);
          
          
          var tmp9876 = mobl.ref(null);
          
          
          var tmp9875 = mobl.ref(null);
          
          var nodes3941 = $("<span>");
          iternode341.append(nodes3941);
          subs__.addSub((mobl.block)(tmp9874, tmp9875, tmp9876, tmp9877, function(_, callback) {
            var root5034 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes3942 = $("<span>");
            root5034.append(nodes3942);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root5035 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3943 = $("<span>");
              root5035.append(nodes3943);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl674();
              }));
              
              function renderControl674() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root5036 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5036); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3943;
                  nodes3943 = node.contents();
                  oldNodes.replaceWith(nodes3943);
                }));
              }
              renderControl674();
              callback(root5035); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3942;
              nodes3942 = node.contents();
              oldNodes.replaceWith(nodes3942);
            }));
            callback(root5034); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3941;
            nodes3941 = node.contents();
            oldNodes.replaceWith(nodes3941);
          }));
          
          var oldNodes = iternode341;
          iternode341 = iternode341.contents();
          oldNodes.replaceWith(iternode341);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list341.addEventListener('change', function() { listSubs__.unsubscribe(); renderList341(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList341(true); }));
    });
  };
  renderList341();
  
  root5030.append(node1849);
  
  var tmp9886 = mobl.ref(null);
  
  
  var tmp9885 = mobl.ref(null);
  
  
  var tmp9884 = mobl.ref(null);
  
  var nodes3938 = $("<span>");
  root5030.append(nodes3938);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp9884, tmp9885, tmp9886, function(_, callback) {
    var root5031 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1850 = mobl.loadingSpan();
    root5031.append(node1850);
    var list340;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList340 = function() {
      var subs__ = listSubs__;
      list340 = tabs.get();
      list340.list(function(results340) {
        node1850.empty();
        for(var i390 = 0; i390 < results340.length; i390++) {
          (function() {
            var iternode340 = $("<span>");
            node1850.append(iternode340);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results340), i390), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results340), i390), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results340), i390), "_3");
            
            var tmp9881 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp9881.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp9881.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp9881.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp9881.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp9880 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp9883 = mobl.ref(null);
            
            
            var tmp9882 = mobl.ref(null);
            
            var nodes3939 = $("<span>");
            iternode340.append(nodes3939);
            subs__.addSub((mobl.span)(tmp9881, tmp9882, tmp9880, tmp9883, function(_, callback) {
              var root5032 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp9879 = mobl.ref(null);
              
              
              var tmp9878 = mobl.ref(null);
              
              var nodes3940 = $("<span>");
              root5032.append(nodes3940);
              subs__.addSub((mobl.label)(tabName, tmp9878, tmp9879, function(_, callback) {
                var root5033 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5033); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3940;
                nodes3940 = node.contents();
                oldNodes.replaceWith(nodes3940);
              }));
              callback(root5032); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3939;
              nodes3939 = node.contents();
              oldNodes.replaceWith(nodes3939);
            }));
            
            var oldNodes = iternode340;
            iternode340 = iternode340.contents();
            oldNodes.replaceWith(iternode340);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list340.addEventListener('change', function() { listSubs__.unsubscribe(); renderList340(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList340(true); }));
      });
    };
    renderList340();
    
    callback(root5031); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3938;
    nodes3938 = node.contents();
    oldNodes.replaceWith(nodes3938);
  }));
  callback(root5030); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root5037 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1852 = $("<div>");
  node1852.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node1852.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  root5037.append(node1852);
  callback(root5037); return subs__;
  
  
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
