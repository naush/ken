mobl.provides('controls.meditate');
mobl.provides('models');
mobl.provides('mobl');

controls.meditate.Episode = {
  title: null,
  downloadUrl: null
};

controls.meditate.Podcast = {
  website: null,
  mygpo_link: null,
  description: null,
  subs: null,
  title: null,
  url: null,
  subscribers_last_week: null,
  logo_url: null,
  fetchEpisodes: function(callback) {
         var __this = this;
         mobl.yql.YQL.query("select * from feednormalizer where url='" + __this.url + "' and output='atom_1.0'", function(result__) {
           var tmp32196 = result__;
           var result__ = tmp32196.feed;
           var tmp32195 = result__;
           var result__ = tmp32195.entry;
           var tmp32194 = result__;
           var result__ = tmp32194;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll5033) {
             coll5033 = coll5033.reverse();
             function processOne635() {
               var result;
               result = coll5033.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll5033.length > 0) processOne635(); else rest635();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll5033.length > 0) processOne635(); else rest635();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll5033.length > 0) processOne635(); else rest635();
                     
                   }
                 }
               }
             }
             function rest635() {
               var result__ = episodes.limit(5);
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll5033.length > 0) processOne635(); else rest635();
           });
           
         });
       }
};
controls.meditate.fetchPodcasts = function(keywords, callback) {
  var __this = this;
  var result__ = "";
  var query = result__;
  var result__ = new persistence.LocalQueryCollection([]);
  var podcasts = result__;
  var result__ = keywords.split(",", 1000);
  keywords.split(",", 1000).list(function(coll5034) {
    coll5034 = coll5034.reverse();
    function processOne636() {
      var keyword;
      keyword = coll5034.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp32197 = result__;
        var result__ = tmp32197;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll5035) {
            coll5035 = coll5035.reverse();
            function processOne637() {
              var podcast;
              podcast = coll5035.pop();
              var result__ = podcast.title != "" && podcast.url != "";
              if(result__) {
                var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
                
                if(coll5035.length > 0) processOne637(); else rest637();
                
              } else {
                {
                  
                  if(coll5035.length > 0) processOne637(); else rest637();
                  
                }
              }
            }
            function rest637() {
              
              if(coll5034.length > 0) processOne636(); else rest636();
              
            }
            if(coll5035.length > 0) processOne637(); else rest637();
          });
          
        } else {
          {
            
            if(coll5034.length > 0) processOne636(); else rest636();
            
          }
        }
      });
    }
    function rest636() {
      podcasts.count(function(result__) {
        var tmp32199 = result__;
        var result__ = tmp32199 == 0;
        var tmp32198 = result__;
        var result__ = tmp32198;
        if(result__) {
          {
            var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': "http://www.anxietyslayer.com", 'mygpo_link': "", 'description': "Tips and tools to help you conquer stress and anxiety. Featuring relaxation, meditation and breathing techniques to help you relax and feel calm.", 'subs': "", 'title': "Anxiety Slayer", 'url': "http://anxietyslayer.podbean.com/feed/", 'subscribers_last_week': "", 'logo_url': "http://anxietyslayer.podbean.com/mf/web/i67iwi/slayer-podcast-url.jpg"}));
            var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': "http://www.chakra-balance.com", 'mygpo_link': "", 'description': "http://www.chakra-balance.com presents a complete chakra meditation. A mix of sound frequencies and relaxing music, all 7 chakras are healed & balanced. You will feel totally energized! There are 29 FREE mp3 audios available from this site.", 'subs': "", 'title': "Chakra Meditation", 'url': "http://chakra-balance.com/podcast/feed.xml", 'subscribers_last_week': "", 'logo_url': "http://chakra-balance.com/podcast/images/itunes_image.jpg"}));
            var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': "http://www.mythoughtcoach.com", 'mygpo_link': "", 'description': "The first guided meditation in a series of regular podcasts by Stin. Daily use will invite stillness, joy and abundance to your life. Stressed? Wanting more? Put on your headphones.", 'subs': "", 'title': "Meditation Station", 'url': "http://fitmindbody.audioblog.com/rss/creation_station.xml", 'subscribers_last_week': "", 'logo_url': "http://fitmindbody.hipcast.com/albumart/1004_1303192999.jpg"}));
            var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': "http://www.mythoughtcoach.com", 'mygpo_link': "", 'description': "These guided affirmations will help the law of attraction work for you and help you think in a way that will bring you what you WANT, not what you fear! The most listened to affirmation MP3 from mythoughtcoach.com will be posted every month, along with other great stuff.", 'subs': "", 'title': "My Thought Coach", 'url': "http://fitmindbody.hipcast.com/rss/mythoughtcoach.xml", 'subscribers_last_week': "", 'logo_url': "http://fitmindbody.hipcast.com/albumart/1008_1303192751.jpg"}));
            var result__ = podcasts.limit(5);
            if(callback && callback.apply) callback(result__);
            return;
            if(callback && callback.apply) callback(); return;
          }
        } else {
          {
            var result__ = podcasts.limit(5);
            if(callback && callback.apply) callback(result__);
            return;
            if(callback && callback.apply) callback(); return;
          }
        }
      });
    }
    if(coll5034.length > 0) processOne636(); else rest636();
  });
  
};

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
  var root27039 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp32163 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp32163.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node12635 = $("<span>");
  root27039.append(node12635);
  var condSubs2359 = new mobl.CompSubscription();
  subs__.addSub(condSubs2359);
  var oldValue2359;
  var renderCond2359 = function() {
    var value5301 = tmp32163.get();
    if(oldValue2359 === value5301) return;
    oldValue2359 = value5301;
    var subs__ = condSubs2359;
    subs__.unsubscribe();
    node12635.empty();
    if(value5301) {
      
      var tmp32145 = mobl.ref(false);
      
      
      var tmp32144 = mobl.ref(null);
      
      
      var tmp32143 = mobl.ref(null);
      
      var nodes18244 = $("<span>");
      node12635.append(nodes18244);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32143, tmp32144, tmp32145, function(_, callback) {
        var root27040 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp32141 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp32142 = mobl.ref(mobl._("Back", []));
        
        var nodes18245 = $("<span>");
        root27040.append(nodes18245);
        subs__.addSub((ui.backButton)(tmp32142, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp32141, function(_, callback) {
          var root27041 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root27041); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18245;
          nodes18245 = node.contents();
          oldNodes.replaceWith(nodes18245);
        }));
        callback(root27040); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18244;
        nodes18244 = node.contents();
        oldNodes.replaceWith(nodes18244);
      }));
      
      var tmp32151 = mobl.ref(false);
      
      
      var tmp32150 = mobl.ref(null);
      
      
      var tmp32149 = mobl.ref(null);
      
      var nodes18246 = $("<span>");
      node12635.append(nodes18246);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32149, tmp32150, tmp32151, function(_, callback) {
        var root27042 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp32146 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp32146.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp32146.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        
        var tmp32148 = mobl.ref(null);
        
        
        var tmp32147 = mobl.ref(null);
        
        var nodes18247 = $("<span>");
        root27042.append(nodes18247);
        subs__.addSub((mobl.label)(tmp32146, tmp32147, tmp32148, function(_, callback) {
          var root27043 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root27043); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18247;
          nodes18247 = node.contents();
          oldNodes.replaceWith(nodes18247);
        }));
        callback(root27042); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18246;
        nodes18246 = node.contents();
        oldNodes.replaceWith(nodes18246);
      }));
      
      var tmp32158 = mobl.ref(false);
      
      
      var tmp32157 = mobl.ref(null);
      
      
      var tmp32156 = mobl.ref(null);
      
      var nodes18248 = $("<span>");
      node12635.append(nodes18248);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32156, tmp32157, tmp32158, function(_, callback) {
        var root27044 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp32153 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().play();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp32152 = mobl.ref("Play");
        
        var nodes18249 = $("<span>");
        root27044.append(nodes18249);
        subs__.addSub((ui.button)(tmp32152, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp32153, function(_, callback) {
          var root27045 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root27045); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18249;
          nodes18249 = node.contents();
          oldNodes.replaceWith(nodes18249);
        }));
        
        var tmp32155 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp32154 = mobl.ref("Pause");
        
        var nodes18250 = $("<span>");
        root27044.append(nodes18250);
        subs__.addSub((ui.button)(tmp32154, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp32155, function(_, callback) {
          var root27046 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root27046); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18250;
          nodes18250 = node.contents();
          oldNodes.replaceWith(nodes18250);
        }));
        callback(root27044); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18248;
        nodes18248 = node.contents();
        oldNodes.replaceWith(nodes18248);
      }));
      
      var tmp32162 = mobl.ref(false);
      
      
      var tmp32161 = mobl.ref(null);
      
      
      var tmp32160 = mobl.ref(null);
      
      var nodes18251 = $("<span>");
      node12635.append(nodes18251);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32160, tmp32161, tmp32162, function(_, callback) {
        var root27047 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp32159 = mobl.ref("_blank");
        
        var nodes18252 = $("<span>");
        root27047.append(nodes18252);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp32159, function(_, callback) {
          var root27048 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root27048.append("Download MP3");
          callback(root27048); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18252;
          nodes18252 = node.contents();
          oldNodes.replaceWith(nodes18252);
        }));
        callback(root27047); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18251;
        nodes18251 = node.contents();
        oldNodes.replaceWith(nodes18251);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond2359();
  subs__.addSub(tmp32163.addEventListener('change', function() {
    renderCond2359();
  }));
  
  callback(root27039); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root27049 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp32178 = mobl.ref(null);
  
  
  var tmp32177 = mobl.ref(null);
  
  
  var tmp32176 = mobl.ref(null);
  
  
  var tmp32175 = mobl.ref(null);
  
  var nodes18253 = $("<span>");
  root27049.append(nodes18253);
  subs__.addSub((mobl.block)(tmp32175, tmp32176, tmp32177, tmp32178, function(_, callback) {
    var root27050 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp32169 = mobl.ref(false);
    
    
    var tmp32168 = mobl.ref(null);
    
    
    var tmp32167 = mobl.ref(null);
    
    var nodes18254 = $("<span>");
    root27050.append(nodes18254);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32167, tmp32168, tmp32169, function(_, callback) {
      var root27051 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp32164 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp32164.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp32166 = mobl.ref(null);
      
      
      var tmp32165 = mobl.ref(null);
      
      var nodes18255 = $("<span>");
      root27051.append(nodes18255);
      subs__.addSub((mobl.label)(tmp32164, tmp32165, tmp32166, function(_, callback) {
        var root27052 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root27052); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes18255;
        nodes18255 = node.contents();
        oldNodes.replaceWith(nodes18255);
      }));
      callback(root27051); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes18254;
      nodes18254 = node.contents();
      oldNodes.replaceWith(nodes18254);
    }));
    
    var tmp32174 = mobl.ref(false);
    
    
    var tmp32173 = mobl.ref(null);
    
    
    var tmp32172 = mobl.ref(null);
    
    var nodes18256 = $("<span>");
    root27050.append(nodes18256);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32172, tmp32173, tmp32174, function(_, callback) {
      var root27053 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp32170 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp32170.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp32171 = mobl.ref("_blank");
      
      var nodes18257 = $("<span>");
      root27053.append(nodes18257);
      subs__.addSub((mobl.link)(tmp32170, tmp32171, function(_, callback) {
        var root27054 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root27054); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes18257;
        nodes18257 = node.contents();
        oldNodes.replaceWith(nodes18257);
      }));
      callback(root27053); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes18256;
      nodes18256 = node.contents();
      oldNodes.replaceWith(nodes18256);
    }));
    callback(root27050); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18253;
    nodes18253 = node.contents();
    oldNodes.replaceWith(nodes18253);
  }));
  
  var tmp32188 = mobl.ref(null);
  
  
  var tmp32187 = mobl.ref(null);
  
  
  var tmp32186 = mobl.ref(null);
  
  
  var tmp32185 = mobl.ref(null);
  
  var nodes18258 = $("<span>");
  root27049.append(nodes18258);
  subs__.addSub((mobl.block)(tmp32185, tmp32186, tmp32187, tmp32188, function(_, callback) {
    var root27055 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp32184 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp32200 = result__;
          var result__ = tmp32200;
          tmp32184.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp32201 = result__;
          var result__ = tmp32201;
          tmp32184.set(result__);
          
        });
      }));
      
      
      var node12636 = mobl.loadingSpan();
      root27055.append(node12636);
      var list2854;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2854 = function() {
        var subs__ = listSubs__;
        list2854 = tmp32184.get();
        list2854.list(function(results3059) {
          node12636.empty();
          for(var i2854 = 0; i2854 < results3059.length; i2854++) {
            (function() {
              var iternode2854 = $("<span>");
              node12636.append(iternode2854);
              var episode;
              episode = mobl.ref(mobl.ref(results3059), i2854);
              
              var tmp32181 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp32202 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp32183 = mobl.ref(false);
              
              
              var tmp32182 = mobl.ref(null);
              
              var nodes18259 = $("<span>");
              iternode2854.append(nodes18259);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp32181, tmp32182, tmp32183, function(_, callback) {
                var root27056 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp32180 = mobl.ref(null);
                
                
                var tmp32179 = mobl.ref(null);
                
                var nodes18260 = $("<span>");
                root27056.append(nodes18260);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp32179, tmp32180, function(_, callback) {
                  var root27057 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root27057); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18260;
                  nodes18260 = node.contents();
                  oldNodes.replaceWith(nodes18260);
                }));
                callback(root27056); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes18259;
                nodes18259 = node.contents();
                oldNodes.replaceWith(nodes18259);
              }));
              
              var oldNodes = iternode2854;
              iternode2854 = iternode2854.contents();
              oldNodes.replaceWith(iternode2854);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list2854.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2854(true); }));
          subs__.addSub(tmp32184.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2854(true); }));
        });
      };
      renderList2854();
      
      callback(root27055); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes18258;
    nodes18258 = node.contents();
    oldNodes.replaceWith(nodes18258);
  }));
  callback(root27049); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root27058 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp32190 = mobl.ref(null);
  
  
  var tmp32189 = mobl.ref(null);
  
  var nodes18261 = $("<span>");
  root27058.append(nodes18261);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp32189, tmp32190, function(_, callback) {
    var root27059 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root27059); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18261;
    nodes18261 = node.contents();
    oldNodes.replaceWith(nodes18261);
  }));
  callback(root27058); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp32203 = result__;
    var result__ = tmp32203;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root27060 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp32204 = result__;
      var result__ = tmp32204;
      podcasts.set(result__);
      
    });
    
    var tmp32191 = mobl.ref("Loading...");
    
    var nodes18262 = $("<span>");
    root27060.append(nodes18262);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp32191, function(_, callback) {
      var root27061 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes18263 = $("<span>");
      root27061.append(nodes18263);
      subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root27062 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root27062); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes18263;
        nodes18263 = node.contents();
        oldNodes.replaceWith(nodes18263);
      }));
      callback(root27061); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes18262;
      nodes18262 = node.contents();
      oldNodes.replaceWith(nodes18262);
    }));
    
    var tmp32193 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         controls.meditate.selectLifeEvent(function(result__) {
                           var tmp32205 = result__;
                           var result__ = tmp32205;
                           lifeEvent.set(result__);
                           var result__ = event;
                           if(result__) {
                             var result__ = ui.startLoading("Loading...", ui.progressStyle);
                             controls.meditate.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                               var tmp32206 = result__;
                               var result__ = tmp32206;
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
    
    
    var tmp32192 = mobl.ref("Refresh");
    
    var nodes18264 = $("<span>");
    root27060.append(nodes18264);
    subs__.addSub((ui.button)(tmp32192, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp32193, function(_, callback) {
      var root27063 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27063); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18264;
      nodes18264 = node.contents();
      oldNodes.replaceWith(nodes18264);
    }));
    callback(root27060); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll5036) {
    coll5036 = coll5036.reverse();
    function processOne638() {
      var podcast;
      podcast = coll5036.pop();
      var result__ = front.add(podcast);
      
      if(coll5036.length > 0) processOne638(); else rest638();
      
    }
    function rest638() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll5036.length > 0) processOne638(); else rest638();
  });
  
};

