mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root2994 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node980 = $("<span>");
  root2994.append(node980);
  var condSubs212 = new mobl.CompSubscription();
  subs__.addSub(condSubs212);
  var oldValue212;
  var renderCond212 = function() {
    var value488 = value.get();
    if(oldValue212 === value488) return;
    oldValue212 = value488;
    var subs__ = condSubs212;
    subs__.unsubscribe();
    node980.empty();
    if(value488) {
      var nodes2215 = $("<span>");
      node980.append(nodes2215);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl418();
      }));
      
      function renderControl418() {
        subs__.addSub((elements)(function(elements, callback) {
          var root2995 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2995); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2215;
          nodes2215 = node.contents();
          oldNodes.replaceWith(nodes2215);
        }));
      }
      renderControl418();
      
      
    } else {
      
      var tmp5197 = mobl.ref(null);
      
      
      var tmp5196 = mobl.ref(null);
      
      
      var tmp5195 = mobl.ref(null);
      
      var nodes2216 = $("<span>");
      node980.append(nodes2216);
      subs__.addSub((mobl.block)(style, tmp5195, tmp5196, tmp5197, function(_, callback) {
        var root2996 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp5187 = mobl.ref(null);
        
        
        var tmp5186 = mobl.ref(null);
        
        var nodes2217 = $("<span>");
        root2996.append(nodes2217);
        subs__.addSub((mobl.label)(loadingMessage, tmp5186, tmp5187, function(_, callback) {
          var root2997 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2997); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2217;
          nodes2217 = node.contents();
          oldNodes.replaceWith(nodes2217);
        }));
        
        var tmp5189 = mobl.ref("middle");
        
        
        var tmp5188 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp5194 = mobl.ref(null);
        
        
        var tmp5193 = mobl.ref(null);
        
        
        var tmp5192 = mobl.ref(null);
        
        
        var tmp5191 = mobl.ref(null);
        
        
        var tmp5190 = mobl.ref(null);
        
        var nodes2218 = $("<span>");
        root2996.append(nodes2218);
        subs__.addSub((ui.image)(tmp5188, tmp5190, tmp5191, tmp5192, tmp5193, tmp5189, tmp5194, function(_, callback) {
          var root2998 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2998); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2218;
          nodes2218 = node.contents();
          oldNodes.replaceWith(nodes2218);
        }));
        callback(root2996); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2216;
        nodes2216 = node.contents();
        oldNodes.replaceWith(nodes2216);
      }));
      
      
    }
  };
  renderCond212();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond212();
  }));
  
  callback(root2994); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root2999 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node981 = $("<div>");
  
  var ref983 = mobl.ref(ui.headerStyle);
  if(ref983.get() !== null) {
    node981.attr('class', ref983.get());
    subs__.addSub(ref983.addEventListener('change', function(_, ref, val) {
      node981.attr('class', val);
    }));
    
  }
  subs__.addSub(ref983.rebind());
  
  var val560 = onclick.get();
  if(val560 !== null) {
    subs__.addSub(mobl.domBind(node981, 'tap', val560));
  }
  
  
  var node982 = $("<div>");
  
  var ref982 = mobl.ref(ui.headerContainerStyle);
  if(ref982.get() !== null) {
    node982.attr('class', ref982.get());
    subs__.addSub(ref982.addEventListener('change', function(_, ref, val) {
      node982.attr('class', val);
    }));
    
  }
  subs__.addSub(ref982.rebind());
  
  
  var node983 = $("<div>");
  
  var ref980 = text;
  node983.text(""+ref980.get());
  var ignore200 = false;
  subs__.addSub(ref980.addEventListener('change', function(_, ref, val) {
    if(ignore200) return;
    node983.text(""+val);
  }));
  subs__.addSub(ref980.rebind());
  
  
  var ref981 = mobl.ref(ui.headerTextStyle);
  if(ref981.get() !== null) {
    node983.attr('class', ref981.get());
    subs__.addSub(ref981.addEventListener('change', function(_, ref, val) {
      node983.attr('class', val);
    }));
    
  }
  subs__.addSub(ref981.rebind());
  
  node982.append(node983);
  node981.append(node982);
  var nodes2219 = $("<span>");
  node981.append(nodes2219);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl419();
  }));
  
  function renderControl419() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3000 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3000); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2219;
      nodes2219 = node.contents();
      oldNodes.replaceWith(nodes2219);
    }));
  }
  renderControl419();
  root2999.append(node981);
  callback(root2999); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root3001 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref984 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref984.get() !== null) {
    sp.attr('class', ref984.get());
    subs__.addSub(ref984.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref984.rebind());
  
  var val561 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val561 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val561));
  }
  
  var val562 = function(event, callback) {
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
  if(val562 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val562));
  }
  
  var val563 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after180(result__) {
                    var tmp5282 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after180);if(result__ !== undefined) after180(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val563 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val563));
  }
  
  var val564 = function(event, callback) {
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
  if(val564 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val564));
  }
  
  var ref985 = text;
  sp.text(""+ref985.get());
  var ignore201 = false;
  subs__.addSub(ref985.addEventListener('change', function(_, ref, val) {
    if(ignore201) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref985.rebind());
  
  
  root3001.append(sp);
  callback(root3001); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root3002 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2220 = $("<span>");
  root3002.append(nodes2220);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root3003 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3003); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2220;
    nodes2220 = node.contents();
    oldNodes.replaceWith(nodes2220);
  }));
  callback(root3002); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root3004 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2221 = $("<span>");
  root3004.append(nodes2221);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root3005 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3005); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2221;
    nodes2221 = node.contents();
    oldNodes.replaceWith(nodes2221);
  }));
  callback(root3004); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root3006 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node984 = $("<ul>");
  
  var ref986 = mobl.ref(ui.groupStyle);
  if(ref986.get() !== null) {
    node984.attr('class', ref986.get());
    subs__.addSub(ref986.addEventListener('change', function(_, ref, val) {
      node984.attr('class', val);
    }));
    
  }
  subs__.addSub(ref986.rebind());
  
  var nodes2222 = $("<span>");
  node984.append(nodes2222);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl420();
  }));
  
  function renderControl420() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3007 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3007); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2222;
      nodes2222 = node.contents();
      oldNodes.replaceWith(nodes2222);
    }));
  }
  renderControl420();
  root3006.append(node984);
  callback(root3006); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root3008 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node985 = $("<img>");
  
  var ref987 = url;
  if(ref987.get() !== null) {
    node985.attr('src', ref987.get());
    subs__.addSub(ref987.addEventListener('change', function(_, ref, val) {
      node985.attr('src', val);
    }));
    
  }
  subs__.addSub(ref987.rebind());
  
  var ref988 = width;
  if(ref988.get() !== null) {
    node985.attr('width', ref988.get());
    subs__.addSub(ref988.addEventListener('change', function(_, ref, val) {
      node985.attr('width', val);
    }));
    
  }
  subs__.addSub(ref988.rebind());
  
  var ref989 = height;
  if(ref989.get() !== null) {
    node985.attr('height', ref989.get());
    subs__.addSub(ref989.addEventListener('change', function(_, ref, val) {
      node985.attr('height', val);
    }));
    
  }
  subs__.addSub(ref989.rebind());
  
  var ref990 = style;
  if(ref990.get() !== null) {
    node985.attr('class', ref990.get());
    subs__.addSub(ref990.addEventListener('change', function(_, ref, val) {
      node985.attr('class', val);
    }));
    
  }
  subs__.addSub(ref990.rebind());
  
  var val565 = onclick.get();
  if(val565 !== null) {
    subs__.addSub(mobl.domBind(node985, 'tap', val565));
  }
  
  var ref991 = valign;
  if(ref991.get() !== null) {
    node985.attr('valign', ref991.get());
    subs__.addSub(ref991.addEventListener('change', function(_, ref, val) {
      node985.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref991.rebind());
  
  var ref992 = align;
  if(ref992.get() !== null) {
    node985.attr('align', ref992.get());
    subs__.addSub(ref992.addEventListener('change', function(_, ref, val) {
      node985.attr('align', val);
    }));
    
  }
  subs__.addSub(ref992.rebind());
  
  root3008.append(node985);
  callback(root3008); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root3009 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref993 = mobl.ref(ui.itemStyle);
  if(ref993.get() !== null) {
    el.attr('class', ref993.get());
    subs__.addSub(ref993.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref993.rebind());
  
  var ref994 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref994.get() !== null) {
    el.attr('class', ref994.get());
    subs__.addSub(ref994.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref994.rebind());
  
  var val566 = onswipe.get();
  if(val566 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val566));
  }
  
  var val567 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp5283 = result__;
                                           function after181(result__) {
                                             var tmp5284 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after181);if(result__ !== undefined) after181(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp5285 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val567 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val567));
  }
  
  var nodes2223 = $("<span>");
  el.append(nodes2223);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl421();
  }));
  
  function renderControl421() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3010 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3010); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2223;
      nodes2223 = node.contents();
      oldNodes.replaceWith(nodes2223);
    }));
  }
  renderControl421();
  root3009.append(el);
  callback(root3009); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root3011 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node986 = $("<input>");
  node986.attr('type', "checkbox");
  
  var ref996 = b;
  node986.attr('checked', !!ref996.get());
  subs__.addSub(ref996.addEventListener('change', function(_, ref, val) {
    if(ref === ref996) node986.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node986, 'change', function() {
    b.set(!!node986.attr('checked'));
  }));
  
  var val569 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val569 !== null) {
    subs__.addSub(mobl.domBind(node986, 'tap', val569));
  }
  
  var val570 = onchange.get();
  if(val570 !== null) {
    subs__.addSub(mobl.domBind(node986, 'change', val570));
  }
  
  root3011.append(node986);
  
  root3011.append(" ");
  
  var node987 = $("<span>");
  
  var ref995 = label;
  node987.text(""+ref995.get());
  var ignore202 = false;
  subs__.addSub(ref995.addEventListener('change', function(_, ref, val) {
    if(ignore202) return;
    node987.text(""+val);
  }));
  subs__.addSub(ref995.rebind());
  
  
  var val568 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after182(result__) {
                    var tmp5286 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after182);if(result__ !== undefined) after182(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val568 !== null) {
    subs__.addSub(mobl.domBind(node987, 'tap', val568));
  }
  
  root3011.append(node987);
  callback(root3011); return subs__;
  
  
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
  var root3012 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node988 = $("<span>");
  root3012.append(node988);
  var condSubs213 = new mobl.CompSubscription();
  subs__.addSub(condSubs213);
  var oldValue213;
  var renderCond213 = function() {
    var value489 = label.get();
    if(oldValue213 === value489) return;
    oldValue213 = value489;
    var subs__ = condSubs213;
    subs__.unsubscribe();
    node988.empty();
    if(value489) {
      
      var tmp5198 = mobl.ref(null);
      
      var nodes2224 = $("<span>");
      node988.append(nodes2224);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp5198, function(_, callback) {
        var root3013 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3013); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2224;
        nodes2224 = node.contents();
        oldNodes.replaceWith(nodes2224);
      }));
      
      
    } else {
      
    }
  };
  renderCond213();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond213();
  }));
  
  
  var node989 = $("<span>");
  root3012.append(node989);
  var condSubs214 = new mobl.CompSubscription();
  subs__.addSub(condSubs214);
  var oldValue214;
  var renderCond214 = function() {
    var value490 = validator.get();
    if(oldValue214 === value490) return;
    oldValue214 = value490;
    var subs__ = condSubs214;
    subs__.unsubscribe();
    node989.empty();
    if(value490) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after186(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp5287 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node990 = $("<input>");
        node990.attr('type', "text");
        
        var ref997 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref997.get() !== null) {
          node990.attr('class', ref997.get());
          subs__.addSub(ref997.addEventListener('change', function(_, ref, val) {
            node990.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node990.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node990.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node990.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref997.rebind());
        
        var ref998 = placeholder;
        if(ref998.get() !== null) {
          node990.attr('placeholder', ref998.get());
          subs__.addSub(ref998.addEventListener('change', function(_, ref, val) {
            node990.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref998.rebind());
        
        var ref999 = temp;
        node990.val(""+ref999.get());
        var ignore203 = false;
        subs__.addSub(ref999.addEventListener('change', function(_, ref, val) {
          if(ignore203) return;
          node990.val(""+val);
        }));
        subs__.addSub(ref999.rebind());
        
        subs__.addSub(mobl.domBind(node990, 'keyup change', function() {
          ignore203 = true;
          temp.set(mobl.stringTomobl__String(node990.val()));
          ignore203 = false;
        }));
        
        
        var val571 = onchange.get();
        if(val571 !== null) {
          subs__.addSub(mobl.domBind(node990, 'change', val571));
        }
        
        var val572 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after183(result__) {
                          var tmp5288 = result__;
                          function after184(result__) {
                            var tmp5289 = result__;
                            var result__ = tmp5289;
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
                          var result__ = validator.get()(temp.get(), after184);if(result__ !== undefined) after184(result__);
                        }
                        var result__ = onkeyup.get()(event, after183);if(result__ !== undefined) after183(result__);
                      } else {
                        {
                          function after185(result__) {
                            var tmp5289 = result__;
                            var result__ = tmp5289;
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
                          var result__ = validator.get()(temp.get(), after185);if(result__ !== undefined) after185(result__);
                        }
                      }
                    };
        if(val572 !== null) {
          subs__.addSub(mobl.domBind(node990, 'keyup', val572));
        }
        
        var val573 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val573 !== null) {
          subs__.addSub(mobl.domBind(node990, 'blur', val573));
        }
        
        node989.append(node990);
        
        var tmp5199 = mobl.ref(null);
        
        var nodes2225 = $("<span>");
        node989.append(nodes2225);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp5199, function(_, callback) {
          var root3014 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3014); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2225;
          nodes2225 = node.contents();
          oldNodes.replaceWith(nodes2225);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after186);if(result__ !== undefined) after186(result__);
    } else {
      
      var node991 = $("<input>");
      node991.attr('type', "text");
      
      var ref1000 = style;
      if(ref1000.get() !== null) {
        node991.attr('class', ref1000.get());
        subs__.addSub(ref1000.addEventListener('change', function(_, ref, val) {
          node991.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1000.rebind());
      
      var ref1001 = placeholder;
      if(ref1001.get() !== null) {
        node991.attr('placeholder', ref1001.get());
        subs__.addSub(ref1001.addEventListener('change', function(_, ref, val) {
          node991.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1001.rebind());
      
      var ref1002 = s;
      node991.val(""+ref1002.get());
      var ignore204 = false;
      subs__.addSub(ref1002.addEventListener('change', function(_, ref, val) {
        if(ignore204) return;
        node991.val(""+val);
      }));
      subs__.addSub(ref1002.rebind());
      
      subs__.addSub(mobl.domBind(node991, 'keyup change', function() {
        ignore204 = true;
        s.set(mobl.stringTomobl__String(node991.val()));
        ignore204 = false;
      }));
      
      
      var val574 = onchange.get();
      if(val574 !== null) {
        subs__.addSub(mobl.domBind(node991, 'change', val574));
      }
      
      var val575 = onkeyup.get();
      if(val575 !== null) {
        subs__.addSub(mobl.domBind(node991, 'keyup', val575));
      }
      
      var val576 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val576 !== null) {
        subs__.addSub(mobl.domBind(node991, 'blur', val576));
      }
      
      node989.append(node991);
      
      
    }
  };
  renderCond214();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond214();
  }));
  
  callback(root3012); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root3015 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2226 = $("<span>");
  root3015.append(nodes2226);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root3016 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3016); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2226;
    nodes2226 = node.contents();
    oldNodes.replaceWith(nodes2226);
  }));
  callback(root3015); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root3017 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after187(result__) {
      var tmp5290 = result__;
      var result__ = tmp5290;
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
    var result__ = validator.get()(n2, after187);if(result__ !== undefined) after187(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes2227 = $("<span>");
  root3017.append(nodes2227);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root3018 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3018); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2227;
    nodes2227 = node.contents();
    oldNodes.replaceWith(nodes2227);
  }));
  callback(root3017); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root3019 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node992 = $("<span>");
  root3019.append(node992);
  var condSubs215 = new mobl.CompSubscription();
  subs__.addSub(condSubs215);
  var oldValue215;
  var renderCond215 = function() {
    var value491 = label.get();
    if(oldValue215 === value491) return;
    oldValue215 = value491;
    var subs__ = condSubs215;
    subs__.unsubscribe();
    node992.empty();
    if(value491) {
      
      var node993 = $("<span>");
      node993.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1006 = label;
      node993.text(""+ref1006.get());
      var ignore206 = false;
      subs__.addSub(ref1006.addEventListener('change', function(_, ref, val) {
        if(ignore206) return;
        node993.text(""+val);
      }));
      subs__.addSub(ref1006.rebind());
      
      
      node992.append(node993);
      
      var node994 = $("<span>");
      node994.attr('style', "float: left");
      
      
      var node995 = $("<input>");
      node995.attr('type', "password");
      
      var ref1003 = style;
      if(ref1003.get() !== null) {
        node995.attr('class', ref1003.get());
        subs__.addSub(ref1003.addEventListener('change', function(_, ref, val) {
          node995.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1003.rebind());
      
      var ref1004 = placeholder;
      if(ref1004.get() !== null) {
        node995.attr('placeholder', ref1004.get());
        subs__.addSub(ref1004.addEventListener('change', function(_, ref, val) {
          node995.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1004.rebind());
      
      var ref1005 = s;
      node995.val(""+ref1005.get());
      var ignore205 = false;
      subs__.addSub(ref1005.addEventListener('change', function(_, ref, val) {
        if(ignore205) return;
        node995.val(""+val);
      }));
      subs__.addSub(ref1005.rebind());
      
      subs__.addSub(mobl.domBind(node995, 'keyup change', function() {
        ignore205 = true;
        s.set(mobl.stringTomobl__String(node995.val()));
        ignore205 = false;
      }));
      
      
      var val577 = onchange.get();
      if(val577 !== null) {
        subs__.addSub(mobl.domBind(node995, 'change', val577));
      }
      
      var val578 = onkeyup.get();
      if(val578 !== null) {
        subs__.addSub(mobl.domBind(node995, 'keyup', val578));
      }
      
      var val579 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val579 !== null) {
        subs__.addSub(mobl.domBind(node995, 'blur', val579));
      }
      
      node994.append(node995);
      node992.append(node994);
      
      
      
      
    } else {
      
      var node996 = $("<input>");
      node996.attr('type', "password");
      
      var ref1007 = style;
      if(ref1007.get() !== null) {
        node996.attr('class', ref1007.get());
        subs__.addSub(ref1007.addEventListener('change', function(_, ref, val) {
          node996.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1007.rebind());
      
      var ref1008 = placeholder;
      if(ref1008.get() !== null) {
        node996.attr('placeholder', ref1008.get());
        subs__.addSub(ref1008.addEventListener('change', function(_, ref, val) {
          node996.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1008.rebind());
      
      var ref1009 = s;
      node996.val(""+ref1009.get());
      var ignore207 = false;
      subs__.addSub(ref1009.addEventListener('change', function(_, ref, val) {
        if(ignore207) return;
        node996.val(""+val);
      }));
      subs__.addSub(ref1009.rebind());
      
      subs__.addSub(mobl.domBind(node996, 'keyup change', function() {
        ignore207 = true;
        s.set(mobl.stringTomobl__String(node996.val()));
        ignore207 = false;
      }));
      
      
      var val580 = onchange.get();
      if(val580 !== null) {
        subs__.addSub(mobl.domBind(node996, 'change', val580));
      }
      
      var val581 = onkeyup.get();
      if(val581 !== null) {
        subs__.addSub(mobl.domBind(node996, 'keyup', val581));
      }
      
      var val582 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val582 !== null) {
        subs__.addSub(mobl.domBind(node996, 'blur', val582));
      }
      
      node992.append(node996);
      
      
    }
  };
  renderCond215();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond215();
  }));
  
  callback(root3019); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root3020 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1014 = style;
  if(ref1014.get() !== null) {
    sel.attr('class', ref1014.get());
    subs__.addSub(ref1014.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1014.rebind());
  
  var val583 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after188(result__) {
                    var tmp5292 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after188);if(result__ !== undefined) after188(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val583 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val583));
  }
  
  
  var node997 = mobl.loadingSpan();
  sel.append(node997);
  var list248;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList248 = function() {
    var subs__ = listSubs__;
    list248 = options.get();
    list248.list(function(results699) {
      node997.empty();
      for(var i248 = 0; i248 < results699.length; i248++) {
        (function() {
          var iternode248 = $("<span>");
          node997.append(iternode248);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results699), i248), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results699), i248), "_2");
          
          var node998 = $("<option>");
          
          var ref1010 = optionDescription;
          node998.text(""+ref1010.get());
          var ignore208 = false;
          subs__.addSub(ref1010.addEventListener('change', function(_, ref, val) {
            if(ignore208) return;
            node998.text(""+val);
          }));
          subs__.addSub(ref1010.rebind());
          
          
          var ref1011 = optionStyle;
          if(ref1011.get() !== null) {
            node998.attr('class', ref1011.get());
            subs__.addSub(ref1011.addEventListener('change', function(_, ref, val) {
              node998.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1011.rebind());
          
          var ref1012 = optionValue;
          if(ref1012.get() !== null) {
            node998.attr('value', ref1012.get());
            subs__.addSub(ref1012.addEventListener('change', function(_, ref, val) {
              node998.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1012.rebind());
          
          var ref1013 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1013.get() !== null) {
            node998.attr('selected', ref1013.get());
            subs__.addSub(ref1013.addEventListener('change', function(_, ref, val) {
              node998.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node998.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node998.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1013.rebind());
          
          iternode248.append(node998);
          
          var oldNodes = iternode248;
          iternode248 = iternode248.contents();
          oldNodes.replaceWith(iternode248);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list248.addEventListener('change', function() { listSubs__.unsubscribe(); renderList248(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList248(true); }));
    });
  };
  renderList248();
  
  root3020.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root3020); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root3021 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp5208 = mobl.ref(null);
  
  
  var tmp5207 = mobl.ref(null);
  
  
  var tmp5206 = mobl.ref(null);
  
  var nodes2228 = $("<span>");
  root3021.append(nodes2228);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp5206, tmp5207, tmp5208, function(_, callback) {
    var root3022 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node999 = mobl.loadingSpan();
    root3022.append(node999);
    var list249;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList249 = function() {
      var subs__ = listSubs__;
      list249 = tabs.get();
      list249.list(function(results700) {
        node999.empty();
        for(var i249 = 0; i249 < results700.length; i249++) {
          (function() {
            var iternode249 = $("<span>");
            node999.append(iternode249);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results700), i249), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results700), i249), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results700), i249), "_3");
            
            var tmp5203 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp5203.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp5203.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp5203.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp5203.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp5202 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp5205 = mobl.ref(null);
            
            
            var tmp5204 = mobl.ref(null);
            
            var nodes2229 = $("<span>");
            iternode249.append(nodes2229);
            subs__.addSub((mobl.span)(tmp5203, tmp5204, tmp5202, tmp5205, function(_, callback) {
              var root3023 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp5201 = mobl.ref(null);
              
              
              var tmp5200 = mobl.ref(null);
              
              var nodes2230 = $("<span>");
              root3023.append(nodes2230);
              subs__.addSub((mobl.label)(tabName, tmp5200, tmp5201, function(_, callback) {
                var root3024 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3024); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2230;
                nodes2230 = node.contents();
                oldNodes.replaceWith(nodes2230);
              }));
              callback(root3023); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2229;
              nodes2229 = node.contents();
              oldNodes.replaceWith(nodes2229);
            }));
            
            var oldNodes = iternode249;
            iternode249 = iternode249.contents();
            oldNodes.replaceWith(iternode249);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list249.addEventListener('change', function() { listSubs__.unsubscribe(); renderList249(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList249(true); }));
      });
    };
    renderList249();
    
    callback(root3022); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2228;
    nodes2228 = node.contents();
    oldNodes.replaceWith(nodes2228);
  }));
  
  var node1000 = mobl.loadingSpan();
  root3021.append(node1000);
  var list250;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList250 = function() {
    var subs__ = listSubs__;
    list250 = tabs.get();
    list250.list(function(results701) {
      node1000.empty();
      for(var i250 = 0; i250 < results701.length; i250++) {
        (function() {
          var iternode250 = $("<span>");
          node1000.append(iternode250);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results701), i250), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results701), i250), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results701), i250), "_3");
          
          var tmp5209 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp5209.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp5209.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp5209.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp5209.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp5212 = mobl.ref(null);
          
          
          var tmp5211 = mobl.ref(null);
          
          
          var tmp5210 = mobl.ref(null);
          
          var nodes2231 = $("<span>");
          iternode250.append(nodes2231);
          subs__.addSub((mobl.block)(tmp5209, tmp5210, tmp5211, tmp5212, function(_, callback) {
            var root3025 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes2232 = $("<span>");
            root3025.append(nodes2232);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root3026 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2233 = $("<span>");
              root3026.append(nodes2233);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl422();
              }));
              
              function renderControl422() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root3027 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root3027); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2233;
                  nodes2233 = node.contents();
                  oldNodes.replaceWith(nodes2233);
                }));
              }
              renderControl422();
              callback(root3026); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2232;
              nodes2232 = node.contents();
              oldNodes.replaceWith(nodes2232);
            }));
            callback(root3025); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes2231;
            nodes2231 = node.contents();
            oldNodes.replaceWith(nodes2231);
          }));
          
          var oldNodes = iternode250;
          iternode250 = iternode250.contents();
          oldNodes.replaceWith(iternode250);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list250.addEventListener('change', function() { listSubs__.unsubscribe(); renderList250(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList250(true); }));
    });
  };
  renderList250();
  
  callback(root3021); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root3028 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1001 = $("<div>");
  
  var ref1018 = mobl.ref(ui.searchboxStyle);
  if(ref1018.get() !== null) {
    node1001.attr('class', ref1018.get());
    subs__.addSub(ref1018.addEventListener('change', function(_, ref, val) {
      node1001.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1018.rebind());
  
  
  var node1002 = $("<input>");
  node1002.attr('type', "search");
  
  var ref1015 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1015.get() !== null) {
    node1002.attr('class', ref1015.get());
    subs__.addSub(ref1015.addEventListener('change', function(_, ref, val) {
      node1002.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1015.rebind());
  
  var ref1016 = placeholder;
  if(ref1016.get() !== null) {
    node1002.attr('placeholder', ref1016.get());
    subs__.addSub(ref1016.addEventListener('change', function(_, ref, val) {
      node1002.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1016.rebind());
  
  var ref1017 = s;
  node1002.val(""+ref1017.get());
  var ignore209 = false;
  subs__.addSub(ref1017.addEventListener('change', function(_, ref, val) {
    if(ignore209) return;
    node1002.val(""+val);
  }));
  subs__.addSub(ref1017.rebind());
  
  subs__.addSub(mobl.domBind(node1002, 'keyup change', function() {
    ignore209 = true;
    s.set(mobl.stringTomobl__String(node1002.val()));
    ignore209 = false;
  }));
  
  
  var val584 = onsearch.get();
  if(val584 !== null) {
    subs__.addSub(mobl.domBind(node1002, 'change', val584));
  }
  
  var val585 = onkeyup.get();
  if(val585 !== null) {
    subs__.addSub(mobl.domBind(node1002, 'keyup', val585));
  }
  node1002.attr('autocorrect', false);
  node1002.attr('autocapitalize', false);
  node1002.attr('autocomplete', false);
  
  node1001.append(node1002);
  root3028.append(node1001);
  callback(root3028); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root3029 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1019 = mobl.ref(ui.contextMenuStyle);
  if(ref1019.get() !== null) {
    menu.attr('class', ref1019.get());
    subs__.addSub(ref1019.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1019.rebind());
  
  var nodes2234 = $("<span>");
  menu.append(nodes2234);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl423();
  }));
  
  function renderControl423() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3030 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3030); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2234;
      nodes2234 = node.contents();
      oldNodes.replaceWith(nodes2234);
    }));
  }
  renderControl423();
  root3029.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val586 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp5295 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val586 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val586));
  }
  
  root3029.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root3029); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root3031 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5281 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp5281.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1003 = $("<span>");
  root3031.append(node1003);
  var condSubs216 = new mobl.CompSubscription();
  subs__.addSub(condSubs216);
  var oldValue216;
  var renderCond216 = function() {
    var value492 = tmp5281.get();
    if(oldValue216 === value492) return;
    oldValue216 = value492;
    var subs__ = condSubs216;
    subs__.unsubscribe();
    node1003.empty();
    if(value492) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node1004 = $("<div>");
        node1004.attr('width', "100%");
        
        
        var node1005 = $("<div>");
        node1005.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes2237 = $("<span>");
        node1005.append(nodes2237);
        subs__.addSub((ui.group)(function(_, callback) {
          var root3034 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1008 = mobl.loadingSpan();
          root3034.append(node1008);
          var list251;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList251 = function() {
            var subs__ = listSubs__;
            list251 = items.get();
            list251.list(function(results702) {
              node1008.empty();
              for(var i251 = 0; i251 < results702.length; i251++) {
                (function() {
                  var iternode251 = $("<span>");
                  node1008.append(iternode251);
                  var it;
                  it = mobl.ref(mobl.ref(results702), i251);
                  
                  var tmp5226 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp5226.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp5226.set(it.get() == current.get());
                  }));
                  
                  
                  var node1009 = $("<span>");
                  iternode251.append(node1009);
                  var condSubs218 = new mobl.CompSubscription();
                  subs__.addSub(condSubs218);
                  var oldValue218;
                  var renderCond218 = function() {
                    var value494 = tmp5226.get();
                    if(oldValue218 === value494) return;
                    oldValue218 = value494;
                    var subs__ = condSubs218;
                    subs__.unsubscribe();
                    node1009.empty();
                    if(value494) {
                      
                      var tmp5222 = mobl.ref(false);
                      
                      
                      var tmp5221 = mobl.ref(null);
                      
                      
                      var tmp5220 = mobl.ref(null);
                      
                      var nodes2238 = $("<span>");
                      node1009.append(nodes2238);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp5220, tmp5221, tmp5222, function(_, callback) {
                        var root3035 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes2239 = $("<span>");
                        root3035.append(nodes2239);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl425();
                        }));
                        
                        function renderControl425() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root3036 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root3036); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes2239;
                            nodes2239 = node.contents();
                            oldNodes.replaceWith(nodes2239);
                          }));
                        }
                        renderControl425();
                        callback(root3035); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2238;
                        nodes2238 = node.contents();
                        oldNodes.replaceWith(nodes2238);
                      }));
                      
                      
                    } else {
                      
                      var tmp5224 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp5223 = mobl.ref(true);
                      
                      
                      var tmp5225 = mobl.ref(null);
                      
                      var nodes2240 = $("<span>");
                      node1009.append(nodes2240);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5224, tmp5225, tmp5223, function(_, callback) {
                        var root3037 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes2241 = $("<span>");
                        root3037.append(nodes2241);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl426();
                        }));
                        
                        function renderControl426() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root3038 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root3038); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes2241;
                            nodes2241 = node.contents();
                            oldNodes.replaceWith(nodes2241);
                          }));
                        }
                        renderControl426();
                        callback(root3037); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2240;
                        nodes2240 = node.contents();
                        oldNodes.replaceWith(nodes2240);
                      }));
                      
                      
                    }
                  };
                  renderCond218();
                  subs__.addSub(tmp5226.addEventListener('change', function() {
                    renderCond218();
                  }));
                  
                  
                  var oldNodes = iternode251;
                  iternode251 = iternode251.contents();
                  oldNodes.replaceWith(iternode251);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list251.addEventListener('change', function() { listSubs__.unsubscribe(); renderList251(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList251(true); }));
            });
          };
          renderList251();
          
          callback(root3034); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes2237;
          nodes2237 = node.contents();
          oldNodes.replaceWith(nodes2237);
        }));
        node1004.append(node1005);
        
        var node1006 = $("<div>");
        node1006.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1007 = $("<span>");
        node1006.append(node1007);
        var condSubs217 = new mobl.CompSubscription();
        subs__.addSub(condSubs217);
        var oldValue217;
        var renderCond217 = function() {
          var value493 = current.get();
          if(oldValue217 === value493) return;
          oldValue217 = value493;
          var subs__ = condSubs217;
          subs__.unsubscribe();
          node1007.empty();
          if(value493) {
            var nodes2235 = $("<span>");
            node1007.append(nodes2235);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl424();
            }));
            
            function renderControl424() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root3032 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3032); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2235;
                nodes2235 = node.contents();
                oldNodes.replaceWith(nodes2235);
              }));
            }
            renderControl424();
            
            
          } else {
            
            var tmp5227 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp5229 = mobl.ref(null);
            
            
            var tmp5228 = mobl.ref(null);
            
            var nodes2236 = $("<span>");
            node1007.append(nodes2236);
            subs__.addSub((mobl.label)(tmp5227, tmp5228, tmp5229, function(_, callback) {
              var root3033 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root3033); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2236;
              nodes2236 = node.contents();
              oldNodes.replaceWith(nodes2236);
            }));
            
            
          }
        };
        renderCond217();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond217();
        }));
        
        node1004.append(node1006);
        node1003.append(node1004);
        
        
        
        
        
        
      });
    } else {
      var nodes2242 = $("<span>");
      node1003.append(nodes2242);
      subs__.addSub((ui.group)(function(_, callback) {
        var root3039 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1010 = mobl.loadingSpan();
        root3039.append(node1010);
        var list252;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList252 = function() {
          var subs__ = listSubs__;
          list252 = items.get();
          list252.list(function(results703) {
            node1010.empty();
            for(var i252 = 0; i252 < results703.length; i252++) {
              (function() {
                var iternode252 = $("<span>");
                node1010.append(iternode252);
                var it;
                it = mobl.ref(mobl.ref(results703), i252);
                
                var tmp5213 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp5296 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp5215 = mobl.ref(false);
                
                
                var tmp5214 = mobl.ref(null);
                
                var nodes2243 = $("<span>");
                iternode252.append(nodes2243);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5213, tmp5214, tmp5215, function(_, callback) {
                  var root3040 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2244 = $("<span>");
                  root3040.append(nodes2244);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl427();
                  }));
                  
                  function renderControl427() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root3041 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root3041); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2244;
                      nodes2244 = node.contents();
                      oldNodes.replaceWith(nodes2244);
                    }));
                  }
                  renderControl427();
                  callback(root3040); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2243;
                  nodes2243 = node.contents();
                  oldNodes.replaceWith(nodes2243);
                }));
                
                var oldNodes = iternode252;
                iternode252 = iternode252.contents();
                oldNodes.replaceWith(iternode252);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list252.addEventListener('change', function() { listSubs__.unsubscribe(); renderList252(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList252(true); }));
          });
        };
        renderList252();
        
        callback(root3039); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2242;
        nodes2242 = node.contents();
        oldNodes.replaceWith(nodes2242);
      }));
      
      
    }
  };
  renderCond216();
  subs__.addSub(tmp5281.addEventListener('change', function() {
    renderCond216();
  }));
  
  callback(root3031); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root3042 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp5218 = mobl.ref("Detail");
  
  
  var tmp5219 = mobl.ref(null);
  
  var nodes2245 = $("<span>");
  root3042.append(nodes2245);
  subs__.addSub((ui.header)(tmp5218, tmp5219, function(_, callback) {
    var root3043 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp5217 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp5216 = mobl.ref("Back");
    
    var nodes2246 = $("<span>");
    root3043.append(nodes2246);
    subs__.addSub((ui.backButton)(tmp5216, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5217, function(_, callback) {
      var root3044 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3044); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2246;
      nodes2246 = node.contents();
      oldNodes.replaceWith(nodes2246);
    }));
    callback(root3043); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2245;
    nodes2245 = node.contents();
    oldNodes.replaceWith(nodes2245);
  }));
  var nodes2247 = $("<span>");
  root3042.append(nodes2247);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl428();
  }));
  
  function renderControl428() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root3045 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3045); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2247;
      nodes2247 = node.contents();
      oldNodes.replaceWith(nodes2247);
    }));
  }
  renderControl428();
  callback(root3042); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root3046 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes2248 = $("<span>");
  root3046.append(nodes2248);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3047 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1011 = mobl.loadingSpan();
    root3047.append(node1011);
    var list253;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList253 = function() {
      var subs__ = listSubs__;
      list253 = coll.get();
      list253.list(function(results704) {
        node1011.empty();
        for(var i253 = 0; i253 < results704.length; i253++) {
          (function() {
            var iternode253 = $("<span>");
            node1011.append(iternode253);
            var it;
            it = mobl.ref(mobl.ref(results704), i253);
            
            var tmp5236 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp5236.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp5236.set(it.get() == selected.get());
            }));
            
            
            var node1012 = $("<span>");
            iternode253.append(node1012);
            var condSubs219 = new mobl.CompSubscription();
            subs__.addSub(condSubs219);
            var oldValue219;
            var renderCond219 = function() {
              var value495 = tmp5236.get();
              if(oldValue219 === value495) return;
              oldValue219 = value495;
              var subs__ = condSubs219;
              subs__.unsubscribe();
              node1012.empty();
              if(value495) {
                
                var tmp5232 = mobl.ref(false);
                
                
                var tmp5231 = mobl.ref(null);
                
                
                var tmp5230 = mobl.ref(null);
                
                var nodes2249 = $("<span>");
                node1012.append(nodes2249);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5230, tmp5231, tmp5232, function(_, callback) {
                  var root3048 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2250 = $("<span>");
                  root3048.append(nodes2250);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl429();
                  }));
                  
                  function renderControl429() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root3049 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root3049); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2250;
                      nodes2250 = node.contents();
                      oldNodes.replaceWith(nodes2250);
                    }));
                  }
                  renderControl429();
                  callback(root3048); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2249;
                  nodes2249 = node.contents();
                  oldNodes.replaceWith(nodes2249);
                }));
                
                
              } else {
                
                var tmp5234 = mobl.ref(true);
                
                
                var tmp5233 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp5235 = mobl.ref(null);
                
                var nodes2251 = $("<span>");
                node1012.append(nodes2251);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5233, tmp5235, tmp5234, function(_, callback) {
                  var root3050 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2252 = $("<span>");
                  root3050.append(nodes2252);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl430();
                  }));
                  
                  function renderControl430() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root3051 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root3051); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2252;
                      nodes2252 = node.contents();
                      oldNodes.replaceWith(nodes2252);
                    }));
                  }
                  renderControl430();
                  callback(root3050); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2251;
                  nodes2251 = node.contents();
                  oldNodes.replaceWith(nodes2251);
                }));
                
                
              }
            };
            renderCond219();
            subs__.addSub(tmp5236.addEventListener('change', function() {
              renderCond219();
            }));
            
            
            var oldNodes = iternode253;
            iternode253 = iternode253.contents();
            oldNodes.replaceWith(iternode253);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list253.addEventListener('change', function() { listSubs__.unsubscribe(); renderList253(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList253(true); }));
      });
    };
    renderList253();
    
    callback(root3047); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2248;
    nodes2248 = node.contents();
    oldNodes.replaceWith(nodes2248);
  }));
  callback(root3046); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root3052 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes2253 = $("<span>");
    root3052.append(nodes2253);
    subs__.addSub((ui.group)(function(_, callback) {
      var root3053 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp5240 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp5240.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp5240.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp5240.set(coll.get().limit(n.get()));
      }));
      
      
      var node1013 = mobl.loadingSpan();
      root3053.append(node1013);
      var list254;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList254 = function() {
        var subs__ = listSubs__;
        list254 = tmp5240.get();
        list254.list(function(results705) {
          node1013.empty();
          for(var i254 = 0; i254 < results705.length; i254++) {
            (function() {
              var iternode254 = $("<span>");
              node1013.append(iternode254);
              var it;
              it = mobl.ref(mobl.ref(results705), i254);
              
              var tmp5237 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp5239 = mobl.ref(false);
              
              
              var tmp5238 = mobl.ref(null);
              
              var nodes2254 = $("<span>");
              iternode254.append(nodes2254);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5237, tmp5238, tmp5239, function(_, callback) {
                var root3054 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes2255 = $("<span>");
                root3054.append(nodes2255);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl431();
                }));
                
                function renderControl431() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root3055 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root3055); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes2255;
                    nodes2255 = node.contents();
                    oldNodes.replaceWith(nodes2255);
                  }));
                }
                renderControl431();
                callback(root3054); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes2254;
                nodes2254 = node.contents();
                oldNodes.replaceWith(nodes2254);
              }));
              
              var oldNodes = iternode254;
              iternode254 = iternode254.contents();
              oldNodes.replaceWith(iternode254);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list254.addEventListener('change', function() { listSubs__.unsubscribe(); renderList254(true); }));
          subs__.addSub(tmp5240.addEventListener('change', function() { listSubs__.unsubscribe(); renderList254(true); }));
        });
      };
      renderList254();
      
      
      var tmp5243 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp5243.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp5243.set(n.get() < total.get());
      }));
      
      
      var node1014 = $("<span>");
      root3053.append(node1014);
      var condSubs220 = new mobl.CompSubscription();
      subs__.addSub(condSubs220);
      var oldValue220;
      var renderCond220 = function() {
        var value496 = tmp5243.get();
        if(oldValue220 === value496) return;
        oldValue220 = value496;
        var subs__ = condSubs220;
        subs__.unsubscribe();
        node1014.empty();
        if(value496) {
          
          var node1015 = $("<li>");
          
          var ref1020 = mobl.ref(ui.loadMoreStyle);
          if(ref1020.get() !== null) {
            node1015.attr('class', ref1020.get());
            subs__.addSub(ref1020.addEventListener('change', function(_, ref, val) {
              node1015.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1020.rebind());
          
          var val587 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val587 !== null) {
            subs__.addSub(mobl.domBind(node1015, 'tap', val587));
          }
          
          
          var tmp5242 = mobl.ref(null);
          
          
          var tmp5241 = mobl.ref(null);
          
          var nodes2256 = $("<span>");
          node1015.append(nodes2256);
          subs__.addSub((mobl.label)(moreLabel, tmp5241, tmp5242, function(_, callback) {
            var root3056 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root3056); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2256;
            nodes2256 = node.contents();
            oldNodes.replaceWith(nodes2256);
          }));
          node1014.append(node1015);
          
          
          
        } else {
          
        }
      };
      renderCond220();
      subs__.addSub(tmp5243.addEventListener('change', function() {
        renderCond220();
      }));
      
      callback(root3053); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2253;
      nodes2253 = node.contents();
      oldNodes.replaceWith(nodes2253);
    }));
    callback(root3052); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root3057 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2257 = $("<span>");
  root3057.append(nodes2257);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3058 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1016 = mobl.loadingSpan();
    root3058.append(node1016);
    var list255;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList255 = function() {
      var subs__ = listSubs__;
      list255 = items.get();
      list255.list(function(results706) {
        node1016.empty();
        for(var i255 = 0; i255 < results706.length; i255++) {
          (function() {
            var iternode255 = $("<span>");
            node1016.append(iternode255);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results706), i255), "_1");it = mobl.ref(mobl.ref(mobl.ref(results706), i255), "_2");
            
            var tmp5247 = mobl.ref(false);
            
            
            var tmp5246 = mobl.ref(null);
            
            
            var tmp5245 = mobl.ref(null);
            
            var nodes2258 = $("<span>");
            iternode255.append(nodes2258);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5245, tmp5246, tmp5247, function(_, callback) {
              var root3059 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp5244 = mobl.ref(null);
              
              var nodes2259 = $("<span>");
              root3059.append(nodes2259);
              subs__.addSub((ui.checkBox)(checked, it, tmp5244, function(_, callback) {
                var root3060 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3060); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2259;
                nodes2259 = node.contents();
                oldNodes.replaceWith(nodes2259);
              }));
              callback(root3059); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2258;
              nodes2258 = node.contents();
              oldNodes.replaceWith(nodes2258);
            }));
            
            var oldNodes = iternode255;
            iternode255 = iternode255.contents();
            oldNodes.replaceWith(iternode255);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list255.addEventListener('change', function() { listSubs__.unsubscribe(); renderList255(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList255(true); }));
      });
    };
    renderList255();
    
    callback(root3058); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2257;
    nodes2257 = node.contents();
    oldNodes.replaceWith(nodes2257);
  }));
  callback(root3057); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root3061 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll587) {
    coll587 = coll587.reverse();
    function processOne170() {
      var it;
      it = coll587.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll587.length > 0) processOne170(); else rest170();
      
    }
    function rest170() {
      
      var tmp5251 = mobl.ref(null);
      
      var nodes2260 = $("<span>");
      root3061.append(nodes2260);
      subs__.addSub((ui.header)(title, tmp5251, function(_, callback) {
        var root3062 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp5248 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp5249 = mobl.ref(mobl._("Back", []));
        
        var nodes2261 = $("<span>");
        root3062.append(nodes2261);
        subs__.addSub((ui.backButton)(tmp5249, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5248, function(_, callback) {
          var root3063 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3063); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2261;
          nodes2261 = node.contents();
          oldNodes.replaceWith(nodes2261);
        }));
        
        var tmp5250 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll586) {
                               coll586 = coll586.reverse();
                               function processOne169() {
                                 var checked;var it;
                                 var tmp5298 = coll586.pop();
                                 checked = tmp5298._1;it = tmp5298._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll586.length > 0) processOne169(); else rest169();
                                   
                                 } else {
                                   {
                                     
                                     if(coll586.length > 0) processOne169(); else rest169();
                                     
                                   }
                                 }
                               }
                               function rest169() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll586.length > 0) processOne169(); else rest169();
                             });
                             
                           });
        
        var nodes2262 = $("<span>");
        root3062.append(nodes2262);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp5250, function(_, callback) {
          var root3064 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3064); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2262;
          nodes2262 = node.contents();
          oldNodes.replaceWith(nodes2262);
        }));
        callback(root3062); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2260;
        nodes2260 = node.contents();
        oldNodes.replaceWith(nodes2260);
      }));
      var nodes2263 = $("<span>");
      root3061.append(nodes2263);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root3065 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3065); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2263;
        nodes2263 = node.contents();
        oldNodes.replaceWith(nodes2263);
      }));
      callback(root3061); return subs__;
      
      
    }
    if(coll587.length > 0) processOne170(); else rest170();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root3066 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp5253 = mobl.ref(null);
  
  
  var tmp5252 = mobl.ref(null);
  
  var nodes2264 = $("<span>");
  root3066.append(nodes2264);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp5252, tmp5253, function(_, callback) {
    var root3067 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3067); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2264;
    nodes2264 = node.contents();
    oldNodes.replaceWith(nodes2264);
  }));
  
  var tmp5254 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp5254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp5254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp5254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp5254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp5254.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes2265 = $("<span>");
  root3066.append(nodes2265);
  subs__.addSub((ui.masterDetail)(tmp5254, masterItem, detailItem, function(_, callback) {
    var root3068 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3068); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2265;
    nodes2265 = node.contents();
    oldNodes.replaceWith(nodes2265);
  }));
  callback(root3066); return subs__;
  
  
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
  var root3069 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp5267 = mobl.ref(null);
  
  
  var tmp5266 = mobl.ref(null);
  
  
  var tmp5265 = mobl.ref(null);
  
  var nodes2266 = $("<span>");
  root3069.append(nodes2266);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp5265, tmp5266, tmp5267, function(_, callback) {
    var root3070 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1017 = mobl.loadingSpan();
    root3070.append(node1017);
    var list256;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList256 = function() {
      var subs__ = listSubs__;
      list256 = sections.get();
      list256.list(function(results707) {
        node1017.empty();
        for(var i256 = 0; i256 < results707.length; i256++) {
          (function() {
            var iternode256 = $("<span>");
            node1017.append(iternode256);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results707), i256), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results707), i256), "_2");
            
            var tmp5258 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp5258.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp5258.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp5258.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp5258.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp5257 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp5260 = mobl.ref(null);
            
            
            var tmp5259 = mobl.ref(null);
            
            var nodes2267 = $("<span>");
            iternode256.append(nodes2267);
            subs__.addSub((mobl.span)(tmp5258, tmp5259, tmp5257, tmp5260, function(_, callback) {
              var root3071 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp5256 = mobl.ref(null);
              
              
              var tmp5255 = mobl.ref(null);
              
              var nodes2268 = $("<span>");
              root3071.append(nodes2268);
              subs__.addSub((mobl.label)(sectionName, tmp5255, tmp5256, function(_, callback) {
                var root3072 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3072); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2268;
                nodes2268 = node.contents();
                oldNodes.replaceWith(nodes2268);
              }));
              callback(root3071); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2267;
              nodes2267 = node.contents();
              oldNodes.replaceWith(nodes2267);
            }));
            
            var tmp5261 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp5261.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp5261.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp5261.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp5261.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp5264 = mobl.ref(null);
            
            
            var tmp5263 = mobl.ref(null);
            
            
            var tmp5262 = mobl.ref(null);
            
            var nodes2269 = $("<span>");
            iternode256.append(nodes2269);
            subs__.addSub((mobl.block)(tmp5261, tmp5262, tmp5263, tmp5264, function(_, callback) {
              var root3073 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2270 = $("<span>");
              root3073.append(nodes2270);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl432();
              }));
              
              function renderControl432() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root3074 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root3074); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2270;
                  nodes2270 = node.contents();
                  oldNodes.replaceWith(nodes2270);
                }));
              }
              renderControl432();
              callback(root3073); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2269;
              nodes2269 = node.contents();
              oldNodes.replaceWith(nodes2269);
            }));
            
            var oldNodes = iternode256;
            iternode256 = iternode256.contents();
            oldNodes.replaceWith(iternode256);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list256.addEventListener('change', function() { listSubs__.unsubscribe(); renderList256(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList256(true); }));
      });
    };
    renderList256();
    
    callback(root3070); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2266;
    nodes2266 = node.contents();
    oldNodes.replaceWith(nodes2266);
  }));
  callback(root3069); return subs__;
  
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
  var root3075 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1018 = $("<table>");
  
  var ref1021 = mobl.ref(ui.tableStyle);
  if(ref1021.get() !== null) {
    node1018.attr('class', ref1021.get());
    subs__.addSub(ref1021.addEventListener('change', function(_, ref, val) {
      node1018.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1021.rebind());
  
  var nodes2271 = $("<span>");
  node1018.append(nodes2271);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl433();
  }));
  
  function renderControl433() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3076 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3076); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2271;
      nodes2271 = node.contents();
      oldNodes.replaceWith(nodes2271);
    }));
  }
  renderControl433();
  root3075.append(node1018);
  callback(root3075); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root3077 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1019 = $("<tr>");
  
  var ref1022 = mobl.ref(ui.trStyle);
  if(ref1022.get() !== null) {
    node1019.attr('class', ref1022.get());
    subs__.addSub(ref1022.addEventListener('change', function(_, ref, val) {
      node1019.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1022.rebind());
  
  var nodes2272 = $("<span>");
  node1019.append(nodes2272);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl434();
  }));
  
  function renderControl434() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3078 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3078); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2272;
      nodes2272 = node.contents();
      oldNodes.replaceWith(nodes2272);
    }));
  }
  renderControl434();
  root3077.append(node1019);
  callback(root3077); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root3079 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1020 = $("<td>");
  
  var ref1023 = width;
  if(ref1023.get() !== null) {
    node1020.attr('width', ref1023.get());
    subs__.addSub(ref1023.addEventListener('change', function(_, ref, val) {
      node1020.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1023.rebind());
  
  var ref1024 = mobl.ref(ui.tdStyle);
  if(ref1024.get() !== null) {
    node1020.attr('class', ref1024.get());
    subs__.addSub(ref1024.addEventListener('change', function(_, ref, val) {
      node1020.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1024.rebind());
  
  var nodes2273 = $("<span>");
  node1020.append(nodes2273);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl435();
  }));
  
  function renderControl435() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3080 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3080); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2273;
      nodes2273 = node.contents();
      oldNodes.replaceWith(nodes2273);
    }));
  }
  renderControl435();
  root3079.append(node1020);
  callback(root3079); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root3081 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1021 = $("<td>");
  
  var ref1025 = width;
  if(ref1025.get() !== null) {
    node1021.attr('width', ref1025.get());
    subs__.addSub(ref1025.addEventListener('change', function(_, ref, val) {
      node1021.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1025.rebind());
  
  var ref1026 = mobl.ref(ui.tdStyle);
  if(ref1026.get() !== null) {
    node1021.attr('class', ref1026.get());
    subs__.addSub(ref1026.addEventListener('change', function(_, ref, val) {
      node1021.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1026.rebind());
  
  var nodes2274 = $("<span>");
  node1021.append(nodes2274);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl436();
  }));
  
  function renderControl436() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3082 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3082); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2274;
      nodes2274 = node.contents();
      oldNodes.replaceWith(nodes2274);
    }));
  }
  renderControl436();
  root3081.append(node1021);
  callback(root3081); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root3083 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1022 = $("<td>");
  
  var ref1027 = width;
  if(ref1027.get() !== null) {
    node1022.attr('width', ref1027.get());
    subs__.addSub(ref1027.addEventListener('change', function(_, ref, val) {
      node1022.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1027.rebind());
  
  var ref1028 = mobl.ref(ui.tdStyle);
  if(ref1028.get() !== null) {
    node1022.attr('class', ref1028.get());
    subs__.addSub(ref1028.addEventListener('change', function(_, ref, val) {
      node1022.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1028.rebind());
  
  
  var node1023 = $("<strong>");
  
  var nodes2275 = $("<span>");
  node1023.append(nodes2275);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl437();
  }));
  
  function renderControl437() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3084); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2275;
      nodes2275 = node.contents();
      oldNodes.replaceWith(nodes2275);
    }));
  }
  renderControl437();
  node1022.append(node1023);
  root3083.append(node1022);
  callback(root3083); return subs__;
  
  
  
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
}(ui));ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root3085 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp5276 = mobl.ref(null);
  
  
  var tmp5275 = mobl.ref(null);
  
  
  var tmp5274 = mobl.ref(null);
  
  var nodes2276 = $("<span>");
  root3085.append(nodes2276);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp5274, tmp5275, tmp5276, function(_, callback) {
    var root3086 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1024 = mobl.loadingSpan();
    root3086.append(node1024);
    var list257;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList257 = function() {
      var subs__ = listSubs__;
      list257 = tabs.get();
      list257.list(function(results708) {
        node1024.empty();
        for(var i257 = 0; i257 < results708.length; i257++) {
          (function() {
            var iternode257 = $("<span>");
            node1024.append(iternode257);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results708), i257), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results708), i257), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results708), i257), "_3");
            
            var tmp5271 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp5271.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp5271.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp5271.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp5271.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp5270 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp5273 = mobl.ref(null);
            
            
            var tmp5272 = mobl.ref(null);
            
            var nodes2277 = $("<span>");
            iternode257.append(nodes2277);
            subs__.addSub((mobl.span)(tmp5271, tmp5272, tmp5270, tmp5273, function(_, callback) {
              var root3087 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp5269 = mobl.ref(null);
              
              
              var tmp5268 = mobl.ref(null);
              
              var nodes2278 = $("<span>");
              root3087.append(nodes2278);
              subs__.addSub((mobl.label)(tabName, tmp5268, tmp5269, function(_, callback) {
                var root3088 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3088); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2278;
                nodes2278 = node.contents();
                oldNodes.replaceWith(nodes2278);
              }));
              callback(root3087); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2277;
              nodes2277 = node.contents();
              oldNodes.replaceWith(nodes2277);
            }));
            
            var oldNodes = iternode257;
            iternode257 = iternode257.contents();
            oldNodes.replaceWith(iternode257);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list257.addEventListener('change', function() { listSubs__.unsubscribe(); renderList257(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList257(true); }));
      });
    };
    renderList257();
    
    callback(root3086); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2276;
    nodes2276 = node.contents();
    oldNodes.replaceWith(nodes2276);
  }));
  
  var node1025 = mobl.loadingSpan();
  root3085.append(node1025);
  var list258;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList258 = function() {
    var subs__ = listSubs__;
    list258 = tabs.get();
    list258.list(function(results709) {
      node1025.empty();
      for(var i258 = 0; i258 < results709.length; i258++) {
        (function() {
          var iternode258 = $("<span>");
          node1025.append(iternode258);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results709), i258), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results709), i258), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results709), i258), "_3");
          
          var tmp5277 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp5277.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp5277.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp5277.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp5277.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp5280 = mobl.ref(null);
          
          
          var tmp5279 = mobl.ref(null);
          
          
          var tmp5278 = mobl.ref(null);
          
          var nodes2279 = $("<span>");
          iternode258.append(nodes2279);
          subs__.addSub((mobl.block)(tmp5277, tmp5278, tmp5279, tmp5280, function(_, callback) {
            var root3089 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes2280 = $("<span>");
            root3089.append(nodes2280);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root3090 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2281 = $("<span>");
              root3090.append(nodes2281);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl438();
              }));
              
              function renderControl438() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root3091 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root3091); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2281;
                  nodes2281 = node.contents();
                  oldNodes.replaceWith(nodes2281);
                }));
              }
              renderControl438();
              callback(root3090); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2280;
              nodes2280 = node.contents();
              oldNodes.replaceWith(nodes2280);
            }));
            callback(root3089); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes2279;
            nodes2279 = node.contents();
            oldNodes.replaceWith(nodes2279);
          }));
          
          var oldNodes = iternode258;
          iternode258 = iternode258.contents();
          oldNodes.replaceWith(iternode258);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list258.addEventListener('change', function() { listSubs__.unsubscribe(); renderList258(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList258(true); }));
    });
  };
  renderList258();
  
  callback(root3085); return subs__;
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root3092 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var slider = $("<div>");
  
  root3092.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  callback(root3092); return subs__;
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
