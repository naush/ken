mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root727 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node56 = $("<span>");
  root727.append(node56);
  var condSubs25 = new mobl.CompSubscription();
  subs__.addSub(condSubs25);
  var oldValue25;
  var renderCond25 = function() {
    var value34 = value.get();
    if(oldValue25 === value34) return;
    oldValue25 = value34;
    var subs__ = condSubs25;
    subs__.unsubscribe();
    node56.empty();
    if(value34) {
      var nodes632 = $("<span>");
      node56.append(nodes632);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl4();
      }));
      
      function renderControl4() {
        subs__.addSub((elements)(function(elements, callback) {
          var root728 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root728); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes632;
          nodes632 = node.contents();
          oldNodes.replaceWith(nodes632);
        }));
      }
      renderControl4();
      
      
    } else {
      
      var tmp1994 = mobl.ref(null);
      
      
      var tmp1993 = mobl.ref(null);
      
      
      var tmp1992 = mobl.ref(null);
      
      var nodes633 = $("<span>");
      node56.append(nodes633);
      subs__.addSub((mobl.block)(style, tmp1992, tmp1993, tmp1994, function(_, callback) {
        var root729 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1984 = mobl.ref(null);
        
        
        var tmp1983 = mobl.ref(null);
        
        var nodes634 = $("<span>");
        root729.append(nodes634);
        subs__.addSub((mobl.label)(loadingMessage, tmp1983, tmp1984, function(_, callback) {
          var root730 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root730); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes634;
          nodes634 = node.contents();
          oldNodes.replaceWith(nodes634);
        }));
        
        var tmp1986 = mobl.ref("middle");
        
        
        var tmp1985 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp1991 = mobl.ref(null);
        
        
        var tmp1990 = mobl.ref(null);
        
        
        var tmp1989 = mobl.ref(null);
        
        
        var tmp1988 = mobl.ref(null);
        
        
        var tmp1987 = mobl.ref(null);
        
        var nodes635 = $("<span>");
        root729.append(nodes635);
        subs__.addSub((ui.image)(tmp1985, tmp1987, tmp1988, tmp1989, tmp1990, tmp1986, tmp1991, function(_, callback) {
          var root731 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root731); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes635;
          nodes635 = node.contents();
          oldNodes.replaceWith(nodes635);
        }));
        callback(root729); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes633;
        nodes633 = node.contents();
        oldNodes.replaceWith(nodes633);
      }));
      
      
    }
  };
  renderCond25();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond25();
  }));
  
  callback(root727); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root732 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node57 = $("<div>");
  
  var ref11 = mobl.ref(ui.headerStyle);
  if(ref11.get() !== null) {
    node57.attr('class', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      node57.attr('class', val);
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  var val5 = onclick.get();
  if(val5 !== null) {
    subs__.addSub(mobl.domBind(node57, 'tap', val5));
  }
  
  
  var node58 = $("<div>");
  
  var ref10 = mobl.ref(ui.headerContainerStyle);
  if(ref10.get() !== null) {
    node58.attr('class', ref10.get());
    subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
      node58.attr('class', val);
    }));
    
  }
  subs__.addSub(ref10.rebind());
  
  
  var node59 = $("<div>");
  
  var ref8 = text;
  node59.text(""+ref8.get());
  var ignore1 = false;
  subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
    if(ignore1) return;
    node59.text(""+val);
  }));
  subs__.addSub(ref8.rebind());
  
  
  var ref9 = mobl.ref(ui.headerTextStyle);
  if(ref9.get() !== null) {
    node59.attr('class', ref9.get());
    subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
      node59.attr('class', val);
    }));
    
  }
  subs__.addSub(ref9.rebind());
  
  node58.append(node59);
  node57.append(node58);
  var nodes636 = $("<span>");
  node57.append(nodes636);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root733 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root733); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes636;
      nodes636 = node.contents();
      oldNodes.replaceWith(nodes636);
    }));
  }
  renderControl5();
  root732.append(node57);
  callback(root732); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root734 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref12 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref12.get() !== null) {
    sp.attr('class', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref12.rebind());
  
  var val6 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val6));
  }
  
  var val7 = function(event, callback) {
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
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val7));
  }
  
  var val8 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after0(result__) {
                    var tmp2066 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val8));
  }
  
  var val9 = function(event, callback) {
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
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val9));
  }
  
  var ref13 = text;
  sp.text(""+ref13.get());
  var ignore2 = false;
  subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref13.rebind());
  
  
  root734.append(sp);
  callback(root734); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root735 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes637 = $("<span>");
  root735.append(nodes637);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root736 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root736); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes637;
    nodes637 = node.contents();
    oldNodes.replaceWith(nodes637);
  }));
  callback(root735); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root737 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes638 = $("<span>");
  root737.append(nodes638);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root738 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root738); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes638;
    nodes638 = node.contents();
    oldNodes.replaceWith(nodes638);
  }));
  callback(root737); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root739 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node60 = $("<ul>");
  
  var ref14 = mobl.ref(ui.groupStyle);
  if(ref14.get() !== null) {
    node60.attr('class', ref14.get());
    subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
      node60.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14.rebind());
  
  var nodes639 = $("<span>");
  node60.append(nodes639);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl6();
  }));
  
  function renderControl6() {
    subs__.addSub((elements)(function(elements, callback) {
      var root740 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root740); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes639;
      nodes639 = node.contents();
      oldNodes.replaceWith(nodes639);
    }));
  }
  renderControl6();
  root739.append(node60);
  callback(root739); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root741 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node61 = $("<img>");
  
  var ref15 = url;
  if(ref15.get() !== null) {
    node61.attr('src', ref15.get());
    subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
      node61.attr('src', val);
    }));
    
  }
  subs__.addSub(ref15.rebind());
  
  var ref16 = width;
  if(ref16.get() !== null) {
    node61.attr('width', ref16.get());
    subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
      node61.attr('width', val);
    }));
    
  }
  subs__.addSub(ref16.rebind());
  
  var ref17 = height;
  if(ref17.get() !== null) {
    node61.attr('height', ref17.get());
    subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
      node61.attr('height', val);
    }));
    
  }
  subs__.addSub(ref17.rebind());
  
  var ref18 = style;
  if(ref18.get() !== null) {
    node61.attr('class', ref18.get());
    subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
      node61.attr('class', val);
    }));
    
  }
  subs__.addSub(ref18.rebind());
  
  var val10 = onclick.get();
  if(val10 !== null) {
    subs__.addSub(mobl.domBind(node61, 'tap', val10));
  }
  
  var ref19 = valign;
  if(ref19.get() !== null) {
    node61.attr('valign', ref19.get());
    subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
      node61.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref19.rebind());
  
  var ref20 = align;
  if(ref20.get() !== null) {
    node61.attr('align', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      node61.attr('align', val);
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  root741.append(node61);
  callback(root741); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root742 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref21 = mobl.ref(ui.itemStyle);
  if(ref21.get() !== null) {
    el.attr('class', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  var ref22 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref22.get() !== null) {
    el.attr('class', ref22.get());
    subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref22.rebind());
  
  var val11 = onswipe.get();
  if(val11 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val11));
  }
  
  var val12 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp2067 = result__;
                                           function after1(result__) {
                                             var tmp2068 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp2069 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val12 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val12));
  }
  
  var nodes640 = $("<span>");
  el.append(nodes640);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7();
  }));
  
  function renderControl7() {
    subs__.addSub((elements)(function(elements, callback) {
      var root743 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root743); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes640;
      nodes640 = node.contents();
      oldNodes.replaceWith(nodes640);
    }));
  }
  renderControl7();
  root742.append(el);
  callback(root742); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root744 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node62 = $("<input>");
  node62.attr('type', "checkbox");
  
  var ref24 = b;
  node62.attr('checked', !!ref24.get());
  subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
    if(ref === ref24) node62.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node62, 'change', function() {
    b.set(!!node62.attr('checked'));
  }));
  
  var val14 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val14 !== null) {
    subs__.addSub(mobl.domBind(node62, 'tap', val14));
  }
  
  var val15 = onchange.get();
  if(val15 !== null) {
    subs__.addSub(mobl.domBind(node62, 'change', val15));
  }
  
  root744.append(node62);
  
  root744.append(" ");
  
  var node63 = $("<span>");
  
  var ref23 = label;
  node63.text(""+ref23.get());
  var ignore3 = false;
  subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    node63.text(""+val);
  }));
  subs__.addSub(ref23.rebind());
  
  
  var val13 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2(result__) {
                    var tmp2070 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val13 !== null) {
    subs__.addSub(mobl.domBind(node63, 'tap', val13));
  }
  
  root744.append(node63);
  callback(root744); return subs__;
  
  
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
  var root745 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node64 = $("<span>");
  root745.append(node64);
  var condSubs26 = new mobl.CompSubscription();
  subs__.addSub(condSubs26);
  var oldValue26;
  var renderCond26 = function() {
    var value35 = label.get();
    if(oldValue26 === value35) return;
    oldValue26 = value35;
    var subs__ = condSubs26;
    subs__.unsubscribe();
    node64.empty();
    if(value35) {
      
      var tmp1995 = mobl.ref(null);
      
      var nodes641 = $("<span>");
      node64.append(nodes641);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp1995, function(_, callback) {
        var root746 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root746); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes641;
        nodes641 = node.contents();
        oldNodes.replaceWith(nodes641);
      }));
      
      
    } else {
      
    }
  };
  renderCond26();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond26();
  }));
  
  
  var node65 = $("<span>");
  root745.append(node65);
  var condSubs27 = new mobl.CompSubscription();
  subs__.addSub(condSubs27);
  var oldValue27;
  var renderCond27 = function() {
    var value38 = validator.get();
    if(oldValue27 === value38) return;
    oldValue27 = value38;
    var subs__ = condSubs27;
    subs__.unsubscribe();
    node65.empty();
    if(value38) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after6(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp2071 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node66 = $("<input>");
        node66.attr('type', "text");
        
        var ref25 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref25.get() !== null) {
          node66.attr('class', ref25.get());
          subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
            node66.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node66.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node66.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node66.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref25.rebind());
        
        var ref26 = placeholder;
        if(ref26.get() !== null) {
          node66.attr('placeholder', ref26.get());
          subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
            node66.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref26.rebind());
        
        var ref27 = temp;
        node66.val(""+ref27.get());
        var ignore4 = false;
        subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
          if(ignore4) return;
          node66.val(""+val);
        }));
        subs__.addSub(ref27.rebind());
        
        subs__.addSub(mobl.domBind(node66, 'keyup change', function() {
          ignore4 = true;
          temp.set(mobl.stringTomobl__String(node66.val()));
          ignore4 = false;
        }));
        
        
        var val16 = onchange.get();
        if(val16 !== null) {
          subs__.addSub(mobl.domBind(node66, 'change', val16));
        }
        
        var val17 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3(result__) {
                          var tmp2072 = result__;
                          function after4(result__) {
                            var tmp2073 = result__;
                            var result__ = tmp2073;
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
                            var tmp2073 = result__;
                            var result__ = tmp2073;
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
        if(val17 !== null) {
          subs__.addSub(mobl.domBind(node66, 'keyup', val17));
        }
        
        var val18 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val18 !== null) {
          subs__.addSub(mobl.domBind(node66, 'blur', val18));
        }
        
        node65.append(node66);
        
        var tmp1996 = mobl.ref(null);
        
        var nodes642 = $("<span>");
        node65.append(nodes642);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp1996, function(_, callback) {
          var root747 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root747); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes642;
          nodes642 = node.contents();
          oldNodes.replaceWith(nodes642);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after6);if(result__ !== undefined) after6(result__);
    } else {
      
      var node67 = $("<input>");
      node67.attr('type', "text");
      
      var ref28 = style;
      if(ref28.get() !== null) {
        node67.attr('class', ref28.get());
        subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
          node67.attr('class', val);
        }));
        
      }
      subs__.addSub(ref28.rebind());
      
      var ref29 = placeholder;
      if(ref29.get() !== null) {
        node67.attr('placeholder', ref29.get());
        subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
          node67.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref29.rebind());
      
      var ref30 = s;
      node67.val(""+ref30.get());
      var ignore5 = false;
      subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
        if(ignore5) return;
        node67.val(""+val);
      }));
      subs__.addSub(ref30.rebind());
      
      subs__.addSub(mobl.domBind(node67, 'keyup change', function() {
        ignore5 = true;
        s.set(mobl.stringTomobl__String(node67.val()));
        ignore5 = false;
      }));
      
      
      var val19 = onchange.get();
      if(val19 !== null) {
        subs__.addSub(mobl.domBind(node67, 'change', val19));
      }
      
      var val20 = onkeyup.get();
      if(val20 !== null) {
        subs__.addSub(mobl.domBind(node67, 'keyup', val20));
      }
      
      var val21 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node67, 'blur', val21));
      }
      
      node65.append(node67);
      
      
    }
  };
  renderCond27();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond27();
  }));
  
  callback(root745); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root748 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes643 = $("<span>");
  root748.append(nodes643);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root749 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root749); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes643;
    nodes643 = node.contents();
    oldNodes.replaceWith(nodes643);
  }));
  callback(root748); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root750 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after7(result__) {
      var tmp2074 = result__;
      var result__ = tmp2074;
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
  var nodes644 = $("<span>");
  root750.append(nodes644);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root751 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root751); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes644;
    nodes644 = node.contents();
    oldNodes.replaceWith(nodes644);
  }));
  callback(root750); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root752 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node68 = $("<span>");
  root752.append(node68);
  var condSubs28 = new mobl.CompSubscription();
  subs__.addSub(condSubs28);
  var oldValue28;
  var renderCond28 = function() {
    var value39 = label.get();
    if(oldValue28 === value39) return;
    oldValue28 = value39;
    var subs__ = condSubs28;
    subs__.unsubscribe();
    node68.empty();
    if(value39) {
      
      var node69 = $("<span>");
      node69.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref34 = label;
      node69.text(""+ref34.get());
      var ignore7 = false;
      subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
        if(ignore7) return;
        node69.text(""+val);
      }));
      subs__.addSub(ref34.rebind());
      
      
      node68.append(node69);
      
      var node70 = $("<span>");
      node70.attr('style', "float: left");
      
      
      var node71 = $("<input>");
      node71.attr('type', "password");
      
      var ref31 = style;
      if(ref31.get() !== null) {
        node71.attr('class', ref31.get());
        subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
          node71.attr('class', val);
        }));
        
      }
      subs__.addSub(ref31.rebind());
      
      var ref32 = placeholder;
      if(ref32.get() !== null) {
        node71.attr('placeholder', ref32.get());
        subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
          node71.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref32.rebind());
      
      var ref33 = s;
      node71.val(""+ref33.get());
      var ignore6 = false;
      subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
        if(ignore6) return;
        node71.val(""+val);
      }));
      subs__.addSub(ref33.rebind());
      
      subs__.addSub(mobl.domBind(node71, 'keyup change', function() {
        ignore6 = true;
        s.set(mobl.stringTomobl__String(node71.val()));
        ignore6 = false;
      }));
      
      
      var val22 = onchange.get();
      if(val22 !== null) {
        subs__.addSub(mobl.domBind(node71, 'change', val22));
      }
      
      var val23 = onkeyup.get();
      if(val23 !== null) {
        subs__.addSub(mobl.domBind(node71, 'keyup', val23));
      }
      
      var val24 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val24 !== null) {
        subs__.addSub(mobl.domBind(node71, 'blur', val24));
      }
      
      node70.append(node71);
      node68.append(node70);
      
      
      
      
    } else {
      
      var node72 = $("<input>");
      node72.attr('type', "password");
      
      var ref35 = style;
      if(ref35.get() !== null) {
        node72.attr('class', ref35.get());
        subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
          node72.attr('class', val);
        }));
        
      }
      subs__.addSub(ref35.rebind());
      
      var ref36 = placeholder;
      if(ref36.get() !== null) {
        node72.attr('placeholder', ref36.get());
        subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
          node72.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref36.rebind());
      
      var ref37 = s;
      node72.val(""+ref37.get());
      var ignore8 = false;
      subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node72.val(""+val);
      }));
      subs__.addSub(ref37.rebind());
      
      subs__.addSub(mobl.domBind(node72, 'keyup change', function() {
        ignore8 = true;
        s.set(mobl.stringTomobl__String(node72.val()));
        ignore8 = false;
      }));
      
      
      var val25 = onchange.get();
      if(val25 !== null) {
        subs__.addSub(mobl.domBind(node72, 'change', val25));
      }
      
      var val26 = onkeyup.get();
      if(val26 !== null) {
        subs__.addSub(mobl.domBind(node72, 'keyup', val26));
      }
      
      var val27 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val27 !== null) {
        subs__.addSub(mobl.domBind(node72, 'blur', val27));
      }
      
      node68.append(node72);
      
      
    }
  };
  renderCond28();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond28();
  }));
  
  callback(root752); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root753 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref42 = style;
  if(ref42.get() !== null) {
    sel.attr('class', ref42.get());
    subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref42.rebind());
  
  var val28 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after8(result__) {
                    var tmp2076 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after8);if(result__ !== undefined) after8(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val28 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val28));
  }
  
  
  var node73 = mobl.loadingSpan();
  sel.append(node73);
  var list25;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList25 = function() {
    var subs__ = listSubs__;
    list25 = options.get();
    list25.list(function(results678) {
      node73.empty();
      for(var i25 = 0; i25 < results678.length; i25++) {
        (function() {
          var iternode25 = $("<span>");
          node73.append(iternode25);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results678), i25), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results678), i25), "_2");
          
          var node74 = $("<option>");
          
          var ref38 = optionDescription;
          node74.text(""+ref38.get());
          var ignore9 = false;
          subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
            if(ignore9) return;
            node74.text(""+val);
          }));
          subs__.addSub(ref38.rebind());
          
          
          var ref39 = optionStyle;
          if(ref39.get() !== null) {
            node74.attr('class', ref39.get());
            subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
              node74.attr('class', val);
            }));
            
          }
          subs__.addSub(ref39.rebind());
          
          var ref40 = optionValue;
          if(ref40.get() !== null) {
            node74.attr('value', ref40.get());
            subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
              node74.attr('value', val);
            }));
            
          }
          subs__.addSub(ref40.rebind());
          
          var ref41 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref41.get() !== null) {
            node74.attr('selected', ref41.get());
            subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
              node74.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node74.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node74.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref41.rebind());
          
          iternode25.append(node74);
          
          var oldNodes = iternode25;
          iternode25 = iternode25.contents();
          oldNodes.replaceWith(iternode25);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list25.addEventListener('change', function() { listSubs__.unsubscribe(); renderList25(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList25(true); }));
    });
  };
  renderList25();
  
  root753.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root753); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root754 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp2005 = mobl.ref(null);
  
  
  var tmp2004 = mobl.ref(null);
  
  
  var tmp2003 = mobl.ref(null);
  
  var nodes645 = $("<span>");
  root754.append(nodes645);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp2003, tmp2004, tmp2005, function(_, callback) {
    var root755 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node75 = mobl.loadingSpan();
    root755.append(node75);
    var list26;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList26 = function() {
      var subs__ = listSubs__;
      list26 = tabs.get();
      list26.list(function(results679) {
        node75.empty();
        for(var i26 = 0; i26 < results679.length; i26++) {
          (function() {
            var iternode26 = $("<span>");
            node75.append(iternode26);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results679), i26), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results679), i26), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results679), i26), "_3");
            
            var tmp2000 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp2000.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp2000.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp2000.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp2000.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp1999 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp2002 = mobl.ref(null);
            
            
            var tmp2001 = mobl.ref(null);
            
            var nodes646 = $("<span>");
            iternode26.append(nodes646);
            subs__.addSub((mobl.span)(tmp2000, tmp2001, tmp1999, tmp2002, function(_, callback) {
              var root756 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1998 = mobl.ref(null);
              
              
              var tmp1997 = mobl.ref(null);
              
              var nodes647 = $("<span>");
              root756.append(nodes647);
              subs__.addSub((mobl.label)(tabName, tmp1997, tmp1998, function(_, callback) {
                var root757 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root757); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes647;
                nodes647 = node.contents();
                oldNodes.replaceWith(nodes647);
              }));
              callback(root756); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes646;
              nodes646 = node.contents();
              oldNodes.replaceWith(nodes646);
            }));
            
            var oldNodes = iternode26;
            iternode26 = iternode26.contents();
            oldNodes.replaceWith(iternode26);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list26.addEventListener('change', function() { listSubs__.unsubscribe(); renderList26(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList26(true); }));
      });
    };
    renderList26();
    
    callback(root755); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes645;
    nodes645 = node.contents();
    oldNodes.replaceWith(nodes645);
  }));
  
  var node76 = mobl.loadingSpan();
  root754.append(node76);
  var list27;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList27 = function() {
    var subs__ = listSubs__;
    list27 = tabs.get();
    list27.list(function(results680) {
      node76.empty();
      for(var i27 = 0; i27 < results680.length; i27++) {
        (function() {
          var iternode27 = $("<span>");
          node76.append(iternode27);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results680), i27), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results680), i27), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results680), i27), "_3");
          
          var tmp2006 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp2006.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp2006.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp2006.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp2006.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp2009 = mobl.ref(null);
          
          
          var tmp2008 = mobl.ref(null);
          
          
          var tmp2007 = mobl.ref(null);
          
          var nodes648 = $("<span>");
          iternode27.append(nodes648);
          subs__.addSub((mobl.block)(tmp2006, tmp2007, tmp2008, tmp2009, function(_, callback) {
            var root758 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes649 = $("<span>");
            root758.append(nodes649);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root759 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes650 = $("<span>");
              root759.append(nodes650);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl8();
              }));
              
              function renderControl8() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root760 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root760); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes650;
                  nodes650 = node.contents();
                  oldNodes.replaceWith(nodes650);
                }));
              }
              renderControl8();
              callback(root759); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes649;
              nodes649 = node.contents();
              oldNodes.replaceWith(nodes649);
            }));
            callback(root758); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes648;
            nodes648 = node.contents();
            oldNodes.replaceWith(nodes648);
          }));
          
          var oldNodes = iternode27;
          iternode27 = iternode27.contents();
          oldNodes.replaceWith(iternode27);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list27.addEventListener('change', function() { listSubs__.unsubscribe(); renderList27(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList27(true); }));
    });
  };
  renderList27();
  
  callback(root754); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root761 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node77 = $("<div>");
  
  var ref46 = mobl.ref(ui.searchboxStyle);
  if(ref46.get() !== null) {
    node77.attr('class', ref46.get());
    subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
      node77.attr('class', val);
    }));
    
  }
  subs__.addSub(ref46.rebind());
  
  
  var node78 = $("<input>");
  node78.attr('type', "search");
  
  var ref43 = mobl.ref(ui.searchBoxInputStyle);
  if(ref43.get() !== null) {
    node78.attr('class', ref43.get());
    subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
      node78.attr('class', val);
    }));
    
  }
  subs__.addSub(ref43.rebind());
  
  var ref44 = placeholder;
  if(ref44.get() !== null) {
    node78.attr('placeholder', ref44.get());
    subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
      node78.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref44.rebind());
  
  var ref45 = s;
  node78.val(""+ref45.get());
  var ignore10 = false;
  subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
    if(ignore10) return;
    node78.val(""+val);
  }));
  subs__.addSub(ref45.rebind());
  
  subs__.addSub(mobl.domBind(node78, 'keyup change', function() {
    ignore10 = true;
    s.set(mobl.stringTomobl__String(node78.val()));
    ignore10 = false;
  }));
  
  
  var val29 = onsearch.get();
  if(val29 !== null) {
    subs__.addSub(mobl.domBind(node78, 'change', val29));
  }
  
  var val30 = onkeyup.get();
  if(val30 !== null) {
    subs__.addSub(mobl.domBind(node78, 'keyup', val30));
  }
  node78.attr('autocorrect', false);
  node78.attr('autocapitalize', false);
  node78.attr('autocomplete', false);
  
  node77.append(node78);
  root761.append(node77);
  callback(root761); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root762 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref47 = mobl.ref(ui.contextMenuStyle);
  if(ref47.get() !== null) {
    menu.attr('class', ref47.get());
    subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref47.rebind());
  
  var nodes651 = $("<span>");
  menu.append(nodes651);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl9();
  }));
  
  function renderControl9() {
    subs__.addSub((elements)(function(elements, callback) {
      var root763 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root763); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes651;
      nodes651 = node.contents();
      oldNodes.replaceWith(nodes651);
    }));
  }
  renderControl9();
  root762.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val31 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp2079 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val31 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val31));
  }
  
  root762.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root762); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root764 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2065 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp2065.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node79 = $("<span>");
  root764.append(node79);
  var condSubs29 = new mobl.CompSubscription();
  subs__.addSub(condSubs29);
  var oldValue29;
  var renderCond29 = function() {
    var value40 = tmp2065.get();
    if(oldValue29 === value40) return;
    oldValue29 = value40;
    var subs__ = condSubs29;
    subs__.unsubscribe();
    node79.empty();
    if(value40) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node80 = $("<div>");
        node80.attr('width', "100%");
        
        
        var node81 = $("<div>");
        node81.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes654 = $("<span>");
        node81.append(nodes654);
        subs__.addSub((ui.group)(function(_, callback) {
          var root767 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node84 = mobl.loadingSpan();
          root767.append(node84);
          var list28;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList28 = function() {
            var subs__ = listSubs__;
            list28 = items.get();
            list28.list(function(results681) {
              node84.empty();
              for(var i28 = 0; i28 < results681.length; i28++) {
                (function() {
                  var iternode28 = $("<span>");
                  node84.append(iternode28);
                  var it;
                  it = mobl.ref(mobl.ref(results681), i28);
                  
                  var tmp2023 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp2023.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp2023.set(it.get() == current.get());
                  }));
                  
                  
                  var node85 = $("<span>");
                  iternode28.append(node85);
                  var condSubs31 = new mobl.CompSubscription();
                  subs__.addSub(condSubs31);
                  var oldValue31;
                  var renderCond31 = function() {
                    var value42 = tmp2023.get();
                    if(oldValue31 === value42) return;
                    oldValue31 = value42;
                    var subs__ = condSubs31;
                    subs__.unsubscribe();
                    node85.empty();
                    if(value42) {
                      
                      var tmp2019 = mobl.ref(false);
                      
                      
                      var tmp2018 = mobl.ref(null);
                      
                      
                      var tmp2017 = mobl.ref(null);
                      
                      var nodes655 = $("<span>");
                      node85.append(nodes655);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp2017, tmp2018, tmp2019, function(_, callback) {
                        var root768 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes656 = $("<span>");
                        root768.append(nodes656);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl11();
                        }));
                        
                        function renderControl11() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root769 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root769); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes656;
                            nodes656 = node.contents();
                            oldNodes.replaceWith(nodes656);
                          }));
                        }
                        renderControl11();
                        callback(root768); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes655;
                        nodes655 = node.contents();
                        oldNodes.replaceWith(nodes655);
                      }));
                      
                      
                    } else {
                      
                      var tmp2021 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp2020 = mobl.ref(true);
                      
                      
                      var tmp2022 = mobl.ref(null);
                      
                      var nodes657 = $("<span>");
                      node85.append(nodes657);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2021, tmp2022, tmp2020, function(_, callback) {
                        var root770 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes658 = $("<span>");
                        root770.append(nodes658);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl12();
                        }));
                        
                        function renderControl12() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root771 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root771); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes658;
                            nodes658 = node.contents();
                            oldNodes.replaceWith(nodes658);
                          }));
                        }
                        renderControl12();
                        callback(root770); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes657;
                        nodes657 = node.contents();
                        oldNodes.replaceWith(nodes657);
                      }));
                      
                      
                    }
                  };
                  renderCond31();
                  subs__.addSub(tmp2023.addEventListener('change', function() {
                    renderCond31();
                  }));
                  
                  
                  var oldNodes = iternode28;
                  iternode28 = iternode28.contents();
                  oldNodes.replaceWith(iternode28);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list28.addEventListener('change', function() { listSubs__.unsubscribe(); renderList28(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList28(true); }));
            });
          };
          renderList28();
          
          callback(root767); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes654;
          nodes654 = node.contents();
          oldNodes.replaceWith(nodes654);
        }));
        node80.append(node81);
        
        var node82 = $("<div>");
        node82.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node83 = $("<span>");
        node82.append(node83);
        var condSubs30 = new mobl.CompSubscription();
        subs__.addSub(condSubs30);
        var oldValue30;
        var renderCond30 = function() {
          var value41 = current.get();
          if(oldValue30 === value41) return;
          oldValue30 = value41;
          var subs__ = condSubs30;
          subs__.unsubscribe();
          node83.empty();
          if(value41) {
            var nodes652 = $("<span>");
            node83.append(nodes652);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl10();
            }));
            
            function renderControl10() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root765 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root765); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes652;
                nodes652 = node.contents();
                oldNodes.replaceWith(nodes652);
              }));
            }
            renderControl10();
            
            
          } else {
            
            var tmp2024 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp2026 = mobl.ref(null);
            
            
            var tmp2025 = mobl.ref(null);
            
            var nodes653 = $("<span>");
            node83.append(nodes653);
            subs__.addSub((mobl.label)(tmp2024, tmp2025, tmp2026, function(_, callback) {
              var root766 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root766); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes653;
              nodes653 = node.contents();
              oldNodes.replaceWith(nodes653);
            }));
            
            
          }
        };
        renderCond30();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond30();
        }));
        
        node80.append(node82);
        node79.append(node80);
        
        
        
        
        
        
      });
    } else {
      var nodes659 = $("<span>");
      node79.append(nodes659);
      subs__.addSub((ui.group)(function(_, callback) {
        var root772 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node86 = mobl.loadingSpan();
        root772.append(node86);
        var list29;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList29 = function() {
          var subs__ = listSubs__;
          list29 = items.get();
          list29.list(function(results682) {
            node86.empty();
            for(var i29 = 0; i29 < results682.length; i29++) {
              (function() {
                var iternode29 = $("<span>");
                node86.append(iternode29);
                var it;
                it = mobl.ref(mobl.ref(results682), i29);
                
                var tmp2010 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp2080 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp2012 = mobl.ref(false);
                
                
                var tmp2011 = mobl.ref(null);
                
                var nodes660 = $("<span>");
                iternode29.append(nodes660);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2010, tmp2011, tmp2012, function(_, callback) {
                  var root773 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes661 = $("<span>");
                  root773.append(nodes661);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl13();
                  }));
                  
                  function renderControl13() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root774 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root774); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes661;
                      nodes661 = node.contents();
                      oldNodes.replaceWith(nodes661);
                    }));
                  }
                  renderControl13();
                  callback(root773); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes660;
                  nodes660 = node.contents();
                  oldNodes.replaceWith(nodes660);
                }));
                
                var oldNodes = iternode29;
                iternode29 = iternode29.contents();
                oldNodes.replaceWith(iternode29);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list29.addEventListener('change', function() { listSubs__.unsubscribe(); renderList29(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList29(true); }));
          });
        };
        renderList29();
        
        callback(root772); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes659;
        nodes659 = node.contents();
        oldNodes.replaceWith(nodes659);
      }));
      
      
    }
  };
  renderCond29();
  subs__.addSub(tmp2065.addEventListener('change', function() {
    renderCond29();
  }));
  
  callback(root764); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root775 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2015 = mobl.ref("Detail");
  
  
  var tmp2016 = mobl.ref(null);
  
  var nodes662 = $("<span>");
  root775.append(nodes662);
  subs__.addSub((ui.header)(tmp2015, tmp2016, function(_, callback) {
    var root776 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp2014 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp2013 = mobl.ref("Back");
    
    var nodes663 = $("<span>");
    root776.append(nodes663);
    subs__.addSub((ui.backButton)(tmp2013, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2014, function(_, callback) {
      var root777 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root777); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes663;
      nodes663 = node.contents();
      oldNodes.replaceWith(nodes663);
    }));
    callback(root776); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes662;
    nodes662 = node.contents();
    oldNodes.replaceWith(nodes662);
  }));
  var nodes664 = $("<span>");
  root775.append(nodes664);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl14();
  }));
  
  function renderControl14() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root778 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root778); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes664;
      nodes664 = node.contents();
      oldNodes.replaceWith(nodes664);
    }));
  }
  renderControl14();
  callback(root775); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root779 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes665 = $("<span>");
  root779.append(nodes665);
  subs__.addSub((ui.group)(function(_, callback) {
    var root780 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node87 = mobl.loadingSpan();
    root780.append(node87);
    var list30;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList30 = function() {
      var subs__ = listSubs__;
      list30 = coll.get();
      list30.list(function(results683) {
        node87.empty();
        for(var i30 = 0; i30 < results683.length; i30++) {
          (function() {
            var iternode30 = $("<span>");
            node87.append(iternode30);
            var it;
            it = mobl.ref(mobl.ref(results683), i30);
            
            var tmp2033 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp2033.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp2033.set(it.get() == selected.get());
            }));
            
            
            var node88 = $("<span>");
            iternode30.append(node88);
            var condSubs32 = new mobl.CompSubscription();
            subs__.addSub(condSubs32);
            var oldValue32;
            var renderCond32 = function() {
              var value43 = tmp2033.get();
              if(oldValue32 === value43) return;
              oldValue32 = value43;
              var subs__ = condSubs32;
              subs__.unsubscribe();
              node88.empty();
              if(value43) {
                
                var tmp2029 = mobl.ref(false);
                
                
                var tmp2028 = mobl.ref(null);
                
                
                var tmp2027 = mobl.ref(null);
                
                var nodes666 = $("<span>");
                node88.append(nodes666);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2027, tmp2028, tmp2029, function(_, callback) {
                  var root781 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes667 = $("<span>");
                  root781.append(nodes667);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl15();
                  }));
                  
                  function renderControl15() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root782 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root782); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes667;
                      nodes667 = node.contents();
                      oldNodes.replaceWith(nodes667);
                    }));
                  }
                  renderControl15();
                  callback(root781); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes666;
                  nodes666 = node.contents();
                  oldNodes.replaceWith(nodes666);
                }));
                
                
              } else {
                
                var tmp2031 = mobl.ref(true);
                
                
                var tmp2030 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp2032 = mobl.ref(null);
                
                var nodes668 = $("<span>");
                node88.append(nodes668);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2030, tmp2032, tmp2031, function(_, callback) {
                  var root783 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes669 = $("<span>");
                  root783.append(nodes669);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl16();
                  }));
                  
                  function renderControl16() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root784 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root784); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes669;
                      nodes669 = node.contents();
                      oldNodes.replaceWith(nodes669);
                    }));
                  }
                  renderControl16();
                  callback(root783); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes668;
                  nodes668 = node.contents();
                  oldNodes.replaceWith(nodes668);
                }));
                
                
              }
            };
            renderCond32();
            subs__.addSub(tmp2033.addEventListener('change', function() {
              renderCond32();
            }));
            
            
            var oldNodes = iternode30;
            iternode30 = iternode30.contents();
            oldNodes.replaceWith(iternode30);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list30.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
      });
    };
    renderList30();
    
    callback(root780); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes665;
    nodes665 = node.contents();
    oldNodes.replaceWith(nodes665);
  }));
  callback(root779); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root785 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes670 = $("<span>");
    root785.append(nodes670);
    subs__.addSub((ui.group)(function(_, callback) {
      var root786 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp2037 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp2037.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp2037.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp2037.set(coll.get().limit(n.get()));
      }));
      
      
      var node89 = mobl.loadingSpan();
      root786.append(node89);
      var list31;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList31 = function() {
        var subs__ = listSubs__;
        list31 = tmp2037.get();
        list31.list(function(results684) {
          node89.empty();
          for(var i31 = 0; i31 < results684.length; i31++) {
            (function() {
              var iternode31 = $("<span>");
              node89.append(iternode31);
              var it;
              it = mobl.ref(mobl.ref(results684), i31);
              
              var tmp2034 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp2036 = mobl.ref(false);
              
              
              var tmp2035 = mobl.ref(null);
              
              var nodes671 = $("<span>");
              iternode31.append(nodes671);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2034, tmp2035, tmp2036, function(_, callback) {
                var root787 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes672 = $("<span>");
                root787.append(nodes672);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl17();
                }));
                
                function renderControl17() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root788 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root788); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes672;
                    nodes672 = node.contents();
                    oldNodes.replaceWith(nodes672);
                  }));
                }
                renderControl17();
                callback(root787); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes671;
                nodes671 = node.contents();
                oldNodes.replaceWith(nodes671);
              }));
              
              var oldNodes = iternode31;
              iternode31 = iternode31.contents();
              oldNodes.replaceWith(iternode31);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list31.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
          subs__.addSub(tmp2037.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
        });
      };
      renderList31();
      
      
      var tmp2040 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp2040.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp2040.set(n.get() < total.get());
      }));
      
      
      var node90 = $("<span>");
      root786.append(node90);
      var condSubs33 = new mobl.CompSubscription();
      subs__.addSub(condSubs33);
      var oldValue33;
      var renderCond33 = function() {
        var value44 = tmp2040.get();
        if(oldValue33 === value44) return;
        oldValue33 = value44;
        var subs__ = condSubs33;
        subs__.unsubscribe();
        node90.empty();
        if(value44) {
          
          var node91 = $("<li>");
          
          var ref48 = mobl.ref(ui.loadMoreStyle);
          if(ref48.get() !== null) {
            node91.attr('class', ref48.get());
            subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
              node91.attr('class', val);
            }));
            
          }
          subs__.addSub(ref48.rebind());
          
          var val32 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val32 !== null) {
            subs__.addSub(mobl.domBind(node91, 'tap', val32));
          }
          
          
          var tmp2039 = mobl.ref(null);
          
          
          var tmp2038 = mobl.ref(null);
          
          var nodes673 = $("<span>");
          node91.append(nodes673);
          subs__.addSub((mobl.label)(moreLabel, tmp2038, tmp2039, function(_, callback) {
            var root789 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root789); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes673;
            nodes673 = node.contents();
            oldNodes.replaceWith(nodes673);
          }));
          node90.append(node91);
          
          
          
        } else {
          
        }
      };
      renderCond33();
      subs__.addSub(tmp2040.addEventListener('change', function() {
        renderCond33();
      }));
      
      callback(root786); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes670;
      nodes670 = node.contents();
      oldNodes.replaceWith(nodes670);
    }));
    callback(root785); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root790 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes674 = $("<span>");
  root790.append(nodes674);
  subs__.addSub((ui.group)(function(_, callback) {
    var root791 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node92 = mobl.loadingSpan();
    root791.append(node92);
    var list32;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList32 = function() {
      var subs__ = listSubs__;
      list32 = items.get();
      list32.list(function(results685) {
        node92.empty();
        for(var i32 = 0; i32 < results685.length; i32++) {
          (function() {
            var iternode32 = $("<span>");
            node92.append(iternode32);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results685), i32), "_1");it = mobl.ref(mobl.ref(mobl.ref(results685), i32), "_2");
            
            var tmp2044 = mobl.ref(false);
            
            
            var tmp2043 = mobl.ref(null);
            
            
            var tmp2042 = mobl.ref(null);
            
            var nodes675 = $("<span>");
            iternode32.append(nodes675);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2042, tmp2043, tmp2044, function(_, callback) {
              var root792 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp2041 = mobl.ref(null);
              
              var nodes676 = $("<span>");
              root792.append(nodes676);
              subs__.addSub((ui.checkBox)(checked, it, tmp2041, function(_, callback) {
                var root793 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root793); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes676;
                nodes676 = node.contents();
                oldNodes.replaceWith(nodes676);
              }));
              callback(root792); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes675;
              nodes675 = node.contents();
              oldNodes.replaceWith(nodes675);
            }));
            
            var oldNodes = iternode32;
            iternode32 = iternode32.contents();
            oldNodes.replaceWith(iternode32);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list32.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
      });
    };
    renderList32();
    
    callback(root791); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes674;
    nodes674 = node.contents();
    oldNodes.replaceWith(nodes674);
  }));
  callback(root790); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root794 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll72) {
    coll72 = coll72.reverse();
    function processOne54() {
      var it;
      it = coll72.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll72.length > 0) processOne54(); else rest54();
      
    }
    function rest54() {
      
      var tmp2048 = mobl.ref(null);
      
      var nodes677 = $("<span>");
      root794.append(nodes677);
      subs__.addSub((ui.header)(title, tmp2048, function(_, callback) {
        var root795 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp2045 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp2046 = mobl.ref(mobl._("Back", []));
        
        var nodes678 = $("<span>");
        root795.append(nodes678);
        subs__.addSub((ui.backButton)(tmp2046, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2045, function(_, callback) {
          var root796 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root796); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes678;
          nodes678 = node.contents();
          oldNodes.replaceWith(nodes678);
        }));
        
        var tmp2047 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll71) {
                               coll71 = coll71.reverse();
                               function processOne53() {
                                 var checked;var it;
                                 var tmp2082 = coll71.pop();
                                 checked = tmp2082._1;it = tmp2082._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll71.length > 0) processOne53(); else rest53();
                                   
                                 } else {
                                   {
                                     
                                     if(coll71.length > 0) processOne53(); else rest53();
                                     
                                   }
                                 }
                               }
                               function rest53() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll71.length > 0) processOne53(); else rest53();
                             });
                             
                           });
        
        var nodes679 = $("<span>");
        root795.append(nodes679);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2047, function(_, callback) {
          var root797 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root797); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes679;
          nodes679 = node.contents();
          oldNodes.replaceWith(nodes679);
        }));
        callback(root795); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes677;
        nodes677 = node.contents();
        oldNodes.replaceWith(nodes677);
      }));
      var nodes680 = $("<span>");
      root794.append(nodes680);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root798 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root798); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes680;
        nodes680 = node.contents();
        oldNodes.replaceWith(nodes680);
      }));
      callback(root794); return subs__;
      
      
    }
    if(coll72.length > 0) processOne54(); else rest54();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root799 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp2050 = mobl.ref(null);
  
  
  var tmp2049 = mobl.ref(null);
  
  var nodes681 = $("<span>");
  root799.append(nodes681);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp2049, tmp2050, function(_, callback) {
    var root800 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root800); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes681;
    nodes681 = node.contents();
    oldNodes.replaceWith(nodes681);
  }));
  
  var tmp2051 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp2051.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp2051.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp2051.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp2051.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp2051.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes682 = $("<span>");
  root799.append(nodes682);
  subs__.addSub((ui.masterDetail)(tmp2051, masterItem, detailItem, function(_, callback) {
    var root801 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root801); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes682;
    nodes682 = node.contents();
    oldNodes.replaceWith(nodes682);
  }));
  callback(root799); return subs__;
  
  
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
  var root802 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp2064 = mobl.ref(null);
  
  
  var tmp2063 = mobl.ref(null);
  
  
  var tmp2062 = mobl.ref(null);
  
  var nodes683 = $("<span>");
  root802.append(nodes683);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp2062, tmp2063, tmp2064, function(_, callback) {
    var root803 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node93 = mobl.loadingSpan();
    root803.append(node93);
    var list33;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList33 = function() {
      var subs__ = listSubs__;
      list33 = sections.get();
      list33.list(function(results686) {
        node93.empty();
        for(var i33 = 0; i33 < results686.length; i33++) {
          (function() {
            var iternode33 = $("<span>");
            node93.append(iternode33);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results686), i33), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results686), i33), "_2");
            
            var tmp2055 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp2055.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp2055.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp2055.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp2055.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp2054 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp2057 = mobl.ref(null);
            
            
            var tmp2056 = mobl.ref(null);
            
            var nodes684 = $("<span>");
            iternode33.append(nodes684);
            subs__.addSub((mobl.span)(tmp2055, tmp2056, tmp2054, tmp2057, function(_, callback) {
              var root804 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp2053 = mobl.ref(null);
              
              
              var tmp2052 = mobl.ref(null);
              
              var nodes685 = $("<span>");
              root804.append(nodes685);
              subs__.addSub((mobl.label)(sectionName, tmp2052, tmp2053, function(_, callback) {
                var root805 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root805); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes685;
                nodes685 = node.contents();
                oldNodes.replaceWith(nodes685);
              }));
              callback(root804); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes684;
              nodes684 = node.contents();
              oldNodes.replaceWith(nodes684);
            }));
            
            var tmp2058 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp2058.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp2058.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp2058.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp2058.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp2061 = mobl.ref(null);
            
            
            var tmp2060 = mobl.ref(null);
            
            
            var tmp2059 = mobl.ref(null);
            
            var nodes686 = $("<span>");
            iternode33.append(nodes686);
            subs__.addSub((mobl.block)(tmp2058, tmp2059, tmp2060, tmp2061, function(_, callback) {
              var root806 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes687 = $("<span>");
              root806.append(nodes687);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl18();
              }));
              
              function renderControl18() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root807 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root807); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes687;
                  nodes687 = node.contents();
                  oldNodes.replaceWith(nodes687);
                }));
              }
              renderControl18();
              callback(root806); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes686;
              nodes686 = node.contents();
              oldNodes.replaceWith(nodes686);
            }));
            
            var oldNodes = iternode33;
            iternode33 = iternode33.contents();
            oldNodes.replaceWith(iternode33);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list33.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
      });
    };
    renderList33();
    
    callback(root803); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes683;
    nodes683 = node.contents();
    oldNodes.replaceWith(nodes683);
  }));
  callback(root802); return subs__;
  
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
  var root808 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node94 = $("<table>");
  
  var ref49 = mobl.ref(ui.tableStyle);
  if(ref49.get() !== null) {
    node94.attr('class', ref49.get());
    subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
      node94.attr('class', val);
    }));
    
  }
  subs__.addSub(ref49.rebind());
  
  var nodes688 = $("<span>");
  node94.append(nodes688);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl19();
  }));
  
  function renderControl19() {
    subs__.addSub((elements)(function(elements, callback) {
      var root809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root809); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes688;
      nodes688 = node.contents();
      oldNodes.replaceWith(nodes688);
    }));
  }
  renderControl19();
  root808.append(node94);
  callback(root808); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root810 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node95 = $("<tr>");
  
  var ref50 = mobl.ref(ui.trStyle);
  if(ref50.get() !== null) {
    node95.attr('class', ref50.get());
    subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
      node95.attr('class', val);
    }));
    
  }
  subs__.addSub(ref50.rebind());
  
  var nodes689 = $("<span>");
  node95.append(nodes689);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl20();
  }));
  
  function renderControl20() {
    subs__.addSub((elements)(function(elements, callback) {
      var root811 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root811); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes689;
      nodes689 = node.contents();
      oldNodes.replaceWith(nodes689);
    }));
  }
  renderControl20();
  root810.append(node95);
  callback(root810); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root812 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node96 = $("<td>");
  
  var ref51 = width;
  if(ref51.get() !== null) {
    node96.attr('width', ref51.get());
    subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
      node96.attr('width', val);
    }));
    
  }
  subs__.addSub(ref51.rebind());
  
  var ref52 = mobl.ref(ui.tdStyle);
  if(ref52.get() !== null) {
    node96.attr('class', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
      node96.attr('class', val);
    }));
    
  }
  subs__.addSub(ref52.rebind());
  
  var nodes690 = $("<span>");
  node96.append(nodes690);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((elements)(function(elements, callback) {
      var root813 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root813); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes690;
      nodes690 = node.contents();
      oldNodes.replaceWith(nodes690);
    }));
  }
  renderControl21();
  root812.append(node96);
  callback(root812); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root814 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node97 = $("<td>");
  
  var ref53 = width;
  if(ref53.get() !== null) {
    node97.attr('width', ref53.get());
    subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
      node97.attr('width', val);
    }));
    
  }
  subs__.addSub(ref53.rebind());
  
  var ref54 = mobl.ref(ui.tdStyle);
  if(ref54.get() !== null) {
    node97.attr('class', ref54.get());
    subs__.addSub(ref54.addEventListener('change', function(_, ref, val) {
      node97.attr('class', val);
    }));
    
  }
  subs__.addSub(ref54.rebind());
  
  var nodes691 = $("<span>");
  node97.append(nodes691);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl22();
  }));
  
  function renderControl22() {
    subs__.addSub((elements)(function(elements, callback) {
      var root815 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root815); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes691;
      nodes691 = node.contents();
      oldNodes.replaceWith(nodes691);
    }));
  }
  renderControl22();
  root814.append(node97);
  callback(root814); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root816 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node98 = $("<td>");
  
  var ref55 = width;
  if(ref55.get() !== null) {
    node98.attr('width', ref55.get());
    subs__.addSub(ref55.addEventListener('change', function(_, ref, val) {
      node98.attr('width', val);
    }));
    
  }
  subs__.addSub(ref55.rebind());
  
  var ref56 = mobl.ref(ui.tdStyle);
  if(ref56.get() !== null) {
    node98.attr('class', ref56.get());
    subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
      node98.attr('class', val);
    }));
    
  }
  subs__.addSub(ref56.rebind());
  
  
  var node99 = $("<strong>");
  
  var nodes692 = $("<span>");
  node99.append(nodes692);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl23();
  }));
  
  function renderControl23() {
    subs__.addSub((elements)(function(elements, callback) {
      var root817 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root817); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes692;
      nodes692 = node.contents();
      oldNodes.replaceWith(nodes692);
    }));
  }
  renderControl23();
  node98.append(node99);
  root816.append(node98);
  callback(root816); return subs__;
  
  
  
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
  var root818 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var slider = $("<div>");
  
  root818.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  callback(root818); return subs__;
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
