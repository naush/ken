mobl.provides('mobl.ui.generic');
mobl.ui.generic.loadingStyle = 'mobl__ui__generic__loadingStyle';

mobl.ui.generic.whenLoaded = function(value, elements, callback) {
  var root1051 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node321 = $("<span>");
  root1051.append(node321);
  var condSubs147 = new mobl.CompSubscription();
  subs__.addSub(condSubs147);
  var oldValue147;
  var renderCond147 = function() {
    var value1243 = value.get();
    if(oldValue147 === value1243) return;
    oldValue147 = value1243;
    var subs__ = condSubs147;
    subs__.unsubscribe();
    node321.empty();
    if(value1243) {
      var nodes875 = $("<span>");
      node321.append(nodes875);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl4();
      }));
      
      function renderControl4() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1052 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1052); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes875;
          nodes875 = node.contents();
          oldNodes.replaceWith(nodes875);
        }));
      }
      renderControl4();
      
      
    } else {
      
      var tmp2319 = mobl.ref(null);
      
      
      var tmp2318 = mobl.ref(null);
      
      var nodes876 = $("<span>");
      node321.append(nodes876);
      subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.loadingStyle), tmp2318, tmp2319, function(_, callback) {
        var root1053 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root1053.append("Loading...");
        
        var tmp2312 = mobl.ref("middle");
        
        
        var tmp2311 = mobl.ref("mobl/ui/generic/loading-large.gif");
        
        
        var tmp2317 = mobl.ref(null);
        
        
        var tmp2316 = mobl.ref(null);
        
        
        var tmp2315 = mobl.ref(null);
        
        
        var tmp2314 = mobl.ref(null);
        
        
        var tmp2313 = mobl.ref(null);
        
        var nodes877 = $("<span>");
        root1053.append(nodes877);
        subs__.addSub((mobl.ui.generic.image)(tmp2311, tmp2313, tmp2314, tmp2315, tmp2316, tmp2312, tmp2317, function(_, callback) {
          var root1054 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1054); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes877;
          nodes877 = node.contents();
          oldNodes.replaceWith(nodes877);
        }));
        callback(root1053); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes876;
        nodes876 = node.contents();
        oldNodes.replaceWith(nodes876);
      }));
      
      
    }
  };
  renderCond147();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond147();
  }));
  
  callback(root1051); return subs__;
  
  return subs__;
};
mobl.ui.generic.headerStyle = 'mobl__ui__generic__headerStyle';
mobl.ui.generic.headerContainerStyle = 'mobl__ui__generic__headerContainerStyle';
mobl.ui.generic.headerTextStyle = 'mobl__ui__generic__headerTextStyle';

mobl.ui.generic.header = function(text, onclick, elements, callback) {
  var root1055 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node322 = $("<div>");
  
  var ref11 = mobl.ref(mobl.ui.generic.headerStyle);
  if(ref11.get() !== null) {
    node322.attr('class', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      if(ref === ref11) {
        node322.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  var val2 = onclick.get();
  if(val2 !== null) {
    subs__.addSub(mobl.domBind(node322, 'tap', val2));
  }
  
  
  var node323 = $("<div>");
  
  var ref10 = mobl.ref(mobl.ui.generic.headerContainerStyle);
  if(ref10.get() !== null) {
    node323.attr('class', ref10.get());
    subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
      if(ref === ref10) {
        node323.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref10.rebind());
  
  
  var node324 = $("<div>");
  
  var ref8 = text;
  node324.text(""+ref8.get());
  var ignore2 = false;
  subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    node324.text(""+val);
  }));
  subs__.addSub(ref8.rebind());
  
  
  var ref9 = mobl.ref(mobl.ui.generic.headerTextStyle);
  if(ref9.get() !== null) {
    node324.attr('class', ref9.get());
    subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
      if(ref === ref9) {
        node324.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref9.rebind());
  
  node323.append(node324);
  node322.append(node323);
  var nodes878 = $("<span>");
  node322.append(nodes878);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1056); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes878;
      nodes878 = node.contents();
      oldNodes.replaceWith(nodes878);
    }));
  }
  renderControl5();
  root1055.append(node322);
  callback(root1055); return subs__;
  
  
  
  
  return subs__;
};
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1057 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  
  var sp = $("<span>");
  
  var ref12 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref12.get() !== null) {
    sp.attr('class', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      if(ref === ref12) {
        sp.attr('class', val);
      } else {
        console.log("Garbage!");
      }
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
  
  var val3 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val3 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val3));
  }
  
  var val4 = function(event, callback) {
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
  if(val4 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val4));
  }
  
  var val5 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after137(result__) {
                    var tmp2380 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after137);if(result__ !== undefined) after137(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val5 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val5));
  }
  
  var val6 = function(event, callback) {
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
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val6));
  }
  
  var ref13 = text;
  sp.text(""+ref13.get());
  var ignore3 = false;
  subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref13.rebind());
  
  
  root1057.append(sp);
  callback(root1057); return subs__;
  
  return subs__;
};
mobl.ui.generic.sideButtonStyle = 'mobl__ui__generic__sideButtonStyle';
mobl.ui.generic.sideButtonPushedStyle = 'mobl__ui__generic__sideButtonPushedStyle';

mobl.ui.generic.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1058 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes879 = $("<span>");
  root1058.append(nodes879);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1059 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1059); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes879;
    nodes879 = node.contents();
    oldNodes.replaceWith(nodes879);
  }));
  callback(root1058); return subs__;
  
  return subs__;
};
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';

mobl.ui.generic.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1060 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes880 = $("<span>");
  root1060.append(nodes880);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1061 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1061); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes880;
    nodes880 = node.contents();
    oldNodes.replaceWith(nodes880);
  }));
  callback(root1060); return subs__;
  
  return subs__;
};

