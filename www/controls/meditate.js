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
           var tmp8994 = result__;
           var result__ = tmp8994.feed;
           var tmp8993 = result__;
           var result__ = tmp8993.entry;
           var tmp8992 = result__;
           var result__ = tmp8992;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll454) {
             coll454 = coll454.reverse();
             function processOne264() {
               var result;
               result = coll454.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll454.length > 0) processOne264(); else rest264();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll454.length > 0) processOne264(); else rest264();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll454.length > 0) processOne264(); else rest264();
                     
                   }
                 }
               }
             }
             function rest264() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll454.length > 0) processOne264(); else rest264();
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
  keywords.split(",", 1000).list(function(coll455) {
    coll455 = coll455.reverse();
    function processOne265() {
      var keyword;
      keyword = coll455.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp8995 = result__;
        var result__ = tmp8995;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll456) {
            coll456 = coll456.reverse();
            function processOne266() {
              var podcast;
              podcast = coll456.pop();
              var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
              
              if(coll456.length > 0) processOne266(); else rest266();
              
            }
            function rest266() {
              
              if(coll455.length > 0) processOne265(); else rest265();
              
            }
            if(coll456.length > 0) processOne266(); else rest266();
          });
          
        } else {
          {
            
            if(coll455.length > 0) processOne265(); else rest265();
            
          }
        }
      });
    }
    function rest265() {
      podcasts.count(function(result__) {
        var tmp8997 = result__;
        var result__ = tmp8997 == 0;
        var tmp8996 = result__;
        var result__ = tmp8996;
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
    if(coll455.length > 0) processOne265(); else rest265();
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
  var root4082 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp8921 = mobl.ref(null);
  
  var nodes3331 = $("<span>");
  root4082.append(nodes3331);
  subs__.addSub((ui.header)(mobl.ref(episode, 'title'), tmp8921, function(_, callback) {
    var root4083 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8919 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp8920 = mobl.ref(mobl._("Back", []));
    
    var nodes3332 = $("<span>");
    root4083.append(nodes3332);
    subs__.addSub((ui.backButton)(tmp8920, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8919, function(_, callback) {
      var root4084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4084); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3332;
      nodes3332 = node.contents();
      oldNodes.replaceWith(nodes3332);
    }));
    callback(root4083); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3331;
    nodes3331 = node.contents();
    oldNodes.replaceWith(nodes3331);
  }));
  
  var tmp8943 = mobl.ref(null);
  
  
  var tmp8942 = mobl.ref(null);
  
  
  var tmp8941 = mobl.ref(null);
  
  
  var tmp8940 = mobl.ref(null);
  
  var nodes3333 = $("<span>");
  root4082.append(nodes3333);
  subs__.addSub((mobl.block)(tmp8940, tmp8941, tmp8942, tmp8943, function(_, callback) {
    var root4085 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8925 = mobl.ref(false);
    
    
    var tmp8924 = mobl.ref(null);
    
    
    var tmp8923 = mobl.ref(null);
    
    var nodes3334 = $("<span>");
    root4085.append(nodes3334);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8923, tmp8924, tmp8925, function(_, callback) {
      var root4086 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8922 = mobl.ref("_blank");
      
      var nodes3335 = $("<span>");
      root4086.append(nodes3335);
      subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp8922, function(_, callback) {
        var root4087 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4087); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3335;
        nodes3335 = node.contents();
        oldNodes.replaceWith(nodes3335);
      }));
      callback(root4086); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3334;
      nodes3334 = node.contents();
      oldNodes.replaceWith(nodes3334);
    }));
    
    var tmp8939 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp8939.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node761 = $("<span>");
    root4085.append(node761);
    var condSubs219 = new mobl.CompSubscription();
    subs__.addSub(condSubs219);
    var oldValue219;
    var renderCond219 = function() {
      var value352 = tmp8939.get();
      if(oldValue219 === value352) return;
      oldValue219 = value352;
      var subs__ = condSubs219;
      subs__.unsubscribe();
      node761.empty();
      if(value352) {
        
        var tmp8931 = mobl.ref(false);
        
        
        var tmp8930 = mobl.ref(null);
        
        
        var tmp8929 = mobl.ref(null);
        
        var nodes3336 = $("<span>");
        node761.append(nodes3336);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8929, tmp8930, tmp8931, function(_, callback) {
          var root4088 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp8926 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
            tmp8926.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          subs__.addSub(audio.addEventListener('change', function() {
            tmp8926.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          
          
          var tmp8928 = mobl.ref(null);
          
          
          var tmp8927 = mobl.ref(null);
          
          var nodes3337 = $("<span>");
          root4088.append(nodes3337);
          subs__.addSub((mobl.label)(tmp8926, tmp8927, tmp8928, function(_, callback) {
            var root4089 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4089); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3337;
            nodes3337 = node.contents();
            oldNodes.replaceWith(nodes3337);
          }));
          callback(root4088); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3336;
          nodes3336 = node.contents();
          oldNodes.replaceWith(nodes3336);
        }));
        
        var tmp8938 = mobl.ref(false);
        
        
        var tmp8937 = mobl.ref(null);
        
        
        var tmp8936 = mobl.ref(null);
        
        var nodes3338 = $("<span>");
        node761.append(nodes3338);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8936, tmp8937, tmp8938, function(_, callback) {
          var root4090 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp8933 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp8932 = mobl.ref("Play");
          
          var nodes3339 = $("<span>");
          root4090.append(nodes3339);
          subs__.addSub((ui.button)(tmp8932, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8933, function(_, callback) {
            var root4091 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4091); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3339;
            nodes3339 = node.contents();
            oldNodes.replaceWith(nodes3339);
          }));
          
          var tmp8935 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp8934 = mobl.ref("Pause");
          
          var nodes3340 = $("<span>");
          root4090.append(nodes3340);
          subs__.addSub((ui.button)(tmp8934, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8935, function(_, callback) {
            var root4092 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4092); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3340;
            nodes3340 = node.contents();
            oldNodes.replaceWith(nodes3340);
          }));
          callback(root4090); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3338;
          nodes3338 = node.contents();
          oldNodes.replaceWith(nodes3338);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond219();
    subs__.addSub(tmp8939.addEventListener('change', function() {
      renderCond219();
    }));
    
    callback(root4085); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3333;
    nodes3333 = node.contents();
    oldNodes.replaceWith(nodes3333);
  }));
  callback(root4082); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root4093 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8973 = mobl.ref(null);
  
  
  var tmp8972 = mobl.ref(null);
  
  
  var tmp8971 = mobl.ref(null);
  
  
  var tmp8970 = mobl.ref(null);
  
  var nodes3341 = $("<span>");
  root4093.append(nodes3341);
  subs__.addSub((mobl.block)(tmp8970, tmp8971, tmp8972, tmp8973, function(_, callback) {
    var root4094 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8952 = mobl.ref(false);
    
    
    var tmp8951 = mobl.ref(null);
    
    
    var tmp8950 = mobl.ref(null);
    
    var nodes3342 = $("<span>");
    root4094.append(nodes3342);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8950, tmp8951, tmp8952, function(_, callback) {
      var root4095 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8944 = mobl.ref(120);
      
      
      var tmp8949 = mobl.ref(null);
      
      
      var tmp8948 = mobl.ref(null);
      
      
      var tmp8947 = mobl.ref(null);
      
      
      var tmp8946 = mobl.ref(null);
      
      
      var tmp8945 = mobl.ref(null);
      
      var nodes3343 = $("<span>");
      root4095.append(nodes3343);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp8944, tmp8945, tmp8946, tmp8947, tmp8948, tmp8949, function(_, callback) {
        var root4096 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4096); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3343;
        nodes3343 = node.contents();
        oldNodes.replaceWith(nodes3343);
      }));
      callback(root4095); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3342;
      nodes3342 = node.contents();
      oldNodes.replaceWith(nodes3342);
    }));
    
    var tmp8958 = mobl.ref(false);
    
    
    var tmp8957 = mobl.ref(null);
    
    
    var tmp8956 = mobl.ref(null);
    
    var nodes3344 = $("<span>");
    root4094.append(nodes3344);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8956, tmp8957, tmp8958, function(_, callback) {
      var root4097 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8953 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp8953.set(controls.meditate.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp8955 = mobl.ref(null);
      
      
      var tmp8954 = mobl.ref(null);
      
      var nodes3345 = $("<span>");
      root4097.append(nodes3345);
      subs__.addSub((mobl.label)(tmp8953, tmp8954, tmp8955, function(_, callback) {
        var root4098 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4098); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3345;
        nodes3345 = node.contents();
        oldNodes.replaceWith(nodes3345);
      }));
      callback(root4097); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3344;
      nodes3344 = node.contents();
      oldNodes.replaceWith(nodes3344);
    }));
    
    var tmp8964 = mobl.ref(false);
    
    
    var tmp8963 = mobl.ref(null);
    
    
    var tmp8962 = mobl.ref(null);
    
    var nodes3346 = $("<span>");
    root4094.append(nodes3346);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8962, tmp8963, tmp8964, function(_, callback) {
      var root4099 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8959 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp8959.set(controls.meditate.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp8961 = mobl.ref(null);
      
      
      var tmp8960 = mobl.ref(null);
      
      var nodes3347 = $("<span>");
      root4099.append(nodes3347);
      subs__.addSub((mobl.label)(tmp8959, tmp8960, tmp8961, function(_, callback) {
        var root4100 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4100); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3347;
        nodes3347 = node.contents();
        oldNodes.replaceWith(nodes3347);
      }));
      callback(root4099); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3346;
      nodes3346 = node.contents();
      oldNodes.replaceWith(nodes3346);
    }));
    
    var tmp8969 = mobl.ref(false);
    
    
    var tmp8968 = mobl.ref(null);
    
    
    var tmp8967 = mobl.ref(null);
    
    var nodes3348 = $("<span>");
    root4094.append(nodes3348);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8967, tmp8968, tmp8969, function(_, callback) {
      var root4101 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8965 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp8965.set(controls.meditate.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp8966 = mobl.ref("_blank");
      
      var nodes3349 = $("<span>");
      root4101.append(nodes3349);
      subs__.addSub((mobl.link)(tmp8965, tmp8966, function(_, callback) {
        var root4102 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4102); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3349;
        nodes3349 = node.contents();
        oldNodes.replaceWith(nodes3349);
      }));
      callback(root4101); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3348;
      nodes3348 = node.contents();
      oldNodes.replaceWith(nodes3348);
    }));
    callback(root4094); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3341;
    nodes3341 = node.contents();
    oldNodes.replaceWith(nodes3341);
  }));
  
  var tmp8985 = mobl.ref(null);
  
  
  var tmp8984 = mobl.ref(null);
  
  
  var tmp8983 = mobl.ref(null);
  
  
  var tmp8982 = mobl.ref(null);
  
  var nodes3350 = $("<span>");
  root4093.append(nodes3350);
  subs__.addSub((mobl.block)(tmp8982, tmp8983, tmp8984, tmp8985, function(_, callback) {
    var root4103 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8974 = mobl.ref("Episodes");
    
    
    var tmp8975 = mobl.ref(null);
    
    var nodes3351 = $("<span>");
    root4103.append(nodes3351);
    subs__.addSub((ui.header)(tmp8974, tmp8975, function(_, callback) {
      var root4104 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4104); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3351;
      nodes3351 = node.contents();
      oldNodes.replaceWith(nodes3351);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp8981 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp8998 = result__;
          var result__ = tmp8998;
          tmp8981.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp8999 = result__;
          var result__ = tmp8999;
          tmp8981.set(result__);
          
        });
      }));
      
      
      var node762 = mobl.loadingSpan();
      root4103.append(node762);
      var list212;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList212 = function() {
        var subs__ = listSubs__;
        list212 = tmp8981.get();
        list212.list(function(results549) {
          node762.empty();
          for(var i215 = 0; i215 < results549.length; i215++) {
            (function() {
              var iternode212 = $("<span>");
              node762.append(iternode212);
              var episode;
              episode = mobl.ref(mobl.ref(results549), i215);
              
              var tmp8978 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp9000 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp8980 = mobl.ref(false);
              
              
              var tmp8979 = mobl.ref(null);
              
              var nodes3352 = $("<span>");
              iternode212.append(nodes3352);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8978, tmp8979, tmp8980, function(_, callback) {
                var root4105 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp8977 = mobl.ref(null);
                
                
                var tmp8976 = mobl.ref(null);
                
                var nodes3353 = $("<span>");
                root4105.append(nodes3353);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp8976, tmp8977, function(_, callback) {
                  var root4106 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4106); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3353;
                  nodes3353 = node.contents();
                  oldNodes.replaceWith(nodes3353);
                }));
                callback(root4105); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3352;
                nodes3352 = node.contents();
                oldNodes.replaceWith(nodes3352);
              }));
              
              var oldNodes = iternode212;
              iternode212 = iternode212.contents();
              oldNodes.replaceWith(iternode212);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list212.addEventListener('change', function() { listSubs__.unsubscribe(); renderList212(true); }));
          subs__.addSub(tmp8981.addEventListener('change', function() { listSubs__.unsubscribe(); renderList212(true); }));
        });
      };
      renderList212();
      
      callback(root4103); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3350;
    nodes3350 = node.contents();
    oldNodes.replaceWith(nodes3350);
  }));
  callback(root4093); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root4107 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8986 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp8986.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp8986.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp8988 = mobl.ref(null);
  
  
  var tmp8987 = mobl.ref(null);
  
  var nodes3354 = $("<span>");
  root4107.append(nodes3354);
  subs__.addSub((mobl.label)(tmp8986, tmp8987, tmp8988, function(_, callback) {
    var root4108 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4108); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3354;
    nodes3354 = node.contents();
    oldNodes.replaceWith(nodes3354);
  }));
  callback(root4107); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp9001 = result__;
    var result__ = tmp9001;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root4109 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var event = mobl.ref(result__);
    
    var keywords = mobl.ref(event.get() ? event.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get(), function(result__) {
      var tmp9002 = result__;
      var result__ = tmp9002;
      podcasts.set(result__);
      
    });
    
    var tmp8990 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = ui.startLoading("Loading...", ui.progressStyle);
                         controls.meditate.fetchPodcasts(keywords.get(), function(result__) {
                           var tmp9003 = result__;
                           var result__ = tmp9003;
                           podcasts.set(result__);
                           var result__ = ui.endLoading();
                           if(callback && callback.apply) callback(); return;
                         });
                       });
    
    
    var tmp8989 = mobl.ref("Refresh");
    
    var nodes3355 = $("<span>");
    root4109.append(nodes3355);
    subs__.addSub((ui.button)(tmp8989, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8990, function(_, callback) {
      var root4110 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4110); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3355;
      nodes3355 = node.contents();
      oldNodes.replaceWith(nodes3355);
    }));
    
    var tmp8991 = mobl.ref("Loading...");
    
    var nodes3356 = $("<span>");
    root4109.append(nodes3356);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp8991, function(_, callback) {
      var root4111 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3357 = $("<span>");
      root4111.append(nodes3357);
      subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root4112 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4112); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3357;
        nodes3357 = node.contents();
        oldNodes.replaceWith(nodes3357);
      }));
      callback(root4111); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3356;
      nodes3356 = node.contents();
      oldNodes.replaceWith(nodes3356);
    }));
    callback(root4109); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll457) {
    coll457 = coll457.reverse();
    function processOne267() {
      var podcast;
      podcast = coll457.pop();
      var result__ = front.add(podcast);
      
      if(coll457.length > 0) processOne267(); else rest267();
      
    }
    function rest267() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll457.length > 0) processOne267(); else rest267();
  });
  
};

