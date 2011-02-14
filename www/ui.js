mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
  var root88 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node47 = $("<span>");
  root88.append(node47);
  var condSubs7 = new mobl.CompSubscription();
  subs__.addSub(condSubs7);
  var oldValue7;
  var renderCond7 = function() {
    var value17 = value.get();
    if(oldValue7 === value17) return;
    oldValue7 = value17;
    var subs__ = condSubs7;
    subs__.unsubscribe();
    node47.empty();
    if(value17) {
      var nodes57 = $("<span>");
      node47.append(nodes57);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl23();
      }));
      
      function renderControl23() {
        subs__.addSub((elements)(function(elements, callback) {
          var root89 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root89); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes57;
          nodes57 = node.contents();
          oldNodes.replaceWith(nodes57);
        }));
      }
      renderControl23();
      
      
    } else {
      
      var tmp98 = mobl.ref(null);
      
      
      var tmp97 = mobl.ref(null);
      
      var nodes58 = $("<span>");
      node47.append(nodes58);
      subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp97, tmp98, function(_, callback) {
        var root90 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root90.append("Loading...");
        
        var tmp91 = mobl.ref("middle");
        
        
        var tmp89 = mobl.ref("mobl/ui/generic/loading-large.gif");
        
        
        var tmp96 = mobl.ref(null);
        
        
        var tmp95 = mobl.ref(null);
        
        
        var tmp94 = mobl.ref(null);
        
        
        var tmp93 = mobl.ref(null);
        
        
        var tmp92 = mobl.ref(null);
        
        var nodes59 = $("<span>");
        root90.append(nodes59);
        subs__.addSub((ui.image)(tmp89, tmp92, tmp93, tmp94, tmp95, tmp91, tmp96, function(_, callback) {
          var root91 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root91); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes59;
          nodes59 = node.contents();
          oldNodes.replaceWith(nodes59);
        }));
        callback(root90); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes58;
        nodes58 = node.contents();
        oldNodes.replaceWith(nodes58);
      }));
      
      
    }
  };
  renderCond7();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond7();
  }));
  
  callback(root88); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root92 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node48 = $("<div>");
  
  var ref59 = mobl.ref(ui.headerStyle);
  if(ref59.get() !== null) {
    node48.attr('class', ref59.get());
    subs__.addSub(ref59.addEventListener('change', function(_, ref, val) {
      if(ref === ref59) {
        node48.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref59.rebind());
  
  var val27 = onclick.get();
  if(val27 !== null) {
    subs__.addSub(mobl.domBind(node48, 'tap', val27));
  }
  
  
  var node49 = $("<div>");
  
  var ref58 = mobl.ref(ui.headerContainerStyle);
  if(ref58.get() !== null) {
    node49.attr('class', ref58.get());
    subs__.addSub(ref58.addEventListener('change', function(_, ref, val) {
      if(ref === ref58) {
        node49.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref58.rebind());
  
  
  var node50 = $("<div>");
  
  var ref56 = text;
  node50.text(""+ref56.get());
  var ignore11 = false;
  subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
    if(ignore11) return;
    node50.text(""+val);
  }));
  subs__.addSub(ref56.rebind());
  
  
  var ref57 = mobl.ref(ui.headerTextStyle);
  if(ref57.get() !== null) {
    node50.attr('class', ref57.get());
    subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
      if(ref === ref57) {
        node50.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref57.rebind());
  
  node49.append(node50);
  node48.append(node49);
  var nodes60 = $("<span>");
  node48.append(nodes60);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl24();
  }));
  
  function renderControl24() {
    subs__.addSub((elements)(function(elements, callback) {
      var root93 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root93); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes60;
      nodes60 = node.contents();
      oldNodes.replaceWith(nodes60);
    }));
  }
  renderControl24();
  root92.append(node48);
  callback(root92); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root94 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  
  var sp = $("<span>");
  
  var ref60 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref60.get() !== null) {
    sp.attr('class', ref60.get());
    subs__.addSub(ref60.addEventListener('change', function(_, ref, val) {
      if(ref === ref60) {
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
  subs__.addSub(ref60.rebind());
  
  var val28 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val28 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val28));
  }
  
  var val29 = function(event, callback) {
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
  if(val29 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val29));
  }
  
  var val30 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after3(result__) {
                    var tmp165 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after3);if(result__ !== undefined) after3(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val30 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val30));
  }
  
  var val31 = function(event, callback) {
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
  if(val31 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val31));
  }
  
  var ref61 = text;
  sp.text(""+ref61.get());
  var ignore12 = false;
  subs__.addSub(ref61.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref61.rebind());
  
  
  root94.append(sp);
  callback(root94); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root95 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes61 = $("<span>");
  root95.append(nodes61);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root96 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root96); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes61;
    nodes61 = node.contents();
    oldNodes.replaceWith(nodes61);
  }));
  callback(root95); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root97 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes62 = $("<span>");
  root97.append(nodes62);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root98 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root98); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes62;
    nodes62 = node.contents();
    oldNodes.replaceWith(nodes62);
  }));
  callback(root97); return subs__;
  
  return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
  var root99 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node51 = $("<div>");
  
  var ref62 = id;
  if(ref62.get() !== null) {
    node51.attr('id', ref62.get());
    subs__.addSub(ref62.addEventListener('change', function(_, ref, val) {
      if(ref === ref62) {
        node51.attr('id', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref62.rebind());
  
  var ref63 = cssClass;
  if(ref63.get() !== null) {
    node51.attr('class', ref63.get());
    subs__.addSub(ref63.addEventListener('change', function(_, ref, val) {
      if(ref === ref63) {
        node51.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref63.rebind());
  
  var val32 = onclick.get();
  if(val32 !== null) {
    subs__.addSub(mobl.domBind(node51, 'tap', val32));
  }
  
  var nodes63 = $("<span>");
  node51.append(nodes63);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl25();
  }));
  
  function renderControl25() {
    subs__.addSub((elements)(function(elements, callback) {
      var root100 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root100); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes63;
      nodes63 = node.contents();
      oldNodes.replaceWith(nodes63);
    }));
  }
  renderControl25();
  root99.append(node51);
  callback(root99); return subs__;
  
  
  return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
  var root101 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node52 = $("<span>");
  
  var ref64 = id;
  if(ref64.get() !== null) {
    node52.attr('id', ref64.get());
    subs__.addSub(ref64.addEventListener('change', function(_, ref, val) {
      if(ref === ref64) {
        node52.attr('id', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref64.rebind());
  
  var ref65 = cssClass;
  if(ref65.get() !== null) {
    node52.attr('class', ref65.get());
    subs__.addSub(ref65.addEventListener('change', function(_, ref, val) {
      if(ref === ref65) {
        node52.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref65.rebind());
  
  var val33 = onclick.get();
  if(val33 !== null) {
    subs__.addSub(mobl.domBind(node52, 'tap', val33));
  }
  
  var nodes64 = $("<span>");
  node52.append(nodes64);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl26();
  }));
  
  function renderControl26() {
    subs__.addSub((elements)(function(elements, callback) {
      var root102 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root102); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes64;
      nodes64 = node.contents();
      oldNodes.replaceWith(nodes64);
    }));
  }
  renderControl26();
  root101.append(node52);
  callback(root101); return subs__;
  
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root103 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node53 = $("<ul>");
  
  var ref66 = mobl.ref(ui.groupStyle);
  if(ref66.get() !== null) {
    node53.attr('class', ref66.get());
    subs__.addSub(ref66.addEventListener('change', function(_, ref, val) {
      if(ref === ref66) {
        node53.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref66.rebind());
  
  var nodes65 = $("<span>");
  node53.append(nodes65);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl27();
  }));
  
  function renderControl27() {
    subs__.addSub((elements)(function(elements, callback) {
      var root104 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root104); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes65;
      nodes65 = node.contents();
      oldNodes.replaceWith(nodes65);
    }));
  }
  renderControl27();
  root103.append(node53);
  callback(root103); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root105 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node54 = $("<img>");
  
  var ref67 = url;
  if(ref67.get() !== null) {
    node54.attr('src', ref67.get());
    subs__.addSub(ref67.addEventListener('change', function(_, ref, val) {
      if(ref === ref67) {
        node54.attr('src', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref67.rebind());
  
  var ref68 = width;
  if(ref68.get() !== null) {
    node54.attr('width', ref68.get());
    subs__.addSub(ref68.addEventListener('change', function(_, ref, val) {
      if(ref === ref68) {
        node54.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref68.rebind());
  
  var ref69 = height;
  if(ref69.get() !== null) {
    node54.attr('height', ref69.get());
    subs__.addSub(ref69.addEventListener('change', function(_, ref, val) {
      if(ref === ref69) {
        node54.attr('height', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref69.rebind());
  
  var ref70 = style;
  if(ref70.get() !== null) {
    node54.attr('class', ref70.get());
    subs__.addSub(ref70.addEventListener('change', function(_, ref, val) {
      if(ref === ref70) {
        node54.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref70.rebind());
  
  var val34 = onclick.get();
  if(val34 !== null) {
    subs__.addSub(mobl.domBind(node54, 'tap', val34));
  }
  
  var ref71 = valign;
  if(ref71.get() !== null) {
    node54.attr('valign', ref71.get());
    subs__.addSub(ref71.addEventListener('change', function(_, ref, val) {
      if(ref === ref71) {
        node54.attr('valign', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref71.rebind());
  
  var ref72 = align;
  if(ref72.get() !== null) {
    node54.attr('align', ref72.get());
    subs__.addSub(ref72.addEventListener('change', function(_, ref, val) {
      if(ref === ref72) {
        node54.attr('align', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref72.rebind());
  
  root105.append(node54);
  callback(root105); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root106 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  
  var el = $("<li>");
  
  var ref73 = mobl.ref(ui.itemStyle);
  if(ref73.get() !== null) {
    el.attr('class', ref73.get());
    subs__.addSub(ref73.addEventListener('change', function(_, ref, val) {
      if(ref === ref73) {
        el.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref73.rebind());
  
  var ref74 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref74.get() !== null) {
    el.attr('class', ref74.get());
    subs__.addSub(ref74.addEventListener('change', function(_, ref, val) {
      if(ref === ref74) {
        el.attr('class', val);
      } else {
        console.log("Garbage!");
      }
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
  subs__.addSub(ref74.rebind());
  
  var val35 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp166 = result__;
                                           function after4(result__) {
                                             var tmp167 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after4);if(result__ !== undefined) after4(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp168 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val35 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val35));
  }
  
  var nodes66 = $("<span>");
  el.append(nodes66);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl28();
  }));
  
  function renderControl28() {
    subs__.addSub((elements)(function(elements, callback) {
      var root107 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root107); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes66;
      nodes66 = node.contents();
      oldNodes.replaceWith(nodes66);
    }));
  }
  renderControl28();
  root106.append(el);
  callback(root106); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root108 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node55 = $("<input>");
  node55.attr('type', "checkbox");
  
  var ref76 = b;
  node55.attr('checked', !!ref76.get());
  subs__.addSub(ref76.addEventListener('change', function(_, ref, val) {
    if(ref === ref76) node55.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node55, 'change', function() {
    b.set(!!node55.attr('checked'));
  }));
  
  var val37 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val37 !== null) {
    subs__.addSub(mobl.domBind(node55, 'tap', val37));
  }
  
  var val38 = onchange.get();
  if(val38 !== null) {
    subs__.addSub(mobl.domBind(node55, 'change', val38));
  }
  
  root108.append(node55);
  
  root108.append(" ");
  
  var node56 = $("<span>");
  
  var ref75 = label;
  node56.text(""+ref75.get());
  var ignore13 = false;
  subs__.addSub(ref75.addEventListener('change', function(_, ref, val) {
    if(ignore13) return;
    node56.text(""+val);
  }));
  subs__.addSub(ref75.rebind());
  
  
  var val36 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after5(result__) {
                    var tmp169 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after5);if(result__ !== undefined) after5(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val36 !== null) {
    subs__.addSub(mobl.domBind(node56, 'tap', val36));
  }
  
  root108.append(node56);
  callback(root108); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
  var root109 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node57 = $("<span>");
  root109.append(node57);
  var condSubs8 = new mobl.CompSubscription();
  subs__.addSub(condSubs8);
  var oldValue8;
  var renderCond8 = function() {
    var value18 = label.get();
    if(oldValue8 === value18) return;
    oldValue8 = value18;
    var subs__ = condSubs8;
    subs__.unsubscribe();
    node57.empty();
    if(value18) {
      
      var node58 = $("<span>");
      node58.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref80 = label;
      node58.text(""+ref80.get());
      var ignore15 = false;
      subs__.addSub(ref80.addEventListener('change', function(_, ref, val) {
        if(ignore15) return;
        node58.text(""+val);
      }));
      subs__.addSub(ref80.rebind());
      
      
      node57.append(node58);
      
      var node59 = $("<span>");
      node59.attr('style', "float: left");
      
      
      var node60 = $("<input>");
      node60.attr('type', "text");
      
      var ref77 = mobl.ref(ui.textFieldStyle);
      if(ref77.get() !== null) {
        node60.attr('class', ref77.get());
        subs__.addSub(ref77.addEventListener('change', function(_, ref, val) {
          if(ref === ref77) {
            node60.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref77.rebind());
      
      var ref78 = placeholder;
      if(ref78.get() !== null) {
        node60.attr('placeholder', ref78.get());
        subs__.addSub(ref78.addEventListener('change', function(_, ref, val) {
          if(ref === ref78) {
            node60.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref78.rebind());
      
      var ref79 = s;
      node60.val(""+ref79.get());
      var ignore14 = false;
      subs__.addSub(ref79.addEventListener('change', function(_, ref, val) {
        if(ignore14) return;
        node60.val(""+val);
      }));
      subs__.addSub(ref79.rebind());
      
      subs__.addSub(mobl.domBind(node60, 'keyup', function() {
        ignore14 = true;
        s.set(mobl.stringTomobl__String(node60.val()));
        ignore14 = false;
      }));
      
      
      var val39 = onchange.get();
      if(val39 !== null) {
        subs__.addSub(mobl.domBind(node60, 'change', val39));
      }
      
      var val40 = onkeyup.get();
      if(val40 !== null) {
        subs__.addSub(mobl.domBind(node60, 'keyup', val40));
      }
      
      var val41 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val41 !== null) {
        subs__.addSub(mobl.domBind(node60, 'blur', val41));
      }
      
      node59.append(node60);
      node57.append(node59);
      
      
      
      
    } else {
      
      var node61 = $("<input>");
      node61.attr('type', "text");
      
      var ref81 = mobl.ref(ui.textFieldStyle);
      if(ref81.get() !== null) {
        node61.attr('class', ref81.get());
        subs__.addSub(ref81.addEventListener('change', function(_, ref, val) {
          if(ref === ref81) {
            node61.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref81.rebind());
      
      var ref82 = placeholder;
      if(ref82.get() !== null) {
        node61.attr('placeholder', ref82.get());
        subs__.addSub(ref82.addEventListener('change', function(_, ref, val) {
          if(ref === ref82) {
            node61.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref82.rebind());
      
      var ref83 = s;
      node61.val(""+ref83.get());
      var ignore16 = false;
      subs__.addSub(ref83.addEventListener('change', function(_, ref, val) {
        if(ignore16) return;
        node61.val(""+val);
      }));
      subs__.addSub(ref83.rebind());
      
      subs__.addSub(mobl.domBind(node61, 'keyup', function() {
        ignore16 = true;
        s.set(mobl.stringTomobl__String(node61.val()));
        ignore16 = false;
      }));
      
      
      var val42 = onchange.get();
      if(val42 !== null) {
        subs__.addSub(mobl.domBind(node61, 'change', val42));
      }
      
      var val43 = onkeyup.get();
      if(val43 !== null) {
        subs__.addSub(mobl.domBind(node61, 'keyup', val43));
      }
      
      var val44 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val44 !== null) {
        subs__.addSub(mobl.domBind(node61, 'blur', val44));
      }
      
      node57.append(node61);
      
      
    }
  };
  renderCond8();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond8();
  }));
  
  callback(root109); return subs__;
  
  return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
  var root110 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node62 = $("<span>");
  root110.append(node62);
  var condSubs9 = new mobl.CompSubscription();
  subs__.addSub(condSubs9);
  var oldValue9;
  var renderCond9 = function() {
    var value19 = label.get();
    if(oldValue9 === value19) return;
    oldValue9 = value19;
    var subs__ = condSubs9;
    subs__.unsubscribe();
    node62.empty();
    if(value19) {
      
      var node63 = $("<span>");
      node63.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref87 = label;
      node63.text(""+ref87.get());
      var ignore18 = false;
      subs__.addSub(ref87.addEventListener('change', function(_, ref, val) {
        if(ignore18) return;
        node63.text(""+val);
      }));
      subs__.addSub(ref87.rebind());
      
      
      node62.append(node63);
      
      var node64 = $("<span>");
      node64.attr('style', "float: left");
      
      
      var node65 = $("<input>");
      node65.attr('type', "text");
      
      var ref84 = mobl.ref(ui.textFieldStyle);
      if(ref84.get() !== null) {
        node65.attr('class', ref84.get());
        subs__.addSub(ref84.addEventListener('change', function(_, ref, val) {
          if(ref === ref84) {
            node65.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref84.rebind());
      
      var ref85 = placeholder;
      if(ref85.get() !== null) {
        node65.attr('placeholder', ref85.get());
        subs__.addSub(ref85.addEventListener('change', function(_, ref, val) {
          if(ref === ref85) {
            node65.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref85.rebind());
      
      var ref86 = n;
      node65.val(""+ref86.get());
      var ignore17 = false;
      subs__.addSub(ref86.addEventListener('change', function(_, ref, val) {
        if(ignore17) return;
        node65.val(""+val);
      }));
      subs__.addSub(ref86.rebind());
      
      subs__.addSub(mobl.domBind(node65, 'keyup', function() {
        ignore17 = true;
        n.set(mobl.stringTomobl__Num(node65.val()));
        ignore17 = false;
      }));
      
      
      var val45 = onchange.get();
      if(val45 !== null) {
        subs__.addSub(mobl.domBind(node65, 'change', val45));
      }
      
      var val46 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val46 !== null) {
        subs__.addSub(mobl.domBind(node65, 'blur', val46));
      }
      
      node64.append(node65);
      node62.append(node64);
      
      
      
      
    } else {
      
      var node66 = $("<input>");
      node66.attr('type', "text");
      
      var ref88 = mobl.ref(ui.textFieldStyle);
      if(ref88.get() !== null) {
        node66.attr('class', ref88.get());
        subs__.addSub(ref88.addEventListener('change', function(_, ref, val) {
          if(ref === ref88) {
            node66.attr('class', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref88.rebind());
      
      var ref89 = placeholder;
      if(ref89.get() !== null) {
        node66.attr('placeholder', ref89.get());
        subs__.addSub(ref89.addEventListener('change', function(_, ref, val) {
          if(ref === ref89) {
            node66.attr('placeholder', val);
          } else {
            console.log("Garbage!");
          }
        }));
        
      }
      subs__.addSub(ref89.rebind());
      
      var ref90 = n;
      node66.val(""+ref90.get());
      var ignore19 = false;
      subs__.addSub(ref90.addEventListener('change', function(_, ref, val) {
        if(ignore19) return;
        node66.val(""+val);
      }));
      subs__.addSub(ref90.rebind());
      
      subs__.addSub(mobl.domBind(node66, 'keyup', function() {
        ignore19 = true;
        n.set(mobl.stringTomobl__Num(node66.val()));
        ignore19 = false;
      }));
      
      
      var val47 = onchange.get();
      if(val47 !== null) {
        subs__.addSub(mobl.domBind(node66, 'change', val47));
      }
      
      var val48 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val48 !== null) {
        subs__.addSub(mobl.domBind(node66, 'blur', val48));
      }
      
      node62.append(node66);
      
      
    }
  };
  renderCond9();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond9();
  }));
  
  callback(root110); return subs__;
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root111 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  
  var tmp105 = mobl.ref(null);
  
  
  var tmp104 = mobl.ref(null);
  
  var nodes67 = $("<span>");
  root111.append(nodes67);
  subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp104, tmp105, function(_, callback) {
    var root112 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node67 = mobl.loadingSpan();
    root112.append(node67);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = tabs.get();
      list8.list(function(results8) {
        node67.empty();
        for(var i8 = 0; i8 < results8.length; i8++) {
          (function() {
            var iternode8 = $("<span>");
            node67.append(iternode8);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results8), i8), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results8), i8), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results8), i8), "_3");
            
            var tmp102 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp102.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp102.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp102.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp102.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp101 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp103 = mobl.ref(null);
            
            var nodes68 = $("<span>");
            iternode8.append(nodes68);
            subs__.addSub((ui.span)(tmp102, tmp103, tmp101, function(_, callback) {
              var root113 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp100 = mobl.ref(null);
              
              
              var tmp99 = mobl.ref(null);
              
              var nodes69 = $("<span>");
              root113.append(nodes69);
              subs__.addSub((mobl.label)(tabName, tmp99, tmp100, function(_, callback) {
                var root114 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root114); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes69;
                nodes69 = node.contents();
                oldNodes.replaceWith(nodes69);
              }));
              callback(root113); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes68;
              nodes68 = node.contents();
              oldNodes.replaceWith(nodes68);
            }));
            
            var oldNodes = iternode8;
            iternode8 = iternode8.contents();
            oldNodes.replaceWith(iternode8);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list8.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
      });
    };
    renderList8();
    
    callback(root112); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes67;
    nodes67 = node.contents();
    oldNodes.replaceWith(nodes67);
  }));
  
  var node68 = mobl.loadingSpan();
  root111.append(node68);
  var list9;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList9 = function() {
    var subs__ = listSubs__;
    list9 = tabs.get();
    list9.list(function(results9) {
      node68.empty();
      for(var i9 = 0; i9 < results9.length; i9++) {
        (function() {
          var iternode9 = $("<span>");
          node68.append(iternode9);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results9), i9), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results9), i9), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results9), i9), "_3");
          
          var tmp106 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp106.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp106.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp106.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp106.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp108 = mobl.ref(null);
          
          
          var tmp107 = mobl.ref(null);
          
          var nodes70 = $("<span>");
          iternode9.append(nodes70);
          subs__.addSub((ui.block)(tmp106, tmp107, tmp108, function(_, callback) {
            var root115 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes71 = $("<span>");
            root115.append(nodes71);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root116 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes72 = $("<span>");
              root116.append(nodes72);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl29();
              }));
              
              function renderControl29() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root117 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root117); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes72;
                  nodes72 = node.contents();
                  oldNodes.replaceWith(nodes72);
                }));
              }
              renderControl29();
              callback(root116); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes71;
              nodes71 = node.contents();
              oldNodes.replaceWith(nodes71);
            }));
            callback(root115); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes70;
            nodes70 = node.contents();
            oldNodes.replaceWith(nodes70);
          }));
          
          var oldNodes = iternode9;
          iternode9 = iternode9.contents();
          oldNodes.replaceWith(iternode9);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list9.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
    });
  };
  renderList9();
  
  callback(root111); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root118 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node69 = $("<div>");
  
  var ref94 = mobl.ref(ui.searchboxStyle);
  if(ref94.get() !== null) {
    node69.attr('class', ref94.get());
    subs__.addSub(ref94.addEventListener('change', function(_, ref, val) {
      if(ref === ref94) {
        node69.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref94.rebind());
  
  
  var node70 = $("<input>");
  node70.attr('type', "text");
  
  var ref91 = mobl.ref(ui.searchBoxInputStyle);
  if(ref91.get() !== null) {
    node70.attr('class', ref91.get());
    subs__.addSub(ref91.addEventListener('change', function(_, ref, val) {
      if(ref === ref91) {
        node70.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref91.rebind());
  
  var ref92 = placeholder;
  if(ref92.get() !== null) {
    node70.attr('placeholder', ref92.get());
    subs__.addSub(ref92.addEventListener('change', function(_, ref, val) {
      if(ref === ref92) {
        node70.attr('placeholder', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref92.rebind());
  
  var ref93 = s;
  node70.val(""+ref93.get());
  var ignore20 = false;
  subs__.addSub(ref93.addEventListener('change', function(_, ref, val) {
    if(ignore20) return;
    node70.val(""+val);
  }));
  subs__.addSub(ref93.rebind());
  
  subs__.addSub(mobl.domBind(node70, 'keyup', function() {
    ignore20 = true;
    s.set(mobl.stringTomobl__String(node70.val()));
    ignore20 = false;
  }));
  
  
  var val49 = onsearch.get();
  if(val49 !== null) {
    subs__.addSub(mobl.domBind(node70, 'change', val49));
  }
  
  var val50 = onkeyup.get();
  if(val50 !== null) {
    subs__.addSub(mobl.domBind(node70, 'keyup', val50));
  }
  node70.attr('autocorrect', "off");
  node70.attr('autocapitalize', "off");
  node70.attr('autocomplete', "off");
  
  node69.append(node70);
  root118.append(node69);
  callback(root118); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root119 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref95 = mobl.ref(ui.contextMenuStyle);
  if(ref95.get() !== null) {
    menu.attr('class', ref95.get());
    subs__.addSub(ref95.addEventListener('change', function(_, ref, val) {
      if(ref === ref95) {
        menu.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref95.rebind());
  
  var nodes73 = $("<span>");
  menu.append(nodes73);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl30();
  }));
  
  function renderControl30() {
    subs__.addSub((elements)(function(elements, callback) {
      var root120 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root120); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes73;
      nodes73 = node.contents();
      oldNodes.replaceWith(nodes73);
    }));
  }
  renderControl30();
  root119.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "mobl/ui/generic/contextmenu.png");
  img.attr('style', "float: right;");
  
  var val51 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp173 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val51 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val51));
  }
  
  root119.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root119); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root121 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp164 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp164.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node71 = $("<span>");
  root121.append(node71);
  var condSubs10 = new mobl.CompSubscription();
  subs__.addSub(condSubs10);
  var oldValue10;
  var renderCond10 = function() {
    var value20 = tmp164.get();
    if(oldValue10 === value20) return;
    oldValue10 = value20;
    var subs__ = condSubs10;
    subs__.unsubscribe();
    node71.empty();
    if(value20) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node72 = $("<div>");
        node72.attr('width', "100%");
        
        
        var node73 = $("<div>");
        node73.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes75 = $("<span>");
        node73.append(nodes75);
        subs__.addSub((ui.group)(function(_, callback) {
          var root123 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node75 = mobl.loadingSpan();
          root123.append(node75);
          var list10;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList10 = function() {
            var subs__ = listSubs__;
            list10 = items.get();
            list10.list(function(results10) {
              node75.empty();
              for(var i10 = 0; i10 < results10.length; i10++) {
                (function() {
                  var iternode10 = $("<span>");
                  node75.append(iternode10);
                  var it;
                  it = mobl.ref(mobl.ref(results10), i10);
                  
                  var tmp124 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp124.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp124.set(it.get() == current.get());
                  }));
                  
                  
                  var node76 = $("<span>");
                  iternode10.append(node76);
                  var condSubs11 = new mobl.CompSubscription();
                  subs__.addSub(condSubs11);
                  var oldValue11;
                  var renderCond11 = function() {
                    var value21 = tmp124.get();
                    if(oldValue11 === value21) return;
                    oldValue11 = value21;
                    var subs__ = condSubs11;
                    subs__.unsubscribe();
                    node76.empty();
                    if(value21) {
                      
                      var tmp119 = mobl.ref(false);
                      
                      
                      var tmp118 = mobl.ref(null);
                      
                      
                      var tmp117 = mobl.ref(null);
                      
                      var nodes76 = $("<span>");
                      node76.append(nodes76);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp117, tmp118, tmp119, function(_, callback) {
                        var root124 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes77 = $("<span>");
                        root124.append(nodes77);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl32();
                        }));
                        
                        function renderControl32() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root125 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root125); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes77;
                            nodes77 = node.contents();
                            oldNodes.replaceWith(nodes77);
                          }));
                        }
                        renderControl32();
                        callback(root124); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes76;
                        nodes76 = node.contents();
                        oldNodes.replaceWith(nodes76);
                      }));
                      
                      
                    } else {
                      
                      var tmp122 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp121 = mobl.ref(true);
                      
                      
                      var tmp123 = mobl.ref(null);
                      
                      var nodes78 = $("<span>");
                      node76.append(nodes78);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp122, tmp123, tmp121, function(_, callback) {
                        var root126 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes79 = $("<span>");
                        root126.append(nodes79);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl33();
                        }));
                        
                        function renderControl33() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root127 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root127); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes79;
                            nodes79 = node.contents();
                            oldNodes.replaceWith(nodes79);
                          }));
                        }
                        renderControl33();
                        callback(root126); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes78;
                        nodes78 = node.contents();
                        oldNodes.replaceWith(nodes78);
                      }));
                      
                      
                    }
                  };
                  renderCond11();
                  subs__.addSub(tmp124.addEventListener('change', function() {
                    renderCond11();
                  }));
                  
                  
                  var oldNodes = iternode10;
                  iternode10 = iternode10.contents();
                  oldNodes.replaceWith(iternode10);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list10.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
            });
          };
          renderList10();
          
          callback(root123); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes75;
          nodes75 = node.contents();
          oldNodes.replaceWith(nodes75);
        }));
        node72.append(node73);
        
        var node74 = $("<div>");
        node74.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        var nodes74 = $("<span>");
        node74.append(nodes74);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl31();
        }));
        
        function renderControl31() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root122 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root122); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes74;
            nodes74 = node.contents();
            oldNodes.replaceWith(nodes74);
          }));
        }
        renderControl31();
        node72.append(node74);
        node71.append(node72);
        
        
        
        
        
        
      });
    } else {
      var nodes80 = $("<span>");
      node71.append(nodes80);
      subs__.addSub((ui.group)(function(_, callback) {
        var root128 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node77 = mobl.loadingSpan();
        root128.append(node77);
        var list11;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList11 = function() {
          var subs__ = listSubs__;
          list11 = items.get();
          list11.list(function(results11) {
            node77.empty();
            for(var i11 = 0; i11 < results11.length; i11++) {
              (function() {
                var iternode11 = $("<span>");
                node77.append(iternode11);
                var it;
                it = mobl.ref(mobl.ref(results11), i11);
                
                var tmp109 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                     var tmp174 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp112 = mobl.ref(false);
                
                
                var tmp111 = mobl.ref(null);
                
                var nodes81 = $("<span>");
                iternode11.append(nodes81);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp109, tmp111, tmp112, function(_, callback) {
                  var root129 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes82 = $("<span>");
                  root129.append(nodes82);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl34();
                  }));
                  
                  function renderControl34() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root130 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root130); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes82;
                      nodes82 = node.contents();
                      oldNodes.replaceWith(nodes82);
                    }));
                  }
                  renderControl34();
                  callback(root129); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes81;
                  nodes81 = node.contents();
                  oldNodes.replaceWith(nodes81);
                }));
                
                var oldNodes = iternode11;
                iternode11 = iternode11.contents();
                oldNodes.replaceWith(iternode11);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list11.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
          });
        };
        renderList11();
        
        callback(root128); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes80;
        nodes80 = node.contents();
        oldNodes.replaceWith(nodes80);
      }));
      
      
    }
  };
  renderCond10();
  subs__.addSub(tmp164.addEventListener('change', function() {
    renderCond10();
  }));
  
  callback(root121); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root131 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp115 = mobl.ref("Detail");
  
  
  var tmp116 = mobl.ref(null);
  
  var nodes83 = $("<span>");
  root131.append(nodes83);
  subs__.addSub((ui.header)(tmp115, tmp116, function(_, callback) {
    var root132 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp114 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp113 = mobl.ref("Back");
    
    var nodes84 = $("<span>");
    root132.append(nodes84);
    subs__.addSub((ui.backButton)(tmp113, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp114, function(_, callback) {
      var root133 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root133); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes84;
      nodes84 = node.contents();
      oldNodes.replaceWith(nodes84);
    }));
    callback(root132); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes83;
    nodes83 = node.contents();
    oldNodes.replaceWith(nodes83);
  }));
  var nodes85 = $("<span>");
  root131.append(nodes85);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl35();
  }));
  
  function renderControl35() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root134 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root134); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes85;
      nodes85 = node.contents();
      oldNodes.replaceWith(nodes85);
    }));
  }
  renderControl35();
  callback(root131); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root135 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes86 = $("<span>");
  root135.append(nodes86);
  subs__.addSub((ui.group)(function(_, callback) {
    var root136 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node78 = mobl.loadingSpan();
    root136.append(node78);
    var list12;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList12 = function() {
      var subs__ = listSubs__;
      list12 = coll.get();
      list12.list(function(results12) {
        node78.empty();
        for(var i12 = 0; i12 < results12.length; i12++) {
          (function() {
            var iternode12 = $("<span>");
            node78.append(iternode12);
            var it;
            it = mobl.ref(mobl.ref(results12), i12);
            
            var tmp132 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp132.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp132.set(it.get() == selected.get());
            }));
            
            
            var node79 = $("<span>");
            iternode12.append(node79);
            var condSubs12 = new mobl.CompSubscription();
            subs__.addSub(condSubs12);
            var oldValue12;
            var renderCond12 = function() {
              var value22 = tmp132.get();
              if(oldValue12 === value22) return;
              oldValue12 = value22;
              var subs__ = condSubs12;
              subs__.unsubscribe();
              node79.empty();
              if(value22) {
                
                var tmp127 = mobl.ref(false);
                
                
                var tmp126 = mobl.ref(null);
                
                
                var tmp125 = mobl.ref(null);
                
                var nodes87 = $("<span>");
                node79.append(nodes87);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp125, tmp126, tmp127, function(_, callback) {
                  var root137 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes88 = $("<span>");
                  root137.append(nodes88);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl36();
                  }));
                  
                  function renderControl36() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root138 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root138); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes88;
                      nodes88 = node.contents();
                      oldNodes.replaceWith(nodes88);
                    }));
                  }
                  renderControl36();
                  callback(root137); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes87;
                  nodes87 = node.contents();
                  oldNodes.replaceWith(nodes87);
                }));
                
                
              } else {
                
                var tmp129 = mobl.ref(true);
                
                
                var tmp128 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp131 = mobl.ref(null);
                
                var nodes89 = $("<span>");
                node79.append(nodes89);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp128, tmp131, tmp129, function(_, callback) {
                  var root139 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes90 = $("<span>");
                  root139.append(nodes90);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl37();
                  }));
                  
                  function renderControl37() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root140 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root140); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes90;
                      nodes90 = node.contents();
                      oldNodes.replaceWith(nodes90);
                    }));
                  }
                  renderControl37();
                  callback(root139); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes89;
                  nodes89 = node.contents();
                  oldNodes.replaceWith(nodes89);
                }));
                
                
              }
            };
            renderCond12();
            subs__.addSub(tmp132.addEventListener('change', function() {
              renderCond12();
            }));
            
            
            var oldNodes = iternode12;
            iternode12 = iternode12.contents();
            oldNodes.replaceWith(iternode12);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list12.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
      });
    };
    renderList12();
    
    callback(root136); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes86;
    nodes86 = node.contents();
    oldNodes.replaceWith(nodes86);
  }));
  callback(root135); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
  var root141 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes91 = $("<span>");
    root141.append(nodes91);
    subs__.addSub((ui.group)(function(_, callback) {
      var root142 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp136 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp136.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp136.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp136.set(coll.get().limit(n.get()));
      }));
      
      
      var node80 = mobl.loadingSpan();
      root142.append(node80);
      var list13;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList13 = function() {
        var subs__ = listSubs__;
        list13 = tmp136.get();
        list13.list(function(results13) {
          node80.empty();
          for(var i13 = 0; i13 < results13.length; i13++) {
            (function() {
              var iternode13 = $("<span>");
              node80.append(iternode13);
              var it;
              it = mobl.ref(mobl.ref(results13), i13);
              
              var tmp133 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp135 = mobl.ref(false);
              
              
              var tmp134 = mobl.ref(null);
              
              var nodes92 = $("<span>");
              iternode13.append(nodes92);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp133, tmp134, tmp135, function(_, callback) {
                var root143 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes93 = $("<span>");
                root143.append(nodes93);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl38();
                }));
                
                function renderControl38() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root144 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root144); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes93;
                    nodes93 = node.contents();
                    oldNodes.replaceWith(nodes93);
                  }));
                }
                renderControl38();
                callback(root143); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes92;
                nodes92 = node.contents();
                oldNodes.replaceWith(nodes92);
              }));
              
              var oldNodes = iternode13;
              iternode13 = iternode13.contents();
              oldNodes.replaceWith(iternode13);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list13.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
          subs__.addSub(tmp136.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
        });
      };
      renderList13();
      
      
      var tmp137 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp137.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp137.set(n.get() < total.get());
      }));
      
      
      var node81 = $("<span>");
      root142.append(node81);
      var condSubs13 = new mobl.CompSubscription();
      subs__.addSub(condSubs13);
      var oldValue13;
      var renderCond13 = function() {
        var value23 = tmp137.get();
        if(oldValue13 === value23) return;
        oldValue13 = value23;
        var subs__ = condSubs13;
        subs__.unsubscribe();
        node81.empty();
        if(value23) {
          
          var node82 = $("<li>");
          
          var ref96 = mobl.ref(ui.loadMoreStyle);
          if(ref96.get() !== null) {
            node82.attr('class', ref96.get());
            subs__.addSub(ref96.addEventListener('change', function(_, ref, val) {
              if(ref === ref96) {
                node82.attr('class', val);
              } else {
                console.log("Garbage!");
              }
            }));
            
          }
          subs__.addSub(ref96.rebind());
          
          var val52 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val52 !== null) {
            subs__.addSub(mobl.domBind(node82, 'tap', val52));
          }
          
          
          node82.append("More");
          node81.append(node82);
          
          
        } else {
          
        }
      };
      renderCond13();
      subs__.addSub(tmp137.addEventListener('change', function() {
        renderCond13();
      }));
      
      callback(root142); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes91;
      nodes91 = node.contents();
      oldNodes.replaceWith(nodes91);
    }));
    callback(root141); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root145 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes94 = $("<span>");
  root145.append(nodes94);
  subs__.addSub((ui.group)(function(_, callback) {
    var root146 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node83 = mobl.loadingSpan();
    root146.append(node83);
    var list14;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList14 = function() {
      var subs__ = listSubs__;
      list14 = items.get();
      list14.list(function(results14) {
        node83.empty();
        for(var i14 = 0; i14 < results14.length; i14++) {
          (function() {
            var iternode14 = $("<span>");
            node83.append(iternode14);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results14), i14), "_1");it = mobl.ref(mobl.ref(mobl.ref(results14), i14), "_2");
            
            var tmp142 = mobl.ref(false);
            
            
            var tmp141 = mobl.ref(null);
            
            
            var tmp139 = mobl.ref(null);
            
            var nodes95 = $("<span>");
            iternode14.append(nodes95);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp139, tmp141, tmp142, function(_, callback) {
              var root147 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp138 = mobl.ref(null);
              
              var nodes96 = $("<span>");
              root147.append(nodes96);
              subs__.addSub((ui.checkBox)(checked, it, tmp138, function(_, callback) {
                var root148 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root148); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes96;
                nodes96 = node.contents();
                oldNodes.replaceWith(nodes96);
              }));
              callback(root147); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes95;
              nodes95 = node.contents();
              oldNodes.replaceWith(nodes95);
            }));
            
            var oldNodes = iternode14;
            iternode14 = iternode14.contents();
            oldNodes.replaceWith(iternode14);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list14.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
      });
    };
    renderList14();
    
    callback(root146); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes94;
    nodes94 = node.contents();
    oldNodes.replaceWith(nodes94);
  }));
  callback(root145); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
  var root149 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  
  var result__ = coll.get();
  coll.get().list(function(coll33) {
    coll33 = coll33.reverse();
    function processOne3() {
      var it;
      it = coll33.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll33.length > 0) processOne3(); else rest3();
      
    }
    function rest3() {
      
      var tmp147 = mobl.ref(null);
      
      var nodes97 = $("<span>");
      root149.append(nodes97);
      subs__.addSub((ui.header)(title, tmp147, function(_, callback) {
        var root150 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp143 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp144 = mobl.ref("Back");
        
        var nodes98 = $("<span>");
        root150.append(nodes98);
        subs__.addSub((ui.backButton)(tmp144, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp143, function(_, callback) {
          var root151 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root151); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes98;
          nodes98 = node.contents();
          oldNodes.replaceWith(nodes98);
        }));
        
        var tmp146 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll32) {
                               coll32 = coll32.reverse();
                               function processOne2() {
                                 var checked;var it;
                                 var tmp176 = coll32.pop();
                                 checked = tmp176._1;it = tmp176._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll32.length > 0) processOne2(); else rest2();
                                   
                                 } else {
                                   {
                                     
                                     if(coll32.length > 0) processOne2(); else rest2();
                                     
                                   }
                                 }
                               }
                               function rest2() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll32.length > 0) processOne2(); else rest2();
                             });
                             
                           });
        
        
        var tmp145 = mobl.ref("Done");
        
        var nodes99 = $("<span>");
        root150.append(nodes99);
        subs__.addSub((ui.button)(tmp145, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp146, function(_, callback) {
          var root152 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root152); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes99;
          nodes99 = node.contents();
          oldNodes.replaceWith(nodes99);
        }));
        callback(root150); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes97;
        nodes97 = node.contents();
        oldNodes.replaceWith(nodes97);
      }));
      var nodes100 = $("<span>");
      root149.append(nodes100);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root153 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root153); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes100;
        nodes100 = node.contents();
        oldNodes.replaceWith(nodes100);
      }));
      callback(root149); return subs__;
      
      
    }
    if(coll33.length > 0) processOne3(); else rest3();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
  var root154 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  
  var tmp148 = mobl.ref("Search term");
  
  
  var tmp151 = mobl.ref(null);
  
  
  var tmp149 = mobl.ref(null);
  
  var nodes101 = $("<span>");
  root154.append(nodes101);
  subs__.addSub((ui.searchBox)(phrase, tmp148, tmp149, tmp151, function(_, callback) {
    var root155 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root155); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes101;
    nodes101 = node.contents();
    oldNodes.replaceWith(nodes101);
  }));
  
  var tmp152 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes102 = $("<span>");
  root154.append(nodes102);
  subs__.addSub((ui.masterDetail)(tmp152, masterItem, detailItem, function(_, callback) {
    var root156 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root156); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes102;
    nodes102 = node.contents();
    oldNodes.replaceWith(nodes102);
  }));
  callback(root154); return subs__;
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function() {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + ui.progressStyle + "'>Loading...</div>");
  
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
  var root157 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp163 = mobl.ref(null);
  
  
  var tmp162 = mobl.ref(null);
  
  var nodes103 = $("<span>");
  root157.append(nodes103);
  subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp162, tmp163, function(_, callback) {
    var root158 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node84 = mobl.loadingSpan();
    root158.append(node84);
    var list15;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList15 = function() {
      var subs__ = listSubs__;
      list15 = sections.get();
      list15.list(function(results15) {
        node84.empty();
        for(var i15 = 0; i15 < results15.length; i15++) {
          (function() {
            var iternode15 = $("<span>");
            node84.append(iternode15);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results15), i15), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results15), i15), "_2");
            
            var tmp156 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp156.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp156.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp156.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp156.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp155 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp157 = mobl.ref(null);
            
            var nodes104 = $("<span>");
            iternode15.append(nodes104);
            subs__.addSub((ui.span)(tmp156, tmp157, tmp155, function(_, callback) {
              var root159 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp154 = mobl.ref(null);
              
              
              var tmp153 = mobl.ref(null);
              
              var nodes105 = $("<span>");
              root159.append(nodes105);
              subs__.addSub((mobl.label)(sectionName, tmp153, tmp154, function(_, callback) {
                var root160 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root160); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes105;
                nodes105 = node.contents();
                oldNodes.replaceWith(nodes105);
              }));
              callback(root159); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes104;
              nodes104 = node.contents();
              oldNodes.replaceWith(nodes104);
            }));
            
            var tmp158 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp158.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp158.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp158.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp158.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp161 = mobl.ref(null);
            
            
            var tmp159 = mobl.ref(null);
            
            var nodes106 = $("<span>");
            iternode15.append(nodes106);
            subs__.addSub((ui.block)(tmp158, tmp159, tmp161, function(_, callback) {
              var root161 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes107 = $("<span>");
              root161.append(nodes107);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl39();
              }));
              
              function renderControl39() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root162 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root162); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes107;
                  nodes107 = node.contents();
                  oldNodes.replaceWith(nodes107);
                }));
              }
              renderControl39();
              callback(root161); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes106;
              nodes106 = node.contents();
              oldNodes.replaceWith(nodes106);
            }));
            
            var oldNodes = iternode15;
            iternode15 = iternode15.contents();
            oldNodes.replaceWith(iternode15);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list15.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
      });
    };
    renderList15();
    
    callback(root158); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes103;
    nodes103 = node.contents();
    oldNodes.replaceWith(nodes103);
  }));
  callback(root157); return subs__;
  
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
  var root163 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node85 = $("<table>");
  
  var ref97 = mobl.ref(ui.tableStyle);
  if(ref97.get() !== null) {
    node85.attr('class', ref97.get());
    subs__.addSub(ref97.addEventListener('change', function(_, ref, val) {
      if(ref === ref97) {
        node85.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref97.rebind());
  
  var nodes108 = $("<span>");
  node85.append(nodes108);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl40();
  }));
  
  function renderControl40() {
    subs__.addSub((elements)(function(elements, callback) {
      var root164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes108;
      nodes108 = node.contents();
      oldNodes.replaceWith(nodes108);
    }));
  }
  renderControl40();
  root163.append(node85);
  callback(root163); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node86 = $("<tr>");
  
  var ref98 = mobl.ref(ui.trStyle);
  if(ref98.get() !== null) {
    node86.attr('class', ref98.get());
    subs__.addSub(ref98.addEventListener('change', function(_, ref, val) {
      if(ref === ref98) {
        node86.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref98.rebind());
  
  var nodes109 = $("<span>");
  node86.append(nodes109);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl41();
  }));
  
  function renderControl41() {
    subs__.addSub((elements)(function(elements, callback) {
      var root166 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root166); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes109;
      nodes109 = node.contents();
      oldNodes.replaceWith(nodes109);
    }));
  }
  renderControl41();
  root165.append(node86);
  callback(root165); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root167 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node87 = $("<td>");
  
  var ref99 = width;
  if(ref99.get() !== null) {
    node87.attr('width', ref99.get());
    subs__.addSub(ref99.addEventListener('change', function(_, ref, val) {
      if(ref === ref99) {
        node87.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref99.rebind());
  
  var ref100 = mobl.ref(ui.tdStyle);
  if(ref100.get() !== null) {
    node87.attr('class', ref100.get());
    subs__.addSub(ref100.addEventListener('change', function(_, ref, val) {
      if(ref === ref100) {
        node87.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref100.rebind());
  
  var nodes110 = $("<span>");
  node87.append(nodes110);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl42();
  }));
  
  function renderControl42() {
    subs__.addSub((elements)(function(elements, callback) {
      var root168 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root168); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes110;
      nodes110 = node.contents();
      oldNodes.replaceWith(nodes110);
    }));
  }
  renderControl42();
  root167.append(node87);
  callback(root167); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root169 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node88 = $("<td>");
  
  var ref101 = width;
  if(ref101.get() !== null) {
    node88.attr('width', ref101.get());
    subs__.addSub(ref101.addEventListener('change', function(_, ref, val) {
      if(ref === ref101) {
        node88.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref101.rebind());
  
  var ref102 = mobl.ref(ui.tdStyle);
  if(ref102.get() !== null) {
    node88.attr('class', ref102.get());
    subs__.addSub(ref102.addEventListener('change', function(_, ref, val) {
      if(ref === ref102) {
        node88.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref102.rebind());
  
  var nodes111 = $("<span>");
  node88.append(nodes111);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl43();
  }));
  
  function renderControl43() {
    subs__.addSub((elements)(function(elements, callback) {
      var root170 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root170); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes111;
      nodes111 = node.contents();
      oldNodes.replaceWith(nodes111);
    }));
  }
  renderControl43();
  root169.append(node88);
  callback(root169); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root171 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node89 = $("<td>");
  
  var ref103 = width;
  if(ref103.get() !== null) {
    node89.attr('width', ref103.get());
    subs__.addSub(ref103.addEventListener('change', function(_, ref, val) {
      if(ref === ref103) {
        node89.attr('width', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref103.rebind());
  
  var ref104 = mobl.ref(ui.tdStyle);
  if(ref104.get() !== null) {
    node89.attr('class', ref104.get());
    subs__.addSub(ref104.addEventListener('change', function(_, ref, val) {
      if(ref === ref104) {
        node89.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref104.rebind());
  
  
  var node90 = $("<strong>");
  
  var nodes112 = $("<span>");
  node90.append(nodes112);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl44();
  }));
  
  function renderControl44() {
    subs__.addSub((elements)(function(elements, callback) {
      var root172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root172); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes112;
      nodes112 = node.contents();
      oldNodes.replaceWith(nodes112);
    }));
  }
  renderControl44();
  node89.append(node90);
  root171.append(node89);
  callback(root171); return subs__;
  
  
  
  return subs__;
};

ui.scroller = function(height, elements, callback) {
  var root173 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node91 = $("<div>");
  node91.attr('class', "scroller");
  
  var nodes113 = $("<span>");
  node91.append(nodes113);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl45();
  }));
  
  function renderControl45() {
    subs__.addSub((elements)(function(elements, callback) {
      var root174 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root174); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes113;
      nodes113 = node.contents();
      oldNodes.replaceWith(nodes113);
    }));
  }
  renderControl45();
  root173.append(node91);
  var result__ = ui.setupScrollers();
  callback(root173); return subs__;
  
  
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
}(ui));
ui.rangeField = function(s, style, min, max, start, elements, callback) {
  var root175 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var id = mobl.ref(s.get() + "-range-field");
  subs__.addSub(s.addEventListener('change', function() {
    id.set(s.get() + "-range-field");
  }));
  
  
  var node92 = $("<input>");
  node92.attr('type', "hidden");
  
  var ref110 = s;
  node92.val(""+ref110.get());
  var ignore21 = false;
  subs__.addSub(ref110.addEventListener('change', function(_, ref, val) {
    if(ignore21) return;
    node92.val(""+val);
  }));
  subs__.addSub(ref110.rebind());
  
  subs__.addSub(mobl.domBind(node92, 'keyup', function() {
    ignore21 = true;
    s.set(mobl.stringTomobl__String(node92.val()));
    ignore21 = false;
  }));
  
  
  var ref111 = start;
  if(ref111.get() !== null) {
    node92.attr('value', ref111.get());
    subs__.addSub(ref111.addEventListener('change', function(_, ref, val) {
      if(ref === ref111) {
        node92.attr('value', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref111.rebind());
  
  root175.append(node92);
  
  var node93 = $("<input>");
  node93.attr('type', "range");
  
  var ref105 = start;
  if(ref105.get() !== null) {
    node93.attr('value', ref105.get());
    subs__.addSub(ref105.addEventListener('change', function(_, ref, val) {
      if(ref === ref105) {
        node93.attr('value', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref105.rebind());
  
  var ref106 = min;
  if(ref106.get() !== null) {
    node93.attr('min', ref106.get());
    subs__.addSub(ref106.addEventListener('change', function(_, ref, val) {
      if(ref === ref106) {
        node93.attr('min', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref106.rebind());
  
  var ref107 = max;
  if(ref107.get() !== null) {
    node93.attr('max', ref107.get());
    subs__.addSub(ref107.addEventListener('change', function(_, ref, val) {
      if(ref === ref107) {
        node93.attr('max', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref107.rebind());
  
  var val53 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = mobl.$("#" + id.get()).val();
                s.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val53 !== null) {
    subs__.addSub(mobl.domBind(node93, 'change', val53));
  }
  
  var ref108 = id;
  if(ref108.get() !== null) {
    node93.attr('id', ref108.get());
    subs__.addSub(ref108.addEventListener('change', function(_, ref, val) {
      if(ref === ref108) {
        node93.attr('id', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref108.rebind());
  
  var ref109 = style;
  if(ref109.get() !== null) {
    node93.attr('class', ref109.get());
    subs__.addSub(ref109.addEventListener('change', function(_, ref, val) {
      if(ref === ref109) {
        node93.attr('class', val);
      } else {
        console.log("Garbage!");
      }
    }));
    
  }
  subs__.addSub(ref109.rebind());
  
  root175.append(node93);
  callback(root175); return subs__;
  
  
  return subs__;
};
ui.title = 'ui__title';
ui.emphasis = 'ui__emphasis';
ui.ranger = 'ui__ranger';
