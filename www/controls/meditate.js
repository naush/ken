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
  var root4268 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp8840 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp8840.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node1517 = $("<span>");
  root4268.append(node1517);
  var condSubs193 = new mobl.CompSubscription();
  subs__.addSub(condSubs193);
  var oldValue193;
  var renderCond193 = function() {
    var value469 = tmp8840.get();
    if(oldValue193 === value469) return;
    oldValue193 = value469;
    var subs__ = condSubs193;
    subs__.unsubscribe();
    node1517.empty();
    if(value469) {
      
      var tmp8822 = mobl.ref(false);
      
      
      var tmp8821 = mobl.ref(null);
      
      
      var tmp8820 = mobl.ref(null);
      
      var nodes3397 = $("<span>");
      node1517.append(nodes3397);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8820, tmp8821, tmp8822, function(_, callback) {
        var root4269 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp8818 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp8819 = mobl.ref(mobl._("Back", []));
        
        var nodes3398 = $("<span>");
        root4269.append(nodes3398);
        subs__.addSub((ui.backButton)(tmp8819, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8818, function(_, callback) {
          var root4270 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4270); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3398;
          nodes3398 = node.contents();
          oldNodes.replaceWith(nodes3398);
        }));
        callback(root4269); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3397;
        nodes3397 = node.contents();
        oldNodes.replaceWith(nodes3397);
      }));
      
      var tmp8828 = mobl.ref(false);
      
      
      var tmp8827 = mobl.ref(null);
      
      
      var tmp8826 = mobl.ref(null);
      
      var nodes3399 = $("<span>");
      node1517.append(nodes3399);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8826, tmp8827, tmp8828, function(_, callback) {
        var root4271 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp8823 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp8823.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp8823.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        
        var tmp8825 = mobl.ref(null);
        
        
        var tmp8824 = mobl.ref(null);
        
        var nodes3400 = $("<span>");
        root4271.append(nodes3400);
        subs__.addSub((mobl.label)(tmp8823, tmp8824, tmp8825, function(_, callback) {
          var root4272 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4272); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3400;
          nodes3400 = node.contents();
          oldNodes.replaceWith(nodes3400);
        }));
        callback(root4271); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3399;
        nodes3399 = node.contents();
        oldNodes.replaceWith(nodes3399);
      }));
      
      var tmp8835 = mobl.ref(false);
      
      
      var tmp8834 = mobl.ref(null);
      
      
      var tmp8833 = mobl.ref(null);
      
      var nodes3401 = $("<span>");
      node1517.append(nodes3401);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8833, tmp8834, tmp8835, function(_, callback) {
        var root4273 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp8830 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().play();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp8829 = mobl.ref("Play");
        
        var nodes3402 = $("<span>");
        root4273.append(nodes3402);
        subs__.addSub((ui.button)(tmp8829, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8830, function(_, callback) {
          var root4274 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4274); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3402;
          nodes3402 = node.contents();
          oldNodes.replaceWith(nodes3402);
        }));
        
        var tmp8832 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp8831 = mobl.ref("Pause");
        
        var nodes3403 = $("<span>");
        root4273.append(nodes3403);
        subs__.addSub((ui.button)(tmp8831, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8832, function(_, callback) {
          var root4275 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4275); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3403;
          nodes3403 = node.contents();
          oldNodes.replaceWith(nodes3403);
        }));
        callback(root4273); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3401;
        nodes3401 = node.contents();
        oldNodes.replaceWith(nodes3401);
      }));
      
      var tmp8839 = mobl.ref(false);
      
      
      var tmp8838 = mobl.ref(null);
      
      
      var tmp8837 = mobl.ref(null);
      
      var nodes3404 = $("<span>");
      node1517.append(nodes3404);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8837, tmp8838, tmp8839, function(_, callback) {
        var root4276 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp8836 = mobl.ref("_blank");
        
        var nodes3405 = $("<span>");
        root4276.append(nodes3405);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp8836, function(_, callback) {
          var root4277 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root4277.append("Download MP3");
          callback(root4277); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3405;
          nodes3405 = node.contents();
          oldNodes.replaceWith(nodes3405);
        }));
        callback(root4276); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3404;
        nodes3404 = node.contents();
        oldNodes.replaceWith(nodes3404);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond193();
  subs__.addSub(tmp8840.addEventListener('change', function() {
    renderCond193();
  }));
  
  callback(root4268); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root4278 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8855 = mobl.ref(null);
  
  
  var tmp8854 = mobl.ref(null);
  
  
  var tmp8853 = mobl.ref(null);
  
  
  var tmp8852 = mobl.ref(null);
  
  var nodes3406 = $("<span>");
  root4278.append(nodes3406);
  subs__.addSub((mobl.block)(tmp8852, tmp8853, tmp8854, tmp8855, function(_, callback) {
    var root4279 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8846 = mobl.ref(false);
    
    
    var tmp8845 = mobl.ref(null);
    
    
    var tmp8844 = mobl.ref(null);
    
    var nodes3407 = $("<span>");
    root4279.append(nodes3407);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8844, tmp8845, tmp8846, function(_, callback) {
      var root4280 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8841 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp8841.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp8843 = mobl.ref(null);
      
      
      var tmp8842 = mobl.ref(null);
      
      var nodes3408 = $("<span>");
      root4280.append(nodes3408);
      subs__.addSub((mobl.label)(tmp8841, tmp8842, tmp8843, function(_, callback) {
        var root4281 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4281); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3408;
        nodes3408 = node.contents();
        oldNodes.replaceWith(nodes3408);
      }));
      callback(root4280); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3407;
      nodes3407 = node.contents();
      oldNodes.replaceWith(nodes3407);
    }));
    
    var tmp8851 = mobl.ref(false);
    
    
    var tmp8850 = mobl.ref(null);
    
    
    var tmp8849 = mobl.ref(null);
    
    var nodes3409 = $("<span>");
    root4279.append(nodes3409);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8849, tmp8850, tmp8851, function(_, callback) {
      var root4282 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8847 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp8847.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp8848 = mobl.ref("_blank");
      
      var nodes3410 = $("<span>");
      root4282.append(nodes3410);
      subs__.addSub((mobl.link)(tmp8847, tmp8848, function(_, callback) {
        var root4283 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root4283.append("Podcast Website");
        callback(root4283); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3410;
        nodes3410 = node.contents();
        oldNodes.replaceWith(nodes3410);
      }));
      callback(root4282); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3409;
      nodes3409 = node.contents();
      oldNodes.replaceWith(nodes3409);
    }));
    callback(root4279); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3406;
    nodes3406 = node.contents();
    oldNodes.replaceWith(nodes3406);
  }));
  
  var node1518 = $("<div>");
  node1518.attr('style', "height: 215px; overflow-y: auto; width: 270px;");
  
  
  var tmp8865 = mobl.ref(null);
  
  
  var tmp8864 = mobl.ref(null);
  
  
  var tmp8863 = mobl.ref(null);
  
  
  var tmp8862 = mobl.ref(null);
  
  var nodes3411 = $("<span>");
  node1518.append(nodes3411);
  subs__.addSub((mobl.block)(tmp8862, tmp8863, tmp8864, tmp8865, function(_, callback) {
    var root4284 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp8861 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp8882 = result__;
          var result__ = tmp8882;
          tmp8861.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp8883 = result__;
          var result__ = tmp8883;
          tmp8861.set(result__);
          
        });
      }));
      
      
      var node1519 = mobl.loadingSpan();
      root4284.append(node1519);
      var list269;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList269 = function() {
        var subs__ = listSubs__;
        list269 = tmp8861.get();
        list269.list(function(results269) {
          node1519.empty();
          for(var i316 = 0; i316 < results269.length; i316++) {
            (function() {
              var iternode269 = $("<span>");
              node1519.append(iternode269);
              var episode;
              episode = mobl.ref(mobl.ref(results269), i316);
              
              var tmp8858 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp8884 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp8860 = mobl.ref(false);
              
              
              var tmp8859 = mobl.ref(null);
              
              var nodes3412 = $("<span>");
              iternode269.append(nodes3412);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp8858, tmp8859, tmp8860, function(_, callback) {
                var root4285 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp8857 = mobl.ref(null);
                
                
                var tmp8856 = mobl.ref(null);
                
                var nodes3413 = $("<span>");
                root4285.append(nodes3413);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp8856, tmp8857, function(_, callback) {
                  var root4286 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4286); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3413;
                  nodes3413 = node.contents();
                  oldNodes.replaceWith(nodes3413);
                }));
                callback(root4285); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3412;
                nodes3412 = node.contents();
                oldNodes.replaceWith(nodes3412);
              }));
              
              var oldNodes = iternode269;
              iternode269 = iternode269.contents();
              oldNodes.replaceWith(iternode269);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list269.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
          subs__.addSub(tmp8861.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
        });
      };
      renderList269();
      
      callback(root4284); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes3411;
    nodes3411 = node.contents();
    oldNodes.replaceWith(nodes3411);
  }));
  root4278.append(node1518);
  callback(root4278); return subs__;
  
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root4287 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8867 = mobl.ref(null);
  
  
  var tmp8866 = mobl.ref(null);
  
  var nodes3414 = $("<span>");
  root4287.append(nodes3414);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp8866, tmp8867, function(_, callback) {
    var root4288 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4288); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3414;
    nodes3414 = node.contents();
    oldNodes.replaceWith(nodes3414);
  }));
  callback(root4287); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp8885 = result__;
    var result__ = tmp8885;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root4289 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    models.podcasts.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp8886 = result__;
      var result__ = tmp8886;
      podcasts.set(result__);
      
    });
    
    var tmp8871 = mobl.ref(null);
    
    
    var tmp8870 = mobl.ref(null);
    
    
    var tmp8869 = mobl.ref(null);
    
    var nodes3415 = $("<span>");
    root4289.append(nodes3415);
    subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp8869, tmp8870, tmp8871, function(_, callback) {
      var root4290 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8868 = mobl.ref("Loading...");
      
      var nodes3416 = $("<span>");
      root4290.append(nodes3416);
      subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp8868, function(_, callback) {
        var root4291 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes3417 = $("<span>");
        root4291.append(nodes3417);
        subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
          var root4292 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4292); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3417;
          nodes3417 = node.contents();
          oldNodes.replaceWith(nodes3417);
        }));
        callback(root4291); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3416;
        nodes3416 = node.contents();
        oldNodes.replaceWith(nodes3416);
      }));
      callback(root4290); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3415;
      nodes3415 = node.contents();
      oldNodes.replaceWith(nodes3415);
    }));
    
    var tmp8881 = mobl.ref(null);
    
    
    var tmp8880 = mobl.ref(null);
    
    
    var tmp8879 = mobl.ref(null);
    
    var nodes3418 = $("<span>");
    root4289.append(nodes3418);
    subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp8879, tmp8880, tmp8881, function(_, callback) {
      var root4293 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8873 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           controls.meditate.selectLifeEvent(function(result__) {
                             var tmp8887 = result__;
                             var result__ = tmp8887;
                             lifeEvent.set(result__);
                             var result__ = event;
                             if(result__) {
                               var result__ = ui.startLoading("Loading...", ui.progressStyle);
                               models.podcasts.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                                 var tmp8888 = result__;
                                 var result__ = tmp8888;
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
      
      
      var tmp8872 = mobl.ref("resources/images/save.png");
      
      
      var tmp8878 = mobl.ref(null);
      
      
      var tmp8877 = mobl.ref(null);
      
      
      var tmp8876 = mobl.ref(null);
      
      
      var tmp8875 = mobl.ref(null);
      
      
      var tmp8874 = mobl.ref(null);
      
      var nodes3419 = $("<span>");
      root4293.append(nodes3419);
      subs__.addSub((ui.image)(tmp8872, tmp8874, tmp8875, tmp8873, tmp8876, tmp8877, tmp8878, function(_, callback) {
        var root4294 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4294); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3419;
        nodes3419 = node.contents();
        oldNodes.replaceWith(nodes3419);
      }));
      callback(root4293); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3418;
      nodes3418 = node.contents();
      oldNodes.replaceWith(nodes3418);
    }));
    callback(root4289); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll508) {
    coll508 = coll508.reverse();
    function processOne53() {
      var podcast;
      podcast = coll508.pop();
      var result__ = front.add(podcast);
      
      if(coll508.length > 0) processOne53(); else rest53();
      
    }
    function rest53() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll508.length > 0) processOne53(); else rest53();
  });
  
};

