mobl.provides('controls.meditate');
mobl.provides('models');
mobl.provides('models.episodes');
mobl.provides('mobl.media');
mobl.provides('models.lifeevents');
mobl.provides('ui');
mobl.provides('controls.meditate');
mobl.provides('mobl');
mobl.provides('models.podcasts');
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
  var root191 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  var result__ = mobl.media.Audio.canPlayMp3();
  var tmp381 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp381.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node63 = $("<span>");
  root191.append(node63);
  var condSubs12 = new mobl.CompSubscription();
  subs__.addSub(condSubs12);
  var oldValue12;
  var renderCond12 = function() {
    var value64 = tmp381.get();
    if(oldValue12 === value64) return;
    oldValue12 = value64;
    var subs__ = condSubs12;
    subs__.unsubscribe();
    node63.empty();
    if(value64) {
      var result__ = false;
      var tmp363 = mobl.ref(result__);
      
      var result__ = null;
      var tmp362 = mobl.ref(result__);
      
      var result__ = null;
      var tmp361 = mobl.ref(result__);
      
      var nodes143 = $("<span>");
      node63.append(nodes143);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp361, tmp362, tmp363, function(_, callback) {
        var root192 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp359 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp360 = mobl.ref(result__);
        
        var nodes144 = $("<span>");
        root192.append(nodes144);
        subs__.addSub((ui.backButton)(tmp360, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp359, function(_, callback) {
          var root193 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root193); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes144;
          nodes144 = node.contents();
          oldNodes.replaceWith(nodes144);
        }));
        callback(root192); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes143;
        nodes143 = node.contents();
        oldNodes.replaceWith(nodes143);
      }));
      var result__ = false;
      var tmp369 = mobl.ref(result__);
      
      var result__ = null;
      var tmp368 = mobl.ref(result__);
      
      var result__ = null;
      var tmp367 = mobl.ref(result__);
      
      var nodes145 = $("<span>");
      node63.append(nodes145);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp367, tmp368, tmp369, function(_, callback) {
        var root194 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration());
        var tmp364 = mobl.ref(result__);
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp364.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp364.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        var result__ = null;
        var tmp366 = mobl.ref(result__);
        
        var result__ = null;
        var tmp365 = mobl.ref(result__);
        
        var nodes146 = $("<span>");
        root194.append(nodes146);
        subs__.addSub((mobl.label)(tmp364, tmp365, tmp366, function(_, callback) {
          var root195 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root195); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes146;
          nodes146 = node.contents();
          oldNodes.replaceWith(nodes146);
        }));
        callback(root194); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes145;
        nodes145 = node.contents();
        oldNodes.replaceWith(nodes145);
      }));
      var result__ = false;
      var tmp376 = mobl.ref(result__);
      
      var result__ = null;
      var tmp375 = mobl.ref(result__);
      
      var result__ = null;
      var tmp374 = mobl.ref(result__);
      
      var nodes147 = $("<span>");
      node63.append(nodes147);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp374, tmp375, tmp376, function(_, callback) {
        var root196 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().play();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp371 = mobl.ref(result__);
        
        var result__ = "Play";
        var tmp370 = mobl.ref(result__);
        
        var nodes148 = $("<span>");
        root196.append(nodes148);
        subs__.addSub((ui.button)(tmp370, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp371, function(_, callback) {
          var root197 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root197); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes148;
          nodes148 = node.contents();
          oldNodes.replaceWith(nodes148);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp373 = mobl.ref(result__);
        
        var result__ = "Pause";
        var tmp372 = mobl.ref(result__);
        
        var nodes149 = $("<span>");
        root196.append(nodes149);
        subs__.addSub((ui.button)(tmp372, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp373, function(_, callback) {
          var root198 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root198); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes149;
          nodes149 = node.contents();
          oldNodes.replaceWith(nodes149);
        }));
        callback(root196); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes147;
        nodes147 = node.contents();
        oldNodes.replaceWith(nodes147);
      }));
      var result__ = false;
      var tmp380 = mobl.ref(result__);
      
      var result__ = null;
      var tmp379 = mobl.ref(result__);
      
      var result__ = null;
      var tmp378 = mobl.ref(result__);
      
      var nodes150 = $("<span>");
      node63.append(nodes150);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp378, tmp379, tmp380, function(_, callback) {
        var root199 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = "_blank";
        var tmp377 = mobl.ref(result__);
        
        var nodes151 = $("<span>");
        root199.append(nodes151);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp377, function(_, callback) {
          var root200 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root200.append("Download MP3");
          callback(root200); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes151;
          nodes151 = node.contents();
          oldNodes.replaceWith(nodes151);
        }));
        callback(root199); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes150;
        nodes150 = node.contents();
        oldNodes.replaceWith(nodes150);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond12();
  subs__.addSub(tmp381.addEventListener('change', function() {
    renderCond12();
  }));
  
  callback(root191); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root201 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp393 = mobl.ref(result__);
  
  var result__ = null;
  var tmp392 = mobl.ref(result__);
  
  var result__ = null;
  var tmp391 = mobl.ref(result__);
  
  var result__ = null;
  var tmp390 = mobl.ref(result__);
  
  var nodes152 = $("<span>");
  root201.append(nodes152);
  subs__.addSub((mobl.block)(tmp390, tmp391, tmp392, tmp393, function(_, callback) {
    var root202 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = false;
    var tmp389 = mobl.ref(result__);
    
    var result__ = null;
    var tmp388 = mobl.ref(result__);
    
    var result__ = null;
    var tmp387 = mobl.ref(result__);
    
    var nodes153 = $("<span>");
    root202.append(nodes153);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp387, tmp388, tmp389, function(_, callback) {
      var root203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website;
      var tmp385 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp385.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      var result__ = "_blank";
      var tmp386 = mobl.ref(result__);
      
      var nodes154 = $("<span>");
      root203.append(nodes154);
      subs__.addSub((mobl.link)(tmp385, tmp386, function(_, callback) {
        var root204 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title;
        var tmp382 = mobl.ref(result__);
        subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
          tmp382.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
        }));
        
        var result__ = null;
        var tmp384 = mobl.ref(result__);
        
        var result__ = null;
        var tmp383 = mobl.ref(result__);
        
        var nodes155 = $("<span>");
        root204.append(nodes155);
        subs__.addSub((mobl.label)(tmp382, tmp383, tmp384, function(_, callback) {
          var root205 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root205); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes155;
          nodes155 = node.contents();
          oldNodes.replaceWith(nodes155);
        }));
        callback(root204); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes154;
        nodes154 = node.contents();
        oldNodes.replaceWith(nodes154);
      }));
      callback(root203); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes153;
      nodes153 = node.contents();
      oldNodes.replaceWith(nodes153);
    }));
    callback(root202); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes152;
    nodes152 = node.contents();
    oldNodes.replaceWith(nodes152);
  }));
  
  var node64 = $("<div>");
  node64.attr('style', "height: 200px; overflow-y: auto; width: 270px;");
  
  var result__ = null;
  var tmp403 = mobl.ref(result__);
  
  var result__ = null;
  var tmp402 = mobl.ref(result__);
  
  var result__ = null;
  var tmp401 = mobl.ref(result__);
  
  var result__ = null;
  var tmp400 = mobl.ref(result__);
  
  var nodes156 = $("<span>");
  node64.append(nodes156);
  subs__.addSub((mobl.block)(tmp400, tmp401, tmp402, tmp403, function(_, callback) {
    var root206 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp421 = result__;
      var tmp399 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp419 = result__;
          var result__ = tmp419;
          tmp399.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp420 = result__;
          var result__ = tmp420;
          tmp399.set(result__);
          
        });
      }));
      
      
      var node65 = mobl.loadingSpan();
      root206.append(node65);
      var list15;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList15 = function() {
        var subs__ = listSubs__;
        list15 = tmp399.get();
        list15.list(function(results17) {
          node65.empty();
          for(var i15 = 0; i15 < results17.length; i15++) {
            (function() {
              var iternode15 = $("<span>");
              node65.append(iternode15);
              var episode;
              episode = mobl.ref(mobl.ref(results17), i15);
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                               var tmp422 = result__;
                               if(callback && callback.apply) callback(); return;
                               });
                             };
              var tmp396 = mobl.ref(result__);
              
              var result__ = false;
              var tmp398 = mobl.ref(result__);
              
              var result__ = null;
              var tmp397 = mobl.ref(result__);
              
              var nodes157 = $("<span>");
              iternode15.append(nodes157);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp396, tmp397, tmp398, function(_, callback) {
                var root207 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var result__ = null;
                var tmp395 = mobl.ref(result__);
                
                var result__ = null;
                var tmp394 = mobl.ref(result__);
                
                var nodes158 = $("<span>");
                root207.append(nodes158);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp394, tmp395, function(_, callback) {
                  var root208 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root208); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes158;
                  nodes158 = node.contents();
                  oldNodes.replaceWith(nodes158);
                }));
                callback(root207); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes157;
                nodes157 = node.contents();
                oldNodes.replaceWith(nodes157);
              }));
              
              var oldNodes = iternode15;
              iternode15 = iternode15.contents();
              oldNodes.replaceWith(iternode15);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list15.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
          subs__.addSub(tmp399.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
        });
      };
      renderList15();
      
      callback(root206); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes156;
    nodes156 = node.contents();
    oldNodes.replaceWith(nodes156);
  }));
  root201.append(node64);
  callback(root201); return subs__;
  
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root209 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = null;
  var tmp405 = mobl.ref(result__);
  
  var result__ = null;
  var tmp404 = mobl.ref(result__);
  
  var nodes159 = $("<span>");
  root209.append(nodes159);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp404, tmp405, function(_, callback) {
    var root210 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root210); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes159;
    nodes159 = node.contents();
    oldNodes.replaceWith(nodes159);
  }));
  callback(root209); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp423 = result__;
    var result__ = tmp423;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root211 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var tmp424 = result__;
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    models.podcasts.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp425 = result__;
      var result__ = tmp425;
      podcasts.set(result__);
      
    });
    var result__ = null;
    var tmp409 = mobl.ref(result__);
    
    var result__ = null;
    var tmp408 = mobl.ref(result__);
    
    var result__ = null;
    var tmp407 = mobl.ref(result__);
    
    var nodes160 = $("<span>");
    root211.append(nodes160);
    subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp407, tmp408, tmp409, function(_, callback) {
      var root212 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Loading...";
      var tmp406 = mobl.ref(result__);
      
      var nodes161 = $("<span>");
      root212.append(nodes161);
      subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp406, function(_, callback) {
        var root213 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes162 = $("<span>");
        root213.append(nodes162);
        subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
          var root214 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root214); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes162;
          nodes162 = node.contents();
          oldNodes.replaceWith(nodes162);
        }));
        callback(root213); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes161;
        nodes161 = node.contents();
        oldNodes.replaceWith(nodes161);
      }));
      callback(root212); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes160;
      nodes160 = node.contents();
      oldNodes.replaceWith(nodes160);
    }));
    
    var updateButtonImage = mobl.ref("resources/images/update_on.png");
    var result__ = null;
    var tmp418 = mobl.ref(result__);
    
    var result__ = null;
    var tmp417 = mobl.ref(result__);
    
    var result__ = null;
    var tmp416 = mobl.ref(result__);
    
    var nodes163 = $("<span>");
    root211.append(nodes163);
    subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp416, tmp417, tmp418, function(_, callback) {
      var root215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node66 = $("<span>");
      
      var val35 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/update_pressed.png";
                    updateButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val35 !== null) {
        subs__.addSub(mobl.domBind(node66, 'mousedown', val35));
      }
      
      var val36 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/update_on.png";
                    updateButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val36 !== null) {
        subs__.addSub(mobl.domBind(node66, 'mouseup', val36));
      }
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       controls.meditate.selectLifeEvent(function(result__) {
                         var tmp426 = result__;
                         var result__ = tmp426;
                         lifeEvent.set(result__);
                         var result__ = event;
                         if(result__) {
                           var result__ = ui.startLoading("Loading...", ui.progressStyle);
                           models.podcasts.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                             var tmp427 = result__;
                             var result__ = tmp427;
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
                     };
      var tmp410 = mobl.ref(result__);
      
      var result__ = null;
      var tmp415 = mobl.ref(result__);
      
      var result__ = null;
      var tmp414 = mobl.ref(result__);
      
      var result__ = null;
      var tmp413 = mobl.ref(result__);
      
      var result__ = null;
      var tmp412 = mobl.ref(result__);
      
      var result__ = null;
      var tmp411 = mobl.ref(result__);
      
      var nodes164 = $("<span>");
      node66.append(nodes164);
      subs__.addSub((ui.image)(updateButtonImage, tmp411, tmp412, tmp410, tmp413, tmp414, tmp415, function(_, callback) {
        var root216 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root216); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes164;
        nodes164 = node.contents();
        oldNodes.replaceWith(nodes164);
      }));
      root215.append(node66);
      callback(root215); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes163;
      nodes163 = node.contents();
      oldNodes.replaceWith(nodes163);
    }));
    callback(root211); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll83) {
    coll83 = coll83.reverse();
    function processOne5() {
      var podcast;
      podcast = coll83.pop();
      var result__ = front.add(podcast);
      
      if(coll83.length > 0) processOne5(); else rest5();
      
    }
    function rest5() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll83.length > 0) processOne5(); else rest5();
  });
  
};