mobl.ui.generic.block = function(cssClass, id, onclick, elements, callback) {
  var root1062 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node325 = $("<div>");
  
  var ref14 = id;
  if(ref14.get() !== null) {
    node325.attr('id', ref14.get());
    subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
      if(ref === ref14) {
        node325.attr('id', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref14.rebind());
  
  var ref15 = cssClass;
  if(ref15.get() !== null) {
    node325.attr('class', ref15.get());
    subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
      if(ref === ref15) {
        node325.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref15.rebind());
  
  var val7 = onclick.get();
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(node325, 'tap', val7));
  }
  
  var nodes881 = $("<span>");
  node325.append(nodes881);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl6();
  }));
  
  function renderControl6() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1063 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1063); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes881;
      nodes881 = node.contents();
      oldNodes.replaceWith(nodes881);
    }));
  }
  renderControl6();
  root1062.append(node325);
  callback(root1062); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.span = function(cssClass, id, onclick, elements, callback) {
  var root1064 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node326 = $("<span>");
  
  var ref16 = id;
  if(ref16.get() !== null) {
    node326.attr('id', ref16.get());
    subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
      if(ref === ref16) {
        node326.attr('id', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref16.rebind());
  
  var ref17 = cssClass;
  if(ref17.get() !== null) {
    node326.attr('class', ref17.get());
    subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
      if(ref === ref17) {
        node326.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref17.rebind());
  
  var val8 = onclick.get();
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(node326, 'tap', val8));
  }
  
  var nodes882 = $("<span>");
  node326.append(nodes882);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7();
  }));
  
  function renderControl7() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1065 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1065); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes882;
      nodes882 = node.contents();
      oldNodes.replaceWith(nodes882);
    }));
  }
  renderControl7();
  root1064.append(node326);
  callback(root1064); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.groupStyle = 'mobl__ui__generic__groupStyle';

mobl.ui.generic.group = function(elements, callback) {
  var root1066 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node327 = $("<ul>");
  
  var ref18 = mobl.ref(mobl.ui.generic.groupStyle);
  if(ref18.get() !== null) {
    node327.attr('class', ref18.get());
    subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
      if(ref === ref18) {
        node327.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref18.rebind());
  
  var nodes883 = $("<span>");
  node327.append(nodes883);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl8();
  }));
  
  function renderControl8() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1067 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1067); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes883;
      nodes883 = node.contents();
      oldNodes.replaceWith(nodes883);
    }));
  }
  renderControl8();
  root1066.append(node327);
  callback(root1066); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1068 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node328 = $("<img>");
  
  var ref19 = url;
  if(ref19.get() !== null) {
    node328.attr('src', ref19.get());
    subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
      if(ref === ref19) {
        node328.attr('src', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref19.rebind());
  
  var ref20 = width;
  if(ref20.get() !== null) {
    node328.attr('width', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      if(ref === ref20) {
        node328.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  var ref21 = height;
  if(ref21.get() !== null) {
    node328.attr('height', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      if(ref === ref21) {
        node328.attr('height', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  var ref22 = style;
  if(ref22.get() !== null) {
    node328.attr('class', ref22.get());
    subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
      if(ref === ref22) {
        node328.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref22.rebind());
  
  var val9 = onclick.get();
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(node328, 'tap', val9));
  }
  
  var ref23 = valign;
  if(ref23.get() !== null) {
    node328.attr('valign', ref23.get());
    subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
      if(ref === ref23) {
        node328.attr('valign', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref23.rebind());
  
  var ref24 = align;
  if(ref24.get() !== null) {
    node328.attr('align', ref24.get());
    subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
      if(ref === ref24) {
        node328.attr('align', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref24.rebind());
  
  root1068.append(node328);
  callback(root1068); return subs__;
  
  return subs__;
};
mobl.ui.generic.itemStyle = 'mobl__ui__generic__itemStyle';
mobl.ui.generic.itemPushedStyle = 'mobl__ui__generic__itemPushedStyle';
mobl.ui.generic.itemArrowStyle = 'mobl__ui__generic__itemArrowStyle';

mobl.ui.generic.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1069 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  
  var el = $("<li>");
  
  var ref25 = mobl.ref(mobl.ui.generic.itemStyle);
  if(ref25.get() !== null) {
    el.attr('class', ref25.get());
    subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
      if(ref === ref25) {
        el.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref25.rebind());
  
  var ref26 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref26.get() !== null) {
    el.attr('class', ref26.get());
    subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
      if(ref === ref26) {
        el.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(mobl.ui.generic.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref26.rebind());
  
  var val10 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp2381 = result__;
                                           function after138(result__) {
                                             var tmp2382 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after138);if(result__ !== undefined) after138(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp2383 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val10 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val10));
  }
  
  var nodes884 = $("<span>");
  el.append(nodes884);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl9();
  }));
  
  function renderControl9() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1070 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1070); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes884;
      nodes884 = node.contents();
      oldNodes.replaceWith(nodes884);
    }));
  }
  renderControl9();
  root1069.append(el);
  callback(root1069); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.checkBox = function(b, label, onchange, elements, callback) {
  var root1071 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node329 = $("<input>");
  node329.attr('type', "checkbox");
  
  var ref28 = b;
  node329.attr('checked', !!ref28.get());
  subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
    if(ref === ref28) node329.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node329, 'change', function() {
    b.set(!!node329.attr('checked'));
  }));
  
  var val12 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val12 !== null) {
    subs__.addSub(mobl.domBind(node329, 'tap', val12));
  }
  
  var val13 = onchange.get();
  if(val13 !== null) {
    subs__.addSub(mobl.domBind(node329, 'change', val13));
  }
  
  root1071.append(node329);
  
  root1071.append(" ");
  
  var node330 = $("<span>");
  
  var ref27 = label;
  node330.text(""+ref27.get());
  var ignore4 = false;
  subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
    if(ignore4) return;
    node330.text(""+val);
  }));
  subs__.addSub(ref27.rebind());
  
  
  var val11 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after139(result__) {
                    var tmp2384 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after139);if(result__ !== undefined) after139(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val11 !== null) {
    subs__.addSub(mobl.domBind(node330, 'tap', val11));
  }
  
  root1071.append(node330);
  callback(root1071); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.textFieldStyle = 'mobl__ui__generic__textFieldStyle';

