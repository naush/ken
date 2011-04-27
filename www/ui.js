mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root36078 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16446 = $("<span>");
  root36078.append(node16446);
  var condSubs2999 = new mobl.CompSubscription();
  subs__.addSub(condSubs2999);
  var oldValue2999;
  var renderCond2999 = function() {
    var value6793 = value.get();
    if(oldValue2999 === value6793) return;
    oldValue2999 = value6793;
    var subs__ = condSubs2999;
    subs__.unsubscribe();
    node16446.empty();
    if(value6793) {
      var nodes24651 = $("<span>");
      node16446.append(nodes24651);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl7450();
      }));
      
      function renderControl7450() {
        subs__.addSub((elements)(function(elements, callback) {
          var root36079 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root36079); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24651;
          nodes24651 = node.contents();
          oldNodes.replaceWith(nodes24651);
        }));
      }
      renderControl7450();
      
      
    } else {
      
      var tmp43790 = mobl.ref(null);
      
      
      var tmp43789 = mobl.ref(null);
      
      
      var tmp43788 = mobl.ref(null);
      
      var nodes24652 = $("<span>");
      node16446.append(nodes24652);
      subs__.addSub((mobl.block)(style, tmp43788, tmp43789, tmp43790, function(_, callback) {
        var root36080 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp43780 = mobl.ref(null);
        
        
        var tmp43779 = mobl.ref(null);
        
        var nodes24653 = $("<span>");
        root36080.append(nodes24653);
        subs__.addSub((mobl.label)(loadingMessage, tmp43779, tmp43780, function(_, callback) {
          var root36081 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root36081); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24653;
          nodes24653 = node.contents();
          oldNodes.replaceWith(nodes24653);
        }));
        
        var tmp43782 = mobl.ref("middle");
        
        
        var tmp43781 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp43787 = mobl.ref(null);
        
        
        var tmp43786 = mobl.ref(null);
        
        
        var tmp43785 = mobl.ref(null);
        
        
        var tmp43784 = mobl.ref(null);
        
        
        var tmp43783 = mobl.ref(null);
        
        var nodes24654 = $("<span>");
        root36080.append(nodes24654);
        subs__.addSub((ui.image)(tmp43781, tmp43783, tmp43784, tmp43785, tmp43786, tmp43782, tmp43787, function(_, callback) {
          var root36082 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root36082); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24654;
          nodes24654 = node.contents();
          oldNodes.replaceWith(nodes24654);
        }));
        callback(root36080); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes24652;
        nodes24652 = node.contents();
        oldNodes.replaceWith(nodes24652);
      }));
      
      
    }
  };
  renderCond2999();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond2999();
  }));
  
  callback(root36078); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root36083 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16447 = $("<div>");
  
  var ref17454 = mobl.ref(ui.headerStyle);
  if(ref17454.get() !== null) {
    node16447.attr('class', ref17454.get());
    subs__.addSub(ref17454.addEventListener('change', function(_, ref, val) {
      node16447.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17454.rebind());
  
  var val9626 = onclick.get();
  if(val9626 !== null) {
    subs__.addSub(mobl.domBind(node16447, 'tap', val9626));
  }
  
  
  var node16448 = $("<div>");
  
  var ref17453 = mobl.ref(ui.headerContainerStyle);
  if(ref17453.get() !== null) {
    node16448.attr('class', ref17453.get());
    subs__.addSub(ref17453.addEventListener('change', function(_, ref, val) {
      node16448.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17453.rebind());
  
  
  var node16449 = $("<div>");
  
  var ref17451 = text;
  node16449.text(""+ref17451.get());
  var ignore3501 = false;
  subs__.addSub(ref17451.addEventListener('change', function(_, ref, val) {
    if(ignore3501) return;
    node16449.text(""+val);
  }));
  subs__.addSub(ref17451.rebind());
  
  
  var ref17452 = mobl.ref(ui.headerTextStyle);
  if(ref17452.get() !== null) {
    node16449.attr('class', ref17452.get());
    subs__.addSub(ref17452.addEventListener('change', function(_, ref, val) {
      node16449.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17452.rebind());
  
  node16448.append(node16449);
  node16447.append(node16448);
  var nodes24655 = $("<span>");
  node16447.append(nodes24655);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7451();
  }));
  
  function renderControl7451() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36084); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24655;
      nodes24655 = node.contents();
      oldNodes.replaceWith(nodes24655);
    }));
  }
  renderControl7451();
  root36083.append(node16447);
  callback(root36083); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root36085 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref17455 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref17455.get() !== null) {
    sp.attr('class', ref17455.get());
    subs__.addSub(ref17455.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref17455.rebind());
  
  var val9627 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val9627 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val9627));
  }
  
  var val9628 = function(event, callback) {
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
  if(val9628 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val9628));
  }
  
  var val9629 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after3164(result__) {
                    var tmp43880 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after3164);if(result__ !== undefined) after3164(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val9629 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val9629));
  }
  
  var val9630 = function(event, callback) {
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
  if(val9630 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val9630));
  }
  
  var ref17456 = text;
  sp.text(""+ref17456.get());
  var ignore3502 = false;
  subs__.addSub(ref17456.addEventListener('change', function(_, ref, val) {
    if(ignore3502) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref17456.rebind());
  
  
  root36085.append(sp);
  callback(root36085); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root36086 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24656 = $("<span>");
  root36086.append(nodes24656);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root36087 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36087); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24656;
    nodes24656 = node.contents();
    oldNodes.replaceWith(nodes24656);
  }));
  callback(root36086); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root36088 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24657 = $("<span>");
  root36088.append(nodes24657);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root36089 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36089); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24657;
    nodes24657 = node.contents();
    oldNodes.replaceWith(nodes24657);
  }));
  callback(root36088); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root36090 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16450 = $("<ul>");
  
  var ref17457 = mobl.ref(ui.groupStyle);
  if(ref17457.get() !== null) {
    node16450.attr('class', ref17457.get());
    subs__.addSub(ref17457.addEventListener('change', function(_, ref, val) {
      node16450.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17457.rebind());
  
  var nodes24658 = $("<span>");
  node16450.append(nodes24658);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7452();
  }));
  
  function renderControl7452() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36091 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36091); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24658;
      nodes24658 = node.contents();
      oldNodes.replaceWith(nodes24658);
    }));
  }
  renderControl7452();
  root36090.append(node16450);
  callback(root36090); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root36092 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16451 = $("<img>");
  
  var ref17458 = url;
  if(ref17458.get() !== null) {
    node16451.attr('src', ref17458.get());
    subs__.addSub(ref17458.addEventListener('change', function(_, ref, val) {
      node16451.attr('src', val);
    }));
    
  }
  subs__.addSub(ref17458.rebind());
  
  var ref17459 = width;
  if(ref17459.get() !== null) {
    node16451.attr('width', ref17459.get());
    subs__.addSub(ref17459.addEventListener('change', function(_, ref, val) {
      node16451.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17459.rebind());
  
  var ref17460 = height;
  if(ref17460.get() !== null) {
    node16451.attr('height', ref17460.get());
    subs__.addSub(ref17460.addEventListener('change', function(_, ref, val) {
      node16451.attr('height', val);
    }));
    
  }
  subs__.addSub(ref17460.rebind());
  
  var ref17461 = style;
  if(ref17461.get() !== null) {
    node16451.attr('class', ref17461.get());
    subs__.addSub(ref17461.addEventListener('change', function(_, ref, val) {
      node16451.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17461.rebind());
  
  var val9631 = onclick.get();
  if(val9631 !== null) {
    subs__.addSub(mobl.domBind(node16451, 'tap', val9631));
  }
  
  var ref17462 = valign;
  if(ref17462.get() !== null) {
    node16451.attr('valign', ref17462.get());
    subs__.addSub(ref17462.addEventListener('change', function(_, ref, val) {
      node16451.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref17462.rebind());
  
  var ref17463 = align;
  if(ref17463.get() !== null) {
    node16451.attr('align', ref17463.get());
    subs__.addSub(ref17463.addEventListener('change', function(_, ref, val) {
      node16451.attr('align', val);
    }));
    
  }
  subs__.addSub(ref17463.rebind());
  
  root36092.append(node16451);
  callback(root36092); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root36093 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref17464 = mobl.ref(ui.itemStyle);
  if(ref17464.get() !== null) {
    el.attr('class', ref17464.get());
    subs__.addSub(ref17464.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17464.rebind());
  
  var ref17465 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref17465.get() !== null) {
    el.attr('class', ref17465.get());
    subs__.addSub(ref17465.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref17465.rebind());
  
  var val9632 = onswipe.get();
  if(val9632 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val9632));
  }
  
  var val9633 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp43881 = result__;
                                           function after3165(result__) {
                                             var tmp43882 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after3165);if(result__ !== undefined) after3165(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp43883 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val9633 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val9633));
  }
  
  var nodes24659 = $("<span>");
  el.append(nodes24659);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7453();
  }));
  
  function renderControl7453() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36094 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36094); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24659;
      nodes24659 = node.contents();
      oldNodes.replaceWith(nodes24659);
    }));
  }
  renderControl7453();
  root36093.append(el);
  callback(root36093); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root36095 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16452 = $("<input>");
  node16452.attr('type', "checkbox");
  
  var ref17467 = b;
  node16452.attr('checked', !!ref17467.get());
  subs__.addSub(ref17467.addEventListener('change', function(_, ref, val) {
    if(ref === ref17467) node16452.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node16452, 'change', function() {
    b.set(!!node16452.attr('checked'));
  }));
  
  var val9635 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val9635 !== null) {
    subs__.addSub(mobl.domBind(node16452, 'tap', val9635));
  }
  
  var val9636 = onchange.get();
  if(val9636 !== null) {
    subs__.addSub(mobl.domBind(node16452, 'change', val9636));
  }
  
  root36095.append(node16452);
  
  root36095.append(" ");
  
  var node16453 = $("<span>");
  
  var ref17466 = label;
  node16453.text(""+ref17466.get());
  var ignore3503 = false;
  subs__.addSub(ref17466.addEventListener('change', function(_, ref, val) {
    if(ignore3503) return;
    node16453.text(""+val);
  }));
  subs__.addSub(ref17466.rebind());
  
  
  var val9634 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after3166(result__) {
                    var tmp43884 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after3166);if(result__ !== undefined) after3166(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val9634 !== null) {
    subs__.addSub(mobl.domBind(node16453, 'tap', val9634));
  }
  
  root36095.append(node16453);
  callback(root36095); return subs__;
  
  
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
  var root36096 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16454 = $("<span>");
  root36096.append(node16454);
  var condSubs3000 = new mobl.CompSubscription();
  subs__.addSub(condSubs3000);
  var oldValue3000;
  var renderCond3000 = function() {
    var value6794 = label.get();
    if(oldValue3000 === value6794) return;
    oldValue3000 = value6794;
    var subs__ = condSubs3000;
    subs__.unsubscribe();
    node16454.empty();
    if(value6794) {
      
      var tmp43791 = mobl.ref(null);
      
      var nodes24660 = $("<span>");
      node16454.append(nodes24660);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp43791, function(_, callback) {
        var root36097 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36097); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24660;
        nodes24660 = node.contents();
        oldNodes.replaceWith(nodes24660);
      }));
      
      
    } else {
      
    }
  };
  renderCond3000();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond3000();
  }));
  
  
  var node16455 = $("<span>");
  root36096.append(node16455);
  var condSubs3001 = new mobl.CompSubscription();
  subs__.addSub(condSubs3001);
  var oldValue3001;
  var renderCond3001 = function() {
    var value6795 = validator.get();
    if(oldValue3001 === value6795) return;
    oldValue3001 = value6795;
    var subs__ = condSubs3001;
    subs__.unsubscribe();
    node16455.empty();
    if(value6795) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after3170(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp43885 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node16456 = $("<input>");
        node16456.attr('type', "text");
        
        var ref17468 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref17468.get() !== null) {
          node16456.attr('class', ref17468.get());
          subs__.addSub(ref17468.addEventListener('change', function(_, ref, val) {
            node16456.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node16456.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node16456.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node16456.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref17468.rebind());
        
        var ref17469 = placeholder;
        if(ref17469.get() !== null) {
          node16456.attr('placeholder', ref17469.get());
          subs__.addSub(ref17469.addEventListener('change', function(_, ref, val) {
            node16456.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref17469.rebind());
        
        var ref17470 = temp;
        node16456.val(""+ref17470.get());
        var ignore3504 = false;
        subs__.addSub(ref17470.addEventListener('change', function(_, ref, val) {
          if(ignore3504) return;
          node16456.val(""+val);
        }));
        subs__.addSub(ref17470.rebind());
        
        subs__.addSub(mobl.domBind(node16456, 'keyup change', function() {
          ignore3504 = true;
          temp.set(mobl.stringTomobl__String(node16456.val()));
          ignore3504 = false;
        }));
        
        
        var val9637 = onchange.get();
        if(val9637 !== null) {
          subs__.addSub(mobl.domBind(node16456, 'change', val9637));
        }
        
        var val9638 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3167(result__) {
                          var tmp43886 = result__;
                          function after3168(result__) {
                            var tmp43887 = result__;
                            var result__ = tmp43887;
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
                          var result__ = validator.get()(temp.get(), after3168);if(result__ !== undefined) after3168(result__);
                        }
                        var result__ = onkeyup.get()(event, after3167);if(result__ !== undefined) after3167(result__);
                      } else {
                        {
                          function after3169(result__) {
                            var tmp43887 = result__;
                            var result__ = tmp43887;
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
                          var result__ = validator.get()(temp.get(), after3169);if(result__ !== undefined) after3169(result__);
                        }
                      }
                    };
        if(val9638 !== null) {
          subs__.addSub(mobl.domBind(node16456, 'keyup', val9638));
        }
        
        var val9639 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val9639 !== null) {
          subs__.addSub(mobl.domBind(node16456, 'blur', val9639));
        }
        
        node16455.append(node16456);
        
        var tmp43792 = mobl.ref(null);
        
        var nodes24661 = $("<span>");
        node16455.append(nodes24661);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp43792, function(_, callback) {
          var root36098 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root36098); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24661;
          nodes24661 = node.contents();
          oldNodes.replaceWith(nodes24661);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after3170);if(result__ !== undefined) after3170(result__);
    } else {
      
      var node16457 = $("<input>");
      node16457.attr('type', "text");
      
      var ref17471 = style;
      if(ref17471.get() !== null) {
        node16457.attr('class', ref17471.get());
        subs__.addSub(ref17471.addEventListener('change', function(_, ref, val) {
          node16457.attr('class', val);
        }));
        
      }
      subs__.addSub(ref17471.rebind());
      
      var ref17472 = placeholder;
      if(ref17472.get() !== null) {
        node16457.attr('placeholder', ref17472.get());
        subs__.addSub(ref17472.addEventListener('change', function(_, ref, val) {
          node16457.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref17472.rebind());
      
      var ref17473 = s;
      node16457.val(""+ref17473.get());
      var ignore3505 = false;
      subs__.addSub(ref17473.addEventListener('change', function(_, ref, val) {
        if(ignore3505) return;
        node16457.val(""+val);
      }));
      subs__.addSub(ref17473.rebind());
      
      subs__.addSub(mobl.domBind(node16457, 'keyup change', function() {
        ignore3505 = true;
        s.set(mobl.stringTomobl__String(node16457.val()));
        ignore3505 = false;
      }));
      
      
      var val9640 = onchange.get();
      if(val9640 !== null) {
        subs__.addSub(mobl.domBind(node16457, 'change', val9640));
      }
      
      var val9641 = onkeyup.get();
      if(val9641 !== null) {
        subs__.addSub(mobl.domBind(node16457, 'keyup', val9641));
      }
      
      var val9642 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val9642 !== null) {
        subs__.addSub(mobl.domBind(node16457, 'blur', val9642));
      }
      
      node16455.append(node16457);
      
      
    }
  };
  renderCond3001();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond3001();
  }));
  
  callback(root36096); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root36099 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24662 = $("<span>");
  root36099.append(nodes24662);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root36100 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36100); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24662;
    nodes24662 = node.contents();
    oldNodes.replaceWith(nodes24662);
  }));
  callback(root36099); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root36101 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after3171(result__) {
      var tmp43888 = result__;
      var result__ = tmp43888;
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
    var result__ = validator.get()(n2, after3171);if(result__ !== undefined) after3171(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes24663 = $("<span>");
  root36101.append(nodes24663);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root36102 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36102); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24663;
    nodes24663 = node.contents();
    oldNodes.replaceWith(nodes24663);
  }));
  callback(root36101); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root36103 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16458 = $("<span>");
  root36103.append(node16458);
  var condSubs3002 = new mobl.CompSubscription();
  subs__.addSub(condSubs3002);
  var oldValue3002;
  var renderCond3002 = function() {
    var value6796 = label.get();
    if(oldValue3002 === value6796) return;
    oldValue3002 = value6796;
    var subs__ = condSubs3002;
    subs__.unsubscribe();
    node16458.empty();
    if(value6796) {
      
      var node16459 = $("<span>");
      node16459.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref17477 = label;
      node16459.text(""+ref17477.get());
      var ignore3507 = false;
      subs__.addSub(ref17477.addEventListener('change', function(_, ref, val) {
        if(ignore3507) return;
        node16459.text(""+val);
      }));
      subs__.addSub(ref17477.rebind());
      
      
      node16458.append(node16459);
      
      var node16460 = $("<span>");
      node16460.attr('style', "float: left");
      
      
      var node16461 = $("<input>");
      node16461.attr('type', "password");
      
      var ref17474 = style;
      if(ref17474.get() !== null) {
        node16461.attr('class', ref17474.get());
        subs__.addSub(ref17474.addEventListener('change', function(_, ref, val) {
          node16461.attr('class', val);
        }));
        
      }
      subs__.addSub(ref17474.rebind());
      
      var ref17475 = placeholder;
      if(ref17475.get() !== null) {
        node16461.attr('placeholder', ref17475.get());
        subs__.addSub(ref17475.addEventListener('change', function(_, ref, val) {
          node16461.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref17475.rebind());
      
      var ref17476 = s;
      node16461.val(""+ref17476.get());
      var ignore3506 = false;
      subs__.addSub(ref17476.addEventListener('change', function(_, ref, val) {
        if(ignore3506) return;
        node16461.val(""+val);
      }));
      subs__.addSub(ref17476.rebind());
      
      subs__.addSub(mobl.domBind(node16461, 'keyup change', function() {
        ignore3506 = true;
        s.set(mobl.stringTomobl__String(node16461.val()));
        ignore3506 = false;
      }));
      
      
      var val9643 = onchange.get();
      if(val9643 !== null) {
        subs__.addSub(mobl.domBind(node16461, 'change', val9643));
      }
      
      var val9644 = onkeyup.get();
      if(val9644 !== null) {
        subs__.addSub(mobl.domBind(node16461, 'keyup', val9644));
      }
      
      var val9645 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val9645 !== null) {
        subs__.addSub(mobl.domBind(node16461, 'blur', val9645));
      }
      
      node16460.append(node16461);
      node16458.append(node16460);
      
      
      
      
    } else {
      
      var node16462 = $("<input>");
      node16462.attr('type', "password");
      
      var ref17478 = style;
      if(ref17478.get() !== null) {
        node16462.attr('class', ref17478.get());
        subs__.addSub(ref17478.addEventListener('change', function(_, ref, val) {
          node16462.attr('class', val);
        }));
        
      }
      subs__.addSub(ref17478.rebind());
      
      var ref17479 = placeholder;
      if(ref17479.get() !== null) {
        node16462.attr('placeholder', ref17479.get());
        subs__.addSub(ref17479.addEventListener('change', function(_, ref, val) {
          node16462.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref17479.rebind());
      
      var ref17480 = s;
      node16462.val(""+ref17480.get());
      var ignore3508 = false;
      subs__.addSub(ref17480.addEventListener('change', function(_, ref, val) {
        if(ignore3508) return;
        node16462.val(""+val);
      }));
      subs__.addSub(ref17480.rebind());
      
      subs__.addSub(mobl.domBind(node16462, 'keyup change', function() {
        ignore3508 = true;
        s.set(mobl.stringTomobl__String(node16462.val()));
        ignore3508 = false;
      }));
      
      
      var val9646 = onchange.get();
      if(val9646 !== null) {
        subs__.addSub(mobl.domBind(node16462, 'change', val9646));
      }
      
      var val9647 = onkeyup.get();
      if(val9647 !== null) {
        subs__.addSub(mobl.domBind(node16462, 'keyup', val9647));
      }
      
      var val9648 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val9648 !== null) {
        subs__.addSub(mobl.domBind(node16462, 'blur', val9648));
      }
      
      node16458.append(node16462);
      
      
    }
  };
  renderCond3002();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond3002();
  }));
  
  callback(root36103); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root36104 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref17485 = style;
  if(ref17485.get() !== null) {
    sel.attr('class', ref17485.get());
    subs__.addSub(ref17485.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17485.rebind());
  
  var val9649 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after3172(result__) {
                    var tmp43890 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after3172);if(result__ !== undefined) after3172(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val9649 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val9649));
  }
  
  
  var node16463 = mobl.loadingSpan();
  sel.append(node16463);
  var list3707;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList3707 = function() {
    var subs__ = listSubs__;
    list3707 = options.get();
    list3707.list(function(results3912) {
      node16463.empty();
      for(var i3707 = 0; i3707 < results3912.length; i3707++) {
        (function() {
          var iternode3707 = $("<span>");
          node16463.append(iternode3707);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results3912), i3707), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results3912), i3707), "_2");
          
          var node16464 = $("<option>");
          
          var ref17481 = optionDescription;
          node16464.text(""+ref17481.get());
          var ignore3509 = false;
          subs__.addSub(ref17481.addEventListener('change', function(_, ref, val) {
            if(ignore3509) return;
            node16464.text(""+val);
          }));
          subs__.addSub(ref17481.rebind());
          
          
          var ref17482 = optionStyle;
          if(ref17482.get() !== null) {
            node16464.attr('class', ref17482.get());
            subs__.addSub(ref17482.addEventListener('change', function(_, ref, val) {
              node16464.attr('class', val);
            }));
            
          }
          subs__.addSub(ref17482.rebind());
          
          var ref17483 = optionValue;
          if(ref17483.get() !== null) {
            node16464.attr('value', ref17483.get());
            subs__.addSub(ref17483.addEventListener('change', function(_, ref, val) {
              node16464.attr('value', val);
            }));
            
          }
          subs__.addSub(ref17483.rebind());
          
          var ref17484 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref17484.get() !== null) {
            node16464.attr('selected', ref17484.get());
            subs__.addSub(ref17484.addEventListener('change', function(_, ref, val) {
              node16464.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node16464.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node16464.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref17484.rebind());
          
          iternode3707.append(node16464);
          
          var oldNodes = iternode3707;
          iternode3707 = iternode3707.contents();
          oldNodes.replaceWith(iternode3707);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list3707.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3707(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3707(true); }));
    });
  };
  renderList3707();
  
  root36104.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root36104); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root36105 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp43801 = mobl.ref(null);
  
  
  var tmp43800 = mobl.ref(null);
  
  
  var tmp43799 = mobl.ref(null);
  
  var nodes24664 = $("<span>");
  root36105.append(nodes24664);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp43799, tmp43800, tmp43801, function(_, callback) {
    var root36106 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16465 = mobl.loadingSpan();
    root36106.append(node16465);
    var list3708;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3708 = function() {
      var subs__ = listSubs__;
      list3708 = tabs.get();
      list3708.list(function(results3913) {
        node16465.empty();
        for(var i3708 = 0; i3708 < results3913.length; i3708++) {
          (function() {
            var iternode3708 = $("<span>");
            node16465.append(iternode3708);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results3913), i3708), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3913), i3708), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3913), i3708), "_3");
            
            var tmp43796 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp43796.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp43796.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp43796.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp43796.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp43795 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp43798 = mobl.ref(null);
            
            
            var tmp43797 = mobl.ref(null);
            
            var nodes24665 = $("<span>");
            iternode3708.append(nodes24665);
            subs__.addSub((mobl.span)(tmp43796, tmp43797, tmp43795, tmp43798, function(_, callback) {
              var root36107 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp43794 = mobl.ref(null);
              
              
              var tmp43793 = mobl.ref(null);
              
              var nodes24666 = $("<span>");
              root36107.append(nodes24666);
              subs__.addSub((mobl.label)(tabName, tmp43793, tmp43794, function(_, callback) {
                var root36108 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root36108); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24666;
                nodes24666 = node.contents();
                oldNodes.replaceWith(nodes24666);
              }));
              callback(root36107); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24665;
              nodes24665 = node.contents();
              oldNodes.replaceWith(nodes24665);
            }));
            
            var oldNodes = iternode3708;
            iternode3708 = iternode3708.contents();
            oldNodes.replaceWith(iternode3708);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3708.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3708(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3708(true); }));
      });
    };
    renderList3708();
    
    callback(root36106); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24664;
    nodes24664 = node.contents();
    oldNodes.replaceWith(nodes24664);
  }));
  
  var node16466 = mobl.loadingSpan();
  root36105.append(node16466);
  var list3709;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList3709 = function() {
    var subs__ = listSubs__;
    list3709 = tabs.get();
    list3709.list(function(results3914) {
      node16466.empty();
      for(var i3709 = 0; i3709 < results3914.length; i3709++) {
        (function() {
          var iternode3709 = $("<span>");
          node16466.append(iternode3709);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results3914), i3709), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3914), i3709), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3914), i3709), "_3");
          
          var tmp43802 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp43802.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp43802.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp43802.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp43802.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp43805 = mobl.ref(null);
          
          
          var tmp43804 = mobl.ref(null);
          
          
          var tmp43803 = mobl.ref(null);
          
          var nodes24667 = $("<span>");
          iternode3709.append(nodes24667);
          subs__.addSub((mobl.block)(tmp43802, tmp43803, tmp43804, tmp43805, function(_, callback) {
            var root36109 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes24668 = $("<span>");
            root36109.append(nodes24668);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root36110 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes24669 = $("<span>");
              root36110.append(nodes24669);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl7454();
              }));
              
              function renderControl7454() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root36111 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root36111); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24669;
                  nodes24669 = node.contents();
                  oldNodes.replaceWith(nodes24669);
                }));
              }
              renderControl7454();
              callback(root36110); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24668;
              nodes24668 = node.contents();
              oldNodes.replaceWith(nodes24668);
            }));
            callback(root36109); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes24667;
            nodes24667 = node.contents();
            oldNodes.replaceWith(nodes24667);
          }));
          
          var oldNodes = iternode3709;
          iternode3709 = iternode3709.contents();
          oldNodes.replaceWith(iternode3709);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list3709.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3709(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3709(true); }));
    });
  };
  renderList3709();
  
  callback(root36105); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root36112 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16467 = $("<div>");
  
  var ref17489 = mobl.ref(ui.searchboxStyle);
  if(ref17489.get() !== null) {
    node16467.attr('class', ref17489.get());
    subs__.addSub(ref17489.addEventListener('change', function(_, ref, val) {
      node16467.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17489.rebind());
  
  
  var node16468 = $("<input>");
  node16468.attr('type', "search");
  
  var ref17486 = mobl.ref(ui.searchBoxInputStyle);
  if(ref17486.get() !== null) {
    node16468.attr('class', ref17486.get());
    subs__.addSub(ref17486.addEventListener('change', function(_, ref, val) {
      node16468.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17486.rebind());
  
  var ref17487 = placeholder;
  if(ref17487.get() !== null) {
    node16468.attr('placeholder', ref17487.get());
    subs__.addSub(ref17487.addEventListener('change', function(_, ref, val) {
      node16468.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref17487.rebind());
  
  var ref17488 = s;
  node16468.val(""+ref17488.get());
  var ignore3510 = false;
  subs__.addSub(ref17488.addEventListener('change', function(_, ref, val) {
    if(ignore3510) return;
    node16468.val(""+val);
  }));
  subs__.addSub(ref17488.rebind());
  
  subs__.addSub(mobl.domBind(node16468, 'keyup change', function() {
    ignore3510 = true;
    s.set(mobl.stringTomobl__String(node16468.val()));
    ignore3510 = false;
  }));
  
  
  var val9650 = onsearch.get();
  if(val9650 !== null) {
    subs__.addSub(mobl.domBind(node16468, 'change', val9650));
  }
  
  var val9651 = onkeyup.get();
  if(val9651 !== null) {
    subs__.addSub(mobl.domBind(node16468, 'keyup', val9651));
  }
  node16468.attr('autocorrect', false);
  node16468.attr('autocapitalize', false);
  node16468.attr('autocomplete', false);
  
  node16467.append(node16468);
  root36112.append(node16467);
  callback(root36112); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root36113 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref17490 = mobl.ref(ui.contextMenuStyle);
  if(ref17490.get() !== null) {
    menu.attr('class', ref17490.get());
    subs__.addSub(ref17490.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17490.rebind());
  
  var nodes24670 = $("<span>");
  menu.append(nodes24670);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7455();
  }));
  
  function renderControl7455() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36114 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36114); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24670;
      nodes24670 = node.contents();
      oldNodes.replaceWith(nodes24670);
    }));
  }
  renderControl7455();
  root36113.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val9652 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp43893 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val9652 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val9652));
  }
  
  root36113.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root36113); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root36115 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp43879 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp43879.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node16469 = $("<span>");
  root36115.append(node16469);
  var condSubs3003 = new mobl.CompSubscription();
  subs__.addSub(condSubs3003);
  var oldValue3003;
  var renderCond3003 = function() {
    var value6797 = tmp43879.get();
    if(oldValue3003 === value6797) return;
    oldValue3003 = value6797;
    var subs__ = condSubs3003;
    subs__.unsubscribe();
    node16469.empty();
    if(value6797) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node16470 = $("<div>");
        node16470.attr('width', "100%");
        
        
        var node16471 = $("<div>");
        node16471.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes24673 = $("<span>");
        node16471.append(nodes24673);
        subs__.addSub((ui.group)(function(_, callback) {
          var root36118 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node16474 = mobl.loadingSpan();
          root36118.append(node16474);
          var list3710;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList3710 = function() {
            var subs__ = listSubs__;
            list3710 = items.get();
            list3710.list(function(results3915) {
              node16474.empty();
              for(var i3710 = 0; i3710 < results3915.length; i3710++) {
                (function() {
                  var iternode3710 = $("<span>");
                  node16474.append(iternode3710);
                  var it;
                  it = mobl.ref(mobl.ref(results3915), i3710);
                  
                  var tmp43819 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp43819.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp43819.set(it.get() == current.get());
                  }));
                  
                  
                  var node16475 = $("<span>");
                  iternode3710.append(node16475);
                  var condSubs3005 = new mobl.CompSubscription();
                  subs__.addSub(condSubs3005);
                  var oldValue3005;
                  var renderCond3005 = function() {
                    var value6799 = tmp43819.get();
                    if(oldValue3005 === value6799) return;
                    oldValue3005 = value6799;
                    var subs__ = condSubs3005;
                    subs__.unsubscribe();
                    node16475.empty();
                    if(value6799) {
                      
                      var tmp43815 = mobl.ref(false);
                      
                      
                      var tmp43814 = mobl.ref(null);
                      
                      
                      var tmp43813 = mobl.ref(null);
                      
                      var nodes24674 = $("<span>");
                      node16475.append(nodes24674);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp43813, tmp43814, tmp43815, function(_, callback) {
                        var root36119 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes24675 = $("<span>");
                        root36119.append(nodes24675);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl7457();
                        }));
                        
                        function renderControl7457() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root36120 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root36120); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes24675;
                            nodes24675 = node.contents();
                            oldNodes.replaceWith(nodes24675);
                          }));
                        }
                        renderControl7457();
                        callback(root36119); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes24674;
                        nodes24674 = node.contents();
                        oldNodes.replaceWith(nodes24674);
                      }));
                      
                      
                    } else {
                      
                      var tmp43817 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp43816 = mobl.ref(true);
                      
                      
                      var tmp43818 = mobl.ref(null);
                      
                      var nodes24676 = $("<span>");
                      node16475.append(nodes24676);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43817, tmp43818, tmp43816, function(_, callback) {
                        var root36121 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes24677 = $("<span>");
                        root36121.append(nodes24677);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl7458();
                        }));
                        
                        function renderControl7458() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root36122 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root36122); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes24677;
                            nodes24677 = node.contents();
                            oldNodes.replaceWith(nodes24677);
                          }));
                        }
                        renderControl7458();
                        callback(root36121); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes24676;
                        nodes24676 = node.contents();
                        oldNodes.replaceWith(nodes24676);
                      }));
                      
                      
                    }
                  };
                  renderCond3005();
                  subs__.addSub(tmp43819.addEventListener('change', function() {
                    renderCond3005();
                  }));
                  
                  
                  var oldNodes = iternode3710;
                  iternode3710 = iternode3710.contents();
                  oldNodes.replaceWith(iternode3710);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list3710.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3710(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3710(true); }));
            });
          };
          renderList3710();
          
          callback(root36118); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes24673;
          nodes24673 = node.contents();
          oldNodes.replaceWith(nodes24673);
        }));
        node16470.append(node16471);
        
        var node16472 = $("<div>");
        node16472.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node16473 = $("<span>");
        node16472.append(node16473);
        var condSubs3004 = new mobl.CompSubscription();
        subs__.addSub(condSubs3004);
        var oldValue3004;
        var renderCond3004 = function() {
          var value6798 = current.get();
          if(oldValue3004 === value6798) return;
          oldValue3004 = value6798;
          var subs__ = condSubs3004;
          subs__.unsubscribe();
          node16473.empty();
          if(value6798) {
            var nodes24671 = $("<span>");
            node16473.append(nodes24671);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl7456();
            }));
            
            function renderControl7456() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root36116 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root36116); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24671;
                nodes24671 = node.contents();
                oldNodes.replaceWith(nodes24671);
              }));
            }
            renderControl7456();
            
            
          } else {
            
            var tmp43820 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp43822 = mobl.ref(null);
            
            
            var tmp43821 = mobl.ref(null);
            
            var nodes24672 = $("<span>");
            node16473.append(nodes24672);
            subs__.addSub((mobl.label)(tmp43820, tmp43821, tmp43822, function(_, callback) {
              var root36117 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root36117); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes24672;
              nodes24672 = node.contents();
              oldNodes.replaceWith(nodes24672);
            }));
            
            
          }
        };
        renderCond3004();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond3004();
        }));
        
        node16470.append(node16472);
        node16469.append(node16470);
        
        
        
        
        
        
      });
    } else {
      var nodes24678 = $("<span>");
      node16469.append(nodes24678);
      subs__.addSub((ui.group)(function(_, callback) {
        var root36123 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node16476 = mobl.loadingSpan();
        root36123.append(node16476);
        var list3711;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList3711 = function() {
          var subs__ = listSubs__;
          list3711 = items.get();
          list3711.list(function(results3916) {
            node16476.empty();
            for(var i3711 = 0; i3711 < results3916.length; i3711++) {
              (function() {
                var iternode3711 = $("<span>");
                node16476.append(iternode3711);
                var it;
                it = mobl.ref(mobl.ref(results3916), i3711);
                
                var tmp43806 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp43894 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp43808 = mobl.ref(false);
                
                
                var tmp43807 = mobl.ref(null);
                
                var nodes24679 = $("<span>");
                iternode3711.append(nodes24679);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43806, tmp43807, tmp43808, function(_, callback) {
                  var root36124 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes24680 = $("<span>");
                  root36124.append(nodes24680);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl7459();
                  }));
                  
                  function renderControl7459() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root36125 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root36125); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes24680;
                      nodes24680 = node.contents();
                      oldNodes.replaceWith(nodes24680);
                    }));
                  }
                  renderControl7459();
                  callback(root36124); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24679;
                  nodes24679 = node.contents();
                  oldNodes.replaceWith(nodes24679);
                }));
                
                var oldNodes = iternode3711;
                iternode3711 = iternode3711.contents();
                oldNodes.replaceWith(iternode3711);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list3711.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3711(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3711(true); }));
          });
        };
        renderList3711();
        
        callback(root36123); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes24678;
        nodes24678 = node.contents();
        oldNodes.replaceWith(nodes24678);
      }));
      
      
    }
  };
  renderCond3003();
  subs__.addSub(tmp43879.addEventListener('change', function() {
    renderCond3003();
  }));
  
  callback(root36115); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root36126 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp43811 = mobl.ref("Detail");
  
  
  var tmp43812 = mobl.ref(null);
  
  var nodes24681 = $("<span>");
  root36126.append(nodes24681);
  subs__.addSub((ui.header)(tmp43811, tmp43812, function(_, callback) {
    var root36127 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp43810 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp43809 = mobl.ref("Back");
    
    var nodes24682 = $("<span>");
    root36127.append(nodes24682);
    subs__.addSub((ui.backButton)(tmp43809, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp43810, function(_, callback) {
      var root36128 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36128); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24682;
      nodes24682 = node.contents();
      oldNodes.replaceWith(nodes24682);
    }));
    callback(root36127); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24681;
    nodes24681 = node.contents();
    oldNodes.replaceWith(nodes24681);
  }));
  var nodes24683 = $("<span>");
  root36126.append(nodes24683);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl7460();
  }));
  
  function renderControl7460() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root36129 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36129); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24683;
      nodes24683 = node.contents();
      oldNodes.replaceWith(nodes24683);
    }));
  }
  renderControl7460();
  callback(root36126); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root36130 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes24684 = $("<span>");
  root36130.append(nodes24684);
  subs__.addSub((ui.group)(function(_, callback) {
    var root36131 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16477 = mobl.loadingSpan();
    root36131.append(node16477);
    var list3712;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3712 = function() {
      var subs__ = listSubs__;
      list3712 = coll.get();
      list3712.list(function(results3917) {
        node16477.empty();
        for(var i3712 = 0; i3712 < results3917.length; i3712++) {
          (function() {
            var iternode3712 = $("<span>");
            node16477.append(iternode3712);
            var it;
            it = mobl.ref(mobl.ref(results3917), i3712);
            
            var tmp43829 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp43829.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp43829.set(it.get() == selected.get());
            }));
            
            
            var node16478 = $("<span>");
            iternode3712.append(node16478);
            var condSubs3006 = new mobl.CompSubscription();
            subs__.addSub(condSubs3006);
            var oldValue3006;
            var renderCond3006 = function() {
              var value6800 = tmp43829.get();
              if(oldValue3006 === value6800) return;
              oldValue3006 = value6800;
              var subs__ = condSubs3006;
              subs__.unsubscribe();
              node16478.empty();
              if(value6800) {
                
                var tmp43825 = mobl.ref(false);
                
                
                var tmp43824 = mobl.ref(null);
                
                
                var tmp43823 = mobl.ref(null);
                
                var nodes24685 = $("<span>");
                node16478.append(nodes24685);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43823, tmp43824, tmp43825, function(_, callback) {
                  var root36132 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes24686 = $("<span>");
                  root36132.append(nodes24686);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl7461();
                  }));
                  
                  function renderControl7461() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root36133 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root36133); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes24686;
                      nodes24686 = node.contents();
                      oldNodes.replaceWith(nodes24686);
                    }));
                  }
                  renderControl7461();
                  callback(root36132); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24685;
                  nodes24685 = node.contents();
                  oldNodes.replaceWith(nodes24685);
                }));
                
                
              } else {
                
                var tmp43827 = mobl.ref(true);
                
                
                var tmp43826 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp43828 = mobl.ref(null);
                
                var nodes24687 = $("<span>");
                node16478.append(nodes24687);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43826, tmp43828, tmp43827, function(_, callback) {
                  var root36134 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes24688 = $("<span>");
                  root36134.append(nodes24688);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl7462();
                  }));
                  
                  function renderControl7462() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root36135 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root36135); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes24688;
                      nodes24688 = node.contents();
                      oldNodes.replaceWith(nodes24688);
                    }));
                  }
                  renderControl7462();
                  callback(root36134); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24687;
                  nodes24687 = node.contents();
                  oldNodes.replaceWith(nodes24687);
                }));
                
                
              }
            };
            renderCond3006();
            subs__.addSub(tmp43829.addEventListener('change', function() {
              renderCond3006();
            }));
            
            
            var oldNodes = iternode3712;
            iternode3712 = iternode3712.contents();
            oldNodes.replaceWith(iternode3712);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3712.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3712(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3712(true); }));
      });
    };
    renderList3712();
    
    callback(root36131); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24684;
    nodes24684 = node.contents();
    oldNodes.replaceWith(nodes24684);
  }));
  callback(root36130); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root36136 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes24689 = $("<span>");
    root36136.append(nodes24689);
    subs__.addSub((ui.group)(function(_, callback) {
      var root36137 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp43833 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp43833.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp43833.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp43833.set(coll.get().limit(n.get()));
      }));
      
      
      var node16479 = mobl.loadingSpan();
      root36137.append(node16479);
      var list3713;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList3713 = function() {
        var subs__ = listSubs__;
        list3713 = tmp43833.get();
        list3713.list(function(results3918) {
          node16479.empty();
          for(var i3713 = 0; i3713 < results3918.length; i3713++) {
            (function() {
              var iternode3713 = $("<span>");
              node16479.append(iternode3713);
              var it;
              it = mobl.ref(mobl.ref(results3918), i3713);
              
              var tmp43830 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp43832 = mobl.ref(false);
              
              
              var tmp43831 = mobl.ref(null);
              
              var nodes24690 = $("<span>");
              iternode3713.append(nodes24690);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43830, tmp43831, tmp43832, function(_, callback) {
                var root36138 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes24691 = $("<span>");
                root36138.append(nodes24691);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl7463();
                }));
                
                function renderControl7463() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root36139 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root36139); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes24691;
                    nodes24691 = node.contents();
                    oldNodes.replaceWith(nodes24691);
                  }));
                }
                renderControl7463();
                callback(root36138); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes24690;
                nodes24690 = node.contents();
                oldNodes.replaceWith(nodes24690);
              }));
              
              var oldNodes = iternode3713;
              iternode3713 = iternode3713.contents();
              oldNodes.replaceWith(iternode3713);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list3713.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3713(true); }));
          subs__.addSub(tmp43833.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3713(true); }));
        });
      };
      renderList3713();
      
      
      var tmp43836 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp43836.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp43836.set(n.get() < total.get());
      }));
      
      
      var node16480 = $("<span>");
      root36137.append(node16480);
      var condSubs3007 = new mobl.CompSubscription();
      subs__.addSub(condSubs3007);
      var oldValue3007;
      var renderCond3007 = function() {
        var value6801 = tmp43836.get();
        if(oldValue3007 === value6801) return;
        oldValue3007 = value6801;
        var subs__ = condSubs3007;
        subs__.unsubscribe();
        node16480.empty();
        if(value6801) {
          
          var node16481 = $("<li>");
          
          var ref17491 = mobl.ref(ui.loadMoreStyle);
          if(ref17491.get() !== null) {
            node16481.attr('class', ref17491.get());
            subs__.addSub(ref17491.addEventListener('change', function(_, ref, val) {
              node16481.attr('class', val);
            }));
            
          }
          subs__.addSub(ref17491.rebind());
          
          var val9653 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val9653 !== null) {
            subs__.addSub(mobl.domBind(node16481, 'tap', val9653));
          }
          
          
          var tmp43835 = mobl.ref(null);
          
          
          var tmp43834 = mobl.ref(null);
          
          var nodes24692 = $("<span>");
          node16481.append(nodes24692);
          subs__.addSub((mobl.label)(moreLabel, tmp43834, tmp43835, function(_, callback) {
            var root36140 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root36140); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes24692;
            nodes24692 = node.contents();
            oldNodes.replaceWith(nodes24692);
          }));
          node16480.append(node16481);
          
          
          
        } else {
          
        }
      };
      renderCond3007();
      subs__.addSub(tmp43836.addEventListener('change', function() {
        renderCond3007();
      }));
      
      callback(root36137); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24689;
      nodes24689 = node.contents();
      oldNodes.replaceWith(nodes24689);
    }));
    callback(root36136); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root36141 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24693 = $("<span>");
  root36141.append(nodes24693);
  subs__.addSub((ui.group)(function(_, callback) {
    var root36142 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16482 = mobl.loadingSpan();
    root36142.append(node16482);
    var list3714;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3714 = function() {
      var subs__ = listSubs__;
      list3714 = items.get();
      list3714.list(function(results3919) {
        node16482.empty();
        for(var i3714 = 0; i3714 < results3919.length; i3714++) {
          (function() {
            var iternode3714 = $("<span>");
            node16482.append(iternode3714);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results3919), i3714), "_1");it = mobl.ref(mobl.ref(mobl.ref(results3919), i3714), "_2");
            
            var tmp43840 = mobl.ref(false);
            
            
            var tmp43839 = mobl.ref(null);
            
            
            var tmp43838 = mobl.ref(null);
            
            var nodes24694 = $("<span>");
            iternode3714.append(nodes24694);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43838, tmp43839, tmp43840, function(_, callback) {
              var root36143 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp43837 = mobl.ref(null);
              
              var nodes24695 = $("<span>");
              root36143.append(nodes24695);
              subs__.addSub((ui.checkBox)(checked, it, tmp43837, function(_, callback) {
                var root36144 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root36144); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24695;
                nodes24695 = node.contents();
                oldNodes.replaceWith(nodes24695);
              }));
              callback(root36143); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24694;
              nodes24694 = node.contents();
              oldNodes.replaceWith(nodes24694);
            }));
            
            var oldNodes = iternode3714;
            iternode3714 = iternode3714.contents();
            oldNodes.replaceWith(iternode3714);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3714.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3714(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3714(true); }));
      });
    };
    renderList3714();
    
    callback(root36142); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24693;
    nodes24693 = node.contents();
    oldNodes.replaceWith(nodes24693);
  }));
  callback(root36141); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root36145 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll6458) {
    coll6458 = coll6458.reverse();
    function processOne782() {
      var it;
      it = coll6458.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll6458.length > 0) processOne782(); else rest782();
      
    }
    function rest782() {
      
      var tmp43844 = mobl.ref(null);
      
      var nodes24696 = $("<span>");
      root36145.append(nodes24696);
      subs__.addSub((ui.header)(title, tmp43844, function(_, callback) {
        var root36146 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp43841 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp43842 = mobl.ref(mobl._("Back", []));
        
        var nodes24697 = $("<span>");
        root36146.append(nodes24697);
        subs__.addSub((ui.backButton)(tmp43842, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp43841, function(_, callback) {
          var root36147 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root36147); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24697;
          nodes24697 = node.contents();
          oldNodes.replaceWith(nodes24697);
        }));
        
        var tmp43843 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll6457) {
                               coll6457 = coll6457.reverse();
                               function processOne781() {
                                 var checked;var it;
                                 var tmp43896 = coll6457.pop();
                                 checked = tmp43896._1;it = tmp43896._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll6457.length > 0) processOne781(); else rest781();
                                   
                                 } else {
                                   {
                                     
                                     if(coll6457.length > 0) processOne781(); else rest781();
                                     
                                   }
                                 }
                               }
                               function rest781() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll6457.length > 0) processOne781(); else rest781();
                             });
                             
                           });
        
        var nodes24698 = $("<span>");
        root36146.append(nodes24698);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp43843, function(_, callback) {
          var root36148 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root36148); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes24698;
          nodes24698 = node.contents();
          oldNodes.replaceWith(nodes24698);
        }));
        callback(root36146); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes24696;
        nodes24696 = node.contents();
        oldNodes.replaceWith(nodes24696);
      }));
      var nodes24699 = $("<span>");
      root36145.append(nodes24699);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root36149 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36149); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes24699;
        nodes24699 = node.contents();
        oldNodes.replaceWith(nodes24699);
      }));
      callback(root36145); return subs__;
      
      
    }
    if(coll6458.length > 0) processOne782(); else rest782();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root36150 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp43846 = mobl.ref(null);
  
  
  var tmp43845 = mobl.ref(null);
  
  var nodes24700 = $("<span>");
  root36150.append(nodes24700);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp43845, tmp43846, function(_, callback) {
    var root36151 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36151); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24700;
    nodes24700 = node.contents();
    oldNodes.replaceWith(nodes24700);
  }));
  
  var tmp43847 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp43847.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp43847.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp43847.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp43847.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp43847.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes24701 = $("<span>");
  root36150.append(nodes24701);
  subs__.addSub((ui.masterDetail)(tmp43847, masterItem, detailItem, function(_, callback) {
    var root36152 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36152); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24701;
    nodes24701 = node.contents();
    oldNodes.replaceWith(nodes24701);
  }));
  callback(root36150); return subs__;
  
  
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
  var root36153 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp43860 = mobl.ref(null);
  
  
  var tmp43859 = mobl.ref(null);
  
  
  var tmp43858 = mobl.ref(null);
  
  var nodes24702 = $("<span>");
  root36153.append(nodes24702);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp43858, tmp43859, tmp43860, function(_, callback) {
    var root36154 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16483 = mobl.loadingSpan();
    root36154.append(node16483);
    var list3715;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3715 = function() {
      var subs__ = listSubs__;
      list3715 = sections.get();
      list3715.list(function(results3920) {
        node16483.empty();
        for(var i3715 = 0; i3715 < results3920.length; i3715++) {
          (function() {
            var iternode3715 = $("<span>");
            node16483.append(iternode3715);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results3920), i3715), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results3920), i3715), "_2");
            
            var tmp43851 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp43851.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp43851.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp43851.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp43851.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp43850 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp43853 = mobl.ref(null);
            
            
            var tmp43852 = mobl.ref(null);
            
            var nodes24703 = $("<span>");
            iternode3715.append(nodes24703);
            subs__.addSub((mobl.span)(tmp43851, tmp43852, tmp43850, tmp43853, function(_, callback) {
              var root36155 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp43849 = mobl.ref(null);
              
              
              var tmp43848 = mobl.ref(null);
              
              var nodes24704 = $("<span>");
              root36155.append(nodes24704);
              subs__.addSub((mobl.label)(sectionName, tmp43848, tmp43849, function(_, callback) {
                var root36156 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root36156); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24704;
                nodes24704 = node.contents();
                oldNodes.replaceWith(nodes24704);
              }));
              callback(root36155); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24703;
              nodes24703 = node.contents();
              oldNodes.replaceWith(nodes24703);
            }));
            
            var tmp43854 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp43854.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp43854.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp43854.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp43854.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp43857 = mobl.ref(null);
            
            
            var tmp43856 = mobl.ref(null);
            
            
            var tmp43855 = mobl.ref(null);
            
            var nodes24705 = $("<span>");
            iternode3715.append(nodes24705);
            subs__.addSub((mobl.block)(tmp43854, tmp43855, tmp43856, tmp43857, function(_, callback) {
              var root36157 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes24706 = $("<span>");
              root36157.append(nodes24706);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl7464();
              }));
              
              function renderControl7464() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root36158 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root36158); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24706;
                  nodes24706 = node.contents();
                  oldNodes.replaceWith(nodes24706);
                }));
              }
              renderControl7464();
              callback(root36157); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24705;
              nodes24705 = node.contents();
              oldNodes.replaceWith(nodes24705);
            }));
            
            var oldNodes = iternode3715;
            iternode3715 = iternode3715.contents();
            oldNodes.replaceWith(iternode3715);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3715.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3715(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3715(true); }));
      });
    };
    renderList3715();
    
    callback(root36154); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24702;
    nodes24702 = node.contents();
    oldNodes.replaceWith(nodes24702);
  }));
  callback(root36153); return subs__;
  
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
  var root36159 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16484 = $("<table>");
  
  var ref17492 = mobl.ref(ui.tableStyle);
  if(ref17492.get() !== null) {
    node16484.attr('class', ref17492.get());
    subs__.addSub(ref17492.addEventListener('change', function(_, ref, val) {
      node16484.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17492.rebind());
  
  var nodes24707 = $("<span>");
  node16484.append(nodes24707);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7465();
  }));
  
  function renderControl7465() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36160 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36160); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24707;
      nodes24707 = node.contents();
      oldNodes.replaceWith(nodes24707);
    }));
  }
  renderControl7465();
  root36159.append(node16484);
  callback(root36159); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root36161 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16485 = $("<tr>");
  
  var ref17493 = mobl.ref(ui.trStyle);
  if(ref17493.get() !== null) {
    node16485.attr('class', ref17493.get());
    subs__.addSub(ref17493.addEventListener('change', function(_, ref, val) {
      node16485.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17493.rebind());
  
  var nodes24708 = $("<span>");
  node16485.append(nodes24708);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7466();
  }));
  
  function renderControl7466() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36162 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36162); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24708;
      nodes24708 = node.contents();
      oldNodes.replaceWith(nodes24708);
    }));
  }
  renderControl7466();
  root36161.append(node16485);
  callback(root36161); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root36163 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16486 = $("<td>");
  
  var ref17494 = width;
  if(ref17494.get() !== null) {
    node16486.attr('width', ref17494.get());
    subs__.addSub(ref17494.addEventListener('change', function(_, ref, val) {
      node16486.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17494.rebind());
  
  var ref17495 = mobl.ref(ui.tdStyle);
  if(ref17495.get() !== null) {
    node16486.attr('class', ref17495.get());
    subs__.addSub(ref17495.addEventListener('change', function(_, ref, val) {
      node16486.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17495.rebind());
  
  var nodes24709 = $("<span>");
  node16486.append(nodes24709);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7467();
  }));
  
  function renderControl7467() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24709;
      nodes24709 = node.contents();
      oldNodes.replaceWith(nodes24709);
    }));
  }
  renderControl7467();
  root36163.append(node16486);
  callback(root36163); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root36165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16487 = $("<td>");
  
  var ref17496 = width;
  if(ref17496.get() !== null) {
    node16487.attr('width', ref17496.get());
    subs__.addSub(ref17496.addEventListener('change', function(_, ref, val) {
      node16487.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17496.rebind());
  
  var ref17497 = mobl.ref(ui.tdStyle);
  if(ref17497.get() !== null) {
    node16487.attr('class', ref17497.get());
    subs__.addSub(ref17497.addEventListener('change', function(_, ref, val) {
      node16487.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17497.rebind());
  
  var nodes24710 = $("<span>");
  node16487.append(nodes24710);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7468();
  }));
  
  function renderControl7468() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36166 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36166); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24710;
      nodes24710 = node.contents();
      oldNodes.replaceWith(nodes24710);
    }));
  }
  renderControl7468();
  root36165.append(node16487);
  callback(root36165); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root36167 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16488 = $("<td>");
  
  var ref17498 = width;
  if(ref17498.get() !== null) {
    node16488.attr('width', ref17498.get());
    subs__.addSub(ref17498.addEventListener('change', function(_, ref, val) {
      node16488.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17498.rebind());
  
  var ref17499 = mobl.ref(ui.tdStyle);
  if(ref17499.get() !== null) {
    node16488.attr('class', ref17499.get());
    subs__.addSub(ref17499.addEventListener('change', function(_, ref, val) {
      node16488.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17499.rebind());
  
  
  var node16489 = $("<strong>");
  
  var nodes24711 = $("<span>");
  node16489.append(nodes24711);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7469();
  }));
  
  function renderControl7469() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36168 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36168); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24711;
      nodes24711 = node.contents();
      oldNodes.replaceWith(nodes24711);
    }));
  }
  renderControl7469();
  node16488.append(node16489);
  root36167.append(node16488);
  callback(root36167); return subs__;
  
  
  
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
  var root36169 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes24712 = $("<span>");
  root36169.append(nodes24712);
  subs__.addSub((ui.group)(function(_, callback) {
    var root36170 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16490 = mobl.loadingSpan();
    root36170.append(node16490);
    var list3716;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3716 = function() {
      var subs__ = listSubs__;
      list3716 = items.get();
      list3716.list(function(results3921) {
        node16490.empty();
        for(var i3716 = 0; i3716 < results3921.length; i3716++) {
          (function() {
            var iternode3716 = $("<span>");
            node16490.append(iternode3716);
            var it;
            it = mobl.ref(mobl.ref(results3921), i3716);
            
            var tmp43861 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp43898 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp43863 = mobl.ref(false);
            
            
            var tmp43862 = mobl.ref(null);
            
            var nodes24713 = $("<span>");
            iternode3716.append(nodes24713);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp43861, tmp43862, tmp43863, function(_, callback) {
              var root36171 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes24714 = $("<span>");
              root36171.append(nodes24714);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl7470();
              }));
              
              function renderControl7470() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root36172 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root36172); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24714;
                  nodes24714 = node.contents();
                  oldNodes.replaceWith(nodes24714);
                }));
              }
              renderControl7470();
              callback(root36171); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24713;
              nodes24713 = node.contents();
              oldNodes.replaceWith(nodes24713);
            }));
            
            var oldNodes = iternode3716;
            iternode3716 = iternode3716.contents();
            oldNodes.replaceWith(iternode3716);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3716.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3716(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3716(true); }));
      });
    };
    renderList3716();
    
    callback(root36170); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24712;
    nodes24712 = node.contents();
    oldNodes.replaceWith(nodes24712);
  }));
  callback(root36169); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root36173 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp43865 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp43864 = mobl.ref("Back");
  
  var nodes24715 = $("<span>");
  root36173.append(nodes24715);
  subs__.addSub((ui.backButton)(tmp43864, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp43865, function(_, callback) {
    var root36174 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root36174); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24715;
    nodes24715 = node.contents();
    oldNodes.replaceWith(nodes24715);
  }));
  var nodes24716 = $("<span>");
  root36173.append(nodes24716);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl7471();
  }));
  
  function renderControl7471() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root36175 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36175); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24716;
      nodes24716 = node.contents();
      oldNodes.replaceWith(nodes24716);
    }));
  }
  renderControl7471();
  callback(root36173); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root36176 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16491 = $("<div>");
  
  var ref17503 = mobl.ref(ui.customHeaderStyle);
  if(ref17503.get() !== null) {
    node16491.attr('class', ref17503.get());
    subs__.addSub(ref17503.addEventListener('change', function(_, ref, val) {
      node16491.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17503.rebind());
  
  var val9654 = onclick.get();
  if(val9654 !== null) {
    subs__.addSub(mobl.domBind(node16491, 'tap', val9654));
  }
  
  
  var node16492 = $("<div>");
  
  var ref17502 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref17502.get() !== null) {
    node16492.attr('class', ref17502.get());
    subs__.addSub(ref17502.addEventListener('change', function(_, ref, val) {
      node16492.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17502.rebind());
  
  
  var node16493 = $("<div>");
  
  var ref17500 = text;
  node16493.text(""+ref17500.get());
  var ignore3511 = false;
  subs__.addSub(ref17500.addEventListener('change', function(_, ref, val) {
    if(ignore3511) return;
    node16493.text(""+val);
  }));
  subs__.addSub(ref17500.rebind());
  
  
  var ref17501 = mobl.ref(ui.customHeaderTextStyle);
  if(ref17501.get() !== null) {
    node16493.attr('class', ref17501.get());
    subs__.addSub(ref17501.addEventListener('change', function(_, ref, val) {
      node16493.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17501.rebind());
  
  node16492.append(node16493);
  node16491.append(node16492);
  var nodes24717 = $("<span>");
  node16491.append(nodes24717);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7472();
  }));
  
  function renderControl7472() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36177 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36177); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24717;
      nodes24717 = node.contents();
      oldNodes.replaceWith(nodes24717);
    }));
  }
  renderControl7472();
  root36176.append(node16491);
  callback(root36176); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root36178 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref17504 = mobl.ref(ui.customItemStyle);
  if(ref17504.get() !== null) {
    el.attr('class', ref17504.get());
    subs__.addSub(ref17504.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17504.rebind());
  
  var ref17505 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref17505.get() !== null) {
    el.attr('class', ref17505.get());
    subs__.addSub(ref17505.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref17505.rebind());
  
  var val9655 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp43899 = result__;
                                           function after3173(result__) {
                                             var tmp43900 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after3173);if(result__ !== undefined) after3173(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp43901 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val9655 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val9655));
  }
  
  var nodes24718 = $("<span>");
  el.append(nodes24718);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7473();
  }));
  
  function renderControl7473() {
    subs__.addSub((elements)(function(elements, callback) {
      var root36179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root36179); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes24718;
      nodes24718 = node.contents();
      oldNodes.replaceWith(nodes24718);
    }));
  }
  renderControl7473();
  root36178.append(el);
  callback(root36178); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root36180 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node16494 = $("<div>");
  node16494.attr('style', "height: 340px; margin-left: 25px; margin-top: 10px");
  
  
  var node16496 = mobl.loadingSpan();
  node16494.append(node16496);
  var list3718;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList3718 = function() {
    var subs__ = listSubs__;
    list3718 = tabs.get();
    list3718.list(function(results3923) {
      node16496.empty();
      for(var i3718 = 0; i3718 < results3923.length; i3718++) {
        (function() {
          var iternode3718 = $("<span>");
          node16496.append(iternode3718);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results3923), i3718), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3923), i3718), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3923), i3718), "_3");
          
          var tmp43866 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp43866.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp43866.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp43866.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp43866.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp43869 = mobl.ref(null);
          
          
          var tmp43868 = mobl.ref(null);
          
          
          var tmp43867 = mobl.ref(null);
          
          var nodes24722 = $("<span>");
          iternode3718.append(nodes24722);
          subs__.addSub((mobl.block)(tmp43866, tmp43867, tmp43868, tmp43869, function(_, callback) {
            var root36184 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes24723 = $("<span>");
            root36184.append(nodes24723);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root36185 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes24724 = $("<span>");
              root36185.append(nodes24724);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl7474();
              }));
              
              function renderControl7474() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root36186 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root36186); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes24724;
                  nodes24724 = node.contents();
                  oldNodes.replaceWith(nodes24724);
                }));
              }
              renderControl7474();
              callback(root36185); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24723;
              nodes24723 = node.contents();
              oldNodes.replaceWith(nodes24723);
            }));
            callback(root36184); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes24722;
            nodes24722 = node.contents();
            oldNodes.replaceWith(nodes24722);
          }));
          
          var oldNodes = iternode3718;
          iternode3718 = iternode3718.contents();
          oldNodes.replaceWith(iternode3718);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list3718.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3718(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3718(true); }));
    });
  };
  renderList3718();
  
  root36180.append(node16494);
  
  var tmp43878 = mobl.ref(null);
  
  
  var tmp43877 = mobl.ref(null);
  
  
  var tmp43876 = mobl.ref(null);
  
  var nodes24719 = $("<span>");
  root36180.append(nodes24719);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp43876, tmp43877, tmp43878, function(_, callback) {
    var root36181 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node16495 = mobl.loadingSpan();
    root36181.append(node16495);
    var list3717;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList3717 = function() {
      var subs__ = listSubs__;
      list3717 = tabs.get();
      list3717.list(function(results3922) {
        node16495.empty();
        for(var i3717 = 0; i3717 < results3922.length; i3717++) {
          (function() {
            var iternode3717 = $("<span>");
            node16495.append(iternode3717);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results3922), i3717), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results3922), i3717), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results3922), i3717), "_3");
            
            var tmp43873 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp43873.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp43873.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp43873.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp43873.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp43872 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp43875 = mobl.ref(null);
            
            
            var tmp43874 = mobl.ref(null);
            
            var nodes24720 = $("<span>");
            iternode3717.append(nodes24720);
            subs__.addSub((mobl.span)(tmp43873, tmp43874, tmp43872, tmp43875, function(_, callback) {
              var root36182 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp43871 = mobl.ref(null);
              
              
              var tmp43870 = mobl.ref(null);
              
              var nodes24721 = $("<span>");
              root36182.append(nodes24721);
              subs__.addSub((mobl.label)(tabName, tmp43870, tmp43871, function(_, callback) {
                var root36183 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root36183); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes24721;
                nodes24721 = node.contents();
                oldNodes.replaceWith(nodes24721);
              }));
              callback(root36182); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes24720;
              nodes24720 = node.contents();
              oldNodes.replaceWith(nodes24720);
            }));
            
            var oldNodes = iternode3717;
            iternode3717 = iternode3717.contents();
            oldNodes.replaceWith(iternode3717);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list3717.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3717(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3717(true); }));
      });
    };
    renderList3717();
    
    callback(root36181); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes24719;
    nodes24719 = node.contents();
    oldNodes.replaceWith(nodes24719);
  }));
  callback(root36180); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root36187 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16497 = $("<div>");
  node16497.attr('style', "width: 250px;");
  
  
  var slider = $("<div>");
  
  node16497.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  root36187.append(node16497);
  callback(root36187); return subs__;
  
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
