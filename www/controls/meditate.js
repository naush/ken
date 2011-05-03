mobl.provides('controls.meditate');
mobl.provides('models');
mobl.provides('mobl');
controls.meditate.blank = function(target) {
   var __this = this;
  return target == null || target.length == 0;
};

controls.meditate.toTimeDisplay = function(time) {
   var __this = this;
  var timeDisplay = time.toString();
  
  if(time < 10) {
    timeDisplay = "0" + time;
  } else {
    
  }
  return timeDisplay;
};

controls.meditate.parseTime = function(time) {
   var __this = this;
  var mins = mobl.Math.floor(time / 60);
  
  var secs = mobl.Math.floor(time % 60);
  
  if(mins.toString() == "NaN" || secs.toString() == "NaN") {
    return "Unknown";
  } else {
    return controls.meditate.toTimeDisplay(mins) + ":" + controls.meditate.toTimeDisplay(secs);
  }
};

controls.meditate.prettyPlayTime = function(current, duration) {
   var __this = this;
  return controls.meditate.parseTime(current) + " (" + controls.meditate.parseTime(duration) + ")";
};


controls.meditate.listen = function(episode, callback, screenCallback) {
  var root67 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp267 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp267.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node24 = $("<span>");
  root67.append(node24);
  var condSubs1 = new mobl.CompSubscription();
  subs__.addSub(condSubs1);
  var oldValue1;
  var renderCond1 = function() {
    var value1 = tmp267.get();
    if(oldValue1 === value1) return;
    oldValue1 = value1;
    var subs__ = condSubs1;
    subs__.unsubscribe();
    node24.empty();
    if(value1) {
      
      var tmp247 = mobl.ref(false);
      
      
      var tmp246 = mobl.ref(null);
      
      
      var tmp245 = mobl.ref(null);
      
      var nodes62 = $("<span>");
      node24.append(nodes62);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp245, tmp246, tmp247, function(_, callback) {
        var root68 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp243 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp244 = mobl.ref(mobl._("Back", []));
        
        var nodes63 = $("<span>");
        root68.append(nodes63);
        subs__.addSub((ui.backButton)(tmp244, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp243, function(_, callback) {
          var root69 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root69); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes63;
          nodes63 = node.contents();
          oldNodes.replaceWith(nodes63);
        }));
        callback(root68); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes62;
        nodes62 = node.contents();
        oldNodes.replaceWith(nodes62);
      }));
      
      var tmp254 = mobl.ref(false);
      
      
      var tmp253 = mobl.ref(null);
      
      
      var tmp252 = mobl.ref(null);
      
      var nodes64 = $("<span>");
      node24.append(nodes64);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp252, tmp253, tmp254, function(_, callback) {
        var root70 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp248 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp248.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp248.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        
        var tmp251 = mobl.ref(null);
        
        
        var tmp249 = mobl.ref(null);
        
        var nodes65 = $("<span>");
        root70.append(nodes65);
        subs__.addSub((mobl.label)(tmp248, tmp249, tmp251, function(_, callback) {
          var root71 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root71); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes65;
          nodes65 = node.contents();
          oldNodes.replaceWith(nodes65);
        }));
        callback(root70); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes64;
        nodes64 = node.contents();
        oldNodes.replaceWith(nodes64);
      }));
      
      var tmp262 = mobl.ref(false);
      
      
      var tmp261 = mobl.ref(null);
      
      
      var tmp259 = mobl.ref(null);
      
      var nodes66 = $("<span>");
      node24.append(nodes66);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp259, tmp261, tmp262, function(_, callback) {
        var root72 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp256 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().play();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp255 = mobl.ref("Play");
        
        var nodes67 = $("<span>");
        root72.append(nodes67);
        subs__.addSub((ui.button)(tmp255, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp256, function(_, callback) {
          var root73 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root73); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes67;
          nodes67 = node.contents();
          oldNodes.replaceWith(nodes67);
        }));
        
        var tmp258 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp257 = mobl.ref("Pause");
        
        var nodes68 = $("<span>");
        root72.append(nodes68);
        subs__.addSub((ui.button)(tmp257, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp258, function(_, callback) {
          var root74 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root74); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes68;
          nodes68 = node.contents();
          oldNodes.replaceWith(nodes68);
        }));
        callback(root72); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes66;
        nodes66 = node.contents();
        oldNodes.replaceWith(nodes66);
      }));
      
      var tmp266 = mobl.ref(false);
      
      
      var tmp265 = mobl.ref(null);
      
      
      var tmp264 = mobl.ref(null);
      
      var nodes69 = $("<span>");
      node24.append(nodes69);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp264, tmp265, tmp266, function(_, callback) {
        var root75 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp263 = mobl.ref("_blank");
        
        var nodes70 = $("<span>");
        root75.append(nodes70);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp263, function(_, callback) {
          var root76 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root76.append("Download MP3");
          callback(root76); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes70;
          nodes70 = node.contents();
          oldNodes.replaceWith(nodes70);
        }));
        callback(root75); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes69;
        nodes69 = node.contents();
        oldNodes.replaceWith(nodes69);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond1();
  subs__.addSub(tmp267.addEventListener('change', function() {
    renderCond1();
  }));
  
  callback(root67); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root77 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp284 = mobl.ref(null);
  
  
  var tmp283 = mobl.ref(null);
  
  
  var tmp282 = mobl.ref(null);
  
  
  var tmp281 = mobl.ref(null);
  
  var nodes71 = $("<span>");
  root77.append(nodes71);
  subs__.addSub((mobl.block)(tmp281, tmp282, tmp283, tmp284, function(_, callback) {
    var root78 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp274 = mobl.ref(false);
    
    
    var tmp273 = mobl.ref(null);
    
    
    var tmp272 = mobl.ref(null);
    
    var nodes72 = $("<span>");
    root78.append(nodes72);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp272, tmp273, tmp274, function(_, callback) {
      var root79 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp268 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp268.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp271 = mobl.ref(null);
      
      
      var tmp269 = mobl.ref(null);
      
      var nodes73 = $("<span>");
      root79.append(nodes73);
      subs__.addSub((mobl.label)(tmp268, tmp269, tmp271, function(_, callback) {
        var root80 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root80); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes73;
        nodes73 = node.contents();
        oldNodes.replaceWith(nodes73);
      }));
      callback(root79); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes72;
      nodes72 = node.contents();
      oldNodes.replaceWith(nodes72);
    }));
    
    var tmp279 = mobl.ref(false);
    
    
    var tmp278 = mobl.ref(null);
    
    
    var tmp277 = mobl.ref(null);
    
    var nodes74 = $("<span>");
    root78.append(nodes74);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp277, tmp278, tmp279, function(_, callback) {
      var root81 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp275 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp275.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp276 = mobl.ref("_blank");
      
      var nodes75 = $("<span>");
      root81.append(nodes75);
      subs__.addSub((mobl.link)(tmp275, tmp276, function(_, callback) {
        var root82 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root82.append("Podcast Website");
        callback(root82); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes75;
        nodes75 = node.contents();
        oldNodes.replaceWith(nodes75);
      }));
      callback(root81); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes74;
      nodes74 = node.contents();
      oldNodes.replaceWith(nodes74);
    }));
    callback(root78); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes71;
    nodes71 = node.contents();
    oldNodes.replaceWith(nodes71);
  }));
  
  var node25 = $("<div>");
  node25.attr('style', "height: 200px; overflow-y: auto; width: 270px;");
  
  
  var tmp295 = mobl.ref(null);
  
  
  var tmp294 = mobl.ref(null);
  
  
  var tmp293 = mobl.ref(null);
  
  
  var tmp292 = mobl.ref(null);
  
  var nodes76 = $("<span>");
  node25.append(nodes76);
  subs__.addSub((mobl.block)(tmp292, tmp293, tmp294, tmp295, function(_, callback) {
    var root83 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp291 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp312 = result__;
          var result__ = tmp312;
          tmp291.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp313 = result__;
          var result__ = tmp313;
          tmp291.set(result__);
          
        });
      }));
      
      
      var node26 = mobl.loadingSpan();
      root83.append(node26);
      var list1;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList1 = function() {
        var subs__ = listSubs__;
        list1 = tmp291.get();
        list1.list(function(results1) {
          node26.empty();
          for(var i2 = 0; i2 < results1.length; i2++) {
            (function() {
              var iternode1 = $("<span>");
              node26.append(iternode1);
              var episode;
              episode = mobl.ref(mobl.ref(results1), i2);
              
              var tmp287 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp314 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp289 = mobl.ref(false);
              
              
              var tmp288 = mobl.ref(null);
              
              var nodes77 = $("<span>");
              iternode1.append(nodes77);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp287, tmp288, tmp289, function(_, callback) {
                var root84 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp286 = mobl.ref(null);
                
                
                var tmp285 = mobl.ref(null);
                
                var nodes78 = $("<span>");
                root84.append(nodes78);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp285, tmp286, function(_, callback) {
                  var root85 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root85); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes78;
                  nodes78 = node.contents();
                  oldNodes.replaceWith(nodes78);
                }));
                callback(root84); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes77;
                nodes77 = node.contents();
                oldNodes.replaceWith(nodes77);
              }));
              
              var oldNodes = iternode1;
              iternode1 = iternode1.contents();
              oldNodes.replaceWith(iternode1);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list1.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
          subs__.addSub(tmp291.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
        });
      };
      renderList1();
      
      callback(root83); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes76;
    nodes76 = node.contents();
    oldNodes.replaceWith(nodes76);
  }));
  root77.append(node25);
  callback(root77); return subs__;
  
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root86 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp297 = mobl.ref(null);
  
  
  var tmp296 = mobl.ref(null);
  
  var nodes79 = $("<span>");
  root86.append(nodes79);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp296, tmp297, function(_, callback) {
    var root87 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root87); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes79;
    nodes79 = node.contents();
    oldNodes.replaceWith(nodes79);
  }));
  callback(root86); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp315 = result__;
    var result__ = tmp315;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root88 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    models.podcasts.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp316 = result__;
      var result__ = tmp316;
      podcasts.set(result__);
      
    });
    
    var tmp301 = mobl.ref(null);
    
    
    var tmp300 = mobl.ref(null);
    
    
    var tmp299 = mobl.ref(null);
    
    var nodes80 = $("<span>");
    root88.append(nodes80);
    subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp299, tmp300, tmp301, function(_, callback) {
      var root89 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp298 = mobl.ref("Loading...");
      
      var nodes81 = $("<span>");
      root89.append(nodes81);
      subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp298, function(_, callback) {
        var root90 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes82 = $("<span>");
        root90.append(nodes82);
        subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
          var root91 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root91); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes82;
          nodes82 = node.contents();
          oldNodes.replaceWith(nodes82);
        }));
        callback(root90); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes81;
        nodes81 = node.contents();
        oldNodes.replaceWith(nodes81);
      }));
      callback(root89); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes80;
      nodes80 = node.contents();
      oldNodes.replaceWith(nodes80);
    }));
    
    var updateButtonImage = mobl.ref("resources/images/update_on.png");
    
    var tmp311 = mobl.ref(null);
    
    
    var tmp309 = mobl.ref(null);
    
    
    var tmp308 = mobl.ref(null);
    
    var nodes83 = $("<span>");
    root88.append(nodes83);
    subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp308, tmp309, tmp311, function(_, callback) {
      var root92 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node27 = $("<span>");
      
      var val18 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/update_pressed.png";
                    updateButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val18 !== null) {
        subs__.addSub(mobl.domBind(node27, 'mousedown', val18));
      }
      
      var val19 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/update_on.png";
                    updateButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val19 !== null) {
        subs__.addSub(mobl.domBind(node27, 'mouseup', val19));
      }
      
      
      var tmp302 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           controls.meditate.selectLifeEvent(function(result__) {
                             var tmp317 = result__;
                             var result__ = tmp317;
                             lifeEvent.set(result__);
                             var result__ = event;
                             if(result__) {
                               var result__ = ui.startLoading("Loading...", ui.progressStyle);
                               models.podcasts.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                                 var tmp318 = result__;
                                 var result__ = tmp318;
                                 podcasts.set(result__);
                                 var result__ = ui.endLoading();
                                 if(callback && callback.apply) callback(); return;
                               });
                             } else {
                               {
                                 if(callback && callback.apply) callback(); return;
                               }
                             }
                           });
                         });
      
      
      var tmp307 = mobl.ref(null);
      
      
      var tmp306 = mobl.ref(null);
      
      
      var tmp305 = mobl.ref(null);
      
      
      var tmp304 = mobl.ref(null);
      
      
      var tmp303 = mobl.ref(null);
      
      var nodes84 = $("<span>");
      node27.append(nodes84);
      subs__.addSub((ui.image)(updateButtonImage, tmp303, tmp304, tmp302, tmp305, tmp306, tmp307, function(_, callback) {
        var root93 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root93); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes84;
        nodes84 = node.contents();
        oldNodes.replaceWith(nodes84);
      }));
      root92.append(node27);
      callback(root92); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes83;
      nodes83 = node.contents();
      oldNodes.replaceWith(nodes83);
    }));
    callback(root88); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll3) {
    coll3 = coll3.reverse();
    function processOne2() {
      var podcast;
      podcast = coll3.pop();
      var result__ = front.add(podcast);
      
      if(coll3.length > 0) processOne2(); else rest2();
      
    }
    function rest2() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll3.length > 0) processOne2(); else rest2();
  });
  
};