mobl.ui.generic.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1072 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node331 = $("<span>");
  root1072.append(node331);
  var condSubs148 = new mobl.CompSubscription();
  subs__.addSub(condSubs148);
  var oldValue148;
  var renderCond148 = function() {
    var value1244 = label.get();
    if(oldValue148 === value1244) return;
    oldValue148 = value1244;
    var subs__ = condSubs148;
    subs__.unsubscribe();
    node331.empty();
    if(value1244) {
      
      var node332 = $("<span>");
      node332.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref32 = label;
      node332.text(""+ref32.get());
      var ignore6 = false;
      subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
        if(ignore6) return;
        node332.text(""+val);
      }));
      subs__.addSub(ref32.rebind());
      
      
      node331.append(node332);
      
      var node333 = $("<span>");
      node333.attr('style', "float: left");
      
      
      var node334 = $("<input>");
      node334.attr('type', "text");
      
      var ref29 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref29.get() !== null) {
        node334.attr('class', ref29.get());
        subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
          if(ref === ref29) {
            node334.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref29.rebind());
      
      var ref30 = placeholder;
      if(ref30.get() !== null) {
        node334.attr('placeholder', ref30.get());
        subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
          if(ref === ref30) {
            node334.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref30.rebind());
      
      var ref31 = s;
      node334.val(""+ref31.get());
      var ignore5 = false;
      subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
        if(ignore5) return;
        node334.val(""+val);
      }));
      subs__.addSub(ref31.rebind());
      
      subs__.addSub(mobl.domBind(node334, 'keyup', function() {
        ignore5 = true;
        s.set(mobl.stringTomobl__String(node334.val()));
        ignore5 = false;
      }));
      
      
      var val14 = onchange.get();
      if(val14 !== null) {
        subs__.addSub(mobl.domBind(node334, 'change', val14));
      }
      
      var val15 = onkeyup.get();
      if(val15 !== null) {
        subs__.addSub(mobl.domBind(node334, 'keyup', val15));
      }
      
      var val16 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val16 !== null) {
        subs__.addSub(mobl.domBind(node334, 'blur', val16));
      }
      
      node333.append(node334);
      node331.append(node333);
      
      
      
      
    } else {
      
      var node335 = $("<input>");
      node335.attr('type', "text");
      
      var ref33 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref33.get() !== null) {
        node335.attr('class', ref33.get());
        subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
          if(ref === ref33) {
            node335.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref33.rebind());
      
      var ref34 = placeholder;
      if(ref34.get() !== null) {
        node335.attr('placeholder', ref34.get());
        subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
          if(ref === ref34) {
            node335.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref34.rebind());
      
      var ref35 = s;
      node335.val(""+ref35.get());
      var ignore7 = false;
      subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
        if(ignore7) return;
        node335.val(""+val);
      }));
      subs__.addSub(ref35.rebind());
      
      subs__.addSub(mobl.domBind(node335, 'keyup', function() {
        ignore7 = true;
        s.set(mobl.stringTomobl__String(node335.val()));
        ignore7 = false;
      }));
      
      
      var val17 = onchange.get();
      if(val17 !== null) {
        subs__.addSub(mobl.domBind(node335, 'change', val17));
      }
      
      var val18 = onkeyup.get();
      if(val18 !== null) {
        subs__.addSub(mobl.domBind(node335, 'keyup', val18));
      }
      
      var val19 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val19 !== null) {
        subs__.addSub(mobl.domBind(node335, 'blur', val19));
      }
      
      node331.append(node335);
      
      
    }
  };
  renderCond148();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond148();
  }));
  
  callback(root1072); return subs__;
  
  return subs__;
};

mobl.ui.generic.numField = function(n, placeholder, label, onchange, elements, callback) {
  var root1073 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node336 = $("<span>");
  root1073.append(node336);
  var condSubs149 = new mobl.CompSubscription();
  subs__.addSub(condSubs149);
  var oldValue149;
  var renderCond149 = function() {
    var value1245 = label.get();
    if(oldValue149 === value1245) return;
    oldValue149 = value1245;
    var subs__ = condSubs149;
    subs__.unsubscribe();
    node336.empty();
    if(value1245) {
      
      var node337 = $("<span>");
      node337.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref39 = label;
      node337.text(""+ref39.get());
      var ignore9 = false;
      subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
        if(ignore9) return;
        node337.text(""+val);
      }));
      subs__.addSub(ref39.rebind());
      
      
      node336.append(node337);
      
      var node338 = $("<span>");
      node338.attr('style', "float: left");
      
      
      var node339 = $("<input>");
      node339.attr('type', "text");
      
      var ref36 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref36.get() !== null) {
        node339.attr('class', ref36.get());
        subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
          if(ref === ref36) {
            node339.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref36.rebind());
      
      var ref37 = placeholder;
      if(ref37.get() !== null) {
        node339.attr('placeholder', ref37.get());
        subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
          if(ref === ref37) {
            node339.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref37.rebind());
      
      var ref38 = n;
      node339.val(""+ref38.get());
      var ignore8 = false;
      subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node339.val(""+val);
      }));
      subs__.addSub(ref38.rebind());
      
      subs__.addSub(mobl.domBind(node339, 'keyup', function() {
        ignore8 = true;
        n.set(mobl.stringTomobl__Num(node339.val()));
        ignore8 = false;
      }));
      
      
      var val20 = onchange.get();
      if(val20 !== null) {
        subs__.addSub(mobl.domBind(node339, 'change', val20));
      }
      
      var val21 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node339, 'blur', val21));
      }
      
      node338.append(node339);
      node336.append(node338);
      
      
      
      
    } else {
      
      var node340 = $("<input>");
      node340.attr('type', "text");
      
      var ref40 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref40.get() !== null) {
        node340.attr('class', ref40.get());
        subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
          if(ref === ref40) {
            node340.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref40.rebind());
      
      var ref41 = placeholder;
      if(ref41.get() !== null) {
        node340.attr('placeholder', ref41.get());
        subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
          if(ref === ref41) {
            node340.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref41.rebind());
      
      var ref42 = n;
      node340.val(""+ref42.get());
      var ignore10 = false;
      subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
        if(ignore10) return;
        node340.val(""+val);
      }));
      subs__.addSub(ref42.rebind());
      
      subs__.addSub(mobl.domBind(node340, 'keyup', function() {
        ignore10 = true;
        n.set(mobl.stringTomobl__Num(node340.val()));
        ignore10 = false;
      }));
      
      
      var val22 = onchange.get();
      if(val22 !== null) {
        subs__.addSub(mobl.domBind(node340, 'change', val22));
      }
      
      var val23 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val23 !== null) {
        subs__.addSub(mobl.domBind(node340, 'blur', val23));
      }
      
      node336.append(node340);
      
      
    }
  };
  renderCond149();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond149();
  }));
  
  callback(root1073); return subs__;
  
  return subs__;
};
mobl.ui.generic.tabbarStyle = 'mobl__ui__generic__tabbarStyle';
mobl.ui.generic.inActiveTabButtonStyle = 'mobl__ui__generic__inActiveTabButtonStyle';
mobl.ui.generic.activeTabButtonStyle = 'mobl__ui__generic__activeTabButtonStyle';
mobl.ui.generic.inActiveTabStyle = 'mobl__ui__generic__inActiveTabStyle';
mobl.ui.generic.activeTabStyle = 'mobl__ui__generic__activeTabStyle';

