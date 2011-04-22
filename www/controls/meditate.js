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
           var tmp10930 = result__;
           var result__ = tmp10930.feed;
           var tmp10929 = result__;
           var result__ = tmp10929.entry;
           var tmp10928 = result__;
           var result__ = tmp10928;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll854) {
             coll854 = coll854.reverse();
             function processOne431() {
               var result;
               result = coll854.pop();
               var result__ = mobl.instantiate(controls.meditate.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll854.length > 0) processOne431(); else rest431();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll854.length > 0) processOne431(); else rest431();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll854.length > 0) processOne431(); else rest431();
                     
                   }
                 }
               }
             }
             function rest431() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll854.length > 0) processOne431(); else rest431();
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
  keywords.split(",", 1000).list(function(coll855) {
    coll855 = coll855.reverse();
    function processOne432() {
      var keyword;
      keyword = coll855.pop();
      mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + keyword + "'", function(result__) {
        var tmp10931 = result__;
        var result__ = tmp10931;
        var resource = result__;
        var result__ = resource && resource.json && resource.json.json;
        if(result__) {
          var result__ = resource.json.json;
          resource.json.json.list(function(coll856) {
            coll856 = coll856.reverse();
            function processOne433() {
              var podcast;
              podcast = coll856.pop();
              var result__ = podcast.title != "" && podcast.url != "";
              if(result__) {
                var result__ = podcasts.add(mobl.instantiate(controls.meditate.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
                
                if(coll856.length > 0) processOne433(); else rest433();
                
              } else {
                {
                  
                  if(coll856.length > 0) processOne433(); else rest433();
                  
                }
              }
            }
            function rest433() {
              
              if(coll855.length > 0) processOne432(); else rest432();
              
            }
            if(coll856.length > 0) processOne433(); else rest433();
          });
          
        } else {
          {
            
            if(coll855.length > 0) processOne432(); else rest432();
            
          }
        }
      });
    }
    function rest432() {
      podcasts.count(function(result__) {
        var tmp10933 = result__;
        var result__ = tmp10933 == 0;
        var tmp10932 = result__;
        var result__ = tmp10932;
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
    if(coll855.length > 0) processOne432(); else rest432();
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
  var root5104 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp10864 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp10864.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node1159 = $("<span>");
  root5104.append(node1159);
  var condSubs289 = new mobl.CompSubscription();
  subs__.addSub(condSubs289);
  var oldValue289;
  var renderCond289 = function() {
    var value569 = tmp10864.get();
    if(oldValue289 === value569) return;
    oldValue289 = value569;
    var subs__ = condSubs289;
    subs__.unsubscribe();
    node1159.empty();
    if(value569) {
      
      var tmp10862 = mobl.ref(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
      subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
        tmp10862.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
      }));
      subs__.addSub(audio.addEventListener('change', function() {
        tmp10862.set(controls.meditate.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
      }));
      
      
      var tmp10863 = mobl.ref(null);
      
      var nodes4031 = $("<span>");
      node1159.append(nodes4031);
      subs__.addSub((ui.header)(tmp10862, tmp10863, function(_, callback) {
        var root5105 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10860 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             var result__ = audio.get().destroy();
                             if(screenCallback) screenCallback();
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10861 = mobl.ref(mobl._("Back", []));
        
        var nodes4032 = $("<span>");
        root5105.append(nodes4032);
        subs__.addSub((ui.backButton)(tmp10861, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10860, function(_, callback) {
          var root5106 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5106); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4032;
          nodes4032 = node.contents();
          oldNodes.replaceWith(nodes4032);
        }));
        callback(root5105); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4031;
        nodes4031 = node.contents();
        oldNodes.replaceWith(nodes4031);
      }));
      
      
    } else {
      
    }
  };
  renderCond289();
  subs__.addSub(tmp10864.addEventListener('change', function() {
    renderCond289();
  }));
  
  
  var tmp10880 = mobl.ref(null);
  
  
  var tmp10879 = mobl.ref(null);
  
  
  var tmp10878 = mobl.ref(null);
  
  
  var tmp10877 = mobl.ref(null);
  
  var nodes4033 = $("<span>");
  root5104.append(nodes4033);
  subs__.addSub((mobl.block)(tmp10877, tmp10878, tmp10879, tmp10880, function(_, callback) {
    var root5107 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp10876 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp10876.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node1160 = $("<span>");
    root5107.append(node1160);
    var condSubs290 = new mobl.CompSubscription();
    subs__.addSub(condSubs290);
    var oldValue290;
    var renderCond290 = function() {
      var value570 = tmp10876.get();
      if(oldValue290 === value570) return;
      oldValue290 = value570;
      var subs__ = condSubs290;
      subs__.unsubscribe();
      node1160.empty();
      if(value570) {
        
        var tmp10871 = mobl.ref(false);
        
        
        var tmp10870 = mobl.ref(null);
        
        
        var tmp10869 = mobl.ref(null);
        
        var nodes4034 = $("<span>");
        node1160.append(nodes4034);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10869, tmp10870, tmp10871, function(_, callback) {
          var root5108 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp10866 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp10865 = mobl.ref("Play");
          
          var nodes4035 = $("<span>");
          root5108.append(nodes4035);
          subs__.addSub((ui.button)(tmp10865, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10866, function(_, callback) {
            var root5109 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5109); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4035;
            nodes4035 = node.contents();
            oldNodes.replaceWith(nodes4035);
          }));
          
          var tmp10868 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp10867 = mobl.ref("Pause");
          
          var nodes4036 = $("<span>");
          root5108.append(nodes4036);
          subs__.addSub((ui.button)(tmp10867, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10868, function(_, callback) {
            var root5110 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5110); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4036;
            nodes4036 = node.contents();
            oldNodes.replaceWith(nodes4036);
          }));
          callback(root5108); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4034;
          nodes4034 = node.contents();
          oldNodes.replaceWith(nodes4034);
        }));
        
        var tmp10875 = mobl.ref(false);
        
        
        var tmp10874 = mobl.ref(null);
        
        
        var tmp10873 = mobl.ref(null);
        
        var nodes4037 = $("<span>");
        node1160.append(nodes4037);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10873, tmp10874, tmp10875, function(_, callback) {
          var root5111 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp10872 = mobl.ref("_blank");
          
          var nodes4038 = $("<span>");
          root5111.append(nodes4038);
          subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp10872, function(_, callback) {
            var root5112 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            root5112.append("Download MP3");
            callback(root5112); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4038;
            nodes4038 = node.contents();
            oldNodes.replaceWith(nodes4038);
          }));
          callback(root5111); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4037;
          nodes4037 = node.contents();
          oldNodes.replaceWith(nodes4037);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond290();
    subs__.addSub(tmp10876.addEventListener('change', function() {
      renderCond290();
    }));
    
    callback(root5107); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4033;
    nodes4033 = node.contents();
    oldNodes.replaceWith(nodes4033);
  }));
  callback(root5104); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastDetail = function(podcast, elements, callback) {
  var root5113 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10910 = mobl.ref(null);
  
  
  var tmp10909 = mobl.ref(null);
  
  
  var tmp10908 = mobl.ref(null);
  
  
  var tmp10907 = mobl.ref(null);
  
  var nodes4039 = $("<span>");
  root5113.append(nodes4039);
  subs__.addSub((mobl.block)(tmp10907, tmp10908, tmp10909, tmp10910, function(_, callback) {
    var root5114 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp10889 = mobl.ref(false);
    
    
    var tmp10888 = mobl.ref(null);
    
    
    var tmp10887 = mobl.ref(null);
    
    var nodes4040 = $("<span>");
    root5114.append(nodes4040);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10887, tmp10888, tmp10889, function(_, callback) {
      var root5115 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10881 = mobl.ref(120);
      
      
      var tmp10886 = mobl.ref(null);
      
      
      var tmp10885 = mobl.ref(null);
      
      
      var tmp10884 = mobl.ref(null);
      
      
      var tmp10883 = mobl.ref(null);
      
      
      var tmp10882 = mobl.ref(null);
      
      var nodes4041 = $("<span>");
      root5115.append(nodes4041);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp10881, tmp10882, tmp10883, tmp10884, tmp10885, tmp10886, function(_, callback) {
        var root5116 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5116); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4041;
        nodes4041 = node.contents();
        oldNodes.replaceWith(nodes4041);
      }));
      callback(root5115); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4040;
      nodes4040 = node.contents();
      oldNodes.replaceWith(nodes4040);
    }));
    
    var tmp10895 = mobl.ref(false);
    
    
    var tmp10894 = mobl.ref(null);
    
    
    var tmp10893 = mobl.ref(null);
    
    var nodes4042 = $("<span>");
    root5114.append(nodes4042);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10893, tmp10894, tmp10895, function(_, callback) {
      var root5117 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10890 = mobl.ref(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp10890.set(controls.meditate.blank(podcast.get().title) ? "Unknown" : podcast.get().title);
      }));
      
      
      var tmp10892 = mobl.ref(null);
      
      
      var tmp10891 = mobl.ref(null);
      
      var nodes4043 = $("<span>");
      root5117.append(nodes4043);
      subs__.addSub((mobl.label)(tmp10890, tmp10891, tmp10892, function(_, callback) {
        var root5118 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5118); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4043;
        nodes4043 = node.contents();
        oldNodes.replaceWith(nodes4043);
      }));
      callback(root5117); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4042;
      nodes4042 = node.contents();
      oldNodes.replaceWith(nodes4042);
    }));
    
    var tmp10901 = mobl.ref(false);
    
    
    var tmp10900 = mobl.ref(null);
    
    
    var tmp10899 = mobl.ref(null);
    
    var nodes4044 = $("<span>");
    root5114.append(nodes4044);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10899, tmp10900, tmp10901, function(_, callback) {
      var root5119 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10896 = mobl.ref(controls.meditate.blank(podcast.get().description) ? "Unknown" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp10896.set(controls.meditate.blank(podcast.get().description) ? "Unknown" : podcast.get().description);
      }));
      
      
      var tmp10898 = mobl.ref(null);
      
      
      var tmp10897 = mobl.ref(null);
      
      var nodes4045 = $("<span>");
      root5119.append(nodes4045);
      subs__.addSub((mobl.label)(tmp10896, tmp10897, tmp10898, function(_, callback) {
        var root5120 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5120); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4045;
        nodes4045 = node.contents();
        oldNodes.replaceWith(nodes4045);
      }));
      callback(root5119); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4044;
      nodes4044 = node.contents();
      oldNodes.replaceWith(nodes4044);
    }));
    
    var tmp10906 = mobl.ref(false);
    
    
    var tmp10905 = mobl.ref(null);
    
    
    var tmp10904 = mobl.ref(null);
    
    var nodes4046 = $("<span>");
    root5114.append(nodes4046);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10904, tmp10905, tmp10906, function(_, callback) {
      var root5121 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10902 = mobl.ref(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp10902.set(controls.meditate.blank(podcast.get().website) ? "Unknown" : podcast.get().website);
      }));
      
      
      var tmp10903 = mobl.ref("_blank");
      
      var nodes4047 = $("<span>");
      root5121.append(nodes4047);
      subs__.addSub((mobl.link)(tmp10902, tmp10903, function(_, callback) {
        var root5122 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5122); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4047;
        nodes4047 = node.contents();
        oldNodes.replaceWith(nodes4047);
      }));
      callback(root5121); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4046;
      nodes4046 = node.contents();
      oldNodes.replaceWith(nodes4046);
    }));
    callback(root5114); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4039;
    nodes4039 = node.contents();
    oldNodes.replaceWith(nodes4039);
  }));
  
  var tmp10922 = mobl.ref(null);
  
  
  var tmp10921 = mobl.ref(null);
  
  
  var tmp10920 = mobl.ref(null);
  
  
  var tmp10919 = mobl.ref(null);
  
  var nodes4048 = $("<span>");
  root5113.append(nodes4048);
  subs__.addSub((mobl.block)(tmp10919, tmp10920, tmp10921, tmp10922, function(_, callback) {
    var root5123 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp10911 = mobl.ref("Episodes");
    
    
    var tmp10912 = mobl.ref(null);
    
    var nodes4049 = $("<span>");
    root5123.append(nodes4049);
    subs__.addSub((ui.header)(tmp10911, tmp10912, function(_, callback) {
      var root5124 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5124); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4049;
      nodes4049 = node.contents();
      oldNodes.replaceWith(nodes4049);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp10918 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp10934 = result__;
          var result__ = tmp10934;
          tmp10918.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp10935 = result__;
          var result__ = tmp10935;
          tmp10918.set(result__);
          
        });
      }));
      
      
      var node1161 = mobl.loadingSpan();
      root5123.append(node1161);
      var list324;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList324 = function() {
        var subs__ = listSubs__;
        list324 = tmp10918.get();
        list324.list(function(results1735) {
          node1161.empty();
          for(var i324 = 0; i324 < results1735.length; i324++) {
            (function() {
              var iternode324 = $("<span>");
              node1161.append(iternode324);
              var episode;
              episode = mobl.ref(mobl.ref(results1735), i324);
              
              var tmp10915 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('controls.meditate.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp10936 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp10917 = mobl.ref(false);
              
              
              var tmp10916 = mobl.ref(null);
              
              var nodes4050 = $("<span>");
              iternode324.append(nodes4050);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10915, tmp10916, tmp10917, function(_, callback) {
                var root5125 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp10914 = mobl.ref(null);
                
                
                var tmp10913 = mobl.ref(null);
                
                var nodes4051 = $("<span>");
                root5125.append(nodes4051);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp10913, tmp10914, function(_, callback) {
                  var root5126 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5126); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4051;
                  nodes4051 = node.contents();
                  oldNodes.replaceWith(nodes4051);
                }));
                callback(root5125); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4050;
                nodes4050 = node.contents();
                oldNodes.replaceWith(nodes4050);
              }));
              
              var oldNodes = iternode324;
              iternode324 = iternode324.contents();
              oldNodes.replaceWith(iternode324);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list324.addEventListener('change', function() { listSubs__.unsubscribe(); renderList324(true); }));
          subs__.addSub(tmp10918.addEventListener('change', function() { listSubs__.unsubscribe(); renderList324(true); }));
        });
      };
      renderList324();
      
      callback(root5123); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4048;
    nodes4048 = node.contents();
    oldNodes.replaceWith(nodes4048);
  }));
  callback(root5113); return subs__;
  
  
  return subs__;
};

