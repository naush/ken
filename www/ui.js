mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root26607 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12504 = $("<span>");
  root26607.append(node12504);
  var condSubs2326 = new mobl.CompSubscription();
  subs__.addSub(condSubs2326);
  var oldValue2326;
  var renderCond2326 = function() {
    var value5248 = value.get();
    if(oldValue2326 === value5248) return;
    oldValue2326 = value5248;
    var subs__ = condSubs2326;
    subs__.unsubscribe();
    node12504.empty();
    if(value5248) {
      var nodes17920 = $("<span>");
      node12504.append(nodes17920);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl5625();
      }));
      
      function renderControl5625() {
        subs__.addSub((elements)(function(elements, callback) {
          var root26608 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26608); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17920;
          nodes17920 = node.contents();
          oldNodes.replaceWith(nodes17920);
        }));
      }
      renderControl5625();
      
      
    } else {
      
      var tmp31352 = mobl.ref(null);
      
      
      var tmp31351 = mobl.ref(null);
      
      
      var tmp31350 = mobl.ref(null);
      
      var nodes17921 = $("<span>");
      node12504.append(nodes17921);
      subs__.addSub((mobl.block)(style, tmp31350, tmp31351, tmp31352, function(_, callback) {
        var root26609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp31342 = mobl.ref(null);
        
        
        var tmp31341 = mobl.ref(null);
        
        var nodes17922 = $("<span>");
        root26609.append(nodes17922);
        subs__.addSub((mobl.label)(loadingMessage, tmp31341, tmp31342, function(_, callback) {
          var root26610 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26610); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17922;
          nodes17922 = node.contents();
          oldNodes.replaceWith(nodes17922);
        }));
        
        var tmp31344 = mobl.ref("middle");
        
        
        var tmp31343 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp31349 = mobl.ref(null);
        
        
        var tmp31348 = mobl.ref(null);
        
        
        var tmp31347 = mobl.ref(null);
        
        
        var tmp31346 = mobl.ref(null);
        
        
        var tmp31345 = mobl.ref(null);
        
        var nodes17923 = $("<span>");
        root26609.append(nodes17923);
        subs__.addSub((ui.image)(tmp31343, tmp31345, tmp31346, tmp31347, tmp31348, tmp31344, tmp31349, function(_, callback) {
          var root26611 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26611); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17923;
          nodes17923 = node.contents();
          oldNodes.replaceWith(nodes17923);
        }));
        callback(root26609); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes17921;
        nodes17921 = node.contents();
        oldNodes.replaceWith(nodes17921);
      }));
      
      
    }
  };
  renderCond2326();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond2326();
  }));
  
  callback(root26607); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root26612 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12505 = $("<div>");
  
  var ref13429 = mobl.ref(ui.headerStyle);
  if(ref13429.get() !== null) {
    node12505.attr('class', ref13429.get());
    subs__.addSub(ref13429.addEventListener('change', function(_, ref, val) {
      node12505.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13429.rebind());
  
  var val7436 = onclick.get();
  if(val7436 !== null) {
    subs__.addSub(mobl.domBind(node12505, 'tap', val7436));
  }
  
  
  var node12506 = $("<div>");
  
  var ref13428 = mobl.ref(ui.headerContainerStyle);
  if(ref13428.get() !== null) {
    node12506.attr('class', ref13428.get());
    subs__.addSub(ref13428.addEventListener('change', function(_, ref, val) {
      node12506.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13428.rebind());
  
  
  var node12507 = $("<div>");
  
  var ref13426 = text;
  node12507.text(""+ref13426.get());
  var ignore2698 = false;
  subs__.addSub(ref13426.addEventListener('change', function(_, ref, val) {
    if(ignore2698) return;
    node12507.text(""+val);
  }));
  subs__.addSub(ref13426.rebind());
  
  
  var ref13427 = mobl.ref(ui.headerTextStyle);
  if(ref13427.get() !== null) {
    node12507.attr('class', ref13427.get());
    subs__.addSub(ref13427.addEventListener('change', function(_, ref, val) {
      node12507.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13427.rebind());
  
  node12506.append(node12507);
  node12505.append(node12506);
  var nodes17924 = $("<span>");
  node12505.append(nodes17924);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5626();
  }));
  
  function renderControl5626() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26613 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26613); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17924;
      nodes17924 = node.contents();
      oldNodes.replaceWith(nodes17924);
    }));
  }
  renderControl5626();
  root26612.append(node12505);
  callback(root26612); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root26614 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref13430 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref13430.get() !== null) {
    sp.attr('class', ref13430.get());
    subs__.addSub(ref13430.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref13430.rebind());
  
  var val7437 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val7437 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val7437));
  }
  
  var val7438 = function(event, callback) {
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
  if(val7438 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val7438));
  }
  
  var val7439 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after2434(result__) {
                    var tmp31442 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after2434);if(result__ !== undefined) after2434(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7439 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val7439));
  }
  
  var val7440 = function(event, callback) {
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
  if(val7440 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val7440));
  }
  
  var ref13431 = text;
  sp.text(""+ref13431.get());
  var ignore2699 = false;
  subs__.addSub(ref13431.addEventListener('change', function(_, ref, val) {
    if(ignore2699) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref13431.rebind());
  
  
  root26614.append(sp);
  callback(root26614); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root26615 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17925 = $("<span>");
  root26615.append(nodes17925);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root26616 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26616); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17925;
    nodes17925 = node.contents();
    oldNodes.replaceWith(nodes17925);
  }));
  callback(root26615); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root26617 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17926 = $("<span>");
  root26617.append(nodes17926);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root26618 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26618); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17926;
    nodes17926 = node.contents();
    oldNodes.replaceWith(nodes17926);
  }));
  callback(root26617); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root26619 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12508 = $("<ul>");
  
  var ref13432 = mobl.ref(ui.groupStyle);
  if(ref13432.get() !== null) {
    node12508.attr('class', ref13432.get());
    subs__.addSub(ref13432.addEventListener('change', function(_, ref, val) {
      node12508.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13432.rebind());
  
  var nodes17927 = $("<span>");
  node12508.append(nodes17927);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5627();
  }));
  
  function renderControl5627() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26620 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26620); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17927;
      nodes17927 = node.contents();
      oldNodes.replaceWith(nodes17927);
    }));
  }
  renderControl5627();
  root26619.append(node12508);
  callback(root26619); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root26621 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12509 = $("<img>");
  
  var ref13433 = url;
  if(ref13433.get() !== null) {
    node12509.attr('src', ref13433.get());
    subs__.addSub(ref13433.addEventListener('change', function(_, ref, val) {
      node12509.attr('src', val);
    }));
    
  }
  subs__.addSub(ref13433.rebind());
  
  var ref13434 = width;
  if(ref13434.get() !== null) {
    node12509.attr('width', ref13434.get());
    subs__.addSub(ref13434.addEventListener('change', function(_, ref, val) {
      node12509.attr('width', val);
    }));
    
  }
  subs__.addSub(ref13434.rebind());
  
  var ref13435 = height;
  if(ref13435.get() !== null) {
    node12509.attr('height', ref13435.get());
    subs__.addSub(ref13435.addEventListener('change', function(_, ref, val) {
      node12509.attr('height', val);
    }));
    
  }
  subs__.addSub(ref13435.rebind());
  
  var ref13436 = style;
  if(ref13436.get() !== null) {
    node12509.attr('class', ref13436.get());
    subs__.addSub(ref13436.addEventListener('change', function(_, ref, val) {
      node12509.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13436.rebind());
  
  var val7441 = onclick.get();
  if(val7441 !== null) {
    subs__.addSub(mobl.domBind(node12509, 'tap', val7441));
  }
  
  var ref13437 = valign;
  if(ref13437.get() !== null) {
    node12509.attr('valign', ref13437.get());
    subs__.addSub(ref13437.addEventListener('change', function(_, ref, val) {
      node12509.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref13437.rebind());
  
  var ref13438 = align;
  if(ref13438.get() !== null) {
    node12509.attr('align', ref13438.get());
    subs__.addSub(ref13438.addEventListener('change', function(_, ref, val) {
      node12509.attr('align', val);
    }));
    
  }
  subs__.addSub(ref13438.rebind());
  
  root26621.append(node12509);
  callback(root26621); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root26622 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref13439 = mobl.ref(ui.itemStyle);
  if(ref13439.get() !== null) {
    el.attr('class', ref13439.get());
    subs__.addSub(ref13439.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13439.rebind());
  
  var ref13440 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref13440.get() !== null) {
    el.attr('class', ref13440.get());
    subs__.addSub(ref13440.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref13440.rebind());
  
  var val7442 = onswipe.get();
  if(val7442 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val7442));
  }
  
  var val7443 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp31443 = result__;
                                           function after2435(result__) {
                                             var tmp31444 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after2435);if(result__ !== undefined) after2435(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp31445 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val7443 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val7443));
  }
  
  var nodes17928 = $("<span>");
  el.append(nodes17928);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5628();
  }));
  
  function renderControl5628() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26623 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26623); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17928;
      nodes17928 = node.contents();
      oldNodes.replaceWith(nodes17928);
    }));
  }
  renderControl5628();
  root26622.append(el);
  callback(root26622); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root26624 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12510 = $("<input>");
  node12510.attr('type', "checkbox");
  
  var ref13442 = b;
  node12510.attr('checked', !!ref13442.get());
  subs__.addSub(ref13442.addEventListener('change', function(_, ref, val) {
    if(ref === ref13442) node12510.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node12510, 'change', function() {
    b.set(!!node12510.attr('checked'));
  }));
  
  var val7445 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val7445 !== null) {
    subs__.addSub(mobl.domBind(node12510, 'tap', val7445));
  }
  
  var val7446 = onchange.get();
  if(val7446 !== null) {
    subs__.addSub(mobl.domBind(node12510, 'change', val7446));
  }
  
  root26624.append(node12510);
  
  root26624.append(" ");
  
  var node12511 = $("<span>");
  
  var ref13441 = label;
  node12511.text(""+ref13441.get());
  var ignore2700 = false;
  subs__.addSub(ref13441.addEventListener('change', function(_, ref, val) {
    if(ignore2700) return;
    node12511.text(""+val);
  }));
  subs__.addSub(ref13441.rebind());
  
  
  var val7444 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2436(result__) {
                    var tmp31446 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2436);if(result__ !== undefined) after2436(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7444 !== null) {
    subs__.addSub(mobl.domBind(node12511, 'tap', val7444));
  }
  
  root26624.append(node12511);
  callback(root26624); return subs__;
  
  
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
  var root26625 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12512 = $("<span>");
  root26625.append(node12512);
  var condSubs2327 = new mobl.CompSubscription();
  subs__.addSub(condSubs2327);
  var oldValue2327;
  var renderCond2327 = function() {
    var value5249 = label.get();
    if(oldValue2327 === value5249) return;
    oldValue2327 = value5249;
    var subs__ = condSubs2327;
    subs__.unsubscribe();
    node12512.empty();
    if(value5249) {
      
      var tmp31353 = mobl.ref(null);
      
      var nodes17929 = $("<span>");
      node12512.append(nodes17929);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp31353, function(_, callback) {
        var root26626 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root26626); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17929;
        nodes17929 = node.contents();
        oldNodes.replaceWith(nodes17929);
      }));
      
      
    } else {
      
    }
  };
  renderCond2327();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2327();
  }));
  
  
  var node12513 = $("<span>");
  root26625.append(node12513);
  var condSubs2328 = new mobl.CompSubscription();
  subs__.addSub(condSubs2328);
  var oldValue2328;
  var renderCond2328 = function() {
    var value5250 = validator.get();
    if(oldValue2328 === value5250) return;
    oldValue2328 = value5250;
    var subs__ = condSubs2328;
    subs__.unsubscribe();
    node12513.empty();
    if(value5250) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after2440(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp31447 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node12514 = $("<input>");
        node12514.attr('type', "text");
        
        var ref13443 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref13443.get() !== null) {
          node12514.attr('class', ref13443.get());
          subs__.addSub(ref13443.addEventListener('change', function(_, ref, val) {
            node12514.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node12514.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node12514.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node12514.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref13443.rebind());
        
        var ref13444 = placeholder;
        if(ref13444.get() !== null) {
          node12514.attr('placeholder', ref13444.get());
          subs__.addSub(ref13444.addEventListener('change', function(_, ref, val) {
            node12514.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref13444.rebind());
        
        var ref13445 = temp;
        node12514.val(""+ref13445.get());
        var ignore2701 = false;
        subs__.addSub(ref13445.addEventListener('change', function(_, ref, val) {
          if(ignore2701) return;
          node12514.val(""+val);
        }));
        subs__.addSub(ref13445.rebind());
        
        subs__.addSub(mobl.domBind(node12514, 'keyup change', function() {
          ignore2701 = true;
          temp.set(mobl.stringTomobl__String(node12514.val()));
          ignore2701 = false;
        }));
        
        
        var val7447 = onchange.get();
        if(val7447 !== null) {
          subs__.addSub(mobl.domBind(node12514, 'change', val7447));
        }
        
        var val7448 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after2437(result__) {
                          var tmp31448 = result__;
                          function after2438(result__) {
                            var tmp31449 = result__;
                            var result__ = tmp31449;
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
                          var result__ = validator.get()(temp.get(), after2438);if(result__ !== undefined) after2438(result__);
                        }
                        var result__ = onkeyup.get()(event, after2437);if(result__ !== undefined) after2437(result__);
                      } else {
                        {
                          function after2439(result__) {
                            var tmp31449 = result__;
                            var result__ = tmp31449;
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
                          var result__ = validator.get()(temp.get(), after2439);if(result__ !== undefined) after2439(result__);
                        }
                      }
                    };
        if(val7448 !== null) {
          subs__.addSub(mobl.domBind(node12514, 'keyup', val7448));
        }
        
        var val7449 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val7449 !== null) {
          subs__.addSub(mobl.domBind(node12514, 'blur', val7449));
        }
        
        node12513.append(node12514);
        
        var tmp31354 = mobl.ref(null);
        
        var nodes17930 = $("<span>");
        node12513.append(nodes17930);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp31354, function(_, callback) {
          var root26627 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26627); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17930;
          nodes17930 = node.contents();
          oldNodes.replaceWith(nodes17930);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after2440);if(result__ !== undefined) after2440(result__);
    } else {
      
      var node12515 = $("<input>");
      node12515.attr('type', "text");
      
      var ref13446 = style;
      if(ref13446.get() !== null) {
        node12515.attr('class', ref13446.get());
        subs__.addSub(ref13446.addEventListener('change', function(_, ref, val) {
          node12515.attr('class', val);
        }));
        
      }
      subs__.addSub(ref13446.rebind());
      
      var ref13447 = placeholder;
      if(ref13447.get() !== null) {
        node12515.attr('placeholder', ref13447.get());
        subs__.addSub(ref13447.addEventListener('change', function(_, ref, val) {
          node12515.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref13447.rebind());
      
      var ref13448 = s;
      node12515.val(""+ref13448.get());
      var ignore2702 = false;
      subs__.addSub(ref13448.addEventListener('change', function(_, ref, val) {
        if(ignore2702) return;
        node12515.val(""+val);
      }));
      subs__.addSub(ref13448.rebind());
      
      subs__.addSub(mobl.domBind(node12515, 'keyup change', function() {
        ignore2702 = true;
        s.set(mobl.stringTomobl__String(node12515.val()));
        ignore2702 = false;
      }));
      
      
      var val7450 = onchange.get();
      if(val7450 !== null) {
        subs__.addSub(mobl.domBind(node12515, 'change', val7450));
      }
      
      var val7451 = onkeyup.get();
      if(val7451 !== null) {
        subs__.addSub(mobl.domBind(node12515, 'keyup', val7451));
      }
      
      var val7452 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val7452 !== null) {
        subs__.addSub(mobl.domBind(node12515, 'blur', val7452));
      }
      
      node12513.append(node12515);
      
      
    }
  };
  renderCond2328();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond2328();
  }));
  
  callback(root26625); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root26628 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17931 = $("<span>");
  root26628.append(nodes17931);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root26629 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26629); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17931;
    nodes17931 = node.contents();
    oldNodes.replaceWith(nodes17931);
  }));
  callback(root26628); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root26630 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after2441(result__) {
      var tmp31450 = result__;
      var result__ = tmp31450;
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
    var result__ = validator.get()(n2, after2441);if(result__ !== undefined) after2441(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes17932 = $("<span>");
  root26630.append(nodes17932);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root26631 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26631); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17932;
    nodes17932 = node.contents();
    oldNodes.replaceWith(nodes17932);
  }));
  callback(root26630); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root26632 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12516 = $("<span>");
  root26632.append(node12516);
  var condSubs2329 = new mobl.CompSubscription();
  subs__.addSub(condSubs2329);
  var oldValue2329;
  var renderCond2329 = function() {
    var value5251 = label.get();
    if(oldValue2329 === value5251) return;
    oldValue2329 = value5251;
    var subs__ = condSubs2329;
    subs__.unsubscribe();
    node12516.empty();
    if(value5251) {
      
      var node12517 = $("<span>");
      node12517.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref13452 = label;
      node12517.text(""+ref13452.get());
      var ignore2704 = false;
      subs__.addSub(ref13452.addEventListener('change', function(_, ref, val) {
        if(ignore2704) return;
        node12517.text(""+val);
      }));
      subs__.addSub(ref13452.rebind());
      
      
      node12516.append(node12517);
      
      var node12518 = $("<span>");
      node12518.attr('style', "float: left");
      
      
      var node12519 = $("<input>");
      node12519.attr('type', "password");
      
      var ref13449 = style;
      if(ref13449.get() !== null) {
        node12519.attr('class', ref13449.get());
        subs__.addSub(ref13449.addEventListener('change', function(_, ref, val) {
          node12519.attr('class', val);
        }));
        
      }
      subs__.addSub(ref13449.rebind());
      
      var ref13450 = placeholder;
      if(ref13450.get() !== null) {
        node12519.attr('placeholder', ref13450.get());
        subs__.addSub(ref13450.addEventListener('change', function(_, ref, val) {
          node12519.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref13450.rebind());
      
      var ref13451 = s;
      node12519.val(""+ref13451.get());
      var ignore2703 = false;
      subs__.addSub(ref13451.addEventListener('change', function(_, ref, val) {
        if(ignore2703) return;
        node12519.val(""+val);
      }));
      subs__.addSub(ref13451.rebind());
      
      subs__.addSub(mobl.domBind(node12519, 'keyup change', function() {
        ignore2703 = true;
        s.set(mobl.stringTomobl__String(node12519.val()));
        ignore2703 = false;
      }));
      
      
      var val7453 = onchange.get();
      if(val7453 !== null) {
        subs__.addSub(mobl.domBind(node12519, 'change', val7453));
      }
      
      var val7454 = onkeyup.get();
      if(val7454 !== null) {
        subs__.addSub(mobl.domBind(node12519, 'keyup', val7454));
      }
      
      var val7455 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val7455 !== null) {
        subs__.addSub(mobl.domBind(node12519, 'blur', val7455));
      }
      
      node12518.append(node12519);
      node12516.append(node12518);
      
      
      
      
    } else {
      
      var node12520 = $("<input>");
      node12520.attr('type', "password");
      
      var ref13453 = style;
      if(ref13453.get() !== null) {
        node12520.attr('class', ref13453.get());
        subs__.addSub(ref13453.addEventListener('change', function(_, ref, val) {
          node12520.attr('class', val);
        }));
        
      }
      subs__.addSub(ref13453.rebind());
      
      var ref13454 = placeholder;
      if(ref13454.get() !== null) {
        node12520.attr('placeholder', ref13454.get());
        subs__.addSub(ref13454.addEventListener('change', function(_, ref, val) {
          node12520.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref13454.rebind());
      
      var ref13455 = s;
      node12520.val(""+ref13455.get());
      var ignore2705 = false;
      subs__.addSub(ref13455.addEventListener('change', function(_, ref, val) {
        if(ignore2705) return;
        node12520.val(""+val);
      }));
      subs__.addSub(ref13455.rebind());
      
      subs__.addSub(mobl.domBind(node12520, 'keyup change', function() {
        ignore2705 = true;
        s.set(mobl.stringTomobl__String(node12520.val()));
        ignore2705 = false;
      }));
      
      
      var val7456 = onchange.get();
      if(val7456 !== null) {
        subs__.addSub(mobl.domBind(node12520, 'change', val7456));
      }
      
      var val7457 = onkeyup.get();
      if(val7457 !== null) {
        subs__.addSub(mobl.domBind(node12520, 'keyup', val7457));
      }
      
      var val7458 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val7458 !== null) {
        subs__.addSub(mobl.domBind(node12520, 'blur', val7458));
      }
      
      node12516.append(node12520);
      
      
    }
  };
  renderCond2329();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2329();
  }));
  
  callback(root26632); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root26633 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref13460 = style;
  if(ref13460.get() !== null) {
    sel.attr('class', ref13460.get());
    subs__.addSub(ref13460.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13460.rebind());
  
  var val7459 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2442(result__) {
                    var tmp31452 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after2442);if(result__ !== undefined) after2442(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val7459 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val7459));
  }
  
  
  var node12521 = mobl.loadingSpan();
  sel.append(node12521);
  var list2820;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2820 = function() {
    var subs__ = listSubs__;
    list2820 = options.get();
    list2820.list(function(results2926) {
      node12521.empty();
      for(var i2820 = 0; i2820 < results2926.length; i2820++) {
        (function() {
          var iternode2820 = $("<span>");
          node12521.append(iternode2820);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results2926), i2820), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results2926), i2820), "_2");
          
          var node12522 = $("<option>");
          
          var ref13456 = optionDescription;
          node12522.text(""+ref13456.get());
          var ignore2706 = false;
          subs__.addSub(ref13456.addEventListener('change', function(_, ref, val) {
            if(ignore2706) return;
            node12522.text(""+val);
          }));
          subs__.addSub(ref13456.rebind());
          
          
          var ref13457 = optionStyle;
          if(ref13457.get() !== null) {
            node12522.attr('class', ref13457.get());
            subs__.addSub(ref13457.addEventListener('change', function(_, ref, val) {
              node12522.attr('class', val);
            }));
            
          }
          subs__.addSub(ref13457.rebind());
          
          var ref13458 = optionValue;
          if(ref13458.get() !== null) {
            node12522.attr('value', ref13458.get());
            subs__.addSub(ref13458.addEventListener('change', function(_, ref, val) {
              node12522.attr('value', val);
            }));
            
          }
          subs__.addSub(ref13458.rebind());
          
          var ref13459 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref13459.get() !== null) {
            node12522.attr('selected', ref13459.get());
            subs__.addSub(ref13459.addEventListener('change', function(_, ref, val) {
              node12522.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node12522.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node12522.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref13459.rebind());
          
          iternode2820.append(node12522);
          
          var oldNodes = iternode2820;
          iternode2820 = iternode2820.contents();
          oldNodes.replaceWith(iternode2820);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2820.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2820(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2820(true); }));
    });
  };
  renderList2820();
  
  root26633.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root26633); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root26634 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp31363 = mobl.ref(null);
  
  
  var tmp31362 = mobl.ref(null);
  
  
  var tmp31361 = mobl.ref(null);
  
  var nodes17933 = $("<span>");
  root26634.append(nodes17933);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp31361, tmp31362, tmp31363, function(_, callback) {
    var root26635 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12523 = mobl.loadingSpan();
    root26635.append(node12523);
    var list2821;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2821 = function() {
      var subs__ = listSubs__;
      list2821 = tabs.get();
      list2821.list(function(results2927) {
        node12523.empty();
        for(var i2821 = 0; i2821 < results2927.length; i2821++) {
          (function() {
            var iternode2821 = $("<span>");
            node12523.append(iternode2821);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results2927), i2821), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2927), i2821), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2927), i2821), "_3");
            
            var tmp31358 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp31358.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp31358.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp31358.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp31358.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp31357 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp31360 = mobl.ref(null);
            
            
            var tmp31359 = mobl.ref(null);
            
            var nodes17934 = $("<span>");
            iternode2821.append(nodes17934);
            subs__.addSub((mobl.span)(tmp31358, tmp31359, tmp31357, tmp31360, function(_, callback) {
              var root26636 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp31356 = mobl.ref(null);
              
              
              var tmp31355 = mobl.ref(null);
              
              var nodes17935 = $("<span>");
              root26636.append(nodes17935);
              subs__.addSub((mobl.label)(tabName, tmp31355, tmp31356, function(_, callback) {
                var root26637 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root26637); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes17935;
                nodes17935 = node.contents();
                oldNodes.replaceWith(nodes17935);
              }));
              callback(root26636); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes17934;
              nodes17934 = node.contents();
              oldNodes.replaceWith(nodes17934);
            }));
            
            var oldNodes = iternode2821;
            iternode2821 = iternode2821.contents();
            oldNodes.replaceWith(iternode2821);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2821.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2821(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2821(true); }));
      });
    };
    renderList2821();
    
    callback(root26635); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17933;
    nodes17933 = node.contents();
    oldNodes.replaceWith(nodes17933);
  }));
  
  var node12524 = mobl.loadingSpan();
  root26634.append(node12524);
  var list2822;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2822 = function() {
    var subs__ = listSubs__;
    list2822 = tabs.get();
    list2822.list(function(results2928) {
      node12524.empty();
      for(var i2822 = 0; i2822 < results2928.length; i2822++) {
        (function() {
          var iternode2822 = $("<span>");
          node12524.append(iternode2822);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results2928), i2822), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2928), i2822), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2928), i2822), "_3");
          
          var tmp31364 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp31364.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp31364.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp31364.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp31364.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp31367 = mobl.ref(null);
          
          
          var tmp31366 = mobl.ref(null);
          
          
          var tmp31365 = mobl.ref(null);
          
          var nodes17936 = $("<span>");
          iternode2822.append(nodes17936);
          subs__.addSub((mobl.block)(tmp31364, tmp31365, tmp31366, tmp31367, function(_, callback) {
            var root26638 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes17937 = $("<span>");
            root26638.append(nodes17937);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root26639 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes17938 = $("<span>");
              root26639.append(nodes17938);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl5629();
              }));
              
              function renderControl5629() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root26640 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root26640); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes17938;
                  nodes17938 = node.contents();
                  oldNodes.replaceWith(nodes17938);
                }));
              }
              renderControl5629();
              callback(root26639); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes17937;
              nodes17937 = node.contents();
              oldNodes.replaceWith(nodes17937);
            }));
            callback(root26638); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes17936;
            nodes17936 = node.contents();
            oldNodes.replaceWith(nodes17936);
          }));
          
          var oldNodes = iternode2822;
          iternode2822 = iternode2822.contents();
          oldNodes.replaceWith(iternode2822);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2822.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2822(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2822(true); }));
    });
  };
  renderList2822();
  
  callback(root26634); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root26641 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12525 = $("<div>");
  
  var ref13464 = mobl.ref(ui.searchboxStyle);
  if(ref13464.get() !== null) {
    node12525.attr('class', ref13464.get());
    subs__.addSub(ref13464.addEventListener('change', function(_, ref, val) {
      node12525.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13464.rebind());
  
  
  var node12526 = $("<input>");
  node12526.attr('type', "search");
  
  var ref13461 = mobl.ref(ui.searchBoxInputStyle);
  if(ref13461.get() !== null) {
    node12526.attr('class', ref13461.get());
    subs__.addSub(ref13461.addEventListener('change', function(_, ref, val) {
      node12526.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13461.rebind());
  
  var ref13462 = placeholder;
  if(ref13462.get() !== null) {
    node12526.attr('placeholder', ref13462.get());
    subs__.addSub(ref13462.addEventListener('change', function(_, ref, val) {
      node12526.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref13462.rebind());
  
  var ref13463 = s;
  node12526.val(""+ref13463.get());
  var ignore2707 = false;
  subs__.addSub(ref13463.addEventListener('change', function(_, ref, val) {
    if(ignore2707) return;
    node12526.val(""+val);
  }));
  subs__.addSub(ref13463.rebind());
  
  subs__.addSub(mobl.domBind(node12526, 'keyup change', function() {
    ignore2707 = true;
    s.set(mobl.stringTomobl__String(node12526.val()));
    ignore2707 = false;
  }));
  
  
  var val7460 = onsearch.get();
  if(val7460 !== null) {
    subs__.addSub(mobl.domBind(node12526, 'change', val7460));
  }
  
  var val7461 = onkeyup.get();
  if(val7461 !== null) {
    subs__.addSub(mobl.domBind(node12526, 'keyup', val7461));
  }
  node12526.attr('autocorrect', false);
  node12526.attr('autocapitalize', false);
  node12526.attr('autocomplete', false);
  
  node12525.append(node12526);
  root26641.append(node12525);
  callback(root26641); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root26642 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref13465 = mobl.ref(ui.contextMenuStyle);
  if(ref13465.get() !== null) {
    menu.attr('class', ref13465.get());
    subs__.addSub(ref13465.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13465.rebind());
  
  var nodes17939 = $("<span>");
  menu.append(nodes17939);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5630();
  }));
  
  function renderControl5630() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26643 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26643); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17939;
      nodes17939 = node.contents();
      oldNodes.replaceWith(nodes17939);
    }));
  }
  renderControl5630();
  root26642.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val7462 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp31455 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val7462 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val7462));
  }
  
  root26642.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root26642); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root26644 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp31441 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp31441.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node12527 = $("<span>");
  root26644.append(node12527);
  var condSubs2330 = new mobl.CompSubscription();
  subs__.addSub(condSubs2330);
  var oldValue2330;
  var renderCond2330 = function() {
    var value5252 = tmp31441.get();
    if(oldValue2330 === value5252) return;
    oldValue2330 = value5252;
    var subs__ = condSubs2330;
    subs__.unsubscribe();
    node12527.empty();
    if(value5252) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node12528 = $("<div>");
        node12528.attr('width', "100%");
        
        
        var node12529 = $("<div>");
        node12529.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes17942 = $("<span>");
        node12529.append(nodes17942);
        subs__.addSub((ui.group)(function(_, callback) {
          var root26647 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node12532 = mobl.loadingSpan();
          root26647.append(node12532);
          var list2823;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList2823 = function() {
            var subs__ = listSubs__;
            list2823 = items.get();
            list2823.list(function(results2929) {
              node12532.empty();
              for(var i2823 = 0; i2823 < results2929.length; i2823++) {
                (function() {
                  var iternode2823 = $("<span>");
                  node12532.append(iternode2823);
                  var it;
                  it = mobl.ref(mobl.ref(results2929), i2823);
                  
                  var tmp31381 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp31381.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp31381.set(it.get() == current.get());
                  }));
                  
                  
                  var node12533 = $("<span>");
                  iternode2823.append(node12533);
                  var condSubs2332 = new mobl.CompSubscription();
                  subs__.addSub(condSubs2332);
                  var oldValue2332;
                  var renderCond2332 = function() {
                    var value5254 = tmp31381.get();
                    if(oldValue2332 === value5254) return;
                    oldValue2332 = value5254;
                    var subs__ = condSubs2332;
                    subs__.unsubscribe();
                    node12533.empty();
                    if(value5254) {
                      
                      var tmp31377 = mobl.ref(false);
                      
                      
                      var tmp31376 = mobl.ref(null);
                      
                      
                      var tmp31375 = mobl.ref(null);
                      
                      var nodes17943 = $("<span>");
                      node12533.append(nodes17943);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp31375, tmp31376, tmp31377, function(_, callback) {
                        var root26648 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes17944 = $("<span>");
                        root26648.append(nodes17944);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl5632();
                        }));
                        
                        function renderControl5632() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root26649 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root26649); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes17944;
                            nodes17944 = node.contents();
                            oldNodes.replaceWith(nodes17944);
                          }));
                        }
                        renderControl5632();
                        callback(root26648); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes17943;
                        nodes17943 = node.contents();
                        oldNodes.replaceWith(nodes17943);
                      }));
                      
                      
                    } else {
                      
                      var tmp31379 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp31378 = mobl.ref(true);
                      
                      
                      var tmp31380 = mobl.ref(null);
                      
                      var nodes17945 = $("<span>");
                      node12533.append(nodes17945);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp31379, tmp31380, tmp31378, function(_, callback) {
                        var root26650 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes17946 = $("<span>");
                        root26650.append(nodes17946);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl5633();
                        }));
                        
                        function renderControl5633() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root26651 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root26651); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes17946;
                            nodes17946 = node.contents();
                            oldNodes.replaceWith(nodes17946);
                          }));
                        }
                        renderControl5633();
                        callback(root26650); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes17945;
                        nodes17945 = node.contents();
                        oldNodes.replaceWith(nodes17945);
                      }));
                      
                      
                    }
                  };
                  renderCond2332();
                  subs__.addSub(tmp31381.addEventListener('change', function() {
                    renderCond2332();
                  }));
                  
                  
                  var oldNodes = iternode2823;
                  iternode2823 = iternode2823.contents();
                  oldNodes.replaceWith(iternode2823);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list2823.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2823(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2823(true); }));
            });
          };
          renderList2823();
          
          callback(root26647); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes17942;
          nodes17942 = node.contents();
          oldNodes.replaceWith(nodes17942);
        }));
        node12528.append(node12529);
        
        var node12530 = $("<div>");
        node12530.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node12531 = $("<span>");
        node12530.append(node12531);
        var condSubs2331 = new mobl.CompSubscription();
        subs__.addSub(condSubs2331);
        var oldValue2331;
        var renderCond2331 = function() {
          var value5253 = current.get();
          if(oldValue2331 === value5253) return;
          oldValue2331 = value5253;
          var subs__ = condSubs2331;
          subs__.unsubscribe();
          node12531.empty();
          if(value5253) {
            var nodes17940 = $("<span>");
            node12531.append(nodes17940);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl5631();
            }));
            
            function renderControl5631() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root26645 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root26645); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes17940;
                nodes17940 = node.contents();
                oldNodes.replaceWith(nodes17940);
              }));
            }
            renderControl5631();
            
            
          } else {
            
            var tmp31382 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp31384 = mobl.ref(null);
            
            
            var tmp31383 = mobl.ref(null);
            
            var nodes17941 = $("<span>");
            node12531.append(nodes17941);
            subs__.addSub((mobl.label)(tmp31382, tmp31383, tmp31384, function(_, callback) {
              var root26646 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root26646); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes17941;
              nodes17941 = node.contents();
              oldNodes.replaceWith(nodes17941);
            }));
            
            
          }
        };
        renderCond2331();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond2331();
        }));
        
        node12528.append(node12530);
        node12527.append(node12528);
        
        
        
        
        
        
      });
    } else {
      var nodes17947 = $("<span>");
      node12527.append(nodes17947);
      subs__.addSub((ui.group)(function(_, callback) {
        var root26652 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node12534 = mobl.loadingSpan();
        root26652.append(node12534);
        var list2824;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList2824 = function() {
          var subs__ = listSubs__;
          list2824 = items.get();
          list2824.list(function(results2930) {
            node12534.empty();
            for(var i2824 = 0; i2824 < results2930.length; i2824++) {
              (function() {
                var iternode2824 = $("<span>");
                node12534.append(iternode2824);
                var it;
                it = mobl.ref(mobl.ref(results2930), i2824);
                
                var tmp31368 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp31456 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp31370 = mobl.ref(false);
                
                
                var tmp31369 = mobl.ref(null);
                
                var nodes17948 = $("<span>");
                iternode2824.append(nodes17948);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp31368, tmp31369, tmp31370, function(_, callback) {
                  var root26653 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes17949 = $("<span>");
                  root26653.append(nodes17949);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl5634();
                  }));
                  
                  function renderControl5634() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root26654 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root26654); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes17949;
                      nodes17949 = node.contents();
                      oldNodes.replaceWith(nodes17949);
                    }));
                  }
                  renderControl5634();
                  callback(root26653); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes17948;
                  nodes17948 = node.contents();
                  oldNodes.replaceWith(nodes17948);
                }));
                
                var oldNodes = iternode2824;
                iternode2824 = iternode2824.contents();
                oldNodes.replaceWith(iternode2824);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list2824.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2824(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2824(true); }));
          });
        };
        renderList2824();
        
        callback(root26652); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes17947;
        nodes17947 = node.contents();
        oldNodes.replaceWith(nodes17947);
      }));
      
      
    }
  };
  renderCond2330();
  subs__.addSub(tmp31441.addEventListener('change', function() {
    renderCond2330();
  }));
  
  callback(root26644); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root26655 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp31373 = mobl.ref("Detail");
  
  
  var tmp31374 = mobl.ref(null);
  
  var nodes17950 = $("<span>");
  root26655.append(nodes17950);
  subs__.addSub((ui.header)(tmp31373, tmp31374, function(_, callback) {
    var root26656 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp31372 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp31371 = mobl.ref("Back");
    
    var nodes17951 = $("<span>");
    root26656.append(nodes17951);
    subs__.addSub((ui.backButton)(tmp31371, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp31372, function(_, callback) {
      var root26657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26657); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17951;
      nodes17951 = node.contents();
      oldNodes.replaceWith(nodes17951);
    }));
    callback(root26656); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17950;
    nodes17950 = node.contents();
    oldNodes.replaceWith(nodes17950);
  }));
  var nodes17952 = $("<span>");
  root26655.append(nodes17952);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl5635();
  }));
  
  function renderControl5635() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root26658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26658); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17952;
      nodes17952 = node.contents();
      oldNodes.replaceWith(nodes17952);
    }));
  }
  renderControl5635();
  callback(root26655); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root26659 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes17953 = $("<span>");
  root26659.append(nodes17953);
  subs__.addSub((ui.group)(function(_, callback) {
    var root26660 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12535 = mobl.loadingSpan();
    root26660.append(node12535);
    var list2825;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2825 = function() {
      var subs__ = listSubs__;
      list2825 = coll.get();
      list2825.list(function(results2931) {
        node12535.empty();
        for(var i2825 = 0; i2825 < results2931.length; i2825++) {
          (function() {
            var iternode2825 = $("<span>");
            node12535.append(iternode2825);
            var it;
            it = mobl.ref(mobl.ref(results2931), i2825);
            
            var tmp31391 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp31391.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp31391.set(it.get() == selected.get());
            }));
            
            
            var node12536 = $("<span>");
            iternode2825.append(node12536);
            var condSubs2333 = new mobl.CompSubscription();
            subs__.addSub(condSubs2333);
            var oldValue2333;
            var renderCond2333 = function() {
              var value5255 = tmp31391.get();
              if(oldValue2333 === value5255) return;
              oldValue2333 = value5255;
              var subs__ = condSubs2333;
              subs__.unsubscribe();
              node12536.empty();
              if(value5255) {
                
                var tmp31387 = mobl.ref(false);
                
                
                var tmp31386 = mobl.ref(null);
                
                
                var tmp31385 = mobl.ref(null);
                
                var nodes17954 = $("<span>");
                node12536.append(nodes17954);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp31385, tmp31386, tmp31387, function(_, callback) {
                  var root26661 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes17955 = $("<span>");
                  root26661.append(nodes17955);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl5636();
                  }));
                  
                  function renderControl5636() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root26662 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root26662); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes17955;
                      nodes17955 = node.contents();
                      oldNodes.replaceWith(nodes17955);
                    }));
                  }
                  renderControl5636();
                  callback(root26661); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes17954;
                  nodes17954 = node.contents();
                  oldNodes.replaceWith(nodes17954);
                }));
                
                
              } else {
                
                var tmp31389 = mobl.ref(true);
                
                
                var tmp31388 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp31390 = mobl.ref(null);
                
                var nodes17956 = $("<span>");
                node12536.append(nodes17956);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp31388, tmp31390, tmp31389, function(_, callback) {
                  var root26663 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes17957 = $("<span>");
                  root26663.append(nodes17957);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl5637();
                  }));
                  
                  function renderControl5637() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root26664 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root26664); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes17957;
                      nodes17957 = node.contents();
                      oldNodes.replaceWith(nodes17957);
                    }));
                  }
                  renderControl5637();
                  callback(root26663); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes17956;
                  nodes17956 = node.contents();
                  oldNodes.replaceWith(nodes17956);
                }));
                
                
              }
            };
            renderCond2333();
            subs__.addSub(tmp31391.addEventListener('change', function() {
              renderCond2333();
            }));
            
            
            var oldNodes = iternode2825;
            iternode2825 = iternode2825.contents();
            oldNodes.replaceWith(iternode2825);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2825.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2825(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2825(true); }));
      });
    };
    renderList2825();
    
    callback(root26660); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17953;
    nodes17953 = node.contents();
    oldNodes.replaceWith(nodes17953);
  }));
  callback(root26659); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root26665 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes17958 = $("<span>");
    root26665.append(nodes17958);
    subs__.addSub((ui.group)(function(_, callback) {
      var root26666 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp31395 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp31395.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp31395.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp31395.set(coll.get().limit(n.get()));
      }));
      
      
      var node12537 = mobl.loadingSpan();
      root26666.append(node12537);
      var list2826;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2826 = function() {
        var subs__ = listSubs__;
        list2826 = tmp31395.get();
        list2826.list(function(results2932) {
          node12537.empty();
          for(var i2826 = 0; i2826 < results2932.length; i2826++) {
            (function() {
              var iternode2826 = $("<span>");
              node12537.append(iternode2826);
              var it;
              it = mobl.ref(mobl.ref(results2932), i2826);
              
              var tmp31392 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp31394 = mobl.ref(false);
              
              
              var tmp31393 = mobl.ref(null);
              
              var nodes17959 = $("<span>");
              iternode2826.append(nodes17959);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp31392, tmp31393, tmp31394, function(_, callback) {
                var root26667 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes17960 = $("<span>");
                root26667.append(nodes17960);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl5638();
                }));
                
                function renderControl5638() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root26668 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root26668); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes17960;
                    nodes17960 = node.contents();
                    oldNodes.replaceWith(nodes17960);
                  }));
                }
                renderControl5638();
                callback(root26667); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes17959;
                nodes17959 = node.contents();
                oldNodes.replaceWith(nodes17959);
              }));
              
              var oldNodes = iternode2826;
              iternode2826 = iternode2826.contents();
              oldNodes.replaceWith(iternode2826);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list2826.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2826(true); }));
          subs__.addSub(tmp31395.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2826(true); }));
        });
      };
      renderList2826();
      
      
      var tmp31398 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp31398.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp31398.set(n.get() < total.get());
      }));
      
      
      var node12538 = $("<span>");
      root26666.append(node12538);
      var condSubs2334 = new mobl.CompSubscription();
      subs__.addSub(condSubs2334);
      var oldValue2334;
      var renderCond2334 = function() {
        var value5256 = tmp31398.get();
        if(oldValue2334 === value5256) return;
        oldValue2334 = value5256;
        var subs__ = condSubs2334;
        subs__.unsubscribe();
        node12538.empty();
        if(value5256) {
          
          var node12539 = $("<li>");
          
          var ref13466 = mobl.ref(ui.loadMoreStyle);
          if(ref13466.get() !== null) {
            node12539.attr('class', ref13466.get());
            subs__.addSub(ref13466.addEventListener('change', function(_, ref, val) {
              node12539.attr('class', val);
            }));
            
          }
          subs__.addSub(ref13466.rebind());
          
          var val7463 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val7463 !== null) {
            subs__.addSub(mobl.domBind(node12539, 'tap', val7463));
          }
          
          
          var tmp31397 = mobl.ref(null);
          
          
          var tmp31396 = mobl.ref(null);
          
          var nodes17961 = $("<span>");
          node12539.append(nodes17961);
          subs__.addSub((mobl.label)(moreLabel, tmp31396, tmp31397, function(_, callback) {
            var root26669 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root26669); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes17961;
            nodes17961 = node.contents();
            oldNodes.replaceWith(nodes17961);
          }));
          node12538.append(node12539);
          
          
          
        } else {
          
        }
      };
      renderCond2334();
      subs__.addSub(tmp31398.addEventListener('change', function() {
        renderCond2334();
      }));
      
      callback(root26666); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17958;
      nodes17958 = node.contents();
      oldNodes.replaceWith(nodes17958);
    }));
    callback(root26665); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root26670 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17962 = $("<span>");
  root26670.append(nodes17962);
  subs__.addSub((ui.group)(function(_, callback) {
    var root26671 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12540 = mobl.loadingSpan();
    root26671.append(node12540);
    var list2827;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2827 = function() {
      var subs__ = listSubs__;
      list2827 = items.get();
      list2827.list(function(results2933) {
        node12540.empty();
        for(var i2827 = 0; i2827 < results2933.length; i2827++) {
          (function() {
            var iternode2827 = $("<span>");
            node12540.append(iternode2827);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results2933), i2827), "_1");it = mobl.ref(mobl.ref(mobl.ref(results2933), i2827), "_2");
            
            var tmp31402 = mobl.ref(false);
            
            
            var tmp31401 = mobl.ref(null);
            
            
            var tmp31400 = mobl.ref(null);
            
            var nodes17963 = $("<span>");
            iternode2827.append(nodes17963);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp31400, tmp31401, tmp31402, function(_, callback) {
              var root26672 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp31399 = mobl.ref(null);
              
              var nodes17964 = $("<span>");
              root26672.append(nodes17964);
              subs__.addSub((ui.checkBox)(checked, it, tmp31399, function(_, callback) {
                var root26673 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root26673); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes17964;
                nodes17964 = node.contents();
                oldNodes.replaceWith(nodes17964);
              }));
              callback(root26672); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes17963;
              nodes17963 = node.contents();
              oldNodes.replaceWith(nodes17963);
            }));
            
            var oldNodes = iternode2827;
            iternode2827 = iternode2827.contents();
            oldNodes.replaceWith(iternode2827);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2827.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2827(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2827(true); }));
      });
    };
    renderList2827();
    
    callback(root26671); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17962;
    nodes17962 = node.contents();
    oldNodes.replaceWith(nodes17962);
  }));
  callback(root26670); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root26674 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll4964) {
    coll4964 = coll4964.reverse();
    function processOne596() {
      var it;
      it = coll4964.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll4964.length > 0) processOne596(); else rest596();
      
    }
    function rest596() {
      
      var tmp31406 = mobl.ref(null);
      
      var nodes17965 = $("<span>");
      root26674.append(nodes17965);
      subs__.addSub((ui.header)(title, tmp31406, function(_, callback) {
        var root26675 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp31403 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp31404 = mobl.ref(mobl._("Back", []));
        
        var nodes17966 = $("<span>");
        root26675.append(nodes17966);
        subs__.addSub((ui.backButton)(tmp31404, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp31403, function(_, callback) {
          var root26676 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26676); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17966;
          nodes17966 = node.contents();
          oldNodes.replaceWith(nodes17966);
        }));
        
        var tmp31405 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll4963) {
                               coll4963 = coll4963.reverse();
                               function processOne595() {
                                 var checked;var it;
                                 var tmp31458 = coll4963.pop();
                                 checked = tmp31458._1;it = tmp31458._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll4963.length > 0) processOne595(); else rest595();
                                   
                                 } else {
                                   {
                                     
                                     if(coll4963.length > 0) processOne595(); else rest595();
                                     
                                   }
                                 }
                               }
                               function rest595() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll4963.length > 0) processOne595(); else rest595();
                             });
                             
                           });
        
        var nodes17967 = $("<span>");
        root26675.append(nodes17967);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp31405, function(_, callback) {
          var root26677 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26677); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17967;
          nodes17967 = node.contents();
          oldNodes.replaceWith(nodes17967);
        }));
        callback(root26675); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes17965;
        nodes17965 = node.contents();
        oldNodes.replaceWith(nodes17965);
      }));
      var nodes17968 = $("<span>");
      root26674.append(nodes17968);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root26678 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root26678); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17968;
        nodes17968 = node.contents();
        oldNodes.replaceWith(nodes17968);
      }));
      callback(root26674); return subs__;
      
      
    }
    if(coll4964.length > 0) processOne596(); else rest596();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root26679 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp31408 = mobl.ref(null);
  
  
  var tmp31407 = mobl.ref(null);
  
  var nodes17969 = $("<span>");
  root26679.append(nodes17969);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp31407, tmp31408, function(_, callback) {
    var root26680 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26680); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17969;
    nodes17969 = node.contents();
    oldNodes.replaceWith(nodes17969);
  }));
  
  var tmp31409 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp31409.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp31409.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp31409.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp31409.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp31409.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes17970 = $("<span>");
  root26679.append(nodes17970);
  subs__.addSub((ui.masterDetail)(tmp31409, masterItem, detailItem, function(_, callback) {
    var root26681 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26681); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17970;
    nodes17970 = node.contents();
    oldNodes.replaceWith(nodes17970);
  }));
  callback(root26679); return subs__;
  
  
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
  var root26682 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp31422 = mobl.ref(null);
  
  
  var tmp31421 = mobl.ref(null);
  
  
  var tmp31420 = mobl.ref(null);
  
  var nodes17971 = $("<span>");
  root26682.append(nodes17971);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp31420, tmp31421, tmp31422, function(_, callback) {
    var root26683 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12541 = mobl.loadingSpan();
    root26683.append(node12541);
    var list2828;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2828 = function() {
      var subs__ = listSubs__;
      list2828 = sections.get();
      list2828.list(function(results2934) {
        node12541.empty();
        for(var i2828 = 0; i2828 < results2934.length; i2828++) {
          (function() {
            var iternode2828 = $("<span>");
            node12541.append(iternode2828);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results2934), i2828), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results2934), i2828), "_2");
            
            var tmp31413 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp31413.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp31413.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp31413.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp31413.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp31412 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp31415 = mobl.ref(null);
            
            
            var tmp31414 = mobl.ref(null);
            
            var nodes17972 = $("<span>");
            iternode2828.append(nodes17972);
            subs__.addSub((mobl.span)(tmp31413, tmp31414, tmp31412, tmp31415, function(_, callback) {
              var root26684 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp31411 = mobl.ref(null);
              
              
              var tmp31410 = mobl.ref(null);
              
              var nodes17973 = $("<span>");
              root26684.append(nodes17973);
              subs__.addSub((mobl.label)(sectionName, tmp31410, tmp31411, function(_, callback) {
                var root26685 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root26685); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes17973;
                nodes17973 = node.contents();
                oldNodes.replaceWith(nodes17973);
              }));
              callback(root26684); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes17972;
              nodes17972 = node.contents();
              oldNodes.replaceWith(nodes17972);
            }));
            
            var tmp31416 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp31416.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp31416.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp31416.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp31416.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp31419 = mobl.ref(null);
            
            
            var tmp31418 = mobl.ref(null);
            
            
            var tmp31417 = mobl.ref(null);
            
            var nodes17974 = $("<span>");
            iternode2828.append(nodes17974);
            subs__.addSub((mobl.block)(tmp31416, tmp31417, tmp31418, tmp31419, function(_, callback) {
              var root26686 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes17975 = $("<span>");
              root26686.append(nodes17975);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl5639();
              }));
              
              function renderControl5639() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root26687 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root26687); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes17975;
                  nodes17975 = node.contents();
                  oldNodes.replaceWith(nodes17975);
                }));
              }
              renderControl5639();
              callback(root26686); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes17974;
              nodes17974 = node.contents();
              oldNodes.replaceWith(nodes17974);
            }));
            
            var oldNodes = iternode2828;
            iternode2828 = iternode2828.contents();
            oldNodes.replaceWith(iternode2828);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2828.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2828(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2828(true); }));
      });
    };
    renderList2828();
    
    callback(root26683); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17971;
    nodes17971 = node.contents();
    oldNodes.replaceWith(nodes17971);
  }));
  callback(root26682); return subs__;
  
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
  var root26688 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12542 = $("<table>");
  
  var ref13467 = mobl.ref(ui.tableStyle);
  if(ref13467.get() !== null) {
    node12542.attr('class', ref13467.get());
    subs__.addSub(ref13467.addEventListener('change', function(_, ref, val) {
      node12542.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13467.rebind());
  
  var nodes17976 = $("<span>");
  node12542.append(nodes17976);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5640();
  }));
  
  function renderControl5640() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26689 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26689); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17976;
      nodes17976 = node.contents();
      oldNodes.replaceWith(nodes17976);
    }));
  }
  renderControl5640();
  root26688.append(node12542);
  callback(root26688); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root26690 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12543 = $("<tr>");
  
  var ref13468 = mobl.ref(ui.trStyle);
  if(ref13468.get() !== null) {
    node12543.attr('class', ref13468.get());
    subs__.addSub(ref13468.addEventListener('change', function(_, ref, val) {
      node12543.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13468.rebind());
  
  var nodes17977 = $("<span>");
  node12543.append(nodes17977);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5641();
  }));
  
  function renderControl5641() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26691 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26691); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17977;
      nodes17977 = node.contents();
      oldNodes.replaceWith(nodes17977);
    }));
  }
  renderControl5641();
  root26690.append(node12543);
  callback(root26690); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root26692 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12544 = $("<td>");
  
  var ref13469 = width;
  if(ref13469.get() !== null) {
    node12544.attr('width', ref13469.get());
    subs__.addSub(ref13469.addEventListener('change', function(_, ref, val) {
      node12544.attr('width', val);
    }));
    
  }
  subs__.addSub(ref13469.rebind());
  
  var ref13470 = mobl.ref(ui.tdStyle);
  if(ref13470.get() !== null) {
    node12544.attr('class', ref13470.get());
    subs__.addSub(ref13470.addEventListener('change', function(_, ref, val) {
      node12544.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13470.rebind());
  
  var nodes17978 = $("<span>");
  node12544.append(nodes17978);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5642();
  }));
  
  function renderControl5642() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26693 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26693); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17978;
      nodes17978 = node.contents();
      oldNodes.replaceWith(nodes17978);
    }));
  }
  renderControl5642();
  root26692.append(node12544);
  callback(root26692); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root26694 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12545 = $("<td>");
  
  var ref13471 = width;
  if(ref13471.get() !== null) {
    node12545.attr('width', ref13471.get());
    subs__.addSub(ref13471.addEventListener('change', function(_, ref, val) {
      node12545.attr('width', val);
    }));
    
  }
  subs__.addSub(ref13471.rebind());
  
  var ref13472 = mobl.ref(ui.tdStyle);
  if(ref13472.get() !== null) {
    node12545.attr('class', ref13472.get());
    subs__.addSub(ref13472.addEventListener('change', function(_, ref, val) {
      node12545.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13472.rebind());
  
  var nodes17979 = $("<span>");
  node12545.append(nodes17979);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5643();
  }));
  
  function renderControl5643() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26695 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26695); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17979;
      nodes17979 = node.contents();
      oldNodes.replaceWith(nodes17979);
    }));
  }
  renderControl5643();
  root26694.append(node12545);
  callback(root26694); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root26696 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12546 = $("<td>");
  
  var ref13473 = width;
  if(ref13473.get() !== null) {
    node12546.attr('width', ref13473.get());
    subs__.addSub(ref13473.addEventListener('change', function(_, ref, val) {
      node12546.attr('width', val);
    }));
    
  }
  subs__.addSub(ref13473.rebind());
  
  var ref13474 = mobl.ref(ui.tdStyle);
  if(ref13474.get() !== null) {
    node12546.attr('class', ref13474.get());
    subs__.addSub(ref13474.addEventListener('change', function(_, ref, val) {
      node12546.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13474.rebind());
  
  
  var node12547 = $("<strong>");
  
  var nodes17980 = $("<span>");
  node12547.append(nodes17980);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5644();
  }));
  
  function renderControl5644() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26697 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26697); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17980;
      nodes17980 = node.contents();
      oldNodes.replaceWith(nodes17980);
    }));
  }
  renderControl5644();
  node12546.append(node12547);
  root26696.append(node12546);
  callback(root26696); return subs__;
  
  
  
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
  var root26698 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17981 = $("<span>");
  root26698.append(nodes17981);
  subs__.addSub((ui.group)(function(_, callback) {
    var root26699 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12548 = mobl.loadingSpan();
    root26699.append(node12548);
    var list2829;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2829 = function() {
      var subs__ = listSubs__;
      list2829 = items.get();
      list2829.list(function(results2935) {
        node12548.empty();
        for(var i2829 = 0; i2829 < results2935.length; i2829++) {
          (function() {
            var iternode2829 = $("<span>");
            node12548.append(iternode2829);
            var it;
            it = mobl.ref(mobl.ref(results2935), i2829);
            
            var tmp31423 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.customDetailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp31460 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               });
            
            
            var tmp31425 = mobl.ref(false);
            
            
            var tmp31424 = mobl.ref(null);
            
            var nodes17982 = $("<span>");
            iternode2829.append(nodes17982);
            subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp31423, tmp31424, tmp31425, function(_, callback) {
              var root26700 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes17983 = $("<span>");
              root26700.append(nodes17983);
              subs__.addSub(masterItem.addEventListener('change', function() {
                renderControl5645();
              }));
              
              function renderControl5645() {
                subs__.addSub((masterItem.get())(it, function(elements, callback) {
                  var root26701 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root26701); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes17983;
                  nodes17983 = node.contents();
                  oldNodes.replaceWith(nodes17983);
                }));
              }
              renderControl5645();
              callback(root26700); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes17982;
              nodes17982 = node.contents();
              oldNodes.replaceWith(nodes17982);
            }));
            
            var oldNodes = iternode2829;
            iternode2829 = iternode2829.contents();
            oldNodes.replaceWith(iternode2829);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2829.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2829(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2829(true); }));
      });
    };
    renderList2829();
    
    callback(root26699); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17981;
    nodes17981 = node.contents();
    oldNodes.replaceWith(nodes17981);
  }));
  callback(root26698); return subs__;
  
  return subs__;
};