mobl.ui.generic.tabSet = function(tabs, elements, callback) {
  var root1074 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  
  var tmp2326 = mobl.ref(null);
  
  
  var tmp2325 = mobl.ref(null);
  
  var nodes885 = $("<span>");
  root1074.append(nodes885);
  subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.tabbarStyle), tmp2325, tmp2326, function(_, callback) {
    var root1075 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node341 = mobl.loadingSpan();
    root1075.append(node341);
    var list166;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList166 = function() {
      var subs__ = listSubs__;
      list166 = tabs.get();
      list166.list(function(results166) {
        node341.empty();
        for(var i168 = 0; i168 < results166.length; i168++) {
          (function() {
            var iternode166 = $("<span>");
            node341.append(iternode166);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results166), i168), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results166), i168), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results166), i168), "_3");
            
            var tmp2323 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp2323.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp2323.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
              tmp2323.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp2323.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            
            
            var tmp2322 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp2324 = mobl.ref(null);
            
            var nodes886 = $("<span>");
            iternode166.append(nodes886);
            subs__.addSub((mobl.ui.generic.span)(tmp2323, tmp2324, tmp2322, function(_, callback) {
              var root1076 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp2321 = mobl.ref(null);
              
              
              var tmp2320 = mobl.ref(null);
              
              var nodes887 = $("<span>");
              root1076.append(nodes887);
              subs__.addSub((mobl.label)(tabName, tmp2320, tmp2321, function(_, callback) {
                var root1077 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1077); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes887;
                nodes887 = node.contents();
                oldNodes.replaceWith(nodes887);
              }));
              callback(root1076); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes886;
              nodes886 = node.contents();
              oldNodes.replaceWith(nodes886);
            }));
            
            var oldNodes = iternode166;
            iternode166 = iternode166.contents();
            oldNodes.replaceWith(iternode166);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list166.addEventListener('change', function() { listSubs__.unsubscribe(); renderList166(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList166(true); }));
      });
    };
    renderList166();
    
    callback(root1075); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes885;
    nodes885 = node.contents();
    oldNodes.replaceWith(nodes885);
  }));
  
  var node342 = mobl.loadingSpan();
  root1074.append(node342);
  var list167;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList167 = function() {
    var subs__ = listSubs__;
    list167 = tabs.get();
    list167.list(function(results167) {
      node342.empty();
      for(var i169 = 0; i169 < results167.length; i169++) {
        (function() {
          var iternode167 = $("<span>");
          node342.append(iternode167);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results167), i169), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results167), i169), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results167), i169), "_3");
          
          var tmp2327 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp2327.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp2327.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
            tmp2327.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
            tmp2327.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          
          
          var tmp2329 = mobl.ref(null);
          
          
          var tmp2328 = mobl.ref(null);
          
          var nodes888 = $("<span>");
          iternode167.append(nodes888);
          subs__.addSub((mobl.ui.generic.block)(tmp2327, tmp2328, tmp2329, function(_, callback) {
            var root1078 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes889 = $("<span>");
            root1078.append(nodes889);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root1079 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes890 = $("<span>");
              root1079.append(nodes890);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl10();
              }));
              
              function renderControl10() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root1080 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1080); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes890;
                  nodes890 = node.contents();
                  oldNodes.replaceWith(nodes890);
                }));
              }
              renderControl10();
              callback(root1079); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes889;
              nodes889 = node.contents();
              oldNodes.replaceWith(nodes889);
            }));
            callback(root1078); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes888;
            nodes888 = node.contents();
            oldNodes.replaceWith(nodes888);
          }));
          
          var oldNodes = iternode167;
          iternode167 = iternode167.contents();
          oldNodes.replaceWith(iternode167);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list167.addEventListener('change', function() { listSubs__.unsubscribe(); renderList167(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList167(true); }));
    });
  };
  renderList167();
  
  callback(root1074); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.searchboxStyle = 'mobl__ui__generic__searchboxStyle';
mobl.ui.generic.searchBoxInputStyle = 'mobl__ui__generic__searchBoxInputStyle';

mobl.ui.generic.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1081 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node343 = $("<div>");
  
  var ref46 = mobl.ref(mobl.ui.generic.searchboxStyle);
  if(ref46.get() !== null) {
    node343.attr('class', ref46.get());
    subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
      if(ref === ref46) {
        node343.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref46.rebind());
  
  
  var node344 = $("<input>");
  node344.attr('type', "text");
  
  var ref43 = mobl.ref(mobl.ui.generic.searchBoxInputStyle);
  if(ref43.get() !== null) {
    node344.attr('class', ref43.get());
    subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
      if(ref === ref43) {
        node344.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref43.rebind());
  
  var ref44 = placeholder;
  if(ref44.get() !== null) {
    node344.attr('placeholder', ref44.get());
    subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
      if(ref === ref44) {
        node344.attr('placeholder', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref44.rebind());
  
  var ref45 = s;
  node344.val(""+ref45.get());
  var ignore11 = false;
  subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
    if(ignore11) return;
    node344.val(""+val);
  }));
  subs__.addSub(ref45.rebind());
  
  subs__.addSub(mobl.domBind(node344, 'keyup', function() {
    ignore11 = true;
    s.set(mobl.stringTomobl__String(node344.val()));
    ignore11 = false;
  }));
  
  
  var val24 = onsearch.get();
  if(val24 !== null) {
    subs__.addSub(mobl.domBind(node344, 'change', val24));
  }
  
  var val25 = onkeyup.get();
  if(val25 !== null) {
    subs__.addSub(mobl.domBind(node344, 'keyup', val25));
  }
  node344.attr('autocorrect', "off");
  node344.attr('autocapitalize', "off");
  node344.attr('autocomplete', "off");
  
  node343.append(node344);
  root1081.append(node343);
  callback(root1081); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.contextMenuStyle = 'mobl__ui__generic__contextMenuStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.contextMenu = function(elements, callback) {
  var root1082 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref47 = mobl.ref(mobl.ui.generic.contextMenuStyle);
  if(ref47.get() !== null) {
    menu.attr('class', ref47.get());
    subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
      if(ref === ref47) {
        menu.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref47.rebind());
  
  var nodes891 = $("<span>");
  menu.append(nodes891);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl11();
  }));
  
  function renderControl11() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1083 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1083); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes891;
      nodes891 = node.contents();
      oldNodes.replaceWith(nodes891);
    }));
  }
  renderControl11();
  root1082.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "mobl/ui/generic/contextmenu.png");
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
                  var tmp2387 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val26 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val26));
  }
  
  root1082.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1082); return subs__;
  
  
  
  return subs__;
};

