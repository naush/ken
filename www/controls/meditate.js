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
           var tmp31989 = result__;
           var result__ = tmp31989.feed;
           var tmp31988 = result__;
           var result__ = tmp31988.entry;
           var tmp31987 = result__;
           var result__ = tmp31987;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll5005) {
             coll5005 = coll5005.reverse();
             function processOne625() {
               var result;
               result = coll5005.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll5005.length > 0) processOne625(); else rest625();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll5005.length > 0) processOne625(); else rest625();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll5005.length > 0) processOne625(); else rest625();
                     
                   }
                 }
               }
             }
             function rest625() {
               var result__ = episodes.limit(5);
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll5005.length > 0) processOne625(); else rest625();
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
  keywords.split(",", 1000).list(function(coll5006) {
    coll5006 = coll5006.reverse();
    function processOne626() {
      var keyword;
      keyword = coll5006.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp31990 = result__;
        var result__ = tmp31990;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll5007) {
            coll5007 = coll5007.reverse();
            function processOne627() {
              var podcast;
              podcast = coll5007.pop();
              var result__ = podcast.title != "" && podcast.url != "";
              if(result__) {
                var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
                
                if(coll5007.length > 0) processOne627(); else rest627();
                
              } else {
                {
                  
                  if(coll5007.length > 0) processOne627(); else rest627();
                  
                }
              }
            }
            function rest627() {
              
              if(coll5006.length > 0) processOne626(); else rest626();
              
            }
            if(coll5007.length > 0) processOne627(); else rest627();
          });
          
        } else {
          {
            
            if(coll5006.length > 0) processOne626(); else rest626();
            
          }
        }
      });
    }
    function rest626() {
      podcasts.count(function(result__) {
        var tmp31992 = result__;
        var result__ = tmp31992 == 0;
        var tmp31991 = result__;
        var result__ = tmp31991;
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
    if(coll5006.length > 0) processOne626(); else rest626();
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
  var root26890 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp31956 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp31956.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node12576 = $("<span>");
  root26890.append(node12576);
  var condSubs2349 = new mobl.CompSubscription();
  subs__.addSub(condSubs2349);
  var oldValue2349;
  var renderCond2349 = function() {
    var value5279 = tmp31956.get();
    if(oldValue2349 === value5279) return;
    oldValue2349 = value5279;
    var subs__ = condSubs2349;
    subs__.unsubscribe();
    node12576.empty();
    if(value5279) {
      
      var tmp31938 = mobl.ref(false);
      
      
      var tmp31937 = mobl.ref(null);
      
      
      var tmp31936 = mobl.ref(null);
      
      var nodes18139 = $("<span>");
      node12576.append(nodes18139);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp31936, tmp31937, tmp31938, function(_, callback) {
        var root26891 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp31934 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp31935 = mobl.ref(mobl._("Back", []));
        
        var nodes18140 = $("<span>");
        root26891.append(nodes18140);
        subs__.addSub((ui.backButton)(tmp31935, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp31934, function(_, callback) {
          var root26892 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26892); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18140;
          nodes18140 = node.contents();
          oldNodes.replaceWith(nodes18140);
        }));
        callback(root26891); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18139;
        nodes18139 = node.contents();
        oldNodes.replaceWith(nodes18139);
      }));
      
      var tmp31944 = mobl.ref(false);
      
      
      var tmp31943 = mobl.ref(null);
      
      
      var tmp31942 = mobl.ref(null);
      
      var nodes18141 = $("<span>");
      node12576.append(nodes18141);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp31942, tmp31943, tmp31944, function(_, callback) {
        var root26893 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp31939 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp31939.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        subs__.addSub(audio.addEventListener('change', function() {
          tmp31939.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
        }));
        
        
        var tmp31941 = mobl.ref(null);
        
        
        var tmp31940 = mobl.ref(null);
        
        var nodes18142 = $("<span>");
        root26893.append(nodes18142);
        subs__.addSub((mobl.label)(tmp31939, tmp31940, tmp31941, function(_, callback) {
          var root26894 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26894); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18142;
          nodes18142 = node.contents();
          oldNodes.replaceWith(nodes18142);
        }));
        callback(root26893); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18141;
        nodes18141 = node.contents();
        oldNodes.replaceWith(nodes18141);
      }));
      
      var tmp31951 = mobl.ref(false);
      
      
      var tmp31950 = mobl.ref(null);
      
      
      var tmp31949 = mobl.ref(null);
      
      var nodes18143 = $("<span>");
      node12576.append(nodes18143);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp31949, tmp31950, tmp31951, function(_, callback) {
        var root26895 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp31946 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().play();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp31945 = mobl.ref("Play");
        
        var nodes18144 = $("<span>");
        root26895.append(nodes18144);
        subs__.addSub((ui.button)(tmp31945, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp31946, function(_, callback) {
          var root26896 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26896); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18144;
          nodes18144 = node.contents();
          oldNodes.replaceWith(nodes18144);
        }));
        
        var tmp31948 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp31947 = mobl.ref("Pause");
        
        var nodes18145 = $("<span>");
        root26895.append(nodes18145);
        subs__.addSub((ui.button)(tmp31947, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp31948, function(_, callback) {
          var root26897 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root26897); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18145;
          nodes18145 = node.contents();
          oldNodes.replaceWith(nodes18145);
        }));
        callback(root26895); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18143;
        nodes18143 = node.contents();
        oldNodes.replaceWith(nodes18143);
      }));
      
      var tmp31955 = mobl.ref(false);
      
      
      var tmp31954 = mobl.ref(null);
      
      
      var tmp31953 = mobl.ref(null);
      
      var nodes18146 = $("<span>");
      node12576.append(nodes18146);
      subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp31953, tmp31954, tmp31955, function(_, callback) {
        var root26898 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp31952 = mobl.ref("_blank");
        
        var nodes18147 = $("<span>");
        root26898.append(nodes18147);
        subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp31952, function(_, callback) {
          var root26899 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          root26899.append("Download MP3");
          callback(root26899); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18147;
          nodes18147 = node.contents();
          oldNodes.replaceWith(nodes18147);
        }));
        callback(root26898); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes18146;
        nodes18146 = node.contents();
        oldNodes.replaceWith(nodes18146);
      }));
      
      
      
      
      
    } else {
      
    }
  };
  renderCond2349();
  subs__.addSub(tmp31956.addEventListener('change', function() {
    renderCond2349();
  }));
  
  callback(root26890); return subs__;
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root26900 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp31971 = mobl.ref(null);
  
  
  var tmp31970 = mobl.ref(null);
  
  
  var tmp31969 = mobl.ref(null);
  
  
  var tmp31968 = mobl.ref(null);
  
  var nodes18148 = $("<span>");
  root26900.append(nodes18148);
  subs__.addSub((mobl.block)(tmp31968, tmp31969, tmp31970, tmp31971, function(_, callback) {
    var root26901 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp31962 = mobl.ref(false);
    
    
    var tmp31961 = mobl.ref(null);
    
    
    var tmp31960 = mobl.ref(null);
    
    var nodes18149 = $("<span>");
    root26901.append(nodes18149);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp31960, tmp31961, tmp31962, function(_, callback) {
      var root26902 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp31957 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp31957.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp31959 = mobl.ref(null);
      
      
      var tmp31958 = mobl.ref(null);
      
      var nodes18150 = $("<span>");
      root26902.append(nodes18150);
      subs__.addSub((mobl.label)(tmp31957, tmp31958, tmp31959, function(_, callback) {
        var root26903 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root26903); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes18150;
        nodes18150 = node.contents();
        oldNodes.replaceWith(nodes18150);
      }));
      callback(root26902); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes18149;
      nodes18149 = node.contents();
      oldNodes.replaceWith(nodes18149);
    }));
    
    var tmp31967 = mobl.ref(false);
    
    
    var tmp31966 = mobl.ref(null);
    
    
    var tmp31965 = mobl.ref(null);
    
    var nodes18151 = $("<span>");
    root26901.append(nodes18151);
    subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp31965, tmp31966, tmp31967, function(_, callback) {
      var root26904 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp31963 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp31963.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp31964 = mobl.ref("_blank");
      
      var nodes18152 = $("<span>");
      root26904.append(nodes18152);
      subs__.addSub((mobl.link)(tmp31963, tmp31964, function(_, callback) {
        var root26905 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root26905); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes18152;
        nodes18152 = node.contents();
        oldNodes.replaceWith(nodes18152);
      }));
      callback(root26904); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes18151;
      nodes18151 = node.contents();
      oldNodes.replaceWith(nodes18151);
    }));
    callback(root26901); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes18148;
    nodes18148 = node.contents();
    oldNodes.replaceWith(nodes18148);
  }));
  
  var tmp31981 = mobl.ref(null);
  
  
  var tmp31980 = mobl.ref(null);
  
  
  var tmp31979 = mobl.ref(null);
  
  
  var tmp31978 = mobl.ref(null);
  
  var nodes18153 = $("<span>");
  root26900.append(nodes18153);
  subs__.addSub((mobl.block)(tmp31978, tmp31979, tmp31980, tmp31981, function(_, callback) {
    var root26906 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp31977 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp31993 = result__;
          var result__ = tmp31993;
          tmp31977.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp31994 = result__;
          var result__ = tmp31994;
          tmp31977.set(result__);
          
        });
      }));
      
      
      var node12577 = mobl.loadingSpan();
      root26906.append(node12577);
      var list2839;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2839 = function() {
        var subs__ = listSubs__;
        list2839 = tmp31977.get();
        list2839.list(function(results3039) {
          node12577.empty();
          for(var i2839 = 0; i2839 < results3039.length; i2839++) {
            (function() {
              var iternode2839 = $("<span>");
              node12577.append(iternode2839);
              var episode;
              episode = mobl.ref(mobl.ref(results3039), i2839);
              
              var tmp31974 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp31995 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp31976 = mobl.ref(false);
              
              
              var tmp31975 = mobl.ref(null);
              
              var nodes18154 = $("<span>");
              iternode2839.append(nodes18154);
              subs__.addSub((ui.customItem)(mobl.ref(ui.customItemStyle), mobl.ref(ui.customItemPushedStyle), tmp31974, tmp31975, tmp31976, function(_, callback) {
                var root26907 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp31973 = mobl.ref(null);
                
                
                var tmp31972 = mobl.ref(null);
                
                var nodes18155 = $("<span>");
                root26907.append(nodes18155);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp31972, tmp31973, function(_, callback) {
                  var root26908 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root26908); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes18155;
                  nodes18155 = node.contents();
                  oldNodes.replaceWith(nodes18155);
                }));
                callback(root26907); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes18154;
                nodes18154 = node.contents();
                oldNodes.replaceWith(nodes18154);
              }));
              
              var oldNodes = iternode2839;
              iternode2839 = iternode2839.contents();
              oldNodes.replaceWith(iternode2839);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list2839.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2839(true); }));
          subs__.addSub(tmp31977.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2839(true); }));
        });
      };
      renderList2839();
      
      callback(root26906); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes18153;
    nodes18153 = node.contents();
    oldNodes.replaceWith(nodes18153);
  }));
  callback(root26900); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root26909 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp31983 = mobl.ref(null);
  
  
  var tmp31982 = mobl.ref(null);
  
  var nodes18156 = $("<span>");
  root26909.append(nodes18156);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp31982, tmp31983, function(_, callback) {
    var root26910 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26910); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18156;
    nodes18156 = node.contents();
    oldNodes.replaceWith(nodes18156);
  }));
  callback(root26909); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp31996 = result__;
    var result__ = tmp31996;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root26911 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp31997 = result__;
      var result__ = tmp31997;
      podcasts.set(result__);
      
    });
    
    var tmp31984 = mobl.ref("Loading...");
    
    var nodes18157 = $("<span>");
    root26911.append(nodes18157);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp31984, function(_, callback) {
      var root26912 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes18158 = $("<span>");
      root26912.append(nodes18158);
      subs__.addSub((ui.customMasterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root26913 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root26913); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes18158;
        nodes18158 = node.contents();
        oldNodes.replaceWith(nodes18158);
      }));
      callback(root26912); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes18157;
      nodes18157 = node.contents();
      oldNodes.replaceWith(nodes18157);
    }));
    
    var tmp31986 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         controls.meditate.selectLifeEvent(function(result__) {
                           var tmp31998 = result__;
                           var result__ = tmp31998;
                           lifeEvent.set(result__);
                           var result__ = event;
                           if(result__) {
                             var result__ = ui.startLoading("Loading...", ui.progressStyle);
                             controls.meditate.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                               var tmp31999 = result__;
                               var result__ = tmp31999;
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
    
    
    var tmp31985 = mobl.ref("Refresh");
    
    var nodes18159 = $("<span>");
    root26911.append(nodes18159);
    subs__.addSub((ui.button)(tmp31985, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp31986, function(_, callback) {
      var root26914 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26914); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18159;
      nodes18159 = node.contents();
      oldNodes.replaceWith(nodes18159);
    }));
    callback(root26911); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll5008) {
    coll5008 = coll5008.reverse();
    function processOne628() {
      var podcast;
      podcast = coll5008.pop();
      var result__ = front.add(podcast);
      
      if(coll5008.length > 0) processOne628(); else rest628();
      
    }
    function rest628() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll5008.length > 0) processOne628(); else rest628();
  });
  
};

