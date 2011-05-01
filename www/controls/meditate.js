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
  var root9029 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp18739 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp18739.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node3257 = $("<span>");
  root9029.append(node3257);
  var condSubs402 = new mobl.CompSubscription();
  subs__.addSub(condSubs402);
  var oldValue402;
  var renderCond402 = function() {
    var value1086 = tmp18739.get();
    if(oldValue402 === value1086) return;
    oldValue402 = value1086;
    var subs__ = condSubs402;
    subs__.unsubscribe();
    node3257.empty();
    if(value1086) {
      
      var tmp18721 = mobl.ref(false);
      
      
      var tmp18720 = mobl.ref(null);
      
      
      var tmp18719 = mobl.ref(null);
      
      var nodes7223 = $("<span>");
      node3257.append(nodes7223);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18719, tmp18720, tmp18721, function(_, callback) {
        var root9030 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp18717 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp18718 = mobl.ref(mobl._("Back", []));
        
        var nodes7224 = $("<span>");
        root9030.append(nodes7224);
        subs__.addSub((ui.backButton)(tmp18718, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp18717, function(_, callback) {
          var root9031 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9031); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7224;
          nodes7224 = node.contents();
          oldNodes.replaceWith(nodes7224);
        }));
        callback(root9030); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7223;
        nodes7223 = node.contents();
        oldNodes.replaceWith(nodes7223);
      }));
      
      var tmp18727 = mobl.ref(false);
      
      
      var tmp18726 = mobl.ref(null);
      
      
      var tmp18725 = mobl.ref(null);
      
      var nodes7225 = $("<span>");
      node3257.append(nodes7225);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18725, tmp18726, tmp18727, function(_, callback) {
        var root9032 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp18722 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp18722.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp18722.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        
        var tmp18724 = mobl.ref(null);
        
        
        var tmp18723 = mobl.ref(null);
        
        var nodes7226 = $("<span>");
        root9032.append(nodes7226);
        subs__.addSub((mobl.label)(tmp18722, tmp18723, tmp18724, function(_, callback) {
          var root9033 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9033); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7226;
          nodes7226 = node.contents();
          oldNodes.replaceWith(nodes7226);
        }));
        callback(root9032); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7225;
        nodes7225 = node.contents();
        oldNodes.replaceWith(nodes7225);
      }));
      
      var tmp18734 = mobl.ref(false);
      
      
      var tmp18733 = mobl.ref(null);
      
      
      var tmp18732 = mobl.ref(null);
      
      var nodes7227 = $("<span>");
      node3257.append(nodes7227);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18732, tmp18733, tmp18734, function(_, callback) {
        var root9034 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp18729 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().play();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp18728 = mobl.ref("Play");
        
        var nodes7228 = $("<span>");
        root9034.append(nodes7228);
        subs__.addSub((ui.button)(tmp18728, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp18729, function(_, callback) {
          var root9035 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9035); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7228;
          nodes7228 = node.contents();
          oldNodes.replaceWith(nodes7228);
        }));
        
        var tmp18731 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp18730 = mobl.ref("Pause");
        
        var nodes7229 = $("<span>");
        root9034.append(nodes7229);
        subs__.addSub((ui.button)(tmp18730, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp18731, function(_, callback) {
          var root9036 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9036); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7229;
          nodes7229 = node.contents();
          oldNodes.replaceWith(nodes7229);
        }));
        callback(root9034); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7227;
        nodes7227 = node.contents();
        oldNodes.replaceWith(nodes7227);
      }));
      
      var tmp18738 = mobl.ref(false);
      
      
      var tmp18737 = mobl.ref(null);
      
      
      var tmp18736 = mobl.ref(null);
      
      var nodes7230 = $("<span>");
      node3257.append(nodes7230);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18736, tmp18737, tmp18738, function(_, callback) {
        var root9037 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp18735 = mobl.ref("_blank");
        
        var nodes7231 = $("<span>");
        root9037.append(nodes7231);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp18735, function(_, callback) {
          var root9038 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root9038.append("Download MP3");
          callback(root9038); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7231;
          nodes7231 = node.contents();
          oldNodes.replaceWith(nodes7231);
        }));
        callback(root9037); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7230;
        nodes7230 = node.contents();
        oldNodes.replaceWith(nodes7230);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond402();
  subs__.addSub(tmp18739.addEventListener('change', function() {
    renderCond402();
  }));
  
  callback(root9029); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root9039 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18754 = mobl.ref(null);
  
  
  var tmp18753 = mobl.ref(null);
  
  
  var tmp18752 = mobl.ref(null);
  
  
  var tmp18751 = mobl.ref(null);
  
  var nodes7232 = $("<span>");
  root9039.append(nodes7232);
  subs__.addSub((mobl.block)(tmp18751, tmp18752, tmp18753, tmp18754, function(_, callback) {
    var root9040 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp18745 = mobl.ref(false);
    
    
    var tmp18744 = mobl.ref(null);
    
    
    var tmp18743 = mobl.ref(null);
    
    var nodes7233 = $("<span>");
    root9040.append(nodes7233);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18743, tmp18744, tmp18745, function(_, callback) {
      var root9041 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp18740 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp18740.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp18742 = mobl.ref(null);
      
      
      var tmp18741 = mobl.ref(null);
      
      var nodes7234 = $("<span>");
      root9041.append(nodes7234);
      subs__.addSub((mobl.label)(tmp18740, tmp18741, tmp18742, function(_, callback) {
        var root9042 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9042); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7234;
        nodes7234 = node.contents();
        oldNodes.replaceWith(nodes7234);
      }));
      callback(root9041); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7233;
      nodes7233 = node.contents();
      oldNodes.replaceWith(nodes7233);
    }));
    
    var tmp18750 = mobl.ref(false);
    
    
    var tmp18749 = mobl.ref(null);
    
    
    var tmp18748 = mobl.ref(null);
    
    var nodes7235 = $("<span>");
    root9040.append(nodes7235);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18748, tmp18749, tmp18750, function(_, callback) {
      var root9043 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp18746 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp18746.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp18747 = mobl.ref("_blank");
      
      var nodes7236 = $("<span>");
      root9043.append(nodes7236);
      subs__.addSub((mobl.link)(tmp18746, tmp18747, function(_, callback) {
        var root9044 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root9044.append("Podcast Website");
        callback(root9044); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7236;
        nodes7236 = node.contents();
        oldNodes.replaceWith(nodes7236);
      }));
      callback(root9043); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7235;
      nodes7235 = node.contents();
      oldNodes.replaceWith(nodes7235);
    }));
    callback(root9040); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7232;
    nodes7232 = node.contents();
    oldNodes.replaceWith(nodes7232);
  }));
  
  var node3258 = $("<div>");
  node3258.attr('style', "height: 215px; overflow-y: auto; width: 270px;");
  
  
  var tmp18764 = mobl.ref(null);
  
  
  var tmp18763 = mobl.ref(null);
  
  
  var tmp18762 = mobl.ref(null);
  
  
  var tmp18761 = mobl.ref(null);
  
  var nodes7237 = $("<span>");
  node3258.append(nodes7237);
  subs__.addSub((mobl.block)(tmp18761, tmp18762, tmp18763, tmp18764, function(_, callback) {
    var root9045 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp18760 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp18780 = result__;
          var result__ = tmp18780;
          tmp18760.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp18781 = result__;
          var result__ = tmp18781;
          tmp18760.set(result__);
          
        });
      }));
      
      
      var node3259 = mobl.loadingSpan();
      root9045.append(node3259);
      var list556;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList556 = function() {
        var subs__ = listSubs__;
        list556 = tmp18760.get();
        list556.list(function(results558) {
          node3259.empty();
          for(var i675 = 0; i675 < results558.length; i675++) {
            (function() {
              var iternode556 = $("<span>");
              node3259.append(iternode556);
              var episode;
              episode = mobl.ref(mobl.ref(results558), i675);
              
              var tmp18757 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp18782 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp18759 = mobl.ref(false);
              
              
              var tmp18758 = mobl.ref(null);
              
              var nodes7238 = $("<span>");
              iternode556.append(nodes7238);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp18757, tmp18758, tmp18759, function(_, callback) {
                var root9046 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp18756 = mobl.ref(null);
                
                
                var tmp18755 = mobl.ref(null);
                
                var nodes7239 = $("<span>");
                root9046.append(nodes7239);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp18755, tmp18756, function(_, callback) {
                  var root9047 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9047); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7239;
                  nodes7239 = node.contents();
                  oldNodes.replaceWith(nodes7239);
                }));
                callback(root9046); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7238;
                nodes7238 = node.contents();
                oldNodes.replaceWith(nodes7238);
              }));
              
              var oldNodes = iternode556;
              iternode556 = iternode556.contents();
              oldNodes.replaceWith(iternode556);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list556.addEventListener('change', function() { listSubs__.unsubscribe(); renderList556(true); }));
          subs__.addSub(tmp18760.addEventListener('change', function() { listSubs__.unsubscribe(); renderList556(true); }));
        });
      };
      renderList556();
      
      callback(root9045); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes7237;
    nodes7237 = node.contents();
    oldNodes.replaceWith(nodes7237);
  }));
  root9039.append(node3258);
  callback(root9039); return subs__;
  
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root9048 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp18766 = mobl.ref(null);
  
  
  var tmp18765 = mobl.ref(null);
  
  var nodes7240 = $("<span>");
  root9048.append(nodes7240);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp18765, tmp18766, function(_, callback) {
    var root9049 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9049); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7240;
    nodes7240 = node.contents();
    oldNodes.replaceWith(nodes7240);
  }));
  callback(root9048); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp18783 = result__;
    var result__ = tmp18783;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root9050 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    models.podcasts.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp18784 = result__;
      var result__ = tmp18784;
      podcasts.set(result__);
      
    });
    
    var tmp18770 = mobl.ref(null);
    
    
    var tmp18769 = mobl.ref(null);
    
    
    var tmp18768 = mobl.ref(null);
    
    var nodes7241 = $("<span>");
    root9050.append(nodes7241);
    subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp18768, tmp18769, tmp18770, function(_, callback) {
      var root9051 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp18767 = mobl.ref("Loading...");
      
      var nodes7242 = $("<span>");
      root9051.append(nodes7242);
      subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp18767, function(_, callback) {
        var root9052 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7243 = $("<span>");
        root9052.append(nodes7243);
        subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
          var root9053 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9053); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7243;
          nodes7243 = node.contents();
          oldNodes.replaceWith(nodes7243);
        }));
        callback(root9052); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7242;
        nodes7242 = node.contents();
        oldNodes.replaceWith(nodes7242);
      }));
      callback(root9051); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7241;
      nodes7241 = node.contents();
      oldNodes.replaceWith(nodes7241);
    }));
    
    var saveButtonImage = mobl.ref("resources/images/save.png");
    
    var tmp18779 = mobl.ref(null);
    
    
    var tmp18778 = mobl.ref(null);
    
    
    var tmp18777 = mobl.ref(null);
    
    var nodes7244 = $("<span>");
    root9050.append(nodes7244);
    subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp18777, tmp18778, tmp18779, function(_, callback) {
      var root9054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3260 = $("<span>");
      
      var val1402 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/save_pressed.png";
                    saveButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1402 !== null) {
        subs__.addSub(mobl.domBind(node3260, 'mousedown', val1402));
      }
      
      var val1403 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/save.png";
                    saveButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1403 !== null) {
        subs__.addSub(mobl.domBind(node3260, 'mouseup', val1403));
      }
      
      
      var tmp18771 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           controls.meditate.selectLifeEvent(function(result__) {
                             var tmp18785 = result__;
                             var result__ = tmp18785;
                             lifeEvent.set(result__);
                             var result__ = event;
                             if(result__) {
                               var result__ = ui.startLoading("Loading...", ui.progressStyle);
                               models.podcasts.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                                 var tmp18786 = result__;
                                 var result__ = tmp18786;
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
      
      
      var tmp18776 = mobl.ref(null);
      
      
      var tmp18775 = mobl.ref(null);
      
      
      var tmp18774 = mobl.ref(null);
      
      
      var tmp18773 = mobl.ref(null);
      
      
      var tmp18772 = mobl.ref(null);
      
      var nodes7245 = $("<span>");
      node3260.append(nodes7245);
      subs__.addSub((ui.image)(saveButtonImage, tmp18772, tmp18773, tmp18771, tmp18774, tmp18775, tmp18776, function(_, callback) {
        var root9055 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9055); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7245;
        nodes7245 = node.contents();
        oldNodes.replaceWith(nodes7245);
      }));
      root9054.append(node3260);
      callback(root9054); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7244;
      nodes7244 = node.contents();
      oldNodes.replaceWith(nodes7244);
    }));
    callback(root9050); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll1250) {
    coll1250 = coll1250.reverse();
    function processOne111() {
      var podcast;
      podcast = coll1250.pop();
      var result__ = front.add(podcast);
      
      if(coll1250.length > 0) processOne111(); else rest111();
      
    }
    function rest111() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1250.length > 0) processOne111(); else rest111();
  });
  
};