mobl.ui.generic.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1084 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2379 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp2379.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node345 = $("<span>");
  root1084.append(node345);
  var condSubs150 = new mobl.CompSubscription();
  subs__.addSub(condSubs150);
  var oldValue150;
  var renderCond150 = function() {
    var value1246 = tmp2379.get();
    if(oldValue150 === value1246) return;
    oldValue150 = value1246;
    var subs__ = condSubs150;
    subs__.unsubscribe();
    node345.empty();
    if(value1246) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node346 = $("<div>");
        node346.attr('width', "100%");
        
        
        var node347 = $("<div>");
        node347.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes893 = $("<span>");
        node347.append(nodes893);
        subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
          var root1086 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node349 = mobl.loadingSpan();
          root1086.append(node349);
          var list168;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList168 = function() {
            var subs__ = listSubs__;
            list168 = items.get();
            list168.list(function(results168) {
              node349.empty();
              for(var i170 = 0; i170 < results168.length; i170++) {
                (function() {
                  var iternode168 = $("<span>");
                  node349.append(iternode168);
                  var it;
                  it = mobl.ref(mobl.ref(results168), i170);
                  
                  var tmp2343 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp2343.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp2343.set(it.get() == current.get());
                  }));
                  
                  
                  var node350 = $("<span>");
                  iternode168.append(node350);
                  var condSubs151 = new mobl.CompSubscription();
                  subs__.addSub(condSubs151);
                  var oldValue151;
                  var renderCond151 = function() {
                    var value1247 = tmp2343.get();
                    if(oldValue151 === value1247) return;
                    oldValue151 = value1247;
                    var subs__ = condSubs151;
                    subs__.unsubscribe();
                    node350.empty();
                    if(value1247) {
                      
                      var tmp2339 = mobl.ref(false);
                      
                      
                      var tmp2338 = mobl.ref(null);
                      
                      
                      var tmp2337 = mobl.ref(null);
                      
                      var nodes894 = $("<span>");
                      node350.append(nodes894);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.selectedItemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp2337, tmp2338, tmp2339, function(_, callback) {
                        var root1087 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes895 = $("<span>");
                        root1087.append(nodes895);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl13();
                        }));
                        
                        function renderControl13() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1088 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1088); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes895;
                            nodes895 = node.contents();
                            oldNodes.replaceWith(nodes895);
                          }));
                        }
                        renderControl13();
                        callback(root1087); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes894;
                        nodes894 = node.contents();
                        oldNodes.replaceWith(nodes894);
                      }));
                      
                      
                    } else {
                      
                      var tmp2341 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp2340 = mobl.ref(true);
                      
                      
                      var tmp2342 = mobl.ref(null);
                      
                      var nodes896 = $("<span>");
                      node350.append(nodes896);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp2341, tmp2342, tmp2340, function(_, callback) {
                        var root1089 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes897 = $("<span>");
                        root1089.append(nodes897);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl14();
                        }));
                        
                        function renderControl14() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1090 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1090); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes897;
                            nodes897 = node.contents();
                            oldNodes.replaceWith(nodes897);
                          }));
                        }
                        renderControl14();
                        callback(root1089); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes896;
                        nodes896 = node.contents();
                        oldNodes.replaceWith(nodes896);
                      }));
                      
                      
                    }
                  };
                  renderCond151();
                  subs__.addSub(tmp2343.addEventListener('change', function() {
                    renderCond151();
                  }));
                  
                  
                  var oldNodes = iternode168;
                  iternode168 = iternode168.contents();
                  oldNodes.replaceWith(iternode168);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list168.addEventListener('change', function() { listSubs__.unsubscribe(); renderList168(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList168(true); }));
            });
          };
          renderList168();
          
          callback(root1086); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes893;
          nodes893 = node.contents();
          oldNodes.replaceWith(nodes893);
        }));
        node346.append(node347);
        
        var node348 = $("<div>");
        node348.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        var nodes892 = $("<span>");
        node348.append(nodes892);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl12();
        }));
        
        function renderControl12() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root1085 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1085); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes892;
            nodes892 = node.contents();
            oldNodes.replaceWith(nodes892);
          }));
        }
        renderControl12();
        node346.append(node348);
        node345.append(node346);
        
        
        
        
        
        
      });
    } else {
      var nodes898 = $("<span>");
      node345.append(nodes898);
      subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
        var root1091 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node351 = mobl.loadingSpan();
        root1091.append(node351);
        var list169;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList169 = function() {
          var subs__ = listSubs__;
          list169 = items.get();
          list169.list(function(results169) {
            node351.empty();
            for(var i171 = 0; i171 < results169.length; i171++) {
              (function() {
                var iternode169 = $("<span>");
                node351.append(iternode169);
                var it;
                it = mobl.ref(mobl.ref(results169), i171);
                
                var tmp2330 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('mobl.ui.generic.detailScreen', [it, detail], function(result__) {
                                     var tmp2388 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp2332 = mobl.ref(false);
                
                
                var tmp2331 = mobl.ref(null);
                
                var nodes899 = $("<span>");
                iternode169.append(nodes899);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp2330, tmp2331, tmp2332, function(_, callback) {
                  var root1092 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes900 = $("<span>");
                  root1092.append(nodes900);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl15();
                  }));
                  
                  function renderControl15() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1093 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1093); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes900;
                      nodes900 = node.contents();
                      oldNodes.replaceWith(nodes900);
                    }));
                  }
                  renderControl15();
                  callback(root1092); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes899;
                  nodes899 = node.contents();
                  oldNodes.replaceWith(nodes899);
                }));
                
                var oldNodes = iternode169;
                iternode169 = iternode169.contents();
                oldNodes.replaceWith(iternode169);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list169.addEventListener('change', function() { listSubs__.unsubscribe(); renderList169(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList169(true); }));
          });
        };
        renderList169();
        
        callback(root1091); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes898;
        nodes898 = node.contents();
        oldNodes.replaceWith(nodes898);
      }));
      
      
    }
  };
  renderCond150();
  subs__.addSub(tmp2379.addEventListener('change', function() {
    renderCond150();
  }));
  
  callback(root1084); return subs__;
  
  return subs__;
};

mobl.ui.generic.detailScreen = function(it, detail, callback, screenCallback) {
  var root1094 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2335 = mobl.ref("Detail");
  
  
  var tmp2336 = mobl.ref(null);
  
  var nodes901 = $("<span>");
  root1094.append(nodes901);
  subs__.addSub((mobl.ui.generic.header)(tmp2335, tmp2336, function(_, callback) {
    var root1095 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp2334 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp2333 = mobl.ref("Back");
    
    var nodes902 = $("<span>");
    root1095.append(nodes902);
    subs__.addSub((mobl.ui.generic.backButton)(tmp2333, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp2334, function(_, callback) {
      var root1096 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1096); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes902;
      nodes902 = node.contents();
      oldNodes.replaceWith(nodes902);
    }));
    callback(root1095); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes901;
    nodes901 = node.contents();
    oldNodes.replaceWith(nodes901);
  }));
  var nodes903 = $("<span>");
  root1094.append(nodes903);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl16();
  }));
  
  function renderControl16() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1097 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1097); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes903;
      nodes903 = node.contents();
      oldNodes.replaceWith(nodes903);
    }));
  }
  renderControl16();
  callback(root1094); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.selectedItemStyle = 'mobl__ui__generic__selectedItemStyle';

