mobl.provides('controls.meditate');
mobl.provides('models');
mobl.provides('mobl');
controls.meditate.fetchPodcasts = function(keywords, callback) {
  var __this = this;
  var result__ = "";
  var query = result__;
  var result__ = new persistence.LocalQueryCollection([]);
  var podcasts = result__;
  var result__ = keywords.split(",", 1000);
  keywords.split(",", 1000).list(function(coll238) {
    coll238 = coll238.reverse();
    function processOne67() {
      var keyword;
      keyword = coll238.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp2919 = result__;
        var result__ = tmp2919;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll239) {
            coll239 = coll239.reverse();
            function processOne68() {
              var podcast;
              podcast = coll239.pop();
              var result__ = podcasts.add(mobl.instantiate(models.podcasts.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
              
              if(coll239.length > 0) processOne68(); else rest68();
              
            }
            function rest68() {
              
              if(coll238.length > 0) processOne67(); else rest67();
              
            }
            if(coll239.length > 0) processOne68(); else rest68();
          });
          
        } else {
          {
            
            if(coll238.length > 0) processOne67(); else rest67();
            
          }
        }
      });
    }
    function rest67() {
      var result__ = podcasts;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll238.length > 0) processOne67(); else rest67();
  });
  
};

controls.meditate.blank = function(target) {
   var __this = this;
  return target == null || target.length == 0;
};

controls.meditate.parseTime = function(time) {
   var __this = this;
  var mins = mobl.Math.floor(time / 60);
  
  var secs = mobl.Math.floor(time % 60);
  
  return "" + mins + ":" + secs;
};

controls.meditate.prettyPlayTime = function(current, duration) {
   var __this = this;
  return controls.meditate.parseTime(current) + " (" + controls.meditate.parseTime(duration) + ")";
};


