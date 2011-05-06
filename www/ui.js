mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root0 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node0 = $("<span>");
  root0.append(node0);
  var condSubs0 = new mobl.CompSubscription();
  subs__.addSub(condSubs0);
  var oldValue0;
  var renderCond0 = function() {
    var value44 = value.get();
    if(oldValue0 === value44) return;
    oldValue0 = value44;
    var subs__ = condSubs0;
    subs__.unsubscribe();
    node0.empty();
    if(value44) {
      var nodes0 = $("<span>");
      node0.append(nodes0);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl0();
      }));
      
      function renderControl0() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes0;
          nodes0 = node.contents();
          oldNodes.replaceWith(nodes0);
        }));
      }
      renderControl0();
      
      
    } else {
      var result__ = null;
      var tmp12 = mobl.ref(result__);
      
      var result__ = null;
      var tmp11 = mobl.ref(result__);
      
      var result__ = null;
      var tmp9 = mobl.ref(result__);
      
      var nodes1 = $("<span>");
      node0.append(nodes1);
      subs__.addSub((mobl.block)(style, tmp9, tmp11, tmp12, function(_, callback) {
        var root2 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = null;
        var tmp1 = mobl.ref(result__);
        
        var result__ = null;
        var tmp0 = mobl.ref(result__);
        
        var nodes2 = $("<span>");
        root2.append(nodes2);
        subs__.addSub((mobl.label)(loadingMessage, tmp0, tmp1, function(_, callback) {
          var root3 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2;
          nodes2 = node.contents();
          oldNodes.replaceWith(nodes2);
        }));
        var result__ = "middle";
        var tmp3 = mobl.ref(result__);
        
        var result__ = "data:image/gif;base64,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";
        var tmp2 = mobl.ref(result__);
        
        var result__ = null;
        var tmp8 = mobl.ref(result__);
        
        var result__ = null;
        var tmp7 = mobl.ref(result__);
        
        var result__ = null;
        var tmp6 = mobl.ref(result__);
        
        var result__ = null;
        var tmp5 = mobl.ref(result__);
        
        var result__ = null;
        var tmp4 = mobl.ref(result__);
        
        var nodes3 = $("<span>");
        root2.append(nodes3);
        subs__.addSub((ui.image)(tmp2, tmp4, tmp5, tmp6, tmp7, tmp3, tmp8, function(_, callback) {
          var root4 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3;
          nodes3 = node.contents();
          oldNodes.replaceWith(nodes3);
        }));
        callback(root2); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1;
        nodes1 = node.contents();
        oldNodes.replaceWith(nodes1);
      }));
      
      
    }
  };
  renderCond0();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond0();
  }));
  
  callback(root0); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root5 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1 = $("<div>");
  
  var ref3 = mobl.ref(ui.headerStyle);
  if(ref3.get() !== null) {
    node1.attr('class', ref3.get());
    subs__.addSub(ref3.addEventListener('change', function(_, ref, val) {
      node1.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3.rebind());
  
  var val0 = onclick.get();
  if(val0 !== null) {
    subs__.addSub(mobl.domBind(node1, 'tap', val0));
  }
  
  
  var node2 = $("<div>");
  
  var ref2 = mobl.ref(ui.headerContainerStyle);
  if(ref2.get() !== null) {
    node2.attr('class', ref2.get());
    subs__.addSub(ref2.addEventListener('change', function(_, ref, val) {
      node2.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2.rebind());
  
  
  var node3 = $("<div>");
  
  var ref0 = text;
  node3.text(""+ref0.get());
  var ignore0 = false;
  subs__.addSub(ref0.addEventListener('change', function(_, ref, val) {
    if(ignore0) return;
    node3.text(""+val);
  }));
  subs__.addSub(ref0.rebind());
  
  
  var ref1 = mobl.ref(ui.headerTextStyle);
  if(ref1.get() !== null) {
    node3.attr('class', ref1.get());
    subs__.addSub(ref1.addEventListener('change', function(_, ref, val) {
      node3.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1.rebind());
  
  node2.append(node3);
  node1.append(node2);
  var nodes4 = $("<span>");
  node1.append(nodes4);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1();
  }));
  
  function renderControl1() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4;
      nodes4 = node.contents();
      oldNodes.replaceWith(nodes4);
    }));
  }
  renderControl1();
  root5.append(node1);
  callback(root5); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref4 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref4.get() !== null) {
    sp.attr('class', ref4.get());
    subs__.addSub(ref4.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref4.rebind());
  
  var val1 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1));
  }
  
  var val2 = function(event, callback) {
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
  if(val2 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val2));
  }
  
  var val3 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after0(result__) {
                    var tmp114 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val3 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val3));
  }
  
  var val4 = function(event, callback) {
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
  if(val4 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val4));
  }
  
  var ref5 = text;
  sp.text(""+ref5.get());
  var ignore1 = false;
  subs__.addSub(ref5.addEventListener('change', function(_, ref, val) {
    if(ignore1) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref5.rebind());
  
  
  root7.append(sp);
  callback(root7); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5 = $("<span>");
  root8.append(nodes5);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5;
    nodes5 = node.contents();
    oldNodes.replaceWith(nodes5);
  }));
  callback(root8); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6 = $("<span>");
  root10.append(nodes6);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root11 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6;
    nodes6 = node.contents();
    oldNodes.replaceWith(nodes6);
  }));
  callback(root10); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root12 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4 = $("<ul>");
  
  var ref6 = mobl.ref(ui.groupStyle);
  if(ref6.get() !== null) {
    node4.attr('class', ref6.get());
    subs__.addSub(ref6.addEventListener('change', function(_, ref, val) {
      node4.attr('class', val);
    }));
    
  }
  subs__.addSub(ref6.rebind());
  
  var nodes7 = $("<span>");
  node4.append(nodes7);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl2();
  }));
  
  function renderControl2() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7;
      nodes7 = node.contents();
      oldNodes.replaceWith(nodes7);
    }));
  }
  renderControl2();
  root12.append(node4);
  callback(root12); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root14 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node5 = $("<img>");
  
  var ref7 = url;
  if(ref7.get() !== null) {
    node5.attr('src', ref7.get());
    subs__.addSub(ref7.addEventListener('change', function(_, ref, val) {
      node5.attr('src', val);
    }));
    
  }
  subs__.addSub(ref7.rebind());
  
  var ref8 = width;
  if(ref8.get() !== null) {
    node5.attr('width', ref8.get());
    subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
      node5.attr('width', val);
    }));
    
  }
  subs__.addSub(ref8.rebind());
  
  var ref9 = height;
  if(ref9.get() !== null) {
    node5.attr('height', ref9.get());
    subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
      node5.attr('height', val);
    }));
    
  }
  subs__.addSub(ref9.rebind());
  
  var ref10 = style;
  if(ref10.get() !== null) {
    node5.attr('class', ref10.get());
    subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
      node5.attr('class', val);
    }));
    
  }
  subs__.addSub(ref10.rebind());
  
  var val5 = onclick.get();
  if(val5 !== null) {
    subs__.addSub(mobl.domBind(node5, 'tap', val5));
  }
  
  var ref11 = valign;
  if(ref11.get() !== null) {
    node5.attr('valign', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      node5.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  var ref12 = align;
  if(ref12.get() !== null) {
    node5.attr('align', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      node5.attr('align', val);
    }));
    
  }
  subs__.addSub(ref12.rebind());
  
  root14.append(node5);
  callback(root14); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root15 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref13 = mobl.ref(ui.itemStyle);
  if(ref13.get() !== null) {
    el.attr('class', ref13.get());
    subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13.rebind());
  
  var ref14 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref14.get() !== null) {
    el.attr('class', ref14.get());
    subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref14.rebind());
  
  var val6 = onswipe.get();
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val6));
  }
  
  var val7 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp115 = result__;
                                           function after1(result__) {
                                             var tmp116 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp117 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val7));
  }
  
  var nodes8 = $("<span>");
  el.append(nodes8);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl3();
  }));
  
  function renderControl3() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8;
      nodes8 = node.contents();
      oldNodes.replaceWith(nodes8);
    }));
  }
  renderControl3();
  root15.append(el);
  callback(root15); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root17 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6 = $("<input>");
  node6.attr('type', "checkbox");
  
  var ref16 = b;
  node6.attr('checked', !!ref16.get());
  subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
    if(ref === ref16) node6.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node6, 'change', function() {
    b.set(!!node6.attr('checked'));
  }));
  
  var val9 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(node6, 'tap', val9));
  }
  
  var val10 = onchange.get();
  if(val10 !== null) {
    subs__.addSub(mobl.domBind(node6, 'change', val10));
  }
  
  root17.append(node6);
  
  root17.append(" ");
  
  var node7 = $("<span>");
  
  var ref15 = label;
  node7.text(""+ref15.get());
  var ignore2 = false;
  subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    node7.text(""+val);
  }));
  subs__.addSub(ref15.rebind());
  
  
  var val8 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2(result__) {
                    var tmp118 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(node7, 'tap', val8));
  }
  
  root17.append(node7);
  callback(root17); return subs__;
  
  
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
  var root18 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node8 = $("<span>");
  root18.append(node8);
  var condSubs1 = new mobl.CompSubscription();
  subs__.addSub(condSubs1);
  var oldValue1;
  var renderCond1 = function() {
    var value45 = label.get();
    if(oldValue1 === value45) return;
    oldValue1 = value45;
    var subs__ = condSubs1;
    subs__.unsubscribe();
    node8.empty();
    if(value45) {
      var result__ = null;
      var tmp13 = mobl.ref(result__);
      
      var nodes9 = $("<span>");
      node8.append(nodes9);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp13, function(_, callback) {
        var root19 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9;
        nodes9 = node.contents();
        oldNodes.replaceWith(nodes9);
      }));
      
      
    } else {
      
    }
  };
  renderCond1();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond1();
  }));
  
  
  var node9 = $("<span>");
  root18.append(node9);
  var condSubs2 = new mobl.CompSubscription();
  subs__.addSub(condSubs2);
  var oldValue2;
  var renderCond2 = function() {
    var value46 = validator.get();
    if(oldValue2 === value46) return;
    oldValue2 = value46;
    var subs__ = condSubs2;
    subs__.unsubscribe();
    node9.empty();
    if(value46) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after6(result__) {
        var tmp119 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp121 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node10 = $("<input>");
        node10.attr('type', "text");
        
        var ref17 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref17.get() !== null) {
          node10.attr('class', ref17.get());
          subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
            node10.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node10.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node10.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node10.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref17.rebind());
        
        var ref18 = placeholder;
        if(ref18.get() !== null) {
          node10.attr('placeholder', ref18.get());
          subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
            node10.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref18.rebind());
        
        var ref19 = temp;
        node10.val(""+ref19.get());
        var ignore3 = false;
        subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
          if(ignore3) return;
          node10.val(""+val);
        }));
        subs__.addSub(ref19.rebind());
        
        subs__.addSub(mobl.domBind(node10, 'keyup change', function() {
          ignore3 = true;
          temp.set(mobl.stringTomobl__String(node10.val()));
          ignore3 = false;
        }));
        
        
        var val11 = onchange.get();
        if(val11 !== null) {
          subs__.addSub(mobl.domBind(node10, 'change', val11));
        }
        
        var val12 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3(result__) {
                          var tmp122 = result__;
                          function after4(result__) {
                            var tmp123 = result__;
                            var result__ = tmp123;
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
                            var tmp123 = result__;
                            var result__ = tmp123;
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
        if(val12 !== null) {
          subs__.addSub(mobl.domBind(node10, 'keyup', val12));
        }
        
        var val13 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val13 !== null) {
          subs__.addSub(mobl.domBind(node10, 'blur', val13));
        }
        
        node9.append(node10);
        var result__ = null;
        var tmp14 = mobl.ref(result__);
        
        var nodes10 = $("<span>");
        node9.append(nodes10);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp14, function(_, callback) {
          var root20 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root20); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10;
          nodes10 = node.contents();
          oldNodes.replaceWith(nodes10);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after6);if(result__ !== undefined) after6(result__);
    } else {
      
      var node11 = $("<input>");
      node11.attr('type', "text");
      
      var ref20 = style;
      if(ref20.get() !== null) {
        node11.attr('class', ref20.get());
        subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
          node11.attr('class', val);
        }));
        
      }
      subs__.addSub(ref20.rebind());
      
      var ref21 = placeholder;
      if(ref21.get() !== null) {
        node11.attr('placeholder', ref21.get());
        subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
          node11.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref21.rebind());
      
      var ref22 = s;
      node11.val(""+ref22.get());
      var ignore4 = false;
      subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
        if(ignore4) return;
        node11.val(""+val);
      }));
      subs__.addSub(ref22.rebind());
      
      subs__.addSub(mobl.domBind(node11, 'keyup change', function() {
        ignore4 = true;
        s.set(mobl.stringTomobl__String(node11.val()));
        ignore4 = false;
      }));
      
      
      var val14 = onchange.get();
      if(val14 !== null) {
        subs__.addSub(mobl.domBind(node11, 'change', val14));
      }
      
      var val15 = onkeyup.get();
      if(val15 !== null) {
        subs__.addSub(mobl.domBind(node11, 'keyup', val15));
      }
      
      var val16 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val16 !== null) {
        subs__.addSub(mobl.domBind(node11, 'blur', val16));
      }
      
      node9.append(node11);
      
      
    }
  };
  renderCond2();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond2();
  }));
  
  callback(root18); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root21 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes11 = $("<span>");
  root21.append(nodes11);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root22 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root22); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes11;
    nodes11 = node.contents();
    oldNodes.replaceWith(nodes11);
  }));
  callback(root21); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root23 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after7(result__) {
      var tmp124 = result__;
      var result__ = tmp124;
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
  var nodes12 = $("<span>");
  root23.append(nodes12);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root24 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root24); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12;
    nodes12 = node.contents();
    oldNodes.replaceWith(nodes12);
  }));
  callback(root23); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root25 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12 = $("<span>");
  root25.append(node12);
  var condSubs3 = new mobl.CompSubscription();
  subs__.addSub(condSubs3);
  var oldValue3;
  var renderCond3 = function() {
    var value47 = label.get();
    if(oldValue3 === value47) return;
    oldValue3 = value47;
    var subs__ = condSubs3;
    subs__.unsubscribe();
    node12.empty();
    if(value47) {
      
      var node13 = $("<span>");
      node13.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref26 = label;
      node13.text(""+ref26.get());
      var ignore6 = false;
      subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
        if(ignore6) return;
        node13.text(""+val);
      }));
      subs__.addSub(ref26.rebind());
      
      
      node12.append(node13);
      
      var node14 = $("<span>");
      node14.attr('style', "float: left");
      
      
      var node15 = $("<input>");
      node15.attr('type', "password");
      
      var ref23 = style;
      if(ref23.get() !== null) {
        node15.attr('class', ref23.get());
        subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
          node15.attr('class', val);
        }));
        
      }
      subs__.addSub(ref23.rebind());
      
      var ref24 = placeholder;
      if(ref24.get() !== null) {
        node15.attr('placeholder', ref24.get());
        subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
          node15.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref24.rebind());
      
      var ref25 = s;
      node15.val(""+ref25.get());
      var ignore5 = false;
      subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
        if(ignore5) return;
        node15.val(""+val);
      }));
      subs__.addSub(ref25.rebind());
      
      subs__.addSub(mobl.domBind(node15, 'keyup change', function() {
        ignore5 = true;
        s.set(mobl.stringTomobl__String(node15.val()));
        ignore5 = false;
      }));
      
      
      var val17 = onchange.get();
      if(val17 !== null) {
        subs__.addSub(mobl.domBind(node15, 'change', val17));
      }
      
      var val18 = onkeyup.get();
      if(val18 !== null) {
        subs__.addSub(mobl.domBind(node15, 'keyup', val18));
      }
      
      var val19 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val19 !== null) {
        subs__.addSub(mobl.domBind(node15, 'blur', val19));
      }
      
      node14.append(node15);
      node12.append(node14);
      
      
      
      
    } else {
      
      var node16 = $("<input>");
      node16.attr('type', "password");
      
      var ref27 = style;
      if(ref27.get() !== null) {
        node16.attr('class', ref27.get());
        subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
          node16.attr('class', val);
        }));
        
      }
      subs__.addSub(ref27.rebind());
      
      var ref28 = placeholder;
      if(ref28.get() !== null) {
        node16.attr('placeholder', ref28.get());
        subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
          node16.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref28.rebind());
      
      var ref29 = s;
      node16.val(""+ref29.get());
      var ignore7 = false;
      subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
        if(ignore7) return;
        node16.val(""+val);
      }));
      subs__.addSub(ref29.rebind());
      
      subs__.addSub(mobl.domBind(node16, 'keyup change', function() {
        ignore7 = true;
        s.set(mobl.stringTomobl__String(node16.val()));
        ignore7 = false;
      }));
      
      
      var val20 = onchange.get();
      if(val20 !== null) {
        subs__.addSub(mobl.domBind(node16, 'change', val20));
      }
      
      var val21 = onkeyup.get();
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node16, 'keyup', val21));
      }
      
      var val22 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val22 !== null) {
        subs__.addSub(mobl.domBind(node16, 'blur', val22));
      }
      
      node12.append(node16);
      
      
    }
  };
  renderCond3();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond3();
  }));
  
  callback(root25); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root26 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref34 = style;
  if(ref34.get() !== null) {
    sel.attr('class', ref34.get());
    subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref34.rebind());
  
  var val23 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after8(result__) {
                    var tmp126 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after8);if(result__ !== undefined) after8(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val23 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val23));
  }
  
  
  var node17 = mobl.loadingSpan();
  sel.append(node17);
  var list0;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList0 = function() {
    var subs__ = listSubs__;
    list0 = options.get();
    list0.list(function(results0) {
      node17.empty();
      for(var i0 = 0; i0 < results0.length; i0++) {
        (function() {
          var iternode0 = $("<span>");
          node17.append(iternode0);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results0), i0), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results0), i0), "_2");
          
          var node18 = $("<option>");
          
          var ref30 = optionDescription;
          node18.text(""+ref30.get());
          var ignore8 = false;
          subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
            if(ignore8) return;
            node18.text(""+val);
          }));
          subs__.addSub(ref30.rebind());
          
          
          var ref31 = optionStyle;
          if(ref31.get() !== null) {
            node18.attr('class', ref31.get());
            subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
              node18.attr('class', val);
            }));
            
          }
          subs__.addSub(ref31.rebind());
          
          var ref32 = optionValue;
          if(ref32.get() !== null) {
            node18.attr('value', ref32.get());
            subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
              node18.attr('value', val);
            }));
            
          }
          subs__.addSub(ref32.rebind());
          
          var ref33 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref33.get() !== null) {
            node18.attr('selected', ref33.get());
            subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
              node18.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node18.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node18.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref33.rebind());
          
          iternode0.append(node18);
          
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
  
  root26.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root26); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root27 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  var result__ = null;
  var tmp24 = mobl.ref(result__);
  
  var result__ = null;
  var tmp23 = mobl.ref(result__);
  
  var result__ = null;
  var tmp22 = mobl.ref(result__);
  
  var nodes13 = $("<span>");
  root27.append(nodes13);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp22, tmp23, tmp24, function(_, callback) {
    var root28 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node19 = mobl.loadingSpan();
    root28.append(node19);
    var list1;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList1 = function() {
      var subs__ = listSubs__;
      list1 = tabs.get();
      list1.list(function(results1) {
        node19.empty();
        for(var i1 = 0; i1 < results1.length; i1++) {
          (function() {
            var iternode1 = $("<span>");
            node19.append(iternode1);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results1), i1), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i1), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i1), "_3");
            var result__ = activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
            var tmp18 = mobl.ref(result__);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp18.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp18.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp18.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp18.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = tabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp17 = mobl.ref(result__);
            
            var result__ = null;
            var tmp21 = mobl.ref(result__);
            
            var result__ = null;
            var tmp19 = mobl.ref(result__);
            
            var nodes14 = $("<span>");
            iternode1.append(nodes14);
            subs__.addSub((mobl.span)(tmp18, tmp19, tmp17, tmp21, function(_, callback) {
              var root29 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp16 = mobl.ref(result__);
              
              var result__ = null;
              var tmp15 = mobl.ref(result__);
              
              var nodes15 = $("<span>");
              root29.append(nodes15);
              subs__.addSub((mobl.label)(tabName, tmp15, tmp16, function(_, callback) {
                var root30 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root30); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes15;
                nodes15 = node.contents();
                oldNodes.replaceWith(nodes15);
              }));
              callback(root29); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes14;
              nodes14 = node.contents();
              oldNodes.replaceWith(nodes14);
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
    
    callback(root28); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13;
    nodes13 = node.contents();
    oldNodes.replaceWith(nodes13);
  }));
  
  var node20 = mobl.loadingSpan();
  root27.append(node20);
  var list2;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2 = function() {
    var subs__ = listSubs__;
    list2 = tabs.get();
    list2.list(function(results2) {
      node20.empty();
      for(var i2 = 0; i2 < results2.length; i2++) {
        (function() {
          var iternode2 = $("<span>");
          node20.append(iternode2);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results2), i2), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i2), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i2), "_3");
          var result__ = activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
          var tmp25 = mobl.ref(result__);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp25.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp25.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp25.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp25.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          var result__ = null;
          var tmp28 = mobl.ref(result__);
          
          var result__ = null;
          var tmp27 = mobl.ref(result__);
          
          var result__ = null;
          var tmp26 = mobl.ref(result__);
          
          var nodes16 = $("<span>");
          iternode2.append(nodes16);
          subs__.addSub((mobl.block)(tmp25, tmp26, tmp27, tmp28, function(_, callback) {
            var root31 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes17 = $("<span>");
            root31.append(nodes17);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root32 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes18 = $("<span>");
              root32.append(nodes18);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl4();
              }));
              
              function renderControl4() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root33 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root33); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18;
                  nodes18 = node.contents();
                  oldNodes.replaceWith(nodes18);
                }));
              }
              renderControl4();
              callback(root32); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes17;
              nodes17 = node.contents();
              oldNodes.replaceWith(nodes17);
            }));
            callback(root31); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes16;
            nodes16 = node.contents();
            oldNodes.replaceWith(nodes16);
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
  
  callback(root27); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root34 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node21 = $("<div>");
  
  var ref38 = mobl.ref(ui.searchboxStyle);
  if(ref38.get() !== null) {
    node21.attr('class', ref38.get());
    subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
      node21.attr('class', val);
    }));
    
  }
  subs__.addSub(ref38.rebind());
  
  
  var node22 = $("<input>");
  node22.attr('type', "search");
  
  var ref35 = mobl.ref(ui.searchBoxInputStyle);
  if(ref35.get() !== null) {
    node22.attr('class', ref35.get());
    subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
      node22.attr('class', val);
    }));
    
  }
  subs__.addSub(ref35.rebind());
  
  var ref36 = placeholder;
  if(ref36.get() !== null) {
    node22.attr('placeholder', ref36.get());
    subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
      node22.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref36.rebind());
  
  var ref37 = s;
  node22.val(""+ref37.get());
  var ignore9 = false;
  subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
    if(ignore9) return;
    node22.val(""+val);
  }));
  subs__.addSub(ref37.rebind());
  
  subs__.addSub(mobl.domBind(node22, 'keyup change', function() {
    ignore9 = true;
    s.set(mobl.stringTomobl__String(node22.val()));
    ignore9 = false;
  }));
  
  
  var val24 = onsearch.get();
  if(val24 !== null) {
    subs__.addSub(mobl.domBind(node22, 'change', val24));
  }
  
  var val25 = onkeyup.get();
  if(val25 !== null) {
    subs__.addSub(mobl.domBind(node22, 'keyup', val25));
  }
  node22.attr('autocorrect', false);
  node22.attr('autocapitalize', false);
  node22.attr('autocomplete', false);
  
  node21.append(node22);
  root34.append(node21);
  callback(root34); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root35 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref39 = mobl.ref(ui.contextMenuStyle);
  if(ref39.get() !== null) {
    menu.attr('class', ref39.get());
    subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref39.rebind());
  
  var nodes19 = $("<span>");
  menu.append(nodes19);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19;
      nodes19 = node.contents();
      oldNodes.replaceWith(nodes19);
    }));
  }
  renderControl5();
  root35.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val26 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp129 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val26 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val26));
  }
  
  root35.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root35); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root37 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp113 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp113.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node23 = $("<span>");
  root37.append(node23);
  var condSubs4 = new mobl.CompSubscription();
  subs__.addSub(condSubs4);
  var oldValue4;
  var renderCond4 = function() {
    var value48 = tmp113.get();
    if(oldValue4 === value48) return;
    oldValue4 = value48;
    var subs__ = condSubs4;
    subs__.unsubscribe();
    node23.empty();
    if(value48) {
      items.get().one(function(result__) {
        var tmp131 = result__;
        var current = mobl.ref(result__);
        
        var node24 = $("<div>");
        node24.attr('width', "100%");
        
        
        var node25 = $("<div>");
        node25.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes22 = $("<span>");
        node25.append(nodes22);
        subs__.addSub((ui.group)(function(_, callback) {
          var root40 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node28 = mobl.loadingSpan();
          root40.append(node28);
          var list3;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList3 = function() {
            var subs__ = listSubs__;
            list3 = items.get();
            list3.list(function(results3) {
              node28.empty();
              for(var i3 = 0; i3 < results3.length; i3++) {
                (function() {
                  var iternode3 = $("<span>");
                  node28.append(iternode3);
                  var it;
                  it = mobl.ref(mobl.ref(results3), i3);
                  var result__ = it.get() == current.get();
                  var tmp44 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp44.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp44.set(it.get() == current.get());
                  }));
                  
                  
                  var node29 = $("<span>");
                  iternode3.append(node29);
                  var condSubs6 = new mobl.CompSubscription();
                  subs__.addSub(condSubs6);
                  var oldValue6;
                  var renderCond6 = function() {
                    var value50 = tmp44.get();
                    if(oldValue6 === value50) return;
                    oldValue6 = value50;
                    var subs__ = condSubs6;
                    subs__.unsubscribe();
                    node29.empty();
                    if(value50) {
                      var result__ = false;
                      var tmp39 = mobl.ref(result__);
                      
                      var result__ = null;
                      var tmp38 = mobl.ref(result__);
                      
                      var result__ = null;
                      var tmp37 = mobl.ref(result__);
                      
                      var nodes23 = $("<span>");
                      node29.append(nodes23);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp37, tmp38, tmp39, function(_, callback) {
                        var root41 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes24 = $("<span>");
                        root41.append(nodes24);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl7();
                        }));
                        
                        function renderControl7() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root42 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root42); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes24;
                            nodes24 = node.contents();
                            oldNodes.replaceWith(nodes24);
                          }));
                        }
                        renderControl7();
                        callback(root41); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes23;
                        nodes23 = node.contents();
                        oldNodes.replaceWith(nodes23);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp42 = mobl.ref(result__);
                      
                      var result__ = true;
                      var tmp41 = mobl.ref(result__);
                      
                      var result__ = null;
                      var tmp43 = mobl.ref(result__);
                      
                      var nodes25 = $("<span>");
                      node29.append(nodes25);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp42, tmp43, tmp41, function(_, callback) {
                        var root43 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes26 = $("<span>");
                        root43.append(nodes26);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl8();
                        }));
                        
                        function renderControl8() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root44 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root44); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes26;
                            nodes26 = node.contents();
                            oldNodes.replaceWith(nodes26);
                          }));
                        }
                        renderControl8();
                        callback(root43); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes25;
                        nodes25 = node.contents();
                        oldNodes.replaceWith(nodes25);
                      }));
                      
                      
                    }
                  };
                  renderCond6();
                  subs__.addSub(tmp44.addEventListener('change', function() {
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
          
          callback(root40); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes22;
          nodes22 = node.contents();
          oldNodes.replaceWith(nodes22);
        }));
        node24.append(node25);
        
        var node26 = $("<div>");
        node26.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node27 = $("<span>");
        node26.append(node27);
        var condSubs5 = new mobl.CompSubscription();
        subs__.addSub(condSubs5);
        var oldValue5;
        var renderCond5 = function() {
          var value49 = current.get();
          if(oldValue5 === value49) return;
          oldValue5 = value49;
          var subs__ = condSubs5;
          subs__.unsubscribe();
          node27.empty();
          if(value49) {
            var nodes20 = $("<span>");
            node27.append(nodes20);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl6();
            }));
            
            function renderControl6() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root38 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root38); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes20;
                nodes20 = node.contents();
                oldNodes.replaceWith(nodes20);
              }));
            }
            renderControl6();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp45 = mobl.ref(result__);
            
            var result__ = null;
            var tmp47 = mobl.ref(result__);
            
            var result__ = null;
            var tmp46 = mobl.ref(result__);
            
            var nodes21 = $("<span>");
            node27.append(nodes21);
            subs__.addSub((mobl.label)(tmp45, tmp46, tmp47, function(_, callback) {
              var root39 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root39); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes21;
              nodes21 = node.contents();
              oldNodes.replaceWith(nodes21);
            }));
            
            
          }
        };
        renderCond5();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond5();
        }));
        
        node24.append(node26);
        node23.append(node24);
        
        
        
        
        
        
      });
    } else {
      var nodes27 = $("<span>");
      node23.append(nodes27);
      subs__.addSub((ui.group)(function(_, callback) {
        var root45 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node30 = mobl.loadingSpan();
        root45.append(node30);
        var list4;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList4 = function() {
          var subs__ = listSubs__;
          list4 = items.get();
          list4.list(function(results4) {
            node30.empty();
            for(var i4 = 0; i4 < results4.length; i4++) {
              (function() {
                var iternode4 = $("<span>");
                node30.append(iternode4);
                var it;
                it = mobl.ref(mobl.ref(results4), i4);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp132 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp29 = mobl.ref(result__);
                
                var result__ = false;
                var tmp32 = mobl.ref(result__);
                
                var result__ = null;
                var tmp31 = mobl.ref(result__);
                
                var nodes28 = $("<span>");
                iternode4.append(nodes28);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp29, tmp31, tmp32, function(_, callback) {
                  var root46 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes29 = $("<span>");
                  root46.append(nodes29);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl9();
                  }));
                  
                  function renderControl9() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root47 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root47); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes29;
                      nodes29 = node.contents();
                      oldNodes.replaceWith(nodes29);
                    }));
                  }
                  renderControl9();
                  callback(root46); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes28;
                  nodes28 = node.contents();
                  oldNodes.replaceWith(nodes28);
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
        
        callback(root45); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes27;
        nodes27 = node.contents();
        oldNodes.replaceWith(nodes27);
      }));
      
      
    }
  };
  renderCond4();
  subs__.addSub(tmp113.addEventListener('change', function() {
    renderCond4();
  }));
  
  callback(root37); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root48 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp35 = mobl.ref(result__);
  
  var result__ = null;
  var tmp36 = mobl.ref(result__);
  
  var nodes30 = $("<span>");
  root48.append(nodes30);
  subs__.addSub((ui.header)(tmp35, tmp36, function(_, callback) {
    var root49 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp34 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp33 = mobl.ref(result__);
    
    var nodes31 = $("<span>");
    root49.append(nodes31);
    subs__.addSub((ui.backButton)(tmp33, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp34, function(_, callback) {
      var root50 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root50); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes31;
      nodes31 = node.contents();
      oldNodes.replaceWith(nodes31);
    }));
    callback(root49); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes30;
    nodes30 = node.contents();
    oldNodes.replaceWith(nodes30);
  }));
  var nodes32 = $("<span>");
  root48.append(nodes32);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl10();
  }));
  
  function renderControl10() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root51 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root51); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes32;
      nodes32 = node.contents();
      oldNodes.replaceWith(nodes32);
    }));
  }
  renderControl10();
  callback(root48); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root52 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes33 = $("<span>");
  root52.append(nodes33);
  subs__.addSub((ui.group)(function(_, callback) {
    var root53 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node31 = mobl.loadingSpan();
    root53.append(node31);
    var list5;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList5 = function() {
      var subs__ = listSubs__;
      list5 = coll.get();
      list5.list(function(results5) {
        node31.empty();
        for(var i5 = 0; i5 < results5.length; i5++) {
          (function() {
            var iternode5 = $("<span>");
            node31.append(iternode5);
            var it;
            it = mobl.ref(mobl.ref(results5), i5);
            var result__ = it.get() == selected.get();
            var tmp55 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp55.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp55.set(it.get() == selected.get());
            }));
            
            
            var node32 = $("<span>");
            iternode5.append(node32);
            var condSubs7 = new mobl.CompSubscription();
            subs__.addSub(condSubs7);
            var oldValue7;
            var renderCond7 = function() {
              var value51 = tmp55.get();
              if(oldValue7 === value51) return;
              oldValue7 = value51;
              var subs__ = condSubs7;
              subs__.unsubscribe();
              node32.empty();
              if(value51) {
                var result__ = false;
                var tmp51 = mobl.ref(result__);
                
                var result__ = null;
                var tmp49 = mobl.ref(result__);
                
                var result__ = null;
                var tmp48 = mobl.ref(result__);
                
                var nodes34 = $("<span>");
                node32.append(nodes34);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp48, tmp49, tmp51, function(_, callback) {
                  var root54 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes35 = $("<span>");
                  root54.append(nodes35);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl11();
                  }));
                  
                  function renderControl11() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root55 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root55); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes35;
                      nodes35 = node.contents();
                      oldNodes.replaceWith(nodes35);
                    }));
                  }
                  renderControl11();
                  callback(root54); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes34;
                  nodes34 = node.contents();
                  oldNodes.replaceWith(nodes34);
                }));
                
                
              } else {
                var result__ = true;
                var tmp53 = mobl.ref(result__);
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp52 = mobl.ref(result__);
                
                var result__ = null;
                var tmp54 = mobl.ref(result__);
                
                var nodes36 = $("<span>");
                node32.append(nodes36);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp52, tmp54, tmp53, function(_, callback) {
                  var root56 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes37 = $("<span>");
                  root56.append(nodes37);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl12();
                  }));
                  
                  function renderControl12() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root57 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root57); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes37;
                      nodes37 = node.contents();
                      oldNodes.replaceWith(nodes37);
                    }));
                  }
                  renderControl12();
                  callback(root56); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes36;
                  nodes36 = node.contents();
                  oldNodes.replaceWith(nodes36);
                }));
                
                
              }
            };
            renderCond7();
            subs__.addSub(tmp55.addEventListener('change', function() {
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
    
    callback(root53); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes33;
    nodes33 = node.contents();
    oldNodes.replaceWith(nodes33);
  }));
  callback(root52); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root58 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp133 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp56 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp56.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp56.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp56.set(coll.get().limit(n.get()));
    }));
    
    
    var node33 = mobl.loadingSpan();
    root58.append(node33);
    var list6;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList6 = function() {
      var subs__ = listSubs__;
      list6 = tmp56.get();
      list6.list(function(results6) {
        node33.empty();
        for(var i6 = 0; i6 < results6.length; i6++) {
          (function() {
            var iternode6 = $("<span>");
            node33.append(iternode6);
            var it;
            it = mobl.ref(mobl.ref(results6), i6);
            var nodes38 = $("<span>");
            iternode6.append(nodes38);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl13();
            }));
            
            function renderControl13() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root59 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root59); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes38;
                nodes38 = node.contents();
                oldNodes.replaceWith(nodes38);
              }));
            }
            renderControl13();
            
            var oldNodes = iternode6;
            iternode6 = iternode6.contents();
            oldNodes.replaceWith(iternode6);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list6.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
        subs__.addSub(tmp56.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
      });
    };
    renderList6();
    
    var result__ = n.get() < total.get();
    var tmp63 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp63.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp63.set(n.get() < total.get());
    }));
    
    
    var node34 = $("<span>");
    root58.append(node34);
    var condSubs8 = new mobl.CompSubscription();
    subs__.addSub(condSubs8);
    var oldValue8;
    var renderCond8 = function() {
      var value52 = tmp63.get();
      if(oldValue8 === value52) return;
      oldValue8 = value52;
      var subs__ = condSubs8;
      subs__.unsubscribe();
      node34.empty();
      if(value52) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp59 = mobl.ref(result__);
        
        var result__ = null;
        var tmp62 = mobl.ref(result__);
        
        var result__ = null;
        var tmp61 = mobl.ref(result__);
        
        var nodes39 = $("<span>");
        node34.append(nodes39);
        subs__.addSub((mobl.block)(moreStyle, tmp61, tmp59, tmp62, function(_, callback) {
          var root60 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var result__ = null;
          var tmp58 = mobl.ref(result__);
          
          var result__ = null;
          var tmp57 = mobl.ref(result__);
          
          var nodes40 = $("<span>");
          root60.append(nodes40);
          subs__.addSub((mobl.label)(moreLabel, tmp57, tmp58, function(_, callback) {
            var root61 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root61); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes40;
            nodes40 = node.contents();
            oldNodes.replaceWith(nodes40);
          }));
          callback(root60); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes39;
          nodes39 = node.contents();
          oldNodes.replaceWith(nodes39);
        }));
        
        
      } else {
        
      }
    };
    renderCond8();
    subs__.addSub(tmp63.addEventListener('change', function() {
      renderCond8();
    }));
    
    callback(root58); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root62 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes41 = $("<span>");
  root62.append(nodes41);
  subs__.addSub((ui.group)(function(_, callback) {
    var root63 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node35 = mobl.loadingSpan();
    root63.append(node35);
    var list7;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList7 = function() {
      var subs__ = listSubs__;
      list7 = items.get();
      list7.list(function(results7) {
        node35.empty();
        for(var i7 = 0; i7 < results7.length; i7++) {
          (function() {
            var iternode7 = $("<span>");
            node35.append(iternode7);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results7), i7), "_1");it = mobl.ref(mobl.ref(mobl.ref(results7), i7), "_2");
            var result__ = false;
            var tmp67 = mobl.ref(result__);
            
            var result__ = null;
            var tmp66 = mobl.ref(result__);
            
            var result__ = null;
            var tmp65 = mobl.ref(result__);
            
            var nodes42 = $("<span>");
            iternode7.append(nodes42);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp65, tmp66, tmp67, function(_, callback) {
              var root64 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp64 = mobl.ref(result__);
              
              var nodes43 = $("<span>");
              root64.append(nodes43);
              subs__.addSub((ui.checkBox)(checked, it, tmp64, function(_, callback) {
                var root65 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root65); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes43;
                nodes43 = node.contents();
                oldNodes.replaceWith(nodes43);
              }));
              callback(root64); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes42;
              nodes42 = node.contents();
              oldNodes.replaceWith(nodes42);
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
    
    callback(root63); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes41;
    nodes41 = node.contents();
    oldNodes.replaceWith(nodes41);
  }));
  callback(root62); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root66 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll67) {
    coll67 = coll67.reverse();
    function processOne1() {
      var it;
      it = coll67.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll67.length > 0) processOne1(); else rest1();
      
    }
    function rest1() {
      var result__ = null;
      var tmp72 = mobl.ref(result__);
      
      var nodes44 = $("<span>");
      root66.append(nodes44);
      subs__.addSub((ui.header)(title, tmp72, function(_, callback) {
        var root67 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp68 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp69 = mobl.ref(result__);
        
        var nodes45 = $("<span>");
        root67.append(nodes45);
        subs__.addSub((ui.backButton)(tmp69, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp68, function(_, callback) {
          var root68 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root68); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes45;
          nodes45 = node.contents();
          oldNodes.replaceWith(nodes45);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll66) {
                           coll66 = coll66.reverse();
                           function processOne0() {
                             var checked;var it;
                             var tmp135 = coll66.pop();
                             checked = tmp135._1;it = tmp135._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll66.length > 0) processOne0(); else rest0();
                               
                             } else {
                               {
                                 
                                 if(coll66.length > 0) processOne0(); else rest0();
                                 
                               }
                             }
                           }
                           function rest0() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll66.length > 0) processOne0(); else rest0();
                         });
                         
                       };
        var tmp71 = mobl.ref(result__);
        
        var nodes46 = $("<span>");
        root67.append(nodes46);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp71, function(_, callback) {
          var root69 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root69); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes46;
          nodes46 = node.contents();
          oldNodes.replaceWith(nodes46);
        }));
        callback(root67); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes44;
        nodes44 = node.contents();
        oldNodes.replaceWith(nodes44);
      }));
      var nodes47 = $("<span>");
      root66.append(nodes47);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root70 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root70); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes47;
        nodes47 = node.contents();
        oldNodes.replaceWith(nodes47);
      }));
      callback(root66); return subs__;
      
      
    }
    if(coll67.length > 0) processOne1(); else rest1();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root71 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var result__ = null;
  var tmp74 = mobl.ref(result__);
  
  var result__ = null;
  var tmp73 = mobl.ref(result__);
  
  var nodes48 = $("<span>");
  root71.append(nodes48);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp73, tmp74, function(_, callback) {
    var root72 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root72); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes48;
    nodes48 = node.contents();
    oldNodes.replaceWith(nodes48);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp75 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp75.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp75.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp75.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp75.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp75.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes49 = $("<span>");
  root71.append(nodes49);
  subs__.addSub((ui.masterDetail)(tmp75, masterItem, detailItem, function(_, callback) {
    var root73 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root73); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes49;
    nodes49 = node.contents();
    oldNodes.replaceWith(nodes49);
  }));
  callback(root71); return subs__;
  
  
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
  var root74 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  var result__ = null;
  var tmp89 = mobl.ref(result__);
  
  var result__ = null;
  var tmp88 = mobl.ref(result__);
  
  var result__ = null;
  var tmp87 = mobl.ref(result__);
  
  var nodes50 = $("<span>");
  root74.append(nodes50);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp87, tmp88, tmp89, function(_, callback) {
    var root75 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node36 = mobl.loadingSpan();
    root75.append(node36);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = sections.get();
      list8.list(function(results8) {
        node36.empty();
        for(var i8 = 0; i8 < results8.length; i8++) {
          (function() {
            var iternode8 = $("<span>");
            node36.append(iternode8);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results8), i8), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results8), i8), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp79 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp79.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp79.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp79.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp79.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp78 = mobl.ref(result__);
            
            var result__ = null;
            var tmp82 = mobl.ref(result__);
            
            var result__ = null;
            var tmp81 = mobl.ref(result__);
            
            var nodes51 = $("<span>");
            iternode8.append(nodes51);
            subs__.addSub((mobl.span)(tmp79, tmp81, tmp78, tmp82, function(_, callback) {
              var root76 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp77 = mobl.ref(result__);
              
              var result__ = null;
              var tmp76 = mobl.ref(result__);
              
              var nodes52 = $("<span>");
              root76.append(nodes52);
              subs__.addSub((mobl.label)(sectionName, tmp76, tmp77, function(_, callback) {
                var root77 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root77); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes52;
                nodes52 = node.contents();
                oldNodes.replaceWith(nodes52);
              }));
              callback(root76); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes51;
              nodes51 = node.contents();
              oldNodes.replaceWith(nodes51);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp83 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp83.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp83.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp83.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp83.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var result__ = null;
            var tmp86 = mobl.ref(result__);
            
            var result__ = null;
            var tmp85 = mobl.ref(result__);
            
            var result__ = null;
            var tmp84 = mobl.ref(result__);
            
            var nodes53 = $("<span>");
            iternode8.append(nodes53);
            subs__.addSub((mobl.block)(tmp83, tmp84, tmp85, tmp86, function(_, callback) {
              var root78 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes54 = $("<span>");
              root78.append(nodes54);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl14();
              }));
              
              function renderControl14() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root79 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root79); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes54;
                  nodes54 = node.contents();
                  oldNodes.replaceWith(nodes54);
                }));
              }
              renderControl14();
              callback(root78); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes53;
              nodes53 = node.contents();
              oldNodes.replaceWith(nodes53);
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
    
    callback(root75); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes50;
    nodes50 = node.contents();
    oldNodes.replaceWith(nodes50);
  }));
  callback(root74); return subs__;
  
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
  var root80 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node37 = $("<table>");
  
  var ref40 = mobl.ref(ui.tableStyle);
  if(ref40.get() !== null) {
    node37.attr('class', ref40.get());
    subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
      node37.attr('class', val);
    }));
    
  }
  subs__.addSub(ref40.rebind());
  
  var nodes55 = $("<span>");
  node37.append(nodes55);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl15();
  }));
  
  function renderControl15() {
    subs__.addSub((elements)(function(elements, callback) {
      var root81 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root81); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes55;
      nodes55 = node.contents();
      oldNodes.replaceWith(nodes55);
    }));
  }
  renderControl15();
  root80.append(node37);
  callback(root80); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root82 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node38 = $("<tr>");
  
  var ref41 = mobl.ref(ui.trStyle);
  if(ref41.get() !== null) {
    node38.attr('class', ref41.get());
    subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
      node38.attr('class', val);
    }));
    
  }
  subs__.addSub(ref41.rebind());
  
  var nodes56 = $("<span>");
  node38.append(nodes56);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl16();
  }));
  
  function renderControl16() {
    subs__.addSub((elements)(function(elements, callback) {
      var root83 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root83); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes56;
      nodes56 = node.contents();
      oldNodes.replaceWith(nodes56);
    }));
  }
  renderControl16();
  root82.append(node38);
  callback(root82); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root84 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node39 = $("<td>");
  
  var ref42 = width;
  if(ref42.get() !== null) {
    node39.attr('width', ref42.get());
    subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
      node39.attr('width', val);
    }));
    
  }
  subs__.addSub(ref42.rebind());
  
  var ref43 = mobl.ref(ui.tdStyle);
  if(ref43.get() !== null) {
    node39.attr('class', ref43.get());
    subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
      node39.attr('class', val);
    }));
    
  }
  subs__.addSub(ref43.rebind());
  
  var nodes57 = $("<span>");
  node39.append(nodes57);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl17();
  }));
  
  function renderControl17() {
    subs__.addSub((elements)(function(elements, callback) {
      var root85 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root85); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes57;
      nodes57 = node.contents();
      oldNodes.replaceWith(nodes57);
    }));
  }
  renderControl17();
  root84.append(node39);
  callback(root84); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root86 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node40 = $("<td>");
  
  var ref44 = width;
  if(ref44.get() !== null) {
    node40.attr('width', ref44.get());
    subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
      node40.attr('width', val);
    }));
    
  }
  subs__.addSub(ref44.rebind());
  
  var ref45 = mobl.ref(ui.tdStyle);
  if(ref45.get() !== null) {
    node40.attr('class', ref45.get());
    subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
      node40.attr('class', val);
    }));
    
  }
  subs__.addSub(ref45.rebind());
  
  var nodes58 = $("<span>");
  node40.append(nodes58);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl18();
  }));
  
  function renderControl18() {
    subs__.addSub((elements)(function(elements, callback) {
      var root87 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root87); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes58;
      nodes58 = node.contents();
      oldNodes.replaceWith(nodes58);
    }));
  }
  renderControl18();
  root86.append(node40);
  callback(root86); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root88 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node41 = $("<td>");
  
  var ref46 = width;
  if(ref46.get() !== null) {
    node41.attr('width', ref46.get());
    subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
      node41.attr('width', val);
    }));
    
  }
  subs__.addSub(ref46.rebind());
  
  var ref47 = mobl.ref(ui.tdStyle);
  if(ref47.get() !== null) {
    node41.attr('class', ref47.get());
    subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
      node41.attr('class', val);
    }));
    
  }
  subs__.addSub(ref47.rebind());
  
  
  var node42 = $("<strong>");
  
  var nodes59 = $("<span>");
  node42.append(nodes59);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl19();
  }));
  
  function renderControl19() {
    subs__.addSub((elements)(function(elements, callback) {
      var root89 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root89); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes59;
      nodes59 = node.contents();
      oldNodes.replaceWith(nodes59);
    }));
  }
  renderControl19();
  node41.append(node42);
  root88.append(node41);
  callback(root88); return subs__;
  
  
  
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
  var root90 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes60 = $("<span>");
  root90.append(nodes60);
  subs__.addSub((ui.group)(function(_, callback) {
    var root91 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node43 = mobl.loadingSpan();
    root91.append(node43);
    var list9;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList9 = function() {
      var subs__ = listSubs__;
      list9 = items.get();
      list9.list(function(results9) {
        node43.empty();
        for(var i9 = 0; i9 < results9.length; i9++) {
          (function() {
            var iternode9 = $("<span>");
            node43.append(iternode9);
            var it;
            it = mobl.ref(mobl.ref(results9), i9);
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                             var tmp137 = result__;
                             if(callback && callback.apply) callback(); return;
                             });
                           };
            var tmp91 = mobl.ref(result__);
            
            var result__ = false;
            var tmp93 = mobl.ref(result__);
            
            var result__ = null;
            var tmp92 = mobl.ref(result__);
            
            var nodes61 = $("<span>");
            iternode9.append(nodes61);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp91, tmp92, tmp93, function(_, callback) {
              var root92 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes62 = $("<span>");
              root92.append(nodes62);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl20();
              }));
              
              function renderControl20() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root93 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root93); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes62;
                  nodes62 = node.contents();
                  oldNodes.replaceWith(nodes62);
                }));
              }
              renderControl20();
              callback(root92); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes61;
              nodes61 = node.contents();
              oldNodes.replaceWith(nodes61);
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
    
    callback(root91); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes60;
    nodes60 = node.contents();
    oldNodes.replaceWith(nodes60);
  }));
  callback(root90); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root94 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = false;
  var tmp98 = mobl.ref(result__);
  
  var result__ = null;
  var tmp97 = mobl.ref(result__);
  
  var result__ = null;
  var tmp96 = mobl.ref(result__);
  
  var nodes63 = $("<span>");
  root94.append(nodes63);
  subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp96, tmp97, tmp98, function(_, callback) {
    var root95 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp95 = mobl.ref(result__);
    
    var result__ = "Back";
    var tmp94 = mobl.ref(result__);
    
    var nodes64 = $("<span>");
    root95.append(nodes64);
    subs__.addSub((ui.backButton)(tmp94, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp95, function(_, callback) {
      var root96 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root96); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes64;
      nodes64 = node.contents();
      oldNodes.replaceWith(nodes64);
    }));
    callback(root95); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes63;
    nodes63 = node.contents();
    oldNodes.replaceWith(nodes63);
  }));
  var nodes65 = $("<span>");
  root94.append(nodes65);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root97 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root97); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes65;
      nodes65 = node.contents();
      oldNodes.replaceWith(nodes65);
    }));
  }
  renderControl21();
  callback(root94); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root98 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node44 = $("<div>");
  
  var ref51 = mobl.ref(ui.customHeaderStyle);
  if(ref51.get() !== null) {
    node44.attr('class', ref51.get());
    subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
      node44.attr('class', val);
    }));
    
  }
  subs__.addSub(ref51.rebind());
  
  var val27 = onclick.get();
  if(val27 !== null) {
    subs__.addSub(mobl.domBind(node44, 'tap', val27));
  }
  
  
  var node45 = $("<div>");
  
  var ref50 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref50.get() !== null) {
    node45.attr('class', ref50.get());
    subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
      node45.attr('class', val);
    }));
    
  }
  subs__.addSub(ref50.rebind());
  
  
  var node46 = $("<div>");
  
  var ref48 = text;
  node46.text(""+ref48.get());
  var ignore10 = false;
  subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
    if(ignore10) return;
    node46.text(""+val);
  }));
  subs__.addSub(ref48.rebind());
  
  
  var ref49 = mobl.ref(ui.customHeaderTextStyle);
  if(ref49.get() !== null) {
    node46.attr('class', ref49.get());
    subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
      node46.attr('class', val);
    }));
    
  }
  subs__.addSub(ref49.rebind());
  
  node45.append(node46);
  node44.append(node45);
  var nodes66 = $("<span>");
  node44.append(nodes66);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl22();
  }));
  
  function renderControl22() {
    subs__.addSub((elements)(function(elements, callback) {
      var root99 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root99); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes66;
      nodes66 = node.contents();
      oldNodes.replaceWith(nodes66);
    }));
  }
  renderControl22();
  root98.append(node44);
  callback(root98); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root100 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref52 = mobl.ref(ui.customItemStyle);
  if(ref52.get() !== null) {
    el.attr('class', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref52.rebind());
  
  var ref53 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref53.get() !== null) {
    el.attr('class', ref53.get());
    subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref53.rebind());
  
  var val28 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp138 = result__;
                                           function after9(result__) {
                                             var tmp139 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after9);if(result__ !== undefined) after9(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp141 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val28 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val28));
  }
  
  var nodes67 = $("<span>");
  el.append(nodes67);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl23();
  }));
  
  function renderControl23() {
    subs__.addSub((elements)(function(elements, callback) {
      var root101 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root101); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes67;
      nodes67 = node.contents();
      oldNodes.replaceWith(nodes67);
    }));
  }
  renderControl23();
  root100.append(el);
  callback(root100); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root102 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node47 = $("<div>");
  node47.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node49 = mobl.loadingSpan();
  node47.append(node49);
  var list11;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList11 = function() {
    var subs__ = listSubs__;
    list11 = tabs.get();
    list11.list(function(results11) {
      node49.empty();
      for(var i11 = 0; i11 < results11.length; i11++) {
        (function() {
          var iternode11 = $("<span>");
          node49.append(iternode11);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_3");
          var result__ = activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle;
          var tmp99 = mobl.ref(result__);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp99.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp99.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp99.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp99.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          var result__ = null;
          var tmp102 = mobl.ref(result__);
          
          var result__ = null;
          var tmp101 = mobl.ref(result__);
          
          var result__ = null;
          var tmp100 = mobl.ref(result__);
          
          var nodes71 = $("<span>");
          iternode11.append(nodes71);
          subs__.addSub((mobl.block)(tmp99, tmp100, tmp101, tmp102, function(_, callback) {
            var root106 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes72 = $("<span>");
            root106.append(nodes72);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root107 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes73 = $("<span>");
              root107.append(nodes73);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl24();
              }));
              
              function renderControl24() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root108 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root108); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes73;
                  nodes73 = node.contents();
                  oldNodes.replaceWith(nodes73);
                }));
              }
              renderControl24();
              callback(root107); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes72;
              nodes72 = node.contents();
              oldNodes.replaceWith(nodes72);
            }));
            callback(root106); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes71;
            nodes71 = node.contents();
            oldNodes.replaceWith(nodes71);
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
  
  root102.append(node47);
  var result__ = null;
  var tmp112 = mobl.ref(result__);
  
  var result__ = null;
  var tmp111 = mobl.ref(result__);
  
  var result__ = null;
  var tmp109 = mobl.ref(result__);
  
  var nodes68 = $("<span>");
  root102.append(nodes68);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp109, tmp111, tmp112, function(_, callback) {
    var root103 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node48 = mobl.loadingSpan();
    root103.append(node48);
    var list10;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList10 = function() {
      var subs__ = listSubs__;
      list10 = tabs.get();
      list10.list(function(results10) {
        node48.empty();
        for(var i10 = 0; i10 < results10.length; i10++) {
          (function() {
            var iternode10 = $("<span>");
            node48.append(iternode10);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results10), i10), "_3");
            var result__ = activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle;
            var tmp106 = mobl.ref(result__);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp106.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp106.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp106.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp106.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = tabName.get();
                             activeTabName.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp105 = mobl.ref(result__);
            
            var result__ = null;
            var tmp108 = mobl.ref(result__);
            
            var result__ = null;
            var tmp107 = mobl.ref(result__);
            
            var nodes69 = $("<span>");
            iternode10.append(nodes69);
            subs__.addSub((mobl.span)(tmp106, tmp107, tmp105, tmp108, function(_, callback) {
              var root104 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = null;
              var tmp104 = mobl.ref(result__);
              
              var result__ = null;
              var tmp103 = mobl.ref(result__);
              
              var nodes70 = $("<span>");
              root104.append(nodes70);
              subs__.addSub((mobl.label)(tabName, tmp103, tmp104, function(_, callback) {
                var root105 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root105); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes70;
                nodes70 = node.contents();
                oldNodes.replaceWith(nodes70);
              }));
              callback(root104); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes69;
              nodes69 = node.contents();
              oldNodes.replaceWith(nodes69);
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
    
    callback(root103); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes68;
    nodes68 = node.contents();
    oldNodes.replaceWith(nodes68);
  }));
  callback(root102); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root109 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node50 = $("<div>");
  node50.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node50.append(slider);
  var result__ = slider.slider(new mobl.Dynamic({'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                          if(event && event.stopPropagation) event.stopPropagation();
                                                          var result__ = slider.slider("value");
                                                          s.set(result__);
                                                          var result__ = slider.slider("value");
                                                          start.set(result__);
                                                          if(callback && callback.apply) callback(); return;
                                                        }}));
  root109.append(node50);
  callback(root109); return subs__;
  
  
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
