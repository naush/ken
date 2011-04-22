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
           var tmp11338 = result__;
           var result__ = tmp11338.feed;
           var tmp11337 = result__;
           var result__ = tmp11337.entry;
           var tmp11336 = result__;
           var result__ = tmp11336;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll874) {
             coll874 = coll874.reverse();
             function processOne451() {
               var result;
               result = coll874.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll874.length > 0) processOne451(); else rest451();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll874.length > 0) processOne451(); else rest451();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll874.length > 0) processOne451(); else rest451();
                     
                   }
                 }
               }
             }
             function rest451() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll874.length > 0) processOne451(); else rest451();
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
  keywords.split(",", 1000).list(function(coll875) {
    coll875 = coll875.reverse();
    function processOne452() {
      var keyword;
      keyword = coll875.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp11339 = result__;
        var result__ = tmp11339;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll876) {
            coll876 = coll876.reverse();
            function processOne453() {
              var podcast;
              podcast = coll876.pop();
              var result__ = podcast.title != "" && podcast.url != "";
              if(result__) {
                var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
                
                if(coll876.length > 0) processOne453(); else rest453();
                
              } else {
                {
                  
                  if(coll876.length > 0) processOne453(); else rest453();
                  
                }
              }
            }
            function rest453() {
              
              if(coll875.length > 0) processOne452(); else rest452();
              
            }
            if(coll876.length > 0) processOne453(); else rest453();
          });
          
        } else {
          {
            
            if(coll875.length > 0) processOne452(); else rest452();
            
          }
        }
      });
    }
    function rest452() {
      podcasts.count(function(result__) {
        var tmp11341 = result__;
        var result__ = tmp11341 == 0;
        var tmp11340 = result__;
        var result__ = tmp11340;
        if(result__) {
          {
            var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': "http://www.anxietyslayer.com", 'mygpo_link': "", 'description': "Tips and tools to help you conquer stress and anxiety. Featuring relaxation, meditation and breathing techniques to help you relax and feel calm.", 'subs': "", 'title': "Anxiety Slayer", 'url': "http://anxietyslayer.podbean.com/feed/", 'subscribers_last_week': "", 'logo_url': "http://anxietyslayer.podbean.com/mf/web/i67iwi/slayer-podcast-url.jpg"}));
            var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': "http://www.chakra-balance.com", 'mygpo_link': "", 'description': "http://www.chakra-balance.com presents a complete chakra meditation. A mix of sound frequencies and relaxing music, all 7 chakras are healed & balanced. You will feel totally energized! There are 29 FREE mp3 audios available from this site.", 'subs': "", 'title': "Chakra Meditation", 'url': "http://chakra-balance.com/podcast/feed.xml", 'subscribers_last_week': "", 'logo_url': "http://chakra-balance.com/podcast/images/itunes_image.jpg"}));
            var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': "http://www.mythoughtcoach.com", 'mygpo_link': "", 'description': "The first guided meditation in a series of regular podcasts by Stin. Daily use will invite stillness, joy and abundance to your life. Stressed? Wanting more? Put on your headphones.", 'subs': "", 'title': "Meditation Station", 'url': "http://fitmindbody.audioblog.com/rss/creation_station.xml", 'subscribers_last_week': "", 'logo_url': "http://fitmindbody.hipcast.com/albumart/1004_1303192999.jpg"}));
            var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': "http://www.mythoughtcoach.com", 'mygpo_link': "", 'description': "These guided affirmations will help the law of attraction work for you and help you think in a way that will bring you what you WANT, not what you fear! The most listened to affirmation MP3 from mythoughtcoach.com will be posted every month, along with other great stuff.", 'subs': "", 'title': "My Thought Coach", 'url': "http://fitmindbody.hipcast.com/rss/mythoughtcoach.xml", 'subscribers_last_week': "", 'logo_url': "http://fitmindbody.hipcast.com/albumart/1008_1303192751.jpg"}));
            var result__ = podcasts;
            if(callback && callback.apply) callback(result__);
            return;
            if(callback && callback.apply) callback(); return;
          }
        } else {
          {
            var result__ = podcasts;
            if(callback && callback.apply) callback(result__);
            return;
            if(callback && callback.apply) callback(); return;
          }
        }
      });
    }
    if(coll875.length > 0) processOne452(); else rest452();
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
  var root5252 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp11272 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp11272.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node1174 = $("<span>");
  root5252.append(node1174);
  var condSubs299 = new mobl.CompSubscription();
  subs__.addSub(condSubs299);
  var oldValue299;
  var renderCond299 = function() {
    var value579 = tmp11272.get();
    if(oldValue299 === value579) return;
    oldValue299 = value579;
    var subs__ = condSubs299;
    subs__.unsubscribe();
    node1174.empty();
    if(value579) {
      
      var tmp11270 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
      subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
        tmp11270.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
      }));
      subs__.addSub(audio.addEventListener('change', function() {
        tmp11270.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
      }));
      
      
      var tmp11271 = mobl.ref(null);
      
      var nodes4158 = $("<span>");
      node1174.append(nodes4158);
      subs__.addSub((ui.header)(tmp11270, tmp11271, function(_, callback) {
        var root5253 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp11268 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp11269 = mobl.ref(mobl._("Back", []));
        
        var nodes4159 = $("<span>");
        root5253.append(nodes4159);
        subs__.addSub((ui.backButton)(tmp11269, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp11268, function(_, callback) {
          var root5254 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5254); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4159;
          nodes4159 = node.contents();
          oldNodes.replaceWith(nodes4159);
        }));
        callback(root5253); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4158;
        nodes4158 = node.contents();
        oldNodes.replaceWith(nodes4158);
      }));
      
      
    } else {
      
    }
  };
  renderCond299();
  subs__.addSub(tmp11272.addEventListener('change', function() {
    renderCond299();
  }));
  
  
  var tmp11288 = mobl.ref(null);
  
  
  var tmp11287 = mobl.ref(null);
  
  
  var tmp11286 = mobl.ref(null);
  
  
  var tmp11285 = mobl.ref(null);
  
  var nodes4160 = $("<span>");
  root5252.append(nodes4160);
  subs__.addSub((mobl.block)(tmp11285, tmp11286, tmp11287, tmp11288, function(_, callback) {
    var root5255 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11284 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp11284.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node1175 = $("<span>");
    root5255.append(node1175);
    var condSubs300 = new mobl.CompSubscription();
    subs__.addSub(condSubs300);
    var oldValue300;
    var renderCond300 = function() {
      var value580 = tmp11284.get();
      if(oldValue300 === value580) return;
      oldValue300 = value580;
      var subs__ = condSubs300;
      subs__.unsubscribe();
      node1175.empty();
      if(value580) {
        
        var tmp11279 = mobl.ref(false);
        
        
        var tmp11278 = mobl.ref(null);
        
        
        var tmp11277 = mobl.ref(null);
        
        var nodes4161 = $("<span>");
        node1175.append(nodes4161);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11277, tmp11278, tmp11279, function(_, callback) {
          var root5256 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp11274 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp11273 = mobl.ref("Play");
          
          var nodes4162 = $("<span>");
          root5256.append(nodes4162);
          subs__.addSub((ui.button)(tmp11273, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11274, function(_, callback) {
            var root5257 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5257); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4162;
            nodes4162 = node.contents();
            oldNodes.replaceWith(nodes4162);
          }));
          
          var tmp11276 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp11275 = mobl.ref("Pause");
          
          var nodes4163 = $("<span>");
          root5256.append(nodes4163);
          subs__.addSub((ui.button)(tmp11275, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11276, function(_, callback) {
            var root5258 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5258); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4163;
            nodes4163 = node.contents();
            oldNodes.replaceWith(nodes4163);
          }));
          callback(root5256); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4161;
          nodes4161 = node.contents();
          oldNodes.replaceWith(nodes4161);
        }));
        
        var tmp11283 = mobl.ref(false);
        
        
        var tmp11282 = mobl.ref(null);
        
        
        var tmp11281 = mobl.ref(null);
        
        var nodes4164 = $("<span>");
        node1175.append(nodes4164);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11281, tmp11282, tmp11283, function(_, callback) {
          var root5259 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp11280 = mobl.ref("_blank");
          
          var nodes4165 = $("<span>");
          root5259.append(nodes4165);
          subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp11280, function(_, callback) {
            var root5260 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            root5260.append("Download MP3");
            callback(root5260); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4165;
            nodes4165 = node.contents();
            oldNodes.replaceWith(nodes4165);
          }));
          callback(root5259); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4164;
          nodes4164 = node.contents();
          oldNodes.replaceWith(nodes4164);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond300();
    subs__.addSub(tmp11284.addEventListener('change', function() {
      renderCond300();
    }));
    
    callback(root5255); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4160;
    nodes4160 = node.contents();
    oldNodes.replaceWith(nodes4160);
  }));
  callback(root5252); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root5261 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11318 = mobl.ref(null);
  
  
  var tmp11317 = mobl.ref(null);
  
  
  var tmp11316 = mobl.ref(null);
  
  
  var tmp11315 = mobl.ref(null);
  
  var nodes4166 = $("<span>");
  root5261.append(nodes4166);
  subs__.addSub((mobl.block)(tmp11315, tmp11316, tmp11317, tmp11318, function(_, callback) {
    var root5262 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11297 = mobl.ref(false);
    
    
    var tmp11296 = mobl.ref(null);
    
    
    var tmp11295 = mobl.ref(null);
    
    var nodes4167 = $("<span>");
    root5262.append(nodes4167);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11295, tmp11296, tmp11297, function(_, callback) {
      var root5263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11289 = mobl.ref(120);
      
      
      var tmp11294 = mobl.ref(null);
      
      
      var tmp11293 = mobl.ref(null);
      
      
      var tmp11292 = mobl.ref(null);
      
      
      var tmp11291 = mobl.ref(null);
      
      
      var tmp11290 = mobl.ref(null);
      
      var nodes4168 = $("<span>");
      root5263.append(nodes4168);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp11289, tmp11290, tmp11291, tmp11292, tmp11293, tmp11294, function(_, callback) {
        var root5264 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5264); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4168;
        nodes4168 = node.contents();
        oldNodes.replaceWith(nodes4168);
      }));
      callback(root5263); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4167;
      nodes4167 = node.contents();
      oldNodes.replaceWith(nodes4167);
    }));
    
    var tmp11303 = mobl.ref(false);
    
    
    var tmp11302 = mobl.ref(null);
    
    
    var tmp11301 = mobl.ref(null);
    
    var nodes4169 = $("<span>");
    root5262.append(nodes4169);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11301, tmp11302, tmp11303, function(_, callback) {
      var root5265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11298 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp11298.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp11300 = mobl.ref(null);
      
      
      var tmp11299 = mobl.ref(null);
      
      var nodes4170 = $("<span>");
      root5265.append(nodes4170);
      subs__.addSub((mobl.label)(tmp11298, tmp11299, tmp11300, function(_, callback) {
        var root5266 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5266); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4170;
        nodes4170 = node.contents();
        oldNodes.replaceWith(nodes4170);
      }));
      callback(root5265); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4169;
      nodes4169 = node.contents();
      oldNodes.replaceWith(nodes4169);
    }));
    
    var tmp11309 = mobl.ref(false);
    
    
    var tmp11308 = mobl.ref(null);
    
    
    var tmp11307 = mobl.ref(null);
    
    var nodes4171 = $("<span>");
    root5262.append(nodes4171);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11307, tmp11308, tmp11309, function(_, callback) {
      var root5267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11304 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "Unknown" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp11304.set(controls.meditate.blank(podcast.get().description) ? "Unknown" : podcast.get().description);
      }));
      
      
      var tmp11306 = mobl.ref(null);
      
      
      var tmp11305 = mobl.ref(null);
      
      var nodes4172 = $("<span>");
      root5267.append(nodes4172);
      subs__.addSub((mobl.label)(tmp11304, tmp11305, tmp11306, function(_, callback) {
        var root5268 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5268); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4172;
        nodes4172 = node.contents();
        oldNodes.replaceWith(nodes4172);
      }));
      callback(root5267); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4171;
      nodes4171 = node.contents();
      oldNodes.replaceWith(nodes4171);
    }));
    
    var tmp11314 = mobl.ref(false);
    
    
    var tmp11313 = mobl.ref(null);
    
    
    var tmp11312 = mobl.ref(null);
    
    var nodes4173 = $("<span>");
    root5262.append(nodes4173);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11312, tmp11313, tmp11314, function(_, callback) {
      var root5269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11310 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp11310.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp11311 = mobl.ref("_blank");
      
      var nodes4174 = $("<span>");
      root5269.append(nodes4174);
      subs__.addSub((mobl.link)(tmp11310, tmp11311, function(_, callback) {
        var root5270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4174;
        nodes4174 = node.contents();
        oldNodes.replaceWith(nodes4174);
      }));
      callback(root5269); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4173;
      nodes4173 = node.contents();
      oldNodes.replaceWith(nodes4173);
    }));
    callback(root5262); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4166;
    nodes4166 = node.contents();
    oldNodes.replaceWith(nodes4166);
  }));
  
  var tmp11330 = mobl.ref(null);
  
  
  var tmp11329 = mobl.ref(null);
  
  
  var tmp11328 = mobl.ref(null);
  
  
  var tmp11327 = mobl.ref(null);
  
  var nodes4175 = $("<span>");
  root5261.append(nodes4175);
  subs__.addSub((mobl.block)(tmp11327, tmp11328, tmp11329, tmp11330, function(_, callback) {
    var root5271 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11319 = mobl.ref("Episodes");
    
    
    var tmp11320 = mobl.ref(null);
    
    var nodes4176 = $("<span>");
    root5271.append(nodes4176);
    subs__.addSub((ui.header)(tmp11319, tmp11320, function(_, callback) {
      var root5272 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5272); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4176;
      nodes4176 = node.contents();
      oldNodes.replaceWith(nodes4176);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp11326 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp11342 = result__;
          var result__ = tmp11342;
          tmp11326.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp11343 = result__;
          var result__ = tmp11343;
          tmp11326.set(result__);
          
        });
      }));
      
      
      var node1176 = mobl.loadingSpan();
      root5271.append(node1176);
      var list329;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList329 = function() {
        var subs__ = listSubs__;
        list329 = tmp11326.get();
        list329.list(function(results1785) {
          node1176.empty();
          for(var i329 = 0; i329 < results1785.length; i329++) {
            (function() {
              var iternode329 = $("<span>");
              node1176.append(iternode329);
              var episode;
              episode = mobl.ref(mobl.ref(results1785), i329);
              
              var tmp11323 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp11344 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp11325 = mobl.ref(false);
              
              
              var tmp11324 = mobl.ref(null);
              
              var nodes4177 = $("<span>");
              iternode329.append(nodes4177);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11323, tmp11324, tmp11325, function(_, callback) {
                var root5273 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp11322 = mobl.ref(null);
                
                
                var tmp11321 = mobl.ref(null);
                
                var nodes4178 = $("<span>");
                root5273.append(nodes4178);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp11321, tmp11322, function(_, callback) {
                  var root5274 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5274); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4178;
                  nodes4178 = node.contents();
                  oldNodes.replaceWith(nodes4178);
                }));
                callback(root5273); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4177;
                nodes4177 = node.contents();
                oldNodes.replaceWith(nodes4177);
              }));
              
              var oldNodes = iternode329;
              iternode329 = iternode329.contents();
              oldNodes.replaceWith(iternode329);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list329.addEventListener('change', function() { listSubs__.unsubscribe(); renderList329(true); }));
          subs__.addSub(tmp11326.addEventListener('change', function() { listSubs__.unsubscribe(); renderList329(true); }));
        });
      };
      renderList329();
      
      callback(root5271); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4175;
    nodes4175 = node.contents();
    oldNodes.replaceWith(nodes4175);
  }));
  callback(root5261); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root5275 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11332 = mobl.ref(null);
  
  
  var tmp11331 = mobl.ref(null);
  
  var nodes4179 = $("<span>");
  root5275.append(nodes4179);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp11331, tmp11332, function(_, callback) {
    var root5276 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5276); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4179;
    nodes4179 = node.contents();
    oldNodes.replaceWith(nodes4179);
  }));
  callback(root5275); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp11345 = result__;
    var result__ = tmp11345;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root5277 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp11346 = result__;
      var result__ = tmp11346;
      podcasts.set(result__);
      
    });
    
    var tmp11334 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         controls.meditate.selectLifeEvent(function(result__) {
                           var tmp11347 = result__;
                           var result__ = tmp11347;
                           lifeEvent.set(result__);
                           var result__ = event;
                           if(result__) {
                             var result__ = ui.startLoading("Loading...", ui.progressStyle);
                             controls.meditate.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                               var tmp11348 = result__;
                               var result__ = tmp11348;
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
    
    
    var tmp11333 = mobl.ref("Refresh");
    
    var nodes4180 = $("<span>");
    root5277.append(nodes4180);
    subs__.addSub((ui.button)(tmp11333, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11334, function(_, callback) {
      var root5278 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5278); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4180;
      nodes4180 = node.contents();
      oldNodes.replaceWith(nodes4180);
    }));
    
    var tmp11335 = mobl.ref("Loading...");
    
    var nodes4181 = $("<span>");
    root5277.append(nodes4181);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp11335, function(_, callback) {
      var root5279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4182 = $("<span>");
      root5279.append(nodes4182);
      subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root5280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5280); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4182;
        nodes4182 = node.contents();
        oldNodes.replaceWith(nodes4182);
      }));
      callback(root5279); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4181;
      nodes4181 = node.contents();
      oldNodes.replaceWith(nodes4181);
    }));
    callback(root5277); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll877) {
    coll877 = coll877.reverse();
    function processOne454() {
      var podcast;
      podcast = coll877.pop();
      var result__ = front.add(podcast);
      
      if(coll877.length > 0) processOne454(); else rest454();
      
    }
    function rest454() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll877.length > 0) processOne454(); else rest454();
  });
  
};

