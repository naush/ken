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
           var tmp8909 = result__;
           var result__ = tmp8909.feed;
           var tmp8908 = result__;
           var result__ = tmp8908.entry;
           var tmp8907 = result__;
           var result__ = tmp8907;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll450) {
             coll450 = coll450.reverse();
             function processOne260() {
               var result;
               result = coll450.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll450.length > 0) processOne260(); else rest260();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll450.length > 0) processOne260(); else rest260();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll450.length > 0) processOne260(); else rest260();
                     
                   }
                 }
               }
             }
             function rest260() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll450.length > 0) processOne260(); else rest260();
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
  keywords.split(",", 1000).list(function(coll451) {
    coll451 = coll451.reverse();
    function processOne261() {
      var keyword;
      keyword = coll451.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp8910 = result__;
        var result__ = tmp8910;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll452) {
            coll452 = coll452.reverse();
            function processOne262() {
              var podcast;
              podcast = coll452.pop();
              var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
              
              if(coll452.length > 0) processOne262(); else rest262();
              
            }
            function rest262() {
              
              if(coll451.length > 0) processOne261(); else rest261();
              
            }
            if(coll452.length > 0) processOne262(); else rest262();
          });
          
        } else {
          {
            
            if(coll451.length > 0) processOne261(); else rest261();
            
          }
        }
      });
    }
    function rest261() {
      podcasts.count(function(result__) {
        var tmp8912 = result__;
        var result__ = tmp8912 == 0;
        var tmp8911 = result__;
        var result__ = tmp8911;
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
    if(coll451.length > 0) processOne261(); else rest261();
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
  var root4051 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp8836 = mobl.ref(null);
  
  var nodes3304 = $("<span>");
  root4051.append(nodes3304);
  subs__.addSub((ui.header)(mobl.ref(episode, 'title'), tmp8836, function(_, callback) {
    var root4052 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8834 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp8835 = mobl.ref(mobl._("Back", []));
    
    var nodes3305 = $("<span>");
    root4052.append(nodes3305);
    subs__.addSub((ui.backButton)(tmp8835, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8834, function(_, callback) {
      var root4053 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4053); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3305;
      nodes3305 = node.contents();
      oldNodes.replaceWith(nodes3305);
    }));
    callback(root4052); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3304;
    nodes3304 = node.contents();
    oldNodes.replaceWith(nodes3304);
  }));
  
  var tmp8858 = mobl.ref(null);
  
  
  var tmp8857 = mobl.ref(null);
  
  
  var tmp8856 = mobl.ref(null);
  
  
  var tmp8855 = mobl.ref(null);
  
  var nodes3306 = $("<span>");
  root4051.append(nodes3306);
  subs__.addSub((mobl.block)(tmp8855, tmp8856, tmp8857, tmp8858, function(_, callback) {
    var root4054 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8840 = mobl.ref(false);
    
    
    var tmp8839 = mobl.ref(null);
    
    
    var tmp8838 = mobl.ref(null);
    
    var nodes3307 = $("<span>");
    root4054.append(nodes3307);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8838, tmp8839, tmp8840, function(_, callback) {
      var root4055 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8837 = mobl.ref("_blank");
      
      var nodes3308 = $("<span>");
      root4055.append(nodes3308);
      subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp8837, function(_, callback) {
        var root4056 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4056); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3308;
        nodes3308 = node.contents();
        oldNodes.replaceWith(nodes3308);
      }));
      callback(root4055); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3307;
      nodes3307 = node.contents();
      oldNodes.replaceWith(nodes3307);
    }));
    
    var tmp8854 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp8854.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node759 = $("<span>");
    root4054.append(node759);
    var condSubs218 = new mobl.CompSubscription();
    subs__.addSub(condSubs218);
    var oldValue218;
    var renderCond218 = function() {
      var value350 = tmp8854.get();
      if(oldValue218 === value350) return;
      oldValue218 = value350;
      var subs__ = condSubs218;
      subs__.unsubscribe();
      node759.empty();
      if(value350) {
        
        var tmp8846 = mobl.ref(false);
        
        
        var tmp8845 = mobl.ref(null);
        
        
        var tmp8844 = mobl.ref(null);
        
        var nodes3309 = $("<span>");
        node759.append(nodes3309);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8844, tmp8845, tmp8846, function(_, callback) {
          var root4057 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp8841 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
            tmp8841.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          subs__.addSub(audio.addEventListener('change', function() {
            tmp8841.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          
          
          var tmp8843 = mobl.ref(null);
          
          
          var tmp8842 = mobl.ref(null);
          
          var nodes3310 = $("<span>");
          root4057.append(nodes3310);
          subs__.addSub((mobl.label)(tmp8841, tmp8842, tmp8843, function(_, callback) {
            var root4058 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4058); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3310;
            nodes3310 = node.contents();
            oldNodes.replaceWith(nodes3310);
          }));
          callback(root4057); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3309;
          nodes3309 = node.contents();
          oldNodes.replaceWith(nodes3309);
        }));
        
        var tmp8853 = mobl.ref(false);
        
        
        var tmp8852 = mobl.ref(null);
        
        
        var tmp8851 = mobl.ref(null);
        
        var nodes3311 = $("<span>");
        node759.append(nodes3311);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8851, tmp8852, tmp8853, function(_, callback) {
          var root4059 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp8848 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp8847 = mobl.ref("Play");
          
          var nodes3312 = $("<span>");
          root4059.append(nodes3312);
          subs__.addSub((ui.button)(tmp8847, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8848, function(_, callback) {
            var root4060 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4060); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3312;
            nodes3312 = node.contents();
            oldNodes.replaceWith(nodes3312);
          }));
          
          var tmp8850 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp8849 = mobl.ref("Pause");
          
          var nodes3313 = $("<span>");
          root4059.append(nodes3313);
          subs__.addSub((ui.button)(tmp8849, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8850, function(_, callback) {
            var root4061 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4061); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3313;
            nodes3313 = node.contents();
            oldNodes.replaceWith(nodes3313);
          }));
          callback(root4059); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3311;
          nodes3311 = node.contents();
          oldNodes.replaceWith(nodes3311);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond218();
    subs__.addSub(tmp8854.addEventListener('change', function() {
      renderCond218();
    }));
    
    callback(root4054); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3306;
    nodes3306 = node.contents();
    oldNodes.replaceWith(nodes3306);
  }));
  callback(root4051); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root4062 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8888 = mobl.ref(null);
  
  
  var tmp8887 = mobl.ref(null);
  
  
  var tmp8886 = mobl.ref(null);
  
  
  var tmp8885 = mobl.ref(null);
  
  var nodes3314 = $("<span>");
  root4062.append(nodes3314);
  subs__.addSub((mobl.block)(tmp8885, tmp8886, tmp8887, tmp8888, function(_, callback) {
    var root4063 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8867 = mobl.ref(false);
    
    
    var tmp8866 = mobl.ref(null);
    
    
    var tmp8865 = mobl.ref(null);
    
    var nodes3315 = $("<span>");
    root4063.append(nodes3315);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8865, tmp8866, tmp8867, function(_, callback) {
      var root4064 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8859 = mobl.ref(120);
      
      
      var tmp8864 = mobl.ref(null);
      
      
      var tmp8863 = mobl.ref(null);
      
      
      var tmp8862 = mobl.ref(null);
      
      
      var tmp8861 = mobl.ref(null);
      
      
      var tmp8860 = mobl.ref(null);
      
      var nodes3316 = $("<span>");
      root4064.append(nodes3316);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp8859, tmp8860, tmp8861, tmp8862, tmp8863, tmp8864, function(_, callback) {
        var root4065 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4065); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3316;
        nodes3316 = node.contents();
        oldNodes.replaceWith(nodes3316);
      }));
      callback(root4064); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3315;
      nodes3315 = node.contents();
      oldNodes.replaceWith(nodes3315);
    }));
    
    var tmp8873 = mobl.ref(false);
    
    
    var tmp8872 = mobl.ref(null);
    
    
    var tmp8871 = mobl.ref(null);
    
    var nodes3317 = $("<span>");
    root4063.append(nodes3317);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8871, tmp8872, tmp8873, function(_, callback) {
      var root4066 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8868 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp8868.set(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp8870 = mobl.ref(null);
      
      
      var tmp8869 = mobl.ref(null);
      
      var nodes3318 = $("<span>");
      root4066.append(nodes3318);
      subs__.addSub((mobl.label)(tmp8868, tmp8869, tmp8870, function(_, callback) {
        var root4067 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4067); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3318;
        nodes3318 = node.contents();
        oldNodes.replaceWith(nodes3318);
      }));
      callback(root4066); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3317;
      nodes3317 = node.contents();
      oldNodes.replaceWith(nodes3317);
    }));
    
    var tmp8879 = mobl.ref(false);
    
    
    var tmp8878 = mobl.ref(null);
    
    
    var tmp8877 = mobl.ref(null);
    
    var nodes3319 = $("<span>");
    root4063.append(nodes3319);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8877, tmp8878, tmp8879, function(_, callback) {
      var root4068 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8874 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp8874.set(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp8876 = mobl.ref(null);
      
      
      var tmp8875 = mobl.ref(null);
      
      var nodes3320 = $("<span>");
      root4068.append(nodes3320);
      subs__.addSub((mobl.label)(tmp8874, tmp8875, tmp8876, function(_, callback) {
        var root4069 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4069); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3320;
        nodes3320 = node.contents();
        oldNodes.replaceWith(nodes3320);
      }));
      callback(root4068); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3319;
      nodes3319 = node.contents();
      oldNodes.replaceWith(nodes3319);
    }));
    
    var tmp8884 = mobl.ref(false);
    
    
    var tmp8883 = mobl.ref(null);
    
    
    var tmp8882 = mobl.ref(null);
    
    var nodes3321 = $("<span>");
    root4063.append(nodes3321);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8882, tmp8883, tmp8884, function(_, callback) {
      var root4070 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8880 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp8880.set(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp8881 = mobl.ref("_blank");
      
      var nodes3322 = $("<span>");
      root4070.append(nodes3322);
      subs__.addSub((mobl.link)(tmp8880, tmp8881, function(_, callback) {
        var root4071 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4071); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3322;
        nodes3322 = node.contents();
        oldNodes.replaceWith(nodes3322);
      }));
      callback(root4070); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3321;
      nodes3321 = node.contents();
      oldNodes.replaceWith(nodes3321);
    }));
    callback(root4063); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3314;
    nodes3314 = node.contents();
    oldNodes.replaceWith(nodes3314);
  }));
  
  var tmp8900 = mobl.ref(null);
  
  
  var tmp8899 = mobl.ref(null);
  
  
  var tmp8898 = mobl.ref(null);
  
  
  var tmp8897 = mobl.ref(null);
  
  var nodes3323 = $("<span>");
  root4062.append(nodes3323);
  subs__.addSub((mobl.block)(tmp8897, tmp8898, tmp8899, tmp8900, function(_, callback) {
    var root4072 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8889 = mobl.ref("Episodes");
    
    
    var tmp8890 = mobl.ref(null);
    
    var nodes3324 = $("<span>");
    root4072.append(nodes3324);
    subs__.addSub((ui.header)(tmp8889, tmp8890, function(_, callback) {
      var root4073 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4073); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3324;
      nodes3324 = node.contents();
      oldNodes.replaceWith(nodes3324);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp8896 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp8913 = result__;
          var result__ = tmp8913;
          tmp8896.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp8914 = result__;
          var result__ = tmp8914;
          tmp8896.set(result__);
          
        });
      }));
      
      
      var node760 = mobl.loadingSpan();
      root4072.append(node760);
      var list211;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList211 = function() {
        var subs__ = listSubs__;
        list211 = tmp8896.get();
        list211.list(function(results543) {
          node760.empty();
          for(var i214 = 0; i214 < results543.length; i214++) {
            (function() {
              var iternode211 = $("<span>");
              node760.append(iternode211);
              var episode;
              episode = mobl.ref(mobl.ref(results543), i214);
              
              var tmp8893 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp8915 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp8895 = mobl.ref(false);
              
              
              var tmp8894 = mobl.ref(null);
              
              var nodes3325 = $("<span>");
              iternode211.append(nodes3325);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8893, tmp8894, tmp8895, function(_, callback) {
                var root4074 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp8892 = mobl.ref(null);
                
                
                var tmp8891 = mobl.ref(null);
                
                var nodes3326 = $("<span>");
                root4074.append(nodes3326);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp8891, tmp8892, function(_, callback) {
                  var root4075 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4075); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3326;
                  nodes3326 = node.contents();
                  oldNodes.replaceWith(nodes3326);
                }));
                callback(root4074); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3325;
                nodes3325 = node.contents();
                oldNodes.replaceWith(nodes3325);
              }));
              
              var oldNodes = iternode211;
              iternode211 = iternode211.contents();
              oldNodes.replaceWith(iternode211);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list211.addEventListener('change', function() { listSubs__.unsubscribe(); renderList211(true); }));
          subs__.addSub(tmp8896.addEventListener('change', function() { listSubs__.unsubscribe(); renderList211(true); }));
        });
      };
      renderList211();
      
      callback(root4072); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3323;
    nodes3323 = node.contents();
    oldNodes.replaceWith(nodes3323);
  }));
  callback(root4062); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root4076 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8901 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp8901.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp8901.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp8903 = mobl.ref(null);
  
  
  var tmp8902 = mobl.ref(null);
  
  var nodes3327 = $("<span>");
  root4076.append(nodes3327);
  subs__.addSub((mobl.label)(tmp8901, tmp8902, tmp8903, function(_, callback) {
    var root4077 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4077); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3327;
    nodes3327 = node.contents();
    oldNodes.replaceWith(nodes3327);
  }));
  callback(root4076); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp8916 = result__;
    var result__ = tmp8916;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root4078 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var event = mobl.ref(result__);
    
    var keywords = mobl.ref(event.get() ? event.get().keywords : "jazz");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get(), function(result__) {
      var tmp8917 = result__;
      var result__ = tmp8917;
      podcasts.set(result__);
      
    });
    
    var tmp8905 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ui.startLoading("Loading...", ui.progressStyle);
                         controls.meditate.fetchPodcasts(keywords.get(), function(result__) {
                           var tmp8918 = result__;
                           var result__ = tmp8918;
                           podcasts.set(result__);
                           var result__ = ui.endLoading();
                           if(callback && callback.apply) callback(); return;
                         });
                       });
    
    
    var tmp8904 = mobl.ref("Refresh");
    
    var nodes3328 = $("<span>");
    root4078.append(nodes3328);
    subs__.addSub((ui.button)(tmp8904, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8905, function(_, callback) {
      var root4079 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4079); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3328;
      nodes3328 = node.contents();
      oldNodes.replaceWith(nodes3328);
    }));
    
    var tmp8906 = mobl.ref("Loading...");
    
    var nodes3329 = $("<span>");
    root4078.append(nodes3329);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp8906, function(_, callback) {
      var root4080 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3330 = $("<span>");
      root4080.append(nodes3330);
      subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root4081 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4081); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3330;
        nodes3330 = node.contents();
        oldNodes.replaceWith(nodes3330);
      }));
      callback(root4080); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3329;
      nodes3329 = node.contents();
      oldNodes.replaceWith(nodes3329);
    }));
    callback(root4078); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll453) {
    coll453 = coll453.reverse();
    function processOne263() {
      var podcast;
      podcast = coll453.pop();
      var result__ = front.add(podcast);
      
      if(coll453.length > 0) processOne263(); else rest263();
      
    }
    function rest263() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll453.length > 0) processOne263(); else rest263();
  });
  
};