controls.meditate.listen = function(episode, callback, screenCallback) {
  var root1727 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp2848 = mobl.ref(null);
  
  var nodes1299 = $("<span>");
  root1727.append(nodes1299);
  subs__.addSub((ui.header)(mobl.ref(episode, 'title'), tmp2848, function(_, callback) {
    var root1728 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp2846 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp2847 = mobl.ref(mobl._("Back", []));
    
    var nodes1300 = $("<span>");
    root1728.append(nodes1300);
    subs__.addSub((ui.backButton)(tmp2847, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2846, function(_, callback) {
      var root1729 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1729); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1300;
      nodes1300 = node.contents();
      oldNodes.replaceWith(nodes1300);
    }));
    callback(root1728); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1299;
    nodes1299 = node.contents();
    oldNodes.replaceWith(nodes1299);
  }));
  
  var tmp2870 = mobl.ref(null);
  
  
  var tmp2869 = mobl.ref(null);
  
  
  var tmp2868 = mobl.ref(null);
  
  
  var tmp2867 = mobl.ref(null);
  
  var nodes1301 = $("<span>");
  root1727.append(nodes1301);
  subs__.addSub((mobl.block)(tmp2867, tmp2868, tmp2869, tmp2870, function(_, callback) {
    var root1730 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp2852 = mobl.ref(false);
    
    
    var tmp2851 = mobl.ref(null);
    
    
    var tmp2850 = mobl.ref(null);
    
    var nodes1302 = $("<span>");
    root1730.append(nodes1302);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2850, tmp2851, tmp2852, function(_, callback) {
      var root1731 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp2849 = mobl.ref("_blank");
      
      var nodes1303 = $("<span>");
      root1731.append(nodes1303);
      subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp2849, function(_, callback) {
        var root1732 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1732); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1303;
        nodes1303 = node.contents();
        oldNodes.replaceWith(nodes1303);
      }));
      callback(root1731); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1302;
      nodes1302 = node.contents();
      oldNodes.replaceWith(nodes1302);
    }));
    
    var tmp2866 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp2866.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node569 = $("<span>");
    root1730.append(node569);
    var condSubs137 = new mobl.CompSubscription();
    subs__.addSub(condSubs137);
    var oldValue137;
    var renderCond137 = function() {
      var value249 = tmp2866.get();
      if(oldValue137 === value249) return;
      oldValue137 = value249;
      var subs__ = condSubs137;
      subs__.unsubscribe();
      node569.empty();
      if(value249) {
        
        var tmp2858 = mobl.ref(false);
        
        
        var tmp2857 = mobl.ref(null);
        
        
        var tmp2856 = mobl.ref(null);
        
        var nodes1304 = $("<span>");
        node569.append(nodes1304);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2856, tmp2857, tmp2858, function(_, callback) {
          var root1733 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp2853 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
            tmp2853.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          subs__.addSub(audio.addEventListener('change', function() {
            tmp2853.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          
          
          var tmp2855 = mobl.ref(null);
          
          
          var tmp2854 = mobl.ref(null);
          
          var nodes1305 = $("<span>");
          root1733.append(nodes1305);
          subs__.addSub((mobl.label)(tmp2853, tmp2854, tmp2855, function(_, callback) {
            var root1734 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1734); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1305;
            nodes1305 = node.contents();
            oldNodes.replaceWith(nodes1305);
          }));
          callback(root1733); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1304;
          nodes1304 = node.contents();
          oldNodes.replaceWith(nodes1304);
        }));
        
        var tmp2865 = mobl.ref(false);
        
        
        var tmp2864 = mobl.ref(null);
        
        
        var tmp2863 = mobl.ref(null);
        
        var nodes1306 = $("<span>");
        node569.append(nodes1306);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2863, tmp2864, tmp2865, function(_, callback) {
          var root1735 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp2860 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp2859 = mobl.ref("Play");
          
          var nodes1307 = $("<span>");
          root1735.append(nodes1307);
          subs__.addSub((ui.button)(tmp2859, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2860, function(_, callback) {
            var root1736 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1736); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1307;
            nodes1307 = node.contents();
            oldNodes.replaceWith(nodes1307);
          }));
          
          var tmp2862 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp2861 = mobl.ref("Pause");
          
          var nodes1308 = $("<span>");
          root1735.append(nodes1308);
          subs__.addSub((ui.button)(tmp2861, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2862, function(_, callback) {
            var root1737 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1737); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1308;
            nodes1308 = node.contents();
            oldNodes.replaceWith(nodes1308);
          }));
          callback(root1735); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1306;
          nodes1306 = node.contents();
          oldNodes.replaceWith(nodes1306);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond137();
    subs__.addSub(tmp2866.addEventListener('change', function() {
      renderCond137();
    }));
    
    callback(root1730); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1301;
    nodes1301 = node.contents();
    oldNodes.replaceWith(nodes1301);
  }));
  callback(root1727); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root1738 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2900 = mobl.ref(null);
  
  
  var tmp2899 = mobl.ref(null);
  
  
  var tmp2898 = mobl.ref(null);
  
  
  var tmp2897 = mobl.ref(null);
  
  var nodes1309 = $("<span>");
  root1738.append(nodes1309);
  subs__.addSub((mobl.block)(tmp2897, tmp2898, tmp2899, tmp2900, function(_, callback) {
    var root1739 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp2879 = mobl.ref(false);
    
    
    var tmp2878 = mobl.ref(null);
    
    
    var tmp2877 = mobl.ref(null);
    
    var nodes1310 = $("<span>");
    root1739.append(nodes1310);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2877, tmp2878, tmp2879, function(_, callback) {
      var root1740 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp2871 = mobl.ref(120);
      
      
      var tmp2876 = mobl.ref(null);
      
      
      var tmp2875 = mobl.ref(null);
      
      
      var tmp2874 = mobl.ref(null);
      
      
      var tmp2873 = mobl.ref(null);
      
      
      var tmp2872 = mobl.ref(null);
      
      var nodes1311 = $("<span>");
      root1740.append(nodes1311);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp2871, tmp2872, tmp2873, tmp2874, tmp2875, tmp2876, function(_, callback) {
        var root1741 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1741); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1311;
        nodes1311 = node.contents();
        oldNodes.replaceWith(nodes1311);
      }));
      callback(root1740); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1310;
      nodes1310 = node.contents();
      oldNodes.replaceWith(nodes1310);
    }));
    
    var tmp2885 = mobl.ref(false);
    
    
    var tmp2884 = mobl.ref(null);
    
    
    var tmp2883 = mobl.ref(null);
    
    var nodes1312 = $("<span>");
    root1739.append(nodes1312);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2883, tmp2884, tmp2885, function(_, callback) {
      var root1742 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp2880 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp2880.set(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp2882 = mobl.ref(null);
      
      
      var tmp2881 = mobl.ref(null);
      
      var nodes1313 = $("<span>");
      root1742.append(nodes1313);
      subs__.addSub((mobl.label)(tmp2880, tmp2881, tmp2882, function(_, callback) {
        var root1743 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1743); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1313;
        nodes1313 = node.contents();
        oldNodes.replaceWith(nodes1313);
      }));
      callback(root1742); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1312;
      nodes1312 = node.contents();
      oldNodes.replaceWith(nodes1312);
    }));
    
    var tmp2891 = mobl.ref(false);
    
    
    var tmp2890 = mobl.ref(null);
    
    
    var tmp2889 = mobl.ref(null);
    
    var nodes1314 = $("<span>");
    root1739.append(nodes1314);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2889, tmp2890, tmp2891, function(_, callback) {
      var root1744 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp2886 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp2886.set(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp2888 = mobl.ref(null);
      
      
      var tmp2887 = mobl.ref(null);
      
      var nodes1315 = $("<span>");
      root1744.append(nodes1315);
      subs__.addSub((mobl.label)(tmp2886, tmp2887, tmp2888, function(_, callback) {
        var root1745 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1745); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1315;
        nodes1315 = node.contents();
        oldNodes.replaceWith(nodes1315);
      }));
      callback(root1744); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1314;
      nodes1314 = node.contents();
      oldNodes.replaceWith(nodes1314);
    }));
    
    var tmp2896 = mobl.ref(false);
    
    
    var tmp2895 = mobl.ref(null);
    
    
    var tmp2894 = mobl.ref(null);
    
    var nodes1316 = $("<span>");
    root1739.append(nodes1316);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2894, tmp2895, tmp2896, function(_, callback) {
      var root1746 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp2892 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp2892.set(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp2893 = mobl.ref("_blank");
      
      var nodes1317 = $("<span>");
      root1746.append(nodes1317);
      subs__.addSub((mobl.link)(tmp2892, tmp2893, function(_, callback) {
        var root1747 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1747); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1317;
        nodes1317 = node.contents();
        oldNodes.replaceWith(nodes1317);
      }));
      callback(root1746); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1316;
      nodes1316 = node.contents();
      oldNodes.replaceWith(nodes1316);
    }));
    callback(root1739); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1309;
    nodes1309 = node.contents();
    oldNodes.replaceWith(nodes1309);
  }));
  
  var tmp2912 = mobl.ref(null);
  
  
  var tmp2911 = mobl.ref(null);
  
  
  var tmp2910 = mobl.ref(null);
  
  
  var tmp2909 = mobl.ref(null);
  
  var nodes1318 = $("<span>");
  root1738.append(nodes1318);
  subs__.addSub((mobl.block)(tmp2909, tmp2910, tmp2911, tmp2912, function(_, callback) {
    var root1748 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp2901 = mobl.ref("Episodes");
    
    
    var tmp2902 = mobl.ref(null);
    
    var nodes1319 = $("<span>");
    root1748.append(nodes1319);
    subs__.addSub((ui.header)(tmp2901, tmp2902, function(_, callback) {
      var root1749 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1749); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1319;
      nodes1319 = node.contents();
      oldNodes.replaceWith(nodes1319);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp2908 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp2920 = result__;
          var result__ = tmp2920;
          tmp2908.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp2921 = result__;
          var result__ = tmp2921;
          tmp2908.set(result__);
          
        });
      }));
      
      
      var node570 = mobl.loadingSpan();
      root1748.append(node570);
      var list130;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList130 = function() {
        var subs__ = listSubs__;
        list130 = tmp2908.get();
        list130.list(function(results258) {
          node570.empty();
          for(var i130 = 0; i130 < results258.length; i130++) {
            (function() {
              var iternode130 = $("<span>");
              node570.append(iternode130);
              var episode;
              episode = mobl.ref(mobl.ref(results258), i130);
              
              var tmp2905 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp2922 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp2907 = mobl.ref(false);
              
              
              var tmp2906 = mobl.ref(null);
              
              var nodes1320 = $("<span>");
              iternode130.append(nodes1320);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2905, tmp2906, tmp2907, function(_, callback) {
                var root1750 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp2904 = mobl.ref(null);
                
                
                var tmp2903 = mobl.ref(null);
                
                var nodes1321 = $("<span>");
                root1750.append(nodes1321);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp2903, tmp2904, function(_, callback) {
                  var root1751 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1751); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1321;
                  nodes1321 = node.contents();
                  oldNodes.replaceWith(nodes1321);
                }));
                callback(root1750); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1320;
                nodes1320 = node.contents();
                oldNodes.replaceWith(nodes1320);
              }));
              
              var oldNodes = iternode130;
              iternode130 = iternode130.contents();
              oldNodes.replaceWith(iternode130);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list130.addEventListener('change', function() { listSubs__.unsubscribe(); renderList130(true); }));
          subs__.addSub(tmp2908.addEventListener('change', function() { listSubs__.unsubscribe(); renderList130(true); }));
        });
      };
      renderList130();
      
      callback(root1748); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1318;
    nodes1318 = node.contents();
    oldNodes.replaceWith(nodes1318);
  }));
  callback(root1738); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root1752 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp2913 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp2913.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp2913.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp2915 = mobl.ref(null);
  
  
  var tmp2914 = mobl.ref(null);
  
  var nodes1322 = $("<span>");
  root1752.append(nodes1322);
  subs__.addSub((mobl.label)(tmp2913, tmp2914, tmp2915, function(_, callback) {
    var root1753 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1753); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1322;
    nodes1322 = node.contents();
    oldNodes.replaceWith(nodes1322);
  }));
  callback(root1752); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp2923 = result__;
    var result__ = tmp2923;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root1754 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var event = mobl.ref(result__);
    
    var keywords = mobl.ref(event.get() ? event.get().keywords : "jazz");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get(), function(result__) {
      var tmp2924 = result__;
      var result__ = tmp2924;
      podcasts.set(result__);
      
    });
    
    var tmp2917 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ui.startLoading("Loading...", ui.progressStyle);
                         controls.meditate.fetchPodcasts(keywords.get(), function(result__) {
                           var tmp2925 = result__;
                           var result__ = tmp2925;
                           podcasts.set(result__);
                           var result__ = ui.endLoading();
                           if(callback && callback.apply) callback(); return;
                         });
                       });
    
    
    var tmp2916 = mobl.ref("Refresh search results");
    
    var nodes1323 = $("<span>");
    root1754.append(nodes1323);
    subs__.addSub((ui.button)(tmp2916, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2917, function(_, callback) {
      var root1755 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1755); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1323;
      nodes1323 = node.contents();
      oldNodes.replaceWith(nodes1323);
    }));
    
    var tmp2918 = mobl.ref("Loading...");
    
    var nodes1324 = $("<span>");
    root1754.append(nodes1324);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp2918, function(_, callback) {
      var root1756 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1325 = $("<span>");
      root1756.append(nodes1325);
      subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root1757 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1757); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1325;
        nodes1325 = node.contents();
        oldNodes.replaceWith(nodes1325);
      }));
      callback(root1756); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1324;
      nodes1324 = node.contents();
      oldNodes.replaceWith(nodes1324);
    }));
    callback(root1754); return subs__;
    
    
    
  });
  return subs__;
};