ui.customDetailScreen = function(it, detail, callback, screenCallback) {
  var root26702 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp31427 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp31426 = mobl.ref("Back");
  
  var nodes17984 = $("<span>");
  root26702.append(nodes17984);
  subs__.addSub((ui.backButton)(tmp31426, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp31427, function(_, callback) {
    var root26703 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26703); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17984;
    nodes17984 = node.contents();
    oldNodes.replaceWith(nodes17984);
  }));
  var nodes17985 = $("<span>");
  root26702.append(nodes17985);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl5646();
  }));
  
  function renderControl5646() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root26704 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26704); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17985;
      nodes17985 = node.contents();
      oldNodes.replaceWith(nodes17985);
    }));
  }
  renderControl5646();
  callback(root26702); return subs__;
  
  
  return subs__;
};
ui.customHeaderStyle = 'ui__customHeaderStyle';
ui.customHeaderContainerStyle = 'ui__customHeaderContainerStyle';
ui.customHeaderTextStyle = 'ui__customHeaderTextStyle';

ui.customHeader = function(text, onclick, elements, callback) {
  var root26705 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12549 = $("<div>");
  
  var ref13478 = mobl.ref(ui.customHeaderStyle);
  if(ref13478.get() !== null) {
    node12549.attr('class', ref13478.get());
    subs__.addSub(ref13478.addEventListener('change', function(_, ref, val) {
      node12549.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13478.rebind());
  
  var val7464 = onclick.get();
  if(val7464 !== null) {
    subs__.addSub(mobl.domBind(node12549, 'tap', val7464));
  }
  
  
  var node12550 = $("<div>");
  
  var ref13477 = mobl.ref(ui.customHeaderContainerStyle);
  if(ref13477.get() !== null) {
    node12550.attr('class', ref13477.get());
    subs__.addSub(ref13477.addEventListener('change', function(_, ref, val) {
      node12550.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13477.rebind());
  
  
  var node12551 = $("<div>");
  
  var ref13475 = text;
  node12551.text(""+ref13475.get());
  var ignore2708 = false;
  subs__.addSub(ref13475.addEventListener('change', function(_, ref, val) {
    if(ignore2708) return;
    node12551.text(""+val);
  }));
  subs__.addSub(ref13475.rebind());
  
  
  var ref13476 = mobl.ref(ui.customHeaderTextStyle);
  if(ref13476.get() !== null) {
    node12551.attr('class', ref13476.get());
    subs__.addSub(ref13476.addEventListener('change', function(_, ref, val) {
      node12551.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13476.rebind());
  
  node12550.append(node12551);
  node12549.append(node12550);
  var nodes17986 = $("<span>");
  node12549.append(nodes17986);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5647();
  }));
  
  function renderControl5647() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26706 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26706); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17986;
      nodes17986 = node.contents();
      oldNodes.replaceWith(nodes17986);
    }));
  }
  renderControl5647();
  root26705.append(node12549);
  callback(root26705); return subs__;
  
  
  
  
  return subs__;
};
ui.customItemStyle = 'ui__customItemStyle';
ui.customItemPushedStyle = 'ui__customItemPushedStyle';
ui.customItemArrowStyle = 'ui__customItemArrowStyle';

ui.customItem = function(itemStyle, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root26707 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref13479 = mobl.ref(ui.customItemStyle);
  if(ref13479.get() !== null) {
    el.attr('class', ref13479.get());
    subs__.addSub(ref13479.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13479.rebind());
  
  var ref13480 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : ui.customItemStyle, ui.customItemArrowStyle]) : (pushed.get() ? ui.customItemPushedStyle : ui.customItemStyle));
  if(ref13480.get() !== null) {
    el.attr('class', ref13480.get());
    subs__.addSub(ref13480.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref13480.rebind());
  
  var val7465 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp31461 = result__;
                                           function after2443(result__) {
                                             var tmp31462 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after2443);if(result__ !== undefined) after2443(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp31463 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val7465 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val7465));
  }
  
  var nodes17987 = $("<span>");
  el.append(nodes17987);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5648();
  }));
  
  function renderControl5648() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26708 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26708); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17987;
      nodes17987 = node.contents();
      oldNodes.replaceWith(nodes17987);
    }));
  }
  renderControl5648();
  root26707.append(el);
  callback(root26707); return subs__;
  
  
  return subs__;
};
ui.customActiveTabStyle = 'ui__customActiveTabStyle';
ui.customActiveTabButtonStyle = 'ui__customActiveTabButtonStyle';
ui.customInActiveTabButtonStyle = 'ui__customInActiveTabButtonStyle';
ui.customTabbarStyle = 'ui__customTabbarStyle';

