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
           var tmp11173 = result__;
           var result__ = tmp11173.feed;
           var tmp11172 = result__;
           var result__ = tmp11172.entry;
           var tmp11171 = result__;
           var result__ = tmp11171;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll866) {
             coll866 = coll866.reverse();
             function processOne443() {
               var result;
               result = coll866.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll866.length > 0) processOne443(); else rest443();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll866.length > 0) processOne443(); else rest443();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll866.length > 0) processOne443(); else rest443();
                     
                   }
                 }
               }
             }
             function rest443() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll866.length > 0) processOne443(); else rest443();
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
  keywords.split(",", 1000).list(function(coll867) {
    coll867 = coll867.reverse();
    function processOne444() {
      var keyword;
      keyword = coll867.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp11174 = result__;
        var result__ = tmp11174;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll868) {
            coll868 = coll868.reverse();
            function processOne445() {
              var podcast;
              podcast = coll868.pop();
              var result__ = podcast.title != "" && podcast.url != "";
              if(result__) {
                var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
                
                if(coll868.length > 0) processOne445(); else rest445();
                
              } else {
                {
                  
                  if(coll868.length > 0) processOne445(); else rest445();
                  
                }
              }
            }
            function rest445() {
              
              if(coll867.length > 0) processOne444(); else rest444();
              
            }
            if(coll868.length > 0) processOne445(); else rest445();
          });
          
        } else {
          {
            
            if(coll867.length > 0) processOne444(); else rest444();
            
          }
        }
      });
    }
    function rest444() {
      podcasts.count(function(result__) {
        var tmp11176 = result__;
        var result__ = tmp11176 == 0;
        var tmp11175 = result__;
        var result__ = tmp11175;
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
    if(coll867.length > 0) processOne444(); else rest444();
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
  var root5191 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp11107 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp11107.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node1168 = $("<span>");
  root5191.append(node1168);
  var condSubs295 = new mobl.CompSubscription();
  subs__.addSub(condSubs295);
  var oldValue295;
  var renderCond295 = function() {
    var value575 = tmp11107.get();
    if(oldValue295 === value575) return;
    oldValue295 = value575;
    var subs__ = condSubs295;
    subs__.unsubscribe();
    node1168.empty();
    if(value575) {
      
      var tmp11105 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
      subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
        tmp11105.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
      }));
      subs__.addSub(audio.addEventListener('change', function() {
        tmp11105.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
      }));
      
      
      var tmp11106 = mobl.ref(null);
      
      var nodes4106 = $("<span>");
      node1168.append(nodes4106);
      subs__.addSub((ui.header)(tmp11105, tmp11106, function(_, callback) {
        var root5192 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp11103 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp11104 = mobl.ref(mobl._("Back", []));
        
        var nodes4107 = $("<span>");
        root5192.append(nodes4107);
        subs__.addSub((ui.backButton)(tmp11104, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp11103, function(_, callback) {
          var root5193 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5193); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4107;
          nodes4107 = node.contents();
          oldNodes.replaceWith(nodes4107);
        }));
        callback(root5192); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4106;
        nodes4106 = node.contents();
        oldNodes.replaceWith(nodes4106);
      }));
      
      
    } else {
      
    }
  };
  renderCond295();
  subs__.addSub(tmp11107.addEventListener('change', function() {
    renderCond295();
  }));
  
  
  var tmp11123 = mobl.ref(null);
  
  
  var tmp11122 = mobl.ref(null);
  
  
  var tmp11121 = mobl.ref(null);
  
  
  var tmp11120 = mobl.ref(null);
  
  var nodes4108 = $("<span>");
  root5191.append(nodes4108);
  subs__.addSub((mobl.block)(tmp11120, tmp11121, tmp11122, tmp11123, function(_, callback) {
    var root5194 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11119 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp11119.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node1169 = $("<span>");
    root5194.append(node1169);
    var condSubs296 = new mobl.CompSubscription();
    subs__.addSub(condSubs296);
    var oldValue296;
    var renderCond296 = function() {
      var value576 = tmp11119.get();
      if(oldValue296 === value576) return;
      oldValue296 = value576;
      var subs__ = condSubs296;
      subs__.unsubscribe();
      node1169.empty();
      if(value576) {
        
        var tmp11114 = mobl.ref(false);
        
        
        var tmp11113 = mobl.ref(null);
        
        
        var tmp11112 = mobl.ref(null);
        
        var nodes4109 = $("<span>");
        node1169.append(nodes4109);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11112, tmp11113, tmp11114, function(_, callback) {
          var root5195 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp11109 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp11108 = mobl.ref("Play");
          
          var nodes4110 = $("<span>");
          root5195.append(nodes4110);
          subs__.addSub((ui.button)(tmp11108, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11109, function(_, callback) {
            var root5196 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5196); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4110;
            nodes4110 = node.contents();
            oldNodes.replaceWith(nodes4110);
          }));
          
          var tmp11111 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp11110 = mobl.ref("Pause");
          
          var nodes4111 = $("<span>");
          root5195.append(nodes4111);
          subs__.addSub((ui.button)(tmp11110, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11111, function(_, callback) {
            var root5197 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5197); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4111;
            nodes4111 = node.contents();
            oldNodes.replaceWith(nodes4111);
          }));
          callback(root5195); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4109;
          nodes4109 = node.contents();
          oldNodes.replaceWith(nodes4109);
        }));
        
        var tmp11118 = mobl.ref(false);
        
        
        var tmp11117 = mobl.ref(null);
        
        
        var tmp11116 = mobl.ref(null);
        
        var nodes4112 = $("<span>");
        node1169.append(nodes4112);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11116, tmp11117, tmp11118, function(_, callback) {
          var root5198 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp11115 = mobl.ref("_blank");
          
          var nodes4113 = $("<span>");
          root5198.append(nodes4113);
          subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp11115, function(_, callback) {
            var root5199 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            root5199.append("Download MP3");
            callback(root5199); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4113;
            nodes4113 = node.contents();
            oldNodes.replaceWith(nodes4113);
          }));
          callback(root5198); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4112;
          nodes4112 = node.contents();
          oldNodes.replaceWith(nodes4112);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond296();
    subs__.addSub(tmp11119.addEventListener('change', function() {
      renderCond296();
    }));
    
    callback(root5194); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4108;
    nodes4108 = node.contents();
    oldNodes.replaceWith(nodes4108);
  }));
  callback(root5191); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root5200 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11153 = mobl.ref(null);
  
  
  var tmp11152 = mobl.ref(null);
  
  
  var tmp11151 = mobl.ref(null);
  
  
  var tmp11150 = mobl.ref(null);
  
  var nodes4114 = $("<span>");
  root5200.append(nodes4114);
  subs__.addSub((mobl.block)(tmp11150, tmp11151, tmp11152, tmp11153, function(_, callback) {
    var root5201 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11132 = mobl.ref(false);
    
    
    var tmp11131 = mobl.ref(null);
    
    
    var tmp11130 = mobl.ref(null);
    
    var nodes4115 = $("<span>");
    root5201.append(nodes4115);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11130, tmp11131, tmp11132, function(_, callback) {
      var root5202 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11124 = mobl.ref(120);
      
      
      var tmp11129 = mobl.ref(null);
      
      
      var tmp11128 = mobl.ref(null);
      
      
      var tmp11127 = mobl.ref(null);
      
      
      var tmp11126 = mobl.ref(null);
      
      
      var tmp11125 = mobl.ref(null);
      
      var nodes4116 = $("<span>");
      root5202.append(nodes4116);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp11124, tmp11125, tmp11126, tmp11127, tmp11128, tmp11129, function(_, callback) {
        var root5203 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5203); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4116;
        nodes4116 = node.contents();
        oldNodes.replaceWith(nodes4116);
      }));
      callback(root5202); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4115;
      nodes4115 = node.contents();
      oldNodes.replaceWith(nodes4115);
    }));
    
    var tmp11138 = mobl.ref(false);
    
    
    var tmp11137 = mobl.ref(null);
    
    
    var tmp11136 = mobl.ref(null);
    
    var nodes4117 = $("<span>");
    root5201.append(nodes4117);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11136, tmp11137, tmp11138, function(_, callback) {
      var root5204 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11133 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp11133.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp11135 = mobl.ref(null);
      
      
      var tmp11134 = mobl.ref(null);
      
      var nodes4118 = $("<span>");
      root5204.append(nodes4118);
      subs__.addSub((mobl.label)(tmp11133, tmp11134, tmp11135, function(_, callback) {
        var root5205 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5205); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4118;
        nodes4118 = node.contents();
        oldNodes.replaceWith(nodes4118);
      }));
      callback(root5204); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4117;
      nodes4117 = node.contents();
      oldNodes.replaceWith(nodes4117);
    }));
    
    var tmp11144 = mobl.ref(false);
    
    
    var tmp11143 = mobl.ref(null);
    
    
    var tmp11142 = mobl.ref(null);
    
    var nodes4119 = $("<span>");
    root5201.append(nodes4119);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11142, tmp11143, tmp11144, function(_, callback) {
      var root5206 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11139 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "Unknown" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp11139.set(controls.meditate.blank(podcast.get().description) ? "Unknown" : podcast.get().description);
      }));
      
      
      var tmp11141 = mobl.ref(null);
      
      
      var tmp11140 = mobl.ref(null);
      
      var nodes4120 = $("<span>");
      root5206.append(nodes4120);
      subs__.addSub((mobl.label)(tmp11139, tmp11140, tmp11141, function(_, callback) {
        var root5207 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5207); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4120;
        nodes4120 = node.contents();
        oldNodes.replaceWith(nodes4120);
      }));
      callback(root5206); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4119;
      nodes4119 = node.contents();
      oldNodes.replaceWith(nodes4119);
    }));
    
    var tmp11149 = mobl.ref(false);
    
    
    var tmp11148 = mobl.ref(null);
    
    
    var tmp11147 = mobl.ref(null);
    
    var nodes4121 = $("<span>");
    root5201.append(nodes4121);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11147, tmp11148, tmp11149, function(_, callback) {
      var root5208 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp11145 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp11145.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp11146 = mobl.ref("_blank");
      
      var nodes4122 = $("<span>");
      root5208.append(nodes4122);
      subs__.addSub((mobl.link)(tmp11145, tmp11146, function(_, callback) {
        var root5209 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5209); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4122;
        nodes4122 = node.contents();
        oldNodes.replaceWith(nodes4122);
      }));
      callback(root5208); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4121;
      nodes4121 = node.contents();
      oldNodes.replaceWith(nodes4121);
    }));
    callback(root5201); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4114;
    nodes4114 = node.contents();
    oldNodes.replaceWith(nodes4114);
  }));
  
  var tmp11165 = mobl.ref(null);
  
  
  var tmp11164 = mobl.ref(null);
  
  
  var tmp11163 = mobl.ref(null);
  
  
  var tmp11162 = mobl.ref(null);
  
  var nodes4123 = $("<span>");
  root5200.append(nodes4123);
  subs__.addSub((mobl.block)(tmp11162, tmp11163, tmp11164, tmp11165, function(_, callback) {
    var root5210 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp11154 = mobl.ref("Episodes");
    
    
    var tmp11155 = mobl.ref(null);
    
    var nodes4124 = $("<span>");
    root5210.append(nodes4124);
    subs__.addSub((ui.header)(tmp11154, tmp11155, function(_, callback) {
      var root5211 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5211); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4124;
      nodes4124 = node.contents();
      oldNodes.replaceWith(nodes4124);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp11161 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp11177 = result__;
          var result__ = tmp11177;
          tmp11161.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp11178 = result__;
          var result__ = tmp11178;
          tmp11161.set(result__);
          
        });
      }));
      
      
      var node1170 = mobl.loadingSpan();
      root5210.append(node1170);
      var list327;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList327 = function() {
        var subs__ = listSubs__;
        list327 = tmp11161.get();
        list327.list(function(results1775) {
          node1170.empty();
          for(var i327 = 0; i327 < results1775.length; i327++) {
            (function() {
              var iternode327 = $("<span>");
              node1170.append(iternode327);
              var episode;
              episode = mobl.ref(mobl.ref(results1775), i327);
              
              var tmp11158 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp11179 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp11160 = mobl.ref(false);
              
              
              var tmp11159 = mobl.ref(null);
              
              var nodes4125 = $("<span>");
              iternode327.append(nodes4125);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11158, tmp11159, tmp11160, function(_, callback) {
                var root5212 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp11157 = mobl.ref(null);
                
                
                var tmp11156 = mobl.ref(null);
                
                var nodes4126 = $("<span>");
                root5212.append(nodes4126);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp11156, tmp11157, function(_, callback) {
                  var root5213 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5213); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4126;
                  nodes4126 = node.contents();
                  oldNodes.replaceWith(nodes4126);
                }));
                callback(root5212); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4125;
                nodes4125 = node.contents();
                oldNodes.replaceWith(nodes4125);
              }));
              
              var oldNodes = iternode327;
              iternode327 = iternode327.contents();
              oldNodes.replaceWith(iternode327);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list327.addEventListener('change', function() { listSubs__.unsubscribe(); renderList327(true); }));
          subs__.addSub(tmp11161.addEventListener('change', function() { listSubs__.unsubscribe(); renderList327(true); }));
        });
      };
      renderList327();
      
      callback(root5210); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4123;
    nodes4123 = node.contents();
    oldNodes.replaceWith(nodes4123);
  }));
  callback(root5200); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root5214 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp11167 = mobl.ref(null);
  
  
  var tmp11166 = mobl.ref(null);
  
  var nodes4127 = $("<span>");
  root5214.append(nodes4127);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp11166, tmp11167, function(_, callback) {
    var root5215 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5215); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4127;
    nodes4127 = node.contents();
    oldNodes.replaceWith(nodes4127);
  }));
  callback(root5214); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp11180 = result__;
    var result__ = tmp11180;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root5216 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp11181 = result__;
      var result__ = tmp11181;
      podcasts.set(result__);
      
    });
    
    var tmp11169 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         controls.meditate.selectLifeEvent(function(result__) {
                           var tmp11182 = result__;
                           var result__ = tmp11182;
                           lifeEvent.set(result__);
                           var result__ = event;
                           if(result__) {
                             var result__ = ui.startLoading("Loading...", ui.progressStyle);
                             controls.meditate.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                               var tmp11183 = result__;
                               var result__ = tmp11183;
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
    
    
    var tmp11168 = mobl.ref("Refresh");
    
    var nodes4128 = $("<span>");
    root5216.append(nodes4128);
    subs__.addSub((ui.button)(tmp11168, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp11169, function(_, callback) {
      var root5217 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5217); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4128;
      nodes4128 = node.contents();
      oldNodes.replaceWith(nodes4128);
    }));
    
    var tmp11170 = mobl.ref("Loading...");
    
    var nodes4129 = $("<span>");
    root5216.append(nodes4129);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp11170, function(_, callback) {
      var root5218 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4130 = $("<span>");
      root5218.append(nodes4130);
      subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root5219 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5219); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4130;
        nodes4130 = node.contents();
        oldNodes.replaceWith(nodes4130);
      }));
      callback(root5218); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4129;
      nodes4129 = node.contents();
      oldNodes.replaceWith(nodes4129);
    }));
    callback(root5216); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll869) {
    coll869 = coll869.reverse();
    function processOne446() {
      var podcast;
      podcast = coll869.pop();
      var result__ = front.add(podcast);
      
      if(coll869.length > 0) processOne446(); else rest446();
      
    }
    function rest446() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll869.length > 0) processOne446(); else rest446();
  });
  
};