mobl.ui.generic.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1098 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes904 = $("<span>");
  root1098.append(nodes904);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root1099 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node352 = mobl.loadingSpan();
    root1099.append(node352);
    var list170;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList170 = function() {
      var subs__ = listSubs__;
      list170 = coll.get();
      list170.list(function(results170) {
        node352.empty();
        for(var i172 = 0; i172 < results170.length; i172++) {
          (function() {
            var iternode170 = $("<span>");
            node352.append(iternode170);
            var it;
            it = mobl.ref(mobl.ref(results170), i172);
            
            var tmp2350 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp2350.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp2350.set(it.get() == selected.get());
            }));
            
            
            var node353 = $("<span>");
            iternode170.append(node353);
            var condSubs152 = new mobl.CompSubscription();
            subs__.addSub(condSubs152);
            var oldValue152;
            var renderCond152 = function() {
              var value1248 = tmp2350.get();
              if(oldValue152 === value1248) return;
              oldValue152 = value1248;
              var subs__ = condSubs152;
              subs__.unsubscribe();
              node353.empty();
              if(value1248) {
                
                var tmp2346 = mobl.ref(false);
                
                
                var tmp2345 = mobl.ref(null);
                
                
                var tmp2344 = mobl.ref(null);
                
                var nodes905 = $("<span>");
                node353.append(nodes905);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp2344, tmp2345, tmp2346, function(_, callback) {
                  var root1100 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes906 = $("<span>");
                  root1100.append(nodes906);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl17();
                  }));
                  
                  function renderControl17() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1101 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1101); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes906;
                      nodes906 = node.contents();
                      oldNodes.replaceWith(nodes906);
                    }));
                  }
                  renderControl17();
                  callback(root1100); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes905;
                  nodes905 = node.contents();
                  oldNodes.replaceWith(nodes905);
                }));
                
                
              } else {
                
                var tmp2348 = mobl.ref(true);
                
                
                var tmp2347 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp2349 = mobl.ref(null);
                
                var nodes907 = $("<span>");
                node353.append(nodes907);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp2347, tmp2349, tmp2348, function(_, callback) {
                  var root1102 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes908 = $("<span>");
                  root1102.append(nodes908);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl18();
                  }));
                  
                  function renderControl18() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1103 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1103); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes908;
                      nodes908 = node.contents();
                      oldNodes.replaceWith(nodes908);
                    }));
                  }
                  renderControl18();
                  callback(root1102); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes907;
                  nodes907 = node.contents();
                  oldNodes.replaceWith(nodes907);
                }));
                
                
              }
            };
            renderCond152();
            subs__.addSub(tmp2350.addEventListener('change', function() {
              renderCond152();
            }));
            
            
            var oldNodes = iternode170;
            iternode170 = iternode170.contents();
            oldNodes.replaceWith(iternode170);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list170.addEventListener('change', function() { listSubs__.unsubscribe(); renderList170(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList170(true); }));
      });
    };
    renderList170();
    
    callback(root1099); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes904;
    nodes904 = node.contents();
    oldNodes.replaceWith(nodes904);
  }));
  callback(root1098); return subs__;
  
  return subs__;
};
mobl.ui.generic.loadMoreStyle = 'mobl__ui__generic__loadMoreStyle';

mobl.ui.generic.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
  var root1104 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes909 = $("<span>");
    root1104.append(nodes909);
    subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
      var root1105 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp2354 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp2354.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp2354.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp2354.set(coll.get().limit(n.get()));
      }));
      
      
      var node354 = mobl.loadingSpan();
      root1105.append(node354);
      var list171;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList171 = function() {
        var subs__ = listSubs__;
        list171 = tmp2354.get();
        list171.list(function(results171) {
          node354.empty();
          for(var i173 = 0; i173 < results171.length; i173++) {
            (function() {
              var iternode171 = $("<span>");
              node354.append(iternode171);
              var it;
              it = mobl.ref(mobl.ref(results171), i173);
              
              var tmp2351 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp2353 = mobl.ref(false);
              
              
              var tmp2352 = mobl.ref(null);
              
              var nodes910 = $("<span>");
              iternode171.append(nodes910);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp2351, tmp2352, tmp2353, function(_, callback) {
                var root1106 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes911 = $("<span>");
                root1106.append(nodes911);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl19();
                }));
                
                function renderControl19() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root1107 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1107); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes911;
                    nodes911 = node.contents();
                    oldNodes.replaceWith(nodes911);
                  }));
                }
                renderControl19();
                callback(root1106); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes910;
                nodes910 = node.contents();
                oldNodes.replaceWith(nodes910);
              }));
              
              var oldNodes = iternode171;
              iternode171 = iternode171.contents();
              oldNodes.replaceWith(iternode171);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list171.addEventListener('change', function() { listSubs__.unsubscribe(); renderList171(true); }));
          subs__.addSub(tmp2354.addEventListener('change', function() { listSubs__.unsubscribe(); renderList171(true); }));
        });
      };
      renderList171();
      
      
      var tmp2355 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp2355.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp2355.set(n.get() < total.get());
      }));
      
      
      var node355 = $("<span>");
      root1105.append(node355);
      var condSubs153 = new mobl.CompSubscription();
      subs__.addSub(condSubs153);
      var oldValue153;
      var renderCond153 = function() {
        var value1249 = tmp2355.get();
        if(oldValue153 === value1249) return;
        oldValue153 = value1249;
        var subs__ = condSubs153;
        subs__.unsubscribe();
        node355.empty();
        if(value1249) {
          
          var node356 = $("<li>");
          
          var ref48 = mobl.ref(mobl.ui.generic.loadMoreStyle);
          if(ref48.get() !== null) {
            node356.attr('class', ref48.get());
            subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
              if(ref === ref48) {
                node356.attr('class', val);
              } else {
                console.log("Garbage!");
              }
            }));
            
          }
          subs__.addSub(ref48.rebind());
          
          var val27 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val27 !== null) {
            subs__.addSub(mobl.domBind(node356, 'tap', val27));
          }
          
          
          node356.append("More");
          node355.append(node356);
          
          
        } else {
          
        }
      };
      renderCond153();
      subs__.addSub(tmp2355.addEventListener('change', function() {
        renderCond153();
      }));
      
      callback(root1105); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes909;
      nodes909 = node.contents();
      oldNodes.replaceWith(nodes909);
    }));
    callback(root1104); return subs__;
    
  });
  return subs__;
};