controls.meditate.podcastItem = function(podcast, elements, callback) {
  var root5127 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10924 = mobl.ref(null);
  
  
  var tmp10923 = mobl.ref(null);
  
  var nodes4052 = $("<span>");
  root5127.append(nodes4052);
  subs__.addSub((mobl.label)(mobl.ref(podcast, 'title'), tmp10923, tmp10924, function(_, callback) {
    var root5128 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5128); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4052;
    nodes4052 = node.contents();
    oldNodes.replaceWith(nodes4052);
  }));
  callback(root5127); return subs__;
  
  return subs__;
};
controls.meditate.selectLifeEvent = function(callback) {
  var __this = this;
  models.lifeevents.LifeEvent.all().order("date", false).one(function(result__) {
    var tmp10937 = result__;
    var result__ = tmp10937;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


controls.meditate.meditate = function(elements, callback) {
  var root5129 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  controls.meditate.selectLifeEvent(function(result__) {
    var lifeEvent = mobl.ref(result__);
    
    var keywords = mobl.ref(lifeEvent.get() ? lifeEvent.get().keywords : "");
    
    var podcasts = mobl.ref(null);
    controls.meditate.fetchPodcasts(keywords.get().toString(), function(result__) {
      var tmp10938 = result__;
      var result__ = tmp10938;
      podcasts.set(result__);
      
    });
    
    var tmp10926 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         controls.meditate.selectLifeEvent(function(result__) {
                           var tmp10939 = result__;
                           var result__ = tmp10939;
                           lifeEvent.set(result__);
                           var result__ = event;
                           if(result__) {
                             var result__ = ui.startLoading("Loading...", ui.progressStyle);
                             controls.meditate.fetchPodcasts(lifeEvent.get().keywords.toString(), function(result__) {
                               var tmp10940 = result__;
                               var result__ = tmp10940;
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
    
    
    var tmp10925 = mobl.ref("Refresh");
    
    var nodes4053 = $("<span>");
    root5129.append(nodes4053);
    subs__.addSub((ui.button)(tmp10925, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10926, function(_, callback) {
      var root5130 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5130); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4053;
      nodes4053 = node.contents();
      oldNodes.replaceWith(nodes4053);
    }));
    
    var tmp10927 = mobl.ref("Loading...");
    
    var nodes4054 = $("<span>");
    root5129.append(nodes4054);
    subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp10927, function(_, callback) {
      var root5131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4055 = $("<span>");
      root5131.append(nodes4055);
      subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(controls.meditate.podcastItem), mobl.ref(controls.meditate.podcastDetail), function(_, callback) {
        var root5132 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5132); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4055;
        nodes4055 = node.contents();
        oldNodes.replaceWith(nodes4055);
      }));
      callback(root5131); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4054;
      nodes4054 = node.contents();
      oldNodes.replaceWith(nodes4054);
    }));
    callback(root5129); return subs__;
    
    
    
  });
  return subs__;
};
controls.meditate.join = function(front, back, callback) {
  var __this = this;
  var result__ = back;
  back.list(function(coll857) {
    coll857 = coll857.reverse();
    function processOne434() {
      var podcast;
      podcast = coll857.pop();
      var result__ = front.add(podcast);
      
      if(coll857.length > 0) processOne434(); else rest434();
      
    }
    function rest434() {
      var result__ = front;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll857.length > 0) processOne434(); else rest434();
  });
  
};

