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
  var root94 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp341 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp341.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node28 = $("<span>");
  root94.append(node28);
  var condSubs2 = new mobl.CompSubscription();
  subs__.addSub(condSubs2);
  var oldValue2;
  var renderCond2 = function() {
    var value2 = tmp341.get();
    if(oldValue2 === value2) return;
    oldValue2 = value2;
    var subs__ = condSubs2;
    subs__.unsubscribe();
    node28.empty();
    if(value2) {
      
      var tmp323 = mobl.ref(false);
      
      
      var tmp322 = mobl.ref(null);
      
      
      var tmp321 = mobl.ref(null);
      
      var nodes85 = $("<span>");
      node28.append(nodes85);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp321, tmp322, tmp323, function(_, callback) {
        var root95 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp319 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp320 = mobl.ref(mobl._("Back", []));
        
        var nodes86 = $("<span>");
        root95.append(nodes86);
        subs__.addSub((ui.backButton)(tmp320, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp319, function(_, callback) {
          var root96 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root96); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes86;
          nodes86 = node.contents();
          oldNodes.replaceWith(nodes86);
        }));
        callback(root95); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes85;
        nodes85 = node.contents();
        oldNodes.replaceWith(nodes85);
      }));
      
      var tmp329 = mobl.ref(false);
      
      
      var tmp328 = mobl.ref(null);
      
      
      var tmp327 = mobl.ref(null);
      
      var nodes87 = $("<span>");
      node28.append(nodes87);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp327, tmp328, tmp329, function(_, callback) {
        var root97 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp324 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp324.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp324.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        
        var tmp326 = mobl.ref(null);
        
        
        var tmp325 = mobl.ref(null);
        
        var nodes88 = $("<span>");
        root97.append(nodes88);
        subs__.addSub((mobl.label)(tmp324, tmp325, tmp326, function(_, callback) {
          var root98 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root98); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes88;
          nodes88 = node.contents();
          oldNodes.replaceWith(nodes88);
        }));
        callback(root97); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes87;
        nodes87 = node.contents();
        oldNodes.replaceWith(nodes87);
      }));
      
      var tmp336 = mobl.ref(false);
      
      
      var tmp335 = mobl.ref(null);
      
      
      var tmp334 = mobl.ref(null);
      
      var nodes89 = $("<span>");
      node28.append(nodes89);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp334, tmp335, tmp336, function(_, callback) {
        var root99 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp331 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().play();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp330 = mobl.ref("Play");
        
        var nodes90 = $("<span>");
        root99.append(nodes90);
        subs__.addSub((ui.button)(tmp330, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp331, function(_, callback) {
          var root100 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root100); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes90;
          nodes90 = node.contents();
          oldNodes.replaceWith(nodes90);
        }));
        
        var tmp333 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp332 = mobl.ref("Pause");
        
        var nodes91 = $("<span>");
        root99.append(nodes91);
        subs__.addSub((ui.button)(tmp332, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp333, function(_, callback) {
          var root101 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root101); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes91;
          nodes91 = node.contents();
          oldNodes.replaceWith(nodes91);
        }));
        callback(root99); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes89;
        nodes89 = node.contents();
        oldNodes.replaceWith(nodes89);
      }));
      
      var tmp340 = mobl.ref(false);
      
      
      var tmp339 = mobl.ref(null);
      
      
      var tmp338 = mobl.ref(null);
      
      var nodes92 = $("<span>");
      node28.append(nodes92);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp338, tmp339, tmp340, function(_, callback) {
        var root102 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp337 = mobl.ref("_blank");
        
        var nodes93 = $("<span>");
        root102.append(nodes93);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp337, function(_, callback) {
          var root103 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root103.append("Download MP3");
          callback(root103); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes93;
          nodes93 = node.contents();
          oldNodes.replaceWith(nodes93);
        }));
        callback(root102); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes92;
        nodes92 = node.contents();
        oldNodes.replaceWith(nodes92);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond2();
  subs__.addSub(tmp341.addEventListener('change', function() {
    renderCond2();
  }));
  
  callback(root94); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root104 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp356 = mobl.ref(null);
  
  
  var tmp355 = mobl.ref(null);
  
  
  var tmp354 = mobl.ref(null);
  
  
  var tmp353 = mobl.ref(null);
  
  var nodes94 = $("<span>");
  root104.append(nodes94);
  subs__.addSub((mobl.block)(tmp353, tmp354, tmp355, tmp356, function(_, callback) {
    var root105 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp347 = mobl.ref(false);
    
    
    var tmp346 = mobl.ref(null);
    
    
    var tmp345 = mobl.ref(null);
    
    var nodes95 = $("<span>");
    root105.append(nodes95);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp345, tmp346, tmp347, function(_, callback) {
      var root106 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp342 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp342.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp344 = mobl.ref(null);
      
      
      var tmp343 = mobl.ref(null);
      
      var nodes96 = $("<span>");
      root106.append(nodes96);
      subs__.addSub((mobl.label)(tmp342, tmp343, tmp344, function(_, callback) {
        var root107 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root107); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes96;
        nodes96 = node.contents();
        oldNodes.replaceWith(nodes96);
      }));
      callback(root106); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes95;
      nodes95 = node.contents();
      oldNodes.replaceWith(nodes95);
    }));
    
    var tmp352 = mobl.ref(false);
    
    
    var tmp351 = mobl.ref(null);
    
    
    var tmp350 = mobl.ref(null);
    
    var nodes97 = $("<span>");
    root105.append(nodes97);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp350, tmp351, tmp352, function(_, callback) {
      var root108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp348 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp348.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp349 = mobl.ref("_blank");
      
      var nodes98 = $("<span>");
      root108.append(nodes98);
      subs__.addSub((mobl.link)(tmp348, tmp349, function(_, callback) {
        var root109 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root109.append("Podcast Website");
        callback(root109); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes98;
        nodes98 = node.contents();
        oldNodes.replaceWith(nodes98);
      }));
      callback(root108); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes97;
      nodes97 = node.contents();
      oldNodes.replaceWith(nodes97);
    }));
    callback(root105); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes94;
    nodes94 = node.contents();
    oldNodes.replaceWith(nodes94);
  }));
  
  var node29 = $("<div>");
  node29.attr('style', "height: 200px; overflow-y: auto; width: 270px;");
  
  
  var tmp366 = mobl.ref(null);
  
  
  var tmp365 = mobl.ref(null);
  
  
  var tmp364 = mobl.ref(null);
  
  
  var tmp363 = mobl.ref(null);
  
  var nodes99 = $("<span>");
  node29.append(nodes99);
  subs__.addSub((mobl.block)(tmp363, tmp364, tmp365, tmp366, function(_, callback) {
    var root110 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp362 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp382 = result__;
          var result__ = tmp382;
          tmp362.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp383 = result__;
          var result__ = tmp383;
          tmp362.set(result__);
          
        });
      }));
      
      
      var node30 = mobl.loadingSpan();
      root110.append(node30);
      var list2;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2 = function() {
        var subs__ = listSubs__;
        list2 = tmp362.get();
        list2.list(function(results2) {
          node30.empty();
          for(var i3 = 0; i3 < results2.length; i3++) {
            (function() {
              var iternode2 = $("<span>");
              node30.append(iternode2);
              var episode;
              episode = mobl.ref(mobl.ref(results2), i3);
              
              var tmp359 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp384 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp361 = mobl.ref(false);
              
              
              var tmp360 = mobl.ref(null);
              
              var nodes100 = $("<span>");
              iternode2.append(nodes100);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp359, tmp360, tmp361, function(_, callback) {
                var root111 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp358 = mobl.ref(null);
                
                
                var tmp357 = mobl.ref(null);
                
                var nodes101 = $("<span>");
                root111.append(nodes101);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp357, tmp358, function(_, callback) {
                  var root112 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root112); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes101;
                  nodes101 = node.contents();
                  oldNodes.replaceWith(nodes101);
                }));
                callback(root111); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes100;
                nodes100 = node.contents();
                oldNodes.replaceWith(nodes100);
              }));
              
              var oldNodes = iternode2;
              iternode2 = iternode2.contents();
              oldNodes.replaceWith(iternode2);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list2.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
          subs__.addSub(tmp362.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
        });
      };
      renderList2();
      
      callback(root110); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes99;
    nodes99 = node.contents();
    oldNodes.replaceWith(nodes99);
  }));
  root104.append(node29);
  callback(root104); return subs__;
  
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root113 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp368 = mobl.ref(null);
  
  
  var tmp367 = mobl.ref(null);
  
  var nodes102 = $("<span>");
  root113.append(nodes102);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp367, tmp368, function(_, callback) {
    var root114 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root114); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes102;
    nodes102 = node.contents();
    oldNodes.replaceWith(nodes102);
  }));
  callback(root113); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp385 = result__;
    var result__ = tmp385;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root115 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    models.podcasts.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp386 = result__;
      var result__ = tmp386;
      podcasts.set(result__);
      
    });
    
    var tmp372 = mobl.ref(null);
    
    
    var tmp371 = mobl.ref(null);
    
    
    var tmp370 = mobl.ref(null);
    
    var nodes103 = $("<span>");
    root115.append(nodes103);
    subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp370, tmp371, tmp372, function(_, callback) {
      var root116 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp369 = mobl.ref("Loading...");
      
      var nodes104 = $("<span>");
      root116.append(nodes104);
      subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp369, function(_, callback) {
        var root117 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes105 = $("<span>");
        root117.append(nodes105);
        subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
          var root118 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root118); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes105;
          nodes105 = node.contents();
          oldNodes.replaceWith(nodes105);
        }));
        callback(root117); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes104;
        nodes104 = node.contents();
        oldNodes.replaceWith(nodes104);
      }));
      callback(root116); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes103;
      nodes103 = node.contents();
      oldNodes.replaceWith(nodes103);
    }));
    
    var updateButtonImage = mobl.ref("resources/images/update_on.png");
    
    var tmp381 = mobl.ref(null);
    
    
    var tmp380 = mobl.ref(null);
    
    
    var tmp379 = mobl.ref(null);
    
    var nodes106 = $("<span>");
    root115.append(nodes106);
    subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp379, tmp380, tmp381, function(_, callback) {
      var root119 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node31 = $("<span>");
      
      var val20 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/update_pressed.png";
                    updateButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val20 !== null) {
        subs__.addSub(mobl.domBind(node31, 'mousedown', val20));
      }
      
      var val21 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/update_on.png";
                    updateButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node31, 'mouseup', val21));
      }
      
      
      var tmp373 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           controls.meditate.selectLifeEvent(function(result__) {
                             var tmp387 = result__;
                             var result__ = tmp387;
                             lifeEvent.set(result__);
                             var result__ = event;
                             if(result__) {
                               var result__ = ui.startLoading("Loading...", ui.progressStyle);
                               models.podcasts.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                                 var tmp388 = result__;
                                 var result__ = tmp388;
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
      
      
      var tmp378 = mobl.ref(null);
      
      
      var tmp377 = mobl.ref(null);
      
      
      var tmp376 = mobl.ref(null);
      
      
      var tmp375 = mobl.ref(null);
      
      
      var tmp374 = mobl.ref(null);
      
      var nodes107 = $("<span>");
      node31.append(nodes107);
      subs__.addSub((ui.image)(updateButtonImage, tmp374, tmp375, tmp373, tmp376, tmp377, tmp378, function(_, callback) {
        var root120 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root120); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes107;
        nodes107 = node.contents();
        oldNodes.replaceWith(nodes107);
      }));
      root119.append(node31);
      callback(root119); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes106;
      nodes106 = node.contents();
      oldNodes.replaceWith(nodes106);
    }));
    callback(root115); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll4) {
    coll4 = coll4.reverse();
    function processOne3() {
      var podcast;
      podcast = coll4.pop();
      var result__ = front.add(podcast);
      
      if(coll4.length > 0) processOne3(); else rest3();
      
    }
    function rest3() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll4.length > 0) processOne3(); else rest3();
  });
  
};

