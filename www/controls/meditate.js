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
  var root37181 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp46524 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp46524.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node16601 = $("<span>");
  root37181.append(node16601);
  var condSubs3046 = new mobl.CompSubscription();
  subs__.addSub(condSubs3046);
  var oldValue3046;
  var renderCond3046 = function() {
    var value6840 = tmp46524.get();
    if(oldValue3046 === value6840) return;
    oldValue3046 = value6840;
    var subs__ = condSubs3046;
    subs__.unsubscribe();
    node16601.empty();
    if(value6840) {
      
      var tmp46506 = mobl.ref(false);
      
      
      var tmp46505 = mobl.ref(null);
      
      
      var tmp46504 = mobl.ref(null);
      
      var nodes25564 = $("<span>");
      node16601.append(nodes25564);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp46504, tmp46505, tmp46506, function(_, callback) {
        var root37182 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp46502 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp46503 = mobl.ref(mobl._("Back", []));
        
        var nodes25565 = $("<span>");
        root37182.append(nodes25565);
        subs__.addSub((ui.backButton)(tmp46503, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp46502, function(_, callback) {
          var root37183 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root37183); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes25565;
          nodes25565 = node.contents();
          oldNodes.replaceWith(nodes25565);
        }));
        callback(root37182); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes25564;
        nodes25564 = node.contents();
        oldNodes.replaceWith(nodes25564);
      }));
      
      var tmp46512 = mobl.ref(false);
      
      
      var tmp46511 = mobl.ref(null);
      
      
      var tmp46510 = mobl.ref(null);
      
      var nodes25566 = $("<span>");
      node16601.append(nodes25566);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp46510, tmp46511, tmp46512, function(_, callback) {
        var root37184 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp46507 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp46507.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp46507.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        
        var tmp46509 = mobl.ref(null);
        
        
        var tmp46508 = mobl.ref(null);
        
        var nodes25567 = $("<span>");
        root37184.append(nodes25567);
        subs__.addSub((mobl.label)(tmp46507, tmp46508, tmp46509, function(_, callback) {
          var root37185 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root37185); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes25567;
          nodes25567 = node.contents();
          oldNodes.replaceWith(nodes25567);
        }));
        callback(root37184); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes25566;
        nodes25566 = node.contents();
        oldNodes.replaceWith(nodes25566);
      }));
      
      var tmp46519 = mobl.ref(false);
      
      
      var tmp46518 = mobl.ref(null);
      
      
      var tmp46517 = mobl.ref(null);
      
      var nodes25568 = $("<span>");
      node16601.append(nodes25568);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp46517, tmp46518, tmp46519, function(_, callback) {
        var root37186 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp46514 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().play();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp46513 = mobl.ref("Play");
        
        var nodes25569 = $("<span>");
        root37186.append(nodes25569);
        subs__.addSub((ui.button)(tmp46513, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp46514, function(_, callback) {
          var root37187 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root37187); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes25569;
          nodes25569 = node.contents();
          oldNodes.replaceWith(nodes25569);
        }));
        
        var tmp46516 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp46515 = mobl.ref("Pause");
        
        var nodes25570 = $("<span>");
        root37186.append(nodes25570);
        subs__.addSub((ui.button)(tmp46515, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp46516, function(_, callback) {
          var root37188 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root37188); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes25570;
          nodes25570 = node.contents();
          oldNodes.replaceWith(nodes25570);
        }));
        callback(root37186); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes25568;
        nodes25568 = node.contents();
        oldNodes.replaceWith(nodes25568);
      }));
      
      var tmp46523 = mobl.ref(false);
      
      
      var tmp46522 = mobl.ref(null);
      
      
      var tmp46521 = mobl.ref(null);
      
      var nodes25571 = $("<span>");
      node16601.append(nodes25571);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp46521, tmp46522, tmp46523, function(_, callback) {
        var root37189 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp46520 = mobl.ref("_blank");
        
        var nodes25572 = $("<span>");
        root37189.append(nodes25572);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp46520, function(_, callback) {
          var root37190 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root37190.append("Download MP3");
          callback(root37190); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes25572;
          nodes25572 = node.contents();
          oldNodes.replaceWith(nodes25572);
        }));
        callback(root37189); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes25571;
        nodes25571 = node.contents();
        oldNodes.replaceWith(nodes25571);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond3046();
  subs__.addSub(tmp46524.addEventListener('change', function() {
    renderCond3046();
  }));
  
  callback(root37181); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root37191 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp46539 = mobl.ref(null);
  
  
  var tmp46538 = mobl.ref(null);
  
  
  var tmp46537 = mobl.ref(null);
  
  
  var tmp46536 = mobl.ref(null);
  
  var nodes25573 = $("<span>");
  root37191.append(nodes25573);
  subs__.addSub((mobl.block)(tmp46536, tmp46537, tmp46538, tmp46539, function(_, callback) {
    var root37192 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp46530 = mobl.ref(false);
    
    
    var tmp46529 = mobl.ref(null);
    
    
    var tmp46528 = mobl.ref(null);
    
    var nodes25574 = $("<span>");
    root37192.append(nodes25574);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp46528, tmp46529, tmp46530, function(_, callback) {
      var root37193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp46525 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp46525.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp46527 = mobl.ref(null);
      
      
      var tmp46526 = mobl.ref(null);
      
      var nodes25575 = $("<span>");
      root37193.append(nodes25575);
      subs__.addSub((mobl.label)(tmp46525, tmp46526, tmp46527, function(_, callback) {
        var root37194 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root37194); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25575;
        nodes25575 = node.contents();
        oldNodes.replaceWith(nodes25575);
      }));
      callback(root37193); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25574;
      nodes25574 = node.contents();
      oldNodes.replaceWith(nodes25574);
    }));
    
    var tmp46535 = mobl.ref(false);
    
    
    var tmp46534 = mobl.ref(null);
    
    
    var tmp46533 = mobl.ref(null);
    
    var nodes25576 = $("<span>");
    root37192.append(nodes25576);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp46533, tmp46534, tmp46535, function(_, callback) {
      var root37195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp46531 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp46531.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp46532 = mobl.ref("_blank");
      
      var nodes25577 = $("<span>");
      root37195.append(nodes25577);
      subs__.addSub((mobl.link)(tmp46531, tmp46532, function(_, callback) {
        var root37196 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root37196.append("Podcast Website");
        callback(root37196); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25577;
        nodes25577 = node.contents();
        oldNodes.replaceWith(nodes25577);
      }));
      callback(root37195); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25576;
      nodes25576 = node.contents();
      oldNodes.replaceWith(nodes25576);
    }));
    callback(root37192); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes25573;
    nodes25573 = node.contents();
    oldNodes.replaceWith(nodes25573);
  }));
  
  var node16602 = $("<div>");
  node16602.attr('style', "height: 215px; overflow-y: auto; width: 270px;");
  
  
  var tmp46549 = mobl.ref(null);
  
  
  var tmp46548 = mobl.ref(null);
  
  
  var tmp46547 = mobl.ref(null);
  
  
  var tmp46546 = mobl.ref(null);
  
  var nodes25578 = $("<span>");
  node16602.append(nodes25578);
  subs__.addSub((mobl.block)(tmp46546, tmp46547, tmp46548, tmp46549, function(_, callback) {
    var root37197 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp46545 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp46555 = result__;
          var result__ = tmp46555;
          tmp46545.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp46556 = result__;
          var result__ = tmp46556;
          tmp46545.set(result__);
          
        });
      }));
      
      
      var node16603 = mobl.loadingSpan();
      root37197.append(node16603);
      var list3757;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList3757 = function() {
        var subs__ = listSubs__;
        list3757 = tmp46545.get();
        list3757.list(function(results4274) {
          node16603.empty();
          for(var i3757 = 0; i3757 < results4274.length; i3757++) {
            (function() {
              var iternode3757 = $("<span>");
              node16603.append(iternode3757);
              var episode;
              episode = mobl.ref(mobl.ref(results4274), i3757);
              
              var tmp46542 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp46557 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp46544 = mobl.ref(false);
              
              
              var tmp46543 = mobl.ref(null);
              
              var nodes25579 = $("<span>");
              iternode3757.append(nodes25579);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp46542, tmp46543, tmp46544, function(_, callback) {
                var root37198 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp46541 = mobl.ref(null);
                
                
                var tmp46540 = mobl.ref(null);
                
                var nodes25580 = $("<span>");
                root37198.append(nodes25580);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp46540, tmp46541, function(_, callback) {
                  var root37199 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root37199); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes25580;
                  nodes25580 = node.contents();
                  oldNodes.replaceWith(nodes25580);
                }));
                callback(root37198); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes25579;
                nodes25579 = node.contents();
                oldNodes.replaceWith(nodes25579);
              }));
              
              var oldNodes = iternode3757;
              iternode3757 = iternode3757.contents();
              oldNodes.replaceWith(iternode3757);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list3757.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3757(true); }));
          subs__.addSub(tmp46545.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3757(true); }));
        });
      };
      renderList3757();
      
      callback(root37197); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes25578;
    nodes25578 = node.contents();
    oldNodes.replaceWith(nodes25578);
  }));
  root37191.append(node16602);
  callback(root37191); return subs__;
  
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root37200 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp46551 = mobl.ref(null);
  
  
  var tmp46550 = mobl.ref(null);
  
  var nodes25581 = $("<span>");
  root37200.append(nodes25581);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp46550, tmp46551, function(_, callback) {
    var root37201 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root37201); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes25581;
    nodes25581 = node.contents();
    oldNodes.replaceWith(nodes25581);
  }));
  callback(root37200); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp46558 = result__;
    var result__ = tmp46558;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root37202 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    models.podcasts.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp46559 = result__;
      var result__ = tmp46559;
      podcasts.set(result__);
      
    });
    
    var tmp46552 = mobl.ref("Loading...");
    
    var nodes25582 = $("<span>");
    root37202.append(nodes25582);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp46552, function(_, callback) {
      var root37203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes25583 = $("<span>");
      root37203.append(nodes25583);
      subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root37204 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root37204); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25583;
        nodes25583 = node.contents();
        oldNodes.replaceWith(nodes25583);
      }));
      callback(root37203); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes25582;
      nodes25582 = node.contents();
      oldNodes.replaceWith(nodes25582);
    }));
    
    var tmp46554 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         controls.meditate.selectLifeEvent(function(result__) {
                           var tmp46560 = result__;
                           var result__ = tmp46560;
                           lifeEvent.set(result__);
                           var result__ = event;
                           if(result__) {
                             var result__ = ui.startLoading("Loading...", ui.progressStyle);
                             models.podcasts.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                               var tmp46561 = result__;
                               var result__ = tmp46561;
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
    
    
    var tmp46553 = mobl.ref("Refresh");
    
    var nodes25584 = $("<span>");
    root37202.append(nodes25584);
    subs__.addSub((ui.button)(tmp46553, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp46554, function(_, callback) {
      var root37205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root37205); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes25584;
      nodes25584 = node.contents();
      oldNodes.replaceWith(nodes25584);
    }));
    callback(root37202); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll6599) {
    coll6599 = coll6599.reverse();
    function processOne923() {
      var podcast;
      podcast = coll6599.pop();
      var result__ = front.add(podcast);
      
      if(coll6599.length > 0) processOne923(); else rest923();
      
    }
    function rest923() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll6599.length > 0) processOne923(); else rest923();
  });
  
};