mobl.ui.generic.markableList = function(items, elements, callback) {
  var root1108 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes912 = $("<span>");
  root1108.append(nodes912);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root1109 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node357 = mobl.loadingSpan();
    root1109.append(node357);
    var list172;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList172 = function() {
      var subs__ = listSubs__;
      list172 = items.get();
      list172.list(function(results172) {
        node357.empty();
        for(var i174 = 0; i174 < results172.length; i174++) {
          (function() {
            var iternode172 = $("<span>");
            node357.append(iternode172);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results172), i174), "_1");it = mobl.ref(mobl.ref(mobl.ref(results172), i174), "_2");
            
            var tmp2359 = mobl.ref(false);
            
            
            var tmp2358 = mobl.ref(null);
            
            
            var tmp2357 = mobl.ref(null);
            
            var nodes913 = $("<span>");
            iternode172.append(nodes913);
            subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp2357, tmp2358, tmp2359, function(_, callback) {
              var root1110 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp2356 = mobl.ref(null);
              
              var nodes914 = $("<span>");
              root1110.append(nodes914);
              subs__.addSub((mobl.ui.generic.checkBox)(checked, it, tmp2356, function(_, callback) {
                var root1111 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1111); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes914;
                nodes914 = node.contents();
                oldNodes.replaceWith(nodes914);
              }));
              callback(root1110); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes913;
              nodes913 = node.contents();
              oldNodes.replaceWith(nodes913);
            }));
            
            var oldNodes = iternode172;
            iternode172 = iternode172.contents();
            oldNodes.replaceWith(iternode172);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list172.addEventListener('change', function() { listSubs__.unsubscribe(); renderList172(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList172(true); }));
      });
    };
    renderList172();
    
    callback(root1109); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes912;
    nodes912 = node.contents();
    oldNodes.replaceWith(nodes912);
  }));
  callback(root1108); return subs__;
  
  return subs__;
};

mobl.ui.generic.selectList = function(title, coll, callback, screenCallback) {
  var root1112 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  
  var result__ = coll.get();
  coll.get().list(function(coll145) {
    coll145 = coll145.reverse();
    function processOne125() {
      var it;
      it = coll145.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll145.length > 0) processOne125(); else rest125();
      
    }
    function rest125() {
      
      var tmp2364 = mobl.ref(null);
      
      var nodes915 = $("<span>");
      root1112.append(nodes915);
      subs__.addSub((mobl.ui.generic.header)(title, tmp2364, function(_, callback) {
        var root1113 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp2360 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp2361 = mobl.ref("Back");
        
        var nodes916 = $("<span>");
        root1113.append(nodes916);
        subs__.addSub((mobl.ui.generic.backButton)(tmp2361, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp2360, function(_, callback) {
          var root1114 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1114); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes916;
          nodes916 = node.contents();
          oldNodes.replaceWith(nodes916);
        }));
        
        var tmp2363 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll144) {
                               coll144 = coll144.reverse();
                               function processOne124() {
                                 var checked;var it;
                                 var tmp2390 = coll144.pop();
                                 checked = tmp2390._1;it = tmp2390._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll144.length > 0) processOne124(); else rest124();
                                   
                                 } else {
                                   {
                                     
                                     if(coll144.length > 0) processOne124(); else rest124();
                                     
                                   }
                                 }
                               }
                               function rest124() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll144.length > 0) processOne124(); else rest124();
                             });
                             
                           });
        
        
        var tmp2362 = mobl.ref("Done");
        
        var nodes917 = $("<span>");
        root1113.append(nodes917);
        subs__.addSub((mobl.ui.generic.button)(tmp2362, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp2363, function(_, callback) {
          var root1115 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1115); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes917;
          nodes917 = node.contents();
          oldNodes.replaceWith(nodes917);
        }));
        callback(root1113); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes915;
        nodes915 = node.contents();
        oldNodes.replaceWith(nodes915);
      }));
      var nodes918 = $("<span>");
      root1112.append(nodes918);
      subs__.addSub((mobl.ui.generic.markableList)(items, function(_, callback) {
        var root1116 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1116); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes918;
        nodes918 = node.contents();
        oldNodes.replaceWith(nodes918);
      }));
      callback(root1112); return subs__;
      
      
    }
    if(coll145.length > 0) processOne125(); else rest125();
  });
  
  return subs__;
};

mobl.ui.generic.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
  var root1117 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  
  var tmp2365 = mobl.ref("Search term");
  
  
  var tmp2367 = mobl.ref(null);
  
  
  var tmp2366 = mobl.ref(null);
  
  var nodes919 = $("<span>");
  root1117.append(nodes919);
  subs__.addSub((mobl.ui.generic.searchBox)(phrase, tmp2365, tmp2366, tmp2367, function(_, callback) {
    var root1118 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1118); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes919;
    nodes919 = node.contents();
    oldNodes.replaceWith(nodes919);
  }));
  
  var tmp2368 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp2368.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp2368.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp2368.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp2368.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp2368.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes920 = $("<span>");
  root1117.append(nodes920);
  subs__.addSub((mobl.ui.generic.masterDetail)(tmp2368, masterItem, detailItem, function(_, callback) {
    var root1119 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1119); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes920;
    nodes920 = node.contents();
    oldNodes.replaceWith(nodes920);
  }));
  callback(root1117); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.progressStyle = 'mobl__ui__generic__progressStyle';
mobl.ui.generic.startLoading = function() {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + mobl.ui.generic.progressStyle + "'>Loading...</div>");
  
  mobl.$("body").prepend(loading);
};

mobl.ui.generic.endLoading = function() {
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
}(mobl.ui.generic));mobl.ui.generic.accordionStyle = 'mobl__ui__generic__accordionStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.inActiveSectionStyle = 'mobl__ui__generic__inActiveSectionStyle';
mobl.ui.generic.activeSectionStyle = 'mobl__ui__generic__activeSectionStyle';

