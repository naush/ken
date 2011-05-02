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
  var root2864 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp6790 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp6790.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node1043 = $("<span>");
  root2864.append(node1043);
  var condSubs95 = new mobl.CompSubscription();
  subs__.addSub(condSubs95);
  var oldValue95;
  var renderCond95 = function() {
    var value283 = tmp6790.get();
    if(oldValue95 === value283) return;
    oldValue95 = value283;
    var subs__ = condSubs95;
    subs__.unsubscribe();
    node1043.empty();
    if(value283) {
      
      var tmp6772 = mobl.ref(false);
      
      
      var tmp6771 = mobl.ref(null);
      
      
      var tmp6770 = mobl.ref(null);
      
      var nodes2378 = $("<span>");
      node1043.append(nodes2378);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6770, tmp6771, tmp6772, function(_, callback) {
        var root2865 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6768 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6769 = mobl.ref(mobl._("Back", []));
        
        var nodes2379 = $("<span>");
        root2865.append(nodes2379);
        subs__.addSub((ui.backButton)(tmp6769, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6768, function(_, callback) {
          var root2866 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2866); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2379;
          nodes2379 = node.contents();
          oldNodes.replaceWith(nodes2379);
        }));
        callback(root2865); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2378;
        nodes2378 = node.contents();
        oldNodes.replaceWith(nodes2378);
      }));
      
      var tmp6778 = mobl.ref(false);
      
      
      var tmp6777 = mobl.ref(null);
      
      
      var tmp6776 = mobl.ref(null);
      
      var nodes2380 = $("<span>");
      node1043.append(nodes2380);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6776, tmp6777, tmp6778, function(_, callback) {
        var root2867 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6773 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp6773.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp6773.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        
        var tmp6775 = mobl.ref(null);
        
        
        var tmp6774 = mobl.ref(null);
        
        var nodes2381 = $("<span>");
        root2867.append(nodes2381);
        subs__.addSub((mobl.label)(tmp6773, tmp6774, tmp6775, function(_, callback) {
          var root2868 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2868); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2381;
          nodes2381 = node.contents();
          oldNodes.replaceWith(nodes2381);
        }));
        callback(root2867); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2380;
        nodes2380 = node.contents();
        oldNodes.replaceWith(nodes2380);
      }));
      
      var tmp6785 = mobl.ref(false);
      
      
      var tmp6784 = mobl.ref(null);
      
      
      var tmp6783 = mobl.ref(null);
      
      var nodes2382 = $("<span>");
      node1043.append(nodes2382);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6783, tmp6784, tmp6785, function(_, callback) {
        var root2869 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6780 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().play();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6779 = mobl.ref("Play");
        
        var nodes2383 = $("<span>");
        root2869.append(nodes2383);
        subs__.addSub((ui.button)(tmp6779, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6780, function(_, callback) {
          var root2870 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2870); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2383;
          nodes2383 = node.contents();
          oldNodes.replaceWith(nodes2383);
        }));
        
        var tmp6782 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp6781 = mobl.ref("Pause");
        
        var nodes2384 = $("<span>");
        root2869.append(nodes2384);
        subs__.addSub((ui.button)(tmp6781, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6782, function(_, callback) {
          var root2871 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2871); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2384;
          nodes2384 = node.contents();
          oldNodes.replaceWith(nodes2384);
        }));
        callback(root2869); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2382;
        nodes2382 = node.contents();
        oldNodes.replaceWith(nodes2382);
      }));
      
      var tmp6789 = mobl.ref(false);
      
      
      var tmp6788 = mobl.ref(null);
      
      
      var tmp6787 = mobl.ref(null);
      
      var nodes2385 = $("<span>");
      node1043.append(nodes2385);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6787, tmp6788, tmp6789, function(_, callback) {
        var root2872 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp6786 = mobl.ref("_blank");
        
        var nodes2386 = $("<span>");
        root2872.append(nodes2386);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp6786, function(_, callback) {
          var root2873 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root2873.append("Download MP3");
          callback(root2873); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2386;
          nodes2386 = node.contents();
          oldNodes.replaceWith(nodes2386);
        }));
        callback(root2872); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2385;
        nodes2385 = node.contents();
        oldNodes.replaceWith(nodes2385);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond95();
  subs__.addSub(tmp6790.addEventListener('change', function() {
    renderCond95();
  }));
  
  callback(root2864); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root2874 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp6805 = mobl.ref(null);
  
  
  var tmp6804 = mobl.ref(null);
  
  
  var tmp6803 = mobl.ref(null);
  
  
  var tmp6802 = mobl.ref(null);
  
  var nodes2387 = $("<span>");
  root2874.append(nodes2387);
  subs__.addSub((mobl.block)(tmp6802, tmp6803, tmp6804, tmp6805, function(_, callback) {
    var root2875 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp6796 = mobl.ref(false);
    
    
    var tmp6795 = mobl.ref(null);
    
    
    var tmp6794 = mobl.ref(null);
    
    var nodes2388 = $("<span>");
    root2875.append(nodes2388);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6794, tmp6795, tmp6796, function(_, callback) {
      var root2876 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp6791 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp6791.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp6793 = mobl.ref(null);
      
      
      var tmp6792 = mobl.ref(null);
      
      var nodes2389 = $("<span>");
      root2876.append(nodes2389);
      subs__.addSub((mobl.label)(tmp6791, tmp6792, tmp6793, function(_, callback) {
        var root2877 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2877); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2389;
        nodes2389 = node.contents();
        oldNodes.replaceWith(nodes2389);
      }));
      callback(root2876); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2388;
      nodes2388 = node.contents();
      oldNodes.replaceWith(nodes2388);
    }));
    
    var tmp6801 = mobl.ref(false);
    
    
    var tmp6800 = mobl.ref(null);
    
    
    var tmp6799 = mobl.ref(null);
    
    var nodes2390 = $("<span>");
    root2875.append(nodes2390);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6799, tmp6800, tmp6801, function(_, callback) {
      var root2878 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp6797 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp6797.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp6798 = mobl.ref("_blank");
      
      var nodes2391 = $("<span>");
      root2878.append(nodes2391);
      subs__.addSub((mobl.link)(tmp6797, tmp6798, function(_, callback) {
        var root2879 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root2879.append("Podcast Website");
        callback(root2879); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2391;
        nodes2391 = node.contents();
        oldNodes.replaceWith(nodes2391);
      }));
      callback(root2878); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2390;
      nodes2390 = node.contents();
      oldNodes.replaceWith(nodes2390);
    }));
    callback(root2875); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2387;
    nodes2387 = node.contents();
    oldNodes.replaceWith(nodes2387);
  }));
  
  var node1044 = $("<div>");
  node1044.attr('style', "height: 215px; overflow-y: auto; width: 270px;");
  
  
  var tmp6815 = mobl.ref(null);
  
  
  var tmp6814 = mobl.ref(null);
  
  
  var tmp6813 = mobl.ref(null);
  
  
  var tmp6812 = mobl.ref(null);
  
  var nodes2392 = $("<span>");
  node1044.append(nodes2392);
  subs__.addSub((mobl.block)(tmp6812, tmp6813, tmp6814, tmp6815, function(_, callback) {
    var root2880 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp6811 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp6831 = result__;
          var result__ = tmp6831;
          tmp6811.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp6832 = result__;
          var result__ = tmp6832;
          tmp6811.set(result__);
          
        });
      }));
      
      
      var node1045 = mobl.loadingSpan();
      root2880.append(node1045);
      var list144;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList144 = function() {
        var subs__ = listSubs__;
        list144 = tmp6811.get();
        list144.list(function(results144) {
          node1045.empty();
          for(var i185 = 0; i185 < results144.length; i185++) {
            (function() {
              var iternode144 = $("<span>");
              node1045.append(iternode144);
              var episode;
              episode = mobl.ref(mobl.ref(results144), i185);
              
              var tmp6808 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp6833 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp6810 = mobl.ref(false);
              
              
              var tmp6809 = mobl.ref(null);
              
              var nodes2393 = $("<span>");
              iternode144.append(nodes2393);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp6808, tmp6809, tmp6810, function(_, callback) {
                var root2881 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp6807 = mobl.ref(null);
                
                
                var tmp6806 = mobl.ref(null);
                
                var nodes2394 = $("<span>");
                root2881.append(nodes2394);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp6806, tmp6807, function(_, callback) {
                  var root2882 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2882); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2394;
                  nodes2394 = node.contents();
                  oldNodes.replaceWith(nodes2394);
                }));
                callback(root2881); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes2393;
                nodes2393 = node.contents();
                oldNodes.replaceWith(nodes2393);
              }));
              
              var oldNodes = iternode144;
              iternode144 = iternode144.contents();
              oldNodes.replaceWith(iternode144);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list144.addEventListener('change', function() { listSubs__.unsubscribe(); renderList144(true); }));
          subs__.addSub(tmp6811.addEventListener('change', function() { listSubs__.unsubscribe(); renderList144(true); }));
        });
      };
      renderList144();
      
      callback(root2880); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes2392;
    nodes2392 = node.contents();
    oldNodes.replaceWith(nodes2392);
  }));
  root2874.append(node1044);
  callback(root2874); return subs__;
  
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root2883 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp6817 = mobl.ref(null);
  
  
  var tmp6816 = mobl.ref(null);
  
  var nodes2395 = $("<span>");
  root2883.append(nodes2395);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp6816, tmp6817, function(_, callback) {
    var root2884 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2884); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2395;
    nodes2395 = node.contents();
    oldNodes.replaceWith(nodes2395);
  }));
  callback(root2883); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp6834 = result__;
    var result__ = tmp6834;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root2885 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    models.podcasts.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp6835 = result__;
      var result__ = tmp6835;
      podcasts.set(result__);
      
    });
    
    var tmp6821 = mobl.ref(null);
    
    
    var tmp6820 = mobl.ref(null);
    
    
    var tmp6819 = mobl.ref(null);
    
    var nodes2396 = $("<span>");
    root2885.append(nodes2396);
    subs__.addSub((mobl.block)(mobl.ref(ui.main), tmp6819, tmp6820, tmp6821, function(_, callback) {
      var root2886 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp6818 = mobl.ref("Loading...");
      
      var nodes2397 = $("<span>");
      root2886.append(nodes2397);
      subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp6818, function(_, callback) {
        var root2887 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes2398 = $("<span>");
        root2887.append(nodes2398);
        subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
          var root2888 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2888); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2398;
          nodes2398 = node.contents();
          oldNodes.replaceWith(nodes2398);
        }));
        callback(root2887); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2397;
        nodes2397 = node.contents();
        oldNodes.replaceWith(nodes2397);
      }));
      callback(root2886); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2396;
      nodes2396 = node.contents();
      oldNodes.replaceWith(nodes2396);
    }));
    
    var saveButtonImage = mobl.ref("resources/images/save.png");
    
    var tmp6830 = mobl.ref(null);
    
    
    var tmp6829 = mobl.ref(null);
    
    
    var tmp6828 = mobl.ref(null);
    
    var nodes2399 = $("<span>");
    root2885.append(nodes2399);
    subs__.addSub((mobl.block)(mobl.ref(ui.action), tmp6828, tmp6829, tmp6830, function(_, callback) {
      var root2889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1046 = $("<span>");
      
      var val694 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/save_pressed.png";
                    saveButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val694 !== null) {
        subs__.addSub(mobl.domBind(node1046, 'mousedown', val694));
      }
      
      var val695 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = "resources/images/save.png";
                    saveButtonImage.set(result__);
                    if(callback && callback.apply) callback(); return;
                  };
      if(val695 !== null) {
        subs__.addSub(mobl.domBind(node1046, 'mouseup', val695));
      }
      
      
      var tmp6822 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           controls.meditate.selectLifeEvent(function(result__) {
                             var tmp6836 = result__;
                             var result__ = tmp6836;
                             lifeEvent.set(result__);
                             var result__ = event;
                             if(result__) {
                               var result__ = ui.startLoading("Loading...", ui.progressStyle);
                               models.podcasts.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                                 var tmp6837 = result__;
                                 var result__ = tmp6837;
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
      
      
      var tmp6827 = mobl.ref(null);
      
      
      var tmp6826 = mobl.ref(null);
      
      
      var tmp6825 = mobl.ref(null);
      
      
      var tmp6824 = mobl.ref(null);
      
      
      var tmp6823 = mobl.ref(null);
      
      var nodes2400 = $("<span>");
      node1046.append(nodes2400);
      subs__.addSub((ui.image)(saveButtonImage, tmp6823, tmp6824, tmp6822, tmp6825, tmp6826, tmp6827, function(_, callback) {
        var root2890 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2890); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2400;
        nodes2400 = node.contents();
        oldNodes.replaceWith(nodes2400);
      }));
      root2889.append(node1046);
      callback(root2889); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2399;
      nodes2399 = node.contents();
      oldNodes.replaceWith(nodes2399);
    }));
    callback(root2885); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll386) {
    coll386 = coll386.reverse();
    function processOne63() {
      var podcast;
      podcast = coll386.pop();
      var result__ = front.add(podcast);
      
      if(coll386.length > 0) processOne63(); else rest63();
      
    }
    function rest63() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll386.length > 0) processOne63(); else rest63();
  });
  
};