ui.customTabSet = function(tabs, elements, callback) {
  var root26709 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var node12552 = $("<div>");
  node12552.attr('style', "height: 345px; margin-left: 25px; margin-top: 10px");
  
  
  var node12554 = mobl.loadingSpan();
  node12552.append(node12554);
  var list2831;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2831 = function() {
    var subs__ = listSubs__;
    list2831 = tabs.get();
    list2831.list(function(results2937) {
      node12554.empty();
      for(var i2831 = 0; i2831 < results2937.length; i2831++) {
        (function() {
          var iternode2831 = $("<span>");
          node12554.append(iternode2831);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results2937), i2831), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2937), i2831), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2937), i2831), "_3");
          
          var tmp31428 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp31428.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp31428.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.customActiveTabStyle).addEventListener('change', function() {
            tmp31428.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp31428.set(activeTabName.get() == tabName.get() ? ui.customActiveTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp31431 = mobl.ref(null);
          
          
          var tmp31430 = mobl.ref(null);
          
          
          var tmp31429 = mobl.ref(null);
          
          var nodes17991 = $("<span>");
          iternode2831.append(nodes17991);
          subs__.addSub((mobl.block)(tmp31428, tmp31429, tmp31430, tmp31431, function(_, callback) {
            var root26713 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes17992 = $("<span>");
            root26713.append(nodes17992);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root26714 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes17993 = $("<span>");
              root26714.append(nodes17993);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl5649();
              }));
              
              function renderControl5649() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root26715 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root26715); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes17993;
                  nodes17993 = node.contents();
                  oldNodes.replaceWith(nodes17993);
                }));
              }
              renderControl5649();
              callback(root26714); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes17992;
              nodes17992 = node.contents();
              oldNodes.replaceWith(nodes17992);
            }));
            callback(root26713); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes17991;
            nodes17991 = node.contents();
            oldNodes.replaceWith(nodes17991);
          }));
          
          var oldNodes = iternode2831;
          iternode2831 = iternode2831.contents();
          oldNodes.replaceWith(iternode2831);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2831.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2831(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2831(true); }));
    });
  };
  renderList2831();
  
  root26709.append(node12552);
  
  var tmp31440 = mobl.ref(null);
  
  
  var tmp31439 = mobl.ref(null);
  
  
  var tmp31438 = mobl.ref(null);
  
  var nodes17988 = $("<span>");
  root26709.append(nodes17988);
  subs__.addSub((mobl.block)(mobl.ref(ui.customTabbarStyle), tmp31438, tmp31439, tmp31440, function(_, callback) {
    var root26710 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node12553 = mobl.loadingSpan();
    root26710.append(node12553);
    var list2830;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2830 = function() {
      var subs__ = listSubs__;
      list2830 = tabs.get();
      list2830.list(function(results2936) {
        node12553.empty();
        for(var i2830 = 0; i2830 < results2936.length; i2830++) {
          (function() {
            var iternode2830 = $("<span>");
            node12553.append(iternode2830);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results2936), i2830), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2936), i2830), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2936), i2830), "_3");
            
            var tmp31435 = mobl.ref(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp31435.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp31435.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customActiveTabButtonStyle).addEventListener('change', function() {
              tmp31435.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.customInActiveTabButtonStyle).addEventListener('change', function() {
              tmp31435.set(activeTabName.get() == tabName.get() ? ui.customActiveTabButtonStyle : ui.customInActiveTabButtonStyle);
            }));
            
            
            var tmp31434 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp31437 = mobl.ref(null);
            
            
            var tmp31436 = mobl.ref(null);
            
            var nodes17989 = $("<span>");
            iternode2830.append(nodes17989);
            subs__.addSub((mobl.span)(tmp31435, tmp31436, tmp31434, tmp31437, function(_, callback) {
              var root26711 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp31433 = mobl.ref(null);
              
              
              var tmp31432 = mobl.ref(null);
              
              var nodes17990 = $("<span>");
              root26711.append(nodes17990);
              subs__.addSub((mobl.label)(tabName, tmp31432, tmp31433, function(_, callback) {
                var root26712 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root26712); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes17990;
                nodes17990 = node.contents();
                oldNodes.replaceWith(nodes17990);
              }));
              callback(root26711); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes17989;
              nodes17989 = node.contents();
              oldNodes.replaceWith(nodes17989);
            }));
            
            var oldNodes = iternode2830;
            iternode2830 = iternode2830.contents();
            oldNodes.replaceWith(iternode2830);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2830.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2830(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2830(true); }));
      });
    };
    renderList2830();
    
    callback(root26710); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17988;
    nodes17988 = node.contents();
    oldNodes.replaceWith(nodes17988);
  }));
  callback(root26709); return subs__;
  
  
  
  return subs__;
};

ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root26716 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var slider = $("<div>");
  
  root26716.append(slider);
  var result__ = slider.slider(mobl.instantiate(mobl.Dynamic, {'value': start.get(), 'min': min.get(), 'max': max.get(), 'step': 1, 'change': function(event, callback) {
                                                                        if(event && event.stopPropagation) event.stopPropagation();
                                                                        var result__ = slider.slider("value");
                                                                        s.set(result__);
                                                                        var result__ = slider.slider("value");
                                                                        start.set(result__);
                                                                        if(callback && callback.apply) callback(); return;
                                                                      }}));
  callback(root26716); return subs__;
  
  return subs__;
};
ui.title = 'ui__title';
ui.left = 'ui__left';
ui.right = 'ui__right';
ui.center = 'ui__center';
ui.ranger = 'ui__ranger';