mobl.ui.generic.accordion = function(sections, elements, callback) {
  var root1120 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp2378 = mobl.ref(null);
  
  
  var tmp2377 = mobl.ref(null);
  
  var nodes921 = $("<span>");
  root1120.append(nodes921);
  subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.accordionStyle), tmp2377, tmp2378, function(_, callback) {
    var root1121 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node358 = mobl.loadingSpan();
    root1121.append(node358);
    var list173;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList173 = function() {
      var subs__ = listSubs__;
      list173 = sections.get();
      list173.list(function(results173) {
        node358.empty();
        for(var i175 = 0; i175 < results173.length; i175++) {
          (function() {
            var iternode173 = $("<span>");
            node358.append(iternode173);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results173), i175), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results173), i175), "_2");
            
            var tmp2372 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp2372.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp2372.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp2372.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp2372.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp2371 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp2373 = mobl.ref(null);
            
            var nodes922 = $("<span>");
            iternode173.append(nodes922);
            subs__.addSub((mobl.ui.generic.span)(tmp2372, tmp2373, tmp2371, function(_, callback) {
              var root1122 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp2370 = mobl.ref(null);
              
              
              var tmp2369 = mobl.ref(null);
              
              var nodes923 = $("<span>");
              root1122.append(nodes923);
              subs__.addSub((mobl.label)(sectionName, tmp2369, tmp2370, function(_, callback) {
                var root1123 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1123); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes923;
                nodes923 = node.contents();
                oldNodes.replaceWith(nodes923);
              }));
              callback(root1122); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes922;
              nodes922 = node.contents();
              oldNodes.replaceWith(nodes922);
            }));
            
            var tmp2374 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp2374.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp2374.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionStyle).addEventListener('change', function() {
              tmp2374.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionStyle).addEventListener('change', function() {
              tmp2374.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            
            
            var tmp2376 = mobl.ref(null);
            
            
            var tmp2375 = mobl.ref(null);
            
            var nodes924 = $("<span>");
            iternode173.append(nodes924);
            subs__.addSub((mobl.ui.generic.block)(tmp2374, tmp2375, tmp2376, function(_, callback) {
              var root1124 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes925 = $("<span>");
              root1124.append(nodes925);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl20();
              }));
              
              function renderControl20() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1125 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1125); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes925;
                  nodes925 = node.contents();
                  oldNodes.replaceWith(nodes925);
                }));
              }
              renderControl20();
              callback(root1124); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes924;
              nodes924 = node.contents();
              oldNodes.replaceWith(nodes924);
            }));
            
            var oldNodes = iternode173;
            iternode173 = iternode173.contents();
            oldNodes.replaceWith(iternode173);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list173.addEventListener('change', function() { listSubs__.unsubscribe(); renderList173(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList173(true); }));
      });
    };
    renderList173();
    
    callback(root1121); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes921;
    nodes921 = node.contents();
    oldNodes.replaceWith(nodes921);
  }));
  callback(root1120); return subs__;
  
  return subs__;
};
mobl.ui.generic.tableStyle = 'mobl__ui__generic__tableStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';

mobl.ui.generic.table = function(elements, callback) {
  var root1126 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node359 = $("<table>");
  
  var ref49 = mobl.ref(mobl.ui.generic.tableStyle);
  if(ref49.get() !== null) {
    node359.attr('class', ref49.get());
    subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
      if(ref === ref49) {
        node359.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref49.rebind());
  
  var nodes926 = $("<span>");
  node359.append(nodes926);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1127 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1127); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes926;
      nodes926 = node.contents();
      oldNodes.replaceWith(nodes926);
    }));
  }
  renderControl21();
  root1126.append(node359);
  callback(root1126); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.row = function(elements, callback) {
  var root1128 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node360 = $("<tr>");
  
  var ref50 = mobl.ref(mobl.ui.generic.trStyle);
  if(ref50.get() !== null) {
    node360.attr('class', ref50.get());
    subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
      if(ref === ref50) {
        node360.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref50.rebind());
  
  var nodes927 = $("<span>");
  node360.append(nodes927);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl22();
  }));
  
  function renderControl22() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1129 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1129); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes927;
      nodes927 = node.contents();
      oldNodes.replaceWith(nodes927);
    }));
  }
  renderControl22();
  root1128.append(node360);
  callback(root1128); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.cell = function(width, elements, callback) {
  var root1130 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node361 = $("<td>");
  
  var ref51 = width;
  if(ref51.get() !== null) {
    node361.attr('width', ref51.get());
    subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
      if(ref === ref51) {
        node361.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref51.rebind());
  
  var ref52 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref52.get() !== null) {
    node361.attr('class', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
      if(ref === ref52) {
        node361.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref52.rebind());
  
  var nodes928 = $("<span>");
  node361.append(nodes928);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl23();
  }));
  
  function renderControl23() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1131); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes928;
      nodes928 = node.contents();
      oldNodes.replaceWith(nodes928);
    }));
  }
  renderControl23();
  root1130.append(node361);
  callback(root1130); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.col = function(width, elements, callback) {
  var root1132 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node362 = $("<td>");
  
  var ref53 = width;
  if(ref53.get() !== null) {
    node362.attr('width', ref53.get());
    subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
      if(ref === ref53) {
        node362.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref53.rebind());
  
  var ref54 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref54.get() !== null) {
    node362.attr('class', ref54.get());
    subs__.addSub(ref54.addEventListener('change', function(_, ref, val) {
      if(ref === ref54) {
        node362.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref54.rebind());
  
  var nodes929 = $("<span>");
  node362.append(nodes929);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl24();
  }));
  
  function renderControl24() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1133 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1133); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes929;
      nodes929 = node.contents();
      oldNodes.replaceWith(nodes929);
    }));
  }
  renderControl24();
  root1132.append(node362);
  callback(root1132); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.headerCol = function(width, elements, callback) {
  var root1134 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node363 = $("<td>");
  
  var ref55 = width;
  if(ref55.get() !== null) {
    node363.attr('width', ref55.get());
    subs__.addSub(ref55.addEventListener('change', function(_, ref, val) {
      if(ref === ref55) {
        node363.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref55.rebind());
  
  var ref56 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref56.get() !== null) {
    node363.attr('class', ref56.get());
    subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
      if(ref === ref56) {
        node363.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref56.rebind());
  
  
  var node364 = $("<strong>");
  
  var nodes930 = $("<span>");
  node364.append(nodes930);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl25();
  }));
  
  function renderControl25() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1135); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes930;
      nodes930 = node.contents();
      oldNodes.replaceWith(nodes930);
    }));
  }
  renderControl25();
  node363.append(node364);
  root1134.append(node363);
  callback(root1134); return subs__;
  
  
  
  return subs__;
};

mobl.ui.generic.scroller = function(height, elements, callback) {
  var root1136 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node365 = $("<div>");
  node365.attr('class', "scroller");
  
  var nodes931 = $("<span>");
  node365.append(nodes931);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl26();
  }));
  
  function renderControl26() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1137 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1137); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes931;
      nodes931 = node.contents();
      oldNodes.replaceWith(nodes931);
    }));
  }
  renderControl26();
  root1136.append(node365);
  var result__ = mobl.ui.generic.setupScrollers();
  callback(root1136); return subs__;
  
  
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
setInterval(function() {
              var allScrollers = $("div.scroller");
              for(var i = 0; i < allScrollers.length; i++)
              {
                var scroller = allScrollers.eq(i).data("scroller");
                if(scroller)
                {
                  scroller.setupScroller();
                }
              }
            }, 1000);
}(mobl.ui.generic));